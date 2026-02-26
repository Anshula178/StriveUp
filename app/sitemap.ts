import type { MetadataRoute } from 'next';

const BASE_URL = process.env.APP_URL || 'https://striveup.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: BASE_URL, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/services`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/work`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/process`, priority: 0.7, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/contact`, priority: 0.8, changeFrequency: 'yearly' as const },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${BASE_URL}/careers`, priority: 0.6, changeFrequency: 'monthly' as const },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  const serviceRoutes = [
    'web-development',
    'custom-software',
    'mobile-apps',
    'ui-ux-design',
    'headless-cms',
    'performance',
  ].map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }));

  const caseStudyRoutes = [
    'fintech-dashboard',
    'ecommerce-scale-up',
    'healthtech-mobile',
  ].map((slug) => ({
    url: `${BASE_URL}/work/${slug}`,
    priority: 0.7,
    changeFrequency: 'monthly' as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes].map((route) => ({
    ...route,
    lastModified: new Date(),
  }));
}
