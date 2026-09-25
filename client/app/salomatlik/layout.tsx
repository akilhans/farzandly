import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from '@/lib/site';

const TITLE = 'Salomatlik & Tana sirlari (Body Basics) — Bolalar va ota-onalar uchun';
const DESCRIPTION =
  'Bolalar va ota-onalar uchun tana a’zolari, ovqat hazm qilish tizimi (Digestive System), "Burp!" kekirish sirlari va sog‘lom odatlar haqida qiziqarli tibbiy-amaliy qo‘llanmalar.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'salomatlik',
    'bolalar salomatligi',
    'tana sirlari',
    'body basics',
    'ovqat hazm qilish tizimi',
    'digestive system',
    'burp kekirish',
    'nega inson kekiradi',
    'bolalar anatomiyasi',
    'KidsHealth o‘zbek tilida',
  ],
  alternates: { canonical: '/salomatlik' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/salomatlik',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: `${SITE_NAME} - Salomatlik` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const salomatlikJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['CollectionPage', 'MedicalWebPage'],
      '@id': `${SITE_URL}/salomatlik#webpage`,
      url: `${SITE_URL}/salomatlik`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'uz',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: [
        { '@type': 'MedicalCondition', name: 'Burping (Belching)' },
        { '@type': 'AnatomicalStructure', name: 'Digestive System' },
        { '@type': 'AnatomicalStructure', name: 'Esophagus' },
        { '@type': 'AnatomicalStructure', name: 'Stomach' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Salomatlik (Body Basics)', item: `${SITE_URL}/salomatlik` },
      ],
    },
  ],
};

export default function SalomatlikLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(salomatlikJsonLd) }}
      />
      {children}
    </>
  );
}
