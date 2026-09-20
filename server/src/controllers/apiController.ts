import { Request, Response } from 'express';
import { DataService } from '../services/dataService.js';
import { z } from 'zod';

export class ApiController {
  // GET /api/categories
  static async getCategories(req: Request, res: Response) {
    try {
      const categories = await DataService.getCategories();
      res.json({ success: true, data: categories });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Kategoriyalarni yuklashda xatolik' });
    }
  }

  // GET /api/age-groups
  static async getAgeGroups(req: Request, res: Response) {
    try {
      const ageGroups = await DataService.getAgeGroups();
      res.json({ success: true, data: ageGroups });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Yosh guruhlarini yuklashda xatolik' });
    }
  }

  // GET /api/articles
  static async getArticles(req: Request, res: Response) {
    try {
      const { category, ageGroup, search } = req.query;
      const articles = await DataService.getArticles({
        categorySlug: category as string,
        ageGroup: ageGroup as string,
        search: search as string,
      });
      res.json({ success: true, count: articles.length, data: articles });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Maqolalarni yuklashda xatolik' });
    }
  }

  // GET /api/articles/:slug
  static async getArticleBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const article = await DataService.getArticleBySlug(slug);
      if (!article) {
        return res.status(404).json({ success: false, message: 'Maqola topilmadi' });
      }
      res.json({ success: true, data: article });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Maqolani yuklashda xatolik' });
    }
  }

  // GET /api/courses
  static async getCourses(req: Request, res: Response) {
    try {
      const { ageGroup, category } = req.query;
      const courses = await DataService.getCourses({
        ageGroup: ageGroup as string,
        categorySlug: category as string,
      });
      res.json({ success: true, data: courses });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Kurslarni yuklashda xatolik' });
    }
  }

  // GET /api/courses/:slug
  static async getCourseBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const course = await DataService.getCourseBySlug(slug);
      if (!course) {
        return res.status(404).json({ success: false, message: 'Kurs topilmadi' });
      }
      const lessons = await DataService.getLessons({ courseSlug: slug });
      res.json({ success: true, data: { ...JSON.parse(JSON.stringify(course)), lessons } });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Kursni yuklashda xatolik' });
    }
  }

  // GET /api/learning-paths
  static async getLearningPaths(req: Request, res: Response) {
    try {
      const { ageGroup } = req.query;
      const paths = await DataService.getLearningPaths(ageGroup as string);
      res.json({ success: true, data: paths });
    } catch (error) {
      res.status(500).json({ success: false, message: 'O‘quv yo‘llarini yuklashda xatolik' });
    }
  }

  // GET /api/learning-paths/:slug
  static async getLearningPathBySlug(req: Request, res: Response) {
    try {
      const { slug } = req.params;
      const path = await DataService.getLearningPathBySlug(slug);
      if (!path) {
        return res.status(404).json({ success: false, message: 'O‘quv yo‘li topilmadi' });
      }
      // Populate lessons
      const pathObj = JSON.parse(JSON.stringify(path));
      const lessons = [];
      if (pathObj.lessonSlugs && Array.isArray(pathObj.lessonSlugs)) {
        for (const lSlug of pathObj.lessonSlugs) {
          const l = await DataService.getLessonByIdOrSlug(lSlug);
          if (l) lessons.push(l);
        }
      }
      res.json({ success: true, data: { ...pathObj, lessons } });
    } catch (error) {
      res.status(500).json({ success: false, message: 'O‘quv yo‘lini yuklashda xatolik' });
    }
  }

  // GET /api/lessons
  static async getLessons(req: Request, res: Response) {
    try {
      const { courseSlug, ageGroup } = req.query;
      const lessons = await DataService.getLessons({
        courseSlug: courseSlug as string,
        ageGroup: ageGroup as string,
      });
      res.json({ success: true, data: lessons });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Darslarni yuklashda xatolik' });
    }
  }

  // GET /api/lessons/:id
  static async getLessonById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const lesson = await DataService.getLessonByIdOrSlug(id);
      if (!lesson) {
        return res.status(404).json({ success: false, message: 'Dars topilmadi' });
      }
      res.json({ success: true, data: lesson });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Darsni yuklashda xatolik' });
    }
  }

  // GET /api/achievements
  static async getAchievements(req: Request, res: Response) {
    try {
      const achievements = await DataService.getAchievements();
      res.json({ success: true, data: achievements });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Yutuqlarni yuklashda xatolik' });
    }
  }

  // POST /api/users/onboarding
  static async onboarding(req: Request, res: Response) {
    try {
      const schema = z.object({
        childAgeGroup: z.string().min(1, "Bolaning yosh guruhini tanlang"),
        selectedInterests: z.array(z.string()).min(1, "Kamida bitta mavzuni tanlang"),
        dailyGoalMinutes: z.number().min(1),
        name: z.string().optional(),
      });

      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          errors: parsed.error.errors.map((e) => e.message),
        });
      }

      const user = await DataService.handleOnboarding(parsed.data);

      // Find recommended starting learning path for the selected ageGroup
      const paths = await DataService.getLearningPaths(parsed.data.childAgeGroup);
      const startingPath = paths[0] || (await DataService.getLearningPaths())[0];

      res.status(201).json({
        success: true,
        message: 'Onboarding muvaffaqiyatli yakunlandi',
        data: {
          user,
          startingPath,
        },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Onboardingda xatolik yuz berdi' });
    }
  }

  // GET /api/users/progress
  static async getUserProgress(req: Request, res: Response) {
    try {
      const userId = (req.query.userId as string) || 'demo-user';
      const progressData = await DataService.getUserProgress(userId);
      res.json({ success: true, data: progressData });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Progressni yuklashda xatolik' });
    }
  }

  // POST /api/users/progress
  static async recordUserProgress(req: Request, res: Response) {
    try {
      const schema = z.object({
        userId: z.string().default('demo-user'),
        lessonSlug: z.string().min(1),
        score: z.number().optional().default(100),
        xpEarned: z.number().optional().default(10),
      });

      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ success: false, message: 'Noto‘g‘ri ma‘lumotlar' });
      }

      const result = await DataService.recordProgress(parsed.data);
      res.json({ success: true, data: result });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Progressni saqlashda xatolik' });
    }
  }

  // POST /api/newsletter/subscribe
  static async subscribeNewsletter(req: Request, res: Response) {
    try {
      const schema = z.object({
        email: z.string().email('Iltimos, to‘g‘ri elektron pochta manzilini kiriting'),
        source: z.string().optional().default('footer'),
      });

      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          message: parsed.error.errors[0]?.message || 'Email xato',
        });
      }

      const result = await DataService.subscribeNewsletter(parsed.data.email, parsed.data.source);
      res.status(201).json({
        success: true,
        message: 'Obuna muvaffaqiyatli qabul qilindi! Rahmat.',
        data: result,
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Obunada xatolik yuz berdi' });
    }
  }
}
