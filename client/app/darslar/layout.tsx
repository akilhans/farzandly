import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarbiya darslari',
  description: 'Bolaning yoshiga moslashtirilgan, bosqichma-bosqich qisqa interaktiv tarbiya darslari majmuasi. 1–10-darslar bepul.',
  alternates: { canonical: '/darslar' },
  openGraph: { title: 'Tarbiya darslari | Farzandly', url: '/darslar', type: 'website' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
