# -*- coding: utf-8 -*-
"""
Builds seedExtra.ts (server + client) from content/farzand-tarbiyasi.txt.

The source text is sliced by line ranges so the wording stays exactly as written by the author.
Run from the repo root:  python server/src/scripts/build_extra_content.py

Adds:
  * Xadicha Kubro "Fitrat pedagogikasi" lessons 5, 6, 7  (premium)
  * 10 premium articles + 4 free articles (attract new users)
"""
import json
import re

SRC = 'content/farzand-tarbiyasi.txt'
with open(SRC, 'r', encoding='utf-8') as f:
    LINES = f.read().split('\n')

PUBLISHED = '2026-09-21T00:00:00.000Z'


def paras(a, b):
    """1-indexed inclusive line range -> paragraphs joined by blank lines."""
    out = [l.strip() for l in LINES[a - 1:b] if l.strip()]
    return '\n\n'.join(out)


def topic(a, b):
    """First line of the range is the heading: returns (title, subtitle, body)."""
    heading = LINES[a - 1].strip()
    heading = re.sub(r'^\d+\.\s*', '', heading)
    m = re.search(r'\(([^()]*)\)\s*$', heading)
    subtitle = m.group(1) if m else ''
    title = heading[:m.start()].strip() if m else heading
    return title, subtitle, paras(a + 1, b)


def slugify(s):
    tbl = {'o‘': 'o', 'g‘': 'g', 'oʻ': 'o', 'gʻ': 'g', 'ʼ': '', '’': '', '‘': '', "'": ''}
    s = s.lower()
    for k, v in tbl.items():
        s = s.replace(k, v)
    return re.sub(r'[^a-z0-9]+', '-', s).strip('-')


def words(text):
    return len(re.findall(r'\S+', text))


# ------------------------------------------------------------------ lessons
def screen(idx, type_, a, b, highlight=None, quote=None, title=None):
    t, sub, body = topic(a, b)
    s = {'screenIndex': idx, 'type': type_, 'title': title or t, 'subtitle': sub, 'content': body}
    if highlight:
        s['highlight'] = highlight
    if quote:
        s['quoteSource'] = quote
    if not sub:
        del s['subtitle']
    return s


def quiz(idx, question, options, correct, explanation):
    return {
        'screenIndex': idx, 'type': 'quiz', 'title': 'Yakuniy test', 'content': '',
        'quizQuestion': question, 'quizOptions': options,
        'correctOptionIndex': correct, 'quizExplanation': explanation,
    }


COURSE = 'barkamol-farzand-fitrat-pedagogikasi'

lesson5 = {
    'courseSlug': COURSE,
    'title': "Fitrat pedagogikasi: O'yin, ko'z yoshi, hasad va mahramiyat chegaralari",
    'slug': 'fitrat-pedagogikasi-oyin-koz-yoshi-va-mahramiyat',
    'summary': "O'yin — bolaning tabiiy ehtiyoji, ko'z yoshi shifosi, qardoshlararo hasad, yorliq xavfi, mahramiyat chegaralari va nafsga sabr.",
    'order': 5, 'estimatedMinutes': 12, 'ageGroup': '0-2', 'xpReward': 25, 'isFree': True, 'isPremium': True,
    'screens': [
        screen(0, 'concept', 2, 9, "O'yin — bolaning ruhiy yarasini davolaydigan va kamolotga yetaklaydigan ichki quvvat."),
        screen(1, 'explanation', 11, 20, "Bola yig'laganda unga «Seni tushunaman, mayli yig'lab ol» deyish kifoya."),
        screen(2, 'concept', 22, 27, "Bolaning baxtli damlarini xushbo'y iforlar bilan uyg'unlashtiring — bu umrbod iliq xotira bo'ladi."),
        screen(3, 'explanation', 29, 38, "Katta farzandga kuniga 5 daqiqa to'liq diqqat qaratish uning mehr tanqisligini qoplaydi."),
        screen(4, 'islamic_perspective', 40, 45, "Farzandga qaratilgan har bir yomon so'z — yorliq. Faqat ezgu so'zlar ayting.", 'Hazrati Umar (r.a.)'),
        screen(5, 'practice', 47, 62, "Bolaning «Yo'q, tegmang» deyish huquqi hurmat qilinishi shart."),
        screen(6, 'islamic_perspective', 64, 77, "Bolaga emas, o'z nafsingizga sabr qiling — jazoga emas, ijobiy xulqqa e'tibor bering.", 'Abu Mahzura (r.a.) voqeasi'),
        quiz(7, "Abu Mahzura voqeasida Rasululloh (s.a.v.) azonni masxara qilgan bolaga qanday munosabatda bo'ldilar?",
             ["Uni jazoladilar va majlisdan chiqarib yubordilar",
              "G'azablanmadilar, salbiy qilig'iga emas, iste'dodiga urg'u berib «Ovozing shirali ekan, azon ayt-chi» dedilar",
              "Uni ota-onasiga tanbeh berish uchun yubordilar",
              "Bu voqeaga e'tibor bermadilar"],
             1, "To'g'ri! Nabaviy pedagogika xatoni emas, bolaning yaxshi tomonini ko'rsatadi — natijada u islomga oshiq bo'ldi."),
    ],
}

