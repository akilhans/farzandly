import { randomInt } from 'node:crypto';
import { User, GiftCode } from '../models/index.js';
import { isDbConnected } from './dataService.js';
import { TelegramBotEngine } from './telegramBotEngine.js';
import { toPublicUser } from '../lib/premium.js';

class GiftError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
  }
}

// No 0/O, 1/I/L: codes are read aloud and typed from screenshots.
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';

function newCode(): string {
  let out = 'FZ';
  for (let i = 0; i < 8; i++) out += ALPHABET[randomInt(ALPHABET.length)];
  return out;
}

/** "fz-abcd 2345" → "FZABCD2345" */
export function normalizeGiftCode(raw: string): string {
  return String(raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 20);
}

/** "FZABCD2345" → "FZ-ABCD-2345" for display. */
export function formatGiftCode(code: string): string {
  const c = normalizeGiftCode(code);
  return c.length === 10 ? `${c.slice(0, 2)}-${c.slice(2, 6)}-${c.slice(6)}` : c;
}

function displayName(u: any): string {
  if (!u) return 'Ota-ona';
  if (u.telegramUsername) return `@${u.telegramUsername}`;
  return u.firstName || u.name || 'Ota-ona';
}

/**
 * Premium gift codes: a parent pays for lifetime Premium on someone else's behalf,
 * the admin approves the payment, and the buyer gets a one-time code to pass on.
 */
export class GiftService {
  static async shareLinks(code: string) {
    const bot = await TelegramBotEngine.getBotUsername();
    const botLink = `https://t.me/${bot}?start=gift_${code}`;
    const webLink = `${TelegramBotEngine.getClientUrl()}/premium?gift=${code}`;
    const shareText =
      `🎁 Sizga Farzandly umrbod Premium sovg‘a qilindi! Faollashtirish uchun havolani oching yoki kodni kiriting: ${formatGiftCode(code)}`;
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(botLink)}&text=${encodeURIComponent(shareText)}`;
    return { botLink, webLink, shareUrl };
  }

  /** Creates the code for an approved gift payment. Idempotent per payment. */
  static async issue(payment: any, purchaser: any) {
    const existing = await GiftCode.findOne({ paymentId: String(payment._id) });
    if (existing) return existing;
    for (let attempt = 0; attempt < 5; attempt++) {
      try {
        return await GiftCode.create({
          code: newCode(),
          purchaserId: String(payment.userId),
          purchaserName: displayName(purchaser),
          paymentId: String(payment._id),
        });
      } catch (e: any) {
        if (e?.code !== 11000) throw e;
        const raced = await GiftCode.findOne({ paymentId: String(payment._id) });
        if (raced) return raced;
        // otherwise the random code collided — try another
      }
    }
    throw new Error('Sovg‘a kodini yaratib bo‘lmadi');
  }

  static async notifyPurchaser(purchaser: any, gift: any) {
    if (!purchaser?.telegramId) return;
    const { shareUrl, botLink } = await this.shareLinks(gift.code);
    TelegramBotEngine.sendMessage(
      purchaser.telegramId,
      `🎁 <b>To‘lovingiz tasdiqlandi — sovg‘a tayyor!</b>\n\n` +
        `Sovg‘a kodi: <code>${formatGiftCode(gift.code)}</code>\n\n` +
        `Kodni yaqiningizga yuboring. U havolani ochsa yoki kodni saytdagi Premium sahifasida kiritsa, ` +
        `unga umrbod Premium yoqiladi. Kod bir marta ishlaydi.\n\n` +
        `Havola: ${botLink}`,
      { reply_markup: { inline_keyboard: [[{ text: '📤 Sovg‘ani ulashish', url: shareUrl }]] } }
    ).catch(() => {});
  }

  static async listMine(userId: string) {
    if (!isDbConnected()) throw new GiftError(503, 'Bu funksiya uchun ma’lumotlar bazasi ulanmagan');
    const rows: any[] = await GiftCode.find({ purchaserId: String(userId) }).sort({ createdAt: -1 }).limit(50).lean();
    return Promise.all(
      rows.map(async (g) => ({
        code: formatGiftCode(g.code),
        status: g.status,
        redeemedByName: g.redeemedByName,
        redeemedAt: g.redeemedAt,
        createdAt: g.createdAt,
        ...(g.status === 'active' ? await this.shareLinks(g.code) : {}),
      }))
    );
  }

  /** Turns a code into lifetime Premium for `user`. The code is only spent if Premium is actually granted. */
  static async redeem(user: any, rawCode: string) {
    if (!isDbConnected()) throw new GiftError(503, 'Bu funksiya uchun ma’lumotlar bazasi ulanmagan');
    const code = normalizeGiftCode(rawCode);
    if (!code) throw new GiftError(400, 'Sovg‘a kodini kiriting');
    if (!user?._id) throw new GiftError(401, 'Iltimos, avval tizimga kiring');

    const gift: any = await GiftCode.findOne({ code });
    if (!gift) throw new GiftError(404, 'Bunday sovg‘a kodi topilmadi');
    if (gift.status === 'redeemed') throw new GiftError(409, 'Bu sovg‘a kodi allaqachon ishlatilgan');
    if (user.premiumType === 'lifetime') {
      throw new GiftError(409, 'Sizda umrbod Premium allaqachon bor — kodni boshqa yaqiningizga ulashing');
    }

    const claimed: any = await GiftCode.findOneAndUpdate(
      { _id: gift._id, status: 'active' },
      { $set: { status: 'redeemed', redeemedBy: String(user._id), redeemedByName: displayName(user), redeemedAt: new Date() } },
      { new: true }
    );
    if (!claimed) throw new GiftError(409, 'Bu sovg‘a kodi allaqachon ishlatilgan');

    const updated = await User.findByIdAndUpdate(
      user._id,
      { $set: { premiumType: 'lifetime', isPremium: true, subscriptionStatus: 'premium' }, $unset: { premiumExpiresAt: 1 } },
      { new: true }
    );

    const purchaser: any = await User.findById(claimed.purchaserId).select('telegramId').lean().catch(() => null);
    if (purchaser?.telegramId && String(purchaser._id) !== String(user._id)) {
      TelegramBotEngine.sendMessage(
        purchaser.telegramId,
        `💝 <b>Sovg‘angiz faollashtirildi!</b>\n\n${TelegramBotEngine.esc(displayName(user))} Premium sovg‘angizni qabul qildi. Rahmat!`
      ).catch(() => {});
    }

    return { user: toPublicUser(updated), purchaserName: claimed.purchaserName };
  }
}
