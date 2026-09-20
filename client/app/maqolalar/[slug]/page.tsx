import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Clock,
  Calendar,
  Tag,
  ArrowRight,
  BookOpen,
  Heart,
  ChevronRight,
  ShieldCheck,
  Share2,
} from 'lucide-react';
import { api } from '@/lib/api';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await api.getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Maqola topilmadi | Farzandly',
    };
  }

  return {
    title: `${article.seoTitle || article.title} | Farzandly`,
    description: article.seoDescription || article.excerpt,
    keywords: article.tags,
    alternates: {
      canonical: `https://farzandly.uz/maqolalar/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url: `https://farzandly.uz/maqolalar/${article.slug}`,
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await api.getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // JSON-LD Structured Data Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: {
      '@type': 'Organization',
      name: 'Farzandly Pedagogik Tahririyati',
      url: 'https://farzandly.uz',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Farzandly',
      logo: {
        '@type': 'ImageObject',
        url: 'https://farzandly.uz/logo.png',
      },
    },
    datePublished: article.publishedAt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://farzandly.uz/maqolalar/${article.slug}`,
    },
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Schema.org script injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb navigation */}
      <nav className="flex items-center gap-2 text-xs font-bold text-slate-400">
        <Link href="/" className="hover:text-emerald-700">
          Asosiy
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/maqolalar" className="hover:text-emerald-700">
          Maqolalar
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-600 line-clamp-1">{article.title}</span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
            {article.categorySlug}
          </span>
          <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
            {article.ageGroup} yosh
          </span>
          <span className="flex items-center gap-1 text-slate-400 ml-auto">
            <Clock className="w-3.5 h-3.5" /> {article.readingTimeMinutes} daqiqa o‘qish
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          {article.title}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
          {article.excerpt}
        </p>
      </header>

      {/* Article Body Content with styled typography */}
      <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line">
        {article.content}
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-200">
          <Tag className="w-4 h-4 text-slate-400" />
          {article.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
            >
              #{t}
            </span>
          ))}
        </div>
      )}

      {/* HIGH CONVERTING CTA CARD (As requested in prompt section 10) */}
      <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-800 text-white p-6 sm:p-10 border-b-8 border-emerald-950 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 bg-emerald-500/40 text-emerald-100 px-3 py-1 rounded-full text-xs font-bold">
          <Heart className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
          <span>AMALIY TARBIYA MASHG‘ULOTI</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black leading-snug">
          Bu mavzuni chuqurroq o‘rganmoqchimisiz?
        </h2>

        <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
          Nazariyani bilish yetarli emas. Farzandly interaktiv platformasida har kuni 5 daqiqa amaliy mashqlar va testlar orqali farzandingiz bilan til topishishni o‘rganing.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/onboarding"
            className="w-full sm:w-auto btn-gold text-sm sm:text-base px-6 py-3.5 flex items-center justify-center gap-2"
          >
            <span>Bepul darsni boshlash</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/kurslar"
            className="w-full sm:w-auto text-xs sm:text-sm font-bold text-emerald-100 hover:text-white px-4 py-2 text-center"
          >
            Barcha kurslar bilan tanishish →
          </Link>
        </div>
      </div>
    </article>
  );
}
