# -*- coding: utf-8 -*-
"""
Python Builder to output complete trilingual dataset for Farzandly
Outputs:
1. client/lib/healthData.ts
2. server/src/scripts/seedHealthData.ts
"""
import json
import re
import sys
sys.path.append('.')
from scripts.enrich_health_data import topics as new_topics

def translate_ru_text(text_en):
    # Fallback mapper for standard KidsHealth vocabulary
    return text_en

# Now load the remaining 10 topics definition directly with rich fields
remaining_topics = [
    # 3. ENDOCRINE SYSTEM
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
    },

    # 6. LUNGS & RESPIRATORY SYSTEM
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
                "options": ["Alveoli", "Bronchi", "Diaphragm", "Cilia"],
                "optionsUz": ["Alveolalar (Alveoli)", "Bronxlar", "Diafragma", "Tukchalar"],
                "optionsRu": ["Альвеолы (Alveoli)", "Бронхи", "Диафрагма", "Реснички"],
                "correctIndex": 0,
                "explanation": "Alveoli are surrounded by blood capillaries where oxygen diffuses in and CO2 diffuses out.",
                "explanationUz": "Alveolalar kapillyarlar bilan o‘ralgan bo‘lib, gaz almashinuvi ularda sodir bo‘ladi.",
                "explanationRu": "Альвеолы окружены сетью капилляров, через которые кислород поступает в кровь.",
                "xpReward": 10
            }
        ]
    },

    # 7. LYMPHATIC SYSTEM
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
                "options": ["Lymphocytes (T and B cells)", "Platelets", "Red blood cells", "Neurons"],
                "optionsUz": ["Limfotsitlar (T va B hujayralar)", "Trombotsitlar", "Eritrotsitlar", "Neyronlar"],
                "optionsRu": ["Лимфоциты (Т и В клетки)", "Тромбоциты", "Эритроциты", "Нейроны"],
                "correctIndex": 0,
                "explanation": "Lymphocytes attack pathogens and generate disease-fighting antibodies.",
                "explanationUz": "Limfotsitlar mikroblarni yo‘q qiladi va antitanachalar ishlab chiqaradi.",
                "explanationRu": "Лимфоциты распознают антигены и вырабатывают специфические защитные антитела.",
                "xpReward": 10
            }
        ]
    },

    # 8. PUBERTY
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
                "options": ["Testosterone", "Estrogen", "Insulin", "Melatonin"],
                "optionsUz": ["Testosteron", "Estrogen", "Insulin", "Melatonin"],
                "optionsRu": ["Тестостерон", "Эстроген", "Инсулин", "Мелатонин"],
                "correctIndex": 0,
                "explanation": "Testosterone promotes height, voice deepening, and muscle development.",
                "explanationUz": "Testosteron bo‘y o‘sishi, ovoz yo‘g‘onlashishi va mushaklar kuchayishini boshqaradi.",
                "explanationRu": "Тестостерон стимулирует рост мышц, мутацию голоса и развитие вторичных половых признаков.",
                "xpReward": 10
            }
        ]
    },

    # 9. TONSILLITIS
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

    # 10. APPENDICITIS
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
                "options": ["Lower right abdomen", "Upper left chest", "Behind the neck", "Left knee"],
                "optionsUz": ["Qorinning pastki o‘ng sohasiga", "Chap ko‘krak qismiga", "Bo‘yin orqasiga", "Chap tizzaga"],
                "optionsRu": ["В правую нижнюю часть живота", "В левую часть груди", "В шею", "В колено"],
                "correctIndex": 0,
                "explanation": "Appendicitis pain characteristically migrates to the right lower quadrant of the abdomen.",
                "explanationUz": "Appenditsit og‘rig‘i kindikdan pastki o‘ng qoringa ko‘chadi.",
                "explanationRu": "Классический симптом аппендицита — миграция боли из эпигастрия в правую подвздошную зону.",
                "xpReward": 10
            }
        ]
    },

    # 11. BURP / DIGESTIVE SYSTEM
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
                "options": ["Esophagus", "Trachea", "Aorta", "Urethra"],
                "optionsUz": ["Qizilo‘ngach (Esophagus)", "Traxeya", "Aorta", "Siydik yo‘li"],
                "optionsRu": ["Пищевод (Esophagus)", "Трахея", "Аорта", "Уретра"],
                "correctIndex": 0,
                "explanation": "The esophagus carries food and swallowed air directly into the stomach.",
                "explanationUz": "Qizilo‘ngach ovqat va havoni oshqozonga yetkazuvchi asosiy naychadir.",
                "explanationRu": "По пищеводу пища и проглоченный воздух поступают прямо в желудок.",
                "xpReward": 10
            }
        ]
    },

    # 12. HICCUPS
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
                "options": ["Diaphragm", "Biceps", "Tongue", "Deltoid"],
                "optionsUz": ["Diafragma mushagi", "Biceps", "Til mushagi", "Yelka mushagi"],
                "optionsRu": ["Диафрагма", "Бицепс", "Язык", "Дельтовидная мышца"],
                "correctIndex": 0,
                "explanation": "The diaphragm is the dome-shaped breathing muscle beneath the lungs.",
                "explanationUz": "Diafragma o‘pka ostida joylashgan nafas mushagidir.",
                "explanationRu": "Диафрагма разделяет грудную и брюшную полости и управляет ритмом дыхания.",
                "xpReward": 10
            }
        ]
    }
]

