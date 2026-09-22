import { Router } from 'express';
import { AuthController } from '../controllers/authController.js';

export const authRouter = Router();

// Telegram Bot Deep-Link Auth Session (e.g. /start <sessionId>)
authRouter.post('/telegram/session', AuthController.createBotSession);
authRouter.get('/telegram/session/:sessionId', AuthController.checkBotSession);
authRouter.get('/telegram/session', AuthController.checkBotSession);

// Telegram OIDC Configuration & OAuth URL
authRouter.get('/telegram/config', AuthController.getConfig);
authRouter.get('/telegram/login-url', AuthController.getLoginUrl);

// Telegram OIDC Code Exchange (Token endpoint proxy)
authRouter.post('/telegram/exchange', AuthController.exchangeCode);

// Direct / Widget Telegram Authentication & Registration
authRouter.post('/telegram', AuthController.telegramAuth);

// Telegram User Profile & Avatar Proxy
authRouter.get('/telegram/avatar/:id', AuthController.getUserAvatar);
authRouter.get('/telegram/user/:id', AuthController.getTelegramUserProfile);

// Email Authentication & Registration
authRouter.post('/email/register', AuthController.emailRegister);
authRouter.post('/email/login', AuthController.emailLogin);

// Get current user session
authRouter.get('/me', AuthController.getMe);

// Logout
authRouter.post('/logout', AuthController.logout);

export default authRouter;
