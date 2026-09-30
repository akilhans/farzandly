import mongoose from 'mongoose';
import { User, UserProgress, Broadcast } from '../models/index.js';
import { isDbConnected } from './dataService.js';
import { TelegramBotEngine } from './telegramBotEngine.js';
import { tashkentDayStart, tashkentWeekStart } from './accountService.js';

const DAY_MS = 86400000;
const TASHKENT_OFFSET_MS = 5 * 60 * 60 * 1000; // UTC+5, no DST
const PACE_MS = 45; // ~22 msg/sec, under Telegram's 30/sec bot limit

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** Asia/Tashkent wall clock. */
function tashkentNow(nowMs = Date.now()) {
  const local = new Date(nowMs + TASHKENT_OFFSET_MS);
  return {
    hour: local.getUTCHours(),
    weekday: local.getUTCDay(), // 0 = Sunday
    date: local.toISOString().slice(0, 10),
    y: local.getUTCFullYear(),
    m: local.getUTCMonth(), // 0-based
    d: local.getUTCDate(),
  };
}

function firstName(u: any): string {
  return TelegramBotEngine.esc(u?.firstName || u?.name?.replace(/^@/, '') || 'Ota-ona');
}

/** Filter shared by every automated message: reachable on Telegram and not opted out. */
const REACHABLE = {
  telegramId: { $exists: true, $nin: [null, ''] },
  botBlocked: { $ne: true },
  engagementOptOut: { $ne: true },
};

const OPT_OUT_ROW = [{ text: '🔕 Bunday xabarlar kerak emas', callback_data: 'ntf:off' }];

// ---------------------------------------------------------------------------
// Child development milestones (months → message). Every child is different,
// so the copy describes what *often* happens, never what must happen.
// ---------------------------------------------------------------------------
const MILESTONES: Record<number, { title: string; text: string }> = {
  1: { title: '1 oylik', text: 'Chaqaloq yuzlarga, ayniqsa onasining yuziga uzoqroq tikiladi va tanish ovozlarga tinchlanadi. Ko‘p gaplashing, qo‘shiq ayting — u sizni tinglayapti.' },
  2: { title: '2 oylik', text: 'Ko‘pincha ilk «ijtimoiy» tabassum paydo bo‘ladi. Tabassumiga tabassum bilan javob bering — bu sizning ilk suhbatingiz.' },
  3: { title: '3 oylik', text: 'Qorniga yotganda boshini ushlab tura boshlaydi, qo‘llarini kuzatadi. Har kuni qisqa «qorin vaqti» bering.' },
  4: { title: '4 oylik', text: 'Qah-qah urib kuladi, o‘yinchoqqa qo‘l cho‘zadi, ba’zan ag‘darila boshlaydi. Uni hech qachon baland joyda yolg‘iz qoldirmang.' },
  5: { title: '5 oylik', text: 'Narsalarni og‘ziga olib o‘rganadi, ismiga qarab o‘girilishi mumkin. Atrofdagi mayda narsalarni olib qo‘ying.' },
  6: { title: '6 oylik', text: 'Ko‘pchilik chaqaloqlar tayanch bilan o‘tira boshlaydi va qo‘shimcha ovqatga tayyor bo‘ladi. Yangi taomni birma-bir, sabr bilan tanishtiring.' },
  7: { title: '7 oylik', text: '«Ba-ba», «ma-ma» kabi bo‘g‘inlar ko‘payadi, notanish odamlardan cho‘chish boshlanishi mumkin — bu mehr bog‘lanishining yaxshi belgisi.' },
  8: { title: '8 oylik', text: 'Emaklash yoki o‘rmalash davri. Uyni bola ko‘zi bilan tekshiring: rozetkalar, zinalar, o‘tkir burchaklar.' },
  9: { title: '9 oylik', text: 'Narsalarni barmoqlari bilan ushlaydi, «yo‘q» so‘zini tushuna boshlaydi. «Yo‘q» ni kam, «keling, buni qilamiz» ni ko‘p ishlating.' },
  10: { title: '10 oylik', text: 'Tayanib tik turadi, qo‘l silkitib «xayr» qiladi. Taqlid orqali o‘rganadi — siz uning birinchi o‘qituvchisisiz.' },
  11: { title: '11 oylik', text: 'Mebelga suyanib yuradi, oddiy so‘rovlarni tushunadi. Kitob ko‘rsatib, rasmlarni nomlab bering.' },
  12: { title: '1 yosh', text: 'Tabriklaymiz! Ko‘pchilik bolalar shu atrofda ilk so‘z va ilk qadamlarini qo‘yadi — ba’zilari ertaroq, ba’zilari keyinroq, bu tabiiy.' },
  18: { title: '1,5 yosh', text: 'So‘z boyligi o‘sadi, «o‘zim!» deyish boshlanadi. Mustaqillikka imkon bering: ikki variant ichidan tanlov taklif qiling.' },
  24: { title: '2 yosh', text: 'Ikki so‘zli gaplar va kuchli hissiyotlar davri. Injiqlik — bola hali his-tuyg‘usini boshqarishni o‘rganayotganining belgisi.' },
  30: { title: '2,5 yosh', text: 'Tasavvurli o‘yinlar boshlanadi. Birga «choy damlash», «doktor-doktor» o‘ynang — bu nutq va hamdardlikni rivojlantiradi.' },
  36: { title: '3 yosh', text: 'Bog‘cha yoshi: savollar ko‘payadi, do‘stlik boshlanadi. Endi 3–5 yosh uchun darslar sizga eng mos.' },
  48: { title: '4 yosh', text: '«Nega?» savollari cho‘qqisi. Har bir savol — o‘rganish eshigi; birga javob qidiring.' },
  60: { title: '5 yosh', text: 'Maktabga tayyorgarlik yili: qoidalarga amal qilish, navbat kutish, qisqa vazifalarni oxiriga yetkazishni mashq qiling.' },
  72: { title: '6 yosh', text: 'Maktab davri boshlanmoqda. Endi 6–9 yosh uchun darslar — o‘qishga qiziqish, uy vazifasi va do‘stlik haqida.' },
  84: { title: '7 yosh', text: 'Birinchi sinf yili. Bahodan ko‘ra harakatni maqtang: «Ko‘p harakat qilding, ofarin!»' },
  120: { title: '10 yosh', text: 'O‘smirlik ostonasi. Endi 10–13 yosh uchun darslar: ishonch, ekran vaqti va ochiq suhbat.' },
  168: { title: '14 yosh', text: 'O‘smirlik davri. Nazoratdan ko‘ra aloqa muhim — tinglang, hukm qilishga shoshilmang.' },
};

