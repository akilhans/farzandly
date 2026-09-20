import { Router } from 'express';
import { AuthController } from '../controllers/authController.js';

export const authRouter = Router();

// Telegram OIDC Configuration & OAuth URL
authRouter.get('/telegram/config', AuthController.getConfig);
authRouter.get('/telegram/login-url', AuthController.getLoginUrl);

// Telegram OIDC Code Exchange (Token endpoint proxy)
authRouter.post('/telegram/exchange', AuthController.exchangeCode);

// Direct / Widget Telegram Authentication & Registration
authRouter.post('/telegram', AuthController.telegramAuth);

// Get current user session
authRouter.get('/me', AuthController.getMe);

// Logout
authRouter.post('/logout', AuthController.logout);

export default authRouter;
