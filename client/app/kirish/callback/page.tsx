'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Send, CheckCircle2, AlertCircle, ArrowRight, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useI18n } from '@/context/LanguageContext';
import UserAvatar from '@/components/UserAvatar';
import { T } from '@/components/T';
import { accountApi } from '@/lib/accountApi';

function TelegramCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { redeemLoginTicket, setAuthenticatedSession, user } = useAuth();
  const { t } = useI18n();

  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const code = searchParams.get('code');
    const ticket = searchParams.get('ticket');
    const errorParam = searchParams.get('error');
    const errorDesc = searchParams.get('error_description');

    if (errorParam) {
      setStatus('error');
      setErrorMessage(errorDesc || errorParam || t('cb.cancelled'));
      return;
    }

    const finish = (result: { success: boolean; message?: string }) => {
      if (!result.success) {
        setStatus('error');
        setErrorMessage(result.message || 'Telegram orqali tizimga kirishda xatolik');
        return;
      }
      setStatus('success');
      setTimeout(() => router.push('/dashboard'), 1200);
    };

    // One-click link from the bot: a signed 15-minute ticket, redeemed on the server.
    if (ticket) {
      redeemLoginTicket(ticket).then(finish);
      return;
    }

    if (!code) {
      setStatus('error');
      setErrorMessage(searchParams.get('direct_token') ? 'Bu havola eskirgan. Botdan yangi havola oling.' : 'Avtorizatsiya kodi topilmadi');
      return;
    }

    // Telegram OIDC: the server exchanges the code with its own client secret.
    accountApi.exchangeOidcCode(code).then((res) => {
      if (res.success && res.data?.token && res.data?.user) {
        setUserData(res.data.user);
        setAuthenticatedSession(res.data.user, res.data.token);
        finish({ success: true });
      } else {
        finish({ success: false, message: res.message });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className="w-full max-w-md bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-slate-200 border-b-8 p-8 shadow-2xl text-center space-y-6">
      {status === 'loading' && (
        <div className="space-y-4 py-6">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-[#229ED9] text-white flex items-center justify-center shadow-lg shadow-[#229ED9]/30 relative animate-bounce">
            <Send className="w-8 h-8 -rotate-12 translate-x-0.5" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-black text-slate-800"><T k="cb.1" /></h2>
            <p className="text-xs text-slate-500 font-medium">
              <T k="cb.2" /></p>
          </div>
          <div className="flex justify-center pt-2">
            <Loader2 className="w-6 h-6 text-[#229ED9] animate-spin" />
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="space-y-4 py-4 animate-in fade-in zoom-in duration-300">
          <div className="flex justify-center">
            <UserAvatar
              name={(userData || user)?.name}
              photoUrl={(userData || user)?.photoUrl}
              telegramUsername={(userData || user)?.telegramUsername}
              size="lg"
            />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-black text-slate-800"><T k="cb.3" /></h2>
            <p className="text-sm font-bold text-emerald-700">
              {userData?.name ? t('cb.linked_named', undefined, { name: userData.name }) : t('cb.linked')}
            </p>
          </div>
          <p className="text-xs text-slate-400"><T k="cb.4" /></p>
        </div>
      )}

      {status === 'error' && (
        <div className="space-y-5 py-4 animate-in fade-in zoom-in duration-300">
          <div className="w-16 h-16 mx-auto rounded-3xl bg-rose-100 text-rose-600 border-2 border-rose-300 flex items-center justify-center">
            <AlertCircle className="w-9 h-9" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-black text-slate-800"><T k="cb.5" /></h2>
            <p className="text-xs sm:text-sm text-rose-600 font-medium bg-rose-50 border border-rose-200 p-3 rounded-2xl">
              {errorMessage}
            </p>
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => router.push('/kirish')}
              className="w-full btn-primary py-3 px-5 rounded-2xl text-sm font-black flex items-center justify-center gap-2 cursor-pointer"
            >
              <span><T k="cb.6" /></span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TelegramCallbackPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 relative">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-300/25 rounded-full blur-3xl pointer-events-none" />
      <Suspense
        fallback={
          <div className="w-full max-w-md bg-white rounded-3xl border-2 border-slate-200 p-8 shadow-xl text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-slate-100 animate-pulse mb-4" />
            <div className="h-6 w-3/4 mx-auto bg-slate-200 rounded-lg animate-pulse mb-2" />
            <div className="h-4 w-1/2 mx-auto bg-slate-100 rounded-lg animate-pulse" />
          </div>
        }
      >
        <TelegramCallbackContent />
      </Suspense>
    </div>
  );
}
