import type { Metadata } from 'next';
import { InstagramPlayground } from '@/components/instagram/InstagramPlayground';

export const metadata: Metadata = {
  title: 'Instagram Post Card Studio & Generator | Farzandly',
  description:
    'Farzandly platformasi uchun 1080x1350 formatdagi estetik Instagram post kartochkalari va vizual kontent generatori.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function InstagramPage() {
  return <InstagramPlayground />;
}
