import mongoose from 'mongoose';
import {
  Category,
  AgeGroup,
  Article,
  Course,
  Lesson,
  LearningPath,
  Achievement,
  User,
  UserProgress,
  NewsletterSubscriber,
} from '../models/index.js';
import {
  seedCategories,
  seedAgeGroups,
  seedAchievements,
  seedCourses,
  seedLearningPaths,
  seedLessons,
  seedArticles,
} from '../scripts/seedData.js';

// In-memory fallback state if MongoDB is not connected
let memoryCategories = [...seedCategories];
let memoryAgeGroups = [...seedAgeGroups];
let memoryAchievements = [...seedAchievements];
let memoryCourses = [...seedCourses];
let memoryLearningPaths = [...seedLearningPaths];
let memoryLessons = [...seedLessons];
let memoryArticles = [...seedArticles];
let memoryUsers: Record<string, any> = {
  'demo-user': {
    _id: 'demo-user',
    name: 'Ota-ona',
    childAgeGroup: '3-5',
    selectedInterests: ['Tarbiya asoslari va iymon'],
    dailyGoalMinutes: 10,
    xp: 20,
    streak: 3,
    level: "O‘rganuvchi",
    completedLessons: ['dars-1-tarbiyaning-ahamiyati-1-qism'],
    achievements: ['ilk-qadam'],
    subscriptionStatus: 'free',
  },
};
let memoryProgress: Record<string, any[]> = {
  'demo-user': [
    {
      userId: 'demo-user',
      lessonSlug: 'dars-1-tarbiyaning-ahamiyati-1-qism',
      isCompleted: true,
      score: 100,
      xpEarned: 15,
      completedAt: new Date(),
    },
  ],
};
let memoryNewsletter: string[] = [];

function isDbConnected(): boolean {
  return mongoose.connection.readyState === 1;
}

function localizeEntity<T extends Record<string, any>>(item: T, lang: string = 'uz'): T {
  if (!item || !lang || lang === 'uz') return item;
  const raw = (typeof (item as any).toObject === 'function') ? (item as any).toObject() : { ...item };
  if (raw.translations && raw.translations[lang]) {
    const t = raw.translations[lang];
    return {
      ...raw,
      ...t,
      screens: t.screens || raw.screens,
    };
  }
  return raw as T;
}

export class DataService {
  // Categories
  static async getCategories(lang: string = 'uz') {
    let items;
    if (isDbConnected()) {
      items = await Category.find().sort({ displayOrder: 1 });
    } else {
      items = memoryCategories;
    }
    return items.map((c: any) => localizeEntity(c, lang));
  }

  // Age Groups
  static async getAgeGroups(lang: string = 'uz') {
    let items;
    if (isDbConnected()) {
      items = await AgeGroup.find().sort({ displayOrder: 1 });
    } else {
      items = memoryAgeGroups;
    }
    return items.map((ag: any) => localizeEntity(ag, lang));
  }

