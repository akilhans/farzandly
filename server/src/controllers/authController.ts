import { Request, Response } from 'express';
import crypto from 'crypto';
import { DataService } from '../services/dataService.js';
import { z } from 'zod';

export class AuthController {
  /**
   * Telegram Login / Register
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

      // Optional Telegram signature verification if bot token is provided
      const botToken = process.env.TELEGRAM_BOT_TOKEN;
      if (botToken && hash && auth_date) {
        const dataCheckArr: string[] = [];
        const raw = req.body as Record<string, any>;
        Object.keys(raw)
          .filter((k) => k !== 'hash')
          .sort()
          .forEach((key) => {
            dataCheckArr.push(`${key}=${raw[key]}`);
          });
        const dataCheckString = dataCheckArr.join('\n');
        const secretKey = crypto.createHash('sha256').update(botToken).digest();
        const calculatedHash = crypto
          .createHmac('sha256', secretKey)
          .update(dataCheckString)
          .digest('hex');

        if (calculatedHash !== hash) {
          console.warn('[Telegram Auth] Hash verification failed for:', telegramId);
          return res.status(401).json({
            success: false,
            message: 'Telegram tasdiqlash imzosi yaroqsiz',
          });
        }
      }

      // Upsert user in DataService
      const user = await DataService.upsertTelegramUser({
        telegramId,
        telegramUsername: username,
        name: fullName,
        photoUrl: photo_url,
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
