'use client';

/* eslint-disable @typescript-eslint/no-explicit-any -- admin payloads are loosely typed server rows */
import React, { useCallback, useEffect, useState } from 'react';
import { Crown, Search, Loader2, Download, X, Send, Mail, Phone, Users, Baby, Gift, CalendarDays, Activity, ChevronDown } from 'lucide-react';
import { accountApi } from '@/lib/accountApi';
import { formatSom } from '@/lib/payments';
import UserAvatar from '@/components/UserAvatar';

type Say = (k: 'ok' | 'err', t: string) => void;

const DAY = 86400000;

export const fmtDateTime = (d?: string) =>
  d ? new Date(d).toLocaleString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';
export const fmtDay = (d?: string) => (d ? new Date(d).toLocaleDateString('uz-UZ', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '—');

/** "hozirgina", "3 soat oldin", "kecha", "5 kun oldin", "2 oy oldin" */
export function relTime(d?: string) {
  if (!d) return '—';
  const diff = Date.now() - new Date(d).getTime();
  if (diff < 60_000) return 'hozirgina';
  if (diff < 3_600_000) return `${Math.floor(diff / 60_000)} daqiqa oldin`;
  if (diff < DAY) return `${Math.floor(diff / 3_600_000)} soat oldin`;
  const days = Math.floor(diff / DAY);
  if (days === 1) return 'kecha';
  if (days < 30) return `${days} kun oldin`;
  if (days < 365) return `${Math.floor(days / 30)} oy oldin`;
  return `${Math.floor(days / 365)} yil oldin`;
}

const PROVIDER: Record<string, { label: string; cls: string }> = {
  telegram: { label: 'Telegram', cls: 'bg-sky-50 text-sky-800 border-sky-200' },
  email: { label: 'Email', cls: 'bg-violet-50 text-violet-800 border-violet-200' },
  guest: { label: 'Mehmon', cls: 'bg-slate-50 text-slate-600 border-slate-200' },
};

const FILTERS: [string, string][] = [
  ['all', 'Hammasi'],
  ['new7d', 'Yangi (7 kun)'],
  ['active7d', 'Faol (7 kun)'],
  ['inactive30d', 'Nofaol 30+ kun'],
  ['premium', 'Premium'],
  ['free', 'Bepul'],
  ['telegram', 'Telegram'],
  ['email', 'Email'],
];

const SORTS: [string, string][] = [
  ['newest', 'Eng yangi ro‘yxatdan o‘tganlar'],
  ['oldest', 'Eng eski'],
  ['active', 'Oxirgi faollik'],
  ['xp', 'Eng ko‘p XP'],
  ['lessons', 'Eng ko‘p dars'],
];

function downloadCsv(name: string, rows: Record<string, unknown>[]) {
  if (!rows.length) return;
  const headers = Object.keys(rows[0]);
  const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  const csv = [headers.join(','), ...rows.map((r) => headers.map((h) => esc(r[h])).join(','))].join('\n');
  const url = URL.createObjectURL(new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8' }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

const who = (u: any) => (u.telegramUsername ? `@${u.telegramUsername}` : u.name || 'Ota-ona');

/* ------------------------------------------------------------------ */
/* Users tab                                                           */
/* ------------------------------------------------------------------ */

export function UsersTab({ say }: { say: Say }) {
  const [q, setQ] = useState('');
  const [term, setTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('newest');
  const [loadingMore, setLoadingMore] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  // results are tagged with the query they answer; a changed query shows the spinner until its own results land
  const key = `${term}|${filter}|${sort}`;
  const [data, setData] = useState<{ key: string; items: any[]; total: number; page: number } | null>(null);

  useEffect(() => {
    let alive = true;
    accountApi.adminUsers(term, 1, filter, sort).then((res) => {
      if (alive) setData({ key, items: res.success ? res.data.items : [], total: res.success ? res.data.total : 0, page: 1 });
    });
    return () => {
      alive = false;
    };
  }, [term, filter, sort, key]);

  const items = data && data.key === key ? data.items : null;
  const total = data?.total ?? 0;

  const more = async () => {
    if (!data) return;
    setLoadingMore(true);
    const res = await accountApi.adminUsers(term, data.page + 1, filter, sort);
    setLoadingMore(false);
    if (res.success) setData((d) => (d ? { ...d, items: [...d.items, ...res.data.items], page: d.page + 1 } : d));
  };

  const patchUser = (u: any) => setData((d) => (d ? { ...d, items: d.items.map((x) => (x._id === u._id ? { ...x, ...u } : x)) } : d));

  return (
    <section className="space-y-4">
      <form
        className="flex gap-2"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          setTerm(q.trim());
        }}
      >
        <label htmlFor="user-search" className="sr-only">Foydalanuvchi qidirish</label>
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            id="user-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="@username, ism, email, telefon, Telegram ID yoki taklif kodi"
            className="w-full rounded-xl border-2 border-slate-200 pl-9 pr-3 py-2.5 text-sm focus:border-emerald-500 outline-none"
          />
        </div>
        <button type="submit" className="btn-primary text-sm px-5">Qidirish</button>
      </form>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Segment">
          {FILTERS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setFilter(key)}
              aria-pressed={filter === key}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 ${
                filter === key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <label htmlFor="user-sort" className="sr-only">Saralash</label>
          <select
            id="user-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-xl border-2 border-slate-200 bg-white px-3 py-1.5 text-xs font-bold text-slate-700 outline-none focus:border-emerald-500"
          >
            {SORTS.map(([k, l]) => (
              <option key={k} value={k}>{l}</option>
            ))}
          </select>
          <button
            type="button"
            disabled={!items?.length}
            onClick={() =>
              downloadCsv(
                `farzandly-foydalanuvchilar-${new Date().toISOString().slice(0, 10)}.csv`,
                (items || []).map((u) => ({
                  ism: u.name,
                  telegram: u.telegramUsername ? `@${u.telegramUsername}` : '',
                  email: u.email || '',
                  telefon: u.phone || '',
                  kirish_usuli: u.authProvider,
                  royxatdan_otgan: fmtDateTime(u.createdAt),
                  oxirgi_faollik: fmtDateTime(u.lastActiveDate),
                  premium: u.isPremium ? u.premiumType || 'ha' : 'yo‘q',
                  xp: u.xp,
                  darslar: u.completedLessonsCount,
                  farzandlar: u.childrenCount,
                  taklif_qilganlar: u.referralCount || 0,
                }))
              )
            }
            className="btn-outline text-xs px-3 py-1.5 inline-flex items-center gap-1.5 disabled:opacity-50"
          >
            <Download className="w-3.5 h-3.5" /> CSV
          </button>
        </div>
      </div>

      {items === null ? (
        <div className="flex justify-center py-10"><Loader2 className="w-6 h-6 animate-spin text-emerald-600" /></div>
      ) : items.length === 0 ? (
        <p className="text-sm text-slate-500 py-10 text-center">Hech kim topilmadi.</p>
      ) : (
        <>
          <p className="text-sm text-slate-500">
            {total} ta foydalanuvchi{total > items.length ? ` · ${items.length} tasi ko‘rsatilmoqda` : ''}
          </p>
          <ul className="space-y-2">
            {items.map((u) => {
              const prov = PROVIDER[u.authProvider] || PROVIDER.guest;
              return (
                <li key={u._id}>
                  <button
                    type="button"
                    onClick={() => setOpenId(u._id)}
                    className="w-full text-left rounded-2xl bg-white border-2 border-slate-200 hover:border-emerald-400 p-4 flex flex-col sm:flex-row sm:items-center gap-3 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <UserAvatar name={u.name} photoUrl={u.photoUrl} telegramUsername={u.telegramUsername} size="sm" />
                      <div className="min-w-0">
                        <p className="font-black text-slate-900 truncate flex items-center gap-1.5">
                          {who(u)}
                          {u.isPremium && <Crown className="w-4 h-4 text-amber-500 fill-amber-400 shrink-0" aria-label="Premium" />}
                          {u.role === 'admin' && <span className="text-[10px] font-black uppercase bg-slate-900 text-white px-1.5 py-0.5 rounded">admin</span>}
                        </p>
                        <p className="text-xs text-slate-500 truncate">
                          {u.telegramUsername && u.name ? `${u.name} · ` : ''}
                          {u.email || u.phone || (u.telegramId ? `TG ${u.telegramId}` : '')}
                        </p>
                      </div>
                    </div>
                    <dl className="grid grid-cols-3 sm:flex sm:items-center gap-x-5 gap-y-1 text-xs shrink-0">
                      <div>
                        <dt className="text-slate-400 font-semibold">Ro‘yxatdan o‘tgan</dt>
                        <dd className="font-bold text-slate-800" title={fmtDateTime(u.createdAt)}>{fmtDay(u.createdAt)}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400 font-semibold">Oxirgi faollik</dt>
                        <dd className="font-bold text-slate-800" title={fmtDateTime(u.lastActiveDate)}>{relTime(u.lastActiveDate)}</dd>
                      </div>
                      <div>
                        <dt className="text-slate-400 font-semibold">Darslar · XP</dt>
                        <dd className="font-bold text-slate-800">{u.completedLessonsCount} · {u.xp}</dd>
                      </div>
                      <span className={`hidden sm:inline-block text-[11px] font-bold px-2 py-0.5 rounded-lg border ${prov.cls}`}>{prov.label}</span>
                    </dl>
                  </button>
                </li>
              );
            })}
          </ul>
          {items.length < total && (
            <div className="flex justify-center">
              <button type="button" onClick={more} disabled={loadingMore} className="btn-outline text-sm px-5 py-2.5 inline-flex items-center gap-2">
                {loadingMore ? <Loader2 className="w-4 h-4 animate-spin" /> : <ChevronDown className="w-4 h-4" />}
                Yana yuklash
              </button>
            </div>
          )}
        </>
      )}

      {openId && <UserDetail id={openId} onClose={() => setOpenId(null)} say={say} onChange={patchUser} />}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Detail panel                                                        */
/* ------------------------------------------------------------------ */

const ACTION_LABELS: Record<string, string> = {
  'payment.approve': 'To‘lovni tasdiqladi',
  'payment.reject': 'To‘lovni rad etdi',
  'premium.lifetime': 'Umrbod Premium berdi',
  'premium.bonus': 'Bonus kun qo‘shdi',
  'premium.revoke': 'Premiumni bekor qildi',
};

const AGE: Record<string, string> = { '0-2': '0–2 yosh', '3-5': '3–5 yosh', '6-9': '6–9 yosh', '10-13': '10–13 yosh', '14+': '14+ yosh' };

function Row({ icon: Icon, label, children }: { icon: React.ElementType; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 py-2.5">
      <Icon className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
      <dt className="text-sm text-slate-500 w-36 shrink-0">{label}</dt>
      <dd className="text-sm font-semibold text-slate-900 min-w-0 break-words">{children}</dd>
    </div>
  );
}

function UserDetail({ id, onClose, say, onChange }: { id: string; onClose: () => void; say: Say; onChange: (u: any) => void }) {
  const [data, setData] = useState<any | null>(null);
  const [failed, setFailed] = useState(false);
  const [busy, setBusy] = useState(false);

  const load = useCallback(
    () =>
      accountApi.adminUserDetail(id).then((res) => {
        if (res.success) setData(res.data);
        else setFailed(true);
      }),
    [id]
  );

  useEffect(() => {
    let alive = true;
    accountApi.adminUserDetail(id).then((res) => {
      if (!alive) return;
      if (res.success) setData(res.data);
      else setFailed(true);
    });
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => {
      alive = false;
      window.removeEventListener('keydown', onKey);
    };
  }, [id, onClose]);

  const u = data?.user;

  const act = async (action: 'lifetime' | 'revoke' | 'bonus', days?: number) => {
    const question =
      action === 'lifetime' ? `${who(u)} uchun umrbod Premium yoqilsinmi?` : action === 'revoke' ? `${who(u)} Premiumi bekor qilinsinmi?` : `${who(u)} ga ${days} kun bonus qo‘shilsinmi?`;
    if (!window.confirm(question)) return;
    setBusy(true);
    const res = await accountApi.adminSetPremium(u._id, action, days);
    setBusy(false);
    if (res.success) {
      onChange(res.data);
      say('ok', 'Saqlandi.');
      load();
    } else say('err', res.message || 'Xatolik');
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/50 backdrop-blur-sm flex justify-end" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="user-detail-title">
      <div className="w-full sm:max-w-lg h-full bg-[#faf7f2] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="sticky top-0 z-10 bg-white border-b-2 border-slate-200 p-4 flex items-center gap-3">
          {u ? (
            <>
              <UserAvatar name={u.name} photoUrl={u.photoUrl} telegramUsername={u.telegramUsername} size="md" />
              <div className="min-w-0 flex-1">
                <h2 id="user-detail-title" className="font-black text-slate-900 truncate flex items-center gap-1.5">
                  {who(u)} {u.isPremium && <Crown className="w-4 h-4 text-amber-500 fill-amber-400" aria-label="Premium" />}
                </h2>
                <p className="text-xs text-slate-500 truncate">{u.telegramUsername ? u.name : u.level}</p>
              </div>
            </>
          ) : (
            <h2 id="user-detail-title" className="font-black text-slate-900 flex-1">Foydalanuvchi</h2>
          )}
          <button type="button" onClick={onClose} aria-label="Yopish" className="p-2 rounded-xl text-slate-500 hover:bg-slate-100 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        {failed ? (
          <p className="p-8 text-sm text-rose-700 text-center">Ma’lumotlarni yuklab bo‘lmadi.</p>
        ) : !u ? (
          <div className="flex justify-center py-16"><Loader2 className="w-6 h-6 animate-spin text-emerald-600" /></div>
        ) : (
          <div className="p-4 space-y-4">
            {/* at-a-glance */}
            <div className="grid grid-cols-4 gap-2">
              {[
                ['XP', u.xp],
                ['Seriya', `${u.streak} kun`],
                ['Darslar', u.completedLessonsCount],
                ['Yutuqlar', u.achievementsCount],
              ].map(([l, v]) => (
                <div key={String(l)} className="rounded-xl bg-white border-2 border-slate-200 p-2.5 text-center">
                  <div className="text-base font-black text-slate-900">{v}</div>
                  <div className="text-[11px] font-bold text-slate-500">{l}</div>
                </div>
              ))}
            </div>

            <section className="rounded-2xl bg-white border-2 border-slate-200 px-4">
              <dl className="divide-y divide-slate-100">
                <Row icon={CalendarDays} label="Ro‘yxatdan o‘tgan">
                  {fmtDateTime(u.createdAt)} <span className="text-slate-500 font-normal">({relTime(u.createdAt)})</span>
                </Row>
                <Row icon={Activity} label="Oxirgi faollik">
                  {fmtDateTime(u.lastActiveDate)} <span className="text-slate-500 font-normal">({relTime(u.lastActiveDate)})</span>
                </Row>
                <Row icon={Send} label="Kirish usuli">
                  {(PROVIDER[u.authProvider] || PROVIDER.guest).label}
                  {u.telegramId ? <span className="text-slate-500 font-normal"> · ID {u.telegramId}</span> : null}
                </Row>
                {u.email && <Row icon={Mail} label="Email">{u.email}</Row>}
                {u.phone && <Row icon={Phone} label="Telefon">{u.phone}</Row>}
                <Row icon={Crown} label="Premium">
                  {u.premiumType === 'lifetime'
                    ? 'Umrbod'
                    : u.isPremium && u.premiumExpiresAt
                    ? `Bonus · ${fmtDay(u.premiumExpiresAt)} gacha`
                    : 'Yo‘q'}
                </Row>
                <Row icon={Send} label="Telegram eslatma">
                  {u.reminderEnabled ? `Yoqilgan · ${String(u.reminderHour ?? 20).padStart(2, '0')}:00` : 'O‘chirilgan'}
                </Row>
                {u.partnerName && <Row icon={Users} label="Turmush o‘rtog‘i">{u.partnerName}</Row>}
                <Row icon={Gift} label="Taklif">
                  {u.referralCode ? <>kod <b>{u.referralCode}</b> · </> : null}
                  {u.referralCount || 0} ta taklif qilgan
                  {data.referredBy ? <span className="block text-slate-500 font-normal">Uni {data.referredBy.name} taklif qilgan</span> : null}
                </Row>
              </dl>
            </section>

            {/* children */}
            <section className="rounded-2xl bg-white border-2 border-slate-200 p-4 space-y-3">
              <h3 className="text-sm font-black text-slate-900 flex items-center gap-2"><Baby className="w-4 h-4 text-emerald-600" /> Farzandlar ({u.children.length})</h3>
              {u.children.length === 0 ? (
                <p className="text-sm text-slate-500">Farzand profili qo‘shilmagan{u.childAgeGroup ? ` · tanlangan yosh: ${AGE[u.childAgeGroup] || u.childAgeGroup}` : ''}.</p>
              ) : (
                <ul className="space-y-2">
                  {u.children.map((c: any) => (
                    <li key={c.id} className="flex items-center justify-between gap-3 text-sm rounded-xl bg-slate-50 px-3 py-2">
                      <span className="font-bold text-slate-800">{c.name} {c.gender === 'girl' ? '👧' : c.gender === 'boy' ? '👦' : ''}</span>
                      <span className="text-slate-500">{AGE[c.ageGroup] || c.ageGroup} · {c.completedLessonsCount} dars</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* payments */}
            <section className="rounded-2xl bg-white border-2 border-slate-200 p-4 space-y-3">
              <h3 className="text-sm font-black text-slate-900">To‘lovlar ({data.payments.length})</h3>
              {data.payments.length === 0 ? (
                <p className="text-sm text-slate-500">To‘lov so‘rovlari yo‘q.</p>
              ) : (
                <ul className="space-y-2">
                  {data.payments.map((p: any) => (
                    <li key={p._id} className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-slate-700">{formatSom(p.amount)} so‘m · {fmtDateTime(p.createdAt)}</span>
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-lg ${
                          p.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : p.status === 'rejected' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        {p.status === 'approved' ? 'Tasdiqlangan' : p.status === 'rejected' ? 'Rad etilgan' : 'Kutilmoqda'}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </section>

            {/* referrals */}
            {data.referrals.length > 0 && (
              <section className="rounded-2xl bg-white border-2 border-slate-200 p-4 space-y-3">
                <h3 className="text-sm font-black text-slate-900">Taklif qilganlari ({data.referrals.length})</h3>
                <ul className="space-y-1.5">
                  {data.referrals.map((r: any, i: number) => (
                    <li key={i} className="flex justify-between text-sm">
                      <span className="text-slate-700">{r.name}</span>
                      <span className="text-slate-500">{r.status === 'rewarded' ? 'bonus berilgan' : 'kutilmoqda'} · {fmtDay(r.createdAt)}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* admin actions on this user */}
            <section className="rounded-2xl bg-white border-2 border-slate-200 p-4 space-y-3">
              <h3 className="text-sm font-black text-slate-900">Admin amallari</h3>
              <div className="flex flex-wrap gap-2">
                {u.premiumType !== 'lifetime' && (
                  <button type="button" disabled={busy} onClick={() => act('lifetime')} className="btn-gold text-xs px-3 py-2 text-slate-950 font-black">
                    Umrbod Premium
                  </button>
                )}
                <button type="button" disabled={busy} onClick={() => act('bonus', 7)} className="btn-outline text-xs px-3 py-2">+7 kun</button>
                <button type="button" disabled={busy} onClick={() => act('bonus', 30)} className="btn-outline text-xs px-3 py-2">+30 kun</button>
                {u.isPremium && (
                  <button type="button" disabled={busy} onClick={() => act('revoke')} className="btn-outline text-xs px-3 py-2 text-rose-700">
                    Bekor qilish
                  </button>
                )}
              </div>
              {data.audit.length > 0 && (
                <ul className="space-y-1.5 pt-2 border-t border-slate-100">
                  {data.audit.map((a: any) => (
                    <li key={a._id} className="flex justify-between gap-3 text-xs">
                      <span className="text-slate-700"><b>{a.actorName}</b> — {ACTION_LABELS[a.action] || a.action}</span>
                      <span className="text-slate-500 shrink-0">{fmtDateTime(a.createdAt)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 30-day signups chart                                                */
/* ------------------------------------------------------------------ */

/**
 * One series, one hue (emerald, validated against the white surface), bars anchored
 * to the baseline with rounded tops and a 2px gap. Hover/focus shows the day's count;
 * a visually-hidden table carries the same numbers for screen readers.
 */
export function SignupsChart({ series }: { series: { date: string; count: number }[] }) {
  const [hover, setHover] = useState<number | null>(null);
  const max = Math.max(1, ...series.map((d) => d.count));
  const total = series.reduce((a, d) => a + d.count, 0);
  // Intl's uz locale renders short months as "M09"; spell them out
  const MONTHS = ['yan', 'fev', 'mar', 'apr', 'may', 'iyun', 'iyul', 'avg', 'sen', 'okt', 'noy', 'dek'];
  const label = (d: string) => `${Number(d.slice(8, 10))}-${MONTHS[Number(d.slice(5, 7)) - 1]}`;
  const h = hover !== null ? series[hover] : null;

  return (
    <figure className="rounded-2xl bg-white border-2 border-slate-200 p-4 space-y-3">
      <figcaption className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-black text-slate-900">Ro‘yxatdan o‘tishlar · 30 kun</span>
        <span className="text-xs text-slate-500" aria-live="polite">
          {h ? (
            <>
              <b className="text-slate-900">{label(h.date)}</b>: {h.count} ta
            </>
          ) : (
            <>
              jami <b className="text-slate-900">{total}</b> · eng ko‘p kun {max}
            </>
          )}
        </span>
      </figcaption>
      <div className="relative h-28 flex items-end gap-[2px] border-b border-slate-200" onMouseLeave={() => setHover(null)}>
        {/* recessive gridline at the max */}
        <div className="absolute inset-x-0 top-0 border-t border-dashed border-slate-100" aria-hidden />
        {series.map((d, i) => (
          <button
            key={d.date}
            type="button"
            onMouseEnter={() => setHover(i)}
            onFocus={() => setHover(i)}
            onBlur={() => setHover(null)}
            aria-label={`${label(d.date)}: ${d.count} ta`}
            className="flex-1 h-full flex items-end cursor-default outline-none group"
          >
            <span
              className={`w-full rounded-t-[4px] transition-colors ${hover === i ? 'bg-emerald-800' : 'bg-emerald-600'} group-focus-visible:ring-2 group-focus-visible:ring-emerald-300`}
              style={{ height: d.count ? `${Math.max(4, (d.count / max) * 100)}%` : '2px', opacity: d.count ? 1 : 0.25 }}
            />
          </button>
        ))}
      </div>
      <div className="flex justify-between text-[11px] text-slate-400 font-semibold" aria-hidden>
        <span>{label(series[0].date)}</span>
        <span>{label(series[Math.floor(series.length / 2)].date)}</span>
        <span>bugun</span>
      </div>
      <table className="sr-only">
        <caption>Kunlik ro‘yxatdan o‘tishlar</caption>
        <tbody>
          {series.map((d) => (
            <tr key={d.date}>
              <th scope="row">{d.date}</th>
              <td>{d.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
