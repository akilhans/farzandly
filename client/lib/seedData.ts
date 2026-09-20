export const seedCategories = [
  {
    name: "Bola xulqi",
    slug: "bola-xulqi",
    description: "Injiqlik, qaysarlik, e'tiroz va xulq-atvorni to'g'ri tushunish",
    icon: "Smile",
    color: "#059669",
    displayOrder: 1,
  },
  {
    name: "Hissiyotlar",
    slug: "hissiyotlar",
    description: "Qo'rquv, g'azab, yig'i va bolaning hissiy olamini tushunish",
    icon: "Heart",
    color: "#D97706",
    displayOrder: 2,
  },
  {
    name: "Intizom va chegaralar",
    slug: "intizom",
    description: "Baqirmasdan, jazolarsiz va mehr bilan tartib o'rnatish",
    icon: "Shield",
    color: "#2563EB",
    displayOrder: 3,
  },
  {
    name: "Islomiy tarbiya",
    slug: "islomiy-tarbiya",
    description: "Payg'ambarimiz sunnatlari asosida mehr, adolat va ibodatga muhabbat",
    icon: "BookOpen",
    color: "#10B981",
    displayOrder: 4,
  },
  {
    name: "Telefon va texnologiya",
    slug: "telefon-va-texnologiya",
    description: "Ekran vaqti, gadjetlar va raqamli xavfsizlikni boshqarish",
    icon: "Smartphone",
    color: "#8B5CF6",
    displayOrder: 5,
  },
  {
    name: "Ota-ona munosabati",
    slug: "ota-ona-munosabati",
    description: "Oila muhiti, aka-uka munosabatlari va samimiy o'zaro ishonch",
    icon: "Users",
    color: "#EC4899",
    displayOrder: 6,
  },
];

export const seedAgeGroups = [
  {
    code: "0-2",
    title: "0–2 yosh",
    description: "Chaqaloqlik, mehrli bog'lanish va ilk qadamlar davri",
    icon: "Baby",
    displayOrder: 1,
  },
  {
    code: "3-5",
    title: "3–5 yosh",
    description: "Nutq, his-tuyg'ular, o'yin va dastlabki chegaralar",
    icon: "Smile",
    displayOrder: 2,
  },
  {
    code: "6-9",
    title: "6–9 yosh",
    description: "Maktabga qadam, do'stlar, mas'uliyat va qiziqishlar",
    icon: "Book",
    displayOrder: 3,
  },
  {
    code: "10-13",
    title: "10–13 yosh",
    description: "O'tish davri, mustaqillik va chuqur muloqot",
    icon: "Compass",
    displayOrder: 4,
  },
  {
    code: "14+",
    title: "14+ yosh",
    description: "O'smirlik, kelajak maqsadlari va do'stona murabbiylik",
    icon: "Award",
    displayOrder: 5,
  },
];

export const seedAchievements = [
  {
    code: "ilk-qadam",
    title: "Ilk qadam",
    description: "Birinchi darsni muvaffaqiyatli tamomladingiz!",
    icon: "Zap",
    xpRequired: 10,
    streakRequired: 1,
  },
  {
    code: "uch-kunlik-streak",
    title: "Sabrli ota-ona",
    description: "Ketma-ket 3 kun dars o'qib, o'rganish odatini shakllantirdingiz",
    icon: "Flame",
    xpRequired: 30,
    streakRequired: 3,
  },
  {
    code: "ongli-ota-ona",
    title: "Ongli ota-ona",
    description: "5 ta to'liq tarbiya darsini yakunlab, bilimingizni boyitdingiz",
    icon: "Award",
    xpRequired: 50,
    streakRequired: 1,
  },
  {
    code: "amaliyotchi",
    title: "Dono murabbiy",
    description: "Barcha amaliy mashqlarni hayotga tatbiq qildingiz",
    icon: "Star",
    xpRequired: 80,
    streakRequired: 5,
  },
  {
    code: "haftalik-chempion",
    title: "Haftalik qahramon",
    description: "7 kunlik uzluksiz tarbiya o'rganish maromiga erishdingiz",
    icon: "Crown",
    xpRequired: 100,
    streakRequired: 7,
  },
];

export const seedCourses = [
  {
    title: "3–5 yosh: Injiqlikdan mehrli hamkorlik sari",
    slug: "3-5-yosh-injiqlikdan-hamkorlik-sari",
    description: "Kichik yoshdagi bolalarning asab tizimi, tantrumlar va chegaralarni jazolarsiz o'rnatish yo'riqnomasi.",
    ageGroup: "3-5",
    categorySlug: "bola-xulqi",
    isPremium: false,
    estimatedMinutes: 30,
    totalLessons: 4,
    icon: "Smile",
    color: "#059669",
  },
  {
    title: "Raqamli asrda farzand tarbiyasi",
    slug: "raqamli-asrda-farzand-tarbiyasi",
    description: "Telefon va gadjetlarga tobe'likning oldini olish, ekran vaqtini xotirjam nazorat qilish.",
    ageGroup: "6-9",
    categorySlug: "telefon-va-texnologiya",
    isPremium: true,
    estimatedMinutes: 45,
    totalLessons: 4,
    icon: "Smartphone",
    color: "#8B5CF6",
  },
  {
    title: "Islomiy qadriyatlar va bola ruhiyati",
    slug: "islomiy-qadriyatlar-va-bola-ruhiyati",
    description: "Payg'ambarimiz (s.a.v.) sunnatlari asosida bolada sabr, ibodatga qiziqish va go'zal axloqni shakllantirish.",
    ageGroup: "3-5",
    categorySlug: "islomiy-tarbiya",
    isPremium: true,
    estimatedMinutes: 50,
    totalLessons: 5,
    icon: "BookOpen",
    color: "#10B981",
  },
];

export const seedLearningPaths = [
  {
    title: "3–5 yoshli farzandingiz uchun boshlang‘ich yo‘l",
    slug: "3-5-yosh-boshlangich",
    description: "Injiqlik, gapga kirmaslik va hissiyotlarni boshqarish bo'yicha kundalik 5 daqiqalik darslar.",
    ageGroup: "3-5",
    targetAudience: "3 yoshdan 5 yoshgacha bo'lgan bolalarning ota-onalari",
    lessonSlugs: [
      "bolani-tushunishdan-boshlang",
      "chegaralarni-togri-qoyish",
      "jazodan-oldin-tushunish",
      "hissiyotlarni-nomlash",
      "ota-onaning-ichki-sabri",
    ],
    badgeIcon: "Compass",
  },
  {
    title: "6–9 yosh: Mustaqillik va maktab davri",
    slug: "6-9-yosh-mustaqillik",
    description: "O'qishga motivatsiya, telefon chegarasi va mas'uliyatni shakllantirish.",
    ageGroup: "6-9",
    targetAudience: "Boshlang'ich maktab o'quvchilari ota-onalari",
    lessonSlugs: [
      "telefon-va-ekran-chegarasi",
      "bolani-namozga-muhabbat-bilan-orgatish",
      "quloq-solish-sanati",
      "aka-uka-urushlari",
    ],
    badgeIcon: "BookOpen",
  },
  {
    title: "Har bir ota-ona uchun: Sabr va mehrli intizom",
    slug: "har-bir-ota-ona-sabr-va-intizom",
    description: "Baqirmasdan, jazolarsiz va bolaga ruhiy jarohat yetkazmasdan tartib o'rnatish.",
    ageGroup: "3-5",
    targetAudience: "Tinch va baxtli oila muhitini xohlovchi ota-onalar",
    lessonSlugs: [
      "jazodan-oldin-tushunish",
      "ota-onaning-ichki-sabri",
      "chegaralarni-togri-qoyish",
      "osmirlar-bilan-til-topishish",
    ],
    badgeIcon: "Shield",
  },
];

