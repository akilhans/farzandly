'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Send, Loader2, Users, FlaskConical, Link2 } from 'lucide-react';
import { accountApi, BroadcastRecord, BroadcastSegment } from '@/lib/accountApi';
import { fmtDateTime } from '@/components/admin/AdminUsers';

type Say = (k: 'ok' | 'err', t: string) => void;

const SEGMENTS: [BroadcastSegment, string][] = [
  ['all', 'Hammasi'],
  ['free', 'Bepul foydalanuvchilar'],
  ['premium', 'Premium'],
  ['active', 'Faol (7 kun ichida)'],
  ['inactive', 'Nofaol (7 kundan ko‘p)'],
];

const AGE_GROUPS: [string, string][] = [
  ['', 'Barcha yoshlar'],
  ['0-2', '0–2 yosh'],
  ['3-5', '3–5 yosh'],
  ['6-9', '6–9 yosh'],
  ['10-13', '10–13 yosh'],
  ['14+', '14+ yosh'],
];

const SEGMENT_LABEL = Object.fromEntries(SEGMENTS);
const MAX_LEN = 3500;

/** Admin → Telegram broadcast: compose, test on yourself, send to a segment, watch progress. */
export function BroadcastTab({ say }: { say: Say }) {
  const [text, setText] = useState('');
  const [segment, setSegment] = useState<BroadcastSegment>('all');
  const [ageGroup, setAgeGroup] = useState('');
  const [withButton, setWithButton] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [buttonUrl, setButtonUrl] = useState('');
  // Keyed by the audience it counts, so a stale number never shows for a new selection.
  const [counted, setCounted] = useState<{ key: string; count: number | null } | null>(null);
  const [busy, setBusy] = useState<'test' | 'send' | null>(null);
  const [history, setHistory] = useState<BroadcastRecord[] | null>(null);

  const loadHistory = useCallback(async () => {
    const res = await accountApi.adminBroadcasts();
    setHistory(res.success ? res.data : []);
  }, []);

  useEffect(() => {
    accountApi.adminBroadcasts().then((res) => setHistory(res.success ? res.data : []));
  }, []);

  // Refresh progress while anything is still sending.
  const running = history?.some((b) => b.status === 'running');
  useEffect(() => {
    if (!running) return;
    const id = setInterval(loadHistory, 4000);
    return () => clearInterval(id);
  }, [running, loadHistory]);

  const audienceKey = `${segment}|${ageGroup}`;
  const audience = counted?.key === audienceKey ? counted.count : null;
  useEffect(() => {
    accountApi.adminBroadcastAudience(segment, ageGroup).then((res) =>
      setCounted({ key: `${segment}|${ageGroup}`, count: res.success ? res.data.count : null })
    );
  }, [segment, ageGroup]);

  const input = () => ({
    text: text.trim(),
    segment,
    ageGroup: ageGroup || undefined,
    ...(withButton ? { buttonText: buttonText.trim(), buttonUrl: buttonUrl.trim() } : {}),
  });

  const valid =
    text.trim().length > 0 &&
    text.length <= MAX_LEN &&
    (!withButton || (buttonText.trim() && /^https:\/\/\S+$/.test(buttonUrl.trim())));

  const sendTest = async () => {
    setBusy('test');
    const res = await accountApi.adminBroadcast(input(), true);
    setBusy(null);
    say(res.success ? 'ok' : 'err', res.message || (res.success ? 'Yuborildi' : 'Xatolik'));
  };

  const sendAll = async () => {
    const who = `${SEGMENT_LABEL[segment]}${ageGroup ? `, ${ageGroup} yosh` : ''}`;
    if (!window.confirm(`Xabar ${audience ?? '?'} ta foydalanuvchiga (${who}) yuboriladi. Davom etasizmi?`)) return;
    setBusy('send');
    const res = await accountApi.adminBroadcast(input());
    setBusy(null);
    say(res.success ? 'ok' : 'err', res.message || (res.success ? 'Yuborish boshlandi' : 'Xatolik'));
    if (res.success) {
      setText('');
      loadHistory();
    }
  };

  const field = 'w-full rounded-xl border-2 border-slate-200 bg-white px-3 py-2.5 text-sm focus:border-emerald-500 focus:outline-none';

  return (
    <div className="space-y-6">
      <section className="rounded-2xl bg-white border-2 border-slate-200 p-5 space-y-4">
        <div className="grid sm:grid-cols-2 gap-3">
          <label className="space-y-1 text-sm font-bold text-slate-700">
            Kimga
            <select value={segment} onChange={(e) => setSegment(e.target.value as BroadcastSegment)} className={field}>
              {SEGMENTS.map(([k, l]) => (
                <option key={k} value={k}>{l}</option>
              ))}
            </select>
          </label>
          <label className="space-y-1 text-sm font-bold text-slate-700">
            Farzand yoshi
            <select value={ageGroup} onChange={(e) => setAgeGroup(e.target.value)} className={field}>
              {AGE_GROUPS.map(([k, l]) => (
                <option key={k} value={k}>{l}</option>
              ))}
            </select>
          </label>
        </div>

        <p className="text-sm text-slate-600 flex items-center gap-1.5">
          <Users className="w-4 h-4 text-emerald-600" />
          Qabul qiluvchilar:{' '}
          <b className="text-slate-900">{audience === null ? '…' : `${audience} ta`}</b>
          <span className="text-slate-400">· botni bloklagan va xabarlarni o‘chirganlar hisobga olinmaydi</span>
        </p>

        <label className="block space-y-1 text-sm font-bold text-slate-700">
          Xabar matni
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={7}
            maxLength={MAX_LEN}
            placeholder="Assalomu alaykum! Yangi dars chiqdi: …"
            className={`${field} font-normal leading-relaxed`}
          />
          <span className="flex justify-between text-xs font-normal text-slate-500">
            <span>**qalin matn** — qalin bo‘lib chiqadi</span>
            <span className={text.length > MAX_LEN - 200 ? 'text-amber-700 font-bold' : ''}>{text.length} / {MAX_LEN}</span>
          </span>
        </label>

        <label className="inline-flex items-center gap-2 text-sm font-bold text-slate-700">
          <input type="checkbox" checked={withButton} onChange={(e) => setWithButton(e.target.checked)} className="w-4 h-4 accent-emerald-600" />
          <Link2 className="w-4 h-4" /> Havola tugmasi qo‘shish
        </label>
        {withButton && (
          <div className="grid sm:grid-cols-2 gap-3">
            <input value={buttonText} onChange={(e) => setButtonText(e.target.value)} maxLength={60} placeholder="Tugma matni (Darsni ochish)" className={field} />
            <input value={buttonUrl} onChange={(e) => setButtonUrl(e.target.value)} maxLength={500} placeholder="https://farzandly.uz/…" className={field} />
          </div>
        )}

        <div className="flex flex-wrap gap-2 pt-1">
          <button
            type="button"
            onClick={sendTest}
            disabled={!valid || busy !== null}
            className="btn-outline text-sm px-4 py-2.5 inline-flex items-center gap-2 disabled:opacity-50"
          >
            {busy === 'test' ? <Loader2 className="w-4 h-4 animate-spin" /> : <FlaskConical className="w-4 h-4" />}
            O‘zimga sinov
          </button>
          <button
            type="button"
            onClick={sendAll}
            disabled={!valid || busy !== null || !audience}
            className="btn-primary text-sm px-5 py-2.5 inline-flex items-center gap-2 disabled:opacity-50"
          >
            {busy === 'send' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            Yuborish{audience ? ` (${audience})` : ''}
          </button>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-black text-slate-700">Yuborilgan xabarlar</h2>
        {history === null ? (
          <div className="flex justify-center py-8"><Loader2 className="w-6 h-6 animate-spin text-emerald-600" /></div>
        ) : !history.length ? (
          <p className="text-sm text-slate-500 py-6 text-center">Hali xabar yuborilmagan.</p>
        ) : (
          <ul className="space-y-3">
            {history.map((b) => {
              const done = b.sent + b.failed + b.blocked;
              const pct = b.total ? Math.min(100, Math.round((done / b.total) * 100)) : 100;
              return (
                <li key={b._id} className="rounded-2xl bg-white border-2 border-slate-200 p-4 space-y-2">
                  <div className="flex flex-wrap justify-between gap-2 text-xs text-slate-500">
                    <span>
                      {fmtDateTime(b.createdAt)} · {b.actorName || 'Admin'} · {SEGMENT_LABEL[b.segment] || b.segment}
                      {b.ageGroup ? ` · ${b.ageGroup} yosh` : ''}
                    </span>
                    <span className={`font-bold ${b.status === 'running' ? 'text-amber-700' : 'text-emerald-700'}`}>
                      {b.status === 'running' ? 'Yuborilmoqda…' : b.status === 'done' ? 'Yakunlandi' : 'To‘xtatildi'}
                    </span>
                  </div>
                  <p className="text-sm text-slate-800 whitespace-pre-line line-clamp-3">{b.text}</p>
                  <div className="h-2 rounded-full bg-slate-100 overflow-hidden" aria-hidden>
                    <div className="h-full bg-emerald-500" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="text-xs text-slate-600">
                    ✅ {b.sent} yetkazildi · 🚫 {b.blocked} bloklagan · ⚠️ {b.failed} xato · jami {b.total}
                  </p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
