'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { m } from 'framer-motion';
import {
  Crown,
  Check,
  X,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
  BookOpen,
  Sparkles,
  Copy,
  CheckCheck,
  Send,
  Lock,
} from 'lucide-react';
import PaymentModal from '@/components/PaymentModal';
import { START_LESSON_HREF } from '@/lib/site';
import { T } from '@/components/T';
import { useI18n } from '@/context/LanguageContext';

export default function PremiumPage() {
  const { t } = useI18n();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const cardNumber = '5614 6819 0401 4390';

  const handleCopyCard = () => {
    navigator.clipboard.writeText(cardNumber.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const faqs = [1, 2, 3, 4].map((n) => ({ q: t(`prem.faq${n}.q`), a: t(`prem.faq${n}.a`) }));

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1 rounded-full text-xs font-black">
          <Crown className="w-4 h-4 fill-amber-700" />
          <span><T k="prem.1" /></span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-800 tracking-tight">
          <T k="prem.2" /></h1>
        <p className="text-sm sm:text-base text-slate-600 font-medium">
          <T k="prem.3" /></p>

        {/* Toggle */}
        <div className="pt-4 flex items-center justify-center">
          <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 inline-flex items-center gap-1 text-xs font-black">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 rounded-xl transition-all cursor-pointer font-bold ${
                billingCycle === 'monthly'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <T k="prem.4" /></button>
            <button
              type="button"
              onClick={() => setBillingCycle('yearly')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer font-bold ${
                billingCycle === 'yearly'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span><T k="prem.5" /></span>
              <span className={`text-[10px] px-2 py-0.5 rounded-md font-black ${
                billingCycle === 'yearly'
                  ? 'bg-amber-400 text-slate-950'
                  : 'bg-emerald-100 text-emerald-800'
              }`}>
                <T k="prem.6" /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* FREE TIER */}
        <div className="card-farzandly p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800"><T k="prem.7" /></h3>
            <p className="text-xs text-slate-500"><T k="prem.8" /></p>
            <div className="text-3xl font-black text-slate-800">
              0 <span className="text-sm font-bold text-slate-400"><T k="prem.9" /></span>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-slate-800"><T k="prem.10" /></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><T k="prem.11" /></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><T k="prem.12" /></span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Lock className="w-4 h-4 shrink-0 text-slate-400" />
                <span className="line-through"><T k="prem.13" /></span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Lock className="w-4 h-4 shrink-0 text-slate-400" />
                <span className="line-through"><T k="prem.14" /></span>
              </li>
              <li className="flex items-center gap-2.5 text-slate-400">
                <Lock className="w-4 h-4 shrink-0 text-slate-400" />
                <span className="line-through"><T k="prem.15" /></span>
              </li>
            </ul>
          </div>

          <Link href={START_LESSON_HREF} className="w-full btn-outline text-sm py-3.5 text-center">
            <T k="prem.16" /></Link>
        </div>

        {/* PREMIUM TIER */}
        <div className="rounded-3xl bg-white border-2 border-amber-400 border-b-8 p-8 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-amber-400 text-slate-950 font-black text-[10px] uppercase px-3 py-1 rounded-bl-xl tracking-wider">
            <T k="prem.17" /></div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              <span><T k="prem.18" /></span>
              <Crown className="w-5 h-5 text-amber-500 fill-amber-500" />
            </h3>
            <p className="text-xs text-slate-500"><T k="prem.19" /></p>

            <div className="text-3xl font-black text-slate-900">
              {billingCycle === 'yearly' ? '179 000' : '219 000'}{' '}
              <span className="text-sm font-bold text-slate-400"><T k="prem.20" /></span>
            </div>
            {billingCycle === 'yearly' ? (
              <p className="text-xs font-bold text-emerald-600">
                <T k="prem.21" /></p>
            ) : (
              <p className="text-xs font-bold text-slate-500">
                <T k="prem.22" /></p>
            )}

            <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pt-4 border-t border-slate-100">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-bold text-slate-900"><T k="prem.23" /></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><T k="prem.24" /></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><T k="prem.25" /></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><T k="prem.26" /></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><T k="prem.27" /></span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span><T k="prem.28" /></span>
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setIsPaymentModalOpen(true)}
            className="w-full btn-gold text-sm sm:text-base py-3.5 flex items-center justify-center gap-2 text-slate-950 font-black cursor-pointer shadow-lg shadow-amber-500/20"
          >
            <Crown className="w-4 h-4 fill-slate-950" />
            <span><T k="prem.29" /></span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Direct Quick Payment Info Section */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl border-2 border-slate-700 p-6 sm:p-10 max-w-4xl mx-auto space-y-6 shadow-xl">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-black">
            <ShieldCheck className="w-4 h-4" />
            <span><T k="prem.30" /></span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            <T k="prem.31" /></h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-medium">
            <T k="prem.32" /></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* Card info */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 flex flex-col justify-between gap-3">
            <div>
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider"><T k="prem.33" /></div>
              <div className="text-lg sm:text-xl font-mono font-black text-amber-400 mt-1">
                {cardNumber}
              </div>
              <div className="text-xs text-slate-300 mt-0.5"><T k="prem.34" /></div>
            </div>
            <button
              type="button"
              onClick={handleCopyCard}
              className="bg-slate-700 hover:bg-slate-600 text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <CheckCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300"><T k="prem.35" /></span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span><T k="prem.36" /></span>
                </>
              )}
            </button>
          </div>

          {/* Telegram send check */}
          <div className="bg-slate-800/90 border border-slate-700 rounded-2xl p-4 flex flex-col justify-between gap-3">
            <div>
              <div className="text-[11px] text-slate-400 font-bold uppercase tracking-wider"><T k="prem.37" /></div>
              <div className="text-lg sm:text-xl font-black text-white mt-1 flex items-center gap-1.5">
                <span><T k="prem.38" /></span>
              </div>
              <div className="text-xs text-slate-300 mt-0.5"><T k="prem.39" /></div>
            </div>
            <a
              href="https://t.me/dadakhonov"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs font-black py-2.5 px-3.5 rounded-xl flex items-center justify-center gap-2 text-slate-950 transition-all cursor-pointer shadow-md"
            >
              <Send className="w-4 h-4" />
              <span><T k="prem.40" /></span>
            </a>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 space-y-6 max-w-3xl mx-auto">
        <h3 className="text-xl font-black text-slate-800 text-center">
          <T k="prem.41" /></h3>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
              <p className="font-bold text-slate-800 text-sm">{faq.q}</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        defaultPlan={billingCycle}
      />
    </div>
  );
}
