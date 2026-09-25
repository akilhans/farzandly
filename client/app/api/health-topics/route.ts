import { NextRequest, NextResponse } from 'next/server';
import { healthTopics } from '@/lib/healthData';

const BACKEND_API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'uz';
  const category = searchParams.get('category');

  try {
    const backendRes = await fetch(`${BACKEND_API}/health-topics?lang=${lang}${category ? `&category=${category}` : ''}`, {
      cache: 'no-store',
      headers: { 'Content-Type': 'application/json' },
    });
    if (backendRes.ok) {
      const data = await backendRes.json();
      return NextResponse.json(data);
    }
  } catch (err) {
    // Backend unreachable, fallback below
  }

  let filtered = healthTopics;
  if (category) {
    filtered = filtered.filter((t) => t.category === category);
  }

  return NextResponse.json({
    status: 'ok',
    count: filtered.length,
    data: filtered,
  });
}
