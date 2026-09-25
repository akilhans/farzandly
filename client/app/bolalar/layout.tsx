import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';
import { kidsTales } from '@/lib/kidsData';

const TITLE = 'Bolalar olami — Ibratli ertaklar, she’rlar, topishmoqlar va maqollar';
const DESCRIPTION =
  'Bolalar va ota-onalar uchun sara ibratli ertaklar, fasllar va maktab she’rlari, zehnni charxlovchi topishmoqlar hamda odob va tarbiya haqida xalq maqollari to‘plami.';

export const metadata: Metadata = {
  title: {
    absolute: `${TITLE} | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'farzand tarbiyalash',
    'bolalar olami',
    'bolalar uchun ertaklar',
    'o‘zbek xalq ertaklari',
    'ibratli ertaklar',
    'bolalar she’rlari',
    'fasllar haqida sherlar',
    'topishmoqlar javoblari bilan',
    'odob haqida maqollar',
    'tarbiya maqollari',
    'farzand tarbiyasi bolalar',
  ],
  alternates: { canonical: '/bolalar' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/bolalar',
    type: 'website',
    siteName: SITE_NAME,
    locale: 'uz_UZ',
    images: [{ url: '/logo.png', width: 778, height: 192, alt: `${SITE_NAME} - Bolalar olami` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: ['/logo.png'],
  },
};

const bolalarJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/bolalar#webpage`,
      url: `${SITE_URL}/bolalar`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'uz',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: [
        { '@type': 'Thing', name: 'Farzand tarbiyalash' },
        { '@type': 'Thing', name: 'O‘zbek xalq ertaklari' },
        { '@type': 'Thing', name: 'Bolalar she’rlari' },
        { '@type': 'Thing', name: 'Topishmoqlar' },
        { '@type': 'Thing', name: 'Odob va tarbiya maqollari' },
      ],
      hasPart: [
        {
          '@type': 'ItemList',
          name: 'Ibratli o‘zbek xalq ertaklari',
          itemListElement: kidsTales.slice(0, 10).map((tale, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: tale.title,
            description: tale.paragraphs[0],
          })),
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Bolalar olami', item: `${SITE_URL}/bolalar` },
      ],
    },
  ],
};

export default function BolalarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bolalarJsonLd) }}
      />
      {children}
    </>
  );
}
