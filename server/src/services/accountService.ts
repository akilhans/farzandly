import mongoose from 'mongoose';
import { User, UserProgress, Payment, AuditLog, Referral } from '../models/index.js';
import { GiftService } from './giftService.js';
import { isDbConnected } from './dataService.js';
import { TelegramBotEngine } from './telegramBotEngine.js';
import { isPremiumActive, toPublicUser } from '../lib/premium.js';

export class ServiceUnavailableError extends Error {
  statusCode = 503;
  constructor() {
    super('Bu funksiya uchun ma’lumotlar bazasi ulanmagan');
  }
}

export class HttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

function requireDb() {
  if (!isDbConnected()) throw new ServiceUnavailableError();
}

export const LIFETIME_PRICE_UZS = Number(process.env.PREMIUM_PRICE_UZS) || 79000;
/** Regular price once a visitor's 30-minute introductory offer has run out (client: lib/offer.ts). */
export const REGULAR_PRICE_UZS = Number(process.env.PREMIUM_REGULAR_PRICE_UZS) || 219000;
/** The only amounts a payment request may carry; anything else falls back to the offer price. */
export const ALLOWED_PRICES_UZS = [LIFETIME_PRICE_UZS, REGULAR_PRICE_UZS];

/** Telegram chats that receive admin alerts (payment requests). */
export function adminChatIds(): string[] {
  const ids = [process.env.ADMIN_TELEGRAM_CHAT_ID || '', ...(process.env.ADMIN_TELEGRAM_IDS || '').split(',')]
    .map((s) => s.trim())
    .filter(Boolean);
  return Array.from(new Set(ids));
}

const TASHKENT_OFFSET_MS = 5 * 60 * 60 * 1000; // UTC+5, no DST

/** Monday 00:00 Asia/Tashkent of the current week, as a UTC Date. */
export function tashkentWeekStart(now = new Date()): Date {
  const local = new Date(now.getTime() + TASHKENT_OFFSET_MS);
  const day = (local.getUTCDay() + 6) % 7; // 0 = Monday
  const mondayLocal = Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate() - day);
  return new Date(mondayLocal - TASHKENT_OFFSET_MS);
}

/** Today 00:00 Asia/Tashkent, as a UTC Date. */
export function tashkentDayStart(nowMs = Date.now()): Date {
  const local = new Date(nowMs + TASHKENT_OFFSET_MS);
  return new Date(Date.UTC(local.getUTCFullYear(), local.getUTCMonth(), local.getUTCDate()) - TASHKENT_OFFSET_MS);
}

