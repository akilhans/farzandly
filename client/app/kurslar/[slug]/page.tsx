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
  if (!course) return { title: 'Kurs topilmadi', robots: { index: false, follow: false } };

  const url = `/kurslar/${course.slug}`;
  return {
    title: course.title,
    description: course.description,
    alternates: { canonical: url },
    openGraph: {
      title: course.title,
      description: course.description,
      url,
      siteName: SITE_NAME,
      locale: 'uz_UZ',
      type: 'website',
      images: [{ url: '/logo.png', width: 778, height: 192, alt: SITE_NAME }],
    },
    twitter: { card: 'summary_large_image', title: course.title, description: course.description, images: ['/logo.png'] },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = await getCourse(slug);

  const jsonLd = course && {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Course',
        name: course.title,
        description: course.description,
        url: absoluteUrl(`/kurslar/${course.slug}`),
        inLanguage: 'uz',
        provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        isAccessibleForFree: !course.isPremium,
        numberOfCredits: course.totalLessons,
        timeRequired: `PT${course.estimatedMinutes}M`,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Kurslar', item: absoluteUrl('/kurslar') },
          { '@type': 'ListItem', position: 3, name: course.title, item: absoluteUrl(`/kurslar/${course.slug}`) },
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
