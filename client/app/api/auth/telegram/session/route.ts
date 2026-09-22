import { NextRequest, NextResponse } from 'next/server';

const API_BASE = (
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:5000/api'
).replace(/\/$/, '');

/**
 * POST /api/auth/telegram/session
 * Creates a new bot authorization session (returns sessionId, botUrl, qrCodeUrl)
 */
export async function POST() {
  try {
    const res = await fetch(`${API_BASE}/auth/telegram/session`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error('[Session Route POST Error]:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: 'Telegram sessiyasini yaratishda server bilan bog‘lanishda xatolik',
        error: error.message,
      },
      { status: 502 }
    );
  }
}

/**
 * GET /api/auth/telegram/session?sessionId=...
 * Checks the status of a bot authorization session
 */
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { success: false, message: 'sessionId ko‘rsatilmadi' },
        { status: 400 }
      );
    }

    const res = await fetch(`${API_BASE}/auth/telegram/session/${encodeURIComponent(sessionId)}`, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error('[Session Route GET Error]:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: 'Sessiyani tekshirishda server bilan bog‘lanishda xatolik',
        error: error.message,
      },
      { status: 502 }
    );
  }
}
