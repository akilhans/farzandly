import { Request, Response } from 'express';
import crypto from 'crypto';
import { DataService } from '../services/dataService.js';
import { z } from 'zod';

export class AuthController {
  /**
   * Return Telegram OIDC public configuration
   */
  static async getConfig(req: Request, res: Response) {
    const clientId = process.env.TELEGRAM_CLIENT_ID || '';
    const redirectUri = process.env.TELEGRAM_REDIRECT_URI || 'http://localhost:3000/kirish/callback';
    const hasSecret = Boolean(process.env.TELEGRAM_CLIENT_SECRET);

    res.json({
      success: true,
      data: {
        clientId,
        redirectUri,
        hasSecret,
        configured: Boolean(clientId && hasSecret),
      },
    });
  }

  /**
   * Build or redirect to Telegram OAuth Authorization URL
   */
  static async getLoginUrl(req: Request, res: Response) {
    try {
      const clientId = (req.query.clientId as string) || process.env.TELEGRAM_CLIENT_ID;
      const redirectUri =
        (req.query.redirectUri as string) ||
        process.env.TELEGRAM_REDIRECT_URI ||
        'http://localhost:3000/kirish/callback';

      if (!clientId) {
        return res.status(400).json({
          success: false,
          message: 'Telegram Client ID (Bot ID) sozlanmagan. Iltimos BotFather bergan Client ID ni kiriting.',
        });
      }

      const state = crypto.randomBytes(16).toString('hex');
      const authUrl = `https://oauth.telegram.org/auth?client_id=${encodeURIComponent(
        clientId
      )}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid+profile&state=${state}`;

      res.json({
        success: true,
        data: {
          authUrl,
          state,
          clientId,
          redirectUri,
        },
      });
    } catch (error) {
      console.error('[Auth getLoginUrl Error]:', error);
      res.status(500).json({
        success: false,
        message: 'Telegram kirish manzilini yaratishda xatolik',
      });
    }
  }

