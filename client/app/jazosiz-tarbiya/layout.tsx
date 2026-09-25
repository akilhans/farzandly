import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from '@/lib/site';

const TITLE = 'Jazosiz tarbiya — Dr. Odam Gunesh (Adem Güneş) kitobi';
const DESCRIPTION =
  'Farzand tarbiyasida jazo, tanbeh va qo‘rqitish usullari nega samarasiz ekanligi hamda haqiqiy mehr, xavfsiz bog‘lanish va to‘g‘ri intizom o‘rnatish bo‘yicha to‘liq audio-kitob matni. Tarjimon: Javohir Usmon.';

export const metadata: Metadata = {
  title: {
    default: TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    'jazosiz tarbiya',
    'adem gunesh',
    'odam gunesh',
    'javohir usmon',
    'cezasiz egitim',
    'farzand tarbiyalash',
    'bolaga baqirmaslik',
    'jazo va mukofot',
    'xavfsiz bog‘lanish',
    'bolalar psixologiyasi',
  ],
  alternates: { canonical: '/jazosiz-tarbiya' },
  openGraph: {
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    url: '/jazosiz-tarbiya',
    type: 'book',
    images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: `${SITE_NAME} - Jazosiz tarbiya` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${TITLE} | ${SITE_NAME}`,
    description: DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

const jazosizJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Book',
      '@id': `${SITE_URL}/jazosiz-tarbiya#book`,
      name: 'Jazosiz tarbiya (Cezasız Eğitim)',
      author: {
        '@type': 'Person',
        name: 'Dr. Adem Güneş (Odam Gunesh)',
      },
      translator: {
        '@type': 'Person',
        name: 'Javohir Usmon',
      },
      description: DESCRIPTION,
      inLanguage: 'uz',
      url: `${SITE_URL}/jazosiz-tarbiya`,
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Jazosiz tarbiya', item: `${SITE_URL}/jazosiz-tarbiya` },
      ],
    },
  ],
};

export default function JazosizLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jazosizJsonLd) }}
      />
      {children}
    </>
  );
}