export const seedLessons = [
  {
    courseSlug: "3-5-yosh-injiqlikdan-hamkorlik-sari",
    title: "Farzandingiz nega yig‘layapti? Bolani tushunishdan boshlang",
    slug: "bolani-tushunishdan-boshlang",
    summary: "Yig'i bu doim ham erkalik yoki qaysarlik emas. Bolaning hissiy chaqirig'ini to'g'ri o'qish.",
    order: 1,
    estimatedMinutes: 4,
    ageGroup: "3-5",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "Keling, bitta vaziyatni ko'raylik",
        subtitle: "Kunlik hayotdan haqiqiy holat",
        content: "Ko'chadan uyga qaytyapsiz. 3 yoshli farzandingiz poyabzalini yechishni xohlamay, yerga yotib olib qattiq yig'lay boshladi.",
        example: "Birinchi o'y: «Yana injiqlik qilyapti, odamlarning oldida uyaltiryapti!»",
        highlight: "Lekin bolaning ichida aynan nima sodir bo'lyapti?",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Yig‘i — bu xarakter emas, bu yordam so‘rash",
        subtitle: "Asosiy tushuncha",
        content: "Kichik yoshdagi bolaning miyasi hali o'zining charchog'i, ochligi yoki hissiy zo'riqishini so'z bilan ifodalay olmaydi. Yig'i — ularning yagona himoya va muloqot vositasidir.",
        example: "«Menga qiyin bo'lyapti, menga tinchlanishim uchun sening quchog'ing kerak!»",
        highlight: "Bola siz bilan emas, o'z his-tuyg'ulari bilan kurashmoqda.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Psixologik nuqtayi nazar",
        subtitle: "Rivojlanish fani",
        content: "3–5 yoshda bolaning mantiqiy fikrlash qismi (prefrontal korteks) hali to'liq shakllanmagan. Hissiyotlar markazi (amigdala) esa o'ta faol ishlaydi. Bola baqirayotganda mantiqiy gaplarni umuman eshitmaydi.",
        example: "Bu vaqtda bolaga «Bas qil, nima yetishmayapti senga?» deb baqirish faqat uning qo'rquvini oshiradi.",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Islomiy hikmat va Sunnat",
        subtitle: "Nabaviy tarbiya",
        content: "Rasululloh sollallohu alayhi vasallam bolalarga doimo chuqur mehr va sabr bilan muomala qilganlar. Bir a'robiy «Mening o'nta bolam bor, birortasini ham o'pmaganman» deganida, u zot: «Rahm qilmaganga rahm qilinmas» deb marhamat qilganlar (Buxoriy, 5997).",
        quoteSource: "Imom Buxoriy, Sahih al-Buxoriy (5997-hadis)",
        highlight: "Bolaning ko'z yoshiga g'azab bilan emas, Payg'amborona rahmat va mehr bilan javob bering.",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "Bugun amalda sinab ko'ring",
        subtitle: "3 qadamli amaliy mashq",
        content: "Farzandingiz keyingi safar yig'laganda yoki xarxasha qilganda ushbu 3 qadamni qo'llang:",
        example: "1. Uning ko'z balandligiga cho'qqaying (teng turing).\n2. Ismini aytib: «Senga qiyin bo'lyaptimi? Men yoningdaman» deng.\n3. Qarshilik qilmasa, mehr bilan quchoqlang.",
        highlight: "Darhol gapirtirishga urinmang, avval xotirjamlikni his qildirsin.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Kichik sinov",
        subtitle: "Bilimingizni mustahkamlang",
        content: "3 yoshli bolangiz qattiq yig'lab, o'zini yerga tashlaganda eng to'g'ri birinchi qadam qaysi?",
        quizQuestion: "Farzand xarxasha qilganda ota-onaning birinchi harakati qanday bo'lishi kerak?",
        quizOptions: [
          "Baqirib, darhol jazolash bilan qo'rqitish",
          "O'zimizni xotirjam tutib, bolaning ko'ziga qarab unga xavfsizlik berish",
          "Unga darhol telefon berib ovozini o'chirish",
          "«Uyaltiryapsan meni» deb unga e'tibor bermay ketib qolish",
        ],
        correctOptionIndex: 1,
        quizExplanation: "Barakalla! Bola bo'ron ichida qolganda, ota-ona mayoq kabi xotirjam turishi kerak. Xavfsizlik hissi bolani tinchlantiradi.",
      },
    ],
  },
  {
    courseSlug: "3-5-yosh-injiqlikdan-hamkorlik-sari",
    title: "Yo‘q deyish san'ati: Chegaralarni to‘g‘ri qo‘yish",
    slug: "chegaralarni-togri-qoyish",
    summary: "Baqirmasdan, qat'iyat va mehr bilan mustahkam oilaviy chegaralarni o'rnatish.",
    order: 2,
    estimatedMinutes: 5,
    ageGroup: "3-5",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "Do'kondagi shirinlik jangi",
        subtitle: "Ko'p uchraydigan holat",
        content: "Do'konda bola yana bitta shokoladni olib berishni talab qilmoqda. «Yo'q» desangiz yig'laydi, olib bersangiz odat tusiga kiradi.",
        example: "Qanday qilib bolaning ko'nglini ranjitmay qat'iy «yo'q» deyish mumkin?",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Chegara — mehrning bir ko'rinishidir",
        subtitle: "Asosiy qoida",
        content: "Chegarasiz ulg'aygan bola o'zini xavfsiz his qilmaydi. Chegaralar xuddi daryo qirg'oqlariga o'xshaydi — ular bolani oqib ketishdan asraydi.",
        highlight: "«Hamma narsaga ruxsat berish — mehr emas, beparvolikdir.»",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Mehr bilan qat'iyat formulasi",
        subtitle: "Metodika",
        content: "1. Bolaning xohishini e'tirof eting («Bilsam, bu shokolad juda mazali ko'rinyapti»).\n2. Chegarani bildiring («Lekin bugun shirinlik ololmaymiz»).\n3. Muqobil variant taklif qiling («Uyga borganda olma yeymizmi yoki nok?»).",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Islomda me'yor va qat'iyat",
        subtitle: "Hikmat",
        content: "Islom dinimiz barcha narsada o'rtacha va me'yorda bo'lishni o'rgatadi. Luqmoni Hakim o'z o'g'liga bergan nasihatlarida haddan oshmaslik, odob va chegaralarga rioya qilishni go'zal nasihat bilan uqtirganlar.",
        quoteSource: "Qur'oni Karim, Luqmon surasi (17-19 oyatlar mazmuni)",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "Amaliy qadam",
        subtitle: "Bugungi mashg'ulot",
        content: "Bugun farzandingiz biror narsa so'rab qaysarlik qilganda, baqirmang va fikringizdan ham qaytmang. Tinch ohangda: «Seni tushunaman, lekin bu safar mumkin emas» deb quchoqlang.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Test",
        subtitle: "O'zlashtirishni tekshirish",
        content: "Chegarani to'g'ri o'rnatishda qaysi formula eng samarali hisoblanadi?",
        quizQuestion: "To'g'ri chegarani o'rnatish ketma-ketligi qaysi?",
        quizOptions: [
          "Baqirib qo'rqitish -> Xonaga qamash -> Kechirim so'rash",
          "Bolaning hissini tushunish -> Qat'iy qoidani aytish -> Muqobil yo'l taklif qilish",
          "Yig'lagani uchun istagan narsasini berib qutulish",
          "Umuman javob bermasdan eshitmagandek bo'lish",
        ],
        correctOptionIndex: 1,
        quizExplanation: "Ajoyib javob! Bolaning hissini tan olib, qoidada qat'iy turish bolaga ham intizomni, ham sevgi tuyg'usini o'rgatadi.",
      },
    ],
  },
  {
    courseSlug: "3-5-yosh-injiqlikdan-hamkorlik-sari",
    title: "Jazodan oldin tushunish: Urmasdan tarbiyalash sirlari",
    slug: "jazodan-oldin-tushunish",
    summary: "Jismoniy jazo va qo'rqitishning oqibatlari va muqobil sog'lom uslublar.",
    order: 3,
    estimatedMinutes: 6,
    ageGroup: "3-5",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "Qo'l ko'tarish vasvasasi",
        subtitle: "Ochiq suhbat",
        content: "Bola suvni to'kib yubordi yoki ukasini urdi. Ota-onaning birinchi reaksiyasi: shappillatish yoki tarsaki tushirish bo'ladi. Nega bu yechim emas?",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Urib tarbiyalab bo'lmaydi, urib faqat qo'rqitiladi",
        subtitle: "Ilmiy haqiqat",
        content: "Jismoniy jazo olgan bola xatosini tushunmaydi. U faqat: «Katta va kuchlilar hamma narsani urib hal qilishi mumkin» degan noto'g'ri xulosaga keladi.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Jazo o'rniga tabiiy oqibat",
        subtitle: "Metodika",
        content: "Jazo — bu kamsitish. Oqibat esa — mas'uliyatni o'rganish. Agar bola suv to'kkan bo'lsa, urish o'rniga qo'liga latta berib birga artish kerak.",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Rasulullohning tarbiya uslublari",
        subtitle: "Hadisi sharif",
        content: "Oysha onamiz roziyallohu anho aytadilar: «Rasululloh sollallohu alayhi vasallam hech qachon biror xizmatkorni ham, ayolni ham, yosh bolani ham qo'llari bilan urmaganlar» (Muslim, 2328).",
        quoteSource: "Sahih Muslim (2328-hadis)",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "3 soniyalik qoida",
        subtitle: "Amaliyot",
        content: "Asabiylashganingizda darhol qo'l ko'tarmang. Chuqur nafas oling, ichingizda «A'uzu billahi minash shaytonir rojiym» deb 3 soniya kuting.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Sinov savoli",
        subtitle: "Xulosa",
        quizQuestion: "Bola sharbatni gilamga to'kib yuborsa, eng foydali oqibat nima?",
        quizOptions: [
          "Burchakka turg'azib qo'yish",
          "Sharbatni artish uchun latta berib, birgalikda tozalash",
          "Bir hafta ko'chaga chiqishni taqiqlash",
          "Qo'liga urib qo'rqitish",
        ],
        correctOptionIndex: 1,
        quizExplanation: "To'g'ri! Bolaga xatoning tabiiy oqibatini bartaraf etishni o'rgatish orqali haqiqiy mas'uliyat shakllanadi.",
      },
    ],
  },
  {
    courseSlug: "3-5-yosh-injiqlikdan-hamkorlik-sari",
    title: "Katta hissiyotlar: Bolaga g‘azabini yengishni o‘rgating",
    slug: "hissiyotlarni-nomlash",
    summary: "Hissiy intellekt: his-tuyg'ularni so'z bilan ifodalash ko'nikmasi.",
    order: 4,
    estimatedMinutes: 5,
    ageGroup: "3-5",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "O'yinchoq talashganda",
        subtitle: "Holat",
        content: "Farzandingiz do'sti yoki ukasining o'yinchog'ini tortib olib, tepinib g'azablanmoqda.",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Nomlangan tuyg'u o'z kuchini yo'qotadi",
        subtitle: "Name it to tame it",
        content: "Bolaga: «Sen hozir juda jahling chiqdi, to'g'rimi?» deb hissini so'z bilan aytib bersangiz, uning miyasi tezroq xotirjam tortadi.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Barcha hislar joiz, harakatlar esa cheklangan",
        subtitle: "Oltin qoida",
        content: "G'azablanish tabiiy, lekin urish yoki sindirish mumkin emas. Bolaga g'azabini chiqara oladigan xavfsiz yo'llarni ko'rsating (chuqur nafas olish, yostiqni siqish).",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "G'azab paytida nima qilish kerak?",
        subtitle: "Nabaviy tavsiya",
        content: "Payg'ambarimiz (s.a.v.) aytganlar: «Qaysi biringiz g'azablansa, tursa o'tirsin, g'azabi ketmasa yotsin» (Abu Dovud, 4782). Yana g'azab paytida tahorat olishni yoki sukut saqlashni buyurganlar.",
        quoteSource: "Sunani Abu Dovud (4782-hadis)",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "Hissiyotlar oynasi",
        subtitle: "O'yin mashg'uloti",
        content: "Farzandingiz bilan xursand, xafa, hayron va jahl chiqqan yuz ifodalarini birga yasab ko'ring.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Test",
        subtitle: "His-tuyg'ular qoidasi",
        quizQuestion: "Bolada g'azab paydo bo'lganda qaysi tamoyil to'g'ri?",
        quizOptions: [
          "Barcha hislar joiz, lekin zarar yetkazuvchi harakatlar man etiladi",
          "Bolaga umuman g'azablanishga ruxsat bermaslik kerak",
          "Bola nima qilsa ham mayli, hissini to'xtatmaslik lozim",
          "G'azablangan bolani yolg'iz qamab qo'yish kerak",
        ],
        correctOptionIndex: 0,
        quizExplanation: "Ajoyib! His-tuyg'ular tabiiy, lekin agressiv xatti-harakatlar chegaralanishi zarur.",
      },
    ],
  },
  {
    courseSlug: "raqamli-asrda-farzand-tarbiyasi",
    title: "Telefon va ekran vaqti: Qanday qilib sog'lom chegara qo'yish mumkin?",
    slug: "telefon-va-ekran-chegarasi",
    summary: "Bolani gadjetlardan ajratish va real hayotga qiziqtirish usullari.",
    order: 1,
    estimatedMinutes: 5,
    ageGroup: "6-9",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "Telefonni olib qo'ygandagi to'polon",
        subtitle: "Kundalik muammo",
        content: "Farzandingiz qo'lidan telefonni olib qo'yganingizda birdan tajovuzkor bo'lib, baqira boshlaydimi?",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Dofamin tuzog'i",
        subtitle: "Ekran mexanikasi",
        content: "Qisqa videolar (Reels, Shorts, TikTok) bolaning miyasiga doimiy tez dofamin beradi. Oddiy hayot esa unga nisbatan zerikarli tuyula boshlaydi.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Oldindan ogohlantirish qoidasi",
        subtitle: "Amaliy usul",
        content: "Telefonni kutilmaganda tortib olmang. «Yana 5 daqiqadan so'ng multfilm tugaydi va birga ovqatlanamiz» deb tayyorlang.",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Vaqt va omonat mas'uliyati",
        subtitle: "Islomiy qarash",
        content: "Alloh taolo vaqtni inson hayotidagi eng buyuk ne'matlardan biri qildi. Farzand — ota-onaga berilgan ilohiy omonat bo'lib, uning aqli va ruhiyati qanday ma'lumot bilan to'ldirilishi haqida so'ralamiz.",
        quoteSource: "Hadis: «Har biringiz cho'ponsiz va o'z qo'l ostidagilariga mas'ulsiz» (Buxoriy)",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "Uyda ekransiz hudud",
        subtitle: "Oila qoidasi",
        content: "Bugundan ovqatlanish stoli va yotoqxonani butun oila uchun (ota-onalar ham!) ekransiz hudud deb e'lon qiling.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Test",
        subtitle: "Ekran vaqti",
        quizQuestion: "Telefon vaqtini tugatishda qaysi usul eng kam qarshilikka sabab bo'ladi?",
        quizOptions: [
          "5 daqiqa va 1 daqiqa oldin ogohlantirish va keyingi qiziq mashg'ulotni taklif qilish",
          "Kutilmaganda telefonni tortib olib yashirib qo'yish",
          "Interneti o'chirib, «buzildi» deb aldash",
          "Baqirib ayblash",
        ],
        correctOptionIndex: 0,
        quizExplanation: "To'g'ri! Oldindan ogohlantirish bolaning miyasiga bir faoliyatdan ikkinchisiga o'tish imkonini beradi.",
      },
    ],
  },
  {
    courseSlug: "islomiy-qadriyatlar-va-bola-ruhiyati",
    title: "Bolani namozga muhabbat bilan o'rgatish",
    slug: "bolani-namozga-muhabbat-bilan-orgatish",
    summary: "Majburlashsiz, shirin xotiralar va go'zal namuna orqali ibodatga rag'bat.",
    order: 1,
    estimatedMinutes: 5,
    ageGroup: "6-9",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "Namoz vaqti kelganda",
        subtitle: "Vaziyat",
        content: "Bolani namozga chaqirganingizda qochsa yoki qaysarlik qilsa, nima qilish kerak?",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Majburlash emas, muhabbat uyg'otish",
        subtitle: "Asos",
        content: "Farzand namozni Alloh bilan uchrashuv, quvonch va xotirjamlik daqiqasi deb ko'rishi kerak, og'ir jazo deb emas.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Shaxsiy namuna kuchi",
        subtitle: "Tarbiya siri",
        content: "Bola siz aytgan so'zlarni emas, ko'rgan amallaringizni takrorlaydi. Ota-onaning namozdan keyingi xushfe'lligi eng katta darsdir.",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Rasulullohning namozdagi mehrlari",
        subtitle: "Ibrat",
        content: "Rasululloh (s.a.v.) sajdada turganlarida nabiralari Hasan va Husayn orqalariga chiqib olganida, ular tushguncha sajdalarni cho'zganlar.",
        quoteSource: "Sunani Nasoiy (1141-hadis)",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "Maxsus joynamoz",
        subtitle: "Rag'bat",
        content: "Farzandingizga o'ziga yoqqan kichik joynamoz va chiroyli tasbeh sovg'a qiling.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Test",
        subtitle: "Namoz tarbiyasi",
        quizQuestion: "Bolada namozga doimiy muhabbat uyg'otishning eng kuchli omili nima?",
        quizOptions: [
          "Ota-onaning go'zal shaxsiy namunasi va ibodatdagi mehrli muhit",
          "O'qimasa jazolash bilan qo'rqitish",
          "Faqat pul yoki sovg'a va'da qilish",
          "Boshqa bolalar bilan solishtirish",
        ],
        correctOptionIndex: 0,
        quizExplanation: "Barakalla! Go'zal shaxsiy namuna va iliq oilaviy muhit eng mustahkam poydevordir.",
      },
    ],
  },
  {
    courseSlug: "3-5-yosh-injiqlikdan-hamkorlik-sari",
    title: "Bola gapga quloq solmasa: 3 qadamli muloqot",
    slug: "quloq-solish-sanati",
    summary: "Oshxonadan baqirish o'rniga bolani o'ziga qaratish va hamkorlikka erishish.",
    order: 5,
    estimatedMinutes: 4,
    ageGroup: "3-5",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "O'n marta aytsam ham eshitmaydi!",
        subtitle: "Muammo",
        content: "Boshqa xonadan turib: «O'yinchoqlaringni yig'ishtir!» deb necha bor baqirdingiz?",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Uzoqdan berilgan buyruq fon shovqini hisoblanadi",
        subtitle: "Miyaning idroki",
        content: "O'yin bilan band bo'lgan bola uzoqdan kelgan baqiriqni ongsiz ravishda shunchaki televizor shovqini kabi qabul qiladi.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Kontakt qoidasi",
        subtitle: "3 qadam",
        content: "1. Bolaning oldiga boring.\n2. Yelkalariga qo'lingizni qo'yib ko'ziga qarang.\n3. Qisqa va aniq ayting: «Hozir o'yinchoqlarni qutiga solish vaqti keldi».",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Muloyimlik fazilati",
        subtitle: "Hikmat",
        content: "«Alloh taolo muloyimdir va har bir ishda muloyimlikni yaxshi ko'radi» (Buxoriy, 6024).",
        quoteSource: "Sahih al-Buxoriy",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "Sinab ko'ring",
        subtitle: "Mashq",
        content: "Bugun biron bir buyruqni boshqa xonadan baqirib aytmang. Faqat yaqiniga borib, ko'z kontaktida gapiring.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Test",
        subtitle: "Muloqot",
        quizQuestion: "Bolaning gapga quloq solish ehtimolini oshiruvchi asosiy omil qaysi?",
        quizOptions: [
          "Oldiga borib ko'z kontakti o'rnatish va muloyim qat'iyat bilan aytish",
          "Oshxonadan yanada baland ovozda baqirish",
          "Darhol jazolash",
          "E'tiborsiz qoldirish",
        ],
        correctOptionIndex: 0,
        quizExplanation: "Aynan shunday! Ko'z kontakti va yaqinlik so'zlarning yetib borishini kafolatlaydi.",
      },
    ],
  },
  {
    courseSlug: "3-5-yosh-injiqlikdan-hamkorlik-sari",
    title: "Aka-uka va opa-singillar rashki: Adolat va mehr",
    slug: "aka-uka-urushlari",
    summary: "Farzandlar o'rtasidagi raqobatni tinchlik va samimiy do'stlikka aylantirish.",
    order: 6,
    estimatedMinutes: 5,
    ageGroup: "3-5",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "Mening o'yinchog'im!",
        subtitle: "Uy jangi",
        content: "Har kuni aka-ukalarning o'yinchoq talashishi va bir-birini ayblashi sizni charchatdimi?",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Hakam bo'lmang, hislarni tan oling",
        subtitle: "Psixologik yechim",
        content: "Doim kim haq, kim nohaqligini qidirmang. Bu raqobatni yanada kuchaytiradi.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Tenglik emas, ehtiyojga qarab adolat",
        subtitle: "Farq",
        content: "Bolalarga bir xil emas, ularning har biriga alohida shaxsiy e'tibor bering.",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Farzandlar orasida adolat",
        subtitle: "Nabaviy amr",
        content: "Payg'ambarimiz (s.a.v.) aytganlar: «Allohdan qo'rqinglar va farzandlaringiz o'rtasida adolat qilinglar!» (Buxoriy va Muslim).",
        quoteSource: "Sahih al-Buxoriy va Sahih Muslim",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "Har bir bola bilan alohida 10 daqiqa",
        subtitle: "Maxsus vaqt",
        content: "Bugun har bir farzandingiz bilan yolg'iz 10 daqiqa hech narsaga chalg'imasdan suhbatlashing.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Test",
        subtitle: "Raqobat",
        quizQuestion: "Aka-uka urushayotganda ota-ona qanday pozitsiyada bo'lishi afzal?",
        quizOptions: [
          "Doim kattasiga «sen kattasan, yon bos» deb bosim qilish",
          "Hakamlik qilmasdan, har ikkisining hissini tinglab birga yechim topishga undash",
          "Ikkisini ham burchakka turg'azish",
          "Urushayotgan narsani derazadan tashlab yuborish",
        ],
        correctOptionIndex: 1,
        quizExplanation: "To'g'ri! Ikkala bolaning ham hissini tinglash ularni hamkorlikka o'rgatadi.",
      },
    ],
  },
  {
    courseSlug: "raqamli-asrda-farzand-tarbiyasi",
    title: "O‘smir farzandingiz sizdan uzoqlashyaptimi?",
    slug: "osmirlar-bilan-til-topishish",
    summary: "10-14 yoshdagi bolalar bilan ishonchli do'stona ko'prik o'rnatish yo'llari.",
    order: 2,
    estimatedMinutes: 6,
    ageGroup: "10-13",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "Eshik yopildi",
        subtitle: "O'smirlik",
        content: "O'g'lingiz yoki qizingiz xonasiga kirib eshikni yopib oladi va faqat «hamma narsa yaxshi» deb javob beradimi?",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Tergovchi emas, sirdosh bo'ling",
        subtitle: "O'tish davri",
        content: "O'smir tanqid va so'roq-savoldan himoyalanadi. U eshitilishga muhtoj.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "Maslahat berishdan oldin tinglang",
        subtitle: "Metodika",
        content: "U gapirayotganda darhol nasihat qilishni to'xtating. Shunchaki bosh irg'ab eshiting.",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Alining hikmatli so'zlari",
        subtitle: "Ibrat",
        content: "Hazrati Ali (r.a.) aytganlar: «Farzandlaringiz bilan birinchi 7 yilda o'ynang, keyingi 7 yilda ularga odob o'rgating, keyingi 7 yilda esa ular bilan do'st bo'ling».",
        quoteSource: "Islomiy tarbiya asarlari",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "Savolsiz sayr",
        subtitle: "Mashq",
        content: "Bugun o'smir farzandingiz bilan mashinada yoki piyoda yuring, unga baholari haqida savol bermang, qiziqishlarini tinglang.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Test",
        subtitle: "O'smirlik",
        quizQuestion: "Hazrati Ali (r.a.) ta'limotiga ko'ra, 14 yoshdan oshgan bola bilan qanday muomala qilinadi?",
        quizOptions: [
          "Teng do'st kabi maslahatlashib, hurmat bilan",
          "Kichik bola kabi har bir qadamini qattiq nazorat qilib",
          "Beparvo bo'lib o'z holiga tashlab",
          "Faqat buyruqlar berib",
        ],
        correctOptionIndex: 0,
        quizExplanation: "Ajoyib! O'smirlik davrida do'stona hurmat eng ishonchli bog'lovchi omildir.",
      },
    ],
  },
  {
    courseSlug: "3-5-yosh-injiqlikdan-hamkorlik-sari",
    title: "Ota-onaning ichki sabri: Qanday qilib baqirmaslik mumkin?",
    slug: "ota-onaning-ichki-sabri",
    summary: "Asabiylashish mexanizmi, charchoq va o'z hissiyotlarini tinchlantirish texnikasi.",
    order: 7,
    estimatedMinutes: 5,
    ageGroup: "3-5",
    xpReward: 10,
    isFree: true,
    screens: [
      {
        screenIndex: 1,
        type: "scenario",
        title: "Sabr kosasi to'lganda",
        subtitle: "Haqiqat",
        content: "Ishdan charchab kelgansiz, uyda tartibsizlik, bolalar baqir-chaqir qilyapti. O'zingizni to'xtata olmay baqirib yubordingiz.",
      },
      {
        screenIndex: 2,
        type: "concept",
        title: "Siz yomon ota-ona emassiz, siz shunchaki charchagansiz",
        subtitle: "Resurs",
        content: "Bo'sh stakandan suv quyib bo'lmaydi. Ota-onaning o'zi dam olmasa, bolaga sabr qila olmaydi.",
      },
      {
        screenIndex: 3,
        type: "explanation",
        title: "To'xta — Nafas ol — Boshqa xonaga o't",
        subtitle: "Krizis uslubi",
        content: "Baqirishdan avval 10 soniya pauza oling. Boshqa xonaga o'tib bir qultum sovuq suv iching.",
      },
      {
        screenIndex: 4,
        type: "islamic_perspective",
        title: "Haqiqiy pahlavon kim?",
        subtitle: "Hadisi sharif",
        content: "Rasululloh (s.a.v.) aytganlar: «Pahlavon kurashda yiqitgan emas, balki g'azab chiqqan paytda o'zini qo'lga olgan kishidir» (Buxoriy va Muslim).",
        quoteSource: "Sahih al-Buxoriy va Muslim",
      },
      {
        screenIndex: 5,
        type: "practice",
        title: "O'zingizga 15 daqiqa ajrating",
        subtitle: "Tiklanish",
        content: "Bugun telefonni chetga surib, xotirjam choy iching yoki kitob o'qing. O'zingizni asrang.",
      },
      {
        screenIndex: 6,
        type: "quiz",
        title: "Test",
        subtitle: "Sabr",
        quizQuestion: "Hadisga ko'ra, haqiqiy pahlavon qanday inson hisoblanadi?",
        quizOptions: [
          "G'azab chiqqanda o'zini jilovlay olgan inson",
          "Ovozi eng baland chiqqan odam",
          "O'z aytganini majburan o'tkazgan odam",
          "Hech kimga gap bermaydigan odam",
        ],
        correctOptionIndex: 0,
        quizExplanation: "Barakalla! G'azab paytida o'zini tiya bilish — eng ulug' kuch va fazilatdir.",
      },
    ],
  },
];

