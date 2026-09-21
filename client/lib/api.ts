// API client for Farzandly
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface Category {
  _id?: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  displayOrder: number;
  translations?: Record<string, any>;
}

export interface AgeGroup {
  _id?: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  displayOrder: number;
  translations?: Record<string, any>;
}

export interface Article {
  _id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categorySlug: string;
  ageGroup: string;
  readingTimeMinutes: number;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  isPremium?: boolean;
  isPublished: boolean;
  publishedAt: string;
  translations?: Record<string, any>;
}

export interface LessonScreen {
  screenIndex: number;
  type: 'scenario' | 'concept' | 'explanation' | 'islamic_perspective' | 'practice' | 'quiz' | 'victory';
  title: string;
  subtitle?: string;
  content: string;
  example?: string;
  highlight?: string;
  quoteSource?: string;
  quizQuestion?: string;
  quizOptions?: string[];
  correctOptionIndex?: number;
  quizExplanation?: string;
}

export interface Lesson {
  _id?: string;
  courseSlug: string;
  title: string;
  slug: string;
  summary: string;
  order: number;
  estimatedMinutes: number;
  ageGroup: string;
  xpReward: number;
  isFree: boolean;
  isPremium?: boolean;
  videoId?: string;
  videoUrl?: string;
  screens: LessonScreen[];
  translations?: Record<string, any>;
}

export interface Course {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  ageGroup: string;
  categorySlug: string;
  isPremium: boolean;
  estimatedMinutes: number;
  totalLessons: number;
  icon: string;
  color: string;
  lessons?: Lesson[];
  translations?: Record<string, any>;
}

export interface LearningPath {
  _id?: string;
  title: string;
  slug: string;
  description: string;
  ageGroup: string;
  targetAudience: string;
  lessonSlugs: string[];
  badgeIcon: string;
  lessons?: Lesson[];
  translations?: Record<string, any>;
}

export interface Achievement {
  _id?: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  xpRequired: number;
  streakRequired: number;
  translations?: Record<string, any>;
}

export interface UserProgressData {
  user: {
    _id: string;
    name: string;
    childAgeGroup: string;
    selectedInterests: string[];
    dailyGoalMinutes: number;
    xp: number;
    streak: number;
    level: string;
    completedLessons: string[];
    achievements: string[];
    subscriptionStatus: string;
  };
  progress: Array<{
    lessonSlug: string;
    isCompleted: boolean;
    score: number;
    xpEarned: number;
    completedAt: string;
  }>;
}

export class ApiError extends Error {
  statusCode: number;
  details?: any;

  constructor(message: string, statusCode: number, details?: any) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.details = details;
  }
}

function getAuthHeader(): Record<string, string> {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('farzandly_auth_token');
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
  }
  return {};
}

export interface RequestConfig extends RequestInit {
  retries?: number;
  timeoutMs?: number;
}

export async function apiClient<T>(endpoint: string, config: RequestConfig = {}): Promise<T | null> {
  const { retries = 1, timeoutMs = 7000, ...customConfig } = config;
  const url = endpoint.startsWith('http') ? endpoint : `${API_BASE}${endpoint}`;

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...getAuthHeader(),
    ...((customConfig.headers as Record<string, string>) || {}),
  };

  let attempts = 0;
  while (attempts <= retries) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(url, {
        ...customConfig,
        headers,
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!response.ok) {
        let errData: any;
        try {
          errData = await response.json();
        } catch {
          errData = { message: response.statusText };
        }
        throw new ApiError(errData?.message || `HTTP ${response.status}`, response.status, errData);
      }

      const json = await response.json();
      return (json.data ?? json) as T;
    } catch (err: any) {
      clearTimeout(timeoutId);
      attempts++;
      // Only retry idempotent GET requests
      const isIdempotent = !customConfig.method || customConfig.method === 'GET';
      if (attempts > retries || !isIdempotent) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(`[Farzandly API Error] (${endpoint}):`, err.message || err);
        }
        return null;
      }
      await new Promise((resolve) => setTimeout(resolve, attempts * 250));
    }
  }
  return null;
}

// Client fetch helper using centralized network layer
const fetchFromApi = apiClient;

// Fallback demo data
import {
  seedCategories,
  seedAgeGroups,
  seedAchievements,
  seedCourses,
  seedLearningPaths,
  seedLessons,
  seedArticles,
} from './seedData';
import { calculateLevel, calculateStreak, checkAchievements } from './gamification';

function localizeEntity<T extends Record<string, any>>(item: T, lang: string = 'uz'): T {
  if (!item || !lang || lang === 'uz') return item;
  const raw = { ...item };
  if (raw.translations && raw.translations[lang]) {
    const t = raw.translations[lang];
    return {
      ...raw,
      ...t,
      screens: t.screens || raw.screens,
    };
  }
  return raw;
}

