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
    selectedInterests: ['Bola xulqi', 'Hissiyotlar'],
    dailyGoalMinutes: 10,
    xp: 20,
    streak: 3,
    level: "O‘rganuvchi",
    completedLessons: ['bolani-tushunishdan-boshlang'],
    achievements: ['ilk-qadam'],
    subscriptionStatus: 'free',
  },
};
let memoryProgress: Record<string, any[]> = {
  'demo-user': [
    {
      userId: 'demo-user',
      lessonSlug: 'bolani-tushunishdan-boshlang',
      isCompleted: true,
      score: 100,
      xpEarned: 10,
      completedAt: new Date(),
    },
  ],
};
let memoryNewsletter: string[] = [];

function isDbConnected(): boolean {
  return mongoose.connection.readyState === 1;
}

export class DataService {
  // Categories
  static async getCategories() {
    if (isDbConnected()) {
      return await Category.find().sort({ displayOrder: 1 });
    }
    return memoryCategories;
  }

  // Age Groups
  static async getAgeGroups() {
    if (isDbConnected()) {
      return await AgeGroup.find().sort({ displayOrder: 1 });
    }
    return memoryAgeGroups;
  }

  // Articles
  static async getArticles(filters?: { categorySlug?: string; ageGroup?: string; search?: string }) {
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
      return await Article.find(query).sort({ publishedAt: -1 });
    }

    let results = memoryArticles;
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
    return results;
  }

  static async getArticleBySlug(slug: string) {
    if (isDbConnected()) {
      return await Article.findOne({ slug });
    }
    return memoryArticles.find((a) => a.slug === slug) || null;
  }

  // Courses
  static async getCourses(filters?: { ageGroup?: string; categorySlug?: string }) {
    if (isDbConnected()) {
      const query: Record<string, any> = {};
      if (filters?.ageGroup) query.ageGroup = filters.ageGroup;
      if (filters?.categorySlug) query.categorySlug = filters.categorySlug;
      return await Course.find(query);
    }

    let results = memoryCourses;
    if (filters?.ageGroup) {
      results = results.filter((c) => c.ageGroup === filters.ageGroup);
    }
    if (filters?.categorySlug) {
      results = results.filter((c) => c.categorySlug === filters.categorySlug);
    }
    return results;
  }

  static async getCourseBySlug(slug: string) {
    if (isDbConnected()) {
      return await Course.findOne({ slug });
    }
    return memoryCourses.find((c) => c.slug === slug) || null;
  }

  // Learning Paths
  static async getLearningPaths(ageGroup?: string) {
    if (isDbConnected()) {
      const query = ageGroup ? { ageGroup } : {};
      return await LearningPath.find(query);
    }
    if (ageGroup) {
      return memoryLearningPaths.filter((lp) => lp.ageGroup === ageGroup);
    }
    return memoryLearningPaths;
  }

  static async getLearningPathBySlug(slug: string) {
    if (isDbConnected()) {
      return await LearningPath.findOne({ slug });
    }
    return memoryLearningPaths.find((lp) => lp.slug === slug) || null;
  }

  // Lessons
  static async getLessons(filters?: { courseSlug?: string; ageGroup?: string }) {
    if (isDbConnected()) {
      const query: Record<string, any> = {};
      if (filters?.courseSlug) query.courseSlug = filters.courseSlug;
      if (filters?.ageGroup) query.ageGroup = filters.ageGroup;
      return await Lesson.find(query).sort({ order: 1 });
    }

    let results = memoryLessons;
    if (filters?.courseSlug) {
      results = results.filter((l) => l.courseSlug === filters.courseSlug);
    }
    if (filters?.ageGroup) {
      results = results.filter((l) => l.ageGroup === filters.ageGroup);
    }
    return results.sort((a, b) => a.order - b.order);
  }

  static async getLessonByIdOrSlug(idOrSlug: string) {
    if (isDbConnected()) {
      if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        const byId = await Lesson.findById(idOrSlug);
        if (byId) return byId;
      }
      return await Lesson.findOne({ slug: idOrSlug });
    }
    return memoryLessons.find((l) => l.slug === idOrSlug) || null;
  }

  // Achievements
  static async getAchievements() {
    if (isDbConnected()) {
      return await Achievement.find().sort({ xpRequired: 1 });
    }
    return memoryAchievements;
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
    photoUrl?: string;
  }) {
    if (isDbConnected()) {
      let user = await User.findOne({ telegramId: data.telegramId });
      if (user) {
        user.name = data.name || user.name;
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
