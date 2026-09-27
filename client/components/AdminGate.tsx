'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Loader2, Lock } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { accountApi } from '@/lib/accountApi';
import AdminLoginForm from '@/components/AdminLoginForm';

/** Gates its children behind an admin session — reuses /admin/stats as the "am I admin" check. */
export default function AdminGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading } = useAuth();
  const [access, setAccess] = useState<'checking' | 'ok' | 'denied' | 'unavailable'>('checking');

  const check = useCallback(async () => {
    const res = await accountApi.adminStats();
    if (res.success) setAccess('ok');
    else if (res.code === 'FORBIDDEN' || res.code === 'AUTH_REQUIRED') setAccess('denied');
    else setAccess('unavailable');
  }, []);

  useEffect(() => {
    if (!isLoading && isAuthenticated) check();
    if (!isLoading && !isAuthenticated) setAccess('denied');
  }, [isLoading, isAuthenticated, check]);

  if (isLoading || access === 'checking') {
    return (
      <div className="flex justify-center py-24" role="status" aria-label="Yuklanmoqda">
        <Loader2 className="w-7 h-7 text-emerald-600 animate-spin" />
      </div>
    );
  }

  if (access !== 'ok') {
    return (
      <div className="max-w-md mx-auto px-4 py-20">
        <div className="card-farzandly p-8 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-slate-100 flex items-center justify-center">
            <Lock className="w-7 h-7 text-slate-500" />
          </div>
          <h1 className="text-xl font-black text-slate-900">Bu sahifa administratorlar uchun</h1>
          <p className="text-sm text-slate-600">
            {access === 'unavailable'
              ? 'Server javob bermadi. Birozdan so‘ng qayta urinib ko‘ring.'
              : !isAuthenticated
              ? 'Admin login va parolingiz bilan kiring.'
              : 'Hisobingizda admin huquqi yo‘q.'}
          </p>
          {!isAuthenticated && <AdminLoginForm onSuccess={() => setAccess('checking')} />}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
