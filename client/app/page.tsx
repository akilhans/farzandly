import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Heart,
  Baby,
  Smile,
  Smartphone,
  Users,
  Compass,
  CheckCircle,
  Crown,
  Flame,
  Star,
  HelpCircle,
} from 'lucide-react';
import { api } from '@/lib/api';
import { SITE_NAME, SITE_URL, SITE_KEYWORDS, START_LESSON_HREF, DEFAULT_OG_IMAGE, absoluteUrl } from '@/lib/site';
import SearchForm from '@/components/SearchForm';
import { T, Tr } from '@/components/T';

const BOT_USERNAME = (process.env.NEXT_PUBLIC_TELEGRAM_BOT_USERNAME || '').replace(/^@/, '');

export const metadata: Metadata = {
  title: 'Farzand tarbiyalash va bolalar psixologiyasi platformasi',
  description:
    'Farzand tarbiyalash bo‘yicha islomiy qadriyatlar va zamonaviy bolalar psixologiyasiga asoslangan mikro-darslar, ertaklar va amaliy qo‘llanmalar. Har kuni 5 daqiqada farzandingizni yaxshiroq tushuning.',
  keywords: SITE_KEYWORDS,
  alternates: { canonical: '/' },
  openGraph: {
    title: `Farzand tarbiyalash va bolalar psixologiyasi | ${SITE_NAME}`,
    description:
      'Farzand tarbiyalash bo‘yicha islomiy qadriyatlar va zamonaviy psixologiyaga asoslangan raqamli ta\'lim platformasi. 5 daqiqalik darslar, ertaklar va amaliy tavsiyalar.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'uz_UZ',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: `${SITE_NAME} — Farzand tarbiyalash` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `Farzand tarbiyalash va bolalar psixologiyasi | ${SITE_NAME}`,
    description: 'Farzand tarbiyalash bo‘yicha har kuni 5 daqiqalik audio va matnli darslar.',
    images: [DEFAULT_OG_IMAGE],
  },
};

const homeSchemaJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Farzand tarbiyalash va bolalar psixologiyasi platformasi | Farzandly',
      description:
        'Farzand tarbiyalash bo‘yicha islomiy qadriyatlar va zamonaviy bolalar psixologiyasiga asoslangan mikro-darslar, ertaklar va amaliy qo‘llanmalar.',
      inLanguage: 'uz',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: [
        { '@type': 'Thing', name: 'Farzand tarbiyalash' },
        { '@type': 'Thing', name: 'Farzand tarbiyasi' },
        { '@type': 'Thing', name: 'Bolalar psixologiyasi' },
        { '@type': 'Thing', name: 'Islomiy tarbiya' },
        { '@type': 'Thing', name: 'Ota-onalik ko‘nikmalari' },
        { '@type': 'Thing', name: 'Chaqaloq parvarishi' },
      ],
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Asosiy',
            item: SITE_URL,
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Farzand tarbiyalashda nimalarga ko‘proq e’tibor berish lozim?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Farzand tarbiyalashda ota-onaning shaxsiy ibrati, hissiy iliqlik, farzand bilan muntazam muloqot va uning yosh bosqichlariga mos talablar qo‘yish eng asosiy omillardir. Farzandly platformasi har kuni 5 daqiqa ichida amaliy va ilmiy tasdiqlangan tarbiya usullarini taqdim etadi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bolalardagi injiqlik (tantrum) paytida ota-ona qanday yo‘l tutishi kerak?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bolada injiqlik paydo bo‘lganda avvalo xotirjamlikni saqlash, baqirmaslik, uning hissiyotlarini tan olish (validatsiya) va xavfsiz muhitda tinchlanishiga ko‘maklashish lozim. Maxsus darslarimizda tantrum bilan ishlashning 4 bosqichli amaliy texnikasi o‘rgatiladi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Farzandly platformasi nima va uning asosiy maqsadi qanday?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Farzandly — o‘zbek ota-onalari uchun islomiy qadriyatlar va zamonaviy bolalar psixologiyasini uyg‘unlashtirgan innovatsion raqamli platforma. Unda har kuni o‘rganish mumkin bo‘lgan 5 daqiqalik darslar, ilmiy-amaliy maqolalar va bolalar uchun ibratli kontentlar jamlangan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Farzand tarbiyasida ekran vaqti va gadjetlarga qancha ruxsat berish mumkin?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'JSST (Jahon sog‘liqni saqlash tashkiloti) tavsiyasiga ko‘ra, 2 yoshgacha bo‘lgan bolalarga ekran tavsiya etilmaydi, 2-5 yoshdagi bolalar uchun kuniga 1 soatdan oshmasligi lozim. Farzandly’da gadjet qaramligining oldini olish bo‘yicha alohida darslar mavjud.',
          },
        },
        {
          '@type': 'Question',
          name: 'Platformadagi darslar va maqolalar bepulmi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ha, Farzandly platformasidagi 1–10-darslar, barcha asosiy tarbiya maqolalari hamda Bolalar olamidagi barcha ertaklar, she’rlar, topishmoqlar va maqollar mutlaqo bepul.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bolalar olami bo‘limida qanday materiallar bor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bolalar olami bo‘limida 15 ta sara o‘zbek xalq ertagi, fasllar va maktab haqidagi she’rlar, bolalar zehnini o‘stiruvchi topishmoqlar hamda 89 ta odob va axloq maqollari qulay ko‘rinishda jamlangan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Farzandly Telegram boti bilan qanday ishlaydi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Farzandly rasmiy Telegram boti orqali darslarni to‘g‘ridan-to‘g‘ri Telegram Mini App ichida o‘qish, kunlik eslatmalar olish va shaxsiy o‘sish ko‘rsatkichlarini kuzatib borish mumkin.',
          },
        },
      ],
    },
  ],
};