export function ageGroupForMonths(months: number): string {
  if (months < 36) return '0-2';
  if (months < 72) return '3-5';
  if (months < 120) return '6-9';
  if (months < 168) return '10-13';
  return '14+';
}

/**
 * The most recent month-anniversary of `birthDate` on or before today (Tashkent),
 * as { months, daysAgo }. Day 31 births celebrate on the last day of shorter months.
 */
export function lastMonthAnniversary(birthDate: string, today: ReturnType<typeof tashkentNow>) {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(birthDate || '');
  if (!m) return null;
  const [by, bm, bd] = [Number(m[1]), Number(m[2]) - 1, Number(m[3])];
  const dayIn = (y: number, mo: number) => Math.min(bd, new Date(Date.UTC(y, mo + 1, 0)).getUTCDate());
  let months = (today.y - by) * 12 + (today.m - bm);
  if (today.d < dayIn(today.y, today.m)) months -= 1;
  if (months < 1) return null;
  const annY = by + Math.floor((bm + months) / 12);
  const annM = (bm + months) % 12;
  const ann = Date.UTC(annY, annM, dayIn(annY, annM));
  const daysAgo = Math.round((Date.UTC(today.y, today.m, today.d) - ann) / DAY_MS);
  return { months, daysAgo };
}

// ---------------------------------------------------------------------------
// Broadcasts
// ---------------------------------------------------------------------------
export const BROADCAST_SEGMENTS = ['all', 'free', 'premium', 'active', 'inactive'] as const;
export type BroadcastSegment = (typeof BROADCAST_SEGMENTS)[number];

export interface BroadcastInput {
  text: string;
  segment: BroadcastSegment;
  ageGroup?: string;
  buttonText?: string;
  buttonUrl?: string;
}

