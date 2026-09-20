import { DataService } from './dataService.js';

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
    return (process.env.CLIENT_URL || 'https://farzandly.vercel.app').replace(/\/$/, '');
  }

  static isConfigured(): boolean {
    const token = this.getBotToken();
    // Valid Telegram bot tokens contain a colon (e.g. 891291780:AA...)
    return Boolean(token && token.includes(':'));
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

  /**
   * Standard persistent Reply Keyboard for Telegram app
   */
  private static getMainReplyKeyboard() {
    const clientUrl = this.getClientUrl();
    return {
      keyboard: [
        [
          {
            text: '🌿 Farzandly platformasini ochish',
            web_app: { url: clientUrl },
          },
        ],
        [
          { text: '📚 Kurslar' },
          { text: '📖 Maqolalar' },
        ],
        [
          { text: '👤 Mening profilim' },
          { text: '💡 Kunlik maslahat' },
        ],
        [
          { text: '🔑 Saytga bir klikda kirish' },
          { text: 'ℹ️ Yordam' },
        ],
      ],
      resize_keyboard: true,
      persistent: true,
    };
  }

  /**
   * Main welcome inline keyboard
   */
  private static getMainInlineKeyboard(userId?: string | number) {
    const clientUrl = this.getClientUrl();
    return {
      inline_keyboard: [
        [
          {
            text: '🚀 Farzandly Mini App (Ilovani ochish)',
            web_app: { url: clientUrl },
          },
        ],
        [
          { text: '📚 Barcha kurslar', callback_data: 'cmd_courses' },
          { text: '📖 Foydali maqolalar', callback_data: 'cmd_articles' },
        ],
        [
          { text: '👤 Mening profilim', callback_data: 'cmd_profile' },
          { text: '💡 Kunlik maslahat', callback_data: 'cmd_tip' },
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

  /**
   * Core Update Handler: Processes messages and callback queries
   */
  static async handleUpdate(update: any): Promise<void> {
    if (!update) return;

    // 1. Handle Callback Query (Inline buttons)
    if (update.callback_query) {
      await this.handleCallbackQuery(update.callback_query);
      return;
    }

    // 2. Handle Message
    if (update.message) {
      await this.handleMessage(update.message);
      return;
    }
  }

  /**
   * Handle incoming text messages and commands
   */
  private static async handleMessage(msg: any) {
    const chatId = msg.chat?.id;
    const from = msg.from;
    const text = (msg.text || '').trim();

    if (!chatId || !from) return;

    // Automatically sync / upsert user in MongoDB
    try {
      const displayName = from.username ? `@${from.username}` : `${from.first_name || ''} ${from.last_name || ''}`.trim() || 'Ota-ona';
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

    // Command: /start
    if (text.startsWith('/start')) {
      await this.sendWelcomeMessage(chatId, from);
      return;
    }

    // Command: /kurslar or button "📚 Kurslar"
    if (text === '/kurslar' || text === '📚 Kurslar') {
      await this.sendCoursesList(chatId);
      return;
    }

    // Command: /maqolalar or button "📖 Maqolalar"
    if (text === '/maqolalar' || text === '📖 Maqolalar') {
      await this.sendArticlesList(chatId);
      return;
    }

    // Command: /profil or button "👤 Mening profilim" or "👤 Profilim"
    if (text === '/profil' || text === '👤 Mening profilim' || text === '👤 Profilim') {
      await this.sendUserProfile(chatId, from);
      return;
    }

    // Command: /login or button "🔑 Saytga bir klikda kirish"
    if (text === '/login' || text === '🔑 Saytga bir klikda kirish' || text === '🔑 Veb-saytga kirish') {
      await this.sendDirectLogin(chatId, from);
      return;
    }

    // Command: /maslahat or button "💡 Kunlik maslahat"
    if (text === '/maslahat' || text === '💡 Kunlik maslahat' || text === '💡 Maslahat') {
      await this.sendDailyTip(chatId);
      return;
    }

    // Command: /yordam or button "ℹ️ Yordam"
    if (text === '/yordam' || text === '/help' || text === 'ℹ️ Yordam') {
      await this.sendHelp(chatId);
      return;
    }

    // Default friendly response
    await this.sendMessage(
      chatId,
      `🌿 <b>Farzandly platformasi boti</b>\n\nSiz yozgan xabar: <i>"${text}"</i>\n\nKerakli bo'limni tanlash uchun quyidagi tugmalardan foydalaning:`,
      {
        reply_markup: this.getMainInlineKeyboard(from.id),
      }
    );
  }

  /**
   * Handle Callback Queries
   */
  private static async handleCallbackQuery(cb: any) {
    const callbackId = cb.id;
    const chatId = cb.message?.chat?.id;
    const from = cb.from;
    const data = cb.data || '';

    if (!chatId) {
      await this.answerCallbackQuery(callbackId);
      return;
    }

    await this.answerCallbackQuery(callbackId);

    if (data === 'cmd_courses') {
      await this.sendCoursesList(chatId);
    } else if (data === 'cmd_articles') {
      await this.sendArticlesList(chatId);
    } else if (data === 'cmd_profile') {
      await this.sendUserProfile(chatId, from);
    } else if (data === 'cmd_weblogin') {
      await this.sendDirectLogin(chatId, from);
    } else if (data === 'cmd_tip') {
      await this.sendDailyTip(chatId);
    } else if (data === 'cmd_help') {
      await this.sendHelp(chatId);
    }
  }

  /**
   * 1. Welcome Message
   */
  private static async sendWelcomeMessage(chatId: string | number, from: any) {
    const clientUrl = this.getClientUrl();
    const userName = from.first_name || from.username || 'Ota-ona';

    const text = `🌿 <b>Assalomu alaykum, ${userName}!</b>\n\n` +
      `<b>Farzandly</b> — ota-onalar uchun zamonaviy raqamli tarbiya platformasining rasmiy botiga xush kelibsiz!\n\n` +
      `Bu yerda siz:\n` +
      `• 📚 Bolalar psixologiyasi bo‘yicha 5 daqiqalik amaliy darslar\n` +
      `• 📖 Tarbiya, hissiyotlar va intizom haqida foydali maqolalar\n` +
      `• 💡 Kunlik amaliy maslahatlar\n` +
      `• 🏆 O‘z natijalaringiz va o‘rganish tarixingizni kuzatishingiz mumkin.\n\n` +
      `<i>Platformadan Telegram ichida to‘liq foydalanish uchun quyidagi tugmani bosing:</i>`;

    // Send message with both main reply keyboard and rich inline action buttons
    await this.sendMessage(chatId, text, {
      reply_markup: this.getMainInlineKeyboard(from.id),
    });

    // Also send prompt activating persistent keyboard
    await this.sendMessage(chatId, '👇 Menyu orqali kerakli bo‘limni tanlang:', {
      reply_markup: this.getMainReplyKeyboard(),
    });
  }

  /**
   * 2. Courses List
   */
  private static async sendCoursesList(chatId: string | number) {
    const clientUrl = this.getClientUrl();
    try {
      const courses = await DataService.getCourses();

      let text = `📚 <b>Farzandly kurslari:</b>\n\n`;
      const inlineButtons: any[][] = [];

      courses.slice(0, 6).forEach((c: any, index: number) => {
        text += `<b>${index + 1}. ${c.title}</b>\n`;
        text += `⏱ Davomiyligi: ${c.totalDurationMinutes || 15} daqiqa • Yosh: ${c.ageGroup || '3-5'} yosh\n`;
        text += `📖 Darslar soni: ${c.lessonsCount || 5} ta\n`;
        text += `👉 <a href="${clientUrl}/kurslar/${c.slug}">Kursni ko‘rish</a>\n\n`;

        inlineButtons.push([
          {
            text: `▶️ ${c.title.substring(0, 25)}...`,
            web_app: { url: `${clientUrl}/kurslar/${c.slug}` },
          },
        ]);
      });

      inlineButtons.push([
        {
          text: '🌐 Barcha kurslarni ko‘rish',
          web_app: { url: `${clientUrl}/kurslar` },
        },
      ]);

      await this.sendMessage(chatId, text, {
        reply_markup: { inline_keyboard: inlineButtons },
      });
    } catch (err: any) {
      await this.sendMessage(chatId, 'Kurslar ro‘yxatini yuklashda xatolik yuz berdi.');
    }
  }

  /**
   * 3. Articles List
   */
  private static async sendArticlesList(chatId: string | number) {
    const clientUrl = this.getClientUrl();
    try {
      const articles = await DataService.getArticles();

      let text = `📖 <b>Foydali maqolalar:</b>\n\n`;
      const inlineButtons: any[][] = [];

      articles.slice(0, 5).forEach((a: any, index: number) => {
        text += `<b>${index + 1}. ${a.title}</b>\n`;
        text += `⏳ Mutolaa: ${a.readingTimeMinutes || 5} daqiqa\n`;
        text += `💡 <i>${a.excerpt || ''}</i>\n`;
        text += `👉 <a href="${clientUrl}/maqolalar/${a.slug}">To‘liq o‘qish</a>\n\n`;

        inlineButtons.push([
          {
            text: `📖 ${a.title.substring(0, 28)}...`,
            web_app: { url: `${clientUrl}/maqolalar/${a.slug}` },
          },
        ]);
      });

      inlineButtons.push([
        {
          text: '🌐 Barcha maqolalarni ko‘rish',
          web_app: { url: `${clientUrl}/maqolalar` },
        },
      ]);

      await this.sendMessage(chatId, text, {
        reply_markup: { inline_keyboard: inlineButtons },
      });
    } catch (err: any) {
      await this.sendMessage(chatId, 'Maqolalarni yuklashda xatolik yuz berdi.');
    }
  }

  /**
   * 4. User Profile & Website Sync
   */
  private static async sendUserProfile(chatId: string | number, from: any) {
    const clientUrl = this.getClientUrl();
    try {
      const user = await DataService.getUserByIdOrTelegram(String(from.id));
      const loginLink = this.generateDirectLoginLink(from);

      const name = user?.name || from.first_name || 'Ota-ona';
      const xp = user?.xp || 0;
      const streak = user?.streak || user?.streakDays || 1;
      const level = user?.level || 'O‘rganuvchi';
      const completedCount = user?.completedLessons?.length || 0;

      const text = `👤 <b>Farzandly Profilingiz:</b>\n\n` +
        `🆔 Telegram ID: <code>${from.id}</code>\n` +
        `👤 Ism: <b>${name}</b>\n` +
        `⭐️ Ballar: <b>${xp} XP</b>\n` +
        `🔥 O‘qish davomiyligi: <b>${streak} kun</b> ketma-ket\n` +
        `🏆 Daraja: <b>${level}</b>\n` +
        `🎓 Tamomlangan darslar: <b>${completedCount} ta</b>\n\n` +
        `🌐 <b>Veb-sayt bilan holat:</b> Sinxronlangan ✅\n\n` +
        `<i>Quyidagi tugma orqali profilingizni to‘g‘ridan-to‘g‘ri ochishingiz mumkin:</i>`;

      await this.sendMessage(chatId, text, {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: '👤 Profilni ochish (Mini App)',
                web_app: { url: `${clientUrl}/profil` },
              },
            ],
            [
              {
                text: '🔑 Saytga kirish (Bir klikda)',
                url: loginLink,
              },
            ],
          ],
        },
      });
    } catch (err: any) {
      await this.sendMessage(chatId, 'Profil ma’lumotlarini olishda xatolik yuz berdi.');
    }
  }

  /**
   * 5. Direct Login
   */
  private static async sendDirectLogin(chatId: string | number, from: any) {
    const loginLink = this.generateDirectLoginLink(from);
    const clientUrl = this.getClientUrl();

    const text = `🔑 <b>Farzandly platformasiga bir klikda kiring</b>\n\n` +
      `Siz Telegram orqali ro‘yxatdan o‘tgansiz. Quyidagi havola orqali brauzerda hech qanday parol terishsiz to‘g‘ridan-to‘g‘ri hisobingizga kirishingiz mumkin:\n\n` +
      `👉 <a href="${loginLink}">Platformaga kirish (avtorizatsiyalangan)</a>\n\n` +
      `<i>Eslatma: Bu havola shaxsiy hisobingizga tegishli. Uni boshqalarga ulashmang.</i>`;

    await this.sendMessage(chatId, text, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '🚀 Saytga to‘g‘ridan-to‘g‘ri kirish',
              url: loginLink,
            },
          ],
          [
            {
              text: '📱 Telegram Mini Appda ochish',
              web_app: { url: clientUrl },
            },
          ],
        ],
      },
    });
  }

  /**
   * 6. Daily Parenting Tip
   */
  private static async sendDailyTip(chatId: string | number) {
    const randomTip = PARENTING_TIPS[Math.floor(Math.random() * PARENTING_TIPS.length)];
    const clientUrl = this.getClientUrl();

    const text = `💡 <b>Kunlik tarbiya maslahati:</b>\n\n` +
      `📌 <b>${randomTip.title}</b>\n\n` +
      `${randomTip.tip}\n\n` +
      `🌿 <i>Farzand tarbiyasi — har kuni o‘rganiladigan mehrli yo‘ldir.</i>`;

    await this.sendMessage(chatId, text, {
      reply_markup: {
        inline_keyboard: [
          [
            { text: '🔄 Boshqa maslahat', callback_data: 'cmd_tip' },
            { text: '📚 Kurslarni o‘rganish', callback_data: 'cmd_courses' },
          ],
          [
            {
              text: '📱 Platformani ochish',
              web_app: { url: clientUrl },
            },
          ],
        ],
      },
    });
  }

  /**
   * 7. Help Message
   */
  private static async sendHelp(chatId: string | number) {
    const clientUrl = this.getClientUrl();
    const text = `ℹ️ <b>Farzandly boti bo‘yicha qo‘llanma:</b>\n\n` +
      `Ushbu bot orqali siz Farzandly ta’lim platformasidagi darslar, kurslar va shaxsiy natijalaringizni bevosita Telegram ichida kuzatishingiz mumkin.\n\n` +
      `<b>Mavjud buyruqlar:</b>\n` +
      `• /start — Botni qayta ishga tushirish va asosiy menyu\n` +
      `• /kurslar — Ota-onalar uchun mavjud darslar va kurslar\n` +
      `• /maqolalar — Psixologik va amaliy maqolalar\n` +
      `• /profil — Ballaringiz, darajangiz va tamomlangan darslaringiz\n` +
      `• /login — Veb-saytga bir klikda avtorizatsiyasiz kirish havolasi\n` +
      `• /maslahat — Kunlik foydali tarbiya maslahati\n\n` +
      `Savollaringiz yoki takliflaringiz bo‘lsa, saytimiz orqali biz bilan bog‘lanishingiz mumkin.`;

    await this.sendMessage(chatId, text, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '🌿 Farzandly platformasini ochish',
              web_app: { url: clientUrl },
            },
          ],
        ],
      },
    });
  }

  /**
   * Notify user about completed lesson from website
   */
  static async notifyLessonCompleted(telegramId: string | number, lessonTitle: string, xpEarned: number = 10) {
    if (!this.isConfigured() || !telegramId) return;
    const clientUrl = this.getClientUrl();

    const text = `🎉 <b>Dars muvaffaqiyatli yakunlandi!</b>\n\n` +
      `Siz <b>"${lessonTitle}"</b> darsini muvaffaqiyatli yakunladingiz!\n` +
      `⭐️ Hisobingizga <b>+${xpEarned} XP</b> qo‘shildi.\n\n` +
      `O‘qishda davom eting va farzandingiz bilan munosabatni mustahkamlang! 🌿`;

    await this.sendMessage(telegramId, text, {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: '▶️ Keyingi darsni boshlash',
              web_app: { url: `${clientUrl}/dashboard` },
            },
          ],
        ],
      },
    });
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
            console.warn(`[TelegramBotEngine] getUpdates failed: ${res.status}`);
            await new Promise((resolve) => setTimeout(resolve, 3000));
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