function escapeRegex(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function leaderboardName(u: any) {
  if (u.telegramUsername) return `@${u.telegramUsername}`;
  const name = (u.name || 'Ota-ona').trim();
  // Show "Aziza R." rather than full names or emails
  if (name.includes('@') && !name.startsWith('@')) return 'Ota-ona';
  const [first, last] = name.split(/\s+/);
  return last ? `${first} ${last[0]}.` : first;
}

export class AccountService {
  // ======================== LEADERBOARD ========================
  static async getLeaderboard(period: 'week' | 'all', currentUserId?: string, limit = 20) {
    requireDb();
    const hidden = await User.find({ hideFromLeaderboard: true }).select('_id').lean();
    const hiddenIds = new Set(hidden.map((h: any) => String(h._id)));

    type Row = { userId: string; xp: number };
    let rows: Row[] = [];
    let myRow: { rank: number; xp: number } | null = null;

    if (period === 'week') {
      const since = tashkentWeekStart();
      const agg: any[] = await UserProgress.aggregate([
        { $match: { completedAt: { $gte: since }, xpEarned: { $gt: 0 } } },
        { $group: { _id: '$userId', xp: { $sum: '$xpEarned' } } },
        { $sort: { xp: -1 } },
      ]);
      const visible = agg.filter((r) => !hiddenIds.has(String(r._id)));
      rows = visible.slice(0, limit).map((r) => ({ userId: String(r._id), xp: r.xp }));
      if (currentUserId) {
        const idx = visible.findIndex((r) => String(r._id) === String(currentUserId));
        if (idx >= 0) myRow = { rank: idx + 1, xp: visible[idx].xp };
      }
    } else {
      const top: any[] = await User.find({ xp: { $gt: 0 }, hideFromLeaderboard: { $ne: true } })
        .sort({ xp: -1 })
        .limit(limit)
        .select('_id xp')
        .lean();
      rows = top.map((u) => ({ userId: String(u._id), xp: u.xp }));
      if (currentUserId && mongoose.Types.ObjectId.isValid(currentUserId)) {
        const me: any = await User.findById(currentUserId).select('xp hideFromLeaderboard').lean();
        if (me && !me.hideFromLeaderboard && me.xp > 0) {
          const ahead = await User.countDocuments({ xp: { $gt: me.xp }, hideFromLeaderboard: { $ne: true } });
          myRow = { rank: ahead + 1, xp: me.xp };
        }
      }
    }

    const ids = rows.map((r) => r.userId).filter((id) => mongoose.Types.ObjectId.isValid(id));
    const users: any[] = await User.find({ _id: { $in: ids } })
      .select('name telegramUsername photoUrl streak level')
      .lean();
    const byId = new Map(users.map((u) => [String(u._id), u]));

    const entries = rows
      .filter((r) => byId.has(r.userId))
      .map((r, i) => {
        const u = byId.get(r.userId);
        return {
          rank: i + 1,
          name: leaderboardName(u),
          photoUrl: u.photoUrl || null,
          xp: r.xp,
          streak: u.streak || 0,
          level: u.level || '',
          isCurrentUser: Boolean(currentUserId && r.userId === String(currentUserId)),
        };
      });

    return {
      period,
      weekStart: period === 'week' ? tashkentWeekStart().toISOString() : null,
      entries,
      me: myRow,
    };
  }

  static async setLeaderboardVisibility(userId: string, hidden: boolean) {
    requireDb();
    const user = await User.findByIdAndUpdate(userId, { hideFromLeaderboard: hidden }, { new: true });
    return toPublicUser(user);
  }

  // ======================== PAYMENTS ========================
  static async createPaymentRequest(user: any, note?: string, requestedAmount?: number, gift = false) {
    requireDb();
    // A gift is bought for someone else, so the payer's own Premium doesn't matter.
    if (!gift && user.premiumType === 'lifetime') {
      throw new HttpError(409, 'Sizda umrbod Premium allaqachon faol');
    }
    const plan = gift ? 'gift' : 'lifetime';
    const existing = await Payment.findOne({
      userId: String(user._id),
      status: 'pending',
      ...(gift ? { plan: 'gift' } : { plan: { $ne: 'gift' } }),
    });
    if (existing) return { payment: existing, alreadyPending: true };

    // the amount the parent was shown (offer or regular); the admin still checks the card receipt
    const amount = ALLOWED_PRICES_UZS.includes(Number(requestedAmount)) ? Number(requestedAmount) : LIFETIME_PRICE_UZS;
    const payment = await Payment.create({
      userId: String(user._id),
      userName: user.name,
      telegramUsername: user.telegramUsername,
      plan,
      amount,
      currency: 'UZS',
      note: note?.slice(0, 500),
    });

    const adminChats = adminChatIds();
    if (adminChats.length) {
      const who = user.telegramUsername ? `@${user.telegramUsername}` : user.email || user.name;
      const text =
        `💳 <b>Yangi to‘lov so‘rovi</b>${gift ? ' — 🎁 sovg‘a' : ''}\n\n` +
        `👤 ${TelegramBotEngine.esc(who)}\n` +
        `💰 ${amount.toLocaleString('ru-RU')} so‘m — ${gift ? 'umrbod Premium sovg‘a kodi' : 'umrbod Premium'}` +
        (amount === LIFETIME_PRICE_UZS ? ' (maxsus taklif)' : '') +
        `\n` +
        (note ? `📝 ${TelegramBotEngine.esc(note.slice(0, 200))}\n` : '') +
        `\nKartaga tushganini tekshirib, shu yerda yoki admin panelda tasdiqlang.`;
      const reply_markup = TelegramBotEngine.paymentButtons(String(payment._id));
      for (const chat of adminChats) {
        TelegramBotEngine.sendMessage(chat, text, { reply_markup }).catch(() => {});
      }
    }

    return { payment, alreadyPending: false };
  }

  static async getMyPayments(userId: string) {
    requireDb();
    return Payment.find({ userId }).sort({ createdAt: -1 }).limit(10).lean();
  }

  static async listPayments(status?: string, page = 1, pageSize = 30) {
    requireDb();
    const query: Record<string, any> = {};
    if (status && ['pending', 'approved', 'rejected'].includes(status)) query.status = status;
    const [items, total] = await Promise.all([
      Payment.find(query)
        .sort({ createdAt: -1 })
        .skip((page - 1) * pageSize)
        .limit(pageSize)
        .lean(),
      Payment.countDocuments(query),
    ]);
    return { items, total, page, pageSize };
  }

  static async reviewPayment(admin: any, paymentId: string, decision: 'approve' | 'reject', reason?: string) {
    requireDb();
    if (!mongoose.Types.ObjectId.isValid(paymentId)) throw new HttpError(404, 'To‘lov topilmadi');

    // Only a pending payment can be reviewed, and only once.
    const payment: any = await Payment.findOneAndUpdate(
      { _id: paymentId, status: 'pending' },
      {
        $set: {
          status: decision === 'approve' ? 'approved' : 'rejected',
          reviewedBy: String(admin._id),
          reviewedAt: new Date(),
          rejectReason: decision === 'reject' ? reason?.slice(0, 500) : undefined,
        },
      },
      { new: true }
    );
    if (!payment) throw new HttpError(409, 'To‘lov topilmadi yoki allaqachon ko‘rib chiqilgan');

    let user: any = null;
    let gift: any = null;
    if (decision === 'approve' && payment.plan === 'gift') {
      user = await User.findById(payment.userId);
      gift = await GiftService.issue(payment, user);
    } else if (decision === 'approve') {
      user = await User.findByIdAndUpdate(
        payment.userId,
        { $set: { premiumType: 'lifetime', isPremium: true, subscriptionStatus: 'premium' }, $unset: { premiumExpiresAt: 1 } },
        { new: true }
      );
    } else {
      user = await User.findById(payment.userId);
    }

    await this.audit(admin, decision === 'approve' ? 'payment.approve' : 'payment.reject', payment.userId, {
      paymentId: String(payment._id),
      amount: payment.amount,
      plan: payment.plan,
      reason,
    });

    if (gift) {
      await GiftService.notifyPurchaser(user, gift);
    } else if (user?.telegramId) {
      const text =
        decision === 'approve'
          ? `🎉 <b>To‘lovingiz tasdiqlandi!</b>\n\nUmrbod Premium faollashtirildi. Barcha darslar endi siz uchun ochiq.`
          : `ℹ️ <b>To‘lovingiz tasdiqlanmadi.</b>\n\n${TelegramBotEngine.esc(reason || 'Karta tushumida to‘lov topilmadi.')}\nSavollar bo‘lsa, qo‘llab-quvvatlash xizmatiga yozing.`;
      TelegramBotEngine.sendMessage(user.telegramId, text).catch(() => {});
    }

    return { payment, user: toPublicUser(user), giftCode: gift?.code };
  }

  // ======================== ADMIN ========================
  static async audit(actor: any, action: string, targetUserId?: string, details?: Record<string, any>) {
    try {
      await AuditLog.create({
        actorId: String(actor._id),
        actorName: actor.telegramUsername ? `@${actor.telegramUsername}` : actor.name,
        action,
        targetUserId,
        details,
      });
    } catch (e: any) {
      console.warn('[Audit] write failed:', e?.message || e);
    }
  }

  static async listAudit(limit = 50) {
    requireDb();
    return AuditLog.find().sort({ createdAt: -1 }).limit(Math.min(limit, 200)).lean();
  }

  /**
   * Admin user list: free-text search + segment filter + sort, newest first by default.
   * Returns what an admin needs at a glance (registration, last activity, sign-in method,
   * family and referral counts) without lesson/child payloads.
   */
  static async searchUsers(q: string, page = 1, pageSize = 30, filter = 'all', sort = 'newest') {
    requireDb();
    const now = Date.now();
    const day = 86400000;
    const and: any[] = [];
    const term = (q || '').trim().replace(/^@/, '');
    if (term) {
      const rx = new RegExp(escapeRegex(term), 'i');
      const or: any[] = [{ name: rx }, { email: rx }, { telegramUsername: rx }, { phone: rx }, { telegramId: term }, { referralCode: term }];
      if (mongoose.Types.ObjectId.isValid(term)) or.push({ _id: new mongoose.Types.ObjectId(term) });
      and.push({ $or: or });
    }
    const premiumNow = { $or: [{ premiumType: 'lifetime' }, { premiumType: 'bonus', premiumExpiresAt: { $gt: new Date(now) } }] };
    const FILTERS: Record<string, any> = {
      premium: premiumNow,
      free: { $nor: premiumNow.$or },
      lifetime: { premiumType: 'lifetime' },
      new7d: { createdAt: { $gte: new Date(now - 7 * day) } },
      active7d: { lastActiveDate: { $gte: new Date(now - 7 * day) } },
      inactive30d: { lastActiveDate: { $lt: new Date(now - 30 * day) } },
      telegram: { authProvider: 'telegram' },
      email: { authProvider: 'email' },
      admins: { role: 'admin' },
    };
    if (FILTERS[filter]) and.push(FILTERS[filter]);
    const match = and.length ? { $and: and } : {};

    const SORTS: Record<string, Record<string, 1 | -1>> = {
      newest: { createdAt: -1 },
      oldest: { createdAt: 1 },
      active: { lastActiveDate: -1 },
      xp: { xp: -1 },
      lessons: { completedLessonsCount: -1 },
    };
    const safePage = Math.max(1, page);
    const [items, total] = await Promise.all([
      User.aggregate([
        { $match: match },
        {
          $addFields: {
            completedLessonsCount: { $size: { $ifNull: ['$completedLessons', []] } },
            childrenCount: { $size: { $ifNull: ['$children', []] } },
          },
        },
        { $sort: { ...(SORTS[sort] || SORTS.newest), _id: -1 } },
        { $skip: (safePage - 1) * pageSize },
        { $limit: pageSize },
        {
          $project: {
            name: 1, email: 1, phone: 1, telegramId: 1, telegramUsername: 1, photoUrl: 1, authProvider: 1,
            xp: 1, streak: 1, level: 1, isPremium: 1, premiumType: 1, premiumExpiresAt: 1, role: 1,
            createdAt: 1, lastActiveDate: 1, referralCount: 1, referredBy: 1, partnerName: 1,
            reminderEnabled: 1, childAgeGroup: 1, completedLessonsCount: 1, childrenCount: 1,
          },
        },
      ]),
      User.countDocuments(match),
    ]);
    return { items: items.map((u: any) => toPublicUser(u)), total, page: safePage, pageSize };
  }

  /** Everything about one user for the admin detail panel. */
  static async getUserDetail(userId: string) {
    requireDb();
    if (!mongoose.Types.ObjectId.isValid(userId)) throw new HttpError(404, 'Foydalanuvchi topilmadi');
    const u: any = await User.findById(userId).lean();
    if (!u) throw new HttpError(404, 'Foydalanuvchi topilmadi');
    const id = String(u._id);
    const [payments, audit, referrals, referredByRow, referrer] = await Promise.all([
      Payment.find({ userId: id }).sort({ createdAt: -1 }).limit(20).lean(),
      AuditLog.find({ targetUserId: id }).sort({ createdAt: -1 }).limit(30).lean(),
      Referral.find({ referrerId: id }).sort({ createdAt: -1 }).limit(50).lean(),
      Referral.findOne({ referredUserId: id }).lean(),
      u.referredBy ? User.findOne({ referralCode: u.referredBy }).select('name telegramUsername').lean() : null,
    ]);
    const pub: any = toPublicUser(u);
    return {
      user: {
        ...pub,
        completedLessonsCount: (u.completedLessons || []).length,
        completedLessons: undefined,
        achievementsCount: (u.achievements || []).length,
        achievements: undefined,
        children: (u.children || []).map((c: any) => ({
          id: c.id,
          name: c.name,
          ageGroup: c.ageGroup,
          gender: c.gender,
          birthDate: c.birthDate,
          completedLessonsCount: (c.completedLessons || []).length,
        })),
      },
      payments,
      audit,
      referrals: referrals.map((r: any) => ({ name: r.referredUserName, status: r.status, createdAt: r.createdAt })),
      referredBy: referrer
        ? { name: (referrer as any).telegramUsername ? `@${(referrer as any).telegramUsername}` : (referrer as any).name, code: u.referredBy, status: (referredByRow as any)?.status }
        : null,
    };
  }

  static async setPremium(admin: any, userId: string, action: 'lifetime' | 'revoke' | 'bonus', days = 7, reason?: string) {
    requireDb();
    if (!mongoose.Types.ObjectId.isValid(userId)) throw new HttpError(404, 'Foydalanuvchi topilmadi');
    const target: any = await User.findById(userId);
    if (!target) throw new HttpError(404, 'Foydalanuvchi topilmadi');

    let update: any;
    if (action === 'lifetime') {
      update = { $set: { premiumType: 'lifetime', isPremium: true, subscriptionStatus: 'premium' }, $unset: { premiumExpiresAt: 1 } };
    } else if (action === 'revoke') {
      update = { $set: { isPremium: false, subscriptionStatus: 'free' }, $unset: { premiumType: 1, premiumExpiresAt: 1 } };
    } else {
      const safeDays = Math.max(1, Math.min(Math.round(days), 365));
      const current = target.premiumExpiresAt ? new Date(target.premiumExpiresAt) : null;
      const base = current && current.getTime() > Date.now() ? current : new Date();
      update = {
        $set: {
          premiumType: target.premiumType === 'lifetime' ? 'lifetime' : 'bonus',
          isPremium: true,
          subscriptionStatus: 'premium',
          premiumExpiresAt: new Date(base.getTime() + safeDays * 86400000),
        },
      };
    }

    const user = await User.findByIdAndUpdate(userId, update, { new: true });
    await this.audit(admin, `premium.${action}`, userId, { days: action === 'bonus' ? days : undefined, reason });

    // Tell the parent when they receive Premium; a revoke stays silent.
    if (action !== 'revoke' && user?.telegramId) {
      const until = user.premiumType === 'bonus' && user.premiumExpiresAt
        ? new Date(user.premiumExpiresAt).toLocaleDateString('ru-RU', { timeZone: 'Asia/Tashkent' })
        : null;
      const text = until
        ? `🎁 <b>Sizga Premium sovg‘a qilindi!</b>\n\nPremium ${until} gacha faol. Barcha darslar va maqolalar endi siz uchun ochiq.`
        : `🎉 <b>Sizga umrbod Premium berildi!</b>\n\nBarcha darslar va maqolalar endi siz uchun ochiq.`;
      TelegramBotEngine.sendMessage(user.telegramId, text, {
        reply_markup: { inline_keyboard: [[{ text: '▶️ Keyingi darsim', callback_data: 'n:' }]] },
      }).catch((e: any) => console.warn('[TelegramNotify] Premium xabari yuborilmadi:', e?.message));
    }

    return toPublicUser(user);
  }

  static async getStats() {
    requireDb();
    const now = Date.now();
    const day = 86400000;
    const [totalUsers, signups7d, activeToday, active7d, lifetime, bonusActive, pendingPayments, approvedPayments, referralsRewarded, referralsPending, signupsToday, signups30d, byProvider, series] =
      await Promise.all([
        User.countDocuments(),
        User.countDocuments({ createdAt: { $gte: new Date(now - 7 * day) } }),
        User.countDocuments({ lastActiveDate: { $gte: new Date(now - day) } }),
        User.countDocuments({ lastActiveDate: { $gte: new Date(now - 7 * day) } }),
        User.countDocuments({ premiumType: 'lifetime' }),
        User.countDocuments({ premiumType: 'bonus', premiumExpiresAt: { $gt: new Date() } }),
        Payment.countDocuments({ status: 'pending' }),
        Payment.aggregate([{ $match: { status: 'approved' } }, { $group: { _id: null, count: { $sum: 1 }, sum: { $sum: '$amount' } } }]),
        Referral.countDocuments({ status: 'rewarded' }),
        Referral.countDocuments({ status: 'pending' }),
        User.countDocuments({ createdAt: { $gte: tashkentDayStart(now) } }),
        User.countDocuments({ createdAt: { $gte: new Date(now - 30 * day) } }),
        User.aggregate([{ $group: { _id: '$authProvider', count: { $sum: 1 } } }]),
        User.aggregate([
          { $match: { createdAt: { $gte: new Date(tashkentDayStart(now).getTime() - 29 * day) } } },
          { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt', timezone: 'Asia/Tashkent' } }, count: { $sum: 1 } } },
        ]),
      ]);
    // 30 Tashkent days, oldest first, zero-filled so the chart has no gaps
    const perDay = new Map(series.map((r: any) => [r._id, r.count]));
    const signupSeries = Array.from({ length: 30 }, (_, i) => {
      const d = new Date(tashkentDayStart(now).getTime() - (29 - i) * day + TASHKENT_OFFSET_MS).toISOString().slice(0, 10);
      return { date: d, count: perDay.get(d) || 0 };
    });
    return {
      totalUsers,
      signups7d,
      activeToday,
      active7d,
      lifetimePremium: lifetime,
      bonusPremiumActive: bonusActive,
      pendingPayments,
      approvedPayments: approvedPayments[0]?.count || 0,
      revenueUzs: approvedPayments[0]?.sum || 0,
      referralsRewarded,
      referralsPending,
      signupsToday,
      signups30d,
      byProvider: Object.fromEntries(byProvider.map((r: any) => [r._id || 'unknown', r.count])),
      signupSeries,
    };
  }

  static isPremium(user: any) {
    return isPremiumActive(user);
  }
}
