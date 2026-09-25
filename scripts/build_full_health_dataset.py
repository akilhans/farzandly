# -*- coding: utf-8 -*-
import json
import os

topics = [
    # 1. BRAIN & NERVOUS SYSTEM
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
        "readingMinutes": 6,
        "medicallyReviewedBy": "KidsHealth Medical Experts",
        "reviewDate": "2026",
        "heroImage": "/body basics/brain.jpg",
        "diagramImage": "/body basics/brain.jpg",
        "galleryImages": [
            {"url": "/body basics/cerebrum.jpg", "labelUz": "Katta miya (Cerebrum) — aql, xotira va iroda", "labelEn": "Cerebrum — intelligence and memory", "labelRu": "Большой мозг (Cerebrum) — интеллект и память"},
            {"url": "/body basics/cerebellum.jpg", "labelUz": "Miyacha (Cerebellum) — muvozanat va koordinatsiya", "labelEn": "Cerebellum — balance and coordination", "labelRu": "Мозжечок (Cerebellum) — равновесие и координация"},
            {"url": "/body basics/brain-stem.jpg", "labelUz": "Miya ustuni — nafas va yurak urishini boshqaradi", "labelEn": "Brain stem — automatic life functions", "labelRu": "Ствол мозга — дыхание и сердцебиение"},
            {"url": "/body basics/frontal-lobe.jpg", "labelUz": "Peshona bo‘lagi — qaror qabul qilish va fikrlash", "labelEn": "Frontal lobe — decisions and planning", "labelRu": "Лобная доля — принятие решений и логика"},
            {"url": "/body basics/parietal-lobe.jpg", "labelUz": "Tepa bo‘lagi — tana sezgilari va fazoviy idrok", "labelEn": "Parietal lobe — sensory perception", "labelRu": "Теменная доля — осязание и пространство"},
            {"url": "/body basics/temporal-lobe.jpg", "labelUz": "Chakka bo‘lagi — eshitish va nutqni tushunish", "labelEn": "Temporal lobe — hearing and language", "labelRu": "Височная доля — слух и понимание речи"},
            {"url": "/body basics/occipital-lobe.jpg", "labelUz": "Ensa bo‘lagi — ko‘rish ma’lumotlarini qayta ishlash", "labelEn": "Occipital lobe — vision processing", "labelRu": "Затылочная доля — обработка зрительных сигналов"},
            {"url": "/body basics/thalamus.jpg", "labelUz": "Talamus — sezgi signallarini yo‘naltiruvchi stansiya", "labelEn": "Thalamus — sensory relay center", "labelRu": "Таламус — ретранслятор сенсорных сигналов"},
            {"url": "/body basics/hypothalamus.jpg", "labelUz": "Gipotalamus — tana harorati, ochlik va uyqu", "labelEn": "Hypothalamus — pulse, thirst, and sleep", "labelRu": "Гипоталамус — температура тела, жажда и сон"},
            {"url": "/body basics/pituitary-gland.jpg", "labelUz": "Gipofiz bezi — bo‘y o‘sishi va gormonlar boshqaruvchisi", "labelEn": "Pituitary gland — master growth gland", "labelRu": "Гипофиз — главная железа роста и гормонов"},
            {"url": "/body basics/pons.jpg", "labelUz": "Ko‘prik (Pons) — signallarni uzatish ko‘prigi", "labelEn": "Pons — neural bridge", "labelRu": "Мост (Pons) — передача нервных импульсов"},
            {"url": "/body basics/medulla-oblongata.jpg", "labelUz": "Uzunchoq miya — nafas va qon bosimi markazi", "labelEn": "Medulla oblongata — breathing and heart", "labelRu": "Продолговатый мозг — регуляция давления и дыхания"},
            {"url": "/body basics/spinal-cord.jpg", "labelUz": "Orqa miya — tana a’zolari bilan aloqa magistrali", "labelEn": "Spinal cord — main communication highway", "labelRu": "Спинной мозг — главная магистраль связи тела"},
            {"url": "/body basics/ventricles.jpg", "labelUz": "Miya qorinchalari — orqa miya suyuqligi oqimi", "labelEn": "Ventricles — cerebrospinal fluid flow", "labelRu": "Желудочки мозга — циркуляция ликвора"}
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
                "options": ["Cerebrum", "Cerebellum", "Pituitary gland", "Spinal cord"],
                "optionsUz": ["Katta miya", "Miyacha (Cerebellum)", "Gipofiz bezi", "Orqa miya"],
                "optionsRu": ["Большой мозг", "Мозжечок (Cerebellum)", "Гипофиз", "Спинной мозг"],
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
                "options": ["Alveoli", "Neurons", "Capillaries", "Enzymes"],
                "optionsUz": ["Alveolalar", "Neyronlar (Neurons)", "Kapillyarlar", "Fermentlar"],
                "optionsRu": ["Альвеолы", "Нейроны (Neurons)", "Капилляры", "Ферменты"],
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
                "options": ["Brainstem (Medulla & Pons)", "Corpus callosum", "Optic nerve", "Frontal lobe"],
                "optionsUz": ["Miya ustuni (Uzunchoq miya va ko‘prik)", "Qadoqsimon tana", "Ko‘rish nervi", "Peshona bo‘lagi"],
                "optionsRu": ["Ствол мозга (Продолговатый мозг и мост)", "Мозолистое тело", "Зрительный нерв", "Лобная доля"],
                "correctIndex": 0,
                "explanation": "The brainstem connects to the spinal cord and regulates vital subconscious functions.",
                "explanationUz": "Miya ustuni nafas olish va qon aylanishi kabi eng zaruriy avtomatik jarayonlarni nazorat qiladi.",
                "explanationRu": "Ствол мозга обеспечивает непрерывную работу жизненно важных рефлексов.",
                "xpReward": 10
            }
        ]
    },

    # 2. MOUTH & TEETH
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
                "options": ["Femur bone", "Tooth enamel", "Jawbone", "Dentin"],
                "optionsUz": ["Son suyagi", "Tish emali (Enamel)", "Jag‘ suyagi", "Dentin"],
                "optionsRu": ["Бедренная кость", "Зубная эмаль (Enamel)", "Челюстная кость", "Дентин"],
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
                "options": ["20", "28", "32", "36"],
                "optionsUz": ["20 ta", "28 ta", "32 ta", "36 ta"],
                "optionsRu": ["20", "28", "32", "36"],
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
                "options": ["Enamel", "Cementum", "Pulp", "Crown"],
                "optionsUz": ["Emal", "Sement", "Pulpa (Pulp)", "Tish toji"],
                "optionsRu": ["Эмаль", "Цемент", "Пульпа (Pulp)", "Коронка"],
                "correctIndex": 2,
                "explanation": "The pulp is the soft living center nourishing the tooth and sensing pain.",
                "explanationUz": "Pulpa tishning tirik qismi bo‘lib, uni oziqlantiradi va sezgirlik beradi.",
                "explanationRu": "Пульпа — внутренняя живая ткань зуба с сосудами и нервными окончаниями.",
                "xpReward": 10
            }
        ]
    },

    # 3. ENDOCRINE SYSTEM
    {
        "id": "endocrine-system",
        "slug": "endokrin-tizimi-gormonlar-va-bezlar",
        "title": "Endocrine System — Hormones & Glands",
        "titleUz": "Endokrin tizimi: Gormonlar va tana bezlari mo‘jizasi",
        "titleRu": "Эндокринная система: Гормоны и железы внутренней секреции",
        "subtitle": "Discover how glands make chemical messengers called hormones that control growth, energy, mood, and puberty.",
        "subtitleUz": "Gormonlar qanday qilib o‘sish, quvvat, kayfiyat va balog‘at davrini boshqarishini ilmiy va sodda tilda o‘rganing.",
        "subtitleRu": "Как железы вырабатывают гормоны, управляющие ростом, энергией, настроением и развитием человека.",
        "system": "Endocrine System",
        "systemUz": "Endokrin tizimi",
        "systemRu": "Эндокринная система",
        "category": "endocrine",
        "readingMinutes": 5,
        "medicallyReviewedBy": "KidsHealth Medical Experts",
        "reviewDate": "2026",
        "heroImage": "/body basics/pituitary-gland.jpg",
        "diagramImage": "/body basics/pituitary-gland.jpg",
        "galleryImages": [
            {"url": "/body basics/pituitary-gland.jpg", "labelUz": "Gipofiz bezi (Pituitary) — boshqaruvchi bosh bez", "labelEn": "Pituitary gland — master endocrine gland", "labelRu": "Гипофиз — главная железа эндокринной системы"},
            {"url": "/body basics/hypothalamus.jpg", "labelUz": "Gipotalamus — gormonlar va asab tizimi ko‘prigi", "labelEn": "Hypothalamus — bridge between brain and hormones", "labelRu": "Гипоталамус — связь нервной и гормональной систем"}
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
                "meaningUz": "Gipofiz — no‘xatdek kichik, ammo boshqa bezlarga buyruq beruvchi 'bosh bez'.",
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
                "options": ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
                "optionsUz": ["Qalqonsimon bez", "Gipofiz bezi (Pituitary)", "Buyrak usti bezi", "Oshqozon osti bezi"],
                "optionsRu": ["Щитовидная железа", "Гипофиз (Pituitary)", "Надпочечник", "Поджелудочная железа"],
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
                "options": ["Adrenaline", "Insulin", "Melatonin", "Thyroxine"],
                "optionsUz": ["Adrenalin", "Insulin", "Melatonin", "Tiroksin"],
                "optionsRu": ["Адреналин", "Инсулин", "Мелатонин", "Тироксин"],
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
                "options": ["Thyroid gland", "Thymus", "Pineal gland", "Spleen"],
                "optionsUz": ["Qalqonsimon bez (Thyroid)", "Timus bezi", "Epifiz bezi", "Taloq"],
                "optionsRu": ["Щитовидная железа (Thyroid)", "Тимус", "Эпифиз", "Селезенка"],
                "correctIndex": 0,
                "explanation": "The thyroid produces thyroxine which regulates how fast cells burn energy.",
                "explanationUz": "Qalqonsimon bez hujayralarning quvvat hosil qilish tezligini boshqaradi.",
                "explanationRu": "Щитовидная железа вырабатывает тироксин, задающий темп обмена веществ.",
                "xpReward": 10
            }
        ]
    },

    # 4. EYES
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
                "options": ["Sclera", "Iris", "Cornea", "Retina"],
                "optionsUz": ["Sklera", "Kamalak parda (Iris)", "Shox parda", "To‘r parda"],
                "optionsRu": ["Склера", "Радужка (Iris)", "Роговица", "Сетчатка"],
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
                "options": ["Rods", "Cones", "Cilia", "Platelets"],
                "optionsUz": ["Tayoqchalar", "Kolbajalar (Cones)", "Tukchalar", "Trombotsitlar"],
                "optionsRu": ["Палочки", "Колбочки (Cones)", "Реснички", "Тромбоциты"],
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

    # 5. HEART & CIRCULATORY SYSTEM
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
                "options": ["Aorta", "Pulmonary vein", "Vena cava", "Capillary"],
                "optionsUz": ["Aorta", "O‘pka venasi", "Kovak vena", "Kapillyar"],
                "optionsRu": ["Аорта", "Легочная вена", "Полая вена", "Капилляр"],
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
                "options": ["Sinus node (Sinoatrial node)", "Mitral valve", "Aortic valve", "Thoracic duct"],
                "optionsUz": ["Sinus tuguni (Sinoatrial node)", "Mitral klapan", "Aorta klapani", "Ko‘krak yo‘li"],
                "optionsRu": ["Синусовый узел (Sinoatrial node)", "Митральный клапан", "Аортальный клапан", "Грудной проток"],
                "correctIndex": 0,
                "explanation": "The sinus node sets the contraction rhythm through electrical signals.",
                "explanationUz": "Sinus tuguni yurak qisqarish maromini belgilovchi elektr impulslarini hosil qiladi.",
                "explanationRu": "Синусовый узел генерирует электрические импульсы, задавая темп сокращений.",
                "xpReward": 10
            }
        ]
    }
]

print(f"Base data loaded with {len(topics)} topics.")