lesson6 = {
    'courseSlug': COURSE,
    'title': "Fitrat pedagogikasi: Sattorlik, bolalik quvonchi, shukr, duo va yolg'ondan saqlanish",
    'slug': 'fitrat-pedagogikasi-sattorlik-shukr-va-duo',
    'summary': "Xatolarni el oldida oshkor qilmaslik, bolalikni o'g'irlamaslik, farzand ne'matining shukri, duo va qarg'ish ta'siri, yolg'ondan saqlanish.",
    'order': 6, 'estimatedMinutes': 11, 'ageGroup': '0-2', 'xpReward': 25, 'isFree': True, 'isPremium': True,
    'screens': [
        screen(0, 'concept', 87, 100, "Bolaning xatosini el oldida fosh qilmang — Alloh ham «Sattor» — ayblarni berkituvchidir."),
        screen(1, 'explanation', 102, 109, "Bola sakragan, to'kkan, savol bergan holatidagina boladir — bolalikni o'g'irlamang.", quote="Kahf surasi, 46-oyat"),
        screen(2, 'islamic_perspective', 111, 118, "Farzand ne'matining shukri — uni urmaslik, so'kmaslik va Alloh rozi bo'ladigan yo'lda tarbiyalashdir.", 'Junayd Bag\'dodiy'),
        screen(3, 'practice', 120, 131, "Moddiy mukofot ichki motivatsiyani so'ndiradi, samimiy duo esa bolaning ruhini oziqlantiradi."),
        screen(4, 'explanation', 133, 148, "Bola yolg'on gapirsa — sababi jazodan qo'rqish yoki mehr tanqisligi. Xavfsiz muhit yarating."),
        quiz(5, "Bolaning yolg'on gapirishining asosiy sababi nima?",
             ["Uning tabiatan buzuqligi",
              "Jazodan va qattiq g'azabdan qochish hamda yetarli mehr-e'tibor qozonish istagi",
              "Televizor va ko'cha ta'siri",
              "Yoshi kattalashgani"],
             1, "To'g'ri! Yechim — xatosiz bo'lishni talab qilish emas, to'g'risini aytsa jazolanmasligini biladigan samimiy muhit yaratishdir."),
    ],
}

lesson7 = {
    'courseSlug': COURSE,
    'title': "Fitrat pedagogikasi: Zamonaviy ota-onalik, ijtimoiy muhit va yakuniy xulosa",
    'slug': 'fitrat-pedagogikasi-zamonaviy-otaonalik-va-yakun',
    'summary': "«Otalar dini» qolipidan qutulish, onalikdagi rollar muvozanati, katta oila va silai rahm ahamiyati, Nasr surasi yakuni.",
    'order': 7, 'estimatedMinutes': 10, 'ageGroup': '0-2', 'xpReward': 30, 'isFree': True, 'isPremium': True,
    'screens': [
        screen(0, 'islamic_perspective', 157, 168, "Farzandlaringizni o'z davringiz haqiqatiga qarab emas, ular yashaydigan davr haqiqatiga qarab tarbiyalang.", "Hazrati Ali (r.a.) o'giti, Moida surasi, 104-oyat"),
        screen(1, 'explanation', 170, 181, "Onalik — yagona rol emas. Ona o'ziga nafas rostlash va ijtimoiy aloqalarni tiklash imkonini topsin."),
        screen(2, 'concept', 183, 194, "Bola bitta inson orqali emas, katta oilaning rang-barang muhitida to'laqonli rivojlanadi."),
        screen(3, 'islamic_perspective', 196, 205, "Ota-onalikdagi har bir yutuq — Allohning lutfi, xato-kamchiliklar esa o'z nafsimizdan.", quote='Nasr surasi'),
        quiz(4, "Katta oilaning bola uchun eng muhim pedagogik afzalligi qaysi?",
             ["Uyda tartib va tinchlik ko'proq bo'lishi",
              "Bola turli temperament va munosabatlar bilan tanishib, keng dunyoqarash va ruhiy suyanch oladi",
              "Ota-onaning mas'uliyati kamayishi",
              "Bolaning kam o'ynashi"],
             1, "To'g'ri! Bobo-buvi, amaki-xolalar bilan muloqot bolaning aqliy va hissiy rivojiga ko'p qirrali rag'bat beradi."),
    ],
}
LESSONS = [lesson5, lesson6, lesson7]