all_topics = new_topics + remaining_topics
print(f"Total topics compiled: {len(all_topics)}")

# Generate client/lib/healthData.ts
ts_header = """export interface HealthSection {
  title: string;
  titleUz: string;
  titleRu: string;
  paragraphs: string[];
  paragraphsUz: string[];
  paragraphsRu: string[];
  highlightBox?: {
    title: string;
    titleUz: string;
    titleRu: string;
    text: string;
    textUz: string;
    textRu: string;
    type?: 'info' | 'tip' | 'warning';
  };
}

export interface PronunciationTerm {
  term: string;
  phonetic: string;
  meaningUz: string;
  meaningEn: string;
  meaningRu: string;
}

export interface GalleryImage {
  url: string;
  labelUz: string;
  labelEn: string;
  labelRu: string;
}

export interface HealthQuizItem {
  question: string;
  questionUz: string;
  questionRu: string;
  options: string[];
  optionsUz: string[];
  optionsRu: string[];
  correctIndex: number;
  explanation: string;
  explanationUz: string;
  explanationRu: string;
  xpReward: number;
}

export interface HealthTopic {
  id: string;
  slug: string;
  title: string;
  titleUz: string;
  titleRu: string;
  subtitle: string;
  subtitleUz: string;
  subtitleRu: string;
  system: string;
  systemUz: string;
  systemRu: string;
  category: string;
  readingMinutes: number;
  medicallyReviewedBy: string;
  reviewDate: string;
  heroImage?: string;
  diagramImage?: string;
  galleryImages?: GalleryImage[];
  pronunciations?: PronunciationTerm[];
  sections: HealthSection[];
  funFacts: { en: string; uz: string; ru: string }[];
  takeaways: { en: string; uz: string; ru: string }[];
  quiz: HealthQuizItem[];
  translations?: Record<string, any>;
}

export const healthTopics: HealthTopic[] = """

json_str = json.dumps(all_topics, ensure_ascii=False, indent=2)
full_client_ts = ts_header + json_str + ";\n"

with open('client/lib/healthData.ts', 'w', encoding='utf-8') as f:
    f.write(full_client_ts)
print("Saved client/lib/healthData.ts")

# Generate server/src/scripts/seedHealthData.ts
server_ts = """import { HealthTopic } from '../models/index.js';

export const seedHealthTopics = """ + json_str + """;

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
"""

with open('server/src/scripts/seedHealthData.ts', 'w', encoding='utf-8') as f:
    f.write(server_ts)
print("Saved server/src/scripts/seedHealthData.ts")

