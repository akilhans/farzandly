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

  static async getUserByIdOrTelegram(idOrTg: string) {
    if (isDbConnected()) {
      if (mongoose.Types.ObjectId.isValid(idOrTg)) {
        const u = await User.findById(idOrTg);
        if (u) return u;
      }
      return await User.findOne({ $or: [{ telegramId: idOrTg }, { _id: idOrTg }] });
    }
    const byKey = memoryUsers[idOrTg];
    if (byKey) return byKey;
    const byTg = Object.values(memoryUsers).find((u: any) => u.telegramId === idOrTg);
    return byTg || memoryUsers['demo-user'] || null;
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

      const updatedUser = await User.findByIdAndUpdate(
        data.userId,
        {
          $inc: { xp: xp },
          $addToSet: { completedLessons: data.lessonSlug },
        },
        { new: true }
      );

      return { success: true, updatedUser };
    }

    // In-memory update
    const user = memoryUsers[data.userId] || memoryUsers['demo-user'];
    if (user) {
      user.xp = (user.xp || 0) + xp;
      if (!user.completedLessons.includes(data.lessonSlug)) {
        user.completedLessons.push(data.lessonSlug);
      }
      // Update level based on XP
      if (user.xp >= 100) user.level = 'Tajribali ota-ona';
      else if (user.xp >= 50) user.level = 'Ongli ota-ona';
      else if (user.xp >= 20) user.level = "O‘rganuvchi";
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

    return { success: true, user, progress: progItem };
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
