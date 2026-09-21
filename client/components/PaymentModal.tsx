'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Crown, Copy, CheckCheck, Send, ShieldCheck, X, LogIn, Lock, ArrowRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: 'monthly' | 'yearly';
}

export default function PaymentModal({ isOpen, onClose, defaultPlan = 'monthly' }: PaymentModalProps) {
  const { user, isAuthenticated } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>(defaultPlan);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedPlan(defaultPlan);
    }
  }, [isOpen, defaultPlan]);

  if (!isOpen) return null;

  const cardNumber = '5614 6819 0401 4390';
  const isActuallyLoggedIn = Boolean(user && user.authProvider !== 'guest' && user._id !== 'guest-user');

  const handleCopyCard = () => {
    navigator.clipboard.writeText(cardNumber.replace(/\s+/g, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const planLabel = selectedPlan === 'monthly' ? "Oylik obuna (219 000 so'm / oy)" : "Yillik obuna (oyiga 179 000 so'm)";

  const telegramMsg = encodeURIComponent(
    `Assalomu alaykum! Men Farzandly platformasida Premium kontent uchun to'lov qildim.\n\n` +
    `📌 Tanlangan tarif: ${planLabel}\n` +
    `👤 Foydalanuvchi: ${user?.name || 'Ota-ona'} (${user?.telegramUsername ? `@${user.telegramUsername}` : (user?.phone || 'Profil')})\n\n` +
    `To'lov chekini ilova qilmoqdaman. Iltimos, Premium maqomimni faollashtirib bering.`
  );

  const telegramUrl = `https://t.me/dadakhonov?text=${telegramMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-lg w-full border-2 border-amber-400 border-b-8 shadow-2xl p-6 sm:p-8 relative space-y-6 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-2 rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2 pt-1">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 px-3.5 py-1 rounded-full text-xs font-black">
            <Crown className="w-4 h-4 fill-amber-700" />
            <span>FARZANDLY PREMIUM KONTENT</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Premium kontentni faollashtirish
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            Barcha 69 ta dars, amaliy topshiriqlar, audio-hikmatlar va ilmiy tahlillarni to‘liq cheklovsiz oching.
          </p>
        </div>

        {/* REQUIRE LOGIN FIRST */}
        {!isActuallyLoggedIn ? (
          <div className="bg-amber-50/90 border-2 border-amber-300 rounded-3xl p-6 text-center space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 border-2 border-amber-300 flex items-center justify-center mx-auto shadow-inner">
              <Lock className="w-7 h-7" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-lg font-black text-slate-900">
                To‘lovdan oldin hisobingizga kiring
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                To‘lov chekingizni shaxsingizga bog‘lashimiz va hisobingizga Premium maqomini yoqib berishimiz uchun avval profilingizga kirishingiz lozim.
              </p>
            </div>
            <Link
              href="/kirish"
              className="w-full btn-primary text-sm sm:text-base py-3.5 flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <LogIn className="w-4 h-4" />
              <span>Hisobingizga kirish</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <>
            {/* Logged in User Pill */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 flex items-center justify-between text-xs">
              <span className="text-slate-600 font-medium">Hisobingiz:</span>
              <span className="font-bold text-emerald-800 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {user?.name || `@${user?.telegramUsername}`}
              </span>
            </div>

            {/* Plan Selector */}
            <div className="grid grid-cols-2 gap-3">
              {/* Monthly */}
              <button
                type="button"
                onClick={() => setSelectedPlan('monthly')}
                className={`p-4 rounded-2xl border-2 text-left transition-all relative cursor-pointer ${
                  selectedPlan === 'monthly'
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="text-xs font-bold text-slate-500">Oylik to‘lov</div>
                <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                  219 000 <span className="text-[11px] font-medium text-slate-500">so‘m/oy</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">Har oy yangilanadi</div>
              </button>

              {/* Yearly */}
              <button
                type="button"
                onClick={() => setSelectedPlan('yearly')}
                className={`p-4 rounded-2xl border-2 text-left transition-all relative cursor-pointer ${
                  selectedPlan === 'yearly'
                    ? 'border-amber-500 bg-amber-50/50 shadow-xs'
                    : 'border-slate-200 hover:border-slate-300 bg-white'
                }`}
              >
                <div className="absolute -top-2.5 right-2 bg-amber-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                  Tejamkor
                </div>
                <div className="text-xs font-bold text-amber-800">Yillik to‘lov</div>
                <div className="text-lg sm:text-xl font-black text-slate-900 mt-1">
                  179 000 <span className="text-[11px] font-medium text-slate-500">so‘m/oy</span>
                </div>
                <div className="text-[11px] text-emerald-700 font-bold mt-0.5">Har oy 40 000 so‘m tejang</div>
              </button>
            </div>

            {/* Payment Instructions Card */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 sm:p-5 space-y-4">
              <div className="text-xs font-black uppercase tracking-wider text-slate-500">
                To‘lov ma’lumotlari:
              </div>

              {/* Card Box */}
              <div className="bg-white border-2 border-slate-200 rounded-xl p-3 sm:p-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[11px] text-slate-400 font-bold">Karta raqami (Uzcard / Humo)</div>
                  <div className="font-mono text-base sm:text-lg font-black text-slate-900 tracking-wider">
                    {cardNumber}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyCard}
                  className="btn-outline text-xs px-3 py-2 flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Karta raqamini nusxalash"
                >
                  {copied ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Nusxalandi!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-600" />
                      <span>Nusxalash</span>
                    </>
                  )}
                </button>
              </div>

              {/* Tariff details */}
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-700 border-t border-slate-200 pt-3">
                <span>Tanlangan tarif:</span>
                <span className="text-sm sm:text-base font-black text-emerald-700">
                  {selectedPlan === 'monthly' ? '219 000 so‘m / oy' : 'Oyiga 179 000 so‘m (Yillik)'}
                </span>
              </div>
            </div>

            {/* Action Button: Send Check via Telegram */}
            <div className="space-y-3">
              <a
                href={telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-gold text-sm sm:text-base py-3.5 px-4 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 text-slate-950 font-black cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Chekni yuborish (t.me/dadakhonov)</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 text-center font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chek tasdiqlanishi bilan hisobingiz 10-15 daqiqa ichida faollashadi</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
