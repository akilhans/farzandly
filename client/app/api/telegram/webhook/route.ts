import { NextRequest, NextResponse } from 'next/server';

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || process.env.BOT_TOKEN || '';
const CLIENT_URL = (process.env.NEXT_PUBLIC_APP_URL || process.env.CLIENT_URL || 'https://farzandly.uz').replace(/\/$/, '');

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
];

async function callTelegram(method: string, payload: Record<string, any>) {
  if (!BOT_TOKEN) return { ok: false, error: 'NO_TOKEN' };
  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/${method}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (err: any) {
    console.error(`[Telegram Vercel Webhook] ${method} error:`, err.message);
    return { ok: false, error: err.message };
  }
}

function getMainReplyKeyboard() {
  return {
    keyboard: [
      [
        {
          text: '🌿 Farzandly platformasini ochish',
          web_app: { url: CLIENT_URL },
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

function getMainInlineKeyboard(from: any) {
  const payload = {
    telegramId: String(from.id),
    name: from.first_name || from.username || 'Ota-ona',
    telegramUsername: (from.username || '').replace(/^@/, ''),
    authProvider: 'telegram',
    timestamp: Date.now(),
  };
  const directToken = Buffer.from(JSON.stringify(payload)).toString('base64');
  const directLoginUrl = `${CLIENT_URL}/kirish/callback?direct_token=${encodeURIComponent(directToken)}`;

  return {
    inline_keyboard: [
      [
        {
          text: '🚀 Farzandly Mini App (Ilovani ochish)',
          web_app: { url: CLIENT_URL },
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
        { text: '🔑 Saytga bir klikda kirish', url: directLoginUrl },
      ],
    ],
  };
}

export async function POST(req: NextRequest) {
  try {
    const update = await req.json();

    if (update.callback_query) {
      const cb = update.callback_query;
      const chatId = cb.message?.chat?.id;
      const data = cb.data;
      const from = cb.from;

      await callTelegram('answerCallbackQuery', { callback_query_id: cb.id });

      if (chatId) {
        if (data === 'cmd_courses') {
          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `📚 <b>Farzandly platformasidagi kurslar:</b>\n\n` +
              `1. 👶 <b>Farzand bilan hissiy aloqa o‘rnatish</b> (15 daqiqa)\n` +
              `2. 🧠 <b>3 yosh inqirozi va injiqliklar bilan ishlash</b> (20 daqiqa)\n` +
              `3. 🛡 <b>Ijobiy intizom va mehrli chegaralar</b> (25 daqiqa)\n` +
              `4. 🌿 <b>Islomda farzand tarbiyasi asoslari</b> (30 daqiqa)\n\n` +
              `👇 Darslarni boshlash uchun quyidagi tugmani bosing:`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '▶️ Kurslarni ko‘rish (Mini App)',
                    web_app: { url: `${CLIENT_URL}/kurslar` },
                  },
                ],
              ],
            },
          });
        } else if (data === 'cmd_articles') {
          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `📖 <b>Foydali maqolalar:</b>\n\n` +
              `• <b>3 yosh inqirozi: Ota-onalar nimalarni bilishi shart?</b>\n` +
              `• <b>Bolalarda tantrum va kuchli injiqlik paytida nima qilish kerak?</b>\n` +
              `• <b>Islomda farzand haqlari: Ota-onaning muqaddas burchi</b>\n` +
              `• <b>Bolaga «yo'q» deb aytish san'ati</b>\n\n` +
              `👇 Maqolalarni mutolaa qilish:`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '📖 Maqolalarni o‘qish',
                    web_app: { url: `${CLIENT_URL}/maqolalar` },
                  },
                ],
              ],
            },
          });
        } else if (data === 'cmd_profile') {
          const payload = {
            telegramId: String(from.id),
            name: from.first_name || from.username || 'Ota-ona',
            telegramUsername: (from.username || '').replace(/^@/, ''),
            authProvider: 'telegram',
            timestamp: Date.now(),
          };
          const directToken = Buffer.from(JSON.stringify(payload)).toString('base64');
          const directLoginUrl = `${CLIENT_URL}/kirish/callback?direct_token=${encodeURIComponent(directToken)}`;

          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `👤 <b>Farzandly Profilingiz:</b>\n\n` +
              `🆔 Telegram ID: <code>${from.id}</code>\n` +
              `👤 Ism: <b>${from.first_name || 'Ota-ona'}</b>\n` +
              `🌐 <b>Holat:</b> Sinxronlangan ✅\n\n` +
              `Profilingizni platformada to‘liq ko‘rish uchun quyidagi tugmani bosing:`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '👤 Profilni ochish',
                    web_app: { url: `${CLIENT_URL}/profil` },
                  },
                ],
                [
                  {
                    text: '🔑 Saytga kirish (Bir klikda)',
                    url: directLoginUrl,
                  },
                ],
              ],
            },
          });
        } else if (data === 'cmd_tip') {
          const randomTip = PARENTING_TIPS[Math.floor(Math.random() * PARENTING_TIPS.length)];
          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `💡 <b>Kunlik tarbiya maslahati:</b>\n\n` +
              `📌 <b>${randomTip.title}</b>\n\n` +
              `${randomTip.tip}\n\n` +
              `🌿 <i>Farzand tarbiyasi — har kuni o‘rganiladigan mehrli yo‘ldir.</i>`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🔄 Boshqa maslahat', callback_data: 'cmd_tip' }],
                [
                  {
                    text: '📱 Platformani ochish',
                    web_app: { url: CLIENT_URL },
                  },
                ],
              ],
            },
          });
        }
      }
      return NextResponse.json({ ok: true });
    }

    if (update.message) {
      const msg = update.message;
      const chatId = msg.chat?.id;
      const from = msg.from;
      const text = (msg.text || '').trim();

      if (chatId && from) {
        if (text.startsWith('/start')) {
          const userName = from.first_name || from.username || 'Ota-ona';
          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `🌿 <b>Assalomu alaykum, ${userName}!</b>\n\n` +
              `<b>Farzandly</b> — ota-onalar uchun zamonaviy raqamli tarbiya platformasining rasmiy botiga xush kelibsiz!\n\n` +
              `Bu yerda siz:\n` +
              `• 📚 Bolalar psixologiyasi bo‘yicha 5 daqiqalik amaliy darslar\n` +
              `• 📖 Tarbiya, hissiyotlar va intizom haqida foydali maqolalar\n` +
              `• 💡 Kunlik amaliy maslahatlar\n` +
              `• 🏆 Shaxsiy natijalaringizni kuzatishingiz mumkin.\n\n` +
              `<i>Ilovani Telegram ichida to‘liq ochish uchun quyidagi tugmani bosing:</i>`,
            parse_mode: 'HTML',
            reply_markup: getMainInlineKeyboard(from),
          });

          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: '👇 Menyu orqali kerakli bo‘limni tanlang:',
            reply_markup: getMainReplyKeyboard(),
          });
        } else if (text === '/kurslar' || text === '📚 Kurslar') {
          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `📚 <b>Farzandly kurslari:</b>\n\n` +
              `1. 👶 <b>Farzand bilan hissiy aloqa o‘rnatish</b>\n` +
              `2. 🧠 <b>3 yosh inqirozi va injiqliklar bilan ishlash</b>\n` +
              `3. 🛡 <b>Ijobiy intizom va mehrli chegaralar</b>\n` +
              `4. 🌿 <b>Islomda farzand tarbiyasi asoslari</b>\n\n` +
              `👇 Darslarni boshlash:`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '📚 Kurslar katalogi (Mini App)',
                    web_app: { url: `${CLIENT_URL}/kurslar` },
                  },
                ],
              ],
            },
          });
        } else if (text === '/maqolalar' || text === '📖 Maqolalar') {
          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `📖 <b>Foydali maqolalar:</b>\n\n` +
              `• 3 yosh inqirozi: Ota-onalar nimalarni bilishi shart?\n` +
              `• Bolalarda tantrum va kuchli injiqlik paytida nima qilish kerak?\n` +
              `• Islomda farzand haqlari va ota-onaning burchlari\n` +
              `• Bolaga to‘g‘ri «yo‘q» deyish uslubi\n\n` +
              `👇 Maqolalarni o‘qish:`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '📖 Barcha maqolalar',
                    web_app: { url: `${CLIENT_URL}/maqolalar` },
                  },
                ],
              ],
            },
          });
        } else if (text === '/profil' || text === '👤 Mening profilim') {
          const payload = {
            telegramId: String(from.id),
            name: from.first_name || from.username || 'Ota-ona',
            telegramUsername: (from.username || '').replace(/^@/, ''),
            authProvider: 'telegram',
            timestamp: Date.now(),
          };
          const directToken = Buffer.from(JSON.stringify(payload)).toString('base64');
          const directLoginUrl = `${CLIENT_URL}/kirish/callback?direct_token=${encodeURIComponent(directToken)}`;

          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `👤 <b>Farzandly Profilingiz:</b>\n\n` +
              `🆔 Telegram ID: <code>${from.id}</code>\n` +
              `👤 Ism: <b>${from.first_name || 'Ota-ona'}</b>\n` +
              `🌐 <b>Holat:</b> Sinxronlangan ✅\n\n` +
              `Profilingizni platformada ochish:`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '👤 Profilni ochish',
                    web_app: { url: `${CLIENT_URL}/profil` },
                  },
                ],
                [
                  {
                    text: '🔑 Saytga kirish (Bir klikda)',
                    url: directLoginUrl,
                  },
                ],
              ],
            },
          });
        } else if (text === '/login' || text === '🔑 Saytga bir klikda kirish') {
          const payload = {
            telegramId: String(from.id),
            name: from.first_name || from.username || 'Ota-ona',
            telegramUsername: (from.username || '').replace(/^@/, ''),
            authProvider: 'telegram',
            timestamp: Date.now(),
          };
          const directToken = Buffer.from(JSON.stringify(payload)).toString('base64');
          const directLoginUrl = `${CLIENT_URL}/kirish/callback?direct_token=${encodeURIComponent(directToken)}`;

          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `🔑 <b>Farzandly platformasiga bir klikda kiring:</b>\n\n` +
              `👉 <a href="${directLoginUrl}">Platformaga kirish (avtorizatsiyalangan)</a>`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🚀 Saytga to‘g‘ridan-to‘g‘ri kirish', url: directLoginUrl }],
                [{ text: '📱 Telegram Mini Appda ochish', web_app: { url: CLIENT_URL } }],
              ],
            },
          });
        } else if (text === '/maslahat' || text === '💡 Kunlik maslahat') {
          const randomTip = PARENTING_TIPS[Math.floor(Math.random() * PARENTING_TIPS.length)];
          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `💡 <b>Kunlik tarbiya maslahati:</b>\n\n` +
              `📌 <b>${randomTip.title}</b>\n\n` +
              `${randomTip.tip}`,
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [
                [{ text: '🔄 Boshqa maslahat', callback_data: 'cmd_tip' }],
                [{ text: '📱 Platformani ochish', web_app: { url: CLIENT_URL } }],
              ],
            },
          });
        } else {
          await callTelegram('sendMessage', {
            chat_id: chatId,
            text: `🌿 <b>Farzandly platformasi boti</b>\n\nKerakli bo‘limni tanlash uchun quyidagi menyudan foydalaning:`,
            parse_mode: 'HTML',
            reply_markup: getMainInlineKeyboard(from),
          });
        }
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('[TelegramWebhook Error]:', err.message);
    return NextResponse.json({ ok: false, error: err.message }, { status: 200 });
  }
}

export async function GET() {
  return NextResponse.json({
    brand: 'Farzandly',
    service: 'Vercel Telegram Webhook Handler',
    hasToken: Boolean(BOT_TOKEN),
    status: 'Ready',
  });
}
