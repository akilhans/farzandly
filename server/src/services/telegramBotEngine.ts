import { DataService } from './dataService.js';
import { TelegramSessionService } from './telegramSessionService.js';

export interface TelegramBotOptions {
  token?: string;
  clientUrl?: string;
}

const PARENTING_TIPS = [
  {
    title: "Tantrum paytida nima qilish kerak?",
    tip: "Bola yig'layotganda va injiqlik qilganda mantiqiy tushuntirish berishga urinmang — uning mantiqiy miyasi hozir o'chiq. Xavfsiz masofada yonida bo'ling, unga baqirmang va bo'ron o'tib ketgach quchoqlang.",
  },
  {
    title: "Tanlov berish usuli",
    tip: "Bolaning o'jarligini kamaytirish uchun unga soxta nazorat bering: «Hozir kiyinamiz» emas, «Qizil ko'ylagingni kiyasanmi yoki ko'kini?» deb so'rang. Bu bolaga mustaqillik hissini beradi.",
  },
  {
    title: "Ekran vaqti chegarasi",
    tip: "Telefonni to'satdan tortib olmang. Oldindan ogohlantiring: «Yana 5 daqiqadan so'ng multfilmni to'xtatamiz va rasm chizamiz». Belgilangan vaqt tugagach mehr bilan chalg'iting.",
  },
  {
    title: "Ijobiy intizom qoidasi",
    tip: "Bolani baholari uchun emas, ko'rsatgan mehnati uchun maqtang. «Sen aqllisan» emas, «Sen bu masalani yechish uchun ancha harakat qilding, ofarin!» degan maqtov bola irodasini mustahkamlaydi.",
  },
  {
    title: "Mehr va quchoqlash",
    tip: "Tadqiqotlarga ko'ra, bolaga kuniga kamida 4 marta omon qolish uchun, 8 marta me'yorda bo'lish uchun va 12 marta o'sishi uchun quchoqlashish kerak. Har kuni bolangizni bag'ringizga bosing.",
  },
  {
    title: "Islomiy tarbiya namunasi",
    tip: "Rasululloh (s.a.v.) bolalar bilan suhbatlashganda ularning bo'yiga moslab egilar, ko'zlariga qarab gapirardilar. Bolangiz bilan gaplashayotganda doim uning ko'ziga qarang.",
  },
];

export class TelegramBotEngine {
  private static pollingActive = false;
  private static pollingOffset = 0;
  private static abortController: AbortController | null = null;

  static getBotToken(): string {
    return (
      process.env.TELEGRAM_BOT_TOKEN ||
      process.env.BOT_TOKEN ||
      ''
    );
  }

  static getClientUrl(): string {
    return (process.env.CLIENT_URL || 'https://farzandly.uz').replace(/\/$/, '');
  }

  static isConfigured(): boolean {
    const token = this.getBotToken();
    // Valid Telegram bot tokens contain a colon (e.g. 891291780:AA...)
    return Boolean(token && token.includes(':'));
  }

  private static cachedBotUsername: string | null = null;

  /**
   * Get bot username dynamically from environment or Telegram API
   */
  static async getBotUsername(): Promise<string> {
    if (this.cachedBotUsername) return this.cachedBotUsername;
    const envBot = (process.env.TELEGRAM_BOT_USERNAME || process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || '')
      .replace(/^@/, '')
      .trim();
    if (envBot) {
      this.cachedBotUsername = envBot;
      return envBot;
    }
    if (this.isConfigured()) {
      try {
        const me = await this.getMe();
        if (me?.result?.username) {
          this.cachedBotUsername = me.result.username;
          return me.result.username;
        }
      } catch (err: any) {
        console.warn('[TelegramBotEngine] getBotUsername error:', err.message);
      }
    }
    return 'farzandlybot';
  }

  /**
   * Generic Telegram Bot API caller
   */
  static async callApi(method: string, body: Record<string, any> = {}): Promise<any> {
    const token = this.getBotToken();
    if (!token) {
      return { ok: false, description: 'TELEGRAM_BOT_TOKEN sozlanmagan' };
    }

    try {
      const res = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = (await res.json()) as any;
      return data;
    } catch (err: any) {
      console.warn(`[TelegramBotEngine] ${method} xatosi:`, err.message);
      return { ok: false, description: err.message };
    }
  }

  /**
   * Send Message with HTML formatting and optional keyboards
   */
  static async sendMessage(chatId: string | number, text: string, options: Record<string, any> = {}) {
    return this.callApi('sendMessage', {
      chat_id: chatId,
      text,
      parse_mode: 'HTML',
      disable_web_page_preview: false,
      ...options,
    });
  }

  /**
   * Answer callback query
   */
  static async answerCallbackQuery(callbackQueryId: string, text?: string) {
    return this.callApi('answerCallbackQuery', {
      callback_query_id: callbackQueryId,
      text,
    });
  }

  /**
   * Get bot info (getMe)
   */
  static async getMe(): Promise<any> {
    return this.callApi('getMe');
  }

  /**
   * Set webhook for Telegram bot
   */
  static async setWebhook(url: string): Promise<any> {
    return this.callApi('setWebhook', {
      url,
      drop_pending_updates: false,
      allowed_updates: ['message', 'callback_query'],
    });
  }

  /**
   * Get webhook status
   */
  static async getWebhookInfo(): Promise<any> {
    return this.callApi('getWebhookInfo');
  }