export const api = {
  // Categories
  async getCategories(lang: string = 'uz'): Promise<Category[]> {
    const data = await fetchFromApi<Category[]>(`/categories?lang=${lang}`);
    const items = data || (seedCategories as unknown as Category[]);
    return items.map((c) => localizeEntity(c, lang));
  },

  // Age Groups
  async getAgeGroups(lang: string = 'uz'): Promise<AgeGroup[]> {
    const data = await fetchFromApi<AgeGroup[]>(`/age-groups?lang=${lang}`);
    const items = data || (seedAgeGroups as unknown as AgeGroup[]);
    return items.map((ag) => localizeEntity(ag, lang));
  },

  // Articles
  async getArticles(params?: { category?: string; ageGroup?: string; search?: string; lang?: string }): Promise<Article[]> {
    const lang = params?.lang || 'uz';
    const query = new URLSearchParams();
    if (params?.category) query.set('category', params.category);
    if (params?.ageGroup) query.set('ageGroup', params.ageGroup);
    if (params?.search) query.set('search', params.search);
    if (params?.lang) query.set('lang', params.lang);

    const data = await fetchFromApi<Article[]>(`/articles?${query.toString()}`);
    if (data) return data.map((a) => localizeEntity(a, lang));

    let res = seedArticles as unknown as Article[];
    if (params?.category) res = res.filter((a) => a.categorySlug === params.category);
    if (params?.ageGroup) res = res.filter((a) => a.ageGroup === params.ageGroup);
    if (params?.search) {
      const q = params.search.toLowerCase();
      res = res.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q));
    }
    return res.map((a) => localizeEntity(a, lang));
  },

  async getArticleBySlug(slug: string, lang: string = 'uz'): Promise<Article | null> {
    const data = await fetchFromApi<Article>(`/articles/${slug}?lang=${lang}`);
    if (data) return localizeEntity(data, lang);
    const item = (seedArticles.find((a) => a.slug === slug) as unknown as Article) || null;
    return item ? localizeEntity(item, lang) : null;
  },

  // Courses
  async getCourses(params?: { ageGroup?: string; category?: string; lang?: string }): Promise<Course[]> {
    const lang = params?.lang || 'uz';
    const query = new URLSearchParams();
    if (params?.ageGroup) query.set('ageGroup', params.ageGroup);
    if (params?.category) query.set('category', params.category);
    if (params?.lang) query.set('lang', params.lang);

    const data = await fetchFromApi<Course[]>(`/courses?${query.toString()}`);
    if (data) return data.map((c) => localizeEntity(c, lang));

    let res = seedCourses as unknown as Course[];
    if (params?.ageGroup) res = res.filter((c) => c.ageGroup === params.ageGroup);
    if (params?.category) res = res.filter((c) => c.categorySlug === params.category);
    return res.map((c) => localizeEntity(c, lang));
  },

  async getCourseBySlug(slug: string, lang: string = 'uz'): Promise<Course | null> {
    const data = await fetchFromApi<Course>(`/courses/${slug}?lang=${lang}`);
    if (data) return localizeEntity(data, lang);
    const course = seedCourses.find((c) => c.slug === slug) as unknown as Course;
    if (course) {
      const lessons = (seedLessons.filter((l) => l.courseSlug === slug) as unknown as Lesson[]).map((l) =>
        localizeEntity(l, lang)
      );
      return { ...localizeEntity(course, lang), lessons };
    }
    return null;
  },

  // Learning Paths
  async getLearningPaths(ageGroup?: string, lang: string = 'uz'): Promise<LearningPath[]> {
    const data = await fetchFromApi<LearningPath[]>(`/learning-paths?${ageGroup ? `ageGroup=${ageGroup}&` : ''}lang=${lang}`);
    if (data) return data.map((p) => localizeEntity(p, lang));
    let paths = seedLearningPaths as unknown as LearningPath[];
    if (ageGroup) paths = paths.filter((lp) => lp.ageGroup === ageGroup);
    return paths.map((p) => localizeEntity(p, lang));
  },

  async getLearningPathBySlug(slug: string, lang: string = 'uz'): Promise<LearningPath | null> {
    const data = await fetchFromApi<LearningPath>(`/learning-paths/${slug}?lang=${lang}`);
    if (data) return localizeEntity(data, lang);
    const path = seedLearningPaths.find((p) => p.slug === slug) as unknown as LearningPath;
    if (path) {
      const lessons = (seedLessons.filter((l) => path.lessonSlugs.includes(l.slug)) as unknown as Lesson[]).map((l) =>
        localizeEntity(l, lang)
      );
      return { ...localizeEntity(path, lang), lessons };
    }
    return null;
  },

  // Lessons
  async getLessons(params?: { courseSlug?: string; ageGroup?: string; lang?: string }): Promise<Lesson[]> {
    const lang = params?.lang || 'uz';
    const query = new URLSearchParams();
    if (params?.courseSlug) query.set('courseSlug', params.courseSlug);
    if (params?.ageGroup) query.set('ageGroup', params.ageGroup);
    if (params?.lang) query.set('lang', params.lang);

    const data = await fetchFromApi<Lesson[]>(`/lessons?${query.toString()}`);
    if (data) return data.map((l) => localizeEntity(l, lang));

    let res = seedLessons as unknown as Lesson[];
    if (params?.courseSlug) res = res.filter((l) => l.courseSlug === params.courseSlug);
    if (params?.ageGroup) res = res.filter((l) => l.ageGroup === params.ageGroup);
    return res.map((l) => localizeEntity(l, lang));
  },

  async getLessonByIdOrSlug(idOrSlug: string, lang: string = 'uz'): Promise<Lesson | null> {
    const data = await fetchFromApi<Lesson>(`/lessons/${idOrSlug}?lang=${lang}`);
    if (data) return localizeEntity(data, lang);
    const lesson = (seedLessons.find((l) => l.slug === idOrSlug) as unknown as Lesson) || null;
    return lesson ? localizeEntity(lesson, lang) : null;
  },

  // Achievements
  async getAchievements(lang: string = 'uz'): Promise<Achievement[]> {
    const data = await fetchFromApi<Achievement[]>(`/achievements?lang=${lang}`);
    const items = data || (seedAchievements as unknown as Achievement[]);
    return items.map((a) => localizeEntity(a, lang));
  },

  // User Onboarding
  async submitOnboarding(payload: {
    childAgeGroup: string;
    selectedInterests: string[];
    dailyGoalMinutes: number;
    name?: string;
  }) {
    const res = await fetch(`${API_BASE}/users/onboarding`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => null);

    if (res && res.ok) {
      const json = await res.json();
      return json.data;
    }

    // Fallback: save to localStorage
    const demoUser = {
      _id: `user-${Date.now()}`,
      name: payload.name || 'Ota-ona',
      childAgeGroup: payload.childAgeGroup,
      selectedInterests: payload.selectedInterests,
      dailyGoalMinutes: payload.dailyGoalMinutes,
      xp: 0,
      streak: 1,
      level: 'Boshlovchi',
      completedLessons: [],
      achievements: [],
      subscriptionStatus: 'free',
    };
    return {
      user: demoUser,
      startingPath: seedLearningPaths.find((lp) => lp.ageGroup === payload.childAgeGroup) || seedLearningPaths[0],
    };
  },

  // User Progress
  async getUserProgress(userId: string = 'demo-user'): Promise<UserProgressData> {
    const data = await fetchFromApi<UserProgressData>(`/users/progress?userId=${userId}`);
    if (data) return data;

    // Check localStorage if running in browser
    if (typeof window !== 'undefined') {
      const storedUser = localStorage.getItem('farzandly_user');
      const storedProgress = localStorage.getItem('farzandly_progress');
      if (storedUser) {
        return {
          user: JSON.parse(storedUser),
          progress: storedProgress ? JSON.parse(storedProgress) : [],
        };
      }
    }

    return {
      user: {
        _id: 'demo-user',
        name: 'Ota-ona',
        childAgeGroup: '3-5',
        selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
        dailyGoalMinutes: 10,
        xp: 20,
        streak: 3,
        level: "O‘rganuvchi",
        completedLessons: ['bolani-tushunishdan-boshlang'],
        achievements: ['ilk-qadam'],
        subscriptionStatus: 'free',
      },
      progress: [
        {
          lessonSlug: 'bolani-tushunishdan-boshlang',
          isCompleted: true,
          score: 100,
          xpEarned: 10,
          completedAt: new Date().toISOString(),
        },
      ],
    };
  },

  async recordLessonProgress(payload: {
    userId?: string;
    lessonSlug: string;
    score?: number;
    xpEarned?: number;
  }) {
    const res = await fetch(`${API_BASE}/users/progress`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => null);

    if (res && res.ok) {
      return await res.json();
    }

    // Local storage fallback
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('farzandly_user');
      let user = stored
        ? JSON.parse(stored)
        : {
            _id: 'demo-user',
            name: 'Ota-ona',
            childAgeGroup: '3-5',
            selectedInterests: ['Bola xulqi'],
            dailyGoalMinutes: 10,
            xp: 0,
            streak: 1,
            level: 'Boshlovchi',
            completedLessons: [],
            achievements: ['ilk-qadam'],
            subscriptionStatus: 'free',
          };

      const xpToAdd = payload.xpEarned || 10;
      user.xp = (user.xp || 0) + xpToAdd;
      if (!user.completedLessons.includes(payload.lessonSlug)) {
        user.completedLessons.push(payload.lessonSlug);
      }
      user.streak = calculateStreak(user.lastActiveDate, user.streak || 1);
      user.lastActiveDate = new Date().toISOString();
      const levelInfo = calculateLevel(user.xp);
      user.level = levelInfo.level;
      const achResult = checkAchievements(user.xp, user.streak, user.completedLessons, user.achievements || []);
      user.achievements = achResult.unlocked;

      localStorage.setItem('farzandly_user', JSON.stringify(user));
      return { success: true, user, newlyUnlockedAchievements: achResult.newlyUnlocked };
    }

    return { success: true };
  },

  // Newsletter
  async subscribeNewsletter(email: string) {
    const res = await fetch(`${API_BASE}/newsletter/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }).catch(() => null);

    if (res && res.ok) {
      return await res.json();
    }
    return { success: true, message: 'Obuna muvaffaqiyatli qabul qilindi!' };
  },
};
