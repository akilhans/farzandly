import json
import re

bones_topic = {
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
    "isPremium": True,
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
}

ears_topic = {
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
    "isPremium": False,
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
}

metabolism_topic = {
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
    "isPremium": True,
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
}

nose_topic = {
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
    "isPremium": False,
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

new_topics = [bones_topic, ears_topic, metabolism_topic, nose_topic]

# Update client/lib/healthData.ts
with open('client/lib/healthData.ts', 'r', encoding='utf-8') as f:
    client_code = f.read()

for t in new_topics:
    if t['slug'] not in client_code:
        t_json = json.dumps(t, indent=2, ensure_ascii=False)
        insertion = f",\n{t_json}\n];"
        last_bracket_idx = client_code.rfind('];')
        if last_bracket_idx != -1:
            client_code = client_code[:last_bracket_idx] + insertion + client_code[last_bracket_idx+2:]
            print(f"Appended {t['slug']} to client/lib/healthData.ts")

with open('client/lib/healthData.ts', 'w', encoding='utf-8') as f:
    f.write(client_code)

# Update server/src/scripts/seedHealthData.ts
with open('server/src/scripts/seedHealthData.ts', 'r', encoding='utf-8') as f:
    server_code = f.read()

for t in new_topics:
    if t['slug'] not in server_code:
        t_json = json.dumps(t, indent=2, ensure_ascii=False)
        pattern = r'(export const seedHealthTopics = \[[\s\S]*?)(\n\];)'
        server_code = re.sub(pattern, r'\g<1>,\n' + t_json + r'\g<2>', server_code)
        print(f"Appended {t['slug']} to server/src/scripts/seedHealthData.ts")

with open('server/src/scripts/seedHealthData.ts', 'w', encoding='utf-8') as f:
    f.write(server_code)

print("All 4 new topics processed successfully!")
