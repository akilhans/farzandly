import React from 'react';
import Link from 'next/link';
import { BookOpen, Clock, Tag, ArrowRight, Baby, Crown } from 'lucide-react';
import { api } from '@/lib/api';
import SearchForm from '@/components/SearchForm';
import Pagination, { EmptyArticles } from '@/components/Pagination';
import type { Metadata } from 'next';
import { absoluteUrl } from '@/lib/site';
import { T, Tr } from '@/components/T';

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
    title: page > 1 ? `Farzand tarbiyalash maqolalari — ${page}-sahifa` : 'Farzand tarbiyalash maqolalari',
    description: 'Farzand tarbiyalash, zamonaviy bolalar psixologiyasi va ota-onalik amaliyotiga oid sara maqolalar.',
    alternates: { canonical: page > 1 ? `/maqolalar?page=${page}` : '/maqolalar' },
    ...(filtered ? { robots: { index: false, follow: true } } : {}),
  };
}

export default async function MaqolalarPage({ searchParams }: MaqolalarProps) {
  const params = await searchParams;
  const [rawArticles, categories] = await Promise.all([
    api.getArticles({
      category: params.category,
      ageGroup: params.ageGroup,
      search: params.search,
    }),
    api.getCategories(),
  ]);

  // Tekin (bepul) maqolalar birinchi sahifada ketma-ket boshida turadi
  const allArticles = [...rawArticles].sort((a, b) => {
    if (Boolean(a.isPremium) === Boolean(b.isPremium)) return 0;
    return a.isPremium ? 1 : -1;
  });

  const totalPages = Math.max(1, Math.ceil(allArticles.length / PAGE_SIZE));
  const page = Math.min(parsePage(params.page), totalPages);
  const articles = allArticles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: articles.map((article, idx) => ({
      '@type': 'ListItem',
      position: (page - 1) * PAGE_SIZE + idx + 1,
      url: absoluteUrl(`/maqolalar/${article.slug}`),
      name: article.title,
      description: article.excerpt,
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Schema.org ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
          <T k="arts.1" /></span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
          <T k="arts.2" /></h1>
        <p className="text-sm sm:text-base text-slate-500">
          <T k="arts.3" /></p>
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
          <T k="arts.4" /></Link>
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
              <Tr data={cat.translations} field="name" fb={cat.name} />
            </Link>
          );
        })}
      </div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        {articles.map((article) => {
          const cat = categories.find((x) => x.slug === article.categorySlug);
          return (
            <article
              key={article.slug}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-400 hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                {/* Badges Bar with proper wrapping and alignment */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full inline-flex items-center">
                    {cat ? <Tr data={cat.translations} field="name" fb={cat.name} /> : article.categorySlug}
                  </span>

                  <div className="flex items-center gap-2 shrink-0">
                    {article.isPremium ? (
                      <span className="text-[10px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-md inline-flex items-center gap-1">
                        <Crown className="w-3 h-3 fill-amber-600 text-amber-600" />
                        <T k="arts.5" />
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-md inline-flex items-center">
                        <T k="arts.6" />
                      </span>
                    )}
                    <span className="text-xs text-slate-400 font-medium inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {article.readingTimeMinutes} m
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                  <Link href={`/maqolalar/${article.slug}`} className="hover:underline">
                    <Tr data={article.translations} field="title" fb={article.title} />
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  <Tr data={article.translations} field="excerpt" fb={article.excerpt} />
                </p>
              </div>

              {/* Footer CTA & Metadata */}
              <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-500 bg-slate-50 border border-slate-200/70 px-2.5 py-1 rounded-lg inline-flex items-center gap-1.5">
                  <Baby className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.ageGroup} <T k="arts.7" /></span>
                </span>

                <Link
                  href={`/maqolalar/${article.slug}`}
                  className="text-xs sm:text-sm font-bold text-emerald-600 group-hover:text-emerald-700 inline-flex items-center gap-1 group-hover:translate-x-1 transition-all"
                >
                  <span><T k="arts.8" /></span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          );
        })}
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
