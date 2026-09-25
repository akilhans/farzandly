import { cache } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { healthTopics, HealthTopic } from '@/lib/healthData';
import { api } from '@/lib/api';
import { SITE_NAME, SITE_URL, absoluteUrl } from '@/lib/site';
import HealthArticleReader from '@/components/HealthArticleReader';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return healthTopics.map((topic) => ({ slug: topic.slug }));
}

const getTopic = cache(async (slug: string): Promise<HealthTopic | undefined> => {
  try {
    const res = await api.getHealthTopicBySlug(slug, 'uz');
    if (res && res.data) {
      return res.data;
    }
  } catch (e) {
    // fallback
  }
  return healthTopics.find((t) => t.slug === slug || t.id === slug);
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = await getTopic(slug);

  if (!topic) {
    return { title: 'Mavzu topilmadi', robots: { index: false, follow: false } };
  }

  const url = `/salomatlik/${topic.slug}`;
  const title = `${topic.titleUz} | ${SITE_NAME} Salomatlik`;
  const description = topic.subtitleUz;
  const keywords = [
    'farzand tarbiyalash',
    'farzand salomatligi',
    'bolalar salomatligi',
    'bolalar anatomiyasi',
    'tana sirlari',
    'tana a’zolari',
    topic.titleUz,
    topic.systemUz,
    topic.system,
    'bolalar psixologiyasi',
    'KidsHealth',
    'Farzandly',
  ];

  const ogImage = topic.heroImage || '/body basics/brain.jpg';

  return {
    title: { absolute: title },
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
      images: [{ url: ogImage, width: 800, height: 600, alt: topic.titleUz }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function HealthTopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = await getTopic(slug);

  if (!topic) {
    notFound();
  }

  const topicUrl = absoluteUrl(`/salomatlik/${topic.slug}`);

  // Build FAQ schema if quiz exists
  const faqSchema =
    topic.quiz && topic.quiz.length > 0
      ? {
          '@type': 'FAQPage',
          '@id': `${topicUrl}#faq`,
          mainEntity: topic.quiz.map((q) => {
            const questionText = q.questionUz || q.question;
            const answerText = `${
              q.optionsUz ? q.optionsUz[q.correctIndex] : q.options[q.correctIndex]
            }. ${q.explanationUz || q.explanation}`;
            return {
              '@type': 'Question',
              name: questionText,
              acceptedAnswer: {
                '@type': 'Answer',
                text: answerText,
              },
            };
          }),
        }
      : null;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['MedicalWebPage', 'Article'],
        '@id': `${topicUrl}#medical-page`,
        headline: topic.titleUz,
        alternativeHeadline: topic.title,
        description: topic.subtitleUz,
        image: [absoluteUrl(topic.heroImage || '/body basics/brain.jpg')],
        inLanguage: ['uz', 'en', 'ru'],
        medicalAudience: {
          '@type': 'PatientAudience',
          name: 'Bolalar va ota-onalar (Children and Parents)',
        },
        aspect: ['Overview', 'Anatomy', 'Physiology', 'Prevention', 'Child Health'],
        reviewedBy: {
          '@type': 'MedicalOrganization',
          name: topic.medicallyReviewedBy,
          url: 'https://kidshealth.org',
        },
        publisher: {
          '@type': 'Organization',
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: absoluteUrl('/logo.png'),
          },
        },
        about: [
          { '@type': 'AnatomicalStructure', name: topic.systemUz },
          { '@type': 'AnatomicalStructure', name: topic.system },
        ],
        mainEntityOfPage: { '@type': 'WebPage', '@id': topicUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Asosiy', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Salomatlik (Tana sirlari)', item: absoluteUrl('/salomatlik') },
          { '@type': 'ListItem', position: 3, name: topic.titleUz, item: topicUrl },
        ],
      },
      ...(faqSchema ? [faqSchema] : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HealthArticleReader topic={topic} />
    </>
  );
}
