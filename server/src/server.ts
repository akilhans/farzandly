import dotenv from 'dotenv';
dotenv.config();

import { app } from './app.js';
import { connectDB } from './config/db.js';
import { TelegramBotEngine } from './services/telegramBotEngine.js';

const PORT = Number(process.env.PORT) || 5000;
const HOST = '0.0.0.0';

async function bootstrap() {
  // Connect to database
  await connectDB();

  app.listen(PORT, HOST, () => {
    console.log(`=========================================`);
    console.log(`🌿 Farzandly API Server ishga tushdi!`);
    console.log(`🚀 Host: http://${HOST}:${PORT}`);
    console.log(`🩺 Health: http://${HOST}:${PORT}/api/health`);
    console.log(`🤖 Telegram Webhook: http://${HOST}:${PORT}/api/telegram/webhook`);
    console.log(`=========================================`);
  });

  // Auto-start Telegram Bot Polling if token is provided and not in webhook mode
  if (TelegramBotEngine.isConfigured()) {
    console.log(`🤖 Telegram Bot: Bot token aniqlandi.`);
    TelegramBotEngine.startReminderScheduler();
    if (process.env.BOT_MODE !== 'webhook') {
      TelegramBotEngine.startPolling().catch((err) => {
        console.warn('[TelegramBot] Polling boshlashda xatolik:', err.message);
      });
    }
  } else {
    console.log(`ℹ️ Telegram Bot: TELEGRAM_BOT_TOKEN kiritilmagan. @BotFather dan token oling.`);
  }
}

bootstrap().catch((err) => {
  console.error('Serverni ishga tushirishda kutilmagan xatolik:', err);
  process.exit(1);
});
