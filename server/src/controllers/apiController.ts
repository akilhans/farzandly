import { Request, Response } from 'express';
import { DataService } from '../services/dataService.js';
import { TelegramBotEngine } from '../services/telegramBotEngine.js';
import { z } from 'zod';
import {
  isPremiumActive,
  lockLesson,
  lessonSummary,
  lockArticle,
  articleSummary,
  lockHealthTopic,
  toPublicUser,
} from '../lib/premium.js';

const childrenSchema = z.object({
  children: z
    .array(
      z.object({
        id: z.string().min(1).max(64),
        name: z.string().min(1).max(60),
        ageGroup: z.string().min(1).max(20),
        birthDate: z.string().max(20).optional(),
        gender: z.enum(['boy', 'girl']).optional(),
        completedLessons: z.array(z.string().max(200)).max(1000).optional().default([]),
        notes: z.string().max(1000).optional(),
      })
    )
    .max(10),
  activeChildId: z.string().max(64).optional(),
});

const canRead = (req: Request, item: any) => !item?.isPremium || isPremiumActive(req.user);

function getReqLang(req: Request): string {
  const q = req.query.lang as string;
  if (q && ['uz', 'en', 'ru'].includes(q.toLowerCase())) return q.toLowerCase();
  const header = req.headers['accept-language'] || req.headers['x-lang'];
  if (typeof header === 'string') {
    if (header.startsWith('en')) return 'en';
    if (header.startsWith('ru')) return 'ru';
  }
  return 'uz';
}

