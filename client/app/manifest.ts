import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Farzandly — raqamli tarbiya platformasi',
    short_name: 'Farzandly',
    description: 'Islomiy qadriyatlar va zamonaviy bolalar psixologiyasi asosidagi 5 daqiqalik tarbiya darslari.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF7F2',
    theme_color: '#059669',
    lang: 'uz',
    icons: [
      { src: '/icon.png', sizes: '256x256', type: 'image/png', purpose: 'any' },
      { src: '/icon.png', sizes: '256x256', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
