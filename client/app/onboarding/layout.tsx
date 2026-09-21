import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bepul boshlash',
  description: 'Farzandingiz yoshi va qiziqishlarini tanlang — Farzandly sizga mos tarbiya yo‘lini tayyorlab beradi.',
  alternates: { canonical: '/onboarding' },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
