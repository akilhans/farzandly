import { NextRequest, NextResponse } from 'next/server';

const API_BASE = (
  process.env.API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:5000/api'
).replace(/\/$/, '');

/**
 * GET /api/auth/telegram/session/[id]
 */
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    if (!id) {
      return NextResponse.json(
        { success: false, message: 'Session ID kiritilmadi' },
        { status: 400 }
      );
    }

    const res = await fetch(`${API_BASE}/auth/telegram/session/${encodeURIComponent(id)}`, {
      headers: { 'Content-Type': 'application/json' },
      cache: 'no-store',
      signal: AbortSignal.timeout(8000),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error: any) {
    console.error('[Session [id] Route GET Error]:', error.message);
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
