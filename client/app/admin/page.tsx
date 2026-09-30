'use client';

import React, { Suspense, useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Lock,
  RefreshCw,
  Download,
  Loader2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import AdminLoginForm from '@/components/AdminLoginForm';
import { accountApi, PaymentRequest } from '@/lib/accountApi';
import { formatSom } from '@/lib/payments';
import { UsersTab, SignupsChart } from '@/components/admin/AdminUsers';
import { BroadcastTab } from '@/components/admin/AdminBroadcast';

type Tab = 'payments' | 'users' | 'broadcast' | 'audit';

interface Stats {
  totalUsers: number;
  signups7d: number;
  activeToday: number;
  active7d: number;
  lifetimePremium: number;
  bonusPremiumActive: number;
  pendingPayments: number;
  approvedPayments: number;
  revenueUzs: number;
  referralsRewarded: number;
  referralsPending: number;
  signupsToday?: number;
  signups30d?: number;
  byProvider?: Record<string, number>;
  signupSeries?: { date: string; count: number }[];
}

const fmtDate = (d?: string) =>
  d ? new Date(d).toLocaleString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';

function toCsv(rows: Record<string, unknown>[]): string {
  if (!rows.length) return '';
  const headers = Object.keys(rows[0]);
  const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  return [headers.join(','), ...rows.map((r) => headers.map((h) => esc(r[h])).join(','))].join('\n');
}

function downloadCsv(name: string, rows: Record<string, unknown>[]) {
  const blob = new Blob(['\uFEFF' + toCsv(rows)], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

function AdminContent() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const params = useSearchParams();
  const tab = (['payments', 'users', 'broadcast', 'audit'].includes(params.get('tab') || '') ? params.get('tab') : 'payments') as Tab;

  const [access, setAccess] = useState<'checking' | 'ok' | 'denied' | 'unavailable'>('checking');
  const [stats, setStats] = useState<Stats | null>(null);
  const [notice, setNotice] = useState<{ kind: 'ok' | 'err'; text: string } | null>(null);

  const loadStats = useCallback(async () => {
    const res = await accountApi.adminStats();
    if (res.success) {
      setStats(res.data);
      setAccess('ok');
    } else if (res.code === 'FORBIDDEN' || res.code === 'AUTH_REQUIRED') {
      setAccess('denied');
    } else {
      setAccess('unavailable');
    }
  }, []);

  useEffect(() => {
    if (!isLoading && isAuthenticated) loadStats();
    if (!isLoading && !isAuthenticated) setAccess('denied');
  }, [isLoading, isAuthenticated, loadStats]);

  const say = (kind: 'ok' | 'err', text: string) => {
    setNotice({ kind, text });
    setTimeout(() => setNotice(null), 5000);
  };

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
          <h1 className="text-xl font-black text-slate-900">
            {access === 'unavailable' ? 'Admin panel vaqtincha ishlamayapti' : 'Bu sahifa administratorlar uchun'}
          </h1>
          <p className="text-sm text-slate-600">
            {!isAuthenticated
              ? 'Admin login va parolingiz bilan kiring.'
              : access === 'unavailable'
              ? 'Server yoki ma’lumotlar bazasi javob bermadi. Birozdan so‘ng qayta urinib ko‘ring.'
              : 'Hisobingizda admin huquqi yo‘q.'}
          </p>
          {!isAuthenticated ? (
            <AdminLoginForm onSuccess={() => setAccess('checking')} />
          ) : (
            <Link href="/kirish" className="btn-outline inline-flex text-sm px-5 py-3">
              Boshqa hisob bilan kirish
            </Link>
          )}
        </div>
      </div>
    );
  }

  const setTab = (t: Tab) => router.replace(`/admin?tab=${t}`);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <p className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-800">
            <ShieldCheck className="w-4 h-4" /> Admin panel
          </p>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Farzandly boshqaruvi</h1>
        </div>
        <div className="flex gap-2">
          <Link href="/instagram" className="btn-outline text-sm px-4 py-2.5 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Instagram studio
          </Link>
          <button type="button" onClick={loadStats} className="btn-outline text-sm px-4 py-2.5 inline-flex items-center gap-2">
            <RefreshCw className="w-4 h-4" /> Yangilash
          </button>
        </div>
      </header>

      {stats && (
        <div className="space-y-3">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              ['Foydalanuvchilar', stats.totalUsers, `+${stats.signups7d} shu hafta`],
              ['Faol (7 kun)', stats.active7d, `${stats.activeToday} bugun`],
              ['Umrbod Premium', stats.lifetimePremium, `${stats.bonusPremiumActive} bonusda`],
              ['Tushum', `${formatSom(stats.revenueUzs)} so‘m`, `${stats.approvedPayments} to‘lov`],
              ['Bugun ro‘yxatdan o‘tdi', stats.signupsToday ?? '—', `${stats.signups30d ?? '—'} ta 30 kunda`],
              [
                'Premiumga o‘tish',
                stats.totalUsers ? `${((stats.lifetimePremium / stats.totalUsers) * 100).toFixed(1)}%` : '—',
                'umrbod / jami',
              ],
              [
                'Kirish usuli',
                `${stats.byProvider?.telegram ?? 0} TG`,
                `${stats.byProvider?.email ?? 0} email${stats.byProvider?.guest ? ` · ${stats.byProvider.guest} mehmon` : ''}`,
              ],
              ['Takliflar', stats.referralsRewarded, `${stats.referralsPending} kutilmoqda`],
            ].map(([label, value, sub]) => (
              <div key={String(label)} className="rounded-2xl bg-white border-2 border-slate-200 p-4">
                <dt className="text-xs font-bold text-slate-500">{label}</dt>
                <dd className="text-xl font-black text-slate-900 mt-1">{value}</dd>
                <dd className="text-xs text-slate-500 mt-0.5">{sub}</dd>
              </div>
            ))}
          </dl>
          {stats.signupSeries?.length ? <SignupsChart series={stats.signupSeries} /> : null}
        </div>
      )}

      {notice && (
        <div
          role="status"
          className={`rounded-2xl border-2 p-4 flex gap-3 text-sm font-semibold ${
            notice.kind === 'ok' ? 'bg-emerald-50 border-emerald-300 text-emerald-900' : 'bg-rose-50 border-rose-300 text-rose-900'
          }`}
        >
          {notice.kind === 'ok' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
          {notice.text}
        </div>
      )}

      <nav className="flex gap-1 border-b-2 border-slate-200" aria-label="Admin bo‘limlari">
        {([
          ['payments', `To‘lovlar${stats?.pendingPayments ? ` (${stats.pendingPayments})` : ''}`],
          ['users', 'Foydalanuvchilar'],
          ['broadcast', 'Xabar yuborish'],
          ['audit', 'Jurnal'],
        ] as [Tab, string][]).map(([key, label]) => (
          <button
            key={key}
            type="button"
            onClick={() => setTab(key)}
            aria-current={tab === key ? 'page' : undefined}
            className={`px-4 py-2.5 text-sm font-bold -mb-0.5 border-b-2 ${
              tab === key ? 'border-emerald-600 text-emerald-800' : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            {label}
          </button>
        ))}
      </nav>

      {tab === 'payments' && <PaymentsTab onChange={loadStats} say={say} />}
      {tab === 'users' && <UsersTab say={say} />}
      {tab === 'broadcast' && <BroadcastTab say={say} />}
      {tab === 'audit' && <AuditTab />}
    </div>
  );
}

function PaymentsTab({ onChange, say }: { onChange: () => void; say: (k: 'ok' | 'err', t: string) => void }) {
  const [status, setStatus] = useState<'pending' | 'approved' | 'rejected' | ''>('pending');
  const [items, setItems] = useState<PaymentRequest[] | null>(null);
  const [busy, setBusy] = useState<string | null>(null);
  const [rejecting, setRejecting] = useState<{ id: string; reason: string } | null>(null);

  const load = useCallback(async () => {
    setItems(null);
    const res = await accountApi.adminPayments(status);
    setItems(res.success ? res.data.items : []);
  }, [status]);

  useEffect(() => {
    load();
  }, [load]);

  const review = async (id: string, decision: 'approve' | 'reject', reason?: string) => {
    setBusy(id);
    const res = await accountApi.adminReviewPayment(id, decision, reason);
    setBusy(null);
    setRejecting(null);
    if (res.success) {
      say('ok', decision === 'approve' ? 'To‘lov tasdiqlandi — umrbod Premium yoqildi.' : 'To‘lov rad etildi.');
      load();
      onChange();
    } else {
      say('err', res.message || 'Xatolik');
    }
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2" role="group" aria-label="Holat bo‘yicha filtr">
          {([
            ['pending', 'Kutilmoqda'],
            ['approved', 'Tasdiqlangan'],
            ['rejected', 'Rad etilgan'],
            ['', 'Hammasi'],
          ] as const).map(([key, label]) => (
            <button
              key={key || 'all'}
              type="button"
              onClick={() => setStatus(key)}
              aria-pressed={status === key}
              className={`px-3 py-1.5 rounded-xl text-sm font-bold border-2 ${
                status === key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <button
          type="button"
          disabled={!items?.length}
          onClick={() =>
            downloadCsv(
              `farzandly-tolovlar-${new Date().toISOString().slice(0, 10)}.csv`,
              (items || []).map((p) => ({
                sana: fmtDate(p.createdAt),
                foydalanuvchi: p.telegramUsername ? `@${p.telegramUsername}` : p.userName,
                summa: p.amount,
                holat: p.status,
                korib_chiqilgan: fmtDate(p.reviewedAt),
                sabab: p.rejectReason || '',
              }))
            )
          }
          className="btn-outline text-sm px-4 py-2 inline-flex items-center gap-2 disabled:opacity-50"
        >
          <Download className="w-4 h-4" /> CSV
        </button>
      </div>

      {items === null ? (
        <div className="flex justify-center py-10"><Loader2 className="w-6 h-6 animate-spin text-emerald-600" /></div>
      ) : items.length === 0 ? (
        <p className="text-sm text-slate-500 py-10 text-center">
          {status === 'pending' ? 'Kutilayotgan to‘lovlar yo‘q. Yangi so‘rov kelganda Telegramga xabar keladi.' : 'Bu holatda to‘lovlar yo‘q.'}
        </p>
      ) : (
        <ul className="space-y-3">
          {items.map((p) => (
            <li key={p._id} className="rounded-2xl bg-white border-2 border-slate-200 p-4 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-black text-slate-900">
                    {p.telegramUsername ? `@${p.telegramUsername}` : p.userName || 'Ota-ona'}
                    {p.plan === 'gift' && (
                      <span className="ml-2 align-middle text-xs font-bold px-2 py-0.5 rounded-lg bg-amber-100 text-amber-900">🎁 Sovg‘a</span>
                    )}
                  </p>
                  <p className="text-sm text-slate-500">
                    {formatSom(p.amount)} so‘m · {fmtDate(p.createdAt)}
                  </p>
                  {p.note && <p className="text-sm text-slate-600 mt-1">“{p.note}”</p>}
                </div>
                {p.status === 'pending' ? (
                  <div className="flex gap-2">
                    <button
                      type="button"
                      disabled={busy === p._id}
                      onClick={() => review(p._id, 'approve')}
                      className="btn-primary text-sm px-4 py-2 inline-flex items-center gap-1.5 disabled:opacity-60"
                    >
                      <CheckCircle2 className="w-4 h-4" /> Tasdiqlash
                    </button>
                    <button
                      type="button"
                      disabled={busy === p._id}
                      onClick={() => setRejecting({ id: p._id, reason: '' })}
                      className="btn-outline text-sm px-4 py-2 inline-flex items-center gap-1.5"
                    >
                      <XCircle className="w-4 h-4" /> Rad etish
                    </button>
                  </div>
                ) : (
                  <span
                    className={`text-sm font-bold px-3 py-1 rounded-xl ${
                      p.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {p.status === 'approved' ? 'Tasdiqlangan' : 'Rad etilgan'}
                  </span>
                )}
              </div>
              {rejecting?.id === p._id && (
                <div className="flex flex-col sm:flex-row gap-2">
                  <label className="sr-only" htmlFor={`reason-${p._id}`}>Rad etish sababi</label>
                  <input
                    id={`reason-${p._id}`}
                    autoFocus
                    value={rejecting.reason}
                    onChange={(e) => setRejecting({ id: p._id, reason: e.target.value })}
                    placeholder="Sabab (foydalanuvchiga yuboriladi), masalan: kartaga tushum topilmadi"
                    className="flex-1 rounded-xl border-2 border-slate-200 px-3 py-2 text-sm focus:border-emerald-500 outline-none"
                  />
                  <button type="button" onClick={() => review(p._id, 'reject', rejecting.reason)} className="btn-outline text-sm px-4 py-2">
                    Rad etishni yuborish
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

const ACTION_LABELS: Record<string, string> = {
  'payment.approve': 'To‘lovni tasdiqladi',
  'payment.reject': 'To‘lovni rad etdi',
  'premium.lifetime': 'Umrbod Premium berdi',
  'premium.bonus': 'Bonus kun qo‘shdi',
  'premium.revoke': 'Premiumni bekor qildi',
  'broadcast.send': 'Telegram xabar yubordi',
};

function AuditTab() {
  const [items, setItems] = useState<any[] | null>(null);
  useEffect(() => {
    accountApi.adminAudit(100).then((res) => setItems(res.success ? res.data : []));
  }, []);
  if (items === null) return <div className="flex justify-center py-10"><Loader2 className="w-6 h-6 animate-spin text-emerald-600" /></div>;
  if (!items.length) return <p className="text-sm text-slate-500 py-10 text-center">Hali admin amallari yo‘q.</p>;
  return (
    <ul className="divide-y divide-slate-200 rounded-2xl bg-white border-2 border-slate-200">
      {items.map((a) => (
        <li key={a._id} className="p-4 flex flex-wrap justify-between gap-2 text-sm">
          <span>
            <b>{a.actorName}</b> — {ACTION_LABELS[a.action] || a.action}
            {a.details?.reason ? ` (“${a.details.reason}”)` : ''}
          </span>
          <span className="text-slate-500">{fmtDate(a.createdAt)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={null}>
      <AdminContent />
    </Suspense>
  );
}
