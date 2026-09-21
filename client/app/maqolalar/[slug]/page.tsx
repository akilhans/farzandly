import React, { cache } from 'react';
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
  Crown,
} from 'lucide-react';
import { api } from '@/lib/api';
import ArticleContentReader from '@/components/ArticleContentReader';
import { SITE_NAME, SITE_URL, START_LESSON_HREF, absoluteUrl } from '@/lib/site';
import { seedArticles } from '@/lib/seedData';
import { T, Tr } from '@/components/T';

// Deduplicates the fetch between generateMetadata() and the page render
const getArticle = cache((slug: string) => api.getArticleBySlug(slug));

export const revalidate = 3600;

export function generateStaticParams() {
  return seedArticles.filter((a) => a.isPublished !== false).map((a) => ({ slug: a.slug }));
}

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticle(slug);

  if (!article) {
    return { title: 'Maqola topilmadi', robots: { index: false, follow: false } };
  }

  const url = `/maqolalar/${article.slug}`;
  const title = (article.seoTitle || article.title).replace(/\s*\|\s*Farzandly\s*$/i, '');
  const description = article.seoDescription || article.excerpt;

  return {
    title: { absolute: `${title} | ${SITE_NAME}` },
    description,
    keywords: article.tags,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      url,
      siteName: SITE_NAME,
      locale: 'uz_UZ',
      publishedTime: article.publishedAt,
      modifiedTime: article.publishedAt,
      section: article.categorySlug,
      tags: article.tags,
      images: [{ url: '/logo.png', width: 778, height: 192, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: ['/logo.png'],
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const [article, categories] = await Promise.all([getArticle(slug), api.getCategories()]);

  if (!article) {
    notFound();
  }
  const category = categories.find((c) => c.slug === article.categorySlug);

  // JSON-LD Structured Data Schema
  const articleUrl = absoluteUrl(`/maqolalar/${article.slug}`);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        image: [absoluteUrl('/logo.png')],
        inLanguage: 'uz',
        keywords: (article.tags || []).join(', '),
        articleSection: article.categorySlug,
        author: { '@type': 'Organization', name: 'Farzandly Pedagogik Tahririyati', url: SITE_URL },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          logo: { '@type': 'ImageObject', url: absoluteUrl('/logo.png') },
        },
        datePublished: article.publishedAt,
        dateModified: article.publishedAt,
        mainEntityOfPage: { '@type': 'WebPage', '@id': articleUrl },
        isAccessibleForFree: !article.isPremium,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Maqolalar', item: absoluteUrl('/maqolalar') },
          { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Schema.org script injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb navigation */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-400">
        <Link href="/" className="hover:text-emerald-700">
          <T k="art.1" /></Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/maqolalar" className="hover:text-emerald-700">
          <T k="art.2" /></Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-600 line-clamp-1"><Tr data={article.translations} field="title" fb={article.title} /></span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4 border-b border-slate-200 pb-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
            {category ? <Tr data={category.translations} field="name" fb={category.name} /> : article.categorySlug}
          </span>
          <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
            {article.ageGroup} <T k="art.3" /></span>
          {article.isPremium ? (
            <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-900 border border-amber-300 px-3 py-1 rounded-full font-black text-[11px]">
              <Crown className="w-3.5 h-3.5 fill-amber-700" />
              <span><T k="art.4" /></span>
            </span>
          ) : (
            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-full font-black text-[11px]">
              <T k="art.5" /></span>
          )}
          <span className="flex items-center gap-1 text-slate-400 ml-auto">
            <Clock className="w-3.5 h-3.5" /> {article.readingTimeMinutes} <T k="art.6" /></span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
          <Tr data={article.translations} field="title" fb={article.title} />
        </h1>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
          <Tr data={article.translations} field="excerpt" fb={article.excerpt} />
        </p>
      </header>

      {/* Article Body Content Reader with Paywall Guard */}
      <ArticleContentReader article={article} />

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
          <span><T k="art.7" /></span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black leading-snug">
          <T k="art.8" /></h2>

        <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-xl">
          <T k="art.9" /></p>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href={START_LESSON_HREF}
            className="w-full sm:w-auto btn-gold text-sm sm:text-base px-6 py-3.5 flex items-center justify-center gap-2"
          >
            <span><T k="art.10" /></span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/darslar"
            className="w-full sm:w-auto text-xs sm:text-sm font-bold text-emerald-100 hover:text-white px-4 py-2 text-center"
          >
            <T k="art.11" /></Link>
        </div>
      </div>
    </article>
  );
}
