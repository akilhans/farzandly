import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium obuna',
  description: 'Farzandly Premium bilan barcha darslar, chuqurlashtirilgan maqolalar va amaliy mashqlarga cheksiz kirish.',
  alternates: { canonical: '/premium' },
  openGraph: { title: 'Premium obuna | Farzandly', url: '/premium', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
