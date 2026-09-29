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
import { Sequence, Stagger, Item, Marker, Tilt, Magnetic, Parallax, DrawLine, Unveil } from '@/components/motion';
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

const PROBLEMS = [
  { icon: Users, tint: 'bg-blue-50 text-blue-600', k: [27, 28, 29] },
  { icon: Smile, tint: 'bg-amber-50 text-amber-600', k: [30, 31, 32] },
  { icon: Smartphone, tint: 'bg-purple-50 text-purple-600', k: [33, 34, 35] },
  { icon: ShieldCheck, tint: 'bg-emerald-50 text-emerald-600', k: [36, 37, 38] },
  { icon: BookOpen, tint: 'bg-teal-50 text-teal-600', k: [39, 40, 41] },
  { icon: Heart, tint: 'bg-rose-50 text-rose-600', k: [42, 43, 44] },
];

const STEPS = [
  { n: 1, tint: 'bg-emerald-100 text-emerald-800 border-emerald-300', k: [48, 49] },
  { n: 2, tint: 'bg-sky-100 text-sky-800 border-sky-300', k: [50, 51] },
  { n: 3, tint: 'bg-amber-100 text-amber-800 border-amber-300', k: [52, 53] },
];

const KIDS = [
  {
    href: '/bolalar?tab=ertaklar',
    icon: BookOpen,
    tile: 'bg-emerald-50 border-emerald-200 text-emerald-600 group-hover:bg-emerald-600',
    title: '10 ta Ibratli ertak',
    body: '«Ochko‘z bo‘ri», «Boylik topgan bola», «Toshbaqaning hikoyasi» kabi bolaga axloq va hikmat ulashuvchi milliy ertaklar.',
    cta: 'Ertaklarni mutolaa qilish',
  },
  {
    href: '/bolalar?tab=sherlar',
    icon: Heart,
    tile: 'bg-sky-50 border-sky-200 text-sky-600 group-hover:bg-sky-600',
    title: '46 ta Bolalar she’ri',
    body: 'To‘rt fasl (bahor, yoz, kuz, qish), maktab, odob-axloq va matematika haqida ifodali yod olinadigan she’rlar.',
    cta: 'She’rlarni o‘qish',
  },
  {
    href: '/bolalar?tab=topishmoqlar',
    icon: HelpCircle,
    tile: 'bg-amber-50 border-amber-200 text-amber-600 group-hover:bg-amber-600',
    title: 'Hayvonlar haqida topishmoqlar',
    body: 'Interaktiv ochiladigan javoblar, «Tasodifiy topishmoq» o‘yini va zehnni charxlovchi 15 ta qiziqarli topishmoq.',
    cta: 'Topishmoqlarni topish',
  },
];

