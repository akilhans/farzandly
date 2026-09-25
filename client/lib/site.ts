export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://farzandly.uz').replace(/\/$/, '');
export const SITE_NAME = 'Farzandly';
export const SITE_DESCRIPTION =
  'Farzand tarbiyalash va bolalar psixologiyasi — islomiy qadriyatlar va zamonaviy pedagogika asosidagi qisqa 5 daqiqalik audio hamda matnli darslar, ertaklar va amaliy qo‘llanmalar.';
export const DEFAULT_OG_IMAGE = '/logo.png';

export const SITE_KEYWORDS = [
  'farzand tarbiyalash',
  'farzand tarbiyasi',
  'bola tarbiyasi',
  'bolalar psixologiyasi',
  'bolani to‘g‘ri tarbiyalash',
  'chaqaloq parvarishi',
  'ota-onalar uchun maslahatlar',
  'bolalarda tantrum',
  'bolalar injiqligi',
  'islomiy tarbiya',
  'farzand odobi',
  'yosh bolalar tarbiyasi',
  'zamonaviy tarbiya usullari',
  'ota-ona va bola munosabatlari',
  'bolalar uchun ertaklar',
  'bolalar she’rlari',
  'bolalar topishmoqlari',
  'tarbiya haqida maqollar',
  'bola tarbiyasi darslari',
  'farzand salomatligi',
  'bolalar salomatligi',
  'bolalar anatomiyasi',
  'tana sirlari',
  'tana a’zolari bolalar uchun',
  'bolaning jismoniy rivojlanishi',
  'jazosiz tarbiya',
  'bolalarni tarbiyalash usullari',
  'ota onalar uchun qo‘llanma',
  'bolalar gigiyenasi',
  'pediatriya maslahatlari',
  'Farzandly',
  'uzbek parenting',
  'воспитание детей',
  'детская психология',
];

export const SOCIAL_LINKS = {
  telegram: 'https://t.me/farzandly',
  telegramBot: 'https://t.me/farzandly_bot',
  instagram: 'https://instagram.com/farzandly',
};

export const absoluteUrl = (path = '/') => `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;

// First free lesson — the primary "start now" destination for every CTA
export const START_LESSON_HREF = '/dars/dars-1-tarbiyaning-ahamiyati-1-qism';

