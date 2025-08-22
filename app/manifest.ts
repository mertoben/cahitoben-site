import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Cahit Oben',
    short_name: 'Cahit Oben',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#111827',
    icons: [{ src: '/icon.png', sizes: '512x512', type: 'image/png' }],
  };
}
