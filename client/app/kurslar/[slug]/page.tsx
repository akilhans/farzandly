'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import {
  Clock,
  BookOpen,
  Crown,
  ChevronRight,
  Play,
  Baby,
  ArrowRight,
} from 'lucide-react';
import { api, Course } from '@/lib/api';
import { useI18n } from '@/context/LanguageContext';

export default function CourseDetailPage() {
  const params = useParams();
  const slug = (params?.slug as string) || '';
  const { language, t } = useI18n();

  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (!slug) return;
      setLoading(true);
      const data = await api.getCourseBySlug(slug, language);
      setCourse(data);
      setLoading(false);
    }
    load();
  }, [slug, language]);

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
        <h2 className="text-2xl font-bold text-slate-800">Kurs topilmadi</h2>
        <Link href="/kurslar" className="btn-primary inline-flex">
          Barcha kurslar
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
        <Link href="/kurslar" className="hover:text-emerald-700">
          {t('course_detail.all_courses', 'Kurslar')}
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
              <Crown className="w-3.5 h-3.5 fill-amber-700" /> {t('courses.premium_badge', 'PREMIUM KURS')}
            </span>
          ) : (
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full">
              {t('courses.free_badge', 'BEPUL ASOSIY KURS')}
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
          {t('course_detail.syllabus_title', 'Kurs darslari ro‘yxati')} ({lessons.length} {t('courses.lessons_count', 'ta dars')})
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
                <span className="text-xs font-bold text-emerald-700 hidden sm:inline">
                  +{lesson.xpReward} XP
                </span>
                <Link
                  href={`/dars/${lesson.slug}`}
                  className="btn-outline text-xs px-3.5 py-2 flex items-center gap-1"
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