  /**
   * Delete webhook
   */
  static async deleteWebhook(): Promise<any> {
    return this.callApi('deleteWebhook');
  }

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  private static esc(value: unknown): string {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  private static truncate(value: string, max: number): string {
    return value.length > max ? `${value.slice(0, max - 1).trimEnd()}…` : value;
  }

  /** Same gating rule as the platform: premium content requires an active premium account. */
  private static isPremiumUser(user: any): boolean {
    if (!user?.isPremium) return false;
    if (user.premiumExpiresAt && new Date(user.premiumExpiresAt).getTime() < Date.now()) return false;
    return true;
  }

  private static async getUser(from: any) {
    try {
      return await DataService.getUserByIdOrTelegram(String(from.id));
    } catch {
      return null;
    }
  }

  private static premiumButton() {
    return { text: '👑 Premiumni platformada faollashtirish', url: `${this.getClientUrl()}/premium` };
  }

  /** Telegram messages are capped at 4096 chars — split on block boundaries. */
  private static chunkBlocks(blocks: string[], limit = 3800): string[] {
    const chunks: string[] = [];
    let current = '';
    for (const block of blocks) {
      if (current && current.length + block.length + 2 > limit) {
        chunks.push(current);
        current = block;
      } else {
        current = current ? `${current}\n\n${block}` : block;
      }
    }
    if (current) chunks.push(current);
    return chunks;
  }

  private static getMainReplyKeyboard() {
    const clientUrl = this.getClientUrl();
    return {
      keyboard: [
        [{ text: '🌿 Farzandly platformasini ochish', web_app: { url: clientUrl } }],
        [{ text: '📚 Darslar' }, { text: '📖 Maqolalar' }],
        [{ text: '🔎 Qidiruv' }, { text: '⏰ Eslatma' }],
        [{ text: '👤 Mening profilim' }, { text: '👑 Premium' }],
        [{ text: '💡 Kunlik maslahat' }, { text: 'ℹ️ Yordam' }],
      ],
      resize_keyboard: true,
      persistent: true,
    };
  }

  private static getMainInlineKeyboard() {
    const clientUrl = this.getClientUrl();
    return {
      inline_keyboard: [
        [{ text: '🚀 Farzandly Mini App (Ilovani ochish)', web_app: { url: clientUrl } }],
        [{ text: '▶️ Keyingi darsim', callback_data: 'n:' }],
        [
          { text: '📚 Barcha darslar', callback_data: 'cmd_courses' },
          { text: '📖 Foydali maqolalar', callback_data: 'cmd_articles' },
        ],
        [
          { text: '👤 Mening profilim', callback_data: 'cmd_profile' },
          { text: '⏰ Eslatma', callback_data: 'cmd_reminder' },
        ],
        [
          { text: '🔑 Veb-saytga bir klikda kirish', callback_data: 'cmd_weblogin' },
          { text: '🌐 Saytga o‘tish', url: clientUrl },
        ],
      ],
    };
  }

  /**
   * Generate Direct One-Click Web Login Link
   */
  static generateDirectLoginLink(user: { id: string | number; name?: string; username?: string }) {
    const clientUrl = this.getClientUrl();
    const payload = {
      telegramId: String(user.id),
      name: user.name || 'Ota-ona',
      telegramUsername: (user.username || '').replace(/^@/, ''),
      authProvider: 'telegram',
      timestamp: Date.now(),
    };
    const directToken = Buffer.from(JSON.stringify(payload)).toString('base64');
    return `${clientUrl}/kirish/callback?direct_token=${encodeURIComponent(directToken)}`;
  }

  // ---------------------------------------------------------------------------
  // Update routing
  // ---------------------------------------------------------------------------

  static async handleUpdate(update: any): Promise<void> {
    if (!update) return;

    try {
      if (update.callback_query) {
        await this.handleCallbackQuery(update.callback_query);
        return;
      }
      if (update.message) {
        await this.handleMessage(update.message);
      }
    } catch (err: any) {
      console.error('[TelegramBotEngine] handleUpdate xatosi:', err?.message || err);
    }
  }

  private static async handleMessage(msg: any) {
    const chatId = msg.chat?.id;
    const from = msg.from;
    const text = (msg.text || '').trim();

    if (!chatId || !from) return;

    // Keep the Telegram account in sync with the platform user record
    try {
      const displayName = from.username
        ? `@${from.username}`
        : `${from.first_name || ''} ${from.last_name || ''}`.trim() || 'Ota-ona';
      await DataService.upsertTelegramUser({
        telegramId: String(from.id),
        telegramUsername: from.username,
        name: displayName,
        firstName: from.first_name,
        lastName: from.last_name,
        photoUrl: from.username ? `https://t.me/i/userpic/320/${from.username}.jpg` : undefined,
      });
    } catch (err: any) {
      console.warn('[TelegramBotEngine] Sync user failed:', err.message);
    }

    const lower = text.toLowerCase();
    const is = (...variants: string[]) => variants.some((v) => lower === v.toLowerCase());

    // Handle /start with deep link session or parameters
    const startMatch = text.match(/^\/start(?:@\w+)?(?:\s+(.+))?$/i);
    if (startMatch) {
      const startParam = (startMatch[1] || '').trim();
      if (startParam) {
        if (startParam.toLowerCase() === 'eslatma') {
          return this.sendReminderSettings(chatId, from);
        }

        // Check if startParam is an active web login session!
        const authUser = await TelegramSessionService.authenticateSession(startParam, from);
        if (authUser) {
          const clientUrl = this.getClientUrl();
          const displayName = authUser.name || from.first_name || 'Ota-ona';

          const confirmText =
            `🌿 <b>Farzandly platformasiga xush kelibsiz!</b>\n\n` +
            `Assalomu alaykum, <b>${this.esc(displayName)}</b>!\n\n` +
            `✅ <b>Hisobingiz muvaffaqiyatli tasdiqlandi.</b>\n` +
            `Brauzeringizdagi sahifa avtomatik yangilanadi va profilingiz ochiladi.\n\n` +
            `Agar sahifa avtomatik ochilmagan bo‘lsa, quyidagi tugma orqali to‘g‘ridan-to‘g‘ri saytga o‘tishingiz mumkin:`;

          await this.sendMessage(chatId, confirmText, {
            reply_markup: {
              inline_keyboard: [
                [{ text: '🚀 Saytga kirish', url: `${clientUrl}/dashboard` }],
                [{ text: '📱 Telegram Mini Appda ochish', web_app: { url: clientUrl } }],
              ],
            },
          });
          return;
        }
      }

      return this.sendWelcomeMessage(chatId, from);
    }
    // `/kurslar` kept as a backward-compatible alias of `/darslar`
    if (is('/darslar', '/kurslar', '📚 Darslar', '📚 Kurslar')) return this.sendCoursesList(chatId, from);
    if (is('/maqolalar', '📖 Maqolalar')) return this.sendArticlesList(chatId, from);
    if (is('/profil', '👤 Mening profilim', '👤 Profilim')) return this.sendUserProfile(chatId, from);
    if (is('/login', '🔑 Saytga bir klikda kirish', '🔑 Veb-saytga kirish')) return this.sendDirectLogin(chatId, from);
    if (is('/maslahat', '💡 Kunlik maslahat', '💡 Maslahat')) return this.sendDailyTip(chatId);
    if (is('/yordam', '/help', 'ℹ️ Yordam')) return this.sendHelp(chatId);
    if (is('/premium', '👑 Premium')) return this.sendPremiumInfo(chatId, from);
    if (is('/eslatma', '⏰ Eslatma')) return this.sendReminderSettings(chatId, from);
    if (is('/keyingi')) return this.sendNextLesson(chatId, from);

    if (lower.startsWith('/qidiruv') || is('🔎 Qidiruv')) {
      const q = text.replace(/^\/qidiruv(@\w+)?/i, '').replace('🔎 Qidiruv', '').trim();
      if (!q) {
        await this.sendMessage(
          chatId,
          '🔎 <b>Qidiruv</b>\n\nQidirmoqchi bo‘lgan mavzuni yozing, masalan: <i>tantrum</i>, <i>namoz</i>, <i>ekran</i>.'
        );
        return;
      }
      return this.sendSearchResults(chatId, from, q);
    }

    // Any other plain text is treated as a search query across lessons and articles
    if (text && !text.startsWith('/')) {
      return this.sendSearchResults(chatId, from, text);
    }

    await this.sendMessage(chatId, '🌿 <b>Farzandly</b>\n\nKerakli bo‘limni tanlang:', {
      reply_markup: this.getMainInlineKeyboard(),
    });
  }

  private static async handleCallbackQuery(cb: any) {
    const chatId = cb.message?.chat?.id;
    const from = cb.from;
    const data: string = cb.data || '';

    if (!chatId || !from) {
      await this.answerCallbackQuery(cb.id);
      return;
    }

    let toast: string | undefined;

    if (data.startsWith('rem:')) {
      toast = await this.handleReminderCallback(chatId, from, data);
    }
    await this.answerCallbackQuery(cb.id, toast);
    if (data.startsWith('rem:')) return;

    if (data === 'cmd_courses') return this.sendCoursesList(chatId, from);
    if (data === 'cmd_articles') return this.sendArticlesList(chatId, from);
    if (data === 'cmd_profile') return this.sendUserProfile(chatId, from);
    if (data === 'cmd_weblogin') return this.sendDirectLogin(chatId, from);
    if (data === 'cmd_tip') return this.sendDailyTip(chatId);
    if (data === 'cmd_help') return this.sendHelp(chatId);
    if (data === 'cmd_premium') return this.sendPremiumInfo(chatId, from);
    if (data === 'cmd_reminder') return this.sendReminderSettings(chatId, from);
    if (data === 'n:') return this.sendNextLesson(chatId, from);
    if (data.startsWith('c:')) return this.sendCourse(chatId, from, data.slice(2));
    if (data.startsWith('l:')) return this.sendLesson(chatId, from, data.slice(2));
    if (data.startsWith('d:')) return this.completeLesson(chatId, from, data.slice(2));
    if (data.startsWith('a:')) return this.sendArticle(chatId, from, data.slice(2));
  }

  // ---------------------------------------------------------------------------
  // Screens
  // ---------------------------------------------------------------------------

  private static async sendWelcomeMessage(chatId: string | number, from: any) {
    const userName = this.esc(from.first_name || from.username || 'Ota-ona');

    const text =
      `🌿 <b>Assalomu alaykum, ${userName}!</b>\n\n` +
      `<b>Farzandly</b> — ota-onalar uchun zamonaviy raqamli tarbiya platformasining rasmiy botiga xush kelibsiz!\n\n` +
      `Bot va sayt <b>bir xil darslar va maqolalarni</b> ko‘rsatadi:\n` +
      `• 📚 5 daqiqalik amaliy darslar (1–10-darslar bepul)\n` +
      `• 📖 Tarbiya, hissiyotlar va intizom haqida maqolalar\n` +
      `• 🔎 Mavzu bo‘yicha qidiruv — shunchaki so‘z yozing\n` +
      `• ⏰ Har kuni dars eslatmasi\n` +
      `• 👑 Premium darslar — platformada faollashtiriladi\n\n` +
      `<i>Boshlash uchun «Keyingi darsim» tugmasini bosing:</i>`;

    await this.sendMessage(chatId, text, { reply_markup: this.getMainInlineKeyboard() });
    await this.sendMessage(chatId, '👇 Menyu orqali kerakli bo‘limni tanlang:', {
      reply_markup: this.getMainReplyKeyboard(),
    });
  }

  private static async sendCoursesList(chatId: string | number, from: any) {
    try {
      const courses = await DataService.getCourses();

      let text = `📚 <b>Farzandly darslari:</b>\n\n`;
      const buttons: any[][] = [];

      courses.forEach((c: any, index: number) => {
        const lock = c.isPremium ? '👑 Premium' : '🆓 Bepul';
        text += `<b>${index + 1}. ${this.esc(c.title)}</b>\n`;
        text += `${lock} • ${c.totalLessons ?? '?'} ta dars • ⏱ ${c.estimatedMinutes ?? '?'} daqiqa • ${this.esc(c.ageGroup)} yosh\n\n`;
        buttons.push([{ text: `${index + 1}. ${this.truncate(c.title, 40)}`, callback_data: `c:${c.slug}` }]);
      });

      buttons.push([{ text: '🌐 Platformada ochish', web_app: { url: `${this.getClientUrl()}/darslar` } }]);

      await this.sendMessage(chatId, text, { reply_markup: { inline_keyboard: buttons } });
    } catch (err: any) {
      console.warn('[TelegramBotEngine] sendCoursesList:', err.message);
      await this.sendMessage(chatId, 'Darslar ro‘yxatini yuklashda xatolik yuz berdi.');
    }
  }

  private static async sendCourse(chatId: string | number, from: any, slug: string) {
    const clientUrl = this.getClientUrl();
    const [course, lessons, user] = await Promise.all([
      DataService.getCourseBySlug(slug),
      DataService.getLessons({ courseSlug: slug }),
      this.getUser(from),
    ]);

    if (!course) {
      await this.sendMessage(chatId, 'Bu dars to‘plami topilmadi.');
      return;
    }

    const premium = this.isPremiumUser(user);
    const completed: string[] = user?.completedLessons || [];

    const text =
      `📚 <b>${this.esc(course.title)}</b>\n` +
      `${course.isPremium ? '👑 Premium' : '🆓 Bepul'} • ${lessons.length} ta dars • ⏱ ${course.estimatedMinutes ?? '?'} daqiqa\n\n` +
      `${this.esc(course.description)}\n\n` +
      `✅ tugatilgan • ▶️ ochiq • 🔒 Premium`;

    const buttons: any[][] = lessons.map((l: any) => {
      const done = completed.includes(l.slug);
      const locked = Boolean(l.isPremium && !premium);
      const icon = done ? '✅' : locked ? '🔒' : '▶️';
      return [{ text: `${icon} ${l.order}. ${this.truncate(l.title, 42)}`, callback_data: `l:${l.slug}` }];
    });
    buttons.push([
      { text: '⬅️ Barcha darslar', callback_data: 'cmd_courses' },
      { text: '🌐 Saytda', web_app: { url: `${clientUrl}/darslar/${course.slug}` } },
    ]);

    await this.sendMessage(chatId, text, { reply_markup: { inline_keyboard: buttons } });
  }

  private static async sendLockedNotice(chatId: string | number, title: string, backData?: string) {
    const rows: any[][] = [[this.premiumButton()]];
    if (backData) rows.push([{ text: '⬅️ Orqaga', callback_data: backData }]);
    await this.sendMessage(
      chatId,
      `🔒 <b>${this.esc(title)}</b>\n\n` +
        `Bu kontent <b>Premium</b> obunachilar uchun. 1–10-darslar hamda asosiy maqolalar barcha uchun bepul.\n\n` +
        `Premiumni faollashtirish platformada amalga oshiriladi — quyidagi tugma sizni sayt sahifasiga olib boradi.`,
      { reply_markup: { inline_keyboard: rows } }
    );
  }

  private static async sendLesson(chatId: string | number, from: any, slug: string) {
    const clientUrl = this.getClientUrl();
    const [lesson, user] = await Promise.all([DataService.getLessonByIdOrSlug(slug), this.getUser(from)]);

    if (!lesson) {
      await this.sendMessage(chatId, 'Bu dars topilmadi.');
      return;
    }

    if (lesson.isPremium && !this.isPremiumUser(user)) {
      await this.sendLockedNotice(chatId, lesson.title, `c:${lesson.courseSlug}`);
      return;
    }

    const icons: Record<string, string> = {
      scenario: '🎬',
      concept: '💡',
      explanation: '📘',
      islamic_perspective: '🕌',
      practice: '✅',
      quiz: '❓',
      victory: '🏆',
    };

    const blocks: string[] = [
      `📘 <b>${this.esc(lesson.title)}</b>\n` +
        `⏱ ${lesson.estimatedMinutes ?? 5} daqiqa • ⭐️ +${lesson.xpReward ?? 10} XP • ${this.esc(lesson.ageGroup)} yosh\n` +
        `<i>${this.esc(lesson.summary)}</i>`,
    ];

    for (const screen of lesson.screens || []) {
      let block = `${icons[screen.type] || '▫️'} <b>${this.esc(screen.title)}</b>`;
      if (screen.subtitle) block += `\n<i>${this.esc(screen.subtitle)}</i>`;
      if (screen.content) block += `\n${this.esc(screen.content)}`;
      if (screen.example) block += `\n\n💬 <i>${this.esc(screen.example)}</i>`;
      if (screen.highlight) block += `\n\n⭐️ <b>${this.esc(screen.highlight)}</b>`;
      if (screen.quoteSource) block += `\n— ${this.esc(screen.quoteSource)}`;

      if (screen.type === 'quiz' && screen.quizQuestion) {
        const options: string[] = screen.quizOptions || [];
        block += `\n\n<b>${this.esc(screen.quizQuestion)}</b>`;
        options.forEach((opt, i) => {
          block += `\n${String.fromCharCode(65 + i)}) ${this.esc(opt)}`;
        });
        if (typeof screen.correctOptionIndex === 'number' && options[screen.correctOptionIndex]) {
          block += `\n\n👀 Javob: <tg-spoiler>${String.fromCharCode(65 + screen.correctOptionIndex)}) ${this.esc(
            options[screen.correctOptionIndex]
          )}${screen.quizExplanation ? ` — ${this.esc(screen.quizExplanation)}` : ''}</tg-spoiler>`;
        }
      }
      blocks.push(block);
    }

    const chunks = this.chunkBlocks(blocks);
    const done = (user?.completedLessons || []).includes(lesson.slug);

    for (let i = 0; i < chunks.length; i++) {
      const isLast = i === chunks.length - 1;
      await this.sendMessage(
        chatId,
        chunks[i],
        isLast
          ? {
              reply_markup: {
                inline_keyboard: [
                  [
                    done
                      ? { text: '✅ Tugatilgan — keyingisi', callback_data: 'n:' }
                      : { text: `✅ Darsni yakunlash (+${lesson.xpReward ?? 10} XP)`, callback_data: `d:${lesson.slug}` },
                  ],
                  [
                    { text: '📱 Platformada ochish', web_app: { url: `${clientUrl}/dars/${lesson.slug}` } },
                    { text: '⬅️ Darslar', callback_data: `c:${lesson.courseSlug}` },
                  ],
                ],
              },
            }
          : {}
      );
    }
  }

  private static async completeLesson(chatId: string | number, from: any, slug: string) {
    const [lesson, user] = await Promise.all([DataService.getLessonByIdOrSlug(slug), this.getUser(from)]);
    if (!lesson || !user) {
      await this.sendMessage(chatId, 'Darsni yakunlashda xatolik yuz berdi. Iltimos, /start ni bosing.');
      return;
    }
    if (lesson.isPremium && !this.isPremiumUser(user)) {
      await this.sendLockedNotice(chatId, lesson.title, `c:${lesson.courseSlug}`);
      return;
    }
    if ((user.completedLessons || []).includes(lesson.slug)) {
      await this.sendMessage(chatId, '✅ Bu dars allaqachon tugatilgan.', {
        reply_markup: { inline_keyboard: [[{ text: '▶️ Keyingi dars', callback_data: 'n:' }]] },
      });
      return;
    }

    const userId = String(user._id ?? user.id);
    const result: any = await DataService.recordProgress({
      userId,
      lessonSlug: lesson.slug,
      xpEarned: lesson.xpReward || 10,
    });
    const updated = result?.updatedUser || result?.user || user;

    await this.sendMessage(
      chatId,
      `🎉 <b>Dars yakunlandi!</b>\n\n` +
        `«${this.esc(lesson.title)}»\n` +
        `⭐️ +${lesson.xpReward || 10} XP • Jami: <b>${updated.xp ?? 0} XP</b>\n` +
        `🔥 Ketma-ket: <b>${updated.streak ?? 1} kun</b>\n\n` +
        `<i>Natijangiz saytdagi profilingiz bilan sinxronlangan.</i>`,
      { reply_markup: { inline_keyboard: [[{ text: '▶️ Keyingi dars', callback_data: 'n:' }]] } }
    );
  }

  /** First lesson the user hasn't completed (respecting age group and premium access). */
  private static async findNextLesson(user: any) {
    const premium = this.isPremiumUser(user);
    const completed: string[] = user?.completedLessons || [];
    const ageGroup: string | undefined = user?.childAgeGroup;

    let lessons: any[] = ageGroup ? await DataService.getLessons({ ageGroup }) : [];
    if (!lessons.length) lessons = await DataService.getLessons();

    const remaining = lessons.filter((l: any) => !completed.includes(l.slug));
    const open = remaining.find((l: any) => !l.isPremium || premium);
    return { open, lockedNext: open ? undefined : remaining[0], remainingCount: remaining.length };
  }

  private static async sendNextLesson(chatId: string | number, from: any) {
    const user = await this.getUser(from);
    const { open, lockedNext } = await this.findNextLesson(user);

    if (open) return this.sendLesson(chatId, from, open.slug);
    if (lockedNext) return this.sendLockedNotice(chatId, lockedNext.title);

    await this.sendMessage(chatId, '🏆 Barcha mavjud darslarni tugatdingiz! Yangi maqolalarni o‘qing:', {
      reply_markup: { inline_keyboard: [[{ text: '📖 Maqolalar', callback_data: 'cmd_articles' }]] },
    });
  }

  private static async sendArticlesList(chatId: string | number, from: any) {
    try {
      const articles = await DataService.getArticles();

      let text = `📖 <b>Foydali maqolalar:</b>\n\n`;
      const buttons: any[][] = [];

      articles.slice(0, 9).forEach((a: any, index: number) => {
        text += `<b>${index + 1}. ${this.esc(a.title)}</b>\n`;
        text += `${a.isPremium ? '👑 Premium' : '🆓 Bepul'} • ⏳ ${a.readingTimeMinutes || 5} daqiqa\n`;
        text += `<i>${this.esc(this.truncate(a.excerpt || '', 140))}</i>\n\n`;
        buttons.push([{ text: `${a.isPremium ? '🔒' : '📖'} ${this.truncate(a.title, 40)}`, callback_data: `a:${a.slug}` }]);
      });
      buttons.push([{ text: '🌐 Platformada ochish', web_app: { url: `${this.getClientUrl()}/maqolalar` } }]);

      await this.sendMessage(chatId, text, { reply_markup: { inline_keyboard: buttons } });
    } catch (err: any) {
      console.warn('[TelegramBotEngine] sendArticlesList:', err.message);
      await this.sendMessage(chatId, 'Maqolalarni yuklashda xatolik yuz berdi.');
    }
  }

  private static async sendArticle(chatId: string | number, from: any, slug: string) {
    const [article, user] = await Promise.all([DataService.getArticleBySlug(slug), this.getUser(from)]);
    if (!article) {
      await this.sendMessage(chatId, 'Bu maqola topilmadi.');
      return;
    }
    if (article.isPremium && !this.isPremiumUser(user)) {
      await this.sendLockedNotice(chatId, article.title, 'cmd_articles');
      return;
    }

    const paragraphs = String(article.content || '')
      .split(/\n{2,}/)
      .map((p) => this.esc(p.trim()))
      .filter(Boolean);
    const blocks = [
      `📖 <b>${this.esc(article.title)}</b>\n⏳ ${article.readingTimeMinutes || 5} daqiqa`,
      ...(paragraphs.length ? paragraphs : [this.esc(article.excerpt)]),
    ];
    const chunks = this.chunkBlocks(blocks);

    for (let i = 0; i < chunks.length; i++) {
      await this.sendMessage(
        chatId,
        chunks[i],
        i === chunks.length - 1
          ? {
              reply_markup: {
                inline_keyboard: [
                  [{ text: '📱 Platformada ochish', web_app: { url: `${this.getClientUrl()}/maqolalar/${article.slug}` } }],
                  [{ text: '⬅️ Maqolalar', callback_data: 'cmd_articles' }],
                ],
              },
            }
          : {}
      );
    }
  }

  private static async sendSearchResults(chatId: string | number, from: any, query: string) {
    const q = query.trim().slice(0, 60);
    const { lessons, articles } = await DataService.searchContent(q, 'uz', 6);
    const user = await this.getUser(from);
    const premium = this.isPremiumUser(user);

    if (!lessons.length && !articles.length) {
      await this.sendMessage(
        chatId,
        `🔎 «${this.esc(q)}» bo‘yicha hech narsa topilmadi.\n\nBoshqa so‘z bilan urinib ko‘ring yoki barcha darslarni ko‘ring.`,
        { reply_markup: { inline_keyboard: [[{ text: '📚 Barcha darslar', callback_data: 'cmd_courses' }]] } }
      );
      return;
    }

    const buttons: any[][] = [];
    let text = `🔎 <b>«${this.esc(q)}»</b> bo‘yicha natijalar:\n\n`;

    if (lessons.length) {
      text += `<b>📚 Darslar</b>\n`;
      lessons.forEach((l: any) => {
        const locked = l.isPremium && !premium;
        text += `• ${locked ? '🔒 ' : ''}${this.esc(l.title)}\n`;
        buttons.push([{ text: `${locked ? '🔒' : '▶️'} ${this.truncate(l.title, 44)}`, callback_data: `l:${l.slug}` }]);
      });
      text += '\n';
    }
    if (articles.length) {
      text += `<b>📖 Maqolalar</b>\n`;
      articles.forEach((a: any) => {
        const locked = a.isPremium && !premium;
        text += `• ${locked ? '🔒 ' : ''}${this.esc(a.title)}\n`;
        buttons.push([{ text: `${locked ? '🔒' : '📖'} ${this.truncate(a.title, 44)}`, callback_data: `a:${a.slug}` }]);
      });
    }

    await this.sendMessage(chatId, text, { reply_markup: { inline_keyboard: buttons } });
  }

  private static async sendPremiumInfo(chatId: string | number, from: any) {
    const user = await this.getUser(from);
    if (this.isPremiumUser(user)) {
      await this.sendMessage(chatId, '👑 <b>Sizda Premium faol!</b>\n\nBarcha darslar va maqolalar ochiq. Yaxshi o‘qing! 🌿', {
        reply_markup: { inline_keyboard: [[{ text: '▶️ Keyingi darsim', callback_data: 'n:' }]] },
      });
      return;
    }

    await this.sendMessage(
      chatId,
      `👑 <b>Farzandly Premium</b>\n\n` +
        `• 1–10-darslar va asosiy maqolalar — <b>bepul</b>\n` +
        `• 11-darsdan boshlab barcha chuqurlashtirilgan darslar, amaliy topshiriqlar va maqolalar — <b>Premium</b>\n\n` +
        `To‘lov va faollashtirish <b>platformada</b> amalga oshiriladi. Quyidagi tugmani bosing:`,
      { reply_markup: { inline_keyboard: [[this.premiumButton()]] } }
    );
  }

  private static async sendUserProfile(chatId: string | number, from: any) {
    const clientUrl = this.getClientUrl();
    try {
      const user = await this.getUser(from);
      const loginLink = this.generateDirectLoginLink(from);

      const name = this.esc(user?.name || from.first_name || 'Ota-ona');
      const xp = user?.xp || 0;
      const streak = user?.streak || user?.streakDays || 1;
      const level = this.esc(user?.level || 'O‘rganuvchi');
      const completedCount = user?.completedLessons?.length || 0;
      const premium = this.isPremiumUser(user);
      const reminder = user?.reminderEnabled ? `yoqilgan (${String(user.reminderHour ?? 20).padStart(2, '0')}:00)` : 'o‘chirilgan';

      const text =
        `👤 <b>Farzandly Profilingiz:</b>\n\n` +
        `🆔 Telegram ID: <code>${from.id}</code>\n` +
        `👤 Ism: <b>${name}</b>\n` +
        `⭐️ Ballar: <b>${xp} XP</b>\n` +
        `🔥 O‘qish davomiyligi: <b>${streak} kun</b> ketma-ket\n` +
        `🏆 Daraja: <b>${level}</b>\n` +
        `🎓 Tamomlangan darslar: <b>${completedCount} ta</b>\n` +
        `👑 Premium: <b>${premium ? 'faol' : 'yo‘q'}</b>\n` +
        `⏰ Eslatma: <b>${reminder}</b>\n\n` +
        `<i>Profilingizni saytda to‘g‘ridan-to‘g‘ri ochishingiz mumkin:</i>`;

      const rows: any[][] = [
        [{ text: '👤 Profilni ochish (Mini App)', web_app: { url: `${clientUrl}/profil` } }],
        [{ text: '🔑 Saytga kirish (Bir klikda)', url: loginLink }],
      ];
      if (!premium) rows.push([this.premiumButton()]);

      await this.sendMessage(chatId, text, { reply_markup: { inline_keyboard: rows } });
    } catch {
      await this.sendMessage(chatId, 'Profil ma’lumotlarini olishda xatolik yuz berdi.');
    }
  }

  private static async sendDirectLogin(chatId: string | number, from: any) {
    const loginLink = this.generateDirectLoginLink(from);
    const clientUrl = this.getClientUrl();

    const text =
      `🔑 <b>Farzandly platformasiga bir klikda kiring</b>\n\n` +
      `Siz Telegram orqali ro‘yxatdan o‘tgansiz. Quyidagi havola orqali brauzerda parol terishsiz hisobingizga kirishingiz mumkin:\n\n` +
      `👉 <a href="${loginLink}">Platformaga kirish (avtorizatsiyalangan)</a>\n\n` +
      `<i>Eslatma: Bu havola shaxsiy hisobingizga tegishli. Uni boshqalarga ulashmang.</i>`;

    await this.sendMessage(chatId, text, {
      reply_markup: {
        inline_keyboard: [
          [{ text: '🚀 Saytga to‘g‘ridan-to‘g‘ri kirish', url: loginLink }],
          [{ text: '📱 Telegram Mini Appda ochish', web_app: { url: clientUrl } }],
        ],
      },
    });
  }

  private static async sendDailyTip(chatId: string | number) {
    const tip = PARENTING_TIPS[Math.floor(Math.random() * PARENTING_TIPS.length)];

    await this.sendMessage(
      chatId,
      `💡 <b>Kunlik tarbiya maslahati:</b>\n\n📌 <b>${this.esc(tip.title)}</b>\n\n${this.esc(tip.tip)}\n\n` +
        `🌿 <i>Farzand tarbiyasi — har kuni o‘rganiladigan mehrli yo‘ldir.</i>`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: '🔄 Boshqa maslahat', callback_data: 'cmd_tip' },
              { text: '📚 Darslarni o‘rganish', callback_data: 'cmd_courses' },
            ],
            [{ text: '📱 Platformani ochish', web_app: { url: this.getClientUrl() } }],
          ],
        },
      }
    );
  }

  private static async sendHelp(chatId: string | number) {
    const text =
      `ℹ️ <b>Farzandly boti bo‘yicha qo‘llanma:</b>\n\n` +
      `Bot saytdagi bilan <b>bir xil</b> darslar, maqolalar va natijalarni ko‘rsatadi.\n\n` +
      `<b>Buyruqlar:</b>\n` +
      `• /start — asosiy menyu\n` +
      `• /keyingi — keyingi darsingiz\n` +
      `• /darslar — barcha darslar\n` +
      `• /maqolalar — maqolalar\n` +
      `• /qidiruv <i>so‘z</i> — darslar va maqolalardan qidirish (yoki shunchaki yozing)\n` +
      `• /eslatma — kunlik dars eslatmasi\n` +
      `• /profil — ball, daraja, tugatilgan darslar\n` +
      `• /premium — Premium (platformada faollashtiriladi)\n` +
      `• /login — saytga bir klikda kirish\n` +
      `• /maslahat — kunlik maslahat`;

    await this.sendMessage(chatId, text, {
      reply_markup: {
        inline_keyboard: [[{ text: '🌿 Farzandly platformasini ochish', web_app: { url: this.getClientUrl() } }]],
      },
    });
  }

  // ---------------------------------------------------------------------------
  // Daily reminders (times are Asia/Tashkent, UTC+5)
  // ---------------------------------------------------------------------------

  private static readonly REMINDER_HOURS = [7, 9, 12, 18, 20, 21];

  private static async sendReminderSettings(chatId: string | number, from: any) {
    const user = await this.getUser(from);
    const enabled = Boolean(user?.reminderEnabled);
    const hour: number = user?.reminderHour ?? 20;

    const hourRow = this.REMINDER_HOURS.map((h) => ({
      text: `${h === hour && enabled ? '✅ ' : ''}${String(h).padStart(2, '0')}:00`,
      callback_data: `rem:h:${h}`,
    }));

    await this.sendMessage(
      chatId,
      `⏰ <b>Kunlik dars eslatmasi</b>\n\n` +
        `Holat: <b>${enabled ? `yoqilgan — har kuni ${String(hour).padStart(2, '0')}:00 (Toshkent vaqti)` : 'o‘chirilgan'}</b>\n\n` +
        `Har kuni tanlangan vaqtda keyingi darsingiz va ketma-ketlik (streak) haqida xabar yuboramiz. Vaqtni tanlang:`,
      {
        reply_markup: {
          inline_keyboard: [
            hourRow.slice(0, 3),
            hourRow.slice(3),
            [
              enabled
                ? { text: '🔕 Eslatmani o‘chirish', callback_data: 'rem:off' }
                : { text: '🔔 Eslatmani yoqish', callback_data: 'rem:on' },
            ],
          ],
        },
      }
    );
  }

  private static async handleReminderCallback(chatId: string | number, from: any, data: string): Promise<string> {
    const telegramId = String(from.id);
    if (data === 'rem:off') {
      await DataService.updateUserSettings(telegramId, { reminderEnabled: false });
      await this.sendReminderSettings(chatId, from);
      return 'Eslatma o‘chirildi';
    }
    if (data === 'rem:on') {
      await DataService.updateUserSettings(telegramId, { reminderEnabled: true });
      await this.sendReminderSettings(chatId, from);
      return 'Eslatma yoqildi';
    }
    const match = data.match(/^rem:h:(\d{1,2})$/);
    if (match && this.REMINDER_HOURS.includes(Number(match[1]))) {
      await DataService.updateUserSettings(telegramId, { reminderEnabled: true, reminderHour: Number(match[1]) });
      await this.sendReminderSettings(chatId, from);
      return `Har kuni ${match[1].padStart(2, '0')}:00 da eslatamiz`;
    }
    return '';
  }

  private static getTashkentNow() {
    const shifted = new Date(Date.now() + 5 * 60 * 60 * 1000);
    return { hour: shifted.getUTCHours(), date: shifted.toISOString().slice(0, 10) };
  }

  static async runReminders(): Promise<number> {
    if (!this.isConfigured()) return 0;
    const { hour, date } = this.getTashkentNow();
    const candidates = await DataService.getReminderCandidates(hour, date);
    let sent = 0;

    for (const user of candidates) {
      const telegramId = String(user.telegramId);
      // Claim first so parallel instances never send the same reminder twice
      if (!(await DataService.claimReminder(telegramId, date))) continue;
      try {
        const res = await this.sendReminder(telegramId, user);
        if (res?.ok === false && res.error_code === 403) {
          // User blocked the bot — stop reminding
          await DataService.updateUserSettings(telegramId, { reminderEnabled: false });
        } else {
          sent++;
        }
      } catch (err: any) {
        console.warn('[TelegramBotEngine] Reminder xatosi:', err.message);
      }
      await new Promise((r) => setTimeout(r, 60)); // stay well under Telegram's 30 msg/sec limit
    }
    return sent;
  }

  private static async sendReminder(telegramId: string, user: any) {
    const { open, lockedNext } = await this.findNextLesson(user);
    const streak = user?.streak || 1;
    const name = this.esc(user?.firstName || user?.name?.replace(/^@/, '') || 'Ota-ona');
    const head = `⏰ <b>${name}, bugungi 5 daqiqalik tarbiya darsi vaqti!</b>\n🔥 Ketma-ketlik: <b>${streak} kun</b> — uzilib qolmasin.\n\n`;
    const off = [{ text: '🔕 Eslatmani o‘chirish', callback_data: 'rem:off' }];

    if (open) {
      return this.sendMessage(telegramId, `${head}▶️ Bugungi dars: <b>${this.esc(open.title)}</b>\n<i>${this.esc(open.summary)}</i>`, {
        reply_markup: {
          inline_keyboard: [
            [{ text: '▶️ Botda boshlash', callback_data: `l:${open.slug}` }],
            [{ text: '📱 Platformada ochish', web_app: { url: `${this.getClientUrl()}/dars/${open.slug}` } }],
            off,
          ],
        },
      });
    }

    if (lockedNext) {
      return this.sendMessage(
        telegramId,
        `${head}Bepul darslarni tugatdingiz! Keyingi dars: <b>${this.esc(lockedNext.title)}</b> — Premium.`,
        { reply_markup: { inline_keyboard: [[this.premiumButton()], off] } }
      );
    }

    return this.sendMessage(telegramId, `${head}Barcha darslarni tugatdingiz, barakalla! 🏆 Yangi maqolalarni o‘qing.`, {
      reply_markup: { inline_keyboard: [[{ text: '📖 Maqolalar', callback_data: 'cmd_articles' }], off] },
    });
  }

  private static reminderTimer: NodeJS.Timeout | null = null;

  /** Checks every 5 minutes whether any user's reminder hour has arrived. */
  static startReminderScheduler() {
    if (this.reminderTimer || !this.isConfigured()) return;
    const tick = () =>
      this.runReminders().catch((err) => console.warn('[TelegramBotEngine] Reminder scheduler xatosi:', err.message));
    this.reminderTimer = setInterval(tick, 5 * 60 * 1000);
    setTimeout(tick, 30 * 1000);
    console.log('[TelegramBotEngine] ⏰ Kunlik eslatma rejalashtiruvchisi ishga tushdi.');
  }

  /**
   * Notify user about completed lesson from website
   */
  static async notifyLessonCompleted(telegramId: string | number, lessonTitle: string, xpEarned: number = 10) {
    if (!this.isConfigured() || !telegramId) return;

    await this.sendMessage(
      telegramId,
      `🎉 <b>Dars muvaffaqiyatli yakunlandi!</b>\n\n` +
        `Siz <b>"${this.esc(lessonTitle)}"</b> darsini yakunladingiz!\n` +
        `⭐️ Hisobingizga <b>+${xpEarned} XP</b> qo‘shildi.\n\n` +
        `O‘qishda davom eting va farzandingiz bilan munosabatni mustahkamlang! 🌿`,
      { reply_markup: { inline_keyboard: [[{ text: '▶️ Keyingi darsni boshlash', callback_data: 'n:' }]] } }
    );
  }

  /**
   * Start long-polling for updates (used in development or dedicated server processes)
   */
  static async startPolling(): Promise<void> {
    if (this.pollingActive) {
      console.log('[TelegramBotEngine] Polling allaqachon ishlayapti.');
      return;
    }

    if (!this.isConfigured()) {
      console.warn('[TelegramBotEngine] TELEGRAM_BOT_TOKEN kiritilmagan. Polling ishga tushmadi.');
      return;
    }

    this.pollingActive = true;
    this.abortController = new AbortController();

    console.log('[TelegramBotEngine] 🤖 Telegram Bot Polling ishga tushdi...');

    // Remove any webhook to enable getUpdates
    await this.deleteWebhook();

    const pollLoop = async () => {
      while (this.pollingActive) {
        try {
          const token = this.getBotToken();
          const res = await fetch(
            `https://api.telegram.org/bot${token}/getUpdates?offset=${this.pollingOffset}&timeout=20`,
            { signal: this.abortController?.signal }
          );

          if (!res.ok) {
            const errData = (await res.json().catch(() => ({}))) as any;
            const desc = errData.description || '';

            if (res.status === 409) {
              if (desc.includes('webhook')) {
                console.warn('[TelegramBotEngine] 409 Conflict: Webhook faol. Webhook o‘chirilmoqda...');
                await this.deleteWebhook();
                await new Promise((resolve) => setTimeout(resolve, 3000));
                continue;
              } else {
                console.warn(
                  '[TelegramBotEngine] 409 Conflict: Boshqa bot instansi ham ayni paytda getUpdates chaqiryapti (masalan: lokal kompyuter va Railway bir vaqtda). Iltimos, faqat bitta instansni ishga tushiring.'
                );
                await new Promise((resolve) => setTimeout(resolve, 10000));
                continue;
              }
            }

            console.warn(`[TelegramBotEngine] getUpdates failed: ${res.status} (${desc})`);
            await new Promise((resolve) => setTimeout(resolve, 5000));
            continue;
          }

          const data = (await res.json()) as any;
          if (data.ok && Array.isArray(data.result)) {
            for (const update of data.result) {
              this.pollingOffset = update.update_id + 1;
              await this.handleUpdate(update);
            }
          }
        } catch (err: any) {
          if (err.name === 'AbortError') break;
          console.warn('[TelegramBotEngine] Polling xatosi:', err.message);
          await new Promise((resolve) => setTimeout(resolve, 3000));
        }
      }
    };

    pollLoop();
  }

  /**
   * Stop polling
   */
  static stopPolling() {
    this.pollingActive = false;
    if (this.abortController) {
      this.abortController.abort();
      this.abortController = null;
    }
    console.log('[TelegramBotEngine] 🛑 Telegram Bot Polling to‘xtatildi.');
  }
}
