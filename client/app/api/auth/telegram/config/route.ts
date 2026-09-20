import { NextResponse } from 'next/server';

export async function GET() {
  const clientId =
    process.env.TELEGRAM_CLIENT_ID ||
    process.env.NEXT_PUBLIC_TELEGRAM_CLIENT_ID ||
    '891291780';

  const redirectUri =
    process.env.TELEGRAM_REDIRECT_URI ||
    'https://farzandly.vercel.app/kirish/callback';

  return NextResponse.json({
    success: true,
    data: {
      clientId,
      redirectUri,
    },
  });
}