# ------------------------------------------------------------------ articles
def article(title, a, b, excerpt, category, age, tags, premium, seo_desc, body=None):
    body = body if body is not None else paras(a, b)
    return {
        'title': title,
        'slug': slugify(title),
        'excerpt': excerpt,
        'content': body,
        'categorySlug': category,
        'ageGroup': age,
        'readingTimeMinutes': max(2, round(words(body) / 180)),
        'tags': tags,
        'seoTitle': f'{title} | Farzandly',
        'seoDescription': seo_desc,
        'isPremium': premium,
        'isPublished': True,
        'publishedAt': PUBLISHED,
    }


FRIEND_ARTICLE = """Dunyoda farzandi odobli bo‘lishini istamagan ota-ona yo‘q. Xo‘sh, bolani qanday odobli qilamiz? Buning uchun eng oldin ota-onaning o‘zi tarbiyali bo‘lishi kerak. Axir, inson o‘zida yo‘q narsani birovga berolmaydi-ku.

Quyidagi tavsiyalarga e’tibor berish va amal qilish maqsadga muvofiq:

– ota-ona salohiyatli, bolalariga ibrat bo‘lishi kerak. Kitob o‘qimagan kishi farzandining qo‘liga yaxshi kitob tutolmaydi;

– bolani mustaqil fikrlashga o‘rgatish juda muhim. Voqea-hodisalarga qanday munosabat bildirishiga ota-ona qiziqishi, uni tinglashi, savollariga erinmay javob berishi kerak. Bunday yo‘l bolaning mustaqil fikr yuritishiga yordam beradi, unda fikrini ifodalash shijoatini shakllantiradi;

– munosabatlar ikki tomonlama bo‘lsin. Shunday yo‘l tuting, u sizga yaqin do‘stidek ishonsin. Shunda unga nasihat qilsangiz, og‘ir olmaydi. Hazrat Ali: “Farzand bilan yetti yoshgacha o‘yna va unga fikri qabul qilingani hamda inobatga olinganini bildirib qo‘y, bu uslubning yaxshi samarasi ko‘p”, deganlar. Farzand bilan do‘stlarcha munosabatda bo‘lish uni yomonlar bilan do‘stlashishdan, buzg‘unchi axborotlarga ergashishdan saqlaydi;

– farzand oilasida alohida o‘ringa egaligini, qadrli ekanini his etishi zarur;

– bola uy ishlarini bajarishda hamma bilan ahil-inoq bo‘lishi, oila muammolarini berkitishi, jipslikni saqlashni o‘rganishi lozim. Ota-ona farzandiga ish va mas’uliyat yuklab, so‘ngra natijasiga e’tibor qaratsa, bola burchiga sadoqatli bo‘ladi;

– ota-ona uydagi narsa-buyumlarni bir kishiga xoslamasin. Aksincha, ular hammaga tegishli ekanini aytsin. Masalan, uydagi ulov faqat otaniki deb qaralsa, o‘g‘il farzand o‘zini otasiga nisbatan g‘arib sanashi va bu hol unga salbiy ta’sir qilishi mumkin;

– bolaning istagan narsasiga erishaverishi yaxshi emas. Mahrum bo‘lish achchig‘ini totib ko‘rishi, nafsining xohishlarini qaytarishni o‘rganishi kerak;

– ota-ona farzandlarining yoshi, aqli, ziyrakligi, rivojlanishi, ta’sirchanligi hamda dunyoqarashiga e’tibor qilishi zarur;

– bolalar yoshligidan bir-biriga gina-adovatli bo‘lmasligi uchun barchalariga birdek munosabat ko‘rsatish muhim.

Ko‘pincha yo‘l qo‘yiladigan xatolar:

– ota-onaning bolaga: “lapashang”, “ahmoq”, “odobsiz” singari noxush so‘zlar bilan murojaat qilishi. Xato, kamchilik farzandning o‘zida emas, ishidadir;

– urib-so‘kib tarbiyalash. Farzand xato ish qilganida tanbeh berish va tergash uchun uni urish-so‘kishdan ko‘ra, yaxshi ko‘rgan narsalaridan mahrum qilish, gapirmaslik, qovoq uyish, dakki berish samarali bo‘ladi;

– noto‘g‘ri rag‘batlantirish. Ota-ona o‘n yoshga to‘lmagan bolalarining yaxshi ishlarini mukofotlashda shirinlik yoki pul berish bilan birga savob bo‘lishini, evaziga jannatga erishuvini ham uqtirishsin;

– bolalarni bir-biriga qarama-qarshi o‘stirish. Bir oilada tug‘ilib o‘sgan bolalarning ham shaxsiyati turlicha bo‘ladi. Ularni zehni, qobiliyati va dunyoqarashining pastu balandiga qarab yo‘naltirish lozim. Bir-biriga solishtirish bilan ularning orasi buzilishi mumkin;

– yomon duo qilish. Farzandi jahlini chiqarsa, ayrim onalar darrov qarg‘ashga tushadi. Bu odatning oqibati juda yomon;

– va’da berib bajarmaslik. Ota-ona va’dasida turmasa, ishonchini yo‘qotadi. Masalan, “Kel, urmayman”, deydi. Ammo kelganida uradi. “Bunday qilsang, uni olib beraman”, deydi, lekin so‘zida turmaydi;

– farzandini yomon holatlarga guvoh qilishi. Sha’nini yuksaltirish, botirlikka o‘rgatish o‘rniga tahqirlaydigan manzaralarni ko‘rsatish bola qalbini sindiradi;

– yoqtirmagan narsasini sovg‘a qilish;

– yolg‘on gapirish: odatlarning eng yomoni yolg‘on so‘zlashdir. Bola o‘rnak oladigan kishilar yolg‘on gapirib tursa, u ham shunga odatlanadi.

Toshkent Islom instituti mudarrisi Imommuhammadxon Ubaydullayev tayyorladi."""

