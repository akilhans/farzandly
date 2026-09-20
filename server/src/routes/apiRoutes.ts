import { Router } from 'express';
import { ApiController } from '../controllers/apiController.js';
import { authRouter } from './authRoutes.js';
import { telegramRouter } from './telegramRoutes.js';

export const apiRouter = Router();

// Authentication via Telegram
apiRouter.use('/auth', authRouter);

// Telegram Bot Webhook & API
apiRouter.use('/telegram', telegramRouter);

// Taxonomy
apiRouter.get('/categories', ApiController.getCategories);
apiRouter.get('/age-groups', ApiController.getAgeGroups);

// Content: Articles
apiRouter.get('/articles', ApiController.getArticles);
apiRouter.get('/articles/:slug', ApiController.getArticleBySlug);

// Courses
apiRouter.get('/courses', ApiController.getCourses);
apiRouter.get('/courses/:slug', ApiController.getCourseBySlug);

// Learning Paths
apiRouter.get('/learning-paths', ApiController.getLearningPaths);
apiRouter.get('/learning-paths/:slug', ApiController.getLearningPathBySlug);

// Lessons
apiRouter.get('/lessons', ApiController.getLessons);
apiRouter.get('/lessons/:id', ApiController.getLessonById);

// Achievements
apiRouter.get('/achievements', ApiController.getAchievements);

// Users & Progress & Gamification
apiRouter.post('/users/onboarding', ApiController.onboarding);
apiRouter.get('/users/progress', ApiController.getUserProgress);
apiRouter.post('/users/progress', ApiController.recordUserProgress);

// Newsletter
apiRouter.post('/newsletter/subscribe', ApiController.subscribeNewsletter);

// Health check
apiRouter.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    brand: 'Farzandly',
    service: 'Express API Server',
    timestamp: new Date().toISOString(),
  });
});

export default apiRouter;
