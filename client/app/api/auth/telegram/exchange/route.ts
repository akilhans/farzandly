import { NextResponse } from 'next/server';
import { TelegramBotClient } from '@/lib/telegramBot';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { code, redirectUri, clientId } = body;

    if (!code) {
      return NextResponse.json(
        { success: false, message: 'Avtorizatsiya kodi topilmadi' },
        { status: 400 }
      );
    }

    const resolvedClientId =
      clientId ||
      process.env.TELEGRAM_CLIENT_ID ||
      process.env.NEXT_PUBLIC_TELEGRAM_CLIENT_ID ||
      '891291780';

    const clientSecret =
      process.env.TELEGRAM_CLIENT_SECRET ||
      'O8WVosrTnxL4eEKz42Z14G3b3QoPph_IWSonUx7mwjJ_Nl5o2IWKbw';

    const resolvedRedirectUri =
      redirectUri ||
      process.env.TELEGRAM_REDIRECT_URI ||
      'https://farzandly.vercel.app/kirish/callback';

    console.log('[Telegram OIDC Vercel] Exchanging code...', {
      clientId: resolvedClientId,
      redirectUri: resolvedRedirectUri,
    });

    // Request token from official Telegram OIDC endpoint
    const tokenResponse = await fetch('https://oauth.telegram.org/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: resolvedClientId,
        client_secret: clientSecret,
        redirect_uri: resolvedRedirectUri,
      }).toString(),
    });

    const responseText = await tokenResponse.text();
    let tokenData: any;
    try {
      tokenData = JSON.parse(responseText);
    } catch {
      tokenData = { raw: responseText };
    }

    if (!tokenResponse.ok) {
      console.error('[Telegram OIDC Vercel] Token error:', tokenResponse.status, tokenData);
      return NextResponse.json(
        {
          success: false,
          message:
            tokenData.error_description ||
            tokenData.error ||
            'Telegram orqali token olishda xatolik yuz berdi',
          details: tokenData,
        },
        { status: tokenResponse.status }
      );
    }

    // Parse ID Token JWT claims with normalized base64url padding
    let claims: Record<string, any> = {};
    if (tokenData.id_token) {
      try {
        const parts = tokenData.id_token.split('.');
        if (parts.length >= 2) {
          let base64 = parts[1].replace(/-/g, '+').replace(/_/g, '/');
          while (base64.length % 4) {
            base64 += '=';
          }
          claims = JSON.parse(Buffer.from(base64, 'base64').toString('utf8'));
        }
      } catch (e) {
        console.warn('[Telegram OIDC] JWT payload decode error:', e);
      }
    }

    console.log('[Telegram OIDC Vercel] Claims extracted:', {
      sub: claims.sub,
      name: claims.name,
      preferred_username: claims.preferred_username,
      first_name: claims.first_name || claims.given_name,
      last_name: claims.last_name || claims.family_name,
      picture: claims.picture ? '[FOUND]' : '[NOT_PROVIDED]',
    });

    const telegramId = String(claims.sub || claims.id || tokenData.user_id || `tg_${Date.now()}`);

    let rawUsername =
      claims.preferred_username ||
      claims.username ||
      claims.user_name ||
      tokenData.username ||
      (tokenData.user && tokenData.user.username) ||
      '';

    let rawFirstName =
      claims.first_name ||
      claims.given_name ||
      (tokenData.user && tokenData.user.first_name) ||
      '';

    let rawLastName =
      claims.last_name ||
      claims.family_name ||
      (tokenData.user && tokenData.user.last_name) ||
      '';

    let rawPhotoUrl =
      claims.picture ||
      claims.photo_url ||
      tokenData.photo_url ||
      (tokenData.user && tokenData.user.photo_url) ||
      '';

    // Query Telegram Bot API for real username, name, and profile photo
    try {
      const botProfile = await TelegramBotClient.fetchCompleteUserProfile(telegramId);
      if (botProfile) {
        if (botProfile.username) rawUsername = botProfile.username;
        if (botProfile.first_name) rawFirstName = botProfile.first_name;
        if (botProfile.last_name) rawLastName = botProfile.last_name;
        if (botProfile.photoUrl) rawPhotoUrl = botProfile.photoUrl;
      }
    } catch (e) {
      console.warn('[TelegramBotClient] fetch error in exchange:', e);
    }

    const cleanUsername = rawUsername.replace(/^@/, '').trim();

    // User's name must sync with Telegram username: @username
    const fullName = cleanUsername
      ? `@${cleanUsername}`
      : (claims.name || `${rawFirstName} ${rawLastName}`.trim() || 'Ota-ona');

    // Automatically sync Telegram profile picture
    const photoUrl =
      rawPhotoUrl ||
      (cleanUsername ? `https://t.me/i/userpic/320/${cleanUsername}.jpg` : '') ||
      `/api/telegram/avatar/${telegramId}?name=${encodeURIComponent(fullName)}`;

    const user = {
      _id: `tg_${telegramId}`,
      telegramId,
      telegramUsername: cleanUsername,
      name: fullName,
      firstName: rawFirstName,
      lastName: rawLastName,
      photoUrl,
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

    // Forward to Railway backend in background if Railway backend URL is configured
    const backendUrl = process.env.BACKEND_API_URL;
    if (backendUrl) {
      fetch(`${backendUrl}/auth/telegram`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: telegramId,
          username: cleanUsername,
          first_name: fullName,
          photo_url: photoUrl,
        }),
      }).catch((err) => console.warn('[Backend Sync Warning]:', err.message));
    }

    return NextResponse.json({
      success: true,
      message: 'Telegram orqali muvaffaqiyatli kirdingiz! Xush kelibsiz.',
      data: {
        token,
        user,
        tokens: {
          accessToken: tokenData.access_token,
          idToken: tokenData.id_token,
          expiresIn: tokenData.expires_in,
        },
      },
    });
  } catch (error: any) {
    console.error('[Telegram OIDC Exchange Route Error]:', error);
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Telegram orqali kirishda ichki xatolik yuz berdi',
      },
      { status: 500 }
    );
  }
}
