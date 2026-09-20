'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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
} from 'lucide-react';
import { api, Lesson } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';

export default function DashboardPage() {
  const { user: authUser } = useAuth();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      const allLessons = await api.getLessons({ ageGroup: authUser?.childAgeGroup || '3-5' });
      setLessons(allLessons || []);
      setLoading(false);
    }
    loadData();
  }, [authUser?.childAgeGroup]);

  const completedList = authUser?.completedLessons || ['bolani-tushunishdan-boshlang'];
  const streak = authUser?.streak || 3;
  const xp = authUser?.xp || 20;
  const level = authUser?.level || "O‘rganuvchi";

  // Find the first non-completed lesson
  const currentLesson = lessons.find((l) => !completedList.includes(l.slug)) || lessons[0];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10 relative">
      {/* Ambient background blur elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-80 right-10 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. TOP GREETING & STATS BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {authUser?.photoUrl ? (
              <img
                src={authUser.photoUrl}
                alt={authUser.name}
                className="w-12 h-12 rounded-2xl object-cover border-2 border-emerald-400 shadow-sm"
              />
            ) : (
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-sm">
                {(authUser?.name || 'Ota').slice(0, 2).toUpperCase()}
              </div>
            )}
            <div className="space-y-0.5">
              <h1 className="text-xl sm:text-2xl font-black text-slate-800 flex items-center gap-1.5">
                Assalomu alaykum, {authUser?.name || 'Ota-ona'} 👋
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                {authUser?.telegramUsername ? `@${authUser.telegramUsername} • ` : ''}
                Bugun tarbiya yo‘lingizda davom etamiz.
              </p>
            </div>
          </div>

          {/* Level Pill */}
          <div className="inline-flex items-center gap-2 bg-emerald-50 border-2 border-emerald-200 text-emerald-800 px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold self-start sm:self-auto shadow-xs">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>{level}</span>
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
          <motion.div
            whileHover={{ y: -2 }}
            className="bg-amber-50/80 backdrop-blur-xs border-2 border-amber-200 rounded-2xl p-3 sm:p-4 text-center space-y-1"
          >
            <div className="flex items-center justify-center gap-1 text-orange-600">
              <Flame className="w-5 h-5 fill-orange-500 text-orange-500 animate-pulse" />
              <span className="text-lg sm:text-2xl font-black">{streak}</span>
            </div>
            <p className="text-[10px] sm:text-xs font-bold text-amber-800 uppercase tracking-wider">
              Kunlik streak
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            className="bg-emerald-50/80 backdrop-blur-xs border-2 border-emerald-200 rounded-2xl p-3 sm:p-4 text-center space-y-1"
          >
            <div className="flex items-center justify-center gap-1 text-emerald-600">
              <Star className="w-5 h-5 fill-emerald-500 text-emerald-500" />
              <span className="text-lg sm:text-2xl font-black">{xp}</span>
            </div>
            <p className="text-[10px] sm:text-xs font-bold text-emerald-800 uppercase tracking-wider">
              XP to‘plandi
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -2 }}
            className="bg-sky-50/80 backdrop-blur-xs border-2 border-sky-200 rounded-2xl p-3 sm:p-4 text-center space-y-1"
          >
            <div className="flex items-center justify-center gap-1 text-sky-600">
              <Check className="w-5 h-5 text-sky-600 stroke-[3]" />
              <span className="text-lg sm:text-2xl font-black">{completedList.length}</span>
            </div>
            <p className="text-[10px] sm:text-xs font-bold text-sky-800 uppercase tracking-wider">
              Dars o‘tildi
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* 2. TODAY'S LESSON HERO CARD */}
      {currentLesson && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-6 sm:p-8 border-b-8 border-emerald-900 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/40 text-emerald-100 px-3 py-1 rounded-full text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>BUGUNGI ASOSIY DARS • {currentLesson.estimatedMinutes} DAQIQA</span>
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
            <span>Bugungi darsni boshlash</span>
          </Link>
        </motion.div>
      )}

      {/* 3. VISUAL DUOLINGO-STYLE LEARNING PATH */}
      <div className="bg-white/90 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 space-y-8 shadow-sm">
        <div className="text-center space-y-1">
          <span className="text-xs font-black uppercase tracking-wider text-emerald-700">
            {authUser?.childAgeGroup || '3–5'} Yosh: Injiqlikdan hamkorlik sari
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-800">
            Sizning o‘quv xaritangiz
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Har bir dars tugagach keyingisi ochiladi. Qadam-baqadam o‘rganing.
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
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-2 bg-emerald-600 text-white font-bold text-xs px-3 py-1 rounded-full shadow-md animate-subtle-bounce flex items-center gap-1.5 border border-emerald-400"
                  >
                    <Play className="w-3 h-3 fill-amber-300 text-amber-300" />
                    <span>BU YERDAN BOSHLANG!</span>
                  </motion.div>
                )}

                {/* Node Button */}
                <motion.button
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
                </motion.button>

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

      {/* 4. LESSON MODAL POPUP (WHEN CLICKING A NODE) */}
      <AnimatePresence>
        {selectedLesson && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <motion.div
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
                  <span>+{selectedLesson.xpReward} XP MUKOFOT</span>
                </div>
                <h3 className="text-xl font-black text-slate-800">{selectedLesson.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedLesson.summary}
                </p>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200 space-y-1 text-xs text-slate-600">
                <p className="font-bold text-slate-800">Dars mundarijasi:</p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-500">
                  <li>Kundalik hayotiy muammo</li>
                  <li>Psixologik tushuntirish</li>
                  <li>Hadisi sharif va Islomiy hikmat</li>
                  <li>Bugungi amaliy vazifa</li>
                  <li>Mini-test</li>
                </ul>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedLesson(null)}
                  className="flex-1 btn-outline text-sm py-3"
                >
                  Yopish
                </button>
                <Link
                  href={`/dars/${selectedLesson.slug}`}
                  className="flex-1 btn-primary text-sm py-3 flex items-center justify-center gap-1.5"
                >
                  <span>Darsni boshlash</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