ARTICLES = [
    # ---------------- FREE (3-4 contents to attract users)
    {
        'title': "Farzandingizga do'st bo'ling",
        'slug': 'farzandingizga-dost-boling',
        'excerpt': "Bolani qanday odobli qilamiz? Ota-onalar uchun amaliy tavsiyalar va ko'p yo'l qo'yiladigan xatolar ro'yxati.",
        'content': FRIEND_ARTICLE,
        'categorySlug': 'tarbiya-asoslari',
        'ageGroup': '6-9',
        'readingTimeMinutes': max(2, round(words(FRIEND_ARTICLE) / 180)),
        'tags': ["do'stlik", 'odob', 'ibrat', 'ota-ona xatolari', 'Hazrat Ali'],
        'seoTitle': "Farzandingizga do'st bo'ling | Farzandly",
        'seoDescription': "Farzand bilan do'stona munosabat, ota-onalar uchun tavsiyalar va tarbiyada eng ko'p yo'l qo'yiladigan xatolar.",
        'isPremium': False, 'isPublished': True, 'publishedAt': PUBLISHED,
    },
    article("O'yin — bolalar dunyosining kaliti", 2, 9,
            "O'yin quruq ovunchoq emas: u bolaning ruhiy yarasini davolaydi va uni kamolotga yetaklaydi.",
            'bola-ruhiyati', '3-5', ["o'yin", 'fitrat', 'ekran vaqti', 'sunnat'], False,
            "Nega o'yin bola uchun zarur? Fitrat pedagogikasi va nabaviy sunnat asosida ota-onalar uchun tushuntirish."),
    article("Qo'yib bering, yig'lasin! Ko'z yoshi shifosi", 11, 20,
            "Bola yig'laganda uni to'xtatishga shoshilmang: ko'z yoshi — Alloh bergan tabiiy shifo mexanizmi.",
            'bola-ruhiyati', '0-2', ["yig'lash", "his-tuyg'ular", 'tantrum', 'fitrat'], False,
            "Bola yig'laganda ota-ona nima qilishi kerak? Bostirilgan yig'i oqibatlari va hislarni qabul qilish yechimi."),
    article("Yorliq yopishtirish xavfi: «o'jar», «dangasa» demang", 40, 45,
            "Bolaga qo'yilgan har bir tamg'a uning kelajak hayotiga aylanadi. Nega faqat ezgu so'zlarni aytish kerak?",
            'bola-ruhiyati', '6-9', ['yorliq', "so'z kuchi", "o'jarlik", 'ota-ona xatolari'], False,
            "Bolaga «o'jar», «dangasa» deb yorliq yopishtirish xavfi va uning o'rniga ijobiy tarbiya usullari."),
    # ---------------- PREMIUM
    article("Ifor va bola xotirasi: onaning hidi va oilaviy baxt", 22, 27,
            "Hid — xotiradagi eng mustahkam bog'lovchi. Bolaning baxtli damlarini iforlar bilan muhrlash sirlari.",
            'bola-ruhiyati', '0-2', ['ifor', 'xotira', 'Yusuf alayhissalom', 'onalik'], True,
            "Hid va bola xotirasi: Yoqub va Yusuf qissasi, limbik tizim va iliq oilaviy xotiralar yaratish."),
    article("Qardoshlararo hasad va uni yengish usullari", 29, 38,
            "Hobil-Qobil va Yusuf qissalaridan xulosa: aka-uka hasadining ildizi va ota-onaning 5 daqiqalik qoidasi.",
            'ijtimoiy-haqlar', '3-5', ['hasad', 'aka-uka', 'to\'ng\'ich farzand', 'Yusuf'], True,
            "Farzandlar orasidagi hasadni qanday kamaytirish mumkin? Katta farzandga yangi maqom berish va 5 daqiqalik qoida."),
    article("Oila ichidagi mahramiyat chegaralari", 47, 62,
            "Bola — ota-onaning mulki emas, alohida shaxs. 4 yoshdan boshlanadigan mahramiyat qoidalari va 3 vaqt qoidasi.",
            'odob-axloq', '3-5', ['mahramiyat', 'hayo', 'chegaralar', 'xavfsizlik'], True,
            "Bola daxlsizligi va mahramiyat qoidalari: 4 yoshdan boshlab nimalarga e'tibor berish kerak."),
    article("Bolaga emas, o'z nafsingizga sabr qiling", 64, 77,
            "Abu Mahzura voqeasi — nabaviy pedagogikaning eng go'zal namunasi: jazoga emas, iste'dodga urg'u.",
            'bola-ruhiyati', '6-9', ['sabr', 'Abu Mahzura', 'nabaviy pedagogika', "g'azab"], True,
            "Haqiqiy sabr nima? Abu Mahzura voqeasi orqali xatoga yo'l qo'ygan bolaga mehr va hikmat bilan munosabat."),
    article("Farzandning xatolarini oshkor qilmaslik: sattorlik fazilati", 87, 100,
            "Bolaning xatosini el oldida yuziga solish 3 ta og'ir asorat qoldiradi. Nabaviy yechim — hijolatdan asrash.",
            'bola-ruhiyati', '3-5', ['sattorlik', 'xato', 'hijolat', 'ishonch'], True,
            "Bolaning xatolarini oshkor qilmaslik: nuqsonlilik, qadrsizlik va aybdorlik hissidan qanday saqlanish mumkin."),
    article("Bolalikni o'g'irlamang: oltin to'p masali", 102, 109,
            "Ota-ona xayolidagi «mukammal bola» qolipi bolalikdan mahrum qiladi. Bola — uyning go'zal ziynati.",
            'tarbiya-asoslari', '3-5', ['bolalik', "o'yin", 'ziynat', 'Hasan va Husayn'], True,
            "Bolalikni o'g'irlamaslik: Kahf surasi 46-oyat, oltin to'p masali va Rasululloh (s.a.v.)ning bolalar bilan munosabati."),
    article("Farzand — buyuk ne'mat: amaliy shukr va duo", 111, 131,
            "Farzand ne'matining shukri — uni urmaslik va duo bilan tarbiyalash. Qarg'ish va badduo halokati.",
            'tarbiya-asoslari', '0-2', ['shukr', 'duo', "qarg'ish", 'Alqama voqeasi'], True,
            "Farzand ne'matiga shukr va ota-onalik duosi: Furqon surasi 77-oyat, qarg'ishning oqibati."),
    article("Yolg'on — ishonch binosini qulatuvchi ofat", 133, 148,
            "«Jim tursang, olib beraman» kabi oq yolg'onlar nega xavfli? Bola nega yolg'on gapiradi va yechim nima?",
            'odob-axloq', '6-9', ["yolg'on", 'ishonch', "va'da", 'xavfsiz muhit'], True,
            "Bolada yolg'onning ildizi va tarbiyadagi oq yolg'onlar xatosi. Ishonchli muhit yaratish yechimi."),
    article("Zamon bilan hamnafas tarbiya: «otalar dini» qolipidan qutulish", 157, 168,
            "«Biz ham kaltak yeb katta bo'lganmiz» — bahonasi bilan o'tmish jarohatlarini bolaga o'tkazmang.",
            'tarbiya-asoslari', '10-13', ['zamonaviy tarbiya', 'internet', 'Hazrat Ali', "o'tmish jarohati"], True,
            "Bugungi bolani bugungi zamon haqiqatiga qarab tarbiyalash: internet, zamonaviy metodikalar va o'tmish yaralaridan forig' bo'lish."),
    article("Onalikdagi rollar muvozanati va katta oila ahamiyati", 170, 194,
            "Onalik yagona rol emas. Yakkalangan mikro-oila xavfi va katta oilaning pedagogik afzalliklari.",
            'ijtimoiy-haqlar', '0-2', ['onalik', 'katta oila', 'silai rahm', 'rollar'], True,
            "Ona rollari muvozanati, zamonaviy yolg'izlik va katta oilaning bola rivojiga ta'siri."),
]
COURSE_UPDATE = {
    'slug': COURSE,
    'totalLessons': 7,
    'estimatedMinutes': 30 + sum(l['estimatedMinutes'] for l in LESSONS),
    'description': "Ahsani taqvim siri, Qur'oniy tarbiyaning 3 bosqichi, oqila onalik, qalb kasalliklaridan poklanish, o'yin va ko'z yoshi shifosi, sattorlik, duo hamda zamonaviy ota-onalik.",
}
PATH_UPDATE = {'slug': 'fitrat-pedagogikasi-yoli', 'lessonSlugs': [l['slug'] for l in LESSONS]}

