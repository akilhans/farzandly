import json
import re

hair_skin_nails_topic = {
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
}

# Update client/lib/healthData.ts
with open('client/lib/healthData.ts', 'r', encoding='utf-8') as f:
    client_code = f.read()

if 'teri-soch-va-tirnoqlar-himoya-tizimi' not in client_code:
    hsn_json = json.dumps(hair_skin_nails_topic, indent=2, ensure_ascii=False)
    insertion = f",\n{hsn_json}\n];"
    last_bracket_idx = client_code.rfind('];')
    if last_bracket_idx != -1:
        client_code_updated = client_code[:last_bracket_idx] + insertion + client_code[last_bracket_idx+2:]
        with open('client/lib/healthData.ts', 'w', encoding='utf-8') as f:
            f.write(client_code_updated)
        print("Appended hair, skin, and nails to client/lib/healthData.ts")

# Update server/src/scripts/seedHealthData.ts
with open('server/src/scripts/seedHealthData.ts', 'r', encoding='utf-8') as f:
    server_code = f.read()

if 'teri-soch-va-tirnoqlar-himoya-tizimi' not in server_code:
    hsn_json = json.dumps(hair_skin_nails_topic, indent=2, ensure_ascii=False)
    pattern = r'(export const seedHealthTopics = \[[\s\S]*?)(\n\];)'
    server_code_updated = re.sub(pattern, r'\g<1>,\n' + hsn_json + r'\g<2>', server_code)
    with open('server/src/scripts/seedHealthData.ts', 'w', encoding='utf-8') as f:
        f.write(server_code_updated)
    print("Appended hair, skin, and nails to server/src/scripts/seedHealthData.ts")
