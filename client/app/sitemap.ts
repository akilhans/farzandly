import { MetadataRoute } from 'next';
import { seedArticles, seedCourses } from '@/lib/seedData';
import { SITE_URL } from '@/lib/site';

// Stable date so the sitemap doesn't claim every URL changed on each request
const BUILD_DATE = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: BUILD_DATE, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE_URL}/maqolalar`, lastModified: BUILD_DATE, changeFrequency: 'daily', priority: 0.9 },
    { url: `${SITE_URL}/darslar`, lastModified: BUILD_DATE, changeFrequency: 'weekly', priority: 0.8 },
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

  return [...staticRoutes, ...articleRoutes, ...courseRoutes];
}
