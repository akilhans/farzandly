import { HealthTopic } from '../models/index.js';

export const seedHealthTopics = [
  {
    "id": "brain-nervous-system",
    "slug": "bosh-miya-va-asab-tizimi",
    "title": "All About the Brain & Nervous System — Your Body's Central Computer",
    "titleUz": "Bosh miya va asab tizimi: Inson organizmining bosh kompyuteri",
    "titleRu": "Головной мозг и нервная система — Главный компьютер организма",
    "subtitle": "Discover how a 3-pound organ with billions of neurons controls thinking, feeling, movement, and vital organs.",
    "subtitleUz": "Vazni atigi 1.4 kg keladigan miya qanday qilib fikrlarimiz, xotiramiz, 5 ta sezgimiz va harakatlarimizni boshqaradi?",
    "subtitleRu": "Как орган весом всего в 1.4 кг с миллиардами нейронов управляет мыслями, памятью, чувствами и движением.",
    "system": "Nervous System",
    "systemUz": "Asab tizimi",
    "systemRu": "Нервная система",
    "category": "nervous",
    "isPremium": false,
    "readingMinutes": 6,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/brain.jpg",
    "diagramImage": "/body basics/brain.jpg",
    "galleryImages": [
      {
            "url": "/body basics/cerebrum.jpg",
            "labelUz": "Katta miya (Cerebrum)",
            "labelEn": "Cerebrum",
            "labelRu": "Большой мозг (Cerebrum)",
            "descriptionUz": "Miyaning eng katta qismi bo‘lgan katta miya ikki yarim shardan (o‘ng va chap) iborat. Katta miya harakat, nutq, aql-zakovat, his-tuyg‘ular hamda ko‘rish va eshitishimizni to‘liq boshqaradi.",
            "descriptionEn": "The largest part of the brain, the cerebrum has two hemispheres (or halves). The cerebrum controls movement, speech, intelligence, emotion, and what we see and hear.",
            "descriptionRu": "Самая большая часть мозга, большой мозг состоит из двух полушарий. Он управляет движением, речью, интеллектом, эмоциями, а также тем, что мы видим и слышим."
      },
      {
            "url": "/body basics/frontal-lobe.jpg",
            "labelUz": "Peshona bo‘lagi (Frontal Lobe)",
            "labelEn": "Frontal Lobe",
            "labelRu": "Лобная доля (Frontal Lobe)",
            "descriptionUz": "Peshona orqasida joylashgan peshona bo‘lagi murakkab fikrlash, rejalashtirish, tasavvur qilish, qaror qabul qilish va mantiqiy xulosalar chiqarishning asosiy qismini bajaradi.",
            "descriptionEn": "The frontal lobe, located behind the forehead, does much of the work of complex thinking, like planning, imagining, making decisions, and reasoning.",
            "descriptionRu": "Лобная доля, расположенная за лбом, выполняет большую часть сложной мыслительной работы: планирование, воображение, принятие решений и логические рассуждения."
      },
      {
            "url": "/body basics/parietal-lobe.jpg",
            "labelUz": "Tepa bo‘lagi (Parietal Lobe)",
            "labelEn": "Parietal Lobe",
            "labelRu": "Теменная доля (Parietal Lobe)",
            "descriptionUz": "Peshona bo‘lagi orqasida joylashgan tepa bo‘lagi teginish, ta’m bilish va tana harorati haqidagi barcha his-tuyg‘ularni qayta ishlaydi.",
            "descriptionEn": "The parietal lobe, located behind the frontal lobe, processes information about touch, taste, and temperature.",
            "descriptionRu": "Теменная доля, расположенная позади лобной доли, обрабатывает информацию об осязании, вкусе и температуре."
      },
      {
            "url": "/body basics/temporal-lobe.jpg",
            "labelUz": "Chakka bo‘lagi (Temporal Lobe)",
            "labelEn": "Temporal Lobe",
            "labelRu": "Височная доля (Temporal Lobe)",
            "descriptionUz": "Quloqlar yonida joylashgan chakka bo‘lagi tovushlar va inson nutqini tushunish, buyumlar hamda yuzlarni tanib olish va yangi xotiralarni shakllantirish imkonini beradi.",
            "descriptionEn": "The temporal lobe, found near the ears, lets us understand sounds and language, allows us to recognize objects and faces, and helps us create memories.",
            "descriptionRu": "Височная доля, расположенная около ушей, позволяет нам понимать звуки и речь, узнавать предметы и лица, а также формировать воспоминания."
      },
      {
            "url": "/body basics/occipital-lobe.jpg",
            "labelUz": "Ensa bo‘lagi (Occipital Lobe)",
            "labelEn": "Occipital Lobe",
            "labelRu": "Затылочная доля (Occipital Lobe)",
            "descriptionUz": "Miyaning orqa qismida joylashgan ensa bo‘lagi ko‘zdan keladigan yorug‘lik va vizual axborotlarni tahlil qilib, nimalarni ko‘rayotganimizni anglashimizni ta’minlaydi.",
            "descriptionEn": "The occipital lobe, in the rear of the brain, processes light and other visual information from the eyes, and allows us to know what we are seeing.",
            "descriptionRu": "Затылочная доля в задней части мозга обрабатывает световые и зрительные сигналы от глаз, позволяя нам понимать то, что мы видим."
      },
      {
            "url": "/body basics/cerebellum.jpg",
            "labelUz": "Miyacha (Cerebellum)",
            "labelEn": "Cerebellum",
            "labelRu": "Мозжечок (Cerebellum)",
            "descriptionUz": "Miyacha tananing harakatlarini muvofiqlashtirish, ularni aniq sozlash va muvozanatni mukammal saqlashga yordam beradi.",
            "descriptionEn": "The cerebellum helps coordinate and fine‑tune movement and balance.",
            "descriptionRu": "Мозжечок помогает координировать и точно настраивать движения, а также удерживать равновесие."
      },
      {
            "url": "/body basics/spinal-cord.jpg",
            "labelUz": "Orqa miya (Spinal Cord)",
            "labelEn": "Spinal Cord",
            "labelRu": "Спинной мозг (Spinal Cord)",
            "descriptionUz": "Markaziy asab tizimining ushbu qismi umurtqa pog‘onasi ichi bo‘ylab o‘tadi va bosh miyani butun tanaga boruvchi asab tolalari bilan uzviy bog‘laydi.",
            "descriptionEn": "This portion of the central nervous system runs down the inside of the spinal column, connecting the brain with nerves going to the rest of the body.",
            "descriptionRu": "Эта часть центральной нервной системы проходит внутри позвоночного столба, соединяя головной мозг с нервами по всему телу."
      },
      {
            "url": "/body basics/brain-stem.jpg",
            "labelUz": "Miya ustuni (Brain Stem)",
            "labelEn": "Brain Stem",
            "labelRu": "Ствол мозга (Brain Stem)",
            "descriptionUz": "Miyaning pastki asosida joylashgan miya ustuni orqa miyaga ulanadi va u o‘rta miya, ko‘prik hamda uzunchoq miyadan tashkil topgan.",
            "descriptionEn": "At the base of the brain, the brain stem connects to the spinal cord and is made up of the midbrain, pons, and medulla oblongata.",
            "descriptionRu": "В основании мозга ствол мозга соединяется со спинным мозгом и состоит из среднего мозга, моста и продолговатого мозга."
      },
      {
            "url": "/body basics/pons.jpg",
            "labelUz": "Ko‘prik (Pons)",
            "labelEn": "Pons",
            "labelRu": "Мост (Pons)",
            "descriptionUz": "Ko‘prik katta miyadan miyacha va orqa miyaga signallarni yetkazadi hamda yuz ifodalari va mushaklarining harakatini boshqarishga yordam beradi.",
            "descriptionEn": "The pons relays messages from the cerebrum to the cerebellum and spinal cord, and helps control movement of the face.",
            "descriptionRu": "Мост передает сигналы от большого мозга к мозжечку и спинному мозгу, помогая управлять движениями лица."
      },
      {
            "url": "/body basics/midbrain.jpg",
            "labelUz": "O‘rta miya (Midbrain)",
            "labelEn": "Midbrain",
            "labelRu": "Средний мозг (Midbrain)",
            "descriptionUz": "O‘rta miya ko‘z harakatlarini boshqarishga ko‘maklashadi va miyaning qolgan asab tizimi bilan aloqa almashishini ta’minlaydi.",
            "descriptionEn": "The midbrain helps control eye movements, and allows the brain to communicate with the rest of the nervous system.",
            "descriptionRu": "Средний мозг помогает управлять движениями глаз и обеспечивает связь мозга с остальной частью нервной системы."
      },
      {
            "url": "/body basics/medulla-oblongata.jpg",
            "labelUz": "Uzunchoq miya (Medulla Oblongata)",
            "labelEn": "Medulla Oblongata",
            "labelRu": "Продолговатый мозг (Medulla Oblongata)",
            "descriptionUz": "Miya ustunining ushbu bo‘limi to‘g‘ridan-to‘g‘ri orqa miyaning ustida joylashgan. U yurak urishi va nafas olish kabi eng muhim hayotiy vazifalarni nazorat qiladi.",
            "descriptionEn": "This portion of the brain stem is located just above the spinal cord. It regulates vital functions, such as heartbeat and breathing.",
            "descriptionRu": "Эта часть ствола мозга расположена прямо над спинным мозгом. Она регулирует жизненно важные функции: сердцебиение и дыхание."
      },
      {
            "url": "/body basics/thalamus.jpg",
            "labelUz": "Talamus (Thalamus)",
            "labelEn": "Thalamus",
            "labelRu": "Таламус (Thalamus)",
            "descriptionUz": "Miyaning markaziy qismida joylashgan talamus tanadan barcha sezgi signallarini (masalan, teginish) qabul qilib, ularni tahlil qilish uchun miyaning tegishli bo‘limlariga yo‘naltiradi.",
            "descriptionEn": "Located in the central part of the brain, the thalamus receives sensory messages, such as touch, from the body, and sends the messages to the appropriate part of the brain to be interpreted.",
            "descriptionRu": "Расположенный в центральной части мозга, таламус принимает сенсорные сигналы (например, осязание) от тела и направляет их в соответствующую часть мозга для обработки."
      },
      {
            "url": "/body basics/ventricles.jpg",
            "labelUz": "Miya qorinchalari (Ventricles)",
            "labelEn": "Ventricles",
            "labelRu": "Желудочки мозга (Ventricles)",
            "descriptionUz": "Miyadagi ushbu bo‘shliqlar orqa miya suyuqligi (likvor / CSF) bilan to‘lgan. Likvor qorinchalar va umurtqa pog‘onasi bo‘ylab aylanib, markaziy asab tizimini shikastlanishdan asraydi va oziqlantiradi.",
            "descriptionEn": "These hollow spaces in the brain have cerebral spinal fluid (CSF) in them. CSF flows through the ventricles and around the spine in the spinal column, protecting and nourishing the central nervous system.",
            "descriptionRu": "Эти полости в мозге заполнены спинномозговой жидкостью (ликвором / CSF). Ликвор циркулирует по желудочкам и вокруг позвоночника, защищая и питая центральную нервную систему."
      },
      {
            "url": "/body basics/pituitary-gland.jpg",
            "labelUz": "Gipofiz bezi (Pituitary Gland)",
            "labelEn": "Pituitary Gland",
            "labelRu": "Гипофиз (Pituitary Gland)",
            "descriptionUz": "Ushbu mitti bez bolaning o‘sishi, balog‘atga yetishi, moddalar almashinuvi, suv va mineral muvozanati hamda organizmning stressga qarshi turishini boshqaruvchi muhim gormonlarni ishlab chiqaradi.",
            "descriptionEn": "This tiny gland produces hormones involved in regulating growth, puberty, metabolism, water and mineral balance, the body's response to stress, and more.",
            "descriptionRu": "Эта крошечная железа вырабатывает гормоны, регулирующие рост, половое созревание, обмен веществ, водно-солевой баланс и реакцию на стресс."
      },
      {
            "url": "/body basics/hypothalamus.jpg",
            "labelUz": "Gipotalamus (Hypothalamus)",
            "labelEn": "Hypothalamus",
            "labelRu": "Гипоталамус (Hypothalamus)",
            "descriptionUz": "Gipotalamus chanqoqlik, ishtaha va uyqu maromi kabi tana funksiyalarini muvofiqlashtiradi. Shuningdek, u gipofiz bezidan gormonlar ajralib chiqishini tartibga soladi.",
            "descriptionEn": "The hypothalamus regulates functions like thirst, appetite, and sleep patterns. It also regulates the release of hormones from the pituitary gland.",
            "descriptionRu": "Гипоталамус регулирует жажду, аппетит и циклы сна. Он также контролирует выделение гормонов гипофизом."
      }
],
    "pronunciations": [
      {
        "term": "Cerebrum",
        "phonetic": "suh-REE-brum",
        "meaningUz": "Katta miya — insonning ongi, aqli, xotirasi va his-tuyg‘ulari joylashgan asosiy bo‘limi.",
        "meaningEn": "The largest part of the brain controlling intelligence, personality, and sensations.",
        "meaningRu": "Большой мозг — главная и самая крупная часть мозга, отвечающая за разум, память и чувства."
      },
      {
        "term": "Cerebellum",
        "phonetic": "sair-uh-BEL-um",
        "meaningUz": "Miyacha — gavda muvozanatini saqlash, harakatlarni aniq muvofiqlashtirish a’zosi.",
        "meaningEn": "The little brain at the back controlling balance, coordination, and posture.",
        "meaningRu": "Мозжечок — отдел головного мозга, отвечающий за равновесие и координацию движений."
      },
      {
        "term": "Neuron",
        "phonetic": "NOOR-on",
        "meaningUz": "Neyron — elektr va kimyoviy signallar orqali axborot uzatuvchi asab hujayrasi.",
        "meaningEn": "Microscopic nerve cells that transmit electrochemical messages across the body.",
        "meaningRu": "Нейрон — нервная клетка, передающая информацию с помощью электрических и химических сигналов."
      },
      {
        "term": "Hypothalamus",
        "phonetic": "hi-po-THAL-uh-mus",
        "meaningUz": "Gipotalamus — tana harorati, puls, ochlik va uyquni avtomatik boshqaruvchi markaz.",
        "meaningEn": "Brain region controlling temperature, pulse, appetite, and sleep.",
        "meaningRu": "Гипоталамус — регулятор температуры тела, пульса, аппетита и суточных ритмов."
      }
    ],
    "sections": [
      {
        "title": "Your Body's Central Computer",
        "titleUz": "Tanamizning markaziy superkompyuteri",
        "titleRu": "Главный суперкомпьютер нашего тела",
        "paragraphs": [
          "The brain controls what you think and feel, how you learn and remember, and the way you move and talk. But it also controls things you're less aware of — like the beating of your heart and the digestion of your food.",
          "Think of the brain as a central computer that controls all the body's functions. The rest of the nervous system is like a network that relays messages back and forth from the brain to different parts of the body. It does this via the spinal cord, which runs from the brain down through the back.",
          "When a message comes into the brain from anywhere in the body, the brain tells the body how to react. For example, when you eat, the nerves in your intestines shoot a message of fullness to your brain. The brain enables you to stop eating when you're full."
        ],
        "paragraphsUz": [
          "Bosh miya inson nimalarni o‘ylashi va his qilishi, qanday o‘rganishi va eslab qolishi, qay tarzda harakatlanishi va so‘zlashini boshqaradi. Shu bilan birga, u biz o‘zimiz sezmaydigan jarayonlarni — masalan, yurak urishi va ovqat hazm bo‘lishini ham nazorat qiladi.",
          "Miyani butun tanamizning barcha vazifalarini boshqarib turuvchi markaziy kompyuter deb tasavvur qiling. Asab tizimining qolgan qismi esa miyadan turli a’zolarga xabarlarni borib-keltirib turuvchi ulkan tarmoqdir. Bu aloqa orqa miya orqali amalga oshiriladi.",
          "Tanamizning biror burchagidan signal kelishi bilan miya unga qanday javob qaytarishni darhol buyuradi. Masalan, to‘yib ovqatlanganingizda oshqozon va ichak nervlari miyaga to‘ydik degan signal yuboradi va miya sizga ortiqcha yemay to‘xtashga buyruq beradi."
        ],
        "paragraphsRu": [
          "Головной мозг управляет нашими мыслями, чувствами, обучением, памятью, движениями и речью. Кроме того, он незаметно контролирует жизненно важные процессы — биение сердца и пищеварение.",
          "Представьте головной мозг как мощный центральный компьютер, управляющий телом. Нервная система вокруг него — это сложнейшая сеть, передающая сигналы к мозгу и обратно через спинной мозг.",
          "Когда в мозг поступает сигнал из любой части тела, он мгновенно отдает команду к действию. Например, во время еды сигналы насыщения от желудка поступают в мозг, и вы вовремя прекращаете прием пищи."
        ],
        "highlightBox": {
          "title": "Aql bovar qilmas ixchamlik",
          "titleUz": "Aql bovar qilmas ixchamlik",
          "titleRu": "Невероятная компактность",
          "text": "Inson miyasi atigi 1.4 kg vaznga ega bo‘lsa-da, unda 86 milliarddan ortiq neyronlar mavjud bo‘lib, ularning ulanishlari butun koinotdagi yulduzlar sonidan ham ko‘proqdir!",
          "textUz": "Inson miyasi atigi 1.4 kg vaznga ega bo‘lsa-da, unda 86 milliarddan ortiq neyronlar mavjud bo‘lib, ularning ulanishlari butun koinotdagi yulduzlar sonidan ham ko‘proqdir!",
          "textRu": "Человеческий мозг весит всего около 1.4 кг, но содержит более 86 миллиардов нейронов, а число связей между ними превышает число звезд в известной галактике!",
          "type": "info"
        }
      },
      {
        "title": "The Forebrain, Midbrain, and Hindbrain",
        "titleUz": "Old miya, o‘rta miya va orqa miya qismlari",
        "titleRu": "Передний, средний и задний мозг",
        "paragraphs": [
          "Forebrain: The largest part, consisting of the cerebrum with its four distinct lobes (frontal, parietal, temporal, and occipital). The left hemisphere governs logic and analysis, while the right hemisphere oversees creativity and intuition.",
          "Thalamus, Hypothalamus & Pituitary: The thalamus relays sensory messages to the cortex. The hypothalamus regulates temperature, pulse, and sleep. The pituitary makes master growth hormones.",
          "Hindbrain & Brainstem: The cerebellum coordinates balance and posture. The pons and medulla oblongata form the brainstem, controlling automatic survival functions like breathing, blood pressure, and swallowing."
        ],
        "paragraphsUz": [
          "Old miya: Eng katta qism bo‘lib, katta miya va uning to‘rtta bo‘lagidan iborat (peshona, tepa, chakka, ensa). Chap yarim shar mantiq va tahlilga, o‘ng yarim shar esa ijodkorlik va san’atga javob beradi.",
          "Talamus, Gipotalamus va Gipofiz: Talamus sezgilarni miya po‘stlog‘iga yetkazadi. Gipotalamus tana harorati, yurak urishi va uyquni boshqaradi. Gipofiz esa bo‘y o‘stirish gormonlarini ishlab chiqaradi.",
          "Miyacha va Miya ustuni: Miyacha muvozanat va harakatlarni boshqaradi. Uzunchoq miya va ko‘prik nafas olish, qon bosimi va yutinish kabi hayotiy avtomatik vazifalarni nazorat qiladi."
        ],
        "paragraphsRu": [
          "Передний мозг: Крупнейший отдел, включающий кору больших полушарий с четырьмя долями (лобная, теменная, височная, затылочная). Левое полушарие отвечает за логику, правое — за творчество и интуицию.",
          "Таламус, гипоталамус и гипофиз: Таламус передает сенсорные импульсы в кору. Гипоталамус регулирует температуру, пульс и сон. Гипофиз вырабатывает гормоны роста.",
          "Мозжечок и ствол мозга: Мозжечок отвечает за равновесие и моторику. Мост и продолговатый мозг управляют дыханием, давлением и глотанием."
        ]
      },
      {
        "title": "Intelligence, Memory and Neuroplasticity",
        "titleUz": "Aql-idrok, xotira va neyron yo‘llari",
        "titleRu": "Интеллект, память и нейропластичность",
        "paragraphs": [
          "In young children, the brain is amazingly adaptable (neuroplasticity). When one part is injured, another part often steps in to take over that role.",
          "As you learn new skills, messages travel between neurons repeatedly, paving permanent neural highways. Around ages 11–12, habits lock in strongly, which is why forming healthy routines early is so vital."
        ],
        "paragraphsUz": [
          "Kichik yoshdagi bolalarning miyasi ajoyib moslashuvchanlikka (neyroplastiklik) ega. Agar biror qism shikastlansa, boshqa soha uning vazifasini o‘z zimmasiga olishi mumkin.",
          "Bola yangi ko‘nikmani o‘rgangani sari neyronlar orasida mustahkam bog‘lanishlar shakllanadi. Ayniqsa 11-12 yoshlarda odatlar miyada chuqur mustahkamlanadi, shu sababli bolalikdan foydali odatlarni shakllantirish juda muhimdir."
        ],
        "paragraphsRu": [
          "У детей мозг обладает уникальной нейропластичностью — способностью перестраиваться и компенсировать утраченные функции.",
          "По мере обучения сигналы между нейронами формируют прочные нервные пути. К 11–12 годам привычки закрепляются особенно прочно, поэтому здоровый образ жизни важно формировать с ранних лет."
        ],
        "highlightBox": {
          "title": "Miyani baquvvat asrash qoidalari",
          "titleUz": "Miyani baquvvat asrash qoidalari",
          "titleRu": "Как беречь здоровье мозга",
          "text": "Velosipedda va rolikda doimo himoya shlemi taqing, har kecha kamida 8-9 soat tinch uxlang va yangi kitoblar mutolaa qilib miyangizni mashq qildiring!",
          "textUz": "Miyani baquvvat asrash qoidalari: Velosipedda va rolikda doimo himoya shlemi taqing, har kecha kamida 8-9 soat tinch uxlang va yangi kitoblar mutolaa qilib miyangizni mashq qildiring!",
          "textRu": "Всегда надевайте защитный шлем при катании на велосипеде, спите не менее 8-9 часов в сутки и регулярно тренируйте мозг чтением и новыми знаниями!",
          "type": "tip"
        }
      }
    ],
    "funFacts": [
      {
        "en": "Your brain uses about 20% of all the oxygen and energy your entire body consumes!",
        "uz": "Inson miyasi butun tana sarflaydigan kislorod va quvvatning deyarli 20 foizini o‘zi iste’mol qiladi!",
        "ru": "Мозг потребляет около 20% всего кислорода и энергии, расходуемых телом!"
      },
      {
        "en": "The brain itself has zero pain receptors — which is why brain surgeries can be performed while patients are awake!",
        "uz": "Miyaning o‘zida og‘riq sezuvchi retseptorlar yo‘q — shu sababli miya operatsiyalarini ba’zan bemor uyg‘oq paytida ham o‘tkazish mumkin!",
        "ru": "В самой ткани мозга нет болевых рецепторов, поэтому операции на мозге можно проводить при полном сознании пациента!"
      }
    ],
    "takeaways": [
      {
        "en": "The brain is your central computer, relaying messages via the spinal cord.",
        "uz": "Miya orqa miya orqali butun tanaga xabarlar uzatuvchi markaziy kompyuterdir.",
        "ru": "Мозг является главным компьютером тела, координирующим все органы через спинной мозг."
      },
      {
        "en": "The cerebellum keeps you balanced while the cerebrum lets you think, read, and remember.",
        "uz": "Miyacha muvozanatni saqlaydi, katta miya esa fikrlash, o‘qish va eslab qolishga xizmat qiladi.",
        "ru": "Мозжечок удерживает равновесие, а большие полушария позволяют мыслить, читать и помнить."
      },
      {
        "en": "Adequate sleep and protective helmets protect your brain for a lifetime.",
        "uz": "Yetarli uyqu va sportda himoya shlemi taqish miyangizni bir umr sog‘lom saqlaydi.",
        "ru": "Полноценный сон и защитный шлем сохраняют здоровье мозга на долгие годы."
      }
    ],
    "quiz": [
      {
        "question": "Which part of the brain controls balance, movement, and coordination?",
        "questionUz": "Miyaning qaysi qismi tana muvozanati va harakatlar aniqligini boshqaradi?",
        "questionRu": "Какая часть мозга отвечает за равновесие и координацию движений?",
        "options": [
          "Cerebrum",
          "Cerebellum",
          "Pituitary gland",
          "Spinal cord"
        ],
        "optionsUz": [
          "Katta miya",
          "Miyacha (Cerebellum)",
          "Gipofiz bezi",
          "Orqa miya"
        ],
        "optionsRu": [
          "Большой мозг",
          "Мозжечок (Cerebellum)",
          "Гипофиз",
          "Спинной мозг"
        ],
        "correctIndex": 1,
        "explanation": "The cerebellum, known as the 'little brain', keeps you upright and coordinated.",
        "explanationUz": "Miyacha (kichik miya) insonning tik turishi va harakatlarni aniq bajarishi uchun javobgar.",
        "explanationRu": "Мозжечок координирует работу мышц и удерживает тело в равновесии.",
        "xpReward": 10
      },
      {
        "question": "What is the name of the nerve cells that transmit electrochemical messages in the brain?",
        "questionUz": "Miyada axborot xabarlarini uzatuvchi mikroskopik asab hujayralari nima deyiladi?",
        "questionRu": "Как называются нервные клетки, передающие импульсы в мозге?",
        "options": [
          "Alveoli",
          "Neurons",
          "Capillaries",
          "Enzymes"
        ],
        "optionsUz": [
          "Alveolalar",
          "Neyronlar (Neurons)",
          "Kapillyarlar",
          "Fermentlar"
        ],
        "optionsRu": [
          "Альвеолы",
          "Нейроны (Neurons)",
          "Капилляры",
          "Ферменты"
        ],
        "correctIndex": 1,
        "explanation": "Billions of neurons send electrochemical signals throughout the nervous system.",
        "explanationUz": "Milliardlab neyronlar bir-biri bilan uzluksiz elektr va kimyoviy signallar almashadi.",
        "explanationRu": "Миллиарды нейронов передают электрохимические сигналы по всей нервной системе.",
        "xpReward": 10
      },
      {
        "question": "Which brain structure controls automatic functions like breathing, heart rate, and blood pressure?",
        "questionUz": "Nafas olish, yurak urishi va qon bosimi kabi hayotiy avtomatik funksiyalarni qaysi qism boshqaradi?",
        "questionRu": "Какая структура мозга контролирует автоматические функции: дыхание, пульс и давление?",
        "options": [
          "Brainstem (Medulla & Pons)",
          "Corpus callosum",
          "Optic nerve",
          "Frontal lobe"
        ],
        "optionsUz": [
          "Miya ustuni (Uzunchoq miya va ko‘prik)",
          "Qadoqsimon tana",
          "Ko‘rish nervi",
          "Peshona bo‘lagi"
        ],
        "optionsRu": [
          "Ствол мозга (Продолговатый мозг и мост)",
          "Мозолистое тело",
          "Зрительный нерв",
          "Лобная доля"
        ],
        "correctIndex": 0,
        "explanation": "The brainstem connects to the spinal cord and regulates vital subconscious functions.",
        "explanationUz": "Miya ustuni nafas olish va qon aylanishi kabi eng zaruriy avtomatik jarayonlarni nazorat qiladi.",
        "explanationRu": "Ствол мозга обеспечивает непрерывную работу жизненно важных рефлексов.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "mouth-and-teeth",
    "slug": "ogiz-boshligi-va-tishlar",
    "title": "Mouth and Teeth — How We Speak, Chew, and Smile",
    "titleUz": "Og‘iz bo‘shlig‘i va tishlar: Nutq, hazm va tabassum sirlari",
    "titleRu": "Полость рта и зубы: Как мы говорим, пережёвываем пищу и улыбаемся",
    "subtitle": "Discover hard and soft palates, salivary glands, taste buds, and the anatomy of human teeth from enamel to pulp.",
    "subtitleUz": "Tanglay, so‘lak bezlari, ta’m so‘rg‘ichlari hamda tish to‘qimalari (emaye, dentin, pulpa) haqida qiziqarli qo‘llanma.",
    "subtitleRu": "Строение полости рта, нёбо, вкусовые сосочки, слюнные железы и анатомия зубов от эмали до пульпы.",
    "system": "Digestive & Speech",
    "systemUz": "Hazm va nutq a’zolari",
    "systemRu": "Органы пищеварения и речи",
    "category": "digestive",
    "isPremium": false,
    "readingMinutes": 5,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/throat.gif",
    "diagramImage": "/body basics/throat.gif",
    "pronunciations": [
      {
        "term": "Palate",
        "phonetic": "PAL-it",
        "meaningUz": "Tanglay — og‘iz bo‘shlig‘ining tepa qismi (oldingi qattiq va orqa yumshoq tanglay).",
        "meaningEn": "The roof of the mouth divided into bony hard palate and muscular soft palate.",
        "meaningRu": "Нёбо — свод ротовой полости, разделенный на твердое костное и мягкое мышечное нёбо."
      },
      {
        "term": "Enamel",
        "phonetic": "ih-NAM-ul",
        "meaningUz": "Emal — tish tojini qoplagan, butun inson organizmidagi eng mustahkam to‘qima.",
        "meaningEn": "The rock-hard outer shell covering the tooth crown.",
        "meaningRu": "Эмаль — самая твердая минерализованная ткань в организме человека, покрывающая коронку зуба."
      },
      {
        "term": "Dentin",
        "phonetic": "DEN-tin",
        "meaningUz": "Dentin — emal ostida joylashgan va tishning asosiy hajmini tashkil qiluvchi sarg‘ish suyaksimon modda.",
        "meaningEn": "The bone-like yellowish material beneath enamel making up most of the tooth.",
        "meaningRu": "Дентин — основная костная ткань зуба, находящаяся под эмалью."
      },
      {
        "term": "Pulp",
        "phonetic": "PULP",
        "meaningUz": "Pulpa — tishning ichki qismidagi nerv tolalari va qon tomirlari joylashgan nozik to‘qima.",
        "meaningEn": "The innermost living center of the tooth holding blood vessels and nerves.",
        "meaningRu": "Пульпа — внутренняя мягкая часть зуба, богатая нервными окончаниями и кровеносными сосудами."
      }
    ],
    "sections": [
      {
        "title": "Why Are the Mouth & Teeth Important?",
        "titleUz": "Og‘iz va tishlar nima uchun muhim?",
        "titleRu": "Зачем нам нужны рот и зубы?",
        "paragraphs": [
          "Every time we smile, frown, talk, or eat, we use our mouths and teeth. Our mouths and teeth let us make different facial expressions, form words, eat, drink, and begin the process of digestion.",
          "The mouth is essential for speech. With the lips and tongue, teeth help form words by controlling airflow out of the mouth. When we eat, our teeth tear, cut, and grind food in preparation for swallowing."
        ],
        "paragraphsUz": [
          "Har safar tabassum qilganimizda, so‘zlaganimizda yoki taom yeganimizda og‘iz va tishlarimizdan foydalanamiz. Ular yuz mimikasini hosil qilish, nutq tovushlarini chiqarish va ovqat hazmini boshlash uchun xizmat qiladi.",
          "Og‘iz so‘zlashish uchun nihoyatda zarur. Lablar va til bilan birga tishlar havo oqimini to‘g‘ri yo‘naltirib, so‘zlarni ravon aytishga imkon beradi. Taom yeganimizda esa tishlar uni maydalab, yutishga tayyorlaydi."
        ],
        "paragraphsRu": [
          "Каждый раз, когда мы улыбаемся, говорим или едим, задействованы рот и зубы. Они участвуют в мимике, формировании речи и первичном расщеплении пищи.",
          "Рот незаменим для артикуляции: зубы, губы и язык координируют поток воздуха для четкого произношения звуков, а также измельчают пищу перед глотанием."
        ]
      },
      {
        "title": "Parts of the Mouth: Palate, Tongue & Saliva",
        "titleUz": "Og‘iz qismlari: Tanglay, til va so‘lak bezlari",
        "titleRu": "Строение рта: Нёбо, язык и слюнные железы",
        "paragraphs": [
          "Hard & Soft Palate: The hard palate separates the mouth from nasal cavity. The soft palate forms a curtain preventing food from going into the nose when swallowing.",
          "Tongue & Taste Buds: Covered with papillae, sensing sweet, salty, sour, and bitter.",
          "Salivary Glands: Secrete saliva containing enzymes that begin breaking down food carbs immediately."
        ],
        "paragraphsUz": [
          "Qattiq va yumshoq tanglay: Qattiq tanglay og‘izni burun bo‘shlig‘idan ajratib turadi. Yumshoq tanglay esa ovqat yutganda burun yo‘lini yopib, taomning burunga ketib qolishini oldini oladi.",
          "Til va ta’m so‘rg‘ichlari: Til yuzasidagi so‘rg‘ichlar shirin, sho‘r, nordon va achchiq ta’mlarni sezadi.",
          "So‘lak bezlari: So‘lak ajratib taomni yumshatadi va tarkibidagi fermentlar orqali uglevodlarni og‘izning o‘zidayoq parchalashni boshlaydi."
        ],
        "paragraphsRu": [
          "Твердое и мягкое нёбо: Твердое нёбо отделяет рот от носовой полости, а мягкое нёбо закрывает носоглотку при глотании.",
          "Язык и рецепторы: Сосочки языка распознают сладкий, соленый, кислый и горький вкусы.",
          "Слюнные железы: Вырабатывают ферменты слюны, начинающие процесс расщепления углеводов уже в полости рта."
        ]
      },
      {
        "title": "Kinds of Teeth & Dental Anatomy",
        "titleUz": "Tish turlari va tishning anatomik tuzilishi",
        "titleRu": "Виды зубов и их внутреннее строение",
        "paragraphs": [
          "Incisors cut, canines tear, premolars mash, and molars grind food. Humans are diphyodont: 20 primary baby teeth are replaced by 32 permanent adult teeth.",
          "Tissues: Enamel (hardest body tissue), dentin (yellowish core), pulp (living blood vessels and nerves), and cementum (anchors the root into jawbone)."
        ],
        "paragraphsUz": [
          "Kurak tishlar (kesadi), qoziq tishlar (uzadi), kichik va katta oziq tishlar (chaynab maydalaydi). Inson hayotida 20 ta sut tishi o‘rniga 32 ta doimiy tish chiqadi.",
          "To‘qimalar: Emal (eng qattiq himoya qobig‘i), dentin (tish asosi), pulpa (nerv va qon tomirlari joylashgan markaz) va sement (ildizni jag‘ suyagiga mahkamlaydi)."
        ],
        "paragraphsRu": [
          "Резцы откусывают, клыки разрывают, а премоляры и моляры перетирают пищу. У человека 20 молочных зубов сменяются 32 постоянными.",
          "Слои зуба: Эмаль (прочнейшая ткань тела), дентин (основа), пульпа (сосудисто-нервный пучок) и цемент (удерживает корень в челюсти)."
        ],
        "highlightBox": {
          "title": "Tishlarni asrashning oltin qoidasi",
          "titleUz": "Tishlarni asrashning oltin qoidasi",
          "titleRu": "Золотое правило гигиены полости рта",
          "text": "Tishlaringizni kuniga ikki marta kamida 2 daqiqadan tozalang, shirin gazlangan ichimliklarni cheklang va har 6 oyda stomatolog ko‘rigidan o‘ting!",
          "textUz": "Tishlarni asrashning oltin qoidasi: Tishlaringizni kuniga ikki marta kamida 2 daqiqadan tozalang, shirin gazlangan ichimliklarni cheklang va har 6 oyda stomatolog ko‘rigidan o‘ting!",
          "textRu": "Чистите зубы дважды в день по 2 минуты, ограничьте сладкие газировки и посещайте стоматолога каждые полгода!",
          "type": "tip"
        }
      }
    ],
    "funFacts": [
      {
        "en": "Tooth enamel is harder than any bone in your entire skeleton!",
        "uz": "Tish emali inson skeletidagi har qanday suyakdan ham qattiqroq va mustahkamroqdir!",
        "ru": "Зубная эмаль прочнее любой кости человеческого скелета!"
      },
      {
        "en": "Your mouth produces about 1 to 2 liters of saliva every single day!",
        "uz": "Inson og‘iz bo‘shlig‘i har kuni taxminan 1 litrdan 2 litrgacha so‘lak ishlab chiqaradi!",
        "ru": "Организм вырабатывает от 1 до 2 литров слюны каждый день!"
      }
    ],
    "takeaways": [
      {
        "en": "Teeth and tongue work together to form speech sounds and start digestion.",
        "uz": "Tishlar va til birgalikda nutq tovushlarini hosil qiladi va hazm jarayonini boshlaydi.",
        "ru": "Зубы и язык вместе формируют звуки речи и запускают процесс переваривания."
      },
      {
        "en": "Brushing for 2 minutes twice a day keeps enamel strong against cavities.",
        "uz": "Har kuni 2 mahal 2 daqiqadan tish yuvish emalni kariesdan mustahkam himoya qiladi.",
        "ru": "Чистка зубов дважды в день по 2 минуты защищает эмаль от кариеса."
      }
    ],
    "quiz": [
      {
        "question": "What is the hardest tissue found in the human body?",
        "questionUz": "Inson organizmidagi eng qattiq va mustahkam to‘qima nima?",
        "questionRu": "Какая ткань в организме человека является самой твердой?",
        "options": [
          "Femur bone",
          "Tooth enamel",
          "Jawbone",
          "Dentin"
        ],
        "optionsUz": [
          "Son suyagi",
          "Tish emali (Enamel)",
          "Jag‘ suyagi",
          "Dentin"
        ],
        "optionsRu": [
          "Бедренная кость",
          "Зубная эмаль (Enamel)",
          "Челюстная кость",
          "Дентин"
        ],
        "correctIndex": 1,
        "explanation": "Tooth enamel has the highest percentage of minerals, making it harder than bone.",
        "explanationUz": "Tish emali minerallarga nihoyatda boy bo‘lib, hatto suyakdan ham qattiqroqdir.",
        "explanationRu": "Эмаль зуба содержит наивысшую концентрацию минералов, превосходя по твердости кости.",
        "xpReward": 10
      },
      {
        "question": "How many permanent adult teeth do humans normally develop?",
        "questionUz": "Katta yoshli insonda jami nechta doimiy tish bo‘ladi?",
        "questionRu": "Сколько постоянных зубов вырастает у взрослого человека?",
        "options": [
          "20",
          "28",
          "32",
          "36"
        ],
        "optionsUz": [
          "20 ta",
          "28 ta",
          "32 ta",
          "36 ta"
        ],
        "optionsRu": [
          "20",
          "28",
          "32",
          "36"
        ],
        "correctIndex": 2,
        "explanation": "Humans have 20 primary baby teeth and 32 permanent adult teeth.",
        "explanationUz": "Bolalikda 20 ta sut tishi, ulg‘aygach esa 32 ta doimiy tish shakllanadi.",
        "explanationRu": "У человека вырастает 20 молочных и 32 постоянных зуба.",
        "xpReward": 10
      },
      {
        "question": "Which tooth tissue contains the nerves and blood vessels?",
        "questionUz": "Tishning qaysi qismida qon tomirlari va nerv tolalari joylashgan?",
        "questionRu": "В какой части зуба расположены нервы и кровеносные сосуды?",
        "options": [
          "Enamel",
          "Cementum",
          "Pulp",
          "Crown"
        ],
        "optionsUz": [
          "Emal",
          "Sement",
          "Pulpa (Pulp)",
          "Tish toji"
        ],
        "optionsRu": [
          "Эмаль",
          "Цемент",
          "Пульпа (Pulp)",
          "Коронка"
        ],
        "correctIndex": 2,
        "explanation": "The pulp is the soft living center nourishing the tooth and sensing pain.",
        "explanationUz": "Pulpa tishning tirik qismi bo‘lib, uni oziqlantiradi va sezgirlik beradi.",
        "explanationRu": "Пульпа — внутренняя живая ткань зуба с сосудами и нервными окончаниями.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "endocrine-system",
    "slug": "endokrin-tizimi-gormonlar-va-bezlar",
    "title": "Endocrine System — Hormones & Glands",
    "titleUz": "Endokrin tizimi: Gormonlar va tana bezlari mo‘jizasi",
    "titleRu": "Эндокринная система: Гормоны и железы внутренней секреции",
    "subtitle": "Discover how glands make chemical messengers called hormones that control growth, energy, mood, and puberty.",
    "subtitleUz": "Gormonlar qanday qilib o‘sish, quvvat, kayfiyat va balog‘at davrini boshqarishini ilmiy va sodda tilda o‘rganing.",
    "subtitleRu": "Как железы вырабатывают гормоны, управляющие ростом, обменом веществ и настроением человека.",
    "system": "Endocrine System",
    "systemUz": "Endokrin tizimi",
    "systemRu": "Эндокринная система",
    "category": "endocrine",
    "isPremium": true,
    "readingMinutes": 5,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/pituitary-gland.jpg",
    "diagramImage": "/body basics/pituitary-gland.jpg",
    "galleryImages": [
      {
        "url": "/body basics/pituitary-gland.jpg",
        "labelUz": "Gipofiz bezi (Pituitary) — boshqaruvchi bosh bez",
        "labelEn": "Pituitary gland — master endocrine gland",
        "labelRu": "Гипофиз — главная железа эндокринной системы"
      },
      {
        "url": "/body basics/hypothalamus.jpg",
        "labelUz": "Gipotalamus — gormonlar va asab tizimi ko‘prigi",
        "labelEn": "Hypothalamus — bridge between brain and hormones",
        "labelRu": "Гипоталамус — связь нервной и гормональной систем"
      }
    ],
    "pronunciations": [
      {
        "term": "Endocrine",
        "phonetic": "EN-duh-krin",
        "meaningUz": "Endokrin — gormonlarni bevosita qon oqimiga chiqaruvchi bezlar tizimi.",
        "meaningEn": "The system of glands that produces hormones directly into the bloodstream.",
        "meaningRu": "Эндокринная система — система желез, выделяющих гормоны непосредственно в кровь."
      },
      {
        "term": "Pituitary",
        "phonetic": "puh-TOO-uh-ter-ee",
        "meaningUz": "Gipofiz — no‘xatdek kichik, ammo boshqa bezlarga buyruq beruvchi bosh bez.",
        "meaningEn": "The pea-sized 'master gland' at the base of the brain controlling other glands.",
        "meaningRu": "Гипофиз — железа размером с горошину, управляющая большинством остальных желез."
      },
      {
        "term": "Thyroid",
        "phonetic": "THY-royd",
        "meaningUz": "Qalqonsimon bez — bo‘yin old qismidagi kapalaksimon bez, moddalar almashinuvini boshqaradi.",
        "meaningEn": "Butterfly-shaped gland in the neck that controls metabolism and energy.",
        "meaningRu": "Щитовидная железа — орган в форме бабочки на шее, регулирующий обмен веществ."
      },
      {
        "term": "Insulin",
        "phonetic": "IN-suh-lin",
        "meaningUz": "Insulin — oshqozon osti bezi ajratadigan, qondagi qand darajasini nazorat qiluvchi gormon.",
        "meaningEn": "A hormone made by the pancreas that regulates glucose levels in blood.",
        "meaningRu": "Инсулин — гормон поджелудочной железы, регулирующий уровень сахара в крови."
      }
    ],
    "sections": [
      {
        "title": "What Is the Endocrine System?",
        "titleUz": "Endokrin tizimi nima?",
        "titleRu": "Что такое эндокринная система?",
        "paragraphs": [
          "The endocrine system is made up of glands that make hormones. Hormones are the body's chemical messengers. They carry information and instructions from one set of cells to another.",
          "The endocrine system influences almost every cell, organ, and function of our bodies, regulating mood, growth, metabolism, and reproduction."
        ],
        "paragraphsUz": [
          "Endokrin tizimi gormonlar ishlab chiqaruvchi bezlardan tashkil topgan. Gormonlar — bu tanamizning kimyoviy xabarchilaridir. Ular ma’lumot va buyruqlarni bir hujayralar guruhidan boshqasiga tashiydi.",
          "Endokrin tizimi tanamizdagi deyarli har bir hujayra, a’zo va hayotiy jarayonga ta’sir ko‘rsatadi: inson kayfiyati, bo‘y o‘sishi, quvvat almashinuvi va rivojlanishni boshqaradi."
        ],
        "paragraphsRu": [
          "Эндокринная система состоит из желез, вырабатывающих гормоны — химические передатчики информации между клетками и органами.",
          "Гормоны влияют практически на каждую клетку организма, управляя настроением, ростом, обменом веществ и размножением."
        ],
        "highlightBox": {
          "title": "Gormonlar — Tana xabarchilari",
          "titleUz": "Gormonlar — Tana xabarchilari",
          "titleRu": "Гормоны — почтальоны организма",
          "text": "Gormonlar qon orqali yetib borib, hujayralarga qachon o‘sishni, qachon energiya sarflashni va qachon dam olishni buyuradi.",
          "textUz": "Gormonlar qon orqali yetib borib, hujayralarga qachon o‘sishni, qachon energiya sarflashni va qachon dam olishni buyuradi.",
          "textRu": "Гормоны разносятся кровью и дают клеткам четкие команды: когда расти, вырабатывать энергию или отдыхать.",
          "type": "info"
        }
      },
      {
        "title": "Major Glands: Pituitary, Thyroid & Pancreas",
        "titleUz": "Asosiy bezlar: Gipofiz, Qalqonsimon bez va Oshqozon osti bezi",
        "titleRu": "Главные железы: Гипофиз, щитовидная и поджелудочная",
        "paragraphs": [
          "Pituitary: 'Master gland' controlling growth hormones, thyroid stimulation, and body water balance.",
          "Thyroid: Makes thyroxine to set the speed at which cells burn fuel from food to make energy.",
          "Pancreas: Secretes insulin to store and supply glucose energy for muscles and organs.",
          "Adrenals: Produce adrenaline for fight-or-flight energy under stress."
        ],
        "paragraphsUz": [
          "Gipofiz: Bo‘y o‘sishi, qalqonsimon bez faoliyati va suv muvozanatini boshqaruvchi 'bosh bez'.",
          "Qalqonsimon bez: Tiroksin gormonini ishlab chiqarib, hujayralarning ozuqadan quvvat hosil qilish tezligini (metabolizm) nazorat qiladi.",
          "Oshqozon osti bezi: Insulin ajratib, qondagi glyukoza (shakar) miqdorini doimo me’yorda saqlaydi.",
          "Buyrak usti bezlari: Xavf-xatar paytida adrenalin ajratib, mushaklarga qo‘shimcha quvvat beradi."
        ],
        "paragraphsRu": [
          "Гипофиз: 'Главная железа', координирующая выработку гормонов роста и водный баланс.",
          "Щитовидная железа: Вырабатывает тироксин, регулирующий скорость сжигания калорий и обмен веществ.",
          "Поджелудочная железа: Выделяет инсулин для усвоения глюкозы клетками.",
          "Надпочечники: Вырабатывают адреналин при стрессе для мгновенной мобилизации сил."
        ]
      }
    ],
    "funFacts": [
      {
        "en": "The pituitary gland is no bigger than a pea, yet it controls growth throughout your whole body!",
        "uz": "Gipofiz bezi bor-yo‘g‘i bir dona no‘xatdek keladi, ammo butun tanadagi bo‘y o‘sishini boshqaradi!",
        "ru": "Гипофиз размером с горошину, но управляет ростом всех костей и мышц человека!"
      },
      {
        "en": "The pineal gland makes melatonin only when your surroundings become dark, easing you into deep sleep.",
        "uz": "Epifiz bezi faqat xona qorong‘ilashganda melatonin ajratadi va sizni shirin uyquga kiritadi.",
        "ru": "Эпифиз вырабатывает мелатонин только в темноте, помогая погрузиться в глубокий сон."
      }
    ],
    "takeaways": [
      {
        "en": "Glands release hormones into the blood to control growth and energy.",
        "uz": "Bezlar qonga gormonlar chiqarib, o‘sish va quvvatni boshqaradi.",
        "ru": "Железы выделяют гормоны в кровь для управления ростом и энергией."
      },
      {
        "en": "Active exercise and healthy food keep insulin and metabolism in balance.",
        "uz": "Jismoniy faollik va to‘g‘ri ovqatlanish insulin va metabolizmni me’yorda tutadi.",
        "ru": "Физическая активность и сбалансированное питание поддерживают баланс инсулина."
      }
    ],
    "quiz": [
      {
        "question": "Which gland is known as the 'master gland' of the endocrine system?",
        "questionUz": "Endokrin tizimining 'bosh bezi' deb qaysi a’zo ataladi?",
        "questionRu": "Какая железа называется 'главной железой' эндокринной системы?",
        "options": [
          "Thyroid",
          "Pituitary",
          "Adrenal",
          "Pancreas"
        ],
        "optionsUz": [
          "Qalqonsimon bez",
          "Gipofiz bezi (Pituitary)",
          "Buyrak usti bezi",
          "Oshqozon osti bezi"
        ],
        "optionsRu": [
          "Щитовидная железа",
          "Гипофиз (Pituitary)",
          "Надпочечник",
          "Поджелудочная железа"
        ],
        "correctIndex": 1,
        "explanation": "The pituitary gland produces hormones that control many other glands.",
        "explanationUz": "Gipofiz bezi boshqa barcha bezlarga yo‘naltiruvchi gormonlarni ishlab chiqaradi.",
        "explanationRu": "Гипофиз вырабатывает тропные гормоны, управляющие активностью остальных желез.",
        "xpReward": 10
      },
      {
        "question": "What hormone regulates blood sugar levels in the human body?",
        "questionUz": "Inson qonidagi qand miqdorini qaysi gormon boshqaradi?",
        "questionRu": "Какой гормон регулирует уровень сахара в крови?",
        "options": [
          "Adrenaline",
          "Insulin",
          "Melatonin",
          "Thyroxine"
        ],
        "optionsUz": [
          "Adrenalin",
          "Insulin",
          "Melatonin",
          "Tiroksin"
        ],
        "optionsRu": [
          "Адреналин",
          "Инсулин",
          "Мелатонин",
          "Тироксин"
        ],
        "correctIndex": 1,
        "explanation": "Insulin made by the pancreas moves glucose from blood into body cells.",
        "explanationUz": "Oshqozon osti bezi ishlab chiqaradigan insulin glyukozani hujayralarga yetkazadi.",
        "explanationRu": "Инсулин обеспечивает поступление глюкозы из крови в клетки организма.",
        "xpReward": 10
      },
      {
        "question": "Which butterfly-shaped gland in the neck regulates metabolism?",
        "questionUz": "Bo‘yinda kapalak shaklida joylashgan va moddalar almashinuvini boshqaruvchi bez qaysi?",
        "questionRu": "Какая железа на шее в форме бабочки регулирует скорость метаболизма?",
        "options": [
          "Thyroid gland",
          "Thymus",
          "Pineal gland",
          "Spleen"
        ],
        "optionsUz": [
          "Qalqonsimon bez (Thyroid)",
          "Timus bezi",
          "Epifiz bezi",
          "Taloq"
        ],
        "optionsRu": [
          "Щитовидная железа (Thyroid)",
          "Тимус",
          "Эпифиз",
          "Селезенка"
        ],
        "correctIndex": 0,
        "explanation": "The thyroid produces thyroxine which regulates how fast cells burn energy.",
        "explanationUz": "Qalqonsimon bez hujayralarning quvvat hosil qilish tezligini boshqaradi.",
        "explanationRu": "Щитовидная железа вырабатывает тироксин, задающий темп обмена веществ.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "eyes",
    "slug": "kozlarning-tuzilishi-va-korish-qobiliyati",
    "title": "Eyes — How Vision & the Eyes Work",
    "titleUz": "Ko‘zlar: Dunyoni ko‘rish mo‘jizasi va ko‘zning tuzilishi",
    "titleRu": "Глаза: Как устроено зрение и анатомия глаза",
    "subtitle": "From eyelids to retina, rods and cones: explore how ping-pong ball-sized eyes capture millions of colors.",
    "subtitleUz": "Qovoqlardan to to‘r parda (retina) va rang sezuvchi hujayralargacha: ko‘z qanday ishlashini bilib oling.",
    "subtitleRu": "От век до сетчатки, палочек и колбочек: как глаза размером с шарик для пинг-понга различают миллионы цветов.",
    "system": "Sensory System",
    "systemUz": "Sezgi a’zolari (Ko‘rish tizimi)",
    "systemRu": "Органы чувств (Зрительная система)",
    "category": "vision",
    "isPremium": true,
    "readingMinutes": 5,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/eyes.gif",
    "diagramImage": "/body basics/eyes.gif",
    "pronunciations": [
      {
        "term": "Sclera",
        "phonetic": "SKLAIR-uh",
        "meaningUz": "Sklera — ko‘z olmasining oq, mustahkam tashqi himoya qobig‘i.",
        "meaningEn": "The tough white outer coat of the eyeball.",
        "meaningRu": "Склера — плотная белая оболочка глаза, выполняющая защитную функцию."
      },
      {
        "term": "Cornea",
        "phonetic": "KOR-nee-uh",
        "meaningUz": "Shox parda — ko‘z oldidagi tiniq, shaffof gumbazsimon deraza.",
        "meaningEn": "The transparent dome at the front of the eye focusing incoming light.",
        "meaningRu": "Роговица — прозрачная выпуклая оболочка в передней части глаза, преломляющая свет."
      },
      {
        "term": "Retina",
        "phonetic": "RET-i-nuh",
        "meaningUz": "To‘r parda — ko‘z orqasidagi millionlab yorug‘lik sezuvchi hujayralar ekrani.",
        "meaningEn": "The light-sensitive screen at the back of the eyeball with rods and cones.",
        "meaningRu": "Сетчатка — светочувствительная внутренняя оболочка глаза с палочками и колбочками."
      },
      {
        "term": "Iris",
        "phonetic": "EYE-riss",
        "meaningUz": "Kamalak parda — ko‘zga rang beruvchi va qorachiq hajmini o‘zgartiruvchi qism.",
        "meaningEn": "The colored circle of the eye with muscles controlling pupil size.",
        "meaningRu": "Радужка — цветная диафрагма глаза, регулирующая размер зрачка."
      }
    ],
    "sections": [
      {
        "title": "Ping-Pong Ball Sized Wonder",
        "titleUz": "Ping-pong koptogidek ajoyib a’zo",
        "titleRu": "Чудо размером с мячик для пинг-понга",
        "paragraphs": [
          "Your eyes are at work from the moment you wake up to the moment you close them. They take in shapes, colors, and motion, sending signals to the brain.",
          "Each eye is about as big as a ping-pong ball and rests safely inside a protective bony socket in the skull.",
          "Eyelids and eyelashes protect the eye from dust and bright glare through reflexive blinking."
        ],
        "paragraphsUz": [
          "Ko‘zlarimiz uyg‘ongan lahzamizdan boshlab to uyquga ketguncha tinimsiz ishlaydi. Ular shakllar, ranglar va harakatlarni qabul qilib, miyaga signallar yuboradi.",
          "Har bir ko‘zimiz stol tennisi koptogidek hajmda bo‘lib, kalla suyagidagi maxsus suyak chuqurchasida xavfsiz joylashgan.",
          "Qovoqlar va kipriklar doimiy ko‘z qisish orqali ko‘zni changdan tozalab, namlab turadi."
        ],
        "paragraphsRu": [
          "Глаза непрерывно передают в мозг информацию о формах, оттенках и движении окружающего мира.",
          "Каждый глаз размером примерно с шарик для настольного тенниса и надежно защищен глазницей черепа.",
          "Веки и ресницы при помощи мигания очищают глаз от пыли и поддерживают влажность."
        ]
      },
      {
        "title": "Cornea, Lens, Rods and Cones",
        "titleUz": "Shox parda, gavhar va to‘r parda sirlari",
        "titleRu": "Роговица, хрусталик, палочки и колбочки",
        "paragraphs": [
          "The clear cornea and lens focus light rays onto the retina at the back.",
          "The retina contains 120 million rods (for night and gray vision) and 7 million cones (detecting red, green, and blue).",
          "The optic nerve acts as a superfast communication cable transmitting images directly to the brain."
        ],
        "paragraphsUz": [
          "Tiniq shox parda va ko‘z gavhari yorug‘lik nurlarini to‘g‘ri orqa to‘r pardaga fokuslaydi.",
          "To‘r pardada 120 millionta tayoqchasimon (qorong‘ida ko‘ruvchi) va 7 millionta kolbajasimon (ranglarni ajratuvchi) hujayralar mavjud.",
          "Ko‘rish nervi bu millionlab ma’lumotlarni chaqmoq tezligida miyaga yetkazadi."
        ],
        "paragraphsRu": [
          "Прозрачная роговица и хрусталик фокусируют пучки света точно на сетчатку.",
          "Сетчатка содержит около 120 миллионов палочек (сумеречное зрение) и 7 миллионов колбочек (цветное зрение).",
          "Зрительный нерв передает миллионы сигналов в зрительную кору мозга с максимальной скоростью."
        ],
        "highlightBox": {
          "title": "Ko‘zni asrash qoidalari",
          "titleUz": "Ko‘zni asrash qoidalari",
          "titleRu": "Правила защиты зрения",
          "text": "Quyoshli kunda ultrabinafsha nurlardan himoyalovchi ko‘zoynak taqing, telefon va kompyuter qarshisida har 20 daqiqada uzoqqa qarab ko‘zni dam oldiring!",
          "textUz": "Ko‘zni asrash qoidalari: Quyoshli kunda ultrabinafsha nurlardan himoyalovchi ko‘zoynak taqing, telefon va kompyuter qarshisida har 20 daqiqada uzoqqa qarab ko‘zni dam oldiring!",
          "textRu": "В солнечные дни носите очки с УФ-защитой, а при работе за экраном каждые 20 минут делайте паузу и смотрите вдаль!",
          "type": "tip"
        }
      }
    ],
    "funFacts": [
      {
        "en": "Each human eye contains around 120 million rods and 7 million color-sensitive cones!",
        "uz": "Har bir inson ko‘zida 120 million tayoqcha va 7 million rang sezuvchi kolbaja hujayralari bor!",
        "ru": "В каждом глазу человека около 120 миллионов палочек и 7 миллионов колбочек!"
      },
      {
        "en": "Your eye muscles move more than 100,000 times a day — the hardest working muscles in the body!",
        "uz": "Ko‘z mushaklari kuniga 100 000 martadan ortiq harakatlanadi — tanadagi eng faol mushaklar!",
        "ru": "Глазные мышцы совершают более 100 000 движений в день, являясь самыми быстрыми в организме!"
      }
    ],
    "takeaways": [
      {
        "en": "Cornea and lens focus light like a camera lens onto the retina.",
        "uz": "Shox parda va gavhar yorug‘likni fotoapparat linzasi kabi to‘r pardaga tushiradi.",
        "ru": "Роговица и хрусталик фокусируют свет на сетчатке подобно объективу камеры."
      },
      {
        "en": "The optic nerve sends pictures to your brain as electrical impulses.",
        "uz": "Ko‘rish nervi tasvirlarni miyaga elektr signallari ko‘rinishida uzatadi.",
        "ru": "Зрительный нерв передает увиденное в мозг в виде нервных импульсов."
      }
    ],
    "quiz": [
      {
        "question": "Which part of the eye gives it its distinctive color (brown, blue, or green)?",
        "questionUz": "Ko‘zga uning rangini (jigarrang, ko‘k, yashil) beruvchi qismi nima deb ataladi?",
        "questionRu": "Какая часть глаза придает ему характерный цвет (карий, голубой, зеленый)?",
        "options": [
          "Sclera",
          "Iris",
          "Cornea",
          "Retina"
        ],
        "optionsUz": [
          "Sklera",
          "Kamalak parda (Iris)",
          "Shox parda",
          "To‘r parda"
        ],
        "optionsRu": [
          "Склера",
          "Радужка (Iris)",
          "Роговица",
          "Сетчатка"
        ],
        "correctIndex": 1,
        "explanation": "The iris is the colorful circle with muscles controlling pupil size.",
        "explanationUz": "Kamalak parda ko‘z rangini belgilaydi va qorachiqni kengaytirib-toraytiradi.",
        "explanationRu": "Радужка содержит пигмент, определяющий цвет глаз, и меняет диаметр зрачка.",
        "xpReward": 10
      },
      {
        "question": "Which photoreceptor cells in the retina detect colors?",
        "questionUz": "To‘r pardada ranglarni ajratish uchun qaysi hujayralar xizmat qiladi?",
        "questionRu": "Какие клетки сетчатки отвечают за распознавание цветов?",
        "options": [
          "Rods",
          "Cones",
          "Cilia",
          "Platelets"
        ],
        "optionsUz": [
          "Tayoqchalar",
          "Kolbajalar (Cones)",
          "Tukchalar",
          "Trombotsitlar"
        ],
        "optionsRu": [
          "Палочки",
          "Колбочки (Cones)",
          "Реснички",
          "Тромбоциты"
        ],
        "correctIndex": 1,
        "explanation": "7 million cones detect red, green, and blue colors in bright light.",
        "explanationUz": "7 million kolbaja hujayralari qizil, yashil va ko‘k nurlarni qabul qiladi.",
        "explanationRu": "Около 7 миллионов колбочек обеспечивают дневное цветное зрение.",
        "xpReward": 10
      },
      {
        "question": "What is the function of tears produced by the lacrimal glands?",
        "questionUz": "Ko‘z yoshi bezlari ajratadigan ko‘z yoshlarining asosiy vazifasi nima?",
        "questionRu": "Какова главная функция слезной жидкости?",
        "options": [
          "To clean, moisten, and wash away germs from the eye",
          "To change eye color",
          "To block all light",
          "To increase pupil size"
        ],
        "optionsUz": [
          "Ko‘zni tozalash, namlash va mikroblarni yuvib tashlash",
          "Ko‘z rangini o‘zgartirish",
          "Barcha yorug‘likni to‘sish",
          "Qorachiqni kattalashtirish"
        ],
        "optionsRu": [
          "Очищение, увлажнение и защита глаза от бактерий",
          "Изменение цвета глаз",
          "Полная блокировка света",
          "Расширение зрачка"
        ],
        "correctIndex": 0,
        "explanation": "Tears constantly lubricate the eye and wash away dust particles.",
        "explanationUz": "Ko‘z yoshi ko‘zni quruqlikdan asraydi va mikroblarga qarshi fermentlarga ega.",
        "explanationRu": "Слезы непрерывно увлажняют роговицу и вымывают инородные частицы.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "heart-circulatory",
    "slug": "yurak-va-qon-aylanish-tizimi",
    "title": "Heart & Circulatory System — The Ultimate Pump",
    "titleUz": "Yurak va qon aylanish tizimi: Hayotiy nasos va tomirlar tarmog‘i",
    "titleRu": "Сердце и кровеносная система: Главный насос жизни",
    "subtitle": "Learn how 4 chambers, electrical pacemaker nodes, arteries, and veins deliver oxygenated blood to trillions of cells.",
    "subtitleUz": "Yurakning 4 kamerasi, sinus tuguni hamda arteriya va venalar tanamizga qanday qilib hayot ulashishini o‘rganing.",
    "subtitleRu": "Как 4 камеры сердца, природный кардиостимулятор, артерии и вены доставляют кислород триллионам клеток.",
    "system": "Circulatory System",
    "systemUz": "Yurak-qon tomir tizimi",
    "systemRu": "Кровеносная система",
    "category": "circulatory",
    "isPremium": true,
    "readingMinutes": 5,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/heart.png",
    "diagramImage": "/body basics/heart.png",
    "pronunciations": [
      {
        "term": "Systole",
        "phonetic": "SISS-tuh-lee",
        "meaningUz": "Sistola — yurak qorinchalarining qisqarib, qonni tomirlarga haydash fazasi.",
        "meaningEn": "The contraction phase when ventricles pump blood out.",
        "meaningRu": "Систола — фаза сокращения желудочков сердца и выброса крови в сосуды."
      },
      {
        "term": "Diastole",
        "phonetic": "die-AS-tuh-lee",
        "meaningUz": "Diastola — yurak mushaklarining bo‘shashib, yana qonga to‘lish fazasi.",
        "meaningEn": "The relaxation phase when the heart refills with blood.",
        "meaningRu": "Диастола — фаза расслабления сердечной мышцы и наполнения камер кровью."
      },
      {
        "term": "Aorta",
        "phonetic": "ay-OR-tuh",
        "meaningUz": "Aorta — inson tanasidagi eng yirik arteriya qon tomiri.",
        "meaningEn": "The largest artery carrying oxygen-rich blood from heart to body.",
        "meaningRu": "Аорта — крупнейшая артерия тела, несущая обогащенную кислородом кровь."
      }
    ],
    "sections": [
      {
        "title": "The Unstoppable Pump",
        "titleUz": "Tinimsiz ishlovchi mo‘jizaviy nasos",
        "titleRu": "Неутомимый насос жизни",
        "paragraphs": [
          "The heart is an organ that’s a pump, usually beating about 60 to 100 times per minute. With each heartbeat, the heart sends blood throughout your body, carrying oxygen to every cell.",
          "After delivering the oxygen, the blood returns to the heart. The heart then sends the blood to the lungs to pick up more oxygen. This cycle repeats over and over again."
        ],
        "paragraphsUz": [
          "Yurak — bu mushakli ajoyib nasos bo‘lib, daqiqasiga 60 dan 100 martagacha uradi. Har bir urishda u butun tana bo‘ylab qon haydab, trillionlab hujayralarga kislorod yetkazadi.",
          "Kislorodni topshirgach, qon yana yurakka qaytadi va o‘pkaga jo‘natiladi. Ushbu hayotiy aylana bir soniya ham to‘xtovsiz davom etadi."
        ],
        "paragraphsRu": [
          "Сердце — это мышечный насос, сокращающийся от 60 до 100 раз в минуту и снабжающий клетки кислородом.",
          "Отдав кислород, кровь возвращается в сердце, которое направляет ее в легкие для насыщения, повторяя этот цикл непрерывно."
        ]
      },
      {
        "title": "Chambers, Valves & Electrical Beats",
        "titleUz": "Kameralar, klapanlar va elektr ritmi",
        "titleRu": "Камеры, клапаны и электрические импульсы",
        "paragraphs": [
          "The four chambers: Right and left atria (receive blood), right and left ventricles (pump blood out).",
          "Heart valves keep blood flowing in one direction only. Their closing creates the signature 'lub-dub' sound.",
          "The sinoatrial (sinus) node in the right atrium is the natural pacemaker setting the rhythm."
        ],
        "paragraphsUz": [
          "To‘rtta kamera: O‘ng va chap bo‘lmachalar (qonni qabul qiladi), o‘ng va chap qorinchalar (qonni haydaydi).",
          "Klapanlar qonning faqat bir yo‘nalishda oqishini ta’minlaydi va yopilganda 'lub-dub' ovozini hosil qiladi.",
          "O‘ng bo‘lmachadagi sinus tuguni yurakning tabiiy elektr stansiyasi hisoblanadi."
        ],
        "paragraphsRu": [
          "Четыре камеры: правое и левое предсердия принимают кровь, а желудочки выталкивают ее в сосуды.",
          "Клапаны сердца предотвращают обратный ток крови, а их захлопывание создает знакомый звук сердечного ритма.",
          "Синусовый узел выступает естественным водителем ритма, генерирующим электрические импульсы."
        ],
        "highlightBox": {
          "title": "Sog‘lom yurak qoidalari",
          "titleUz": "Sog‘lom yurak qoidalari",
          "titleRu": "Как укрепить сердце",
          "text": "Har kuni yuguring, suzing, meva va sabzavotlar iste’mol qiling hamda tamaki tutunidan mutlaqo uzoq turing!",
          "textUz": "Sog‘lom yurak qoidalari: Har kuni yuguring, suzing, meva va sabzavotlar iste’mol qiling hamda tamaki tutunidan mutlaqo uzoq turing!",
          "textRu": "Бегайте, плавайте, употребляйте свежие овощи и фрукты и полностью избегайте табачного дыма!",
          "type": "tip"
        }
      }
    ],
    "funFacts": [
      {
        "en": "Your heart pumps about 2,000 gallons of blood every day through your blood vessels!",
        "uz": "Yuragingiz har kuni tomirlar orqali taxminan 7 500 litr qon haydaydi!",
        "ru": "Сердце перекачивает около 7 500 литров крови ежедневно через сосудистую сеть!"
      }
    ],
    "takeaways": [
      {
        "en": "The heart pumps oxygen-rich blood through arteries to all organs.",
        "uz": "Yurak kislorodli qonni arteriyalar orqali barcha a’zolarga yetkazadi.",
        "ru": "Сердце качает обогащенную кислородом кровь по артериям ко всем органам."
      },
      {
        "en": "Valves ensure one-way blood flow and prevent backflow.",
        "uz": "Klapanlar qonning faqat to‘g‘ri yo‘nalishda oqishini ta’minlaydi.",
        "ru": "Клапаны обеспечивают строго однонаправленный ток крови."
      }
    ],
    "quiz": [
      {
        "question": "Which is the largest artery leaving the heart to supply the whole body?",
        "questionUz": "Yurakdan chiqib butun tanaga qon tarqatuvchi eng yirik arteriya qaysi?",
        "questionRu": "Какая самая крупная артерия выходит из сердца к органам тела?",
        "options": [
          "Aorta",
          "Pulmonary vein",
          "Vena cava",
          "Capillary"
        ],
        "optionsUz": [
          "Aorta",
          "O‘pka venasi",
          "Kovak vena",
          "Kapillyar"
        ],
        "optionsRu": [
          "Аорта",
          "Легочная вена",
          "Полая вена",
          "Капилляр"
        ],
        "correctIndex": 0,
        "explanation": "The aorta carries oxygenated blood directly from the left ventricle.",
        "explanationUz": "Aorta chap qorinchadan chiquvchi eng katta bosh qon tomiridir.",
        "explanationRu": "Аорта принимает насыщенную кислородом кровь из левого желудочка.",
        "xpReward": 10
      },
      {
        "question": "What is considered the natural pacemaker of the heart?",
        "questionUz": "Yurakning tabiiy elektr peysmeykeri nima deb ataladi?",
        "questionRu": "Что является естественным водителем ритма сердца?",
        "options": [
          "Sinus node (Sinoatrial node)",
          "Mitral valve",
          "Aortic valve",
          "Thoracic duct"
        ],
        "optionsUz": [
          "Sinus tuguni (Sinoatrial node)",
          "Mitral klapan",
          "Aorta klapani",
          "Ko‘krak yo‘li"
        ],
        "optionsRu": [
          "Синусовый узел (Sinoatrial node)",
          "Митральный клапан",
          "Аортальный клапан",
          "Грудной проток"
        ],
        "correctIndex": 0,
        "explanation": "The sinus node sets the contraction rhythm through electrical signals.",
        "explanationUz": "Sinus tuguni yurak qisqarish maromini belgilovchi elektr impulslarini hosil qiladi.",
        "explanationRu": "Синусовый узел генерирует электрические импульсы, задавая темп сокращений.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "respiratory-system",
    "slug": "opkalar-va-nafas-olish-tizimi",
    "title": "Lungs & Respiratory System — How Breathing Works",
    "titleUz": "O‘pkalar va nafas olish tizimi: Nafas olish qanday ishlaydi?",
    "titleRu": "Лёгкие и дыхательная система: Как мы дышим",
    "subtitle": "From nose and trachea to bronchial branches and millions of tiny alveoli: how oxygen enters your blood.",
    "subtitleUz": "Burun va traxeyadan to bronxlar hamda millionlab pufakchalar (alveolalar)gacha: havo qanday sayohat qiladi?",
    "subtitleRu": "От носа и трахеи до бронхов и миллионов микроскопических альвеол: путь кислорода в кровь.",
    "system": "Respiratory System",
    "systemUz": "Nafas olish tizimi",
    "systemRu": "Дыхательная система",
    "category": "respiratory",
    "isPremium": true,
    "readingMinutes": 5,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/throat.gif",
    "diagramImage": "/body basics/throat.gif",
    "pronunciations": [
      {
        "term": "Diaphragm",
        "phonetic": "DYE-uh-fram",
        "meaningUz": "Diafragma — o‘pka ostidagi gumbazsimon asosiy nafas mushagi.",
        "meaningEn": "The dome-shaped muscle beneath the lungs powering breathing.",
        "meaningRu": "Диафрагма — куполообразная мышца под легкими, обеспечивающая дыхание."
      },
      {
        "term": "Alveoli",
        "phonetic": "al-vee-OH-ly",
        "meaningUz": "Alveolalar — o‘pkadagi millionlab mayda pufakchalar, ularda gaz almashinuvi yuz beradi.",
        "meaningEn": "Tiny air sacs where oxygen enters blood and carbon dioxide leaves.",
        "meaningRu": "Альвеолы — микроскопические пузырьки в легких для газообмена."
      }
    ],
    "sections": [
      {
        "title": "What Is Respiration?",
        "titleUz": "Nafas olish (Respiratsiya) nima?",
        "titleRu": "Что такое дыхание?",
        "paragraphs": [
          "When we breathe, the respiratory system takes in oxygen and sends out carbon dioxide. Every living cell needs fresh oxygen to generate energy and stay alive.",
          "The diaphragm muscle moves down during inhalation to pull fresh air into the lungs, and moves up during exhalation to push carbon dioxide out."
        ],
        "paragraphsUz": [
          "Nafas olganimizda nafas tizimi kislorodni yutadi va karbonat angidridni chiqaradi. Tanamizdagi barcha hujayralar quvvat hosil qilish va yashash uchun kislorodga muhtoj.",
          "Nafas olganda diafragma pastga tushib havoni o‘pkaga tortadi, nafas chiqarganda esa yuqoriga ko‘tarilib havoni haydab chiqaradi."
        ],
        "paragraphsRu": [
          "При дыхании организм поглощает кислород и выводит углекислый газ, поддерживая жизнь клеток.",
          "Диафрагма опускается при вдохе для наполнения легких и поднимается при выдохе для удаления отработанного воздуха."
        ]
      }
    ],
    "funFacts": [
      {
        "en": "Your lungs contain roughly 300 to 500 million alveoli, providing a surface area as large as a tennis court!",
        "uz": "O‘pkangizda 300-500 millionta alveola bor — ularning umumiy yuzasi butun bir tennis kortidek keladi!",
        "ru": "В легких человека около 300–500 миллионов альвеол, чья площадь равна теннисному корту!"
      }
    ],
    "takeaways": [
      {
        "en": "Breathing delivers fresh oxygen to cells and removes carbon dioxide.",
        "uz": "Nafas olish hujayralarga kislorod beradi va karbonat angidridni chiqaradi.",
        "ru": "Дыхание снабжает клетки кислородом и удаляет углекислый газ."
      }
    ],
    "quiz": [
      {
        "question": "What tiny air sacs in the lungs perform the actual gas exchange?",
        "questionUz": "O‘pkada gaz almashinuvi aynan qaysi mitti havo pufakchalarida yuz beradi?",
        "questionRu": "В каких пузырьках легких происходит непосредственный газообмен?",
        "options": [
          "Alveoli",
          "Bronchi",
          "Diaphragm",
          "Cilia"
        ],
        "optionsUz": [
          "Alveolalar (Alveoli)",
          "Bronxlar",
          "Diafragma",
          "Tukchalar"
        ],
        "optionsRu": [
          "Альвеолы (Alveoli)",
          "Бронхи",
          "Диафрагма",
          "Реснички"
        ],
        "correctIndex": 0,
        "explanation": "Alveoli are surrounded by blood capillaries where oxygen diffuses in and CO2 diffuses out.",
        "explanationUz": "Alveolalar kapillyarlar bilan o‘ralgan bo‘lib, gaz almashinuvi ularda sodir bo‘ladi.",
        "explanationRu": "Альвеолы окружены сетью капилляров, через которые кислород поступает в кровь.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "lymphatic-system",
    "slug": "limfa-tizimi-tanamizning-himoya-qalqoni",
    "title": "The Lymphatic System — Body's Natural Defense",
    "titleUz": "Limfa tizimi: Tanamizning tabiiy himoya qalqoni",
    "titleRu": "Лимфатическая система: Естественный щит иммунитета",
    "subtitle": "Learn how lymph fluid, lymph nodes, T-cells, spleen, and bone marrow defend against viruses and balance fluids.",
    "subtitleUz": "Limfa suyuqligi, limfa tugunlari, T-hujayralar va taloq qanday qilib infektsiyalarga qarshi kurashishini bilib oling.",
    "subtitleRu": "Как лимфа, лимфоузлы, Т-клетки и селезенка борются с вирусами и поддерживают водный баланс.",
    "system": "Lymphatic & Immune",
    "systemUz": "Limfa va immunitet tizimi",
    "systemRu": "Лимфатическая и иммунная система",
    "category": "immune",
    "isPremium": true,
    "readingMinutes": 5,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/lymphatic-system.svg",
    "diagramImage": "/body basics/lymphatic-system.svg",
    "pronunciations": [
      {
        "term": "Lymphatic",
        "phonetic": "lim-FAT-ik",
        "meaningUz": "Limfatik — immunitet va tana suyuqliklari muvozanatini saqlovchi drenaj tizimi.",
        "meaningEn": "The specialized drainage and immune defense system of the body.",
        "meaningRu": "Лимфатическая система — специализированная дренажная и защитная система организма."
      },
      {
        "term": "Lymphocytes",
        "phonetic": "LIM-fuh-sites",
        "meaningUz": "Limfotsitlar — virus va bakteriyalarni yo‘q qiluvchi oq qon hujayralari.",
        "meaningEn": "White blood cells attacking germs and making antibodies.",
        "meaningRu": "Лимфоциты — белые клетки крови, уничтожающие микробы и вырабатывающие антитела."
      }
    ],
    "sections": [
      {
        "title": "What Is the Lymphatic System?",
        "titleUz": "Limfa tizimi nima?",
        "titleRu": "Что такое лимфатическая система?",
        "paragraphs": [
          "The lymphatic system is part of the immune system. It keeps body fluid levels in balance and defends against infections through lymph vessels, nodes, spleen, and thymus.",
          "If the lymphatic system didn't drain extra fluid leaking from blood capillaries, body tissues would swell severely."
        ],
        "paragraphsUz": [
          "Limfa tizimi immunitetning muhim qismi bo‘lib, to‘qimalardagi ortiqcha suyuqlikni qonga qaytaradi va infeksiyalardan himoya qiladi.",
          "Agar bu tizim bo‘lmaganida, to‘qimalarda ortiqcha suv to‘planib, tanamiz qattiq shishib ketgan bo‘lar edi."
        ],
        "paragraphsRu": [
          "Лимфатическая система отводит избыток тканевой жидкости и защищает организм от инфекций с помощью лимфоузлов, селезенки и тимуса.",
          "Без дренажа лимфатической системы ткани тела быстро подверглись бы тяжелым отекам."
        ]
      }
    ],
    "funFacts": [
      {
        "en": "You have roughly 600 bean-shaped lymph nodes filtering viruses throughout your body!",
        "uz": "Tanamiz bo‘ylab taxminan 600 ta loviyadek keladigan limfa filtrlari tarqalgan!",
        "ru": "В теле человека около 600 лимфоузлов, очищающих лимфу от вирусов и бактерий!"
      }
    ],
    "takeaways": [
      {
        "en": "Lymph nodes trap germs so white blood cells can destroy them.",
        "uz": "Limfa tugunlari mikroblarni tutib, ularni oq qon tanachalari orqali yo‘q qiladi.",
        "ru": "Лимфоузлы задерживают микробы, где их уничтожают белые кровяные клетки."
      }
    ],
    "quiz": [
      {
        "question": "Which white blood cells are primarily responsible for fighting infections in lymph nodes?",
        "questionUz": "Limfa tugunlarida infeksiyalarga qarshi kurashuvchi asosiy hujayralar qaysi?",
        "questionRu": "Какие белые клетки крови в лимфоузлах уничтожают бактерии и вирусы?",
        "options": [
          "Lymphocytes (T and B cells)",
          "Platelets",
          "Red blood cells",
          "Neurons"
        ],
        "optionsUz": [
          "Limfotsitlar (T va B hujayralar)",
          "Trombotsitlar",
          "Eritrotsitlar",
          "Neyronlar"
        ],
        "optionsRu": [
          "Лимфоциты (Т и В клетки)",
          "Тромбоциты",
          "Эритроциты",
          "Нейроны"
        ],
        "correctIndex": 0,
        "explanation": "Lymphocytes attack pathogens and generate disease-fighting antibodies.",
        "explanationUz": "Limfotsitlar mikroblarni yo‘q qiladi va antitanachalar ishlab chiqaradi.",
        "explanationRu": "Лимфоциты распознают антигены и вырабатывают специфические защитные антитела.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "puberty",
    "slug": "osmirlik-balogat-davri-va-ozgarishlar",
    "title": "Understanding Puberty — Growing Up for Boys & Girls",
    "titleUz": "O‘smirlik (balog‘at) davri: O‘g‘il va qiz bolalardagi tabiiy o‘zgarishlar",
    "titleRu": "Период полового созревания: Физические и эмоциональные изменения",
    "subtitle": "A supportive guide for kids and parents on physical, hormonal, and emotional milestones during puberty.",
    "subtitleUz": "O‘smirlar va ota-onalar uchun: balog‘at davridagi jismoniy, gormonal va ruhiy o‘zgarishlar bo‘yicha to‘liq qo‘llanma.",
    "subtitleRu": "Руководство для подростков и родителей о гормонах, скачках роста и взрослении.",
    "system": "Endocrine & Growth",
    "systemUz": "Endokrin va ulg‘ayish jarayoni",
    "systemRu": "Эндокринная система и рост",
    "category": "body-basics",
    "isPremium": true,
    "readingMinutes": 6,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/puberty-growth.svg",
    "diagramImage": "/body basics/puberty-growth.svg",
    "pronunciations": [
      {
        "term": "Puberty",
        "phonetic": "PYOO-bur-tee",
        "meaningUz": "Balog‘at davri — bolaning jismoniy va ruhiy jihatdan ulg‘ayib o‘smirga aylanish bosqichi.",
        "meaningEn": "The life stage when kids mature into young adults through physical changes.",
        "meaningRu": "Пубертат — период полового созревания и превращения подростка во взрослого человека."
      }
    ],
    "sections": [
      {
        "title": "When Does Puberty Start?",
        "titleUz": "Balog‘at davri qachon boshlanadi?",
        "titleRu": "Когда начинается половое созревание?",
        "paragraphs": [
          "Most females start between 8 and 13, and most males between 9 and 14 years old. Hormones from the brain trigger testes to make testosterone and ovaries to make estrogen.",
          "Body shape changes, voice deepens in boys, breast development begins in girls, and growth spurts occur naturally."
        ],
        "paragraphsUz": [
          "Qizlarda 8–13 yosh, o‘g‘il bolalarda esa 9–14 yosh oralig‘ida boshlanadi. Miyadagi gipofiz bezi testosteron va estrogen gormonlarini faollashtiradi.",
          "O‘g‘il bolalarda ovoz yo‘g‘onlashadi va bo‘y cho‘ziladi, qizlarda esa ko‘krak kurtaklari va tana qomati rivojlanadi."
        ],
        "paragraphsRu": [
          "У девочек процесс начинается в 8–13 лет, у мальчиков — в 9–14 лет под действием тестостерона и эстрогена.",
          "Меняются контуры тела, ломается голос у юношей, начинается рост молочных желез у девушек и наступает скачок роста."
        ]
      }
    ],
    "funFacts": [
      {
        "en": "During growth spurts in puberty, teenagers can grow as much as 4 inches in a single year!",
        "uz": "Balog‘at paytidagi tez o‘sish davrida o‘smirlar bir yilda 10 santimetrgacha bo‘y cho‘zishlari mumkin!",
        "ru": "Во время скачка роста подросток может вырасти до 10 сантиметров всего за один год!"
      }
    ],
    "takeaways": [
      {
        "en": "Puberty happens at a different natural pace for every single person.",
        "uz": "Har bir insonda balog‘at davri o‘zining tabiiy biologik vaqtida kechadi.",
        "ru": "Взросление происходит в индивидуальном темпе для каждого человека."
      }
    ],
    "quiz": [
      {
        "question": "Which hormone is primarily responsible for male changes during puberty?",
        "questionUz": "O‘g‘il bolalarning balog‘at davridagi o‘zgarishlari uchun qaysi gormon javobgar?",
        "questionRu": "Какой гормон отвечает за физические изменения у юношей в пубертате?",
        "options": [
          "Testosterone",
          "Estrogen",
          "Insulin",
          "Melatonin"
        ],
        "optionsUz": [
          "Testosteron",
          "Estrogen",
          "Insulin",
          "Melatonin"
        ],
        "optionsRu": [
          "Тестостерон",
          "Эстроген",
          "Инсулин",
          "Мелатонин"
        ],
        "correctIndex": 0,
        "explanation": "Testosterone promotes height, voice deepening, and muscle development.",
        "explanationUz": "Testosteron bo‘y o‘sishi, ovoz yo‘g‘onlashishi va mushaklar kuchayishini boshqaradi.",
        "explanationRu": "Тестостерон стимулирует рост мышц, мутацию голоса и развитие вторичных половых признаков.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "tonsillitis",
    "slug": "tonzillit-angina-tomoq-ogrigi-va-davolash",
    "title": "Tonsillitis — Causes, Symptoms, and Treatment",
    "titleUz": "Tonzillit (Angina): Tomoq og‘rig‘i, bezlar yallig‘lanishi va davolash",
    "titleRu": "Тонзиллит (Ангина): Причины, симптомы и лечение воспаления миндалин",
    "subtitle": "Why tonsils get swollen, how doctors diagnose strep throat, and simple ways to relieve sore throats.",
    "subtitleUz": "Murtak bezlari nega shishadi, tomoq og‘rig‘i belgilari, tezkor testlar va uyda parvarish qilish usullari.",
    "subtitleRu": "Почему воспаляются миндалины, как выявляют стрептококк и как безопасно лечить боль в горле.",
    "system": "Lymphatic & Throat",
    "systemUz": "Limfa va tomoq a’zolari",
    "systemRu": "Лимфатическая система и горло",
    "category": "immune",
    "isPremium": true,
    "readingMinutes": 4,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/throat.gif",
    "diagramImage": "/body basics/throat.gif",
    "pronunciations": [
      {
        "term": "Tonsillitis",
        "phonetic": "tahn-suh-LYE-tus",
        "meaningUz": "Tonzillit — tomoqdagi murtak bezlarining infeksiya tufayli yallig‘lanishi (angina).",
        "meaningEn": "Inflammation of the tonsils caused by a viral or bacterial infection.",
        "meaningRu": "Тонзиллит — воспаление небных миндалин вирусной или бактериальной природы."
      }
    ],
    "sections": [
      {
        "title": "What Is Tonsillitis?",
        "titleUz": "Tonzillit (Angina) nima?",
        "titleRu": "Что такое тонзиллит?",
        "paragraphs": [
          "Tonsillitis is an inflammation of the tonsils, usually caused by viruses or bacteria like Group A Streptococcus.",
          "Symptoms include red swollen tonsils, white coating, fever, difficulty swallowing, and swollen neck glands. Bacterial cases require completing full antibiotic prescriptions."
        ],
        "paragraphsUz": [
          "Tonzillit — tomoq murtaklarining virus yoki streptokokk bakteriyasi tufayli qizarib shishishi va og‘rishi.",
          "Belgilari: tomoq og‘rig‘i, yutinish qiyinligi, isitma va bo‘yin bezlarining kattalashishi. Bakteriyali holatlarda antibiotik kursini to‘liq yakunlash zarur."
        ],
        "paragraphsRu": [
          "Тонзиллит — это воспаление миндалин, вызываемое вирусами или стрептококками группы А.",
          "Проявляется болью в горле, увеличением лимфоузлов на шее, налетом на гландах и температурой. При бактериальной инфекции обязателен полный курс антибиотиков."
        ]
      }
    ],
    "funFacts": [
      {
        "en": "Tonsils are positioned like security guards right at the entry of your throat to catch airborne germs!",
        "uz": "Murtaklar xuddi soqchilar kabi og‘iz va nafas yo‘llarining kirish darvozasida turishadi!",
        "ru": "Миндалины расположены как пограничники у входа в глотку, перехватывая микробы!"
      }
    ],
    "takeaways": [
      {
        "en": "Always finish prescribed antibiotics for strep throat to protect the heart and kidneys.",
        "uz": "Bakteriyali anginada yurak va buyrakni asrash uchun antibiotikni oxirigacha ichish shart.",
        "ru": "Всегда допивайте курс антибиотиков при ангине, чтобы не допустить осложнений на сердце."
      }
    ],
    "quiz": [
      {
        "question": "Why is it critical to finish all doses of antibiotics prescribed for strep throat?",
        "questionUz": "Nima uchun streptokokkli anginada antibiotik kursini to‘liq tugatish shart?",
        "questionRu": "Почему необходимо до конца пропить курс антибиотиков при стрептококковой ангине?",
        "options": [
          "To prevent complications like rheumatic fever and kidney disease",
          "To make teeth grow faster",
          "To change voice pitch",
          "To stop drinking liquids"
        ],
        "optionsUz": [
          "Revmatizm va buyrak kasalliklari kabi xavfli asoratlarning oldini olish uchun",
          "Tishlar tezroq chiqishi uchun",
          "Ovozni o‘zgartirish uchun",
          "Suv ichmaslik uchun"
        ],
        "optionsRu": [
          "Чтобы предотвратить тяжелые осложнения на сердце (ревматизм) и почки",
          "Для быстрого роста зубов",
          "Для изменения тембра голоса",
          "Чтобы перестать пить воду"
        ],
        "correctIndex": 0,
        "explanation": "Stopping early can let remaining bacteria cause rheumatic fever which damages the heart.",
        "explanationUz": "Antibiotik chala to‘xtatilsa, omon qolgan bakteriyalar yurak klapanlariga zarar yetkazishi mumkin.",
        "explanationRu": "Преждевременная отмена антибиотика чревата развитием ревматической лихорадки с поражением сердца.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "appendicitis",
    "slug": "appenditsit-belgilari-tashxisi-va-davolash",
    "title": "Appendicitis in Kids & Teens — What Every Parent Should Know",
    "titleUz": "Appenditsit: Bolalar va o‘smirlarda belgilari, tashxisi va davolash",
    "titleRu": "Аппендицит у детей и подростков: Симптомы, диагностика и лечение",
    "subtitle": "Recognizing emergency belly pain, shifting pain from the belly button to lower right abdomen, and appendectomy surgery.",
    "subtitleUz": "Kindik atrofidan o‘ng tomonga ko‘chuvchi qorin og‘rig‘i, appenditsitning xavfli belgilari va shoshilinch yordam.",
    "subtitleRu": "Опасная боль в животе, смещающаяся от пупка в правую сторону, и лапароскопическая аппендэктомия.",
    "system": "Digestive & Lymphatic",
    "systemUz": "Hazm va limfa a’zolari",
    "systemRu": "Органы пищеварения и лимфа",
    "category": "digestive",
    "isPremium": true,
    "readingMinutes": 5,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/appendicitis-400x400-rd1-enIL.gif",
    "diagramImage": "/body basics/appendicitis-400x400-rd1-enIL.gif",
    "pronunciations": [
      {
        "term": "Appendicitis",
        "phonetic": "uh-pen-di-SYE-tis",
        "meaningUz": "Appenditsit — qorinning pastki o‘ng tomonidagi ko‘richak o‘simtasining shoshilinch yallig‘lanishi.",
        "meaningEn": "Acute inflammation of the appendix requiring immediate medical care.",
        "meaningRu": "Аппендицит — острое воспаление червеобразного отростка слепой кишки."
      }
    ],
    "sections": [
      {
        "title": "What Is Appendicitis?",
        "titleUz": "Appenditsit nima va u nega xavfli?",
        "titleRu": "Что такое аппендицит?",
        "paragraphs": [
          "Appendicitis is a medical emergency when the small appendix tube off the large intestine gets blocked and inflamed.",
          "Pain starts around the belly button and shifts to the lower right abdomen, worsening when walking or coughing. Never give painkillers or hot compresses before a doctor examines the child."
        ],
        "paragraphsUz": [
          "Appenditsit — bu ko‘richak chuvalchangsimon o‘simtasining shoshilinch yallig‘lanishi bo‘lib, tezkor shifokor yordamini talab qiladi.",
          "Og‘riq kindikdan boshlanib qorinning pastki o‘ng tomoniga ko‘chadi. Shifokor ko‘rmaguncha og‘riq qoldiruvchi dori bermang va issiq qo‘ymang!"
        ],
        "paragraphsRu": [
          "Аппендицит — неотложное хирургическое состояние при закупорке и воспалении аппендикса.",
          "Боль начинается вокруг пупка и смещается в правую нижнюю часть живота, усиливаясь при ходьбе. До осмотра врача нельзя давать обезболивающие или грелку!"
        ]
      }
    ],
    "funFacts": [
      {
        "en": "Laparoscopic appendectomy requires only three tiny keyhole cuts instead of a large incision!",
        "uz": "Bugungi kunda laparoskopiya orqali operatsiya katta kesmasiz, atigi 3 ta kichik nuqta orqali xavfsiz bajariladi!",
        "ru": "Лапароскопическая операция проводится всего через три крошечных прокола без больших разрезов!"
      }
    ],
    "takeaways": [
      {
        "en": "Belly pain moving to the lower right side needs immediate emergency hospital evaluation.",
        "uz": "Qorinning pastki o‘ng qismidagi doimiy og‘riqda zudlik bilan shifoxonaga murojaat qiling.",
        "ru": "Боль, сместившаяся в правую подвздошную область, требует срочного обращения к хирургу."
      }
    ],
    "quiz": [
      {
        "question": "Where does the pain of acute appendicitis typically settle?",
        "questionUz": "Appenditsit og‘rig‘i odatda qorinning qaysi sohasiga ko‘chib kuchayadi?",
        "questionRu": "В какую область живота обычно смещается боль при аппендиците?",
        "options": [
          "Lower right abdomen",
          "Upper left chest",
          "Behind the neck",
          "Left knee"
        ],
        "optionsUz": [
          "Qorinning pastki o‘ng sohasiga",
          "Chap ko‘krak qismiga",
          "Bo‘yin orqasiga",
          "Chap tizzaga"
        ],
        "optionsRu": [
          "В правую нижнюю часть живота",
          "В левую часть груди",
          "В шею",
          "В колено"
        ],
        "correctIndex": 0,
        "explanation": "Appendicitis pain characteristically migrates to the right lower quadrant of the abdomen.",
        "explanationUz": "Appenditsit og‘rig‘i kindikdan pastki o‘ng qoringa ko‘chadi.",
        "explanationRu": "Классический симптом аппендицита — миграция боли из эпигастрия в правую подвздошную зону.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "burp-digestive-system",
    "slug": "burp-ovqat-hazm-qilish-tizimi",
    "title": "\"Burp!\" — Why Do I Burp?",
    "titleUz": "\"Burp!\" — Nima uchun inson kekiradi?",
    "titleRu": "\"Отрыжка!\" — Почему мы срыгиваем воздух?",
    "subtitle": "Digestive System: Discover where that extra gas comes from and why burping is completely natural.",
    "subtitleUz": "Ovqat hazm qilish tizimi: Oshqozondagi ortiqcha gaz qayerdan paydo bo‘lishi va kekirish nega tabiiy holat ekanligini bilib oling.",
    "subtitleRu": "Пищеварительная система: Откуда берется лишний газ в желудке и почему отрыжка абсолютно естественна.",
    "system": "Digestive System",
    "systemUz": "Ovqat hazm qilish tizimi",
    "systemRu": "Пищеварительная система",
    "category": "digestive",
    "isPremium": false,
    "readingMinutes": 3,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/DigestiveSystem-enSS-1.jpg",
    "diagramImage": "/body basics/DigestiveSystem-enSS-1.jpg",
    "pronunciations": [
      {
        "term": "Esophagus",
        "phonetic": "ih-SAH-fuh-gus",
        "meaningUz": "Qizilo‘ngach — tomoqni oshqozon bilan bog‘lovchi muskulli ozuqa naychasi.",
        "meaningEn": "The muscular food tube connecting throat to stomach.",
        "meaningRu": "Пищевод — мышечная трубка, по которой пища поступает из глотки в желудок."
      },
      {
        "term": "Carbon dioxide",
        "phonetic": "KAR-bon dy-AHK-side",
        "meaningUz": "Karbonat angidrid — gazli ichimliklarga pufakchalar bag‘ishlovchi gaz.",
        "meaningEn": "Gas making soda drinks fizzy and bubbly.",
        "meaningRu": "Углекислый газ — газ, создающий пузырьки в газированных напитках."
      }
    ],
    "sections": [
      {
        "title": "Why Do I Burp?",
        "titleUz": "Nima uchun kekiramiz?",
        "titleRu": "Почему мы срыгиваем воздух?",
        "paragraphs": [
          "A burp is nothing but swallowed gas (nitrogen, oxygen, carbon dioxide) released from the stomach through the esophagus.",
          "Drinking soda or using a straw pulls in extra air, causing more burps. It is completely harmless and polite to cover your mouth."
        ],
        "paragraphsUz": [
          "Kekirish — bu oshqozonga tushgan ortiqcha havo va gazlarning qizilo‘ngach orqali chiqishidir.",
          "Gazli ichimliklar va naycha orqali ichish oshqozonga ko‘proq havo kiritadi. Kekirganda og‘izni to‘sib uzr so‘rash odoblilikdir."
        ],
        "paragraphsRu": [
          "Отрыжка — это естественный выход проглоченного воздуха и газов из желудка через пищевод.",
          "Газированные напитки и питье через трубочку увеличивают количество воздуха в желудке. Достаточно вежливо прикрыть рот и сказать 'извините'."
        ]
      }
    ],
    "funFacts": [
      {
        "en": "Normal air is 78% nitrogen and 21% oxygen — exactly what escapes in a natural burp!",
        "uz": "Biz yutadigan oddiy havo 78% azot va 21% kisloroddan iborat — kekirikda aynan shu gazlar chiqadi!",
        "ru": "Обычный воздух состоит на 78% из азота и 21% из кислорода — именно они выходят при отрыжке!"
      }
    ],
    "takeaways": [
      {
        "en": "Burping is simply your stomach releasing trapped swallowed air.",
        "uz": "Kekirish — oshqozonga tushgan ortiqcha havoning tabiiy yo‘l bilan chiqishidir.",
        "ru": "Отрыжка — это нормальное выделение лишнего проглоченного воздуха."
      }
    ],
    "quiz": [
      {
        "question": "What tube connects the back of the throat to the stomach?",
        "questionUz": "Tomoqni oshqozon bilan tutashtiruvchi ozuqa naychasi nima deyiladi?",
        "questionRu": "Какая мышечная трубка соединяет глотку с желудком?",
        "options": [
          "Esophagus",
          "Trachea",
          "Aorta",
          "Urethra"
        ],
        "optionsUz": [
          "Qizilo‘ngach (Esophagus)",
          "Traxeya",
          "Aorta",
          "Siydik yo‘li"
        ],
        "optionsRu": [
          "Пищевод (Esophagus)",
          "Трахея",
          "Аорта",
          "Уретра"
        ],
        "correctIndex": 0,
        "explanation": "The esophagus carries food and swallowed air directly into the stomach.",
        "explanationUz": "Qizilo‘ngach ovqat va havoni oshqozonga yetkazuvchi asosiy naychadir.",
        "explanationRu": "По пищеводу пища и проглоченный воздух поступают прямо в желудок.",
        "xpReward": 10
      }
    ]
  },
  {
    "id": "hiccups-body-basics",
    "slug": "hiqichoq-nima-va-u-qanday-paydo-boladi",
    "title": "Hiccups! — What Makes Me Hiccup?",
    "titleUz": "Hiqichoq: Diafragma mushagi va uni to‘xtatish sirlari",
    "titleRu": "Икота! — Почему человек икает и как успокоить диафрагму?",
    "subtitle": "Body Basics: Learn about the diaphragm muscle and simple kid-friendly ways to calm it down.",
    "subtitleUz": "Tana sirlari: Diafragma mushagi va hiqichoqni xavfsiz to‘xtatish usullari haqida.",
    "subtitleRu": "Секреты мышцы диафрагмы и безопасные детские способы остановить икоту.",
    "system": "Respiratory & Digestive",
    "systemUz": "Nafas va hazm a’zolari",
    "systemRu": "Дыхание и пищеварение",
    "category": "body-basics",
    "isPremium": true,
    "readingMinutes": 3,
    "medicallyReviewedBy": "KidsHealth Medical Experts",
    "reviewDate": "2026",
    "heroImage": "/body basics/throat.gif",
    "diagramImage": "/body basics/throat.gif",
    "pronunciations": [
      {
        "term": "Spasm",
        "phonetic": "SPAZ-um",
        "meaningUz": "Spazm — mushakning to‘satdan va ixtiyorsiz qisqarishi.",
        "meaningEn": "A sudden involuntary muscle contraction.",
        "meaningRu": "Спазм — внезапное непроизвольное сокращение мышцы."
      }
    ],
    "sections": [
      {
        "title": "The 'Hic!' Sound",
        "titleUz": "Kutilmagan 'Hiq!' tovushi",
        "titleRu": "Звук 'Ик!'",
        "paragraphs": [
          "Hiccups happen when your diaphragm spasms suddenly, sucking air in fast and snapping vocal cords shut with a 'Hic!'.",
          "Sipping cool water slowly or holding breath for a few seconds calms the diaphragm muscle."
        ],
        "paragraphsUz": [
          "Hiqichoq diafragma mushagi qitiqlanib to‘satdan qisqarganida yuz beradi va ovoz pardalari yopilib 'Hiq!' tovushi chiqadi.",
          "Bir necha qultum suvni sekin ichish yoki chuqur nafas olib ushlab turish diafragmani tinchlantiradi."
        ],
        "paragraphsRu": [
          "Икота возникает при резком спазме диафрагмы, из-за чего голосовые связки захлопываются со звуком 'Ик!'.",
          "Медленные глотки воды или небольшая задержка дыхания помогают диафрагме расслабиться."
        ]
      }
    ],
    "funFacts": [
      {
        "en": "Babies can actually hiccup inside the womb before birth!",
        "uz": "Chaqaloqlar tug‘ilishdan oldinroq, ona qornidaligidayoq hiqichoq tutishlari mumkin!",
        "ru": "Младенцы могут икать еще до рождения, находясь в утробе матери!"
      }
    ],
    "takeaways": [
      {
        "en": "Hiccups are harmless spasms of the diaphragm muscle beneath your lungs.",
        "uz": "Hiqichoq — diafragmaning vaqtinchalik va butunlay zararsiz qisqarishidir.",
        "ru": "Икота — это временный безвредный спазм диафрагмальной мышцы."
      }
    ],
    "quiz": [
      {
        "question": "Which muscle spasms to cause hiccups?",
        "questionUz": "Hiqichoq paytida qaysi mushak to‘satdan qisqaradi?",
        "questionRu": "Какая мышца спазмирует при возникновении икоты?",
        "options": [
          "Diaphragm",
          "Biceps",
          "Tongue",
          "Deltoid"
        ],
        "optionsUz": [
          "Diafragma mushagi",
          "Biceps",
          "Til mushagi",
          "Yelka mushagi"
        ],
        "optionsRu": [
          "Диафрагма",
          "Бицепс",
          "Язык",
          "Дельтовидная мышца"
        ],
        "correctIndex": 0,
        "explanation": "The diaphragm is the dome-shaped breathing muscle beneath the lungs.",
        "explanationUz": "Diafragma o‘pka ostida joylashgan nafas mushagidir.",
        "explanationRu": "Диафрагма разделяет грудную и брюшную полости и управляет ритмом дыхания.",
        "xpReward": 10
      }
    ]
  },
{
  "id": "the-spleen",
  "slug": "taloq-organi-va-immunitet-tizimi",
  "title": "The Spleen — Your Body's Blood Filter and Infection Defender",
  "titleUz": "Taloq: Qonni tozalovchi va infeksiyalardan himoya qiluvchi tana a’zosi",
  "titleRu": "Селезёнка — Главный фильтр крови и защитник от инфекций",
  "subtitle": "Discover the fist-sized organ that filters blood, fights germs, stores iron, and protects your body against infections.",
  "subtitleUz": "Qovurg‘alar ostida joylashgan, mushtdek keladigan taloq qonni qanday tozalaydi, bakteriyalarni qanday yo‘q qiladi va temir moddasini qanday saqlaydi?",
  "subtitleRu": "Как орган размером с кулак фильтрует кровь, уничтожает микробы, хранит железо и защищает организм от опасных инфекций.",
  "system": "Immune & Lymphatic System",
  "systemUz": "Immunitet va limfa tizimi",
  "systemRu": "Иммунная и лимфатическая система",
  "category": "immune",
  "isPremium": true,
  "readingMinutes": 5,
  "medicallyReviewedBy": "KidsHealth Medical Experts",
  "reviewDate": "2026",
  "heroImage": "/body basics/spleen.jpg",
  "diagramImage": "/body basics/spleen.jpg",
  "pronunciations": [
    {
      "term": "lymphatic",
      "phonetic": "lim-FAT-ik",
      "meaningUz": "Limfa tizimi — tanada suyuqlik muvozanatini saqlovchi va infeksiyalarga qarshi kurashuvchi tomirlar tarmog‘i.",
      "meaningEn": "The lymphatic system works to keep body fluid levels in balance and to defend the body against infections.",
      "meaningRu": "Лимфатическая система — сеть сосудов для поддержания баланса жидкости и защиты от инфекций."
    },
    {
      "term": "lymphocytes",
      "phonetic": "LIM-fuh-sites",
      "meaningUz": "Limfotsitlar — infeksiyalarni tanib olib, ularni yo‘q qiluvchi maxsus oq qon tanachalari (leykotsitlar).",
      "meaningEn": "Special white blood cells that attack and destroy germs.",
      "meaningRu": "Лимфоциты — особые белые клетки крови, уничтожающие микробы."
    },
    {
      "term": "macrophages",
      "phonetic": "MA-kruh-fages",
      "meaningUz": "Makrofaglar — qondagi eski hujayralar va xavfli mikroblarni yutib tozalovchi himoyachi hujayralar.",
      "meaningEn": "Cells that attack and destroy germs, and remove them from the blood that passes through the spleen.",
      "meaningRu": "Макрофаги — клетки-чистильщики, поглощающие бактерии и клеточный мусор."
    },
    {
      "term": "splenectomy",
      "phonetic": "splih-NEK-tuh-mee",
      "meaningUz": "Splenektomiya — jiddiy zararlangan yoki yorilgan taloqni jarrohlik yo‘li bilan olib tashlash operatsiyasi.",
      "meaningEn": "Surgery to remove an injured spleen.",
      "meaningRu": "Спленэктомия — хирургическая операция по удалению повреждённой селезёнки."
    }
  ],
  "sections": [
    {
      "title": "What Is the Spleen?",
      "titleUz": "Taloq nima va u qayerda joylashgan?",
      "titleRu": "Что такое селезёнка?",
      "paragraphs": [
        "The spleen is a fist-sized organ in the upper left part of the belly under the ribcage. It helps protect the body by clearing worn-out red blood cells and other foreign bodies (such as germs) from the bloodstream.",
        "The spleen is part of the lymphatic system, which is an extensive drainage network. The lymphatic (lim-FAT-ik) system works to keep body fluid levels in balance and to defend the body against infections. It is made up of a network of lymphatic vessels that carry lymph — a clear, watery fluid that contains proteins, salts, and other substances — throughout the body."
      ],
      "paragraphsUz": [
        "Taloq — bu qorinning yuqori chap qismida, qovurg‘alar ostida joylashgan mushtdek keladigan muhim a’zodir. U qon oqimidan eskirgan, yaroqsiz qizil qon tanachalarini (eritrotsitlar) hamda boshqa begona yot moddalarni (masalan, zararli mikroblar va bakteriyalarni) tozalab, tanamizni kasalliklardan himoya qilishga yordam beradi.",
        "Taloq keng tarmoqli drenaj tizimi hisoblangan limfa tizimining ajralmas qismidir. Limfa (lim-FAT-ik) tizimi organizmdagi suyuqlik miqdorining muvozanatini saqlash va tanani infeksiyalardan himoya qilish uchun uzluksiz ishlaydi. U butun tana bo‘ylab limfa deb ataladigan — oqsillar, tuzlar va boshqa hayotiy moddalarni o‘z ichiga olgan tiniq, suvsimon suyuqlikni tashiydigan limfa tomirlari tarmog‘idan tashkil topgan."
      ],
      "paragraphsRu": [
        "Селезёнка — это орган размером с кулак, расположенный в верхней левой части живота под ребрами. Она защищает организм, удаляя из кровотока старые разрушенные эритроциты и инородные частицы (например, микробы).",
        "Селезёнка является частью лимфатической системы — обширной дренажной сети организма. Лимфатическая система поддерживает баланс жидкости в теле и защищает от инфекций с помощью прозрачной жидкости (лимфы), текущей по сосудам."
      ],
      "highlightBox": {
        "title": "Anatomical Position",
        "titleUz": "Qovurg‘alar himoyasidagi qalqon",
        "titleRu": "Защита рёбрами",
        "text": "The ribcage safely shields the spleen from everyday bumps and bruises.",
        "textUz": "Qovurg‘alar taloqni kundalik mayda turtki va zarbalardan xuddi mustahkam suyakli qalqondek ishonchli asrab turadi.",
        "textRu": "Грудная клетка надежно защищает селезенку от ушибов и внешних воздействий.",
        "type": "info"
      }
    },
    {
      "title": "What Does the Spleen Do?",
      "titleUz": "Taloq qanday vazifalarni bajaradi?",
      "titleRu": "Каковы функции селезёнки?",
      "paragraphs": [
        "The spleen is an important part of the immune system. It acts as a filter, weeding out old and damaged cells.",
        "It helps control the amount of blood and blood cells that circulate in the body.",
        "It helps get rid of germs. The spleen has special white blood cells called lymphocytes (LIM-fuh-sites) and macrophages (MA-kruh-fages). These cells attack and destroy germs, and remove them from the blood that passes through the spleen.",
        "The body also uses the spleen as a place to store blood and iron for future use."
      ],
      "paragraphsUz": [
        "Taloq inson immun tizimining eng muhim va faol bo‘limlaridan biridir. U tanamizda quyidagi beqiyos vazifalarni amalga oshiradi:",
        "1. Tabiiy qon filtri: Qon oqimini doimiy suzib, eski, shakli buzilgan va shikastlangan qon hujayralarini ajratib oladi va ularni zararsizlantiradi.",
        "2. Qon aylanmasini nazorat qiladi: Organizmda aylanib yuradigan qonning umumiy hajmini hamda undagi hujayralar (eritrotsitlar va trombotsitlar) miqdorini me’yorda ushlab turadi.",
        "3. Mikroblar va viruslarni yo‘q qiladi: Taloq ichida limfotsitlar (LIM-fuh-sites) va makrofaglar (MA-kruh-fages) deb ataladigan maxsus oq qon tanachalari yashaydi. Bu jangovar hujayralar taloqdan o‘tayotgan qondagi bakteriya va mikroblarga hujum qiladi, ularni parchalaydi va qonni batamom tozalaydi.",
        "4. Zaxira ombori: Inson tanasi taloqdan kelajakda kerak bo‘ladigan qon zaxirasini va eritrotsitlar hosil qilish uchun zarur bo‘lgan temir moddasini saqlash joyi sifatida ham foydalanadi."
      ],
      "paragraphsRu": [
        "Селезёнка — ключевой орган иммунитета. Она действует как биологический фильтр, отсеивая состарившиеся и деформированные клетки крови.",
        "Она регулирует объем циркулирующей крови и количество тромбоцитов и эритроцитов.",
        "Она уничтожает инфекции: внутри селезёнки находятся особые белые клетки крови — лимфоциты и макрофаги. Они атакуют бактерии и очищают кровь, проходящую через орган.",
        "Организм также использует селезёнку как депо для хранения стратегического запаса крови и железа."
      ]
    },
    {
      "title": "What Problems Can Happen?",
      "titleUz": "Taloq bilan qanday muammolar va kasalliklar bo‘lishi mumkin?",
      "titleRu": "Какие проблемы могут возникнуть?",
      "paragraphs": [
        "A blow or blunt trauma to the abdomen can injure the spleen, causing it to tear (\"lacerate\") or be bruised. Doctors grade spleen lacerations on a scale from 1–5, where 1 is the least severe and 5 is the most severe.",
        "In the past, doctors often did a surgery called splenectomy (splih-NEK-tuh-mee) to remove an injured spleen. But most spleen bruises and lacerations heal with lots of rest and limiting physical activity. Because it's so important to preventing infections, doctors will do all they can to help an injured spleen heal without removing it.",
        "Some diseases can affect the spleen. For example, sickle cell disease damages the spleen early in childhood and it soon stops working. So people with sickle cell disease need extra protection from the germs that the spleen normally filters out.",
        "When someone has infectious mononucleosis, their spleen can get larger than usual. A spleen that is bigger than it should be is more likely to be injured. So someone who has mono needs to avoid contact sports until their spleen is back to normal size."
      ],
      "paragraphsUz": [
        "Qorin sohasiga berilgan to‘g‘ridan-to‘g‘ri zarba yoki to‘mtoq jarohat taloqni shikastlashi, uning yorilishiga («laceration») yoki ko‘karishiga sabab bo‘lishi mumkin. Shifokorlar taloqning yorilish darajasini 1 dan 5 gacha bo‘lgan shkala bo‘yicha baholaydilar, bunda 1 — eng yengil daraja, 5 esa eng og‘ir darajani bildiradi.",
        "Ilgari shifokorlar shikastlangan taloqni darhol splenektomiya (splih-NEK-tuh-mee) deb ataladigan jarrohlik amaliyoti bilan butunlay olib tashlashardi. Ammo zamonaviy tibbiyot shuni ko‘rsatdiki, taloqdagi ko‘karishlar va ko‘plab yoriqlar to‘liq dam olish, jismoniy harakatlarni vaqtincha cheklash va shifokor nazorati ostida o‘z-o‘zidan qayta tiklanishi va bitishi mumkin. Taloq infeksiyalarning oldini olishda juda muhim bo‘lgani sababli, vrachlar jarohatlangan taloqni olib tashlamasdan davolash uchun barcha choralarni ko‘radilar.",
        "Ba’zi kasalliklar ham taloq faoliyatiga jiddiy ta’sir ko‘rsatadi. Masalan, o‘roqsimon hujayrali anemiya (sickle cell disease) bolalik davridanoq taloq to‘qimalarini shikastlaydi va u tez orada o‘z ishini to‘xtatadi. Shuning uchun bu kasallikka chalingan bolalar taloq filtrlashi kerak bo‘lgan mikroblardan qo‘shimcha himoyalanishga (emlashlar va antibiotiklar) muhtoj bo‘ladilar.",
        "Inson yuqumli mononukleoz (mononucleosis / «mono») kasalligi bilan og‘riganida, uning talog‘i odatdagidan ancha kattalashib ketishi mumkin. Me’yordan kattalashgan taloq esa eng kichik turtki yoki yengil zarbadan ham oson yorilib ketish xavfi yuqori bo‘ladi. Shu bois, mononukleozga chalingan insonlar talog‘i o‘zining asl tabiiy o‘lchamiga qaytguniga qadar kontaktli sport turlaridan (kurash, futbol, basketbol) butunlay tiyilishlari shart."
      ],
      "paragraphsRu": [
        "Удар или травма живота могут повредить селезёнку, вызвав разрыв или ушиб. Врачи оценивают степень разрыва селезёнки по шкале от 1 до 5.",
        "Раньше при травмах часто удаляли орган (спленэктомия). Сегодня врачи стремятся сохранить селезёнку покоем и терапией, так как она незаменима в защите от смертельно опасных бактерий.",
        "Серповидноклеточная анемия разрушает селезёнку еще в раннем детстве, поэтому такие пациенты требуют особой профилактики бактериальных инфекций.",
        "При инфекционном мононуклеозе селезёнка значительно увеличивается и становится очень уязвимой к разрыву. Поэтому контактные виды спорта запрещены до полного выздоровления."
      ]
    }
  ],
  "funFacts": [
    {
      "en": "The spleen filters about 10% of your body's total blood supply every single minute!",
      "uz": "Taloq har daqiqada inson tanasidagi butun qon hajmining taxminan 10 foizini o‘zidan suzib o‘tkazadi!",
      "ru": "Селезёнка каждую минуту фильтрует около 10% всего объема крови в организме человека!"
    },
    {
      "en": "The iron recycled from old red blood cells in the spleen is sent to the bone marrow to make brand-new blood cells.",
      "uz": "Taloqda eski qon hujayralaridan ajratib olingan temir moddasi suyak iligiga yuboriladi va undan yangi yosh eritrotsitlar yaratiladi.",
      "ru": "Железо, извлеченное селезенкой из старых клеток, отправляется в костный мозг для создания новых эритроцитов."
    }
  ],
  "takeaways": [
    {
      "en": "The spleen is a fist-sized organ in the upper left abdomen that filters blood, fights germs, and stores iron.",
      "uz": "Taloq — qorinning yuqori chap tomonida joylashgan mushtdek a’zo bo‘lib, qonni tozalaydi, mikroblarni yo‘q qiladi va temir moddasini saqlaydi.",
      "ru": "Селезёнка расположена в левом подреберье, очищает кровь от старых клеток и бактерий и хранит железо."
    },
    {
      "en": "White blood cells like lymphocytes and macrophages in the spleen remove bacteria and foreign particles from circulation.",
      "uz": "Taloqdagi limfotsitlar va makrofaglar qondagi xavfli bakteriyalar va begona moddalarni batamom yo‘q qiladi.",
      "ru": "Лимфоциты и макрофаги внутри селезёнки уничтожают патогены и чужеродные частицы."
    },
    {
      "en": "If the spleen enlarges during mono, contact sports must be avoided to prevent a dangerous spleen rupture.",
      "uz": "Mononukleozda taloq kattalashishi sababli, u o‘z asl o‘lchamiga qaytgunicha kontaktli sportdan qat’iy saqlanish shart.",
      "ru": "При увеличении селезёнки во время мононуклеоза контактный спорт запрещен во избежание разрыва органа."
    }
  ],
  "quiz": [
    {
      "question": "Where is the spleen located in the human body?",
      "questionUz": "Taloq inson tanasining qaysi sohasida joylashgan?",
      "questionRu": "Где в организме человека расположена селезёнка?",
      "options": [
        "Upper left part of the belly under the ribcage",
        "Lower right side near the appendix",
        "Behind the heart in the chest",
        "Under the kneecap"
      ],
      "optionsUz": [
        "Qorinning yuqori chap qismida, qovurg‘alar ostida",
        "Qorinning pastki o‘ng tomonida, appenditsit yonida",
        "Ko‘krak qafasida, yurakning orqasida",
        "Tizza qopqog‘ining ostida"
      ],
      "optionsRu": [
        "В верхней левой части живота под ребрами",
        "Внизу справа около аппендикса",
        "В грудной клетке позади сердца",
        "Под коленной чашечкой"
      ],
      "correctIndex": 0,
      "explanation": "The spleen sits in the upper left abdomen and is protected by the ribcage.",
      "explanationUz": "Taloq qorinning yuqori chap tomonida joylashgan bo‘lib, qovurg‘alar bilan himoyalangan.",
      "explanationRu": "Селезёнка находится в левом подреберье и прикрыта реберным каркасом.",
      "xpReward": 10
    },
    {
      "question": "Which specialized cells inside the spleen destroy germs and clean the blood?",
      "questionUz": "Taloq ichidagi qaysi hujayralar mikroblarga hujum qilib, qonni tozalaydi?",
      "questionRu": "Какие клетки внутри селезёнки уничтожают микробы и фильтруют кровь?",
      "options": [
        "Lymphocytes and macrophages",
        "Neurons and synapses",
        "Platelets and fibrin",
        "Keratin and collagen"
      ],
      "optionsUz": [
        "Limfotsitlar va makrofaglar",
        "Neyronlar va sinapslar",
        "Trombotsitlar va fibrin",
        "Keratin va kollagen"
      ],
      "optionsRu": [
        "Лимфоциты и макрофаги",
        "Нейроны и синапсы",
        "Тромбоциты и фибрин",
        "Кератин и коллаген"
      ],
      "correctIndex": 0,
      "explanation": "Lymphocytes and macrophages are specialized white blood cells that defend against pathogens.",
      "explanationUz": "Limfotsitlar va makrofaglar mikroblarni qirib tashlovchi oq qon tanachalaridir.",
      "explanationRu": "Лимфоциты и макрофаги — защитные клетки иммунитета, очищающие кровь.",
      "xpReward": 10
    },
    {
      "question": "Why must people with mononucleosis avoid contact sports?",
      "questionUz": "Yuqumli mononukleoz bilan kasallanganlar nega kontaktli sportdan tiyilishlari kerak?",
      "questionRu": "Почему при мононуклеозе необходимо избегать контактного спорта?",
      "options": [
        "The spleen can become enlarged and easily tear or rupture from a blow",
        "The heart beats too slowly",
        "Muscles turn to bone",
        "Vision temporarily disappears"
      ],
      "optionsUz": [
        "Taloq kattalashib ketadi va zarbadan osonlikcha yorilib ketishi mumkin",
        "Yurak urishi juda sekinlashib ketadi",
        "Mushaklar suyakka aylanadi",
        "Ko‘rish qobiliyati vaqtincha yo‘qoladi"
      ],
      "optionsRu": [
        "Селезёнка увеличивается в размерах и может легко разорваться от удара",
        "Сердце начинает биться слишком медленно",
        "Мышцы теряют гибкость",
        "Временно ухудшается зрение"
      ],
      "correctIndex": 0,
      "explanation": "An enlarged spleen during mono protrudes past the protective ribcage and is fragile.",
      "explanationUz": "Kattalashgan taloq qovurg‘a himoyasidan tashqariga chiqadi va zarbalarga o‘ta nozik bo‘lib qoladi.",
      "explanationRu": "Увеличенная селезенка выходит из-под защиты ребер и легко травмируется.",
      "xpReward": 10
    }
  ]
},
{
  "id": "peripheral-nervous-system",
  "slug": "periferik-asab-tizimi-tana-boshqaruvi",
  "title": "What Is the Peripheral Nervous System? (PNS)",
  "titleUz": "Periferik asab tizimi nima va u tanani qanday boshqaradi?",
  "titleRu": "Что такое периферическая нервная система (ПНС)?",
  "subtitle": "Discover the vast network of nerves that connects your brain and spinal cord to every muscle, organ, and sense in your body.",
  "subtitleUz": "Bosh miya va orqa miyani har bir mushak, tana a’zosi va sezgi organlari bilan bog‘lovchi ulkan aloqa tarmog‘i haqida bilib oling.",
  "subtitleRu": "Как гигантская сеть нервов соединяет головной и спинной мозг с каждой мышцей, органом и рецептором нашего тела.",
  "system": "Nervous System",
  "systemUz": "Asab tizimi",
  "systemRu": "Нервная система",
  "category": "nervous",
  "isPremium": true,
  "readingMinutes": 5,
  "medicallyReviewedBy": "KidsHealth Medical Experts",
  "reviewDate": "2026",
  "heroImage": "/body basics/peripheral-nervous-system.png",
  "diagramImage": "/body basics/peripheral-nervous-system.png",
  "pronunciations": [
    {
      "term": "peripheral",
      "phonetic": "per-IF-er-ul",
      "meaningUz": "Periferik — markazdan uzoqda, butun gavda va tana a’zolari bo‘ylab yoyilgan nerv tolalari tarmog‘i.",
      "meaningEn": "The network of nerves outside the brain and spinal cord that runs throughout the head, neck, and body.",
      "meaningRu": "Периферический — нервы, проходящие по всему телу за пределами головного и спинного мозга."
    },
    {
      "term": "somatic",
      "phonetic": "so-MA-tik",
      "meaningUz": "Somatik asab tizimi — insonning o‘z xohishi bilan (ixtiyoriy) bajaradigan harakatlarini boshqaruvchi bo‘lim.",
      "meaningEn": "Controls actions that we do by choice (voluntarily), like walking, eating, or playing an instrument.",
      "meaningRu": "Соматическая нервная система — управляет произвольными осознанными движениями тела."
    },
    {
      "term": "autonomic",
      "phonetic": "ah-tuh-NOM-ik",
      "meaningUz": "Avtonom asab tizimi — inson ixtiyori talab etilmaydigan, avtomatik ravishda sodir bo‘ladigan jarayonlarni boshqaruvchi bo‘lim.",
      "meaningEn": "Controls processes that happen automatically (involuntarily), like breathing, digestion, sweating, and shivering.",
      "meaningRu": "Автономная нервная система — управляет непроизвольными автоматическими процессами (дыхание, пищеварение)."
    },
    {
      "term": "sympathetic",
      "phonetic": "sim-puh-THET-ik",
      "meaningUz": "Simpatik tizim — xavf yoki stressli vaziyatlarda tanani tezkor harakatga («kurash yoki qoch») shaylovchi bo‘lim.",
      "meaningEn": "Gets the body ready to react quickly to stressful or scary events.",
      "meaningRu": "Симпатическая система — мобилизует организм при стрессе и опасности («бей или беги»)."
    },
    {
      "term": "parasympathetic",
      "phonetic": "pair-uh-sim-puh-THET-ik",
      "meaningUz": "Parasimpatik tizim — inson tinch va xotirjam dam olayotganda tana a’zolari faoliyatini boshqaruvchi bo‘lim.",
      "meaningEn": "Controls body functions when we're calm and resting.",
      "meaningRu": "Парасимпатическая система — отвечает за восстановление энергии, покой и пищеварение."
    }
  ],
  "sections": [
    {
      "title": "What Is the Peripheral Nervous System?",
      "titleUz": "Periferik asab tizimi nima?",
      "titleRu": "Что такое периферическая нервная система?",
      "paragraphs": [
        "The peripheral nervous system is a network of nerves that runs throughout the head, neck, and body. It carries messages to and from the central nervous system (the brain and spinal cord). Together, the peripheral nervous system and the central nervous system form the nervous system.",
        "If the central nervous system is the central computer of the body, the peripheral nervous system is like the vast network of superfast cables connecting the computer to every sensor, camera, switch, and motor in the entire facility."
      ],
      "paragraphsUz": [
        "Periferik asab tizimi — bu butun bosh, bo‘yin va gavda bo‘ylab tarqalgan ulkan nerv tolalari tarmog‘idir. U barcha xabarlar va signallarni markaziy asab tizimiga (bosh miya va orqa miyaga) olib boradi hamda ulardan javob buyruqlarini butun tanaga yetkazadi. Periferik asab tizimi va markaziy asab tizimi birgalikda insonning yaxlit asab tizimini tashkil qiladi.",
        "Agar bosh miya va orqa miyani markaziy boshqaruv kompyuteri desak, periferik asab tizimi — ushbu kompyuterni har bir mushak, tana a’zosi, teri sensori va ko‘z bilan bog‘lab turuvchi millionlab tezyurar aloqa simlari kabidir."
      ],
      "paragraphsRu": [
        "Периферическая нервная система — это сеть нервов, пронизывающая голову, шею и всё тело человека. Она передает сигналы в центральную нервную систему (головной и спинной мозг) и обратно к органам. Вместе они формируют единую нервную систему.",
        "Если центральная нервная система — это главный процессор, то периферическая — это сеть кабелей, связывающая его со всеми датчиками и мышцами тела."
      ],
      "highlightBox": {
        "title": "Two Unified Systems",
        "titleUz": "Yaxlit va uzluksiz aloqa",
        "titleRu": "Единая связь",
        "text": "The peripheral and central nervous systems work together as one seamless network.",
        "textUz": "Periferik va markaziy asab tizimlari bir-biri bilan uzviy bog‘liq bo‘lib, bir soniya ham uzilmaydigan yagona aloqa tarmog‘ini hosil qiladi.",
        "textRu": "Центральная и периферическая системы действуют как единая слаженная сеть.",
        "type": "info"
      }
    },
    {
      "title": "What Does the Peripheral Nervous System Do?",
      "titleUz": "Periferik asab tizimi qanday vazifani bajaradi?",
      "titleRu": "Что делает периферическая нервная система?",
      "paragraphs": [
        "The brain and body send information back and forth all the time. The peripheral (per-IF-er-ul) nervous system is in charge of delivering these messages.",
        "Some kinds of messages begin in the eyes, ears, nose, tongue, and skin and move to the brain. Other kinds of messages begin in the brain and then move to other parts of the body. For example, if you smell smoke, the message goes from your nose to your brain. Then your brain allows you to think about what is happening and sends messages to your muscles to move to get you out of danger.",
        "The peripheral nervous system is at work all the time, even when we sleep. It sends messages to the heart to keep it beating, to the muscles that we use for breathing, and to the digestive system to keep food moving along."
      ],
      "paragraphsUz": [
        "Bosh miya va tana a’zolari har doim, kechayu kunduz bir-biri bilan uzluksiz ma’lumot almashib turadi. Periferik (per-IF-er-ul) asab tizimi aynan shu xabarlarni yetkazib berishga to‘liq mas’uldir.",
        "Ayrim turdagi xabarlar ko‘z, quloq, burun, til va teridagi sezgi qabul qilgichlardan boshlanadi va to‘g‘ridan-to‘g‘ri bosh miyaga qarab harakatlanadi. Boshqa turdagi xabarlar esa bosh miyada shakllanib, tananing mushaklari va boshqa qismlariga yuboriladi. Masalan, agar burningiz tutun hidini sezsa, bu signal ko‘z ochib yumguncha burundan bosh miyaga yetib boradi. Shunda miyangiz nima sodir bo‘layotganini tahlil qiladi va xavfdan uzoqlashishingiz uchun oyoq va qo‘l mushaklaringizga zudlik bilan harakatlanish buyrug‘ini jo‘natadi.",
        "Periferik asab tizimi hatto biz chuqur uxlab yotgan paytimizda ham tinimsiz ishlayveradi. U yurakka to‘xtovsiz urib turish, nafas mushaklariga havo tortish va chiqarish, ovqat hazm qilish tizimiga esa taomni oshqozon-ichak bo‘ylab surish to‘g‘risida uzluksiz xabarlar yuborib turadi."
      ],
      "paragraphsRu": [
        "Мозг и тело непрерывно обмениваются информацией. Периферическая нервная система отвечает за доставку этих сигналов.",
        "Одни сигналы идут от глаз, ушей, носа, языка и кожи в мозг. Другие сигналы формируются в мозге и идут к мышцам. Например, если вы почувствовали запах дыма, сигнал поступает в мозг, и он командует мышцам увести вас от опасности.",
        "Периферическая нервная система работает даже во сне: поддерживает ритм сердца, дыхание легких и продвижение пищи по кишечнику."
      ]
    },
    {
      "title": "What Are the Parts of the Peripheral Nervous System?",
      "titleUz": "Periferik asab tizimi qanday bo‘limlardan iborat?",
      "titleRu": "Из каких частей состоит периферическая нервная система?",
      "paragraphs": [
        "The peripheral nervous system has two parts:",
        "The somatic (so-MA-tik) nervous system controls actions that we do by choice (voluntarily), like walking, eating, or playing an instrument.",
        "The autonomic (ah-tuh-NOM-ik) nervous system controls processes that happen automatically (involuntarily), like breathing, digestion, sweating, and shivering. The autonomic nervous system has two parts: the sympathetic nervous system and the parasympathetic nervous system.",
        "The sympathetic nervous system gets the body ready to react quickly to stressful or scary events. The parasympathetic nervous system controls body functions when we're calm and resting."
      ],
      "paragraphsUz": [
        "Periferik asab tizimi ikkita asosiy qismdan tashkil topgan:",
        "1. Somatik (so-MA-tik) asab tizimi: Biz o‘z xohish-irodamiz bilan ongli ravishda bajaradigan harakatlarimizni (ixtiyoriy harakatlarni) boshqaradi. Masalan, piyoda yurish, ovqat yeyish, yugurish yoki musiqa asbobida chalish aynan somatik tizim orqali amalga oshadi.",
        "2. Avtonom (ah-tuh-NOM-ik) asab tizimi: Inson ixtiyori talab etilmaydigan, butunlay avtomatik ravishda sodir bo‘ladigan jarayonlarni (ixtiyorsiz jarayonlarni) boshqaradi. Bunga nafas olish, yurak urishi, ovqat hazm qilish, terlash va sovuqda qaltirash kiradi.",
        "Avtonom asab tizimining o‘zi yana ikkita bir-birini to‘ldiruvchi bo‘limga bo‘linadi:",
        "• Simpatik asab tizimi: Tanani to‘satdan yuzaga kelgan stress, qo‘rquv yoki kutilmagan vaziyatlarga tezkor javob qaytarishga («kurash yoki qoch») shaylaydi. U yurak urishini tezlashtiradi va mushaklarga qo‘shimcha kuch bag‘ishlaydi.",
        "• Parasimpatik asab tizimi: Inson xotirjam bo‘lganida va dam olayotgan paytda tana a’zolarini boshqaradi, energiyani tiklaydi, nafasni sokinlashtiradi va hazm qilishni faollashtiradi."
      ],
      "paragraphsRu": [
        "Периферическая нервная система делится на две части:",
        "Соматическая нервная система управляет действиями, совершаемыми по нашей воле (произвольными): ходьба, прием пищи, игра на инструментах.",
        "Автономная (вегетативная) нервная система контролирует непроизвольные процессы, происходящие автоматически: дыхание, пищеварение, потоотделение.",
        "Автономная система включает симпатическую (мобилизация при стрессе) и парасимпатическую (покой, пищеварение и восстановление сил) части."
      ]
    }
  ],
  "funFacts": [
    {
      "en": "Nerve impulses travel along the peripheral nervous system at incredible speeds of up to 250 miles per hour (400 km/h)!",
      "uz": "Periferik asab tolalari bo‘ylab elektr signallari soatiga 400 kilometrdan oshiq aqlbovar qilmas tezlikda harakatlanadi!",
      "ru": "Нервные импульсы в периферической нервной системе распространяются со скоростью до 400 км/ч!"
    },
    {
      "en": "Even while you sleep, your autonomic nervous system keeps your heart beating and lungs breathing without pause.",
      "uz": "Siz uxlab yotganingizda ham avtonom asab tizimi yurak va o‘pkani bir lahzaga ham to‘xtatmasdan ishlatib turadi.",
      "ru": "Даже во время глубокого сна автономная нервная система бесперебойно управляет сердцем и дыханием."
    }
  ],
  "takeaways": [
    {
      "en": "The peripheral nervous system connects the brain and spinal cord to the rest of the body.",
      "uz": "Periferik asab tizimi bosh miya va orqa miyani butun tana a’zolari va mushaklari bilan uzviy bog‘lab turadi.",
      "ru": "Периферическая нервная система соединяет головной и спинной мозг со всем телом."
    },
    {
      "en": "The somatic system controls voluntary actions, while the autonomic system manages automatic functions like heartbeat and breathing.",
      "uz": "Somatik tizim ixtiyoriy harakatlarni, avtonom tizim esa yurak urishi va nafas kabi avtomatik jarayonlarni boshqaradi.",
      "ru": "Соматическая система отвечает за осознанные движения, а автономная — за автоматические функции органов."
    },
    {
      "en": "The sympathetic system prepares you for emergencies, and the parasympathetic system helps you rest and recover.",
      "uz": "Simpatik tizim kutilmagan vaziyatlarga shaylasa, parasimpatik tizim tinchlanish va dam olishga xizmat qiladi.",
      "ru": "Симпатическая система активирует организм при опасности, а парасимпатическая восстанавливает силы во время отдыха."
    }
  ],
  "quiz": [
    {
      "question": "What is the primary role of the peripheral nervous system?",
      "questionUz": "Periferik asab tizimining asosiy vazifasi nima?",
      "questionRu": "В чем заключается главная роль периферической нервной системы?",
      "options": [
        "Connecting the brain and spinal cord to the rest of the body",
        "Pumping blood into the arteries",
        "Digesting solid food in the stomach",
        "Producing insulin in the pancreas"
      ],
      "optionsUz": [
        "Bosh miya va orqa miyani butun tana a’zolari bilan bog‘lash",
        "Qonni arteriyalarga haydab berish",
        "Oshqozonda qattiq ovqatlarni hazm qilish",
        "Oshqozon osti bezida insulin ishlab chiqarish"
      ],
      "optionsRu": [
        "Связывать головной и спинной мозг со всем телом",
        "Перекачивать кровь по артериям",
        "Переваривать пищу в желудке",
        "Вырабатывать инсулин"
      ],
      "correctIndex": 0,
      "explanation": "The peripheral nervous system acts as the messaging network between the central nervous system and body organs.",
      "explanationUz": "Periferik asab tizimi markaziy asab tizimi va tana a’zolari o‘rtasidagi bosh aloqa tarmog‘idir.",
      "explanationRu": "Периферическая нервная система обеспечивает двустороннюю связь центра с органами.",
      "xpReward": 10
    },
    {
      "question": "Which part of the nervous system controls voluntary actions like walking and writing?",
      "questionUz": "Yurish va yozish kabi ixtiyoriy harakatlarni qaysi tizim boshqaradi?",
      "questionRu": "Какая часть нервной системы управляет произвольными движениями (ходьба, письмо)?",
      "options": [
        "Somatic nervous system",
        "Sympathetic nervous system",
        "Immune lymphatic system",
        "Endocrine hormonal system"
      ],
      "optionsUz": [
        "Somatik asab tizimi",
        "Simpatik asab tizimi",
        "Immunitet limfa tizimi",
        "Endokrin gormon tizimi"
      ],
      "optionsRu": [
        "Соматическая нервная система",
        "Симпатическая нервная система",
        "Лимфатическая система",
        "Эндокринная система"
      ],
      "correctIndex": 0,
      "explanation": "The somatic nervous system directs voluntary muscle contractions you consciously choose to make.",
      "explanationUz": "Somatik asab tizimi inson ongli ravishda o‘zi xohlab bajaradigan harakatlarni nazorat qiladi.",
      "explanationRu": "Соматическая система контролирует скелетные мышцы и осознанные действия.",
      "xpReward": 10
    },
    {
      "question": "Which system restores energy and controls body functions when you are resting peacefully?",
      "questionUz": "Inson xotirjam dam olayotganida energiyani tiklovchi bo‘lim qaysi?",
      "questionRu": "Какая система восстанавливает энергию и работает в состоянии покоя?",
      "options": [
        "Parasympathetic nervous system",
        "Sympathetic nervous system",
        "Somatic motor system",
        "Bone marrow system"
      ],
      "optionsUz": [
        "Parasimpatik asab tizimi",
        "Simpatik asab tizimi",
        "Somatik motor tizim",
        "Suyak iligi tizimi"
      ],
      "optionsRu": [
        "Парасимпатическая нервная система",
        "Симпатическая нервная система",
        "Соматическая система",
        "Система костного мозга"
      ],
      "correctIndex": 0,
      "explanation": "The parasympathetic nervous system governs 'rest and digest' activities.",
      "explanationUz": "Parasimpatik asab tizimi tana tinchlanganida dam olish va hazm jarayonlarini boshqaradi.",
      "explanationRu": "Парасимпатическая система отвечает за режим «отдых и пищеварение».",
      "xpReward": 10
    }
  ]
},
{
  "id": "hair-skin-nails",
  "slug": "teri-soch-va-tirnoqlar-himoya-tizimi",
  "title": "Hair, Skin, & Nails — Your Body's Integumentary Shield",
  "titleUz": "Soch, teri va tirnoqlar: Tanamizning tashqi himoya qoplami",
  "titleRu": "Волосы, кожа и ногти — Покровная система организма",
  "subtitle": "Discover how hair, skin, and nails work as the integumentary system to shield muscles, regulate temperature, sense touch, and block germs.",
  "subtitleUz": "Insonning eng katta a’zosi bo‘lgan teri, o‘sayotgan sochlar va himoyachi tirnoqlar tanamizni qanday asraydi va qanday o‘sadi?",
  "subtitleRu": "Как кожа, волосы и ногти образуют покровную систему, защищая внутренние органы, регулируя температуру и отражая атаки микробов.",
  "system": "Integumentary System",
  "systemUz": "Teri, soch va tirnoqlar",
  "systemRu": "Покровная система",
  "category": "immune",
  "isPremium": true,
  "readingMinutes": 8,
  "medicallyReviewedBy": "Larissa Hirsch, MD (KidsHealth Medical Experts)",
  "reviewDate": "October 2025",
  "heroImage": "/body basics/skin-hair-nails.svg",
  "diagramImage": "/body basics/skin-hair-nails.svg",
  "pronunciations": [
    {
      "term": "integumentary",
      "phonetic": "in-teh-gyoo-MEN-tah-ree",
      "meaningUz": "Qoplama tizimi — tananing tashqi qobig‘ini tashkil qiluvchi teri, soch va tirnoqlarning umumiy ilmiy nomi.",
      "meaningEn": "The body system formed by hair, skin, and nails as an outer protective shield.",
      "meaningRu": "Покровная система — комплекс органов (кожа, волосы, ногти), защищающий организм от внешней среды."
    },
    {
      "term": "follicle",
      "phonetic": "FAHL-ih-kul",
      "meaningUz": "Follikula — teri ichidagi soch o‘sib chiqadigan xaltacha shaklidagi maxsus chuqurcha.",
      "meaningEn": "A sac-like pit in the skin from which the hair grows.",
      "meaningRu": "Волосяной фолликул — мешочек в коже, из которого растет волос."
    },
    {
      "term": "papilla",
      "phonetic": "puh-PILL-uh",
      "meaningUz": "Soch so‘rg‘ichi (papilla) — soch ildizini qon tomirlari orqali oziqlantiruvchi va o‘sishini ta’minlovchi qism.",
      "meaningEn": "The base of the follicle with an artery that nourishes hair root cells.",
      "meaningRu": "Волосяной сосочек — основание фолликула с сосудами, питающими волос."
    },
    {
      "term": "keratinization",
      "phonetic": "ker-uh-tuh-nuh-ZAY-shun",
      "meaningUz": "Keratinlanish — hujayralarning qattiq himoyachi keratin oqsiliga aylanib, soch va tirnoq hosil qilish jarayoni.",
      "meaningEn": "The process where hair and nail cells harden with keratin and form tough shafts.",
      "meaningRu": "Кератинизация (ороговение) — процесс насыщения клеток кератином."
    },
    {
      "term": "epidermis",
      "phonetic": "ep-ih-DUR-mis",
      "meaningUz": "Epidermis — terining eng yuqori, doimiy yangilanib turuvchi himoya qatlami.",
      "meaningEn": "The tough, protective outer layer of skin.",
      "meaningRu": "Эпидермис — верхний защитный слой кожи."
    },
    {
      "term": "dermis",
      "phonetic": "DUR-mis",
      "meaningUz": "Dermis — epidermik ostidagi qon tomirlar, nervlar, yog‘ va ter bezlari joylashgan asosiy teri qatlami.",
      "meaningEn": "The thick layer below the epidermis holding blood vessels, nerves, and glands.",
      "meaningRu": "Дерма — средний слой кожи с сосудами, нервными окончаниями и железами."
    },
    {
      "term": "sebaceous",
      "phonetic": "sih-BAY-shiss",
      "meaningUz": "Yog‘ bezlari — terini yumshatuvchi va suv o‘tkazmaydigan qiluvchi sebum yog‘ini ishlab chiqaruvchi bezlar.",
      "meaningEn": "Glands in the dermis that make sebum oil to keep skin soft and waterproof.",
      "meaningRu": "Сальные железы — выделяют кожное сало (себум) для защиты и увлажнения."
    },
    {
      "term": "lunula",
      "phonetic": "LOON-yuh-luh",
      "meaningUz": "Lunula — tirnoq asosidagi oq yarim oy shaklidagi o‘sish sohasi.",
      "meaningEn": "The whitish crescent-shaped area at the base of the nail.",
      "meaningRu": "Лунула — светлый полумесяц у основания ногтя."
    }
  ],
  "sections": [
    {
      "title": "Hair: What Is Hair & What Does It Do?",
      "titleUz": "Sochlar: Soch nima va u qanday vazifalarni bajaradi?",
      "titleRu": "Волосы: Строение и функции",
      "paragraphs": [
        "Hair, skin, and nails form the outer layer of the body, called the integumentary (in-teh-gyoo-MEN-tah-ree) system.",
        "Hairs are thin strands of hardened protein packed into layers. Hair has many different jobs. Hair on the head protects us from the sun and keeps us warm by preserving heat. Hair in the nose, ears, and around the eyes keeps these sensitive areas safe from dust and other small particles.",
        "Eyebrows and eyelashes shield the eyes from bright light and small particles that could go into them. The fine hair that covers the body provides warmth and protects the skin.",
        "Hair is made mostly of a hard protein called keratin, which is also in your nails and the outer layer of your skin. Hair doesn’t have nerves or blood, so when you cut it, it doesn’t hurt. It gets its color from a pigment called melanin, which also gives your skin its color."
      ],
      "paragraphsUz": [
        "Soch, teri va tirnoqlar birgalikda tanamizning eng tashqi qoplamini — integumentar (in-teh-gyoo-MEN-tah-ree) tizimini hosil qiladi.",
        "Sochlar — bu qatlam-qatlam qilib zichlangan qattiq oqsilli mayda tolalardir. Sochning tanamizda juda ko‘p xilma-xil va muhim vazifalari bor. Boshdagi sochlar bizni jazirama quyosh nurlaridan asraydi va issiqlikni saqlab, boshimizni sovuqdan himoyalaydi. Burun va quloq ichidagi hamda ko‘z atrofidagi tuklar ushbu nozik sohalarni chang-to‘zon va begona mayda zarrachalardan himoya qiladi.",
        "Qoshlar va kipriklar ko‘zlarni o‘tkir yorqin nurlardan hamda ko‘zga tushishi mumkin bo‘lgan changlardan qalqon kabi to‘sib turadi. Butun vujudimizni qoplab turgan mayin tana tuklari esa teriga qo‘shimcha iliqlik baxsh etadi va uni asraydi.",
        "Soch asosan keratin deb ataladigan baquvvat oqsildan tashkil topgan. Xuddi shu keratin oqsili tirnoqlarimizda va terining eng ustki qatlamida ham mavjud. Soch tolasida nerv tolalari yoki qon tomirlari bo‘lmaydi — shuning uchun ham sochni sartaroshda kesganda hech qanday og‘riq sezilmaydi! Soch o‘zining rangini melanin deb ataluvchi maxsus pigmentdan oladi (bu pigment terimizga ham o‘ziga xos tus beradi)."
      ],
      "paragraphsRu": [
        "Волосы, кожа и ногти образуют внешний защитный слой тела — покровную (integumentary) систему.",
        "Волосы — это тонкие нити уплотненного белка, уложенные слоями. Волосы на голове защищают от солнечных ожогов и сохраняют драгоценное тепло тела. Волоски в носу и ушах задерживают частицы пыли и грязи. Брови и ресницы защищают глаза от яркого света и попадания соринок.",
        "Волосы состоят из белка кератина. В стержне волоса нет нервов и кровеносных сосудов, поэтому стрижка совершенно безболезненна. Цвет волосам придает пигмент меланин."
      ]
    },
    {
      "title": "Parts of Hair & How It Grows",
      "titleUz": "Sochning tuzilishi va uning o‘sish sirlari",
      "titleRu": "Строение волоса и процесс роста",
      "paragraphs": [
        "Human hair includes the: hair shaft (the part that sticks out from the skin's surface), root (a soft thickened bulb at the base of the hair), and follicle (FAHL-ih-kul, a sac-like pit in the skin from which the hair grows).",
        "The shape of the follicle determines whether the hair is curly or straight. At the bottom of the follicle is the papilla (puh-PILL-uh), where the actual hair growth happens. The papilla contains an artery — a kind of blood vessel — that nourishes the root of the hair. As cells multiply and make keratin, they're pushed up the follicle and through the skin's surface as a shaft of hair.",
        "Each hair has three layers: medulla (meh-DULL-uh, at the center, which is soft), cortex (which surrounds the medulla and is the main part of the hair), and cuticle (KYOO-tuh-kull, the hard outer layer that protects the shaft).",
        "Hair grows by forming new cells at the base of the root. As they move up, they're cut off from their supply of nourishment and start to form keratin. This process is called keratinization (ker-uh-tuh-nuh-ZAY-shun). As this happens, the hair cells die. The dead cells and keratin form the shaft of the hair. Hair grows all over the human body except on the palms of the hands, soles of the feet, and lips. Hair grows faster in summer than winter."
      ],
      "paragraphsUz": [
        "Inson sochi quyidagi tarkibiy qismlardan iborat:",
        "1. Soch tanasi (shaft) — terining yuzasidan tashqariga chiqib turgan ko‘rinadigan qismi.",
        "2. Soch ildizi (root) — terining ichida, soch asosidagi yumshoq piyozchasimon kengaygan qism.",
        "3. Follikula (FAHL-ih-kul) — teri ichidagi xaltachasimon chuqurcha bo‘lib, soch aynan uning ichidan unib chiqadi. Follikulaning shakli sochning jingalak yoki tekis bo‘lishini belgilaydi (dumaloq follikuladan to‘g‘ri soch, yassilanganidan esa jingalak soch o‘sadi).",
        "Follikulaning eng tubida so‘rg‘ich — papilla (puh-PILL-uh) joylashgan bo‘lib, sochning haqiqiy o‘sishi aynan shu yerda sodir bo‘ladi. Papilla ichida soch ildizini oziqlantiruvchi qon tomiri (arteriya) o‘tadi. Hujayralar ko‘payib, keratin ishlab chiqargach, ular follikula bo‘ylab yuqoriga siqib chiqariladi va teri yuzasida soch tanasi ko‘rinishida o‘sib chiqadi.",
        "Har bir soch tolasi uchta qatlamdan iborat: o‘rtadagi yumshoq mag‘iz (medulla / meh-DULL-uh), uning atrofini o‘rab turuvchi asosiy baquvvat qatlam (cortex) hamda sochni tashqi shikastlanishdan asrovchi qattiq shaffof qobiq — kutikula (cuticle / KYOO-tuh-kull).",
        "Soch qanday o‘sadi? Ildiz tubida yangi hujayralar tinimsiz bo‘linadi va to‘qima ustunini hosil qiladi. Yangi hujayralar pastdan unib chiqqan sari, eski hujayralar yuqoriga siljiydi. Yuqoriga ko‘tarilgan hujayralar oziqlanish manbaidan uziladi va keratin bilan to‘lib qotadi. Bu jarayon keratinlanish (keratinization / ker-uh-tuh-nuh-ZAY-shun) deb ataladi. Keratinlanish natijasida hujayralar nobud bo‘ladi va o‘sha qotgan hujayralar soch tolasini hosil qiladi. Soch kaftlar, tovonlar va lablardan tashqari butun vujudda o‘sadi. Sochlar qishga qaraganda yozda sezilarli darajada tezroq o‘sadi!"
      ],
      "paragraphsRu": [
        "Волос состоит из стержня (видимой части), корня и волосяного фолликула. От формы фолликула зависит, будут ли волосы прямыми или вьющимися.",
        "На дне фолликула находится сосочек (папилла) с артерией, питающей клетки. Волос состоит из 3 слоев: сердцевины (медуллы), коркового слоя (кортекса) и защитной кутикулы.",
        "Рост происходит путем деления клеток у основания корня. Продвигаясь вверх, клетки наполняются кератином и затвердевают (процесс кератинизации). Волосы растут по всему телу, кроме ладоней, подошв и губ, причем летом они растут быстрее, чем зимой."
      ]
    },
    {
      "title": "Skin: The Body's Largest Organ & Its Layers",
      "titleUz": "Teri: Tanamizning eng katta a’zosi va uning 3 ta qatlami",
      "titleRu": "Кожа: Самый большой орган и её 3 слоя",
      "paragraphs": [
        "Skin, our largest organ, has many jobs. It: protects the network of muscles, bones, nerves, blood vessels, and everything else inside our bodies; forms a barrier that prevents harmful substances and germs from entering the body; protects body tissues against injury; helps control body temperature through sweating when we're hot and by helping keep heat in the body when we're cold.",
        "Without the nerve cells in skin, people couldn't feel warmth, cold, or other sensations. Every square inch of skin contains thousands of cells and hundreds of sweat glands, oil glands, nerve endings, and blood vessels.",
        "Skin has three layers: the epidermis (ep-ih-DUR-mis), dermis (DUR-mis), and the subcutaneous (sub-kyoo-TAY-nee-us) tissue.",
        "The epidermis is the upper protective layer with melanocytes (make melanin pigment for color and suntanning), keratinocytes (make tough protective keratin), and Langerhans cells (fight infections). Epidermal cells are completely renewed about every 28 days!",
        "Below is the dermis, home to capillaries, nerve endings, sweat glands, hair follicles, and sebaceous glands making waterproof sebum oil. Collagen keeps skin firm while elastin lets it stretch like a rubber band.",
        "The bottom layer is subcutaneous tissue, filled with fat cells and blood vessels to cushion blows and insulate against cold."
      ],
      "paragraphsUz": [
        "Teri — inson tanasidagi eng katta va eng og‘ir a’zodir! U juda ko‘p hayotiy vazifalarni bajaradi: muskullar, suyaklar, nervlar va qon tomirlarini tashqi muhitdan ishonchli himoya qiladi; zararli moddalar va xavfli mikroblarning tanaga kirishiga yo‘l qo‘ymaydigan tabiiy to‘siq (bar’yer) hosil qiladi; tana to‘qimalarini jarohatlardan asraydi; issiqda terlash orqali sovutib, sovuqda esa issiqlikni ichkarida saqlab, tana haroratini doimiy 36.6°C darajada nazorat qiladi.",
        "Teridagi sezuvchi nerv hujayralari bo‘lmaganida, inson issiqni, muzdek sovuqni, teginishni va og‘riqni his qila olmasdi. Terining har bir kvadrat santimetrida minglab hujayralar, yuzlab ter bezlari, yog‘ bezlari, nerv uchlari va mayda kapillyarlar joylashgan!",
        "Terimiz 3 ta asosiy qatlamdan iborat:",
        "1. Epidermis (ep-ih-DUR-mis) — terining eng yuqori, mustahkam himoya qatlami. Unda 3 xil ajoyib hujayralar yashaydi: Melanositlar (melanin pigmentini ishlab chiqaradi, quyosh nurlari ta’sirida ko‘payib, qorayish (zagor) yoki sepkillar hosil qiladi); Keratinotsitlar (qattiq suv o‘tkazmaydigan keratin hosil qiladi); Langergans hujayralari (teriga kirmoqchi bo‘lgan infeksiyalarni tutib yo‘q qiladi). Epidermis hujayralari har 28 kunda butunlay yangilanadi! Shu sababli mayda tirnalish va yaralar tezda bitib ketadi.",
        "2. Dermis (DUR-mis) — epidermis ostidagi qalin va baquvvat qatlam. Bu yerda qon tomirlar, sezgi nervlari, ter bezlari va soch follikulalari joylashgan. Shuningdek, dermisda yog‘ ishlab chiqaruvchi sebatsiy (sebaceous / sih-BAY-shiss) bezlari mavjud bo‘lib, ular ishlab chiqaradigan yog‘ (sebum / SEE-bum) terini doim yumshoq va elastik saqlaydi hamda suv yuqtirmaydi. Dermisdagi kollagen terini tarang ushlab tursa, elastin xuddi rezinka kabi cho‘zilib, yana o‘z holiga qaytish imkonini beradi.",
        "3. Gipoderma yoki Teriosti to‘qimasi (subcutaneous / sub-kyuh-TAY-nee-iss) — terining eng tubki poydevori. U biriktiruvchi to‘qima, qon tomirlari va yog‘ to‘playdigan hujayralardan iborat. Bu qatlam tanani zarbalardan xuddi yumshoq yostiqdek asraydi va ichki issiqlikni tashqariga chiqarmay saqlaydi."
      ],
      "paragraphsRu": [
        "Кожа — наш крупнейший орган. Она защищает мышцы и кости, не пропускает микробы, а потоотделением регулирует температуру тела. В каждом квадратном сантиметре кожи — сотни потовых и сальных желез, нервных рецепторов и капилляров.",
        "Эпидермис — наружный слой с меланоцитами (меланин), кератиноцитами (защитный кератин) и клетками Лангерганса (иммунитет). Клетки эпидермиса полностью обновляются каждые 28 дней!",
        "Дерма содержит коллаген и эластин, кровеносные сосуды, корни волос и сальные железы (выделяющие кожное сало себум).",
        "Подкожная клетчатка (гиподерма) состоит из жировой ткани и сосудов, защищая тело от переохлаждения и смягчая удары."
      ]
    },
    {
      "title": "Nails: Parts & How They Grow",
      "titleUz": "Tirnoqlar: Tuzilishi, ahamiyati va o‘sishi",
      "titleRu": "Ногти: Функции, анатомия и рост",
      "paragraphs": [
        "Nails protect the sensitive tips of fingers and toes. We don't need our nails to survive, but they do help prevent injuries, and they also help us pick up small objects. Without them, we'd have a hard time scratching an itch or untying a knot. Nails can be a gauge of a person's general health, as different illnesses can affect their growth.",
        "Nails are mostly made of a strong protein called keratin, which helps give them their hard, protective surface. Keratin in nails is packed tightly into layers. Nails also contain water and small amounts of calcium and other minerals.",
        "Nails grow out of deep folds in the skin of the fingers and toes. As epidermal cells below the nail root move up, they get flat and pressed tightly together into thin plates that form the nail. As with hair, nails form by keratinization.",
        "The skin below the nail is the matrix. The nail plate looks pink because of tiny blood vessels in the underlying dermis. The whitish crescent-shaped area at the base of the nail is the lunula (LOON-yuh-luh).",
        "Fingernails grow faster than toenails, and nails grow faster in summer than winter. A nail that's torn off will regrow if the matrix isn't severely injured."
      ],
      "paragraphsUz": [
        "Tirnoqlar qo‘l va oyoq barmoqlarining o‘ta sezgir uchlarini jarohatlardan himoya qiladi. Inson yashashi uchun tirnoqlar shart bo‘lmasa-da, ular barmoq uchlarini qattiq shikastlanishdan asraydi, mayda narsalarni bemalol ushlash, tugunlarni yechish va qichigan joyni qashlash imkonini beradi! Bundan tashqari, tirnoqlarning holati insonning umumiy salomatligi ko‘zgusidir — ko‘plab kasalliklar tirnoq shakli va rangiga qarab aniqlanadi.",
        "Tirnoqlar ham xuddi sochlar kabi zich qatlamlangan keratin oqsilidan tashkil topgan. Shuningdek, ularda suv, oz miqdorda kalsiy va boshqa minerallar mavjud. Tirnoq ostida uni doimiy o‘stirib, oldinga surib turadigan jonli hujayralar joylashgan.",
        "Tirnoq qismlari: Tirnoq ildizi terining chuqur burmalarida joylashgan matritsa (matrix) to‘qimasidan o‘sib chiqadi. Tirnoq plastinkasi tagidagi kapillyarlar tarmog‘i tufayli pushti rangda ko‘rinadi. Tirnoq asosidagi oqish yarim oy shaklidagi soha lunula (lunula / LOON-yuh-luh) deb ataladi.",
        "Qo‘l tirnoqlari oyoq tirnoqlariga qaraganda ancha tezroq o‘sadi. Sochlar kabi tirnoqlar ham qishga qaraganda yoz oylarida tezroq o‘sadi! Agar tirnoq to‘satdan tushib ketsa, uning matritsasi shikastlanmagan bo‘lsa, u bir necha oy ichida butunlay qayta o‘sib chiqadi."
      ],
      "paragraphsRu": [
        "Ногти защищают кончики пальцев, помогают захватывать мелкие предметы и служат индикатором здоровья человека.",
        "Они состоят из плотных пластинок кератина с добавлением воды, кальция и минералов. Под ногтем находится матрикс — зона деления живых клеток.",
        "Розовая ногтевая пластина просвечивает капилляры дермы, а белый полумесяц у кутикулы называется лунулой (lunula).",
        "Ногти на руках растут быстрее, чем на ногах, а летом их рост ускоряется. При потере ногтя он полностью отрастает заново, если матрикс не поврежден."
      ]
    },
    {
      "title": "Healthy Habits & Connection with Body Systems",
      "titleUz": "Tana tizimlari bilan bog‘liqlik va parvarishlash qoidalari",
      "titleRu": "Связь с организмом и правила ухода",
      "paragraphs": [
        "How do hair, skin, and nails help other body systems? Hairs in the nose help the respiratory system by catching tiny particles. Nails and skin block germs, which helps the immune system. Skin absorbs sunlight to make vitamin D, helping the endocrine and skeletal systems absorb calcium for strong bones. Skin nerve endings allow the nervous system to feel hot, cold, touch, and pain.",
        "To keep your hair, skin, and nails healthy, eat a balanced diet with leafy greens, berries, nuts, whole grains, and lean proteins (fish, eggs, beans). Drink plenty of water and limit sugar and processed foods.",
        "Follow healthy habits: get regular physical activity, sleep enough, avoid tobacco, and manage stress. For skin care, keep it simple: use mild soap, fragrance-free lotion, and daily sunscreen to protect against UV sunburn."
      ],
      "paragraphsUz": [
        "Teri, soch va tirnoqlar boshqa tana a’zolari bilan qanday hamkorlik qiladi?",
        "• Nafas tizimi: Burundagi tuklar havoni suzib, chang va mikroblarni o‘pkaga kiritmaydi.",
        "• Immunitet tizimi: Butun teri va tirnoqlar patogen mikroblarga qarshi mustahkam devor hosil qiladi.",
        "• Endokrin va suyak tizimi: Teri quyosh nuri yordamida D vitaminini sintez qiladi. D vitamini esa suyaklar baquvvat bo‘lishi uchun kalsiyning so‘rilishiga yordam beradi.",
        "• Asab tizimi: Teridagi millionlab retseptorlar orqali miyamiz issiq, sovuq, teginish va og‘riqni zumda payqaydi.",
        "Sog‘lom soch, teri va tirnoqlar uchun nimalar iste’mol qilish kerak? Ratsionda ko‘katlar, rezavorlar, yong‘oqlar, dukkaklilar va toza oqsil (baliq, tuxum, loviya) bo‘lishi zarur. Ko‘p toza suv ichish, shakarni va sun’iy qayta ishlangan taomlarni cheklash terining yoshligini saqlaydi.",
        "Oltin qoidalar: Muntazam jismoniy faollik, to‘yib uxlash, chekishdan uzoq bo‘lish va stressni kamaytirish. Terini parvarishlashda me’yorga amal qiling: yumshoq sovun, hidsiz tabiiy krem va quyoshdan saqlovchi krem (sunscreen) yetarlidir!"
      ],
      "paragraphsRu": [
        "Связь с организмом: волоски носа очищают воздух для легких; кожа блокирует бактерии для иммунитета; кожа вырабатывает витамин D на солнце для усвоения кальция костями; рецепторы кожи передают в мозг тактильные и болевые сигналы.",
        "Питание для красоты и здоровья: зелень, ягоды, орехи, цельные злаки, нежирные белки (рыба, яйца), достаточное количество воды.",
        "Простые правила ухода: качественный сон, физическая активность, отказ от табака, мягкое мыло, увлажняющий крем и крем с SPF от солнечных лучей."
      ]
    }
  ],
  "funFacts": [
    {
      "en": "The skin completely sheds and regenerates its entire outer epidermal layer every 28 days!",
      "uz": "Inson terisi har 28 kunda o‘zining butun tashqi epidermis qatlamini batamom yangilab oladi!",
      "ru": "Кожа полностью сбрасывает и обновляет свой наружный эпидермис каждые 28 дней!"
    },
    {
      "en": "Both hair and nails grow significantly faster in the warm summer months than in winter.",
      "uz": "Sochlar ham, tirnoqlar ham qish mavsumiga qaraganda iliq yoz oylarida ancha tezroq o‘sadi.",
      "ru": "И волосы, и ногти растут заметно быстрее в теплое летнее время года, чем зимой."
    }
  ],
  "takeaways": [
    {
      "en": "Hair, skin, and nails make up the integumentary system, the body's primary protective outer barrier.",
      "uz": "Soch, teri va tirnoqlar inson organizmining tashqi qoplam (integumentar) tizimini tashkil qiladi.",
      "ru": "Волосы, кожа и ногти образуют покровную систему — главный защитный барьер тела."
    },
    {
      "en": "Keratin protein forms the tough structure of hair, nails, and the outer skin layer.",
      "uz": "Keratin oqsili soch, tirnoq va terining mustahkam, suv o‘tkazmaydigan asosini yaratadi.",
      "ru": "Белок кератин придает прочность и водонепроницаемость волосам, ногтям и верхнему слою кожи."
    },
    {
      "en": "Healthy diet, hydration, sleep, and sunscreen protect your integumentary system every day.",
      "uz": "To‘g‘ri ovqatlanish, yetarli suv ichish, uyqu va quyoshdan himoya kremi terining salomatligini ta’minlaydi.",
      "ru": "Полноценное питание, вода, сон и защита от солнца сохраняют здоровье кожи на долгие годы."
    }
  ],
  "quiz": [
    {
      "question": "What is the primary protein that makes up hair, nails, and the outer skin layer?",
      "questionUz": "Soch, tirnoq va terining tashqi qatlamini tashkil qiluvchi asosiy qattiq oqsil nima?",
      "questionRu": "Какой основной белок образует структуру волос, ногтей и верхнего слоя кожи?",
      "options": [
        "Keratin",
        "Hemoglobin",
        "Insulin",
        "Pepsin"
      ],
      "optionsUz": [
        "Keratin",
        "Gemoglobin",
        "Insulin",
        "Pepsin"
      ],
      "optionsRu": [
        "Кератин",
        "Гемоглобин",
        "Инсулин",
        "Пепсин"
      ],
      "correctIndex": 0,
      "explanation": "Keratin is the tough, fibrous structural protein found in hair, nails, and the epidermis.",
      "explanationUz": "Keratin — soch, tirnoq va teriga mustahkamlik bag‘ishlovchi asosiy qattiq oqsildir.",
      "explanationRu": "Кератин — прочный фибриллярный белок покровных тканей.",
      "xpReward": 10
    },
    {
      "question": "Roughly how often are the cells of the skin's epidermis completely renewed?",
      "questionUz": "Terining epidermis qatlami hujayralari taxminan necha kunda butunlay yangilanadi?",
      "questionRu": "Примерно за сколько дней клетки эпидермиса кожи полностью обновляются?",
      "options": [
        "Every 28 days",
        "Every 2 days",
        "Every 10 years",
        "Only once in a lifetime"
      ],
      "optionsUz": [
        "Har 28 kunda",
        "Har 2 kunda",
        "Har 10 yilda",
        "Inson umrida faqat bir marta"
      ],
      "optionsRu": [
        "Каждые 28 дней",
        "Каждые 2 дня",
        "Каждые 10 лет",
        "Только один раз в жизни"
      ],
      "correctIndex": 0,
      "explanation": "Epidermal cells travel to the surface and flake off, renewing completely in about 28 days.",
      "explanationUz": "Epidermis hujayralari pastdan yuqoriga ko‘tarilib, har 28 kunda to‘liq yangilanib turadi.",
      "explanationRu": "Цикл полного обновления клеток верхнего слоя кожи составляет около 28 дней.",
      "xpReward": 10
    },
    {
      "question": "What is the whitish crescent-shaped area at the base of the nail called?",
      "questionUz": "Tirnoq asosidagi oqish yarim oy shaklidagi soha qanday ataladi?",
      "questionRu": "Как называется светлая область в форме полумесяца у основания ногтя?",
      "options": [
        "Lunula",
        "Cortex",
        "Melanin",
        "Sebum"
      ],
      "optionsUz": [
        "Lunula",
        "Korteks",
        "Melanin",
        "Sebum"
      ],
      "optionsRu": [
        "Лунула (Lunula)",
        "Кортекс",
        "Меланин",
        "Себум"
      ],
      "correctIndex": 0,
      "explanation": "The lunula is the visible part of the nail matrix shaped like a small crescent moon.",
      "explanationUz": "Lunula — tirnoq matritsasining ko‘rinib turuvchi oq yarim oy shaklidagi qismidir.",
      "explanationRu": "Лунула — это видимая светлая серповидная часть матрикса ногтя.",
      "xpReward": 10
    }
  ]
},
{
  "id": "bones-muscles-joints",
  "slug": "suyaklar-mushaklar-va-bogimlar-harakat-tizimi",
  "title": "Bones, Muscles, & Joints — The Human Locomotor System",
  "titleUz": "Suyaklar, mushaklar va bo‘g‘imlar: Tanamizning tayanch-harakat tizimi",
  "titleRu": "Кости, мышцы и суставы — Опорно-двигательный аппарат",
  "subtitle": "Discover how 206 bones, over 600 muscles, and flexible joints work together to give your body shape, support your weight, and allow every movement.",
  "subtitleUz": "206 ta suyak, 600 dan ortiq mushak va bo‘g‘imlar qanday qilib tanamizga shakl beradi, butun vaznimizni ko‘taradi va barcha harakatlarni ta’minlaydi?",
  "subtitleRu": "Как 206 костей, более 600 мышц и суставы формируют тело, удерживают вес и позволяют двигаться.",
  "system": "Musculoskeletal System",
  "systemUz": "Tayanch-harakat tizimi",
  "systemRu": "Опорно-двигательный аппарат",
  "category": "musculoskeletal",
  "isPremium": true,
  "readingMinutes": 9,
  "medicallyReviewedBy": "KidsHealth Medical Experts",
  "reviewDate": "September 2023",
  "heroImage": "/body basics/bones.jpg",
  "diagramImage": "/body basics/bones.jpg",
  "galleryImages": [
    {
      "url": "/body basics/periosteum.png",
      "labelUz": "Suyakusti pardasi (Periosteum)",
      "labelEn": "Periosteum",
      "labelRu": "Надкостница (Periosteum)",
      "descriptionUz": "Suyak sirtidagi ushbu yupqa va zich parda suyak to‘qimasini oziqlantiruvchi nervlar va qon tomirlarini o‘z ichiga oladi.",
      "descriptionEn": "This thin, dense membrane on the surface of the bone contains nerves and blood vessels that help nourish bone tissue.",
      "descriptionRu": "Тонкая плотная оболочка на поверхности кости с нервами и сосудами для питания костной ткани."
    },
    {
      "url": "/body basics/compact-hard-bone.png",
      "labelUz": "Zich (qattiq) suyak (Compact Bone)",
      "labelEn": "Compact (Hard) Bone",
      "labelRu": "Компактное (твердое) вещество кости",
      "descriptionUz": "Bu turdagi suyak nihoyatda baquvvat, mustahkam va oqish rangga ega bo‘lib, suyakning tashqi qattiq qismini tashkil qiladi.",
      "descriptionEn": "This type of bone is strong, solid, and whitish in color. It makes up the hard outside portion of a bone.",
      "descriptionRu": "Прочная беловатая твердая наружная часть кости, выдерживающая колоссальные нагрузки."
    },
    {
      "url": "/body basics/cancellous-spongy-bone.png",
      "labelUz": "G‘ovak (bulutsimon) suyak (Cancellous Bone)",
      "labelEn": "Cancellous (Spongy) Bone",
      "labelRu": "Губчатое вещество кости",
      "descriptionUz": "Zich suyakning ichida joylashgan bo‘lib, g‘ovak bulutga o‘xshaydi va uning bo‘shliqlari suyak iligi bilan to‘lgan.",
      "descriptionEn": "This type of bone is located inside the compact bone. It looks like a sponge, with bone marrow filling its spaces.",
      "descriptionRu": "Находится внутри компактного слоя, напоминает губку, а его ячейки заполнены костным мозгом."
    },
    {
      "url": "/body basics/bone-marrow.png",
      "labelUz": "Suyak iligi (Bone Marrow)",
      "labelEn": "Bone Marrow",
      "labelRu": "Костный мозг",
      "descriptionUz": "Ko‘plab suyaklar ichidagi yumshoq suyak iligi tanadagi barcha qizil qon tanachalari, oq qon tanachalari va trombotsitlarni yaratadi.",
      "descriptionEn": "The soft bone marrow, which is found inside many bones, makes most of the body's red blood cells, white blood cells, and platelets.",
      "descriptionRu": "Мягкая кроветворная ткань внутри костей, создающая эритроциты, лейкоциты и тромбоциты."
    }
  ],
  "pronunciations": [
    {
      "term": "trabeculae",
      "phonetic": "truh-BEH-kyoo-lee",
      "meaningUz": "Trabekulalar — g‘ovak suyak ichidagi mikroskopik to‘rsimon suyak tolalari.",
      "meaningEn": "Mesh-like network of tiny bone pieces inside spongy bone.",
      "meaningRu": "Трабекулы — микроскопические костные перегородки губчатого вещества."
    },
    {
      "term": "osteoblasts",
      "phonetic": "AHS-tee-uh-blastz",
      "meaningUz": "Osteoblastlar — yangi suyak to‘qimasini quruvchi va sinishlarni tiklovchi hujayralar.",
      "meaningEn": "Cells that make new bone and help repair damage.",
      "meaningRu": "Остеобласты — клетки-строители, создающие костную ткань."
    },
    {
      "term": "osteoclasts",
      "phonetic": "AHS-tee-o-klasts",
      "meaningUz": "Osteoklastlar — eski suyak to‘qimasini parchalab, unga to‘g‘ri shakl beruvchi hujayralar.",
      "meaningEn": "Cells that break down bone and help sculpt and shape it.",
      "meaningRu": "Остеокласты — клетки, разрушающие старую костную ткань для её ремоделирования."
    },
    {
      "term": "synovial",
      "phonetic": "sih-NO-vee-ul",
      "meaningUz": "Sinovial bo‘g‘imlar — bo‘g‘im suyuqligi bilan to‘lgan, erkin harakatlanuvchi bo‘g‘imlar (tizza, tirsak, yelka).",
      "meaningEn": "Freely movable joints lubricated by synovial fluid.",
      "meaningRu": "Синовиальные суставы — свободно подвижные суставы со смазывающей жидкостью."
    }
  ],
  "sections": [
    {
      "title": "Bones: Structure, Composition & Bone Marrow",
      "titleUz": "Suyaklar: Tuzilishi, tarkibi va suyak iligi",
      "titleRu": "Кости: Строение, состав и костный мозг",
      "paragraphs": [
        "Bones provide support for our bodies and help form our shape. Although they're very light, bones are strong enough to support our entire weight. Bones also protect the organs in our bodies. The skull protects the brain and forms the shape of the face. The spinal cord is protected by the backbone. The ribs form a cage that shelters the heart and lungs, and the pelvis helps protect the bladder, part of the intestines, and reproductive organs.",
        "Bones are made up of a framework of collagen protein combined with calcium phosphate minerals that make them rock-hard. Bones store calcium and release it into the bloodstream when needed. Bones consist of compact bone (solid outside) and cancellous bone (spongy interior containing trabeculae).",
        "Inside the spongy bone is bone marrow, where stem cells produce all red blood cells (carrying oxygen), platelets (clotting cuts), and white blood cells (fighting germs). Ligaments attach bones to other bones, and smooth cartilage in joints stops bones from grinding against each other."
      ],
      "paragraphsUz": [
        "Suyaklar tanamizga mustahkam tayanch bo‘ladi va qomatimiz shaklini belgilaydi. Juda yengil bo‘lishiga qaramay, suyaklar butun tana vaznimizni ko‘tarib turadigan darajada kuchlidir! Suyaklar, shuningdek, eng nozik ichki a’zolarimizni himoya qiladi: kalla suyagi bosh miyani asraydi va yuz qiyofasini yaratadi; umurtqa pog‘onasi orqa miyani himoyalaydi; qovurg‘alar ko‘krak qafasini hosil qilib, yurak va o‘pkani o‘rab turadi; tos suyagi esa qovuq va ichaklarni asraydi.",
        "Suyaklar nimadan tashkil topgan? Ular kollagen oqsili karkasi hamda uni toshdek qattiq qiluvchi kalsiy fosfat mineralidan tuzilgan. Suyaklar tanadagi kalsiyning asosiy ombori bo‘lib, qonda kalsiy kamaysa, suyaklar uni qonga ajratib beradi. D vitamini va sut mahsulotlari suyaklarni mustahkamlashda beqiyosdir.",
        "Suyak ikki qatlamdan iborat: tashqi zich suyak (fil suyagidek qattiq, qon tomirlar o‘tadigan kanallari bor) va ichki g‘ovak suyak (trabekulalardan iborat bulutsimon tuzilish). G‘ovak suyak ichida yumshoq suyak iligi joylashgan bo‘lib, undagi ildiz hujayralari har soniyada millionlab eritrotsitlar (kislorod tashuvchilar), trombotsitlar (qonni ivituvchilar) va leykotsitlar (mikroblarga qarshi jangchilar) yaratadi! Suyaklar bir-biriga boylamlar (ligaments) bilan bog‘lanadi, bo‘g‘imlardagi elastik tog‘aylar (cartilage) esa suyaklarning bir-biriga ishqalanishini oldini oladi."
      ],
      "paragraphsRu": [
        "Кости служат каркасом тела, защищают внутренние органы: череп защищает мозг, ребра — сердце и легкие, позвоночник — спинной мозг. Кость состоит из коллагена и фосфата кальция.",
        "Компактное вещество образует наружный прочный слой, а губчатое вещество содержит трабекулы и красный костный мозг.",
        "Костный мозг вырабатывает эритроциты, лейкоциты и тромбоциты. Связки скрепляют кости, а хрящи обеспечивают плавное скольжение в суставах."
      ]
    },
    {
      "title": "How Do Bones Grow? Growth Plates & Bone Cells",
      "titleUz": "Suyaklar qanday o‘sadi? O‘sish zonalari va suyak hujayralari",
      "titleRu": "Как растут кости? Зоны роста и костные клетки",
      "paragraphs": [
        "The bones of kids and young teens contain 'growing zones' called growth plates. These plates consist of multiplying cartilage cells that grow in length, and then change into hard, mineralized bone.",
        "Bone-building continues throughout life through three specialized types of cells: osteoblasts (make new bone and repair fractures), osteocytes (mature bone cells that maintain bone architecture), and osteoclasts (break down old bone to reshape and sculpt it)."
      ],
      "paragraphsUz": [
        "Bolalar va o‘smirlarning suyaklarida «o‘sish zonalari» — o‘sish plastinkalari (growth plates) mavjud. Ushbu plastinkalar bo‘linib ko‘payadigan tog‘ay hujayralaridan iborat bo‘lib, ular uzunlikka qarab o‘sadi va keyinchalik qattiq mineral suyakka aylanadi. Qizlar o‘g‘il bolalarga qaraganda ertaroq voyaga yetgani sababli, ularning o‘sish plastinkalari ertaroq suyaklanadi.",
        "Suyak qurilishi butun umr davom etadi, chunki tana suyak to‘qimasini doimiy yangilab turadi. Suyakda 3 xil mohir hujayralar ishlaydi:",
        "1. Osteoblastlar: Yangi suyak to‘qimasini hosil qiladi va sinishlarni tezda davolaydi.",
        "2. Osteotsitlar: Yetuk suyak hujayralari bo‘lib, yangi suyak shakllanishini nazorat qilib turadi.",
        "3. Osteoklastlar: Eskirgan suyak moddasini eritib tozalaydi va suyakka chiroyli va qulay shakl beradi."
      ],
      "paragraphsRu": [
        "У детей кости растут за счет зон роста (пластинок роста), где хрящевые клетки делятся и превращаются в твердую кость.",
        "В костях непрерывно работают остеобласты (строят новую кость), остеоциты (поддерживают ее) и остеокласты (рассасывают старую кость для обновления)."
      ]
    },
    {
      "title": "Muscles: Skeletal, Smooth, and Cardiac",
      "titleUz": "Mushaklar: Skelet, silliq va yurak mushaklari",
      "titleRu": "Мышцы: Скелетные, гладкие и сердечные",
      "paragraphs": [
        "Muscles pull on joints, allowing us to move. Humans have three different kinds of muscles:",
        "1. Skeletal muscle is attached by cord-like tendons to bone (arms, legs, face). These striated muscles contract quickly and powerfully under conscious control, but tire easily.",
        "2. Smooth (involuntary) muscle lines the walls of internal organs like the stomach, intestines, and blood vessels. It contracts automatically without tiring easily.",
        "3. Cardiac muscle is found exclusively in the heart. Its rhythmic, powerful contractions pump blood continuously throughout life."
      ],
      "paragraphsUz": [
        "Mushaklar bo‘g‘imlarni tortib, tanani harakatga keltiradi. Inson vujudida 3 xil mushak turi mavjud:",
        "1. Skelet (ko‘ndalang-targ‘il) mushaklari: Paylar (tendons) orqali to‘g‘ridan-to‘g‘ri suyaklarga birikadi (oyoq, qo‘l, yuz). Ular inson xohishi bilan boshqariladi (ixtiyoriy mushaklar), juda tez va kuchli qisqaradi, ammo tez charchaydi.",
        "2. Silliq mushaklar: Oshqozon, ichaklar va qon tomirlar devorini hosil qiladi. Ular avtomatik (ixtiyorsiz) ishlaydi, ovqatni hazm yo‘lida suradi va qon bosimini ushlab turadi. Sekin qisqaradi, ammo hech charchamaydi.",
        "3. Yurak mushagi (miokard): Faqat yurak devorida uchraydi. Ritmik va qudratli qisqarishlar orqali bir umr qonni butun vujud bo‘ylab tinimsiz haydab beradi."
      ],
      "paragraphsRu": [
        "Человек имеет 3 типа мышц: скелетные (произвольные, прикрепляются к костям сухожилиями), гладкие (внутренние органы, сосуды, работают автоматически) и сердечные (миокард, перекачивающий кровь)."
      ]
    },
    {
      "title": "How Muscles Work: Motor Cortex & Muscle Pairs",
      "titleUz": "Mushaklar qanday ishlaydi? Bosh miya nazorati va juft mushaklar",
      "titleRu": "Как работают мышцы: Моторная кора и парная работа",
      "paragraphs": [
        "Movements are controlled by the cerebral motor cortex and cerebellum. When you decide to move, signals travel through the spinal cord and peripheral nerves.",
        "Muscles move body parts by contracting and then relaxing. Muscles can pull bones, but they cannot push them back. So they work in pairs of flexors and extensors. For example, the biceps (flexor) bends the elbow, then relaxes as the triceps (extensor) contracts to straighten it."
      ],
      "paragraphsUz": [
        "Mushaklar harakatini bosh miyaning motor qobig‘i va miyacha (cerebellum) muvofiqlashtiradi. Siz qo‘lingizni ko‘tarmoqchi bo‘lsangiz, miya nervlar orqali impuls yuboradi.",
        "Mushaklar suyaklarni faqat o‘ziga qarab TORTA OLADI, lekin ularni orqaga ITARA OLMAYDI! Shu sababli mushaklar doimo juft bo‘lib (bukuvchi va yozuvchi / flexor va extensor) ishlaydi.",
        "Masalan: tirsakni bukkanda qo‘lning old qismidagi bitseps (bukuvchi) qisqaradi. Tirsakni to‘g‘rilash uchun esa bitseps bo‘shashadi va qo‘l orqasidagi tritseps (yozuvchi) qisqarib, qo‘lni yozadi!"
      ],
      "paragraphsRu": [
        "Моторная кора мозга и мозжечок управляют сокращением мышц. Мышцы могут только тянуть кость, но не толкать её назад, поэтому они работают парами: сгибатели (бицепс) и разгибатели (трицепс)."
      ]
    },
    {
      "title": "Joints: Immovable, Partially Movable, and Freely Movable",
      "titleUz": "Bo‘g‘imlar: Harakatsiz, yarim harakatli va erkin harakatlanuvchi",
      "titleRu": "Суставы: Неподвижные, полуподвижные и свободные",
      "paragraphs": [
        "Joints are where two bones meet, giving the skeleton flexibility. They are classified into three types:",
        "1. Immovable (Fibrous) joints do not move, such as the sutures holding the bony plates of the skull together and holding teeth in the jaw.",
        "2. Partially Movable (Cartilaginous) joints move a little and are linked by cartilage, like the vertebrae in the spine.",
        "3. Freely Movable (Synovial) joints move in many directions and are lubricated with synovial fluid. They include hinge joints (knees, elbows), pivot joints (head rotating on neck), and ball-and-socket joints (hips, shoulders)."
      ],
      "paragraphsUz": [
        "Bo‘g‘imlar — bu ikki yoki undan ortiq suyaklar uchrashadigan joydir. Harakatlanish darajasiga ko‘ra bo‘g‘imlar 3 turga bo‘linadi:",
        "1. Harakatsiz (tolali / fibrous) bo‘g‘imlar: Umuman qimirlamaydi. Masalan, kalla suyagi plastinkalari orasidagi choklar va tishlarni jag‘ suyagida ushlab turuvchi bo‘g‘imlar.",
        "2. Qisman harakatlanuvchi (tog‘ayli / cartilaginous) bo‘g‘imlar: Bir oz egiluvchan bo‘lib, tog‘ay orqali tutashgan. Bunga umurtqa pog‘onasi disklari misol bo‘ladi — har bir umurtqa ozgina qimirlab, butun qomatga ajoyib egiluvchanlik beradi.",
        "3. Erkin harakatlanuvchi (sinovial / synovial) bo‘g‘imlar: Turli yo‘nalishlarda keng harakatlanadi va maxsus sinovial suyuqlik (moylosh vositasi) bilan to‘ldirilgan. Ularning 3 ta asosiy turi bor:",
        "• Oshiq-momiq (hinge) bo‘g‘imlar: Eshik oshiq-moshig‘idek faqat bitta yo‘nalishda ochilib-yopiladi (tizza va tirsaklar).",
        "• O‘qli (pivot) bo‘g‘imlar: O‘z o‘qi atrofida aylanadi (boshni o‘ngga-chapga buruvchi bo‘yin bo‘g‘imi).",
        "• Sharsimon (ball-and-socket) bo‘g‘imlar: Eng erkin harakatni ta’minlaydi, suyakning sharsimon uchi boshqa suyak kosachasiga tushadi (yelka va tos-chanoq bo‘g‘imlari)."
      ],
      "paragraphsRu": [
        "Суставы делятся на неподвижные (швы черепа), полуподвижные (хрящевые диски позвоночника) и свободно подвижные синовиальные (шарнирные — колени/локти, цилиндрические — шея, шаровидные — плечи/тазобедренные)."
      ]
    }
  ],
  "funFacts": [
    {
      "en": "At birth, a human baby has about 300 bones, but adults have only 206 because many fuse together as we grow!",
      "uz": "Chaqaloq tug‘ilganida 300 ga yaqin suyakka ega bo‘ladi, ammo o‘sgan sari ko‘plari birlashib ketib, kattalarda atigi 206 ta suyak qoladi!",
      "ru": "При рождении у младенца около 300 костей, а у взрослого — всего 206, так как многие кости срастаются!"
    },
    {
      "en": "The smallest bone in the human body is the stapes (stirrup) inside the ear, measuring just 3 millimeters!",
      "uz": "Inson tanasidagi eng kichik suyak quloq ichidagi uzangi (stapes) suyagi bo‘lib, uzunligi bor-yo‘g‘i 3 millimetrga teng!",
      "ru": "Самая крошечная кость — стремечко в ухе, её размер всего около 3 миллиметров!"
    }
  ],
  "takeaways": [
    {
      "en": "Bones support the body, protect organs, and produce all blood cells inside the bone marrow.",
      "uz": "Suyaklar tanaga tayanch beradi, a’zolarni himoyalaydi va suyak iligida barcha qon hujayralarini yaratadi.",
      "ru": "Кости защищают органы, служат опорой и создают клетки крови в костном мозге."
    },
    {
      "en": "Muscles work in opposing pairs (flexors and extensors) and are controlled by the motor cortex and cerebellum.",
      "uz": "Mushaklar doimo juft bo‘lib (bukuvchi va yozuvchi) ishlaydi va motor po‘stlog‘i orqali boshqariladi.",
      "ru": "Мышцы работают парно (сгибатели и разгибатели) под контролем двигательной коры мозга."
    },
    {
      "en": "Freely movable synovial joints like knees and shoulders allow effortless motion cushioned by cartilage and fluid.",
      "uz": "Sinovial bo‘g‘imlar tog‘ay va bo‘g‘im suyuqligi yordamida yengil va erkin harakatlanish imkonini beradi.",
      "ru": "Синовиальные суставы смазываются жидкостью и обеспечивают плавное движение конечностей."
    }
  ],
  "quiz": [
    {
      "question": "Where are red blood cells, white blood cells, and platelets produced in the body?",
      "questionUz": "Qizil qon tanachalari, leykotsitlar va trombotsitlar tananing qayerida yaratiladi?",
      "questionRu": "Где в организме образуются эритроциты, лейкоциты и тромбоциты?",
      "options": [
        "In the bone marrow inside spongy bone",
        "In the stomach lining",
        "In the fingernails",
        "In the cerebral cortex"
      ],
      "optionsUz": [
        "G‘ovak suyak ichidagi suyak iligida",
        "Oshqozon shilliq qavatida",
        "Tirnoq plastinkalarida",
        "Bosh miya po‘stlog‘ida"
      ],
      "optionsRu": [
        "В костном мозге внутри губчатого вещества кости",
        "В стенке желудка",
        "В ногтевых пластинах",
        "В коре головного мозга"
      ],
      "correctIndex": 0,
      "explanation": "Bone marrow contains stem cells that generate virtually all blood cells.",
      "explanationUz": "Suyak iligidagi ildiz hujayralari barcha qon elementlarini ishlab chiqaradi.",
      "explanationRu": "Костный мозг — главный кроветворный орган тела.",
      "xpReward": 10
    },
    {
      "question": "Why do muscles work in pairs of flexors and extensors?",
      "questionUz": "Nima uchun mushaklar juft bo‘lib (bukuvchi va yozuvchi) ishlaydi?",
      "questionRu": "Почему мышцы работают парами (сгибатели и разгибатели)?",
      "options": [
        "Muscles can only pull bones, they cannot push them back",
        "Because one muscle sleeps while the other is awake",
        "To increase body temperature to 40 degrees",
        "Because bones have no nerves"
      ],
      "optionsUz": [
        "Mushaklar suyakni faqat torta oladi, lekin uni orqaga itara olmaydi",
        "Chunki bittasi uxlaganda ikkinchisi ishlaydi",
        "Tana haroratini 40 darajaga ko‘tarish uchun",
        "Chunki suyaklarda nervlar bo‘lmaydi"
      ],
      "optionsRu": [
        "Мышцы могут только тянуть кость, но не могут толкать её обратно",
        "Потому что одна мышца спит, пока другая работает",
        "Чтобы повысить температуру тела",
        "Так как в костях нет нервов"
      ],
      "correctIndex": 0,
      "explanation": "Muscles contract to pull, so an opposing extensor is needed to pull the bone back.",
      "explanationUz": "Mushaklar faqat tortishga qodir, orqaga qaytarish uchun qarama-qarshi mushak zarur.",
      "explanationRu": "Мышечные волокна работают только на укорочение (тягу).",
      "xpReward": 10
    },
    {
      "question": "Which type of joint provides the greatest freedom of movement, such as in the shoulders and hips?",
      "questionUz": "Qaysi turdagi bo‘g‘im yelka va tos-chanoqdagi kabi eng erkin harakatni ta’minlaydi?",
      "questionRu": "Какой тип сустава обеспечивает наибольшую свободу движений (плечи, тазобедренные)?",
      "options": [
        "Ball-and-socket joint",
        "Fibrous cranial suture",
        "Immovable tooth socket",
        "Hinge joint"
      ],
      "optionsUz": [
        "Sharsimon (ball-and-socket) bo‘g‘im",
        "Kalla suyagi tolali choki",
        "Harakatsiz tish uyasi",
        "Oshiq-momiq bo‘g‘im"
      ],
      "optionsRu": [
        "Шаровидный сустав (Ball-and-socket)",
        "Шов черепа",
        "Зубная связка",
        "Блоковидный сустав"
      ],
      "correctIndex": 0,
      "explanation": "Ball-and-socket joints allow 360-degree rotational and multidirectional movement.",
      "explanationUz": "Sharsimon bo‘g‘imlar har tomonlama aylanma va erkin harakatlanish imkonini beradi.",
      "explanationRu": "Шаровидные суставы имеют наибольший диапазон вращения.",
      "xpReward": 10
    }
  ]
},
{
  "id": "ears-hearing-balance",
  "slug": "quloqlar-va-eshitish-tizimi-muvozanat",
  "title": "All About Ears — Hearing Sound & Balancing the Body",
  "titleUz": "Quloqlar: Tovushlarni eshitish va muvozanatni saqlash a’zosi",
  "titleRu": "Всё об ушах — Слух и чувство равновесия",
  "subtitle": "Explore how the outer, middle, and inner ear turn air vibrations into sounds and keep you standing upright without falling.",
  "subtitleUz": "Tashqi, o‘rta va ichki quloq havoning ko‘rinmas to‘lqinlarini qanday qilib yoqimli tovushlarga aylantiradi va muvozanatimizni qanday saqlaydi?",
  "subtitleRu": "Как наружное, среднее и внутреннее ухо преобразуют колебания воздуха в звуки и обеспечивают равновесие.",
  "system": "Auditory & Sensory System",
  "systemUz": "Eshitish va sezgi tizimi",
  "systemRu": "Слуховая и сенсорная система",
  "category": "sensory",
  "isPremium": true,
  "readingMinutes": 5,
  "medicallyReviewedBy": "KidsHealth Medical Experts",
  "reviewDate": "January 2024",
  "heroImage": "/body basics/default-anatomy.svg",
  "diagramImage": "/body basics/default-anatomy.svg",
  "pronunciations": [
    {
      "term": "ossicles",
      "phonetic": "AH-sih-kuls",
      "meaningUz": "Eshitish suyakchalari — o‘rta quloqdagi 3 ta mitti suyakcha (bolg‘acha, sandoncha, uzangicha).",
      "meaningEn": "The three tiny bones in the middle ear (malleus, incus, stapes).",
      "meaningRu": "Слуховые косточки среднего уха (молоточек, наковальня, стремечко)."
    },
    {
      "term": "cochlea",
      "phonetic": "KOH-klee-uh",
      "meaningUz": "Chig‘anoq — ichki quloqdagi tovush tebranishlarini nerv signallariga aylantiruvchi shilliqurt shaklidagi organ.",
      "meaningEn": "The snail-shaped organ in the inner ear that turns vibrations into nerve signals.",
      "meaningRu": "Улитка — спиральный орган внутреннего уха, преобразующий звук в нервные импульсы."
    },
    {
      "term": "Eustachian",
      "phonetic": "yoo-STAY-she-en",
      "meaningUz": "Evstaxiy naychasi — o‘rta quloqni tomoq bilan bog‘lab, havo bosimini tenglashtiruvchi naycha.",
      "meaningEn": "The narrow tube connecting the middle ear to the throat to balance air pressure.",
      "meaningRu": "Евстахиева труба — выравнивает давление воздуха с обеих сторон барабанной перепонки."
    }
  ],
  "sections": [
    {
      "title": "Outer, Middle, & Inner Ear: How We Hear",
      "titleUz": "Tashqi, o‘rta va ichki quloq: Tovush qanday eshitiladi?",
      "titleRu": "Наружное, среднее и внутреннее ухо: Механизм слуха",
      "paragraphs": [
        "The ear is made up of three different sections: outer ear, middle ear, and inner ear. The outer ear consists of the pinna (or auricle, which gathers sound waves like a funnel) and the ear canal, where glands make earwax to trap dirt and prevent infections.",
        "The middle ear is separated by the eardrum (tympanic membrane). When sound hits the eardrum, it vibrates three tiny bones called ossicles: the malleus (hammer), incus (anvil), and stapes (stirrup, the smallest bone in the body!). The Eustachian tube connects to the back of the throat to equalize pressure so your ears 'pop' when altitude changes.",
        "In the inner ear, the snail-shaped cochlea turns vibrations into nerve signals sent through the cochlear nerve to the brain."
      ],
      "paragraphsUz": [
        "Quloq 3 ta asosiy bo‘limdan iborat bo‘lib, ular birgalikda tovushlarni yig‘ib, miyaga uzatadi:",
        "1. Tashqi quloq: Boshimizning yon tomonida ko‘rinib turuvchi quloq suprasi (auricle / OR-ih-kul) va eshitish yo‘lidan iborat. Supraning vazifasi tovush to‘lqinlarini xuddi voronka kabi tutib, quloq kanaliga yo‘naltirishdir. Kanal ichidagi bezlar quloq oltingugurti (earwax) ishlab chiqaradi — u changlarni tutib qoladi va infeksiyalardan himoya qiladi.",
        "2. O‘rta quloq: Tashqi quloqdan nog‘ora parda (eardrum) bilan ajralgan havoli bo‘shliq. Tovush to‘lqini nog‘ora pardaga urilganda, u tebranadi va o‘z navbatida inson tanasidagi eng mitti 3 ta suyakchani — ossikullarni (ossicles / AH-sih-kuls) harakatga keltiradi: bolg‘acha (malleus), sandoncha (incus) va uzangicha (stapes — inson tanasidagi eng kichik suyak!). Evstaxiy naychasi (yoo-STAY-she-en) esa o‘rta quloqni burun-tomoq orqasi bilan bog‘lab, tog‘ga chiqqanda yoki samolyotda havo bosimini tenglashtirib turadi.",
        "3. Ichki quloq: Shilliqurt chig‘anog‘iga o‘xshash chig‘anoq (cochlea / KOH-klee-uh) tebranishlarni elektr signallariga aylantiradi va eshitish nervi orqali miyaga jo‘natadi."
      ],
      "paragraphsRu": [
        "Наружное ухо улавливает звуки и направляет их по слуховому проходу к барабанной перепонке.",
        "В среднем ухе барабанная перепонка передает вибрации на три слуховые косточки: молоточек, наковальню и стремечко. Евстахиева труба выравнивает давление воздуха.",
        "Во внутреннем ухе улитка трансформирует колебания в нервные импульсы, которые идут в мозг."
      ]
    },
    {
      "title": "Balance & Semicircular Canals: Why We Get Dizzy",
      "titleUz": "Muvozanat va yarimaylana kanallar: Nega bosh aylanadi?",
      "titleRu": "Равновесие и полукружные каналы: Причина головокружения",
      "paragraphs": [
        "The semicircular canals look like three tiny connected tubes filled with fluid and lined with microscopic hairs. When your head moves, the fluid sloshes, bending the hairs.",
        "The hairs send position signals along the vestibular nerve to the brain. The brain then signals your muscles to adjust and keep your balance.",
        "When you spin around and suddenly stop, you feel dizzy because the fluid in the semicircular canals keeps sloshing for a few moments, tricking your brain into thinking you're still spinning!"
      ],
      "paragraphsUz": [
        "Ichki quloqda 3 ta o‘zaro ulangan yarimaylana kanallar (semicircular canals) joylashgan bo‘lib, ularning vazifasi tananing muvozanatini saqlashdir. Bu kanallar maxsus suyuqlik bilan to‘lgan va tubi mikroskopik tukchalar bilan qoplangan.",
        "Boshingizni qimirlatganingizda, kanallardagi suyuqlik chayqaladi va tukchalarni egadi. Tukchalar esa vestibulyar nerv (veh-STIB-yuh-ler) orqali bosh miyaga tananing fazodagi holati haqida darhol xabar beradi. Miya esa mushaklarga signal berib, yiqilib tushmasligingizni ta’minlaydi.",
        "Karuselda yoki o‘z o‘qingiz atrofida tez aylanib to‘xtaganingizda nega boshingiz aylanadi? Chunki siz to‘xtasangiz ham, quloqdagi suyuqlik inersiya bilan bir necha soniya chayqalishda davom etadi! Miya esa sizni hali ham aylanayapti deb o‘ylaydi. Suyuqlik tinchigach, bosh aylanishi ham o‘tib ketadi."
      ],
      "paragraphsRu": [
        "Три полукружных канала внутреннего уха заполнены жидкостью и волосковыми рецепторами. Они сообщают мозгу о наклоне и движении головы.",
        "При резкой остановке после вращения жидкость по инерции продолжает двигаться, вызывая ощущение головокружения."
      ]
    },
    {
      "title": "Ear Health & Hearing Protection",
      "titleUz": "Quloq salomatligi va eshitishni asrash qoidalari",
      "titleRu": "Здоровье ушей и защита слуха",
      "paragraphs": [
        "Never stick cotton swabs, fingers, or sharp objects into your ears. Doing so can scratch the ear canal, pack earwax tightly against the eardrum, or rupture the eardrum.",
        "Protect your hearing from loud noise. Turn down the volume on smartphones and headphones. Wear earplugs at concerts, races, or noisy power tools. Tiny earbuds at maximum volume can damage hearing as much as a chainsaw!"
      ],
      "paragraphsUz": [
        "Quloqlarni asrash uchun oltin qoidalar:",
        "1. Paxtali tayoqchalar, gugurt yoki tirnoqlarni quloq ichiga aslo tiqmang! Ular quloq yo‘lini tirnashi, oltingugurtni yanada chuqurroq tiqib qo‘yishi va hatto nog‘ora pardani teshib qo‘yishi mumkin.",
        "2. Quloqchinlarda (naushniklarda) musiqani baland qo‘ymang. Maksimal balandlikda tinglangan kichik quloqchin ham xuddi ulkan benzinli arra (chainsaw) kabi eshitish hujayralarini bir umrga nobud qilishi mumkin!",
        "3. Konsertlar va shovqinli joylarda quloq himoyachilaridan (quloq tiqinlari) foydalaning."
      ],
      "paragraphsRu": [
        "Не вставляйте ватные палочки глубоко в ухо. Снижайте громкость в наушниках — громкий звук разрушает слуховые рецепторы безвозвратно."
      ]
    }
  ],
  "funFacts": [
    {
      "en": "The stapes bone in your middle ear is only 3 millimeters long — smaller than a grain of rice!",
      "uz": "O‘rta quloqdagi uzangi suyagi bor-yo‘g‘i 3 millimetr uzunlikka ega — guruch donasidan ham kichik!",
      "ru": "Стремечко в среднем ухе имеет длину всего 3 мм — меньше рисового зернышка!"
    },
    {
      "en": "Your ears never stop working, even when you are asleep; your brain just ignores sounds so you can rest.",
      "uz": "Siz uxlayotganingizda ham quloqlaringiz eshitishdan to‘xtamaydi; faqat miya dam olishingiz uchun tovushlarni e’tiborsiz qoldiradi.",
      "ru": "Уши не перестают слышать даже во сне — мозг просто фильтрует привычные звуки."
    }
  ],
  "takeaways": [
    {
      "en": "The ear handles both hearing (via cochlea) and balance (via semicircular canals).",
      "uz": "Quloq bir vaqtning o‘zida eshitish (chig‘anoq) va muvozanatni saqlash (yarimaylana kanallar) vazifasini bajaradi.",
      "ru": "Ухо отвечает и за слух (улитка), и за координацию равновесия (полукружные каналы)."
    },
    {
      "en": "Three tiny ossicles vibrate to carry sound waves from the eardrum to the inner ear.",
      "uz": "Nog‘ora pardadagi tebranishlarni 3 ta mitti suyakcha ichki quloqqa yetkazadi.",
      "ru": "Три слуховые косточки усиливают и передают звук во внутреннее ухо."
    },
    {
      "en": "Protect hearing by keeping headphone volumes moderate and avoiding sticking objects into the ear canal.",
      "uz": "Quloqchin ovozini me’yorda tuting va quloq ichiga hech narsa tiqmang.",
      "ru": "Берегите слух от громких наушников и не очищайте слуховой проход острыми предметами."
    }
  ],
  "quiz": [
    {
      "question": "What is the smallest bone in the human body?",
      "questionUz": "Inson tanasidagi eng kichik suyak qaysi?",
      "questionRu": "Какая самая маленькая кость в теле человека?",
      "options": [
        "Stapes (stirrup) in the middle ear",
        "Femur in the thigh",
        "Clavicle in the shoulder",
        "Patella in the knee"
      ],
      "optionsUz": [
        "O‘rta quloqdagi uzangicha (stapes)",
        "Son suyagi",
        "O‘mrov suyagi",
        "Tizza qopqog‘i"
      ],
      "optionsRu": [
        "Стремечко (stapes) в среднем ухе",
        "Бедренная кость",
        "Ключица",
        "Надколенник"
      ],
      "correctIndex": 0,
      "explanation": "The stapes in the middle ear is only about 3 millimeters long.",
      "explanationUz": "O‘rta quloqdagi uzangicha atigi 3 mm uzunlikda bo‘lib, eng kichik suyakdir.",
      "explanationRu": "Стремечко достигает лишь 3 миллиметров в длину.",
      "xpReward": 10
    },
    {
      "question": "Which part of the inner ear is responsible for maintaining balance?",
      "questionUz": "Ichki quloqning qaysi qismi muvozanatni saqlashga javobgar?",
      "questionRu": "Какая часть внутреннего уха отвечает за поддержание равновесия?",
      "options": [
        "Semicircular canals",
        "Tympanic membrane",
        "Earlobe",
        "Pinna"
      ],
      "optionsUz": [
        "Yarimaylana kanallar (semicircular canals)",
        "Nog‘ora parda",
        "Quloq solinchagi",
        "Quloq suprasi"
      ],
      "optionsRu": [
        "Полукружные каналы",
        "Барабанная перепонка",
        "Мочка уха",
        "Ушная раковина"
      ],
      "correctIndex": 0,
      "explanation": "The fluid and sensory hairs in the semicircular canals monitor body position and balance.",
      "explanationUz": "Yarimaylana kanallardagi suyuqlik va tukchalar bosh harakatini kuzatib, muvozanatni saqlaydi.",
      "explanationRu": "Полукружные каналы с жидкостью определяют положение тела в пространстве.",
      "xpReward": 10
    }
  ]
},
{
  "id": "metabolism-energy",
  "slug": "metabolizm-moddalar-almashinuvi-va-energiya",
  "title": "All About Metabolism — Transforming Food into Life Energy",
  "titleUz": "Metabolizm: Taomni hayotiy energiyaga aylantiruvchi mo‘jiza",
  "titleRu": "Всё о метаболизме — Превращение пищи в энергию",
  "subtitle": "Discover how billions of chemical reactions break down nutrients, build cells, burn calories, and regulate your body's engine.",
  "subtitleUz": "Organizmimizdagi milliardlab kimyoviy reaksiyalar ozuqani qanday qilib harakat va hayotiy quvvatga aylantiradi?",
  "subtitleRu": "Как непрерывные химические реакции расщепляют пищу, сжигают калории и питают клетки энергией.",
  "system": "Metabolic & Endocrine System",
  "systemUz": "Metabolizm va gormonlar",
  "systemRu": "Метаболическая система",
  "category": "metabolic",
  "isPremium": true,
  "readingMinutes": 7,
  "medicallyReviewedBy": "Larissa Hirsch, MD (KidsHealth Medical Experts)",
  "reviewDate": "November 2025",
  "heroImage": "/body basics/default-anatomy.svg",
  "diagramImage": "/body basics/default-anatomy.svg",
  "pronunciations": [
    {
      "term": "metabolism",
      "phonetic": "meh-TAB-uh-liz-um",
      "meaningUz": "Metabolizm (moddalar almashinuvi) — taomni energiyaga va tana to‘qimalariga aylantiruvchi kimyoviy reaksiyalar yig‘indisi.",
      "meaningEn": "The chemical reactions in cells that change food into energy.",
      "meaningRu": "Метаболизм (обмен веществ) — совокупность химических реакций превращения пищи в энергию."
    },
    {
      "term": "anabolism",
      "phonetic": "uh-NAB-uh-liz-um",
      "meaningUz": "Anabolizm — yangi to‘qimalarni qurish, o‘sish va energiyani zaxiraga to‘plash jarayoni.",
      "meaningEn": "Constructive metabolism that builds new cells and stores energy.",
      "meaningRu": "Анаболизм — пластический обмен, созидание новых клеток и накопление энергии."
    },
    {
      "term": "catabolism",
      "phonetic": "kuh-TAB-uh-liz-um",
      "meaningUz": "Katabolizm — murakkab moddalarni parchalab, hayot uchun energiya ajratib olish jarayoni.",
      "meaningEn": "Destructive metabolism that breaks down molecules to release energy.",
      "meaningRu": "Катаболизм — энергетический обмен, расщепление молекул с выделением тепла и сил."
    }
  ],
  "sections": [
    {
      "title": "What Is Metabolism & How Does It Work?",
      "titleUz": "Metabolizm nima va u qanday ishlaydi?",
      "titleRu": "Что такое метаболизм и как он работает?",
      "paragraphs": [
        "Metabolism (meh-TAB-uh-liz-um) is the set of chemical reactions in the body's cells that change food into energy. Your body needs this energy to do everything from moving and thinking to growing. Specific proteins in the body called enzymes control the chemical reactions of metabolism.",
        "After you eat, your digestive system breaks nutrients down: proteins become amino acids, fats turn into fatty acids, and carbohydrates become simple sugars like glucose. The blood absorbs these and carries them to cells to be burned for instant power or stored in the liver, muscles, and fat."
      ],
      "paragraphsUz": [
        "Metabolizm (meh-TAB-uh-liz-um) — bu inson hujayralarida iste’mol qilingan taomni hayotiy energiyaga aylantiruvchi murakkab kimyoviy reaksiyalar yig‘indisidir. Tanamiz bu energiyadan fikrlash, yugurish, nafas olish va ulg‘ayish uchun foydalanadi. Tanadagi fermentlar (enzymes) deb ataladigan maxsus oqsillar ushbu reaksiyalarni boshqaradi.",
        "Ovqatlangandan so‘ng hazm qilish a’zolari ozuqalarni mayda g‘ishtchalarga parchalaydi: oqsillar aminokislotalarga, yog‘lar yog‘ kislotalariga, uglevodlar esa oddiy qand moddalariga (glyukoza) aylanadi. Qon bu moddalarni butun vujud hujayralariga tashiydi — hujayralar esa ulardan zudlik bilan quvvat oladi yoki jigar va mushaklarda zaxiraga saqlab qo‘yadi."
      ],
      "paragraphsRu": [
        "Метаболизм — это комплекс химических реакций превращения пищи в энергию, управляемый ферментами.",
        "Белки превращаются в аминокислоты, жиры — в жирные кислоты, а углеводы — в глюкозу, питающую клетки."
      ]
    },
    {
      "title": "Anabolism vs. Catabolism & Hormonal Control",
      "titleUz": "Anabolizm va Katabolizm: Gormonal boshqaruv",
      "titleRu": "Анаболизм и катаболизм: Роль гормонов",
      "paragraphs": [
        "There are two types of metabolism working simultaneously: Anabolism (constructive metabolism that uses building blocks to create new cells, tissues, and store energy) and Catabolism (destructive metabolism that breaks down carbs and fats to release fuel, produce heat, and power muscles).",
        "Hormones control this rhythm: Thyroxine from the thyroid gland sets the overall speed of metabolism, while insulin from the pancreas directs cells to boost anabolism after meals."
      ],
      "paragraphsUz": [
        "Metabolizm bir vaqtda kechuvchi ikkita yo‘nalishga ega:",
        "1. Anabolizm (quruvchi metabolizm): Yangi hujayralarni o‘stirish, to‘qimalarni ta’mirlash va energiyani zaxiraga to‘plash jarayonidir. Kichik molekulalardan kattaroq oqsil va yog‘lar quriladi.",
        "2. Katabolizm (parchalovchi metabolizm): Hujayralar uglevod va yog‘larni parchalab, ulardan energiya va issiqlik ajratib oladi. Bu quvvat yurak urishi va harakatlanish uchun sarflanadi.",
        "Gormonlar nazorati: Qalqonsimon bez ishlab chiqaradigan tiroksin gormoni metabolizm tezligini belgilaydi. Oshqozon osti bezi ajratadigan insulin esa ovqatdan so‘ng ozuqalarni hujayralarga kiritib, anabolizmni faollashtiradi."
      ],
      "paragraphsRu": [
        "Анаболизм строит ткани и накапливает запасы, а катаболизм расщепляет вещества, давая энергию и тепло.",
        "Тироксин щитовидной железы и инсулин поджелудочной железы регулируют скорость и баланс этих процессов."
      ]
    },
    {
      "title": "Calories, Basal Metabolic Rate (BMR), & Improving Metabolism",
      "titleUz": "Kaloriyalar, asosiy almashinuv (BMR) va metabolizmni yaxshilash",
      "titleRu": "Калории, базовый обмен (BMR) и ускорение метаболизма",
      "paragraphs": [
        "A calorie measures energy. When you consume more calories than your body uses, the excess is stored as body fat. Basal Metabolic Rate (BMR) measures how many calories you burn while simply resting.",
        "Muscle burns more calories than fat, so people with higher muscle mass have a higher BMR. While you cannot change your genetics, staying active, lifting weights, eating lean protein, drinking water, and sleeping well optimize your metabolism."
      ],
      "paragraphsUz": [
        "Kaloriya — ozuqa beradigan energiya birligidir. Agar inson sarflaydiganidan ko‘proq kaloriya yesa, ortiqchasi tanada yog‘ zaxirasi sifatida to‘planadi. Asosiy almashinuv tezligi (BMR) inson mutlaqo dam olayotganda yoki uxlayotganda organizm qancha kaloriya yoqishini o‘lchaydi.",
        "Mushaklar yog‘ to‘qimasiga qaraganda ancha ko‘p kaloriya talab qiladi — mushakdor insonlar dam olayotganda ham ko‘proq energiya yoqishadi. Metabolizmni sog‘lom saqlash sirlari: muntazam faol jismoniy harakat, yetarli oqsil iste’mol qilish, suv ichish va to‘yib uxlashdir!"
      ],
      "paragraphsRu": [
        "Базовый обмен веществ (BMR) показывает расход калорий в состоянии покоя. Мышцы сжигают больше калорий, чем жир.",
        "Силовые тренировки, белок, правильный питьевой режим и сон помогают поддерживать высокий уровень метаболизма."
      ]
    }
  ],
  "funFacts": [
    {
      "en": "Every pound of muscle in your body burns roughly three times more calories at rest than a pound of fat!",
      "uz": "Inson tanasidagi har bir kilogramm mushak to‘qimasi xuddi shuncha yog‘ga qaraganda 3 barobar ko‘proq kaloriya yoqadi!",
      "ru": "Каждый килограмм мышц сжигает в состоянии покоя в 3 раза больше калорий, чем килограмм жира!"
    }
  ],
  "takeaways": [
    {
      "en": "Metabolism balances anabolism (building and storing) with catabolism (breaking down for energy).",
      "uz": "Metabolizm to‘qimalarni qurish (anabolizm) va energiya ajratish (katabolizm) muvozanatidir.",
      "ru": "Метаболизм объединяет процессы синтеза новых тканей и расщепления питательных веществ."
    },
    {
      "en": "Physical exercise builds lean muscle, boosting your basal metabolic rate even while you rest.",
      "uz": "Sport bilan shug‘ullanish mushaklarni mustahkamlab, dam olayotganda ham energiya sarfini oshiradi.",
      "ru": "Физическая активность развивает мышцы, повышая суточный расход энергии."
    }
  ],
  "quiz": [
    {
      "question": "What is the difference between anabolism and catabolism?",
      "questionUz": "Anabolizm va katabolizm o‘rtasidagi farq nima?",
      "questionRu": "В чем разница между анаболизмом и катаболизмом?",
      "options": [
        "Anabolism builds and stores, while catabolism breaks down molecules to release energy",
        "Anabolism only happens in the eyes",
        "Catabolism is a type of bone",
        "They are both ear infections"
      ],
      "optionsUz": [
        "Anabolizm to‘qimalarni quradi va saqlaydi, katabolizm esa moddalarni parchalab energiya ajratadi",
        "Anabolizm faqat ko‘zlarda sodir bo‘ladi",
        "Katabolizm bu suyakning bir turi",
        "Ularning ikkalasi ham quloq shamollashidir"
      ],
      "optionsRu": [
        "Анаболизм строит и накапливает, а катаболизм расщепляет молекулы с выделением энергии",
        "Анаболизм происходит только в глазах",
        "Катаболизм — это вид кости",
        "Оба термина относятся к ушным инфекциям"
      ],
      "correctIndex": 0,
      "explanation": "Anabolism constructs complex molecules; catabolism breaks them down for fuel.",
      "explanationUz": "Anabolizm yangi to‘qimalar yaratadi, katabolizm esa ularni parchalab quvvat hosil qiladi.",
      "explanationRu": "Анаболизм направлен на созидание, катаболизм — на извлечение энергии.",
      "xpReward": 10
    }
  ]
},
{
  "id": "the-nose-smell-breathing",
  "slug": "burun-va-hid-bilish-sezgisi-nafas-yoli",
  "title": "The Nose — Smelling Scents & The Main Breathing Gateway",
  "titleUz": "Burun: Hid bilish sirlari va nafas olishning bosh darvozasi",
  "titleRu": "Нос — Обоняние и главные дыхательные ворота",
  "subtitle": "Discover how your nose warms, humidifies, and filters air, detects 10,000 scents with 10 million receptors, and helps you taste food.",
  "subtitleUz": "Burun qanday qilib havoni isitadi va tozalaydi, 10 000 xil hidni qanday ajratadi va taom lazzatini his qilishga qanday yordam beradi?",
  "subtitleRu": "Как нос согревает и фильтрует воздух, различает 10 000 запахов и помогает чувствовать вкус еды.",
  "system": "Respiratory & Olfactory System",
  "systemUz": "Nafas va hid bilish tizimi",
  "systemRu": "Дыхательная и обонятельная система",
  "category": "respiratory",
  "isPremium": true,
  "readingMinutes": 5,
  "medicallyReviewedBy": "KidsHealth Medical Experts",
  "reviewDate": "January 2023",
  "heroImage": "/body basics/how-does-the-nose-help-with-breathing.gif",
  "diagramImage": "/body basics/how-does-the-nose-help-with-breathing.gif",
  "pronunciations": [
    {
      "term": "septum",
      "phonetic": "SEP-tum",
      "meaningUz": "Burun to‘sig‘i — burun teshiklarini ikkiga ajratib turuvchi suyak va tog‘ayli devor.",
      "meaningEn": "The wall separating the two nostrils and nasal passages.",
      "meaningRu": "Носовая перегородка — хрящевая и костная пластинка, разделяющая нос на две половины."
    },
    {
      "term": "cilia",
      "phonetic": "SILL-ee-uh",
      "meaningUz": "Xillpillovchi kiprikchalar — burun shilliq qavatidagi mikroblar va changlarni tashqariga haydovchi mayda tukchalar.",
      "meaningEn": "Microscopic hairs moving mucus and dust out of air passages.",
      "meaningRu": "Реснички — микроскопические волоски, выводящие слизь и пыль из дыхательных путей."
    },
    {
      "term": "olfactory",
      "phonetic": "ol-FAK-tuh-ree",
      "meaningUz": "Olfaсtory (hid bilish) — hid molekulalarini sezish va miyaga xabar yuborish bilan bog‘liq ilmiy atama.",
      "meaningEn": "Relating to the sense of smell.",
      "meaningRu": "Обонятельный — относящийся к чувству обоняния и восприятию запахов."
    }
  ],
  "sections": [
    {
      "title": "What Does the Nose Do & Parts of the Nose",
      "titleUz": "Burun nima va uning anatomik tuzilishi",
      "titleRu": "Функции и анатомическое строение носа",
      "paragraphs": [
        "The nose lets you smell and is a big part of why you are able to taste things. The nose is also the main gateway to the respiratory system. It has two nostrils separated by the septum (SEP-tum). Closer to the tip, the septum is made of flexible cartilage.",
        "Behind the nose is the nasal cavity, which connects to the throat and is separated from the mouth by the palate."
      ],
      "paragraphsUz": [
        "Burun nafaqat hidlarni bilish imkonini beradi, balki taomning haqiqiy lazzatini his qilishimizda ham hal qiluvchi rol o‘ynaydi! Shuningdek, u nafas olish tizimining bosh darvozasidir. Burunda ikkita teshik (burun yo‘li) bo‘lib, ular burun to‘sig‘i (septum / SEP-tum) bilan ajralgan. Burun uchi elastik tog‘aydan (cartilage) tuzilgani sababli qimirlab turadi.",
        "Burunning orqasida burun bo‘shlig‘i joylashgan bo‘lib, u tomoq bilan tutashadi va og‘iz bo‘shlig‘idan qattiq va yumshoq tanglay bilan ajralgan."
      ],
      "paragraphsRu": [
        "Нос обеспечивает обоняние и дыхание, состоит из двух ноздрей, разделенных носовой перегородкой из хряща и кости."
      ]
    },
    {
      "title": "Breathing, Mucous Membrane, & Sneezing at 100 mph",
      "titleUz": "Nafas olish, shilliq qavat va soatiga 160 km tezlikdagi aksirish",
      "titleRu": "Дыхание, слизистая оболочка и чихание на скорости 160 км/ч",
      "paragraphs": [
        "When you inhale, the nose warms, moistens, and filters air before sending it down the trachea to the lungs. The inside is lined with a mucous membrane that makes mucus to capture dust and germs.",
        "Visible hairs trap large particles. If something irritates the nose, you sneeze — sending particles rocketing out at up to 100 mph (160 km/h)! Further back, microscopic cilia continually sweep mucus toward the throat."
      ],
      "paragraphsUz": [
        "Siz nafas olganingizda, burun o‘pkaga borayotgan sovuq va quruq havoni isitadi, namlaydi va changlardan tozalaydi. Burunning ichki sirti yupqa shilliq parda (mucous membrane) bilan qoplangan bo‘lib, u shilimshiq modda ishlab chiqaradi. Bu modda mikroblar va changlarni tutib qoladi.",
        "Agar burunga begona zarracha yoki chang kirsa, inson aksiradi. Aksirish paytida noxush zarrachalar burundan soatiga 160 kilometr (100 mph) tezlikda tashqariga otilib chiqadi! Burun ichidagi mikroskopik kiprikchalar (cilia / SILL-ee-uh) esa changli shilliqni doimiy ravishda tashqariga surib turadi."
      ],
      "paragraphsRu": [
        "Слизистая носа согревает, увлажняет и очищает воздух. Чихание выбрасывает раздражители со скоростью до 160 км/ч, а микрореснички непрерывно продвигают слизь наружу."
      ]
    },
    {
      "title": "How Smelling Works & Taste Connection",
      "titleUz": "Hid bilish qanday ishlaydi va ta’m bilish siri",
      "titleRu": "Обоняние и неразрывная связь со вкусом",
      "paragraphs": [
        "On the roof of the nasal cavity is the olfactory epithelium with about 10 million receptor cells capable of detecting 10,000 different scents. When receptors sense odor molecules, signals travel along the olfactory nerve to the olfactory bulb underneath the front of the brain.",
        "The nose is essential for taste. When you chew, food aromas travel up to the nasal cavity. Pinching your nose proves how much food loses its flavor without your sense of smell!"
      ],
      "paragraphsUz": [
        "Burun bo‘shlig‘ining shiftida hid bilish epiteliysi (olfactory epithelium) joylashgan bo‘lib, unda 10 millionga yaqin sezgir retseptorlar yashaydi! Ular inson miyasiga 10 000 dan ortiq turli xil hidlarni ajratish imkonini beradi. Hid signallari hid bilish nervi orqali miyadagi hid piyozchasiga (olfactory bulb) boradi va miya darhol nima hidlayotganingizni anglaydi.",
        "Ta’m bilish siri: Inson til faqat shirin, achchiq, sho‘r va nordonni his qiladi. Taomning boy mazasi va lazzatini esa burun orqali sezamiz! Burningizni qisib ovqat yeb ko‘rsangiz, taomning mazasi butunlay yo‘qolib qolganini sezasiz."
      ],
      "paragraphsRu": [
        "10 миллионов обонятельных рецепторов позволяют различать до 10 000 запахов. Вкус еды формируется в основном благодаря обонянию — при зажатом носе вкус почти не ощущается."
      ]
    }
  ],
  "funFacts": [
    {
      "en": "Human sneeze droplets can fly out of the nose at speeds up to 100 miles per hour (160 km/h)!",
      "uz": "Inson aksirganda havo va tomchilar burundan soatiga 160 kilometr tezlikda otilib chiqadi!",
      "ru": "Капли при чихании могут вылетать из носа со скоростью до 160 км/ч!"
    },
    {
      "en": "About 80% of what we perceive as 'taste' is actually detected by our sense of smell!",
      "uz": "Biz «ta’m» deb ataydigan lazzatning 80 foizga yaqini aslida burun orqali hid bilish natijasida seziladi!",
      "ru": "Около 80% вкусовых ощущений формируется именно благодаря обонянию!"
    }
  ],
  "takeaways": [
    {
      "en": "The nose warms, filters, and humidifies inhaled air before it reaches delicate lung tissues.",
      "uz": "Burun o‘pkaga yetib borguniga qadar havoni isitadi, tozalaydi va namlaydi.",
      "ru": "Нос подготавливает воздух для легких: фильтрует, согревает и увлажняет его."
    },
    {
      "en": "Ten million olfactory receptors detect odors and work together with taste buds to flavor food.",
      "uz": "10 millionta retseptor hidlarni sezadi va til bilan birgalikda taom lazzatini ochib beradi.",
      "ru": "Обонятельные рецепторы помогают не только чуять запахи, но и полноценно ощущать вкус пищи."
    }
  ],
  "quiz": [
    {
      "question": "How fast can particles fly out of the nose during a sneeze?",
      "questionUz": "Aksirish paytida havo va zarrachalar burundan qanday tezlikda chiqadi?",
      "questionRu": "С какой скоростью могут вылетать частицы при чихании?",
      "options": [
        "Up to 100 mph (160 km/h)",
        "5 mph (8 km/h)",
        "1000 mph (supersonic)",
        "0.1 mph"
      ],
      "optionsUz": [
        "Soatiga 160 km gacha (100 mph)",
        "Soatiga 8 km",
        "Ovoz tezligida (1200 km/soat)",
        "Soatiga 1 km"
      ],
      "optionsRu": [
        "До 160 км/ч (100 миль/ч)",
        "Около 8 км/ч",
        "Со сверхзвуковой скоростью",
        "1 км/ч"
      ],
      "correctIndex": 0,
      "explanation": "A sneeze is a powerful reflexive expulsion that can reach speeds of 100 mph.",
      "explanationUz": "Aksirish tananing kuchli himoya refleksi bo‘lib, tezligi 160 km/soatgacha yetishi mumkin.",
      "explanationRu": "Чихание — мощный рефлекс, скорость которого достигает 160 км/ч.",
      "xpReward": 10
    }
  ]
}
];

export async function seedHealthCollection() {
  try {
    for (const item of seedHealthTopics) {
      await HealthTopic.findOneAndUpdate(
        { slug: item.slug },
        { $set: item },
        { upsert: true, new: true }
      );
    }
    console.log(`[Seed] ${seedHealthTopics.length} ta salomatlik mavzusi bazaga muvaffaqiyatli yuklandi.`);
  } catch (err) {
    console.warn(`[Seed] Salomatlik mavzularini yuklashda ogohlantirish: ${(err as Error).message}`);
  }
}
