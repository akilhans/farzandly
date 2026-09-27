import { NextRequest, NextResponse } from 'next/server';
import { api } from '@/lib/api';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const courses = await api.getCourses({
    ageGroup: searchParams.get('ageGroup') || undefined,
    category: searchParams.get('category') || undefined,
    lang: searchParams.get('lang') || 'uz',
  });

  return NextResponse.json({ success: true, data: courses });
}