function SectionHeading({ eyebrow, title, sub }: { eyebrow: number; title: number; sub: number }) {
  return (
    <Stagger className="text-center space-y-2 mb-8 sm:mb-12" stagger={0.08}>
      <Item>
        <p className="text-xs uppercase tracking-widest font-black text-emerald-700"><T k={`home.${eyebrow}`} /></p>
      </Item>
      <Item kind="mask">
        <h2 className="text-2xl sm:text-4xl font-black text-slate-800"><T k={`home.${title}`} /></h2>
      </Item>
      <Item>
        <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto"><T k={`home.${sub}`} /></p>
      </Item>
    </Stagger>
  );
}

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

      {/* 1. HERO SECTION — the one cinematic moment: copy unmasks line by line,
          the lesson card swings in from the right, then its contents assemble. */}
      <section className="relative pt-8 sm:pt-14">
        {/* Backdrop: dot field + concentric rings staging the lesson card; drifts on scroll (desktop). */}
        <Parallax speed={50} className="absolute inset-0 -z-10 pointer-events-none">
          <div className="dot-field absolute -top-10 right-0 w-full lg:w-3/5 h-[560px]" />
        </Parallax>
        <Parallax speed={90} className="hidden lg:block absolute -z-10 pointer-events-none right-[4%] top-4 w-[520px] h-[520px]">
          <div className="absolute inset-0 rounded-full border-2 border-emerald-200/70" />
          <div className="absolute inset-16 rounded-full border-2 border-dashed border-amber-200/80" />
          <div className="absolute inset-32 rounded-full bg-emerald-100/50" />
        </Parallax>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Sequence className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <Item kind="left">
                <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 text-emerald-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black shadow-xs">
                  <Heart className="w-4 h-4 text-emerald-600 fill-emerald-600" />
                  <span><T k="home.1" /></span>
                </div>
              </Item>

              <Item kind="mask">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-[1.15]">
                  <T k="home.2" />{' '}
                  <Marker delay={0.7}><T k="home.3" /></Marker>{' '}
                  <T k="home.4" />
                </h1>
              </Item>

              <Item>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  <T k="home.5" />{' '}<span className="font-bold text-slate-900"><T k="home.6" /></span>.
                </p>
              </Item>

              <Item>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                  <Magnetic className="w-full sm:w-auto">
                    <Link
                      href={START_LESSON_HREF}
                      className="group w-full sm:w-auto btn-primary text-base sm:text-lg px-8 py-3.5 sm:py-4 gap-3 shadow-lg shadow-emerald-600/25 cursor-pointer"
                    >
                      <span><T k="home.7" /></span>
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Magnetic>

                  <Link
                    href="/darslar"
                    className="w-full sm:w-auto btn-outline text-base sm:text-lg px-7 py-3.5 sm:py-4 cursor-pointer"
                  >
                    <T k="home.8" /></Link>
                </div>
              </Item>

              <Item>
                <SearchForm className="max-w-xl mx-auto lg:mx-0" />
              </Item>

              <Item>
                <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> <T k="home.9" /></span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> <T k="home.10" /></span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" /> <T k="home.11" /></span>
                </div>
              </Item>
            </div>

            {/* Right Card / Interactive Preview */}
            <Item kind="right" stagger={0.08} className="lg:col-span-5 flex justify-center">
              <Tilt className="w-full max-w-md">
                <div className="w-full bg-white rounded-3xl border-2 border-slate-200 border-b-8 shadow-xl p-6 sm:p-7 relative">
                  {/* Streak badge pops once the card has landed */}
                  <Item kind="pop" className="absolute -top-4 -right-2">
                    <div className="bg-amber-500 text-white font-black text-xs px-3.5 py-1.5 rounded-full border-b-2 border-amber-700 flex items-center gap-1.5 shadow-md">
                      <Flame className="w-4 h-4 fill-white" />
                      <span><T k="home.12" /></span>
                    </div>
                  </Item>

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
                    <Item kind="left">
                      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                        <p className="font-bold text-emerald-800"><T k="home.15" /></p>
                        <p><T k="home.16" /></p>
                      </div>
                    </Item>

                    <Item kind="left">
                      <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                        <p className="font-bold text-amber-800"><T k="home.17" /></p>
                        <p><T k="home.18" /></p>
                      </div>
                    </Item>
                  </div>

                  <Item className="pt-2">
                    <Link
                      href="/dars/dars-1-tarbiyaning-ahamiyati-1-qism"
                      className="w-full btn-primary text-sm sm:text-base py-3.5 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span><T k="home.19" /></span>
                      <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                    </Link>
                  </Item>
                </div>
              </Tilt>
            </Item>
          </Sequence>
        </div>
      </section>

      {/* 2. AGE SELECTION (YOSH GURUHLARI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={20} title={21} sub={22} />

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4" stagger={0.06}>
          {ageGroups.map((ag) => (
            <Item key={ag.code} className="h-full">
              <Link
                href={`/darslar?ageGroup=${ag.code}`}
                data-spotlight=""
                className="lift-card card-farzandly h-full p-5 text-center group hover:border-emerald-500 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="lift-icon w-14 h-14 mx-auto rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white">
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
            </Item>
          ))}
        </Stagger>
      </section>

      {/* 3. POPULAR PROBLEMS (OTA-ONALAR NIMALARNI O‘RGANMOQDA?) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={24} title={25} sub={26} />

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.06}>
          {PROBLEMS.map(({ icon: Icon, tint, k }) => (
            <Item key={k[0]} className="h-full">
              <Link
                href=""
                data-spotlight=""
                className="lift-card card-farzandly h-full block p-6 group hover:border-emerald-500"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`lift-icon w-10 h-10 rounded-xl flex items-center justify-center ${tint}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600"><T k={`home.${k[0]}`} /></span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
                  <T k={`home.${k[1]}`} /></h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  <T k={`home.${k[2]}`} /></p>
              </Link>
            </Item>
          ))}
        </Stagger>
      </section>

      {/* 4. HOW IT WORKS — a path draws across the three steps, each step lands on it. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-8 sm:p-12">
          <SectionHeading eyebrow={45} title={46} sub={47} />

          <div className="relative">
            <DrawLine className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-[3px] rounded-full bg-gradient-to-r from-emerald-300 via-sky-300 to-amber-300" />
            <Stagger className="relative grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.28} delay={0.25}>
              {STEPS.map(({ n, tint, k }) => (
                <div key={n} className="text-center space-y-3">
                  <Item kind="pop" className="w-16 h-16 mx-auto">
                    <div className={`w-16 h-16 rounded-3xl border-2 flex items-center justify-center font-black text-2xl ${tint}`}>
                      {n}
                    </div>
                  </Item>
                  <Item>
                    <h3 className="text-xl font-bold text-slate-800"><T k={`home.${k[0]}`} /></h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-3">
                      <T k={`home.${k[1]}`} /></p>
                  </Item>
                </div>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* BOLALAR OLAMI SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 via-white to-amber-50/50 rounded-3xl border-2 border-emerald-200/80 p-6 sm:p-10 space-y-8">
          <Stagger className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-emerald-100 pb-6">
            <div className="space-y-2">
              <Item kind="left">
                <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 bg-emerald-100/80 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  <Baby className="w-3.5 h-3.5" />
                  <span>Yangi bo‘lim</span>
                </div>
              </Item>
              <Item kind="mask">
                <h2 className="text-2xl sm:text-4xl font-black text-slate-800 tracking-tight">
                  Bolalar olami: Ertaklar, She’rlar va Topishmoqlar
                </h2>
              </Item>
              <Item>
                <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                  Farzandingiz bilan unumli vaqt o‘tkazish, birgalikda mutolaa qilish hamda zehnini o‘stirish uchun eng sara xazina.
                </p>
              </Item>
            </div>

            <Item kind="scale" className="self-start md:self-auto shrink-0">
              <Link
                href="/bolalar"
                className="group btn-primary text-xs sm:text-sm py-3 px-5 inline-flex items-center gap-2 shadow-sm"
              >
                <span>Barchasini ko‘rish</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Item>
          </Stagger>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.09}>
            {KIDS.map(({ href, icon: Icon, tile, title, body, cta }) => (
              <Item key={href} className="h-full">
                <Link
                  href={href}
                  data-spotlight=""
                  className="lift-card h-full bg-white rounded-2xl border border-slate-200/90 p-6 hover:border-emerald-500 group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`lift-icon w-12 h-12 rounded-2xl border flex items-center justify-center font-black group-hover:text-white ${tile}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-800 group-hover:text-emerald-700 transition-colors">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{body}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <span>{cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* 5. VISUAL LEARNING PATH PREVIEW — rows arrive in path order. */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <SectionHeading eyebrow={54} title={55} sub={56} />

        <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase"><T k="home.57" /></span>
              <h3 className="text-lg font-black text-slate-800"><T k="home.58" /></h3>
            </div>
            <Link href="/dashboard" className="btn-outline text-xs px-3.5 py-2">
              <T k="home.59" /></Link>
          </div>

          <Stagger className="space-y-4" stagger={0.14} amount={0.4}>
            <Item kind="left">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-amber-400 shadow-sm relative overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" />
                <div className="relative w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                  <span className="absolute inset-0 rounded-xl ring-2 ring-amber-400 animate-ping opacity-40" aria-hidden />
                  ▶
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-amber-600"><T k="home.60" /></span>
                  <h4 className="font-bold text-slate-800 text-sm"><T k="home.61" /></h4>
                </div>
                <Link href={START_LESSON_HREF} className="btn-primary text-xs px-3.5 py-2">
                  <T k="home.62" /></Link>
              </div>
            </Item>

            <Item kind="left">
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
            </Item>

            <Item kind="left">
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
            </Item>
          </Stagger>
        </div>
      </section>

      {/* FINAL CTA */}
      <Stagger className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <Item kind="mask">
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800"><T k="home.69" /></h2>
        </Item>
        <Item>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto"><T k="home.70" /></p>
        </Item>
        <Item>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Magnetic className="w-full sm:w-auto">
              <Link href={START_LESSON_HREF} className="group w-full sm:w-auto btn-primary text-base px-8 py-3.5 gap-2 shadow-lg shadow-emerald-600/25">
                <span><T k="home.71" /></span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Magnetic>
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
        </Item>
      </Stagger>

      {/* 6. PREMIUM BANNER — the dark panel opens out from a clip, then its copy follows. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Unveil className="rounded-3xl">
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 border-4 border-emerald-800 shadow-2xl relative overflow-hidden">
            <Parallax speed={40} className="hidden md:block absolute -right-24 -top-24 w-96 h-96 pointer-events-none">
              <div className="absolute inset-0 rounded-full border-2 border-emerald-700/50" />
              <div className="absolute inset-14 rounded-full border-2 border-dashed border-amber-400/30" />
            </Parallax>
            <Stagger className="relative max-w-2xl space-y-4" delay={0.35} stagger={0.1}>
              <Item kind="pop" className="inline-block">
                <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black shadow-xs">
                  <Crown className="w-4 h-4 fill-slate-950" />
                  <span><T k="home.73" /></span>
                </div>
              </Item>
              <Item kind="mask">
                <h2 className="text-2xl sm:text-4xl font-black tracking-tight"><T k="home.74" /></h2>
              </Item>
              <Item>
                <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
                  <T k="home.75" />{' '}<span className="font-bold text-amber-300"><T k="home.76" /></span> <T k="home.77" /></p>
              </Item>
              <Item>
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <Magnetic className="w-full sm:w-auto">
                    <Link
                      href="/premium"
                      className="group w-full sm:w-auto btn-gold text-sm sm:text-base px-8 py-3.5 inline-flex items-center justify-center gap-2 text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/20"
                    >
                      <span><T k="home.78" /></span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Magnetic>
                  <span className="text-xs text-emerald-200 font-semibold"><T k="home.79" /></span>
                </div>
              </Item>
            </Stagger>
          </div>
        </Unveil>
      </section>
    </div>
  );
}
