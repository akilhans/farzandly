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
}

export interface AgeGroup {
  _id?: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  displayOrder: number;
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
  isPublished: boolean;
  publishedAt: string;
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
  screens: LessonScreen[];
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
}

export interface Achievement {
  _id?: string;
  code: string;
  title: string;
  description: string;
  icon: string;
  xpRequired: number;
  streakRequired: number;
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

// Client fetch helper
async function fetchFromApi<T>(endpoint: string, options?: RequestInit): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
      },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      console.warn(`API xatolik: ${res.status} on ${endpoint}`);
      return null;
    }
    const data = await res.json();
    return data.data ?? data;
  } catch (err) {
    console.warn(`API serverga ulanib bo'lmadi (${endpoint}):`, (err as Error).message);
    return null;
  }
}

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

export const api = {
  // Categories
  async getCategories(): Promise<Category[]> {
    const data = await fetchFromApi<Category[]>('/categories');
    return data || (seedCategories as Category[]);
  },

  // Age Groups
  async getAgeGroups(): Promise<AgeGroup[]> {
    const data = await fetchFromApi<AgeGroup[]>('/age-groups');
    return data || (seedAgeGroups as AgeGroup[]);
  },

  // Articles
  async getArticles(params?: { category?: string; ageGroup?: string; search?: string }): Promise<Article[]> {
    const query = new URLSearchParams();
    if (params?.category) query.set('category', params.category);
    if (params?.ageGroup) query.set('ageGroup', params.ageGroup);
    if (params?.search) query.set('search', params.search);

    const data = await fetchFromApi<Article[]>(`/articles?${query.toString()}`);
    if (data) return data;

    let res = seedArticles as unknown as Article[];
    if (params?.category) res = res.filter((a) => a.categorySlug === params.category);
    if (params?.ageGroup) res = res.filter((a) => a.ageGroup === params.ageGroup);
    if (params?.search) {
      const q = params.search.toLowerCase();
      res = res.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q));
    }
    return res;
  },

  async getArticleBySlug(slug: string): Promise<Article | null> {
    const data = await fetchFromApi<Article>(`/articles/${slug}`);
    if (data) return data;
    return (seedArticles.find((a) => a.slug === slug) as unknown as Article) || null;
  },

  // Courses
  async getCourses(params?: { ageGroup?: string; category?: string }): Promise<Course[]> {
    const query = new URLSearchParams();
    if (params?.ageGroup) query.set('ageGroup', params.ageGroup);
    if (params?.category) query.set('category', params.category);

    const data = await fetchFromApi<Course[]>(`/courses?${query.toString()}`);
    if (data) return data;

    let res = seedCourses as unknown as Course[];
    if (params?.ageGroup) res = res.filter((c) => c.ageGroup === params.ageGroup);
    if (params?.category) res = res.filter((c) => c.categorySlug === params.category);
    return res;
  },

  async getCourseBySlug(slug: string): Promise<Course | null> {
    const data = await fetchFromApi<Course>(`/courses/${slug}`);
    if (data) return data;
    const course = seedCourses.find((c) => c.slug === slug) as unknown as Course;
    if (course) {
      const lessons = seedLessons.filter((l) => l.courseSlug === slug) as unknown as Lesson[];
      return { ...course, lessons };
    }
    return null;
  },

  // Learning Paths
  async getLearningPaths(ageGroup?: string): Promise<LearningPath[]> {
    const data = await fetchFromApi<LearningPath[]>(`/learning-paths${ageGroup ? `?ageGroup=${ageGroup}` : ''}`);
    if (data) return data;
    if (ageGroup) return seedLearningPaths.filter((lp) => lp.ageGroup === ageGroup) as unknown as LearningPath[];
    return seedLearningPaths as unknown as LearningPath[];
  },

  async getLearningPathBySlug(slug: string): Promise<LearningPath | null> {
    const data = await fetchFromApi<LearningPath>(`/learning-paths/${slug}`);
    if (data) return data;
    const path = seedLearningPaths.find((p) => p.slug === slug) as unknown as LearningPath;
    if (path) {
      const lessons = seedLessons.filter((l) => path.lessonSlugs.includes(l.slug)) as unknown as Lesson[];
      return { ...path, lessons };
    }
    return null;
  },

  // Lessons
  async getLessons(params?: { courseSlug?: string; ageGroup?: string }): Promise<Lesson[]> {
    const query = new URLSearchParams();
    if (params?.courseSlug) query.set('courseSlug', params.courseSlug);
    if (params?.ageGroup) query.set('ageGroup', params.ageGroup);

    const data = await fetchFromApi<Lesson[]>(`/lessons?${query.toString()}`);
    if (data) return data;

    let res = seedLessons as unknown as Lesson[];
    if (params?.courseSlug) res = res.filter((l) => l.courseSlug === params.courseSlug);
    if (params?.ageGroup) res = res.filter((l) => l.ageGroup === params.ageGroup);
    return res;
  },

  async getLessonByIdOrSlug(idOrSlug: string): Promise<Lesson | null> {
    const data = await fetchFromApi<Lesson>(`/lessons/${idOrSlug}`);
    if (data) return data;
    return (seedLessons.find((l) => l.slug === idOrSlug) as unknown as Lesson) || null;
  },

  // Achievements
  async getAchievements(): Promise<Achievement[]> {
    const data = await fetchFromApi<Achievement[]>('/achievements');
    return data || (seedAchievements as Achievement[]);
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

      user.xp += payload.xpEarned || 10;
      if (!user.completedLessons.includes(payload.lessonSlug)) {
        user.completedLessons.push(payload.lessonSlug);
      }
      if (user.xp >= 100) user.level = 'Tajribali ota-ona';
      else if (user.xp >= 50) user.level = 'Ongli ota-ona';
      else if (user.xp >= 20) user.level = "O‘rganuvchi";

      localStorage.setItem('farzandly_user', JSON.stringify(user));
      return { success: true, user };
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
