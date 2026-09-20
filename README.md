# 🌿 Farzandly — Zamonaviy Raqamli Tarbiya Platformasi

> **Farzand tarbiyasi — har kuni mehr va ilm bilan o‘rganiladigan yo‘l.**

**Farzandly** — 20–35 yoshdagi o‘zbek ota-onalari uchun mo‘ljallangan, Islomiy qadriyatlar, zamonaviy bolalar psixologiyasi va amaliy metodikalarga asoslangan ilg‘or ta’lim platformasi. Duolingo mahsulot tamoyillaridan (bitesize darslar, o‘quv xaritasi, streak, XP, taktil tugmalar va do‘stona mikro-matnlar) ilhomlangan holda, butunlay o‘ziga xos milliy, samimiy va ma’naviy dizayn tili bilan yaratilgan.

---

## ✨ Eng So'nggi Yangilanishlar (Senior UI/UX & Telegram Auth)

### 1. 📱 Telegram orqali Kirish va Ro‘yxatdan o‘tish (`/kirish`)
- **Telegram Web Login:** Telegram ID, username, ism-familiya va profil rasmi bilan xavfsiz autentifikatsiya.
- **HMAC-SHA256 tekshiruvi:** Backend (`/api/auth/telegram`) Telegram Bot Token orqali ma'lumotlar yaxlitligini xavfsiz tekshiradi.
- **1-bosqichli Sinov Profillari:** Test qilish uchun tayyor o'zbek ota-onasi profillari (Aziza — 2 farzand onasi, Jasur — faol ota, Dilnoza — yosh ona).
- **Session sinxronizatsiyasi:** `AuthContext` orqali saqlangan foydalanuvchi ma'lumotlari barcha sahifalarda (Navbar, Profil, Darslar) aks etadi.

### 2. 🎬 Motion, Animatsiyalar & Fizika (`framer-motion`)
- **Sahifa va bo‘limlar o‘tishlari:** Har bir sahifada staggered (ketma-ket) mayin chiqish animatsiyalari.
- **Taktil 3D Tugmalar:** Duolingo uslubidagi bosganda `translate-y-1` va `border-b-0` beruvchi jismoniy his.
- **Interaktiv Yo‘l (Serpentine Path):** Hozirgi dars pulsatsiyasi, ochilmagan darslar blokirovkasi, to‘liq animatsiyali modal darcha.
- **Interaktiv Viktorina & Konfetti:** Dars yakunida `canvas-confetti` bilan yutuq salyuti va XP balansi oshishi.

### 3. 🌫️ Blurring & Glassmorphism & Vizual Estetika
- **Frosted Glass Navbar:** `backdrop-blur-md bg-[#FFFDF9]/85` — silliq skroll va zamonaviy oyna effekti.
- **Ambient Glow:** Orqa fonda mayin zumrad (`emerald-500/10`) va issiq sarg'ish (`amber-500/10`) gradientli yorug'lik nurlari.
- **Border & Shadow fizika:** Nozik `border-2 border-stone-200` va `shadow-lg` elementlar.

### 4. 💀 Skeleton Yuklanish Holatlari
- Har bir asosiy yo'nalish uchun maxsus Next.js streaming loading skeletlari:
  - `app/loading.tsx` — Umumiy sahifa skeleti
  - `app/dashboard/loading.tsx` — Streak, XP va Serpentine path skeleti
  - `app/maqolalar/loading.tsx` — Maqolalar katalogi kartalari skeleti
  - `app/kurslar/loading.tsx` — Kurs kartalari skeleti
- `components/ui/Skeleton.tsx` — `animate-pulse` bilan reaktiv karkas komponenti.

### 5. 🚫 Zero AI / No Sparkles Siyosati
- Platformadan sun'iy intellekt, "sehrli" robot/yulduzcha (`Sparkles`) ikonkalari to'liq olib tashlangan.
- O'rniga bolalar tarbiyasiga mos samimiy, insoniy ikonalar (`Heart`, `Smile`, `Award`, `BookOpen`, `Lightbulb`) va haqiqiy mutaxassislar metodikasi qo'llanilgan.

---

## 🚀 Texnologik Stek

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, Lucide Icons, Canvas Confetti.
- **Backend:** Node.js, Express.js, TypeScript, Mongoose, Zod, Helmet, Morgan.
- **Ma'lumotlar bazasi:** MongoDB (Mongoose) + mahalliy sinovlar va oflayn muhit uchun intellektual in-memory fallback.
- **SEO & SSR:** Next.js Server Components, Dinamik Metadata, Schema.org JSON-LD (Article, BreadcrumbList, Organization), `sitemap.xml`, `robots.txt`.

---

## 📂 Papkalar Strukturasi

