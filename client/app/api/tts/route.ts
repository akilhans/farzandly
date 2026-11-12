import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

// Server-side in-memory cache for synthesized audio to prevent duplicate API calls
const audioCache = new Map<string, Buffer>();

// Load Gemini API Key from environment variables
const GEMINI_API_KEY =
  process.env.GEMINI_API_KEY ||
  process.env.GOOGLE_AI_KEY;

function createWavHeader(pcmLength: number, sampleRate = 24000, numChannels = 1, bitsPerSample = 16): Buffer {
  const buffer = Buffer.alloc(44);
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + pcmLength, 4);
  buffer.write('WAVE', 8);
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16);
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(sampleRate * numChannels * (bitsPerSample / 8), 28);
  buffer.writeUInt16LE(numChannels * (bitsPerSample / 8), 32);
  buffer.writeUInt16LE(bitsPerSample, 34);
  buffer.write('data', 36);
  buffer.writeUInt32LE(pcmLength, 40);
  return buffer;
}

const TTS_MODELS = ['gemini-3.8-flash-tts', 'gemini-3.1-flash-tts-preview'];

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

  for (const model of TTS_MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
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
                    voiceName: 'Puck', // Natural, clear voice with excellent Uzbek phonetics
                  },
                },
              },
            },
          }),
        }
      );

      if (!res.ok) {
        continue;
      }

      const data = await res.json();
      const base64Audio = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (!base64Audio) {
        continue;
      }

      const rawBuffer = Buffer.from(base64Audio, 'base64');
      const isWav = rawBuffer.length > 4 && rawBuffer.toString('ascii', 0, 4) === 'RIFF';
      const audioBuffer = isWav ? rawBuffer : Buffer.concat([createWavHeader(rawBuffer.length, 24000, 1, 16), rawBuffer]);

      // Save in server cache (up to 300 items)
      if (audioCache.size > 300) {
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
    } catch {
      continue;
    }
  }

  return NextResponse.json(
    { error: 'Speech synthesis currently unavailable' },
    { status: 503 }
  );
}
