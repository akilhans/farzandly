'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { Crown, Copy, CheckCheck, X, LogIn, Clock, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { accountApi, PaymentRequest } from '@/lib/accountApi';
import { PAYMENT_CARD, PAYMENT_CARD_HOLDER, PREMIUM_PRICE_UZS, SUPPORT_TELEGRAM, formatCard, formatSom } from '@/lib/payments';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** @deprecated Premium is a single lifetime plan now; kept so existing callers compile. */
  defaultPlan?: string;
}

/**
 * Lifetime Premium via card transfer:
 * transfer → "Men to'ladim" → admin confirms → Premium turns on and the bot notifies the parent.
 */
export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  const { user, isAuthenticated, refreshUser } = useAuth();
  const [copied, setCopied] = useState(false);
  const [payments, setPayments] = useState<PaymentRequest[] | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const loadPayments = useCallback(async () => {
    const res = await accountApi.myPayments();
    setPayments(res.success ? res.data : []);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    setError('');
    if (isAuthenticated) {
      loadPayments();
      refreshUser();
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, isAuthenticated, loadPayments, refreshUser, onClose]);

  if (!isOpen) return null;

  const latest = payments?.[0];
  const pending = latest?.status === 'pending';
  const lifetime = user?.premiumType === 'lifetime';

  const copyCard = () => {
    navigator.clipboard?.writeText(PAYMENT_CARD.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const confirmPaid = async () => {
    setSubmitting(true);
    setError('');
    const res = await accountApi.createPayment();
    setSubmitting(false);
    if (res.success) await loadPayments();
    else setError(res.message || 'So‘rovni yuborib bo‘lmadi. Qaytadan urinib ko‘ring.');
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="payment-title"
    >
      <div
        className="w-full sm:max-w-md bg-white rounded-t-3xl sm:rounded-3xl border-2 border-slate-200 sm:border-b-8 shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3 p-6 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center shrink-0">
              <Crown className="w-6 h-6 text-amber-700 fill-amber-600" />
            </div>
            <div>
              <h2 id="payment-title" className="text-lg font-black text-slate-900">Umrbod Premium</h2>
              <p className="text-sm text-slate-500">Bir marta to‘lov — barcha darslar abadiy ochiq</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Yopish"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div className="flex items-baseline justify-between">
            <span className="text-3xl font-black text-slate-900">{formatSom(PREMIUM_PRICE_UZS)} so‘m</span>
            <span className="text-sm font-bold text-emerald-700">bir martalik</span>
          </div>

          {!isAuthenticated ? (
            <div className="rounded-2xl bg-slate-50 border-2 border-slate-200 p-5 space-y-3 text-center">
              <p className="text-sm text-slate-700">
                To‘lov hisobingizga bog‘lanishi uchun avval tizimga kiring.
              </p>
              <Link href="/kirish" onClick={onClose} className="btn-primary inline-flex items-center gap-2 text-sm px-5 py-3">
                <LogIn className="w-4 h-4" /> Tizimga kirish
              </Link>
            </div>
          ) : lifetime ? (
            <div className="rounded-2xl bg-emerald-50 border-2 border-emerald-300 p-5 flex gap-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-sm text-emerald-900 font-semibold">
                Sizda umrbod Premium faol. Barcha darslar va maqolalar siz uchun ochiq.
              </p>
            </div>
          ) : pending ? (
            <div className="rounded-2xl bg-amber-50 border-2 border-amber-300 p-5 flex gap-3">
              <Clock className="w-6 h-6 text-amber-600 shrink-0" />
              <div className="space-y-1">
                <p className="text-sm text-amber-900 font-bold">To‘lovingiz tekshirilmoqda</p>
                <p className="text-sm text-amber-900/80">
                  Tasdiqlangach Premium avtomatik yoqiladi
                  {user?.telegramId ? ' va Telegram orqali xabar olasiz' : ''}. Odatda bir necha soat ichida.
                </p>
              </div>
            </div>
          ) : (
            <>
              {latest?.status === 'rejected' && (
                <div className="rounded-2xl bg-rose-50 border-2 border-rose-200 p-4 flex gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-rose-900">
                    Oldingi so‘rov tasdiqlanmadi{latest.rejectReason ? `: ${latest.rejectReason}` : '.'} Qayta yuborishingiz mumkin.
                  </p>
                </div>
              )}

              <ol className="space-y-4">
                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-black flex items-center justify-center shrink-0">1</span>
                  <div className="flex-1 space-y-2">
                    <p className="text-sm font-bold text-slate-800">
                      {formatSom(PREMIUM_PRICE_UZS)} so‘mni kartaga o‘tkazing
                    </p>
                    {PAYMENT_CARD ? (
                      <button
                        type="button"
                        onClick={copyCard}
                        className="w-full flex items-center justify-between gap-3 rounded-2xl bg-slate-900 text-white px-4 py-3.5 font-mono text-base tracking-wider hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500"
                        aria-label="Karta raqamini nusxalash"
                      >
                        <span>{formatCard(PAYMENT_CARD)}</span>
                        {copied ? <CheckCheck className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5 text-slate-400" />}
                      </button>
                    ) : (
                      <p className="text-sm text-rose-700">Karta raqami sozlanmagan. Qo‘llab-quvvatlash xizmatiga yozing.</p>
                    )}
                    {PAYMENT_CARD_HOLDER && <p className="text-xs text-slate-500">Qabul qiluvchi: {PAYMENT_CARD_HOLDER}</p>}
                    {copied && <p className="text-xs font-bold text-emerald-700" role="status">Nusxalandi</p>}
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-sm font-black flex items-center justify-center shrink-0">2</span>
                  <div className="flex-1 space-y-3">
                    <p className="text-sm font-bold text-slate-800">O‘tkazgach, quyidagi tugmani bosing</p>
                    <button
                      type="button"
                      onClick={confirmPaid}
                      disabled={submitting}
                      className="w-full btn-gold text-slate-950 font-black py-3.5 flex items-center justify-center gap-2 disabled:opacity-60"
                    >
                      {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <CheckCircle2 className="w-4 h-4" />}
                      Men to‘ladim
                    </button>
                    {error && <p className="text-sm text-rose-700" role="alert">{error}</p>}
                  </div>
                </li>
              </ol>
            </>
          )}

          {SUPPORT_TELEGRAM && (
            <a
              href={`https://t.me/${SUPPORT_TELEGRAM}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm font-bold text-[#229ED9] hover:underline"
            >
              <Send className="w-4 h-4" /> Savol bormi? Telegramda yozing
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
