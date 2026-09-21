import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Tag, ArrowRight, Baby, Crown } from 'lucide-react';
import { api } from '@/lib/api';
import SearchForm from '@/components/SearchForm';
import Pagination, { EmptyArticles } from '@/components/Pagination';
import type { Metadata } from 'next';

const PAGE_SIZE = 9;

interface MaqolalarProps {
  searchParams: Promise<{ category?: string; ageGroup?: string; search?: string; page?: string }>;
}

const parsePage = (raw?: string) => {
  const n = parseInt(raw || '1', 10);
  return Number.isFinite(n) && n > 0 ? n : 1;
};

export async function generateMetadata({ searchParams }: MaqolalarProps): Promise<Metadata> {
  const params = await searchParams;
  const page = parsePage(params.page);
  // Filtered/searched views are duplicates of the main list — keep them out of the index
  const filtered = Boolean(params.category || params.ageGroup || params.search);
  return {
    title: page > 1 ? `Tarbiya maqolalari — ${page}-sahifa` : 'Tarbiya maqolalari',
    alternates: { canonical: page > 1 ? `/maqolalar?page=${page}` : '/maqolalar' },
    ...(filtered ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function MaqolalarPage({ searchParams }: MaqolalarProps) {
  const params = await searchParams;
  const [allArticles, categories] = await Promise.all([
    api.getArticles({
      category: params.category,
      ageGroup: params.ageGroup,
      search: params.search,
    }),
    api.getCategories(),
  ]);

  const totalPages = Math.max(1, Math.ceil(allArticles.length / PAGE_SIZE));
  const page = Math.min(parsePage(params.page), totalPages);
  const articles = allArticles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
          Ota-onalar kutubxonasi
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
          Foydali tarbiya maqolalari
        </h1>
        <p className="text-sm sm:text-base text-slate-500">
          Islomiy qadriyatlar, zamonaviy bolalar psixologiyasi va amaliy tavsiyalarga asoslangan ilmiy-ommabop maqolalar.
        </p>
      </div>

      <SearchForm className="max-w-2xl mx-auto" />

      {/* Category Pills Filter */}
      <div className="flex items-center justify-center flex-wrap gap-2 pt-2">
        <Link
          href="/maqolalar"
          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            !params.category
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          Barchasi
        </Link>
        {categories.map((cat) => {
          const isActive = params.category === cat.slug;
          return (
            <Link
              key={cat.slug}
              href={`/maqolalar?category=${cat.slug}`}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </Link>
          );
        })}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="card-farzandly p-6 flex flex-col justify-between hover:border-emerald-500 hover:-translate-y-1 transition-all group"
          >
            <div className="space-y-3">
              {/* Badges */}
              <div className="flex items-center justify-between gap-2 text-xs">
                <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-lg">
                  {article.categorySlug}
                </span>
                <div className="flex items-center gap-2">
                  {article.isPremium ? (
                    <span className="text-[10px] font-black text-amber-850 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Crown className="w-3 h-3 fill-amber-700 text-amber-700" /> PREMIUM KONTENT
                    </span>
                  ) : (
                    <span className="text-[10px] font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-md">
                      BEPUL
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-slate-400 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readingTimeMinutes} m
                  </span>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-slate-800 group-hover:text-emerald-700 transition-colors leading-snug">
                <Link href={`/maqolalar/${article.slug}`}>{article.title}</Link>
              </h2>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>
            </div>

            {/* Read CTA */}
            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                <Baby className="w-3.5 h-3.5" /> {article.ageGroup} yosh
              </span>
              <Link
                href={`/maqolalar/${article.slug}`}
                className="text-xs font-black text-emerald-600 flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                <span>To‘liq o‘qish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {articles.length === 0 && (
        <EmptyArticles />
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        basePath="/maqolalar"
        params={{ category: params.category, ageGroup: params.ageGroup, search: params.search }}
      />
    </div>
  );
}
