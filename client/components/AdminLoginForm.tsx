'use client';

import React, { useState } from 'react';
import { Loader2, LogIn } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function AdminLoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const { loginAsAdmin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !password) return;
    setBusy(true);
    setError('');
    const res = await loginAsAdmin(username, password);
    setBusy(false);
    if (res.success) {
      onSuccess?.();
    } else {
      setError(res.message || 'Login yoki parol noto‘g‘ri');
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3 text-left" aria-label="Admin kirish">
      <div>
        <label htmlFor="admin-username" className="sr-only">Login</label>
        <input
          id="admin-username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Login"
          autoComplete="username"
          className="w-full rounded-xl border-2 border-slate-200 px-3.5 py-2.5 text-sm focus:border-emerald-500 outline-none"
        />
      </div>
      <div>
        <label htmlFor="admin-password" className="sr-only">Parol</label>
        <input
          id="admin-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Parol"
          autoComplete="current-password"
          className="w-full rounded-xl border-2 border-slate-200 px-3.5 py-2.5 text-sm focus:border-emerald-500 outline-none"
        />
      </div>
      {error && (
        <p className="text-sm text-rose-700" role="alert">{error}</p>
      )}
      <button
        type="submit"
        disabled={busy}
        className="w-full btn-primary text-sm py-3 flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {busy ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogIn className="w-4 h-4" />}
        Kirish
      </button>
    </form>
  );
}
