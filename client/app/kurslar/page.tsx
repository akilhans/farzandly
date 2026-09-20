import React from 'react';
import Link from 'next/link';
import { Layers, Clock, BookOpen, Crown, ArrowRight, Baby } from 'lucide-react';
import { api } from '@/lib/api';

interface KurslarProps {
  searchParams: Promise<{ ageGroup?: string; category?: string }>;
}

export default async function KurslarPage({ searchParams }: KurslarProps) {
  const params = await searchParams;
  const [courses, ageGroups] = await Promise.all([
    api.getCourses({
      ageGroup: params.ageGroup,
      category: params.category,
    }),
    api.getAgeGroups(),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
          Strukturali dasturlar
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
          Tarbiya kurslari
        </h1>
        <p className="text-sm sm:text-base text-slate-500">
          Bolaning yoshiga moslashtirilgan, bosqichma-bosqich qisqa interaktiv darslar majmuasi.
        </p>
      </div>

      {/* Age Group Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        <Link
          href="/kurslar"
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            !params.ageGroup
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          Barcha yoshlar
        </Link>
        {ageGroups.map((ag) => {
          const isActive = params.ageGroup === ag.code;
          return (
            <Link
              key={ag.code}
              href={`/kurslar?ageGroup=${ag.code}`}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {ag.title}
            </Link>
          );
        })}
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {courses.map((course) => (
          <div
            key={course.slug}
            className="card-farzandly p-6 flex flex-col justify-between hover:border-emerald-500 hover:-translate-y-1 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-xl flex items-center gap-1">
                  <Baby className="w-3.5 h-3.5" /> {course.ageGroup} yosh
                </span>
                {course.isPremium ? (
                  <span className="text-xs font-black text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-amber-700" /> PREMIUM
                  </span>
                ) : (
                  <span className="text-xs font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-lg">
                    BEPUL
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                  {course.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" /> {course.totalLessons} ta dars
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {course.estimatedMinutes} daqiqa
                </span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <Link
                href={`/kurslar/${course.slug}`}
                className="w-full btn-primary text-xs sm:text-sm py-2.5 flex items-center justify-center gap-1.5"
              >
                <span>Dasturni ko‘rish</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
