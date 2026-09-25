import { MetadataRoute } from 'next';
import { seedArticles, seedCourses } from '@/lib/seedData';
import { healthTopics } from '@/lib/healthData';
import { jazosizTarbiyaBook } from '@/lib/jazosizTarbiyaData';
import { SITE_URL } from '@/lib/site';

// Stable date so the sitemap doesn't claim every URL changed on each request
const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: BUILD_DATE, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/salomatlik`, lastModified: BUILD_DATE, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/jazosiz-tarbiya`, lastModified: BUILD_DATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/maqolalar`, lastModified: BUILD_DATE, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/darslar`, lastModified: BUILD_DATE, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/bolalar`, lastModified: BUILD_DATE, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/premium`, lastModified: BUILD_DATE, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = seedArticles.map((article) => ({
    url: `${SITE_URL}/maqolalar/${article.slug}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : BUILD_DATE,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const courseRoutes: MetadataRoute.Sitemap = seedCourses.map((course) => ({
    url: `${SITE_URL}/darslar/${course.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const healthRoutes: MetadataRoute.Sitemap = healthTopics.map((topic) => ({
    url: `${SITE_URL}/salomatlik/${topic.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const jazosizRoutes: MetadataRoute.Sitemap = jazosizTarbiyaBook.parts.map((part) => ({
    url: `${SITE_URL}/jazosiz-tarbiya/${part.slug}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...articleRoutes, ...courseRoutes, ...healthRoutes, ...jazosizRoutes];
}
