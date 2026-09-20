'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Crown,
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  BookOpen,
  Download,
} from 'lucide-react';

export default function PremiumPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const faqs = [
    {
      q: "Farzandly platformasi bepulmi?",
      a: "Ha! Barcha asosiy maqolalar, har bir kursning kirish darslari va boshlang‘ich o‘quv yo‘li mutlaqo bepul taqdim etiladi. Premium esa to‘liq chuqurlashtirilgan dasturlar, yuklab olinadigan qo‘llanmalar va audio formatlarni ochadi.",
    },
    {
      q: "Premium obunada Islomiy tarbiya darslari bormi?",
      a: "Albatta. Rasululloh (s.a.v.) sunnatlari, sahobalarning tarbiya uslublari va farzand haqlari bo‘yicha batafsil, ishonchli manbalarga asoslangan maxsus darslar kiritilgan.",
    },
    {
      q: "Obunani xohlagan payt bekor qilsam bo‘ladimi?",
      a: "Ha, istalgan vaqtda shaxsiy profilingiz orqali hech qanday to‘siqsiz obunani bekor qilishingiz mumkin.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1 rounded-full text-xs font-black">
          <Crown className="w-4 h-4 fill-amber-700" />
          <span>FARZANDLY PREMIUM</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
          Farzand tarbiyasiga eng yaxshi sarmoya
        </h1>
        <p className="text-sm sm:text-base text-slate-500">
          Farzandingizning hissiy xotirjamligi va kelajagi uchun to‘liq o‘quv tizimini oching.
        </p>

        {/* Toggle */}
        <div className="pt-4 flex items-center justify-center">
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex items-center gap-1 text-xs font-black">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl transition-all ${
                billingCycle === 'monthly' ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-500'
              }`}
            >
              Oylik to‘lov
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-500'
              }`}
            >
              <span>Yillik (35% tejash)</span>
              <span className="bg-amber-400 text-slate-900 text-[10px] px-1.5 py-0.5 rounded-md font-bold">
                TEJAMKOR
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* FREE TIER */}
        <div className="card-farzandly p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800">Bepul ta’lim</h3>
            <p className="text-xs text-slate-500">Boshlovchi ota-onalar uchun qulay tanlov</p>
            <div className="text-3xl font-black text-slate-800">
              0 <span className="text-sm font-bold text-slate-400">so‘m / umrbod</span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Barcha SEO maqolalarini cheklovsiz o‘qish</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Har bir kursning 1-boshlang‘ich darsi</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kunlik streak va XP to‘plash</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <X className="w-4 h-4 shrink-0" />
                <span className="line-through">To‘liq yopiq o‘quv yo‘llari</span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <X className="w-4 h-4 shrink-0" />
                <span className="line-through">Yuklab olinadigan PDF qo‘llanmalar</span>
              </li>
            </ul>
          </div>

          <Link href="/onboarding" className="w-full btn-outline text-sm py-3.5 text-center">
            Bepul boshlash
          </Link>
        </div>

        {/* PREMIUM TIER */}
        <div className="rounded-3xl bg-white border-2 border-amber-400 border-b-8 p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            Tavsiya etiladi
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span>Farzandly Premium</span>
              <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
            </h3>
            <p className="text-xs text-slate-500">Barcha yoshdagi bolalar uchun to‘liq tarbiya to‘plami</p>

            <div className="text-3xl font-black text-slate-800">
              {billingCycle === 'yearly' ? '32,500' : '49,000'}{' '}
              <span className="text-sm font-bold text-slate-400">so‘m / oyiga</span>
            </div>
            {billingCycle === 'yearly' && (
              <p className="text-xs font-bold text-emerald-600">
                Yiliga 390,000 so‘m bir martalik to‘lov
              </p>
            )}

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold">Barcha kurslar va o‘quv yo‘llari to‘liq ochiq</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Kengaytirilgan Islomiy tarbiya darslari</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Har bir dars uchun amaliy oilaviy mashqlar</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Yuklab olinadigan PDF qo‘llanma va cheklistlar</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Shaxsiy rivojlanish tahlili va yutuqlar</span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => alert("Farzandly Premium to'lov tizimi tez orada ishga tushiriladi! Hozircha bepul darslardan bahramand bo'ling.")}
            className="w-full btn-gold text-sm py-3.5 flex items-center justify-center gap-2"
          >
            <span>Premiumni faollashtirish</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 space-y-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-black text-slate-800 text-center">
          Ko‘p beriladigan savollar
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-800 text-sm">{faq.q}</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
