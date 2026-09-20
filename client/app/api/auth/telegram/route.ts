import { NextResponse } from 'next/server';
import { TelegramBotClient } from '@/lib/telegramBot';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { id, username, first_name, last_name, photo_url } = body;

    const telegramId = String(id || Date.now());

    // Fetch from Telegram Bot API if photo or username is not present
    if (telegramId && (!photo_url || !username)) {
      try {
        const botProfile = await TelegramBotClient.fetchCompleteUserProfile(telegramId);
        if (botProfile) {
          if (!username && botProfile.username) username = botProfile.username;
          if (!first_name && botProfile.first_name) first_name = botProfile.first_name;
          if (!last_name && botProfile.last_name) last_name = botProfile.last_name;
          if (!photo_url && botProfile.photoUrl) photo_url = botProfile.photoUrl;
        }
      } catch (e) {
        console.warn('[TelegramBotClient] fetch error:', e);
      }
    }

    const cleanUsername = (username || '').replace(/^@/, '').trim();

    // User's name must sync with Telegram username: @username
    const fullName = cleanUsername
      ? `@${cleanUsername}`
      : (`${first_name || ''} ${last_name || ''}`.trim() || 'Ota-ona');

    // Automatically sync Telegram profile picture
    const finalPhotoUrl =
      photo_url ||
      (cleanUsername ? `https://t.me/i/userpic/320/${cleanUsername}.jpg` : '') ||
      `/api/telegram/avatar/${telegramId}?name=${encodeURIComponent(fullName)}`;

    const user = {
      _id: `tg_${telegramId}`,
      telegramId,
      telegramUsername: cleanUsername,
      name: fullName,
      photoUrl: finalPhotoUrl,
      childAgeGroup: '3-5',
      selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
      dailyGoalMinutes: 10,
      xp: 50,
      streak: 1,
      level: 'O‘rganuvchi',
      completedLessons: [],
      achievements: ['ilk-qadam'],
      subscriptionStatus: 'free',
      authProvider: 'telegram',
    };

    const token = `farzandly_tg_${telegramId}_${Date.now()}`;

    // Optionally forward to Railway backend if configured
    const backendUrl = process.env.BACKEND_API_URL;
    if (backendUrl) {
      fetch(`${backendUrl}/auth/telegram`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: telegramId,
          username: cleanUsername,
          first_name: fullName,
          photo_url: finalPhotoUrl,
        }),
      }).catch((err) => console.warn('[Backend Sync Warning]:', err.message));
    }

    return NextResponse.json({
      success: true,
      message: 'Telegram orqali muvaffaqiyatli kirdingiz! Xush kelibsiz.',
      data: {
        token,
        user,
      },
    });
  } catch (error: any) {
    console.error('[Telegram Direct Auth Route Error]:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Kirishda xatolik yuz berdi' },
      { status: 500 }
    );
  }
}