function audienceQuery(segment: BroadcastSegment, ageGroup?: string) {
  const now = new Date();
  const premiumNow = [{ premiumType: 'lifetime' }, { premiumType: 'bonus', premiumExpiresAt: { $gt: now } }];
  const and: any[] = [REACHABLE];
  if (segment === 'premium') and.push({ $or: premiumNow });
  if (segment === 'free') and.push({ $nor: premiumNow });
  if (segment === 'active') and.push({ lastActiveDate: { $gte: new Date(now.getTime() - 7 * DAY_MS) } });
  if (segment === 'inactive') and.push({ lastActiveDate: { $lt: new Date(now.getTime() - 7 * DAY_MS) } });
  if (ageGroup) and.push({ $or: [{ childAgeGroup: ageGroup }, { 'children.ageGroup': ageGroup }] });
  return { $and: and };
}

/** Admin text is plain; **bold** is the one formatting shortcut. */
function renderBroadcastText(text: string): string {
  return TelegramBotEngine.esc(text).replace(/\*\*(.+?)\*\*/gs, '<b>$1</b>');
}

function broadcastMarkup(b: { buttonText?: string; buttonUrl?: string }) {
  if (!b.buttonText || !b.buttonUrl) return undefined;
  return { inline_keyboard: [[{ text: b.buttonText, url: b.buttonUrl }]] };
}

export class EngagementService {
  private static timer: NodeJS.Timeout | null = null;
  private static running = false;
  /** Job → Tashkent date it last finished, so the heavy scans run once a day per process. */
  private static doneOn: Record<string, string> = {};
  private static activeBroadcasts = new Set<string>();

  /** Starts the 5-minute tick and resumes broadcasts a restart interrupted. */
  static start() {
    if (this.timer || !TelegramBotEngine.isConfigured()) return;
    const tick = () => this.tick().catch((e) => console.warn('[Engagement] tick xatosi:', e?.message || e));
    this.timer = setInterval(tick, 5 * 60 * 1000);
    setTimeout(tick, 45 * 1000);
    setTimeout(() => this.resumeBroadcasts().catch(() => {}), 10 * 1000);
    console.log('[Engagement] 📬 Win-back, haftalik hisobot, bosqichlar va streak eslatmalari ishga tushdi.');
  }

  static async tick() {
    if (this.running || !isDbConnected()) return;
    this.running = true;
    try {
      const now = tashkentNow();
      await this.once('milestones', now, now.hour >= 10 && now.hour < 21, () => this.runMilestones(now));
      await this.once('winback', now, now.hour >= 11 && now.hour < 21, () => this.runWinback());
      await this.once('weekly', now, now.weekday === 0 && now.hour >= 19, () => this.runWeeklySummary());
      await this.once('streak', now, now.hour >= 21, () => this.runStreakSaver(now));
    } finally {
      this.running = false;
    }
  }

  private static async once(job: string, now: ReturnType<typeof tashkentNow>, due: boolean, run: () => Promise<number>) {
    if (!due || this.doneOn[job] === now.date) return;
    try {
      const sent = await run();
      this.doneOn[job] = now.date;
      if (sent) console.log(`[Engagement] ${job}: ${sent} ta xabar yuborildi`);
    } catch (e: any) {
      console.warn(`[Engagement] ${job} xatosi:`, e?.message || e);
    }
  }

  /** Sends one automated message; marks the user unreachable when they blocked the bot. */
  private static async deliver(user: any, text: string, rows: any[][]): Promise<boolean> {
    const res = await TelegramBotEngine.sendMessage(user.telegramId, text, {
      reply_markup: { inline_keyboard: [...rows, OPT_OUT_ROW] },
    });
    await sleep(PACE_MS);
    if (res?.ok) return true;
    if (res?.error_code === 403) await User.updateOne({ _id: user._id }, { $set: { botBlocked: true } });
    return false;
  }

