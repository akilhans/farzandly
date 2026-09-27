'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { m } from 'framer-motion';
import { Users, Heart, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function JoinFamilyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawCode = searchParams.get('code') || '';
  const { user, isAuthenticated, connectPartner } = useAuth();

  const [code, setCode] = useState(rawCode.toUpperCase());
  const [connecting, setConnecting] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  useEffect(() => {
    if (rawCode) {
      setCode(rawCode.toUpperCase());
    }
  }, [rawCode]);

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;

    if (!isAuthenticated) {
      // Save pending family invite
      if (typeof window !== 'undefined') {
        localStorage.setItem('farzandly_pending_family_code', code.trim().toUpperCase());
      }
      router.push(`/kirish?family=${encodeURIComponent(code.trim().toUpperCase())}`);
      return;
    }

    setConnecting(true);
    setStatus(null);
    try {
      const res = await connectPartner(code.trim().toUpperCase());
      setStatus({ success: res.success, message: res.message || '' });
      if (res.success) {
        setTimeout(() => {
          router.push('/profil?tab=family');
        }, 1800);
      }
    } catch (err: any) {
      setStatus({ success: false, message: err.message || 'Ulanishda xatolik yuz berdi' });
    } finally {
      setConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-indigo-50/30 py-16 px-4 sm:px-6">
      <div className="max-w-xl mx-auto">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-blue-100 text-center relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-6">
            <Heart className="w-4 h-4 text-blue-600 fill-blue-600" />
            <span>Er-Xotin Hamkorligi</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Oilaviy Hisobga Ulanish
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
            Turmush o‘rtog‘ingiz sizni Farzandly ilovasida umumiy farzandlar profili va oilaviy tarbiya qoidalarini birgalikda boshqarishga taklif qildi.
          </p>

          <form onSubmit={handleConnect} className="space-y-4 max-w-sm mx-auto mb-8">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2 text-left">
                Taklif Kodi
              </label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                placeholder="FAM-XXXXXX"
                className="w-full px-4 py-3.5 text-center font-mono font-bold text-xl uppercase tracking-widest rounded-2xl border-2 border-blue-200 focus:border-blue-600 focus:outline-none transition-all"
                required
              />
            </div>

            {status && (
              <div
                className={`p-3.5 rounded-2xl text-sm font-medium ${
                  status.success
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300'
                    : 'bg-rose-50 text-rose-800 border border-rose-200'
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={connecting}
              className="w-full py-4 px-6 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              {connecting ? (
                <span>Ulanmoqda...</span>
              ) : isAuthenticated ? (
                <>
                  <span>Turmush o‘rtog‘imga ulanish</span>
                  <CheckCircle className="w-5 h-5" />
                </>
              ) : (
                <>
                  <span>Kirish va Ulanish</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </button>
          </form>

          {/* Value Props */}
          <div className="pt-8 border-t border-gray-100 text-left space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Hamkorlikdagi imkoniyatlar:
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Yagona farzandlar profili va o‘rganish xaritasi</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Birgalikda kelishilgan qat‘iy oilaviy qoidalar bitimi</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-700">
              <CheckCircle className="w-5 h-5 text-blue-500 shrink-0" />
              <span>Ikkala ota-onaning umumiy XP va oilaviy streak ko‘rsatkichi</span>
            </div>
          </div>
        </m.div>
      </div>
    </div>
  );
}
