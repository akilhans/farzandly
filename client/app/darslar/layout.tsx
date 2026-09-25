import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/site';

const TITLE = 'Farzand tarbiyalash darslari — Mikro-ta’lim va amaliy qo‘llanmalar';
const DESCRIPTION =
  'Bolaning yoshiga moslashtirilgan, bosqichma-bosqich qisqa interaktiv farzand tarbiyalash darslari majmuasi. 1–10-darslar mutlaqo bepul.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'farzand tarbiyalash darslari',
    'farzand tarbiyasi kursi',
    'bola tarbiyasi darslari',
    'bolalar psixologiyasi',
    'ota-onalar uchun bepul darslar',
    'bolani tarbiyalash',
    'chaqaloq parvarishi',
    'yosh bolalar tarbiyasi',
  ],
  alternates: { canonical: '/darslar' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/darslar',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: `${SITE_NAME} - Tarbiya darslari` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const darslarJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/darslar#webpage`,
      url: `${SITE_URL}/darslar`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'uz',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: [
        { '@type': 'Thing', name: 'Farzand tarbiyalash' },
        { '@type': 'Thing', name: 'Bolalar psixologiyasi' },
        { '@type': 'Thing', name: 'Ota-onalik ko‘nikmalari' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Tarbiya darslari', item: `${SITE_URL}/darslar` },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(darslarJsonLd) }}
      />
      {children}
    </>
  );
}

