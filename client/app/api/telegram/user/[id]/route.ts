import { NextRequest, NextResponse } from 'next/server';
import { TelegramBotClient } from '@/lib/telegramBot';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    if (!id) {
      return NextResponse.json({ success: false, message: 'User ID talab qilinadi' }, { status: 400 });
    }

    const profile = await TelegramBotClient.fetchCompleteUserProfile(id);
    if (!profile) {
      return NextResponse.json({ success: false, message: 'Foydalanuvchi topilmadi' }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: profile,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Xatolik yuz berdi' },
      { status: 500 }
    );
  }
}
