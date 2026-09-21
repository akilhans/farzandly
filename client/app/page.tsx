import React from 'react';
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
} from 'lucide-react';
import { api } from '@/lib/api';

export default async function HomePage() {
  const [categories, ageGroups, sampleArticles] = await Promise.all([
    api.getCategories(),
    api.getAgeGroups(),
    api.getArticles(),
  ]);

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 relative">
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
                <span>1–10-darslar va asosiy qo‘llanmalar 100% bepul</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight leading-[1.15]">
                Farzand tarbiyasi —{' '}
                <span className="text-emerald-600 underline decoration-emerald-300 decoration-wavy decoration-2">
                  har kuni
                </span>{' '}
                o‘rganiladigan yo‘l.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Islomiy qadriyatlar, zamonaviy bolalar psixologiyasi va amaliy mashqlar orqali farzandingizni yaxshiroq tushunishni o‘rganing. Katta kitoblar o‘rniga har kuni atigi <span className="font-bold text-slate-900">5 daqiqa</span>.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link
                  href="/onboarding"
                  className="w-full sm:w-auto btn-primary text-base sm:text-lg px-8 py-3.5 sm:py-4 gap-3 shadow-lg shadow-emerald-600/25 cursor-pointer"
                >
                  <span>Hoziroq bepul boshlang</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/kurslar"
                  className="w-full sm:w-auto btn-outline text-base sm:text-lg px-7 py-3.5 sm:py-4 cursor-pointer"
                >
                  Dastur bilan tanishish
                </Link>
              </div>

              {/* Social proof microcopy */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Jazolarsiz tarbiya
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Sahih Islomiy manbalar
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Mutlaqo bepul darslar
                </span>
              </div>
            </div>

            {/* Right Card / Interactive Preview */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-3xl border-2 border-slate-200 border-b-8 shadow-xl p-6 sm:p-7 relative">
                {/* Floating Streak Badge */}
                <div className="absolute -top-4 -right-2 bg-amber-500 text-white font-black text-xs px-3.5 py-1.5 rounded-full border-b-2 border-amber-700 flex items-center gap-1.5 shadow-md">
                  <Flame className="w-4 h-4 fill-white animate-bounce" />
                  <span>3 KUNLIK STREAK</span>
                </div>

                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center text-emerald-600">
                    <Baby className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-600">Bugungi 5 daqiqa</span>
                    <h3 className="text-lg font-black text-slate-800">1-Dars: Tarbiyaning ahamiyati</h3>
                  </div>
                </div>

                <div className="py-4 space-y-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                    <p className="font-bold text-emerald-800">💡 Dars maqsadi:</p>
                    <p>Farzand — Alloh taolo omonati va eng katta sarmoyadir. Tarbiya har kuni uzluksiz beriladi.</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-xs sm:text-sm text-amber-900 space-y-1">
                    <p className="font-bold text-amber-800">📖 Hadisi sharif:</p>
                    <p>«Farzandingizga go‘zal odobdan ko‘ra afzalroq narsa berolmaysiz» (Termiziy).</p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/dars/dars-1-tarbiyaning-ahamiyati-1-qism"
                    className="w-full btn-primary text-sm sm:text-base py-3.5 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>1-darsni bepul boshlash (+10 XP)</span>
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
          <p className="text-xs uppercase tracking-widest font-black text-emerald-700">Shaxsiylashtirilgan yondashuv</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800">Farzandingiz nechchi yoshda?</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Har bir yoshning o‘z psixologik inqirozi va tarbiya talabi bor. O‘z yosh guruhingizni tanlang:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {ageGroups.map((ag) => (
            <Link
              key={ag.code}
              href={`/onboarding?age=${ag.code}`}
              className="card-farzandly p-5 text-center group hover:border-emerald-500 hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Baby className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-800">{ag.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{ag.description}</p>
                </div>
              </div>
              <div className="pt-4 mt-2 border-t border-slate-100 text-xs font-bold text-emerald-600 flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                <span>Darslarni ko‘rish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 3. POPULAR PROBLEMS (OTA-ONALAR NIMALARNI O‘RGANMOQDA?) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <p className="text-xs uppercase tracking-widest font-black text-emerald-700">Kundalik hayotiy vaziyatlar</p>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800">Ota-onalar nimani ko‘proq o‘rganmoqda?</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
            Haqiqiy muammolar, amaliy yechimlar va xotirjamlik:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Link
            href="/maqolalar/bola-gapga-quloq-solmasa"
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Muloqot</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              Bola gapga quloq solmasa
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Oshxonadan baqirish o‘rniga bolaning diqqatini jalb qilish va eshittirish sirlari.
            </p>
          </Link>

          <Link
            href="/maqolalar/bolalarda-tantrum-va-injiqlik"
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Smile className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Hissiyotlar</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              Injiqlik va tantrumlar
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Yerga yotib olib dodlayotgan bolaning asab tizimini xotirjam qilish yo‘llari.
            </p>
          </Link>

          <Link
            href="/maqolalar/bola-telefonni-tashlamasa"
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Texnologiya</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              Telefon va ekran vaqti
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Janjalsiz va yig‘ilarsiz smartfonni cheklash va muqobil foydali mashg‘ulot berish.
            </p>
          </Link>

          <Link
            href="/maqolalar/bolani-urmasdan-tarbiyalash"
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Intizom</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              Urmasdan va baqirmasdan tartib
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Jazolarsiz, tabiiy oqibatlar va mehr bilan chegaralarni belgilash qoidalari.
            </p>
          </Link>

          <Link
            href="/maqolalar/bolani-namozga-muhabbat-bilan-orgatish"
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Islomiy tarbiya</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              Namozga muhabbat uyg‘otish
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Majburlamasdan, shirin xotiralar va go‘zal ibrat orqali ibodatga muhabbat solish.
            </p>
          </Link>

          <Link
            href="/maqolalar/3-yoshli-bola-tarbiyasi"
            className="card-farzandly p-6 group hover:border-emerald-500 transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">3 yosh inqirozi</span>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-emerald-700 transition-colors">
              «Men o‘zim!» qaysarligi
            </h3>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Mustaqillikka intilayotgan bolaning xohishlarini to‘g‘ri yo‘naltirish usullari.
            </p>
          </Link>
        </div>
      </section>

      {/* 4. HOW IT WORKS (3 QADAMDA O‘RGANING) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-8 sm:p-12">
          <div className="text-center space-y-2 mb-10">
            <span className="text-xs uppercase tracking-widest font-black text-emerald-700">Metodika</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-800">3 qadamda o‘rganing</h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto">
              Farzandly murakkab nazariyalarni kundalik amaliy harakatga aylantiradi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-emerald-100 text-emerald-800 border-2 border-emerald-300 flex items-center justify-center font-black text-2xl">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800">Farzandingizni tushuning</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Bolaning miyasi nima uchun shunday javob qaytarganini ilmiy va Islomiy tomondan anglab oling.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-sky-100 text-sky-800 border-2 border-sky-300 flex items-center justify-center font-black text-2xl">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800">Yangi usulni o‘rganing</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Baqirmasdan va urmasdan qat’iy chegara qo‘yishning 3 qadamli formulasini ko‘rib chiqing.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-amber-100 text-amber-800 border-2 border-amber-300 flex items-center justify-center font-black text-2xl">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800">Bugun amalda sinang</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                O‘rganganingizni shu kunning o‘zida bolangiz bilan sinab ko‘ring, XP yig‘ing va odatga aylantiring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. VISUAL LEARNING PATH PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-700">Duolingo tamoyili</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-800">Bugungi darsingiz va O‘quv yo‘li</h2>
          <p className="text-sm text-slate-500">
            Har bir bosqichni muvaffaqiyatli yakunlab, tajribali ota-ona maqomiga erishing.
          </p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase">1-bosqich: Tarbiya asoslari</span>
              <h3 className="text-lg font-black text-slate-800">Islomda farzand tarbiyasining poydevori</h3>
            </div>
            <Link href="/dashboard" className="btn-outline text-xs px-3.5 py-2">
              Xaritaga o‘tish
            </Link>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                ✓
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-emerald-700">1-DARS • TAMOMLANDI</span>
                <h4 className="font-bold text-slate-800 text-sm">Tarbiyaning ahamiyati (1-qism)</h4>
              </div>
              <span className="text-xs font-bold text-emerald-700">+10 XP</span>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border-2 border-amber-400 shadow-sm relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500" />
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold animate-pulse">
                ▶
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-amber-600">2-DARS • NAVBATDAGI DARS</span>
                <h4 className="font-bold text-slate-800 text-sm">Tarbiyaning ahamiyati (2-qism)</h4>
              </div>
              <Link
                href="/dars/dars-2-tarbiyaning-ahamiyati-2-qism"
                className="btn-primary text-xs px-3.5 py-2"
              >
                Boshlash
              </Link>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 opacity-70">
              <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-500 flex items-center justify-center font-bold">
                🔒
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold text-slate-600">3-DARS • QULFLANGAN</span>
                <h4 className="font-bold text-slate-700 text-sm">Tarbiyaning ahamiyati (3-qism)</h4>
              </div>
              <span className="text-xs font-bold text-slate-600">+10 XP</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PREMIUM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 text-white p-8 sm:p-12 border-4 border-emerald-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full text-xs font-black shadow-xs">
              <Crown className="w-4 h-4 fill-slate-950" />
              <span>PREMIUM KONTENT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
              Farzandingiz kelajagiga eng afzal sarmoya
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-medium">
              Barcha 66 ta dars, Fitrat pedagogikasi, Rahimov School tajribasi va 30 buyuk mutafakkir ensiklopediyasi. Yillik obunada <span className="font-bold text-amber-300">oyiga atigi 179 000 so‘m</span> (yoki oylik 219 000 so‘m).
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/premium"
                className="w-full sm:w-auto btn-gold text-sm sm:text-base px-8 py-3.5 inline-flex items-center justify-center gap-2 text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/20"
              >
                <span>Premium kontentni faollashtirish</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="text-xs text-emerald-200 font-semibold">
                To‘lov: 5614 6819 0401 4390 • t.me/dadakhonov
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