  private static async nextLessonRow(user: any) {
    const { open, lockedNext } = await TelegramBotEngine.findNextLesson(user);
    if (open) return [{ text: `▶️ ${open.title}`.slice(0, 60), callback_data: `l:${open.slug}` }];
    if (lockedNext) return [{ text: '👑 Premium darslarni ochish', url: `${TelegramBotEngine.getClientUrl()}/premium` }];
    return [{ text: '📖 Maqolalar', callback_data: 'cmd_articles' }];
  }

  // ------------------------------ Win-back (3 and 7 days) ------------------------------
  static async runWinback(): Promise<number> {
    const now = Date.now();
    const users: any[] = await User.find({
      ...REACHABLE,
      lastActiveDate: { $gte: new Date(now - 30 * DAY_MS), $lte: new Date(now - 3 * DAY_MS) },
    })
      .select('telegramId firstName name lastActiveDate winbackAnchor winbackStage completedLessons childAgeGroup isPremium premiumType premiumExpiresAt streak')
      .limit(5000)
      .lean();

    let sent = 0;
    for (const u of users) {
      const idle = Math.floor((now - new Date(u.lastActiveDate).getTime()) / DAY_MS);
      const stage = idle >= 7 ? 7 : 3;
      const sameAnchor = u.winbackAnchor && new Date(u.winbackAnchor).getTime() === new Date(u.lastActiveDate).getTime();
      if (sameAnchor && (u.winbackStage || 0) >= stage) continue;

      // Claim first: a second instance, or the user coming back meanwhile, makes this a no-op.
      const claimed = await User.findOneAndUpdate(
        {
          _id: u._id,
          lastActiveDate: u.lastActiveDate,
          $or: [{ winbackAnchor: { $ne: u.lastActiveDate } }, { winbackStage: { $lt: stage } }],
        },
        { $set: { winbackAnchor: u.lastActiveDate, winbackStage: stage } }
      );
      if (!claimed) continue;

      const name = firstName(u);
      const done = (u.completedLessons || []).filter((s: string) => !s.startsWith('maqola-') && !s.startsWith('health-')).length;
      const text =
        stage === 3
          ? `🌿 <b>${name}, sizni sog‘indik!</b>\n\n` +
            `Bir necha kundan beri ko‘rinmadingiz. Bugun atigi 5 daqiqa ajrating — keyingi darsingiz sizni kutyapti.`
          : `💛 <b>${name}, farzand tarbiyasida kichik qadamlar ham katta natija beradi.</b>\n\n` +
            (done ? `Siz allaqachon <b>${done} ta dars</b>ni tugatgansiz — to‘xtab qolmang. ` : '') +
            `Qaytganingizda sizni yangi darslar va maqolalar kutmoqda.`;
      if (await this.deliver(u, text, [await this.nextLessonRow(u)])) sent++;
    }
    return sent;
  }

  // ------------------------------ Streak saver (21:00) ------------------------------
  static async runStreakSaver(now: ReturnType<typeof tashkentNow>): Promise<number> {
    const todayStart = tashkentDayStart();
    const users: any[] = await User.find({
      ...REACHABLE,
      streak: { $gte: 2 },
      lastActiveDate: { $gte: new Date(todayStart.getTime() - DAY_MS), $lt: todayStart },
      lastStreakSaverDate: { $ne: now.date },
    })
      .select('telegramId firstName name streak completedLessons childAgeGroup isPremium premiumType premiumExpiresAt')
      .limit(5000)
      .lean();

    let sent = 0;
    for (const u of users) {
      const claimed = await User.findOneAndUpdate(
        { _id: u._id, lastStreakSaverDate: { $ne: now.date }, lastActiveDate: { $lt: todayStart } },
        { $set: { lastStreakSaverDate: now.date } }
      );
      if (!claimed) continue;
      const text =
        `🔥 <b>${firstName(u)}, ${u.streak} kunlik seriyangiz bugun uzilib qolmasin!</b>\n\n` +
        `Kun tugashiga oz qoldi. Bitta qisqa dars — va seriya davom etadi.`;
      if (await this.deliver(u, text, [await this.nextLessonRow(u)])) sent++;
    }
    return sent;
  }

