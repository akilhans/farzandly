import { Router } from 'express';
import { ApiController } from '../controllers/apiController.js';
import { AccountController } from '../controllers/accountController.js';
import { authRouter } from './authRoutes.js';
import { telegramRouter } from './telegramRoutes.js';
import { requireAuth, requireAdmin, rateLimit } from '../middleware/auth.js';

export const apiRouter = Router();

const writeLimiter = rateLimit({ windowMs: 60_000, max: 60, key: (req) => req.userId || req.ip || 'anon' });

// Authentication
apiRouter.use('/auth', authRouter);

// Telegram Bot Webhook & admin bot tools
apiRouter.use('/telegram', telegramRouter);

// Taxonomy
apiRouter.get('/categories', ApiController.getCategories);
apiRouter.get('/age-groups', ApiController.getAgeGroups);

// Content (premium bodies are stripped unless the signed-in user has Premium)
apiRouter.get('/articles', ApiController.getArticles);
apiRouter.get('/articles/:slug', ApiController.getArticleBySlug);
apiRouter.get('/search', rateLimit({ windowMs: 60_000, max: 60 }), ApiController.search);
apiRouter.get('/courses', ApiController.getCourses);
apiRouter.get('/courses/:slug', ApiController.getCourseBySlug);
apiRouter.get('/learning-paths', ApiController.getLearningPaths);
apiRouter.get('/learning-paths/:slug', ApiController.getLearningPathBySlug);
apiRouter.get('/lessons', ApiController.getLessons);
apiRouter.get('/lessons/:id', ApiController.getLessonById);
apiRouter.get('/achievements', ApiController.getAchievements);
apiRouter.get('/health-topics', ApiController.getHealthTopics);
apiRouter.get('/health-topics/:slug', ApiController.getHealthTopicBySlug);

// Users & progress
apiRouter.post('/users/onboarding', writeLimiter, ApiController.onboarding);
apiRouter.get('/users/progress', requireAuth, ApiController.getUserProgress);
apiRouter.post('/users/progress', requireAuth, writeLimiter, ApiController.recordUserProgress);
apiRouter.post('/users/settings', requireAuth, writeLimiter, AccountController.updateSettings);
apiRouter.post('/health-topics/:slug/quiz', requireAuth, writeLimiter, ApiController.recordHealthQuiz);

// Leaderboard (public; marks the caller's row when signed in)
apiRouter.get('/leaderboard', AccountController.leaderboard);

// Family & co-parenting
apiRouter.get('/family', requireAuth, ApiController.getFamily);
apiRouter.post('/family/invite', requireAuth, writeLimiter, ApiController.createFamilyInvite);
apiRouter.post('/family/connect', requireAuth, rateLimit({ windowMs: 15 * 60_000, max: 10, key: (req) => req.userId || req.ip || 'anon' }), ApiController.connectPartner);
apiRouter.post('/family/disconnect', requireAuth, writeLimiter, ApiController.disconnectPartner);
apiRouter.post('/family/rules', requireAuth, writeLimiter, ApiController.updateFamilyRules);
apiRouter.post('/family/children', requireAuth, writeLimiter, ApiController.updateChildren);

// Referrals
apiRouter.get('/referrals/my-code', requireAuth, ApiController.getReferralCode);
apiRouter.post('/referrals/apply', requireAuth, rateLimit({ windowMs: 15 * 60_000, max: 10, key: (req) => req.userId || req.ip || 'anon' }), ApiController.applyReferralCode);
apiRouter.get('/referrals/stats', requireAuth, ApiController.getReferralStats);

// Payments (manual card transfer → admin approval)
apiRouter.get('/payments/config', AccountController.paymentConfig);
apiRouter.post('/payments', requireAuth, rateLimit({ windowMs: 60 * 60_000, max: 5, key: (req) => req.userId || req.ip || 'anon' }), AccountController.createPayment);
apiRouter.get('/payments/mine', requireAuth, AccountController.myPayments);

// Admin
apiRouter.get('/admin/stats', requireAdmin, AccountController.adminStats);
apiRouter.get('/admin/payments', requireAdmin, AccountController.adminPayments);
apiRouter.post('/admin/payments/:id/review', requireAdmin, AccountController.adminReviewPayment);
apiRouter.get('/admin/users', requireAdmin, AccountController.adminUsers);
apiRouter.post('/admin/users/:id/premium', requireAdmin, AccountController.adminSetPremium);
apiRouter.get('/admin/audit', requireAdmin, AccountController.adminAudit);

// Newsletter
apiRouter.post('/newsletter/subscribe', rateLimit({ windowMs: 60 * 60_000, max: 10 }), ApiController.subscribeNewsletter);

// Health check
apiRouter.get('/health', (req, res) => {
  res.json({ status: 'ok', brand: 'Farzandly', service: 'Express API Server', timestamp: new Date().toISOString() });
});

export default apiRouter;
