// Dataset for "Rasmli Gap Tuzuvchi" (Visual Sentence Builder) game
// 3 levels: Oson (3-4 yosh), O'rtacha (5-6 yosh), Qiyin (7+ yosh)
// Dual language support: Latin (uz) and Cyrillic (kr)

export interface SentencePiece {
  id: string;
  textUz: string;
  textKr: string;
  emoji: string;
  role: 'subject' | 'object' | 'verb' | 'adjective' | 'place' | 'time' | 'distractor';
}

export interface ScenarioGame {
  id: string;
  level: 'easy' | 'medium' | 'hard';
  titleUz: string;
  titleKr: string;
  sceneTheme: string;
  sceneGradient: string;
  sceneEmoji: string;
  sceneDescriptionUz: string;
  sceneDescriptionKr: string;
  // Visual illustration details for SVG scene renderer
  sceneVisual: {
    skyColor: string;
    groundColor: string;
    mainActorEmoji: string;
    itemEmoji: string;
    actionEmoji: string;
    environmentEmoji: string;
  };
  // The correct sequence of piece IDs
  correctOrder: string[];
  // All pieces presented to the child (including distractors for medium & hard)
  pieces: SentencePiece[];
  xpReward: number;
}

export const SENTENCE_SCENARIOS: ScenarioGame[] = [
  /* ============================================================== */
  /* LEVEL 1: OSON (3-4 yosh — 2-3 ta bo'lak, chalg'ituvchisiz)      */
  /* ============================================================== */
  {
    id: 'easy-mushuk-sut',
    level: 'easy',
    titleUz: 'Mushuk va sut',
    titleKr: 'Мушук ва сут',
    sceneTheme: 'Uy ichi',
    sceneGradient: 'from-amber-100 via-orange-50 to-amber-200',
    sceneEmoji: '🐱🥛',
    sceneDescriptionUz: 'Mushukcha kosa ichidagi mazali sutni ichmoqda.',
    sceneDescriptionKr: 'Мушукча коса ичидаги мазали сутни ичмоқда.',
    sceneVisual: {
      skyColor: '#FFFBEB',
      groundColor: '#FED7AA',
      mainActorEmoji: '🐱',
      itemEmoji: '🥛',
      actionEmoji: '👅',
      environmentEmoji: '🥣',
    },
    correctOrder: ['p-mushuk', 'p-sut', 'p-ichyapti'],
    pieces: [
      { id: 'p-mushuk', textUz: 'Mushuk', textKr: 'Мушук', emoji: '🐱', role: 'subject' },
      { id: 'p-sut', textUz: 'sut', textKr: 'сут', emoji: '🥛', role: 'object' },
      { id: 'p-ichyapti', textUz: 'ichyapti', textKr: 'ичяпти', emoji: '👅', role: 'verb' },
    ],
    xpReward: 10,
  },
  {
    id: 'easy-bola-kitob',
    level: 'easy',
    titleUz: 'Bola va kitob',
    titleKr: 'Бола ва китоб',
    sceneTheme: 'Xona / Kutubxona',
    sceneGradient: 'from-sky-100 via-indigo-50 to-blue-200',
    sceneEmoji: '👦📖',
    sceneDescriptionUz: 'Kichik bola qiziqarli rangli kitobni o‘qimoqda.',
    sceneDescriptionKr: 'Кичик бола қизиқарли рангли китобни ўқимоқда.',
    sceneVisual: {
      skyColor: '#F0F9FF',
      groundColor: '#BFDBFE',
      mainActorEmoji: '👦',
      itemEmoji: '📖',
      actionEmoji: '👓',
      environmentEmoji: '🪑',
    },
    correctOrder: ['p-bola', 'p-kitob', 'p-oqiyapti'],
    pieces: [
      { id: 'p-bola', textUz: 'Bola', textKr: 'Бола', emoji: '👦', role: 'subject' },
      { id: 'p-kitob', textUz: 'kitob', textKr: 'китоб', emoji: '📖', role: 'object' },
      { id: 'p-oqiyapti', textUz: 'o‘qiyapti', textKr: 'ўқияпти', emoji: '👓', role: 'verb' },
    ],
    xpReward: 10,
  },
  {
    id: 'easy-qush-daraxt',
    level: 'easy',
    titleUz: 'Qush va daraxt',
    titleKr: 'Қуш ва дарахт',
    sceneTheme: 'Bog‘ / Tabiat',
    sceneGradient: 'from-emerald-100 via-teal-50 to-green-200',
    sceneEmoji: '🐦🌳',
    sceneDescriptionUz: 'Kichik qushcha yashil daraxt shoxida sayramoqda.',
    sceneDescriptionKr: 'Кичик қушча яшил дарахт шохида сайрамоқда.',
    sceneVisual: {
      skyColor: '#ECFDF5',
      groundColor: '#A7F3D0',
      mainActorEmoji: '🐦',
      itemEmoji: '🌳',
      actionEmoji: '🎶',
      environmentEmoji: '🍃',
    },
    correctOrder: ['p-qush', 'p-daraxtda', 'p-sayrayapti'],
    pieces: [
      { id: 'p-qush', textUz: 'Qush', textKr: 'Қуш', emoji: '🐦', role: 'subject' },
      { id: 'p-daraxtda', textUz: 'daraxtda', textKr: 'дарахтда', emoji: '🌳', role: 'place' },
      { id: 'p-sayrayapti', textUz: 'sayrayapti', textKr: 'сайраяпти', emoji: '🎶', role: 'verb' },
    ],
    xpReward: 10,
  },
  {
    id: 'easy-qizaloq-olma',
    level: 'easy',
    titleUz: 'Qizaloq va olma',
    titleKr: 'Қизалоқ ва олма',
    sceneTheme: 'Bog‘ / Taom',
    sceneGradient: 'from-rose-100 via-pink-50 to-red-200',
    sceneEmoji: '👧🍎',
    sceneDescriptionUz: 'Qizaloq qip-qizil shirin olmani yeyapti.',
    sceneDescriptionKr: 'Қизалоқ қип-қизил ширин олмани еяпти.',
    sceneVisual: {
      skyColor: '#FFF1F2',
      groundColor: '#FECDD3',
      mainActorEmoji: '👧',
      itemEmoji: '🍎',
      actionEmoji: '😋',
      environmentEmoji: '🧺',
    },
    correctOrder: ['p-qizaloq', 'p-olma', 'p-yeyapti'],
    pieces: [
      { id: 'p-qizaloq', textUz: 'Qizaloq', textKr: 'Қизалоқ', emoji: '👧', role: 'subject' },
      { id: 'p-olma', textUz: 'olma', textKr: 'олма', emoji: '🍎', role: 'object' },
      { id: 'p-yeyapti', textUz: 'yeyapti', textKr: 'еяпти', emoji: '😋', role: 'verb' },
    ],
    xpReward: 10,
  },
  {
    id: 'easy-kuchuk-top',
    level: 'easy',
    titleUz: 'Kuchukcha va to‘p',
    titleKr: 'Кучукча ва тўп',
    sceneTheme: 'Maysazor',
    sceneGradient: 'from-lime-100 via-emerald-50 to-green-200',
    sceneEmoji: '🐶⚽️',
    sceneDescriptionUz: 'Sho‘x kuchukcha maysazorda to‘p bilan o‘ynamoqda.',
    sceneDescriptionKr: 'Шўх кучукча майсазорда тўп билан ўйнамоқда.',
    sceneVisual: {
      skyColor: '#F7FEE7',
      groundColor: '#D9F99D',
      mainActorEmoji: '🐶',
      itemEmoji: '⚽️',
      actionEmoji: '🎾',
      environmentEmoji: '🌱',
    },
    correctOrder: ['p-kuchuk', 'p-top', 'p-oynayapti'],
    pieces: [
      { id: 'p-kuchuk', textUz: 'Kuchukcha', textKr: 'Кучукча', emoji: '🐶', role: 'subject' },
      { id: 'p-top', textUz: 'to‘p', textKr: 'тўп', emoji: '⚽️', role: 'object' },
      { id: 'p-oynayapti', textUz: 'o‘ynayapti', textKr: 'ўйнаяпти', emoji: '🎾', role: 'verb' },
    ],
    xpReward: 10,
  },

  /* ============================================================== */
  /* LEVEL 2: O'RTACHA (5-6 yosh — 3-4 bo'lak + chalg'ituvchilar)    */
  /* ============================================================== */
  {
    id: 'med-qizil-mashina',
    level: 'medium',
    titleUz: 'Qizil mashina',
    titleKr: 'Қизил машина',
    sceneTheme: 'Shahar yo‘li',
    sceneGradient: 'from-amber-100 via-rose-50 to-red-200',
    sceneEmoji: '🚗🛣',
    sceneDescriptionUz: 'Qizil rangli mashina keng yo‘lda tez ketmoqda.',
    sceneDescriptionKr: 'Қизил рангли машина кенг йўлда тез кетмоқда.',
    sceneVisual: {
      skyColor: '#FEF3C7',
      groundColor: '#CBD5E1',
      mainActorEmoji: '🔴',
      itemEmoji: '🚗',
      actionEmoji: '💨',
      environmentEmoji: '🛣',
    },
    correctOrder: ['p-qizil', 'p-mashina', 'p-yolda', 'p-yuryapti'],
    pieces: [
      { id: 'p-qizil', textUz: 'Qizil', textKr: 'Қизил', emoji: '🔴', role: 'adjective' },
      { id: 'p-mashina', textUz: 'mashina', textKr: 'машина', emoji: '🚗', role: 'subject' },
      { id: 'p-yolda', textUz: 'yo‘lda', textKr: 'йўлда', emoji: '🛣', role: 'place' },
      { id: 'p-yuryapti', textUz: 'yuryapti', textKr: 'юряпти', emoji: '💨', role: 'verb' },
      // Distractors
      { id: 'd-kok', textUz: 'ko‘k', textKr: 'кўк', emoji: '🔵', role: 'distractor' },
      { id: 'd-uchyapti', textUz: 'uchyapti', textKr: 'учяпти', emoji: '✈️', role: 'distractor' },
    ],
    xpReward: 15,
  },
  {
    id: 'med-quyon-sabzi',
    level: 'medium',
    titleUz: 'Oq quyon va sabzi',
    titleKr: 'Оқ қуён ва сабзи',
    sceneTheme: 'Bog‘cha',
    sceneGradient: 'from-emerald-100 via-amber-50 to-orange-200',
    sceneEmoji: '🐰🥕',
    sceneDescriptionUz: 'Oq quyoncha bog‘da shirin sabzini yeyapti.',
    sceneDescriptionKr: 'Оқ қуёнча боғда ширин сабзини еяпти.',
    sceneVisual: {
      skyColor: '#ECFDF5',
      groundColor: '#BBF7D0',
      mainActorEmoji: '🐰',
      itemEmoji: '🥕',
      actionEmoji: '😋',
      environmentEmoji: '🏡',
    },
    correctOrder: ['p-oq-quyon', 'p-bogda', 'p-sabzi', 'p-yeyapti2'],
    pieces: [
      { id: 'p-oq-quyon', textUz: 'Oq quyon', textKr: 'Оқ қуён', emoji: '🐰', role: 'subject' },
      { id: 'p-bogda', textUz: 'bog‘da', textKr: 'боғда', emoji: '🏡', role: 'place' },
      { id: 'p-sabzi', textUz: 'sabzi', textKr: 'сабзи', emoji: '🥕', role: 'object' },
      { id: 'p-yeyapti2', textUz: 'yeyapti', textKr: 'еяпти', emoji: '😋', role: 'verb' },
      // Distractors
      { id: 'd-gosht', textUz: 'go‘sht', textKr: 'гўшт', emoji: '🥩', role: 'distractor' },
      { id: 'd-uxlayapti', textUz: 'uxlayapti', textKr: 'ухлаяпти', emoji: '💤', role: 'distractor' },
    ],
    xpReward: 15,
  },
  {
    id: 'med-ona-chaqaloq',
    level: 'medium',
    titleUz: 'Mehribon ona',
    titleKr: 'Меҳрибон она',
    sceneTheme: 'Shinam xona',
    sceneGradient: 'from-purple-100 via-pink-50 to-rose-200',
    sceneEmoji: '👩👶',
    sceneDescriptionUz: 'Mehribon ona chaqaloqni mehr bilan uxlatmoqda.',
    sceneDescriptionKr: 'Меҳрибон она чақалоқни меҳр билан ухлатмоқда.',
    sceneVisual: {
      skyColor: '#FAF5FF',
      groundColor: '#E9D5FF',
      mainActorEmoji: '👩',
      itemEmoji: '👶',
      actionEmoji: '💤',
      environmentEmoji: '💖',
    },
    correctOrder: ['p-ona', 'p-chaqaloqni', 'p-mehr-bilan', 'p-uxlatyapti'],
    pieces: [
      { id: 'p-ona', textUz: 'Mehribon ona', textKr: 'Меҳрибон она', emoji: '👩', role: 'subject' },
      { id: 'p-chaqaloqni', textUz: 'chaqaloqni', textKr: 'чақалоқни', emoji: '👶', role: 'object' },
      { id: 'p-mehr-bilan', textUz: 'mehr bilan', textKr: 'меҳр билан', emoji: '💖', role: 'adjective' },
      { id: 'p-uxlatyapti', textUz: 'uxlatyapti', textKr: 'ухлатяпти', emoji: '💤', role: 'verb' },
      // Distractors
      { id: 'd-yiglayapti', textUz: 'yig‘layapti', textKr: 'йиғлаяпти', emoji: '😭', role: 'distractor' },
      { id: 'd-koptok', textUz: 'to‘p', textKr: 'тўп', emoji: '⚽️', role: 'distractor' },
    ],
    xpReward: 15,
  },
  {
    id: 'med-asalari-gul',
    level: 'medium',
    titleUz: 'Asalari va gul',
    titleKr: 'Асалари ва гул',
    sceneTheme: 'Gullar vodiysi',
    sceneGradient: 'from-yellow-100 via-amber-50 to-amber-200',
    sceneEmoji: '🐝🌸',
    sceneDescriptionUz: 'Mehnatkash asalari chiroyli guldan shira yig‘moqda.',
    sceneDescriptionKr: 'Меҳнаткаш асалари чиройли гулдан шира йиғмоқда.',
    sceneVisual: {
      skyColor: '#FEF9C3',
      groundColor: '#FDE047',
      mainActorEmoji: '🐝',
      itemEmoji: '🌸',
      actionEmoji: '🧺',
      environmentEmoji: '🍯',
    },
    correctOrder: ['p-asalari', 'p-guldan', 'p-shira', 'p-yigmoqda'],
    pieces: [
      { id: 'p-asalari', textUz: 'Asalari', textKr: 'Асалари', emoji: '🐝', role: 'subject' },
      { id: 'p-guldan', textUz: 'chiroyli guldan', textKr: 'чиройли гулдан', emoji: '🌸', role: 'place' },
      { id: 'p-shira', textUz: 'shira', textKr: 'шира', emoji: '🍯', role: 'object' },
      { id: 'p-yigmoqda', textUz: 'yig‘moqda', textKr: 'йиғмоқда', emoji: '🧺', role: 'verb' },
      // Distractors
      { id: 'd-suv', textUz: 'suv', textKr: 'сув', emoji: '💧', role: 'distractor' },
      { id: 'd-baliq', textUz: 'baliq', textKr: 'балиқ', emoji: '🐟', role: 'distractor' },
    ],
    xpReward: 15,
  },

  /* ============================================================== */
  /* LEVEL 3: QIYIN (7+ yosh — 4-5 ta bo'lak + 2-3 chalg'ituvchi)    */
  /* ============================================================== */
  {
    id: 'hard-kapalak-gul',
    level: 'hard',
    titleUz: 'Ertalabki kapalak',
    titleKr: 'Эрталабки капалак',
    sceneTheme: 'Tonggi bog‘',
    sceneGradient: 'from-rose-100 via-amber-50 to-emerald-200',
    sceneEmoji: '🦋🌺',
    sceneDescriptionUz: 'Ertalab rangdor kapalak chiroyli gul ustiga ohista qo‘ndi.',
    sceneDescriptionKr: 'Эрталаб рангдор капалак чиройли гул устига оҳиста қўнди.',
    sceneVisual: {
      skyColor: '#FFF7ED',
      groundColor: '#BBF7D0',
      mainActorEmoji: '🌅',
      itemEmoji: '🦋',
      actionEmoji: '🌺',
      environmentEmoji: '🍃',
    },
    correctOrder: ['p-ertalab', 'p-kapalak', 'p-gul-ustiga', 'p-ohista', 'p-qondi'],
    pieces: [
      { id: 'p-ertalab', textUz: 'Ertalab', textKr: 'Эрталаб', emoji: '🌅', role: 'time' },
      { id: 'p-kapalak', textUz: 'rangdor kapalak', textKr: 'рангдор капалак', emoji: '🦋', role: 'subject' },
      { id: 'p-gul-ustiga', textUz: 'gul ustiga', textKr: 'гул устига', emoji: '🌺', role: 'place' },
      { id: 'p-ohista', textUz: 'ohista', textKr: 'оҳиста', emoji: '🍃', role: 'adjective' },
      { id: 'p-qondi', textUz: 'qo‘ndi', textKr: 'қўнди', emoji: '🌸', role: 'verb' },
      // Distractors
      { id: 'd-kechqurun', textUz: 'Kechqurun', textKr: 'Кечқурун', emoji: '🌙', role: 'distractor' },
      { id: 'd-suvga', textUz: 'suvga', textKr: 'сувга', emoji: '🌊', role: 'distractor' },
      { id: 'd-uchibketdi', textUz: 'uchib ketdi', textKr: 'учиб кетди', emoji: '💨', role: 'distractor' },
    ],
    xpReward: 20,
  },
  {
    id: 'hard-ota-ogil-qush',
    level: 'hard',
    titleUz: 'Qush uyasi',
    titleKr: 'Қуш уяси',
    sceneTheme: 'Ustaxona',
    sceneGradient: 'from-amber-100 via-orange-50 to-yellow-200',
    sceneEmoji: '👨‍👦🪵',
    sceneDescriptionUz: 'Ota va o‘g‘il birgalikda yog‘ochdan qush uyasi yasashdi.',
    sceneDescriptionKr: 'Ота ва ўғил биргаликда ёғочдан қуш уяси ясашди.',
    sceneVisual: {
      skyColor: '#FEF3C7',
      groundColor: '#FDE68A',
      mainActorEmoji: '👨‍👦',
      itemEmoji: '🪵',
      actionEmoji: '🔨',
      environmentEmoji: '🛖',
    },
    correctOrder: ['p-ota-ogil', 'p-birgalikda', 'p-yogochdan', 'p-qush-uyasi', 'p-yasashdi'],
    pieces: [
      { id: 'p-ota-ogil', textUz: 'Ota va o‘g‘il', textKr: 'Ота ва ўғил', emoji: '👨‍👦', role: 'subject' },
      { id: 'p-birgalikda', textUz: 'birgalikda', textKr: 'биргаликда', emoji: '🤝', role: 'adjective' },
      { id: 'p-yogochdan', textUz: 'yog‘ochdan', textKr: 'ёғочдан', emoji: '🪵', role: 'object' },
      { id: 'p-qush-uyasi', textUz: 'qush uyasi', textKr: 'қуш уяси', emoji: '🛖', role: 'object' },
      { id: 'p-yasashdi', textUz: 'yasashdi', textKr: 'ясашди', emoji: '🔨', role: 'verb' },
      // Distractors
      { id: 'd-yolgiz', textUz: 'yolg‘iz', textKr: 'ёлғиз', emoji: '🚶', role: 'distractor' },
      { id: 'd-sindirishdi', textUz: 'sindirishdi', textKr: 'синдиришди', emoji: '💥', role: 'distractor' },
    ],
    xpReward: 20,
  },
  {
    id: 'hard-qish-qorbobo',
    level: 'hard',
    titleUz: 'Qishki qorbobo',
    titleKr: 'Қишки қорбобо',
    sceneTheme: 'Qorli hovli',
    sceneGradient: 'from-sky-100 via-indigo-50 to-blue-200',
    sceneEmoji: '❄️⛄️',
    sceneDescriptionUz: 'Qish faslida quvnoq bolalar hovlida katta qorbobo yasamoqda.',
    sceneDescriptionKr: 'Қиш фаслида қувноқ болалар ҳовлида катта қорбобо ясамоқда.',
    sceneVisual: {
      skyColor: '#E0F2FE',
      groundColor: '#BAE6FD',
      mainActorEmoji: '❄️',
      itemEmoji: '👫',
      actionEmoji: '⛄️',
      environmentEmoji: '🧤',
    },
    correctOrder: ['p-qishda', 'p-bolalar', 'p-hovlida', 'p-qorbobo', 'p-yasamoqda'],
    pieces: [
      { id: 'p-qishda', textUz: 'Qish faslida', textKr: 'Қиш фаслида', emoji: '❄️', role: 'time' },
      { id: 'p-bolalar', textUz: 'quvnoq bolalar', textKr: 'қувноқ болалар', emoji: '👫', role: 'subject' },
      { id: 'p-hovlida', textUz: 'hovlida', textKr: 'ҳовлида', emoji: '🏡', role: 'place' },
      { id: 'p-qorbobo', textUz: 'katta qorbobo', textKr: 'катта қорбобо', emoji: '⛄️', role: 'object' },
      { id: 'p-yasamoqda', textUz: 'yasamoqda', textKr: 'ясамоқда', emoji: '🧤', role: 'verb' },
      // Distractors
      { id: 'd-yozda', textUz: 'Yoz faslida', textKr: 'Ёз фаслида', emoji: '☀️', role: 'distractor' },
      { id: 'd-chomilmoqda', textUz: 'cho‘milmoqda', textKr: 'чўмилмоқда', emoji: '🏊', role: 'distractor' },
    ],
    xpReward: 20,
  },
  {
    id: 'hard-bobo-olma',
    level: 'hard',
    titleUz: 'Bobo va nevara',
    titleKr: 'Бобо ва невара',
    sceneTheme: 'Serhosil bog‘',
    sceneGradient: 'from-amber-100 via-emerald-50 to-teal-200',
    sceneEmoji: '👴🧺',
    sceneDescriptionUz: 'Bobo va nevara bog‘dan pishgan olmalarni savatga terishdi.',
    sceneDescriptionKr: 'Бобо ва невара боғдан пишган олмаларни саватга теришди.',
    sceneVisual: {
      skyColor: '#FEF3C7',
      groundColor: '#A7F3D0',
      mainActorEmoji: '👴',
      itemEmoji: '🍎',
      actionEmoji: '🧺',
      environmentEmoji: '🌳',
    },
    correctOrder: ['p-bobo-nevara', 'p-bogdan', 'p-olmalarni', 'p-savatga', 'p-terishdi'],
    pieces: [
      { id: 'p-bobo-nevara', textUz: 'Bobo va nevara', textKr: 'Бобо ва невара', emoji: '👴', role: 'subject' },
      { id: 'p-bogdan', textUz: 'bog‘dan', textKr: 'боғдан', emoji: '🌳', role: 'place' },
      { id: 'p-olmalarni', textUz: 'pishgan olmalarni', textKr: 'пишган олмаларни', emoji: '🍎', role: 'object' },
      { id: 'p-savatga', textUz: 'savatga', textKr: 'саватга', emoji: '🧺', role: 'object' },
      { id: 'p-terishdi', textUz: 'terishdi', textKr: 'теришди', emoji: '🤲', role: 'verb' },
      // Distractors
      { id: 'd-dokondan', textUz: 'do‘kondan', textKr: 'дўкондан', emoji: '🏬', role: 'distractor' },
      { id: 'd-tashlashdi', textUz: 'tashlab yubordi', textKr: 'ташлаб юборди', emoji: '🗑', role: 'distractor' },
    ],
    xpReward: 20,
  },
];
