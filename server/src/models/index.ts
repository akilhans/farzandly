import mongoose, { Schema, Document } from 'mongoose';

// ======================== CATEGORY ========================
export interface ICategory extends Document {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  displayOrder: number;
  translations?: Record<string, any>;
}

const CategorySchema = new Schema<ICategory>({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'BookOpen' },
  color: { type: String, default: '#059669' },
  displayOrder: { type: Number, default: 0 },
  translations: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export const Category = mongoose.models.Category || mongoose.model<ICategory>('Category', CategorySchema);

// ======================== AGE GROUP ========================
export interface IAgeGroup extends Document {
  code: string;
  title: string;
  description: string;
  icon: string;
  displayOrder: number;
  translations?: Record<string, any>;
}

const AgeGroupSchema = new Schema<IAgeGroup>({
  code: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'Baby' },
  displayOrder: { type: Number, default: 0 },
  translations: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export const AgeGroup = mongoose.models.AgeGroup || mongoose.model<IAgeGroup>('AgeGroup', AgeGroupSchema);

// ======================== USER ========================
export interface IUser extends Document {
  name: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  passwordHash?: string;
  telegramId?: string;
  telegramUsername?: string;
  photoUrl?: string;
  authProvider: 'telegram' | 'guest' | 'email';
  childAgeGroup: string;
  selectedInterests: string[];
  dailyGoalMinutes: number;
  xp: number;
  streak: number;
  lastActiveDate: Date;
  level: string;
  completedLessons: string[];
  achievements: string[];
  subscriptionStatus: 'free' | 'premium' | 'trial';
  isPremium?: boolean;
  premiumExpiresAt?: Date;
  role?: 'user' | 'admin';
  reminderEnabled?: boolean;
  reminderHour?: number;
  lastReminderDate?: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, default: 'Ota-ona' },
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String, sparse: true, index: true },
  passwordHash: { type: String },
  telegramId: { type: String, sparse: true, index: true },
  telegramUsername: { type: String },
  photoUrl: { type: String },
  authProvider: { type: String, default: 'guest', enum: ['telegram', 'guest', 'email'] },
  childAgeGroup: { type: String, default: '3-5' },
  selectedInterests: [{ type: String }],
  dailyGoalMinutes: { type: Number, default: 10 },
  xp: { type: Number, default: 0 },
  streak: { type: Number, default: 1 },
  lastActiveDate: { type: Date, default: Date.now },
  level: { type: String, default: 'Boshlovchi ota-ona' },
  completedLessons: [{ type: String }],
  achievements: [{ type: String }],
  subscriptionStatus: { type: String, default: 'free', enum: ['free', 'premium', 'trial'] },
  isPremium: { type: Boolean, default: false },
  premiumExpiresAt: { type: Date },
  role: { type: String, default: 'user', enum: ['user', 'admin'] },
  // Telegram daily reminder (hour is Asia/Tashkent local time)
  reminderEnabled: { type: Boolean, default: false, index: true },
  reminderHour: { type: Number, default: 20, min: 0, max: 23 },
  lastReminderDate: { type: String },
}, { timestamps: true });

export const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

// ======================== ARTICLE ========================
export interface IArticle extends Document {
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
  publishedAt: Date;
  translations?: Record<string, any>;
}

const ArticleSchema = new Schema<IArticle>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  categorySlug: { type: String, required: true, index: true },
  ageGroup: { type: String, required: true, index: true },
  readingTimeMinutes: { type: Number, default: 5 },
  tags: [{ type: String }],
  seoTitle: { type: String, required: true },
  seoDescription: { type: String, required: true },
  isPremium: { type: Boolean, default: false },
  isPublished: { type: Boolean, default: true },
  publishedAt: { type: Date, default: Date.now },
  translations: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export const Article = mongoose.models.Article || mongoose.model<IArticle>('Article', ArticleSchema);

// ======================== COURSE ========================
export interface ICourse extends Document {
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
  translations?: Record<string, any>;
}

const CourseSchema = new Schema<ICourse>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  description: { type: String, required: true },
  ageGroup: { type: String, required: true, index: true },
  categorySlug: { type: String, required: true, index: true },
  isPremium: { type: Boolean, default: false },
  estimatedMinutes: { type: Number, default: 30 },
  totalLessons: { type: Number, default: 5 },
  icon: { type: String, default: 'GraduationCap' },
  color: { type: String, default: '#059669' },
  translations: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export const Course = mongoose.models.Course || mongoose.model<ICourse>('Course', CourseSchema);