  // ------------------------------ Weekly summary (Sunday 19:00) ------------------------------
  static async runWeeklySummary(): Promise<number> {
    const since = tashkentWeekStart();
    const weekKey = new Date(since.getTime() + TASHKENT_OFFSET_MS).toISOString().slice(0, 10);

    const rows: any[] = await UserProgress.aggregate([
      { $match: { completedAt: { $gte: since } } },
      {
        $group: {
          _id: '$userId',
          xp: { $sum: '$xpEarned' },
          lessons: { $sum: { $cond: [{ $regexMatch: { input: '$lessonSlug', regex: /^(maqola-|health-)/ } }, 0, 1] } },
          articles: { $sum: { $cond: [{ $regexMatch: { input: '$lessonSlug', regex: /^maqola-/ } }, 1, 0] } },
        },
      },
      { $match: { $or: [{ lessons: { $gt: 0 } }, { articles: { $gt: 0 } }, { xp: { $gt: 0 } }] } },
      { $sort: { xp: -1 } },
    ]);
    if (!rows.length) return 0;

    const ids = rows.map((r) => String(r._id)).filter((id) => mongoose.Types.ObjectId.isValid(id));
    const users: any[] = await User.find({ _id: { $in: ids }, ...REACHABLE, lastWeeklySummary: { $ne: weekKey } })
      .select('telegramId firstName name streak hideFromLeaderboard completedLessons childAgeGroup isPremium premiumType premiumExpiresAt')
      .lean();
    const byId = new Map(users.map((u) => [String(u._id), u]));

    // Leaderboard rank among visible parents, same ordering as the weekly leaderboard.
    const hidden = new Set(
      (await User.find({ _id: { $in: ids }, hideFromLeaderboard: true }).select('_id').lean()).map((h: any) => String(h._id))
    );
    const rank = new Map<string, number>();
    rows.filter((r) => !hidden.has(String(r._id)) && r.xp > 0).forEach((r, i) => rank.set(String(r._id), i + 1));

    let sent = 0;
    for (const r of rows) {
      const u = byId.get(String(r._id));
      if (!u) continue;
      const claimed = await User.findOneAndUpdate(
        { _id: u._id, lastWeeklySummary: { $ne: weekKey } },
        { $set: { lastWeeklySummary: weekKey } }
      );
      if (!claimed) continue;

      const place = rank.get(String(u._id));
      const text =
        `📊 <b>${firstName(u)}, haftangiz natijalari</b>\n\n` +
        `🎓 Darslar: <b>${r.lessons} ta</b>\n` +
        (r.articles ? `📖 Maqolalar: <b>${r.articles} ta</b>\n` : '') +
        `⭐️ Ballar: <b>+${r.xp} XP</b>\n` +
        `🔥 Seriya: <b>${u.streak || 1} kun</b>\n` +
        (place ? `🏆 Haftalik reyting: <b>${place}-o‘rin</b>\n` : '') +
        `\nFarzandingiz uchun qilgan har bir qadamingiz qadrli. Yangi haftani ham shunday davom ettiring! 🌿`;
      if (await this.deliver(u, text, [await this.nextLessonRow(u)])) sent++;
    }
    return sent;
  }

  // ------------------------------ Child milestones (daily 10:00) ------------------------------
  static async runMilestones(now: ReturnType<typeof tashkentNow>): Promise<number> {
    const users: any[] = await User.find({ ...REACHABLE, 'children.birthDate': { $exists: true, $nin: [null, ''] } })
      .select('telegramId firstName name children sentMilestones')
      .limit(10000)
      .lean();

    let sent = 0;
    for (const u of users) {
      for (const child of u.children || []) {
        const ann = child.birthDate ? lastMonthAnniversary(child.birthDate, now) : null;
        // Tolerate a few missed days (server downtime) but never announce an old milestone.
        if (!ann || ann.daysAgo > 3 || !MILESTONES[ann.months]) continue;
        const key = `${child.id}:${ann.months}`;
        if ((u.sentMilestones || []).includes(key)) continue;

        const claimed = await User.findOneAndUpdate(
          { _id: u._id, sentMilestones: { $ne: key } },
          { $addToSet: { sentMilestones: key } }
        );
        if (!claimed) continue;

        const ms = MILESTONES[ann.months];
        const group = ageGroupForMonths(ann.months);
        const childName = TelegramBotEngine.esc(child.name || 'Farzandingiz');
        const text =
          `🎈 <b>${childName} bugun ${ms.title}!</b>\n\n` +
          `${ms.text}\n\n` +
          `<i>Har bir bola o‘z sur’atida rivojlanadi — boshqalar bilan solishtirmang. Xavotir bo‘lsa, shifokor bilan maslahatlashing.</i>`;
        const rows = [[{ text: `📚 ${group} yosh uchun darslar`, web_app: { url: `${TelegramBotEngine.getClientUrl()}/darslar?ageGroup=${encodeURIComponent(group)}` } }]];
        if (await this.deliver(u, text, rows)) sent++;
      }
    }
    return sent;
  }

