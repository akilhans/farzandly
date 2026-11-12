import fs from 'fs';

function cleanHtml(raw) {
  return raw
    .replace(/<[^>]+>/g, '')
    .replace(/&laquo;|&raquo;|&ldquo;|&rdquo;/g, '«')
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#039;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function cyrlToLatn(text) {
  // First clean HTML entities
  let str = cleanHtml(text);

  // Specific word corrections for common Uzbek orthography
  str = str.replace(/болалар хам/gi, 'bolalar ham');

  // Transliteration table
  const map = {
    'А': 'A', 'а': 'a',
    'Б': 'B', 'б': 'b',
    'В': 'V', 'в': 'v',
    'Г': 'G', 'г': 'g',
    'Д': 'D', 'д': 'd',
    'Е': 'E', 'е': 'e',
    'Ё': 'Yo', 'ё': 'yo',
    'Ж': 'J', 'ж': 'j',
    'З': 'Z', 'з': 'z',
    'И': 'I', 'и': 'i',
    'Й': 'Y', 'й': 'y',
    'К': 'K', 'к': 'k',
    'Л': 'L', 'л': 'l',
    'М': 'M', 'м': 'm',
    'Н': 'N', 'н': 'n',
    'О': 'O', 'о': 'o',
    'П': 'P', 'п': 'p',
    'Р': 'R', 'р': 'r',
    'С': 'S', 'с': 's',
    'Т': 'T', 'т': 't',
    'У': 'U', 'у': 'u',
    'Ф': 'F', 'ф': 'f',
    'Х': 'X', 'х': 'x',
    'Ҳ': 'H', 'ҳ': 'h',
    'Ч': 'Ch', 'ч': 'ch',
    'Ш': 'Sh', 'ш': 'sh',
    'Ъ': '’', 'ъ': '’',
    'Ь': '', 'ь': '',
    'Э': 'E', 'э': 'e',
    'Ю': 'Yu', 'ю': 'yu',
    'Я': 'Ya', 'я': 'ya',
    'Ў': 'O‘', 'ў': 'o‘',
    'Қ': 'Q', 'қ': 'q',
    'Ғ': 'G‘', 'ғ': 'g‘',
    'Ц': 'Ts', 'ц': 'ts'
  };

  // 'Е' / 'е' at start of words or after vowels is 'Ye' / 'ye'
  str = str.replace(/(^|[\s\(\[\"«\—\–\-–])Е/g, '$1Ye')
           .replace(/(^|[\s\(\[\"«\—\–\-–])е/g, '$1ye')
           .replace(/([АЕЁИОУЭЮЯаеёиоуэюя])е/g, '$1ye');

  // Convert each Cyrillic character
  let out = '';
  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    out += map[ch] !== undefined ? map[ch] : ch;
  }
  return out;
}

const ARTICLES_META = [
  {
    url: 'https://muslimaat.uz/maqola/36750',
    slug: 'bolaning-jahli-chiqqanda-muslimaat',
    categorySlug: 'tarbiya-asoslari',
    ageGroup: '3-5',
    author: 'Oisha / Muslimaat.uz',
    readingTimeMinutes: 4,
    tags: ['bolaning jahli', 'tantrum', 'ruhiy tarbiya', 'muslima va bola', 'mehr va kechirish'],
    seoTitle: 'Bolaning jahli chiqqanda nima qilish kerak? | Farzandly & Muslimaat.uz',
    seoDescription: 'Bolaning g‘azabini jilovlash, ota-onaning o‘z aybini tan olishi va Qur’oniy tavsiyalar asosida amaliy tarbiya qo‘llanmasi.'
  },
  {
    url: 'https://muslimaat.uz/maqola/38394',
    slug: 'qulay-bola-qul-bola-muslimaat',
    categorySlug: 'tarbiya-asoslari',
    ageGroup: '6-9',
    author: 'Muslimaat.uz',
    readingTimeMinutes: 6,
    tags: ['qulay bola', 'mustaqil shaxs', 'tarbiya xatolari', 'erkinlik va chegara', 'muslimaona'],
    seoTitle: 'Qulay bola — qul bola: Mustaqil shaxs tarbiyalash sirlari | Farzandly',
    seoDescription: 'Doim buyruqlarga so‘zsiz bo‘ysunuvchi qulay bola tarbiyalash xatosi va farzandni mustaqil shaxs qilib o‘stirish yo‘llari.'
  },
  {
    url: 'https://muslimaat.uz/maqola/36820',
    slug: 'farzandlar-ortasida-adolat-qilinglar-muslimaat',
    categorySlug: 'tarbiya-asoslari',
    ageGroup: '3-5',
    author: 'Muslimaat.uz',
    readingTimeMinutes: 5,
    tags: ['adolat', 'aka-uka rashki', 'hadya va mehr', 'islomda tarbiya', 'ota-ona masuliyati'],
    seoTitle: 'Farzandlaringiz o‘rtasida adolat qilinglar | Farzandly & Muslimaat.uz',
    seoDescription: 'Farzandlar orasida mehr va sovg‘ada tenglik, aka-ukalar rashkining oldini olish va Payg‘ambarimiz (s.a.v.) sunnatlari.'
  },
  {
    url: 'https://muslimaat.uz/maqola/36752',
    slug: 'virtual-autizm-bolajonlarga-xavf-muslimaat',
    categorySlug: 'soglom-turmush',
    ageGroup: '0-2',
    author: 'Muslimaat.uz',
    readingTimeMinutes: 8,
    tags: ['virtual autizm', 'ekran vaqti', 'godak rivojlanishi', 'smartfon zarari', 'nutq kechikishi'],
    seoTitle: 'Virtual autizm — bolajonlarga katta xavf | Farzandly',
    seoDescription: 'Elektron ekranlarning 0-3 yoshli bolalar nutqi, muloqoti va ruhiyatiga zarari hamda virtual autizmning oldini olish choralari.'
  },
  {
    url: 'https://muslimaat.uz/maqola/36684',
    slug: 'nega-bolalar-gadjetlarga-boglanadi-muslimaat',
    categorySlug: 'soglom-turmush',
    ageGroup: '6-9',
    author: 'Muslimaat.uz',
    readingTimeMinutes: 5,
    tags: ['gadjetlar', 'ekran qaramligi', 'bolalar psixologiyasi', 'ota-ona diqqati', 'soglom turmush'],
    seoTitle: 'Nima uchun bolalar gadjetlarga bog‘lanib qoladilar? | Farzandly',
    seoDescription: 'Smartfon va planshetlarga qaramlik sabablari, ota-ona e’tibori yetishmasligi va telefon o‘rnini bosuvchi jonli mashg‘ulotlar.'
  },
  {
    url: 'https://muslimaat.uz/maqola/36730',
    slug: 'qiz-farzand-hayotida-otaning-orni-muslimaat',
    categorySlug: 'tarbiya-asoslari',
    ageGroup: '6-9',
    author: 'Muslimaat.uz',
    readingTimeMinutes: 4,
    tags: ['ota va qiz', 'qizlar tarbiyasi', 'otaning mehri', 'islomiy oila', 'shaxsiy ibrat'],
    seoTitle: 'Qiz farzand hayotida otaning o‘rni | Farzandly & Muslimaat.uz',
    seoDescription: 'Qiz bolaning o‘ziga bo‘lgan ishonchi, qadr-qimmati va xarakterida otaning mehri, ibrati va suhbatlarining beqiyos o‘rni.'
  },
  {
    url: 'https://muslimaat.uz/maqola/36539',
    slug: 'tarbiyani-ozimizdan-boshlaylik-muslimaat',
    categorySlug: 'tarbiya-asoslari',
    ageGroup: '3-5',
    author: 'Muslimaat.uz',
    readingTimeMinutes: 6,
    tags: ['shaxsiy ibrat', 'tarbiya asoslari', 'lisonul-hol', 'ota-onaning xulqi', 'islomda tarbiya'],
    seoTitle: 'Tarbiyani o‘zimizdan boshlaylik: Shaxsiy ibrat | Farzandly',
    seoDescription: 'Farzand so‘zga emas, amalga ergashadi. Ota-onaning shaxsiy go‘zal xulqi, sabri va halolligi orqali tarbiyalash uslubi.'
  },
  {
    url: 'https://muslimaat.uz/maqola/36666',
    slug: 'bolalarni-zararli-stressdan-himoyalash-muslimaat',
    categorySlug: 'soglom-turmush',
    ageGroup: '3-5',
    author: 'Muslimaat.uz',
    readingTimeMinutes: 5,
    tags: ['stressdan himoya', 'bolalar ruhiyati', 'hissiy xavfsizlik', 'salomatlik', 'ota-ona daldasi'],
    seoTitle: 'Bolalar zararli stressdan qanday himoya qilinadi? | Farzandly',
    seoDescription: 'Bolaning hissiy ehtiyojlari qondirilmaganda yuzaga keluvchi toksik stress va uni tinchlantirish bo‘yicha amaliy tavsiyalar.'
  }
];

async function scrapeAll() {
  const results = [];

  for (const meta of ARTICLES_META) {
    try {
      const res = await fetch(meta.url);
      const html = await res.text();

      const titleMatch = html.match(/<meta property=\"og:title\" content=\"([^\"]+)\"/i) || html.match(/<title>([^<]+)<\/title>/i);
      const rawTitle = titleMatch ? cleanHtml(titleMatch[1]) : '';
      const cyrlTitle = rawTitle.replace(/\s*\|\s*Muslimaat\.uz/gi, '').trim();
      const latnTitle = cyrlToLatn(cyrlTitle);

      const pMatches = html.match(/<p[^>]*>(.*?)<\/p>/gs) || [];
      const paragraphs = pMatches
        .slice(2)
        .map(cleanHtml)
        .filter(p => p.length > 25 && !p.includes('Медиа') && !p.includes('Muslimaat.uz саҳифаси'));

      const cyrlContent = paragraphs.join('\n\n');
      const latnContent = cyrlToLatn(cyrlContent);

      const latnExcerpt = cleanHtml(paragraphs[0] ? cyrlToLatn(paragraphs[0]).slice(0, 220) + '...' : '');
      const cyrlExcerpt = cleanHtml(paragraphs[0] ? paragraphs[0].slice(0, 220) + '...' : '');

      results.push({
        title: latnTitle,
        slug: meta.slug,
        excerpt: latnExcerpt,
        content: latnContent,
        categorySlug: meta.categorySlug,
        ageGroup: meta.ageGroup,
        readingTimeMinutes: meta.readingTimeMinutes,
        tags: meta.tags,
        author: meta.author,
        seoTitle: meta.seoTitle,
        seoDescription: meta.seoDescription,
        isPublished: true,
        publishedAt: '2026-10-15T10:00:00.000Z',
        isPremium: false,
        translations: {
          uz: {
            title: latnTitle,
            excerpt: latnExcerpt,
            content: latnContent
          },
          ru: {
            title: cyrlTitle,
            excerpt: cyrlExcerpt,
            content: cyrlContent
          }
        }
      });
      console.log(`✓ Fetched & Transliterated: ${latnTitle}`);
    } catch (err) {
      console.error(`✗ Error scraping ${meta.url}:`, err.message);
    }
  }

  fs.writeFileSync('scripts/muslimaat_articles.json', JSON.stringify(results, null, 2), 'utf-8');
  console.log(`Successfully saved ${results.length} articles to scripts/muslimaat_articles.json`);
}

scrapeAll();
