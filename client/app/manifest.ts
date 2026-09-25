import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Farzandly — Farzand tarbiyalash va bolalar psixologiyasi',
    short_name: 'Farzandly',
    description:
      'Farzand tarbiyalash bo‘yicha islomiy qadriyatlar va zamonaviy bolalar psixologiyasiga asoslangan mikro-darslar va amaliy qo‘llanmalar.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF7F2',
    theme_color: '#059669',
    lang: 'uz',
    categories: ['education', 'lifestyle', 'parenting'],
    icons: [
      { src: '/icon.png', sizes: '256x256', type: 'image/png', purpose: 'any' },
      { src: '/icon.png', sizes: '256x256', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
