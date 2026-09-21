import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, Crown, Play, SearchX } from 'lucide-react';
import { api } from '@/lib/api';
import SearchForm from '@/components/SearchForm';

interface Props {
  searchParams: Promise<{ q?: string }>;
}

// Search result pages are thin/duplicate content for crawlers
export const metadata: Metadata = {
  title: 'Qidiruv',
  description: 'Farzandly darslari va maqolalaridan mavzu bo‘yicha qidiring.',
  robots: { index: false, follow: true },
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = '' } = await searchParams;
  const query = q.trim();
  const { lessons, articles } = await api.search(query);
  const hasResults = lessons.length + articles.length > 0;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-8">
      <div className="space-y-3 text-center">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">Qidiruv</h1>
        <p className="text-sm text-slate-500">Darslar va maqolalar bo‘yicha mavzu qidiring.</p>
      </div>

      <SearchForm defaultValue={query} autoFocus={!query} />

      {query.length >= 2 && !hasResults && (
        <div className="text-center py-12 space-y-4">
          <SearchX className="w-12 h-12 text-slate-300 mx-auto" />
          <p className="font-bold text-slate-700">«{query}» bo‘yicha hech narsa topilmadi</p>
          <p className="text-sm text-slate-500">Boshqa so‘z bilan urinib ko‘ring yoki barcha darslarni ko‘rib chiqing.</p>
          <Link href="/darslar" className="btn-primary inline-flex px-6 py-3 text-sm">Barcha darslar</Link>
        </div>
      )}

      {lessons.length > 0 && (
        <section className="space-y-3" aria-labelledby="lessons-h">
          <h2 id="lessons-h" className="text-xl font-black text-slate-800 flex items-center gap-2">
            <Play className="w-5 h-5 text-emerald-600" /> Darslar ({lessons.length})
          </h2>
          <ul className="space-y-3">
            {lessons.map((l) => (
              <li key={l.slug}>
                <Link
                  href={`/dars/${l.slug}`}
                  className="card-farzandly p-4 sm:p-5 flex items-center justify-between gap-4 hover:border-emerald-500 transition-all"
                >
                  <div className="min-w-0">
                    <p className="font-bold text-slate-800 text-sm sm:text-base">{l.title}</p>
                    <p className="text-xs text-slate-500 line-clamp-1">{l.summary}</p>
                  </div>
                  {l.isPremium ? (
                    <span className="shrink-0 text-[10px] font-black text-amber-800 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-md flex items-center gap-1">
                      <Crown className="w-3 h-3" /> Premium
                    </span>
                  ) : (
                    <span className="shrink-0 text-[10px] font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-md">BEPUL</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {articles.length > 0 && (
        <section className="space-y-3" aria-labelledby="articles-h">
          <h2 id="articles-h" className="text-xl font-black text-slate-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-emerald-600" /> Maqolalar ({articles.length})
          </h2>
          <ul className="space-y-3">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/maqolalar/${a.slug}`}
                  className="card-farzandly p-4 sm:p-5 flex items-center justify-between gap-4 hover:border-emerald-500 transition-all"
                >
                  <div className="min-w-0">
                    <p className="font-bold text-slate-800 text-sm sm:text-base">{a.title}</p>
                    <p className="text-xs text-slate-500 line-clamp-1">{a.excerpt}</p>
                  </div>
                  <span className="shrink-0 text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {a.readingTimeMinutes} m
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