export default async function HomePage() {
  const [categories, ageGroups, sampleArticles] = await Promise.all([
    api.getCategories(),
    api.getAgeGroups(),
    api.getArticles(),
  ]);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 relative overflow-x-clip">
      {/* Schema.org WebPage & FAQ Rich Snippet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchemaJsonLd) }}
      />

      {/* Ambient background blur elements */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-64 right-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-8 sm:pt-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black shadow-xs">
                <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                <span><T k="home.1" /></span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-[1.15]">
                <T k="home.2" />{' '}
                <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">
                  <T k="home.3" /></span>{' '}
                <T k="home.4" /></h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                <T k="home.5" />{" "}<span className="font-bold text-slate-900"><T k="home.6" /></span>.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href={START_LESSON_HREF}
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-8 py-3.5 sm:py-4 gap-3 shadow-lg shadow-emerald-600/25 cursor-pointer"
                >
                  <span><T k="home.7" /></span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/darslar"
                  className="w-full sm:w-auto btn-outline text-base sm:text-lg px-7 py-3.5 sm:py-4 cursor-pointer"
                >
                  <T k="home.8" /></Link>
              </div>

              {/* Search */}
              <SearchForm className="max-w-xl mx-auto lg:mx-0" />

              {/* Social proof microcopy */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> <T k="home.9" /></span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> <T k="home.10" /></span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> <T k="home.11" /></span>
              </div>
            </div>

            {/* Right Card / Interactive Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-3xl border-2 border-slate-200 border-b-8 shadow-xl p-6 sm:p-7 relative">
                {/* Floating Streak Badge */}
                <div className="absolute -top-4 -right-2 bg-amber-500 text-white font-black text-xs px-3.5 py-1.5 rounded-full border-b-2 border-amber-700 flex items-center gap-1.5 shadow-md">
                  <Flame className="w-4 h-4 fill-white animate-bounce" />
                  <span><T k="home.12" /></span>
                </div>

                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Baby className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-600"><T k="home.13" /></span>
                    <h3 className="text-lg font-black text-slate-800"><T k="home.14" /></h3>
                  </div>
                </div>

                <div className="py-4 space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                    <p className="font-bold text-emerald-800"><T k="home.15" /></p>
                    <p><T k="home.16" /></p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                    <p className="font-bold text-amber-800"><T k="home.17" /></p>
                    <p><T k="home.18" /></p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/dars/dars-1-tarbiyaning-ahamiyati-1-qism"
                    className="w-full btn-primary text-sm sm:text-base py-3.5 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span><T k="home.19" /></span>
                    <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AGE SELECTION (YOSH GURUHLARI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-widest font-black text-emerald-700"><T k="home.20" /></p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800"><T k="home.21" /></h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            <T k="home.22" /></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ageGroups.map((ag) => (
            <Link
              key={ag.code}
              href={`/darslar?ageGroup=${ag.code}`}
              className="card-farzandly p-5 text-center group hover:border-emerald-500 hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Baby className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800"><Tr data={ag.translations} field="title" fb={ag.title} /></h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed"><Tr data={ag.translations} field="description" fb={ag.description} /></p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                <span><T k="home.23" /></span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. POPULAR PROBLEMS (OTA-ONALAR NIMALARNI O‘RGANMOQDA?) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-widest font-black text-emerald-700"><T k="home.24" /></p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800"><T k="home.25" /></h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            <T k="home.26" /></p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href=""
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600"><T k="home.27" /></span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              <T k="home.28" /></h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              <T k="home.29" /></p>
          </Link>

          <Link
            href=""
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Smile className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600"><T k="home.30" /></span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              <T k="home.31" /></h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              <T k="home.32" /></p>
          </Link>

          <Link
            href=""
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600"><T k="home.33" /></span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              <T k="home.34" /></h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              <T k="home.35" /></p>
          </Link>

          <Link
            href=""
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600"><T k="home.36" /></span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              <T k="home.37" /></h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              <T k="home.38" /></p>
          </Link>

          <Link
            href=""
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600"><T k="home.39" /></span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              <T k="home.40" /></h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              <T k="home.41" /></p>
          </Link>

          <Link
            href=""
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600"><T k="home.42" /></span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              <T k="home.43" /></h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              <T k="home.44" /></p>
          </Link>
        </div>
      </section>

      {/* 4. HOW IT WORKS (3 QADAMDA O‘RGANING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-8 sm:p-12">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-emerald-700"><T k="home.45" /></span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800"><T k="home.46" /></h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
              <T k="home.47" /></p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-100 text-emerald-800 border-2 border-emerald-300 flex items-center justify-center font-black text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800"><T k="home.48" /></h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                <T k="home.49" /></p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-sky-100 text-sky-800 border-2 border-sky-300 flex items-center justify-center font-black text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800"><T k="home.50" /></h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                <T k="home.51" /></p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-amber-800 border-2 border-amber-300 flex items-center justify-center font-black text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800"><T k="home.52" /></h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                <T k="home.53" /></p>
            </div>
          </div>
        </div>
      </section>

      {/* BOLALAR OLAMI SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 rounded-3xl border-2 border-emerald-200/80 p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-100 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                <Baby className="w-3.5 h-3.5" />
                <span>Yangi bo‘lim</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
                Bolalar olami: Ertaklar, She’rlar va Topishmoqlar
              </h2>
              <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                Farzandingiz bilan unumli vaqt o‘tkazish, birgalikda mutolaa qilish hamda zehnini o‘stirish uchun eng sara xazina.
              </p>
            </div>

            <Link
              href="/bolalar"
              className="btn-primary text-xs sm:text-sm py-3 px-5 inline-flex items-center gap-2 self-start md:self-auto shrink-0 shadow-sm"
            >
              <span>Barchasini ko‘rish</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/bolalar?tab=ertaklar"
              className="bg-white rounded-2xl border border-slate-200/90 p-6 hover:border-emerald-500 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-black group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-800 group-hover:text-emerald-700 transition-colors">
                  10 ta Ibratli ertak
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  «Ochko‘z bo‘ri», «Boylik topgan bola», «Toshbaqaning hikoyasi» kabi bolaga axloq va hikmat ulashuvchi milliy ertaklar.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span>Ertaklarni mutolaa qilish</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/bolalar?tab=sherlar"
              className="bg-white rounded-2xl border border-slate-200/90 p-6 hover:border-emerald-500 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center font-black group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-800 group-hover:text-emerald-700 transition-colors">
                  46 ta Bolalar she’ri
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  To‘rt fasl (bahor, yoz, kuz, qish), maktab, odob-axloq va matematika haqida ifodali yod olinadigan she’rlar.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span>She’rlarni o‘qish</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/bolalar?tab=topishmoqlar"
              className="bg-white rounded-2xl border border-slate-200/90 p-6 hover:border-emerald-500 hover:shadow-md hover:-translate-y-1 transition-all group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center font-black group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <HelpCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-800 group-hover:text-emerald-700 transition-colors">
                  Hayvonlar haqida topishmoqlar
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Interaktiv ochiladigan javoblar, «Tasodifiy topishmoq» o‘yini va zehnni charxlovchi 15 ta qiziqarli topishmoq.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span>Topishmoqlarni topish</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. VISUAL LEARNING PATH PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-700"><T k="home.54" /></span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800"><T k="home.55" /></h2>
          <p className="text-sm text-slate-500">
            <T k="home.56" /></p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase"><T k="home.57" /></span>
              <h3 className="text-lg font-black text-slate-800"><T k="home.58" /></h3>
            </div>
            <Link href="/dashboard" className="btn-outline text-xs px-3.5 py-2">
              <T k="home.59" /></Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-amber-400 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" />
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold animate-pulse">
                ▶
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-amber-600"><T k="home.60" /></span>
                <h4 className="font-bold text-slate-800 text-sm"><T k="home.61" /></h4>
              </div>
              <Link href={START_LESSON_HREF} className="btn-primary text-xs px-3.5 py-2">
                <T k="home.62" /></Link>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-200">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-emerald-700"><T k="home.63" /></span>
                <h4 className="font-bold text-slate-800 text-sm"><T k="home.64" /></h4>
              </div>
              <Link href="/dars/dars-2-tarbiyaning-ahamiyati-2-qism" className="btn-outline text-xs px-3.5 py-2">
                <T k="home.65" /></Link>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center font-bold">
                🔒
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-600"><T k="home.66" /></span>
                <h4 className="font-bold text-slate-700 text-sm"><T k="home.67" /></h4>
              </div>
              <Link href="/premium" className="text-xs font-bold text-amber-700 hover:underline">
                <T k="home.68" /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-800"><T k="home.69" /></h2>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
          <T k="home.70" /></p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href={START_LESSON_HREF} className="w-full sm:w-auto btn-primary text-base px-8 py-3.5 gap-2 shadow-lg shadow-emerald-600/25">
            <span><T k="home.71" /></span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          {BOT_USERNAME && (
            <a
              href={`https://t.me/${BOT_USERNAME}?start=eslatma`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto btn-secondary text-base px-8 py-3.5"
            >
              <T k="home.72" /></a>
          )}
        </div>
      </section>

      {/* 6. PREMIUM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 border-4 border-emerald-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black shadow-xs">
              <Crown className="w-4 h-4 fill-slate-950" />
              <span><T k="home.73" /></span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              <T k="home.74" /></h2>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
              <T k="home.75" />{" "}<span className="font-bold text-amber-300"><T k="home.76" /></span> <T k="home.77" /></p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/premium"
                className="w-full sm:w-auto btn-gold text-sm sm:text-base px-8 py-3.5 inline-flex items-center justify-center gap-2 text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <span><T k="home.78" /></span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-emerald-200 font-semibold">
                <T k="home.79" /></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
