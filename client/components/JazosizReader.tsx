'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Search,
  Check,
  Share2,
  Copy,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Bookmark,
} from 'lucide-react';
import { JazosizPart, jazosizTarbiyaBook } from '@/lib/jazosizTarbiyaData';

interface JazosizReaderProps {
  part: JazosizPart;
}

export default function JazosizReader({ part }: JazosizReaderProps) {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [theme, setTheme] = useState<'white' | 'sepia' | 'dark'>('white');
  const [search, setSearch] = useState('');
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const { parts, title, author } = jazosizTarbiyaBook;
  const currentIdx = parts.findIndex((p) => p.slug === part.slug);
  const prevPart = currentIdx > 0 ? parts[currentIdx - 1] : null;
  const nextPart = currentIdx < parts.length - 1 ? parts[currentIdx + 1] : null;

  const fontClass =
    fontSize === 'xlarge'
      ? 'text-xl sm:text-2xl leading-relaxed sm:leading-loose'
      : fontSize === 'large'
      ? 'text-lg sm:text-xl leading-relaxed'
      : 'text-base sm:text-lg leading-relaxed';

  const themeClass =
    theme === 'sepia'
      ? 'bg-[#FBF0D9] text-[#433422]'
      : theme === 'dark'
      ? 'bg-slate-900 text-slate-100'
      : 'bg-white text-slate-800';

  const filteredParagraphs = useMemo(() => {
    if (!search.trim()) return part.paragraphs;
    const q = search.toLowerCase();
    return part.paragraphs.filter((p) => p.toLowerCase().includes(q));
  }, [part.paragraphs, search]);

  const handleCopyParagraph = (text: string, idx: number) => {
    const quote = `«${text}»\n\n— Dr. Adem Güneş, «Jazosiz tarbiya» (${part.title})\nFarzandly.uz`;
    navigator.clipboard.writeText(quote);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 pb-20 ${themeClass}`}>
      {/* Top sticky reader control bar */}
      <div className="sticky top-16 sm:top-20 z-30 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 shadow-2xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <Link
            href="/jazosiz-tarbiya"
            className="text-xs font-bold text-slate-500 hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Mundarijaga qaytish</span>
          </Link>

          {/* Controls: Font size & Theme */}
          <div className="flex items-center gap-3">
            {/* Font size */}
            <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 rounded-lg transition-all ${
                  fontSize === 'normal'
                    ? 'bg-white dark:bg-slate-700 shadow-2xs text-slate-900 dark:text-white font-black'
                    : 'text-slate-500'
                }`}
                title="Normal shrift"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 rounded-lg transition-all ${
                  fontSize === 'large'
                    ? 'bg-white dark:bg-slate-700 shadow-2xs text-slate-900 dark:text-white font-black'
                    : 'text-slate-500'
                }`}
                title="Katta shrift"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 rounded-lg transition-all ${
                  fontSize === 'xlarge'
                    ? 'bg-white dark:bg-slate-700 shadow-2xs text-slate-900 dark:text-white font-black'
                    : 'text-slate-500'
                }`}
                title="Juda katta shrift"
              >
                A++
              </button>
            </div>

            {/* Theme switcher */}
            <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
              <button
                onClick={() => setTheme('white')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  theme === 'white' ? 'bg-white shadow-2xs text-slate-900 font-bold' : 'text-slate-500'
                }`}
                title="Oq fon"
              >
                Oq
              </button>
              <button
                onClick={() => setTheme('sepia')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  theme === 'sepia' ? 'bg-[#FBF0D9] text-[#433422] font-bold shadow-2xs' : 'text-slate-500'
                }`}
                title="Sepia fon"
              >
                Sariq
              </button>
              <button
                onClick={() => setTheme('dark')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  theme === 'dark' ? 'bg-slate-800 text-white font-bold shadow-2xs' : 'text-slate-500'
                }`}
                title="Tungi fon"
              >
                Tun
              </button>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-bold text-slate-400">
          <Link href="/" className="hover:text-emerald-700">Asosiy</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/jazosiz-tarbiya" className="hover:text-emerald-700">Jazosiz tarbiya</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="line-clamp-1">{part.partNumber}-qism</span>
        </nav>

        {/* Header */}
        <header className="space-y-4 border-b border-slate-200/80 dark:border-slate-800 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-bold">
            <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider">
              {part.partNumber}-qism / 6
            </span>
            <span className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{part.timeRange}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-snug">
            {part.title}
          </h1>

          <p className="text-base sm:text-lg opacity-80 leading-relaxed font-medium">
            {part.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-2 text-xs opacity-75 font-semibold">
            <span>Muallif: <strong>{author}</strong></span>
            <span>•</span>
            <span>Tarjimon: <strong>Javohir Usmon</strong></span>
            <span>•</span>
            <span>Jami: <strong>{part.totalParagraphs} ta paragraf</strong></span>
          </div>
        </header>

        {/* Key Takeaways Box */}
        {part.keyTakeaways && part.keyTakeaways.length > 0 && (
          <section className="bg-emerald-50/80 dark:bg-emerald-950/40 border-2 border-emerald-200 dark:border-emerald-800 rounded-3xl p-5 sm:p-7 space-y-3">
            <h3 className="text-sm font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Ushbu qismning asosiy g‘oyalari:</span>
            </h3>
            <div className="space-y-2">
              {part.keyTakeaways.map((takeaway, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Search inside this part */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Ushbu qismdan qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-2 text-xs sm:text-sm focus:border-emerald-500 outline-none"
          />
          {search && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] opacity-60">
              {filteredParagraphs.length} ta natija
            </span>
          )}
        </div>

        {/* Reading Text Content */}
        <section className={`space-y-6 ${fontClass}`}>
          {filteredParagraphs.map((para, pIdx) => {
            const isCopied = copiedIdx === pIdx;
            return (
              <div
                key={pIdx}
                className="group relative rounded-2xl p-2 -mx-2 hover:bg-slate-100/50 dark:hover:bg-slate-800/40 transition-colors"
              >
                <p className="leading-relaxed font-normal">
                  {para}
                </p>

                {/* Paragraph copy quote button on hover */}
                <button
                  onClick={() => handleCopyParagraph(para, pIdx)}
                  className="opacity-0 group-hover:opacity-100 absolute top-2 right-2 p-1.5 rounded-lg bg-white/80 dark:bg-slate-700 text-slate-500 hover:text-emerald-600 shadow-xs transition-opacity text-xs flex items-center gap-1 cursor-pointer"
                  title="Iqtibosdan nusxa olish"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span className="text-[10px] font-bold">{isCopied ? 'Nusxalandi!' : 'Iqtibos'}</span>
                </button>
              </div>
            );
          })}
        </section>

        {/* Bottom Navigation: Prev & Next Parts */}
        <footer className="pt-10 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPart ? (
            <Link
              href={`/jazosiz-tarbiya/${prevPart.slug}`}
              className="p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex flex-col justify-between group"
            >
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                Oldingi qism
              </span>
              <span className="text-sm font-black group-hover:text-emerald-600 transition-colors mt-2">
                {prevPart.title}
              </span>
            </Link>
          ) : <div />}

          {nextPart ? (
            <Link
              href={`/jazosiz-tarbiya/${nextPart.slug}`}
              className="p-5 rounded-2xl border-2 border-slate-200 dark:border-slate-800 hover:border-emerald-500 transition-all flex flex-col justify-between items-end text-right group"
            >
              <span className="text-xs font-bold text-slate-400 flex items-center gap-1">
                Keyingi qism
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="text-sm font-black group-hover:text-emerald-600 transition-colors mt-2">
                {nextPart.title}
              </span>
            </Link>
          ) : <div />}
        </footer>
      </article>
    </div>
  );
}
