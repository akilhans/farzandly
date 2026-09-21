import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarbiya kurslari',
  description: 'Bolaning yoshiga moslashtirilgan, bosqichma-bosqich qisqa interaktiv tarbiya darslari majmuasi. 1–10-darslar bepul.',
  alternates: { canonical: '/kurslar' },
  openGraph: { title: 'Tarbiya kurslari | Farzandly', url: '/kurslar', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
