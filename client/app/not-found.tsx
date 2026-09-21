import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sahifa topilmadi',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-5">
      <p className="text-6xl font-black text-emerald-600">404</p>
      <h1 className="text-2xl sm:text-3xl font-black text-slate-800">Sahifa topilmadi</h1>
      <p className="text-slate-500">Siz izlagan sahifa mavjud emas yoki ko‘chirilgan.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
        <Link href="/" className="btn-primary px-6 py-3">Bosh sahifa</Link>
        <Link href="/maqolalar" className="btn-outline px-6 py-3">Maqolalar</Link>
      </div>
    </div>
  );
}
