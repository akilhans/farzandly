import { Router, Request, Response } from 'express';
import { TelegramBotEngine } from '../services/telegramBotEngine.js';
import { isValidWebhookSecret } from '../lib/security.js';
import { requireAdmin } from '../middleware/auth.js';

export const telegramRouter = Router();

/**
 * Incoming Telegram updates. Telegram sends the secret we registered with setWebhook
 * in X-Telegram-Bot-Api-Secret-Token; anything without it is rejected.
 * POST /api/telegram/webhook
 */
telegramRouter.post('/webhook', (req: Request, res: Response) => {
  if (!isValidWebhookSecret(req.header('x-telegram-bot-api-secret-token'))) {
    return res.status(401).json({ ok: false });
  }
  TelegramBotEngine.handleUpdate(req.body).catch((err) => console.error('[TelegramWebhook] Xatolik:', err));
  res.status(200).json({ ok: true });
});

/** Bot + webhook status (admin). GET /api/telegram/webhook */
telegramRouter.get('/webhook', requireAdmin, async (req: Request, res: Response) => {
  const isConfigured = TelegramBotEngine.isConfigured();
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
  res.json({ isConfigured, botInfo: botInfo?.result || botInfo, webhookInfo: webhookInfo?.result || webhookInfo });
});

/**
 * Register the webhook (admin). The URL is always this server's own endpoint —
 * it can't be pointed anywhere else.
 * POST /api/telegram/webhook/set
 */
telegramRouter.post('/webhook/set', requireAdmin, async (req: Request, res: Response) => {
  try {
    const base = (process.env.PUBLIC_API_URL || `${req.protocol}://${req.get('host')}/api`).replace(/\/$/, '');
    const webhookUrl = `${base}/telegram/webhook`;
    const result = await TelegramBotEngine.setWebhook(webhookUrl);
    res.json({ success: result.ok, webhookUrl });
  } catch (err: any) {
    res.status(500).json({ success: false, message: 'Webhookni o‘rnatishda xatolik' });
  }
});
