/**
 * Non-destructive content sync: upserts courses, lessons, articles and learning paths
 * (matched by slug) from the bundled seed data into MongoDB.
 *
 * Unlike `npm run seed` this NEVER deletes anything — users, progress and subscriptions are untouched.
 * Usage: npm run sync-content
 */
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Course, LearningPath, Lesson, Article, Category, AgeGroup, Achievement } from '../models/index.js';
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

async function upsertBySlug(model: any, items: any[], key: string = 'slug') {
  if (!items.length) return { upserted: 0, modified: 0 };
  const res = await model.bulkWrite(
    items.map((doc) => ({
      updateOne: { filter: { [key]: doc[key] }, update: { $set: doc }, upsert: true },
    }))
  );
  return { upserted: res.upsertedCount, modified: res.modifiedCount };
}

async function run() {
  try {
    console.log(`[Sync] MongoDBga ulanish: ${uri}...`);
    await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });

    const report: Record<string, unknown> = {
      categories: await upsertBySlug(Category, seedCategories as any[]),
      ageGroups: await upsertBySlug(AgeGroup, seedAgeGroups as any[], 'code'),
      achievements: await upsertBySlug(Achievement, seedAchievements as any[], 'code'),
      courses: await upsertBySlug(Course, seedCourses as any[]),
      learningPaths: await upsertBySlug(LearningPath, seedLearningPaths as any[]),
      lessons: await upsertBySlug(Lesson, seedLessons as any[]),
      articles: await upsertBySlug(Article, seedArticles as any[]),
    };
    console.log('[Sync] Natija:', JSON.stringify(report, null, 2));
    await mongoose.disconnect();
    process.exit(0);
  } catch (err) {
    console.error('[Sync] Xatolik:', (err as Error).message);
    process.exit(1);
  }
}

run();
