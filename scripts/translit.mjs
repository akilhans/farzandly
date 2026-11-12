export function latnToCyrl(text) {
  if (!text || typeof text !== 'string') return text;

  let s = text;

  // 2-letter digraphs
  const digraphs = [
    [/O[‘'’`]/g, 'Ў'], [/o[‘'’`]/g, 'ў'],
    [/G[‘'’`]/g, 'Ғ'], [/g[‘'’`]/g, 'ғ'],
    [/Sh/g, 'Ш'], [/sh/g, 'ш'],
    [/Ch/g, 'Ч'], [/ch/g, 'ч'],
    [/Yo/g, 'Ё'], [/yo/g, 'ё'],
    [/Yu/g, 'Ю'], [/yu/g, 'ю'],
    [/Ya/g, 'Я'], [/ya/g, 'я'],
    [/Ye/g, 'Е'], [/ye/g, 'е'],
    [/Ts/g, 'Ц'], [/ts/g, 'ц'],
  ];

  for (const [re, rep] of digraphs) {
    s = s.replace(re, rep);
  }

  // E at start of word or after whitespace/bracket is Э/э
  s = s.replace(/(^|[\s\(\[\"«\—\–\-–])E/g, '$1Э')
       .replace(/(^|[\s\(\[\"«\—\–\-–])e/g, '$1э');

  const singles = {
    'A': 'А', 'a': 'а', 'B': 'Б', 'b': 'б',
    'V': 'В', 'v': 'в', 'G': 'Г', 'g': 'г',
    'D': 'Д', 'd': 'д', 'E': 'Е', 'e': 'е',
    'J': 'Ж', 'j': 'ж', 'Z': 'З', 'z': 'з',
    'I': 'И', 'i': 'и', 'Y': 'Й', 'y': 'й',
    'K': 'К', 'k': 'к', 'L': 'Л', 'l': 'л',
    'M': 'М', 'm': 'м', 'N': 'Н', 'n': 'н',
    'O': 'О', 'o': 'о', 'P': 'П', 'p': 'п',
    'R': 'Р', 'r': 'р', 'S': 'С', 's': 'с',
    'T': 'Т', 't': 'т', 'U': 'У', 'u': 'у',
    'F': 'Ф', 'f': 'ф', 'X': 'Х', 'x': 'х',
    'H': 'Ҳ', 'h': 'ҳ', 'Q': 'Қ', 'q': 'қ',
    '’': 'ъ', "'": 'ъ'
  };

  let out = '';
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    out += singles[ch] !== undefined ? singles[ch] : ch;
  }
  return out;
}

export function deepLatnToCyrl(obj) {
  if (obj === null || obj === undefined) return obj;
  if (typeof obj === 'string') return latnToCyrl(obj);
  if (Array.isArray(obj)) return obj.map(deepLatnToCyrl);
  if (typeof obj === 'object') {
    const res = {};
    for (const [k, v] of Object.entries(obj)) {
      // Don't transliterate technical keys like slugs, types, numbers, urls
      if (['slug', 'type', 'videoId', 'videoUrl', 'order', 'estimatedMinutes', 'xpReward', 'isFree', 'isPremium', 'courseSlug', 'categorySlug', 'ageGroup', 'screenIndex', 'correctOptionIndex', 'code', 'readingTimeMinutes', 'publishedAt'].includes(k)) {
        res[k] = v;
      } else {
        res[k] = deepLatnToCyrl(v);
      }
    }
    return res;
  }
  return obj;
}
