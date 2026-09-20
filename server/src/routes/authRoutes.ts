import { Router } from 'express';
import { AuthController } from '../controllers/authController.js';

export const authRouter = Router();

// Telegram Authentication / Registration
authRouter.post('/telegram', AuthController.telegramAuth);

// Get current user session
authRouter.get('/me', AuthController.getMe);

// Logout
authRouter.post('/logout', AuthController.logout);

export default authRouter;
