import { Request, Response } from 'express';
import crypto from 'crypto';
import { DataService } from '../services/dataService.js';
import { TelegramBotService } from '../services/telegramBotService.js';
import { TelegramSessionService } from '../services/telegramSessionService.js';
import { TelegramBotEngine } from '../services/telegramBotEngine.js';
import {
  hashPassword,
  verifyPassword,
  signSessionToken,
  verifyToken,
  verifyTelegramWidget,
  verifyTelegramInitData,
} from '../lib/security.js';
import { toPublicUser } from '../lib/premium.js';
import { z } from 'zod';

function session(user: any) {
  return { token: signSessionToken(String(user._id)), user: toPublicUser(user) };
}

function displayNameFor(username: string, first?: string, last?: string) {
  return username ? `@${username}` : `${first || ''} ${last || ''}`.trim() || 'Ota-ona';
}

function photoFor(telegramId: string, username: string, name: string, photoUrl?: string) {
  return (
    photoUrl ||
    (username ? `https://t.me/i/userpic/320/${username}.jpg` : '') ||
    `/api/auth/telegram/avatar/${telegramId}?name=${encodeURIComponent(name)}`
  );
}

/** Upserts a Telegram account from already-verified Telegram data. */
async function signInTelegramUser(tg: { id: string | number; username?: string; first_name?: string; last_name?: string; photo_url?: string }) {
  const telegramId = String(tg.id);
  const username = (tg.username || '').replace(/^@/, '').trim();
  const name = displayNameFor(username, tg.first_name, tg.last_name);
  const user = await DataService.upsertTelegramUser({
    telegramId,
    telegramUsername: username,
    name,
    firstName: tg.first_name,
    lastName: tg.last_name,
    photoUrl: photoFor(telegramId, username, name, tg.photo_url),
  });
  return user;
}

const TELEGRAM_CLIENT_ID = () => process.env.TELEGRAM_CLIENT_ID || '';
const TELEGRAM_REDIRECT_URI = () =>
  process.env.TELEGRAM_REDIRECT_URI || `${(process.env.CLIENT_URL || 'https://farzandly.uz').replace(/\/$/, '')}/kirish/callback`;

export class AuthController {
  /**
   * Create a new Telegram Bot deep-link login session (https://t.me/<bot>?start=<sessionId>)
   * POST /api/auth/telegram/session
   */
  static async createBotSession(req: Request, res: Response) {
    try {
      const s = TelegramSessionService.createSession(10);
      const botUsername = await TelegramBotEngine.getBotUsername();
      const botUrl = `https://t.me/${botUsername}?start=${s.sessionId}`;
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=1&data=${encodeURIComponent(botUrl)}`;
      res.status(201).json({
        success: true,
        data: { sessionId: s.sessionId, botUsername, botUrl, qrCodeUrl, expiresIn: 600 },
      });
    } catch (error: any) {
      console.error('[createBotSession Error]:', error);
      res.status(500).json({ success: false, message: 'Telegram sessiyasini yaratishda xatolik yuz berdi' });
    }
  }

  /**
   * Poll a bot login session. Once authenticated, the token is handed out exactly once.
   * GET /api/auth/telegram/session/:sessionId
   */
  static async checkBotSession(req: Request, res: Response) {
    const sessionId = String(req.params.sessionId || req.query.sessionId || '');
    if (!sessionId) return res.status(400).json({ success: false, message: 'sessionId ko‘rsatilmadi' });

    const s = TelegramSessionService.getSession(sessionId);
    if (!s) return res.json({ success: true, status: 'expired', message: 'Sessiya topilmadi yoki muddati tugagan' });

    if (s.status === 'authenticated') {
      TelegramSessionService.consume(sessionId);
      return res.json({ success: true, status: 'authenticated', data: { user: s.user, token: s.token } });
    }
    return res.json({ success: true, status: 'pending' });
  }

  /** Public OIDC configuration (client id + redirect). No secrets. */
  static async getConfig(req: Request, res: Response) {
    res.json({ success: true, data: { clientId: TELEGRAM_CLIENT_ID(), redirectUri: TELEGRAM_REDIRECT_URI() } });
  }

  /** Builds the Telegram OAuth URL. Redirect URI is fixed server-side (not taken from the query). */
  static async getLoginUrl(req: Request, res: Response) {
    const clientId = TELEGRAM_CLIENT_ID();
    if (!clientId) return res.status(503).json({ success: false, message: 'TELEGRAM_CLIENT_ID sozlanmagan' });
    const redirectUri = TELEGRAM_REDIRECT_URI();
    const state = crypto.randomBytes(16).toString('hex');
    const authUrl = `https://oauth.telegram.org/auth?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=openid+profile&state=${state}`;
    res.json({ success: true, data: { authUrl, state, clientId, redirectUri } });
  }

  /**
   * Exchange a Telegram OIDC authorization code for a Farzandly session.
   * The code is exchanged server-to-server with our client secret, so the returned claims are trusted.
   * POST /api/auth/telegram/exchange
   */
  static async exchangeCode(req: Request, res: Response) {
    const parsed = z.object({ code: z.string().min(1).max(2048) }).safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: 'Avtorizatsiya kodi majburiy' });

