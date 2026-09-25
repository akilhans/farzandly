import { cache } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { jazosizTarbiyaBook, JazosizPart } from '@/lib/jazosizTarbiyaData';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE, absoluteUrl } from '@/lib/site';
import JazosizReader from '@/components/JazosizReader';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return jazosizTarbiyaBook.parts.map((p) => ({ slug: p.slug }));
}

const getPart = cache((slug: string): JazosizPart | undefined => {
  return jazosizTarbiyaBook.parts.find((p) => p.slug === slug);
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const part = getPart(slug);

  if (!part) {
    return { title: 'Qism topilmadi', robots: { index: false, follow: false } };
  }

  const url = `/jazosiz-tarbiya/${part.slug}`;
  const title = `${part.title} | Jazosiz tarbiya (Dr. Adem Güneş)`;
  const description = part.subtitle;
  const keywords = [
    'jazosiz tarbiya',
    'adem gunesh',
    'odam gunesh',
    'javohir usmon',
    'bolalar psixologiyasi',
    'tarbiya',
    'jazo va intizom',
    'xavfsiz bog‘lanish',
  ];

  return {
    title: { absolute: `${title} | ${SITE_NAME}` },
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      siteName: SITE_NAME,
      locale: 'uz_UZ',
      images: [{ url: DEFAULT_OG_IMAGE, width: 778, height: 192, alt: part.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export default async function JazosizPartPage({ params }: Props) {
  const { slug } = await params;
  const part = getPart(slug);

  if (!part) {
    notFound();
  }

  const partUrl = absoluteUrl(`/jazosiz-tarbiya/${part.slug}`);
  const bookUrl = absoluteUrl('/jazosiz-tarbiya');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Chapter',
        '@id': `${partUrl}#chapter`,
        name: part.title,
        description: part.subtitle,
        position: part.partNumber,
        inLanguage: 'uz',
        isPartOf: {
          '@type': 'Book',
          '@id': `${bookUrl}#book`,
          name: jazosizTarbiyaBook.title,
          author: { '@type': 'Person', name: jazosizTarbiyaBook.author },
          translator: { '@type': 'Person', name: jazosizTarbiyaBook.translator },
          url: bookUrl,
        },
        author: {
          '@type': 'Person',
          name: jazosizTarbiyaBook.author,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: absoluteUrl('/logo.png'),
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': partUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Jazosiz tarbiya', item: bookUrl },
          { '@type': 'ListItem', position: 3, name: `${part.partNumber}-qism`, item: partUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <JazosizReader part={part} />
    </>
  );
}