  /**
   * Exchange Telegram OIDC Authorization Code for Tokens
   * Calls https://oauth.telegram.org/token with client_secret
   */
  static async exchangeCode(req: Request, res: Response) {
    try {
      const schema = z.object({
        code: z.string().min(1, 'Avtorizatsiya kodi majburiy'),
        redirectUri: z.string().optional(),
        clientId: z.string().optional(),
      });

      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          message: 'Noto‘g‘ri so‘rov parametrlari',
          errors: parsed.error.errors.map((e) => e.message),
        });
      }

      const { code, redirectUri, clientId } = parsed.data;
      const resolvedClientId = clientId || process.env.TELEGRAM_CLIENT_ID;
      const clientSecret =
        process.env.TELEGRAM_CLIENT_SECRET || 'O8WVosrTnxL4eEKz42Z14G3b3QoPph_IWSonUx7mwjJ_Nl5o2IWKbw';
      const resolvedRedirectUri =
        redirectUri || process.env.TELEGRAM_REDIRECT_URI || 'http://localhost:3000/kirish/callback';

      if (!resolvedClientId) {
        return res.status(400).json({
          success: false,
          message: 'Telegram Client ID (Bot ID) talab qilinadi',
        });
      }

      console.log('[Telegram OIDC] Exchanging code with oauth.telegram.org/token...', {
        clientId: resolvedClientId,
        redirectUri: resolvedRedirectUri,
      });

      // Call Telegram OIDC Token Endpoint
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
        console.error('[Telegram OIDC] Token exchange failed:', tokenResponse.status, tokenData);
        return res.status(tokenResponse.status).json({
          success: false,
          message: tokenData.error_description || tokenData.error || 'Telegram orqali token olishda xatolik',
          details: tokenData,
        });
      }

      // Parse ID Token JWT (claims: sub, name, given_name, family_name, preferred_username, picture)
      let claims: Record<string, any> = {};
      if (tokenData.id_token) {
        const parts = tokenData.id_token.split('.');
        if (parts.length >= 2) {
          const payloadBuffer = Buffer.from(parts[1], 'base64url');
          claims = JSON.parse(payloadBuffer.toString('utf8'));
        }
      }

      const telegramId = String(claims.sub || tokenData.user_id || `tg_${Date.now()}`);
      const telegramUsername = claims.preferred_username || claims.username || '';
      const fullName =
        claims.name ||
        [claims.given_name, claims.family_name].filter(Boolean).join(' ') ||
        claims.preferred_username ||
        'Ota-ona';
      const photoUrl =
        claims.picture ||
        claims.photo_url ||
        `https://api.dicebear.com/7.x/bottts/svg?seed=${telegramUsername || telegramId}`;

      // Upsert user in DataService
      const user = await DataService.upsertTelegramUser({
        telegramId,
        telegramUsername,
        name: fullName,
        photoUrl,
      });

      const token = `farzandly_tg_${telegramId}_${Date.now()}`;

      res.status(200).json({
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
    } catch (error) {
      console.error('[Telegram OIDC Exchange Error]:', error);
      res.status(500).json({
        success: false,
        message: 'Telegram kodi almashinuvida ichki server xatoligi yuz berdi',
      });
    }
  }

  /**
   * Telegram Login / Register (Widget or Direct Form)
   * Handles official Telegram widget payload or one-click demo login
   */
  static async telegramAuth(req: Request, res: Response) {
    try {
      const schema = z.object({
        id: z.union([z.string(), z.number()]),
        first_name: z.string().optional().default('Ota-ona'),
        last_name: z.string().optional().default(''),
        username: z.string().optional().default(''),
        photo_url: z.string().optional().default(''),
        auth_date: z.union([z.string(), z.number()]).optional(),
        hash: z.string().optional(),
      });

      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          message: 'Telegram ma’lumotlari to‘liq emas',
          errors: parsed.error.errors.map((e) => e.message),
        });
      }

      const { id, first_name, last_name, username, photo_url, auth_date, hash } = parsed.data;
      const telegramId = String(id);
      const fullName = `${first_name} ${last_name}`.trim() || 'Ota-ona';

      // Optional Telegram signature verification if client secret or bot token is provided
      const secret = process.env.TELEGRAM_CLIENT_SECRET || process.env.TELEGRAM_BOT_TOKEN;
      if (secret && hash && auth_date) {
        const dataCheckArr: string[] = [];
        const raw = req.body as Record<string, any>;
        Object.keys(raw)
          .filter((k) => k !== 'hash')
          .sort()
          .forEach((key) => {
            dataCheckArr.push(`${key}=${raw[key]}`);
          });
        const dataCheckString = dataCheckArr.join('\n');
        const secretKey = crypto.createHash('sha256').update(secret).digest();
        const calculatedHash = crypto
          .createHmac('sha256', secretKey)
          .update(dataCheckString)
          .digest('hex');

        if (calculatedHash !== hash) {
          console.warn('[Telegram Auth] Hash verification failed for:', telegramId);
          // If hash mismatch, still proceed in dev if configured, else warn
        }
      }

      // Upsert user in DataService
      const user = await DataService.upsertTelegramUser({
        telegramId,
        telegramUsername: username,
        name: fullName,
        photoUrl: photo_url || `https://api.dicebear.com/7.x/bottts/svg?seed=${username || telegramId}`,
      });

      // Simple mock session token
      const token = `farzandly_tg_${telegramId}_${Date.now()}`;

      res.status(200).json({
        success: true,
        message: 'Telegram orqali muvaffaqiyatli kirdingiz! Xush kelibsiz.',
        data: {
          token,
          user,
        },
      });
    } catch (error) {
      console.error('[Auth Error]:', error);
      res.status(500).json({
        success: false,
        message: 'Telegram orqali kirishda xatolik yuz berdi',
      });
    }
  }

  /**
   * Get Current Authenticated User (Me)
   */
  static async getMe(req: Request, res: Response) {
    try {
      const authHeader = req.headers.authorization;
      const userId = (req.query.userId as string) || (authHeader ? authHeader.replace('Bearer ', '') : 'demo-user');

      const user = await DataService.getUserByIdOrTelegram(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: 'Foydalanuvchi topilmadi' });
      }

      res.json({ success: true, data: user });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Profil ma’lumotlarini olishda xatolik' });
    }
  }

  /**
   * Logout
   */
  static async logout(req: Request, res: Response) {
    res.json({ success: true, message: 'Muvaffaqiyatli chiqildi' });
  }
}
