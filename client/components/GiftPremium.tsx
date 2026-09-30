'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Gift, Copy, CheckCheck, Send, Loader2, CheckCircle2, LogIn } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { accountApi, GiftCodeInfo } from '@/lib/accountApi';
import PaymentModal from '@/components/PaymentModal';

/**
 * Premium as a gift: buy a one-time code for someone else, see the codes you bought,
 * or redeem one you received (/premium?gift=CODE pre-fills it).
 * Uses useSearchParams, so render it inside a <Suspense> boundary.
 */
export default function GiftPremium() {
  const { isAuthenticated, refreshUser } = useAuth();
  const [buying, setBuying] = useState(false);
  const [gifts, setGifts] = useState<GiftCodeInfo[]>([]);
  const params = useSearchParams();
  const [code, setCode] = useState(() => params.get('gift') || '');
  const [redeeming, setRedeeming] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const loadGifts = useCallback(async () => {
    const res = await accountApi.myGifts();
    if (res.success) setGifts(res.data || []);
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    accountApi.myGifts().then((res) => res.success && setGifts(res.data || []));
  }, [isAuthenticated]);

  // Arriving from a gift link (/premium?gift=CODE): bring the redeem box into view.
  const giftParam = params.get('gift');
  useEffect(() => {
    if (giftParam) document.getElementById('gift-premium')?.scrollIntoView({ block: 'center' });
  }, [giftParam]);

  const redeem = async (e: React.FormEvent) => {
    e.preventDefault();
    setRedeeming(true);
    setResult(null);
    const res = await accountApi.redeemGift(code);
    setRedeeming(false);
    setResult({ ok: res.success, text: res.message || (res.success ? 'Sovg‘a qabul qilindi' : 'Xatolik yuz berdi') });
    if (res.success) {
      setCode('');
      refreshUser();
    }
  };

  const copy = (c: string) => {
    navigator.clipboard?.writeText(c);
    setCopied(c);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="gift-premium" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Give */}
      <div className="rounded-3xl bg-white border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center">
          <Gift className="w-6 h-6 text-amber-700" />
        </div>
        <h2 className="text-xl font-black text-slate-800">Premiumni sovg‘a qiling</h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Singlingiz, do‘stingiz yoki yangi ota-ona bo‘lgan yaqiningizga umrbod Premium sovg‘a qiling. To‘lov tasdiqlangach
          bir martalik kod olasiz — uni Telegram orqali yuborasiz.
        </p>
        <button
          type="button"
          onClick={() => setBuying(true)}
          className="w-full btn-gold text-slate-950 font-black py-3.5 flex items-center justify-center gap-2"
        >
          <Gift className="w-4 h-4" /> Sovg‘a sotib olish
        </button>

        {gifts.length > 0 && (
          <ul className="space-y-2 pt-2 border-t border-slate-100">
            {gifts.map((g) => (
              <li key={g.code} className="rounded-2xl bg-slate-50 border border-slate-200 p-3 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono font-black tracking-wider text-slate-900">{g.code}</span>
                  {g.status === 'redeemed' ? (
                    <span className="text-xs font-bold text-emerald-700">✓ {g.redeemedByName || 'Faollashtirildi'}</span>
                  ) : (
                    <span className="text-xs font-bold text-amber-700">Ishlatilmagan</span>
                  )}
                </div>
                {g.status === 'active' && (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => copy(g.code)}
                      className="flex-1 btn-outline text-xs py-2 inline-flex items-center justify-center gap-1.5"
                    >
                      {copied === g.code ? <CheckCheck className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied === g.code ? 'Nusxalandi' : 'Nusxalash'}
                    </button>
                    {g.shareUrl && (
                      <a
                        href={g.shareUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-xs font-bold py-2 rounded-xl bg-[#229ED9] text-white inline-flex items-center justify-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" /> Telegramda yuborish
                      </a>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Receive */}
      <div className="rounded-3xl bg-white border-2 border-slate-200 border-b-8 p-6 sm:p-8 space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-emerald-700" />
        </div>
        <h2 className="text-xl font-black text-slate-800">Sovg‘a kodingiz bormi?</h2>
        <p className="text-sm text-slate-600 leading-relaxed">Kodni kiriting — umrbod Premium darhol hisobingizda yoqiladi.</p>
        {isAuthenticated ? (
          <form onSubmit={redeem} className="space-y-3">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              placeholder="FZ-XXXX-XXXX"
              maxLength={20}
              autoComplete="off"
              aria-label="Sovg‘a kodi"
              className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 font-mono text-lg tracking-wider text-center focus:border-emerald-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={redeeming || code.replace(/[^A-Za-z0-9]/g, '').length < 4}
              className="w-full btn-primary py-3.5 font-black inline-flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {redeeming ? <Loader2 className="w-4 h-4 animate-spin" /> : <Gift className="w-4 h-4" />}
              Faollashtirish
            </button>
            {result && (
              <p role="status" className={`text-sm font-semibold ${result.ok ? 'text-emerald-700' : 'text-rose-700'}`}>
                {result.text}
              </p>
            )}
          </form>
        ) : (
          <Link href="/kirish" className="w-full btn-primary py-3.5 font-black inline-flex items-center justify-center gap-2">
            <LogIn className="w-4 h-4" /> Kodni kiritish uchun tizimga kiring
          </Link>
        )}
      </div>

      <PaymentModal isOpen={buying} onClose={() => setBuying(false)} gift onSubmitted={loadGifts} />
    </section>
  );
}
