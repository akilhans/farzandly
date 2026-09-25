import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Heart,
  Users,
  Compass,
  CheckCircle2,
  Bookmark,
  Share2,
} from 'lucide-react';
import { jazosizTarbiyaBook } from '@/lib/jazosizTarbiyaData';
import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';

export default function JazosizTarbiyaHubPage() {
  const { parts, title, author, translator, totalHours, totalLines, description } = jazosizTarbiyaBook;

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${title} — ${author}`,
    itemListElement: parts.map((part, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: absoluteUrl(`/jazosiz-tarbiya/${part.slug}`),
      name: part.title,
      description: part.subtitle,
    })),
  };

  return (
    <div className="space-y-12 sm:space-y-20 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-b from-amber-50/70 via-white to-transparent pt-10 sm:pt-14 pb-8 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-amber-100/90 border border-amber-300 text-amber-900 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black shadow-xs">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span>Dunyoga mashhur pedagogik durdona</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight max-w-4xl mx-auto leading-tight">
            {title}{' '}
            <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">
              (Cezasız Eğitim)
            </span>
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-bold text-slate-600">
            <span className="bg-white border border-slate-200 px-3 py-1 rounded-xl shadow-xs">
              Muallif: <strong className="text-slate-900">{author}</strong>
            </span>
            <span className="bg-white border border-slate-200 px-3 py-1 rounded-xl shadow-xs">
              Tarjimon: <strong className="text-slate-900">{translator}</strong>
            </span>
            <span className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-3 py-1 rounded-xl shadow-xs">
              ⏱ To‘liq hajmi: <strong>{totalHours}</strong> ({totalLines.toLocaleString()} satr)
            </span>
          </div>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
            {description}
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/jazosiz-tarbiya/${parts[0].slug}`}
              className="btn-primary text-base px-8 py-3.5 gap-2 shadow-lg shadow-emerald-600/20 cursor-pointer"
            >
              <span>1-qismdan mutolaani boshlash</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CORE PHILOSOPHY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 border border-rose-200 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Jazo nega samarasiz?</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Jazo bolani to‘g‘ri yo‘lga solmaydi, faqatgina qo‘rquv va aybdorlik hissi orqali uning irodasini sindiradi hamda yolg‘on gapirishga o‘rgatadi.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Shartsiz muhabbat</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              «Yaxshi bola bo‘lsang, yaxshi ko‘raman» degan shartli mehr bolada xavotir uyg‘otadi. Haqiqiy mehr hech qanday mukofot yoki shartsiz beriladi.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-200/90 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-black text-slate-900">Haqiqiy intizom</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Intizom — bu jazo berish emas, balki bolaga xavfsiz chegaralarni tushuntirish va ota-onaning shaxsiy xotirjam ibratidir.
            </p>
          </div>
        </div>
      </section>

      {/* 3. TABLE OF CONTENTS / 6 PARTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
              Kitobning barcha qismlari
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              6 ta to‘liq qism, barcha boblar va hayotiy amaliy vaziyatlar
            </p>
          </div>
          <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-xl">
            To‘liq matn ochiq
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {parts.map((part) => (
            <div
              key={part.slug}
              className="bg-white rounded-3xl border-2 border-slate-200/90 p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-xl">
                    {part.partNumber}-qism
                  </span>
                  <span className="text-xs text-slate-400 font-bold inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {part.timeRange} ({part.estimatedMinutes} daqiqa)
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                  {part.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  {part.subtitle}
                </p>

                {/* Key Takeaways list */}
                <div className="space-y-1.5 pt-2">
                  <p className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Asosiy xulosalar:
                  </p>
                  {part.keyTakeaways.map((takeaway, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-bold">
                  {part.totalParagraphs} ta paragraf
                </span>
                <Link
                  href={`/jazosiz-tarbiya/${part.slug}`}
                  className="btn-primary py-2.5 px-5 text-xs sm:text-sm font-bold inline-flex items-center gap-1.5"
                >
                  <span>Qismni o‘qish</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