    const clientId = TELEGRAM_CLIENT_ID();
    const clientSecret = process.env.TELEGRAM_CLIENT_SECRET;
    if (!clientId || !clientSecret) {
      return res.status(503).json({ success: false, message: 'Telegram OAuth sozlanmagan' });
    }

    try {
      const tokenResponse = await fetch('https://oauth.telegram.org/token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: parsed.data.code,
          client_id: clientId,
          client_secret: clientSecret,
          redirect_uri: TELEGRAM_REDIRECT_URI(),
        }).toString(),
        signal: AbortSignal.timeout(10000),
      });

      const tokenData: any = await tokenResponse.json().catch(() => ({}));
      if (!tokenResponse.ok || !tokenData.id_token) {
        console.error('[Telegram OIDC] Token exchange failed:', tokenResponse.status, tokenData?.error);
        return res.status(400).json({
          success: false,
          message: tokenData.error_description || tokenData.error || 'Telegram orqali token olishda xatolik',
        });
      }

      const claims = JSON.parse(Buffer.from(String(tokenData.id_token).split('.')[1] || '', 'base64url').toString('utf8') || '{}');
      if (!claims.sub) return res.status(400).json({ success: false, message: 'Telegram foydalanuvchi ID topilmadi' });
      if (claims.aud && String(claims.aud) !== clientId) {
        return res.status(400).json({ success: false, message: 'Token boshqa ilova uchun berilgan' });
      }

      const telegramId = String(claims.sub);
      let tg: any = {
        id: telegramId,
        username: claims.preferred_username || claims.username || '',
        first_name: claims.given_name || claims.first_name || '',
        last_name: claims.family_name || claims.last_name || '',
        photo_url: claims.picture || '',
      };
      try {
        const profile = await TelegramBotService.fetchCompleteUserProfile(telegramId);
        if (profile) {
          tg = {
            ...tg,
            username: profile.username || tg.username,
            first_name: profile.first_name || tg.first_name,
            last_name: profile.last_name || tg.last_name,
            photo_url: profile.photoUrl || tg.photo_url,
          };
        }
      } catch {
        // profile enrichment is optional
      }

      const user = await signInTelegramUser(tg);
      TelegramBotService.sendLoginNotification(telegramId, (user as any).name).catch(() => {});
      res.json({ success: true, message: 'Telegram orqali muvaffaqiyatli kirdingiz! Xush kelibsiz.', data: session(user) });
    } catch (error) {
      console.error('[Telegram OIDC Exchange Error]:', error);
      res.status(500).json({ success: false, message: 'Telegram kodi almashinuvida ichki server xatoligi yuz berdi' });
    }
  }

  /**
   * Telegram Login Widget. The signature is REQUIRED and checked against the bot token.
   * POST /api/auth/telegram
   */
  static async telegramAuth(req: Request, res: Response) {
    const body = req.body || {};
    if (!verifyTelegramWidget(body)) {
      return res.status(401).json({ success: false, code: 'BAD_SIGNATURE', message: 'Telegram ma’lumotlari tasdiqlanmadi. Qaytadan kiring.' });
    }
    try {
      const user = await signInTelegramUser(body);
      res.json({ success: true, message: 'Telegram orqali muvaffaqiyatli kirdingiz! Xush kelibsiz.', data: session(user) });
    } catch (error) {
      console.error('[Auth Error]:', error);
      res.status(500).json({ success: false, message: 'Telegram orqali kirishda xatolik yuz berdi' });
    }
  }

  /**
   * Telegram Mini App login with signed initData.
   * POST /api/auth/telegram/miniapp  { initData }
   */
  static async miniAppAuth(req: Request, res: Response) {
    const initData = typeof req.body?.initData === 'string' ? req.body.initData : '';
    const tgUser = verifyTelegramInitData(initData);
    if (!tgUser) {
      return res.status(401).json({ success: false, code: 'BAD_SIGNATURE', message: 'Mini App ma’lumotlari tasdiqlanmadi' });
    }
    try {
      const user = await signInTelegramUser(tgUser as { id: string | number });
      res.json({ success: true, data: session(user) });
    } catch (error) {
      console.error('[MiniApp Auth Error]:', error);
      res.status(500).json({ success: false, message: 'Kirishda xatolik yuz berdi' });
    }
  }

  /**
   * Redeem the bot's signed one-click login ticket (15 minutes).
   * POST /api/auth/telegram/ticket  { ticket }
   */
  static async redeemTicket(req: Request, res: Response) {
    const payload = verifyToken(req.body?.ticket, 'ticket');
    if (!payload?.tg) {
      return res.status(401).json({ success: false, code: 'BAD_TICKET', message: 'Havola eskirgan. Botdan yangi havola oling.' });
    }
    const user = await DataService.getUserByIdOrTelegram(payload.tg);
    if (!user || String((user as any).telegramId) !== payload.tg) {
      return res.status(404).json({ success: false, message: 'Foydalanuvchi topilmadi' });
    }
    res.json({ success: true, data: session(user) });
  }

  /** GET /api/auth/me — the signed-in user (from the token only). */
  static async getMe(req: Request, res: Response) {
    if (!req.user) return res.status(401).json({ success: false, code: 'AUTH_REQUIRED', message: 'Iltimos, qaytadan tizimga kiring' });
    res.json({ success: true, data: toPublicUser(req.user) });
  }

  /** GET /api/auth/telegram/avatar/:id — only numeric Telegram ids, cached. */
  static async getUserAvatar(req: Request, res: Response) {
    const { id } = req.params;
    const nameParam = String(req.query.name || 'Ota-ona').slice(0, 60);
    const fallbackUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameParam)}&background=229ED9&color=fff&bold=true`;
    if (!/^\d{3,20}$/.test(id)) return res.redirect(fallbackUrl);
    try {
      const photoUrl = await TelegramBotService.getUserPhotoUrl(id);
      if (photoUrl) {
        const imgRes = await fetch(photoUrl, { signal: AbortSignal.timeout(8000) });
        if (imgRes.ok) {
          res.setHeader('Content-Type', imgRes.headers.get('content-type') || 'image/jpeg');
          res.setHeader('Cache-Control', 'public, max-age=86400');
          return res.send(Buffer.from(await imgRes.arrayBuffer()));
        }
      }
      return res.redirect(fallbackUrl);
    } catch {
      return res.redirect(fallbackUrl);
    }
  }

  /** GET /api/auth/telegram/user/:id — admin only (see routes). */
  static async getTelegramUserProfile(req: Request, res: Response) {
    try {
      const profile = await TelegramBotService.fetchCompleteUserProfile(req.params.id);
      if (!profile) return res.status(404).json({ success: false, message: 'Telegram profili topilmadi' });
      res.json({ success: true, data: profile });
    } catch (error: any) {
      res.status(500).json({ success: false, message: 'Xatolik' });
    }
  }

  /** POST /api/auth/email/register */
  static async emailRegister(req: Request, res: Response) {
    const parsed = z
      .object({
        name: z.string().trim().max(80).optional(),
        email: z.string().trim().toLowerCase().email('Email manzili noto‘g‘ri'),
        password: z.string().min(8, 'Parol kamida 8 ta belgidan iborat bo‘lishi kerak').max(200),
      })
      .safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, message: parsed.error.errors[0]?.message || 'Ma’lumotlar noto‘g‘ri' });
    }
    const { name, email, password } = parsed.data;
    try {
      const user = await DataService.createOrUpdateEmailUser({
        name: name || email.split('@')[0],
        email,
        passwordHash: hashPassword(password),
      });
      res.json({ success: true, message: 'Muvaffaqiyatli ro‘yxatdan o‘tdingiz', data: session(user) });
    } catch (error: any) {
      const duplicate = /allaqachon/.test(error?.message || '') || error?.code === 11000;
      if (!duplicate) console.error('[Email Register Error]:', error);
      res.status(duplicate ? 409 : 500).json({
        success: false,
        message: duplicate ? 'Bu email manzili allaqachon ro‘yxatdan o‘tgan' : 'Ro‘yxatdan o‘tishda xatolik yuz berdi',
      });
    }
  }

  /** POST /api/auth/email/login */
  static async emailLogin(req: Request, res: Response) {
    const parsed = z
      .object({ email: z.string().trim().toLowerCase().email(), password: z.string().min(1).max(200) })
      .safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: 'Email va parol kiritilishi shart' });
    try {
      const user = await DataService.verifyEmailUser(parsed.data.email, parsed.data.password, verifyPassword, hashPassword);
      if (!user) return res.status(401).json({ success: false, message: 'Email yoki parol noto‘g‘ri' });
      res.json({ success: true, message: 'Xush kelibsiz!', data: session(user) });
    } catch (error: any) {
      console.error('[Email Login Error]:', error);
      res.status(500).json({ success: false, message: 'Kirishda xatolik yuz berdi' });
    }
  }

  /** Tokens are stateless; the client drops its copy. */
  static async logout(req: Request, res: Response) {
    res.json({ success: true, message: 'Muvaffaqiyatli chiqildi' });
  }
}
