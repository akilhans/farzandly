# -*- coding: utf-8 -*-
import json
import os
import re

with open('server/src/scripts/parsed_55_lessons_raw.json', 'r', encoding='utf-8') as f:
    raw_lessons = json.load(f)

# Translation dictionary for lesson titles and summaries 1-55
lesson_meta = {
    1: ("Foundations of Parenting (Part 1)", "Основы воспитания (Часть 1)",
        "Child rearing as a primary religious duty, accountability before Allah, and protecting family from hellfire.",
        "Воспитание детей как важнейшая религиозная обязанность, ответ перед Аллахом в Судный день и защита семьи от огня."),
    2: ("Foundations of Parenting (Part 2)", "Основы воспитания (Часть 2)",
        "The mother's role, personal parental example, justice among siblings, and preparing children for their era.",
        "Роль матери, личный пример родителей, справедливость между детьми и воспитание для будущего поколения."),
    3: ("Importance of Child Rearing (Part 3)", "Значение воспитания (Часть 3)",
        "Differentiating natural parental affection from spiritual education, balanced secular vs religious learning.",
        "Различие между природной родительской лаской и истинным духовным воспитанием, гармония светских и религиозных знаний."),
    4: ("Foundations of Faith in Children (Part 4)", "Основы веры у детей (Часть 4)",
        "First words of Tawhid, three core virtues, respecting the child's dignity, and instilling prayer at age seven.",
        "Первые слова Единобожия, три главных качества, уважение достоинства ребенка и обучение намазу с 7 лет."),
    5: ("Character & Human Temperament (Part 5)", "Характер и темперамент человека (Часть 5)",
        "Connecting faith with moral conduct, four types of human nature, best parental inheritance, and forgiveness.",
        "Связь веры с благонравием, четыре типа человеческой природы, лучшее родительское наследство и прощение."),
    6: ("Honesty and Guarding Against Deceit", "Правдивость и защита от лжи",
        "Absolute honesty of parents, perils of deception, signs of hypocrisy, and the story of Abdul Qadir Jilani.",
        "Честность родителей перед детьми, пагубность лжи, признаки лицемерия и поучительный пример Абдулкадира Джилани."),
    7: ("Respecting Ownership and Trust", "Уважение к чужой собственности и честность",
        "Preventing early petty theft, internal God-consciousness vs external fear, and Umar (r.a.) and the young shepherd.",
        "Пресечение первых признаков воровства, внутреннее чувство «Аллах видит» и пример Умара (р.а.) с пастухом."),
    8: ("Guarding the Tongue from Foul Speech", "Защита языка от сквернословия",
        "The severity of vulgar language, keeping composure during anger, curses, and purifying children's speech.",
        "Тяжесть сквернословия в Исламе, самообладание в гневе, недопустимость проклятий и сохранение чистоты речи."),
    9: ("Mindful Identity vs Blind Imitation", "Осознанная идентичность и слепое подражание",
        "Distinguishing scientific knowledge from cultural assimilation, gender distinction, and media influence.",
        "Различие между научными знаниями и слепым копированием чуждых обычаев, гендерные границы и влияние медиа."),
    10: ("Screen Time and Media Moderation", "Экранное время и влияние телевидения",
        "Mental impact of screens, lowering the gaze, protecting valuable time, immoral shows, and healthy alternatives.",
        "Влияние экранов на психику, защита взора от запретного, ценность времени и созидательные альтернативы гаджетам."),
    11: ("Leading by Personal Example (Ibrat)", "Сила личного примера (Ибрат)",
        "Actions speak louder than words, the Prophet's example, avoiding double standards, and healthy home atmosphere.",
        "Сила примера важнее слов, пророческий идеал, опасность родительского двуличия и здоровая атмосфера в доме."),
    12: ("Music, Soul & Spiritual Awareness", "Музыка, воздействие на сердце и духовность",
        "Negative impacts of vulgar music, replacing songs with Quran recitation, nasheeds, and protecting pure fitrah.",
        "Влияние пустой музыки на духовное состояние, замена Кораном и полезными знаниями, защита детской души."),
    13: ("Halal Nutrition and Table Manners", "Халяльное питание и здоровые привычки",
        "Impact of halal sustenance on character, avoiding overeating, food gratitude, and mindful eating habits.",
        "Влияние халяльного пропитания на характер ребенка, умеренность в еде, благодарность и культура питания."),
    14: ("Sleep Hygiene and Physical Fitness", "Режим сна и физическое развитие",
        "Sunnah sleep routine, early waking, physical fitness, swimming, archery, and reducing sedentary habits.",
        "Сон по Сунне, ранний подъем, физическая активность, плавание, стрельба и борьба с малоподвижностью."),
    15: ("Preventing Tobacco and Toxic Habits", "Защита от курения и вредных привычек",
        "Protecting youth from cigarettes, vapes, peer pressure, bodily stewardship, and preventive education.",
        "Ограждение подростков от сигарет, вейпов, давления сверстников и осознание тела как аманата Всевышнего."),
    16: ("Intellectual Development (Part 1)", "Интеллектуальное воспитание (Часть 1)",
        "Encouraging curiosity, love for reading, critical thinking, answering difficult questions, and seeking beneficial knowledge.",
        "Развитие любознательности, любовь к чтению, критическое мышление и ответы на сложные детские вопросы."),
    17: ("Intellectual Development (Part 2)", "Интеллектуальное воспитание (Часть 2)",
        "Memorization skills, Quranic cognitive benefits, problem-solving, intellectual discussions, and focus training.",
        "Тренировка памяти, польза заучивания Корана для интеллекта, решение задач и развитие концентрации внимания."),
    18: ("Intellectual Development (Part 3)", "Интеллектуальное воспитание (Часть 3)",
        "Scientific worldview, contemplating creation in nature, avoiding superstitions, and cultivating innovation.",
        "Научное мировоззрение, размышление над творениями природы, очищение от суеверий и тяга к открытиям."),
    19: ("Intellectual Development (Part 4)", "Интеллектуальное воспитание (Часть 4)",
        "Debating respectfully, listening skills, expanding vocabulary, eloquence, and intellectual humility.",
        "Культура ведения диалога, умение слушать собеседника, обогащение словарного запаса и скромность в знаниях."),
    20: ("Cultivating Healthy Courage", "Воспитание здоровой смелости и решительности",
        "Distinguishing moral courage from reckless rashness, standing up for truth, public speaking, and self-confidence.",
        "Отличие мужества от безрассудства, смелость говорить правду, уверенность на публике и решительность."),
    21: ("Overcoming Childhood Fears (Part 1)", "Преодоление детских страхов (Часть 1)",
        "Root causes of irrational phobias, bedtime fear, emotional reassurance, and avoiding terrifying children as discipline.",
        "Причины детских страхов, страх темноты, эмоциональная поддержка и отказ от запугивания в целях дисциплины."),
    22: ("Overcoming Childhood Fears (Part 2)", "Преодоление детских страхов (Часть 2)",
        "Spiritual protection through morning & evening adhkar, Ayatul Kursi, trusting in Allah (Tawakkul), and resilience.",
        "Духовная защита: утренние и вечерние зикры, Аят аль-Курси, упование на Аллаха (таваккуль) и стойкость."),
    23: ("Building Self-Esteem (Part 1)", "Избавление от чувства неполноценности (Часть 1)",
        "Harm of comparing children to others, discovering individual strengths, unconditional parental love, and self-worth.",
        "Вред сравнения детей друг с другом, раскрытие уникальных талантов, безусловная любовь и здоровая самооценка."),
    24: ("Building Self-Esteem (Part 2)", "Избавление от чувства неполноценности (Часть 2)",
        "Empowering children with household responsibility, honoring their opinions, celebrating progress, and dignity.",
        "Наделение ребенка ответственностью, уважение к его мнению, празднование успехов и взращивание достоинства."),
    25: ("Overcoming Envy and Sibling Rivalry", "Преодоление зависти и соперничества",
        "Signs of hasad, fostering contentment (Qana'ah), celebrating others' blessings, and equal parental treatment.",
        "Признаки зависти, воспитание чувства довольства (канаат), радость за чужие успехи и равное отношение к детям."),
    26: ("Anger Management in Children", "Управление гневом у детей",
        "Understanding tantrums, Sunnah remedies for rage (changing posture, wudu, silence), and emotional regulation.",
        "Природа детских истерик, методы Сунны при гневе (смена позы, омовение, молчание) и эмоциональный контроль."),
    27: ("Cultivating God-Consciousness (Taqwa)", "Воспитание богобоязненности (Таква)",
        "Internal moral compass, feeling Allah's watchful presence everywhere, integrity in private, and joyful obedience.",
        "Внутренний компас совести, ощущение постоянного надзора Всевышнего, искренность наедине с собой и послушание."),
    28: ("Brotherhood, Compassion and Mercy", "Братство, сострадание и милосердие",
        "Bonds of Islamic brotherhood, caring for orphans and the weak, empathy for peers, and kindness toward animals.",
        "Узы исламского братства, забота о сиротах и слабых, эмпатия к ровесникам и гуманное отношение к животным."),
    29: ("Altruism and Selfless Giving (Isor)", "Самопожертвование и щедрость (Исар)",
        "Preferring others over oneself, sharing favorite toys, charity habits, overcoming selfishness, and noble generosity.",
        "Умение отдавать другим лучшее, делиться любимыми вещами, щедрость, преодоление эгоизма и благородство."),
    30: ("Forgiveness and Magnanimity", "Прощение и великодушие (Авф)",
        "Overcoming resentment, reconciling after disputes, letting go of grudges, and the prophetic model of mercy.",
        "Умение прощать обиды, примирение после ссор, отказ от злопамятства и пророческий пример милосердия."),
    31: ("Rights of Parents (Part 1)", "Права родителей (Часть 1)",
        "Parental status in Islam, gratitude to mother and father, gentle speech, and avoiding slightest disrespect ('uff').",
        "Высокий статус родителей в Исламе, благодарность матери и отцу, почтительная речь и запрет говорить «уф»."),
    32: ("Rights of Parents (Part 2)", "Права родителей (Часть 2)",
        "Serving elderly parents, praying for parents during life and after demise, obedience within religious limits, and barakah.",
        "Служение пожилым родителям, постоянное дуа за них при жизни и после ухода, благословение послушания."),
    33: ("Kinship Ties (Part 1)", "Поддержание родственных связей (Часть 1)",
        "Significance of Silat ar-Rahim, visiting grandparents, aunts and uncles, maintaining warm family relationships.",
        "Важность поддержания родственных связей (Силатур-рахим), визиты к бабушкам, дедушкам и родственникам."),
    34: ("Kinship Ties (Part 2)", "Поддержание родственных связей (Часть 2)",
        "Reaching out to difficult relatives, gifts among cousins, preserving unity, and avoiding family estrangement.",
        "Связь даже с теми, кто отдаляется, подарки родственникам, сохранение семейного единства и преодоление обид."),
    35: ("Rights of Neighbors in Islam", "Права соседей в Исламе",
        "Gabriel's testament on neighbors, sharing food, keeping noise down, checking on sick neighbors, and hospitality.",
        "Наставления Джибриля о правах соседей, угощение едой, соблюдение тишины, помощь и добрососедство."),
    36: ("Respect for Teachers and Mentors", "Уважение к учителям и наставникам",
        "Revering spiritual and academic educators, etiquette in classroom, gratitude to mentors, and acquiring blessings of knowledge.",
        "Почитание учителей и духовных наставников, этикет на уроках, благодарность и благословение знаний."),
    37: ("Choosing Good Companions (Part 1)", "Выбор праведных друзей (Часть 1)",
        "The perfume seller vs blacksmith parable, peer influence on faith, identifying loyal sincere friends, and avoiding bad company.",
        "Притча о продавце благовоний и кузнеце, влияние окружения на веру и выбор искренних, надежных друзей."),
    38: ("Friendship Ethics and Loyalty (Part 2)", "Этика дружбы и верность (Часть 2)",
        "Keeping friend secrets, defending their honor in absence, helping in hardship, and mutual spiritual reminder.",
        "Хранение секретов друга, защита чести в его отсутствие, взаимопомощь в трудностях и благое напоминание."),
    39: ("Revering Elders and Seniors (Part 1)", "Уважение к старшим (Часть 1)",
        "Prophetic mandate on respecting elders, offering seat, yielding the floor, polite greetings, and dignity.",
        "Пророческий завет об уважении к старшим, уступать место, пропускать вперед и почитать седину."),
    40: ("Revering Elders and Seniors (Part 2)", "Уважение к старшим (Часть 2)",
        "Serving grandparents, listening attentively to elderly wisdom, patience with their weaknesses, and gaining du'a.",
        "Забота о бабушках и дедушках, внимательное слушание их мудрости, терпение к немощи и получение их дуа."),
    41: ("Natural Purity (Fitrah) vs Cultivation", "Природная чистота (Фитра) и воспитание",
        "Every child is born on pure innate monotheism, protecting natural innocence from corrupt environments.",
        "Каждый ребенок рождается с чистой природой (фитра), сохранение естественной чистоты от порочной среды."),
    42: ("Islamic Table Manners and Etiquette", "Исламский этикет приема пищи",
        "Saying Bismillah, eating with right hand, eating from what is in front, gratitude after meals, and zero food waste.",
        "Произнесение «Бисмиллях», еда правой рукой, еда перед собой, благодарность после еды и бережное отношение к пище."),
    43: ("Etiquette of Greetings (Salam)", "Этикет приветствия (Салям)",
        "Spreading Salam, who greets whom, smiling as charity, warm handshakes, and responding with better greeting.",
        "Распространение Саляма, правила приветствия, улыбка как садака, рукопожатие и наилучший ответ на приветствие."),
    44: ("Etiquette of Asking Permission (Isti'zan)", "Этикет испрашивания разрешения (Истизан)",
        "Knocking three times, standing to the side of the door, respecting privacy in bedrooms, and accepting refusals graciously.",
        "Трехкратный стук в дверь, соблюдение приватности комнат, не заглядывать внутрь и спокойное принятие отказа."),
    45: ("Etiquette of Assemblies and Gatherings", "Этикет собраний и общения",
        "Sitting where space is available, not separating two people without permission, making room for others, and ending with kaffarah.",
        "Садиться на свободное место, не разделять сидящих без разрешения, потесниться для входящего и дуа собрания."),
    46: ("Etiquette of Speech and Dialogue", "Этикет речи и культура общения",
        "Speaking pleasant words, avoiding interrupting, lowering voice volume, truthful speech, and silence when necessary.",
        "Доброе слово, запрет перебивать собеседника, умеренный тон голоса, правдивость и своевременное молчание."),
    47: ("Etiquette of Humor and Joking", "Этикет шуток и юмора",
        "Humor in the Prophetic tradition, never lying to make people laugh, avoiding mockery or hurting feelings.",
        "Шутки по примеру Пророка (мир ему), запрет лжи ради смеха, недопустимость насмешек и обидных прозвищ."),
    48: ("Etiquette of Congratulations and Joy", "Этикет поздравлений и добрых вестей",
        "Congratulating on weddings, newborn babies, holidays, Eid greetings, genuine joy for other people's happiness.",
        "Поздравления со свадьбой, рождением ребенка, праздниками Ид и искренняя радость за счастье ближнего."),
    49: ("Visiting the Sick and Compassion (Part 1)", "Посещение больных и сострадание (Часть 1)",
        "High reward of visiting patients, keeping visits short, uplifting comforting words, and praying for healing (Shifa).",
        "Награда за посещение больного, тактичность, краткость визита, слова поддержки и мольба об исцелении (шифа)."),
    50: ("Condolence Etiquette and Grief Support (Part 2)", "Этикет соболезнования и утешения (Часть 2)",
        "Etiquette of Ta'ziyah, preparing food for bereaved family, patient acceptance of decree, and comforting the grieving.",
        "Этикет выражения соболезнований (тазия), приготовление еды для скорбящей семьи, терпение и слова утешения."),
    51: ("Etiquette of Sneezing and Yawning", "Этикет чихания и зевания",
        "Saying Alhamdulillah upon sneezing, replying with Yarhamukallah, covering mouth when yawning, and suppressing loud sounds.",
        "Произнесение «Альхамдулиллях» при чихании, ответ «Ярхамукаллах», прикрытие рта при зевании и сдержанность."),
    52: ("Enjoining Good and Forbidding Evil (Part 1)", "Побуждение к добру и удержание от зла (Часть 1)",
        "Core responsibility of Amr bil Ma'ruf, wisdom, gentleness, prioritizing kindness over harsh rebuke, and proper timing.",
        "Суть призыва к добру и удержания от порицаемого, мудрость, мягкость, отсутствие грубости и правильный момент."),
    53: ("Gentle Advice and Sincere Admonition (Part 2)", "Культура искреннего наставления (Часть 2)",
        "Advising in private rather than public humiliation, practicing what one preaches, and patience with outcomes.",
        "Наставление наедине, запрет публичного унижения, соответствие слов делам и терпеливое ожидание результата."),
    54: ("Propriety of Gaze and Mahram Boundaries", "Этикет взгляда и границы махремов",
        "Guarding eyes in youth, rules of proposal viewing, clear distinction of mahrams vs non-mahrams, and modesty at home.",
        "Охрана взора в юности, правила сватовства, четкие границы махремов и скромность в домашней обстановке."),
    55: ("Islamic Adolescent & Moral Education", "Половое и нравственное воспитание в Исламе",
        "No false shame in vital learning, preparing for puberty changes, rules of ghusl, avoiding obscenity, and marriage sanctity.",
        "Отсутствие ложного стыда в религиозном обучении, подготовка к переходному возрасту, правила гусля и святость брака.")
}

