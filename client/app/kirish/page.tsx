'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Send,
  ShieldCheck,
  CheckCircle2,
  Heart,
  ArrowRight,
  UserCheck,
  Flame,
  Star,
  Lock,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function KirishPage() {
  const router = useRouter();
  const { loginWithTelegram, loginDemoTelegram, isAuthenticated, user } = useAuth();
  const [customTgUsername, setCustomTgUsername] = useState('');
  const [customTgName, setCustomTgName] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleCustomLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTgUsername && !customTgName) return;
    setLoading(true);

    const cleanUsername = customTgUsername.replace('@', '').trim();
    const displayName = customTgName.trim() || cleanUsername || 'Ota-ona';

    await loginWithTelegram({
      id: Math.floor(100000000 + Math.random() * 900000000),
      first_name: displayName,
      username: cleanUsername,
      photo_url: `https://api.dicebear.com/7.x/bottts/svg?seed=${cleanUsername || displayName}`,
    });

    setSuccessMessage(`Xush kelibsiz, ${displayName}!`);
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  const handlePersonaLogin = async (persona: 'aziza' | 'jasur' | 'dilnoza') => {
    setLoading(true);
    await loginDemoTelegram(persona);
    setSuccessMessage('Telegram hisobingiz ulandi!');
    setTimeout(() => {
      router.push('/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Ambient background blur glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full max-w-lg bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 shadow-2xl space-y-8 relative z-10"
      >
        {/* Brand header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-[#229ED9] border-b-4 border-[#1B7FB0] text-white flex items-center justify-center shadow-lg shadow-[#229ED9]/30">
            <Send className="w-8 h-8 -rotate-12 translate-x-0.5" />
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-black text-[#229ED9] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block">
              Telegram orqali xavfsiz kirish
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Farzandly hisobingizga kiring
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Parolsiz, tezkor va qulay. Farzandingiz tarbiya yo‘li va olingan XP saqlanib boradi.
            </p>
          </div>
        </div>

        {/* Status message */}
        {successMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-4 rounded-2xl bg-emerald-50 border-2 border-emerald-300 text-emerald-900 font-bold text-sm text-center flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>{successMessage}</span>
          </motion.div>
        )}

        {/* Interactive Telegram Form */}
        <div className="space-y-4">
          <form onSubmit={handleCustomLogin} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Ismingiz (yoki Telegramdagi ismingiz)
              </label>
              <input
                type="text"
                value={customTgName}
                onChange={(e) => setCustomTgName(e.target.value)}
                placeholder="Masalan: Aziza Rahimova"
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#229ED9] focus:bg-white transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                Telegram @username (ixtiyoriy)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-3 text-slate-400 font-bold text-sm">@</span>
                <input
                  type="text"
                  value={customTgUsername}
                  onChange={(e) => setCustomTgUsername(e.target.value)}
                  placeholder="aziza_mama"
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl pl-9 pr-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#229ED9] focus:bg-white transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#229ED9] hover:bg-[#1e8cc0] active:translate-y-1 active:border-b-0 text-white font-black py-4 px-6 rounded-2xl border-b-4 border-[#176d96] shadow-lg shadow-[#229ED9]/25 flex items-center justify-center gap-2.5 text-base transition-all cursor-pointer"
            >
              <Send className="w-5 h-5" />
              <span>{loading ? 'Ulanmoqda...' : 'Telegram bilan davom etish'}</span>
            </button>
          </form>

          {/* Quick Demo Personas */}
          <div className="pt-2">
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-[1px] bg-slate-200" />
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Yoki sinov profilini tanlang
              </span>
              <div className="flex-1 h-[1px] bg-slate-200" />
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => handlePersonaLogin('aziza')}
                className="p-3 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-center space-y-1 group"
              >
                <div className="w-9 h-9 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-xs group-hover:scale-105 transition-transform">
                  AR
                </div>
                <p className="font-bold text-slate-800 text-xs truncate">Aziza R.</p>
                <p className="text-[10px] text-slate-400">Ona (3 yosh)</p>
              </button>

              <button
                type="button"
                onClick={() => handlePersonaLogin('jasur')}
                className="p-3 rounded-2xl border-2 border-slate-200 hover:border-sky-500 hover:bg-sky-50/50 transition-all text-center space-y-1 group"
              >
                <div className="w-9 h-9 mx-auto rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-black text-xs group-hover:scale-105 transition-transform">
                  JK
                </div>
                <p className="font-bold text-slate-800 text-xs truncate">Jasur K.</p>
                <p className="text-[10px] text-slate-400">Ota (7 yosh)</p>
              </button>

              <button
                type="button"
                onClick={() => handlePersonaLogin('dilnoza')}
                className="p-3 rounded-2xl border-2 border-slate-200 hover:border-purple-500 hover:bg-purple-50/50 transition-all text-center space-y-1 group"
              >
                <div className="w-9 h-9 mx-auto rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs group-hover:scale-105 transition-transform">
                  DS
                </div>
                <p className="font-bold text-slate-800 text-xs truncate">Dilnoza S.</p>
                <p className="text-[10px] text-slate-400">Pedagog</p>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Note */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-500 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            Farzandly sizning Telegram parolingiz yoki yozishmalaringizni hech qachon so‘ramaydi. Ma’lumotlar shifrlangan va xavfsiz holda faqat o‘quv profilingiz uchun xizmat qiladi.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
