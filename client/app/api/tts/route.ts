import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Server-side in-memory cache for synthesized audio to prevent duplicate API calls
const audioCache = new Map<string, Buffer>();

// Load Gemini API Key from environment variables (local .env.local or Vercel Environment Variables)
const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY ||
  process.env.GOOGLE_AI_KEY;

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const rawText = searchParams.get('text');

  if (!rawText || !rawText.trim()) {
    return NextResponse.json({ error: 'Text parameter is required' }, { status: 400 });
  }

  // Sanitize and limit text length
  const text = rawText.trim().slice(0, 300);
  const cacheKey = text.toLowerCase();

  // Return from in-memory cache if available
  const cached = audioCache.get(cacheKey);
  if (cached) {
    return new NextResponse(new Uint8Array(cached), {
      status: 200,
      headers: {
        'Content-Type': 'audio/wav',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-TTS-Cache': 'HIT',
      },
    });
  }

  if (!GEMINI_API_KEY) {
    return NextResponse.json(
      { error: 'GEMINI_API_KEY is not configured on server' },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash-lite-tts:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text }],
            },
          ],
          generationConfig: {
            responseModalities: ['AUDIO'],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: {
                  voiceName: 'Aoede', // Warm, clear, natural storytelling voice for children
                },
              },
            },
          },
        }),
      }
    );

    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      console.error('Gemini TTS API error:', res.status, errData);
      return NextResponse.json(
        { error: 'TTS generation failed', details: errData },
        { status: res.status }
      );
    }

    const data = await res.json();
    const base64Audio = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      return NextResponse.json(
        { error: 'No audio data returned from model' },
        { status: 502 }
      );
    }

    const audioBuffer = Buffer.from(base64Audio, 'base64');

    // Save in server cache (up to 200 items to avoid excessive memory)
    if (audioCache.size > 200) {
      const firstKey = audioCache.keys().next().value;
      if (firstKey) audioCache.delete(firstKey);
    }
    audioCache.set(cacheKey, audioBuffer);

    return new NextResponse(new Uint8Array(audioBuffer), {
      status: 200,
      headers: {
        'Content-Type': 'audio/wav',
        'Content-Length': String(audioBuffer.length),
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-TTS-Cache': 'MISS',
      },
    });
  } catch (error: any) {
    console.error('TTS Route unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error during speech synthesis' },
      { status: 500 }
    );
  }
}
