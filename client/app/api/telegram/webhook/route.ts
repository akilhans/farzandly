import { NextRequest, NextResponse } from 'next/server';

/**
 * The bot logic lives in exactly one place: server/src/services/telegramBotEngine.ts.
 * This route only forwards Telegram updates to it, so the bot always serves the same
 * lessons, articles, premium rules and reminders as the platform.
 */
const API_BASE = (process.env.API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api').replace(/\/$/, '');

export async function POST(req: NextRequest) {
  try {
    const update = await req.json();
    // Respond 200 to Telegram regardless, otherwise it keeps retrying the same update
    const res = await fetch(`${API_BASE}/telegram/webhook`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Pass Telegram's secret through so the API can verify the update came from Telegram.
        'X-Telegram-Bot-Api-Secret-Token': req.headers.get('x-telegram-bot-api-secret-token') || '',
      },
      body: JSON.stringify(update),
      signal: AbortSignal.timeout(8000),
    });
    return NextResponse.json({ ok: res.ok });
  } catch (err) {
    console.error('[TelegramWebhook proxy]', err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}

export async function GET() {
  return NextResponse.json({ service: 'Telegram webhook proxy' });
}
