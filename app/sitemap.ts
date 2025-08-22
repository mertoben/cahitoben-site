import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://cahitoben.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/discography`, lastModified: new Date() },
    { url: `${base}/art`, lastModified: new Date() },
    { url: `${base}/news`, lastModified: new Date() },
    { url: `${base}/listen`, lastModified: new Date() },
    { url: `${base}/contact`, lastModified: new Date() },
  ];
}
