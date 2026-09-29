'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import { Crown, Clock, X, ArrowRight } from 'lucide-react';
import { useI18n } from '@/context/LanguageContext';
import { formatSom } from '@/lib/payments';
import { formatClock, useBannerDismissed, usePremiumOffer } from '@/lib/offer';
import { EASE_OUT } from '@/lib/motion';

/** Translated text whose {price} is the price this visitor pays right now. */
export function PriceT({ k }: { k: string }) {
  const { t } = useI18n();
  const { price } = usePremiumOffer();
  return <>{t(k, undefined, { price: formatSom(price) })}</>;
}

/** Calm countdown: tabular digits, no flashing, no red. */
export function Countdown({ seconds, className = '' }: { seconds: number; className?: string }) {
  return (
    <span className={`font-mono tabular-nums font-black ${className}`} role="timer" aria-live="off">
      {formatClock(seconds)}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* Site-wide: a small floating card, never a popup                     */
/* ------------------------------------------------------------------ */

// Pages where a promo would interrupt focused work or duplicate the offer.
const QUIET_ROUTES = ['/premium', '/admin', '/instagram', '/kirish', '/dars/', '/join-family', '/ref/'];

export function OfferBanner() {
  const pathname = usePathname() || '/';
  const { t } = useI18n();
  const offer = usePremiumOffer();
  const [dismissed, dismiss] = useBannerDismissed();
  // let the page settle first; the card arrives a few seconds later, once
  const [settled, setSettled] = useState(false);
  useEffect(() => {
    const id = setTimeout(() => setSettled(true), 4000);
    return () => clearTimeout(id);
  }, []);

  const quiet = QUIET_ROUTES.some((r) => pathname === r || pathname.startsWith(r));
  const show = settled && offer.active && !dismissed && !quiet;

  return (
    <AnimatePresence>
      {show && (
        <m.aside
          key="offer"
          aria-label={t('offer.label')}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          data-motion=""
          className="fixed z-40 bottom-3 inset-x-3 sm:inset-x-auto sm:left-5 sm:bottom-5 sm:w-[360px] rounded-2xl bg-slate-900 text-white border border-slate-700 border-b-4 border-b-amber-500 shadow-2xl shadow-slate-900/30"
        >
          <div className="flex items-center gap-3 p-3 pr-2">
            <div className="w-10 h-10 rounded-xl bg-amber-400/15 border border-amber-400/30 flex items-center justify-center shrink-0">
              <Crown className="w-5 h-5 text-amber-300 fill-amber-300/40" />
            </div>
            <Link href="/premium" className="flex-1 min-w-0 group">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-300/90 truncate">{t('offer.banner')}</p>
              <p className="flex items-baseline gap-2 text-sm">
                <s className="text-slate-400 font-semibold">{formatSom(offer.regularPrice)}</s>
                <span className="font-black text-white">{formatSom(offer.price)} {t('offer.currency')}</span>
                <span className="ml-auto flex items-center gap-1 text-xs text-slate-300">
                  <Clock className="w-3.5 h-3.5" />
                  <Countdown seconds={offer.secondsLeft} />
                </span>
              </p>
            </Link>
            <Link
              href="/premium"
              aria-label={t('offer.more')}
              className="hidden sm:flex w-9 h-9 rounded-xl bg-amber-400 text-slate-950 items-center justify-center hover:bg-amber-300 transition-colors shrink-0"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
            <button
              type="button"
              onClick={dismiss}
              aria-label={t('offer.close')}
              className="w-8 h-8 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 flex items-center justify-center shrink-0 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </m.aside>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* /premium: price block inside the Premium card                       */
/* ------------------------------------------------------------------ */

export function OfferPrice({ fallback }: { fallback: React.ReactNode }) {
  const { t } = useI18n();
  const offer = usePremiumOffer();

  // premium users and the first paint keep the page's normal price block
  if (!offer.ready || !offer.eligible) return <>{fallback}</>;

  if (offer.expired) {
    return (
      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 text-xs font-black text-slate-600 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-full">
          <Clock className="w-3.5 h-3.5" /> {t('offer.ended')}
        </div>
        <div className="text-3xl font-black text-slate-900">
          {formatSom(offer.regularPrice)} <span className="text-sm font-bold text-slate-400">{t('prem.9')}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-gradient-to-br from-amber-50 to-white border-2 border-amber-200 p-4 space-y-3">
      <div className="flex items-center justify-between gap-3">
        <span className="text-[11px] font-black uppercase tracking-wider text-amber-800">{t('offer.label')}</span>
        <span className="text-[11px] font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
          {t('offer.save', undefined, { amount: formatSom(offer.regularPrice - offer.price) })}
        </span>
      </div>
      <div className="flex items-baseline gap-3 flex-wrap">
        <s className="text-lg font-bold text-slate-400 decoration-2">{formatSom(offer.regularPrice)} {t('offer.currency')}</s>
        <span className="text-4xl font-black text-slate-900 tracking-tight">{formatSom(offer.price)} {t('offer.currency')}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-slate-700 border-t border-amber-200/70 pt-3">
        <Clock className="w-4 h-4 text-amber-700" />
        <span className="font-semibold">{t('offer.endsIn')}</span>
        <Countdown seconds={offer.secondsLeft} className="text-slate-900 text-base" />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* /premium on phones: the offer and CTA always within thumb reach     */
/* ------------------------------------------------------------------ */

export function MobileOfferBar({ onStart, hidden }: { onStart: () => void; hidden?: boolean }) {
  const { t } = useI18n();
  const offer = usePremiumOffer();
  if (!offer.ready || !offer.eligible || hidden) return null;
  return (
    <m.div
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: EASE_OUT }}
      data-motion=""
      className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur border-t-2 border-slate-200 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-12px_30px_-18px_rgba(15,23,42,0.35)]"
    >
      <div className="flex items-center gap-3">
        <div className="flex-1 min-w-0">
          {offer.active ? (
            <>
              <p className="flex items-baseline gap-2">
                <s className="text-xs font-bold text-slate-400">{formatSom(offer.regularPrice)}</s>
                <span className="text-lg font-black text-slate-900">{formatSom(offer.price)} {t('offer.currency')}</span>
              </p>
              <p className="text-[11px] text-slate-600 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {t('offer.endsIn')} <Countdown seconds={offer.secondsLeft} className="text-slate-900" />
              </p>
            </>
          ) : (
            <>
              <p className="text-lg font-black text-slate-900">{formatSom(offer.price)} {t('offer.currency')}</p>
              <p className="text-[11px] font-bold text-slate-500">{t('offer.ended')}</p>
            </>
          )}
        </div>
        <button
          type="button"
          onClick={onStart}
          className="btn-gold text-slate-950 font-black text-sm px-5 py-3 gap-1.5 shrink-0 cursor-pointer"
        >
          <Crown className="w-4 h-4 fill-slate-950" />
          {t('offer.cta')}
        </button>
      </div>
    </m.div>
  );
}
