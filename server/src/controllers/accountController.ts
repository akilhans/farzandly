import { Request, Response } from 'express';
import { z } from 'zod';
import { AccountService, HttpError, LIFETIME_PRICE_UZS, REGULAR_PRICE_UZS } from '../services/accountService.js';

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

  // POST /api/payments  (auth) — "Men to'ladim"
  static async createPayment(req: Request, res: Response) {
    const note = typeof req.body?.note === 'string' ? req.body.note : undefined;
    const amount = typeof req.body?.amount === 'number' ? req.body.amount : undefined;
    try {
      const result = await AccountService.createPaymentRequest(req.user, note, amount);
      res.status(result.alreadyPending ? 200 : 201).json({
        success: true,
        message: result.alreadyPending
          ? 'So‘rovingiz allaqachon ko‘rib chiqilmoqda'
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
      res.json({ success: true, data: await AccountService.searchUsers(String(req.query.q || '').slice(0, 100), page) });
    } catch (e) {
      fail(res, e, 'Foydalanuvchilarni yuklashda xatolik');
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

  static async adminAudit(req: Request, res: Response) {
    try {
      res.json({ success: true, data: await AccountService.listAudit(Number(req.query.limit) || 50) });
    } catch (e) {
      fail(res, e, 'Jurnalni yuklashda xatolik');
    }
  }
}
