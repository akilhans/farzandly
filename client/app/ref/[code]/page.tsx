'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { m } from 'framer-motion';
import { Gift, Sparkles, CheckCircle, ArrowRight, ShieldCheck, Heart, Users, BookOpen } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function ReferralLandingPage() {
  const params = useParams();
  const router = useRouter();
  const rawCode = (params?.code as string) || '';
  const referralCode = decodeURIComponent(rawCode).toUpperCase();
  const { user, isAuthenticated, applyReferralCode } = useAuth();

  const [applying, setApplying] = useState(false);
  const [resultMsg, setResultMsg] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (referralCode && typeof window !== 'undefined') {
      localStorage.setItem('farzandly_pending_referral', referralCode);
    }
  }, [referralCode]);

  const handleClaim = async () => {
    if (!isAuthenticated) {
      router.push(`/kirish?ref=${encodeURIComponent(referralCode)}`);
      return;
    }

    setApplying(true);
    try {
      const res = await applyReferralCode(referralCode);
      setResultMsg({ success: res.success, message: res.message || '' });
      if (res.success) {
        setTimeout(() => {
          router.push('/darslar');
        }, 2000);
      }
    } catch (err: any) {
      setResultMsg({ success: false, message: err.message || 'Xatolik yuz berdi' });
    } finally {
      setApplying(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50/40 py-16 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-emerald-100 text-center relative overflow-hidden"
        >
          {/* Top highlight badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold mb-6">
            <Gift className="w-4 h-4 text-emerald-600" />
            <span>Do‘stingizdan Maxsus Sovg‘a</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Farzandly oilasiga xush kelibsiz!
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-6 leading-relaxed">
            Do‘stingiz sizni ota-onalar uchun mo‘ljallangan eng zamonaviy va ma‘rifiy platformaga taklif qildi.
            Siz uchun <strong className="text-emerald-700">7 kunlik to‘liq bepul Premium</strong> obuna tayyorlab qo‘yildi!
          </p>

          {/* Referral Code Display */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-2xl p-4 mb-8 inline-flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-bold text-emerald-700">Taklif kodi:</span>
            <span className="font-mono font-black text-lg text-emerald-900 tracking-wider">{referralCode}</span>
          </div>

          {/* Result Alert */}
          {resultMsg && (
            <div
              className={`p-4 rounded-2xl mb-6 text-sm font-medium ${
                resultMsg.success
                  ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                  : 'bg-rose-50 text-rose-800 border border-rose-200'
              }`}
            >
              {resultMsg.message}
            </div>
          )}

          {/* Action button */}
          <button
            onClick={handleClaim}
            disabled={applying}
            className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
          >
            {applying ? (
              <span>Faollashtirilmoqda...</span>
            ) : isAuthenticated ? (
              <>
                <span>7 Kunlik Premium Sovg‘ani Olish</span>
                <Sparkles className="w-5 h-5" />
              </>
            ) : (
              <>
                <span>Sovg‘ani Qabul Qilish va Boshlash</span>
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>

          {/* Benefits list */}
          <div className="mt-10 pt-8 border-t border-gray-100 text-left space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Farzandly Premium bilan nimalarga ega bo‘lasiz:
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>55 ta bosqichma-bosqich Islomiy va pedagogik audio darslar</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>19 ta interaktiv tana a‘zolari va sog‘lom bola qo‘llanmasi</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Ertaklar, tarbiyaviy she‘rlar va ibratli topishmoqlar</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
              <span>Turmush o‘rtog‘i bilan oilaviy profil va qoidalar sinxronizatsiyasi</span>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
}
