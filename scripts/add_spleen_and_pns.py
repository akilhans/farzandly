import json
import re

spleen_topic = {
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
}

pns_topic = {
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
}

# Load and update client/lib/healthData.ts
with open('client/lib/healthData.ts', 'r', encoding='utf-8') as f:
    client_code = f.read()

# Check if already added
if 'taloq-organi-va-immunitet-tizimi' not in client_code:
    # Append before the last "];"
    spleen_json = json.dumps(spleen_topic, indent=2, ensure_ascii=False)
    pns_json = json.dumps(pns_topic, indent=2, ensure_ascii=False)
    insertion = f",\n{spleen_json},\n{pns_json}\n];"
    
    last_bracket_idx = client_code.rfind('];')
    if last_bracket_idx != -1:
        client_code_updated = client_code[:last_bracket_idx] + insertion + client_code[last_bracket_idx+2:]
        with open('client/lib/healthData.ts', 'w', encoding='utf-8') as f:
            f.write(client_code_updated)
        print("Appended spleen and PNS to client/lib/healthData.ts")

# Load and update server/src/scripts/seedHealthData.ts
with open('server/src/scripts/seedHealthData.ts', 'r', encoding='utf-8') as f:
    server_code = f.read()

if 'taloq-organi-va-immunitet-tizimi' not in server_code:
    spleen_json = json.dumps(spleen_topic, indent=2, ensure_ascii=False)
    pns_json = json.dumps(pns_topic, indent=2, ensure_ascii=False)
    insertion = f",\n{spleen_json},\n{pns_json}\n];"
    
    # In server/src/scripts/seedHealthData.ts, find `export const seedHealthTopics = [` ... `];`
    pattern = r'(export const seedHealthTopics = \[[\s\S]*?)(\n\];)'
    server_code_updated = re.sub(pattern, r'\g<1>,\n' + spleen_json + ',\n' + pns_json + r'\g<2>', server_code)
    with open('server/src/scripts/seedHealthData.ts', 'w', encoding='utf-8') as f:
        f.write(server_code_updated)
    print("Appended spleen and PNS to server/src/scripts/seedHealthData.ts")
