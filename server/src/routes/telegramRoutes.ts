import { Router, Request, Response } from 'express';
import { TelegramBotEngine } from '../services/telegramBotEngine.js';

export const telegramRouter = Router();

/**
 * Handle incoming Telegram Webhook updates
 * POST /api/telegram/webhook
 */
telegramRouter.post('/webhook', async (req: Request, res: Response) => {
  try {
    const update = req.body;
    // Process update asynchronously so Telegram receives immediate 200 OK
    TelegramBotEngine.handleUpdate(update).catch((err) => {
      console.error('[TelegramWebhook] Xatolik:', err);
    });

    res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error('[TelegramWebhook] Xatolik:', err);
    res.status(200).json({ ok: false, error: err.message });
  }
});

/**
 * Inspect Telegram Bot status and webhook information
 * GET /api/telegram/webhook
 */
telegramRouter.get('/webhook', async (req: Request, res: Response) => {
  const isConfigured = TelegramBotEngine.isConfigured();
  const token = TelegramBotEngine.getBotToken();

  let botInfo: any = null;
  let webhookInfo: any = null;

  if (isConfigured) {
    try {
      botInfo = await TelegramBotEngine.getMe();
      webhookInfo = await TelegramBotEngine.getWebhookInfo();
    } catch (err: any) {
      console.warn('[TelegramRouter] Failed to fetch bot info:', err.message);
    }
  }

  res.json({
    brand: 'Farzandly',
    service: 'Telegram Bot API',
    isConfigured,
    hasToken: Boolean(token),
    botInfo: botInfo?.result || botInfo,
    webhookInfo: webhookInfo?.result || webhookInfo,
    instructions: {
      step1: "Telegramda @BotFather ga kiring",
      step2: "/mybots -> O'z botingizni tanlang -> API Token ni oling",
      step3: "Serverdagi TELEGRAM_BOT_TOKEN o'zgaruvchisiga o'sha tokenni (masalan: 891291780:AA...) qo'ying",
    },
  });
});

/**
 * Register Webhook with Telegram
 * POST /api/telegram/webhook/set
 */
telegramRouter.post('/webhook/set', async (req: Request, res: Response) => {
  try {
    const { url } = req.body;
    const webhookUrl = url || `${req.protocol}://${req.get('host')}/api/telegram/webhook`;

    const result = await TelegramBotEngine.setWebhook(webhookUrl);
    res.json({
      success: result.ok,
      result,
      webhookUrl,
    });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

/**
 * Send notification to user
 * POST /api/telegram/send
 */
telegramRouter.post('/send', async (req: Request, res: Response) => {
  try {
    const { chatId, message } = req.body;
    if (!chatId || !message) {
      return res.status(400).json({ success: false, error: 'chatId va message talab qilinadi' });
    }

    const result = await TelegramBotEngine.sendMessage(chatId, message);
    res.json({ success: result.ok, result });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});
