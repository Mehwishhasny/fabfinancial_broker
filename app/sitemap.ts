import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://fabfinancialbroker.ae',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://fabfinancialbroker.ae/about',
      lastModified: new Date(),
    },
    {
      url: 'https://fabfinancialbroker.ae/services',
      lastModified: new Date(),
    },
      {
      url: 'https://fabfinancialbroker.ae/calculator',
      lastModified: new Date(),
    },
    {
      url: 'https://fabfinancialbroker.ae/contact',
      lastModified: new Date(),
    },
  ]
}