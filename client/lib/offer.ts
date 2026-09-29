'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { useAuth } from '@/context/AuthContext';
import { PREMIUM_PRICE_UZS } from '@/lib/payments';

/*
 * Premium introductory offer.
 *
 * A visitor's first exposure starts a 30-minute window. During it Premium costs
 * OFFER_PRICE (79 000); afterwards the regular price (219 000) applies — the modal,
 * the premium page and every price string read from here, so what is shown is what
 * is asked for. The start time (not a remaining count) is stored, so the countdown
 * survives refreshes, stays in sync across tabs and keeps running while the tab is closed.
 * Premium users never start it and never see it.
 */

export const OFFER_PRICE_UZS = PREMIUM_PRICE_UZS;
export const REGULAR_PRICE_UZS = Number(process.env.NEXT_PUBLIC_PREMIUM_REGULAR_PRICE) || 219000;
export const OFFER_DURATION_MS = 30 * 60 * 1000;

const KEY = 'farzandly.offer.v1';
const DISMISS_KEY = 'farzandly.offer.banner-dismissed.v1';

let memoryStart: number | null = null; // fallbacks when storage is blocked (private mode)
let memoryDismissed = false;
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | null = null;

function readStart(): number | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) {
      const v = JSON.parse(raw)?.startedAt;
      // a start in the future (clock changed) or garbage is treated as "not started"
      if (typeof v === 'number' && v <= Date.now() + 5000) return v;
    }
  } catch {
    /* storage unavailable */
  }
  return memoryStart;
}

function writeStart(ts: number) {
  memoryStart = ts;
  try {
    window.localStorage.setItem(KEY, JSON.stringify({ startedAt: ts }));
  } catch {
    /* keep the in-memory start */
  }
}

const emit = () => listeners.forEach((l) => l());

function subscribe(cb: () => void) {
  listeners.add(cb);
  if (!timer) timer = setInterval(emit, 1000);
  const onStorage = (e: StorageEvent) => (e.key === KEY || e.key === DISMISS_KEY) && cb();
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener('storage', onStorage);
    if (!listeners.size && timer) {
      clearInterval(timer);
      timer = null;
    }
  };
}

/** Seconds left: >0 active, 0 expired, -1 not started. A primitive, so snapshots stay stable. */
function getSnapshot(): number {
  const start = readStart();
  if (start === null) return -1;
  return Math.max(0, Math.ceil((start + OFFER_DURATION_MS - Date.now()) / 1000));
}
// the server knows nothing about the visitor: render the neutral state, fill in after hydration
const getServerSnapshot = () => -2;

export type OfferState = {
  /** false until the browser has been read (SSR / first paint) and auth has resolved */
  ready: boolean;
  /** premium users never see the offer */
  eligible: boolean;
  active: boolean;
  expired: boolean;
  secondsLeft: number;
  /** the price this visitor pays right now */
  price: number;
  regularPrice: number;
};

export function usePremiumOffer(): OfferState {
  const { user, isLoading } = useAuth();
  const left = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const eligible = !isLoading && !user?.isPremium;

  // first exposure starts the clock (never for premium users)
  useEffect(() => {
    if (eligible && readStart() === null) {
      writeStart(Date.now());
      emit();
    }
  }, [eligible]);

  const ready = left !== -2 && !isLoading;
  const active = ready && eligible && left > 0;
  const expired = ready && eligible && left === 0;
  return {
    ready,
    eligible,
    active,
    expired,
    secondsLeft: Math.max(0, left),
    price: expired ? REGULAR_PRICE_UZS : OFFER_PRICE_UZS,
    regularPrice: REGULAR_PRICE_UZS,
  };
}

export const formatClock = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

/** Banner dismissal: hides the site-wide strip only; the offer itself keeps running. */
export function useBannerDismissed(): [boolean, () => void] {
  const dismissed = useSyncExternalStore(
    subscribe,
    () => {
      try {
        return memoryDismissed || window.localStorage.getItem(DISMISS_KEY) === '1';
      } catch {
        return memoryDismissed;
      }
    },
    () => true // server: render nothing, avoid a flash
  );
  const dismiss = () => {
    memoryDismissed = true;
    try {
      window.localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      /* ignore */
    }
    emit();
  };
  return [dismissed, dismiss];
}
