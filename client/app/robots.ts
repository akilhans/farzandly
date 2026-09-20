import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://farzandly.uz';

  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/maqolalar', '/maqolalar/', '/kurslar', '/kurslar/', '/premium'],
      disallow: ['/dashboard', '/dars/', '/profil', '/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
