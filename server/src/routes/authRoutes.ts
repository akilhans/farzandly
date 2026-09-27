import { Router } from 'express';
import { AuthController } from '../controllers/authController.js';
import { rateLimit, requireAdmin } from '../middleware/auth.js';

export const authRouter = Router();

const loginLimiter = rateLimit({ windowMs: 15 * 60_000, max: 20 });
const pollLimiter = rateLimit({ windowMs: 60_000, max: 90 });
const adminLoginLimiter = rateLimit({ windowMs: 15 * 60_000, max: 8 });

// Telegram bot deep-link login (/start <sessionId>)
authRouter.post('/telegram/session', loginLimiter, AuthController.createBotSession);
authRouter.get('/telegram/session/:sessionId', pollLimiter, AuthController.checkBotSession);
authRouter.get('/telegram/session', pollLimiter, AuthController.checkBotSession);

// Telegram OIDC
authRouter.get('/telegram/config', AuthController.getConfig);
authRouter.get('/telegram/login-url', AuthController.getLoginUrl);
authRouter.post('/telegram/exchange', loginLimiter, AuthController.exchangeCode);

// Telegram Login Widget, Mini App and bot one-click ticket (all signature-checked)
authRouter.post('/telegram', loginLimiter, AuthController.telegramAuth);
authRouter.post('/telegram/miniapp', loginLimiter, AuthController.miniAppAuth);
authRouter.post('/telegram/ticket', loginLimiter, AuthController.redeemTicket);

// Avatars (public, numeric ids only) and raw Telegram profile lookups (admin only)
authRouter.get('/telegram/avatar/:id', rateLimit({ windowMs: 60_000, max: 120 }), AuthController.getUserAvatar);
authRouter.get('/telegram/user/:id', requireAdmin, AuthController.getTelegramUserProfile);

// Email
authRouter.post('/email/register', rateLimit({ windowMs: 60 * 60_000, max: 10 }), AuthController.emailRegister);
authRouter.post('/email/login', loginLimiter, AuthController.emailLogin);

authRouter.get('/me', AuthController.getMe);
authRouter.post('/logout', AuthController.logout);

// Standalone admin panel login (username/password, not a DB user)
authRouter.post('/admin-login', adminLoginLimiter, AuthController.adminLogin);

export default authRouter;
