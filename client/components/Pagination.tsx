'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useI18n } from '@/context/LanguageContext';

interface PaginationProps {
  page: number;
  totalPages: number;
  basePath: string;
  /** Extra query params to keep (filters, search) */
  params?: Record<string, string | undefined>;
}

function buildHref(basePath: string, params: Record<string, string | undefined>, page: number) {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => v && qs.set(k, v));
  if (page > 1) qs.set('page', String(page));
  const s = qs.toString();
  return s ? `${basePath}?${s}` : basePath;
}

/** Windowed page list: 1 … 4 5 6 … 12 */
function pageWindow(page: number, total: number): (number | '…')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = new Set([1, total, page - 1, page, page + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | '…')[] = [];
  sorted.forEach((p, i) => {
    if (i > 0 && p - sorted[i - 1] > 1) out.push('…');
    out.push(p);
  });
  return out;
}

export default function Pagination({ page, totalPages, basePath, params = {} }: PaginationProps) {
  const { t } = useI18n();
  if (totalPages <= 1) return null;

  const item = 'min-w-10 h-10 px-3 inline-flex items-center justify-center rounded-xl text-sm font-bold border-2 transition-all';
  const idle = 'bg-white border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-700';

  return (
    <nav aria-label="Pagination" className="flex items-center justify-center gap-1.5 sm:gap-2 pt-4 flex-wrap">
      {page > 1 ? (
        <Link href={buildHref(basePath, params, page - 1)} rel="prev" className={`${item} ${idle} gap-1`}>
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{t('pagination.prev', 'Oldingi')}</span>
        </Link>
      ) : null}

      {pageWindow(page, totalPages).map((p, i) =>
        p === '…' ? (
          <span key={`gap-${i}`} className="px-1 text-slate-400" aria-hidden="true">…</span>
        ) : (
          <Link
            key={p}
            href={buildHref(basePath, params, p)}
            aria-current={p === page ? 'page' : undefined}
            aria-label={`${t('pagination.page', 'Sahifa')} ${p}`}
            className={`${item} ${p === page ? 'bg-emerald-600 border-emerald-700 text-white shadow-sm' : idle}`}
          >
            {p}
          </Link>
        )
      )}

      {page < totalPages ? (
        <Link href={buildHref(basePath, params, page + 1)} rel="next" className={`${item} ${idle} gap-1`}>
          <span className="hidden sm:inline">{t('pagination.next', 'Keyingi')}</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : null}
    </nav>
  );
}

export function EmptyArticles() {
  const { t } = useI18n();
  return <p className="text-center text-slate-500 py-10">{t('articles.empty', 'Maqolalar topilmadi')}</p>;
}
