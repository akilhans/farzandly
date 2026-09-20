import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  BookOpen,
  Crown,
  ChevronRight,
  Play,
  CheckCircle,
  Star,
  Baby,
  ArrowRight,
} from 'lucide-react';
import { api } from '@/lib/api';

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = await api.getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const lessons = course.lessons || [];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-400">
        <Link href="/" className="hover:text-emerald-700">
          Asosiy
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/kurslar" className="hover:text-emerald-700">
          Kurslar
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-600 line-clamp-1">{course.title}</span>
      </nav>

      {/* Header Card */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 space-y-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full flex items-center gap-1">
            <Baby className="w-3.5 h-3.5" /> {course.ageGroup} yosh
          </span>
          {course.isPremium ? (
            <span className="bg-amber-100 text-amber-800 border border-amber-300 px-3 py-1 rounded-full flex items-center gap-1">
              <Crown className="w-3.5 h-3.5 fill-amber-700" /> PREMIUM KURS
            </span>
          ) : (
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full">
              BEPUL ASOSIY KURS
            </span>
          )}
          <span className="ml-auto text-slate-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Jami: {course.estimatedMinutes} daqiqa
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
              <span>1-darsdan boshlash</span>
            </Link>
          </div>
        )}
      </div>

      {/* Curriculum Syllabus */}
      <div className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-800">
          Kurs darslari ro‘yxati ({lessons.length} ta dars)
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
                  <span>Dars</span>
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
