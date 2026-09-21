'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { m, AnimatePresence } from 'framer-motion';
import {
  Flame,
  Star,
  Award,
  Check,
  Lock,
  Play,
  ArrowRight,
  BookOpen,
  Calendar,
  Zap,
  HelpCircle,
  X,
  Heart,
  User as UserIcon,
  Trophy,
  Target,
  Sparkles,
  Crown,
} from 'lucide-react';
import { api, Lesson } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/LanguageContext';
import UserAvatar from '@/components/UserAvatar';
import ChildSwitcher from '@/components/ChildSwitcher';
import { getActiveChild, normalizeAgeGroup } from '@/lib/children';
import { calculateLevel, getWeeklyLeaderboard } from '@/lib/gamification';
import { T } from '@/components/T';

export default function DashboardPage() {
  const { user: authUser } = useAuth();
  const { language, t } = useI18n();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const allLessons = await api.getLessons({
        lang: language,
        ageGroup: authUser?.childAgeGroup ? normalizeAgeGroup(authUser.childAgeGroup) : undefined,
      });
      setLessons(allLessons || []);
      setLoading(false);
    }
    loadData();
  }, [authUser?.childAgeGroup, language]);

  const activeChild = getActiveChild(authUser);
  const completedList = activeChild ? activeChild.completedLessons : authUser?.completedLessons || [];
  const streak = authUser?.streak || 0;
  const xp = authUser?.xp || 0;
  const levelInfo = calculateLevel(xp, language);
  const level = levelInfo.level; // localized from XP
  const leaderboard = getWeeklyLeaderboard(xp, authUser?.name);
  const dailyGoal = authUser?.dailyGoalMinutes || 10;
  const todayProgressMinutes = Math.min(dailyGoal, Math.max(5, (completedList.length % 3 + 1) * 5));
  const isGoalReached = todayProgressMinutes >= dailyGoal;

  // Find the first non-completed lesson
  const currentLesson = lessons.find((l) => !completedList.includes(l.slug)) || lessons[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 relative overflow-x-clip">
      {/* Ambient background blur elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-80 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. TOP GREETING & STATS BANNER */}
      <m.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <UserAvatar
              name={authUser?.name}
              photoUrl={authUser?.photoUrl}
              telegramUsername={authUser?.telegramUsername}
              size="md"
            />
            <div className="space-y-0.5">
              <h1 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-1.5">
                {t('dashboard.welcome', 'Assalomu alaykum')}, {authUser?.name || t('dashboard.default_user', 'Ota-ona')} 👋
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                {authUser?.telegramUsername && !authUser?.name?.startsWith('@')
                  ? `@${authUser.telegramUsername} • `
                  : ''}
                {t('dashboard.greeting_sub', 'Bugun tarbiya yo‘lingizda davom etamiz.')}
              </p>
            </div>
          </div>

          {/* Level & Premium Pills */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            {authUser?.isPremium ? (
              <div className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1.5 rounded-2xl text-xs font-black shadow-xs">
                <Crown className="w-3.5 h-3.5 fill-amber-700" />
                <span><T k="dash.1" /></span>
              </div>
            ) : (
              <Link
                href="/premium"
                className="inline-flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-900 px-3 py-1.5 rounded-2xl text-xs font-black transition-all cursor-pointer shadow-xs"
              >
                <Crown className="w-3.5 h-3.5 fill-amber-700" />
                <span><T k="dash.2" /></span>
              </Link>
            )}

            <div className="inline-flex items-center gap-2 bg-emerald-50 border-2 border-emerald-200 text-emerald-800 px-3.5 py-1.5 rounded-2xl text-xs sm:text-sm font-bold shadow-xs">
              <Award className="w-4 h-4 text-emerald-600" />
              <span>{level}</span>
            </div>
          </div>
        </div>

        {/* Child profiles */}
        <ChildSwitcher />

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
          <m.div
            whileHover={{ y: -2 }}
            className="bg-amber-50/80 backdrop-blur-xs border-2 border-amber-200 rounded-2xl p-3 sm:p-4 text-center space-y-1"
          >
            <div className="flex items-center justify-center gap-1 text-orange-600">
              <Flame className="w-5 h-5 fill-orange-500 text-orange-500 animate-pulse" />
              <span className="text-lg sm:text-2xl font-black">{streak}</span>
            </div>
            <p className="text-[10px] sm:text-xs font-bold text-amber-800 uppercase tracking-wider">
              {t('dashboard.streak', 'Kunlik streak')}
            </p>
          </m.div>

          <m.div
            whileHover={{ y: -2 }}
            className="bg-emerald-50/80 backdrop-blur-xs border-2 border-emerald-200 rounded-2xl p-3 sm:p-4 text-center space-y-1"
          >
            <div className="flex items-center justify-center gap-1 text-emerald-600">
              <Star className="w-5 h-5 fill-emerald-500 text-emerald-500" />
              <span className="text-lg sm:text-2xl font-black">{xp}</span>
            </div>
            <p className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider">
              {t('dashboard.xp_earned', 'XP to‘plandi')}
            </p>
          </m.div>

          <m.div
            whileHover={{ y: -2 }}
            className="bg-sky-50/80 backdrop-blur-xs border-2 border-sky-200 rounded-2xl p-3 sm:p-4 text-center space-y-1"
          >
            <div className="flex items-center justify-center gap-1 text-sky-600">
              <Check className="w-5 h-5 text-sky-600 stroke-[3]" />
              <span className="text-lg sm:text-2xl font-black">{completedList.length}</span>
            </div>
            <p className="text-[10px] sm:text-xs font-bold text-sky-800 uppercase tracking-wider">
              {t('dashboard.lessons_passed', 'Dars o‘tildi')}
            </p>
          </m.div>
        </div>

        {/* Level Progress Bar */}
        <div className="pt-2 border-t border-slate-100 space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500">
            <span className="flex items-center gap-1.5 text-slate-700">
              <Award className="w-3.5 h-3.5 text-emerald-600" />
              <span>{levelInfo.level} ({levelInfo.levelIndex}<T k="dash.3" /></span>
            </span>
            <span className="text-emerald-700">{xp} / {levelInfo.nextLevelXp} <T k="dash.4" /></span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <m.div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full shadow-xs"
              initial={{ width: 0 }}
              animate={{ width: `${levelInfo.progressPercent}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* 7-Day Weekly Streak & Daily Goal Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {/* Weekly Streak Mon-Sun */}
          <div className="bg-slate-50 rounded-2xl p-3 border border-slate-200 flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1 text-amber-700">
                <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                <span><T k="dash.5" /></span>
              </span>
              <span className="text-slate-400 text-[11px]">{streak} <T k="dash.6" /></span>
            </div>
            <div className="flex items-center justify-between gap-1">
              {['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'].map((day, idx) => {
                const isActive = idx < Math.min(streak, 7);
                return (
                  <div key={day} className="flex-1 flex flex-col items-center gap-0.5">
                    <span className="text-[10px] font-bold text-slate-400">{day}</span>
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center text-xs font-black transition-all ${
                        isActive
                          ? 'bg-orange-500 text-white shadow-xs scale-105'
                          : 'bg-white border border-slate-200 text-slate-300'
                      }`}
                    >
                      <Flame className={`w-3.5 h-3.5 ${isActive ? 'fill-amber-200 text-white' : 'text-slate-300'}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Daily Goal Tracking */}
          <div className="bg-emerald-50/70 rounded-2xl p-3 border border-emerald-200 flex flex-col justify-between gap-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="flex items-center gap-1 text-emerald-800">
                <Target className="w-3.5 h-3.5 text-emerald-600" />
                <span><T k="dash.7" />{" "}{dailyGoal} <T k="dash.8" /></span>
              </span>
              {isGoalReached ? (
                <span className="bg-emerald-200/80 text-emerald-900 text-[10px] px-2 py-0.5 rounded-full font-black">
                  <T k="dash.9" /></span>
              ) : (
                <span className="text-slate-500 text-[11px]">{todayProgressMinutes}/{dailyGoal} <T k="dash.10" /></span>
              )}
            </div>
            <div className="w-full h-2.5 bg-white rounded-full overflow-hidden border border-emerald-200">
              <m.div
                className="h-full bg-emerald-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, Math.round((todayProgressMinutes / dailyGoal) * 100))}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-[11px] text-emerald-700 font-medium">
              {isGoalReached
                ? t('dash.goal_done')
                : t('dash.goal_left', undefined, { n: dailyGoal - todayProgressMinutes })}
            </p>
          </div>
        </div>
      </m.div>

      {/* 2. TODAY'S LESSON HERO CARD */}
      {currentLesson && (
        <m.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 sm:p-8 border-b-8 border-emerald-900 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/40 text-emerald-100 px-3 py-1 rounded-full text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>{t('dashboard.today_main', 'BUGUNGI ASOSIY DARS')} • {currentLesson.estimatedMinutes} {t('dashboard.minutes', 'DAQIQA')}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black">{currentLesson.title}</h2>
            <p className="text-xs sm:text-sm text-emerald-100 line-clamp-2">
              {currentLesson.summary}
            </p>
          </div>

          <Link
            href={`/dars/${currentLesson.slug}`}
            className="w-full sm:w-auto btn-gold text-sm sm:text-base px-6 py-3.5 flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{t('dashboard.start_today', 'Bugungi darsni boshlash')}</span>
          </Link>
        </m.div>
      )}

      {/* 3. VISUAL DUOLINGO-STYLE LEARNING PATH */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 space-y-8 shadow-sm">
        <div className="text-center space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
            {authUser?.childAgeGroup ? `${authUser.childAgeGroup} ${t('dashboard.age_label', 'yosh')}` : t('dashboard.all_lessons', 'Barcha 55 dars')}
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800">
            {t('dashboard.map_title', 'Sizning o‘quv xaritangiz')}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            {t('dashboard.map_subtitle', 'Har bir dars tugagach keyingisi ochiladi. Qadam-baqadam o‘rganing.')}
          </p>
        </div>

        {/* Serpentine Stepping Stones */}
        <div className="relative flex flex-col items-center py-6 space-y-8 sm:space-y-10">
          {/* Vertical path background line */}
          <div className="absolute top-8 bottom-8 w-3 bg-slate-200 rounded-full z-0" />

          {lessons.map((lesson, idx) => {
            const isCompleted = completedList.includes(lesson.slug);
            const isCurrent = !isCompleted && (idx === 0 || completedList.includes(lessons[idx - 1]?.slug));
            const isLocked = !isCompleted && !isCurrent;

            // Zig-zag offset for Duolingo serpentine look
            const offsetClasses =
              idx % 3 === 0
                ? 'translate-x-0'
                : idx % 3 === 1
                ? '-translate-x-12 sm:-translate-x-16'
                : 'translate-x-12 sm:translate-x-16';

            return (
              <div
                key={lesson.slug}
                className={`relative z-10 flex flex-col items-center transition-transform ${offsetClasses}`}
              >
                {/* Current node tooltip / speech bubble */}
                {isCurrent && (
                  <m.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-2 bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md animate-subtle-bounce flex items-center gap-1.5 border border-emerald-400"
                  >
                    <Play className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>{t('dashboard.start_here', 'BU YERDAN BOSHLANG!')}</span>
                  </m.div>
                )}

                {/* Node Button */}
                <m.button
                  whileHover={{ scale: isLocked ? 1 : 1.08 }}
                  whileTap={{ scale: isLocked ? 1 : 0.94 }}
                  type="button"
                  onClick={() => setSelectedLesson(lesson)}
                  className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all shadow-md ${
                    isCompleted
                      ? 'bg-emerald-600 border-4 border-emerald-700 text-white hover:bg-emerald-500'
                      : isCurrent
                      ? 'bg-amber-500 border-4 border-amber-600 text-white ring-4 ring-amber-200 hover:bg-amber-400'
                      : 'bg-slate-200 border-4 border-slate-300 text-slate-400 cursor-not-allowed'
                  }`}
                  aria-label={lesson.title}
                >
                  {isCompleted ? (
                    <Check className="w-8 h-8 stroke-[3]" />
                  ) : isCurrent ? (
                    <Play className="w-7 h-7 fill-white ml-0.5" />
                  ) : (
                    <Lock className="w-6 h-6 text-slate-400" />
                  )}
                </m.button>

                {/* Label under node */}
                <div className="mt-2 text-center max-w-[140px] sm:max-w-[180px]">
                  <p
                    className={`text-xs font-bold leading-snug line-clamp-2 ${
                      isCurrent
                        ? 'text-amber-800 font-black'
                        : isCompleted
                        ? 'text-emerald-800'
                        : 'text-slate-600'
                    }`}
                  >
                    {lesson.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. HAFTALIK OTA-ONALAR LIGASI (LEADERBOARD) */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="text-xs font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-500 fill-amber-400" />
              <span><T k="dash.11" /></span>
            </span>
            <h3 className="text-lg sm:text-xl font-black text-slate-800">
              <T k="dash.12" /></h3>
          </div>
          <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-xl self-start sm:self-auto">
            <T k="dash.13" /></span>
        </div>

        <div className="space-y-2.5">
          {leaderboard.map((item) => (
            <div
              key={item.rank}
              className={`p-3 sm:p-3.5 rounded-2xl border-2 flex items-center justify-between transition-all ${
                item.isCurrentUser
                  ? 'bg-emerald-50/90 border-emerald-400 shadow-sm ring-2 ring-emerald-100'
                  : 'bg-slate-50/70 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className={`w-6 sm:w-7 text-center font-black text-sm sm:text-base ${
                    item.rank === 1
                      ? 'text-amber-500'
                      : item.rank === 2
                      ? 'text-slate-400'
                      : item.rank === 3
                      ? 'text-amber-700'
                      : 'text-slate-500'
                  }`}
                >
                  #{item.rank}
                </span>

                <div className="flex items-center gap-2.5 sm:gap-3">
                  <UserAvatar
                    name={item.name}
                    photoUrl={item.avatar}
                    telegramUsername={item.username}
                    size="sm"
                  />
                  <div>
                    <p className="text-xs sm:text-sm font-black text-slate-800 flex items-center gap-1.5">
                      <span>{item.name}</span>
                      {item.isCurrentUser && (
                        <span className="bg-emerald-600 text-white text-[10px] font-black px-2 py-0.2 rounded-md">
                          <T k="dash.14" /></span>
                      )}
                    </p>
                    <p className="text-[10px] text-slate-400 font-bold">{calculateLevel(item.xp, language).level}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded-lg border border-orange-200">
                  <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
                  <span>{item.streak} <T k="dash.15" /></span>
                </div>
                <span className="text-xs sm:text-sm font-black text-emerald-700 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200 flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
                  {item.xp} <T k="dash.16" /></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. LESSON MODAL POPUP (WHEN CLICKING A NODE) */}
      <AnimatePresence>
        {selectedLesson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 max-w-md w-full shadow-2xl relative space-y-5"
            >
              <button
                type="button"
                onClick={() => setSelectedLesson(null)}
                className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                  <span>+{selectedLesson.xpReward} {t('dashboard.xp_reward', 'XP MUKOFOT')}</span>
                </div>
                <h3 className="text-xl font-black text-slate-800">{selectedLesson.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedLesson.summary}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 text-xs text-slate-600">
                <p className="font-bold text-slate-800">{t('dashboard.lesson_outline', 'Dars mundarijasi:')}</p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                  <li>{t('dashboard.step_problem', 'Kundalik hayotiy muammo')}</li>
                  <li>{t('dashboard.step_psychology', 'Psixologik tushuntirish')}</li>
                  <li>{t('dashboard.step_wisdom', 'Hadisi sharif va Islomiy hikmat')}</li>
                  <li>{t('dashboard.step_practice', 'Bugungi amaliy vazifa')}</li>
                  <li>{t('dashboard.step_quiz', 'Mini-test')}</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedLesson(null)}
                  className="flex-1 btn-outline text-sm py-3"
                >
                  {t('dashboard.close', 'Yopish')}
                </button>
                <Link
                  href={`/dars/${selectedLesson.slug}`}
                  className="flex-1 btn-primary text-sm py-3 flex items-center justify-center gap-1.5"
                >
                  <span>{t('dashboard.start_lesson', 'Darsni boshlash')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
