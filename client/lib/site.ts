export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://farzandly.uz').replace(/\/$/, '');
export const SITE_NAME = 'Farzandly';
export const SITE_DESCRIPTION =
  'Farzand tarbiyasi — har kuni o‘rganiladigan yo‘l. Islomiy qadriyatlar, zamonaviy bolalar psixologiyasi va amaliy mashqlar asosidagi qisqa 5 daqiqalik darslar.';
export const DEFAULT_OG_IMAGE = '/logo.png';

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