// ======================== LESSON SCREEN ========================
export interface ILessonScreen {
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

// ======================== LESSON ========================
export interface ILesson extends Document {
  courseSlug: string;
  title: string;
  slug: string;
  summary: string;
  order: number;
  estimatedMinutes: number;
  ageGroup: string;
  xpReward: number;
  isFree: boolean;
  videoId?: string;
  videoUrl?: string;
  screens: ILessonScreen[];
  translations?: Record<string, any>;
}

const LessonSchema = new Schema<ILesson>({
  courseSlug: { type: String, required: true, index: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  summary: { type: String, required: true },
  order: { type: Number, required: true },
  estimatedMinutes: { type: Number, default: 5 },
  ageGroup: { type: String, required: true, index: true },
  xpReward: { type: Number, default: 10 },
  isFree: { type: Boolean, default: true },
  videoId: { type: String },
  videoUrl: { type: String },
  screens: [
    {
      screenIndex: { type: Number, required: true },
      type: { type: String, required: true },
      title: { type: String, required: true },
      subtitle: { type: String },
      content: { type: String, required: true },
      example: { type: String },
      highlight: { type: String },
      quoteSource: { type: String },
      quizQuestion: { type: String },
      quizOptions: [{ type: String }],
      correctOptionIndex: { type: Number },
      quizExplanation: { type: String },
    },
  ],
  translations: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export const Lesson = mongoose.models.Lesson || mongoose.model<ILesson>('Lesson', LessonSchema);

// ======================== LEARNING PATH ========================
export interface ILearningPath extends Document {
  title: string;
  slug: string;
  description: string;
  ageGroup: string;
  targetAudience: string;
  lessonSlugs: string[];
  badgeIcon: string;
  translations?: Record<string, any>;
}

const LearningPathSchema = new Schema<ILearningPath>({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  description: { type: String, required: true },
  ageGroup: { type: String, required: true, index: true },
  targetAudience: { type: String, required: true },
  lessonSlugs: [{ type: String }],
  badgeIcon: { type: String, default: 'Compass' },
  translations: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export const LearningPath = mongoose.models.LearningPath || mongoose.model<ILearningPath>('LearningPath', LearningPathSchema);

// ======================== QUIZ ========================
export interface IQuiz extends Document {
  lessonSlug: string;
  title: string;
  questions: Array<{
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }>;
}

const QuizSchema = new Schema<IQuiz>({
  lessonSlug: { type: String, required: true, index: true },
  title: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctIndex: { type: Number, required: true },
      explanation: { type: String, required: true },
    },
  ],
}, { timestamps: true });

export const Quiz = mongoose.models.Quiz || mongoose.model<IQuiz>('Quiz', QuizSchema);

// ======================== EXERCISE ========================
export interface IExercise extends Document {
  lessonSlug: string;
  title: string;
  scenario: string;
  actionSteps: string[];
  reflectionPrompt: string;
}

const ExerciseSchema = new Schema<IExercise>({
  lessonSlug: { type: String, required: true, index: true },
  title: { type: String, required: true },
  scenario: { type: String, required: true },
  actionSteps: [{ type: String, required: true }],
  reflectionPrompt: { type: String, required: true },
}, { timestamps: true });

export const Exercise = mongoose.models.Exercise || mongoose.model<IExercise>('Exercise', ExerciseSchema);

// ======================== USER PROGRESS ========================
export interface IUserProgress extends Document {
  userId: string;
  lessonSlug: string;
  isCompleted: boolean;
  score: number;
  xpEarned: number;
  completedAt: Date;
}

const UserProgressSchema = new Schema<IUserProgress>({
  userId: { type: String, required: true, index: true },
  lessonSlug: { type: String, required: true, index: true },
  isCompleted: { type: Boolean, default: false },
  score: { type: Number, default: 100 },
  xpEarned: { type: Number, default: 10 },
  completedAt: { type: Date, default: Date.now },
}, { timestamps: true });

// Compound index for user + lesson
UserProgressSchema.index({ userId: 1, lessonSlug: 1 }, { unique: true });

export const UserProgress = mongoose.models.UserProgress || mongoose.model<IUserProgress>('UserProgress', UserProgressSchema);

// ======================== ACHIEVEMENT ========================
export interface IAchievement extends Document {
  code: string;
  title: string;
  description: string;
  icon: string;
  xpRequired: number;
  streakRequired: number;
  translations?: Record<string, any>;
}

const AchievementSchema = new Schema<IAchievement>({
  code: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'Trophy' },
  xpRequired: { type: Number, default: 0 },
  streakRequired: { type: Number, default: 0 },
  translations: { type: Schema.Types.Mixed, default: {} },
}, { timestamps: true });

export const Achievement = mongoose.models.Achievement || mongoose.model<IAchievement>('Achievement', AchievementSchema);

// ======================== SUBSCRIPTION ========================
export interface ISubscription extends Document {
  userId: string;
  plan: 'monthly' | 'yearly';
  status: 'active' | 'inactive' | 'canceled';
  price: number;
  currency: string;
  startDate: Date;
  endDate: Date;
}

const SubscriptionSchema = new Schema<ISubscription>({
  userId: { type: String, required: true, index: true },
  plan: { type: String, required: true, enum: ['monthly', 'yearly'] },
  status: { type: String, default: 'active', enum: ['active', 'inactive', 'canceled'] },
  price: { type: Number, required: true },
  currency: { type: String, default: 'UZS' },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date, required: true },
}, { timestamps: true });

export const Subscription = mongoose.models.Subscription || mongoose.model<ISubscription>('Subscription', SubscriptionSchema);

// ======================== NEWSLETTER SUBSCRIBER ========================
export interface INewsletterSubscriber extends Document {
  email: string;
  subscribedAt: Date;
  source: string;
}

const NewsletterSubscriberSchema = new Schema<INewsletterSubscriber>({
  email: { type: String, required: true, unique: true, index: true },
  subscribedAt: { type: Date, default: Date.now },
  source: { type: String, default: 'footer' },
}, { timestamps: true });

export const NewsletterSubscriber = mongoose.models.NewsletterSubscriber || mongoose.model<INewsletterSubscriber>('NewsletterSubscriber', NewsletterSubscriberSchema);
