'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  ShieldCheck,
  CheckCircle2,
  Lock,
  KeyRound,
  ExternalLink,
  Settings,
  X,
  Sparkles as _, // intentionally unused
  UserCheck,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function KirishPage() {
  const router = useRouter();
  const { loginWithTelegram, loginDemoTelegram, isAuthenticated, user } = useAuth();

  const [customTgUsername, setCustomTgUsername] = useState('');
  const [customTgName, setCustomTgName] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Telegram OIDC states
  const [telegramConfig, setTelegramConfig] = useState<{
    clientId: string;
    redirectUri: string;
    hasSecret: boolean;
    configured: boolean;
  }>({
    clientId: '',
    redirectUri: '',
    hasSecret: true,
    configured: false,
  });

  const [showConfigModal, setShowConfigModal] = useState(false);
  const [inputClientId, setInputClientId] = useState('');

  // Fetch live Telegram config from backend
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
        const res = await fetch(`${apiUrl}/auth/telegram/config`);
        if (res.ok) {
          const data = await res.json();
          if (data.success) {
            const savedLocalId = localStorage.getItem('farzandly_tg_client_id') || '';
            const effectiveClientId = data.data.clientId || savedLocalId;
            setTelegramConfig({
              ...data.data,
              clientId: effectiveClientId,
              configured: Boolean(effectiveClientId && data.data.hasSecret),
            });
            setInputClientId(effectiveClientId);
          }
        }
      } catch (err) {
        console.warn('Backend config unavailable, using defaults');
      }
    };

    fetchConfig();
  }, []);

  // Initiate Telegram OIDC Login
  const handleTelegramOidcLogin = () => {
    const activeClientId = telegramConfig.clientId || localStorage.getItem('farzandly_tg_client_id') || '';

    if (!activeClientId) {
      setShowConfigModal(true);
      return;
    }

    const redirectUri = window.location.origin + '/kirish/callback';
    const state = Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('farzandly_oauth_state', state);

    // Official Telegram OpenID Connect Authorization URL
    const authUrl = `https://oauth.telegram.org/auth?client_id=${encodeURIComponent(
      activeClientId
    )}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid+profile&state=${state}`;

    window.location.href = authUrl;
  };

  const handleSaveClientId = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputClientId.trim()) return;

    localStorage.setItem('farzandly_tg_client_id', inputClientId.trim());
    setTelegramConfig((prev) => ({
      ...prev,
      clientId: inputClientId.trim(),
      configured: true,
    }));
    setShowConfigModal(false);

    // Auto-proceed to Telegram OAuth
    const redirectUri = window.location.origin + '/kirish/callback';
    const state = Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('farzandly_oauth_state', state);

    const authUrl = `https://oauth.telegram.org/auth?client_id=${encodeURIComponent(
      inputClientId.trim()
    )}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid+profile&state=${state}`;

    window.location.href = authUrl;
  };

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
        className="w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-slate-200 border-b-8 p-6 sm:p-10 shadow-2xl space-y-6 relative z-10"
      >
        {/* Brand header */}
        <div className="text-center space-y-3">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-[#229ED9] border-b-4 border-[#1B7FB0] text-white flex items-center justify-center shadow-lg shadow-[#229ED9]/30">
            <Send className="w-8 h-8 -rotate-12 translate-x-0.5" />
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest font-black text-[#229ED9] bg-sky-50 px-3 py-1 rounded-full border border-sky-200 inline-block">
              Telegram OpenID Connect (OIDC)
            </span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Farzandly hisobingizga kiring
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Parolsiz va xavfsiz. Telegram orqali bitta tugma bilan kiring yoki ro‘yxatdan o‘ting.
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

        {/* Primary Official Telegram Button */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleTelegramOidcLogin}
            className="w-full bg-[#229ED9] hover:bg-[#1e8cc0] active:translate-y-1 active:border-b-0 text-white font-black py-4 px-6 rounded-2xl border-b-4 border-[#176d96] shadow-xl shadow-[#229ED9]/30 flex items-center justify-center gap-3 text-base sm:text-lg transition-all cursor-pointer group"
          >
            <Send className="w-6 h-6 -rotate-12 group-hover:scale-110 transition-transform" />
            <span>Telegram orqali kirish (Rasmiy)</span>
            <ExternalLink className="w-4 h-4 opacity-70 ml-auto" />
          </button>

          {/* OIDC Secret Badge Indicator */}
          <div className="flex items-center justify-between px-2 text-[11px] text-slate-500 font-semibold">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Client Secret: Ulandi (HMAC-SHA256 / OIDC)</span>
            </div>
            <button
              type="button"
              onClick={() => setShowConfigModal(true)}
              className="text-[#229ED9] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <Settings className="w-3 h-3" />
              <span>{telegramConfig.clientId ? `ID: ${telegramConfig.clientId}` : 'Client ID kiritish'}</span>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-[1px] bg-slate-200" />
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Yoki sinov rejimi bilan kirish
          </span>
          <div className="flex-1 h-[1px] bg-slate-200" />
        </div>

        {/* Interactive Custom Form */}
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
            className="w-full bg-stone-800 hover:bg-stone-900 active:translate-y-1 active:border-b-0 text-white font-black py-3 px-6 rounded-2xl border-b-4 border-stone-950 shadow-md flex items-center justify-center gap-2 text-sm transition-all cursor-pointer"
          >
            <UserCheck className="w-4 h-4" />
            <span>{loading ? 'Kirilmoqda...' : 'Tezkor ism bilan davom etish'}</span>
          </button>
        </form>

        {/* Quick Demo Personas */}
        <div className="space-y-2">
          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center">
            1-bosqichli sinov ota-ona profillari:
          </p>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => handlePersonaLogin('aziza')}
              className="p-3 rounded-2xl border-2 border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-center space-y-1 group cursor-pointer"
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
              className="p-3 rounded-2xl border-2 border-slate-200 hover:border-sky-500 hover:bg-sky-50/50 transition-all text-center space-y-1 group cursor-pointer"
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
              className="p-3 rounded-2xl border-2 border-slate-200 hover:border-purple-500 hover:bg-purple-50/50 transition-all text-center space-y-1 group cursor-pointer"
            >
              <div className="w-9 h-9 mx-auto rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs group-hover:scale-105 transition-transform">
                DS
              </div>
              <p className="font-bold text-slate-800 text-xs truncate">Dilnoza S.</p>
              <p className="text-[10px] text-slate-400">Pedagog</p>
            </button>
          </div>
        </div>

        {/* Security & Trust Note */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs text-slate-500 leading-relaxed">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <p>
            Farzandly sizning Telegram parolingiz yoki shaxsiy yozishmalaringizni hech qachon so‘ramaydi. Autentifikatsiya Telegram OpenID Connect xalqaro standarti asosida amalga oshiriladi.
          </p>
        </div>
      </motion.div>

      {/* Telegram Client ID Modal */}
      <AnimatePresence>
        {showConfigModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-slate-200 space-y-5 relative"
            >
              <button
                type="button"
                onClick={() => setShowConfigModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-[#229ED9] flex items-center justify-center">
                  <KeyRound className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-black text-lg text-slate-800">Telegram Client ID</h3>
                  <p className="text-xs text-slate-500">BotFather taqdim etgan Client ID (Bot ID)</p>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-1">
                <p className="font-bold text-slate-700">Ulangan maxfiy kalit (Secret):</p>
                <p className="font-mono text-[11px] text-emerald-700 truncate bg-white p-2 rounded-xl border border-slate-200">
                  O8WVosrTnxL4eEKz42Z14G3b3QoPph_IWSonUx7mwjJ_Nl5o2IWKbw
                </p>
              </div>

              <form onSubmit={handleSaveClientId} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Telegram Client ID (Raqamli Bot ID)
                  </label>
                  <input
                    type="text"
                    value={inputClientId}
                    onChange={(e) => setInputClientId(e.target.value)}
                    placeholder="Masalan: 8145291823"
                    className="w-full bg-slate-50 border-2 border-slate-200 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#229ED9] focus:bg-white transition-all font-mono"
                    autoFocus
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    BotFather da <i>/mybots &gt; Login Widget &gt; Switch to OpenID Connect</i> bo‘limida ko‘rsatiladi.
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowConfigModal(false)}
                    className="flex-1 py-3 rounded-2xl border-2 border-slate-200 text-slate-600 font-bold text-sm hover:bg-slate-50 cursor-pointer"
                  >
                    Bekor qilish
                  </button>
                  <button
                    type="submit"
                    className="flex-1 btn-primary py-3 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Saqlash va Kirish</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