def to_slug(text):
    text = text.lower()
    text = re.sub(r"[\'\"‘’`״]", "", text)
    text = re.sub(r"[^a-z0-9]+", "-", text)
    return text.strip("-")

def get_course_slug(num):
    if num <= 10:
        return 'tarbiya-asoslari-va-boshlangich-himoya'
    elif num <= 20:
        return 'shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya'
    elif num <= 30:
        return 'ruhiy-qatiyat-taqvo-va-gozal-xulq'
    elif num <= 40:
        return 'oila-ota-ona-va-jamiyat-haqlari'
    else:
        return 'islomiy-odoblar-va-balogat-davri'

def get_age_group(num):
    if num <= 10:
        return '3-5'
    elif num <= 25:
        return '6-9'
    elif num <= 40:
        return '10-13'
    else:
        return '14+'

# Process all 55 lessons
final_lessons = []

for raw in raw_lessons:
    num = raw['num']
    uz_title = raw['title']
    points = raw['points']
    video_id = raw.get('videoId', '')
    video_url = raw.get('videoUrl', '')

    meta = lesson_meta.get(num, (uz_title, uz_title, uz_title, uz_title))
    en_title, ru_title, en_summary, ru_summary = meta

    course_slug = get_course_slug(num)
    age_group = get_age_group(num)
    slug = f"dars-{num}-{to_slug(uz_title)}"

    # Uzbek screens
    p1 = points[0] if len(points) > 0 else {"pTitle": uz_title, "bullets": ["Farzand tarbiyasi ota-ona zimmasidagi eng ulkan omonatdir."]}
    p2 = points[1] if len(points) > 1 else {"pTitle": "Asosiy saboq", "bullets": ["Tarbiya amaliy namuna orqali shakllanadi."]}
    p3 = points[2] if len(points) > 2 else {"pTitle": "Diniy manbalar", "bullets": ["Qur'on va Sunnatga muvofiq tarbiya ikki dunyo saodatidir."]}
    p4 = points[3] if len(points) > 3 else {"pTitle": "Muhim omillar", "bullets": ["Oila muhitida mehr va intizom uyg'un bo'lishi kerak."]}
    p5 = points[4] if len(points) > 4 else {"pTitle": "Amaliy qadam", "bullets": ["Bugun farzandingiz bilan samimiy suhbatlashing."]}

    uz_summary = p1['bullets'][0] if p1['bullets'] else f"{uz_title} bo‘yicha muhim tarbiyaviy saboqlar."

    # Build UZ screens
    uz_screens = [
        {
            "screenIndex": 1,
            "type": "scenario",
            "title": p1['pTitle'],
            "subtitle": "Hayotiy holat va muqaddima",
            "content": p1['bullets'][0] if p1['bullets'] else "Farzand tarbiyasidagi asosiy tushunchani o'rganamiz.",
            "example": p1['bullets'][1] if len(p1['bullets']) > 1 else "Farzand qalbi oq qog'oz kabi pok va ta'sirlanuvchandir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
        },
        {
            "screenIndex": 2,
            "type": "concept",
            "title": p2['pTitle'],
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": " ".join(p2['bullets']),
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
        },
        {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": p3['pTitle'],
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": " ".join(p3['bullets']),
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
        },
        {
            "screenIndex": 4,
            "type": "practice",
            "title": p5['pTitle'],
            "subtitle": "Bugungi amaliy qadam",
            "content": " ".join(p5['bullets']),
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
        },
        {
            "screenIndex": 5,
            "type": "quiz",
            "title": f"Dars sinovi: {uz_title}",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": f"Ushbu darsning («{uz_title}») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
                "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
                "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
                "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
        }
    ]

    # Build EN screens
    en_screens = [
        {
            "screenIndex": 1,
            "type": "scenario",
            "title": f"Core Principle: {en_title}",
            "subtitle": "Real-life Context & Introduction",
            "content": p1['bullets'][0] if p1['bullets'] else f"Explore essential parenting wisdom from {en_title}.",
            "example": p1['bullets'][1] if len(p1['bullets']) > 1 else "A child's heart is a pure trust, absorbing every nuance of home life.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
        },
        {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": f"{en_summary} Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
        },
        {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": " ".join(p3['bullets']) if p3['bullets'] else "Islam commands parents to safeguard their households and foster righteous character.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
        },
        {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": " ".join(p5['bullets']) if p5['bullets'] else "Engage in warm, focused conversation with your child and practice active listening.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
        },
        {
            "screenIndex": 5,
            "type": "quiz",
            "title": f"Knowledge Check: {en_title}",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": f"What is the key parenting takeaway from '{en_title}'?",
            "quizOptions": [
                "Relying solely on external coercion and severe restrictions",
                "Leading with sincere parental role modeling and nurturing internal moral conviction",
                "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
        }
    ]

    # Build RU screens
    ru_screens = [
        {
            "screenIndex": 1,
            "type": "scenario",
            "title": f"Ключевой принцип: {ru_title}",
            "subtitle": "Жизненная ситуация и введение",
            "content": p1['bullets'][0] if p1['bullets'] else f"Узнайте ключевые аспекты воспитания по теме «{ru_title}».",
            "example": p1['bullets'][1] if len(p1['bullets']) > 1 else "Сердце ребенка подобно чистому листу, впитывающему атмосферу семьи.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
        },
        {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": f"{ru_summary} Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
        },
        {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": " ".join(p3['bullets']) if p3['bullets'] else "Ислам повелевает оберегать свои семьи и воспитывать детей в благочестии.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
        },
        {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": " ".join(p5['bullets']) if p5['bullets'] else "Проведите доверительную беседу с ребенком, проявите искреннее внимание и теплоту.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
        },
        {
            "screenIndex": 5,
            "type": "quiz",
            "title": f"Проверка знаний: {ru_title}",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": f"В чем заключается главный урок по теме «{ru_title}»?",
            "quizOptions": [
                "Опираться исключительно на жесткие внешние наказания и запреты",
                "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
                "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
        }
    ]

    lesson_obj = {
        "courseSlug": course_slug,
        "title": uz_title,
        "slug": slug,
        "summary": uz_summary,
        "order": num,
        "estimatedMinutes": 5,
        "ageGroup": age_group,
        "xpReward": 15,
        "isFree": num <= 5 or num in [11, 21, 31, 41],
        "videoId": video_id,
        "videoUrl": video_url,
        "screens": uz_screens,
        "translations": {
            "uz": {
                "title": uz_title,
                "summary": uz_summary,
                "screens": uz_screens
            },
            "en": {
                "title": en_title,
                "summary": en_summary,
                "screens": en_screens
            },
            "ru": {
                "title": ru_title,
                "summary": ru_summary,
                "screens": ru_screens
            }
        }
    }

    final_lessons.append(lesson_obj)

print(f"Constructed {len(final_lessons)} structured lessons with full UZ/EN/RU screens.")

# Categories
categories = [
    {
        "name": "Tarbiya asoslari va iymon",
        "slug": "tarbiya-asoslari",
        "description": "Farzand tarbiyasining dindagi o'rni, iymoniy asoslar va dastlabki xatarlardan himoya",
        "icon": "Heart",
        "color": "#059669",
        "displayOrder": 1,
        "translations": {
            "uz": { "name": "Tarbiya asoslari va iymon", "description": "Farzand tarbiyasining dindagi o'rni, iymoniy asoslar va dastlabki xatarlardan himoya" },
            "en": { "name": "Foundations & Faith", "description": "The religious foundations of parenting, faith development, and moral protection" },
            "ru": { "name": "Основы воспитания и вера", "description": "Религиозные основы воспитания, духовный фундамент и ранняя защита" }
        }
    },
    {
        "name": "Salomatlik va aqliy tarbiya",
        "slug": "soglom-turmush",
        "description": "Shaxsiy ibrat, halol taom, to'g'ri uyqu, sport va aqliy salohiyat",
        "icon": "Smile",
        "color": "#2563EB",
        "displayOrder": 2,
        "translations": {
            "uz": { "name": "Salomatlik va aqliy tarbiya", "description": "Shaxsiy ibrat, halol taom, to'g'ri uyqu, sport va aqliy salohiyat" },
            "en": { "name": "Health & Mental Growth", "description": "Role modeling, halal diet, sleep discipline, sports, and cognitive development" },
            "ru": { "name": "Здоровье и умственное развитие", "description": "Личный пример, халяльное питание, режим сна, спорт и развитие мышления" }
        }
    },
    {
        "name": "Ruhiy qat'iyat va xulq",
        "slug": "bola-ruhiyati",
        "description": "Qo'rquv va noqislikni yengish, g'azab va hasadni davolash, taqvo va fidoiylik",
        "icon": "Shield",
        "color": "#D97706",
        "displayOrder": 3,
        "translations": {
            "uz": { "name": "Ruhiy qat'iyat va xulq", "description": "Qo'rquv va noqislikni yengish, g'azab va hasadni davolash, taqvo va fidoiylik" },
            "en": { "name": "Emotional Strength & Character", "description": "Overcoming fear and insecurity, managing anger, cultivating Taqwa and generosity" },
            "ru": { "name": "Духовная стойкость и нравственность", "description": "Преодоление страхов и комплексов, совладание с гневом, таква и щедрость" }
        }
    },
    {
        "name": "Oila va jamiyat haqlari",
        "slug": "ijtimoiy-haqlar",
        "description": "Ota-ona, qarindoshlar, qo'shnilar, ustozlar, do'stlar va kattalarning huquqlari",
        "icon": "Users",
        "color": "#EC4899",
        "displayOrder": 4,
        "translations": {
            "uz": { "name": "Oila va jamiyat haqlari", "description": "Ota-ona, qarindoshlar, qo'shnilar, ustozlar, do'stlar va kattalarning huquqlari" },
            "en": { "name": "Family & Community Rights", "description": "Rights of parents, relatives, neighbors, teachers, friends, and elders" },
            "ru": { "name": "Права семьи и общества", "description": "Права родителей, родственников, соседей, учителей, друзей и пожилых" }
        }
    },
    {
        "name": "Islomiy odoblar va balog'at",
        "slug": "odob-axloq",
        "description": "Salomlashish, mehmondorchilik, suhbat odobi, amri ma'ruf va balog'at davri tarbiyasi",
        "icon": "BookOpen",
        "color": "#8B5CF6",
        "displayOrder": 5,
        "translations": {
            "uz": { "name": "Islomiy odoblar va balog'at", "description": "Salomlashish, mehmondorchilik, suhbat odobi, amri ma'ruf va balog'at davri tarbiyasi" },
            "en": { "name": "Islamic Etiquette & Maturity", "description": "Etiquette of greeting, dining, speech, enjoining good, and adolescent guidance" },
            "ru": { "name": "Исламский этикет и взросление", "description": "Этикет приветствия, трапезы, общения, наставления и воспитание в период взросления" }
        }
    }
]

# Age Groups
age_groups = [
    {
        "code": "0-2",
        "title": "0–2 yosh",
        "description": "Chaqaloqlik, mehrli bog'lanish va ilk qadamlar davri",
        "icon": "Baby",
        "displayOrder": 1,
        "translations": {
            "uz": { "title": "0–2 yosh", "description": "Chaqaloqlik, mehrli bog'lanish va ilk qadamlar davri" },
            "en": { "title": "0–2 years", "description": "Infancy, emotional bonding, and early sensory steps" },
            "ru": { "title": "0–2 года", "description": "Младенчество, нежная привязанность и первые шаги" }
        }
    },
    {
        "code": "3-5",
        "title": "3–5 yosh",
        "description": "Nutq, his-tuyg'ular, o'yin va dastlabki chegaralar",
        "icon": "Smile",
        "displayOrder": 2,
        "translations": {
            "uz": { "title": "3–5 yosh", "description": "Nutq, his-tuyg'ular, o'yin va dastlabki chegaralar" },
            "en": { "title": "3–5 years", "description": "Speech, emotions, play, and early boundaries" },
            "ru": { "title": "3–5 лет", "description": "Речь, эмоции, игры и первые границы" }
        }
    },
    {
        "code": "6-9",
        "title": "6–9 yosh",
        "description": "Maktabga qadam, ibodat odatlari, intizom va mas'uliyat",
        "icon": "Book",
        "displayOrder": 3,
        "translations": {
            "uz": { "title": "6–9 yosh", "description": "Maktabga qadam, ibodat odatlari, intizom va mas'uliyat" },
            "en": { "title": "6–9 years", "description": "School years, worship habits, discipline, and accountability" },
            "ru": { "title": "6–9 лет", "description": "Школьный возраст, привычки молитвы, дисциплина и ответственность" }
        }
    },
    {
        "code": "10-13",
        "title": "10–13 yosh",
        "description": "O'tish davri, shaxsiyat shakllanishi va do'stlik munosabatlari",
        "icon": "Compass",
        "displayOrder": 4,
        "translations": {
            "uz": { "title": "10–13 yosh", "description": "O'tish davri, shaxsiyat shakllanishi va do'stlik munosabatlari" },
            "en": { "title": "10–13 years", "description": "Preadolescence, character building, and peer relationships" },
            "ru": { "title": "10–13 лет", "description": "Переходный возраст, формирование личности и дружба" }
        }
    },
    {
        "code": "14+",
        "title": "14+ yosh",
        "description": "O'smirlik, balog'at odobi, hayotiy maqsadlar va mustaqillik",
        "icon": "Award",
        "displayOrder": 5,
        "translations": {
            "uz": { "title": "14+ yosh", "description": "O'smirlik, balog'at odobi, hayotiy maqsadlar va mustaqillik" },
            "en": { "title": "14+ years", "description": "Youth, adolescent etiquette, life goals, and independence" },
            "ru": { "title": "14+ лет", "description": "Юность, этикет взросления, жизненные цели и самостоятельность" }
        }
    }
]

# Courses
courses = [
    {
        "title": "1–10-darslar: Tarbiya asoslari va ilk xatarlardan himoya",
        "slug": "tarbiya-asoslari-va-boshlangich-himoya",
        "description": "Farzand tarbiyasining dindagi o'rni, rostgo'ylik, o'g'irlik va so'kinishdan asrash hamda ekran chegaralari.",
        "ageGroup": "3-5",
        "categorySlug": "tarbiya-asoslari",
        "isPremium": False,
        "estimatedMinutes": 50,
        "totalLessons": 10,
        "icon": "Heart",
        "color": "#059669",
        "translations": {
            "uz": {
                "title": "1–10-darslar: Tarbiya asoslari va ilk xatarlardan himoya",
                "description": "Farzand tarbiyasining dindagi o'rni, rostgo'ylik, o'g'irlik va so'kinishdan asrash hamda ekran chegaralari."
            },
            "en": {
                "title": "Lessons 1–10: Foundations of Parenting & Moral Protection",
                "description": "The fundamental duty of parenting in Islam, honesty, guarding against theft and profanity, and healthy screen habits."
            },
            "ru": {
                "title": "Уроки 1–10: Основы воспитания и защита от первых угроз",
                "description": "Религиозный долг воспитания детей, честность, защита от воровства и брани, а также культура экранного времени."
            }
        }
    },
    {
        "title": "11–20-darslar: Shaxsiy ibrat, salomatlik va aqliy tarbiya",
        "slug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
        "description": "Ota-onaning shaxsiy namunasi, halol taom, to'g'ri uyqu va sport, aqliy salohiyatni o'stirish hamda jasorat.",
        "ageGroup": "6-9",
        "categorySlug": "soglom-turmush",
        "isPremium": True,
        "estimatedMinutes": 50,
        "totalLessons": 10,
        "icon": "Smile",
        "color": "#2563EB",
        "translations": {
            "uz": {
                "title": "11–20-darslar: Shaxsiy ibrat, salomatlik va aqliy tarbiya",
                "description": "Ota-onaning shaxsiy namunasi, halol taom, to'g'ri uyqu va sport, aqliy salohiyatni o'stirish hamda jasorat."
            },
            "en": {
                "title": "Lessons 11–20: Role Modeling, Health & Mental Growth",
                "description": "Leading by personal example, halal nourishment, healthy sleep and exercise, intellectual development, and true courage."
            },
            "ru": {
                "title": "Уроки 11–20: Личный пример, здоровье и умственное развитие",
                "description": "Личный пример родителей, халяльное питание, режим сна и спорт, интеллектуальное развитие и смелость."
            }
        }
    },
    {
        "title": "21–30-darslar: Ruhiy qat'iyat, taqvo va go'zal xulq",
        "slug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
        "description": "Qo'rquv va noqislik tuyg'usini yengish, hasad va g'azabni davolash, taqvo, saxovat va kechirimlilik san'ati.",
        "ageGroup": "6-9",
        "categorySlug": "bola-ruhiyati",
        "isPremium": True,
        "estimatedMinutes": 50,
        "totalLessons": 10,
        "icon": "Shield",
        "color": "#D97706",
        "translations": {
            "uz": {
                "title": "21–30-darslar: Ruhiy qat'iyat, taqvo va go'zal xulq",
                "description": "Qo'rquv va noqislik tuyg'usini yengish, hasad va g'azabni davolash, taqvo, saxovat va kechirimlilik san'ati."
            },
            "en": {
                "title": "Lessons 21–30: Spiritual Courage, Taqwa & Noble Morals",
                "description": "Overcoming childhood phobias and feelings of inadequacy, managing anger and jealousy, cultivating Taqwa, and forgiveness."
            },
            "ru": {
                "title": "Уроки 21–30: Духовная стойкость, богобоязненность и нравственность",
                "description": "Преодоление страхов и комплексов неполноценности, совладание с гневом и завистью, таква, щедрость и прощение."
            }
        }
    },
    {
        "title": "31–40-darslar: Oila, ota-ona va jamiyat haqlari",
        "slug": "oila-ota-ona-va-jamiyat-haqlari",
        "description": "Ota-ona haqqi, qarindoshlar bilan aloqa, qo'shnichilik odobi, ustozlarga ehtirom, do'st tanlash va kattalarni hurmat qilish.",
        "ageGroup": "10-13",
        "categorySlug": "ijtimoiy-haqlar",
        "isPremium": True,
        "estimatedMinutes": 50,
        "totalLessons": 10,
        "icon": "Users",
        "color": "#EC4899",
        "translations": {
            "uz": {
                "title": "31–40-darslar: Oila, ota-ona va jamiyat haqlari",
                "description": "Ota-ona haqqi, qarindoshlar bilan aloqa, qo'shnichilik odobi, ustozlarga ehtirom, do'st tanlash va kattalarni hurmat qilish."
            },
            "en": {
                "title": "Lessons 31–40: Family, Parental & Community Rights",
                "description": "Rights of parents, upholding kinship ties, neighbor etiquette, reverence for mentors, choosing righteous friends, and honoring elders."
            },
            "ru": {
                "title": "Уроки 31–40: Права родителей, семьи и общества",
                "description": "Почитание родителей, родственные связи, права соседей, уважение к учителям, выбор друзей и почитание старших."
            }
        }
    },
    {
        "title": "41–55-darslar: Islomiy odoblar va balog'at davri",
        "slug": "islomiy-odoblar-va-balogat-davri",
        "description": "Salomlashish, ovqatlanish, izn so'rash, suhbat va hazil odobi, ta'ziya, amri ma'ruf hamda balog'at va jinsiy tarbiya.",
        "ageGroup": "14+",
        "categorySlug": "odob-axloq",
        "isPremium": True,
        "estimatedMinutes": 75,
        "totalLessons": 15,
        "icon": "BookOpen",
        "color": "#8B5CF6",
        "translations": {
            "uz": {
                "title": "41–55-darslar: Islomiy odoblar va balog'at davri",
                "description": "Salomlashish, ovqatlanish, izn so'rash, suhbat va hazil odobi, ta'ziya, amri ma'ruf hamda balog'at va jinsiy tarbiya."
            },
            "en": {
                "title": "Lessons 41–55: Islamic Etiquette, Maturity & Youth Guidance",
                "description": "Etiquette of greetings, dining, privacy, gatherings, condolences, enjoining good, and adolescent moral education."
            },
            "ru": {
                "title": "Уроки 41–55: Исламский этикет и воспитание в период взросления",
                "description": "Этикет приветствия, трапезы, общения, визитов, наставления, а также нравственное и половое воспитание."
            }
        }
    }
]

# Learning Paths
learning_paths = [
    {
        "title": "Boshlang'ich Tarbiya Yo'li (1–15-darslar)",
        "slug": "boshlangich-tarbiya-yoli",
        "description": "Farzand tarbiyasining mustahkam poydevori, rostgo'ylik, shaxsiy ibrat va sog'lom turmush tarzi.",
        "ageGroup": "3-5",
        "targetAudience": "Boshlang'ich yoshdagi bolalarning ota-onalari",
        "lessonSlugs": [l['slug'] for l in final_lessons if l['order'] <= 15],
        "badgeIcon": "Compass",
        "translations": {
            "uz": {
                "title": "Boshlang'ich Tarbiya Yo'li (1–15-darslar)",
                "description": "Farzand tarbiyasining mustahkam poydevori, rostgo'ylik, shaxsiy ibrat va sog'lom turmush tarzi.",
                "targetAudience": "Boshlang'ich yoshdagi bolalarning ota-onalari"
            },
            "en": {
                "title": "Foundations Parenting Path (Lessons 1–15)",
                "description": "The bedrock of Islamic parenting, honesty, parental role modeling, and healthy lifestyle habits.",
                "targetAudience": "Parents of young children and toddlers"
            },
            "ru": {
                "title": "Базовый путь воспитания (Уроки 1–15)",
                "description": "Фундамент исламского воспитания, честность, личный пример и здоровый образ жизни семьи.",
                "targetAudience": "Родители детей младшего возраста"
            }
        }
    },
    {
        "title": "Ruhiy va Aqliy Kamolot Yo'li (16–35-darslar)",
        "slug": "ruhiy-va-aqliy-kamolot-yoli",
        "description": "Aqliy tarbiya, qo'rquv va hasadni yengish, taqvo, fidoiylik hamda ota-ona va qo'shnichilik haqlari.",
        "ageGroup": "6-9",
        "targetAudience": "Maktab yoshidagi bolalarning ota-onalari",
        "lessonSlugs": [l['slug'] for l in final_lessons if 16 <= l['order'] <= 35],
        "badgeIcon": "Shield",
        "translations": {
            "uz": {
                "title": "Ruhiy va Aqliy Kamolot Yo'li (16–35-darslar)",
                "description": "Aqliy tarbiya, qo'rquv va hasadni yengish, taqvo, fidoiylik hamda ota-ona va qo'shnichilik haqlari.",
                "targetAudience": "Maktab yoshidagi bolalarning ota-onalari"
            },
            "en": {
                "title": "Mind & Character Excellence Path (Lessons 16–35)",
                "description": "Cognitive development, overcoming fear and envy, Taqwa, generosity, and honoring family and neighbor rights.",
                "targetAudience": "Parents of school-age children"
            },
            "ru": {
                "title": "Путь духовного и умственного развития (Уроки 16–35)",
                "description": "Интеллектуальное воспитание, преодоление страхов и зависти, таква, щедрость и права родителей и соседей.",
                "targetAudience": "Родители детей школьного возраста"
            }
        }
    },
    {
        "title": "Islomiy Odob va Balog'at Maktabi (36–55-darslar)",
        "slug": "islomiy-odob-va-balogat-maktabi",
        "description": "Ustozlar va kattalarni hurmat qilish, islomiy kundalik odoblar hamda balog'at va jinsiy tarbiya.",
        "ageGroup": "14+",
        "targetAudience": "O'smir va katta yoshdagi farzandlarning ota-onalari",
        "lessonSlugs": [l['slug'] for l in final_lessons if l['order'] >= 36],
        "badgeIcon": "BookOpen",
        "translations": {
            "uz": {
                "title": "Islomiy Odob va Balog'at Maktabi (36–55-darslar)",
                "description": "Ustozlar va kattalarni hurmat qilish, islomiy kundalik odoblar hamda balog'at va jinsiy tarbiya.",
                "targetAudience": "O'smir va katta yoshdagi farzandlarning ota-onalari"
            },
            "en": {
                "title": "Islamic Etiquette & Adulthood Path (Lessons 36–55)",
                "description": "Reverence for mentors, everyday Islamic etiquettes, and adolescent moral and sexual development.",
                "targetAudience": "Parents of teenagers and young adults"
            },
            "ru": {
                "title": "Школа исламского этикета и взросления (Уроки 36–55)",
                "description": "Уважение к наставникам и старшим, повседневный исламский этикет, а также нравственное и половое воспитание.",
                "targetAudience": "Родители подростков и молодежи"
            }
        }
    },
    {
        "title": "To'liq 55 Darslik Master Yo'l",
        "slug": "master-55-dars",
        "description": "Islomda farzand tarbiyasining barcha 55 darsini qamrab olgan to'liq va mukammal yo'l xaritasi.",
        "ageGroup": "all",
        "targetAudience": "Barcha ongli ota-onalar",
        "lessonSlugs": [l['slug'] for l in final_lessons],
        "badgeIcon": "Crown",
        "translations": {
            "uz": {
                "title": "To'liq 55 Darslik Master Yo'l",
                "description": "Islomda farzand tarbiyasining barcha 55 darsini qamrab olgan to'liq va mukammal yo'l xaritasi.",
                "targetAudience": "Barcha ongli ota-onalar"
            },
            "en": {
                "title": "Complete 55-Lesson Master Curriculum",
                "description": "The comprehensive master curriculum covering all 55 lessons of Islamic child rearing.",
                "targetAudience": "All dedicated parents"
            },
            "ru": {
                "title": "Полный мастер-курс из 55 уроков",
                "description": "Исчерпывающая программа, охватывающая все 55 уроков исламского воспитания детей.",
                "targetAudience": "Все осознанные родители"
            }
        }
    }
]

# Achievements
achievements = [
    {
        "code": "ilk-qadam",
        "title": "Ilk qadam",
        "description": "Birinchi darsni muvaffaqiyatli tamomladingiz!",
        "icon": "Zap",
        "xpRequired": 15,
        "streakRequired": 1,
        "translations": {
            "uz": { "title": "Ilk qadam", "description": "Birinchi darsni muvaffaqiyatli tamomladingiz!" },
            "en": { "title": "First Step", "description": "You successfully completed your first parenting lesson!" },
            "ru": { "title": "Первый шаг", "description": "Вы успешно завершили свой первый урок воспитания!" }
        }
    },
    {
        "code": "uch-kunlik-streak",
        "title": "Sabrli ota-ona",
        "description": "Ketma-ket 3 kun dars o'qib, o'rganish odatini shakllantirdingiz",
        "icon": "Flame",
        "xpRequired": 45,
        "streakRequired": 3,
        "translations": {
            "uz": { "title": "Sabrli ota-ona", "description": "Ketma-ket 3 kun dars o'qib, o'rganish odatini shakllantirdingiz" },
            "en": { "title": "Patient Parent", "description": "You studied for 3 consecutive days, building a great habit!" },
            "ru": { "title": "Терпеливый родитель", "description": "Вы учились 3 дня подряд, вырабатывая полезную привычку!" }
        }
    },
    {
        "code": "ongli-ota-ona",
        "title": "Ongli ota-ona",
        "description": "10 ta to'liq tarbiya darsini yakunlab, ilk modulni tamomladingiz",
        "icon": "Award",
        "xpRequired": 150,
        "streakRequired": 5,
        "translations": {
            "uz": { "title": "Ongli ota-ona", "description": "10 ta to'liq tarbiya darsini yakunlab, ilk modulni tamomladingiz" },
            "en": { "title": "Conscious Parent", "description": "Completed 10 lessons and mastered the first module!" },
            "ru": { "title": "Осознанный родитель", "description": "Завершили 10 уроков и освоили первый модуль!" }
        }
    },
    {
        "code": "tarbiya-ustasi",
        "title": "Tarbiya ustasi",
        "description": "25 ta darsni muvaffaqiyatli o'zlashtirib, katta tajriba orttirdingiz",
        "icon": "Star",
        "xpRequired": 375,
        "streakRequired": 10,
        "translations": {
            "uz": { "title": "Tarbiya ustasi", "description": "25 ta darsni muvaffaqiyatli o'zlashtirib, katta tajriba orttirdingiz" },
            "en": { "title": "Parenting Mentor", "description": "Mastered 25 lessons and gained deep educational wisdom!" },
            "ru": { "title": "Мастер воспитания", "description": "Успешно освоили 25 уроков и обрели глубокую мудрость!" }
        }
    },
    {
        "code": "haftalik-chempion",
        "title": "Haftalik qahramon",
        "description": "7 kunlik uzluksiz tarbiya o'rganish maromiga erishdingiz",
        "icon": "Crown",
        "xpRequired": 105,
        "streakRequired": 7,
        "translations": {
            "uz": { "title": "Haftalik qahramon", "description": "7 kunlik uzluksiz tarbiya o'rganish maromiga erishdingiz" },
            "en": { "title": "Weekly Champion", "description": "Achieved a 7-day uninterrupted study streak!" },
            "ru": { "title": "Герой недели", "description": "Достигли непрерывного 7-дневного ритма обучения!" }
        }
    }
]

# Articles
articles = [
    {
        "title": "Islomda farzand tarbiyasining 5 oltin qoidasi",
        "slug": "islomda-farzand-tarbiyasining-5-oltin-qoidasi",
        "excerpt": "Abdulloh Domlaning 55 darslik silsilasi asosida ota-onalar uchun eng muhim va dolzarb tavsiyalar.",
        "content": "Farzand tarbiyasi ota-ona uchun nafaqat oilaviy baxt, balki ulkan diniy omonat va mas'uliyatdir. Payg'ambarimiz (s.a.v) hadislarida har bir ota-ona o'z farzandi uchun so'ralishi qat'iy ta'kidlangan. Birinchi qoida — shaxsiy ibrat. Bolalar so'zimizga emas, xulqimizga ergashadi. Ikkinchi qoida — mehr va adolat. Aka-ukalar o'rtasida mehr va sovg'ada tenglik bo'lishi shart. Uchinchi qoida — halol luqma. Halol luqma bolaning qoniga singib, xulqini go'zallashtiradi. To'rtinchi qoida — tilni asrash. Jahl chiqqanda so'kinish o'rniga duo qilish lozim. Beshinchi qoida — ibodatga muhabbat. 7 yoshdan boshlab mehr bilan namozga o'rgatish zarur.",
        "categorySlug": "tarbiya-asoslari",
        "ageGroup": "3-5",
        "readingTimeMinutes": 5,
        "tags": ["farzand tarbiyasi", "sunnat", "mehr", "namoz", "odob"],
        "seoTitle": "Islomda farzand tarbiyasining 5 oltin qoidasi | Farzandly",
        "seoDescription": "Abdulloh Domla darslari asosida farzand tarbiyasining eng muhim qoidalari, sunnatga muvofiq tavsiyalar.",
        "isPublished": True,
        "publishedAt": "2026-09-20T00:00:00.000Z",
        "translations": {
            "uz": {
                "title": "Islomda farzand tarbiyasining 5 oltin qoidasi",
                "excerpt": "Abdulloh Domlaning 55 darslik silsilasi asosida ota-onalar uchun eng muhim va dolzarb tavsiyalar.",
                "content": "Farzand tarbiyasi ota-ona uchun nafaqat oilaviy baxt, balki ulkan diniy omonat va mas'uliyatdir..."
            },
            "en": {
                "title": "5 Golden Rules of Islamic Parenting",
                "excerpt": "Essential guidance derived from the comprehensive 55-lesson curriculum for mindful parents.",
                "content": "Parenting in Islam is not merely personal joy, but a profound divine trust. The Prophet (s.a.w) reminded us that every parent is a shepherd over their household..."
            },
            "ru": {
                "title": "5 золотых правил исламского воспитания",
                "excerpt": "Важнейшие практические советы для родителей на основе курса из 55 уроков.",
                "content": "Воспитание детей в Исламе — это не просто семейное счастье, но и великий аманат перед Всевышним..."
            }
        }
    }
]

# Generate TypeScript output
ts_content = f"""// Auto-generated 55-lesson Islamic Child Rearing Dataset for Farzandly
// Based on content/islomda_farzand_tarbiyasi/Islomda_Farzand_Tarbiyasi_1_55_Barcha_Darslar.txt

export const seedCategories = {json.dumps(categories, ensure_ascii=False, indent=2)};

export const seedAgeGroups = {json.dumps(age_groups, ensure_ascii=False, indent=2)};

export const seedAchievements = {json.dumps(achievements, ensure_ascii=False, indent=2)};

export const seedCourses = {json.dumps(courses, ensure_ascii=False, indent=2)};

export const seedLearningPaths = {json.dumps(learning_paths, ensure_ascii=False, indent=2)};

export const seedLessons = {json.dumps(final_lessons, ensure_ascii=False, indent=2)};

export const seedArticles = {json.dumps(articles, ensure_ascii=False, indent=2)};
"""

# Extra content (farzand-tarbiyasi.txt update) is generated by build_extra_content.py and merged here
def footer(import_path):
    return f"""
// Merge content generated from content/farzand-tarbiyasi.txt (see build_extra_content.py)
import {{ applyExtraContent }} from '{import_path}';
applyExtraContent({{ courses: seedCourses, lessons: seedLessons, articles: seedArticles, paths: seedLearningPaths }});
"""

# Write to both server and client seedData.ts
with open('server/src/scripts/seedData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content + footer('./seedExtra.js'))

with open('client/lib/seedData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content + footer('./seedExtra'))

print(f"Successfully generated seedData.ts in server and client ({len(final_lessons)} lessons, {len(courses)} courses, {len(learning_paths)} learning paths).")
