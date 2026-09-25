import json
import re

brain_slides = [
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
]

# Update client/lib/healthData.ts
with open('client/lib/healthData.ts', 'r', encoding='utf-8') as f:
    client_content = f.read()

# Update GalleryImage interface in client/lib/healthData.ts if needed
if 'descriptionUz?: string;' not in client_content:
    client_content = client_content.replace(
        'export interface GalleryImage {\n  url: string;\n  labelUz: string;\n  labelEn: string;\n  labelRu: string;\n}',
        'export interface GalleryImage {\n  url: string;\n  labelUz: string;\n  labelEn: string;\n  labelRu: string;\n  descriptionUz?: string;\n  descriptionEn?: string;\n  descriptionRu?: string;\n}'
    )

# Replace brain galleryImages
slides_json = json.dumps(brain_slides, indent=6, ensure_ascii=False)
pattern = r'("id":\s*"brain-nervous-system",[\s\S]*?"galleryImages":\s*)\[[\s\S]*?\](,[\s\S]*?"pronunciations")'

client_content_new = re.sub(pattern, r'\g<1>' + slides_json + r'\g<2>', client_content)

with open('client/lib/healthData.ts', 'w', encoding='utf-8') as f:
    f.write(client_content_new)

# Update server/src/scripts/seedHealthData.ts
with open('server/src/scripts/seedHealthData.ts', 'r', encoding='utf-8') as f:
    server_content = f.read()

server_content_new = re.sub(pattern, r'\g<1>' + slides_json + r'\g<2>', server_content)

with open('server/src/scripts/seedHealthData.ts', 'w', encoding='utf-8') as f:
    f.write(server_content_new)

print("Updated brain galleryImages in client and server successfully!")