  // Articles
  static async getArticles(filters?: { categorySlug?: string; ageGroup?: string; search?: string; lang?: string }) {
    const lang = filters?.lang || 'uz';
    let results;
    if (isDbConnected()) {
      const query: Record<string, any> = { isPublished: true };
      if (filters?.categorySlug) query.categorySlug = filters.categorySlug;
      if (filters?.ageGroup) query.ageGroup = filters.ageGroup;
      if (filters?.search) {
        query.$or = [
          { title: { $regex: filters.search, $options: 'i' } },
          { excerpt: { $regex: filters.search, $options: 'i' } },
        ];
      }
      results = await Article.find(query).sort({ publishedAt: -1 });
    } else {
      results = memoryArticles;
      if (filters?.categorySlug) {
        results = results.filter((a) => a.categorySlug === filters.categorySlug);
      }
      if (filters?.ageGroup) {
        results = results.filter((a) => a.ageGroup === filters.ageGroup);
      }
      if (filters?.search) {
        const q = filters.search.toLowerCase();
        results = results.filter((a) => a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q));
      }
    }
    return results.map((a: any) => localizeEntity(a, lang));
  }

  static async getArticleBySlug(slug: string, lang: string = 'uz') {
    let article;
    if (isDbConnected()) {
      article = await Article.findOne({ slug });
    } else {
      article = memoryArticles.find((a) => a.slug === slug) || null;
    }
    return article ? localizeEntity(article, lang) : null;
  }

  // Courses
  static async getCourses(filters?: { ageGroup?: string; categorySlug?: string; lang?: string }) {
    const lang = filters?.lang || 'uz';
    let results;
    if (isDbConnected()) {
      const query: Record<string, any> = {};
      if (filters?.ageGroup) query.ageGroup = filters.ageGroup;
      if (filters?.categorySlug) query.categorySlug = filters.categorySlug;
      results = await Course.find(query);
    } else {
      results = memoryCourses;
      if (filters?.ageGroup) {
        results = results.filter((c) => c.ageGroup === filters.ageGroup);
      }
      if (filters?.categorySlug) {
        results = results.filter((c) => c.categorySlug === filters.categorySlug);
      }
    }
    return results.map((c: any) => localizeEntity(c, lang));
  }

  static async getCourseBySlug(slug: string, lang: string = 'uz') {
    let course;
    if (isDbConnected()) {
      course = await Course.findOne({ slug });
    } else {
      course = memoryCourses.find((c) => c.slug === slug) || null;
    }
    return course ? localizeEntity(course, lang) : null;
  }

  // Learning Paths
  static async getLearningPaths(ageGroup?: string, lang: string = 'uz') {
    let paths;
    if (isDbConnected()) {
      const query = ageGroup ? { ageGroup } : {};
      paths = await LearningPath.find(query);
    } else {
      paths = ageGroup ? memoryLearningPaths.filter((lp) => lp.ageGroup === ageGroup) : memoryLearningPaths;
    }
    return paths.map((p: any) => localizeEntity(p, lang));
  }

  static async getLearningPathBySlug(slug: string, lang: string = 'uz') {
    let path;
    if (isDbConnected()) {
      path = await LearningPath.findOne({ slug });
    } else {
      path = memoryLearningPaths.find((lp) => lp.slug === slug) || null;
    }
    return path ? localizeEntity(path, lang) : null;
  }

  // Lessons
  static async getLessons(filters?: { courseSlug?: string; ageGroup?: string; lang?: string }) {
    const lang = filters?.lang || 'uz';
    let results;
    if (isDbConnected()) {
      const query: Record<string, any> = {};
      if (filters?.courseSlug) query.courseSlug = filters.courseSlug;
      if (filters?.ageGroup) query.ageGroup = filters.ageGroup;
      results = await Lesson.find(query).sort({ order: 1 });
    } else {
      results = memoryLessons;
      if (filters?.courseSlug) {
        results = results.filter((l) => l.courseSlug === filters.courseSlug);
      }
      if (filters?.ageGroup) {
        results = results.filter((l) => l.ageGroup === filters.ageGroup);
      }
      results = results.sort((a, b) => a.order - b.order);
    }
    return results.map((l: any) => localizeEntity(l, lang));
  }

  static async getLessonByIdOrSlug(idOrSlug: string, lang: string = 'uz') {
    let lesson = null;
    if (isDbConnected()) {
      if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        lesson = await Lesson.findById(idOrSlug);
      }
      if (!lesson) {
        lesson = await Lesson.findOne({ slug: idOrSlug });
      }
    } else {
      lesson = memoryLessons.find((l) => l.slug === idOrSlug) || null;
    }
    return lesson ? localizeEntity(lesson, lang) : null;
  }

  // Achievements
  static async getAchievements(lang: string = 'uz') {
    let items;
    if (isDbConnected()) {
      items = await Achievement.find().sort({ xpRequired: 1 });
    } else {
      items = memoryAchievements;
    }
    return items.map((a: any) => localizeEntity(a, lang));
  }

  // User Onboarding
  static async handleOnboarding(data: {
    childAgeGroup: string;
    selectedInterests: string[];
    dailyGoalMinutes: number;
    name?: string;
  }) {
    const userPayload = {
      name: data.name || 'Ota-ona',
      childAgeGroup: data.childAgeGroup,
      selectedInterests: data.selectedInterests,
      dailyGoalMinutes: data.dailyGoalMinutes,
      xp: 0,
      streak: 1,
      level: 'Boshlovchi',
      completedLessons: [],
      achievements: [],
      subscriptionStatus: 'free',
    };

    if (isDbConnected()) {
      const newUser = new User(userPayload);
      await newUser.save();
      return newUser;
    }

    const id = `user-${Date.now()}`;
    const createdUser = { _id: id, ...userPayload };
    memoryUsers[id] = createdUser;
    return createdUser;
  }

  // Telegram User Authentication
  static async upsertTelegramUser(data: {
    telegramId: string;
    telegramUsername?: string;
    name: string;
    firstName?: string;
    lastName?: string;
    photoUrl?: string;
  }) {
    if (isDbConnected()) {
      let user = await User.findOne({ telegramId: data.telegramId });
      if (user) {
        user.name = data.name || user.name;
        if (data.firstName) user.firstName = data.firstName;
        if (data.lastName) user.lastName = data.lastName;
        user.telegramUsername = data.telegramUsername || user.telegramUsername;
        user.photoUrl = data.photoUrl || user.photoUrl;
        user.lastActiveDate = new Date();
        await user.save();
        return user;
      }

      user = new User({
        telegramId: data.telegramId,
        telegramUsername: data.telegramUsername,
        name: data.name,
        firstName: data.firstName,
        lastName: data.lastName,
        photoUrl: data.photoUrl,
        authProvider: 'telegram',
        childAgeGroup: '3-5',
        selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
        dailyGoalMinutes: 10,
        xp: 0,
        streak: 1,
        level: 'Boshlovchi',
        completedLessons: [],
        achievements: ['ilk-qadam'],
        subscriptionStatus: 'free',
      });
      await user.save();
      return user;
    }

    // In-memory
    const existingKey = Object.keys(memoryUsers).find(
      (k) => memoryUsers[k].telegramId === data.telegramId
    );
    if (existingKey) {
      const user = memoryUsers[existingKey];
      user.name = data.name || user.name;
      if (data.firstName) user.firstName = data.firstName;
      if (data.lastName) user.lastName = data.lastName;
      user.telegramUsername = data.telegramUsername || user.telegramUsername;
      user.photoUrl = data.photoUrl || user.photoUrl;
      return user;
    }

    const id = `tg-${data.telegramId}`;
    const newUser = {
      _id: id,
      telegramId: data.telegramId,
      telegramUsername: data.telegramUsername,
      name: data.name,
      firstName: data.firstName,
      lastName: data.lastName,
      photoUrl: data.photoUrl,
      authProvider: 'telegram',
      childAgeGroup: '3-5',
      selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
      dailyGoalMinutes: 10,
      xp: 0,
      streak: 1,
      level: 'Boshlovchi',
      completedLessons: [],
      achievements: ['ilk-qadam'],
      subscriptionStatus: 'free',
    };
    memoryUsers[id] = newUser;
    return newUser;
  }

  // Email User Authentication
  static async createOrUpdateEmailUser(data: {
    name: string;
    email: string;
    passwordHash: string;
  }) {
    if (isDbConnected()) {
      const existing = await User.findOne({ email: data.email });
      if (existing) {
        throw new Error('Bu email manzili allaqachon ro‘yxatdan o‘tgan');
      }

      const user = new User({
        name: data.name,
        email: data.email,
        passwordHash: data.passwordHash,
        authProvider: 'email',
        childAgeGroup: '3-5',
        selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
        dailyGoalMinutes: 10,
        xp: 15,
        streak: 1,
        level: 'Boshlovchi',
        completedLessons: [],
        achievements: ['ilk-qadam'],
        subscriptionStatus: 'free',
        photoUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(data.name)}`,
      });
      await user.save();
      return user;
    }

    // In-memory
    const existing = Object.values(memoryUsers).find((u: any) => u.email === data.email);
    if (existing) {
      throw new Error('Bu email manzili allaqachon ro‘yxatdan o‘tgan');
    }

    const id = `email-${Date.now()}`;
    const newUser = {
      _id: id,
      name: data.name,
      email: data.email,
      passwordHash: data.passwordHash,
      authProvider: 'email',
      childAgeGroup: '3-5',
      selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
      dailyGoalMinutes: 10,
      xp: 15,
      streak: 1,
      level: 'Boshlovchi',
      completedLessons: [],
      achievements: ['ilk-qadam'],
      subscriptionStatus: 'free',
      photoUrl: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(data.name)}`,
    };
    memoryUsers[id] = newUser;
    return newUser;
  }

  static async verifyEmailUser(email: string, passwordHash: string) {
    if (isDbConnected()) {
      const user = await User.findOne({ email });
      if (!user) return null;
      if (user.passwordHash !== passwordHash) return null;
      return user;
    }

    const user = Object.values(memoryUsers).find((u: any) => u.email === email);
    if (!user) return null;
    if (user.passwordHash !== passwordHash) return null;
    return user;
  }

  static async getUserByIdOrTelegram(idOrTg: string) {
    if (isDbConnected()) {
      if (mongoose.Types.ObjectId.isValid(idOrTg)) {
        const u = await User.findById(idOrTg);
        if (u) return u;
      }
      return await User.findOne({ $or: [{ telegramId: idOrTg }, { email: idOrTg }, { _id: idOrTg }] });
    }
    const byKey = memoryUsers[idOrTg];
    if (byKey) return byKey;
    const byTg = Object.values(memoryUsers).find((u: any) => u.telegramId === idOrTg || u.email === idOrTg);
    return byTg || memoryUsers['demo-user'] || null;
  }

  // ---------------------------------------------------------------------------
  // Search (lessons + articles) — same content the platform serves
  // ---------------------------------------------------------------------------
  static async searchContent(query: string, lang: string = 'uz', limit: number = 8) {
    const q = query.trim();
    if (q.length < 2) return { lessons: [] as any[], articles: [] as any[] };
    const needle = q.toLowerCase();
    const rx = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

    let lessons: any[];
    let articles: any[];
    if (isDbConnected()) {
      lessons = await Lesson.find({ $or: [{ title: rx }, { summary: rx }] }).sort({ order: 1 }).limit(limit);
      articles = await Article.find({
        isPublished: true,
        $or: [{ title: rx }, { excerpt: rx }, { tags: rx }],
      }).limit(limit);
    } else {
      lessons = memoryLessons
        .filter((l: any) => l.title.toLowerCase().includes(needle) || (l.summary || '').toLowerCase().includes(needle))
        .sort((a: any, b: any) => a.order - b.order)
        .slice(0, limit);
      articles = memoryArticles
        .filter(
          (a: any) =>
            a.title.toLowerCase().includes(needle) ||
            (a.excerpt || '').toLowerCase().includes(needle) ||
            (a.tags || []).some((t: string) => t.toLowerCase().includes(needle))
        )
        .slice(0, limit);
    }
    return {
      lessons: lessons.map((l: any) => localizeEntity(l, lang)),
      articles: articles.map((a: any) => localizeEntity(a, lang)),
    };
  }

  // ---------------------------------------------------------------------------
  // Telegram reminder settings
  // ---------------------------------------------------------------------------
  static async updateUserSettings(
    telegramId: string,
    patch: { reminderEnabled?: boolean; reminderHour?: number; childAgeGroup?: string }
  ) {
    const clean: Record<string, any> = {};
    if (typeof patch.reminderEnabled === 'boolean') clean.reminderEnabled = patch.reminderEnabled;
    if (typeof patch.reminderHour === 'number' && patch.reminderHour >= 0 && patch.reminderHour <= 23) {
      clean.reminderHour = Math.floor(patch.reminderHour);
    }
    if (typeof patch.childAgeGroup === 'string') clean.childAgeGroup = patch.childAgeGroup;

    if (isDbConnected()) {
      return User.findOneAndUpdate({ telegramId }, { $set: clean }, { new: true });
    }
    const user: any = Object.values(memoryUsers).find((u: any) => u.telegramId === telegramId);
    if (user) Object.assign(user, clean);
    return user || null;
  }

  static async getReminderCandidates(hour: number, today: string): Promise<any[]> {
    if (isDbConnected()) {
      return User.find({
        reminderEnabled: true,
        telegramId: { $exists: true, $ne: null },
        reminderHour: { $lte: hour },
        lastReminderDate: { $ne: today },
      }).limit(2000);
    }
    return Object.values(memoryUsers).filter(
      (u: any) =>
        u.reminderEnabled && u.telegramId && (u.reminderHour ?? 20) <= hour && u.lastReminderDate !== today
    );
  }

  /** Atomically claims today's reminder so concurrent instances never double-send. */
  static async claimReminder(telegramId: string, today: string): Promise<boolean> {
    if (isDbConnected()) {
      const res = await User.findOneAndUpdate(
        { telegramId, lastReminderDate: { $ne: today } },
        { $set: { lastReminderDate: today } }
      );
      return Boolean(res);
    }
    const user: any = Object.values(memoryUsers).find((u: any) => u.telegramId === telegramId);
    if (!user || user.lastReminderDate === today) return false;
    user.lastReminderDate = today;
    return true;
  }

  // User Progress
  static async getUserProgress(userId: string) {
    if (isDbConnected()) {
      const user = await User.findById(userId);
      const progress = await UserProgress.find({ userId });
      return { user, progress };
    }

    const user = memoryUsers[userId] || memoryUsers['demo-user'];
    const progress = memoryProgress[userId] || memoryProgress['demo-user'] || [];
    return { user, progress };
  }

  static async recordProgress(data: {
    userId: string;
    lessonSlug: string;
    score?: number;
    xpEarned?: number;
  }) {
    const xp = data.xpEarned || 10;
    const score = data.score || 100;

    const computeLevel = (currentXp: number): string => {
      if (currentXp >= 1000) return 'Donishmand ota-ona';
      if (currentXp >= 600) return 'Tajribali ota-ona';
      if (currentXp >= 350) return 'Mehrli murabbiy';
      if (currentXp >= 200) return 'Ongli tarbiyachi';
      if (currentXp >= 100) return 'Ongli ota-ona';
      if (currentXp >= 40) return "O‘rganuvchi ota-ona";
      return 'Boshlovchi ota-ona';
    };

    const computeStreak = (lastActive?: Date, currentStreak: number = 1): number => {
      if (!lastActive) return Math.max(1, currentStreak);
      const last = new Date(lastActive);
      const now = new Date();
      const lastMidnight = new Date(last.getFullYear(), last.getMonth(), last.getDate()).getTime();
      const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
      const diffDays = Math.round((todayMidnight - lastMidnight) / (1000 * 60 * 60 * 24));
      if (diffDays === 0) return Math.max(1, currentStreak);
      if (diffDays === 1) return Math.max(1, currentStreak) + 1;
      return 1;
    };

    const evaluateAchievements = (
      userXp: number,
      userStreak: number,
      lessons: string[],
      existing: string[] = []
    ): { all: string[]; newlyUnlocked: string[] } => {
      const set = new Set(existing);
      const newly: string[] = [];
      const checkAndAdd = (code: string, condition: boolean) => {
        if (condition && !set.has(code)) {
          set.add(code);
          newly.push(code);
        }
      };

      checkAndAdd('ilk-qadam', lessons.length >= 1 || userXp >= 15);
      checkAndAdd('uch-kunlik-streak', userStreak >= 3 || userXp >= 45);
      checkAndAdd('haftalik-chempion', userStreak >= 7 || userXp >= 105);
      checkAndAdd('ongli-ota-ona', lessons.length >= 10 || userXp >= 150);
      checkAndAdd(
        'fitrat-kashfiyotchisi',
        lessons.some((s) => s.includes('fitrat') || s.includes('darajasiga')) || userXp >= 180
      );
      checkAndAdd(
        'sabr-va-adolat',
        lessons.some((s) => s.includes('gazab') || s.includes('ruhiyati') || s.includes('nafs')) ||
          userXp >= 220
      );
      checkAndAdd(
        'kitobxon-murabbiy',
        lessons.some((s) => s.includes('kitob') || s.includes('mutafakkir') || s.includes('klip')) ||
          userXp >= 260
      );
      checkAndAdd(
        'talim-innovatori',
        lessons.some((s) => s.includes('talim') || s.includes('sarmoya')) || userXp >= 300
      );
      checkAndAdd('tarbiya-ustasi', lessons.length >= 25 || userXp >= 375);
      checkAndAdd('14-kunlik-afsona', userStreak >= 14 || userXp >= 500);
      checkAndAdd('mukammal-bilimdon', userXp >= 650);
      checkAndAdd('donishmand-murabbiy', userXp >= 1000);

      return { all: Array.from(set), newlyUnlocked: newly };
    };

    if (isDbConnected()) {
      await UserProgress.findOneAndUpdate(
        { userId: data.userId, lessonSlug: data.lessonSlug },
        {
          isCompleted: true,
          score,
          xpEarned: xp,
          completedAt: new Date(),
        },
        { upsert: true, new: true }
      );

      const existingUser = await User.findById(data.userId);
      const newXp = (existingUser?.xp || 0) + xp;
      const newStreak = computeStreak(existingUser?.lastActiveDate, existingUser?.streak || 1);
      const lessons = Array.from(new Set([...(existingUser?.completedLessons || []), data.lessonSlug]));
      const achResult = evaluateAchievements(newXp, newStreak, lessons, existingUser?.achievements || []);
      const newLevel = computeLevel(newXp);

      const updatedUser = await User.findByIdAndUpdate(
        data.userId,
        {
          xp: newXp,
          streak: newStreak,
          level: newLevel,
          lastActiveDate: new Date(),
          completedLessons: lessons,
          achievements: achResult.all,
        },
        { new: true }
      );

      return { success: true, updatedUser, newlyUnlockedAchievements: achResult.newlyUnlocked };
    }

    // In-memory update
    const user = memoryUsers[data.userId] || memoryUsers['demo-user'];
    let newlyUnlocked: string[] = [];
    if (user) {
      user.xp = (user.xp || 0) + xp;
      if (!user.completedLessons.includes(data.lessonSlug)) {
        user.completedLessons.push(data.lessonSlug);
      }
      user.streak = computeStreak(user.lastActiveDate, user.streak || 1);
      user.lastActiveDate = new Date();
      user.level = computeLevel(user.xp);

      const achResult = evaluateAchievements(user.xp, user.streak, user.completedLessons, user.achievements || []);
      user.achievements = achResult.all;
      newlyUnlocked = achResult.newlyUnlocked;
    }

    if (!memoryProgress[data.userId]) {
      memoryProgress[data.userId] = [];
    }
    const existingProgIndex = memoryProgress[data.userId].findIndex((p) => p.lessonSlug === data.lessonSlug);
    const progItem = {
      userId: data.userId,
      lessonSlug: data.lessonSlug,
      isCompleted: true,
      score,
      xpEarned: xp,
      completedAt: new Date(),
    };
    if (existingProgIndex >= 0) {
      memoryProgress[data.userId][existingProgIndex] = progItem;
    } else {
      memoryProgress[data.userId].push(progItem);
    }

    return { success: true, user, progress: progItem, newlyUnlockedAchievements: newlyUnlocked };
  }

  // Newsletter
  static async subscribeNewsletter(email: string, source: string = 'footer') {
    if (isDbConnected()) {
      const sub = new NewsletterSubscriber({ email, source });
      await sub.save();
      return { success: true, email };
    }

    if (!memoryNewsletter.includes(email)) {
      memoryNewsletter.push(email);
    }
    return { success: true, email };
  }
}
