import { NextRequest, NextResponse } from 'next/server';

const BACKEND_API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const body = await req.json().catch(() => ({}));

  try {
    const backendRes = await fetch(`${BACKEND_API}/health-topics/${slug}/quiz`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (backendRes.ok) {
      const data = await backendRes.json();
      return NextResponse.json(data);
    }
  } catch (err) {
    // Fallback
  }

  const xpEarned = body.xpEarned || 10;
  return NextResponse.json({
    success: true,
    message: 'Natija saqlandi (offline / client rejimi)',
    xpEarned,
  });
}
