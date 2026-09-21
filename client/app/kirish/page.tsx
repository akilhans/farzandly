'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { m, AnimatePresence } from 'framer-motion';
import {
  Send,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  ArrowRight,
  Mail,
  Lock,
  User,
  Loader2,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function KirishPage() {
  const router = useRouter();
  const { isAuthenticated, loginWithEmail, registerWithEmail } = useAuth();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Auto redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, router]);

  // Official Telegram OIDC Login
  const handleTelegramOidcLogin = () => {
    const clientId =
      process.env.NEXT_PUBLIC_TELEGRAM_CLIENT_ID ||
      (typeof window !== 'undefined' ? localStorage.getItem('farzandly_tg_client_id') : '') ||
      '891291780';

    const redirectUri = window.location.origin + '/kirish/callback';
    const state = Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('farzandly_oauth_state', state);

    const authUrl = `https://oauth.telegram.org/auth?client_id=${encodeURIComponent(
      clientId
    )}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=openid+profile&state=${state}`;

    window.location.href = authUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!email.trim() || !password) {
      setErrorMessage('Iltimos, barcha maydonlarni to‘ldiring');
      return;
    }

    if (mode === 'register' && !fullName.trim()) {
      setErrorMessage('Iltimos, ismingizni kiriting');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Parol kamida 6 ta belgidan iborat bo‘lishi kerak');
      return;
    }

    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await loginWithEmail(email.trim(), password);
        if (res.success) {
          setSuccessMessage('Xush kelibsiz!');
          setTimeout(() => {
            router.push('/dashboard');
          }, 600);
        } else {
          setErrorMessage(res.message || 'Email yoki parol noto‘g‘ri');
        }
      } else {
        const res = await registerWithEmail(fullName.trim(), email.trim(), password);
        if (res.success) {
          setSuccessMessage('Muvaffaqiyatli ro‘yxatdan o‘tdingiz!');
          setTimeout(() => {
            router.push('/dashboard');
          }, 600);
        } else {
          setErrorMessage(res.message || 'Ro‘yxatdan o‘tishda xatolik yuz berdi');
        }
      }
    } catch {
      setErrorMessage('Server bilan bog‘lanishda xatolik yuz berdi');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-10 relative overflow-hidden bg-slate-50/50">
      {/* Background ambient accents */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-sky-100/60 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <m.div
        initial={{ opacity: 0, y: 16, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 sm:p-8 space-y-6 relative z-10"
      >
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-emerald-600/20 font-black text-2xl font-display">
            F
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
            {mode === 'login' ? 'Tizimga kirish' : 'Ro‘yxatdan o‘tish'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            {mode === 'login'
              ? 'Farzand tarbiyasi bo‘yicha ta’lim safaringizni davom ettiring'
              : 'Oila va farzand rivoji uchun platformaga qo‘shiling'}
          </p>
        </div>

        {/* Mode Tabs */}
        <div
          role="tablist"
          aria-label="Kirish yoki Ro‘yxatdan o‘tish"
          className="grid grid-cols-2 p-1 bg-slate-100 rounded-2xl gap-1"
        >
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'login'}
            aria-controls="auth-form-panel"
            onClick={() => {
              setMode('login');
              setErrorMessage('');
            }}
            className={`py-2.5 text-sm font-semibold rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              mode === 'login'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Kirish
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={mode === 'register'}
            aria-controls="auth-form-panel"
            onClick={() => {
              setMode('register');
              setErrorMessage('');
            }}
            className={`py-2.5 text-sm font-semibold rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
              mode === 'register'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Ro‘yxatdan o‘tish
          </button>
        </div>

        {/* Feedback alerts */}
        <AnimatePresence mode="wait">
          {errorMessage && (
            <m.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              role="alert"
              aria-live="assertive"
              className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm font-medium flex items-center gap-2.5"
            >
              <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" aria-hidden="true" />
              <span>{errorMessage}</span>
            </m.div>
          )}

          {successMessage && (
            <m.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              role="status"
              aria-live="polite"
              className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-medium flex items-center gap-2.5"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>{successMessage}</span>
            </m.div>
          )}
        </AnimatePresence>

        {/* Form */}
        <form
          id="auth-form-panel"
          onSubmit={handleSubmit}
          className="space-y-4"
          noValidate
        >
          {mode === 'register' && (
            <div>
              <label
                htmlFor="auth-fullname"
                className="block text-xs font-semibold text-slate-700 mb-1.5"
              >
                Ismingiz
              </label>
              <div className="relative">
                <User
                  className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400"
                  aria-hidden="true"
                />
                <input
                  id="auth-fullname"
                  type="text"
                  required={mode === 'register'}
                  autoComplete="name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Ismingizni kiriting"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                />
              </div>
            </div>
          )}

          <div>
            <label
              htmlFor="auth-email"
              className="block text-xs font-semibold text-slate-700 mb-1.5"
            >
              Email manzilingiz
            </label>
            <div className="relative">
              <Mail
                className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400"
                aria-hidden="true"
              />
              <input
                id="auth-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@mail.uz"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label
                htmlFor="auth-password"
                className="block text-xs font-semibold text-slate-700"
              >
                Parol
              </label>
              {mode === 'login' && (
                <span className="text-[11px] text-slate-400">
                  Kamida 6 ta belgi
                </span>
              )}
            </div>
            <div className="relative">
              <Lock
                className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400"
                aria-hidden="true"
              />
              <input
                id="auth-password"
                type={showPassword ? 'text' : 'password'}
                required
                minLength={6}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-11 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Parolni yashirish' : 'Parolni ko‘rsatish'}
                className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded p-0.5"
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" aria-hidden="true" />
                ) : (
                  <Eye className="w-4 h-4" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Tekshirilmoqda...</span>
              </>
            ) : (
              <>
                <span>{mode === 'login' ? 'Tizimga kirish' : 'Hisob ochish'}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center" aria-hidden="true">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative bg-white px-3 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Yoki
          </div>
        </div>

        {/* Official Telegram Login Button */}
        <div>
          <button
            type="button"
            onClick={handleTelegramOidcLogin}
            className="w-full bg-[#229ED9] hover:bg-[#1f8fc4] active:scale-[0.99] text-white font-semibold py-2.5 px-4 rounded-xl shadow-sm flex items-center justify-center gap-2.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229ED9] focus-visible:ring-offset-2"
          >
            <Send className="w-4 h-4 -rotate-12" aria-hidden="true" />
            <span>Telegram orqali kirish</span>
          </button>
        </div>

        {/* Privacy & Security Note */}
        <div className="pt-2 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            Ma’lumotlaringiz xavfsiz himoyalangan. Parollar maxfiy shifrlangan holda saqlanadi.
          </p>
        </div>
      </m.div>
    </div>
  );
}
