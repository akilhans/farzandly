import { cache } from 'react';
import type { Metadata } from 'next';
import { api } from '@/lib/api';
import { seedCourses } from '@/lib/seedData';
import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';
import CourseDetailClient from '@/components/CourseDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

const getCourse = cache((slug: string) => api.getCourseBySlug(slug));

export const revalidate = 3600;

export function generateStaticParams() {
  return seedCourses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourse(slug);
  if (!course) return { title: 'Dars to‘plami topilmadi', robots: { index: false, follow: false } };

  const url = `/darslar/${course.slug}`;
  const keywords = [
    'farzand tarbiyalash',
    'farzand tarbiyasi kursi',
    'bola tarbiyasi darslari',
    course.title,
    'bolalar psixologiyasi',
    'islomiy tarbiya',
    'ota-onalar uchun qo‘llanma',
  ];

  return {
    title: { absolute: `${course.title} — Farzand tarbiyalash darslari | ${SITE_NAME}` },
    description: `${course.description} 5 daqiqalik darslar, amaliy maslahatlar va testlar.`,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${course.title} | ${SITE_NAME}`,
      description: course.description,
      url,
      siteName: SITE_NAME,
      locale: 'uz_UZ',
      type: 'website',
      images: [{ url: '/logo.png', width: 778, height: 192, alt: `${course.title} — Farzandly` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: course.title,
      description: course.description,
      images: ['/logo.png'],
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = await getCourse(slug);

  const courseUrl = course ? absoluteUrl(`/darslar/${course.slug}`) : '';
  const jsonLd = course && {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        '@id': `${courseUrl}#course`,
        name: course.title,
        description: course.description,
        url: courseUrl,
        inLanguage: 'uz',
        provider: {
          '@type': 'EducationalOrganization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/logo.png'),
            width: 778,
            height: 192,
          },
        },
        isAccessibleForFree: !course.isPremium,
        numberOfCredits: course.totalLessons,
        timeRequired: `PT${course.estimatedMinutes || 60}M`,
        educationalLevel: 'Ota-onalar va murabbiylar uchun',
        teaches: 'Farzand tarbiyalash, ota-ona va bola munosabatlari, bolalar psixologiyasi',
        offers: [
          {
            '@type': 'Offer',
            category: course.isPremium ? 'Paid' : 'Free',
            price: course.isPremium ? '49000' : '0',
            priceCurrency: 'UZS',
            availability: 'https://schema.org/InStock',
            url: courseUrl,
          },
        ],
        hasCourseInstance: [
          {
            '@type': 'CourseInstance',
            courseMode: 'Online',
            courseWorkload: `PT${course.estimatedMinutes || 60}M`,
            instructor: {
              '@type': 'Organization',
              name: 'Farzandly Pedagoglar Jamoasi',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Tarbiya darslari', item: absoluteUrl('/darslar') },
          { '@type': 'ListItem', position: 3, name: course.title, item: courseUrl },
        ],
      },
    ],
  };

  return (
    <>
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <CourseDetailClient slug={slug} initialCourse={course} />
    </>
  );
}
