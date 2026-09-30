import { Request, Response } from 'express';
import { z } from 'zod';
import { AccountService, HttpError, LIFETIME_PRICE_UZS, REGULAR_PRICE_UZS, adminChatIds } from '../services/accountService.js';
import { GiftService } from '../services/giftService.js';
import { EngagementService, BROADCAST_SEGMENTS } from '../services/engagementService.js';

function fail(res: Response, error: any, fallback: string) {
  const status = error?.statusCode || (error instanceof HttpError ? error.statusCode : 500);
  if (status >= 500 && status !== 503) console.error(`[Account] ${fallback}:`, error?.message || error);
  res.status(status).json({ success: false, message: status >= 500 && status !== 503 ? fallback : error.message });
}

export class AccountController {
  // GET /api/leaderboard?period=week|all
  static async leaderboard(req: Request, res: Response) {
    try {
      const period = req.query.period === 'all' ? 'all' : 'week';
      const data = await AccountService.getLeaderboard(period, req.userId);
      res.setHeader('Cache-Control', 'private, max-age=60');
      res.json({ success: true, data });
    } catch (e) {
      fail(res, e, 'Reytingni yuklashda xatolik');
    }
  }

  // POST /api/users/settings  (auth) { hideFromLeaderboard }
  static async updateSettings(req: Request, res: Response) {
    const parsed = z.object({ hideFromLeaderboard: z.boolean() }).safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: 'Noto‘g‘ri sozlama' });
    try {
      const user = await AccountService.setLeaderboardVisibility(req.userId!, parsed.data.hideFromLeaderboard);
      res.json({ success: true, data: user });
    } catch (e) {
      fail(res, e, 'Sozlamani saqlashda xatolik');
    }
  }

  // GET /api/payments/config — public pricing (the card number lives in the client env: NEXT_PUBLIC_PAYMENT_CARD)
  static async paymentConfig(req: Request, res: Response) {
    res.json({
      success: true,
      data: {
        plan: 'lifetime',
        amount: LIFETIME_PRICE_UZS,
        regularAmount: REGULAR_PRICE_UZS,
        currency: 'UZS',
      },
    });
  }

  // POST /api/payments  (auth) — "Men to'ladim"; { gift: true } buys a Premium gift code
  static async createPayment(req: Request, res: Response) {
    const note = typeof req.body?.note === 'string' ? req.body.note : undefined;
    const amount = typeof req.body?.amount === 'number' ? req.body.amount : undefined;
    const gift = req.body?.gift === true;
    try {
      const result = await AccountService.createPaymentRequest(req.user, note, amount, gift);
      res.status(result.alreadyPending ? 200 : 201).json({
        success: true,
        message: result.alreadyPending
          ? 'So‘rovingiz allaqachon ko‘rib chiqilmoqda'
          : gift
          ? 'Rahmat! To‘lov tasdiqlangach, sovg‘a kodi shu sahifada va Telegramda paydo bo‘ladi.'
          : 'Rahmat! To‘lovingiz tekshirilgach, Premium avtomatik yoqiladi va Telegram orqali xabar olasiz.',
        data: result.payment,
      });
    } catch (e) {
      fail(res, e, 'To‘lov so‘rovini yuborishda xatolik');
    }
  }

  // GET /api/payments/mine  (auth)
  static async myPayments(req: Request, res: Response) {
    try {
      res.json({ success: true, data: await AccountService.getMyPayments(req.userId!) });
    } catch (e) {
      fail(res, e, 'To‘lovlarni yuklashda xatolik');
    }
  }

  // ---------------- Admin (requireAdmin) ----------------
  static async adminStats(req: Request, res: Response) {
    try {
      res.json({ success: true, data: await AccountService.getStats() });
    } catch (e) {
      fail(res, e, 'Statistikani yuklashda xatolik');
    }
  }

  static async adminPayments(req: Request, res: Response) {
    try {
      const page = Math.max(1, Number(req.query.page) || 1);
      res.json({ success: true, data: await AccountService.listPayments(String(req.query.status || ''), page) });
    } catch (e) {
      fail(res, e, 'To‘lovlarni yuklashda xatolik');
    }
  }

  static async adminReviewPayment(req: Request, res: Response) {
    const parsed = z
      .object({ decision: z.enum(['approve', 'reject']), reason: z.string().max(500).optional() })
      .safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: 'Noto‘g‘ri so‘rov' });
    try {
      const data = await AccountService.reviewPayment(req.user, req.params.id, parsed.data.decision, parsed.data.reason);
      res.json({ success: true, data });
    } catch (e) {
      fail(res, e, 'To‘lovni ko‘rib chiqishda xatolik');
    }
  }

  static async adminUsers(req: Request, res: Response) {
    try {
      const page = Math.max(1, Number(req.query.page) || 1);
      const filter = String(req.query.filter || 'all').slice(0, 20);
      const sort = String(req.query.sort || 'newest').slice(0, 20);
      res.json({ success: true, data: await AccountService.searchUsers(String(req.query.q || '').slice(0, 100), page, 30, filter, sort) });
    } catch (e) {
      fail(res, e, 'Foydalanuvchilarni yuklashda xatolik');
    }
  }

  // GET /api/admin/users/:id — full profile, children, payments, referrals, admin actions
  static async adminUserDetail(req: Request, res: Response) {
    try {
      res.json({ success: true, data: await AccountService.getUserDetail(String(req.params.id)) });
    } catch (e) {
      fail(res, e, 'Foydalanuvchi ma’lumotlarini yuklashda xatolik');
    }
  }

  static async adminSetPremium(req: Request, res: Response) {
    const parsed = z
      .object({
        action: z.enum(['lifetime', 'revoke', 'bonus']),
        days: z.number().int().min(1).max(365).optional(),
        reason: z.string().max(500).optional(),
      })
      .safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: 'Noto‘g‘ri so‘rov' });
    try {
      const user = await AccountService.setPremium(req.user, req.params.id, parsed.data.action, parsed.data.days, parsed.data.reason);
      res.json({ success: true, data: user });
    } catch (e) {
      fail(res, e, 'Premiumni o‘zgartirishda xatolik');
    }
  }

  // ---------------- Gifts ----------------
  // GET /api/gifts/mine (auth) — codes this parent bought
  static async myGifts(req: Request, res: Response) {
    try {
      res.json({ success: true, data: await GiftService.listMine(req.userId!) });
    } catch (e) {
      fail(res, e, 'Sovg‘alarni yuklashda xatolik');
    }
  }

  // POST /api/gifts/redeem (auth) { code }
  static async redeemGift(req: Request, res: Response) {
    const parsed = z.object({ code: z.string().min(4).max(40) }).safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: 'Sovg‘a kodini kiriting' });
    try {
      const data = await GiftService.redeem(req.user, parsed.data.code);
      res.json({ success: true, message: 'Sovg‘a qabul qilindi — umrbod Premium yoqildi!', data });
    } catch (e) {
      fail(res, e, 'Sovg‘ani faollashtirishda xatolik');
    }
  }

  // ---------------- Broadcasts (requireAdmin) ----------------
  static broadcastSchema = z.object({
    text: z.string().trim().min(1).max(3500),
    segment: z.enum(BROADCAST_SEGMENTS),
    ageGroup: z.enum(['0-2', '3-5', '6-9', '10-13', '14+']).optional(),
    buttonText: z.string().trim().min(1).max(60).optional(),
    buttonUrl: z.string().trim().url().startsWith('https://').max(500).optional(),
  });

  // GET /api/admin/broadcasts/audience?segment=&ageGroup=
  static async adminBroadcastAudience(req: Request, res: Response) {
    const parsed = AccountController.broadcastSchema
      .pick({ segment: true, ageGroup: true })
      .safeParse({ segment: req.query.segment, ageGroup: req.query.ageGroup || undefined });
    if (!parsed.success) return res.status(400).json({ success: false, message: 'Noto‘g‘ri auditoriya' });
    try {
      res.json({ success: true, data: { count: await EngagementService.countAudience(parsed.data.segment, parsed.data.ageGroup) } });
    } catch (e) {
      fail(res, e, 'Auditoriyani hisoblashda xatolik');
    }
  }

  static async adminBroadcasts(req: Request, res: Response) {
    try {
      res.json({ success: true, data: await EngagementService.listBroadcasts() });
    } catch (e) {
      fail(res, e, 'Xabarlar tarixini yuklashda xatolik');
    }
  }

  // POST /api/admin/broadcasts { ...message, test?: true } — test sends only to the admin's own Telegram
  static async adminBroadcast(req: Request, res: Response) {
    const parsed = AccountController.broadcastSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ success: false, message: 'Xabar matni yoki tugma noto‘g‘ri' });
    if (Boolean(parsed.data.buttonText) !== Boolean(parsed.data.buttonUrl)) {
      return res.status(400).json({ success: false, message: 'Tugma uchun matn ham, havola ham kerak' });
    }
    try {
      if (req.body?.test === true) {
        const chat = req.user?.telegramId || adminChatIds()[0];
        if (!chat) return res.status(400).json({ success: false, message: 'Sinov uchun Telegram hisobingiz topilmadi (ADMIN_TELEGRAM_IDS)' });
        await EngagementService.sendTest(String(chat), parsed.data);
        return res.json({ success: true, message: 'Sinov xabari Telegramingizga yuborildi' });
      }
      const doc = await EngagementService.startBroadcast(req.user, parsed.data);
      await AccountService.audit(req.user, 'broadcast.send', undefined, {
        segment: parsed.data.segment,
        ageGroup: parsed.data.ageGroup,
        total: doc.total,
      });
      res.status(201).json({ success: true, message: `Yuborish boshlandi: ${doc.total} ta foydalanuvchi`, data: doc });
    } catch (e) {
      fail(res, e, 'Xabarni yuborishda xatolik');
    }
  }

  static async adminAudit(req: Request, res: Response) {
    try {
      res.json({ success: true, data: await AccountService.listAudit(Number(req.query.limit) || 50) });
    } catch (e) {
      fail(res, e, 'Jurnalni yuklashda xatolik');
    }
  }
}