TS = f"""// Auto-generated by server/src/scripts/build_extra_content.py from content/farzand-tarbiyasi.txt
// Do not edit by hand — edit the source text / script and re-run it.

export const extraLessons = {json.dumps(LESSONS, ensure_ascii=False, indent=2)};

export const extraArticles = {json.dumps(ARTICLES, ensure_ascii=False, indent=2)};

export const extraCourseUpdate = {json.dumps(COURSE_UPDATE, ensure_ascii=False, indent=2)};

export const extraPathUpdate = {json.dumps(PATH_UPDATE, ensure_ascii=False, indent=2)};

/** Merges the extra content into the base seed arrays (idempotent, mutates in place). */
export function applyExtraContent(seed: {{
  courses: any[];
  lessons: any[];
  articles: any[];
  paths: any[];
}}) {{
  for (const lesson of extraLessons) {{
    if (!seed.lessons.some((l) => l.slug === lesson.slug)) seed.lessons.push(lesson);
  }}
  for (const article of extraArticles) {{
    if (!seed.articles.some((a) => a.slug === article.slug)) seed.articles.push(article);
  }}
  const course = seed.courses.find((c) => c.slug === extraCourseUpdate.slug);
  if (course) Object.assign(course, {{
    totalLessons: extraCourseUpdate.totalLessons,
    estimatedMinutes: extraCourseUpdate.estimatedMinutes,
    description: extraCourseUpdate.description,
  }});
  const path = seed.paths.find((p) => p.slug === extraPathUpdate.slug);
  if (path) {{
    for (const slug of extraPathUpdate.lessonSlugs) if (!path.lessonSlugs.includes(slug)) path.lessonSlugs.push(slug);
  }}
}}
"""

for out in ('server/src/scripts/seedExtra.ts', 'client/lib/seedExtra.ts'):
    with open(out, 'w', encoding='utf-8', newline='\n') as f:
        f.write(TS)

print(f'lessons={len(LESSONS)} articles={len(ARTICLES)} free={sum(1 for a in ARTICLES if not a["isPremium"])}')
for a in ARTICLES:
    print(('FREE ' if not a['isPremium'] else 'PREM '), a['slug'], a['readingTimeMinutes'], 'min')
