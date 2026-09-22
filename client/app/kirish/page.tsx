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
  ExternalLink,
  QrCode,
  Smartphone,
  X,
  RefreshCw,
  Sparkles,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { T } from '@/components/T';
import { useI18n } from '@/context/LanguageContext';

export default function KirishPage() {
  const router = useRouter();
  const { isAuthenticated, loginWithEmail, registerWithEmail, setAuthenticatedSession } = useAuth();
  const { t } = useI18n();

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
  // Telegram Bot Deep-Link Auth state (@farzandlybot?start=uuid)
  const [tgSession, setTgSession] = useState<{
    sessionId: string;
    botUrl: string;
    botUsername: string;
    qrCodeUrl: string;
  } | null>(null);
  const [isTgModalOpen, setIsTgModalOpen] = useState(false);
  const [tgLoading, setTgLoading] = useState(false);
  const [tgStatus, setTgStatus] = useState<'idle' | 'waiting' | 'success' | 'expired' | 'error'>('idle');
  const pollIntervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const stopPolling = () => {
    if (pollIntervalRef.current) {
      clearInterval(pollIntervalRef.current);
      pollIntervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopPolling();
  }, []);

  const handleTelegramBotLogin = async () => {
    stopPolling();
    setTgLoading(true);
    setTgStatus('waiting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/auth/telegram/session', {
        method: 'POST',
      });
      const data = await res.json();

      if (!res.ok || !data.success || !data.data) {
        throw new Error(data.message || 'Telegram sessiyasini yaratib bo‘lmadi');
      }

      const session = data.data;
      setTgSession(session);
      setIsTgModalOpen(true);

      const isMobile =
        typeof navigator !== 'undefined' &&
        /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      if (isMobile) {
        window.open(session.botUrl, '_blank');
      }

      // Start polling every 1.5 seconds
      pollIntervalRef.current = setInterval(async () => {
        try {
          const checkRes = await fetch(
            `/api/auth/telegram/session?sessionId=${encodeURIComponent(session.sessionId)}`
          );
          const checkData = await checkRes.json();

          if (checkData.status === 'authenticated' && checkData.data) {
            stopPolling();
            setTgStatus('success');
            setAuthenticatedSession(checkData.data.user, checkData.data.token);
            setTimeout(() => {
              router.push('/dashboard');
            }, 800);
          } else if (checkData.status === 'expired') {
            stopPolling();
            setTgStatus('expired');
          }
        } catch (pollErr) {
          console.warn('Telegram auth polling error:', pollErr);
        }
      }, 1500);
    } catch (err: any) {
      console.error('Telegram bot login error:', err);
      setTgStatus('error');
      setErrorMessage(err.message || 'Telegram orqali kirishda xatolik yuz berdi');
    } finally {
      setTgLoading(false);
    }
  };
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
      setErrorMessage(t('login.err_fields'));
      return;
    }

    if (mode === 'register' && !fullName.trim()) {
      setErrorMessage(t('login.err_name'));
      return;
    }

    if (password.length < 6) {
      setErrorMessage(t('login.err_pass'));
      return;
    }

    setLoading(true);

    try {
      if (mode === 'login') {
        const res = await loginWithEmail(email.trim(), password);
        if (res.success) {
          setSuccessMessage(t('login.welcome'));
          setTimeout(() => {
            router.push('/dashboard');
          }, 600);
        } else {
          setErrorMessage(res.message || t('login.err_creds'));
        }
      } else {
        const res = await registerWithEmail(fullName.trim(), email.trim(), password);
        if (res.success) {
          setSuccessMessage(t('login.registered'));
          setTimeout(() => {
            router.push('/dashboard');
          }, 600);
        } else {
          setErrorMessage(res.message || t('login.err_register'));
        }
      }
    } catch {
      setErrorMessage(t('login.err_server'));
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
            {mode === 'login' ? t('login.title_login') : t('login.title_register')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            {mode === 'login'
              ? t('login.sub_login')
              : t('login.sub_register')}
          </p>
        </div>

        {/* Mode Tabs */}
        <div
          role="tablist"
          aria-label={t('login.aria_form')}
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
            <T k="login.1" /></button>
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
            <T k="login.2" /></button>
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
                <T k="login.3" /></label>
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
                  placeholder={t('login.ph_name')}
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
              <T k="login.4" /></label>
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
                <T k="login.5" /></label>
              {mode === 'login' && (
                <span className="text-[11px] text-slate-400">
                  <T k="login.6" /></span>
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
                aria-label={showPassword ? t('login.hide_pass') : t('login.show_pass')}
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
                <span><T k="login.7" /></span>
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
            <T k="login.8" /></div>
        </div>

        {/* Telegram Bot Deep-link Login (Vena AI style) */}
        <div className="space-y-2">
          <button
            type="button"
            onClick={handleTelegramBotLogin}
            disabled={tgLoading}
            className="w-full bg-[#229ED9] hover:bg-[#1f8fc4] active:scale-[0.99] disabled:opacity-75 text-white font-semibold py-3 px-4 rounded-xl shadow-md shadow-sky-500/20 flex items-center justify-center gap-2.5 text-sm transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#229ED9] focus-visible:ring-offset-2"
          >
            {tgLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                <span>Telegram botga ulanmoqda...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4 -rotate-12" aria-hidden="true" />
                <span>Telegram orqali tezkor kirish</span>
              </>
            )}
          </button>
        </div>

        {/* Privacy & Security Note */}
        <div className="pt-2 border-t border-slate-100 flex items-start gap-2.5 text-xs text-slate-500 leading-relaxed">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p>
            <T k="login.10" />
          </p>
        </div>
      </m.div>

      {/* Telegram Deep-Link Auth Modal */}
      <AnimatePresence>
        {isTgModalOpen && tgSession && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
            <m.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 relative text-center space-y-4"
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => {
                  stopPolling();
                  setIsTgModalOpen(false);
                }}
                className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 rounded-full p-1 transition-colors"
                aria-label="Yopish"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Telegram Icon */}
              <div className="w-14 h-14 mx-auto rounded-2xl bg-[#229ED9] text-white flex items-center justify-center shadow-lg shadow-sky-500/25">
                <Send className="w-7 h-7 -rotate-12 translate-x-0.5 -translate-y-0.5" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 font-display">
                  Telegram orqali tasdiqlash
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  @{tgSession.botUsername || 'farzandlybot'} rasmiy boti
                </p>
              </div>

              {/* QR Code Container */}
              <div className="relative mx-auto w-52 h-52 p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-center">
                {tgStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-emerald-600 space-y-2">
                    <CheckCircle2 className="w-16 h-16 animate-bounce" />
                    <span className="text-xs font-semibold text-slate-700">Muvaffaqiyatli kirdingiz!</span>
                  </div>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={tgSession.qrCodeUrl}
                    alt="Telegram Bot Auth QR Code"
                    className="w-full h-full object-contain rounded-lg"
                  />
                )}
              </div>

              {/* Status indicator badge */}
              <div className="py-1">
                {tgStatus === 'waiting' && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-medium border border-sky-200">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                    </span>
                    <span>Botda «START» tugmasini bosing...</span>
                  </div>
                )}
                {tgStatus === 'success' && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Tasdiqlandi! Sahifa ochilmoqda...</span>
                  </div>
                )}
                {tgStatus === 'expired' && (
                  <div className="space-y-2">
                    <span className="text-xs text-amber-600 font-medium block">
                      Sessiya muddati tugadi.
                    </span>
                    <button
                      type="button"
                      onClick={handleTelegramBotLogin}
                      className="inline-flex items-center gap-1.5 text-xs text-sky-600 hover:text-sky-700 font-semibold"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      Qayta urinish
                    </button>
                  </div>
                )}
              </div>

              {/* Direct Open Bot Button */}
              <a
                href={tgSession.botUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#229ED9] hover:bg-[#1f8fc4] active:scale-[0.99] text-white font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow-sm transition-all"
              >
                <span>Telegram botni ochish</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <p className="text-[11px] text-slate-400 leading-tight">
                Telefoningiz kamerasi orqali QR kodni skanerlang yoki yuqoridagi tugma orqali botga o‘ting.
              </p>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
