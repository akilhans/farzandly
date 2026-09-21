'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
// Loaded on demand so the confetti library isn't part of the initial bundle
const fireConfetti = (opts: import('canvas-confetti').Options) => import('canvas-confetti').then((mod) => mod.default(opts));
import { m, AnimatePresence } from 'framer-motion';
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Star,
  Flame,
  Award,
  BookOpen,
  Heart,
  HelpCircle,
  Lightbulb,
  Play,
  Sparkles,
  Trophy,
  Lock,
  Crown,
} from 'lucide-react';
import { api, Lesson, LessonScreen } from '@/lib/api';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/LanguageContext';
import { playChimeSound } from '@/lib/gamification';
import PaymentModal from '@/components/PaymentModal';
import { T } from '@/components/T';

export default function LessonRunnerPage() {
  const params = useParams();
  const router = useRouter();
  const { user, updateUserProgress } = useAuth();
  const { language, t } = useI18n();
  const lessonId = params?.id as string;

  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [nextLessonSlug, setNextLessonSlug] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentScreenIdx, setCurrentScreenIdx] = useState(0);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  // Quiz state
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [hasFailedQuiz, setHasFailedQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(100);

  // Video state
  const [showVideo, setShowVideo] = useState(false);

  // Completed state
  const [isFinished, setIsFinished] = useState(false);
  const [earnedXp, setEarnedXp] = useState(15);
  const [perfectBonus, setPerfectBonus] = useState(false);
  const [unlockedBadges, setUnlockedBadges] = useState<string[]>([]);

  useEffect(() => {
    async function loadLesson() {
      const [data, all] = await Promise.all([
        api.getLessonByIdOrSlug(lessonId, language),
        api.getLessons({ lang: language }),
      ]);

      if (data) {
        setLesson(data);
        setEarnedXp(data.xpReward || 15);

        if (all && all.length > 0) {
          const currentIdx = all.findIndex((l) => l.slug === data.slug);
          if (currentIdx >= 0 && currentIdx < all.length - 1) {
            setNextLessonSlug(all[currentIdx + 1].slug);
          }
        }
      }
      setLoading(false);
    }
    loadLesson();
  }, [lessonId, language]);

  const screens: LessonScreen[] = lesson?.screens || [];
  const totalScreens = screens.length + 1; // +1 for final victory screen
  const progressPercent = Math.min(100, Math.round(((currentScreenIdx + 1) / totalScreens) * 100));

  const handleNextScreen = async () => {
    if (currentScreenIdx < screens.length - 1) {
      setCurrentScreenIdx(currentScreenIdx + 1);
      // Reset quiz state for next screen
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsCorrect(false);
    } else if (currentScreenIdx === screens.length - 1) {
      // Enter victory screen
      setCurrentScreenIdx(currentScreenIdx + 1);
      setIsFinished(true);

      // Flawless quiz bonus (+5 XP)
      let finalXp = earnedXp;
      const isPerfect = !hasFailedQuiz;
      if (isPerfect) {
        finalXp += 5;
        setEarnedXp(finalXp);
        setPerfectBonus(true);
      }

      // Play victory sound fanfare
      playChimeSound('victory');

      // Trigger Confetti celebration
      try {
        fireConfetti({
          particleCount: 110,
          spread: 85,
          origin: { y: 0.6 },
          colors: ['#059669', '#10B981', '#F59E0B', '#0284C7', '#8B5CF6'],
        });
      } catch {
        // Confetti fallback
      }

      // Record progress to AuthContext and Backend API
      updateUserProgress(finalXp, lesson?.slug || lessonId);
      const res = await api.recordLessonProgress({
        lessonSlug: lesson?.slug || lessonId,
        score: isPerfect ? 100 : 80,
        xpEarned: finalXp,
      });

      if (res && res.newlyUnlockedAchievements && res.newlyUnlockedAchievements.length > 0) {
        setUnlockedBadges(res.newlyUnlockedAchievements);
      }
    }
  };

  const handleCheckQuiz = (correctIndex: number) => {
    if (selectedOption === null) return;
    setIsAnswerChecked(true);
    const correct = selectedOption === correctIndex;
    setIsCorrect(correct);

    if (correct) {
      playChimeSound('correct');
      try {
        fireConfetti({ particleCount: 40, spread: 50, origin: { y: 0.7 } });
      } catch {}
    } else {
      setHasFailedQuiz(true);
      setQuizScore(60);
      playChimeSound('wrong');
    }
  };

  const getScreenTag = (type: string) => {
    switch (type) {
      case 'scenario':
        return {
          icon: HelpCircle,
          label: language === 'en' ? 'Core Context' : language === 'ru' ? 'Ситуация' : 'Hayotiy vaziyat',
          className: 'text-sky-600 bg-sky-50 border-sky-200',
        };
      case 'concept':
        return {
          icon: Lightbulb,
          label: language === 'en' ? 'Core Concept' : language === 'ru' ? 'Основная суть' : 'Asosiy tushuncha',
          className: 'text-emerald-600 bg-emerald-50 border-emerald-200',
        };
      case 'explanation':
        return {
          icon: BookOpen,
          label: language === 'en' ? 'Psychological Insight' : language === 'ru' ? 'Анализ' : 'Tarbiyaviy tahlil',
          className: 'text-indigo-600 bg-indigo-50 border-indigo-200',
        };
      case 'islamic_perspective':
        return {
          icon: Heart,
          label: language === 'en' ? 'Sacred Wisdom' : language === 'ru' ? 'Исламская мудрость' : 'Islomiy hikmat',
          className: 'text-teal-700 bg-teal-50 border-teal-200',
        };
      case 'practice':
        return {
          icon: CheckCircle2,
          label: language === 'en' ? 'Practical Step' : language === 'ru' ? 'Практика' : 'Bugungi amaliyot',
          className: 'text-amber-700 bg-amber-50 border-amber-200',
        };
      case 'quiz':
        return {
          icon: Award,
          label: language === 'en' ? 'Mini-quiz' : language === 'ru' ? 'Тест' : 'Mini-test',
          className: 'text-purple-700 bg-purple-50 border-purple-200',
        };
      default:
        return {
          icon: BookOpen,
          label: language === 'en' ? 'Lesson Step' : language === 'ru' ? 'Шаг урока' : 'Dars bosqichi',
          className: 'text-slate-600 bg-slate-50 border-slate-200',
        };
    }
  };

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="max-w-md mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">
          {t('lsn.not_found_title')}
        </h2>
        <p className="text-xs text-slate-500">
          {t('lsn.not_found_desc')}
        </p>
        <Link href="/dashboard" className="btn-primary text-sm px-6 py-2.5 inline-block">
          {t('lesson.continue_learning')}
        </Link>
      </div>
    );
  }

  // Strict Premium Check: 1-10 are free, all others require premium
  const isLocked = Boolean(lesson.isPremium && !user?.isPremium);

  if (isLocked) {
    return (
      <div className="max-w-xl mx-auto px-4 py-10 sm:py-16 space-y-6">
        <div className="bg-white rounded-3xl border-2 border-amber-400 border-b-8 shadow-2xl p-6 sm:p-10 text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 border-2 border-amber-300 mx-auto flex items-center justify-center shadow-inner">
            <Crown className="w-8 h-8 fill-amber-700" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-amber-850 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
              <Lock className="w-3.5 h-3.5" />
              <span><T k="lsn.1" /></span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {lesson.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              <T k="lsn.2" /></p>
          </div>

          {/* Pricing Highlight */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-left space-y-2">
            <div className="text-xs text-amber-900 font-bold uppercase tracking-wider"><T k="lsn.3" /></div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-800 font-bold">
              <span><T k="lsn.4" /></span>
              <span className="text-emerald-700 font-black"><T k="lsn.5" /></span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-800 font-bold">
              <span><T k="lsn.6" /></span>
              <span className="text-emerald-700 font-black"><T k="lsn.7" /></span>
            </div>
            <div className="text-[11px] text-slate-500 pt-1 border-t border-amber-200/60">
              <T k="lsn.8" />{" "}<span className="font-mono font-bold text-slate-700">5614 6819 0401 4390</span> <T k="lsn.9" />{" "}<span className="font-bold text-slate-700"><T k="lsn.10" /></span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={() => setShowPaymentModal(true)}
              className="w-full btn-gold text-sm sm:text-base py-3.5 flex items-center justify-center gap-2 text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/25"
            >
              <Crown className="w-4 h-4 fill-slate-950" />
              <span><T k="lsn.11" /></span>
            </button>

            <Link
              href="/darslar/tarbiya-asoslari-va-boshlangich-himoya"
              className="w-full btn-outline text-xs sm:text-sm py-3 flex items-center justify-center gap-2"
            >
              <span><T k="lsn.12" /></span>
            </Link>
          </div>
        </div>

        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
        />
      </div>
    );
  }

  const currentScreen = screens[currentScreenIdx];

  return (
    <div className="min-h-[85vh] flex flex-col justify-between max-w-2xl mx-auto px-4 py-6 sm:py-8 relative">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. TOP HEADER & PROGRESS BAR */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/dashboard"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            title={t('lesson.exit')}
          >
            <X className="w-6 h-6" />
          </Link>

          {/* Progress Bar */}
          <div className="flex-1 h-3.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
            <m.div
              className="h-full bg-emerald-500 rounded-full shadow-sm"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 shadow-xs">
            <Star className="w-3.5 h-3.5 fill-emerald-500 text-emerald-500" />
            <span>+{earnedXp} <T k="lsn.13" /></span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 px-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 line-clamp-1">
            {lesson.title}
          </span>
          {lesson.videoUrl && (
            <button
              type="button"
              onClick={() => setShowVideo(!showVideo)}
              className="text-[11px] font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-xl border border-emerald-200 flex items-center gap-1 transition-all cursor-pointer"
            >
              <Play className="w-3 h-3 fill-emerald-600" />
              <span>{t('lesson.video_btn')}</span>
            </button>
          )}
        </div>

        {/* Video Embed Section */}
        <AnimatePresence>
          {showVideo && lesson.videoUrl && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden rounded-2xl border-2 border-emerald-200 shadow-md bg-black"
            >
              <div className="aspect-video w-full">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${lesson.videoId || ''}`}
                  title={lesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. DYNAMIC SCREEN CONTENT WITH MOTION */}
      <div className="py-6 sm:py-8 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {isFinished ? (
            /* VICTORY / COMPLETION SCREEN */
            <m.div
              key="victory"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-8 sm:p-12 text-center space-y-6 shadow-xl"
            >
              <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100 border-4 border-emerald-300 text-emerald-600 flex items-center justify-center shadow-inner">
                <Award className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-800">
                  {t('lesson.completed_title')}
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-medium">
                  {t('lesson.completed_desc')}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-4 text-center">
                  <div className="flex items-center justify-center gap-1 text-emerald-600 font-black text-2xl">
                    <Star className="w-6 h-6 fill-emerald-500" />
                    <span>+{earnedXp}</span>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 uppercase">
                    {t('lesson.earned_xp')}
                  </span>
                </div>

                <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-4 text-center">
                  <div className="flex items-center justify-center gap-1 text-orange-600 font-black text-2xl">
                    <Flame className="w-6 h-6 fill-orange-500" />
                    <span>+1</span>
                  </div>
                  <span className="text-xs font-bold text-amber-800 uppercase">
                    {t('stats.streak')}
                  </span>
                </div>
              </div>

              {perfectBonus && (
                <m.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-3 max-w-sm mx-auto flex items-center justify-center gap-2 text-amber-900 font-bold text-xs sm:text-sm shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
                  <span><T k="lsn.14" /></span>
                </m.div>
              )}

              {unlockedBadges.length > 0 && (
                <m.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-300 rounded-2xl p-4 max-w-sm mx-auto space-y-1 text-center shadow-md"
                >
                  <div className="flex items-center justify-center gap-1.5 text-purple-700 font-black text-xs uppercase tracking-wider">
                    <Trophy className="w-4 h-4 text-amber-500 fill-amber-400" />
                    <span><T k="lsn.15" /></span>
                  </div>
                  <p className="font-extrabold text-sm text-slate-800">
                    {unlockedBadges.join(', ')}
                  </p>
                </m.div>
              )}

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                {nextLessonSlug ? (
                  <button
                    onClick={() => router.push(`/dars/${nextLessonSlug}`)}
                    className="w-full sm:w-auto flex-1 btn-primary text-base py-4 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span><T k="lsn.16" /></span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                ) : null}

                <button
                  onClick={() => router.push('/dashboard')}
                  className={`w-full sm:w-auto py-4 px-6 text-base font-bold rounded-2xl cursor-pointer ${
                    nextLessonSlug
                      ? 'btn-outline'
                      : 'w-full btn-primary flex items-center justify-center gap-2'
                  }`}
                >
                  <span>{t('lesson.continue_learning')}</span>
                  {!nextLessonSlug && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>
            </m.div>
          ) : currentScreen ? (
            /* STEP SCREENS */
            <m.div
              key={currentScreenIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="bg-white/95 backdrop-blur-md rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 shadow-lg space-y-6"
            >
              {/* Screen Category Tag */}
              {(() => {
                const tag = getScreenTag(currentScreen.type);
                const Icon = tag.icon;
                return (
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-xs font-black uppercase tracking-wider px-3 py-1 rounded-lg border flex items-center gap-1.5 ${tag.className}`}
                    >
                      <Icon className="w-3.5 h-3.5" /> {tag.label}
                    </span>
                  </div>
                );
              })()}

              {/* Screen Title */}
              <div className="space-y-1">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-800 leading-tight">
                  {currentScreen.title}
                </h2>
                {currentScreen.subtitle && (
                  <p className="text-xs sm:text-sm font-bold text-slate-400">
                    {currentScreen.subtitle}
                  </p>
                )}
              </div>

              {/* Content text */}
              <div className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium whitespace-pre-line">
                {currentScreen.content}
              </div>

              {/* Example or Quote Highlight Card */}
              {currentScreen.example && (
                <div className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                  <p className="font-bold text-slate-800">
                    {language === 'en' ? 'Context / Example:' : language === 'ru' ? 'Пример / Контекст:' : 'Misol / Vaziyat:'}
                  </p>
                  <p className="italic text-slate-600 whitespace-pre-line">{currentScreen.example}</p>
                </div>
              )}

              {currentScreen.highlight && (
                <div className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-xs sm:text-sm text-emerald-900 font-bold flex items-start gap-2.5">
                  <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p>{currentScreen.highlight}</p>
                </div>
              )}

              {currentScreen.quoteSource && (
                <p className="text-right text-xs font-bold text-slate-400">
                  — {currentScreen.quoteSource}
                </p>
              )}

              {/* QUIZ INTERACTION */}
              {currentScreen.type === 'quiz' && currentScreen.quizOptions && (
                <div className="space-y-4 pt-2">
                  <p className="font-bold text-slate-800 text-sm sm:text-base">
                    {currentScreen.quizQuestion}
                  </p>

                  <div className="space-y-2.5">
                    {currentScreen.quizOptions.map((opt, idx) => {
                      const isSelected = selectedOption === idx;
                      let optionClasses = 'border-slate-200 hover:border-slate-300 hover:bg-slate-50';

                      if (isSelected) {
                        if (isAnswerChecked) {
                          optionClasses = isCorrect
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 border-b-4'
                            : 'border-rose-500 bg-rose-50 text-rose-900 border-b-4';
                        } else {
                          optionClasses = 'border-emerald-600 bg-emerald-50 text-emerald-900 border-b-4';
                        }
                      }

                      return (
                        <m.button
                          key={idx}
                          whileHover={{ scale: isAnswerChecked ? 1 : 1.01 }}
                          whileTap={{ scale: isAnswerChecked ? 1 : 0.99 }}
                          type="button"
                          onClick={() => !isAnswerChecked && setSelectedOption(idx)}
                          disabled={isAnswerChecked}
                          className={`w-full text-left p-4 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all flex items-center justify-between cursor-pointer ${optionClasses}`}
                        >
                          <span>{opt}</span>
                          {isAnswerChecked && isSelected && (
                            <span>
                              {isCorrect ? (
                                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                              ) : (
                                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                              )}
                            </span>
                          )}
                        </m.button>
                      );
                    })}
                  </div>

                  {/* Feedback note after checking */}
                  {isAnswerChecked && (
                    <m.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-2xl border-2 text-xs sm:text-sm ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : 'bg-amber-50 border-amber-300 text-amber-900'
                      }`}
                    >
                      <p className="font-bold mb-1">
                        {isCorrect ? t('lesson.correct') : t('lesson.incorrect')}
                      </p>
                      <p>{currentScreen.quizExplanation}</p>
                    </m.div>
                  )}
                </div>
              )}
            </m.div>
          ) : null}
        </AnimatePresence>
      </div>

      {/* 3. BOTTOM ACTION BUTTON BAR */}
      {!isFinished && (
        <div className="pt-4 border-t border-slate-200/80 bg-white/60 backdrop-blur-md -mx-4 px-4 pb-2 rounded-2xl flex items-center justify-between gap-4">
          {currentScreenIdx > 0 ? (
            <button
              type="button"
              onClick={() => setCurrentScreenIdx(currentScreenIdx - 1)}
              className="btn-outline text-xs sm:text-sm px-4 py-3 flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('lesson.back')}</span>
            </button>
          ) : (
            <div />
          )}

          {currentScreen?.type === 'quiz' && !isAnswerChecked ? (
            <button
              type="button"
              disabled={selectedOption === null}
              onClick={() => handleCheckQuiz(currentScreen.correctOptionIndex ?? 0)}
              className={`text-xs sm:text-sm px-8 py-3.5 font-bold rounded-2xl transition-all cursor-pointer ${
                selectedOption !== null
                  ? 'btn-primary'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {t('lesson.check')}
            </button>
          ) : (
            <button
              type="button"
              onClick={handleNextScreen}
              className="btn-primary text-xs sm:text-sm px-8 py-3.5 flex items-center gap-2 cursor-pointer"
            >
              <span>{currentScreenIdx === screens.length - 1 ? t('lesson.finish') : t('lesson.next')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
