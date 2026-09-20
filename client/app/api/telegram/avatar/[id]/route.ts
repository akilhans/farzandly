import { NextRequest, NextResponse } from 'next/server';
import { TelegramBotClient } from '@/lib/telegramBot';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    if (!id) {
      return new NextResponse('User ID required', { status: 400 });
    }

    // 1. Try to fetch photo via Bot API
    const photoUrl = await TelegramBotClient.getUserPhotoUrl(id);

    if (photoUrl) {
      const imgRes = await fetch(photoUrl);
      if (imgRes.ok) {
        const imageBuffer = await imgRes.arrayBuffer();
        const contentType = imgRes.headers.get('content-type') || 'image/jpeg';

        return new NextResponse(imageBuffer, {
          headers: {
            'Content-Type': contentType,
            'Cache-Control': 'public, max-age=86400, s-maxage=86400',
          },
        });
      }
    }

    // 2. Fallback: redirect to UI avatar
    const nameParam = request.nextUrl.searchParams.get('name') || 'Ota-ona';
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      nameParam
    )}&background=229ED9&color=fff&bold=true`;

    return NextResponse.redirect(fallbackUrl, { status: 302 });
  } catch (error) {
    console.warn('[Avatar Route Error]:', error);
    return new NextResponse('Avatar not found', { status: 404 });
  }
}