export const seedArticles = [
  {
    title: "Bolani urmasdan va baqirmasdan tarbiyalash mumkinmi?",
    slug: "bolani-urmasdan-tarbiyalash",
    excerpt: "Jazo va tarsaki nega uzoq muddatda bolaning ruhiyatini sindiradi? Psixologik sabablar va Islomiy yechimlar.",
    categorySlug: "intizom",
    ageGroup: "3-5",
    readingTimeMinutes: 5,
    tags: ["intizom", "tarbiya", "jazo", "mehr", "psixologiya"],
    seoTitle: "Bolani urmasdan tarbiyalash: Samarali va mehrli uslublar | Farzandly",
    seoDescription: "Bolani urmasdan, baqirmasdan qanday tarbiyalash mumkin? Islomiy qadriyatlar va zamonaviy psixologiya tavsiyalari.",
    content: `Har bir ota-onaning hayotida sabr kosasi to'ladigan, bola gapga kirmaydigan va birdan asablar taranglashadigan daqiqalar bo'ladi. Ko'pchilik ota-onalar ojiz qolganlarida qo'l ko'tarish yoki baqirish orqali vaziyatni hal qilishga urinadilar. Ammo bu haqiqatan ham yordam beradimi?

### 1. Jismoniy jazoning bolaga ko'rsatadigan ta'siri

Bolalar rivojlanishi bo'yicha olib borilgan yuzlab zamonaviy ilmiy tadqiqotlar shuni isbotlaydiki, urib yoki doimiy baqirib tarbiyalangan bolalarda quyidagi oqibatlar kuzatiladi:
- **Ichki agressiya:** Ular o'z muammolarini boshqalarga nisbatan zo'ravonlik bilan hal qilishga o'rganadilar.
- **Yolg'onchilik:** Bola xatosini tushungani uchun emas, jazodan qo'rqqani uchun haqiqatni yashirishni boshlaydi.
- **O'ziga bo'lgan ishonchning sinishi:** «Men yomonman, meni hech kim yaxshi ko'rmaydi» degan xulosa shakllanadi.

### 2. Islomiy nuqtayi nazar: Nabaviy mehr

Rasululloh sollallohu alayhi vasallam hech qachon biror bolani yoki xizmatkorni qo'llari bilan urmaganlar. Oysha onamiz (r.a.) bu haqda guvohlik berganlar. Payg'ambarimiz (s.a.v.) aytganlar: «Alloh taolo har bir ishda muloyimlikni yaxshi ko'radi».

### 3. Jazo o'rniga amaliy tavsiyalar

1. **Tabiiy oqibatni ko'rsating:** Agar bola ataylab o'yinchog'ini sindirsa, unga yangisini olib bermang. U harakatining oqibati borligini his qilsin.
2. **His-tuyg'ularini nomlang:** «Sening juda jahling chiqdi, tushunaman. Ammo urish mumkin emas».
3. **Pauza oling:** G'azablanganingizda darhol gapirmang. 3 marta chuqur nafas oling.`,
  },
  {
    title: "Bola gapga quloq solmasa nima qilish kerak?",
    slug: "bola-gapga-quloq-solmasa",
    excerpt: "Nega bola o'ninchi chaqiriqda ham javob bermaydi? Bolaning eshitish mexanizmi va samarali muloqot sirlari.",
    categorySlug: "bola-xulqi",
    ageGroup: "3-5",
    readingTimeMinutes: 4,
    tags: ["muloqot", "quloq solish", "ota-ona", "sabrlilik"],
    seoTitle: "Bola gapga quloq solmasa nima qilish kerak? | Farzandly",
    seoDescription: "Bola nega gapga quloq solmaydi? Ota-onalar uchun amaliy 3 qadamli muloqot texnikasi va bolalar psixologiyasi.",
    content: `«Eshityapsanmi meni? Necha marta aytishim kerak!» — bu iborani har kuni millionlab ota-onalar aytishadi. Lekin bolalar haqiqatan ham qasddan eshitmaydimi?

### Nega bola eshitmaydi?

Bolaning miyasi kattalarnikiga o'xshamaydi. U bir vaqtning o'zida ikkita diqqat markazini ushlab tura olmaydi. Agar u mashina o'ynayotgan bo'lsa, butun borlig'i bilan o'sha o'yin ichida yashaydi. Boshqa xonadan aytilgan gaplar uning uchun xuddi radio kabi fon shovqini bo'lib tuyuladi.

### 3 qadamli aloqa o'rnatish qoidasi:

1. **Yaqiniga boring:** Oshxonadan turib baqirmang. Bolaning yoniga boring.
2. **Ko'z kontaktiga kiring:** Cho'qqayib uning ko'zlariga qarang va muloyimlik bilan yelkasiga qo'lingizni qo'ying.
3. **Qisqa va ijobiy ayting:** «Hozir o'yinchoqlarni yig'amiz va mazali kechki ovqatni yeymiz».`,
  },
  {
    title: "Bola telefonni tashlamasa: Ekran qaramligidan xalos bo'lish",
    slug: "bola-telefonni-tashlamasa",
    excerpt: "Zamonaviy ota-onalarning eng katta dardi: gadjetlar. Janjalsiz ekran vaqtini cheklash yo'riqnomasi.",
    categorySlug: "telefon-va-texnologiya",
    ageGroup: "6-9",
    readingTimeMinutes: 6,
    tags: ["telefon", "ekran vaqti", "gadjetlar", "texnologiya", "bolalar"],
    seoTitle: "Bola telefonni tashlamasa nima qilish kerak? Ekran qaramligi | Farzandly",
    seoDescription: "Bolalarni telefondan tinch va oson ajratishning 5 ta sinalgan usuli. Raqamli gigiyena va oilaviy qoidalar.",
    content: `Bugungi kunda smartfonlar bolalarning eng yaqin hamrohiga aylanib qoldi. Ammo me'yordan ortiq ekran vaqti bolaning uyqusi, diqqati va asab tizimiga jiddiy zarar yetkazadi.

### Telefon nega shunchalik jozibador?

Ijtimoiy tarmoqlar va o'yinlar miyaga soniyalar ichida dofamin (zavq gormoni) yetkazib beradi. Oddiy kitob o'qish yoki dars qilish esa dofaminni sekin chiqaradi. Shuning uchun bolaga real dunyo zerikarli bo'lib qoladi.

### Qanday qilib cheklov o'rnatish mumkin?

- **Birinchi qoida: Ota-onaning o'zi namuna bo'lishi.** Agar ota har kuni divanda TikTok ko'rsa, bolaga «telefonni qo'y» deyish befoyda.
- **Aniq taymer:** «Multfilm yana 5 daqiqa davom etadi, keyin o'chiramiz».
- **Muqobil qiziq mashg'ulot:** Telefonni olib qo'yib uni bo'sh qoldirmang, birga konstruktor tering yoki sayrga chiqing.`,
  },
  {
    title: "3 yoshli bola tarbiyasidagi nozik sirlar",
    slug: "3-yoshli-bola-tarbiyasi",
    excerpt: "3 yosh inqirozi: «Men o'zim!» davri. Nega bu yoshda qaysarlik kuchayadi va buni qanday to'g'ri boshqarish mumkin?",
    categorySlug: "bola-xulqi",
    ageGroup: "3-5",
    readingTimeMinutes: 5,
    tags: ["3 yosh", "inqiroz", "mustaqillik", "rivojlanish"],
    seoTitle: "3 yoshli bola tarbiyasi: Inqiroz va mustaqillik sirlari | Farzandly",
    seoDescription: "3 yoshli bolaning psixologik xususiyatlari. Qaysarlik, xarxasha va «men o'zim» davrini oson yengib o'tish.",
    content: `3 yosh — bola hayotidagi eng muhim burilish nuqtalaridan biridir. Psixologiyada bu davr «3 yosh inqirozi» deb ataladi. Bola o'zini onasidan alohida mustaqil shaxs sifatida anglay boshlaydi.

### Asosiy belgilar:
1. **Negativizm:** Kattalar aytgan har qanday narsaga qarshi chiqish.
2. **O'jarlik:** Keraksiz bo'lsa ham o'z aytganida turib olish.
3. **«Men o'zim!»:** Hamma narsani o'zi qilmoqchi bo'lish.

### Ota-onaga maslahat:
Bolaga tanlov bering! «Ko'k paypog'ingni kiyasanmi yoki qizilini?» degan savol bolaga nazorat hissini beradi va qaysarlikni kamaytiradi.`,
  },
  {
    title: "Bolalarda tantrum va kuchli injiqlik paytida nima qilish kerak?",
    slug: "bolalarda-tantrum-va-injiqlik",
    excerpt: "Yerga yotib olib dodlayotgan bolani qanday xotirjam qilish mumkin? Tantrumning biologik mexanikasi.",
    categorySlug: "hissiyotlar",
    ageGroup: "3-5",
    readingTimeMinutes: 5,
    tags: ["tantrum", "injiqlik", "yig'i", "hissiyotlar", "xotirjamlik"],
    seoTitle: "Bolalarda tantrum va injiqlik: Qanday to'xtatish mumkin? | Farzandly",
    seoDescription: "Tantrum nima va u paytda ota-ona qanday harakat qilishi kerak? Bolalar hissiyotlarini boshqarish bo'yicha amaliy qo'llanma.",
    content: `Tantrum — bu bolaning hissiy tizimi zo'riqqanda yuzaga keladigan hissiy portlashdir. Bu paytda bolaning mantiqiy aqli o'chadi, faqat hissiy markaz ishlaydi.

### Tantrum paytida nimalar qilish taqiqlanadi?
- Unga baqirish va urish (bu olovga moy sepishdek ta'sir qiladi).
- Mantiqiy tushuntirish berishga urinish (u bu paytda so'zlarni qabul qila olmaydi).
- Uning talabini darhol bajarib berish (bu tantrum orqali maqsadga erishishni o'rgatadi).

### To'g'ri yo'l:
Xavfsiz masofada yoningizda ushlab turing, zararlanishiga yo'l qo'ymang va o'zingiz chuqur nafas oling. Bo'ron o'tib ketgach, uni mehr bilan quchoqlang.`,
  },
  {
    title: "Islomda farzand haqlari: Ota-onaning muqaddas burchi",
    slug: "islomda-farzand-haqlari",
    excerpt: "Islom dini farzand tarbiyasiga qanday qaraydi? Go'zal ism qo'yish, adolat va mehr ko'rsatish burchlari.",
    categorySlug: "islomiy-tarbiya",
    ageGroup: "0-2",
    readingTimeMinutes: 6,
    tags: ["islom", "farzand haqi", "ota-ona burchi", "sunnat", "tarbiya"],
    seoTitle: "Islomda farzand haqlari va ota-onaning burchlari | Farzandly",
    seoDescription: "Islomda farzandning ota-ona ustidagi haqlari: go'zal ism, mehr, ta'lim, adolat va ruhiy tarbiya.",
    content: `Farzand — bu Alloh taolo tomonidan ota-onaga berilgan ulug' omonatdir. Qiyomat kunida ota-ona bu omonatni qanday saqlagani va qanday tarbiya bergani haqida so'raladi.

### Farzandning ota-onadagi asosiy haqlari:
1. **Yaxshi ona/ota tanlash:** Farzand tug'ilishidan oldin unga solih va oqila ota-ona nasib etishi.
2. **Chiroyli ism qo'yish:** Ma'nodor va go'zal ism tanlash.
3. **Halol luqma bilan boqish:** Bola qorniga tushgan har bir luqmaning pokiza bo'lishi.
4. **Adolat va teng mehr ko'rsatish:** Farzandlar orasida birini boshqasidan ustun qo'ymaslik.
5. **Chiroyli ta'lim va odob:** Payg'ambarimiz (s.a.v.) aytganlaridek: «Ota o'z bolasiga go'zal odobdan ko'ra afzalroq narsa bera olmaydi».`,
  },
  {
    title: "Ota-ona o'rtasidagi kelishmovchilik va uning bola ruhiyatiga zarari",
    slug: "ota-ona-ortasidagi-kelishmovchilik-va-bola",
    excerpt: "Farzandlar oldida tortishish nega xavfli? Oila tinchligi — bolaning ichki xotirjamligi kalitidir.",
    categorySlug: "ota-ona-munosabati",
    ageGroup: "6-9",
    readingTimeMinutes: 5,
    tags: ["oila", "er-xotin", "janjal", "ruhiyat", "xavfsizlik"],
    seoTitle: "Ota-ona janjali bolaga qanday ta'sir qiladi? | Farzandly",
    seoDescription: "Ota-onaning o'zaro nizolari bolaning asab tizimi va xarakteriga qanday iz qoldiradi? Oila tinchligini asrash sirlari.",
    content: `Bolaning xotirjamligi va o'ziga bo'lgan ishonchi ota va ona o'rtasidagi mehrli munosabat poydevoriga quriladi. Agar uyda doimiy baqir-chaqir va adovat bo'lsa, bolaning butun dunyosi larzaga keladi.

### Bola o'zini aybdor his qiladi
Kichik yoshdagi bolalar egosentrik bo'lib, ota-onasining har qanday janjalini «men yomon bo'lganim uchun ular urishyapti» deb o'ylashga moyil bo'ladilar. Bu ularda surunkali xavotir (trevoga) uyg'otadi.

### Nima qilish kerak?
Hech qachon bolaning ko'z o'ngida bir-biringizni haqorat qilmang. Agar tortishuv bo'lib o'tgan bo'lsa, bolaning oldida yarashib, uni yaxshi ko'rishingizni va janjal uning aybi emasligini bildiring.`,
  },
  {
    title: "Bolani namozga muhabbat bilan o'rgatish yo'llari",
    slug: "bolani-namozga-muhabbat-bilan-orgatish",
    excerpt: "Majburlamasdan, qalbida iliqlik va shukronalik bilan ibodat qilishga qanday undash mumkin?",
    categorySlug: "islomiy-tarbiya",
    ageGroup: "6-9",
    readingTimeMinutes: 5,
    tags: ["namoz", "ibodat", "sunnat", "islomiy tarbiya", "muhabbat"],
    seoTitle: "Bolani namozga qanday mehr bilan o'rgatish mumkin? | Farzandly",
    seoDescription: "Majburlashsiz bolada ibodatga qiziqish uyg'otishning 4 usuli. Rasululloh (s.a.v.)ning go'zal namunalari.",
    content: `Ibodat — qalb ehtiyojidir. Agar bola namozni faqat ota-onasining kaltagidan yoki baqirig'idan qo'rqqani uchun o'qisa, ulg'aygach undan uzoqlashishi oson bo'ladi. Asosiy maqsad — uning qalbida Allohga muhabbat uyg'otishdir.

### Amaliy qadamlar:
1. **Ibodatdan keyingi quvonch:** Namoz o'qib bo'lgach bolangizni bag'ringizga bosing, peshonasidan o'ping. U namozni quvonch va mehr bilan bog'lasin.
2. **Kichik yoshdan yonida joy berish:** Hasan va Husayn (r.a.) Rasululloh sajdada ekanliklarida orqalariga minishar edi. U zot ularni jerkib tashlamaganlar.
3. **Go'zal shaxsiy namuna:** Shoshilmay, xushu' bilan o'qilgan namoz har qanday da'vatdan kuchliroqdir.`,
  },
  {
    title: "Maktab yoshidagi bolada o'qishga motivatsiyani qanday oshirish mumkin?",
    slug: "maktab-yoshidagi-bolada-motivatsiya",
    excerpt: "Uy vazifasini janjallarsiz bajartirish sirlari. Baholar uchun emas, bilim uchun qiziqish uyg'otish.",
    categorySlug: "intizom",
    ageGroup: "6-9",
    readingTimeMinutes: 5,
    tags: ["maktab", "motivatsiya", "uy vazifasi", "ta'lim", "rivojlanish"],
    seoTitle: "Bolada o'qishga motivatsiya uyg'otish sirlari | Farzandly",
    seoDescription: "Bolani dars qilishga qanday qiziqtirish mumkin? Baholar bosimidan xalos bo'lish va mustaqil bilim olish ko'nikmasi.",
    content: `Har kuni kechqurun uy vazifasini bajarish uyda katta janjalga aylanayotgan bo'lsa, siz yolg'iz emassiz. Ko'p ota-onalar bolaning baholariga qattiq bog'lanib qoladilar va uning bilishga bo'lgan tabiiy qiziqishini so'ndirib qo'yadilar.

### Xatolardan xalos bo'ling:
- Bolaning o'rniga uy vazifasini o'zingiz qilib bermang.
- Boshqa a'lochi sinfdoshlari bilan aslo solishtirmang.
- Baho uchun emas, qilingan mehnat uchun maqtang: «Sen bu misolni yechish uchun ancha izlanding, ofarin!»`,
  },
  {
    title: "Bolaga «yo'q» deb aytish san'ati",
    slug: "bolaga-yoq-deb-aytish-sanati",
    excerpt: "Qanday qilib bolani xafa qilmasdan, munosabatni buzmasdan qat'iy chegara qo'yish mumkin?",
    categorySlug: "intizom",
    ageGroup: "3-5",
    readingTimeMinutes: 4,
    tags: ["chegaralar", "yo'q deyish", "tarbiya san'ati", "iroda"],
    seoTitle: "Bolaga to'g'ri «yo'q» deyish uslubi | Farzandly",
    seoDescription: "Chegaralarni mehr bilan belgilash: bolani ranjitmasdan rad etish qoidalari va sog'lom tarbiya.",
    content: `Bolaga barcha narsani muhayyo qilish unga berilgan eng yaxshi sovg'a emas. Chegarasiz katta bo'lgan inson katta hayotda birinchi rad javobiga duch kelganida jiddiy tushkunlikka tushadi.

### Rad etishning 3 ta oltin qoidasi:
1. **«Yo'q» so'zini tejab ishlating:** Kun bo'yi 50 marta «mumkin emas» desangiz, bola bu so'zning qiymatini yo'qotadi. Faqat haqiqatan muhim va xavfli narsalarga chegara qo'ying.
2. **Sababini tushuntiring:** «Yo'q, chunki kechki ovqatdan oldin shirinlik yesang, qorning og'riydi».
3. **Muqobil bering:** «Hozir shokolad mumkin emas, lekin ovqatdan keyin birga banan yeymiz».`,
  },
];
