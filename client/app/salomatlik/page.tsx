import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  Activity,
  ArrowRight,
  Clock,
  Baby,
  Stethoscope,
  Award,
} from 'lucide-react';
import { healthTopics as defaultTopics } from '@/lib/healthData';
import { api } from '@/lib/api';
import DigestiveDiagram from '@/components/DigestiveDiagram';
import HealthCatalogList from '@/components/HealthCatalogList';
import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';

export default async function SalomatlikHubPage() {
  let topics = defaultTopics;
  try {
    const res = await api.getHealthTopics('uz');
    if (res && res.data && res.data.length > 0) {
      topics = res.data;
    }
  } catch (e) {
    // fallback to static list
  }

  // Find "burp" or first topic as spotlight
  const featured =
    topics.find((t) => t.slug === 'burp-ovqat-hazm-qilish-tizimi') ||
    topics[0];

  const itemListJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Salomatlik va tana sirlari ensiklopediyasi',
    itemListElement: topics.map((topic, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      url: absoluteUrl(`/salomatlik/${topic.slug}`),
      name: topic.titleUz,
      description: topic.subtitleUz,
    })),
  };

  return (
    <div className="space-y-12 sm:space-y-20 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-gradient-to-b from-emerald-50 via-white to-transparent pt-10 sm:pt-14 pb-8 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-emerald-100/90 border border-emerald-300 text-emerald-800 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black shadow-xs">
            <Stethoscope className="w-4 h-4 text-emerald-700" />
            <span>Tana sirlari va bolalar salomatligi ensiklopediyasi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight max-w-4xl mx-auto leading-tight">
            Farzandingiz tanasi qanday ishlaydi?{' '}
            <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">
              Sodda va qiziqarli!
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            Nega inson kekiradi? Bosh miya fikrlarni qanday boshqaradi? Yurak kuniga necha marta uradi?
            Bolalar va ota-onalar uchun tana a’zolari, fiziologiya va sog‘lom odatlar bo‘yicha ilmiy-ommabop qo‘llanmalar.
          </p>

          {/* Trust badge */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-500">
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Tibbiyot mutaxassislari tomonidan tasdiqlangan</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Har bir test uchun +10 XP tajriba ballari</span>
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1.5 rounded-xl shadow-xs">
              <Baby className="w-4 h-4 text-emerald-600" />
              <span>Bolalar va ota-onalar tushunadigan tilda</span>
            </span>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SPOTLIGHT */}
      {featured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 via-teal-700 to-emerald-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 bg-emerald-500/30 border border-emerald-300/40 text-emerald-100 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
                  <Activity className="w-3.5 h-3.5 text-amber-300" />
                  <span>Mavzu: {featured.systemUz}</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                  {featured.titleUz}
                </h2>

                <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                  {featured.subtitleUz}
                </p>

                {/* Fast facts snippets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 text-xs text-emerald-100">
                    <span className="font-black text-white block mb-0.5">💨 Tana jarayonlari:</span>
                    Azot, kislorod va gazli ichimliklardagi karbonat angidrid.
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/15 text-xs text-emerald-100">
                    <span className="font-black text-white block mb-0.5">🫁 Harakat yo‘li:</span>
                    Oshqozon ➔ Qizilo‘ngach ➔ Og‘iz orqali tabiiy chiqish.
                  </div>
                </div>

                <div className="pt-3">
                  <Link
                    href={`/salomatlik/${featured.slug}`}
                    className="btn-primary bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-6 py-3.5 text-sm sm:text-base inline-flex items-center gap-2 shadow-lg shadow-black/10 cursor-pointer"
                  >
                    <span>Mavzuni to‘liq o‘qish</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right preview card */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-2xl text-slate-800 max-w-sm w-full border-2 border-emerald-400">
                  <div className="relative w-full h-52 rounded-xl overflow-hidden mb-4 bg-slate-100">
                    <Image
                      src={featured.heroImage || '/body basics/digestivesystem-enss-1.jpg'}
                      alt="Anatomik tuzilishi"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                      Anatomik tuzilishi
                    </span>
                    <h3 className="font-black text-slate-900 text-base">
                      Qizilo‘ngach va oshqozon: Kekirik qanday yo‘l bosib o‘tadi?
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2">
                      Kekirish — bu oshqozondagi ortiqcha gazning qizilo‘ngach orqali chiqishi bo‘lib, butunlay tabiiy jarayondir.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. INTERACTIVE ANATOMY DIAGRAM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full">
            Interaktiv xarita
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800">
            Hazm qilish a’zolari qanday ishlaydi?
          </h2>
          <p className="text-sm sm:text-base text-slate-500">
            A’zolarni bosib, taom va gazlar tana bo‘ylab qanday harakatlanishini o‘rganing.
          </p>
        </div>

        <DigestiveDiagram highlightOrgan="esophagus" lang="uz" />
      </section>

      {/* 4. HEALTH TOPICS CATALOG WITH PAGINATION & DEFAULT PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="border-b border-slate-200 pb-4">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-800">Barcha mavzular</h2>
          <p className="text-xs sm:text-sm text-slate-500">Tana a’zolari, fiziologiya va gigiyena bo‘yicha to‘liq qo‘llanmalar</p>
        </div>

        <HealthCatalogList topics={topics} itemsPerPage={6} />
      </section>

      {/* 5. DID YOU KNOW FUN FACTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white">
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-black">
              Qiziqarli tibbiy faktlar
            </span>
            <h2 className="text-2xl sm:text-3xl font-black">
              Tanamiz haqida buni bilarmidingiz?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-2xl">🧠</span>
              <h4 className="font-bold text-sm text-amber-300">Bosh miya quvvati</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Miyamizda 86 milliarddan ortiq neyronlar mavjud bo‘lib, ular orqali signallar soatiga 400 kilometrdan tezroq harakatlanadi!
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-2xl">❤️</span>
              <h4 className="font-bold text-sm text-rose-300">Yurakning charchamas mehnati</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inson yuragi bir kunda o‘rtacha 100 000 marta uradi va qariyb 7 500 litr qonni butun vujud bo‘ylab haydab beradi.
              </p>
            </div>

            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-2xl">💨</span>
              <h4 className="font-bold text-sm text-emerald-300">Kekirik va gazlar</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Kekirik — oshqozondagi ortiqcha azot, kislorod yoki karbonat angidrid gazlarining qizilo‘ngach orqali chiqishi bo‘lib, butunlay tabiiydir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
