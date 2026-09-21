import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarbiya maqolalari',
  description: 'Islomiy qadriyatlar, zamonaviy bolalar psixologiyasi va amaliy tavsiyalarga asoslangan ilmiy-ommabop maqolalar.',
  alternates: { canonical: '/maqolalar' },
  openGraph: { title: 'Tarbiya maqolalari | Farzandly', url: '/maqolalar', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
