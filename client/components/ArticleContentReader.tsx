'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Crown, Lock, Sparkles, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Article } from '@/lib/api';
import ArticleCompleteButton from '@/components/ArticleCompleteButton';
import PaymentModal from '@/components/PaymentModal';

interface ArticleContentReaderProps {
  article: Article;
}

export default function ArticleContentReader({ article }: ArticleContentReaderProps) {
  const { user } = useAuth();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const isLocked = Boolean(article.isPremium && !user?.isPremium);

  // If locked, get teaser preview (first 2 paragraphs)
  const paragraphs = article.content.split('\n\n');
  const teaserContent = paragraphs.slice(0, 2).join('\n\n');

  if (!isLocked) {
    return (
      <div className="space-y-6">
        <div className="prose prose-slate max-w-none space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line">
          {article.content}
        </div>

        {/* Gamification: Earn XP for reading */}
        <div className="pt-2">
          <ArticleCompleteButton articleSlug={article.slug} />
        </div>
      </div>
    );
  }

  // Locked Premium Article State
  return (
    <div className="space-y-6 relative">
      {/* Teaser content */}
      <div className="prose prose-slate max-w-none text-slate-700 text-base sm:text-lg leading-relaxed font-normal whitespace-pre-line select-none">
        {teaserContent}
      </div>

      {/* Blurred fade-out and Paywall Card */}
      <div className="relative pt-8 pb-4">
        {/* Gradient backdrop */}
        <div className="absolute -top-24 left-0 right-0 h-28 bg-gradient-to-t from-[#FAF7F2] via-[#FAF7F2]/90 to-transparent pointer-events-none" />

        <div className="relative bg-white rounded-3xl border-2 border-amber-400 border-b-8 shadow-2xl p-6 sm:p-10 space-y-6 text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 border-2 border-amber-300 mx-auto flex items-center justify-center shadow-inner">
            <Crown className="w-7 h-7 fill-amber-700" />
          </div>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-300 px-3.5 py-1 rounded-full">
              <Lock className="w-3.5 h-3.5" />
              <span>PREMIUM KONTENT</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Maqolaning to‘liq qismi Premium obunachilar uchun
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Ushbu ilmiy-amaliy maqola va uning ichidagi qadam-baqadam tavsiyalarni to‘liq o‘qish uchun Farzandly Premium kontentni faollashtiring.
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-left space-y-2">
            <div className="text-xs text-amber-900 font-bold uppercase tracking-wider">Tariflar:</div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-800 font-bold">
              <span>Oylik to‘lov:</span>
              <span className="text-emerald-700 font-black">219 000 so‘m / oy</span>
            </div>
            <div className="flex items-center justify-between text-xs sm:text-sm text-slate-800 font-bold">
              <span>Yillik to‘lov (tejamkor):</span>
              <span className="text-emerald-700 font-black">oyiga 179 000 so‘m</span>
            </div>
            <div className="text-[11px] text-slate-500 pt-1 border-t border-amber-200/60">
              Karta: <span className="font-mono font-bold text-slate-700">5614 6819 0401 4390</span> • Chekni yuborish: <span className="font-bold text-slate-700">t.me/dadakhonov</span>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="button"
              onClick={() => setShowPaymentModal(true)}
              className="w-full btn-gold text-sm sm:text-base py-3.5 flex items-center justify-center gap-2 text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/25"
            >
              <Crown className="w-4 h-4 fill-slate-950" />
              <span>Premium kontentni faollashtirish</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/maqolalar/islomda-farzand-tarbiyasining-5-oltin-qoidasi"
              className="w-full btn-outline text-xs sm:text-sm py-3 flex items-center justify-center gap-2"
            >
              <span>Bepul maqolani o‘qish (5 oltin qoida)</span>
            </Link>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
      />
    </div>
  );
}
