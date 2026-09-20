import mongoose from 'mongoose';
import dotenv from 'dotenv';
import {
  Category,
  AgeGroup,
  Achievement,
  Course,
  LearningPath,
  Lesson,
  Article,
  User,
} from '../models/index.js';
import {
  seedCategories,
  seedAgeGroups,
  seedAchievements,
  seedCourses,
  seedLearningPaths,
  seedLessons,
  seedArticles,
} from './seedData.js';

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/farzandly';

async function runSeed() {
  try {
    console.log(`[Seed] MongoDBga ulanish: ${uri}...`);
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
    console.log('[Seed] Bog\'lanish muvaffaqiyatli o\'rnatildi.');

    console.log('[Seed] Eski ma\'lumotlar tozalanmoqda...');
    await Promise.all([
      Category.deleteMany({}),
      AgeGroup.deleteMany({}),
      Achievement.deleteMany({}),
      Course.deleteMany({}),
      LearningPath.deleteMany({}),
      Lesson.deleteMany({}),
      Article.deleteMany({}),
      User.deleteMany({}),
    ]);

    console.log('[Seed] Yangi demo ma\'lumotlar kiritilmoqda...');
    await Category.insertMany(seedCategories);
    console.log(`[Seed] ${seedCategories.length} ta kategoriya qo'shildi.`);

    await AgeGroup.insertMany(seedAgeGroups);
    console.log(`[Seed] ${seedAgeGroups.length} ta yosh guruhi qo'shildi.`);

    await Achievement.insertMany(seedAchievements);
    console.log(`[Seed] ${seedAchievements.length} ta yutuq qo'shildi.`);

    await Course.insertMany(seedCourses);
    console.log(`[Seed] ${seedCourses.length} ta kurs qo'shildi.`);

    await LearningPath.insertMany(seedLearningPaths);
    console.log(`[Seed] ${seedLearningPaths.length} ta o'quv yo'li qo'shildi.`);

    await Lesson.insertMany(seedLessons);
    console.log(`[Seed] ${seedLessons.length} ta interaktiv dars qo'shildi.`);

    await Article.insertMany(seedArticles);
    console.log(`[Seed] ${seedArticles.length} ta SEO maqola qo'shildi.`);

    // Demo User
    await User.create({
      name: 'Ota-ona (Demo)',
      childAgeGroup: '3-5',
      selectedInterests: ['Bola xulqi', 'Hissiyotlar', 'Intizom'],
      dailyGoalMinutes: 10,
      xp: 20,
      streak: 3,
      level: "O‘rganuvchi",
      completedLessons: ['bolani-tushunishdan-boshlang'],
      achievements: ['ilk-qadam'],
      subscriptionStatus: 'free',
    });
    console.log('[Seed] Demo foydalanuvchi yaratildi.');

    console.log('[Seed] Barcha ma\'lumotlar bazaga muvaffaqiyatli joylashtirildi! 🎉');
    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('[Seed] Xatolik yuz berdi:', (error as Error).message);
    process.exit(1);
  }
}

runSeed();
