import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from '@/lib/site';

const TITLE = 'Farzand tarbiyalash maqolalari — Bolalar psixologiyasi va ota-onalik sirlari';
const DESCRIPTION =
  'Farzand tarbiyalash, zamonaviy bolalar psixologiyasi, islomiy qadriyatlar va oilaviy munosabatlarga oid ilmiy-amaliy maqolalar to‘plami.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'farzand tarbiyalash',
    'farzand tarbiyasi maqolalari',
    'bola tarbiyasi',
    'bolalar psixologiyasi maqolalari',
    'bolalarda tantrum',
    'bolalarda injiqlik',
    'ota-onalar uchun maslahatlar',
    'islomiy tarbiya',
    'farzand psixologiyasi',
  ],
  alternates: { canonical: '/maqolalar' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/maqolalar',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: `${SITE_NAME} - Tarbiya maqolalari` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const maqolalarJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/maqolalar#webpage`,
      url: `${SITE_URL}/maqolalar`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'uz',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: [
        { '@type': 'Thing', name: 'Farzand tarbiyalash' },
        { '@type': 'Thing', name: 'Bolalar psixologiyasi' },
        { '@type': 'Thing', name: 'Islomiy tarbiya' },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Tarbiya maqolalari', item: `${SITE_URL}/maqolalar` },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(maqolalarJsonLd) }}
      />
      {children}
    </>
  );
}

