'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Clock,
  BookOpen,
  Crown,
  ChevronRight,
  Play,
  Baby,
  ArrowRight,
  Lock,
} from 'lucide-react';
import { api, Course } from '@/lib/api';
import { useI18n } from '@/context/LanguageContext';

export default function CourseDetailClient({ slug, initialCourse = null }: { slug: string; initialCourse?: Course | null }) {
  const { language, t } = useI18n();

  const [course, setCourse] = useState<Course | null>(initialCourse);
  const [loading, setLoading] = useState(!initialCourse);

  useEffect(() => {
    // Server already rendered the default-language course; only refetch for other languages
    if (initialCourse && language === 'uz') return;
    async function load() {
      if (!slug) return;
      setLoading(true);
      const data = await api.getCourseBySlug(slug, language);
      setCourse(data);
      setLoading(false);
    }
    load();
  }, [slug, language, initialCourse]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center text-slate-400">
        Yuklanmoqda...
      </div>
    );
  }

  if (!course) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Dars to‘plami topilmadi</h2>
        <Link href="/darslar" className="btn-primary inline-flex">
          Barcha darslar
        </Link>
      </div>
    );
  }

  const lessons = course.lessons || [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-400">
        <Link href="/" className="hover:text-emerald-700">
          {t('course_detail.home', 'Asosiy')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/darslar" className="hover:text-emerald-700">
          {t('course_detail.all_courses', 'Darslar')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-600 line-clamp-1">{course.title}</span>
      </nav>

      {/* Header Card */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full flex items-center gap-1">
            <Baby className="w-3.5 h-3.5" /> {course.ageGroup} {t('dashboard.age_label', 'yosh')}
          </span>
          {course.isPremium ? (
            <span className="bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1 rounded-full flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 fill-amber-700" /> {t('courses.premium_badge', 'PREMIUM KONTENT')}
            </span>
          ) : (
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full">
              {t('courses.free_badge', 'BEPUL ASOSIY DARSLAR')}
            </span>
          )}
          <span className="ml-auto text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {t('course_detail.total', 'Jami:')} {course.estimatedMinutes} {t('courses.duration', 'daqiqa')}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          {course.title}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
          {course.description}
        </p>

        {lessons.length > 0 && (
          <div className="pt-2">
            <Link
              href={`/dars/${lessons[0].slug}`}
              className="btn-primary text-sm sm:text-base px-6 py-3.5 inline-flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{t('course_detail.start_from_1', '1-darsdan boshlash')}</span>
            </Link>
          </div>
        )}
      </div>

      {/* Curriculum Syllabus */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800">
          {t('course_detail.syllabus_title', 'Darslar ro‘yxati')} ({lessons.length} {t('courses.lessons_count', 'ta dars')})
        </h2>

        <div className="space-y-3">
          {lessons.map((lesson, idx) => (
            <div
              key={lesson.slug}
              className="bg-white rounded-2xl border-2 border-slate-200 p-4 sm:p-5 flex items-center justify-between gap-4 hover:border-emerald-500 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border-2 border-emerald-200 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base">
                    {lesson.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-1">{lesson.summary}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {lesson.isPremium ? (
                  <span className="text-[10px] font-black text-amber-850 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Lock className="w-2.5 h-2.5 text-amber-700" /> Premium
                  </span>
                ) : (
                  <span className="text-xs font-bold text-emerald-700 hidden sm:inline">
                    +{lesson.xpReward} XP
                  </span>
                )}
                <Link
                  href={`/dars/${lesson.slug}`}
                  className="btn-outline text-xs px-3.5 py-2 flex items-center gap-1 cursor-pointer"
                >
                  <span>{t('course_detail.lesson_btn', 'Dars')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
