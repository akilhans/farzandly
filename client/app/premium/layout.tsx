import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from '@/lib/site';

const TITLE = 'Premium obuna — Farzand tarbiyalash darslari to‘liq to‘plami';
const DESCRIPTION =
  'Farzandly Premium bilan barcha darslar, chuqurlashtirilgan bolalar psixologiyasi maqolalari va eksklyuziv amaliy mashqlarga to‘liq kirish imkoniyati.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'Farzandly premium',
    'farzand tarbiyalash kursi narxi',
    'tarbiya darslari obuna',
    'bolalar psixologiyasi darslari',
    'ota-onalar uchun premium',
  ],
  alternates: { canonical: '/premium' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/premium',
    type: 'website',
    images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: `${SITE_NAME} - Premium obuna` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const premiumJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      '@id': `${SITE_URL}/premium#product`,
      name: 'Farzandly Premium Obuna',
      description: DESCRIPTION,
      image: absoluteUrl('/logo.png'),
      brand: {
        '@type': 'Brand',
        name: SITE_NAME,
      },
      offers: [
        {
          '@type': 'Offer',
          name: 'Oylik obuna',
          price: '49000',
          priceCurrency: 'UZS',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/premium`,
        },
        {
          '@type': 'Offer',
          name: 'Yillik obuna (Chegirma bilan)',
          price: '390000',
          priceCurrency: 'UZS',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/premium`,
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Premium', item: `${SITE_URL}/premium` },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(premiumJsonLd) }}
      />
      {children}
    </>
  );
}