```
farzandly/
├── client/                     # Next.js Frontend
│   ├── app/
│   │   ├── layout.tsx          # Asosiy layout, shriftlar, SEO metama'lumotlar, AuthProvider
│   │   ├── page.tsx            # Asosiy marketing sahifasi (Motion, Glassmorphism, FAQ)
│   │   ├── globals.css         # Duolingo 3D tugmalar, zumrad ranglar palitrasi
│   │   ├── kirish/             # Telegram orqali ro'yxatdan o'tish / kirish sahifasi
│   │   ├── onboarding/         # 4 bosqichli shaxsiy yo'l generatori
│   │   ├── dashboard/          # Serpentine o'quv xaritasi, Streak, Faol dars darchasi
│   │   ├── dars/[id]/          # 7 bosqichli interaktiv dars (Test, XP, Konfetti)
│   │   ├── maqolalar/          # SEO katalog
│   │   │   └── [slug]/         # To'liq maqola & JSON-LD & Konvertatsiya CTA
│   │   ├── kurslar/            # Kurslar katalogi & filter
│   │   │   └── [slug]/         # Kurs dasturi & darslar sillabusi
│   │   ├── profil/             # Shaxsiy profil, XP balansi & Nishonlar
│   │   ├── premium/            # Tariflar, Taqqoslash & FAQ
│   │   ├── loading.tsx         # Global streaming skeleton
│   │   ├── sitemap.ts          # Dinamik sitemap.xml
│   │   └── robots.ts           # robots.txt
│   ├── components/
│   │   ├── Navbar.tsx          # Glassmorphism navbar + Telegram profil menyusi
│   │   ├── Footer.tsx          # To'liq footer
│   │   └── ui/
│   │       └── Skeleton.tsx    # Silliq skeleton yuklanish komponenti
│   ├── context/
│   │   └── AuthContext.tsx     # Telegram auth holati, localStorage, XP boshqaruvi
│   └── lib/                    # API klienti va demo ma'lumotlar
│
├── server/                     # Express.js REST API
│   ├── src/
│   │   ├── config/             # MongoDB ulanishi va konfiguratsiya
│   │   ├── controllers/        # Barcha controllerlar (auth, darslar, maqolalar, kurslar)
│   │   ├── middleware/         # Xatoliklar va xavfsizlik filtrlari
│   │   ├── models/             # 13 ta to'liq Mongoose modellari (User, Progress, Lesson...)
│   │   ├── routes/             # REST API marshrutlari (/api/auth, /api/lessons...)
│   │   ├── services/           # DataService (Mongo + In-memory)
│   │   ├── scripts/            # Baza uchun to'liq o'zbekcha seed ma'lumotlari
│   │   ├── app.ts              # Express ilovasi
│   │   └── server.ts           # Server start nuqtasi
│   ├── .env.example
│   └── package.json
│
├── package.json                # Monorepo boshqaruv skriptlari
└── README.md
```

---

## 🛠 Ishga Tushirish Buyruqlari

### 1. Ilovani birgalikda ishga tushirish (Frontend + Backend)
Asosiy papkada:
```bash
npm run dev
```
Bu buyruq avtomatik tarzda:
- Backend serverni `http://localhost:5000` manzilida
- Frontend mijozni `http://localhost:3000` manzilida ishga tushiradi.

### 2. Alohida ishga tushirish (kerak bo'lsa)
```bash
# Serverni ishga tushirish (Port 5000):
npm run dev:server

# Frontendni ishga tushirish (Port 3000):
npm run dev:client
```

### 3. Bazaga ma'lumotlarni kiritish (Seed)
```bash
npm run seed
```

### 4. Loyihani to'liq build qilish (Production tekshiruvi)
```bash
npm run build
```

---

## 📡 Asosiy API Endpointlar

- `POST /api/auth/telegram` — Telegram ma'lumotlari bilan kirish / ro'yxatdan o'tish
- `GET /api/auth/me` — Joriy foydalanuvchi ma'lumotlari
- `POST /api/auth/logout` — Tizimdan chiqish
- `GET /api/categories` — Tarbiya yo'nalishlari
- `GET /api/age-groups` — Bolalar yosh toifalari (0–2, 3–5, 6–9, 10–13, 14+)
- `GET /api/articles` — SEO maqolalari (filtrlash va qidiruv bilan)
- `GET /api/articles/:slug` — Alohida maqola
- `GET /api/courses` — Kurslar ro'yxati
- `GET /api/courses/:slug` — Kurs tafsiloti va darslar
- `GET /api/learning-paths` — O'quv yo'llari
- `GET /api/lessons/:id` — 7 bosqichli interaktiv dars
- `POST /api/users/onboarding` — Shaxsiy dastur tuzish
- `GET /api/users/progress` — Streak, XP va o'zlashtirish
- `POST /api/users/progress` — Darsni tamomlash va XP yozish
- `POST /api/newsletter/subscribe` — Haftalik pochtaga obuna
- `GET /api/achievements` — Erishilgan nishonlar

---

## 🎯 Mahsulot va Dizayn Tamoyillari

1. **Bitesize darslar:** Har bir dars band ota-onalar uchun 3–7 daqiqaga mo'ljallangan.
2. **Serpentine Learning Path:** Bosqichma-bosqich ochiladigan o'quv xaritasi.
3. **Taktil 3D tugmalar:** Bosganda jismoniy bosim seziladigan `border-b-4` klasslari.
4. **Gamifikatsiya:** Streak (kunlik odat zanjiri), XP mukofotlari, mehrli nishonlar va konfetti nishonlash.
5. **Samimiy O'zbek Kontenti:** Hech qanday soxta tarjima yoki Lorem Ipsum yo'q; barcha darslar, hadislar, savollar va maqolalar haqiqiy o'zbek oilasi ehtiyojlariga moslashtirilgan.