export class ApiController {
  // GET /api/categories
  static async getCategories(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const categories = await DataService.getCategories(lang);
      res.json({ success: true, data: categories });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Kategoriyalarni yuklashda xatolik' });
    }
  }

  // GET /api/age-groups
  static async getAgeGroups(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const ageGroups = await DataService.getAgeGroups(lang);
      res.json({ success: true, data: ageGroups });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Yosh guruhlarini yuklashda xatolik' });
    }
  }

  // GET /api/articles
  static async getArticles(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const { category, ageGroup, search } = req.query;
      const articles = await DataService.getArticles({
        categorySlug: category as string,
        ageGroup: ageGroup as string,
        search: search as string,
        lang,
      });
      res.json({ success: true, count: articles.length, data: articles.map(articleSummary) });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Maqolalarni yuklashda xatolik' });
    }
  }

  // GET /api/articles/:slug
  static async getArticleBySlug(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const { slug } = req.params;
      const article = await DataService.getArticleBySlug(slug, lang);
      if (!article) {
        return res.status(404).json({ success: false, message: 'Maqola topilmadi' });
      }
      res.setHeader('Vary', 'Authorization');
      res.json({ success: true, data: canRead(req, article) ? article : lockArticle(article) });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Maqolani yuklashda xatolik' });
    }
  }

  // GET /api/search?q=
  static async search(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const q = String(req.query.q || '').slice(0, 80);
      const { lessons, articles } = await DataService.searchContent(q, lang, 12);
      const plain = (x: any) => (typeof x?.toObject === 'function' ? x.toObject() : x);
      res.json({
        success: true,
        data: {
          lessons: lessons.map((l: any) => {
            const { screens, translations, ...rest } = plain(l);
            return rest;
          }),
          articles: articles.map((a: any) => {
            const { content, translations, ...rest } = plain(a);
            return rest;
          }),
        },
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Qidiruvda xatolik' });
    }
  }

  // GET /api/courses
  static async getCourses(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const { ageGroup, category } = req.query;
      const courses = await DataService.getCourses({
        ageGroup: ageGroup as string,
        categorySlug: category as string,
        lang,
      });
      res.json({ success: true, data: courses });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Kurslarni yuklashda xatolik' });
    }
  }

  // GET /api/courses/:slug
  static async getCourseBySlug(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const { slug } = req.params;
      const course = await DataService.getCourseBySlug(slug, lang);
      if (!course) {
        return res.status(404).json({ success: false, message: 'Kurs topilmadi' });
      }
      const lessons = await DataService.getLessons({ courseSlug: slug, lang });
      res.json({ success: true, data: { ...JSON.parse(JSON.stringify(course)), lessons: lessons.map(lessonSummary) } });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Kursni yuklashda xatolik' });
    }
  }

  // GET /api/learning-paths
  static async getLearningPaths(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const { ageGroup } = req.query;
      const paths = await DataService.getLearningPaths(ageGroup as string, lang);
      res.json({ success: true, data: paths });
    } catch (error) {
      res.status(500).json({ success: false, message: 'O‘quv yo‘llarini yuklashda xatolik' });
    }
  }

  // GET /api/learning-paths/:slug
  static async getLearningPathBySlug(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const { slug } = req.params;
      const path = await DataService.getLearningPathBySlug(slug, lang);
      if (!path) {
        return res.status(404).json({ success: false, message: 'O‘quv yo‘li topilmadi' });
      }
      // Populate lessons
      const pathObj = JSON.parse(JSON.stringify(path));
      const lessons = [];
      if (pathObj.lessonSlugs && Array.isArray(pathObj.lessonSlugs)) {
        for (const lSlug of pathObj.lessonSlugs) {
          const l = await DataService.getLessonByIdOrSlug(lSlug, lang);
          if (l) lessons.push(lessonSummary(l));
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
      const lang = getReqLang(req);
      const { courseSlug, ageGroup } = req.query;
      const lessons = await DataService.getLessons({
        courseSlug: courseSlug as string,
        ageGroup: ageGroup as string,
        lang,
      });
      res.json({ success: true, data: lessons.map(lessonSummary) });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Darslarni yuklashda xatolik' });
    }
  }

  // GET /api/lessons/:id
  static async getLessonById(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const { id } = req.params;
      const lesson = await DataService.getLessonByIdOrSlug(id, lang);
      if (!lesson) {
        return res.status(404).json({ success: false, message: 'Dars topilmadi' });
      }
      res.setHeader('Vary', 'Authorization');
      res.json({ success: true, data: canRead(req, lesson) ? lesson : lockLesson(lesson) });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Darsni yuklashda xatolik' });
    }
  }

  // GET /api/achievements
  static async getAchievements(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const achievements = await DataService.getAchievements(lang);
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
        dailyGoalMinutes: z.number().min(1).max(240),
        name: z.string().max(80).optional(),
      });

      const parsed = schema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({
          success: false,
          errors: parsed.error.errors.map((e) => e.message),
        });
      }

      // Logged-in parents update their own profile; anonymous visitors just get a starting path
      // (no more throwaway user records per visit).
      const user = req.user
        ? toPublicUser(await DataService.updateProfileBasics(req.userId!, parsed.data))
        : null;

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

  // GET /api/users/progress  (auth)
  static async getUserProgress(req: Request, res: Response) {
    try {
      const progressData = await DataService.getUserProgress(req.userId!);
      res.json({ success: true, data: { ...progressData, user: toPublicUser(progressData.user) } });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Progressni yuklashda xatolik' });
    }
  }

  // POST /api/users/progress  (auth) — XP is decided by the server, once per item.
  static async recordUserProgress(req: Request, res: Response) {
    const parsed = z
      .object({
        lessonSlug: z.string().min(1).max(200),
        score: z.number().min(0).max(100).optional(),
        xpEarned: z.number().min(0).max(1000).optional(),
      })
      .safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ success: false, message: 'Noto‘g‘ri ma‘lumotlar' });
    }
    return ApiController.completeItem(req, res, parsed.data.lessonSlug, parsed.data.xpEarned, parsed.data.score);
  }

  private static async completeItem(req: Request, res: Response, slug: string, requestedXp?: number, score?: number) {
    try {
      const reward = await DataService.resolveProgressReward(slug, requestedXp);
      if (!reward) return res.status(404).json({ success: false, message: 'Dars topilmadi' });
      if (reward.isPremium && !isPremiumActive(req.user)) {
        return res.status(403).json({ success: false, code: 'PREMIUM_REQUIRED', message: 'Bu dars Premium obunachilar uchun' });
      }

      const result: any = await DataService.recordProgress({ userId: req.userId!, lessonSlug: slug, score, xpEarned: reward.xp });
      const updatedUser = result.updatedUser || result.user;

      if (!result.alreadyCompleted && req.user?.telegramId && !slug.startsWith('maqola-') && !slug.startsWith('health-')) {
        DataService.getLessonByIdOrSlug(slug)
          .then((lesson: any) =>
            TelegramBotEngine.notifyLessonCompleted(req.user.telegramId, lesson?.title || 'Farzandly darsi', result.xpEarned)
          )
          .catch((e: any) => console.warn('[TelegramNotify] Dars yakunlandi xabari yuborilmadi:', e?.message));
      }

      res.json({
        success: true,
        data: {
          alreadyCompleted: result.alreadyCompleted,
          xpEarned: result.xpEarned,
          newlyUnlockedAchievements: result.newlyUnlockedAchievements || [],
          updatedUser: toPublicUser(updatedUser),
        },
      });
    } catch (error: any) {
      console.error('[recordUserProgress]', error?.message || error);
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

  // ======================== HEALTH TOPICS ========================
  // GET /api/health-topics
  static async getHealthTopics(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const topics = await DataService.getHealthTopics(lang);
      res.json({
        success: true,
        count: topics.length,
        data: topics.map((t: any) => (canRead(req, t) ? t : lockHealthTopic(t))),
      });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Salomatlik mavzularini yuklashda xatolik' });
    }
  }

  // GET /api/health-topics/:slug
  static async getHealthTopicBySlug(req: Request, res: Response) {
    try {
      const lang = getReqLang(req);
      const { slug } = req.params;
      const topic = await DataService.getHealthTopicBySlug(slug, lang);
      if (!topic) {
        return res.status(404).json({ success: false, message: 'Mavzu topilmadi' });
      }
      res.setHeader('Vary', 'Authorization');
      res.json({ success: true, data: canRead(req, topic) ? topic : lockHealthTopic(topic) });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Salomatlik mavzusini yuklashda xatolik' });
    }
  }

  // POST /api/health-topics/:slug/quiz  (auth)
  static async recordHealthQuiz(req: Request, res: Response) {
    const { slug } = req.params;
    const xp = Number(req.body?.xpEarned);
    const score = Number(req.body?.score);
    return ApiController.completeItem(
      req,
      res,
      `health-${slug}`,
      Number.isFinite(xp) ? xp : undefined,
      Number.isFinite(score) ? Math.max(0, Math.min(score, 100)) : undefined
    );
  }

  // ======================== FAMILY & CO-PARENTING ========================
  // GET /api/family?userId=...
  static async getFamily(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const familyData = await DataService.getFamilyData(userId);
      res.json({ success: true, data: familyData });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message || 'Oila ma‘lumotlarini olishda xatolik' });
    }
  }

  // POST /api/family/invite
  static async createFamilyInvite(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const code = await DataService.getOrCreatePartnerInviteCode(userId);
      const inviteUrl = `${process.env.APP_URL || 'https://farzandly.uz'}/join-family?code=${code}`;
      const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(inviteUrl)}&text=${encodeURIComponent(
        `Assalomu alaykum! Farzandly ilovasida oilaviy hisobimizni birlashtirish uchun taklifnoma: ${code}`
      )}`;

      res.json({
        success: true,
        data: {
          code,
          inviteUrl,
          telegramShareUrl,
        },
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message || 'Taklifnoma yaratishda xatolik' });
    }
  }

  // POST /api/family/connect
  static async connectPartner(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const inviteCode = typeof req.body?.inviteCode === 'string' ? req.body.inviteCode.slice(0, 40) : '';
      if (!inviteCode) {
        return res.status(400).json({ success: false, message: 'Taklif kodi kiritilishi shart' });
      }
      const result = await DataService.connectPartner(userId, inviteCode);
      res.json({ success: true, message: 'Turmush o‘rtog‘ingiz muvaffaqiyatli ulandi!', data: result });
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message || 'Ulashda xatolik yuz berdi' });
    }
  }

  // POST /api/family/disconnect
  static async disconnectPartner(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const result = await DataService.disconnectPartner(userId);
      res.json({ success: true, message: 'Aloqa uzildi', data: result });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message || 'Xatolik' });
    }
  }

  // POST /api/family/rules
  static async updateFamilyRules(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const rules = req.body?.rules;
      if (!Array.isArray(rules) || rules.length > 30 || rules.some((r: any) => typeof r !== 'string' || r.length > 200)) {
        return res.status(400).json({ success: false, message: 'Qoidalar massiv shaklida bo‘lishi kerak' });
      }
      const result = await DataService.updateFamilyRules(userId, rules);
      res.json({ success: true, message: 'Qoidalar saqlandi', data: result });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message || 'Qoidalarni saqlashda xatolik' });
    }
  }

  // POST /api/family/children
  static async updateChildren(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const parsedChildren = childrenSchema.safeParse(req.body);
      if (!parsedChildren.success) {
        return res.status(400).json({ success: false, message: 'Bolalar ro‘yxati massiv bo‘lishi kerak' });
      }
      const { children, activeChildId } = parsedChildren.data;
      const result = await DataService.updateUserChildren(userId, children, activeChildId);
      res.json({ success: true, message: 'Farzandlar ma‘lumoti saqlandi', data: result });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message || 'Farzandlar ma‘lumotini saqlashda xatolik' });
    }
  }

  // ======================== GROWTH & REFERRALS ========================
  // GET /api/referrals/my-code?userId=...
  static async getReferralCode(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const code = await DataService.getOrCreateReferralCode(userId);
      const referralUrl = `${process.env.APP_URL || 'https://farzandly.uz'}/ref/${code}`;
      const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(referralUrl)}&text=${encodeURIComponent(
        `Farzand tarbiyasida eng kerakli ilova — Farzandly! Ushbu havola orqali ro‘yxatdan o‘tib, 7 kunlik Premium obunani bepul oling: ${referralUrl}`
      )}`;

      res.json({
        success: true,
        data: {
          referralCode: code,
          referralUrl,
          telegramShareUrl,
        },
      });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message || 'Referral kodini olishda xatolik' });
    }
  }

  // POST /api/referrals/apply
  static async applyReferralCode(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const code = typeof req.body?.code === 'string' ? req.body.code.slice(0, 40) : '';
      if (!code) {
        return res.status(400).json({ success: false, message: 'Referral kodi ko‘rsatilmadi' });
      }
      const result = await DataService.applyReferralCode(userId, code);
      res.json(result);
    } catch (error: any) {
      res.status(400).json({ success: false, message: error.message || 'Referral kodini qo‘llashda xatolik' });
    }
  }

  // GET /api/referrals/stats?userId=...
  static async getReferralStats(req: Request, res: Response) {
    try {
      const userId = req.userId!;
      const stats = await DataService.getReferralStats(userId);
      res.json({ success: true, data: stats });
    } catch (error: any) {
      res.status(500).json({ success: false, message: error.message || 'Statistikani olishda xatolik' });
    }
  }
}
