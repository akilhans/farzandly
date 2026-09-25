'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Clock, BookOpen, Crown, ArrowRight, Baby } from 'lucide-react';
import { api, Course, AgeGroup } from '@/lib/api';
import { useI18n } from '@/context/LanguageContext';
import SearchForm from '@/components/SearchForm';
import Pagination from '@/components/Pagination';
import { absoluteUrl } from '@/lib/site';

const PAGE_SIZE = 6;

function DarslarContent() {
  const searchParams = useSearchParams();
  const ageGroupParam = searchParams.get('ageGroup') || undefined;
  const categoryParam = searchParams.get('category') || undefined;
  const pageParam = searchParams.get('page') || undefined;
  const { language, t } = useI18n();

  const [courses, setCourses] = useState<Course[]>([]);
  const [ageGroups, setAgeGroups] = useState<AgeGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [c, ag] = await Promise.all([
        api.getCourses({ ageGroup: ageGroupParam, category: categoryParam, lang: language }),
        api.getAgeGroups(language),
      ]);
      setCourses(c || []);
      setAgeGroups(ag || []);
      setLoading(false);
    }
    load();
  }, [ageGroupParam, categoryParam, language]);

  const rawPage = parseInt(pageParam || '1', 10);
  const currentPage = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;
  const totalPages = Math.max(1, Math.ceil(courses.length / PAGE_SIZE));
  const page = Math.min(currentPage, totalPages);
  const paginatedCourses = courses.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const itemListJsonLd = courses.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: paginatedCourses.map((c, idx) => ({
      '@type': 'ListItem',
      position: (page - 1) * PAGE_SIZE + idx + 1,
      url: absoluteUrl(`/darslar/${c.slug}`),
      name: c.title,
      description: c.description,
    })),
  } : null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {itemListJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      )}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
          {t('courses.badge', 'Strukturali dasturlar')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
          {t('courses.title', 'Tarbiya darslari')}
        </h1>
        <p className="text-sm sm:text-base text-slate-500">
          {t('courses.subtitle', 'Bolaning yoshiga moslashtirilgan, bosqichma-bosqich qisqa interaktiv darslar majmuasi.')}
        </p>
      </div>

      <SearchForm className="max-w-2xl mx-auto" />

      {/* Age Group Filter Tabs */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        <Link
          href="/darslar"
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            !ageGroupParam
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          {t('courses.all_ages', 'Barcha yoshlar')}
        </Link>
        {ageGroups.map((ag) => {
          const isActive = ageGroupParam === ag.code;
          return (
            <Link
              key={ag.code}
              href={`/darslar?ageGroup=${ag.code}`}
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
        {paginatedCourses.map((course) => (
          <div
            key={course.slug}
            className="card-farzandly p-6 flex flex-col justify-between hover:border-emerald-500 hover:-translate-y-1 transition-all group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-xl flex items-center gap-1">
                  <Baby className="w-3.5 h-3.5" /> {course.ageGroup} {t('dashboard.age_label', 'yosh')}
                </span>
                {course.isPremium ? (
                  <span className="text-xs font-black text-amber-800 bg-amber-100 border border-amber-300 px-2.5 py-0.5 rounded-lg flex items-center gap-1">
                    <Crown className="w-3 h-3 fill-amber-700" /> {t('courses.premium_badge', 'PREMIUM')}
                  </span>
                ) : (
                  <span className="text-xs font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-lg">
                    {t('courses.free_badge', 'BEPUL')}
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
                  <BookOpen className="w-3.5 h-3.5" /> {course.totalLessons} {t('courses.lessons_count', 'ta dars')}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {course.estimatedMinutes} {t('courses.duration', 'daqiqa')}
                </span>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-100">
              <Link
                href={`/darslar/${course.slug}`}
                className="w-full btn-primary text-xs sm:text-sm py-2.5 flex items-center justify-center gap-1.5"
              >
                <span>{t('courses.view_course', 'Dasturni ko‘rish')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {!loading && courses.length === 0 && (
        <p className="text-center text-slate-500 py-10">
          {t('courses.empty', 'Darslar topilmadi')}
        </p>
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        basePath="/darslar"
        params={{ ageGroup: ageGroupParam, category: categoryParam }}
      />
    </div>
  );
}

export default function DarslarPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-slate-400">Yuklanmoqda...</div>}>
      <DarslarContent />
    </Suspense>
  );
}