  // ------------------------------ Admin broadcasts ------------------------------
  static async countAudience(segment: BroadcastSegment, ageGroup?: string) {
    return User.countDocuments(audienceQuery(segment, ageGroup));
  }

  static async sendTest(chatId: string, input: BroadcastInput) {
    const res = await TelegramBotEngine.sendMessage(chatId, renderBroadcastText(input.text), {
      reply_markup: broadcastMarkup(input),
    });
    if (!res?.ok) throw new Error(res?.description || 'Telegram xabarni qabul qilmadi');
  }

  static async startBroadcast(admin: any, input: BroadcastInput) {
    const total = await this.countAudience(input.segment, input.ageGroup);
    const doc: any = await Broadcast.create({
      ...input,
      total,
      actorId: String(admin._id),
      actorName: admin.telegramUsername ? `@${admin.telegramUsername}` : admin.name,
    });
    this.runBroadcast(String(doc._id)).catch((e) => console.warn('[Broadcast] xatosi:', e?.message || e));
    return doc;
  }

  static async listBroadcasts(limit = 20) {
    return Broadcast.find().sort({ createdAt: -1 }).limit(Math.min(limit, 50)).lean();
  }

  private static async resumeBroadcasts() {
    if (!isDbConnected()) return;
    const running: any[] = await Broadcast.find({ status: 'running' }).select('_id').lean();
    for (const b of running) {
      this.runBroadcast(String(b._id)).catch((e) => console.warn('[Broadcast] davom ettirishda xatolik:', e?.message || e));
    }
  }

  /** Walks the audience in _id order; the cursor is saved per batch so a restart resumes, not repeats. */
  private static async runBroadcast(id: string) {
    if (this.activeBroadcasts.has(id)) return;
    this.activeBroadcasts.add(id);
    try {
      const b: any = await Broadcast.findById(id);
      if (!b || b.status !== 'running') return;
      const text = renderBroadcastText(b.text);
      const reply_markup = broadcastMarkup(b);
      const base = audienceQuery(b.segment, b.ageGroup);
      let cursor: string | undefined = b.cursor;

      for (;;) {
        const batch: any[] = await User.find(cursor ? { $and: [base, { _id: { $gt: cursor } }] } : base)
          .sort({ _id: 1 })
          .limit(100)
          .select('telegramId')
          .lean();
        if (!batch.length) break;

        const inc = { sent: 0, failed: 0, blocked: 0 };
        for (const u of batch) {
          const res = await TelegramBotEngine.sendMessage(u.telegramId, text, reply_markup ? { reply_markup } : {});
          if (res?.ok) inc.sent++;
          else if (res?.error_code === 403) {
            inc.blocked++;
            await User.updateOne({ _id: u._id }, { $set: { botBlocked: true } });
          } else if (res?.error_code === 429) {
            // Rate limited: wait as told and retry this user once.
            await sleep(((res.parameters?.retry_after as number) || 3) * 1000);
            const retry = await TelegramBotEngine.sendMessage(u.telegramId, text, reply_markup ? { reply_markup } : {});
            if (retry?.ok) inc.sent++;
            else inc.failed++;
          } else inc.failed++;
          await sleep(PACE_MS);
        }
        cursor = String(batch[batch.length - 1]._id);
        await Broadcast.updateOne({ _id: id }, { $inc: inc, $set: { cursor } });
      }
      await Broadcast.updateOne({ _id: id }, { $set: { status: 'done', finishedAt: new Date() } });
    } finally {
      this.activeBroadcasts.delete(id);
    }
  }
}
