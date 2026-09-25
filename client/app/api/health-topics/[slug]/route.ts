import { NextRequest, NextResponse } from 'next/server';
import { healthTopics } from '@/lib/healthData';

const BACKEND_API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const { searchParams } = new URL(req.url);
  const lang = searchParams.get('lang') || 'uz';

  try {
    const backendRes = await fetch(`${BACKEND_API}/health-topics/${slug}?lang=${lang}`, {
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

  const topic = healthTopics.find((t) => t.slug === slug || t.id === slug);
  if (!topic) {
    return NextResponse.json({ error: 'Mavzu topilmadi' }, { status: 404 });
  }

  return NextResponse.json({
    status: 'ok',
    data: topic,
  });
}
