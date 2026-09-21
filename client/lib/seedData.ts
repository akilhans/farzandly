// Farzandly Master Dataset (55-lesson Islamic Child Rearing + Dynamic farzand-tarbiyasi.txt Content)
// Includes:
// - Abdulloh Domla 55 Darslik Silsilasi
// - Xadicha Kubro Tongar ("Barkamol farzand tarbiyasi" Fitrat pedagogikasi)
// - Aziz Rahimov (Rahimov School ta'lim va tarbiya suhbati, affordance, 4 sarmoya)
// - 30 jildlik biografik to'plam (Sharq, G'arb va zamon daholari, klip tafakkur)
// - Jasur va mustaqil farzand (Muammolar, sabablar va 4 amaliy yechim)
// - Dynamic Gamification (12 Badges, XP levels, Streaks)

export const seedCategories = [
  {
    "name": "Tarbiya asoslari va iymon",
    "slug": "tarbiya-asoslari",
    "description": "Farzand tarbiyasining dindagi o'rni, iymoniy asoslar va dastlabki xatarlardan himoya",
    "icon": "Heart",
    "color": "#059669",
    "displayOrder": 1,
    "translations": {
      "uz": {
        "name": "Tarbiya asoslari va iymon",
        "description": "Farzand tarbiyasining dindagi o'rni, iymoniy asoslar va dastlabki xatarlardan himoya"
      },
      "en": {
        "name": "Foundations & Faith",
        "description": "The religious foundations of parenting, faith development, and moral protection"
      },
      "ru": {
        "name": "Основы воспитания и вера",
        "description": "Религиозные основы воспитания, духовный фундамент и ранняя защита"
      }
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
      "uz": {
        "name": "Salomatlik va aqliy tarbiya",
        "description": "Shaxsiy ibrat, halol taom, to'g'ri uyqu, sport va aqliy salohiyat"
      },
      "en": {
        "name": "Health & Mental Growth",
        "description": "Role modeling, halal diet, sleep discipline, sports, and cognitive development"
      },
      "ru": {
        "name": "Здоровье и умственное развитие",
        "description": "Личный пример, халяльное питание, режим сна, спорт и развитие мышления"
      }
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
      "uz": {
        "name": "Ruhiy qat'iyat va xulq",
        "description": "Qo'rquv va noqislikni yengish, g'azab va hasadni davolash, taqvo va fidoiylik"
      },
      "en": {
        "name": "Emotional Strength & Character",
        "description": "Overcoming fear and insecurity, managing anger, cultivating Taqwa and generosity"
      },
      "ru": {
        "name": "Духовная стойкость и нравственность",
        "description": "Преодоление страхов и комплексов, совладание с гневом, таква и щедрость"
      }
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
      "uz": {
        "name": "Oila va jamiyat haqlari",
        "description": "Ota-ona, qarindoshlar, qo'shnilar, ustozlar, do'stlar va kattalarning huquqlari"
      },
      "en": {
        "name": "Family & Community Rights",
        "description": "Rights of parents, relatives, neighbors, teachers, friends, and elders"
      },
      "ru": {
        "name": "Права семьи и общества",
        "description": "Права родителей, родственников, соседей, учителей, друзей и пожилых"
      }
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
      "uz": {
        "name": "Islomiy odoblar va balog'at",
        "description": "Salomlashish, mehmondorchilik, suhbat odobi, amri ma'ruf va balog'at davri tarbiyasi"
      },
      "en": {
        "name": "Islamic Etiquette & Maturity",
        "description": "Etiquette of greeting, dining, speech, enjoining good, and adolescent guidance"
      },
      "ru": {
        "name": "Исламский этикет и взросление",
        "description": "Этикет приветствия, трапезы, общения, наставления и воспитание в период взросления"
      }
    }
  }
];

export const seedAgeGroups = [
  {
    "code": "0-2",
    "title": "0–2 yosh",
    "description": "Chaqaloqlik, mehrli bog'lanish va ilk qadamlar davri",
    "icon": "Baby",
    "displayOrder": 1,
    "translations": {
      "uz": {
        "title": "0–2 yosh",
        "description": "Chaqaloqlik, mehrli bog'lanish va ilk qadamlar davri"
      },
      "en": {
        "title": "0–2 years",
        "description": "Infancy, emotional bonding, and early sensory steps"
      },
      "ru": {
        "title": "0–2 года",
        "description": "Младенчество, нежная привязанность и первые шаги"
      }
    }
  },
  {
    "code": "3-5",
    "title": "3–5 yosh",
    "description": "Nutq, his-tuyg'ular, o'yin va dastlabki chegaralar",
    "icon": "Smile",
    "displayOrder": 2,
    "translations": {
      "uz": {
        "title": "3–5 yosh",
        "description": "Nutq, his-tuyg'ular, o'yin va dastlabki chegaralar"
      },
      "en": {
        "title": "3–5 years",
        "description": "Speech, emotions, play, and early boundaries"
      },
      "ru": {
        "title": "3–5 лет",
        "description": "Речь, эмоции, игры и первые границы"
      }
    }
  },
  {
    "code": "6-9",
    "title": "6–9 yosh",
    "description": "Maktabga qadam, ibodat odatlari, intizom va mas'uliyat",
    "icon": "Book",
    "displayOrder": 3,
    "translations": {
      "uz": {
        "title": "6–9 yosh",
        "description": "Maktabga qadam, ibodat odatlari, intizom va mas'uliyat"
      },
      "en": {
        "title": "6–9 years",
        "description": "School years, worship habits, discipline, and accountability"
      },
      "ru": {
        "title": "6–9 лет",
        "description": "Школьный возраст, привычки молитвы, дисциплина и ответственность"
      }
    }
  },
  {
    "code": "10-13",
    "title": "10–13 yosh",
    "description": "O'tish davri, shaxsiyat shakllanishi va do'stlik munosabatlari",
    "icon": "Compass",
    "displayOrder": 4,
    "translations": {
      "uz": {
        "title": "10–13 yosh",
        "description": "O'tish davri, shaxsiyat shakllanishi va do'stlik munosabatlari"
      },
      "en": {
        "title": "10–13 years",
        "description": "Preadolescence, character building, and peer relationships"
      },
      "ru": {
        "title": "10–13 лет",
        "description": "Переходный возраст, формирование личности и дружба"
      }
    }
  },
  {
    "code": "14+",
    "title": "14+ yosh",
    "description": "O'smirlik, balog'at odobi, hayotiy maqsadlar va mustaqillik",
    "icon": "Award",
    "displayOrder": 5,
    "translations": {
      "uz": {
        "title": "14+ yosh",
        "description": "O'smirlik, balog'at odobi, hayotiy maqsadlar va mustaqillik"
      },
      "en": {
        "title": "14+ years",
        "description": "Youth, adolescent etiquette, life goals, and independence"
      },
      "ru": {
        "title": "14+ лет",
        "description": "Юность, этикет взросления, жизненные цели и самостоятельность"
      }
    }
  }
];

export const seedAchievements = [
  {
    "code": "ilk-qadam",
    "title": "Ilk qadam",
    "description": "Birinchi darsni muvaffaqiyatli tamomladingiz!",
    "icon": "Zap",
    "xpRequired": 15,
    "streakRequired": 1,
    "translations": {
      "uz": {
        "title": "Ilk qadam",
        "description": "Birinchi darsni muvaffaqiyatli tamomladingiz!"
      },
      "en": {
        "title": "First Step",
        "description": "You successfully completed your first parenting lesson!"
      },
      "ru": {
        "title": "Первый шаг",
        "description": "Вы успешно завершили свой первый урок воспитания!"
      }
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
      "uz": {
        "title": "Sabrli ota-ona",
        "description": "Ketma-ket 3 kun dars o'qib, o'rganish odatini shakllantirdingiz"
      },
      "en": {
        "title": "Patient Parent",
        "description": "You studied for 3 consecutive days, building a great habit!"
      },
      "ru": {
        "title": "Терпеливый родитель",
        "description": "Вы учились 3 дня подряд, вырабатывая полезную привычку!"
      }
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
      "uz": {
        "title": "Haftalik qahramon",
        "description": "7 kunlik uzluksiz tarbiya o'rganish maromiga erishdingiz"
      },
      "en": {
        "title": "Weekly Champion",
        "description": "Achieved a 7-day uninterrupted study streak!"
      },
      "ru": {
        "title": "Герой недели",
        "description": "Достигли непрерывного 7-дневного ритма обучения!"
      }
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
      "uz": {
        "title": "Ongli ota-ona",
        "description": "10 ta to'liq tarbiya darsini yakunlab, ilk modulni tamomladingiz"
      },
      "en": {
        "title": "Conscious Parent",
        "description": "Completed 10 lessons and mastered the first module!"
      },
      "ru": {
        "title": "Осознанный родитель",
        "description": "Завершили 10 уроков и освоили первый модуль!"
      }
    }
  },
  {
    "code": "fitrat-kashfiyotchisi",
    "title": "Fitrat kashfiyotchisi",
    "description": "Xadicha Kubro Tongar asari asosidagi Fitrat pedagogikasi darslarini o'zlashtirdingiz",
    "icon": "Heart",
    "xpRequired": 180,
    "streakRequired": 4,
    "translations": {
      "uz": {
        "title": "Fitrat kashfiyotchisi",
        "description": "Xadicha Kubro Tongar asari asosidagi Fitrat pedagogikasi darslarini o'zlashtirdingiz"
      },
      "en": {
        "title": "Fitrah Explorer",
        "description": "Mastered the Fitrah pedagogy lessons based on Hadice Kubra Tongar!"
      },
      "ru": {
        "title": "Исследователь фитры",
        "description": "Освоили педагогику фитры по урокам Хадиджи Кюбры Тонгар!"
      }
    }
  },
  {
    "code": "sabr-va-adolat",
    "title": "G'azabni yenguvchi",
    "description": "Jahlni jilovlashning 4 qadami va ovoz me'yori darslarini a'lo bahoda yakunladingiz",
    "icon": "Shield",
    "xpRequired": 220,
    "streakRequired": 6,
    "translations": {
      "uz": {
        "title": "G'azabni yenguvchi",
        "description": "Jahlni jilovlashning 4 qadami va ovoz me'yori darslarini a'lo bahoda yakunladingiz"
      },
      "en": {
        "title": "Master of Patience",
        "description": "Conquered the 4 steps of anger management and voice modulation!"
      },
      "ru": {
        "title": "Победитель гнева",
        "description": "Освоили 4 шага обуздания гнева и культуру спокойного тона!"
      }
    }
  },
  {
    "code": "kitobxon-murabbiy",
    "title": "Kitobxon murabbiy",
    "description": "30 buyuk mutafakkir va klip tafakkurdan asrash darslarini yakunladingiz",
    "icon": "BookOpen",
    "xpRequired": 260,
    "streakRequired": 7,
    "translations": {
      "uz": {
        "title": "Kitobxon murabbiy",
        "description": "30 buyuk mutafakkir va klip tafakkurdan asrash darslarini yakunladingiz"
      },
      "en": {
        "title": "Bookish Mentor",
        "description": "Completed lessons on the 30 great polymaths and beating clip-thinking!"
      },
      "ru": {
        "title": "Наставник-книголюб",
        "description": "Изучили 30 великих мыслителей и защиту от клипового мышления!"
      }
    }
  },
  {
    "code": "talim-innovatori",
    "title": "Ta'lim innovatori",
    "description": "Aziz Rahimovning zamonaviy ta'lim metodikasi va 4 turdagi sarmoya darslarini o'rgandingiz",
    "icon": "Compass",
    "xpRequired": 300,
    "streakRequired": 8,
    "translations": {
      "uz": {
        "title": "Ta'lim innovatori",
        "description": "Aziz Rahimovning zamonaviy ta'lim metodikasi va 4 turdagi sarmoya darslarini o'rgandingiz"
      },
      "en": {
        "title": "Educational Innovator",
        "description": "Learned modern pedagogical principles and 4 capital types from Aziz Rahimov!"
      },
      "ru": {
        "title": "Инноватор образования",
        "description": "Освоили методики современного образования и 4 вида капитала от Азиза Рахимова!"
      }
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
      "uz": {
        "title": "Tarbiya ustasi",
        "description": "25 ta darsni muvaffaqiyatli o'zlashtirib, katta tajriba orttirdingiz"
      },
      "en": {
        "title": "Parenting Mentor",
        "description": "Mastered 25 lessons and gained deep educational wisdom!"
      },
      "ru": {
        "title": "Мастер воспитания",
        "description": "Успешно освоили 25 уроков и обрели глубокую мудрость!"
      }
    }
  },
  {
    "code": "14-kunlik-afsona",
    "title": "14 kunlik sabr timsoli",
    "description": "Ketma-ket 14 kun davomida biror kunni qoldirmasdan tarbiya sirlarini o'rgandingiz",
    "icon": "Flame",
    "xpRequired": 500,
    "streakRequired": 14,
    "translations": {
      "uz": {
        "title": "14 kunlik sabr timsoli",
        "description": "Ketma-ket 14 kun davomida biror kunni qoldirmasdan tarbiya sirlarini o'rgandingiz"
      },
      "en": {
        "title": "14-Day Legend",
        "description": "Achieved an extraordinary 14-day study streak without missing a day!"
      },
      "ru": {
        "title": "14 дней стойкости",
        "description": "14 дней непрерывного обучения без единого пропуска!"
      }
    }
  },
  {
    "code": "mukammal-bilimdon",
    "title": "A'lochi ota-ona",
    "description": "Interaktiv mini-testlarni 100% aniqlik bilan yechib, yuqori savodxonlik ko'rsatdingiz",
    "icon": "CheckCircle",
    "xpRequired": 650,
    "streakRequired": 15,
    "translations": {
      "uz": {
        "title": "A'lochi ota-ona",
        "description": "Interaktiv mini-testlarni 100% aniqlik bilan yechib, yuqori savodxonlik ko'rsatdingiz"
      },
      "en": {
        "title": "Perfect Scholar",
        "description": "Scored 100% across multiple interactive quizzes with high parenting literacy!"
      },
      "ru": {
        "title": "Отличный родитель",
        "description": "Сдали тесты на 100% с высочайшей родительской грамотностью!"
      }
    }
  },
  {
    "code": "donishmand-murabbiy",
    "title": "Donishmand murabbiy",
    "description": "1000 dan ortiq XP to'plab, eng yuqori darajadagi fazilatli ota-ona maqomiga erishdingiz",
    "icon": "Crown",
    "xpRequired": 1000,
    "streakRequired": 30,
    "translations": {
      "uz": {
        "title": "Donishmand murabbiy",
        "description": "1000 dan ortiq XP to'plab, eng yuqori darajadagi fazilatli ota-ona maqomiga erishdingiz"
      },
      "en": {
        "title": "Wise Grandmaster",
        "description": "Earned 1000+ XP and achieved the highest parenting wisdom honor!"
      },
      "ru": {
        "title": "Мудрый наставник",
        "description": "Набрали 1000+ XP и достигли высшего почетного статуса мудрого родителя!"
      }
    }
  }
];

export const seedCourses = [
  {
    "title": "1–10-darslar: Tarbiya asoslari va ilk xatarlardan himoya",
    "slug": "tarbiya-asoslari-va-boshlangich-himoya",
    "description": "Farzand tarbiyasining dindagi o'rni, rostgo'ylik, o'g'irlik va so'kinishdan asrash hamda ekran chegaralari.",
    "ageGroup": "3-5",
    "categorySlug": "tarbiya-asoslari",
    "isPremium": false,
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
    "isPremium": true,
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
    "isPremium": true,
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
    "isPremium": true,
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
    "isPremium": true,
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
  },
  {
    "title": "Xadicha Kubro Tongar: Fitrat pedagogikasi va onalik nuri",
    "slug": "barkamol-farzand-fitrat-pedagogikasi",
    "description": "Ahsani taqvim siri, Qur'oniy tarbiyaning 3 bosqichi, oqila onalik, qalb kasalliklaridan poklanish va nafs tarbiyasi.",
    "ageGroup": "0-2",
    "categorySlug": "tarbiya-asoslari",
    "isPremium": true,
    "estimatedMinutes": 30,
    "totalLessons": 4,
    "icon": "Heart",
    "color": "#059669",
    "translations": {
      "uz": {
        "title": "Xadicha Kubro Tongar: Fitrat pedagogikasi va onalik nuri",
        "description": "Ahsani taqvim siri, Qur'oniy tarbiyaning 3 bosqichi, oqila onalik, qalb kasalliklaridan poklanish va nafs tarbiyasi."
      },
      "en": {
        "title": "Hadice Kubra Tongar: Fitrah Pedagogy & Motherhood Light",
        "description": "The secret of Ahsanu Taqweem, 3 Quranic stages of child rearing, emotional cleansing, and nurturing the soul."
      },
      "ru": {
        "title": "Хадиджа Кюбра Тонгар: Педагогика фитры и свет материнства",
        "description": "Тайна Ахсану Таквим, 3 коранических этапа воспитания, мудрое материнство и очищение сердца."
      }
    }
  },
  {
    "title": "Aziz Rahimov: Zamonaviy ta'lim va tarbiya sirlari",
    "slug": "zamonaviy-tarbiya-va-talim-sirlari",
    "description": "Rahimov School asoschisi bilan ta'lim va tarbiya farqi, Brain Rot va gadjetlar taqiqi, Vigotskiy nazariyasi hamda 4 turdagi sarmoya.",
    "ageGroup": "10-13",
    "categorySlug": "soglom-turmush",
    "isPremium": true,
    "estimatedMinutes": 25,
    "totalLessons": 3,
    "icon": "Compass",
    "color": "#2563EB",
    "translations": {
      "uz": {
        "title": "Aziz Rahimov: Zamonaviy ta'lim va tarbiya sirlari",
        "description": "Rahimov School asoschisi bilan ta'lim va tarbiya farqi, Brain Rot va gadjetlar taqiqi, Vigotskiy nazariyasi hamda 4 turdagi sarmoya."
      },
      "en": {
        "title": "Aziz Rahimov: Secrets of Modern Education & Upbringing",
        "description": "Dialogue with Rahimov School founder on education vs upbringing, Brain Rot, Vygotsky theory, and 4 forms of capital."
      },
      "ru": {
        "title": "Азиз Рахимов: Секреты современного образования и воспитания",
        "description": "Беседа с основателем Rahimov School: различие воспитания и обучения, запрет гаджетов, теория Выготского и 4 вида капитала."
      }
    }
  },
  {
    "title": "Jasur va mustaqil farzand: Muammolar va yechimlar",
    "slug": "jasur-va-mustaqil-farzand-tarbiyasi",
    "description": "O'smirlik davri xususiyatlari, halol luqma, qo'rquvni yengish, mardlik sifatlari va ota-ona o'rtasidagi devorni yo'qotish.",
    "ageGroup": "14+",
    "categorySlug": "bola-ruhiyati",
    "isPremium": true,
    "estimatedMinutes": 20,
    "totalLessons": 2,
    "icon": "Shield",
    "color": "#D97706",
    "translations": {
      "uz": {
        "title": "Jasur va mustaqil farzand: Muammolar va yechimlar",
        "description": "O'smirlik davri xususiyatlari, halol luqma, qo'rquvni yengish, mardlik sifatlari va ota-ona o'rtasidagi devorni yo'qotish."
      },
      "en": {
        "title": "Raising Brave & Independent Children: Problems & Solutions",
        "description": "Adolescent psychology, halal sustenance, overcoming anxiety, cultivating courage, and bridging generation gaps."
      },
      "ru": {
        "title": "Смелый и самостоятельный ребенок: Проблемы и решения",
        "description": "Особенности подросткового возраста, халяльный удел, преодоление страхов, мужество и разрушение барьеров с родителями."
      }
    }
  },
  {
    "title": "Farzand va kitobxonlik: 30 buyuk mutafakkir",
    "slug": "kitobxonlik-va-30-mutafakkir",
    "description": "Klip tafakkurdan asrash, bolalar xonasidagi 3 ta deraza (Sharq, G'arb va zamon daholari), oltin yosh (7-12) va mutolaa san'ati.",
    "ageGroup": "6-9",
    "categorySlug": "odob-axloq",
    "isPremium": true,
    "estimatedMinutes": 20,
    "totalLessons": 2,
    "icon": "BookOpen",
    "color": "#8B5CF6",
    "translations": {
      "uz": {
        "title": "Farzand va kitobxonlik: 30 buyuk mutafakkir",
        "description": "Klip tafakkurdan asrash, bolalar xonasidagi 3 ta deraza (Sharq, G'arb va zamon daholari), oltin yosh (7-12) va mutolaa san'ati."
      },
      "en": {
        "title": "Children & Reading: 30 Great Polymaths",
        "description": "Defeating clip-thinking, 3 windows in a child room (East, West, modern visionaries), and golden reading years (7-12)."
      },
      "ru": {
        "title": "Дети и чтение: 30 великих мыслителей",
        "description": "Защита от клипового мышления, 3 окна в детской комнате (Восток, Запад, современные гении) и золотой возраст чтения (7-12)."
      }
    }
  }
];

export const seedLearningPaths = [
  {
    "title": "Boshlang'ich Tarbiya Yo'li (1–15-darslar)",
    "slug": "boshlangich-tarbiya-yoli",
    "description": "Farzand tarbiyasining mustahkam poydevori, rostgo'ylik, shaxsiy ibrat va sog'lom turmush tarzi.",
    "ageGroup": "3-5",
    "targetAudience": "Boshlang'ich yoshdagi bolalarning ota-onalari",
    "lessonSlugs": [
      "dars-1-tarbiyaning-ahamiyati-1-qism",
      "dars-2-tarbiyaning-ahamiyati-2-qism",
      "dars-3-tarbiyaning-ahamiyati-3-qism",
      "dars-4-tarbiyaning-ahamiyati-4-qism",
      "dars-5-tarbiyaning-ahamiyati-5-qism",
      "dars-6-yolgonchilik",
      "dars-7-ogirlik",
      "dars-8-sokinish-haqida",
      "dars-9-kor-korona-taqlid",
      "dars-10-televizor-haqida",
      "dars-11-ibrat-korsatishlik",
      "dars-12-musiqa",
      "dars-13-oziq-ovqat-haqida",
      "dars-14-uyqu-va-sport",
      "dars-15-tamaki-chekish-haqida"
    ],
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
    "lessonSlugs": [
      "dars-16-aqliy-tarbiya-1-qism",
      "dars-17-aqliy-tarbiya-2-qism",
      "dars-18-aqliy-tarbiya-3-qism",
      "dars-19-aqliy-tarbiya-4-qism",
      "dars-20-jurat",
      "dars-21-qorqoqlik-1-qism",
      "dars-22-qorqoqlik-2-qism",
      "dars-23-ozini-noqis-his-qilishlik-1-qism",
      "dars-24-ozini-noqis-his-qilishlik-2-qism",
      "dars-25-hasad",
      "dars-26-gazab",
      "dars-27-taqvo",
      "dars-28-birodarlik-va-rahmat",
      "dars-29-isor-fidoiylik",
      "dars-30-avf-qilish-kechirimlilik",
      "dars-31-ota-ona-haqqi-1-qism",
      "dars-32-ota-ona-haqqi-2-qism",
      "dars-33-qarindoshlar-haqqi-1-qism",
      "dars-34-qarindoshlar-haqqi-2-qism",
      "dars-35-qoshni-haqqi"
    ],
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
    "lessonSlugs": [
      "dars-36-muallimlar-haqida",
      "dars-37-dost-haqida-1-qism",
      "dars-38-dost-haqida-2-qism",
      "dars-39-yoshi-kattalar-haqqi-1-qism",
      "dars-40-yoshi-kattalar-haqqi-2-qism",
      "dars-41-fitrat-va-sibga-farqi",
      "dars-42-ovqatlanish-odobi",
      "dars-43-salomlashish-odobi",
      "dars-44-izn-sorash-odobi-istizon",
      "dars-45-majlis-odobi",
      "dars-46-sozlashish-odobi",
      "dars-47-hazil-odobi",
      "dars-48-muborakbod-etish-odobi-tabriklash",
      "dars-49-kasalni-ziyorat-qilish-va-taziya-odobi-1-qism",
      "dars-50-kasalni-ziyorat-qilish-va-taziya-odobi-2-qism",
      "dars-51-aksa-urish-va-esnash-odobi",
      "dars-52-amri-maruf-va-nahyi-munkar-1-qism",
      "dars-53-amri-maruf-va-nahyi-munkar-2-qism",
      "dars-54-xutba-qilinayotgan-qizga-va-mahramlarga-qarash-odobi",
      "dars-55-jinsiy-tarbiya"
    ],
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
    "lessonSlugs": [
      "dars-1-tarbiyaning-ahamiyati-1-qism",
      "dars-2-tarbiyaning-ahamiyati-2-qism",
      "dars-3-tarbiyaning-ahamiyati-3-qism",
      "dars-4-tarbiyaning-ahamiyati-4-qism",
      "dars-5-tarbiyaning-ahamiyati-5-qism",
      "dars-6-yolgonchilik",
      "dars-7-ogirlik",
      "dars-8-sokinish-haqida",
      "dars-9-kor-korona-taqlid",
      "dars-10-televizor-haqida",
      "dars-11-ibrat-korsatishlik",
      "dars-12-musiqa",
      "dars-13-oziq-ovqat-haqida",
      "dars-14-uyqu-va-sport",
      "dars-15-tamaki-chekish-haqida",
      "dars-16-aqliy-tarbiya-1-qism",
      "dars-17-aqliy-tarbiya-2-qism",
      "dars-18-aqliy-tarbiya-3-qism",
      "dars-19-aqliy-tarbiya-4-qism",
      "dars-20-jurat",
      "dars-21-qorqoqlik-1-qism",
      "dars-22-qorqoqlik-2-qism",
      "dars-23-ozini-noqis-his-qilishlik-1-qism",
      "dars-24-ozini-noqis-his-qilishlik-2-qism",
      "dars-25-hasad",
      "dars-26-gazab",
      "dars-27-taqvo",
      "dars-28-birodarlik-va-rahmat",
      "dars-29-isor-fidoiylik",
      "dars-30-avf-qilish-kechirimlilik",
      "dars-31-ota-ona-haqqi-1-qism",
      "dars-32-ota-ona-haqqi-2-qism",
      "dars-33-qarindoshlar-haqqi-1-qism",
      "dars-34-qarindoshlar-haqqi-2-qism",
      "dars-35-qoshni-haqqi",
      "dars-36-muallimlar-haqida",
      "dars-37-dost-haqida-1-qism",
      "dars-38-dost-haqida-2-qism",
      "dars-39-yoshi-kattalar-haqqi-1-qism",
      "dars-40-yoshi-kattalar-haqqi-2-qism",
      "dars-41-fitrat-va-sibga-farqi",
      "dars-42-ovqatlanish-odobi",
      "dars-43-salomlashish-odobi",
      "dars-44-izn-sorash-odobi-istizon",
      "dars-45-majlis-odobi",
      "dars-46-sozlashish-odobi",
      "dars-47-hazil-odobi",
      "dars-48-muborakbod-etish-odobi-tabriklash",
      "dars-49-kasalni-ziyorat-qilish-va-taziya-odobi-1-qism",
      "dars-50-kasalni-ziyorat-qilish-va-taziya-odobi-2-qism",
      "dars-51-aksa-urish-va-esnash-odobi",
      "dars-52-amri-maruf-va-nahyi-munkar-1-qism",
      "dars-53-amri-maruf-va-nahyi-munkar-2-qism",
      "dars-54-xutba-qilinayotgan-qizga-va-mahramlarga-qarash-odobi",
      "dars-55-jinsiy-tarbiya"
    ],
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
  },
  {
    "title": "Fitrat va Qalb Tarbiyasi Yo'li (0–5 yosh)",
    "slug": "fitrat-pedagogikasi-yoli",
    "description": "Xadicha Kubro Tongar asari asosida: bolaning darajasiga chiqish, Qur'oniy 3 bosqich, emizish, g'azabni yengish va qalb pokligi.",
    "ageGroup": "0-2",
    "targetAudience": "Chaqaloq va kichik yoshdagi bolalarning ota-onalari, onalar",
    "lessonSlugs": [
      "bolaning-darajasiga-chiqish",
      "fitrat-pedagogikasi-quroniy-asoslar",
      "ota-onalik-masuliyati-va-qalb-tarbiyasi",
      "bola-ruhiyati-va-nafs-tarbiyasi"
    ],
    "badgeIcon": "Heart",
    "translations": {
      "uz": {
        "title": "Fitrat va Qalb Tarbiyasi Yo'li (0–5 yosh)",
        "description": "Xadicha Kubro Tongar asari asosida: bolaning darajasiga chiqish, Qur'oniy 3 bosqich, emizish, g'azabni yengish va qalb pokligi.",
        "targetAudience": "Chaqaloq va kichik yoshdagi bolalarning ota-onalari, onalar"
      },
      "en": {
        "title": "Fitrah & Heart Parenting Path (Ages 0–5)",
        "description": "Based on Hadice Kubra Tongar: rising to child's level, 3 Quranic stages, breastfeeding, anger mastery, and emotional purity.",
        "targetAudience": "Parents of infants and toddlers, mindful mothers"
      },
      "ru": {
        "title": "Путь фитры и воспитания сердца (0–5 лет)",
        "description": "По трудам Хадиджи Кюбры Тонгар: подъем на уровень чистоты ребенка, 3 этапа Корана, грудное вскармливание, обуздание гнева.",
        "targetAudience": "Родители младенцев и малышей, осознанные мамы"
      }
    }
  },
  {
    "title": "Yetakchi va Ijodkor Farzand Yo'li (6–13 yosh)",
    "slug": "yetakchi-va-ijodkor-farzand-yoli",
    "description": "Aziz Rahimov va 30 mutafakkir to'plami: ta'limda 'nega' savoli, klip tafakkurdan asrash, Kumon uslubi va 4 turdagi sarmoya.",
    "ageGroup": "6-9",
    "targetAudience": "Maktab yoshidagi bolalar ota-onalari, ustozlar",
    "lessonSlugs": [
      "kitob-ekran-va-klip-tafakkur",
      "xazinadagi-uch-deraza-va-30-daho",
      "talim-va-tarbiyada-nega-savoli",
      "osmir-yosh-va-diqqatni-asrash",
      "tashabbuskorlik-va-tort-sarmoya"
    ],
    "badgeIcon": "BookOpen",
    "translations": {
      "uz": {
        "title": "Yetakchi va Ijodkor Farzand Yo'li (6–13 yosh)",
        "description": "Aziz Rahimov va 30 mutafakkir to'plami: ta'limda 'nega' savoli, klip tafakkurdan asrash, Kumon uslubi va 4 turdagi sarmoya.",
        "targetAudience": "Maktab yoshidagi bolalar ota-onalari, ustozlar"
      },
      "en": {
        "title": "Leader & Creative Child Path (Ages 6–13)",
        "description": "Aziz Rahimov & 30 Polymaths: asking 'Why' in education, beating clip-thinking, Kumon self-study, and 4 capital types.",
        "targetAudience": "Parents of school-aged children, teachers"
      },
      "ru": {
        "title": "Путь лидера и созидателя (6–13 лет)",
        "description": "Азиз Рахимов и 30 мыслителей: вопрос 'Зачем' в учебе, защита от клипового мышления, метод Кумон и 4 вида капитала.",
        "targetAudience": "Родители школьников, педагоги"
      }
    }
  },
  {
    "title": "Mustaqil va Jasur Shaxs Yo'li (14+ yosh)",
    "slug": "mustaqil-va-jasur-shaxs-yoli",
    "description": "O'smirlik inqirozini yengish, ota-ona va farzand o'rtasidagi devorni yo'qotish, halol luqma va mardlik sifatlari.",
    "ageGroup": "14+",
    "targetAudience": "O'smirlar ota-onalari va murabbiylar",
    "lessonSlugs": [
      "jasur-farzand-poydevori",
      "osmirlik-inqirozi-va-yechimlar"
    ],
    "badgeIcon": "Shield",
    "translations": {
      "uz": {
        "title": "Mustaqil va Jasur Shaxs Yo'li (14+ yosh)",
        "description": "O'smirlik inqirozini yengish, ota-ona va farzand o'rtasidagi devorni yo'qotish, halol luqma va mardlik sifatlari.",
        "targetAudience": "O'smirlar ota-onalari va murabbiylar"
      },
      "en": {
        "title": "Independent & Courageous Character Path (Ages 14+)",
        "description": "Overcoming adolescent crises, breaking generation walls, halal sustenance, and noble courage.",
        "targetAudience": "Parents of teens and youth mentors"
      },
      "ru": {
        "title": "Путь самостоятельной и мужественной личности (14+ лет)",
        "description": "Преодоление кризиса подросткового возраста, разрушение барьеров с родителями, халяль удел и мужество.",
        "targetAudience": "Родители подростков и наставники"
      }
    }
  }
];

export const seedLessons = [
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "Tarbiyaning ahamiyati (1-qism)",
    "slug": "dars-1-tarbiyaning-ahamiyati-1-qism",
    "summary": "Odatda insonlar Islomdagi farz amallar deyilganda faqat namoz, ro'za, zakot va hajni tushunishadi. Ammo farzandga islomiy tarbiya berish ham ota-ona zimmasidagi eng qat'iy va og'ir farzlardan (majburiyatlardan) biridir.",
    "order": 1,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": true,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Farzand Tarbiyasi – Dindagi Eng Katta Farzlardan Biri",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Odatda insonlar Islomdagi farz amallar deyilganda faqat namoz, ro'za, zakot va hajni tushunishadi. Ammo farzandga islomiy tarbiya berish ham ota-ona zimmasidagi eng qat'iy va og'ir farzlardan (majburiyatlardan) biridir.",
        "example": "Agar inson namoz o'qimasa yoki ro'za tutmasa qanday gunohkor bo'lsa, o'z farzandini iymonli, axloqli va ibodatli qilib tarbiyalamasligi ham xuddi shunday ulkan gunoh hisoblanadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Qiyomatdagi Mas'uliyat va So'rov",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) hadislarida keladi: \"Kullukum ro'in va kullukum mas'ulun an ro'iyyatihi\" (Sizlarning har biringiz boshliqsiz va har biringiz o'z qo'l ostidagilaringizdan so'ralasiz). Har bir erkak o'z oilasining cho'poni (boshlig'i) va har bir ayol o'z farzandlarining tarbiyachisi sifatida Qiyomat kunida so'roqqa tutiladi. Oxiratda ota-onadan eng birinchi bo'lib farzandiga qanday tarbiya bergani, unga Allohni tanitgani yoki yo'qligi so'raladi. Yomon xulqli va be'namoz farzand Qiyomatda ota-onasining yoqasidan tutib, ularni ham do'zaxga tortishi mumkin.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Oila va Farzandlarni Do'zaxdan Asrash",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Qur'oni Karimda Alloh taolo marhamat qiladi: \"Ey iymon keltirganlar, o'zlaringizni va ahlu oilangizni yoqilg'isi odamlar va toshlardan bo'lgan do'zax o'tidan saqlangiz!\" (Tahrim surasi, 6-oyat). Farzandni faqatgina qornini to'ydirish, ustini but qilish ota-onaning yakuniy vazifasi emas. Haqiqiy mehribon ota-ona farzandini dunyodagi oddiy issiq-sovuqdan asraganidek, oxiratdagi do'zax o'tidan ham asrash payida bo'lishi shart.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Zamonaviy Tarbiyadagi Muammolar",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Bugungi kunda ko'pchilik ota-onalar farzandining dunyoviy bilimlari, repetitorlari, chet tillarini o'rganishi uchun millionlab pul sarflaydilar va qattiq nazorat qiladilar. Biroq, xuddi shu ota-onalar farzandining namoz o'qimayotganiga, Qur'on bilmasligiga yoki beodob bo'lib borayotganiga beparvo qaraydilar. Farzand – bu Allohning bandaga bergan eng go'zal sovg'asi (hadya)dir. Bu omonatga xiyonat qilmaslik, uni pok fıtratda qanday qabul qilib olingan bo'lsa, xuddi shunday pok va iymonli holida tarbiyalash muhimdir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Tarbiyaning ahamiyati (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Tarbiyaning ahamiyati (1-qism)",
        "summary": "Odatda insonlar Islomdagi farz amallar deyilganda faqat namoz, ro'za, zakot va hajni tushunishadi. Ammo farzandga islomiy tarbiya berish ham ota-ona zimmasidagi eng qat'iy va og'ir farzlardan (majburiyatlardan) biridir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Farzand Tarbiyasi – Dindagi Eng Katta Farzlardan Biri",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Odatda insonlar Islomdagi farz amallar deyilganda faqat namoz, ro'za, zakot va hajni tushunishadi. Ammo farzandga islomiy tarbiya berish ham ota-ona zimmasidagi eng qat'iy va og'ir farzlardan (majburiyatlardan) biridir.",
            "example": "Agar inson namoz o'qimasa yoki ro'za tutmasa qanday gunohkor bo'lsa, o'z farzandini iymonli, axloqli va ibodatli qilib tarbiyalamasligi ham xuddi shunday ulkan gunoh hisoblanadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Qiyomatdagi Mas'uliyat va So'rov",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) hadislarida keladi: \"Kullukum ro'in va kullukum mas'ulun an ro'iyyatihi\" (Sizlarning har biringiz boshliqsiz va har biringiz o'z qo'l ostidagilaringizdan so'ralasiz). Har bir erkak o'z oilasining cho'poni (boshlig'i) va har bir ayol o'z farzandlarining tarbiyachisi sifatida Qiyomat kunida so'roqqa tutiladi. Oxiratda ota-onadan eng birinchi bo'lib farzandiga qanday tarbiya bergani, unga Allohni tanitgani yoki yo'qligi so'raladi. Yomon xulqli va be'namoz farzand Qiyomatda ota-onasining yoqasidan tutib, ularni ham do'zaxga tortishi mumkin.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Oila va Farzandlarni Do'zaxdan Asrash",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Qur'oni Karimda Alloh taolo marhamat qiladi: \"Ey iymon keltirganlar, o'zlaringizni va ahlu oilangizni yoqilg'isi odamlar va toshlardan bo'lgan do'zax o'tidan saqlangiz!\" (Tahrim surasi, 6-oyat). Farzandni faqatgina qornini to'ydirish, ustini but qilish ota-onaning yakuniy vazifasi emas. Haqiqiy mehribon ota-ona farzandini dunyodagi oddiy issiq-sovuqdan asraganidek, oxiratdagi do'zax o'tidan ham asrash payida bo'lishi shart.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Zamonaviy Tarbiyadagi Muammolar",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Bugungi kunda ko'pchilik ota-onalar farzandining dunyoviy bilimlari, repetitorlari, chet tillarini o'rganishi uchun millionlab pul sarflaydilar va qattiq nazorat qiladilar. Biroq, xuddi shu ota-onalar farzandining namoz o'qimayotganiga, Qur'on bilmasligiga yoki beodob bo'lib borayotganiga beparvo qaraydilar. Farzand – bu Allohning bandaga bergan eng go'zal sovg'asi (hadya)dir. Bu omonatga xiyonat qilmaslik, uni pok fıtratda qanday qabul qilib olingan bo'lsa, xuddi shunday pok va iymonli holida tarbiyalash muhimdir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Tarbiyaning ahamiyati (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Foundations of Parenting (Part 1)",
        "summary": "Child rearing as a primary religious duty, accountability before Allah, and protecting family from hellfire.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Foundations of Parenting (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Odatda insonlar Islomdagi farz amallar deyilganda faqat namoz, ro'za, zakot va hajni tushunishadi. Ammo farzandga islomiy tarbiya berish ham ota-ona zimmasidagi eng qat'iy va og'ir farzlardan (majburiyatlardan) biridir.",
            "example": "Agar inson namoz o'qimasa yoki ro'za tutmasa qanday gunohkor bo'lsa, o'z farzandini iymonli, axloqli va ibodatli qilib tarbiyalamasligi ham xuddi shunday ulkan gunoh hisoblanadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Child rearing as a primary religious duty, accountability before Allah, and protecting family from hellfire. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Qur'oni Karimda Alloh taolo marhamat qiladi: \"Ey iymon keltirganlar, o'zlaringizni va ahlu oilangizni yoqilg'isi odamlar va toshlardan bo'lgan do'zax o'tidan saqlangiz!\" (Tahrim surasi, 6-oyat). Farzandni faqatgina qornini to'ydirish, ustini but qilish ota-onaning yakuniy vazifasi emas. Haqiqiy mehribon ota-ona farzandini dunyodagi oddiy issiq-sovuqdan asraganidek, oxiratdagi do'zax o'tidan ham asrash payida bo'lishi shart.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Bugungi kunda ko'pchilik ota-onalar farzandining dunyoviy bilimlari, repetitorlari, chet tillarini o'rganishi uchun millionlab pul sarflaydilar va qattiq nazorat qiladilar. Biroq, xuddi shu ota-onalar farzandining namoz o'qimayotganiga, Qur'on bilmasligiga yoki beodob bo'lib borayotganiga beparvo qaraydilar. Farzand – bu Allohning bandaga bergan eng go'zal sovg'asi (hadya)dir. Bu omonatga xiyonat qilmaslik, uni pok fıtratda qanday qabul qilib olingan bo'lsa, xuddi shunday pok va iymonli holida tarbiyalash muhimdir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Foundations of Parenting (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Foundations of Parenting (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Основы воспитания (Часть 1)",
        "summary": "Воспитание детей как важнейшая религиозная обязанность, ответ перед Аллахом в Судный день и защита семьи от огня.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Основы воспитания (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Odatda insonlar Islomdagi farz amallar deyilganda faqat namoz, ro'za, zakot va hajni tushunishadi. Ammo farzandga islomiy tarbiya berish ham ota-ona zimmasidagi eng qat'iy va og'ir farzlardan (majburiyatlardan) biridir.",
            "example": "Agar inson namoz o'qimasa yoki ro'za tutmasa qanday gunohkor bo'lsa, o'z farzandini iymonli, axloqli va ibodatli qilib tarbiyalamasligi ham xuddi shunday ulkan gunoh hisoblanadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Воспитание детей как важнейшая религиозная обязанность, ответ перед Аллахом в Судный день и защита семьи от огня. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Qur'oni Karimda Alloh taolo marhamat qiladi: \"Ey iymon keltirganlar, o'zlaringizni va ahlu oilangizni yoqilg'isi odamlar va toshlardan bo'lgan do'zax o'tidan saqlangiz!\" (Tahrim surasi, 6-oyat). Farzandni faqatgina qornini to'ydirish, ustini but qilish ota-onaning yakuniy vazifasi emas. Haqiqiy mehribon ota-ona farzandini dunyodagi oddiy issiq-sovuqdan asraganidek, oxiratdagi do'zax o'tidan ham asrash payida bo'lishi shart.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Bugungi kunda ko'pchilik ota-onalar farzandining dunyoviy bilimlari, repetitorlari, chet tillarini o'rganishi uchun millionlab pul sarflaydilar va qattiq nazorat qiladilar. Biroq, xuddi shu ota-onalar farzandining namoz o'qimayotganiga, Qur'on bilmasligiga yoki beodob bo'lib borayotganiga beparvo qaraydilar. Farzand – bu Allohning bandaga bergan eng go'zal sovg'asi (hadya)dir. Bu omonatga xiyonat qilmaslik, uni pok fıtratda qanday qabul qilib olingan bo'lsa, xuddi shunday pok va iymonli holida tarbiyalash muhimdir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Основы воспитания (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Основы воспитания (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "Tarbiyaning ahamiyati (2-qism)",
    "slug": "dars-2-tarbiyaning-ahamiyati-2-qism",
    "summary": "Qiyomat kunida erkak kishidan so'raladigan uchinchi yirik savol – o'z ahlining, oilasining tarbiyasi haqida bo'ladi. Erkak kishi oilaning rahbari sifatida o'z ayolini va farzandlarini do'zax o'tidan saqlashga mas'ul.",
    "order": 2,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": true,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Oila Va Ayolning Tarbiyadagi O'rni",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Qiyomat kunida erkak kishidan so'raladigan uchinchi yirik savol – o'z ahlining, oilasining tarbiyasi haqida bo'ladi. Erkak kishi oilaning rahbari sifatida o'z ayolini va farzandlarini do'zax o'tidan saqlashga mas'ul.",
        "example": "Ayol faqat ro'zg'or ishlarini (kir yuvish, ovqat qilish) bajaruvchi xizmatchi emas. U farzandlarning asosiy tarbiyachisi. Erkak kishi o'z ayolini Islomiy ilmlarni o'rganishiga, uni ma'naviy tarbiyalashga ham e'tibor qaratishi shart. Agar ayol dindor bo'lsa, u erining haqlarini ham, farzandning tarbiyasini ham joyiga qo'yadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Farzandlarga O'rnak Bo'lish (Tarbiyada Amaliy Namuna)",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Ota-onaning o'zi ibrat bo'lmasdan turib, bolaga berilgan quruq nasihat foyda bermaydi. Bolalar ota-onasining gapiga emas, amallariga qarab o'sadi. Qur'on tilovati, ibodat va zikr ota-onaning hayot tarziga aylanishi kerak. Bolalar ota-onasini namoz ustida, Qur'on o'qiyotganida yoki Allohni zikr qilayotganida doimo ko'rib o'sishlari zarur. Payg'ambarimiz (s.a.v) aytadilar: \"Uylaringizni qabristonga aylantirmanglar, ularda Qur'on tilovat qilinglar.\" Ota-ona farzandlarini faqatgina kiydirib-ichirish emas, ularga Allohni, Rasulullohni (s.a.v) va ularning sunnatlarini tanitishi shart.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Oiladagi Qadriyatlar va Mol-Dunyo Aldovi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Ota-onaning farzandlariga qoldiradigan eng katta merosi moddiy boylik emas, balki Islomiy tarbiya va go'zal xulqdir. Hozirgi kunda farzand uchun faqattgina dunyoviy ta'limiga millionlar sarflanadi, lekin uning iymoni va xulqiga e'tibor qilinmaydi. Hatto dunyo ilmlarida eng cho'qqiga chiqqan (masalan, akademik) farzand ham, agar dinini bilmasa, ota-onasiga haqiqiy rahm-shafqat qilmaydi va oxiratida foyda bermaydi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Zamonaga Qarab Tarbiya Qilish (Kelajakka Tayyorgarlik)",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Hazrati Ali (r.a)dan qilingan mashhur hikmatda aytiladi: \"Farzandlaringizga o'z zamonangiz emas, balki ularning zamonasi uchun ta'lim beringlar (tarbiya qilinglar). Chunki ular sizning zamonangiz uchun emas, o'z zamonalari uchun yaralganlar\". Bu degani, ota-ona hozirgi sharoitdagi muhitni, kelajakdagi xatarlarni (internet, zamonaviy fitnalar) inobatga olgan holda tarbiya berishi kerak. \"Bizning davrimizda bunday emas edi\", degan tushuncha bilan ish ko'rib bo'lmaydi, balki bugungi kun va kelajak uchun himoya vositalari – iymon va ilm bilan ularni qurollantirish zarur.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Tarbiyaning ahamiyati (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Tarbiyaning ahamiyati (2-qism)",
        "summary": "Qiyomat kunida erkak kishidan so'raladigan uchinchi yirik savol – o'z ahlining, oilasining tarbiyasi haqida bo'ladi. Erkak kishi oilaning rahbari sifatida o'z ayolini va farzandlarini do'zax o'tidan saqlashga mas'ul.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Oila Va Ayolning Tarbiyadagi O'rni",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Qiyomat kunida erkak kishidan so'raladigan uchinchi yirik savol – o'z ahlining, oilasining tarbiyasi haqida bo'ladi. Erkak kishi oilaning rahbari sifatida o'z ayolini va farzandlarini do'zax o'tidan saqlashga mas'ul.",
            "example": "Ayol faqat ro'zg'or ishlarini (kir yuvish, ovqat qilish) bajaruvchi xizmatchi emas. U farzandlarning asosiy tarbiyachisi. Erkak kishi o'z ayolini Islomiy ilmlarni o'rganishiga, uni ma'naviy tarbiyalashga ham e'tibor qaratishi shart. Agar ayol dindor bo'lsa, u erining haqlarini ham, farzandning tarbiyasini ham joyiga qo'yadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Farzandlarga O'rnak Bo'lish (Tarbiyada Amaliy Namuna)",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Ota-onaning o'zi ibrat bo'lmasdan turib, bolaga berilgan quruq nasihat foyda bermaydi. Bolalar ota-onasining gapiga emas, amallariga qarab o'sadi. Qur'on tilovati, ibodat va zikr ota-onaning hayot tarziga aylanishi kerak. Bolalar ota-onasini namoz ustida, Qur'on o'qiyotganida yoki Allohni zikr qilayotganida doimo ko'rib o'sishlari zarur. Payg'ambarimiz (s.a.v) aytadilar: \"Uylaringizni qabristonga aylantirmanglar, ularda Qur'on tilovat qilinglar.\" Ota-ona farzandlarini faqatgina kiydirib-ichirish emas, ularga Allohni, Rasulullohni (s.a.v) va ularning sunnatlarini tanitishi shart.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Oiladagi Qadriyatlar va Mol-Dunyo Aldovi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Ota-onaning farzandlariga qoldiradigan eng katta merosi moddiy boylik emas, balki Islomiy tarbiya va go'zal xulqdir. Hozirgi kunda farzand uchun faqattgina dunyoviy ta'limiga millionlar sarflanadi, lekin uning iymoni va xulqiga e'tibor qilinmaydi. Hatto dunyo ilmlarida eng cho'qqiga chiqqan (masalan, akademik) farzand ham, agar dinini bilmasa, ota-onasiga haqiqiy rahm-shafqat qilmaydi va oxiratida foyda bermaydi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Zamonaga Qarab Tarbiya Qilish (Kelajakka Tayyorgarlik)",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Hazrati Ali (r.a)dan qilingan mashhur hikmatda aytiladi: \"Farzandlaringizga o'z zamonangiz emas, balki ularning zamonasi uchun ta'lim beringlar (tarbiya qilinglar). Chunki ular sizning zamonangiz uchun emas, o'z zamonalari uchun yaralganlar\". Bu degani, ota-ona hozirgi sharoitdagi muhitni, kelajakdagi xatarlarni (internet, zamonaviy fitnalar) inobatga olgan holda tarbiya berishi kerak. \"Bizning davrimizda bunday emas edi\", degan tushuncha bilan ish ko'rib bo'lmaydi, balki bugungi kun va kelajak uchun himoya vositalari – iymon va ilm bilan ularni qurollantirish zarur.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Tarbiyaning ahamiyati (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Foundations of Parenting (Part 2)",
        "summary": "The mother's role, personal parental example, justice among siblings, and preparing children for their era.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Foundations of Parenting (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Qiyomat kunida erkak kishidan so'raladigan uchinchi yirik savol – o'z ahlining, oilasining tarbiyasi haqida bo'ladi. Erkak kishi oilaning rahbari sifatida o'z ayolini va farzandlarini do'zax o'tidan saqlashga mas'ul.",
            "example": "Ayol faqat ro'zg'or ishlarini (kir yuvish, ovqat qilish) bajaruvchi xizmatchi emas. U farzandlarning asosiy tarbiyachisi. Erkak kishi o'z ayolini Islomiy ilmlarni o'rganishiga, uni ma'naviy tarbiyalashga ham e'tibor qaratishi shart. Agar ayol dindor bo'lsa, u erining haqlarini ham, farzandning tarbiyasini ham joyiga qo'yadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "The mother's role, personal parental example, justice among siblings, and preparing children for their era. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Ota-onaning farzandlariga qoldiradigan eng katta merosi moddiy boylik emas, balki Islomiy tarbiya va go'zal xulqdir. Hozirgi kunda farzand uchun faqattgina dunyoviy ta'limiga millionlar sarflanadi, lekin uning iymoni va xulqiga e'tibor qilinmaydi. Hatto dunyo ilmlarida eng cho'qqiga chiqqan (masalan, akademik) farzand ham, agar dinini bilmasa, ota-onasiga haqiqiy rahm-shafqat qilmaydi va oxiratida foyda bermaydi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Hazrati Ali (r.a)dan qilingan mashhur hikmatda aytiladi: \"Farzandlaringizga o'z zamonangiz emas, balki ularning zamonasi uchun ta'lim beringlar (tarbiya qilinglar). Chunki ular sizning zamonangiz uchun emas, o'z zamonalari uchun yaralganlar\". Bu degani, ota-ona hozirgi sharoitdagi muhitni, kelajakdagi xatarlarni (internet, zamonaviy fitnalar) inobatga olgan holda tarbiya berishi kerak. \"Bizning davrimizda bunday emas edi\", degan tushuncha bilan ish ko'rib bo'lmaydi, balki bugungi kun va kelajak uchun himoya vositalari – iymon va ilm bilan ularni qurollantirish zarur.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Foundations of Parenting (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Foundations of Parenting (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Основы воспитания (Часть 2)",
        "summary": "Роль матери, личный пример родителей, справедливость между детьми и воспитание для будущего поколения.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Основы воспитания (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Qiyomat kunida erkak kishidan so'raladigan uchinchi yirik savol – o'z ahlining, oilasining tarbiyasi haqida bo'ladi. Erkak kishi oilaning rahbari sifatida o'z ayolini va farzandlarini do'zax o'tidan saqlashga mas'ul.",
            "example": "Ayol faqat ro'zg'or ishlarini (kir yuvish, ovqat qilish) bajaruvchi xizmatchi emas. U farzandlarning asosiy tarbiyachisi. Erkak kishi o'z ayolini Islomiy ilmlarni o'rganishiga, uni ma'naviy tarbiyalashga ham e'tibor qaratishi shart. Agar ayol dindor bo'lsa, u erining haqlarini ham, farzandning tarbiyasini ham joyiga qo'yadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Роль матери, личный пример родителей, справедливость между детьми и воспитание для будущего поколения. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Ota-onaning farzandlariga qoldiradigan eng katta merosi moddiy boylik emas, balki Islomiy tarbiya va go'zal xulqdir. Hozirgi kunda farzand uchun faqattgina dunyoviy ta'limiga millionlar sarflanadi, lekin uning iymoni va xulqiga e'tibor qilinmaydi. Hatto dunyo ilmlarida eng cho'qqiga chiqqan (masalan, akademik) farzand ham, agar dinini bilmasa, ota-onasiga haqiqiy rahm-shafqat qilmaydi va oxiratida foyda bermaydi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Hazrati Ali (r.a)dan qilingan mashhur hikmatda aytiladi: \"Farzandlaringizga o'z zamonangiz emas, balki ularning zamonasi uchun ta'lim beringlar (tarbiya qilinglar). Chunki ular sizning zamonangiz uchun emas, o'z zamonalari uchun yaralganlar\". Bu degani, ota-ona hozirgi sharoitdagi muhitni, kelajakdagi xatarlarni (internet, zamonaviy fitnalar) inobatga olgan holda tarbiya berishi kerak. \"Bizning davrimizda bunday emas edi\", degan tushuncha bilan ish ko'rib bo'lmaydi, balki bugungi kun va kelajak uchun himoya vositalari – iymon va ilm bilan ularni qurollantirish zarur.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Основы воспитания (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Основы воспитания (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "Tarbiyaning ahamiyati (3-qism)",
    "slug": "dars-3-tarbiyaning-ahamiyati-3-qism",
    "summary": "Payg'ambarimiz (s.a.v) hadislariga ko'ra, kishi uchun o'z qaramog'idagilarni, ya'ni ta'minoti zimmadagi insonlarni zoyi qilishi (qarovsiz qoldirishi) unga gunoh sifatida yetarlidir.",
    "order": 3,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": true,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Ota-onaning Eng Katta Mas'uliyati va Gunohi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Payg'ambarimiz (s.a.v) hadislariga ko'ra, kishi uchun o'z qaramog'idagilarni, ya'ni ta'minoti zimmadagi insonlarni zoyi qilishi (qarovsiz qoldirishi) unga gunoh sifatida yetarlidir.",
        "example": "Farzandlarni faqat moddiy jihatdan ta'minlab, ularning diniy tarbiyasi va iymoniga e'tibor bermaslik ota-ona uchun eng og'ir va kechirib bo'lmas gunohlardandir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Farzandga Tabiiy Muhabbat va Islomiy Tarbiya Farqi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Bolani yaxshi ko'rish va unga mehr ko'rsatish barcha insonlar (va hatto boshqa mavjudotlar) tabiatida mavjud bo'lgan oddiy his-tuyg'udir. Haqiqiy Islomiy tarbiya faqatgina shunday tabiiy mehr ko'rsatish yoki taomlantirish bilan chegaralanmaydi, balki eng asosiy e'tiborni bolaning aqidasi, namozi va diniy xulqiga qaratish bilan amalga oshadi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Din va Dunyo Ilmlarining Farqi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Imon va Islomiy teran tarbiya insonni bu dunyoda ham, oxiratda ham haqiqiy saodatga yetaklaydigan asosiy omildir. Agar farzandga matematika yoki fizika kabi dunyoviy ilmlar o'rgatilishidan oldin Allohni tanish (din asosi) o'rgatilmasa, bu quruq dunyoviy ilmlarning oxiratda hech qanday foydasi tegmasligi mumkin. Imon va islomiy poydevorisiz berilgan ta'lim faqat vaqtinchalik va o'tkinchi manfaatlarga xizmat qiladi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Yomon Muhit va Ko'cha Ta'siri",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Bugungi jamiyatdagi eng katta xatarlardan biri – farzandlarning ko'chada mutlaqo nazoratsiz qolib ketishi va ularning turli fitnalarga ochiq qoldirilishidir. Ota-onalar bolalarining kimlar bilan do'stlashayotganini va muloqot qilayotganini doimiy ravishda tekshirib borishlari, ularni e'tiborsiz, yomon xulqli insonlar ta'siridan himoya qilishlari o'ta muhimdir",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Tarbiyaning ahamiyati (3-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (3-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Tarbiyaning ahamiyati (3-qism)",
        "summary": "Payg'ambarimiz (s.a.v) hadislariga ko'ra, kishi uchun o'z qaramog'idagilarni, ya'ni ta'minoti zimmadagi insonlarni zoyi qilishi (qarovsiz qoldirishi) unga gunoh sifatida yetarlidir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ota-onaning Eng Katta Mas'uliyati va Gunohi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Payg'ambarimiz (s.a.v) hadislariga ko'ra, kishi uchun o'z qaramog'idagilarni, ya'ni ta'minoti zimmadagi insonlarni zoyi qilishi (qarovsiz qoldirishi) unga gunoh sifatida yetarlidir.",
            "example": "Farzandlarni faqat moddiy jihatdan ta'minlab, ularning diniy tarbiyasi va iymoniga e'tibor bermaslik ota-ona uchun eng og'ir va kechirib bo'lmas gunohlardandir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Farzandga Tabiiy Muhabbat va Islomiy Tarbiya Farqi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Bolani yaxshi ko'rish va unga mehr ko'rsatish barcha insonlar (va hatto boshqa mavjudotlar) tabiatida mavjud bo'lgan oddiy his-tuyg'udir. Haqiqiy Islomiy tarbiya faqatgina shunday tabiiy mehr ko'rsatish yoki taomlantirish bilan chegaralanmaydi, balki eng asosiy e'tiborni bolaning aqidasi, namozi va diniy xulqiga qaratish bilan amalga oshadi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Din va Dunyo Ilmlarining Farqi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Imon va Islomiy teran tarbiya insonni bu dunyoda ham, oxiratda ham haqiqiy saodatga yetaklaydigan asosiy omildir. Agar farzandga matematika yoki fizika kabi dunyoviy ilmlar o'rgatilishidan oldin Allohni tanish (din asosi) o'rgatilmasa, bu quruq dunyoviy ilmlarning oxiratda hech qanday foydasi tegmasligi mumkin. Imon va islomiy poydevorisiz berilgan ta'lim faqat vaqtinchalik va o'tkinchi manfaatlarga xizmat qiladi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Yomon Muhit va Ko'cha Ta'siri",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Bugungi jamiyatdagi eng katta xatarlardan biri – farzandlarning ko'chada mutlaqo nazoratsiz qolib ketishi va ularning turli fitnalarga ochiq qoldirilishidir. Ota-onalar bolalarining kimlar bilan do'stlashayotganini va muloqot qilayotganini doimiy ravishda tekshirib borishlari, ularni e'tiborsiz, yomon xulqli insonlar ta'siridan himoya qilishlari o'ta muhimdir",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Tarbiyaning ahamiyati (3-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (3-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Importance of Child Rearing (Part 3)",
        "summary": "Differentiating natural parental affection from spiritual education, balanced secular vs religious learning.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Importance of Child Rearing (Part 3)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Payg'ambarimiz (s.a.v) hadislariga ko'ra, kishi uchun o'z qaramog'idagilarni, ya'ni ta'minoti zimmadagi insonlarni zoyi qilishi (qarovsiz qoldirishi) unga gunoh sifatida yetarlidir.",
            "example": "Farzandlarni faqat moddiy jihatdan ta'minlab, ularning diniy tarbiyasi va iymoniga e'tibor bermaslik ota-ona uchun eng og'ir va kechirib bo'lmas gunohlardandir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Differentiating natural parental affection from spiritual education, balanced secular vs religious learning. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Imon va Islomiy teran tarbiya insonni bu dunyoda ham, oxiratda ham haqiqiy saodatga yetaklaydigan asosiy omildir. Agar farzandga matematika yoki fizika kabi dunyoviy ilmlar o'rgatilishidan oldin Allohni tanish (din asosi) o'rgatilmasa, bu quruq dunyoviy ilmlarning oxiratda hech qanday foydasi tegmasligi mumkin. Imon va islomiy poydevorisiz berilgan ta'lim faqat vaqtinchalik va o'tkinchi manfaatlarga xizmat qiladi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Bugungi jamiyatdagi eng katta xatarlardan biri – farzandlarning ko'chada mutlaqo nazoratsiz qolib ketishi va ularning turli fitnalarga ochiq qoldirilishidir. Ota-onalar bolalarining kimlar bilan do'stlashayotganini va muloqot qilayotganini doimiy ravishda tekshirib borishlari, ularni e'tiborsiz, yomon xulqli insonlar ta'siridan himoya qilishlari o'ta muhimdir",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Importance of Child Rearing (Part 3)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Importance of Child Rearing (Part 3)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Значение воспитания (Часть 3)",
        "summary": "Различие между природной родительской лаской и истинным духовным воспитанием, гармония светских и религиозных знаний.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Значение воспитания (Часть 3)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Payg'ambarimiz (s.a.v) hadislariga ko'ra, kishi uchun o'z qaramog'idagilarni, ya'ni ta'minoti zimmadagi insonlarni zoyi qilishi (qarovsiz qoldirishi) unga gunoh sifatida yetarlidir.",
            "example": "Farzandlarni faqat moddiy jihatdan ta'minlab, ularning diniy tarbiyasi va iymoniga e'tibor bermaslik ota-ona uchun eng og'ir va kechirib bo'lmas gunohlardandir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Различие между природной родительской лаской и истинным духовным воспитанием, гармония светских и религиозных знаний. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Imon va Islomiy teran tarbiya insonni bu dunyoda ham, oxiratda ham haqiqiy saodatga yetaklaydigan asosiy omildir. Agar farzandga matematika yoki fizika kabi dunyoviy ilmlar o'rgatilishidan oldin Allohni tanish (din asosi) o'rgatilmasa, bu quruq dunyoviy ilmlarning oxiratda hech qanday foydasi tegmasligi mumkin. Imon va islomiy poydevorisiz berilgan ta'lim faqat vaqtinchalik va o'tkinchi manfaatlarga xizmat qiladi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Bugungi jamiyatdagi eng katta xatarlardan biri – farzandlarning ko'chada mutlaqo nazoratsiz qolib ketishi va ularning turli fitnalarga ochiq qoldirilishidir. Ota-onalar bolalarining kimlar bilan do'stlashayotganini va muloqot qilayotganini doimiy ravishda tekshirib borishlari, ularni e'tiborsiz, yomon xulqli insonlar ta'siridan himoya qilishlari o'ta muhimdir",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Значение воспитания (Часть 3)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Значение воспитания (Часть 3)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "Tarbiyaning ahamiyati (4-qism)",
    "slug": "dars-4-tarbiyaning-ahamiyati-4-qism",
    "summary": "Farzand tarbiyasining eng muhim va birlamchi poydevori iymoniy tarbiyadir. Yoshligidanoq bolaning qalbiga Allohni, farishtalarni va payg'ambarlarni tanitish ota-onaning eng katta mas'uliyati hisoblanadi.",
    "order": 4,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": true,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Iymoniy Tarbiyaning Asosi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Farzand tarbiyasining eng muhim va birlamchi poydevori iymoniy tarbiyadir. Yoshligidanoq bolaning qalbiga Allohni, farishtalarni va payg'ambarlarni tanitish ota-onaning eng katta mas'uliyati hisoblanadi.",
        "example": "Bolaning tili chiqib, gapira boshlaganda unga o'rgatiladigan eng birinchi so'z \"La ilaha illallah\" (Allohdan o'zga iloh yo'q) bo'lishi kerak. Bu tavhid kalimasi uning ongiga va qalbiga umrbod o'rnashib qolishi o'ta muhimdir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Farzandga O'rgatilishi Shart Bo'lgan 3 Xislat",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) hadislarida marhamat qiladilar: \"Farzandlaringizga uchta xislatni o'rgatinglar: Payg'ambarlaringizga muhabbat qo'yishni, uning ahli baytiga (oilasiga) muhabbat qo'yishni va Qur'on tilovatini\". Rasululloh (s.a.v)ni yaxshi ko'rib, Qur'on bilan do'st tutingan holda ulg'aygan farzandlar Qiyomat kunida Allohning arshi soyasida payg'ambarlar bilan birga bo'lishlari va'da qilingan.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Bolaning Shaxsiyatini Hurmat Qilish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Farzandni tarbiyalashda asabbiylashish, doimiy ravishda baqirish, urish yoki boshqalar oldida izza qilish (kamsitish) bolaning shaxsiyatini majruh qiladi. Bolada ham insoniy qadr-qimmat va g'urur borligini doim hisobga olish kerak. Ota-ona farzandni qo'rquv ustiga qurilgan qattiqqo'llik orqali emas, balki muloyimlik, sabr va to'g'ri tushuntirish yo'li bilan tarbiyalashi lozim. Yoshligidan shaxsiyatiga hurmat ko'rsatilgan bola kelajakda irodali va yetuk inson bo'lib yetishadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Namozga Qiziqtirish Vaqti",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Yana bir bor ta'kidlanadiki, bolani ibodatga tayyorlash 7 yoshdan boshlanadi. Bu davr uning ongi ma'lumotlarni eng tez qabul qiladigan paytdir. Shu yoshdan boshlab namozni o'rgatib borish farzandning ruhiyatiga ibodat muhabbatini joylaydi",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Tarbiyaning ahamiyati (4-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (4-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Tarbiyaning ahamiyati (4-qism)",
        "summary": "Farzand tarbiyasining eng muhim va birlamchi poydevori iymoniy tarbiyadir. Yoshligidanoq bolaning qalbiga Allohni, farishtalarni va payg'ambarlarni tanitish ota-onaning eng katta mas'uliyati hisoblanadi.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Iymoniy Tarbiyaning Asosi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Farzand tarbiyasining eng muhim va birlamchi poydevori iymoniy tarbiyadir. Yoshligidanoq bolaning qalbiga Allohni, farishtalarni va payg'ambarlarni tanitish ota-onaning eng katta mas'uliyati hisoblanadi.",
            "example": "Bolaning tili chiqib, gapira boshlaganda unga o'rgatiladigan eng birinchi so'z \"La ilaha illallah\" (Allohdan o'zga iloh yo'q) bo'lishi kerak. Bu tavhid kalimasi uning ongiga va qalbiga umrbod o'rnashib qolishi o'ta muhimdir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Farzandga O'rgatilishi Shart Bo'lgan 3 Xislat",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) hadislarida marhamat qiladilar: \"Farzandlaringizga uchta xislatni o'rgatinglar: Payg'ambarlaringizga muhabbat qo'yishni, uning ahli baytiga (oilasiga) muhabbat qo'yishni va Qur'on tilovatini\". Rasululloh (s.a.v)ni yaxshi ko'rib, Qur'on bilan do'st tutingan holda ulg'aygan farzandlar Qiyomat kunida Allohning arshi soyasida payg'ambarlar bilan birga bo'lishlari va'da qilingan.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Bolaning Shaxsiyatini Hurmat Qilish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Farzandni tarbiyalashda asabbiylashish, doimiy ravishda baqirish, urish yoki boshqalar oldida izza qilish (kamsitish) bolaning shaxsiyatini majruh qiladi. Bolada ham insoniy qadr-qimmat va g'urur borligini doim hisobga olish kerak. Ota-ona farzandni qo'rquv ustiga qurilgan qattiqqo'llik orqali emas, balki muloyimlik, sabr va to'g'ri tushuntirish yo'li bilan tarbiyalashi lozim. Yoshligidan shaxsiyatiga hurmat ko'rsatilgan bola kelajakda irodali va yetuk inson bo'lib yetishadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Namozga Qiziqtirish Vaqti",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Yana bir bor ta'kidlanadiki, bolani ibodatga tayyorlash 7 yoshdan boshlanadi. Bu davr uning ongi ma'lumotlarni eng tez qabul qiladigan paytdir. Shu yoshdan boshlab namozni o'rgatib borish farzandning ruhiyatiga ibodat muhabbatini joylaydi",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Tarbiyaning ahamiyati (4-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (4-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Foundations of Faith in Children (Part 4)",
        "summary": "First words of Tawhid, three core virtues, respecting the child's dignity, and instilling prayer at age seven.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Foundations of Faith in Children (Part 4)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Farzand tarbiyasining eng muhim va birlamchi poydevori iymoniy tarbiyadir. Yoshligidanoq bolaning qalbiga Allohni, farishtalarni va payg'ambarlarni tanitish ota-onaning eng katta mas'uliyati hisoblanadi.",
            "example": "Bolaning tili chiqib, gapira boshlaganda unga o'rgatiladigan eng birinchi so'z \"La ilaha illallah\" (Allohdan o'zga iloh yo'q) bo'lishi kerak. Bu tavhid kalimasi uning ongiga va qalbiga umrbod o'rnashib qolishi o'ta muhimdir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "First words of Tawhid, three core virtues, respecting the child's dignity, and instilling prayer at age seven. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Farzandni tarbiyalashda asabbiylashish, doimiy ravishda baqirish, urish yoki boshqalar oldida izza qilish (kamsitish) bolaning shaxsiyatini majruh qiladi. Bolada ham insoniy qadr-qimmat va g'urur borligini doim hisobga olish kerak. Ota-ona farzandni qo'rquv ustiga qurilgan qattiqqo'llik orqali emas, balki muloyimlik, sabr va to'g'ri tushuntirish yo'li bilan tarbiyalashi lozim. Yoshligidan shaxsiyatiga hurmat ko'rsatilgan bola kelajakda irodali va yetuk inson bo'lib yetishadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Yana bir bor ta'kidlanadiki, bolani ibodatga tayyorlash 7 yoshdan boshlanadi. Bu davr uning ongi ma'lumotlarni eng tez qabul qiladigan paytdir. Shu yoshdan boshlab namozni o'rgatib borish farzandning ruhiyatiga ibodat muhabbatini joylaydi",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Foundations of Faith in Children (Part 4)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Foundations of Faith in Children (Part 4)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Основы веры у детей (Часть 4)",
        "summary": "Первые слова Единобожия, три главных качества, уважение достоинства ребенка и обучение намазу с 7 лет.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Основы веры у детей (Часть 4)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Farzand tarbiyasining eng muhim va birlamchi poydevori iymoniy tarbiyadir. Yoshligidanoq bolaning qalbiga Allohni, farishtalarni va payg'ambarlarni tanitish ota-onaning eng katta mas'uliyati hisoblanadi.",
            "example": "Bolaning tili chiqib, gapira boshlaganda unga o'rgatiladigan eng birinchi so'z \"La ilaha illallah\" (Allohdan o'zga iloh yo'q) bo'lishi kerak. Bu tavhid kalimasi uning ongiga va qalbiga umrbod o'rnashib qolishi o'ta muhimdir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Первые слова Единобожия, три главных качества, уважение достоинства ребенка и обучение намазу с 7 лет. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Farzandni tarbiyalashda asabbiylashish, doimiy ravishda baqirish, urish yoki boshqalar oldida izza qilish (kamsitish) bolaning shaxsiyatini majruh qiladi. Bolada ham insoniy qadr-qimmat va g'urur borligini doim hisobga olish kerak. Ota-ona farzandni qo'rquv ustiga qurilgan qattiqqo'llik orqali emas, balki muloyimlik, sabr va to'g'ri tushuntirish yo'li bilan tarbiyalashi lozim. Yoshligidan shaxsiyatiga hurmat ko'rsatilgan bola kelajakda irodali va yetuk inson bo'lib yetishadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Yana bir bor ta'kidlanadiki, bolani ibodatga tayyorlash 7 yoshdan boshlanadi. Bu davr uning ongi ma'lumotlarni eng tez qabul qiladigan paytdir. Shu yoshdan boshlab namozni o'rgatib borish farzandning ruhiyatiga ibodat muhabbatini joylaydi",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Основы веры у детей (Часть 4)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Основы веры у детей (Часть 4)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "Tarbiyaning ahamiyati (5-qism)",
    "slug": "dars-5-tarbiyaning-ahamiyati-5-qism",
    "summary": "Din, ibodat va xulq bir-biridan ajralmas tushunchalardir. Agar insonning ibodati ko'p bo'lsa-yu, ammo xulqi yomon bo'lsa, uning o'qigan namozi va tutgan ro'zasi unga foyda bermasligi mumkin.",
    "order": 5,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": true,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Iymon va Go'zal Xulqning Uzviyligi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Din, ibodat va xulq bir-biridan ajralmas tushunchalardir. Agar insonning ibodati ko'p bo'lsa-yu, ammo xulqi yomon bo'lsa, uning o'qigan namozi va tutgan ro'zasi unga foyda bermasligi mumkin.",
        "example": "Bunga misol qilib Payg'ambarimiz (s.a.v) zamonlaridagi bir ayol haqidagi hadis keltiriladi: U ayol kechalari bilan namoz o'qib, kunduzlari ro'za tutsa-da, tili bilan qo'shnilariga ozor berardi. Rasululloh (s.a.v) bu ayol haqida: \"Unda yaxshilik yo'q, u do'zaxiydir\", deb marhamat qilganlar.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Zikr va Amalning Mutanosibligi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Allohni zikr qilish faqatgina til bilan \"Subhanalloh\", \"Alhamdulillah\" deyishdan iborat emas. Haqiqiy zikr insonning qalbiga, niyatiga va amallariga bevosita ta'sir ko'rsatishi shart. Tili bilan Allohni zikr qilib turib, gunoh ishlardan, haromdan va birovning haqqidan xazar qilmaydigan insonning zikri chinakam zikr hisoblanmaydi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Inson Tabiatining Turlari",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Tarbiya jarayonida farzandni to'g'ri yo'naltirish uchun insonlardagi asosan to'rt xil tabiatni (xarakterni) farqlay bilish kerak:",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Payg'ambarlar Hayotidan Kechirimlilik va Xulq Namunalari",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Yusuf (a.s.) qissasi: Akalari uni yoshligida quduqqa tashlab, o'limga hukm qilgan bo'lsalar-da, yillar o'tib Yusuf (a.s.) Misrga podshoh bo'lganlarida ulardan qasos olmadilar. Aksincha, \"Bu faqatgina men bilan akalarimning o'rtasini buzgan shaytonning fitnasi edi\" deb, ularni kechirib yubordilar. Rasululloh (s.a.v) misollari: Makka fath qilingan kuni o'zlariga eng ko'p zulm qilgan ashaddiy dushmanlarini, shu jumladan Abu Sufyonni ham jazolamadilar. Aksincha, Islomning oliyjanobligi va yuksak xulqini ko'rsatib, ularni afv etdilar. Farzandlarimizga o'rgatilishi kerak bo'lgan haqiqiy go'zal xulq mana shunday kechirimlilikni o'z ichiga oladi",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Tarbiyaning ahamiyati (5-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (5-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Tarbiyaning ahamiyati (5-qism)",
        "summary": "Din, ibodat va xulq bir-biridan ajralmas tushunchalardir. Agar insonning ibodati ko'p bo'lsa-yu, ammo xulqi yomon bo'lsa, uning o'qigan namozi va tutgan ro'zasi unga foyda bermasligi mumkin.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Iymon va Go'zal Xulqning Uzviyligi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Din, ibodat va xulq bir-biridan ajralmas tushunchalardir. Agar insonning ibodati ko'p bo'lsa-yu, ammo xulqi yomon bo'lsa, uning o'qigan namozi va tutgan ro'zasi unga foyda bermasligi mumkin.",
            "example": "Bunga misol qilib Payg'ambarimiz (s.a.v) zamonlaridagi bir ayol haqidagi hadis keltiriladi: U ayol kechalari bilan namoz o'qib, kunduzlari ro'za tutsa-da, tili bilan qo'shnilariga ozor berardi. Rasululloh (s.a.v) bu ayol haqida: \"Unda yaxshilik yo'q, u do'zaxiydir\", deb marhamat qilganlar.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Zikr va Amalning Mutanosibligi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Allohni zikr qilish faqatgina til bilan \"Subhanalloh\", \"Alhamdulillah\" deyishdan iborat emas. Haqiqiy zikr insonning qalbiga, niyatiga va amallariga bevosita ta'sir ko'rsatishi shart. Tili bilan Allohni zikr qilib turib, gunoh ishlardan, haromdan va birovning haqqidan xazar qilmaydigan insonning zikri chinakam zikr hisoblanmaydi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Inson Tabiatining Turlari",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Tarbiya jarayonida farzandni to'g'ri yo'naltirish uchun insonlardagi asosan to'rt xil tabiatni (xarakterni) farqlay bilish kerak:",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Payg'ambarlar Hayotidan Kechirimlilik va Xulq Namunalari",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Yusuf (a.s.) qissasi: Akalari uni yoshligida quduqqa tashlab, o'limga hukm qilgan bo'lsalar-da, yillar o'tib Yusuf (a.s.) Misrga podshoh bo'lganlarida ulardan qasos olmadilar. Aksincha, \"Bu faqatgina men bilan akalarimning o'rtasini buzgan shaytonning fitnasi edi\" deb, ularni kechirib yubordilar. Rasululloh (s.a.v) misollari: Makka fath qilingan kuni o'zlariga eng ko'p zulm qilgan ashaddiy dushmanlarini, shu jumladan Abu Sufyonni ham jazolamadilar. Aksincha, Islomning oliyjanobligi va yuksak xulqini ko'rsatib, ularni afv etdilar. Farzandlarimizga o'rgatilishi kerak bo'lgan haqiqiy go'zal xulq mana shunday kechirimlilikni o'z ichiga oladi",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Tarbiyaning ahamiyati (5-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Tarbiyaning ahamiyati (5-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Character & Human Temperament (Part 5)",
        "summary": "Connecting faith with moral conduct, four types of human nature, best parental inheritance, and forgiveness.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Character & Human Temperament (Part 5)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Din, ibodat va xulq bir-biridan ajralmas tushunchalardir. Agar insonning ibodati ko'p bo'lsa-yu, ammo xulqi yomon bo'lsa, uning o'qigan namozi va tutgan ro'zasi unga foyda bermasligi mumkin.",
            "example": "Bunga misol qilib Payg'ambarimiz (s.a.v) zamonlaridagi bir ayol haqidagi hadis keltiriladi: U ayol kechalari bilan namoz o'qib, kunduzlari ro'za tutsa-da, tili bilan qo'shnilariga ozor berardi. Rasululloh (s.a.v) bu ayol haqida: \"Unda yaxshilik yo'q, u do'zaxiydir\", deb marhamat qilganlar.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Connecting faith with moral conduct, four types of human nature, best parental inheritance, and forgiveness. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Tarbiya jarayonida farzandni to'g'ri yo'naltirish uchun insonlardagi asosan to'rt xil tabiatni (xarakterni) farqlay bilish kerak:",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Yusuf (a.s.) qissasi: Akalari uni yoshligida quduqqa tashlab, o'limga hukm qilgan bo'lsalar-da, yillar o'tib Yusuf (a.s.) Misrga podshoh bo'lganlarida ulardan qasos olmadilar. Aksincha, \"Bu faqatgina men bilan akalarimning o'rtasini buzgan shaytonning fitnasi edi\" deb, ularni kechirib yubordilar. Rasululloh (s.a.v) misollari: Makka fath qilingan kuni o'zlariga eng ko'p zulm qilgan ashaddiy dushmanlarini, shu jumladan Abu Sufyonni ham jazolamadilar. Aksincha, Islomning oliyjanobligi va yuksak xulqini ko'rsatib, ularni afv etdilar. Farzandlarimizga o'rgatilishi kerak bo'lgan haqiqiy go'zal xulq mana shunday kechirimlilikni o'z ichiga oladi",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Character & Human Temperament (Part 5)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Character & Human Temperament (Part 5)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Характер и темперамент человека (Часть 5)",
        "summary": "Связь веры с благонравием, четыре типа человеческой природы, лучшее родительское наследство и прощение.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Характер и темперамент человека (Часть 5)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Din, ibodat va xulq bir-biridan ajralmas tushunchalardir. Agar insonning ibodati ko'p bo'lsa-yu, ammo xulqi yomon bo'lsa, uning o'qigan namozi va tutgan ro'zasi unga foyda bermasligi mumkin.",
            "example": "Bunga misol qilib Payg'ambarimiz (s.a.v) zamonlaridagi bir ayol haqidagi hadis keltiriladi: U ayol kechalari bilan namoz o'qib, kunduzlari ro'za tutsa-da, tili bilan qo'shnilariga ozor berardi. Rasululloh (s.a.v) bu ayol haqida: \"Unda yaxshilik yo'q, u do'zaxiydir\", deb marhamat qilganlar.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Связь веры с благонравием, четыре типа человеческой природы, лучшее родительское наследство и прощение. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Tarbiya jarayonida farzandni to'g'ri yo'naltirish uchun insonlardagi asosan to'rt xil tabiatni (xarakterni) farqlay bilish kerak:",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Yusuf (a.s.) qissasi: Akalari uni yoshligida quduqqa tashlab, o'limga hukm qilgan bo'lsalar-da, yillar o'tib Yusuf (a.s.) Misrga podshoh bo'lganlarida ulardan qasos olmadilar. Aksincha, \"Bu faqatgina men bilan akalarimning o'rtasini buzgan shaytonning fitnasi edi\" deb, ularni kechirib yubordilar. Rasululloh (s.a.v) misollari: Makka fath qilingan kuni o'zlariga eng ko'p zulm qilgan ashaddiy dushmanlarini, shu jumladan Abu Sufyonni ham jazolamadilar. Aksincha, Islomning oliyjanobligi va yuksak xulqini ko'rsatib, ularni afv etdilar. Farzandlarimizga o'rgatilishi kerak bo'lgan haqiqiy go'zal xulq mana shunday kechirimlilikni o'z ichiga oladi",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Характер и темперамент человека (Часть 5)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Характер и темперамент человека (Часть 5)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "Yolg'onchilik",
    "slug": "dars-6-yolgonchilik",
    "summary": "Ota-ona farzandini yoshligidanoq aldamasligi, hatto kichik narsalarda ham yolg'on ishlatmasligi kerak. Bolaga biron narsa olib beraman deb va'da qilinsa, albatta bajarish shart.",
    "order": 6,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": false,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Ota-onaning O'zi Farzandga Rostgo'y Bo'lishi Shart",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Ota-ona farzandini yoshligidanoq aldamasligi, hatto kichik narsalarda ham yolg'on ishlatmasligi kerak. Bolaga biron narsa olib beraman deb va'da qilinsa, albatta bajarish shart.",
        "example": "Abdulloh ibn Amir (r.a) rivoyat qilgan hadisda shunday deyiladi: Bir kuni onam meni chaqirib, \"Kel, senga bir narsa beraman\", dedilar. Shunda Rasululloh (s.a.v) onamdan: \"Nima bermoqchisiz?\" deb so'radilar. Onam xurmo bermoqchi ekanliklarini aytdilar. Shunda Payg'ambarimiz (s.a.v): \"Agar uni chaqirib, hech narsa bermaganingizda, nomangizga bitta yolg'on gunohi yozilardi\", deb ogohlantirdilar.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Yolg'on Gapirishning Oqibatlari",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Rasululloh (s.a.v) ta'kidlaganlaridek: Rostgo'ylik insonni yaxshilikka, yaxshilik esa jannatga yetaklaydi. Yolg'onchilik esa fujurga (yomonlik va buzuqlikka), fujur esa do'zaxga yetaklaydi. Farzand kichikligida yolg'onga o'rgansa, bu borib-borib uning qon-qoniga singib ketadi va o'sib ulg'ayganda undan qutulishi juda qiyin bo'ladi. Qiyomat kunida yolg'on gapiruvchilarga Alloh taolo qaramaydi va ularni azoblaydi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Eng Katta Xiyonat",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Payg'ambarimiz (s.a.v) dedilar: \"Senga ishonib turgan birodaringga (yoki yaqiningga) yolg'on gapirishing eng katta xiyonatlardandir\". Go'dak farzand ota-onasining har bir so'ziga to'liq ishonadi. Shu ishonchni suiiste'mol qilib, bolani chalg'itish yoki qo'rqitish uchun yolg'on to'qish Islomda qattiq qoralanadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Abdulqodir Jiloniy (r.a) va Qaroqchilar Qissasi",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Darsda ulug' alloma Abdulqodir Jiloniyning yoshlik vaqtlari misol qilib keltiriladi: U kishi ilm izlab safarga chiqayotganlarida, onalari kiyimlariga 40 tilla tanga tikib beradilar va \"O'g'lim, hech qachon yolg'on gapirmang, to'g'ri so'zlang!\" deb nasihat qiladilar. Yo'lda karvonga qaroqchilar hujum qiladi. Qaroqchilar yosh boladan \"Yoningda nimang bor?\" deb so'raganda, u kishi onasiga bergan va'dasiga muvofiq tillalari borligini rostini aytadilar. Buni eshitgan qaroqchilar boshlig'i bolaning Allohdan va onasining nasihatidan qo'rqib yolg'on gapirmaganidan qattiq ta'sirlanadi va tavba qilib, to'g'ri yo'lga qaytadi. Bu – rostgo'ylikning naqadar katta kuch ekanligiga isbotdir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Yolg'onchilik",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Yolg'onchilik») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Yolg'onchilik",
        "summary": "Ota-ona farzandini yoshligidanoq aldamasligi, hatto kichik narsalarda ham yolg'on ishlatmasligi kerak. Bolaga biron narsa olib beraman deb va'da qilinsa, albatta bajarish shart.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ota-onaning O'zi Farzandga Rostgo'y Bo'lishi Shart",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Ota-ona farzandini yoshligidanoq aldamasligi, hatto kichik narsalarda ham yolg'on ishlatmasligi kerak. Bolaga biron narsa olib beraman deb va'da qilinsa, albatta bajarish shart.",
            "example": "Abdulloh ibn Amir (r.a) rivoyat qilgan hadisda shunday deyiladi: Bir kuni onam meni chaqirib, \"Kel, senga bir narsa beraman\", dedilar. Shunda Rasululloh (s.a.v) onamdan: \"Nima bermoqchisiz?\" deb so'radilar. Onam xurmo bermoqchi ekanliklarini aytdilar. Shunda Payg'ambarimiz (s.a.v): \"Agar uni chaqirib, hech narsa bermaganingizda, nomangizga bitta yolg'on gunohi yozilardi\", deb ogohlantirdilar.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Yolg'on Gapirishning Oqibatlari",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Rasululloh (s.a.v) ta'kidlaganlaridek: Rostgo'ylik insonni yaxshilikka, yaxshilik esa jannatga yetaklaydi. Yolg'onchilik esa fujurga (yomonlik va buzuqlikka), fujur esa do'zaxga yetaklaydi. Farzand kichikligida yolg'onga o'rgansa, bu borib-borib uning qon-qoniga singib ketadi va o'sib ulg'ayganda undan qutulishi juda qiyin bo'ladi. Qiyomat kunida yolg'on gapiruvchilarga Alloh taolo qaramaydi va ularni azoblaydi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Eng Katta Xiyonat",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Payg'ambarimiz (s.a.v) dedilar: \"Senga ishonib turgan birodaringga (yoki yaqiningga) yolg'on gapirishing eng katta xiyonatlardandir\". Go'dak farzand ota-onasining har bir so'ziga to'liq ishonadi. Shu ishonchni suiiste'mol qilib, bolani chalg'itish yoki qo'rqitish uchun yolg'on to'qish Islomda qattiq qoralanadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Abdulqodir Jiloniy (r.a) va Qaroqchilar Qissasi",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Darsda ulug' alloma Abdulqodir Jiloniyning yoshlik vaqtlari misol qilib keltiriladi: U kishi ilm izlab safarga chiqayotganlarida, onalari kiyimlariga 40 tilla tanga tikib beradilar va \"O'g'lim, hech qachon yolg'on gapirmang, to'g'ri so'zlang!\" deb nasihat qiladilar. Yo'lda karvonga qaroqchilar hujum qiladi. Qaroqchilar yosh boladan \"Yoningda nimang bor?\" deb so'raganda, u kishi onasiga bergan va'dasiga muvofiq tillalari borligini rostini aytadilar. Buni eshitgan qaroqchilar boshlig'i bolaning Allohdan va onasining nasihatidan qo'rqib yolg'on gapirmaganidan qattiq ta'sirlanadi va tavba qilib, to'g'ri yo'lga qaytadi. Bu – rostgo'ylikning naqadar katta kuch ekanligiga isbotdir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Yolg'onchilik",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Yolg'onchilik») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Honesty and Guarding Against Deceit",
        "summary": "Absolute honesty of parents, perils of deception, signs of hypocrisy, and the story of Abdul Qadir Jilani.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Honesty and Guarding Against Deceit",
            "subtitle": "Real-life Context & Introduction",
            "content": "Ota-ona farzandini yoshligidanoq aldamasligi, hatto kichik narsalarda ham yolg'on ishlatmasligi kerak. Bolaga biron narsa olib beraman deb va'da qilinsa, albatta bajarish shart.",
            "example": "Abdulloh ibn Amir (r.a) rivoyat qilgan hadisda shunday deyiladi: Bir kuni onam meni chaqirib, \"Kel, senga bir narsa beraman\", dedilar. Shunda Rasululloh (s.a.v) onamdan: \"Nima bermoqchisiz?\" deb so'radilar. Onam xurmo bermoqchi ekanliklarini aytdilar. Shunda Payg'ambarimiz (s.a.v): \"Agar uni chaqirib, hech narsa bermaganingizda, nomangizga bitta yolg'on gunohi yozilardi\", deb ogohlantirdilar.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Absolute honesty of parents, perils of deception, signs of hypocrisy, and the story of Abdul Qadir Jilani. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Payg'ambarimiz (s.a.v) dedilar: \"Senga ishonib turgan birodaringga (yoki yaqiningga) yolg'on gapirishing eng katta xiyonatlardandir\". Go'dak farzand ota-onasining har bir so'ziga to'liq ishonadi. Shu ishonchni suiiste'mol qilib, bolani chalg'itish yoki qo'rqitish uchun yolg'on to'qish Islomda qattiq qoralanadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Darsda ulug' alloma Abdulqodir Jiloniyning yoshlik vaqtlari misol qilib keltiriladi: U kishi ilm izlab safarga chiqayotganlarida, onalari kiyimlariga 40 tilla tanga tikib beradilar va \"O'g'lim, hech qachon yolg'on gapirmang, to'g'ri so'zlang!\" deb nasihat qiladilar. Yo'lda karvonga qaroqchilar hujum qiladi. Qaroqchilar yosh boladan \"Yoningda nimang bor?\" deb so'raganda, u kishi onasiga bergan va'dasiga muvofiq tillalari borligini rostini aytadilar. Buni eshitgan qaroqchilar boshlig'i bolaning Allohdan va onasining nasihatidan qo'rqib yolg'on gapirmaganidan qattiq ta'sirlanadi va tavba qilib, to'g'ri yo'lga qaytadi. Bu – rostgo'ylikning naqadar katta kuch ekanligiga isbotdir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Honesty and Guarding Against Deceit",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Honesty and Guarding Against Deceit'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Правдивость и защита от лжи",
        "summary": "Честность родителей перед детьми, пагубность лжи, признаки лицемерия и поучительный пример Абдулкадира Джилани.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Правдивость и защита от лжи",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Ota-ona farzandini yoshligidanoq aldamasligi, hatto kichik narsalarda ham yolg'on ishlatmasligi kerak. Bolaga biron narsa olib beraman deb va'da qilinsa, albatta bajarish shart.",
            "example": "Abdulloh ibn Amir (r.a) rivoyat qilgan hadisda shunday deyiladi: Bir kuni onam meni chaqirib, \"Kel, senga bir narsa beraman\", dedilar. Shunda Rasululloh (s.a.v) onamdan: \"Nima bermoqchisiz?\" deb so'radilar. Onam xurmo bermoqchi ekanliklarini aytdilar. Shunda Payg'ambarimiz (s.a.v): \"Agar uni chaqirib, hech narsa bermaganingizda, nomangizga bitta yolg'on gunohi yozilardi\", deb ogohlantirdilar.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Честность родителей перед детьми, пагубность лжи, признаки лицемерия и поучительный пример Абдулкадира Джилани. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Payg'ambarimiz (s.a.v) dedilar: \"Senga ishonib turgan birodaringga (yoki yaqiningga) yolg'on gapirishing eng katta xiyonatlardandir\". Go'dak farzand ota-onasining har bir so'ziga to'liq ishonadi. Shu ishonchni suiiste'mol qilib, bolani chalg'itish yoki qo'rqitish uchun yolg'on to'qish Islomda qattiq qoralanadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Darsda ulug' alloma Abdulqodir Jiloniyning yoshlik vaqtlari misol qilib keltiriladi: U kishi ilm izlab safarga chiqayotganlarida, onalari kiyimlariga 40 tilla tanga tikib beradilar va \"O'g'lim, hech qachon yolg'on gapirmang, to'g'ri so'zlang!\" deb nasihat qiladilar. Yo'lda karvonga qaroqchilar hujum qiladi. Qaroqchilar yosh boladan \"Yoningda nimang bor?\" deb so'raganda, u kishi onasiga bergan va'dasiga muvofiq tillalari borligini rostini aytadilar. Buni eshitgan qaroqchilar boshlig'i bolaning Allohdan va onasining nasihatidan qo'rqib yolg'on gapirmaganidan qattiq ta'sirlanadi va tavba qilib, to'g'ri yo'lga qaytadi. Bu – rostgo'ylikning naqadar katta kuch ekanligiga isbotdir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Правдивость и защита от лжи",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Правдивость и защита от лжи»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "O'g'irlik",
    "slug": "dars-7-ogirlik",
    "summary": "Bolaning ko'chadan yoki maktabdan o'ziga tegishli bo'lmagan mayda buyumni olib kelishi o'g'irlikning ilk qadamidir.",
    "order": 7,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": false,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "O'g'irlik Odatining Boshlanishi va Ota-ona E'tiborsizligi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Bolaning ko'chadan yoki maktabdan o'ziga tegishli bo'lmagan mayda buyumni olib kelishi o'g'irlikning ilk qadamidir.",
        "example": "Ota-ona darhol buni sezib, narsani qayerdan olganini so'rashi va shunday holatlarga e'tiborsiz bo'lmasligi shart. Agar ota-ona buni oddiy holdek qabul qilsa, bola kelajakda kattaroq narsalarga ham xiyonat qilishga odatlanadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Yaxshi Xulqqa Undovchi Ikki Omil",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Insonni yomonlikdan (jumladan, birovning haqqini yeyishdan) qaytaruvchi ikki xil tur qo'rquv bor: biri tashqi muhitdan (odamlardan, qonundan yoki jazodan) qo'rqish, ikkinchisi esa insonning o'z ichidan chiqadigan iymoniy tuyg'u – Allohdan qo'rqish (taqvo) hissi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Tashqi Qo'rquvning Ojizligi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Agar farzand faqat ota-onasining jazosidan, ustozidan yoki odamlarning ko'rib qolishidan qo'rqib gunohdan tiyilsa, u ota-onasi yo'q joyda yoki hech kim ko'rmaydigan xilvatda qolganda darhol shu yomonlikni qiladi. Tashqi jazo yoki qattiq nazorat uzoq muddatli komil xulqni shakllantira olmaydi, sababi nazorat yo'qolganda inson yana gunohga qo'l uraveradi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Cho'pon Yigit va Xalifa Umar (r.a) Qissasi",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Darsda Xalifa Umar (r.a) va sahrodagi yosh cho'pon qissasi ibrat sifatida keltiriladi. Xalifa Umar (r.a) yigitni sinamoqchi bo'lib, \"Qo'yingni menga sot, xojangga esa bittasini bo'ri yedi deysan,\" deganida, cho'pon \"Faynalloh? (Unda Alloh qayerda? Alloh ko'rib turibdi-ku!)\" deb javob beradi. Bu iymonli javobdan ta'sirlangan Umar (r.a): \"Shu so'zing seni bu dunyoda qullikdan qutqardi, oxiratda esa do'zax azobidan qutqaradi,\" deb xulosa qilganlar",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: O'g'irlik",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («O'g'irlik») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "O'g'irlik",
        "summary": "Bolaning ko'chadan yoki maktabdan o'ziga tegishli bo'lmagan mayda buyumni olib kelishi o'g'irlikning ilk qadamidir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "O'g'irlik Odatining Boshlanishi va Ota-ona E'tiborsizligi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Bolaning ko'chadan yoki maktabdan o'ziga tegishli bo'lmagan mayda buyumni olib kelishi o'g'irlikning ilk qadamidir.",
            "example": "Ota-ona darhol buni sezib, narsani qayerdan olganini so'rashi va shunday holatlarga e'tiborsiz bo'lmasligi shart. Agar ota-ona buni oddiy holdek qabul qilsa, bola kelajakda kattaroq narsalarga ham xiyonat qilishga odatlanadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Yaxshi Xulqqa Undovchi Ikki Omil",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Insonni yomonlikdan (jumladan, birovning haqqini yeyishdan) qaytaruvchi ikki xil tur qo'rquv bor: biri tashqi muhitdan (odamlardan, qonundan yoki jazodan) qo'rqish, ikkinchisi esa insonning o'z ichidan chiqadigan iymoniy tuyg'u – Allohdan qo'rqish (taqvo) hissi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Tashqi Qo'rquvning Ojizligi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Agar farzand faqat ota-onasining jazosidan, ustozidan yoki odamlarning ko'rib qolishidan qo'rqib gunohdan tiyilsa, u ota-onasi yo'q joyda yoki hech kim ko'rmaydigan xilvatda qolganda darhol shu yomonlikni qiladi. Tashqi jazo yoki qattiq nazorat uzoq muddatli komil xulqni shakllantira olmaydi, sababi nazorat yo'qolganda inson yana gunohga qo'l uraveradi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Cho'pon Yigit va Xalifa Umar (r.a) Qissasi",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Darsda Xalifa Umar (r.a) va sahrodagi yosh cho'pon qissasi ibrat sifatida keltiriladi. Xalifa Umar (r.a) yigitni sinamoqchi bo'lib, \"Qo'yingni menga sot, xojangga esa bittasini bo'ri yedi deysan,\" deganida, cho'pon \"Faynalloh? (Unda Alloh qayerda? Alloh ko'rib turibdi-ku!)\" deb javob beradi. Bu iymonli javobdan ta'sirlangan Umar (r.a): \"Shu so'zing seni bu dunyoda qullikdan qutqardi, oxiratda esa do'zax azobidan qutqaradi,\" deb xulosa qilganlar",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: O'g'irlik",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («O'g'irlik») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Respecting Ownership and Trust",
        "summary": "Preventing early petty theft, internal God-consciousness vs external fear, and Umar (r.a.) and the young shepherd.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Respecting Ownership and Trust",
            "subtitle": "Real-life Context & Introduction",
            "content": "Bolaning ko'chadan yoki maktabdan o'ziga tegishli bo'lmagan mayda buyumni olib kelishi o'g'irlikning ilk qadamidir.",
            "example": "Ota-ona darhol buni sezib, narsani qayerdan olganini so'rashi va shunday holatlarga e'tiborsiz bo'lmasligi shart. Agar ota-ona buni oddiy holdek qabul qilsa, bola kelajakda kattaroq narsalarga ham xiyonat qilishga odatlanadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Preventing early petty theft, internal God-consciousness vs external fear, and Umar (r.a.) and the young shepherd. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Agar farzand faqat ota-onasining jazosidan, ustozidan yoki odamlarning ko'rib qolishidan qo'rqib gunohdan tiyilsa, u ota-onasi yo'q joyda yoki hech kim ko'rmaydigan xilvatda qolganda darhol shu yomonlikni qiladi. Tashqi jazo yoki qattiq nazorat uzoq muddatli komil xulqni shakllantira olmaydi, sababi nazorat yo'qolganda inson yana gunohga qo'l uraveradi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Darsda Xalifa Umar (r.a) va sahrodagi yosh cho'pon qissasi ibrat sifatida keltiriladi. Xalifa Umar (r.a) yigitni sinamoqchi bo'lib, \"Qo'yingni menga sot, xojangga esa bittasini bo'ri yedi deysan,\" deganida, cho'pon \"Faynalloh? (Unda Alloh qayerda? Alloh ko'rib turibdi-ku!)\" deb javob beradi. Bu iymonli javobdan ta'sirlangan Umar (r.a): \"Shu so'zing seni bu dunyoda qullikdan qutqardi, oxiratda esa do'zax azobidan qutqaradi,\" deb xulosa qilganlar",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Respecting Ownership and Trust",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Respecting Ownership and Trust'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Уважение к чужой собственности и честность",
        "summary": "Пресечение первых признаков воровства, внутреннее чувство «Аллах видит» и пример Умара (р.а.) с пастухом.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Уважение к чужой собственности и честность",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Bolaning ko'chadan yoki maktabdan o'ziga tegishli bo'lmagan mayda buyumni olib kelishi o'g'irlikning ilk qadamidir.",
            "example": "Ota-ona darhol buni sezib, narsani qayerdan olganini so'rashi va shunday holatlarga e'tiborsiz bo'lmasligi shart. Agar ota-ona buni oddiy holdek qabul qilsa, bola kelajakda kattaroq narsalarga ham xiyonat qilishga odatlanadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Пресечение первых признаков воровства, внутреннее чувство «Аллах видит» и пример Умара (р.а.) с пастухом. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Agar farzand faqat ota-onasining jazosidan, ustozidan yoki odamlarning ko'rib qolishidan qo'rqib gunohdan tiyilsa, u ota-onasi yo'q joyda yoki hech kim ko'rmaydigan xilvatda qolganda darhol shu yomonlikni qiladi. Tashqi jazo yoki qattiq nazorat uzoq muddatli komil xulqni shakllantira olmaydi, sababi nazorat yo'qolganda inson yana gunohga qo'l uraveradi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Darsda Xalifa Umar (r.a) va sahrodagi yosh cho'pon qissasi ibrat sifatida keltiriladi. Xalifa Umar (r.a) yigitni sinamoqchi bo'lib, \"Qo'yingni menga sot, xojangga esa bittasini bo'ri yedi deysan,\" deganida, cho'pon \"Faynalloh? (Unda Alloh qayerda? Alloh ko'rib turibdi-ku!)\" deb javob beradi. Bu iymonli javobdan ta'sirlangan Umar (r.a): \"Shu so'zing seni bu dunyoda qullikdan qutqardi, oxiratda esa do'zax azobidan qutqaradi,\" deb xulosa qilganlar",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Уважение к чужой собственности и честность",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Уважение к чужой собственности и честность»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "So'kinish haqida",
    "slug": "dars-8-sokinish-haqida",
    "summary": "Mo'min-musulmon kishi so'kong'ich, la'natlovchi va tili yomon inson bo'lmasligi kerak. Hadislarda kelishicha, haqiqiy musulmon boshqalarni haqorat qilmaydigan, odobsiz so'zlarni ishlatmaydigan va fahsh gaplardan uzoq turadigan insondir.",
    "order": 8,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": false,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "So'kinishning Islomdagi O'rni",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Mo'min-musulmon kishi so'kong'ich, la'natlovchi va tili yomon inson bo'lmasligi kerak. Hadislarda kelishicha, haqiqiy musulmon boshqalarni haqorat qilmaydigan, odobsiz so'zlarni ishlatmaydigan va fahsh gaplardan uzoq turadigan insondir.",
        "example": "Farzandning tilida so'kinish paydo bo'lishining birinchi raqamli sababi bu ota-onaning o'zi yoki oiladagi muhitdir. Oila a'zolari o'zaro muomalada yoki jahli chiqqanda so'kinish ishlatsa, bola ham buni tabiiy holat sifatida qabul qiladi va takrorlaydi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Jahl Chiqqanda Tilni Tiya Olish",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Insonning haqiqiy tarbiyasi va iymoni uning jahli chiqqan holatda bilinadi. Musulmon ota-ona g'azablangan paytida ham tilidan yomon so'z chiqarmasligi, o'zini qo'lga ola bilishi kerak. Ota-ona farzandini so'kib urishish o'rniga, duo bilan yoki to'g'ri so'z bilan tarbiya qilishi shart. Ota-onaning farzandiga qilgan beduosi, ayniqsa g'azab paytida aytilgan qarg'ishlari ijobat bo'lib qolishi va farzandning kelajagini barbod qilishi mumkin.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Ota-onasini So'kkan Insonning Hukmi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Payg'ambarimiz (s.a.v) aytadilar: \"Kishining o'z ota-onasini so'kishi eng katta gunohlardandir.\" Sahobalar taajjublanib: \"Ey Rasululloh, qanday qilib inson o'z ota-onasini so'kishi mumkin?\" deb so'rashganida, u zot (s.a.v): \"Bir kishi boshqa birovning otasini so'kadi, u ham qaytarib buning otasini so'kadi. Birovning onasini so'kadi, u ham qaytarib buning onasini so'kadi\", deb javob berganlar . Ya'ni, ko'chada birov bilan so'kishgan odam, aslida o'z ota-onasiga la'nat va so'kish olib kelgan hisoblanadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Tilni Saqlash – Jannat Kafolati",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Muoz ibn Jabal (r.a) Rasulullohdan (s.a.v) jannatga kiritadigan va do'zaxdan uzoqlashtiradigan amal haqida so'raganlarida, ko'p amallarni sanab, oxirida tillarini ko'rsatib: \"Mana shuni tiygin!\" deb buyurdilar. Muoz (r.a): \"Ey Allohning Rasuli, biz gapirgan gaplarimiz uchun ham iqob (jazo) qilinamizmi?\" deganlarida, Rasululloh (s.a.v): \"Odamlarni do'zaxga yuz tuban qilib tashlaydigan narsa faqatgina ularning tillarining hosili-ku!\" deb ogohlantirdilar . Demak, farzand tarbiyasidagi eng muhim nuqta uning tilini pok tutishdir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: So'kinish haqida",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («So'kinish haqida») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "So'kinish haqida",
        "summary": "Mo'min-musulmon kishi so'kong'ich, la'natlovchi va tili yomon inson bo'lmasligi kerak. Hadislarda kelishicha, haqiqiy musulmon boshqalarni haqorat qilmaydigan, odobsiz so'zlarni ishlatmaydigan va fahsh gaplardan uzoq turadigan insondir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "So'kinishning Islomdagi O'rni",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Mo'min-musulmon kishi so'kong'ich, la'natlovchi va tili yomon inson bo'lmasligi kerak. Hadislarda kelishicha, haqiqiy musulmon boshqalarni haqorat qilmaydigan, odobsiz so'zlarni ishlatmaydigan va fahsh gaplardan uzoq turadigan insondir.",
            "example": "Farzandning tilida so'kinish paydo bo'lishining birinchi raqamli sababi bu ota-onaning o'zi yoki oiladagi muhitdir. Oila a'zolari o'zaro muomalada yoki jahli chiqqanda so'kinish ishlatsa, bola ham buni tabiiy holat sifatida qabul qiladi va takrorlaydi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Jahl Chiqqanda Tilni Tiya Olish",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Insonning haqiqiy tarbiyasi va iymoni uning jahli chiqqan holatda bilinadi. Musulmon ota-ona g'azablangan paytida ham tilidan yomon so'z chiqarmasligi, o'zini qo'lga ola bilishi kerak. Ota-ona farzandini so'kib urishish o'rniga, duo bilan yoki to'g'ri so'z bilan tarbiya qilishi shart. Ota-onaning farzandiga qilgan beduosi, ayniqsa g'azab paytida aytilgan qarg'ishlari ijobat bo'lib qolishi va farzandning kelajagini barbod qilishi mumkin.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Ota-onasini So'kkan Insonning Hukmi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: \"Kishining o'z ota-onasini so'kishi eng katta gunohlardandir.\" Sahobalar taajjublanib: \"Ey Rasululloh, qanday qilib inson o'z ota-onasini so'kishi mumkin?\" deb so'rashganida, u zot (s.a.v): \"Bir kishi boshqa birovning otasini so'kadi, u ham qaytarib buning otasini so'kadi. Birovning onasini so'kadi, u ham qaytarib buning onasini so'kadi\", deb javob berganlar . Ya'ni, ko'chada birov bilan so'kishgan odam, aslida o'z ota-onasiga la'nat va so'kish olib kelgan hisoblanadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Tilni Saqlash – Jannat Kafolati",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Muoz ibn Jabal (r.a) Rasulullohdan (s.a.v) jannatga kiritadigan va do'zaxdan uzoqlashtiradigan amal haqida so'raganlarida, ko'p amallarni sanab, oxirida tillarini ko'rsatib: \"Mana shuni tiygin!\" deb buyurdilar. Muoz (r.a): \"Ey Allohning Rasuli, biz gapirgan gaplarimiz uchun ham iqob (jazo) qilinamizmi?\" deganlarida, Rasululloh (s.a.v): \"Odamlarni do'zaxga yuz tuban qilib tashlaydigan narsa faqatgina ularning tillarining hosili-ku!\" deb ogohlantirdilar . Demak, farzand tarbiyasidagi eng muhim nuqta uning tilini pok tutishdir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: So'kinish haqida",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («So'kinish haqida») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Guarding the Tongue from Foul Speech",
        "summary": "The severity of vulgar language, keeping composure during anger, curses, and purifying children's speech.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Guarding the Tongue from Foul Speech",
            "subtitle": "Real-life Context & Introduction",
            "content": "Mo'min-musulmon kishi so'kong'ich, la'natlovchi va tili yomon inson bo'lmasligi kerak. Hadislarda kelishicha, haqiqiy musulmon boshqalarni haqorat qilmaydigan, odobsiz so'zlarni ishlatmaydigan va fahsh gaplardan uzoq turadigan insondir.",
            "example": "Farzandning tilida so'kinish paydo bo'lishining birinchi raqamli sababi bu ota-onaning o'zi yoki oiladagi muhitdir. Oila a'zolari o'zaro muomalada yoki jahli chiqqanda so'kinish ishlatsa, bola ham buni tabiiy holat sifatida qabul qiladi va takrorlaydi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "The severity of vulgar language, keeping composure during anger, curses, and purifying children's speech. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: \"Kishining o'z ota-onasini so'kishi eng katta gunohlardandir.\" Sahobalar taajjublanib: \"Ey Rasululloh, qanday qilib inson o'z ota-onasini so'kishi mumkin?\" deb so'rashganida, u zot (s.a.v): \"Bir kishi boshqa birovning otasini so'kadi, u ham qaytarib buning otasini so'kadi. Birovning onasini so'kadi, u ham qaytarib buning onasini so'kadi\", deb javob berganlar . Ya'ni, ko'chada birov bilan so'kishgan odam, aslida o'z ota-onasiga la'nat va so'kish olib kelgan hisoblanadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Muoz ibn Jabal (r.a) Rasulullohdan (s.a.v) jannatga kiritadigan va do'zaxdan uzoqlashtiradigan amal haqida so'raganlarida, ko'p amallarni sanab, oxirida tillarini ko'rsatib: \"Mana shuni tiygin!\" deb buyurdilar. Muoz (r.a): \"Ey Allohning Rasuli, biz gapirgan gaplarimiz uchun ham iqob (jazo) qilinamizmi?\" deganlarida, Rasululloh (s.a.v): \"Odamlarni do'zaxga yuz tuban qilib tashlaydigan narsa faqatgina ularning tillarining hosili-ku!\" deb ogohlantirdilar . Demak, farzand tarbiyasidagi eng muhim nuqta uning tilini pok tutishdir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Guarding the Tongue from Foul Speech",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Guarding the Tongue from Foul Speech'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Защита языка от сквернословия",
        "summary": "Тяжесть сквернословия в Исламе, самообладание в гневе, недопустимость проклятий и сохранение чистоты речи.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Защита языка от сквернословия",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Mo'min-musulmon kishi so'kong'ich, la'natlovchi va tili yomon inson bo'lmasligi kerak. Hadislarda kelishicha, haqiqiy musulmon boshqalarni haqorat qilmaydigan, odobsiz so'zlarni ishlatmaydigan va fahsh gaplardan uzoq turadigan insondir.",
            "example": "Farzandning tilida so'kinish paydo bo'lishining birinchi raqamli sababi bu ota-onaning o'zi yoki oiladagi muhitdir. Oila a'zolari o'zaro muomalada yoki jahli chiqqanda so'kinish ishlatsa, bola ham buni tabiiy holat sifatida qabul qiladi va takrorlaydi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Тяжесть сквернословия в Исламе, самообладание в гневе, недопустимость проклятий и сохранение чистоты речи. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: \"Kishining o'z ota-onasini so'kishi eng katta gunohlardandir.\" Sahobalar taajjublanib: \"Ey Rasululloh, qanday qilib inson o'z ota-onasini so'kishi mumkin?\" deb so'rashganida, u zot (s.a.v): \"Bir kishi boshqa birovning otasini so'kadi, u ham qaytarib buning otasini so'kadi. Birovning onasini so'kadi, u ham qaytarib buning onasini so'kadi\", deb javob berganlar . Ya'ni, ko'chada birov bilan so'kishgan odam, aslida o'z ota-onasiga la'nat va so'kish olib kelgan hisoblanadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Muoz ibn Jabal (r.a) Rasulullohdan (s.a.v) jannatga kiritadigan va do'zaxdan uzoqlashtiradigan amal haqida so'raganlarida, ko'p amallarni sanab, oxirida tillarini ko'rsatib: \"Mana shuni tiygin!\" deb buyurdilar. Muoz (r.a): \"Ey Allohning Rasuli, biz gapirgan gaplarimiz uchun ham iqob (jazo) qilinamizmi?\" deganlarida, Rasululloh (s.a.v): \"Odamlarni do'zaxga yuz tuban qilib tashlaydigan narsa faqatgina ularning tillarining hosili-ku!\" deb ogohlantirdilar . Demak, farzand tarbiyasidagi eng muhim nuqta uning tilini pok tutishdir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Защита языка от сквернословия",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Защита языка от сквернословия»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "Ko'r-ko'rona taqlid",
    "slug": "dars-9-kor-korona-taqlid",
    "summary": "Boshqa xalqlarning yutuqlarini o'rganishda ikkita narsani aniq farqlash kerak: ilm-fan va urf-odat (turmush tarzi).",
    "order": 9,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": false,
    "videoId": "",
    "videoUrl": "",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Taqlidning Turlari: Ilm-Fan va Urf-Odat",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Boshqa xalqlarning yutuqlarini o'rganishda ikkita narsani aniq farqlash kerak: ilm-fan va urf-odat (turmush tarzi).",
        "example": "Matematika, tibbiyot, texnologiya, kimyo va fizika kabi aniq fanlar va texnologik yutuqlarni boshqa millatlardan (g'arbdan bo'lsa ham) o'rganish Islomda to'liq ruxsat etilgan va hatto rag'batlantirilgan. Chunki ilm-fan insoniyatning umumiy mulkidir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Payg'ambarimizning (s.a.v) Ogohlantirishlari",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Hadisi sharifda Payg'ambarimiz (s.a.v) qat'iy uqtiradilar: \"Kim o'zini bir qavmga (millatga/toifaga) o'xshatsa, bas, u o'shalardandir\". Ya'ni, kim kiyinishda, turmush tarzida yoki bayramlarda g'ayridinlarga (yoki e'tiqodsiz kishilarga) ko'r-ko'rona taqlid qilsa va ular kabi hayot kechirishga harakat qilsa, qiyomat kunida o'shalar bilan birga tiriladi va bir qatorda turadi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Musulmonning O'ziga Xos Ziyosini Yo'qotishi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Islom mukammal dindir. U insonning barcha hayotiy jabhalarini – kiyinishdan tortib o'zaro muomalagacha bo'lgan qoidalarni o'z ichiga oladi. Agar yoshlar boshqa millatlarning qahramonlariga, artistlariga yoki sportchilariga kiyinishi, yurish-turishi, soch turmaklashigacha taqlid qila boshlasa, unda Islomiy viqor va iymon nuri so'nadi. Bunday taqlid insonning ruhiyatiga va iymoniga to'g'ridan-to'g'ri salbiy ta'sir ko'rsatadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Zamonaviy Musiqa va Media Ta'siri",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Yoshlarning xulqi, tabiati va miyasi asosan musiqa va seriallar (media) orqali yuvilmoqda. Turli bema'ni musiqalar, seriallar va internet orqali kirib kelayotgan madaniyat farzandlarning fikrini zaharlovchi eng kuchli quroldir. Farzand uyda turib, telefon va televizor orqali begona madaniyatning bir qismiga aylanib qolishi ehtimoli juda yuqori. Shuning uchun ota-ona bolaning nimani ko'rayotgani va eshitayotganini qattiq nazorat qilishi kerak.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Ko'r-ko'rona taqlid",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Ko'r-ko'rona taqlid») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Ko'r-ko'rona taqlid",
        "summary": "Boshqa xalqlarning yutuqlarini o'rganishda ikkita narsani aniq farqlash kerak: ilm-fan va urf-odat (turmush tarzi).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Taqlidning Turlari: Ilm-Fan va Urf-Odat",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Boshqa xalqlarning yutuqlarini o'rganishda ikkita narsani aniq farqlash kerak: ilm-fan va urf-odat (turmush tarzi).",
            "example": "Matematika, tibbiyot, texnologiya, kimyo va fizika kabi aniq fanlar va texnologik yutuqlarni boshqa millatlardan (g'arbdan bo'lsa ham) o'rganish Islomda to'liq ruxsat etilgan va hatto rag'batlantirilgan. Chunki ilm-fan insoniyatning umumiy mulkidir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Payg'ambarimizning (s.a.v) Ogohlantirishlari",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Hadisi sharifda Payg'ambarimiz (s.a.v) qat'iy uqtiradilar: \"Kim o'zini bir qavmga (millatga/toifaga) o'xshatsa, bas, u o'shalardandir\". Ya'ni, kim kiyinishda, turmush tarzida yoki bayramlarda g'ayridinlarga (yoki e'tiqodsiz kishilarga) ko'r-ko'rona taqlid qilsa va ular kabi hayot kechirishga harakat qilsa, qiyomat kunida o'shalar bilan birga tiriladi va bir qatorda turadi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Musulmonning O'ziga Xos Ziyosini Yo'qotishi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Islom mukammal dindir. U insonning barcha hayotiy jabhalarini – kiyinishdan tortib o'zaro muomalagacha bo'lgan qoidalarni o'z ichiga oladi. Agar yoshlar boshqa millatlarning qahramonlariga, artistlariga yoki sportchilariga kiyinishi, yurish-turishi, soch turmaklashigacha taqlid qila boshlasa, unda Islomiy viqor va iymon nuri so'nadi. Bunday taqlid insonning ruhiyatiga va iymoniga to'g'ridan-to'g'ri salbiy ta'sir ko'rsatadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Zamonaviy Musiqa va Media Ta'siri",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Yoshlarning xulqi, tabiati va miyasi asosan musiqa va seriallar (media) orqali yuvilmoqda. Turli bema'ni musiqalar, seriallar va internet orqali kirib kelayotgan madaniyat farzandlarning fikrini zaharlovchi eng kuchli quroldir. Farzand uyda turib, telefon va televizor orqali begona madaniyatning bir qismiga aylanib qolishi ehtimoli juda yuqori. Shuning uchun ota-ona bolaning nimani ko'rayotgani va eshitayotganini qattiq nazorat qilishi kerak.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Ko'r-ko'rona taqlid",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Ko'r-ko'rona taqlid») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Mindful Identity vs Blind Imitation",
        "summary": "Distinguishing scientific knowledge from cultural assimilation, gender distinction, and media influence.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Mindful Identity vs Blind Imitation",
            "subtitle": "Real-life Context & Introduction",
            "content": "Boshqa xalqlarning yutuqlarini o'rganishda ikkita narsani aniq farqlash kerak: ilm-fan va urf-odat (turmush tarzi).",
            "example": "Matematika, tibbiyot, texnologiya, kimyo va fizika kabi aniq fanlar va texnologik yutuqlarni boshqa millatlardan (g'arbdan bo'lsa ham) o'rganish Islomda to'liq ruxsat etilgan va hatto rag'batlantirilgan. Chunki ilm-fan insoniyatning umumiy mulkidir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Distinguishing scientific knowledge from cultural assimilation, gender distinction, and media influence. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Islom mukammal dindir. U insonning barcha hayotiy jabhalarini – kiyinishdan tortib o'zaro muomalagacha bo'lgan qoidalarni o'z ichiga oladi. Agar yoshlar boshqa millatlarning qahramonlariga, artistlariga yoki sportchilariga kiyinishi, yurish-turishi, soch turmaklashigacha taqlid qila boshlasa, unda Islomiy viqor va iymon nuri so'nadi. Bunday taqlid insonning ruhiyatiga va iymoniga to'g'ridan-to'g'ri salbiy ta'sir ko'rsatadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Yoshlarning xulqi, tabiati va miyasi asosan musiqa va seriallar (media) orqali yuvilmoqda. Turli bema'ni musiqalar, seriallar va internet orqali kirib kelayotgan madaniyat farzandlarning fikrini zaharlovchi eng kuchli quroldir. Farzand uyda turib, telefon va televizor orqali begona madaniyatning bir qismiga aylanib qolishi ehtimoli juda yuqori. Shuning uchun ota-ona bolaning nimani ko'rayotgani va eshitayotganini qattiq nazorat qilishi kerak.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Mindful Identity vs Blind Imitation",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Mindful Identity vs Blind Imitation'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Осознанная идентичность и слепое подражание",
        "summary": "Различие между научными знаниями и слепым копированием чуждых обычаев, гендерные границы и влияние медиа.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Осознанная идентичность и слепое подражание",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Boshqa xalqlarning yutuqlarini o'rganishda ikkita narsani aniq farqlash kerak: ilm-fan va urf-odat (turmush tarzi).",
            "example": "Matematika, tibbiyot, texnologiya, kimyo va fizika kabi aniq fanlar va texnologik yutuqlarni boshqa millatlardan (g'arbdan bo'lsa ham) o'rganish Islomda to'liq ruxsat etilgan va hatto rag'batlantirilgan. Chunki ilm-fan insoniyatning umumiy mulkidir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Различие между научными знаниями и слепым копированием чуждых обычаев, гендерные границы и влияние медиа. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Islom mukammal dindir. U insonning barcha hayotiy jabhalarini – kiyinishdan tortib o'zaro muomalagacha bo'lgan qoidalarni o'z ichiga oladi. Agar yoshlar boshqa millatlarning qahramonlariga, artistlariga yoki sportchilariga kiyinishi, yurish-turishi, soch turmaklashigacha taqlid qila boshlasa, unda Islomiy viqor va iymon nuri so'nadi. Bunday taqlid insonning ruhiyatiga va iymoniga to'g'ridan-to'g'ri salbiy ta'sir ko'rsatadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Yoshlarning xulqi, tabiati va miyasi asosan musiqa va seriallar (media) orqali yuvilmoqda. Turli bema'ni musiqalar, seriallar va internet orqali kirib kelayotgan madaniyat farzandlarning fikrini zaharlovchi eng kuchli quroldir. Farzand uyda turib, telefon va televizor orqali begona madaniyatning bir qismiga aylanib qolishi ehtimoli juda yuqori. Shuning uchun ota-ona bolaning nimani ko'rayotgani va eshitayotganini qattiq nazorat qilishi kerak.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Осознанная идентичность и слепое подражание",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Осознанная идентичность и слепое подражание»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "tarbiya-asoslari-va-boshlangich-himoya",
    "title": "Televizor Haqida",
    "slug": "dars-10-televizor-haqida",
    "summary": "Televizor va zamonaviy ekranlar bugungi kunda har bir xonadonning to'riga kirib olgan «tarbiyachi»ga aylandi. U farzandning ongi, ruhiyati va dunyoqarashini ota-onadan ko'ra ko'proq shakllantirmoqda.",
    "order": 10,
    "estimatedMinutes": 5,
    "ageGroup": "3-5",
    "xpReward": 15,
    "isFree": false,
    "videoId": "0q8cJ5Ybv80",
    "videoUrl": "https://www.youtube.com/watch?v=0q8cJ5Ybv80",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Televizor va Ekranlarning Ruhiyatga Ta'siri",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Televizor va zamonaviy ekranlar bugungi kunda har bir xonadonning to'riga kirib olgan «tarbiyachi»ga aylandi. U farzandning ongi, ruhiyati va dunyoqarashini ota-onadan ko'ra ko'proq shakllantirmoqda.",
        "example": "Uzoq vaqt ekran qarshisida o'tirish bolaning aqliy faoliyatini to'xtatib qo'yadi, uni mustaqil fikrlashdan mahrum qilib, tayyor qoliplarni passiv qabul qiluvchi shaxsga aylantiradi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Ko'zni Haromdan Saqlash Majburiyati",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Qur'oni Karimda Alloh taolo mo'minlarga buyuradi: «(Ey Muhammad!) Mo'minlarga ayting, ko'zlarini (nomahramlardan) quyi tutsinlar va avratlarini saqlasinlar!» (Nur surasi, 30-oyat). Televideniye va internet orqali uzatilayotgan ko'plab ko'rsatuvlar, kliplar va kinolarda ochiq-sochiqlik, nomahramlik chegaralari buzilishi tabiiy holat qilib ko'rsatiladi. Bu esa yosh bola qalbida ibo va hayo pardasini yirtadi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Qimmatli Vaqt Isrofi va G'aflat",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Payg'ambarimiz (s.a.v) hadislarida ogohlantiradilar: «Ikki ne'mat borki, ko'pchilik odamlar ulardan mahrumdirlar (aldanib qoladilar): sihat-salomatlik va bo'sh vaqt». Soatlab bekorchi ko'rsatuvlar, seriallar tomosha qilish insonning dunyosi va oxirati uchun eng qimmatli sarmoyasi bo'lgan vaqtni sovuradi. Natijada bola Qur'on o'rganish, foydali ilm olish va ibodat qilishdan g'ofil qoladi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Muqobil Tarbiya va Nazorat Qoidalari",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Ota-ona televizor va telefonni bolaga «tinch o'tirsin» deb berib qo'yishi eng katta xatodir. Ekran vaqtiga qat'iy me'yor qo'yilishi shart. Faqat man qilish kifoya qilmaydi, bolaga foydali muqobil mashg'ulotlar taklif qilish kerak: birgalikda kitob o'qish, suhbatlashish, sportga jalb qilish va foydali ilmiy-ma'rifiy dasturlarni saralab ko'rsatish lozim.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Televizor Haqida",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Televizor Haqida») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Televizor Haqida",
        "summary": "Televizor va zamonaviy ekranlar bugungi kunda har bir xonadonning to'riga kirib olgan «tarbiyachi»ga aylandi. U farzandning ongi, ruhiyati va dunyoqarashini ota-onadan ko'ra ko'proq shakllantirmoqda.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Televizor va Ekranlarning Ruhiyatga Ta'siri",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Televizor va zamonaviy ekranlar bugungi kunda har bir xonadonning to'riga kirib olgan «tarbiyachi»ga aylandi. U farzandning ongi, ruhiyati va dunyoqarashini ota-onadan ko'ra ko'proq shakllantirmoqda.",
            "example": "Uzoq vaqt ekran qarshisida o'tirish bolaning aqliy faoliyatini to'xtatib qo'yadi, uni mustaqil fikrlashdan mahrum qilib, tayyor qoliplarni passiv qabul qiluvchi shaxsga aylantiradi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Ko'zni Haromdan Saqlash Majburiyati",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Qur'oni Karimda Alloh taolo mo'minlarga buyuradi: «(Ey Muhammad!) Mo'minlarga ayting, ko'zlarini (nomahramlardan) quyi tutsinlar va avratlarini saqlasinlar!» (Nur surasi, 30-oyat). Televideniye va internet orqali uzatilayotgan ko'plab ko'rsatuvlar, kliplar va kinolarda ochiq-sochiqlik, nomahramlik chegaralari buzilishi tabiiy holat qilib ko'rsatiladi. Bu esa yosh bola qalbida ibo va hayo pardasini yirtadi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Qimmatli Vaqt Isrofi va G'aflat",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Payg'ambarimiz (s.a.v) hadislarida ogohlantiradilar: «Ikki ne'mat borki, ko'pchilik odamlar ulardan mahrumdirlar (aldanib qoladilar): sihat-salomatlik va bo'sh vaqt». Soatlab bekorchi ko'rsatuvlar, seriallar tomosha qilish insonning dunyosi va oxirati uchun eng qimmatli sarmoyasi bo'lgan vaqtni sovuradi. Natijada bola Qur'on o'rganish, foydali ilm olish va ibodat qilishdan g'ofil qoladi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Muqobil Tarbiya va Nazorat Qoidalari",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Ota-ona televizor va telefonni bolaga «tinch o'tirsin» deb berib qo'yishi eng katta xatodir. Ekran vaqtiga qat'iy me'yor qo'yilishi shart. Faqat man qilish kifoya qilmaydi, bolaga foydali muqobil mashg'ulotlar taklif qilish kerak: birgalikda kitob o'qish, suhbatlashish, sportga jalb qilish va foydali ilmiy-ma'rifiy dasturlarni saralab ko'rsatish lozim.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Televizor Haqida",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Televizor Haqida») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Screen Time and Media Moderation",
        "summary": "Mental impact of screens, lowering the gaze, protecting valuable time, immoral shows, and healthy alternatives.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Screen Time and Media Moderation",
            "subtitle": "Real-life Context & Introduction",
            "content": "Televizor va zamonaviy ekranlar bugungi kunda har bir xonadonning to'riga kirib olgan «tarbiyachi»ga aylandi. U farzandning ongi, ruhiyati va dunyoqarashini ota-onadan ko'ra ko'proq shakllantirmoqda.",
            "example": "Uzoq vaqt ekran qarshisida o'tirish bolaning aqliy faoliyatini to'xtatib qo'yadi, uni mustaqil fikrlashdan mahrum qilib, tayyor qoliplarni passiv qabul qiluvchi shaxsga aylantiradi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Mental impact of screens, lowering the gaze, protecting valuable time, immoral shows, and healthy alternatives. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Payg'ambarimiz (s.a.v) hadislarida ogohlantiradilar: «Ikki ne'mat borki, ko'pchilik odamlar ulardan mahrumdirlar (aldanib qoladilar): sihat-salomatlik va bo'sh vaqt». Soatlab bekorchi ko'rsatuvlar, seriallar tomosha qilish insonning dunyosi va oxirati uchun eng qimmatli sarmoyasi bo'lgan vaqtni sovuradi. Natijada bola Qur'on o'rganish, foydali ilm olish va ibodat qilishdan g'ofil qoladi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Ota-ona televizor va telefonni bolaga «tinch o'tirsin» deb berib qo'yishi eng katta xatodir. Ekran vaqtiga qat'iy me'yor qo'yilishi shart. Faqat man qilish kifoya qilmaydi, bolaga foydali muqobil mashg'ulotlar taklif qilish kerak: birgalikda kitob o'qish, suhbatlashish, sportga jalb qilish va foydali ilmiy-ma'rifiy dasturlarni saralab ko'rsatish lozim.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Screen Time and Media Moderation",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Screen Time and Media Moderation'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Экранное время и влияние телевидения",
        "summary": "Влияние экранов на психику, защита взора от запретного, ценность времени и созидательные альтернативы гаджетам.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Экранное время и влияние телевидения",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Televizor va zamonaviy ekranlar bugungi kunda har bir xonadonning to'riga kirib olgan «tarbiyachi»ga aylandi. U farzandning ongi, ruhiyati va dunyoqarashini ota-onadan ko'ra ko'proq shakllantirmoqda.",
            "example": "Uzoq vaqt ekran qarshisida o'tirish bolaning aqliy faoliyatini to'xtatib qo'yadi, uni mustaqil fikrlashdan mahrum qilib, tayyor qoliplarni passiv qabul qiluvchi shaxsga aylantiradi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Влияние экранов на психику, защита взора от запретного, ценность времени и созидательные альтернативы гаджетам. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Payg'ambarimiz (s.a.v) hadislarida ogohlantiradilar: «Ikki ne'mat borki, ko'pchilik odamlar ulardan mahrumdirlar (aldanib qoladilar): sihat-salomatlik va bo'sh vaqt». Soatlab bekorchi ko'rsatuvlar, seriallar tomosha qilish insonning dunyosi va oxirati uchun eng qimmatli sarmoyasi bo'lgan vaqtni sovuradi. Natijada bola Qur'on o'rganish, foydali ilm olish va ibodat qilishdan g'ofil qoladi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Ota-ona televizor va telefonni bolaga «tinch o'tirsin» deb berib qo'yishi eng katta xatodir. Ekran vaqtiga qat'iy me'yor qo'yilishi shart. Faqat man qilish kifoya qilmaydi, bolaga foydali muqobil mashg'ulotlar taklif qilish kerak: birgalikda kitob o'qish, suhbatlashish, sportga jalb qilish va foydali ilmiy-ma'rifiy dasturlarni saralab ko'rsatish lozim.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Экранное время и влияние телевидения",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Экранное время и влияние телевидения»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": false
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Ibrat Ko'rsatishlik",
    "slug": "dars-11-ibrat-korsatishlik",
    "summary": "Tarbiyada eng ta'sirli va samarali qurol bu – ota-onaning o'z amali bilan o'rnak bo'lishidir. Arablarda «Lisonul-hol afsah min lisonil-maqol» degan hikmat bor, ya'ni hol tili (amaliy ibrat) so'z tilidan ko'ra fasohatliroq va ta'sirliroqdir.",
    "order": 11,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": true,
    "videoId": "kSmBEqUt8H0",
    "videoUrl": "https://www.youtube.com/watch?v=kSmBEqUt8H0",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "So'zdan Ko'ra Amalning Kuchliligi («Lisonul-hol»)",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Tarbiyada eng ta'sirli va samarali qurol bu – ota-onaning o'z amali bilan o'rnak bo'lishidir. Arablarda «Lisonul-hol afsah min lisonil-maqol» degan hikmat bor, ya'ni hol tili (amaliy ibrat) so'z tilidan ko'ra fasohatliroq va ta'sirliroqdir.",
        "example": "Bola eshitgan narsasiga emas, balki ko'rgan narsasiga ergashadi. Ming bor «yolg'on gapirma» degan nasihatdan ko'ra, ota-onaning bir marta rost gapirib ibrat bo'lishi kuchliroqdir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Payg'ambarimiz (s.a.v) – Eng Go'zal Namuna",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Alloh taolo Qur'oni Karimda marhamat qiladi: «Haqiqatan, sizlar uchun – Allohdan va oxirat kunidan umidvor bo'lgan hamda Allohni ko'p zikr qilgan kishilar uchun Allohning Rasuli eng go'zal namunadir» (Ahzob surasi, 21-oyat). Rasululloh (s.a.v) hech qachon o'zlari qilmagan ishni boshqalarga buyurmaganlar. Ota-onalar ham oilada Payg'ambarimizning (s.a.v) sunnatlariga amal qilishda farzandlariga jonli namuna bo'lishlari lozim.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Ota-onaning Ikkilamchi Standarti (Ikkiyuzlamachilik Xavfi)",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Alloh taolo qat'iy ogohlantiradi: «Ey iymon keltirganlar! Nega o'zingiz qilmaydigan ishni gapirasiz? O'zingiz qilmaydigan ishni gapirishingiz Alloh nazdida qattiq g'azabni keltiradigan ishdir» (Saf surasi, 2-3-oyatlar). Agar ota uyda o'zi namoz o'qimay turib bolani namozga buyursa, o'zi sigaret chekib bolani chekishdan qaytarsa yoki birov telefon qilganda bolaga «uyda yo'q deb ayt» desa, bolaning ko'z o'ngida tarbiya poydevori qulaydi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Salafi Solihlar Hayotidan Amaliy Namunalar",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Tarixdagi barcha ulug' allomalar va avliyolarning orqasida taqvoli, haromdan saqlangan va amaliy namuna bo'lgan ota-onalar turgan. Imom Buxoriyning otalari vafot etayotganida: «Molimga bir dirham ham shubhali yoki harom mol aralashmagan», deb ketgan edilar. Farzandning taqvoli va solih bo'lishini istagan kishi, avvalo o'zining taqvosi, ibodati va xulqini isloh qilishi zarur.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Ibrat Ko'rsatishlik",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Ibrat Ko'rsatishlik») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Ibrat Ko'rsatishlik",
        "summary": "Tarbiyada eng ta'sirli va samarali qurol bu – ota-onaning o'z amali bilan o'rnak bo'lishidir. Arablarda «Lisonul-hol afsah min lisonil-maqol» degan hikmat bor, ya'ni hol tili (amaliy ibrat) so'z tilidan ko'ra fasohatliroq va ta'sirliroqdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "So'zdan Ko'ra Amalning Kuchliligi («Lisonul-hol»)",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Tarbiyada eng ta'sirli va samarali qurol bu – ota-onaning o'z amali bilan o'rnak bo'lishidir. Arablarda «Lisonul-hol afsah min lisonil-maqol» degan hikmat bor, ya'ni hol tili (amaliy ibrat) so'z tilidan ko'ra fasohatliroq va ta'sirliroqdir.",
            "example": "Bola eshitgan narsasiga emas, balki ko'rgan narsasiga ergashadi. Ming bor «yolg'on gapirma» degan nasihatdan ko'ra, ota-onaning bir marta rost gapirib ibrat bo'lishi kuchliroqdir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Payg'ambarimiz (s.a.v) – Eng Go'zal Namuna",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Alloh taolo Qur'oni Karimda marhamat qiladi: «Haqiqatan, sizlar uchun – Allohdan va oxirat kunidan umidvor bo'lgan hamda Allohni ko'p zikr qilgan kishilar uchun Allohning Rasuli eng go'zal namunadir» (Ahzob surasi, 21-oyat). Rasululloh (s.a.v) hech qachon o'zlari qilmagan ishni boshqalarga buyurmaganlar. Ota-onalar ham oilada Payg'ambarimizning (s.a.v) sunnatlariga amal qilishda farzandlariga jonli namuna bo'lishlari lozim.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Ota-onaning Ikkilamchi Standarti (Ikkiyuzlamachilik Xavfi)",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Alloh taolo qat'iy ogohlantiradi: «Ey iymon keltirganlar! Nega o'zingiz qilmaydigan ishni gapirasiz? O'zingiz qilmaydigan ishni gapirishingiz Alloh nazdida qattiq g'azabni keltiradigan ishdir» (Saf surasi, 2-3-oyatlar). Agar ota uyda o'zi namoz o'qimay turib bolani namozga buyursa, o'zi sigaret chekib bolani chekishdan qaytarsa yoki birov telefon qilganda bolaga «uyda yo'q deb ayt» desa, bolaning ko'z o'ngida tarbiya poydevori qulaydi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Salafi Solihlar Hayotidan Amaliy Namunalar",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Tarixdagi barcha ulug' allomalar va avliyolarning orqasida taqvoli, haromdan saqlangan va amaliy namuna bo'lgan ota-onalar turgan. Imom Buxoriyning otalari vafot etayotganida: «Molimga bir dirham ham shubhali yoki harom mol aralashmagan», deb ketgan edilar. Farzandning taqvoli va solih bo'lishini istagan kishi, avvalo o'zining taqvosi, ibodati va xulqini isloh qilishi zarur.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Ibrat Ko'rsatishlik",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Ibrat Ko'rsatishlik») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Leading by Personal Example (Ibrat)",
        "summary": "Actions speak louder than words, the Prophet's example, avoiding double standards, and healthy home atmosphere.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Leading by Personal Example (Ibrat)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Tarbiyada eng ta'sirli va samarali qurol bu – ota-onaning o'z amali bilan o'rnak bo'lishidir. Arablarda «Lisonul-hol afsah min lisonil-maqol» degan hikmat bor, ya'ni hol tili (amaliy ibrat) so'z tilidan ko'ra fasohatliroq va ta'sirliroqdir.",
            "example": "Bola eshitgan narsasiga emas, balki ko'rgan narsasiga ergashadi. Ming bor «yolg'on gapirma» degan nasihatdan ko'ra, ota-onaning bir marta rost gapirib ibrat bo'lishi kuchliroqdir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Actions speak louder than words, the Prophet's example, avoiding double standards, and healthy home atmosphere. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Alloh taolo qat'iy ogohlantiradi: «Ey iymon keltirganlar! Nega o'zingiz qilmaydigan ishni gapirasiz? O'zingiz qilmaydigan ishni gapirishingiz Alloh nazdida qattiq g'azabni keltiradigan ishdir» (Saf surasi, 2-3-oyatlar). Agar ota uyda o'zi namoz o'qimay turib bolani namozga buyursa, o'zi sigaret chekib bolani chekishdan qaytarsa yoki birov telefon qilganda bolaga «uyda yo'q deb ayt» desa, bolaning ko'z o'ngida tarbiya poydevori qulaydi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Tarixdagi barcha ulug' allomalar va avliyolarning orqasida taqvoli, haromdan saqlangan va amaliy namuna bo'lgan ota-onalar turgan. Imom Buxoriyning otalari vafot etayotganida: «Molimga bir dirham ham shubhali yoki harom mol aralashmagan», deb ketgan edilar. Farzandning taqvoli va solih bo'lishini istagan kishi, avvalo o'zining taqvosi, ibodati va xulqini isloh qilishi zarur.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Leading by Personal Example (Ibrat)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Leading by Personal Example (Ibrat)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Сила личного примера (Ибрат)",
        "summary": "Сила примера важнее слов, пророческий идеал, опасность родительского двуличия и здоровая атмосфера в доме.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Сила личного примера (Ибрат)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Tarbiyada eng ta'sirli va samarali qurol bu – ota-onaning o'z amali bilan o'rnak bo'lishidir. Arablarda «Lisonul-hol afsah min lisonil-maqol» degan hikmat bor, ya'ni hol tili (amaliy ibrat) so'z tilidan ko'ra fasohatliroq va ta'sirliroqdir.",
            "example": "Bola eshitgan narsasiga emas, balki ko'rgan narsasiga ergashadi. Ming bor «yolg'on gapirma» degan nasihatdan ko'ra, ota-onaning bir marta rost gapirib ibrat bo'lishi kuchliroqdir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Сила примера важнее слов, пророческий идеал, опасность родительского двуличия и здоровая атмосфера в доме. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Alloh taolo qat'iy ogohlantiradi: «Ey iymon keltirganlar! Nega o'zingiz qilmaydigan ishni gapirasiz? O'zingiz qilmaydigan ishni gapirishingiz Alloh nazdida qattiq g'azabni keltiradigan ishdir» (Saf surasi, 2-3-oyatlar). Agar ota uyda o'zi namoz o'qimay turib bolani namozga buyursa, o'zi sigaret chekib bolani chekishdan qaytarsa yoki birov telefon qilganda bolaga «uyda yo'q deb ayt» desa, bolaning ko'z o'ngida tarbiya poydevori qulaydi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Tarixdagi barcha ulug' allomalar va avliyolarning orqasida taqvoli, haromdan saqlangan va amaliy namuna bo'lgan ota-onalar turgan. Imom Buxoriyning otalari vafot etayotganida: «Molimga bir dirham ham shubhali yoki harom mol aralashmagan», deb ketgan edilar. Farzandning taqvoli va solih bo'lishini istagan kishi, avvalo o'zining taqvosi, ibodati va xulqini isloh qilishi zarur.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Сила личного примера (Ибрат)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Сила личного примера (Ибрат)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Musiqa",
    "slug": "dars-12-musiqa",
    "summary": "Musiqa inson ruhiyatini mast qiluvchi, uni his-tuyg'ular va xayolot botqog'iga yetaklovchi vositadir. Abdulloh ibn Mas'ud (r.a) aytadilar: «Suv ko'katni o'stirganidek, musiqa qalbda munofiqlikni o'stiradi».",
    "order": 12,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "2qevavpYMrU",
    "videoUrl": "https://www.youtube.com/watch?v=2qevavpYMrU",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Musiqaning Qalb va Ruhga Salbiy Ta'siri",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Musiqa inson ruhiyatini mast qiluvchi, uni his-tuyg'ular va xayolot botqog'iga yetaklovchi vositadir. Abdulloh ibn Mas'ud (r.a) aytadilar: «Suv ko'katni o'stirganidek, musiqa qalbda munofiqlikni o'stiradi».",
        "example": "Musiqaga odatlangan bola asta-sekin jiddiy, mas'uliyatli va aqliy mehnattalab ishlardan qochadigan, kayfiyatga qarab yashaydigan bo'lib qoladi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Qur'on va Musiqaning Bir Qalbda Jamlanmasligi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Ulamolar aytadilar: «Rahmonning kalomi (Qur'on) bilan shaytonning nag'masi (musiqa) bir qalbda aslo jamlanmaydi». Qalb musiqa bilan to'lsa, Qur'on tinglashdan va uni yod olishdan lazzat ololmay qoladi. Farzandlarining Qur'on hofizi, olim va iymonli bo'lishini xohlagan ota-onalar uyda musiqa sadolarini to'xtatib, o'rniga Qur'on tilovatlarini eshittirishlari kerak.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Zamonaviy Musiqa va Undagi Fahsh Tashviqoti",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Bugungi kundagi qo'shiqlar matniga e'tibor berilsa, ularning aksariyati shahar behayoligi, nomahramlik, muhabbat niqobi ostidagi zino, ichkilik va isyonga chorlovchi so'zlardan iborat. Bola yoshligidan bu qo'shiqlarni eshitib ulg'aysa, uning ongosti qatlamlariga gunoh amallar «chiroyli va zamonaviy» hayot tarzi sifatida singib ketadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Farzandga Go'zal Ovozli Qur'on va Foydali Nasihatlarni Singdirish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Inson tabiati go'zal ohangga moyil qilib yaratilgan. Islom bu moyillikni taqiqlab tashlamaydi, balki to'g'ri o'zanga yo'naltiradi: Qur'onni go'zal ovoz bilan o'qish (tartil), ibratli she'rlar va foydali ma'ruzalarni eshitish bunga eng to'g'ri muqobildir. Uyda tongda va kechki paytlarda Qur'oni Karim ovozi yangrab tursa, xonadondan shaytonlar qochadi, farishta va baraka nozil bo'ladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Musiqa",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Musiqa») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Musiqa",
        "summary": "Musiqa inson ruhiyatini mast qiluvchi, uni his-tuyg'ular va xayolot botqog'iga yetaklovchi vositadir. Abdulloh ibn Mas'ud (r.a) aytadilar: «Suv ko'katni o'stirganidek, musiqa qalbda munofiqlikni o'stiradi».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Musiqaning Qalb va Ruhga Salbiy Ta'siri",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Musiqa inson ruhiyatini mast qiluvchi, uni his-tuyg'ular va xayolot botqog'iga yetaklovchi vositadir. Abdulloh ibn Mas'ud (r.a) aytadilar: «Suv ko'katni o'stirganidek, musiqa qalbda munofiqlikni o'stiradi».",
            "example": "Musiqaga odatlangan bola asta-sekin jiddiy, mas'uliyatli va aqliy mehnattalab ishlardan qochadigan, kayfiyatga qarab yashaydigan bo'lib qoladi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Qur'on va Musiqaning Bir Qalbda Jamlanmasligi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Ulamolar aytadilar: «Rahmonning kalomi (Qur'on) bilan shaytonning nag'masi (musiqa) bir qalbda aslo jamlanmaydi». Qalb musiqa bilan to'lsa, Qur'on tinglashdan va uni yod olishdan lazzat ololmay qoladi. Farzandlarining Qur'on hofizi, olim va iymonli bo'lishini xohlagan ota-onalar uyda musiqa sadolarini to'xtatib, o'rniga Qur'on tilovatlarini eshittirishlari kerak.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Zamonaviy Musiqa va Undagi Fahsh Tashviqoti",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Bugungi kundagi qo'shiqlar matniga e'tibor berilsa, ularning aksariyati shahar behayoligi, nomahramlik, muhabbat niqobi ostidagi zino, ichkilik va isyonga chorlovchi so'zlardan iborat. Bola yoshligidan bu qo'shiqlarni eshitib ulg'aysa, uning ongosti qatlamlariga gunoh amallar «chiroyli va zamonaviy» hayot tarzi sifatida singib ketadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Farzandga Go'zal Ovozli Qur'on va Foydali Nasihatlarni Singdirish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Inson tabiati go'zal ohangga moyil qilib yaratilgan. Islom bu moyillikni taqiqlab tashlamaydi, balki to'g'ri o'zanga yo'naltiradi: Qur'onni go'zal ovoz bilan o'qish (tartil), ibratli she'rlar va foydali ma'ruzalarni eshitish bunga eng to'g'ri muqobildir. Uyda tongda va kechki paytlarda Qur'oni Karim ovozi yangrab tursa, xonadondan shaytonlar qochadi, farishta va baraka nozil bo'ladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Musiqa",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Musiqa») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Music, Soul & Spiritual Awareness",
        "summary": "Negative impacts of vulgar music, replacing songs with Quran recitation, nasheeds, and protecting pure fitrah.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Music, Soul & Spiritual Awareness",
            "subtitle": "Real-life Context & Introduction",
            "content": "Musiqa inson ruhiyatini mast qiluvchi, uni his-tuyg'ular va xayolot botqog'iga yetaklovchi vositadir. Abdulloh ibn Mas'ud (r.a) aytadilar: «Suv ko'katni o'stirganidek, musiqa qalbda munofiqlikni o'stiradi».",
            "example": "Musiqaga odatlangan bola asta-sekin jiddiy, mas'uliyatli va aqliy mehnattalab ishlardan qochadigan, kayfiyatga qarab yashaydigan bo'lib qoladi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Negative impacts of vulgar music, replacing songs with Quran recitation, nasheeds, and protecting pure fitrah. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Bugungi kundagi qo'shiqlar matniga e'tibor berilsa, ularning aksariyati shahar behayoligi, nomahramlik, muhabbat niqobi ostidagi zino, ichkilik va isyonga chorlovchi so'zlardan iborat. Bola yoshligidan bu qo'shiqlarni eshitib ulg'aysa, uning ongosti qatlamlariga gunoh amallar «chiroyli va zamonaviy» hayot tarzi sifatida singib ketadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Inson tabiati go'zal ohangga moyil qilib yaratilgan. Islom bu moyillikni taqiqlab tashlamaydi, balki to'g'ri o'zanga yo'naltiradi: Qur'onni go'zal ovoz bilan o'qish (tartil), ibratli she'rlar va foydali ma'ruzalarni eshitish bunga eng to'g'ri muqobildir. Uyda tongda va kechki paytlarda Qur'oni Karim ovozi yangrab tursa, xonadondan shaytonlar qochadi, farishta va baraka nozil bo'ladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Music, Soul & Spiritual Awareness",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Music, Soul & Spiritual Awareness'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Музыка, воздействие на сердце и духовность",
        "summary": "Влияние пустой музыки на духовное состояние, замена Кораном и полезными знаниями, защита детской души.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Музыка, воздействие на сердце и духовность",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Musiqa inson ruhiyatini mast qiluvchi, uni his-tuyg'ular va xayolot botqog'iga yetaklovchi vositadir. Abdulloh ibn Mas'ud (r.a) aytadilar: «Suv ko'katni o'stirganidek, musiqa qalbda munofiqlikni o'stiradi».",
            "example": "Musiqaga odatlangan bola asta-sekin jiddiy, mas'uliyatli va aqliy mehnattalab ishlardan qochadigan, kayfiyatga qarab yashaydigan bo'lib qoladi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Влияние пустой музыки на духовное состояние, замена Кораном и полезными знаниями, защита детской души. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Bugungi kundagi qo'shiqlar matniga e'tibor berilsa, ularning aksariyati shahar behayoligi, nomahramlik, muhabbat niqobi ostidagi zino, ichkilik va isyonga chorlovchi so'zlardan iborat. Bola yoshligidan bu qo'shiqlarni eshitib ulg'aysa, uning ongosti qatlamlariga gunoh amallar «chiroyli va zamonaviy» hayot tarzi sifatida singib ketadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Inson tabiati go'zal ohangga moyil qilib yaratilgan. Islom bu moyillikni taqiqlab tashlamaydi, balki to'g'ri o'zanga yo'naltiradi: Qur'onni go'zal ovoz bilan o'qish (tartil), ibratli she'rlar va foydali ma'ruzalarni eshitish bunga eng to'g'ri muqobildir. Uyda tongda va kechki paytlarda Qur'oni Karim ovozi yangrab tursa, xonadondan shaytonlar qochadi, farishta va baraka nozil bo'ladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Музыка, воздействие на сердце и духовность",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Музыка, воздействие на сердце и духовность»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Oziq-Ovqat Haqida",
    "slug": "dars-13-oziq-ovqat-haqida",
    "summary": "Farzand tarbiyasi uning qorniga kirayotgan luqmadan boshlanadi. Agar ota-ona bolani halol peshona teri bilan topilgan rizq bilan boqsalar, bolaning tabiati pok, aqli ravshan va itoatkor bo'lib o'sadi.",
    "order": 13,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "G5lyMYdU3BQ",
    "videoUrl": "https://www.youtube.com/watch?v=G5lyMYdU3BQ",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Halol Luqmaning Tarbiyaga va Ijobatga Ta'siri",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Farzand tarbiyasi uning qorniga kirayotgan luqmadan boshlanadi. Agar ota-ona bolani halol peshona teri bilan topilgan rizq bilan boqsalar, bolaning tabiati pok, aqli ravshan va itoatkor bo'lib o'sadi.",
        "example": "Payg'ambarimiz (s.a.v) halol luqma haqida hadisda uzoq safar qilib, sochi to'zigan, qo'lini ko'kka ko'tarib duo qilayotgan kishi haqida aytadilar: «Uning yegani harom, ichgani harom, kiygani harom bo'lsa, uning duosi qanday ijobat bo'lsin?!»",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Harom va Shubhali Luqmaning Qalbni Qoraytirishi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Harom luqma (ribo, pora, o'g'irlik, aldov yo'li bilan topilgan boylik) qonga aylanadi va qalbni toshdek qotiradi. Bunday luqma bilan o'sgan bolada ota-onaga qarshilik, ibodatlardan erinish va gunohlarga moyillik kuchli bo'ladi. Ulamolar aytishgan: «Farzandlaringiz sizga itoatsiz bo'lib qolsa, o'zingiz ularga yedirayotgan luqmangizga qarang». Luqma poklanmas ekan, minglab nasihatlar zoye ketadi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Me'yordan Ortiq Yeyish (Isrof va Qorin Bandasi Bo'lish)ning Zararlari",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Qur'onda Alloh taolo: «Yenglar, ichinglar, lekin isrof qilmanglar! Chunki U isrof qiluvchilarni sevmas», deb marhamat qiladi (A'rof surasi, 31-oyat). Bolani yoshligidan to'ymaslikka, qornini to'ldirib yotishga odatlantirmaslik kerak. Payg'ambarimiz (s.a.v) oshqozonning uchdan birini ovqatga, uchdan birini suvga, uchdan birini havoga qoldirishni tavsiya qilganlar.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Qanoat va Ne'matlarga Shukur Qilish Tuyg'usi",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Bolani ovqat tanlaydigan, ne'matni pisand qilmay tashlab yuboradigan qilib o'stirmaslik lozim. Ovqatni aslo ayblamaslik (Rasululloh s.a.v hech qachon ovqatni ayblamaganlar) o'rgatilishi kerak. Farzandga dunyoda qancha-qancha odamlar bir burda nonga zor ekanini eslatib, qo'ldagi ne'matlarning qadriga yetish va Allohga hamisha shukr qilish tuyg'usini singdirish zarur.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Oziq-Ovqat Haqida",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Oziq-Ovqat Haqida») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Oziq-Ovqat Haqida",
        "summary": "Farzand tarbiyasi uning qorniga kirayotgan luqmadan boshlanadi. Agar ota-ona bolani halol peshona teri bilan topilgan rizq bilan boqsalar, bolaning tabiati pok, aqli ravshan va itoatkor bo'lib o'sadi.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Halol Luqmaning Tarbiyaga va Ijobatga Ta'siri",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Farzand tarbiyasi uning qorniga kirayotgan luqmadan boshlanadi. Agar ota-ona bolani halol peshona teri bilan topilgan rizq bilan boqsalar, bolaning tabiati pok, aqli ravshan va itoatkor bo'lib o'sadi.",
            "example": "Payg'ambarimiz (s.a.v) halol luqma haqida hadisda uzoq safar qilib, sochi to'zigan, qo'lini ko'kka ko'tarib duo qilayotgan kishi haqida aytadilar: «Uning yegani harom, ichgani harom, kiygani harom bo'lsa, uning duosi qanday ijobat bo'lsin?!»",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Harom va Shubhali Luqmaning Qalbni Qoraytirishi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Harom luqma (ribo, pora, o'g'irlik, aldov yo'li bilan topilgan boylik) qonga aylanadi va qalbni toshdek qotiradi. Bunday luqma bilan o'sgan bolada ota-onaga qarshilik, ibodatlardan erinish va gunohlarga moyillik kuchli bo'ladi. Ulamolar aytishgan: «Farzandlaringiz sizga itoatsiz bo'lib qolsa, o'zingiz ularga yedirayotgan luqmangizga qarang». Luqma poklanmas ekan, minglab nasihatlar zoye ketadi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Me'yordan Ortiq Yeyish (Isrof va Qorin Bandasi Bo'lish)ning Zararlari",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Qur'onda Alloh taolo: «Yenglar, ichinglar, lekin isrof qilmanglar! Chunki U isrof qiluvchilarni sevmas», deb marhamat qiladi (A'rof surasi, 31-oyat). Bolani yoshligidan to'ymaslikka, qornini to'ldirib yotishga odatlantirmaslik kerak. Payg'ambarimiz (s.a.v) oshqozonning uchdan birini ovqatga, uchdan birini suvga, uchdan birini havoga qoldirishni tavsiya qilganlar.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Qanoat va Ne'matlarga Shukur Qilish Tuyg'usi",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Bolani ovqat tanlaydigan, ne'matni pisand qilmay tashlab yuboradigan qilib o'stirmaslik lozim. Ovqatni aslo ayblamaslik (Rasululloh s.a.v hech qachon ovqatni ayblamaganlar) o'rgatilishi kerak. Farzandga dunyoda qancha-qancha odamlar bir burda nonga zor ekanini eslatib, qo'ldagi ne'matlarning qadriga yetish va Allohga hamisha shukr qilish tuyg'usini singdirish zarur.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Oziq-Ovqat Haqida",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Oziq-Ovqat Haqida») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Halal Nutrition and Table Manners",
        "summary": "Impact of halal sustenance on character, avoiding overeating, food gratitude, and mindful eating habits.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Halal Nutrition and Table Manners",
            "subtitle": "Real-life Context & Introduction",
            "content": "Farzand tarbiyasi uning qorniga kirayotgan luqmadan boshlanadi. Agar ota-ona bolani halol peshona teri bilan topilgan rizq bilan boqsalar, bolaning tabiati pok, aqli ravshan va itoatkor bo'lib o'sadi.",
            "example": "Payg'ambarimiz (s.a.v) halol luqma haqida hadisda uzoq safar qilib, sochi to'zigan, qo'lini ko'kka ko'tarib duo qilayotgan kishi haqida aytadilar: «Uning yegani harom, ichgani harom, kiygani harom bo'lsa, uning duosi qanday ijobat bo'lsin?!»",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Impact of halal sustenance on character, avoiding overeating, food gratitude, and mindful eating habits. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Qur'onda Alloh taolo: «Yenglar, ichinglar, lekin isrof qilmanglar! Chunki U isrof qiluvchilarni sevmas», deb marhamat qiladi (A'rof surasi, 31-oyat). Bolani yoshligidan to'ymaslikka, qornini to'ldirib yotishga odatlantirmaslik kerak. Payg'ambarimiz (s.a.v) oshqozonning uchdan birini ovqatga, uchdan birini suvga, uchdan birini havoga qoldirishni tavsiya qilganlar.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Bolani ovqat tanlaydigan, ne'matni pisand qilmay tashlab yuboradigan qilib o'stirmaslik lozim. Ovqatni aslo ayblamaslik (Rasululloh s.a.v hech qachon ovqatni ayblamaganlar) o'rgatilishi kerak. Farzandga dunyoda qancha-qancha odamlar bir burda nonga zor ekanini eslatib, qo'ldagi ne'matlarning qadriga yetish va Allohga hamisha shukr qilish tuyg'usini singdirish zarur.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Halal Nutrition and Table Manners",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Halal Nutrition and Table Manners'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Халяльное питание и здоровые привычки",
        "summary": "Влияние халяльного пропитания на характер ребенка, умеренность в еде, благодарность и культура питания.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Халяльное питание и здоровые привычки",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Farzand tarbiyasi uning qorniga kirayotgan luqmadan boshlanadi. Agar ota-ona bolani halol peshona teri bilan topilgan rizq bilan boqsalar, bolaning tabiati pok, aqli ravshan va itoatkor bo'lib o'sadi.",
            "example": "Payg'ambarimiz (s.a.v) halol luqma haqida hadisda uzoq safar qilib, sochi to'zigan, qo'lini ko'kka ko'tarib duo qilayotgan kishi haqida aytadilar: «Uning yegani harom, ichgani harom, kiygani harom bo'lsa, uning duosi qanday ijobat bo'lsin?!»",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Влияние халяльного пропитания на характер ребенка, умеренность в еде, благодарность и культура питания. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Qur'onda Alloh taolo: «Yenglar, ichinglar, lekin isrof qilmanglar! Chunki U isrof qiluvchilarni sevmas», deb marhamat qiladi (A'rof surasi, 31-oyat). Bolani yoshligidan to'ymaslikka, qornini to'ldirib yotishga odatlantirmaslik kerak. Payg'ambarimiz (s.a.v) oshqozonning uchdan birini ovqatga, uchdan birini suvga, uchdan birini havoga qoldirishni tavsiya qilganlar.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Bolani ovqat tanlaydigan, ne'matni pisand qilmay tashlab yuboradigan qilib o'stirmaslik lozim. Ovqatni aslo ayblamaslik (Rasululloh s.a.v hech qachon ovqatni ayblamaganlar) o'rgatilishi kerak. Farzandga dunyoda qancha-qancha odamlar bir burda nonga zor ekanini eslatib, qo'ldagi ne'matlarning qadriga yetish va Allohga hamisha shukr qilish tuyg'usini singdirish zarur.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Халяльное питание и здоровые привычки",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Халяльное питание и здоровые привычки»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Uyqu va Sport",
    "slug": "dars-14-uyqu-va-sport",
    "summary": "Islomda kechaning birinchi qismida (Xufton namozidan so'ng) darhol uxlash va saharda barvaqt uyg'onish sunnatdir. Rasululloh (s.a.v) Xufton namozidan keyin bekorchi suhbatlar qurishni yoqtirmaganlar.",
    "order": 14,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "TWYJWFxkxXQ",
    "videoUrl": "https://www.youtube.com/watch?v=TWYJWFxkxXQ",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Erta Yotib, Erta Turish Odobi (Bomdod Intizomi)",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Islomda kechaning birinchi qismida (Xufton namozidan so'ng) darhol uxlash va saharda barvaqt uyg'onish sunnatdir. Rasululloh (s.a.v) Xufton namozidan keyin bekorchi suhbatlar qurishni yoqtirmaganlar.",
        "example": "Bolani yoshligidan erta uxlashga va Bomdod namoziga uyg'onishga odatlantirish lozim. Bomdoddan keyin uxlash rizq barakasini ketkazadi; ertalabki vaqt baraka va aqliy o'sish vaqtidir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Ko'p Uxloqlik va Tanballikning Qoralanishi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Me'yordan ortiq uxlash tanani lanj, aql-idrokni o'tmas qiladi va insonni beparvo, yalqov shaxsga aylantiradi. Payg'ambarimiz (s.a.v) doimo: «Allohim, Sendan ojizlik va tanballikdan panoh so'rayman», deb duo qilganlar. Farzandning kun tartibi aniq belgilanishi, uning bo'sh vaqti to'liq foydali mashg'ulotlar bilan to'ldirilishi kerak.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Jismoniy Tarbiya va Sportning Islomdagi O'rni",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Payg'ambarimiz (s.a.v) marhamat qiladilar: «Kuchli mo'min (har jabhada) Alloh nazdida kuchsiz mo'mindan yaxshiroq va suyukliroqdir, garchi har ikkisida ham yaxshilik bo'lsa-da». Farzand faqat aqliy emas, balki jismoniy jihatdan ham baquvvat, chaqqon va sog'lom bo'lib o'sishi Islom dinining talablaridan biridir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Uxlaydigan Paytdagi Sunnat Amallar va Duolar",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Uxlayotganda tahorat bilan, o'ng tomonni bosib yotish, yotishdan oldin Ixlos, Falaq, Nos suralarini o'qib kaftlarga puflab butun badanga surtish (Oysha onamiz r.a. rivoyati) sunnatdir. Farzandga yotishdagi («Bismika Allohumma amutu va ahya») va uyg'ongandagi duolarni yodlatish uni tunda shaytoniy vasvasalar va yomon tushlardan asraydi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Uyqu va Sport",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Uyqu va Sport») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Uyqu va Sport",
        "summary": "Islomda kechaning birinchi qismida (Xufton namozidan so'ng) darhol uxlash va saharda barvaqt uyg'onish sunnatdir. Rasululloh (s.a.v) Xufton namozidan keyin bekorchi suhbatlar qurishni yoqtirmaganlar.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Erta Yotib, Erta Turish Odobi (Bomdod Intizomi)",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Islomda kechaning birinchi qismida (Xufton namozidan so'ng) darhol uxlash va saharda barvaqt uyg'onish sunnatdir. Rasululloh (s.a.v) Xufton namozidan keyin bekorchi suhbatlar qurishni yoqtirmaganlar.",
            "example": "Bolani yoshligidan erta uxlashga va Bomdod namoziga uyg'onishga odatlantirish lozim. Bomdoddan keyin uxlash rizq barakasini ketkazadi; ertalabki vaqt baraka va aqliy o'sish vaqtidir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Ko'p Uxloqlik va Tanballikning Qoralanishi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Me'yordan ortiq uxlash tanani lanj, aql-idrokni o'tmas qiladi va insonni beparvo, yalqov shaxsga aylantiradi. Payg'ambarimiz (s.a.v) doimo: «Allohim, Sendan ojizlik va tanballikdan panoh so'rayman», deb duo qilganlar. Farzandning kun tartibi aniq belgilanishi, uning bo'sh vaqti to'liq foydali mashg'ulotlar bilan to'ldirilishi kerak.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Jismoniy Tarbiya va Sportning Islomdagi O'rni",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Payg'ambarimiz (s.a.v) marhamat qiladilar: «Kuchli mo'min (har jabhada) Alloh nazdida kuchsiz mo'mindan yaxshiroq va suyukliroqdir, garchi har ikkisida ham yaxshilik bo'lsa-da». Farzand faqat aqliy emas, balki jismoniy jihatdan ham baquvvat, chaqqon va sog'lom bo'lib o'sishi Islom dinining talablaridan biridir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Uxlaydigan Paytdagi Sunnat Amallar va Duolar",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Uxlayotganda tahorat bilan, o'ng tomonni bosib yotish, yotishdan oldin Ixlos, Falaq, Nos suralarini o'qib kaftlarga puflab butun badanga surtish (Oysha onamiz r.a. rivoyati) sunnatdir. Farzandga yotishdagi («Bismika Allohumma amutu va ahya») va uyg'ongandagi duolarni yodlatish uni tunda shaytoniy vasvasalar va yomon tushlardan asraydi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Uyqu va Sport",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Uyqu va Sport») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Sleep Hygiene and Physical Fitness",
        "summary": "Sunnah sleep routine, early waking, physical fitness, swimming, archery, and reducing sedentary habits.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Sleep Hygiene and Physical Fitness",
            "subtitle": "Real-life Context & Introduction",
            "content": "Islomda kechaning birinchi qismida (Xufton namozidan so'ng) darhol uxlash va saharda barvaqt uyg'onish sunnatdir. Rasululloh (s.a.v) Xufton namozidan keyin bekorchi suhbatlar qurishni yoqtirmaganlar.",
            "example": "Bolani yoshligidan erta uxlashga va Bomdod namoziga uyg'onishga odatlantirish lozim. Bomdoddan keyin uxlash rizq barakasini ketkazadi; ertalabki vaqt baraka va aqliy o'sish vaqtidir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Sunnah sleep routine, early waking, physical fitness, swimming, archery, and reducing sedentary habits. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Payg'ambarimiz (s.a.v) marhamat qiladilar: «Kuchli mo'min (har jabhada) Alloh nazdida kuchsiz mo'mindan yaxshiroq va suyukliroqdir, garchi har ikkisida ham yaxshilik bo'lsa-da». Farzand faqat aqliy emas, balki jismoniy jihatdan ham baquvvat, chaqqon va sog'lom bo'lib o'sishi Islom dinining talablaridan biridir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Uxlayotganda tahorat bilan, o'ng tomonni bosib yotish, yotishdan oldin Ixlos, Falaq, Nos suralarini o'qib kaftlarga puflab butun badanga surtish (Oysha onamiz r.a. rivoyati) sunnatdir. Farzandga yotishdagi («Bismika Allohumma amutu va ahya») va uyg'ongandagi duolarni yodlatish uni tunda shaytoniy vasvasalar va yomon tushlardan asraydi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Sleep Hygiene and Physical Fitness",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Sleep Hygiene and Physical Fitness'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Режим сна и физическое развитие",
        "summary": "Сон по Сунне, ранний подъем, физическая активность, плавание, стрельба и борьба с малоподвижностью.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Режим сна и физическое развитие",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Islomda kechaning birinchi qismida (Xufton namozidan so'ng) darhol uxlash va saharda barvaqt uyg'onish sunnatdir. Rasululloh (s.a.v) Xufton namozidan keyin bekorchi suhbatlar qurishni yoqtirmaganlar.",
            "example": "Bolani yoshligidan erta uxlashga va Bomdod namoziga uyg'onishga odatlantirish lozim. Bomdoddan keyin uxlash rizq barakasini ketkazadi; ertalabki vaqt baraka va aqliy o'sish vaqtidir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Сон по Сунне, ранний подъем, физическая активность, плавание, стрельба и борьба с малоподвижностью. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Payg'ambarimiz (s.a.v) marhamat qiladilar: «Kuchli mo'min (har jabhada) Alloh nazdida kuchsiz mo'mindan yaxshiroq va suyukliroqdir, garchi har ikkisida ham yaxshilik bo'lsa-da». Farzand faqat aqliy emas, balki jismoniy jihatdan ham baquvvat, chaqqon va sog'lom bo'lib o'sishi Islom dinining talablaridan biridir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Uxlayotganda tahorat bilan, o'ng tomonni bosib yotish, yotishdan oldin Ixlos, Falaq, Nos suralarini o'qib kaftlarga puflab butun badanga surtish (Oysha onamiz r.a. rivoyati) sunnatdir. Farzandga yotishdagi («Bismika Allohumma amutu va ahya») va uyg'ongandagi duolarni yodlatish uni tunda shaytoniy vasvasalar va yomon tushlardan asraydi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Режим сна и физическое развитие",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Режим сна и физическое развитие»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Tamaki Chekish Haqida",
    "slug": "dars-15-tamaki-chekish-haqida",
    "summary": "Alloh taolo Qur'oni Karimda ochiq-oydin buyuradi: «O'z qo'llaringiz bilan o'zingizni halokatga tashlamang!» (Baqara surasi, 195-oyat).",
    "order": 15,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "olfiCP2Kq04",
    "videoUrl": "https://www.youtube.com/watch?v=olfiCP2Kq04",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "O'z Sog'lig'iga Qasddan Zarar Yetkazishning Haromligi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Alloh taolo Qur'oni Karimda ochiq-oydin buyuradi: «O'z qo'llaringiz bilan o'zingizni halokatga tashlamang!» (Baqara surasi, 195-oyat).",
        "example": "Tamaki, sigaret, nosvoy va veyp (elektron sigaretalar) inson o'pkasi, yuragi va butun organizmini asta-sekin zaharlovchi o'lim qurolidir. Islomda inson o'z joni va omonat tanasiga zarar yetkazishi mutlaqo harom qilingan.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Mol-Dunyoni Isrof Qilish va Havoga Sovurish",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Alloh taolo marhamat qiladi: «Isrofgarchilikka yo'l qo'ymang! Haqiqatan, isrofgarlar shaytonlarning birodarlaridir» (Isro surasi, 26-27-oyatlar). Sigaret chekuvchi kishi o'zining peshona teri bilan topgan pulini o'z qo'li bilan o'tga yoqib, havoga sovuradi. Bu na dunyoviy va na diniy jihatdan hech qanday foyda keltirmaydigan, ochiq-oydin gunoh isrofdir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Yomon Muhit va Ulfatchilikning Xatari",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Ko'pchilik yoshlar sigaret yoki boshqa zararli narsalarni chekishni ko'cha-ko'ydagi yoki maktab-kollejdagi yomon do'stlariga taqlid qilishdan, «katta odamdek ko'rinish» havasidan boshlaydilar. Payg'ambarimiz (s.a.v) yaxshi va yomon ulfatni mushk sotuvchi va temirchining bosqoniga o'xshatganlar. Ota-ona farzandining kimlar bilan oshno-og'ayni tutinayotganidan har daqiqa xabardor bo'lishi shart.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Iroda Tarbiyasi va Zararli Odatlardan Xalos Bo'lish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Farzandga yoshligidan nafsi xohlagan har bir narsaga ergashmaslik, o'z nafsini jilovlay bilish va «yo'q» deya olish irodasini tarbiyalash zarur. Chekishga mubtalo bo'lgan o'smirga qattiq bosim va haqorat o'rniga, unga samimiy nasihat, tibbiy-diniy zararlarni tushuntirish va sport orqali sog'lom hayotga qaytarish yo'llari tutilishi kerak.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Tamaki Chekish Haqida",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Tamaki Chekish Haqida») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Tamaki Chekish Haqida",
        "summary": "Alloh taolo Qur'oni Karimda ochiq-oydin buyuradi: «O'z qo'llaringiz bilan o'zingizni halokatga tashlamang!» (Baqara surasi, 195-oyat).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "O'z Sog'lig'iga Qasddan Zarar Yetkazishning Haromligi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Alloh taolo Qur'oni Karimda ochiq-oydin buyuradi: «O'z qo'llaringiz bilan o'zingizni halokatga tashlamang!» (Baqara surasi, 195-oyat).",
            "example": "Tamaki, sigaret, nosvoy va veyp (elektron sigaretalar) inson o'pkasi, yuragi va butun organizmini asta-sekin zaharlovchi o'lim qurolidir. Islomda inson o'z joni va omonat tanasiga zarar yetkazishi mutlaqo harom qilingan.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Mol-Dunyoni Isrof Qilish va Havoga Sovurish",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Alloh taolo marhamat qiladi: «Isrofgarchilikka yo'l qo'ymang! Haqiqatan, isrofgarlar shaytonlarning birodarlaridir» (Isro surasi, 26-27-oyatlar). Sigaret chekuvchi kishi o'zining peshona teri bilan topgan pulini o'z qo'li bilan o'tga yoqib, havoga sovuradi. Bu na dunyoviy va na diniy jihatdan hech qanday foyda keltirmaydigan, ochiq-oydin gunoh isrofdir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Yomon Muhit va Ulfatchilikning Xatari",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Ko'pchilik yoshlar sigaret yoki boshqa zararli narsalarni chekishni ko'cha-ko'ydagi yoki maktab-kollejdagi yomon do'stlariga taqlid qilishdan, «katta odamdek ko'rinish» havasidan boshlaydilar. Payg'ambarimiz (s.a.v) yaxshi va yomon ulfatni mushk sotuvchi va temirchining bosqoniga o'xshatganlar. Ota-ona farzandining kimlar bilan oshno-og'ayni tutinayotganidan har daqiqa xabardor bo'lishi shart.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Iroda Tarbiyasi va Zararli Odatlardan Xalos Bo'lish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Farzandga yoshligidan nafsi xohlagan har bir narsaga ergashmaslik, o'z nafsini jilovlay bilish va «yo'q» deya olish irodasini tarbiyalash zarur. Chekishga mubtalo bo'lgan o'smirga qattiq bosim va haqorat o'rniga, unga samimiy nasihat, tibbiy-diniy zararlarni tushuntirish va sport orqali sog'lom hayotga qaytarish yo'llari tutilishi kerak.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Tamaki Chekish Haqida",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Tamaki Chekish Haqida») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Preventing Tobacco and Toxic Habits",
        "summary": "Protecting youth from cigarettes, vapes, peer pressure, bodily stewardship, and preventive education.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Preventing Tobacco and Toxic Habits",
            "subtitle": "Real-life Context & Introduction",
            "content": "Alloh taolo Qur'oni Karimda ochiq-oydin buyuradi: «O'z qo'llaringiz bilan o'zingizni halokatga tashlamang!» (Baqara surasi, 195-oyat).",
            "example": "Tamaki, sigaret, nosvoy va veyp (elektron sigaretalar) inson o'pkasi, yuragi va butun organizmini asta-sekin zaharlovchi o'lim qurolidir. Islomda inson o'z joni va omonat tanasiga zarar yetkazishi mutlaqo harom qilingan.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Protecting youth from cigarettes, vapes, peer pressure, bodily stewardship, and preventive education. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Ko'pchilik yoshlar sigaret yoki boshqa zararli narsalarni chekishni ko'cha-ko'ydagi yoki maktab-kollejdagi yomon do'stlariga taqlid qilishdan, «katta odamdek ko'rinish» havasidan boshlaydilar. Payg'ambarimiz (s.a.v) yaxshi va yomon ulfatni mushk sotuvchi va temirchining bosqoniga o'xshatganlar. Ota-ona farzandining kimlar bilan oshno-og'ayni tutinayotganidan har daqiqa xabardor bo'lishi shart.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Farzandga yoshligidan nafsi xohlagan har bir narsaga ergashmaslik, o'z nafsini jilovlay bilish va «yo'q» deya olish irodasini tarbiyalash zarur. Chekishga mubtalo bo'lgan o'smirga qattiq bosim va haqorat o'rniga, unga samimiy nasihat, tibbiy-diniy zararlarni tushuntirish va sport orqali sog'lom hayotga qaytarish yo'llari tutilishi kerak.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Preventing Tobacco and Toxic Habits",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Preventing Tobacco and Toxic Habits'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Защита от курения и вредных привычек",
        "summary": "Ограждение подростков от сигарет, вейпов, давления сверстников и осознание тела как аманата Всевышнего.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Защита от курения и вредных привычек",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Alloh taolo Qur'oni Karimda ochiq-oydin buyuradi: «O'z qo'llaringiz bilan o'zingizni halokatga tashlamang!» (Baqara surasi, 195-oyat).",
            "example": "Tamaki, sigaret, nosvoy va veyp (elektron sigaretalar) inson o'pkasi, yuragi va butun organizmini asta-sekin zaharlovchi o'lim qurolidir. Islomda inson o'z joni va omonat tanasiga zarar yetkazishi mutlaqo harom qilingan.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Ограждение подростков от сигарет, вейпов, давления сверстников и осознание тела как аманата Всевышнего. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Ko'pchilik yoshlar sigaret yoki boshqa zararli narsalarni chekishni ko'cha-ko'ydagi yoki maktab-kollejdagi yomon do'stlariga taqlid qilishdan, «katta odamdek ko'rinish» havasidan boshlaydilar. Payg'ambarimiz (s.a.v) yaxshi va yomon ulfatni mushk sotuvchi va temirchining bosqoniga o'xshatganlar. Ota-ona farzandining kimlar bilan oshno-og'ayni tutinayotganidan har daqiqa xabardor bo'lishi shart.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Farzandga yoshligidan nafsi xohlagan har bir narsaga ergashmaslik, o'z nafsini jilovlay bilish va «yo'q» deya olish irodasini tarbiyalash zarur. Chekishga mubtalo bo'lgan o'smirga qattiq bosim va haqorat o'rniga, unga samimiy nasihat, tibbiy-diniy zararlarni tushuntirish va sport orqali sog'lom hayotga qaytarish yo'llari tutilishi kerak.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Защита от курения и вредных привычек",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Защита от курения и вредных привычек»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Aqliy Tarbiya (1-qism)",
    "slug": "dars-16-aqliy-tarbiya-1-qism",
    "summary": "Alloh taolo insonni boshqa barcha maxluqotlardan aql ne'mati bilan mukarram qildi (Isro surasi, 70-oyat). Aql to'g'ri bilan noto'g'rini, foyda bilan zararni ajratuvchi nurdir.",
    "order": 16,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "U7BGkNZIbUI",
    "videoUrl": "https://www.youtube.com/watch?v=U7BGkNZIbUI",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Aql – Insonning Eng Buyuk Omonati",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Alloh taolo insonni boshqa barcha maxluqotlardan aql ne'mati bilan mukarram qildi (Isro surasi, 70-oyat). Aql to'g'ri bilan noto'g'rini, foyda bilan zararni ajratuvchi nurdir.",
        "example": "Farzandga aql shunchaki dunyo tashvishlarini hal qilish uchun emas, balki Yaratganni tanish va Unga ixlos bilan ibodat qilish uchun berilgani uqtiriladi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Ilm Olishning Farzligi va Rag'bat",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) aytadilar: «Ilm talab qilish har bir musulmonga farzdir». Ilm o'rganish nafaqat erkaklarga, balki qiz farzandlarga ham teng darajada burchdir. Farzand ongida ilmga bo'lgan muhabbatni yoshligidanoq uyg'otish kerak. Olimlarning siyratlari, kashfiyotlari va fazilatlari haqida qiziqarli hikoyalar aytib berish orqali unda havas paydo qilinadi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Tafakkur va Koinot Mo''jizalarini Kuzatish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Qur'oni Karim insonlarni doimo fikrlashga, koinot, osmon, yer, tog'lar va inson yaratilishiga ibrat ko'zi bilan qarashga chaqiradi (G'oshiya surasi 17-20 oyatlar). Ota-ona bolani tabiat bag'riga olib chiqib, daraxtlar, qushlar, yulduzlarning mukammal nizomi ortida Cheksiz Qudratli Alloh turganini anglatishi aqliy tarbiyaning oliy cho'qqisidir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Aql Ozuqasi: Zikr va Qur'on Tilovati",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Qanday qilib jism ovqat bilan tirik bo'lsa, aql va qalb ham Allohning zikri va Qur'on nuri bilan oziqlanadi. Har kuni erta tongda Qur'on oyatlarini tafakkur bilan o'qish bolaning zehnini o'tkirlashtiradi, xotirasini kuchaytiradi va uni ruhiy xotirjamlikka erishtiradi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Aqliy Tarbiya (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Aqliy Tarbiya (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Aqliy Tarbiya (1-qism)",
        "summary": "Alloh taolo insonni boshqa barcha maxluqotlardan aql ne'mati bilan mukarram qildi (Isro surasi, 70-oyat). Aql to'g'ri bilan noto'g'rini, foyda bilan zararni ajratuvchi nurdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Aql – Insonning Eng Buyuk Omonati",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Alloh taolo insonni boshqa barcha maxluqotlardan aql ne'mati bilan mukarram qildi (Isro surasi, 70-oyat). Aql to'g'ri bilan noto'g'rini, foyda bilan zararni ajratuvchi nurdir.",
            "example": "Farzandga aql shunchaki dunyo tashvishlarini hal qilish uchun emas, balki Yaratganni tanish va Unga ixlos bilan ibodat qilish uchun berilgani uqtiriladi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Ilm Olishning Farzligi va Rag'bat",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Ilm talab qilish har bir musulmonga farzdir». Ilm o'rganish nafaqat erkaklarga, balki qiz farzandlarga ham teng darajada burchdir. Farzand ongida ilmga bo'lgan muhabbatni yoshligidanoq uyg'otish kerak. Olimlarning siyratlari, kashfiyotlari va fazilatlari haqida qiziqarli hikoyalar aytib berish orqali unda havas paydo qilinadi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Tafakkur va Koinot Mo''jizalarini Kuzatish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Qur'oni Karim insonlarni doimo fikrlashga, koinot, osmon, yer, tog'lar va inson yaratilishiga ibrat ko'zi bilan qarashga chaqiradi (G'oshiya surasi 17-20 oyatlar). Ota-ona bolani tabiat bag'riga olib chiqib, daraxtlar, qushlar, yulduzlarning mukammal nizomi ortida Cheksiz Qudratli Alloh turganini anglatishi aqliy tarbiyaning oliy cho'qqisidir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Aql Ozuqasi: Zikr va Qur'on Tilovati",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Qanday qilib jism ovqat bilan tirik bo'lsa, aql va qalb ham Allohning zikri va Qur'on nuri bilan oziqlanadi. Har kuni erta tongda Qur'on oyatlarini tafakkur bilan o'qish bolaning zehnini o'tkirlashtiradi, xotirasini kuchaytiradi va uni ruhiy xotirjamlikka erishtiradi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Aqliy Tarbiya (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Aqliy Tarbiya (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Intellectual Development (Part 1)",
        "summary": "Encouraging curiosity, love for reading, critical thinking, answering difficult questions, and seeking beneficial knowledge.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Intellectual Development (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Alloh taolo insonni boshqa barcha maxluqotlardan aql ne'mati bilan mukarram qildi (Isro surasi, 70-oyat). Aql to'g'ri bilan noto'g'rini, foyda bilan zararni ajratuvchi nurdir.",
            "example": "Farzandga aql shunchaki dunyo tashvishlarini hal qilish uchun emas, balki Yaratganni tanish va Unga ixlos bilan ibodat qilish uchun berilgani uqtiriladi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Encouraging curiosity, love for reading, critical thinking, answering difficult questions, and seeking beneficial knowledge. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Qur'oni Karim insonlarni doimo fikrlashga, koinot, osmon, yer, tog'lar va inson yaratilishiga ibrat ko'zi bilan qarashga chaqiradi (G'oshiya surasi 17-20 oyatlar). Ota-ona bolani tabiat bag'riga olib chiqib, daraxtlar, qushlar, yulduzlarning mukammal nizomi ortida Cheksiz Qudratli Alloh turganini anglatishi aqliy tarbiyaning oliy cho'qqisidir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Qanday qilib jism ovqat bilan tirik bo'lsa, aql va qalb ham Allohning zikri va Qur'on nuri bilan oziqlanadi. Har kuni erta tongda Qur'on oyatlarini tafakkur bilan o'qish bolaning zehnini o'tkirlashtiradi, xotirasini kuchaytiradi va uni ruhiy xotirjamlikka erishtiradi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Intellectual Development (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Intellectual Development (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Интеллектуальное воспитание (Часть 1)",
        "summary": "Развитие любознательности, любовь к чтению, критическое мышление и ответы на сложные детские вопросы.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Интеллектуальное воспитание (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Alloh taolo insonni boshqa barcha maxluqotlardan aql ne'mati bilan mukarram qildi (Isro surasi, 70-oyat). Aql to'g'ri bilan noto'g'rini, foyda bilan zararni ajratuvchi nurdir.",
            "example": "Farzandga aql shunchaki dunyo tashvishlarini hal qilish uchun emas, balki Yaratganni tanish va Unga ixlos bilan ibodat qilish uchun berilgani uqtiriladi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Развитие любознательности, любовь к чтению, критическое мышление и ответы на сложные детские вопросы. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Qur'oni Karim insonlarni doimo fikrlashga, koinot, osmon, yer, tog'lar va inson yaratilishiga ibrat ko'zi bilan qarashga chaqiradi (G'oshiya surasi 17-20 oyatlar). Ota-ona bolani tabiat bag'riga olib chiqib, daraxtlar, qushlar, yulduzlarning mukammal nizomi ortida Cheksiz Qudratli Alloh turganini anglatishi aqliy tarbiyaning oliy cho'qqisidir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Qanday qilib jism ovqat bilan tirik bo'lsa, aql va qalb ham Allohning zikri va Qur'on nuri bilan oziqlanadi. Har kuni erta tongda Qur'on oyatlarini tafakkur bilan o'qish bolaning zehnini o'tkirlashtiradi, xotirasini kuchaytiradi va uni ruhiy xotirjamlikka erishtiradi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Интеллектуальное воспитание (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Интеллектуальное воспитание (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Aqliy Tarbiya (2-qism)",
    "slug": "dars-17-aqliy-tarbiya-2-qism",
    "summary": "Qur'onning ilk nozil bo'lgan xitobi: «Iqro!» – «O'qi!» deb boshlangan (Alaq surasi, 1-oyat). Islom – qiroat, ilm va mutolaa dinidir.",
    "order": 17,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "1dD0rmkAbec",
    "videoUrl": "https://www.youtube.com/watch?v=1dD0rmkAbec",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Kitobxonlik Madaniyatini Shakllantirish",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Qur'onning ilk nozil bo'lgan xitobi: «Iqro!» – «O'qi!» deb boshlangan (Alaq surasi, 1-oyat). Islom – qiroat, ilm va mutolaa dinidir.",
        "example": "Uyda kitob javoni bo'lishi va ota-onaning o'zi qo'liga kitob olib o'qishi bolada mutolaaga tabiiy qiziqish uyg'otadi. Kitob o'qimaydigan uyda kamolga yetgan bolaning so'z boyligi va dunyoqarashi tor bo'lib qoladi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Diniy va Dunyoviy Bilimlarning Uyg'unligi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Islomda din ilmi bilan dunyo ilmi (matematika, tibbiyot, fizika, til o'rganish) bir-biriga qarama-qarshi qo'yilmaydi. Musulmon kishi ikki dunyoda ham peshqadam bo'lishi lozim. Farzand ham iymonli, namozxon, ham zamonaviy texnologiya va ilmlarni mukammal egallagan yetuk mutaxassis bo'lishi maqsad qilinadi. Bunga Ibn Sino, Beruniy va Al-Xorazmiylar yorqin misoldir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Xotira va Zehnni Charxlash Usullari",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Imom Shofiiy aytadilar: «Vaki'ga xotiramning zaifligidan shikoyat qildim. U menga gunohlarni tark etishni maslahat berdi. Va bildirdiki, ilm bu – nurdir, Allohning nuri esa osiy bandaga berilmaydi». Gunohlardan, behuda narsalarni ko'rishdan saqlanish, Qur'on yodlash va halol taom tanovul qilish zehnni o'tkir qiluvchi eng buyuk omillardir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Xorijiy Tillarni O'rganishga Rag'bat",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Payg'ambarimiz (s.a.v) yosh sahobiy Zayd ibn Sobitga (r.a) yahudiylar tilini (ibroniyni) o'rganishni buyurganlarida, u zot qisqa muddatda bu tilni mukammal o'zlashtirgan edilar. Farzandning chet tillarini o'rganishi dushmanning fitnasidan omon qolish, Islom haqiqatlarini dunyoga yetkazish va ilm-fanni o'zlashtirish uchun buyuk vositadir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Aqliy Tarbiya (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Aqliy Tarbiya (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Aqliy Tarbiya (2-qism)",
        "summary": "Qur'onning ilk nozil bo'lgan xitobi: «Iqro!» – «O'qi!» deb boshlangan (Alaq surasi, 1-oyat). Islom – qiroat, ilm va mutolaa dinidir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Kitobxonlik Madaniyatini Shakllantirish",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Qur'onning ilk nozil bo'lgan xitobi: «Iqro!» – «O'qi!» deb boshlangan (Alaq surasi, 1-oyat). Islom – qiroat, ilm va mutolaa dinidir.",
            "example": "Uyda kitob javoni bo'lishi va ota-onaning o'zi qo'liga kitob olib o'qishi bolada mutolaaga tabiiy qiziqish uyg'otadi. Kitob o'qimaydigan uyda kamolga yetgan bolaning so'z boyligi va dunyoqarashi tor bo'lib qoladi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Diniy va Dunyoviy Bilimlarning Uyg'unligi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Islomda din ilmi bilan dunyo ilmi (matematika, tibbiyot, fizika, til o'rganish) bir-biriga qarama-qarshi qo'yilmaydi. Musulmon kishi ikki dunyoda ham peshqadam bo'lishi lozim. Farzand ham iymonli, namozxon, ham zamonaviy texnologiya va ilmlarni mukammal egallagan yetuk mutaxassis bo'lishi maqsad qilinadi. Bunga Ibn Sino, Beruniy va Al-Xorazmiylar yorqin misoldir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Xotira va Zehnni Charxlash Usullari",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Imom Shofiiy aytadilar: «Vaki'ga xotiramning zaifligidan shikoyat qildim. U menga gunohlarni tark etishni maslahat berdi. Va bildirdiki, ilm bu – nurdir, Allohning nuri esa osiy bandaga berilmaydi». Gunohlardan, behuda narsalarni ko'rishdan saqlanish, Qur'on yodlash va halol taom tanovul qilish zehnni o'tkir qiluvchi eng buyuk omillardir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Xorijiy Tillarni O'rganishga Rag'bat",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Payg'ambarimiz (s.a.v) yosh sahobiy Zayd ibn Sobitga (r.a) yahudiylar tilini (ibroniyni) o'rganishni buyurganlarida, u zot qisqa muddatda bu tilni mukammal o'zlashtirgan edilar. Farzandning chet tillarini o'rganishi dushmanning fitnasidan omon qolish, Islom haqiqatlarini dunyoga yetkazish va ilm-fanni o'zlashtirish uchun buyuk vositadir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Aqliy Tarbiya (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Aqliy Tarbiya (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Intellectual Development (Part 2)",
        "summary": "Memorization skills, Quranic cognitive benefits, problem-solving, intellectual discussions, and focus training.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Intellectual Development (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Qur'onning ilk nozil bo'lgan xitobi: «Iqro!» – «O'qi!» deb boshlangan (Alaq surasi, 1-oyat). Islom – qiroat, ilm va mutolaa dinidir.",
            "example": "Uyda kitob javoni bo'lishi va ota-onaning o'zi qo'liga kitob olib o'qishi bolada mutolaaga tabiiy qiziqish uyg'otadi. Kitob o'qimaydigan uyda kamolga yetgan bolaning so'z boyligi va dunyoqarashi tor bo'lib qoladi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Memorization skills, Quranic cognitive benefits, problem-solving, intellectual discussions, and focus training. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Imom Shofiiy aytadilar: «Vaki'ga xotiramning zaifligidan shikoyat qildim. U menga gunohlarni tark etishni maslahat berdi. Va bildirdiki, ilm bu – nurdir, Allohning nuri esa osiy bandaga berilmaydi». Gunohlardan, behuda narsalarni ko'rishdan saqlanish, Qur'on yodlash va halol taom tanovul qilish zehnni o'tkir qiluvchi eng buyuk omillardir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Payg'ambarimiz (s.a.v) yosh sahobiy Zayd ibn Sobitga (r.a) yahudiylar tilini (ibroniyni) o'rganishni buyurganlarida, u zot qisqa muddatda bu tilni mukammal o'zlashtirgan edilar. Farzandning chet tillarini o'rganishi dushmanning fitnasidan omon qolish, Islom haqiqatlarini dunyoga yetkazish va ilm-fanni o'zlashtirish uchun buyuk vositadir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Intellectual Development (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Intellectual Development (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Интеллектуальное воспитание (Часть 2)",
        "summary": "Тренировка памяти, польза заучивания Корана для интеллекта, решение задач и развитие концентрации внимания.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Интеллектуальное воспитание (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Qur'onning ilk nozil bo'lgan xitobi: «Iqro!» – «O'qi!» deb boshlangan (Alaq surasi, 1-oyat). Islom – qiroat, ilm va mutolaa dinidir.",
            "example": "Uyda kitob javoni bo'lishi va ota-onaning o'zi qo'liga kitob olib o'qishi bolada mutolaaga tabiiy qiziqish uyg'otadi. Kitob o'qimaydigan uyda kamolga yetgan bolaning so'z boyligi va dunyoqarashi tor bo'lib qoladi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Тренировка памяти, польза заучивания Корана для интеллекта, решение задач и развитие концентрации внимания. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Imom Shofiiy aytadilar: «Vaki'ga xotiramning zaifligidan shikoyat qildim. U menga gunohlarni tark etishni maslahat berdi. Va bildirdiki, ilm bu – nurdir, Allohning nuri esa osiy bandaga berilmaydi». Gunohlardan, behuda narsalarni ko'rishdan saqlanish, Qur'on yodlash va halol taom tanovul qilish zehnni o'tkir qiluvchi eng buyuk omillardir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Payg'ambarimiz (s.a.v) yosh sahobiy Zayd ibn Sobitga (r.a) yahudiylar tilini (ibroniyni) o'rganishni buyurganlarida, u zot qisqa muddatda bu tilni mukammal o'zlashtirgan edilar. Farzandning chet tillarini o'rganishi dushmanning fitnasidan omon qolish, Islom haqiqatlarini dunyoga yetkazish va ilm-fanni o'zlashtirish uchun buyuk vositadir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Интеллектуальное воспитание (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Интеллектуальное воспитание (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Aqliy Tarbiya (3-qism)",
    "slug": "dars-18-aqliy-tarbiya-3-qism",
    "summary": "Aqliy tarbiyaning asosi – to'g'ri aqidadir. Farzand qalbiga Allohning yagonaligi (Tavhid), qazo va qadarga rozi bo'lish hamda oxiratga qat'iy ishonch singdirilishi shart.",
    "order": 18,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "wstBA1ooJq8",
    "videoUrl": "https://www.youtube.com/watch?v=wstBA1ooJq8",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Fikr Pokligi va Sog'lom E'tiqod",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Aqliy tarbiyaning asosi – to'g'ri aqidadir. Farzand qalbiga Allohning yagonaligi (Tavhid), qazo va qadarga rozi bo'lish hamda oxiratga qat'iy ishonch singdirilishi shart.",
        "example": "Aqidasi zaif inson hayotdagi qiyinchiliklarga duch kelganda tezda tushkunlikka tushadi, fojialarga dosh berolmaydi yoki shirk amallariga qo'l uradi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Xurofot, Bid'at va Folbinlikdan Ongni Saqlash",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Xalq orasida tarqalgan turli irimlarga ishonish (supurgini tik qo'ymaslik, ko'z tegishidan qo'rqib ko'zmunchoq taqish, folbin-baxshilarga borish) aqlning nuqsonidir. Rasululloh (s.a.v) folbinga borib, uning gapini tasdiqlagan kishining 40 kunlik namozi qabul bo'lmasligini yoki Qur'onga kufr keltirgan bo'lishini ogohlantirganlar. Farzand har bir narsani faqat Allohdan deb bilishi lozim.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Sabab-Oqibat Qonuniyatlarini Tushuntirish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Islomiy aql – sabablarni ushlab, natijani Allohga topshirish (tavakkul) demakdir. Payg'ambarimiz (s.a.v) tuyasini qo'yib yuborib «tavakkul qildim» degan a'robiyga: «Tuyangni bog'la, keyin tavakkul qil!» deb buyurganlar. Bolaga imtihonga tayyorlanmasdan «Alloh yordam beradi» deb yotish tanballik ekani, avval barcha sabablar qilinib, so'ng Allohga duo qilinishi o'rgatiladi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Qalb va Aql O'rtasidagi Muvozanat",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Faqat quruq mantiq insonni toshbag'irga, faqat his-tuyg'ular esa hissiyot quliga aylantiradi. Islom ta'limotida aql doimo qalb bilan, iymon bilan hamnafas ish ko'radi. Qalbi yumshoq, vijdoni uyg'oq, lekin aqli o'tkir shaxs komil insondir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Aqliy Tarbiya (3-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Aqliy Tarbiya (3-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Aqliy Tarbiya (3-qism)",
        "summary": "Aqliy tarbiyaning asosi – to'g'ri aqidadir. Farzand qalbiga Allohning yagonaligi (Tavhid), qazo va qadarga rozi bo'lish hamda oxiratga qat'iy ishonch singdirilishi shart.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Fikr Pokligi va Sog'lom E'tiqod",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Aqliy tarbiyaning asosi – to'g'ri aqidadir. Farzand qalbiga Allohning yagonaligi (Tavhid), qazo va qadarga rozi bo'lish hamda oxiratga qat'iy ishonch singdirilishi shart.",
            "example": "Aqidasi zaif inson hayotdagi qiyinchiliklarga duch kelganda tezda tushkunlikka tushadi, fojialarga dosh berolmaydi yoki shirk amallariga qo'l uradi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Xurofot, Bid'at va Folbinlikdan Ongni Saqlash",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Xalq orasida tarqalgan turli irimlarga ishonish (supurgini tik qo'ymaslik, ko'z tegishidan qo'rqib ko'zmunchoq taqish, folbin-baxshilarga borish) aqlning nuqsonidir. Rasululloh (s.a.v) folbinga borib, uning gapini tasdiqlagan kishining 40 kunlik namozi qabul bo'lmasligini yoki Qur'onga kufr keltirgan bo'lishini ogohlantirganlar. Farzand har bir narsani faqat Allohdan deb bilishi lozim.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sabab-Oqibat Qonuniyatlarini Tushuntirish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Islomiy aql – sabablarni ushlab, natijani Allohga topshirish (tavakkul) demakdir. Payg'ambarimiz (s.a.v) tuyasini qo'yib yuborib «tavakkul qildim» degan a'robiyga: «Tuyangni bog'la, keyin tavakkul qil!» deb buyurganlar. Bolaga imtihonga tayyorlanmasdan «Alloh yordam beradi» deb yotish tanballik ekani, avval barcha sabablar qilinib, so'ng Allohga duo qilinishi o'rgatiladi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Qalb va Aql O'rtasidagi Muvozanat",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Faqat quruq mantiq insonni toshbag'irga, faqat his-tuyg'ular esa hissiyot quliga aylantiradi. Islom ta'limotida aql doimo qalb bilan, iymon bilan hamnafas ish ko'radi. Qalbi yumshoq, vijdoni uyg'oq, lekin aqli o'tkir shaxs komil insondir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Aqliy Tarbiya (3-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Aqliy Tarbiya (3-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Intellectual Development (Part 3)",
        "summary": "Scientific worldview, contemplating creation in nature, avoiding superstitions, and cultivating innovation.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Intellectual Development (Part 3)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Aqliy tarbiyaning asosi – to'g'ri aqidadir. Farzand qalbiga Allohning yagonaligi (Tavhid), qazo va qadarga rozi bo'lish hamda oxiratga qat'iy ishonch singdirilishi shart.",
            "example": "Aqidasi zaif inson hayotdagi qiyinchiliklarga duch kelganda tezda tushkunlikka tushadi, fojialarga dosh berolmaydi yoki shirk amallariga qo'l uradi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Scientific worldview, contemplating creation in nature, avoiding superstitions, and cultivating innovation. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Islomiy aql – sabablarni ushlab, natijani Allohga topshirish (tavakkul) demakdir. Payg'ambarimiz (s.a.v) tuyasini qo'yib yuborib «tavakkul qildim» degan a'robiyga: «Tuyangni bog'la, keyin tavakkul qil!» deb buyurganlar. Bolaga imtihonga tayyorlanmasdan «Alloh yordam beradi» deb yotish tanballik ekani, avval barcha sabablar qilinib, so'ng Allohga duo qilinishi o'rgatiladi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Faqat quruq mantiq insonni toshbag'irga, faqat his-tuyg'ular esa hissiyot quliga aylantiradi. Islom ta'limotida aql doimo qalb bilan, iymon bilan hamnafas ish ko'radi. Qalbi yumshoq, vijdoni uyg'oq, lekin aqli o'tkir shaxs komil insondir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Intellectual Development (Part 3)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Intellectual Development (Part 3)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Интеллектуальное воспитание (Часть 3)",
        "summary": "Научное мировоззрение, размышление над творениями природы, очищение от суеверий и тяга к открытиям.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Интеллектуальное воспитание (Часть 3)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Aqliy tarbiyaning asosi – to'g'ri aqidadir. Farzand qalbiga Allohning yagonaligi (Tavhid), qazo va qadarga rozi bo'lish hamda oxiratga qat'iy ishonch singdirilishi shart.",
            "example": "Aqidasi zaif inson hayotdagi qiyinchiliklarga duch kelganda tezda tushkunlikka tushadi, fojialarga dosh berolmaydi yoki shirk amallariga qo'l uradi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Научное мировоззрение, размышление над творениями природы, очищение от суеверий и тяга к открытиям. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Islomiy aql – sabablarni ushlab, natijani Allohga topshirish (tavakkul) demakdir. Payg'ambarimiz (s.a.v) tuyasini qo'yib yuborib «tavakkul qildim» degan a'robiyga: «Tuyangni bog'la, keyin tavakkul qil!» deb buyurganlar. Bolaga imtihonga tayyorlanmasdan «Alloh yordam beradi» deb yotish tanballik ekani, avval barcha sabablar qilinib, so'ng Allohga duo qilinishi o'rgatiladi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Faqat quruq mantiq insonni toshbag'irga, faqat his-tuyg'ular esa hissiyot quliga aylantiradi. Islom ta'limotida aql doimo qalb bilan, iymon bilan hamnafas ish ko'radi. Qalbi yumshoq, vijdoni uyg'oq, lekin aqli o'tkir shaxs komil insondir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Интеллектуальное воспитание (Часть 3)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Интеллектуальное воспитание (Часть 3)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Aqliy Tarbiya (4-qism)",
    "slug": "dars-19-aqliy-tarbiya-4-qism",
    "summary": "Muhammad ibn Sirin (r.a) aytadilar: «Haqiqatan, bu ilm – dindir. Bas, diningizni kimdan olayotganingizga qaranglar!»",
    "order": 19,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "AEsKinFM_jw",
    "videoUrl": "https://www.youtube.com/watch?v=AEsKinFM_jw",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Ustoz Tanlashdagi Mas'uliyat",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Muhammad ibn Sirin (r.a) aytadilar: «Haqiqatan, bu ilm – dindir. Bas, diningizni kimdan olayotganingizga qaranglar!»",
        "example": "Farzandni kimga shogirdlikka berilayotgani hayot-mamot masalasidir. Ustoz faqat ma'lumot beruvchi emas, balki xulq-atvor, taqvo va odobni meros qilib qoldiruvchi shaxsdir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Ilmiy Odoblar va Ustozga Ehtirom",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Imom Shofiiy aytadilar: «Ustozim Imom Molikning huzurida varaqlarning shitirlagan ovozi u kishiga malol kelmasin deb, kitob sahifalarini ohistalik bilan ochar edim». Ustoz oldida so'zsiz hurmat saqlash, gapini bo'lmaslik, ehtirom ko'rsatish bolaning ilmida baraka bo'lishining bosh shartidir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Savol Berish Madaniyati",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Ibn Abbosdan (r.a): «Bu ulkan ilmni nimaning evaziga qo'lga kiritdingiz?» deb so'ralganda, u zot: «So'rovchi til va tafakkur qiluvchi aql bilan», deb javob berganlar. Bolani o'rinsiz, bema'ni savollardan tiyish, lekin foydali va chuqur savollar berishga rag'batlantirish zarur. Bilmaslik ayb emas, bilishga intilmaslik aybdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Ilmga Amal Qilish Sharti",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Amalsiz ilm – mevasiz daraxt kabi yoki orqasiga kitob ortilgan eshak kabidir (Jum'a surasi, 5-oyat). Bolaga bilgan har bir yaxshi amaliga (namoz, sadaqa, rostgo'ylik, salomlashish) zudlik bilan hayotida amal qilish mas'uliyati yuklatiladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Aqliy Tarbiya (4-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Aqliy Tarbiya (4-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Aqliy Tarbiya (4-qism)",
        "summary": "Muhammad ibn Sirin (r.a) aytadilar: «Haqiqatan, bu ilm – dindir. Bas, diningizni kimdan olayotganingizga qaranglar!»",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ustoz Tanlashdagi Mas'uliyat",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Muhammad ibn Sirin (r.a) aytadilar: «Haqiqatan, bu ilm – dindir. Bas, diningizni kimdan olayotganingizga qaranglar!»",
            "example": "Farzandni kimga shogirdlikka berilayotgani hayot-mamot masalasidir. Ustoz faqat ma'lumot beruvchi emas, balki xulq-atvor, taqvo va odobni meros qilib qoldiruvchi shaxsdir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Ilmiy Odoblar va Ustozga Ehtirom",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Imom Shofiiy aytadilar: «Ustozim Imom Molikning huzurida varaqlarning shitirlagan ovozi u kishiga malol kelmasin deb, kitob sahifalarini ohistalik bilan ochar edim». Ustoz oldida so'zsiz hurmat saqlash, gapini bo'lmaslik, ehtirom ko'rsatish bolaning ilmida baraka bo'lishining bosh shartidir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Savol Berish Madaniyati",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Ibn Abbosdan (r.a): «Bu ulkan ilmni nimaning evaziga qo'lga kiritdingiz?» deb so'ralganda, u zot: «So'rovchi til va tafakkur qiluvchi aql bilan», deb javob berganlar. Bolani o'rinsiz, bema'ni savollardan tiyish, lekin foydali va chuqur savollar berishga rag'batlantirish zarur. Bilmaslik ayb emas, bilishga intilmaslik aybdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Ilmga Amal Qilish Sharti",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Amalsiz ilm – mevasiz daraxt kabi yoki orqasiga kitob ortilgan eshak kabidir (Jum'a surasi, 5-oyat). Bolaga bilgan har bir yaxshi amaliga (namoz, sadaqa, rostgo'ylik, salomlashish) zudlik bilan hayotida amal qilish mas'uliyati yuklatiladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Aqliy Tarbiya (4-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Aqliy Tarbiya (4-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Intellectual Development (Part 4)",
        "summary": "Debating respectfully, listening skills, expanding vocabulary, eloquence, and intellectual humility.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Intellectual Development (Part 4)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Muhammad ibn Sirin (r.a) aytadilar: «Haqiqatan, bu ilm – dindir. Bas, diningizni kimdan olayotganingizga qaranglar!»",
            "example": "Farzandni kimga shogirdlikka berilayotgani hayot-mamot masalasidir. Ustoz faqat ma'lumot beruvchi emas, balki xulq-atvor, taqvo va odobni meros qilib qoldiruvchi shaxsdir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Debating respectfully, listening skills, expanding vocabulary, eloquence, and intellectual humility. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Ibn Abbosdan (r.a): «Bu ulkan ilmni nimaning evaziga qo'lga kiritdingiz?» deb so'ralganda, u zot: «So'rovchi til va tafakkur qiluvchi aql bilan», deb javob berganlar. Bolani o'rinsiz, bema'ni savollardan tiyish, lekin foydali va chuqur savollar berishga rag'batlantirish zarur. Bilmaslik ayb emas, bilishga intilmaslik aybdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Amalsiz ilm – mevasiz daraxt kabi yoki orqasiga kitob ortilgan eshak kabidir (Jum'a surasi, 5-oyat). Bolaga bilgan har bir yaxshi amaliga (namoz, sadaqa, rostgo'ylik, salomlashish) zudlik bilan hayotida amal qilish mas'uliyati yuklatiladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Intellectual Development (Part 4)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Intellectual Development (Part 4)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Интеллектуальное воспитание (Часть 4)",
        "summary": "Культура ведения диалога, умение слушать собеседника, обогащение словарного запаса и скромность в знаниях.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Интеллектуальное воспитание (Часть 4)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Muhammad ibn Sirin (r.a) aytadilar: «Haqiqatan, bu ilm – dindir. Bas, diningizni kimdan olayotganingizga qaranglar!»",
            "example": "Farzandni kimga shogirdlikka berilayotgani hayot-mamot masalasidir. Ustoz faqat ma'lumot beruvchi emas, balki xulq-atvor, taqvo va odobni meros qilib qoldiruvchi shaxsdir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Культура ведения диалога, умение слушать собеседника, обогащение словарного запаса и скромность в знаниях. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Ibn Abbosdan (r.a): «Bu ulkan ilmni nimaning evaziga qo'lga kiritdingiz?» deb so'ralganda, u zot: «So'rovchi til va tafakkur qiluvchi aql bilan», deb javob berganlar. Bolani o'rinsiz, bema'ni savollardan tiyish, lekin foydali va chuqur savollar berishga rag'batlantirish zarur. Bilmaslik ayb emas, bilishga intilmaslik aybdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Amalsiz ilm – mevasiz daraxt kabi yoki orqasiga kitob ortilgan eshak kabidir (Jum'a surasi, 5-oyat). Bolaga bilgan har bir yaxshi amaliga (namoz, sadaqa, rostgo'ylik, salomlashish) zudlik bilan hayotida amal qilish mas'uliyati yuklatiladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Интеллектуальное воспитание (Часть 4)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Интеллектуальное воспитание (Часть 4)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "shaxsiy-ibrat-salomatlik-va-aqliy-tarbiya",
    "title": "Jur'at",
    "slug": "dars-20-jurat",
    "summary": "Jur'at (shijoat) – bu haqiqatni aytishda, adolatni himoya qilishda va yaxshilik yo'lida mustahkam turishda namoyon bo'ladigan iymon quvvatidir.",
    "order": 20,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "XLJTwT_vgGc",
    "videoUrl": "https://www.youtube.com/watch?v=XLJTwT_vgGc",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Islomiy Jur'atning Ta'rifi va Mohiyati",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Jur'at (shijoat) – bu haqiqatni aytishda, adolatni himoya qilishda va yaxshilik yo'lida mustahkam turishda namoyon bo'ladigan iymon quvvatidir.",
        "example": "Jur'at johilona janjalkashlik yoki bezorilik emas, balki aql va hikmat bilan boshqariladigan mardlikdir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Haqiqatni Gapirish Jasorati",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) marhamat qiladilar: «Eng afzal jihod – zolim rahbar huzurida aytilgan haq so'zdir». Bolani nohaqlikni ko'rganda sukut saqlamaydigan, ammo odob chegarasidan chiqmagan holda haqiqatni mardona bayon eta oladigan qilib o'stirish lozim.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Hayo Bilan Jur'atning O'zaro Chegarasi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Ba'zilar jur'atsizlikni «hayo» yoki «odob» deb xato tushunadilar. O'z huquqini himoya qila olmaslik, haqoratga indamay qarab turish hayo emas, balki ojizlikdir. Hayo faqat gunoh va behayolikdan uyalishda bo'ladi; ilm o'rganishda, adolat talab qilishda va haqni aytishda uyalish joiz emas.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Bolada O'ziga Ishonch va Mas'uliyatni Shakllantirish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Ota-ona bolaning har bir kichik xatosida jerkib, uning ovozini o'chiraversa, unda jur'at so'nadi va u doim birovga qaram, qo'rqoq bo'lib qoladi. Bolaga mustaqil qaror qabul qilish, do'kondan savdo qilish, jamoat oldida gapirish kabi vazifalar berib, uning jur'ati charxlanadi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Jur'at",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Jur'at») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Jur'at",
        "summary": "Jur'at (shijoat) – bu haqiqatni aytishda, adolatni himoya qilishda va yaxshilik yo'lida mustahkam turishda namoyon bo'ladigan iymon quvvatidir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Islomiy Jur'atning Ta'rifi va Mohiyati",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Jur'at (shijoat) – bu haqiqatni aytishda, adolatni himoya qilishda va yaxshilik yo'lida mustahkam turishda namoyon bo'ladigan iymon quvvatidir.",
            "example": "Jur'at johilona janjalkashlik yoki bezorilik emas, balki aql va hikmat bilan boshqariladigan mardlikdir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Haqiqatni Gapirish Jasorati",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) marhamat qiladilar: «Eng afzal jihod – zolim rahbar huzurida aytilgan haq so'zdir». Bolani nohaqlikni ko'rganda sukut saqlamaydigan, ammo odob chegarasidan chiqmagan holda haqiqatni mardona bayon eta oladigan qilib o'stirish lozim.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Hayo Bilan Jur'atning O'zaro Chegarasi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Ba'zilar jur'atsizlikni «hayo» yoki «odob» deb xato tushunadilar. O'z huquqini himoya qila olmaslik, haqoratga indamay qarab turish hayo emas, balki ojizlikdir. Hayo faqat gunoh va behayolikdan uyalishda bo'ladi; ilm o'rganishda, adolat talab qilishda va haqni aytishda uyalish joiz emas.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Bolada O'ziga Ishonch va Mas'uliyatni Shakllantirish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Ota-ona bolaning har bir kichik xatosida jerkib, uning ovozini o'chiraversa, unda jur'at so'nadi va u doim birovga qaram, qo'rqoq bo'lib qoladi. Bolaga mustaqil qaror qabul qilish, do'kondan savdo qilish, jamoat oldida gapirish kabi vazifalar berib, uning jur'ati charxlanadi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Jur'at",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Jur'at») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Cultivating Healthy Courage",
        "summary": "Distinguishing moral courage from reckless rashness, standing up for truth, public speaking, and self-confidence.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Cultivating Healthy Courage",
            "subtitle": "Real-life Context & Introduction",
            "content": "Jur'at (shijoat) – bu haqiqatni aytishda, adolatni himoya qilishda va yaxshilik yo'lida mustahkam turishda namoyon bo'ladigan iymon quvvatidir.",
            "example": "Jur'at johilona janjalkashlik yoki bezorilik emas, balki aql va hikmat bilan boshqariladigan mardlikdir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Distinguishing moral courage from reckless rashness, standing up for truth, public speaking, and self-confidence. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Ba'zilar jur'atsizlikni «hayo» yoki «odob» deb xato tushunadilar. O'z huquqini himoya qila olmaslik, haqoratga indamay qarab turish hayo emas, balki ojizlikdir. Hayo faqat gunoh va behayolikdan uyalishda bo'ladi; ilm o'rganishda, adolat talab qilishda va haqni aytishda uyalish joiz emas.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Ota-ona bolaning har bir kichik xatosida jerkib, uning ovozini o'chiraversa, unda jur'at so'nadi va u doim birovga qaram, qo'rqoq bo'lib qoladi. Bolaga mustaqil qaror qabul qilish, do'kondan savdo qilish, jamoat oldida gapirish kabi vazifalar berib, uning jur'ati charxlanadi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Cultivating Healthy Courage",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Cultivating Healthy Courage'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Воспитание здоровой смелости и решительности",
        "summary": "Отличие мужества от безрассудства, смелость говорить правду, уверенность на публике и решительность.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Воспитание здоровой смелости и решительности",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Jur'at (shijoat) – bu haqiqatni aytishda, adolatni himoya qilishda va yaxshilik yo'lida mustahkam turishda namoyon bo'ladigan iymon quvvatidir.",
            "example": "Jur'at johilona janjalkashlik yoki bezorilik emas, balki aql va hikmat bilan boshqariladigan mardlikdir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Отличие мужества от безрассудства, смелость говорить правду, уверенность на публике и решительность. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Ba'zilar jur'atsizlikni «hayo» yoki «odob» deb xato tushunadilar. O'z huquqini himoya qila olmaslik, haqoratga indamay qarab turish hayo emas, balki ojizlikdir. Hayo faqat gunoh va behayolikdan uyalishda bo'ladi; ilm o'rganishda, adolat talab qilishda va haqni aytishda uyalish joiz emas.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Ota-ona bolaning har bir kichik xatosida jerkib, uning ovozini o'chiraversa, unda jur'at so'nadi va u doim birovga qaram, qo'rqoq bo'lib qoladi. Bolaga mustaqil qaror qabul qilish, do'kondan savdo qilish, jamoat oldida gapirish kabi vazifalar berib, uning jur'ati charxlanadi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Воспитание здоровой смелости и решительности",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Воспитание здоровой смелости и решительности»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "Qo'rqoqlik (1-qism)",
    "slug": "dars-21-qorqoqlik-1-qism",
    "summary": "Qo'rqoqlik – insonning qadr-qimmatini yerga uradigan, uni xorlik va tobelikka rozi qiladigan eng yomon qusurlardan biridir.",
    "order": 21,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": true,
    "videoId": "rQ_mRa4Lg3I",
    "videoUrl": "https://www.youtube.com/watch?v=rQ_mRa4Lg3I",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Qo'rqoqlikning Ruhiy va Diniy Zararlari",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Qo'rqoqlik – insonning qadr-qimmatini yerga uradigan, uni xorlik va tobelikka rozi qiladigan eng yomon qusurlardan biridir.",
        "example": "Payg'ambarimiz (s.a.v) har kuni duo qilib: «Allohim, Sendan qo'rqoqlikdan (jubn) panoh so'rayman!» deb iltijo qilganlar.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Ota-onaning Bolani Qo'rqitish Xatosi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Ko'pchilik ota-onalar bolani uxlatish yoki itoat qildirish uchun «Qorong'uda dev bor», «Yalmog'iz keladi», «Militsiya olib ketadi», «Doktor ukol qiladi» deb qo'rqitadilar. Bu usul bolaning asab tizimini ishdan chiqaradi, qalbida vahima uyg'otadi va uni umrbod qo'rquvlar changalida yashaydigan shaxsga aylantiradi. Bolani yolg'on vahimalar bilan emas, aql va mehr bilan tarbiyalash shart.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Qorong'ulik va Yolg'izlik Vahimasini Yengish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Farzandni asta-sekin qorong'i xonaga yolg'iz kirishga, o'z yotog'ida mustaqil uxlashga o'rgatish kerak. Bolaga: «Qorong'ulik ham Allohning yaratgan maxluqi, Alloh doim biz bilan birga, bizni ko'rib asrab turibdi» deb iymoniy dalda berish lozim.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Tirik Qolish Instinkti va Qo'rqoqlik Farqi",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Xavfli hayvonlardan, olovdan, balandlikdan ehtiyot bo'lish bu qo'rqoqlik emas, balki aql va o'zini asrash chorasidir. Qo'rqoqlik esa – haqiqatni aytishdan, burchini bajarishdan va adolatni himoya qilishdan cho'chishdir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Qo'rqoqlik (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Qo'rqoqlik (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Qo'rqoqlik (1-qism)",
        "summary": "Qo'rqoqlik – insonning qadr-qimmatini yerga uradigan, uni xorlik va tobelikka rozi qiladigan eng yomon qusurlardan biridir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Qo'rqoqlikning Ruhiy va Diniy Zararlari",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Qo'rqoqlik – insonning qadr-qimmatini yerga uradigan, uni xorlik va tobelikka rozi qiladigan eng yomon qusurlardan biridir.",
            "example": "Payg'ambarimiz (s.a.v) har kuni duo qilib: «Allohim, Sendan qo'rqoqlikdan (jubn) panoh so'rayman!» deb iltijo qilganlar.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Ota-onaning Bolani Qo'rqitish Xatosi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Ko'pchilik ota-onalar bolani uxlatish yoki itoat qildirish uchun «Qorong'uda dev bor», «Yalmog'iz keladi», «Militsiya olib ketadi», «Doktor ukol qiladi» deb qo'rqitadilar. Bu usul bolaning asab tizimini ishdan chiqaradi, qalbida vahima uyg'otadi va uni umrbod qo'rquvlar changalida yashaydigan shaxsga aylantiradi. Bolani yolg'on vahimalar bilan emas, aql va mehr bilan tarbiyalash shart.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Qorong'ulik va Yolg'izlik Vahimasini Yengish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Farzandni asta-sekin qorong'i xonaga yolg'iz kirishga, o'z yotog'ida mustaqil uxlashga o'rgatish kerak. Bolaga: «Qorong'ulik ham Allohning yaratgan maxluqi, Alloh doim biz bilan birga, bizni ko'rib asrab turibdi» deb iymoniy dalda berish lozim.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Tirik Qolish Instinkti va Qo'rqoqlik Farqi",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Xavfli hayvonlardan, olovdan, balandlikdan ehtiyot bo'lish bu qo'rqoqlik emas, balki aql va o'zini asrash chorasidir. Qo'rqoqlik esa – haqiqatni aytishdan, burchini bajarishdan va adolatni himoya qilishdan cho'chishdir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Qo'rqoqlik (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Qo'rqoqlik (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Overcoming Childhood Fears (Part 1)",
        "summary": "Root causes of irrational phobias, bedtime fear, emotional reassurance, and avoiding terrifying children as discipline.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Overcoming Childhood Fears (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Qo'rqoqlik – insonning qadr-qimmatini yerga uradigan, uni xorlik va tobelikka rozi qiladigan eng yomon qusurlardan biridir.",
            "example": "Payg'ambarimiz (s.a.v) har kuni duo qilib: «Allohim, Sendan qo'rqoqlikdan (jubn) panoh so'rayman!» deb iltijo qilganlar.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Root causes of irrational phobias, bedtime fear, emotional reassurance, and avoiding terrifying children as discipline. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Farzandni asta-sekin qorong'i xonaga yolg'iz kirishga, o'z yotog'ida mustaqil uxlashga o'rgatish kerak. Bolaga: «Qorong'ulik ham Allohning yaratgan maxluqi, Alloh doim biz bilan birga, bizni ko'rib asrab turibdi» deb iymoniy dalda berish lozim.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Xavfli hayvonlardan, olovdan, balandlikdan ehtiyot bo'lish bu qo'rqoqlik emas, balki aql va o'zini asrash chorasidir. Qo'rqoqlik esa – haqiqatni aytishdan, burchini bajarishdan va adolatni himoya qilishdan cho'chishdir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Overcoming Childhood Fears (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Overcoming Childhood Fears (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Преодоление детских страхов (Часть 1)",
        "summary": "Причины детских страхов, страх темноты, эмоциональная поддержка и отказ от запугивания в целях дисциплины.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Преодоление детских страхов (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Qo'rqoqlik – insonning qadr-qimmatini yerga uradigan, uni xorlik va tobelikka rozi qiladigan eng yomon qusurlardan biridir.",
            "example": "Payg'ambarimiz (s.a.v) har kuni duo qilib: «Allohim, Sendan qo'rqoqlikdan (jubn) panoh so'rayman!» deb iltijo qilganlar.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Причины детских страхов, страх темноты, эмоциональная поддержка и отказ от запугивания в целях дисциплины. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Farzandni asta-sekin qorong'i xonaga yolg'iz kirishga, o'z yotog'ida mustaqil uxlashga o'rgatish kerak. Bolaga: «Qorong'ulik ham Allohning yaratgan maxluqi, Alloh doim biz bilan birga, bizni ko'rib asrab turibdi» deb iymoniy dalda berish lozim.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Xavfli hayvonlardan, olovdan, balandlikdan ehtiyot bo'lish bu qo'rqoqlik emas, balki aql va o'zini asrash chorasidir. Qo'rqoqlik esa – haqiqatni aytishdan, burchini bajarishdan va adolatni himoya qilishdan cho'chishdir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Преодоление детских страхов (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Преодоление детских страхов (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "Qo'rqoqlik (2-qism)",
    "slug": "dars-22-qorqoqlik-2-qism",
    "summary": "Alloh taolo Qur'onda buyuradi: «Bas, odamlardan qo'rqmanglar, Mendan qo'rqinglar!» (Moida surasi, 44-oyat).",
    "order": 22,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "ke5CYw2nJFM",
    "videoUrl": "https://www.youtube.com/watch?v=ke5CYw2nJFM",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Faqat Allohdan Qo'rqish (Xavfulloh) – Najot Kaliti",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Alloh taolo Qur'onda buyuradi: «Bas, odamlardan qo'rqmanglar, Mendan qo'rqinglar!» (Moida surasi, 44-oyat).",
        "example": "Qalbida Allohdan qo'rquvi bo'lgan inson boshqa hech kimdan va hech narsadan qo'rqmaydi. Bandalardan qo'rqqan odam esa har bir sharpadan titraydigan qulga aylanadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Iymon va Tavakkul Bilan Qo'rquvni Davolash",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Qo'rquv kelganda Payg'ambarimiz (s.a.v) o'rgatgan duolarni: «Hasbunallohu va ni'mal vakil» (Alloh bizga yetarlidir, U naqadar go'zal vakildir) aytish ruhiyatga cheksiz sabot baxsh etadi. Farzandga tonggi va kechki himoya duolarini (Ayatul Kursiy, Falaq, Nos suralarini) o'qib yurish odatini singdirish unga ruhiy qalqon bo'ladi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Muvaffaqiyatsizlikdan Qo'rqish Sindromi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Ko'p bolalar xato qilishdan yoki yutqazib qo'yishdan qo'rqib, yangi ishlarni boshlashga jur'at etolmaydilar. Ota-ona xato qilgan bolani koyimasdan, aksincha xatolar – muvaffaqiyatga olib boruvchi eng yaxshi saboq ekanini tushuntirishi kerak.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "O'lim va Qazo Qorquviga To'g'ri Munosabat",
        "subtitle": "Bugungi amaliy qadam",
        "content": "O'limdan vahimaga tushish emas, balki unga go'zal amallar bilan tayyorgarlik ko'rish lozim. Ajal va rizq faqat Allohning izmida ekani, belgilangan soatdan bir soniya oldin ham, keyin ham o'lim kelmasligi bola qalbiga yengilmas xotirjamlik bag'ishlaydi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Qo'rqoqlik (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Qo'rqoqlik (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Qo'rqoqlik (2-qism)",
        "summary": "Alloh taolo Qur'onda buyuradi: «Bas, odamlardan qo'rqmanglar, Mendan qo'rqinglar!» (Moida surasi, 44-oyat).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Faqat Allohdan Qo'rqish (Xavfulloh) – Najot Kaliti",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Alloh taolo Qur'onda buyuradi: «Bas, odamlardan qo'rqmanglar, Mendan qo'rqinglar!» (Moida surasi, 44-oyat).",
            "example": "Qalbida Allohdan qo'rquvi bo'lgan inson boshqa hech kimdan va hech narsadan qo'rqmaydi. Bandalardan qo'rqqan odam esa har bir sharpadan titraydigan qulga aylanadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Iymon va Tavakkul Bilan Qo'rquvni Davolash",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Qo'rquv kelganda Payg'ambarimiz (s.a.v) o'rgatgan duolarni: «Hasbunallohu va ni'mal vakil» (Alloh bizga yetarlidir, U naqadar go'zal vakildir) aytish ruhiyatga cheksiz sabot baxsh etadi. Farzandga tonggi va kechki himoya duolarini (Ayatul Kursiy, Falaq, Nos suralarini) o'qib yurish odatini singdirish unga ruhiy qalqon bo'ladi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Muvaffaqiyatsizlikdan Qo'rqish Sindromi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Ko'p bolalar xato qilishdan yoki yutqazib qo'yishdan qo'rqib, yangi ishlarni boshlashga jur'at etolmaydilar. Ota-ona xato qilgan bolani koyimasdan, aksincha xatolar – muvaffaqiyatga olib boruvchi eng yaxshi saboq ekanini tushuntirishi kerak.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "O'lim va Qazo Qorquviga To'g'ri Munosabat",
            "subtitle": "Bugungi amaliy qadam",
            "content": "O'limdan vahimaga tushish emas, balki unga go'zal amallar bilan tayyorgarlik ko'rish lozim. Ajal va rizq faqat Allohning izmida ekani, belgilangan soatdan bir soniya oldin ham, keyin ham o'lim kelmasligi bola qalbiga yengilmas xotirjamlik bag'ishlaydi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Qo'rqoqlik (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Qo'rqoqlik (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Overcoming Childhood Fears (Part 2)",
        "summary": "Spiritual protection through morning & evening adhkar, Ayatul Kursi, trusting in Allah (Tawakkul), and resilience.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Overcoming Childhood Fears (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Alloh taolo Qur'onda buyuradi: «Bas, odamlardan qo'rqmanglar, Mendan qo'rqinglar!» (Moida surasi, 44-oyat).",
            "example": "Qalbida Allohdan qo'rquvi bo'lgan inson boshqa hech kimdan va hech narsadan qo'rqmaydi. Bandalardan qo'rqqan odam esa har bir sharpadan titraydigan qulga aylanadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Spiritual protection through morning & evening adhkar, Ayatul Kursi, trusting in Allah (Tawakkul), and resilience. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Ko'p bolalar xato qilishdan yoki yutqazib qo'yishdan qo'rqib, yangi ishlarni boshlashga jur'at etolmaydilar. Ota-ona xato qilgan bolani koyimasdan, aksincha xatolar – muvaffaqiyatga olib boruvchi eng yaxshi saboq ekanini tushuntirishi kerak.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "O'limdan vahimaga tushish emas, balki unga go'zal amallar bilan tayyorgarlik ko'rish lozim. Ajal va rizq faqat Allohning izmida ekani, belgilangan soatdan bir soniya oldin ham, keyin ham o'lim kelmasligi bola qalbiga yengilmas xotirjamlik bag'ishlaydi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Overcoming Childhood Fears (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Overcoming Childhood Fears (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Преодоление детских страхов (Часть 2)",
        "summary": "Духовная защита: утренние и вечерние зикры, Аят аль-Курси, упование на Аллаха (таваккуль) и стойкость.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Преодоление детских страхов (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Alloh taolo Qur'onda buyuradi: «Bas, odamlardan qo'rqmanglar, Mendan qo'rqinglar!» (Moida surasi, 44-oyat).",
            "example": "Qalbida Allohdan qo'rquvi bo'lgan inson boshqa hech kimdan va hech narsadan qo'rqmaydi. Bandalardan qo'rqqan odam esa har bir sharpadan titraydigan qulga aylanadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Духовная защита: утренние и вечерние зикры, Аят аль-Курси, упование на Аллаха (таваккуль) и стойкость. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Ko'p bolalar xato qilishdan yoki yutqazib qo'yishdan qo'rqib, yangi ishlarni boshlashga jur'at etolmaydilar. Ota-ona xato qilgan bolani koyimasdan, aksincha xatolar – muvaffaqiyatga olib boruvchi eng yaxshi saboq ekanini tushuntirishi kerak.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "O'limdan vahimaga tushish emas, balki unga go'zal amallar bilan tayyorgarlik ko'rish lozim. Ajal va rizq faqat Allohning izmida ekani, belgilangan soatdan bir soniya oldin ham, keyin ham o'lim kelmasligi bola qalbiga yengilmas xotirjamlik bag'ishlaydi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Преодоление детских страхов (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Преодоление детских страхов (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "O'zini Noqis His Qilishlik (1-qism)",
    "slug": "dars-23-ozini-noqis-his-qilishlik-1-qism",
    "summary": "Inson tug'ma ravishda o'zini kamchilikli deb hisoblamaydi. Bu illat oiladagi noto'g'ri munosabat, sovuqqonlik va doimiy ta'nalar oqibatida shakllanadi.",
    "order": 23,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "IXI48P7mNME",
    "videoUrl": "https://www.youtube.com/watch?v=IXI48P7mNME",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Noqislik (Kamchilik) Kompleksining Paydo Bo'lish Sabablari",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Inson tug'ma ravishda o'zini kamchilikli deb hisoblamaydi. Bu illat oiladagi noto'g'ri munosabat, sovuqqonlik va doimiy ta'nalar oqibatida shakllanadi.",
        "example": "Bolani «Sen hech narsani eplolmaysan», «Boshing ishlamaydi», «Tentaksan» deb haqorat qilish uning o'ziga bo'lgan ishonchini ildizi bilan qo'porib tashlaydi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Insonning Mukarram Yaratilgani Aqidasi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Alloh taolo Tin surasida marhamat qiladi: «Haqiqatan, Biz insonni eng go'zal qomatda (surat va siyratda) yaratdik» (4-oyat). Har bir bola Allohning mo''jizaviy ijodidir. Uning qadrsiz yoki keraksiz bo'lishi aslo mumkin emas. Bolaga o'zining qadr-qimmatini bilish o'rgatilishi kerak.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Jismoniy Kamchiliklar va Mazax Qilish Xatari",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Bo'yi pastligi, vazni, yuzidagi nuqsoni yoki kiyimidagi yetishmovchiligi sababli bolani mazax qilish Islomda eng qattiq harom qilingan amallardandir (Hujurot surasi, 11-oyat). Ota-ona bunday holatlarda bolaga tashqi ko'rinish emas, balki qalb pokligi va amallar Alloh nazdida qadrli ekanini (hadis: «Alloh sizning suratingizga emas, qalbingiz va amalingizga qaraydi») uqtirishi shart.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Yutuqlarini E'tirof Etish va Maqtash Me'yori",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Bola yaxshi ish qilsa, uni o'z vaqtida maqtash va rag'batlantirish lozim. Doim faqat xatosini qidirish uni umidsizlikka tushiradi. Biroq maqtovda ham me'yordan oshmaslik kerak, toki bolada takabburlik va manmanlik illati paydo bo'lmasin.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: O'zini Noqis His Qilishlik (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («O'zini Noqis His Qilishlik (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "O'zini Noqis His Qilishlik (1-qism)",
        "summary": "Inson tug'ma ravishda o'zini kamchilikli deb hisoblamaydi. Bu illat oiladagi noto'g'ri munosabat, sovuqqonlik va doimiy ta'nalar oqibatida shakllanadi.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Noqislik (Kamchilik) Kompleksining Paydo Bo'lish Sabablari",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Inson tug'ma ravishda o'zini kamchilikli deb hisoblamaydi. Bu illat oiladagi noto'g'ri munosabat, sovuqqonlik va doimiy ta'nalar oqibatida shakllanadi.",
            "example": "Bolani «Sen hech narsani eplolmaysan», «Boshing ishlamaydi», «Tentaksan» deb haqorat qilish uning o'ziga bo'lgan ishonchini ildizi bilan qo'porib tashlaydi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Insonning Mukarram Yaratilgani Aqidasi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Alloh taolo Tin surasida marhamat qiladi: «Haqiqatan, Biz insonni eng go'zal qomatda (surat va siyratda) yaratdik» (4-oyat). Har bir bola Allohning mo''jizaviy ijodidir. Uning qadrsiz yoki keraksiz bo'lishi aslo mumkin emas. Bolaga o'zining qadr-qimmatini bilish o'rgatilishi kerak.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Jismoniy Kamchiliklar va Mazax Qilish Xatari",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Bo'yi pastligi, vazni, yuzidagi nuqsoni yoki kiyimidagi yetishmovchiligi sababli bolani mazax qilish Islomda eng qattiq harom qilingan amallardandir (Hujurot surasi, 11-oyat). Ota-ona bunday holatlarda bolaga tashqi ko'rinish emas, balki qalb pokligi va amallar Alloh nazdida qadrli ekanini (hadis: «Alloh sizning suratingizga emas, qalbingiz va amalingizga qaraydi») uqtirishi shart.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Yutuqlarini E'tirof Etish va Maqtash Me'yori",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Bola yaxshi ish qilsa, uni o'z vaqtida maqtash va rag'batlantirish lozim. Doim faqat xatosini qidirish uni umidsizlikka tushiradi. Biroq maqtovda ham me'yordan oshmaslik kerak, toki bolada takabburlik va manmanlik illati paydo bo'lmasin.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: O'zini Noqis His Qilishlik (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («O'zini Noqis His Qilishlik (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Building Self-Esteem (Part 1)",
        "summary": "Harm of comparing children to others, discovering individual strengths, unconditional parental love, and self-worth.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Building Self-Esteem (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Inson tug'ma ravishda o'zini kamchilikli deb hisoblamaydi. Bu illat oiladagi noto'g'ri munosabat, sovuqqonlik va doimiy ta'nalar oqibatida shakllanadi.",
            "example": "Bolani «Sen hech narsani eplolmaysan», «Boshing ishlamaydi», «Tentaksan» deb haqorat qilish uning o'ziga bo'lgan ishonchini ildizi bilan qo'porib tashlaydi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Harm of comparing children to others, discovering individual strengths, unconditional parental love, and self-worth. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Bo'yi pastligi, vazni, yuzidagi nuqsoni yoki kiyimidagi yetishmovchiligi sababli bolani mazax qilish Islomda eng qattiq harom qilingan amallardandir (Hujurot surasi, 11-oyat). Ota-ona bunday holatlarda bolaga tashqi ko'rinish emas, balki qalb pokligi va amallar Alloh nazdida qadrli ekanini (hadis: «Alloh sizning suratingizga emas, qalbingiz va amalingizga qaraydi») uqtirishi shart.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Bola yaxshi ish qilsa, uni o'z vaqtida maqtash va rag'batlantirish lozim. Doim faqat xatosini qidirish uni umidsizlikka tushiradi. Biroq maqtovda ham me'yordan oshmaslik kerak, toki bolada takabburlik va manmanlik illati paydo bo'lmasin.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Building Self-Esteem (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Building Self-Esteem (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Избавление от чувства неполноценности (Часть 1)",
        "summary": "Вред сравнения детей друг с другом, раскрытие уникальных талантов, безусловная любовь и здоровая самооценка.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Избавление от чувства неполноценности (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Inson tug'ma ravishda o'zini kamchilikli deb hisoblamaydi. Bu illat oiladagi noto'g'ri munosabat, sovuqqonlik va doimiy ta'nalar oqibatida shakllanadi.",
            "example": "Bolani «Sen hech narsani eplolmaysan», «Boshing ishlamaydi», «Tentaksan» deb haqorat qilish uning o'ziga bo'lgan ishonchini ildizi bilan qo'porib tashlaydi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Вред сравнения детей друг с другом, раскрытие уникальных талантов, безусловная любовь и здоровая самооценка. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Bo'yi pastligi, vazni, yuzidagi nuqsoni yoki kiyimidagi yetishmovchiligi sababli bolani mazax qilish Islomda eng qattiq harom qilingan amallardandir (Hujurot surasi, 11-oyat). Ota-ona bunday holatlarda bolaga tashqi ko'rinish emas, balki qalb pokligi va amallar Alloh nazdida qadrli ekanini (hadis: «Alloh sizning suratingizga emas, qalbingiz va amalingizga qaraydi») uqtirishi shart.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Bola yaxshi ish qilsa, uni o'z vaqtida maqtash va rag'batlantirish lozim. Doim faqat xatosini qidirish uni umidsizlikka tushiradi. Biroq maqtovda ham me'yordan oshmaslik kerak, toki bolada takabburlik va manmanlik illati paydo bo'lmasin.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Избавление от чувства неполноценности (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Избавление от чувства неполноценности (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "O'zini Noqis His Qilishlik (2-qism)",
    "slug": "dars-24-ozini-noqis-his-qilishlik-2-qism",
    "summary": "Ota-onalarning eng ko'p qiladigan xatosi: «Falonchining bolasini qara, besh baho oldi, sen esa hech narsaga yaramaysan!» deb taqqoslashdir.",
    "order": 24,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "4kzDr-A-tx8",
    "videoUrl": "https://www.youtube.com/watch?v=4kzDr-A-tx8",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Boshqalarga Solishtirish – Tarbiyaning Eng Katta Kushandasi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Ota-onalarning eng ko'p qiladigan xatosi: «Falonchining bolasini qara, besh baho oldi, sen esa hech narsaga yaramaysan!» deb taqqoslashdir.",
        "example": "Bu taqqoslash bolani yaxshi tomonga o'zgartirmaydi, aksincha uning qalbida o'sha bolaga nisbatan nafrat va hasad, o'ziga nisbatan esa chuqur noqislik hissini uyg'otadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Har Bir Farzandning O'ziga Xos Iqtidori Bor",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Alloh taolo bandalariga iqtidorlarni turlicha taqsimlagan: kimdir zehnli va olim, kimdir mohir usta, kimdir savdogar, kimdir esa jangchi bo'lib yaratilgan. Barcha boladan bir xil narsani (masalan, faqat matematik yoki shifokor bo'lishni) talab qilish nohaqlikdir. Ota-ona farzandining fitratidagi qobiliyatini kashf qilishi va o'sha yo'nalishda qo'llab-quvvatlashi kerak.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Sahobalar Tabiatidagi Xilma-Xillik",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) har bir sahobiyning kuchli jihatini ko'ra bilganlar: Xolid ibn Validni lashkarboshi qildilar, Abu Hurayrani hadis yodlashga yo'naltirdilar, Bilol ibn Rabohni muazzin etib tayinladilar. Hech bir sahobiy boshqasiga o'xshamagan, ammo har biri o'z o'rnida Islomning buyuk ustuniga aylangan.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "O'zini Sevish va Kamtarlik O'rtasidagi Oltin O'rta",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Farzand o'zini Allohning mukammal bandasi sifatida hurmat qilishi kerak, lekin bu manmanlikka aylanmasligi lozim. O'ziga ishonchi baland, ammo boshqalar oldida kamtar bo'lgan shaxs jamiyatda eng suyukli va muvaffaqiyatli insondir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: O'zini Noqis His Qilishlik (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («O'zini Noqis His Qilishlik (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "O'zini Noqis His Qilishlik (2-qism)",
        "summary": "Ota-onalarning eng ko'p qiladigan xatosi: «Falonchining bolasini qara, besh baho oldi, sen esa hech narsaga yaramaysan!» deb taqqoslashdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Boshqalarga Solishtirish – Tarbiyaning Eng Katta Kushandasi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Ota-onalarning eng ko'p qiladigan xatosi: «Falonchining bolasini qara, besh baho oldi, sen esa hech narsaga yaramaysan!» deb taqqoslashdir.",
            "example": "Bu taqqoslash bolani yaxshi tomonga o'zgartirmaydi, aksincha uning qalbida o'sha bolaga nisbatan nafrat va hasad, o'ziga nisbatan esa chuqur noqislik hissini uyg'otadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Har Bir Farzandning O'ziga Xos Iqtidori Bor",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Alloh taolo bandalariga iqtidorlarni turlicha taqsimlagan: kimdir zehnli va olim, kimdir mohir usta, kimdir savdogar, kimdir esa jangchi bo'lib yaratilgan. Barcha boladan bir xil narsani (masalan, faqat matematik yoki shifokor bo'lishni) talab qilish nohaqlikdir. Ota-ona farzandining fitratidagi qobiliyatini kashf qilishi va o'sha yo'nalishda qo'llab-quvvatlashi kerak.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sahobalar Tabiatidagi Xilma-Xillik",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) har bir sahobiyning kuchli jihatini ko'ra bilganlar: Xolid ibn Validni lashkarboshi qildilar, Abu Hurayrani hadis yodlashga yo'naltirdilar, Bilol ibn Rabohni muazzin etib tayinladilar. Hech bir sahobiy boshqasiga o'xshamagan, ammo har biri o'z o'rnida Islomning buyuk ustuniga aylangan.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "O'zini Sevish va Kamtarlik O'rtasidagi Oltin O'rta",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Farzand o'zini Allohning mukammal bandasi sifatida hurmat qilishi kerak, lekin bu manmanlikka aylanmasligi lozim. O'ziga ishonchi baland, ammo boshqalar oldida kamtar bo'lgan shaxs jamiyatda eng suyukli va muvaffaqiyatli insondir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: O'zini Noqis His Qilishlik (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («O'zini Noqis His Qilishlik (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Building Self-Esteem (Part 2)",
        "summary": "Empowering children with household responsibility, honoring their opinions, celebrating progress, and dignity.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Building Self-Esteem (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Ota-onalarning eng ko'p qiladigan xatosi: «Falonchining bolasini qara, besh baho oldi, sen esa hech narsaga yaramaysan!» deb taqqoslashdir.",
            "example": "Bu taqqoslash bolani yaxshi tomonga o'zgartirmaydi, aksincha uning qalbida o'sha bolaga nisbatan nafrat va hasad, o'ziga nisbatan esa chuqur noqislik hissini uyg'otadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Empowering children with household responsibility, honoring their opinions, celebrating progress, and dignity. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) har bir sahobiyning kuchli jihatini ko'ra bilganlar: Xolid ibn Validni lashkarboshi qildilar, Abu Hurayrani hadis yodlashga yo'naltirdilar, Bilol ibn Rabohni muazzin etib tayinladilar. Hech bir sahobiy boshqasiga o'xshamagan, ammo har biri o'z o'rnida Islomning buyuk ustuniga aylangan.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Farzand o'zini Allohning mukammal bandasi sifatida hurmat qilishi kerak, lekin bu manmanlikka aylanmasligi lozim. O'ziga ishonchi baland, ammo boshqalar oldida kamtar bo'lgan shaxs jamiyatda eng suyukli va muvaffaqiyatli insondir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Building Self-Esteem (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Building Self-Esteem (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Избавление от чувства неполноценности (Часть 2)",
        "summary": "Наделение ребенка ответственностью, уважение к его мнению, празднование успехов и взращивание достоинства.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Избавление от чувства неполноценности (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Ota-onalarning eng ko'p qiladigan xatosi: «Falonchining bolasini qara, besh baho oldi, sen esa hech narsaga yaramaysan!» deb taqqoslashdir.",
            "example": "Bu taqqoslash bolani yaxshi tomonga o'zgartirmaydi, aksincha uning qalbida o'sha bolaga nisbatan nafrat va hasad, o'ziga nisbatan esa chuqur noqislik hissini uyg'otadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Наделение ребенка ответственностью, уважение к его мнению, празднование успехов и взращивание достоинства. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) har bir sahobiyning kuchli jihatini ko'ra bilganlar: Xolid ibn Validni lashkarboshi qildilar, Abu Hurayrani hadis yodlashga yo'naltirdilar, Bilol ibn Rabohni muazzin etib tayinladilar. Hech bir sahobiy boshqasiga o'xshamagan, ammo har biri o'z o'rnida Islomning buyuk ustuniga aylangan.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Farzand o'zini Allohning mukammal bandasi sifatida hurmat qilishi kerak, lekin bu manmanlikka aylanmasligi lozim. O'ziga ishonchi baland, ammo boshqalar oldida kamtar bo'lgan shaxs jamiyatda eng suyukli va muvaffaqiyatli insondir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Избавление от чувства неполноценности (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Избавление от чувства неполноценности (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "Hasad",
    "slug": "dars-25-hasad",
    "summary": "Hasad – birovga berilgan ne'matning (boylik, ilm, obro', go'zallik) yo'q bo'lishini xohlash va uning muvaffaqiyatidan ichi kuyishdir.",
    "order": 25,
    "estimatedMinutes": 5,
    "ageGroup": "6-9",
    "xpReward": 15,
    "isFree": false,
    "videoId": "MBxv-HEH82U",
    "videoUrl": "https://www.youtube.com/watch?v=MBxv-HEH82U",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Hasadning Ta'rifi va Qabihligi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Hasad – birovga berilgan ne'matning (boylik, ilm, obro', go'zallik) yo'q bo'lishini xohlash va uning muvaffaqiyatidan ichi kuyishdir.",
        "example": "Payg'ambarimiz (s.a.v) ogohlantiradilar: «Hasaddan saqlaninglar! Chunki olov o'tinni kuydirib kul qilganidek, hasad ham yaxshi amallarni yeb bitiradi».",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Hasad – Iblisning Birinchi Gunohi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Osmonu falakda sodir etilgan eng birinchi gunoh hasad bo'lgan: Iblis Odam alayhissalomga berilgan fazilatga hasad qilib, sajda qilishdan bosh tortdi va la'natga uchradi. Yerdagi ilk qotillik ham (Qobilning Hobilni o'ldirishi) hasad sababli sodir bo'ldi. Hasad qotillik va halokatga yetaklovchi zahardir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Aka-Uka va Farzandlar O'rtasida Hasadni Qo'zg'atmaslik",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Yusuf (a.s) va uning akalari qissasi bunga eng katta ibratdir. Akalari otalari Yoqub (a.s) Yusufni ko'proq yaxshi ko'radi deb o'ylab, hasad o'tida uni quduqqa tashladilar. Ota-ona farzandlariga muhabbat, sovg'a ulashish va e'tiborda qat'iy adolat qilishi shart. Bitta bolani ko'kka ko'tarib, boshqasini kamsitish oilada hasad olovini yoqadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Hasaddan Qalbni Poklash Davosi",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Hasad qilayotgan inson aslida Allohning taqsimotiga qarshi norozilik bildirgan bo'ladi. Bolaga birovning yutug'ini ko'rganda «MashaAlloh, BarakaAlloh» deb duo qilish, boshqalar uchun xursand bo'lish va o'ziga berilgan ne'matlarga shukr qilish o'rgatiladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Hasad",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Hasad») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Hasad",
        "summary": "Hasad – birovga berilgan ne'matning (boylik, ilm, obro', go'zallik) yo'q bo'lishini xohlash va uning muvaffaqiyatidan ichi kuyishdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Hasadning Ta'rifi va Qabihligi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Hasad – birovga berilgan ne'matning (boylik, ilm, obro', go'zallik) yo'q bo'lishini xohlash va uning muvaffaqiyatidan ichi kuyishdir.",
            "example": "Payg'ambarimiz (s.a.v) ogohlantiradilar: «Hasaddan saqlaninglar! Chunki olov o'tinni kuydirib kul qilganidek, hasad ham yaxshi amallarni yeb bitiradi».",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Hasad – Iblisning Birinchi Gunohi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Osmonu falakda sodir etilgan eng birinchi gunoh hasad bo'lgan: Iblis Odam alayhissalomga berilgan fazilatga hasad qilib, sajda qilishdan bosh tortdi va la'natga uchradi. Yerdagi ilk qotillik ham (Qobilning Hobilni o'ldirishi) hasad sababli sodir bo'ldi. Hasad qotillik va halokatga yetaklovchi zahardir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Aka-Uka va Farzandlar O'rtasida Hasadni Qo'zg'atmaslik",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Yusuf (a.s) va uning akalari qissasi bunga eng katta ibratdir. Akalari otalari Yoqub (a.s) Yusufni ko'proq yaxshi ko'radi deb o'ylab, hasad o'tida uni quduqqa tashladilar. Ota-ona farzandlariga muhabbat, sovg'a ulashish va e'tiborda qat'iy adolat qilishi shart. Bitta bolani ko'kka ko'tarib, boshqasini kamsitish oilada hasad olovini yoqadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Hasaddan Qalbni Poklash Davosi",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Hasad qilayotgan inson aslida Allohning taqsimotiga qarshi norozilik bildirgan bo'ladi. Bolaga birovning yutug'ini ko'rganda «MashaAlloh, BarakaAlloh» deb duo qilish, boshqalar uchun xursand bo'lish va o'ziga berilgan ne'matlarga shukr qilish o'rgatiladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Hasad",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Hasad») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Overcoming Envy and Sibling Rivalry",
        "summary": "Signs of hasad, fostering contentment (Qana'ah), celebrating others' blessings, and equal parental treatment.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Overcoming Envy and Sibling Rivalry",
            "subtitle": "Real-life Context & Introduction",
            "content": "Hasad – birovga berilgan ne'matning (boylik, ilm, obro', go'zallik) yo'q bo'lishini xohlash va uning muvaffaqiyatidan ichi kuyishdir.",
            "example": "Payg'ambarimiz (s.a.v) ogohlantiradilar: «Hasaddan saqlaninglar! Chunki olov o'tinni kuydirib kul qilganidek, hasad ham yaxshi amallarni yeb bitiradi».",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Signs of hasad, fostering contentment (Qana'ah), celebrating others' blessings, and equal parental treatment. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Yusuf (a.s) va uning akalari qissasi bunga eng katta ibratdir. Akalari otalari Yoqub (a.s) Yusufni ko'proq yaxshi ko'radi deb o'ylab, hasad o'tida uni quduqqa tashladilar. Ota-ona farzandlariga muhabbat, sovg'a ulashish va e'tiborda qat'iy adolat qilishi shart. Bitta bolani ko'kka ko'tarib, boshqasini kamsitish oilada hasad olovini yoqadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Hasad qilayotgan inson aslida Allohning taqsimotiga qarshi norozilik bildirgan bo'ladi. Bolaga birovning yutug'ini ko'rganda «MashaAlloh, BarakaAlloh» deb duo qilish, boshqalar uchun xursand bo'lish va o'ziga berilgan ne'matlarga shukr qilish o'rgatiladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Overcoming Envy and Sibling Rivalry",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Overcoming Envy and Sibling Rivalry'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Преодоление зависти и соперничества",
        "summary": "Признаки зависти, воспитание чувства довольства (канаат), радость за чужие успехи и равное отношение к детям.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Преодоление зависти и соперничества",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Hasad – birovga berilgan ne'matning (boylik, ilm, obro', go'zallik) yo'q bo'lishini xohlash va uning muvaffaqiyatidan ichi kuyishdir.",
            "example": "Payg'ambarimiz (s.a.v) ogohlantiradilar: «Hasaddan saqlaninglar! Chunki olov o'tinni kuydirib kul qilganidek, hasad ham yaxshi amallarni yeb bitiradi».",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Признаки зависти, воспитание чувства довольства (канаат), радость за чужие успехи и равное отношение к детям. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Yusuf (a.s) va uning akalari qissasi bunga eng katta ibratdir. Akalari otalari Yoqub (a.s) Yusufni ko'proq yaxshi ko'radi deb o'ylab, hasad o'tida uni quduqqa tashladilar. Ota-ona farzandlariga muhabbat, sovg'a ulashish va e'tiborda qat'iy adolat qilishi shart. Bitta bolani ko'kka ko'tarib, boshqasini kamsitish oilada hasad olovini yoqadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Hasad qilayotgan inson aslida Allohning taqsimotiga qarshi norozilik bildirgan bo'ladi. Bolaga birovning yutug'ini ko'rganda «MashaAlloh, BarakaAlloh» deb duo qilish, boshqalar uchun xursand bo'lish va o'ziga berilgan ne'matlarga shukr qilish o'rgatiladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Преодоление зависти и соперничества",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Преодоление зависти и соперничества»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "G'azab",
    "slug": "dars-26-gazab",
    "summary": "G'azab – inson vujudidagi otashin his-tuyg'udir. Payg'ambarimiz (s.a.v) aytadilar: «Haqiqatan, g'azab shaytondandir, shayton esa olovdan yaratilgan. Olov esa faqat suv bilan o'chiriladi. Qachon biringiz g'azablansa, tahorat qilsin!»",
    "order": 26,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "Q6UkbHPk_xg",
    "videoUrl": "https://www.youtube.com/watch?v=Q6UkbHPk_xg",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "G'azabning Tabiiy va Shaytoniy Ko'rinishi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "G'azab – inson vujudidagi otashin his-tuyg'udir. Payg'ambarimiz (s.a.v) aytadilar: «Haqiqatan, g'azab shaytondandir, shayton esa olovdan yaratilgan. Olov esa faqat suv bilan o'chiriladi. Qachon biringiz g'azablansa, tahorat qilsin!»",
        "example": "Shaxsiy manfaat yoki nafs tufayli jahli chiqish qoralanadi. Faqat Allohning chegaralari buzilgandagina haqiqiy musulmonning g'azabi keladi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Haqiqiy Pahlavon Kim?",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Rasululloh (s.a.v) sahobalardan so'radilar: «Sizlar kimni pahlavon deb hisoblaysiz?» Sahobalar: «Kurashda boshqalarni yiqitgan odamni», deb javob berdilar. Shunda Rasululloh (s.a.v): «Yo'q, haqiqiy pahlavon – g'azabi kelganda o'z nafsini jilovlay olgan kishidir», dedilar. Farzandga janjallashish, birovni urish kuchlilik emas, aksincha jahl chiqqanda sabr qilish chinakam jasorat ekani o'rgatiladi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "G'azab Paytidagi Davolash Choralari",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) sunnatlarida g'azabni yengishning 4 ta amaliy chorasi ko'rsatilgan: 1) «A'uzu billahi minash-shaytonir-rojim» deb Allohdan panoh so'rash; 2) Sukut saqlash (gapirmaslik); 3) Tik turgan bo'lsa o'tirish, o'tirgan bo'lsa yotish; 4) Sovuq suv bilan tahorat olish. Bu usullar inson qon bosimini tushiradi va aqlning qaytadan o'z joyiga kelishini ta'minlaydi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Kechirimlilik va Hilm (Muloyimlik) Fazilati",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Qur'onda jannat ahli sifatlari bayon qilinib: «Ular g'azablarini yutuvchilar va odamlarni avf etuvchilardir. Alloh yaxshilik qiluvchilarni sevadi» (Oli Imron surasi, 134-oyat). Farzandning tabiatida muloyimlik, og'ir-bosiqlik va sabr xislatlarini shakllantirish ota-onaning doimiy vazifasidir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: G'azab",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («G'azab») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "G'azab",
        "summary": "G'azab – inson vujudidagi otashin his-tuyg'udir. Payg'ambarimiz (s.a.v) aytadilar: «Haqiqatan, g'azab shaytondandir, shayton esa olovdan yaratilgan. Olov esa faqat suv bilan o'chiriladi. Qachon biringiz g'azablansa, tahorat qilsin!»",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "G'azabning Tabiiy va Shaytoniy Ko'rinishi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "G'azab – inson vujudidagi otashin his-tuyg'udir. Payg'ambarimiz (s.a.v) aytadilar: «Haqiqatan, g'azab shaytondandir, shayton esa olovdan yaratilgan. Olov esa faqat suv bilan o'chiriladi. Qachon biringiz g'azablansa, tahorat qilsin!»",
            "example": "Shaxsiy manfaat yoki nafs tufayli jahli chiqish qoralanadi. Faqat Allohning chegaralari buzilgandagina haqiqiy musulmonning g'azabi keladi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Haqiqiy Pahlavon Kim?",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Rasululloh (s.a.v) sahobalardan so'radilar: «Sizlar kimni pahlavon deb hisoblaysiz?» Sahobalar: «Kurashda boshqalarni yiqitgan odamni», deb javob berdilar. Shunda Rasululloh (s.a.v): «Yo'q, haqiqiy pahlavon – g'azabi kelganda o'z nafsini jilovlay olgan kishidir», dedilar. Farzandga janjallashish, birovni urish kuchlilik emas, aksincha jahl chiqqanda sabr qilish chinakam jasorat ekani o'rgatiladi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "G'azab Paytidagi Davolash Choralari",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) sunnatlarida g'azabni yengishning 4 ta amaliy chorasi ko'rsatilgan: 1) «A'uzu billahi minash-shaytonir-rojim» deb Allohdan panoh so'rash; 2) Sukut saqlash (gapirmaslik); 3) Tik turgan bo'lsa o'tirish, o'tirgan bo'lsa yotish; 4) Sovuq suv bilan tahorat olish. Bu usullar inson qon bosimini tushiradi va aqlning qaytadan o'z joyiga kelishini ta'minlaydi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Kechirimlilik va Hilm (Muloyimlik) Fazilati",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Qur'onda jannat ahli sifatlari bayon qilinib: «Ular g'azablarini yutuvchilar va odamlarni avf etuvchilardir. Alloh yaxshilik qiluvchilarni sevadi» (Oli Imron surasi, 134-oyat). Farzandning tabiatida muloyimlik, og'ir-bosiqlik va sabr xislatlarini shakllantirish ota-onaning doimiy vazifasidir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: G'azab",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («G'azab») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Anger Management in Children",
        "summary": "Understanding tantrums, Sunnah remedies for rage (changing posture, wudu, silence), and emotional regulation.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Anger Management in Children",
            "subtitle": "Real-life Context & Introduction",
            "content": "G'azab – inson vujudidagi otashin his-tuyg'udir. Payg'ambarimiz (s.a.v) aytadilar: «Haqiqatan, g'azab shaytondandir, shayton esa olovdan yaratilgan. Olov esa faqat suv bilan o'chiriladi. Qachon biringiz g'azablansa, tahorat qilsin!»",
            "example": "Shaxsiy manfaat yoki nafs tufayli jahli chiqish qoralanadi. Faqat Allohning chegaralari buzilgandagina haqiqiy musulmonning g'azabi keladi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Understanding tantrums, Sunnah remedies for rage (changing posture, wudu, silence), and emotional regulation. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) sunnatlarida g'azabni yengishning 4 ta amaliy chorasi ko'rsatilgan: 1) «A'uzu billahi minash-shaytonir-rojim» deb Allohdan panoh so'rash; 2) Sukut saqlash (gapirmaslik); 3) Tik turgan bo'lsa o'tirish, o'tirgan bo'lsa yotish; 4) Sovuq suv bilan tahorat olish. Bu usullar inson qon bosimini tushiradi va aqlning qaytadan o'z joyiga kelishini ta'minlaydi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Qur'onda jannat ahli sifatlari bayon qilinib: «Ular g'azablarini yutuvchilar va odamlarni avf etuvchilardir. Alloh yaxshilik qiluvchilarni sevadi» (Oli Imron surasi, 134-oyat). Farzandning tabiatida muloyimlik, og'ir-bosiqlik va sabr xislatlarini shakllantirish ota-onaning doimiy vazifasidir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Anger Management in Children",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Anger Management in Children'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Управление гневом у детей",
        "summary": "Природа детских истерик, методы Сунны при гневе (смена позы, омовение, молчание) и эмоциональный контроль.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Управление гневом у детей",
            "subtitle": "Жизненная ситуация и введение",
            "content": "G'azab – inson vujudidagi otashin his-tuyg'udir. Payg'ambarimiz (s.a.v) aytadilar: «Haqiqatan, g'azab shaytondandir, shayton esa olovdan yaratilgan. Olov esa faqat suv bilan o'chiriladi. Qachon biringiz g'azablansa, tahorat qilsin!»",
            "example": "Shaxsiy manfaat yoki nafs tufayli jahli chiqish qoralanadi. Faqat Allohning chegaralari buzilgandagina haqiqiy musulmonning g'azabi keladi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Природа детских истерик, методы Сунны при гневе (смена позы, омовение, молчание) и эмоциональный контроль. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) sunnatlarida g'azabni yengishning 4 ta amaliy chorasi ko'rsatilgan: 1) «A'uzu billahi minash-shaytonir-rojim» deb Allohdan panoh so'rash; 2) Sukut saqlash (gapirmaslik); 3) Tik turgan bo'lsa o'tirish, o'tirgan bo'lsa yotish; 4) Sovuq suv bilan tahorat olish. Bu usullar inson qon bosimini tushiradi va aqlning qaytadan o'z joyiga kelishini ta'minlaydi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Qur'onda jannat ahli sifatlari bayon qilinib: «Ular g'azablarini yutuvchilar va odamlarni avf etuvchilardir. Alloh yaxshilik qiluvchilarni sevadi» (Oli Imron surasi, 134-oyat). Farzandning tabiatida muloyimlik, og'ir-bosiqlik va sabr xislatlarini shakllantirish ota-onaning doimiy vazifasidir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Управление гневом у детей",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Управление гневом у детей»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "Taqvo",
    "slug": "dars-27-taqvo",
    "summary": "Taqvo so'zi «saqlanish», «ehtiyot bo'lish» ma'nolarini anglatadi. Ya'ni, inson o'zi bilan Allohning azobi o'rtasiga toat-ibodatni va solih amallarni qalqon qilishi demakdir.",
    "order": 27,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "7hOwWDCXMu0",
    "videoUrl": "https://www.youtube.com/watch?v=7hOwWDCXMu0",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Taqvoning Asl Ma'nosi va Ta'rifi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Taqvo so'zi «saqlanish», «ehtiyot bo'lish» ma'nolarini anglatadi. Ya'ni, inson o'zi bilan Allohning azobi o'rtasiga toat-ibodatni va solih amallarni qalqon qilishi demakdir.",
        "example": "Umar ibn Xattob (r.a) Ubay ibn Ka'bdan (r.a) taqvo haqida so'raganlarida: «Tikanzor yo'ldan yurgansizmi?» deb so'radilar. Umar (r.a): «Ha, kiyimlarimni tikanlarga ilintirmaslik uchun juda ehtiyot bo'lib o'tganman», dedilar. Ubay (r.a): «Ana shu ehtiyotkorlik taqvodir!» dedilar.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Xilvatdagi Taqvo – Chinakam Iymon Sinovi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Odamlar ko'z o'ngida taqvodor ko'rinish oson, lekin hech kim ko'rmaydigan xilvatda (yolg'iz qolganda) Allohdan qo'rqib gunohdan tiyilish haqiqiy taqvodir. Payg'ambarimiz (s.a.v) oxiratda tog'dek yaxshiliklari bo'lsa ham, xilvatda gunohlarga qo'l urgani uchun barcha amallari to'zondek sovurilib ketadigan kishilar haqida ogohlantirganlar.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Alloh Ko'rib Turibdi (Muroqaba) Tuyg'usi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Farzand tarbiyasining cho'qqisi – unda «Alloh meni ko'rib turibdi, eshitib turibdi va bilib turibdi» degan mustahkam e'tiqodni shakllantirishdir. Xalifa Umar (r.a) davrida kechasi sutga suv qo'shishni buyurgan onasiga: «Xalifa ko'rmasa ham, Alloh ko'rib turibdi-ku!» degan qizning taqvosi bunga eng yorqin tarixiy namunadir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Farzandga Taqvoni Amalda O'rgatish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Taqvo – quruq so'z emas. Farzandning haromdan, shubhali narsalardan o'zini tiyishi uning har kunlik odatiga aylanishi kerak. Ota-ona o'z hayotida harom luqmadan qochishi, taqvo bilan yashashi farzand uchun eng katta jonli darslikdir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Taqvo",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Taqvo») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Taqvo",
        "summary": "Taqvo so'zi «saqlanish», «ehtiyot bo'lish» ma'nolarini anglatadi. Ya'ni, inson o'zi bilan Allohning azobi o'rtasiga toat-ibodatni va solih amallarni qalqon qilishi demakdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Taqvoning Asl Ma'nosi va Ta'rifi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Taqvo so'zi «saqlanish», «ehtiyot bo'lish» ma'nolarini anglatadi. Ya'ni, inson o'zi bilan Allohning azobi o'rtasiga toat-ibodatni va solih amallarni qalqon qilishi demakdir.",
            "example": "Umar ibn Xattob (r.a) Ubay ibn Ka'bdan (r.a) taqvo haqida so'raganlarida: «Tikanzor yo'ldan yurgansizmi?» deb so'radilar. Umar (r.a): «Ha, kiyimlarimni tikanlarga ilintirmaslik uchun juda ehtiyot bo'lib o'tganman», dedilar. Ubay (r.a): «Ana shu ehtiyotkorlik taqvodir!» dedilar.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Xilvatdagi Taqvo – Chinakam Iymon Sinovi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Odamlar ko'z o'ngida taqvodor ko'rinish oson, lekin hech kim ko'rmaydigan xilvatda (yolg'iz qolganda) Allohdan qo'rqib gunohdan tiyilish haqiqiy taqvodir. Payg'ambarimiz (s.a.v) oxiratda tog'dek yaxshiliklari bo'lsa ham, xilvatda gunohlarga qo'l urgani uchun barcha amallari to'zondek sovurilib ketadigan kishilar haqida ogohlantirganlar.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Alloh Ko'rib Turibdi (Muroqaba) Tuyg'usi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Farzand tarbiyasining cho'qqisi – unda «Alloh meni ko'rib turibdi, eshitib turibdi va bilib turibdi» degan mustahkam e'tiqodni shakllantirishdir. Xalifa Umar (r.a) davrida kechasi sutga suv qo'shishni buyurgan onasiga: «Xalifa ko'rmasa ham, Alloh ko'rib turibdi-ku!» degan qizning taqvosi bunga eng yorqin tarixiy namunadir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Farzandga Taqvoni Amalda O'rgatish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Taqvo – quruq so'z emas. Farzandning haromdan, shubhali narsalardan o'zini tiyishi uning har kunlik odatiga aylanishi kerak. Ota-ona o'z hayotida harom luqmadan qochishi, taqvo bilan yashashi farzand uchun eng katta jonli darslikdir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Taqvo",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Taqvo») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Cultivating God-Consciousness (Taqwa)",
        "summary": "Internal moral compass, feeling Allah's watchful presence everywhere, integrity in private, and joyful obedience.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Cultivating God-Consciousness (Taqwa)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Taqvo so'zi «saqlanish», «ehtiyot bo'lish» ma'nolarini anglatadi. Ya'ni, inson o'zi bilan Allohning azobi o'rtasiga toat-ibodatni va solih amallarni qalqon qilishi demakdir.",
            "example": "Umar ibn Xattob (r.a) Ubay ibn Ka'bdan (r.a) taqvo haqida so'raganlarida: «Tikanzor yo'ldan yurgansizmi?» deb so'radilar. Umar (r.a): «Ha, kiyimlarimni tikanlarga ilintirmaslik uchun juda ehtiyot bo'lib o'tganman», dedilar. Ubay (r.a): «Ana shu ehtiyotkorlik taqvodir!» dedilar.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Internal moral compass, feeling Allah's watchful presence everywhere, integrity in private, and joyful obedience. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Farzand tarbiyasining cho'qqisi – unda «Alloh meni ko'rib turibdi, eshitib turibdi va bilib turibdi» degan mustahkam e'tiqodni shakllantirishdir. Xalifa Umar (r.a) davrida kechasi sutga suv qo'shishni buyurgan onasiga: «Xalifa ko'rmasa ham, Alloh ko'rib turibdi-ku!» degan qizning taqvosi bunga eng yorqin tarixiy namunadir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Taqvo – quruq so'z emas. Farzandning haromdan, shubhali narsalardan o'zini tiyishi uning har kunlik odatiga aylanishi kerak. Ota-ona o'z hayotida harom luqmadan qochishi, taqvo bilan yashashi farzand uchun eng katta jonli darslikdir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Cultivating God-Consciousness (Taqwa)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Cultivating God-Consciousness (Taqwa)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Воспитание богобоязненности (Таква)",
        "summary": "Внутренний компас совести, ощущение постоянного надзора Всевышнего, искренность наедине с собой и послушание.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Воспитание богобоязненности (Таква)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Taqvo so'zi «saqlanish», «ehtiyot bo'lish» ma'nolarini anglatadi. Ya'ni, inson o'zi bilan Allohning azobi o'rtasiga toat-ibodatni va solih amallarni qalqon qilishi demakdir.",
            "example": "Umar ibn Xattob (r.a) Ubay ibn Ka'bdan (r.a) taqvo haqida so'raganlarida: «Tikanzor yo'ldan yurgansizmi?» deb so'radilar. Umar (r.a): «Ha, kiyimlarimni tikanlarga ilintirmaslik uchun juda ehtiyot bo'lib o'tganman», dedilar. Ubay (r.a): «Ana shu ehtiyotkorlik taqvodir!» dedilar.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Внутренний компас совести, ощущение постоянного надзора Всевышнего, искренность наедине с собой и послушание. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Farzand tarbiyasining cho'qqisi – unda «Alloh meni ko'rib turibdi, eshitib turibdi va bilib turibdi» degan mustahkam e'tiqodni shakllantirishdir. Xalifa Umar (r.a) davrida kechasi sutga suv qo'shishni buyurgan onasiga: «Xalifa ko'rmasa ham, Alloh ko'rib turibdi-ku!» degan qizning taqvosi bunga eng yorqin tarixiy namunadir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Taqvo – quruq so'z emas. Farzandning haromdan, shubhali narsalardan o'zini tiyishi uning har kunlik odatiga aylanishi kerak. Ota-ona o'z hayotida harom luqmadan qochishi, taqvo bilan yashashi farzand uchun eng katta jonli darslikdir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Воспитание богобоязненности (Таква)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Воспитание богобоязненности (Таква)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "Birodarlik va Rahmat",
    "slug": "dars-28-birodarlik-va-rahmat",
    "summary": "Alloh taolo Qur'oni Karimda ta'kidlaydi: «Haqiqatan, barcha mo'minlar o'zaro birodardirlar» (Hujurot surasi, 10-oyat).",
    "order": 28,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "2QIUAfv4Ffk",
    "videoUrl": "https://www.youtube.com/watch?v=2QIUAfv4Ffk",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Islomiy Birodarlikning Muqaddasligi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Alloh taolo Qur'oni Karimda ta'kidlaydi: «Haqiqatan, barcha mo'minlar o'zaro birodardirlar» (Hujurot surasi, 10-oyat).",
        "example": "Iymon rishtasi qon-qarindoshlik rishtasidan ham mustahkamroq va yuksakroqdir. Haqiqiy musulmon butun dunyodagi mo'minlarni o'zining jondosh birodari deb biladi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Yagona Tana Misoli",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) marhamat qiladilar: «Mo'minlarning bir-biriga mehr-muhabbat va rahmdillikdagi misoli xuddi bitta tanaga o'xshaydi. Agar uning biror a'zosi og'risa, butun tana bedorlik va isitma bilan unga hamdard bo'ladi». Farzand boshqa musulmonlarning dardi, muammosi va quvonchiga befarq bo'lmaslik, birodarining boshiga tushgan musibatdan qayg'urish ruhida tarbiyalanadi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Mehr-Shafqat (Rahmat) – Mo'minning Ziynati",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) aytadilar: «Raxm qiluvchilarga Rahmon bo'lgan Alloh rahm qiladi. Yerdagilarga rahm qilinglar, osmondagilar sizlarga rahm qilur». Toshbag'irlik, zolimlik va boshqalarning ko'z yoshiga beparvolik iymonsizlik alomatidir. Bolaning qalbida insonlarga, hayvonlarga va barcha tabiatga mehr uyg'otilishi lozim.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Birodarlikni Buzuvchi Illatlar",
        "subtitle": "Bugungi amaliy qadam",
        "content": "G'iybat, chaqimchilik, ayb qidirish, kamsitish va shubha-gumonlar birodarlik rishtasini uzuvchi shaytoniy qurollardir. Farzand do'stining aybini yopuvchi, orqasidan g'iybat qilmaydigan va uning sha'nini himoya qiluvchi mard inson bo'lishga o'rgatiladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Birodarlik va Rahmat",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Birodarlik va Rahmat») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Birodarlik va Rahmat",
        "summary": "Alloh taolo Qur'oni Karimda ta'kidlaydi: «Haqiqatan, barcha mo'minlar o'zaro birodardirlar» (Hujurot surasi, 10-oyat).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Islomiy Birodarlikning Muqaddasligi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Alloh taolo Qur'oni Karimda ta'kidlaydi: «Haqiqatan, barcha mo'minlar o'zaro birodardirlar» (Hujurot surasi, 10-oyat).",
            "example": "Iymon rishtasi qon-qarindoshlik rishtasidan ham mustahkamroq va yuksakroqdir. Haqiqiy musulmon butun dunyodagi mo'minlarni o'zining jondosh birodari deb biladi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Yagona Tana Misoli",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) marhamat qiladilar: «Mo'minlarning bir-biriga mehr-muhabbat va rahmdillikdagi misoli xuddi bitta tanaga o'xshaydi. Agar uning biror a'zosi og'risa, butun tana bedorlik va isitma bilan unga hamdard bo'ladi». Farzand boshqa musulmonlarning dardi, muammosi va quvonchiga befarq bo'lmaslik, birodarining boshiga tushgan musibatdan qayg'urish ruhida tarbiyalanadi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Mehr-Shafqat (Rahmat) – Mo'minning Ziynati",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) aytadilar: «Raxm qiluvchilarga Rahmon bo'lgan Alloh rahm qiladi. Yerdagilarga rahm qilinglar, osmondagilar sizlarga rahm qilur». Toshbag'irlik, zolimlik va boshqalarning ko'z yoshiga beparvolik iymonsizlik alomatidir. Bolaning qalbida insonlarga, hayvonlarga va barcha tabiatga mehr uyg'otilishi lozim.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Birodarlikni Buzuvchi Illatlar",
            "subtitle": "Bugungi amaliy qadam",
            "content": "G'iybat, chaqimchilik, ayb qidirish, kamsitish va shubha-gumonlar birodarlik rishtasini uzuvchi shaytoniy qurollardir. Farzand do'stining aybini yopuvchi, orqasidan g'iybat qilmaydigan va uning sha'nini himoya qiluvchi mard inson bo'lishga o'rgatiladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Birodarlik va Rahmat",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Birodarlik va Rahmat») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Brotherhood, Compassion and Mercy",
        "summary": "Bonds of Islamic brotherhood, caring for orphans and the weak, empathy for peers, and kindness toward animals.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Brotherhood, Compassion and Mercy",
            "subtitle": "Real-life Context & Introduction",
            "content": "Alloh taolo Qur'oni Karimda ta'kidlaydi: «Haqiqatan, barcha mo'minlar o'zaro birodardirlar» (Hujurot surasi, 10-oyat).",
            "example": "Iymon rishtasi qon-qarindoshlik rishtasidan ham mustahkamroq va yuksakroqdir. Haqiqiy musulmon butun dunyodagi mo'minlarni o'zining jondosh birodari deb biladi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Bonds of Islamic brotherhood, caring for orphans and the weak, empathy for peers, and kindness toward animals. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) aytadilar: «Raxm qiluvchilarga Rahmon bo'lgan Alloh rahm qiladi. Yerdagilarga rahm qilinglar, osmondagilar sizlarga rahm qilur». Toshbag'irlik, zolimlik va boshqalarning ko'z yoshiga beparvolik iymonsizlik alomatidir. Bolaning qalbida insonlarga, hayvonlarga va barcha tabiatga mehr uyg'otilishi lozim.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "G'iybat, chaqimchilik, ayb qidirish, kamsitish va shubha-gumonlar birodarlik rishtasini uzuvchi shaytoniy qurollardir. Farzand do'stining aybini yopuvchi, orqasidan g'iybat qilmaydigan va uning sha'nini himoya qiluvchi mard inson bo'lishga o'rgatiladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Brotherhood, Compassion and Mercy",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Brotherhood, Compassion and Mercy'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Братство, сострадание и милосердие",
        "summary": "Узы исламского братства, забота о сиротах и слабых, эмпатия к ровесникам и гуманное отношение к животным.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Братство, сострадание и милосердие",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Alloh taolo Qur'oni Karimda ta'kidlaydi: «Haqiqatan, barcha mo'minlar o'zaro birodardirlar» (Hujurot surasi, 10-oyat).",
            "example": "Iymon rishtasi qon-qarindoshlik rishtasidan ham mustahkamroq va yuksakroqdir. Haqiqiy musulmon butun dunyodagi mo'minlarni o'zining jondosh birodari deb biladi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Узы исламского братства, забота о сиротах и слабых, эмпатия к ровесникам и гуманное отношение к животным. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) aytadilar: «Raxm qiluvchilarga Rahmon bo'lgan Alloh rahm qiladi. Yerdagilarga rahm qilinglar, osmondagilar sizlarga rahm qilur». Toshbag'irlik, zolimlik va boshqalarning ko'z yoshiga beparvolik iymonsizlik alomatidir. Bolaning qalbida insonlarga, hayvonlarga va barcha tabiatga mehr uyg'otilishi lozim.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "G'iybat, chaqimchilik, ayb qidirish, kamsitish va shubha-gumonlar birodarlik rishtasini uzuvchi shaytoniy qurollardir. Farzand do'stining aybini yopuvchi, orqasidan g'iybat qilmaydigan va uning sha'nini himoya qiluvchi mard inson bo'lishga o'rgatiladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Братство, сострадание и милосердие",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Братство, сострадание и милосердие»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "ISOR (Fidoiylik)",
    "slug": "dars-29-isor-fidoiylik",
    "summary": "Isor – inson o'zi muhtoj bo'lib turgan narsani o'zgalarga ilinishi, birodarining manfaatini o'z manfaatidan ustun qo'yishidir.",
    "order": 29,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "L_Q7XXtV554",
    "videoUrl": "https://www.youtube.com/watch?v=L_Q7XXtV554",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Isorning Ta'rifi: Saxiylikning Oliy Cho'qqisi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Isor – inson o'zi muhtoj bo'lib turgan narsani o'zgalarga ilinishi, birodarining manfaatini o'z manfaatidan ustun qo'yishidir.",
        "example": "Oddiy saxiylik – ortiqcha narsadan berish bo'lsa, isor – o'zida bitta bo'lgan va o'zi juda zarur bo'lgan ne'matni boshqaga berishdir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Ansorlarning Buyuk Isori",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Alloh taolo ansoriylarni maqtaydi: «Ular garchi o'zlarida ehtiyoj bo'lsa-da, o'zgalarni o'zlaridan ustun qo'yurlar» (Hashr surasi, 9-oyat). Madinaga ko'chib kelgan muhojirlarga ansoriylar o'z uylari, mollari va bog'larini teng ikkiga bo'lib berdilar. Bu tarixda tengsiz fidoiylik namunasi bo'lib qoldi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Yarmuk Jangidagi Mislsiz Isor Qissasi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Yarmuk jangida uch nafar og'ir yarador sahobiy (Horis ibn Hishom, Ikroma ibn Abu Jahl, Ayyosh ibn Robi'a) qon yo'qotib suvga zor bo'lib yotgan edilar. Birov suv keltirsa, yonidagi birodarining ingraganini eshitib, «Suvni avval unga ber!» deb qaytaradi. Shu tariqa uchala sahobiy ham suvni o'zidan ko'ra birodariga ilinib, chanqoq holda shahid ketadilar. Bu qissa farzandlar qalbiga xudbinlikdan qutulish va olijanoblik fazilatini singdirishda tengsiz ibratdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Kundalik Hayotda Isorga O'rgatish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Kichik narsalardan boshlash kerak: ovqatning eng mazali qismini ota-onasiga yoki ukasiga ilinish, jamoat transportida joy berish, navbatini keksalarga berish. Isor qilgan insonning qalbi kengayadi, Alloh uning moli va umriga baraka yog'diradi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: ISOR (Fidoiylik)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («ISOR (Fidoiylik)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "ISOR (Fidoiylik)",
        "summary": "Isor – inson o'zi muhtoj bo'lib turgan narsani o'zgalarga ilinishi, birodarining manfaatini o'z manfaatidan ustun qo'yishidir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Isorning Ta'rifi: Saxiylikning Oliy Cho'qqisi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Isor – inson o'zi muhtoj bo'lib turgan narsani o'zgalarga ilinishi, birodarining manfaatini o'z manfaatidan ustun qo'yishidir.",
            "example": "Oddiy saxiylik – ortiqcha narsadan berish bo'lsa, isor – o'zida bitta bo'lgan va o'zi juda zarur bo'lgan ne'matni boshqaga berishdir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Ansorlarning Buyuk Isori",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Alloh taolo ansoriylarni maqtaydi: «Ular garchi o'zlarida ehtiyoj bo'lsa-da, o'zgalarni o'zlaridan ustun qo'yurlar» (Hashr surasi, 9-oyat). Madinaga ko'chib kelgan muhojirlarga ansoriylar o'z uylari, mollari va bog'larini teng ikkiga bo'lib berdilar. Bu tarixda tengsiz fidoiylik namunasi bo'lib qoldi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Yarmuk Jangidagi Mislsiz Isor Qissasi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Yarmuk jangida uch nafar og'ir yarador sahobiy (Horis ibn Hishom, Ikroma ibn Abu Jahl, Ayyosh ibn Robi'a) qon yo'qotib suvga zor bo'lib yotgan edilar. Birov suv keltirsa, yonidagi birodarining ingraganini eshitib, «Suvni avval unga ber!» deb qaytaradi. Shu tariqa uchala sahobiy ham suvni o'zidan ko'ra birodariga ilinib, chanqoq holda shahid ketadilar. Bu qissa farzandlar qalbiga xudbinlikdan qutulish va olijanoblik fazilatini singdirishda tengsiz ibratdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Kundalik Hayotda Isorga O'rgatish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Kichik narsalardan boshlash kerak: ovqatning eng mazali qismini ota-onasiga yoki ukasiga ilinish, jamoat transportida joy berish, navbatini keksalarga berish. Isor qilgan insonning qalbi kengayadi, Alloh uning moli va umriga baraka yog'diradi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: ISOR (Fidoiylik)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («ISOR (Fidoiylik)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Altruism and Selfless Giving (Isor)",
        "summary": "Preferring others over oneself, sharing favorite toys, charity habits, overcoming selfishness, and noble generosity.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Altruism and Selfless Giving (Isor)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Isor – inson o'zi muhtoj bo'lib turgan narsani o'zgalarga ilinishi, birodarining manfaatini o'z manfaatidan ustun qo'yishidir.",
            "example": "Oddiy saxiylik – ortiqcha narsadan berish bo'lsa, isor – o'zida bitta bo'lgan va o'zi juda zarur bo'lgan ne'matni boshqaga berishdir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Preferring others over oneself, sharing favorite toys, charity habits, overcoming selfishness, and noble generosity. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Yarmuk jangida uch nafar og'ir yarador sahobiy (Horis ibn Hishom, Ikroma ibn Abu Jahl, Ayyosh ibn Robi'a) qon yo'qotib suvga zor bo'lib yotgan edilar. Birov suv keltirsa, yonidagi birodarining ingraganini eshitib, «Suvni avval unga ber!» deb qaytaradi. Shu tariqa uchala sahobiy ham suvni o'zidan ko'ra birodariga ilinib, chanqoq holda shahid ketadilar. Bu qissa farzandlar qalbiga xudbinlikdan qutulish va olijanoblik fazilatini singdirishda tengsiz ibratdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Kichik narsalardan boshlash kerak: ovqatning eng mazali qismini ota-onasiga yoki ukasiga ilinish, jamoat transportida joy berish, navbatini keksalarga berish. Isor qilgan insonning qalbi kengayadi, Alloh uning moli va umriga baraka yog'diradi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Altruism and Selfless Giving (Isor)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Altruism and Selfless Giving (Isor)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Самопожертвование и щедрость (Исар)",
        "summary": "Умение отдавать другим лучшее, делиться любимыми вещами, щедрость, преодоление эгоизма и благородство.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Самопожертвование и щедрость (Исар)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Isor – inson o'zi muhtoj bo'lib turgan narsani o'zgalarga ilinishi, birodarining manfaatini o'z manfaatidan ustun qo'yishidir.",
            "example": "Oddiy saxiylik – ortiqcha narsadan berish bo'lsa, isor – o'zida bitta bo'lgan va o'zi juda zarur bo'lgan ne'matni boshqaga berishdir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Умение отдавать другим лучшее, делиться любимыми вещами, щедрость, преодоление эгоизма и благородство. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Yarmuk jangida uch nafar og'ir yarador sahobiy (Horis ibn Hishom, Ikroma ibn Abu Jahl, Ayyosh ibn Robi'a) qon yo'qotib suvga zor bo'lib yotgan edilar. Birov suv keltirsa, yonidagi birodarining ingraganini eshitib, «Suvni avval unga ber!» deb qaytaradi. Shu tariqa uchala sahobiy ham suvni o'zidan ko'ra birodariga ilinib, chanqoq holda shahid ketadilar. Bu qissa farzandlar qalbiga xudbinlikdan qutulish va olijanoblik fazilatini singdirishda tengsiz ibratdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Kichik narsalardan boshlash kerak: ovqatning eng mazali qismini ota-onasiga yoki ukasiga ilinish, jamoat transportida joy berish, navbatini keksalarga berish. Isor qilgan insonning qalbi kengayadi, Alloh uning moli va umriga baraka yog'diradi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Самопожертвование и щедрость (Исар)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Самопожертвование и щедрость (Исар)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "ruhiy-qatiyat-taqvo-va-gozal-xulq",
    "title": "Avf Qilish (Kechirimlilik)",
    "slug": "dars-30-avf-qilish-kechirimlilik",
    "summary": "Avf qilish – ojizlik yoki taslim bo'lish emas, balki qasd olishga kuchi yetib turgan holatda jazolamasdan kechirib yuborishdir.",
    "order": 30,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "Y_oyc3mHRwU",
    "videoUrl": "https://www.youtube.com/watch?v=Y_oyc3mHRwU",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Kechirimlilik – Kuchlilarning Xislati",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Avf qilish – ojizlik yoki taslim bo'lish emas, balki qasd olishga kuchi yetib turgan holatda jazolamasdan kechirib yuborishdir.",
        "example": "Alloh taolo Qur'oni Karimda buyuradi: «Kechirimli bo'ling, yaxshilikka buyuring va johillardan yuz o'giring!» (A'rof surasi, 199-oyat).",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Makka Fathi Kuni Rasululloh (s.a.v)ning Avflari",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Yigirma yil davomida Payg'ambarimizni (s.a.v) haqorat qilgan, sahobalarni qiynagan va ularni o'z vatanidan quvg'in qilgan Makka mushriklari fath kuni mag'lub bo'lib, o'lim kutib turgan edilar. Rasululloh (s.a.v) ularga: «Bugun sizlarga hech qanday malomat yo'q, boringlar, barchangiz ozodsiz!» dedilar. Bu tengsiz kechirimlilik tufayli minglab odamlar bir zumda Islomni qabul qildi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Gina va Adovatning Ruhni Zaharlashi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Qalbida birovga gina-kudurat saqlab yurgan odam o'z tanasida zahar ko'tarib yurgandek bo'ladi. Uning uyqusi buziladi, sog'lig'i yemiriladi. Kechirish esa – qalbni og'ir zanjirlardan xalos etish va yengil nafas olish demakdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Oilada Kechirimli Muhitni Yaratish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Ota-ona oilada bir-birining kamchiliklarini kechirishi, bolaning xatolarini jazo bilan emas, sabr va tushuntirish bilan kutib olishi kerak. Farzand xato qilganda «Kechirasiz» deyishni va birov uzr so'rasa, uning uzrini qabul qilishni oilada amalda ko'rib o'rganishi lozim.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Avf Qilish (Kechirimlilik)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Avf Qilish (Kechirimlilik)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Avf Qilish (Kechirimlilik)",
        "summary": "Avf qilish – ojizlik yoki taslim bo'lish emas, balki qasd olishga kuchi yetib turgan holatda jazolamasdan kechirib yuborishdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Kechirimlilik – Kuchlilarning Xislati",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Avf qilish – ojizlik yoki taslim bo'lish emas, balki qasd olishga kuchi yetib turgan holatda jazolamasdan kechirib yuborishdir.",
            "example": "Alloh taolo Qur'oni Karimda buyuradi: «Kechirimli bo'ling, yaxshilikka buyuring va johillardan yuz o'giring!» (A'rof surasi, 199-oyat).",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Makka Fathi Kuni Rasululloh (s.a.v)ning Avflari",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Yigirma yil davomida Payg'ambarimizni (s.a.v) haqorat qilgan, sahobalarni qiynagan va ularni o'z vatanidan quvg'in qilgan Makka mushriklari fath kuni mag'lub bo'lib, o'lim kutib turgan edilar. Rasululloh (s.a.v) ularga: «Bugun sizlarga hech qanday malomat yo'q, boringlar, barchangiz ozodsiz!» dedilar. Bu tengsiz kechirimlilik tufayli minglab odamlar bir zumda Islomni qabul qildi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Gina va Adovatning Ruhni Zaharlashi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Qalbida birovga gina-kudurat saqlab yurgan odam o'z tanasida zahar ko'tarib yurgandek bo'ladi. Uning uyqusi buziladi, sog'lig'i yemiriladi. Kechirish esa – qalbni og'ir zanjirlardan xalos etish va yengil nafas olish demakdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Oilada Kechirimli Muhitni Yaratish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Ota-ona oilada bir-birining kamchiliklarini kechirishi, bolaning xatolarini jazo bilan emas, sabr va tushuntirish bilan kutib olishi kerak. Farzand xato qilganda «Kechirasiz» deyishni va birov uzr so'rasa, uning uzrini qabul qilishni oilada amalda ko'rib o'rganishi lozim.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Avf Qilish (Kechirimlilik)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Avf Qilish (Kechirimlilik)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Forgiveness and Magnanimity",
        "summary": "Overcoming resentment, reconciling after disputes, letting go of grudges, and the prophetic model of mercy.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Forgiveness and Magnanimity",
            "subtitle": "Real-life Context & Introduction",
            "content": "Avf qilish – ojizlik yoki taslim bo'lish emas, balki qasd olishga kuchi yetib turgan holatda jazolamasdan kechirib yuborishdir.",
            "example": "Alloh taolo Qur'oni Karimda buyuradi: «Kechirimli bo'ling, yaxshilikka buyuring va johillardan yuz o'giring!» (A'rof surasi, 199-oyat).",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Overcoming resentment, reconciling after disputes, letting go of grudges, and the prophetic model of mercy. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Qalbida birovga gina-kudurat saqlab yurgan odam o'z tanasida zahar ko'tarib yurgandek bo'ladi. Uning uyqusi buziladi, sog'lig'i yemiriladi. Kechirish esa – qalbni og'ir zanjirlardan xalos etish va yengil nafas olish demakdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Ota-ona oilada bir-birining kamchiliklarini kechirishi, bolaning xatolarini jazo bilan emas, sabr va tushuntirish bilan kutib olishi kerak. Farzand xato qilganda «Kechirasiz» deyishni va birov uzr so'rasa, uning uzrini qabul qilishni oilada amalda ko'rib o'rganishi lozim.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Forgiveness and Magnanimity",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Forgiveness and Magnanimity'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Прощение и великодушие (Авф)",
        "summary": "Умение прощать обиды, примирение после ссор, отказ от злопамятства и пророческий пример милосердия.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Прощение и великодушие (Авф)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Avf qilish – ojizlik yoki taslim bo'lish emas, balki qasd olishga kuchi yetib turgan holatda jazolamasdan kechirib yuborishdir.",
            "example": "Alloh taolo Qur'oni Karimda buyuradi: «Kechirimli bo'ling, yaxshilikka buyuring va johillardan yuz o'giring!» (A'rof surasi, 199-oyat).",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Умение прощать обиды, примирение после ссор, отказ от злопамятства и пророческий пример милосердия. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Qalbida birovga gina-kudurat saqlab yurgan odam o'z tanasida zahar ko'tarib yurgandek bo'ladi. Uning uyqusi buziladi, sog'lig'i yemiriladi. Kechirish esa – qalbni og'ir zanjirlardan xalos etish va yengil nafas olish demakdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Ota-ona oilada bir-birining kamchiliklarini kechirishi, bolaning xatolarini jazo bilan emas, sabr va tushuntirish bilan kutib olishi kerak. Farzand xato qilganda «Kechirasiz» deyishni va birov uzr so'rasa, uning uzrini qabul qilishni oilada amalda ko'rib o'rganishi lozim.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Прощение и великодушие (Авф)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Прощение и великодушие (Авф)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Ota-Ona Haqqi (1-qism)",
    "slug": "dars-31-ota-ona-haqqi-1-qism",
    "summary": "Qur'onda Alloh taolo O'ziga ibodat qilishdan keyin darhol ota-onaga yaxshilik qilishni buyuradi: «Rabbingiz Uning O'zigagina ibodat qilishingizni va ota-onaga yaxshilik qilishni qat'iy amr etdi» (Isro surasi, 23-oyat).",
    "order": 31,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": true,
    "videoId": "Duom3Zln-AQ",
    "videoUrl": "https://www.youtube.com/watch?v=Duom3Zln-AQ",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Tavhiddan Keyingi Eng Buyuk Farz",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Qur'onda Alloh taolo O'ziga ibodat qilishdan keyin darhol ota-onaga yaxshilik qilishni buyuradi: «Rabbingiz Uning O'zigagina ibodat qilishingizni va ota-onaga yaxshilik qilishni qat'iy amr etdi» (Isro surasi, 23-oyat).",
        "example": "Ota-onaga itoat qilish va ularning xizmatida bo'lish barcha nafl ibodatlardan, hatto ixtiyoriy jihoddan ham ustun turadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "«Uff!» Deyishning Ham Haromligi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Alloh taolo oyat davomida ogohlantiradi: «Agar ulardan biri yoki har ikkisi huzuringda keksalik yoshiga yetsa, ularga: «Uff!» dema va ularga baqirma! Ularga doimo go'zal so'z so'zla!» Ota-ona oldida qovog'ini solish, norozilik ohangida nafas chiqarish («uff» deyish) eng og'ir gunohi kabiralardan hisoblanadi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Onaning Uch Karra Ustunligi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Bir sahobiy Rasulullohdan (s.a.v) so'radi: «Ey Allohning Rasuli, mening go'zal muomalamga eng haqli inson kim?» U zot: «Onang», dedilar. «Keyin-chi?» dedilar. «Onang», dedilar. «Keyin-chi?» dedilar. «Onang», dedilar. To'rtinchi marta so'raganida: «Keyin otang», deb javob berdilar. Ona 9 oy qornida ko'tardi, o'lim xavfi bilan dunyoga keltirdi, kechalari uxlamay ko'krak suti berdi. Shuning uchun onaning haqqi cheksizdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Ota-onaga Oq Bo'lishning Dahshatli Oqibatlari",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Ota-onani norozi qilgan (oq bo'lgan) kishining hech qanday toat-ibodati, namozi va hajji qabul bo'lmaydi va unga jannat hidi ham harom qilinadi. Ota-onaga qilingan yomonlikning jazosi oxiratga qoldirilmasdan, shu dunyoning o'zidayoq banda boshiga kulfat bo'lib yog'iladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Ota-Ona Haqqi (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Ota-Ona Haqqi (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Ota-Ona Haqqi (1-qism)",
        "summary": "Qur'onda Alloh taolo O'ziga ibodat qilishdan keyin darhol ota-onaga yaxshilik qilishni buyuradi: «Rabbingiz Uning O'zigagina ibodat qilishingizni va ota-onaga yaxshilik qilishni qat'iy amr etdi» (Isro surasi, 23-oyat).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Tavhiddan Keyingi Eng Buyuk Farz",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Qur'onda Alloh taolo O'ziga ibodat qilishdan keyin darhol ota-onaga yaxshilik qilishni buyuradi: «Rabbingiz Uning O'zigagina ibodat qilishingizni va ota-onaga yaxshilik qilishni qat'iy amr etdi» (Isro surasi, 23-oyat).",
            "example": "Ota-onaga itoat qilish va ularning xizmatida bo'lish barcha nafl ibodatlardan, hatto ixtiyoriy jihoddan ham ustun turadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "«Uff!» Deyishning Ham Haromligi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Alloh taolo oyat davomida ogohlantiradi: «Agar ulardan biri yoki har ikkisi huzuringda keksalik yoshiga yetsa, ularga: «Uff!» dema va ularga baqirma! Ularga doimo go'zal so'z so'zla!» Ota-ona oldida qovog'ini solish, norozilik ohangida nafas chiqarish («uff» deyish) eng og'ir gunohi kabiralardan hisoblanadi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Onaning Uch Karra Ustunligi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Bir sahobiy Rasulullohdan (s.a.v) so'radi: «Ey Allohning Rasuli, mening go'zal muomalamga eng haqli inson kim?» U zot: «Onang», dedilar. «Keyin-chi?» dedilar. «Onang», dedilar. «Keyin-chi?» dedilar. «Onang», dedilar. To'rtinchi marta so'raganida: «Keyin otang», deb javob berdilar. Ona 9 oy qornida ko'tardi, o'lim xavfi bilan dunyoga keltirdi, kechalari uxlamay ko'krak suti berdi. Shuning uchun onaning haqqi cheksizdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Ota-onaga Oq Bo'lishning Dahshatli Oqibatlari",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Ota-onani norozi qilgan (oq bo'lgan) kishining hech qanday toat-ibodati, namozi va hajji qabul bo'lmaydi va unga jannat hidi ham harom qilinadi. Ota-onaga qilingan yomonlikning jazosi oxiratga qoldirilmasdan, shu dunyoning o'zidayoq banda boshiga kulfat bo'lib yog'iladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Ota-Ona Haqqi (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Ota-Ona Haqqi (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Rights of Parents (Part 1)",
        "summary": "Parental status in Islam, gratitude to mother and father, gentle speech, and avoiding slightest disrespect ('uff').",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Rights of Parents (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Qur'onda Alloh taolo O'ziga ibodat qilishdan keyin darhol ota-onaga yaxshilik qilishni buyuradi: «Rabbingiz Uning O'zigagina ibodat qilishingizni va ota-onaga yaxshilik qilishni qat'iy amr etdi» (Isro surasi, 23-oyat).",
            "example": "Ota-onaga itoat qilish va ularning xizmatida bo'lish barcha nafl ibodatlardan, hatto ixtiyoriy jihoddan ham ustun turadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Parental status in Islam, gratitude to mother and father, gentle speech, and avoiding slightest disrespect ('uff'). Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Bir sahobiy Rasulullohdan (s.a.v) so'radi: «Ey Allohning Rasuli, mening go'zal muomalamga eng haqli inson kim?» U zot: «Onang», dedilar. «Keyin-chi?» dedilar. «Onang», dedilar. «Keyin-chi?» dedilar. «Onang», dedilar. To'rtinchi marta so'raganida: «Keyin otang», deb javob berdilar. Ona 9 oy qornida ko'tardi, o'lim xavfi bilan dunyoga keltirdi, kechalari uxlamay ko'krak suti berdi. Shuning uchun onaning haqqi cheksizdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Ota-onani norozi qilgan (oq bo'lgan) kishining hech qanday toat-ibodati, namozi va hajji qabul bo'lmaydi va unga jannat hidi ham harom qilinadi. Ota-onaga qilingan yomonlikning jazosi oxiratga qoldirilmasdan, shu dunyoning o'zidayoq banda boshiga kulfat bo'lib yog'iladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Rights of Parents (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Rights of Parents (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Права родителей (Часть 1)",
        "summary": "Высокий статус родителей в Исламе, благодарность матери и отцу, почтительная речь и запрет говорить «уф».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Права родителей (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Qur'onda Alloh taolo O'ziga ibodat qilishdan keyin darhol ota-onaga yaxshilik qilishni buyuradi: «Rabbingiz Uning O'zigagina ibodat qilishingizni va ota-onaga yaxshilik qilishni qat'iy amr etdi» (Isro surasi, 23-oyat).",
            "example": "Ota-onaga itoat qilish va ularning xizmatida bo'lish barcha nafl ibodatlardan, hatto ixtiyoriy jihoddan ham ustun turadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Высокий статус родителей в Исламе, благодарность матери и отцу, почтительная речь и запрет говорить «уф». Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Bir sahobiy Rasulullohdan (s.a.v) so'radi: «Ey Allohning Rasuli, mening go'zal muomalamga eng haqli inson kim?» U zot: «Onang», dedilar. «Keyin-chi?» dedilar. «Onang», dedilar. «Keyin-chi?» dedilar. «Onang», dedilar. To'rtinchi marta so'raganida: «Keyin otang», deb javob berdilar. Ona 9 oy qornida ko'tardi, o'lim xavfi bilan dunyoga keltirdi, kechalari uxlamay ko'krak suti berdi. Shuning uchun onaning haqqi cheksizdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Ota-onani norozi qilgan (oq bo'lgan) kishining hech qanday toat-ibodati, namozi va hajji qabul bo'lmaydi va unga jannat hidi ham harom qilinadi. Ota-onaga qilingan yomonlikning jazosi oxiratga qoldirilmasdan, shu dunyoning o'zidayoq banda boshiga kulfat bo'lib yog'iladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Права родителей (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Права родителей (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Ota-Ona Haqqi (2-qism)",
    "slug": "dars-32-ota-ona-haqqi-2-qism",
    "summary": "Ota-ona keksayib, yosh boladek bo'lib qolganlarida, ularni hech qachon qariyalar uyiga topshirmaslik, balki boshga toj qilib parvarishlash farzandning qarzidir.",
    "order": 32,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "vDKPRZMbXWY",
    "videoUrl": "https://www.youtube.com/watch?v=vDKPRZMbXWY",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Keksalik Davridagi Ehtirom va Parvarish",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Ota-ona keksayib, yosh boladek bo'lib qolganlarida, ularni hech qachon qariyalar uyiga topshirmaslik, balki boshga toj qilib parvarishlash farzandning qarzidir.",
        "example": "Rasululloh (s.a.v) aytdilar: «Ota-onasi keksaygan vaqtida ularning xizmatini qilib jannatga kira olmagan insonning burni yerga ishqalansin (xor bo'lsin)!»",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Ota-onaning Vafotidan Keyingi Haqlari",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Bani Salama qabilasidan bir kishi so'radi: «Ey Allohning Rasuli, ota-onam vafotidan keyin ularga yaxshilik qilish imkoni bormi?» U zot: «Ha, ularning haqqiga duo va istig'for aytishing, vasiyatlarini bajarishing, ular orqali bog'langan qarindoshlik rishtalarini bog'lashing va do'stlarini hurmat qilishingdir», dedilar. Ota-onaning vafoti bilan ularning haqqi tugamaydi, solih farzandning duosi orqali qabrdagi ota-onaning darajasi muttasil ko'tarilib boradi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Dunyo Tashvishlari Sabab Ularni Unutmaslik",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "O'zining ro'zg'ori, xotini yoki ishi bilan band bo'lib, ota-onasidan xabar olmaydigan, haftalab bir marta qo'ng'iroq qilmaydigan farzand noshukurdir. Har kuni ota-onadan xabar olish, ularning duosini olish insonning umri va rizqiga mislsiz baraka keltiradi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Boshqalarga Qaytar Dunyo Qonuni",
        "subtitle": "Bugungi amaliy qadam",
        "content": "«Otangga nima qilsang, bolangdan shuni ko'rasan». Farzand o'z ota-onasiga qanday muomala qilsa, kelajakda uning o'z farzandlari ham unga xuddi shu muomalani qaytaradi. Solih zurriyot istagan inson, avvalo o'zi ota-onasiga solih farzand bo'lishi shart.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Ota-Ona Haqqi (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Ota-Ona Haqqi (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Ota-Ona Haqqi (2-qism)",
        "summary": "Ota-ona keksayib, yosh boladek bo'lib qolganlarida, ularni hech qachon qariyalar uyiga topshirmaslik, balki boshga toj qilib parvarishlash farzandning qarzidir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Keksalik Davridagi Ehtirom va Parvarish",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Ota-ona keksayib, yosh boladek bo'lib qolganlarida, ularni hech qachon qariyalar uyiga topshirmaslik, balki boshga toj qilib parvarishlash farzandning qarzidir.",
            "example": "Rasululloh (s.a.v) aytdilar: «Ota-onasi keksaygan vaqtida ularning xizmatini qilib jannatga kira olmagan insonning burni yerga ishqalansin (xor bo'lsin)!»",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Ota-onaning Vafotidan Keyingi Haqlari",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Bani Salama qabilasidan bir kishi so'radi: «Ey Allohning Rasuli, ota-onam vafotidan keyin ularga yaxshilik qilish imkoni bormi?» U zot: «Ha, ularning haqqiga duo va istig'for aytishing, vasiyatlarini bajarishing, ular orqali bog'langan qarindoshlik rishtalarini bog'lashing va do'stlarini hurmat qilishingdir», dedilar. Ota-onaning vafoti bilan ularning haqqi tugamaydi, solih farzandning duosi orqali qabrdagi ota-onaning darajasi muttasil ko'tarilib boradi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Dunyo Tashvishlari Sabab Ularni Unutmaslik",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "O'zining ro'zg'ori, xotini yoki ishi bilan band bo'lib, ota-onasidan xabar olmaydigan, haftalab bir marta qo'ng'iroq qilmaydigan farzand noshukurdir. Har kuni ota-onadan xabar olish, ularning duosini olish insonning umri va rizqiga mislsiz baraka keltiradi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Boshqalarga Qaytar Dunyo Qonuni",
            "subtitle": "Bugungi amaliy qadam",
            "content": "«Otangga nima qilsang, bolangdan shuni ko'rasan». Farzand o'z ota-onasiga qanday muomala qilsa, kelajakda uning o'z farzandlari ham unga xuddi shu muomalani qaytaradi. Solih zurriyot istagan inson, avvalo o'zi ota-onasiga solih farzand bo'lishi shart.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Ota-Ona Haqqi (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Ota-Ona Haqqi (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Rights of Parents (Part 2)",
        "summary": "Serving elderly parents, praying for parents during life and after demise, obedience within religious limits, and barakah.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Rights of Parents (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Ota-ona keksayib, yosh boladek bo'lib qolganlarida, ularni hech qachon qariyalar uyiga topshirmaslik, balki boshga toj qilib parvarishlash farzandning qarzidir.",
            "example": "Rasululloh (s.a.v) aytdilar: «Ota-onasi keksaygan vaqtida ularning xizmatini qilib jannatga kira olmagan insonning burni yerga ishqalansin (xor bo'lsin)!»",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Serving elderly parents, praying for parents during life and after demise, obedience within religious limits, and barakah. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "O'zining ro'zg'ori, xotini yoki ishi bilan band bo'lib, ota-onasidan xabar olmaydigan, haftalab bir marta qo'ng'iroq qilmaydigan farzand noshukurdir. Har kuni ota-onadan xabar olish, ularning duosini olish insonning umri va rizqiga mislsiz baraka keltiradi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "«Otangga nima qilsang, bolangdan shuni ko'rasan». Farzand o'z ota-onasiga qanday muomala qilsa, kelajakda uning o'z farzandlari ham unga xuddi shu muomalani qaytaradi. Solih zurriyot istagan inson, avvalo o'zi ota-onasiga solih farzand bo'lishi shart.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Rights of Parents (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Rights of Parents (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Права родителей (Часть 2)",
        "summary": "Служение пожилым родителям, постоянное дуа за них при жизни и после ухода, благословение послушания.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Права родителей (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Ota-ona keksayib, yosh boladek bo'lib qolganlarida, ularni hech qachon qariyalar uyiga topshirmaslik, balki boshga toj qilib parvarishlash farzandning qarzidir.",
            "example": "Rasululloh (s.a.v) aytdilar: «Ota-onasi keksaygan vaqtida ularning xizmatini qilib jannatga kira olmagan insonning burni yerga ishqalansin (xor bo'lsin)!»",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Служение пожилым родителям, постоянное дуа за них при жизни и после ухода, благословение послушания. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "O'zining ro'zg'ori, xotini yoki ishi bilan band bo'lib, ota-onasidan xabar olmaydigan, haftalab bir marta qo'ng'iroq qilmaydigan farzand noshukurdir. Har kuni ota-onadan xabar olish, ularning duosini olish insonning umri va rizqiga mislsiz baraka keltiradi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "«Otangga nima qilsang, bolangdan shuni ko'rasan». Farzand o'z ota-onasiga qanday muomala qilsa, kelajakda uning o'z farzandlari ham unga xuddi shu muomalani qaytaradi. Solih zurriyot istagan inson, avvalo o'zi ota-onasiga solih farzand bo'lishi shart.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Права родителей (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Права родителей (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Qarindoshlar Haqqi (1-qism)",
    "slug": "dars-33-qarindoshlar-haqqi-1-qism",
    "summary": "Silai rahm – qon-qarindoshlik rishtalarini bog'lash, ular bilan aloqada bo'lish va hol-ahvolidan xabardor bo'lish demakdir.",
    "order": 33,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "xIQVSiVJKB0",
    "videoUrl": "https://www.youtube.com/watch?v=xIQVSiVJKB0",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Silai Rahmning Farzligi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Silai rahm – qon-qarindoshlik rishtalarini bog'lash, ular bilan aloqada bo'lish va hol-ahvolidan xabardor bo'lish demakdir.",
        "example": "Alloh taolo aytadi: «Qarindoshlik rishtalarini uzishdan qo'rqinglar! Albatta, Alloh sizlarni kuzatuvchidir» (Niso surasi, 1-oyat).",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Arshga Osilgan Rahm Rishtasi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Hadisi qudsiyda Alloh taolo marhamat qiladi: «Men Rahmonman, qarindoshlik esa – Rahm dir. Men unga O'z ismimdan ism berdim. Kim uni bog'lasa, Men uni (rahmatimga) bog'layman. Kim uni uzsa, Men uni (rahmatimdan) uzaman!». Qarindoshlikni uzgan odam Allohning bevosita la'natiga uchraydi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Umr Uzayishi va Rizq Kengayishi Kaliti",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) ajoyib xushxabar beradilar: «Kimni rizqi keng bo'lishi va umri uzoq (barakali) bo'lishi quvontirsa, qarindoshlik rishtalarini bog'lasin!» Silai rahm insonning moliga baraka olib keluvchi va balo-qazolarni daf etuvchi eng kuchli omillardan biridir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Amakilar, Xolalar va Tog'alarning O'rni",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Hadisi sharifda aytiladi: «Otaning akasi/ukasi (amaki) – ota o'rnidadir, onaning opasi/singlisi (xola) – ona o'rnidadir». Bolaga yoshligidanoq amaki, amma, tog'a va xolalarni o'z ota-onasidek hurmat qilish va ularga yaxshilik qilish odobi singdiriladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Qarindoshlar Haqqi (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Qarindoshlar Haqqi (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Qarindoshlar Haqqi (1-qism)",
        "summary": "Silai rahm – qon-qarindoshlik rishtalarini bog'lash, ular bilan aloqada bo'lish va hol-ahvolidan xabardor bo'lish demakdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Silai Rahmning Farzligi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Silai rahm – qon-qarindoshlik rishtalarini bog'lash, ular bilan aloqada bo'lish va hol-ahvolidan xabardor bo'lish demakdir.",
            "example": "Alloh taolo aytadi: «Qarindoshlik rishtalarini uzishdan qo'rqinglar! Albatta, Alloh sizlarni kuzatuvchidir» (Niso surasi, 1-oyat).",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Arshga Osilgan Rahm Rishtasi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Hadisi qudsiyda Alloh taolo marhamat qiladi: «Men Rahmonman, qarindoshlik esa – Rahm dir. Men unga O'z ismimdan ism berdim. Kim uni bog'lasa, Men uni (rahmatimga) bog'layman. Kim uni uzsa, Men uni (rahmatimdan) uzaman!». Qarindoshlikni uzgan odam Allohning bevosita la'natiga uchraydi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Umr Uzayishi va Rizq Kengayishi Kaliti",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) ajoyib xushxabar beradilar: «Kimni rizqi keng bo'lishi va umri uzoq (barakali) bo'lishi quvontirsa, qarindoshlik rishtalarini bog'lasin!» Silai rahm insonning moliga baraka olib keluvchi va balo-qazolarni daf etuvchi eng kuchli omillardan biridir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Amakilar, Xolalar va Tog'alarning O'rni",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Hadisi sharifda aytiladi: «Otaning akasi/ukasi (amaki) – ota o'rnidadir, onaning opasi/singlisi (xola) – ona o'rnidadir». Bolaga yoshligidanoq amaki, amma, tog'a va xolalarni o'z ota-onasidek hurmat qilish va ularga yaxshilik qilish odobi singdiriladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Qarindoshlar Haqqi (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Qarindoshlar Haqqi (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Kinship Ties (Part 1)",
        "summary": "Significance of Silat ar-Rahim, visiting grandparents, aunts and uncles, maintaining warm family relationships.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Kinship Ties (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Silai rahm – qon-qarindoshlik rishtalarini bog'lash, ular bilan aloqada bo'lish va hol-ahvolidan xabardor bo'lish demakdir.",
            "example": "Alloh taolo aytadi: «Qarindoshlik rishtalarini uzishdan qo'rqinglar! Albatta, Alloh sizlarni kuzatuvchidir» (Niso surasi, 1-oyat).",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Significance of Silat ar-Rahim, visiting grandparents, aunts and uncles, maintaining warm family relationships. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) ajoyib xushxabar beradilar: «Kimni rizqi keng bo'lishi va umri uzoq (barakali) bo'lishi quvontirsa, qarindoshlik rishtalarini bog'lasin!» Silai rahm insonning moliga baraka olib keluvchi va balo-qazolarni daf etuvchi eng kuchli omillardan biridir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Hadisi sharifda aytiladi: «Otaning akasi/ukasi (amaki) – ota o'rnidadir, onaning opasi/singlisi (xola) – ona o'rnidadir». Bolaga yoshligidanoq amaki, amma, tog'a va xolalarni o'z ota-onasidek hurmat qilish va ularga yaxshilik qilish odobi singdiriladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Kinship Ties (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Kinship Ties (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Поддержание родственных связей (Часть 1)",
        "summary": "Важность поддержания родственных связей (Силатур-рахим), визиты к бабушкам, дедушкам и родственникам.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Поддержание родственных связей (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Silai rahm – qon-qarindoshlik rishtalarini bog'lash, ular bilan aloqada bo'lish va hol-ahvolidan xabardor bo'lish demakdir.",
            "example": "Alloh taolo aytadi: «Qarindoshlik rishtalarini uzishdan qo'rqinglar! Albatta, Alloh sizlarni kuzatuvchidir» (Niso surasi, 1-oyat).",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Важность поддержания родственных связей (Силатур-рахим), визиты к бабушкам, дедушкам и родственникам. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) ajoyib xushxabar beradilar: «Kimni rizqi keng bo'lishi va umri uzoq (barakali) bo'lishi quvontirsa, qarindoshlik rishtalarini bog'lasin!» Silai rahm insonning moliga baraka olib keluvchi va balo-qazolarni daf etuvchi eng kuchli omillardan biridir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Hadisi sharifda aytiladi: «Otaning akasi/ukasi (amaki) – ota o'rnidadir, onaning opasi/singlisi (xola) – ona o'rnidadir». Bolaga yoshligidanoq amaki, amma, tog'a va xolalarni o'z ota-onasidek hurmat qilish va ularga yaxshilik qilish odobi singdiriladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Поддержание родственных связей (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Поддержание родственных связей (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Qarindoshlar Haqqi (2-qism)",
    "slug": "dars-34-qarindoshlar-haqqi-2-qism",
    "summary": "Rasululloh (s.a.v) marhamat qiladilar: «Qarindoshlik rishtasini bog'lovchi kishi – unga kelganga boruvchi (javob qaytaruvchi) emas, balki qarindoshlari aloqani uzganda ham unga borib bog'lagan kishidir».",
    "order": 34,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "y6oGYJPoP_g",
    "videoUrl": "https://www.youtube.com/watch?v=y6oGYJPoP_g",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Haqiqiy Silai Rahm Qanday Bo'ladi?",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Rasululloh (s.a.v) marhamat qiladilar: «Qarindoshlik rishtasini bog'lovchi kishi – unga kelganga boruvchi (javob qaytaruvchi) emas, balki qarindoshlari aloqani uzganda ham unga borib bog'lagan kishidir».",
        "example": "«Ular biznikiga kelmadi, men ham bormayman» deyish – savdogarlikdir, xolis ibodat emas. Aloqani uzgan qarindoshga birinchi bo'lib qo'l uzatish chinakam qahramonlikdir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Yomonlik Qilgan Qarindoshga Yaxshilik Bilan Javob Berish",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Bir kishi Rasulullohga (s.a.v): «Mening qarindoshlarim bor, men ularga yaxshilik qilaman, ular esa menga yomonlik qiladi. Men ularga muloyimman, ular menga qo'pol», dedi. Shunda u zot (s.a.v): «Agar sen shunday bo'lsang, xuddi ularning yuziga issiq kul sepayotgandeksan va modomiki shunday davom etsang, Alloh tarafidan senga ularga qarshi bir yordamchi farishta birga bo'ladi», dedilar. Yomonlikka yaxshilik bilan javob qaytarish dushman qarindoshni ham sodiq do'stga aylantiradi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Meros Tufayli Qarindoshlar Orasiga Sovuqlik Tushishi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Bugungi jamiyatdagi eng katta fitnalardan biri – ota-onadan qolgan hovli, yer yoki mol-dunyo tufayli aka-uka, opa-singillarning yovlashib ketishidir. Arzimas matoh uchun qon-qardoshlik rishtalarini uzish – oxiratni dunyoga sotish demakdir. Meros taqsimoti faqat shariat mezonlari asosida adolatli hal qilinishi shart.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Farzandlarga Qarindoshlik Shajarasini O'rgatish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Hazrati Umar (r.a) aytganlar: «Nasabingizni (yetti pushtingizni) o'rganinglar, toki qarindoshlik rishtalarini bog'lay olasizlar». Ota-ona farzandlarini qarindoshlar bilan tanishtirishi, bayramlarda birga ziyoratga olib borishi va ularni bir-biriga yaqinlashtirishi zarur.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Qarindoshlar Haqqi (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Qarindoshlar Haqqi (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Qarindoshlar Haqqi (2-qism)",
        "summary": "Rasululloh (s.a.v) marhamat qiladilar: «Qarindoshlik rishtasini bog'lovchi kishi – unga kelganga boruvchi (javob qaytaruvchi) emas, balki qarindoshlari aloqani uzganda ham unga borib bog'lagan kishidir».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Haqiqiy Silai Rahm Qanday Bo'ladi?",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Rasululloh (s.a.v) marhamat qiladilar: «Qarindoshlik rishtasini bog'lovchi kishi – unga kelganga boruvchi (javob qaytaruvchi) emas, balki qarindoshlari aloqani uzganda ham unga borib bog'lagan kishidir».",
            "example": "«Ular biznikiga kelmadi, men ham bormayman» deyish – savdogarlikdir, xolis ibodat emas. Aloqani uzgan qarindoshga birinchi bo'lib qo'l uzatish chinakam qahramonlikdir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Yomonlik Qilgan Qarindoshga Yaxshilik Bilan Javob Berish",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Bir kishi Rasulullohga (s.a.v): «Mening qarindoshlarim bor, men ularga yaxshilik qilaman, ular esa menga yomonlik qiladi. Men ularga muloyimman, ular menga qo'pol», dedi. Shunda u zot (s.a.v): «Agar sen shunday bo'lsang, xuddi ularning yuziga issiq kul sepayotgandeksan va modomiki shunday davom etsang, Alloh tarafidan senga ularga qarshi bir yordamchi farishta birga bo'ladi», dedilar. Yomonlikka yaxshilik bilan javob qaytarish dushman qarindoshni ham sodiq do'stga aylantiradi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Meros Tufayli Qarindoshlar Orasiga Sovuqlik Tushishi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Bugungi jamiyatdagi eng katta fitnalardan biri – ota-onadan qolgan hovli, yer yoki mol-dunyo tufayli aka-uka, opa-singillarning yovlashib ketishidir. Arzimas matoh uchun qon-qardoshlik rishtalarini uzish – oxiratni dunyoga sotish demakdir. Meros taqsimoti faqat shariat mezonlari asosida adolatli hal qilinishi shart.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Farzandlarga Qarindoshlik Shajarasini O'rgatish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Hazrati Umar (r.a) aytganlar: «Nasabingizni (yetti pushtingizni) o'rganinglar, toki qarindoshlik rishtalarini bog'lay olasizlar». Ota-ona farzandlarini qarindoshlar bilan tanishtirishi, bayramlarda birga ziyoratga olib borishi va ularni bir-biriga yaqinlashtirishi zarur.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Qarindoshlar Haqqi (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Qarindoshlar Haqqi (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Kinship Ties (Part 2)",
        "summary": "Reaching out to difficult relatives, gifts among cousins, preserving unity, and avoiding family estrangement.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Kinship Ties (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Rasululloh (s.a.v) marhamat qiladilar: «Qarindoshlik rishtasini bog'lovchi kishi – unga kelganga boruvchi (javob qaytaruvchi) emas, balki qarindoshlari aloqani uzganda ham unga borib bog'lagan kishidir».",
            "example": "«Ular biznikiga kelmadi, men ham bormayman» deyish – savdogarlikdir, xolis ibodat emas. Aloqani uzgan qarindoshga birinchi bo'lib qo'l uzatish chinakam qahramonlikdir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Reaching out to difficult relatives, gifts among cousins, preserving unity, and avoiding family estrangement. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Bugungi jamiyatdagi eng katta fitnalardan biri – ota-onadan qolgan hovli, yer yoki mol-dunyo tufayli aka-uka, opa-singillarning yovlashib ketishidir. Arzimas matoh uchun qon-qardoshlik rishtalarini uzish – oxiratni dunyoga sotish demakdir. Meros taqsimoti faqat shariat mezonlari asosida adolatli hal qilinishi shart.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Hazrati Umar (r.a) aytganlar: «Nasabingizni (yetti pushtingizni) o'rganinglar, toki qarindoshlik rishtalarini bog'lay olasizlar». Ota-ona farzandlarini qarindoshlar bilan tanishtirishi, bayramlarda birga ziyoratga olib borishi va ularni bir-biriga yaqinlashtirishi zarur.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Kinship Ties (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Kinship Ties (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Поддержание родственных связей (Часть 2)",
        "summary": "Связь даже с теми, кто отдаляется, подарки родственникам, сохранение семейного единства и преодоление обид.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Поддержание родственных связей (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Rasululloh (s.a.v) marhamat qiladilar: «Qarindoshlik rishtasini bog'lovchi kishi – unga kelganga boruvchi (javob qaytaruvchi) emas, balki qarindoshlari aloqani uzganda ham unga borib bog'lagan kishidir».",
            "example": "«Ular biznikiga kelmadi, men ham bormayman» deyish – savdogarlikdir, xolis ibodat emas. Aloqani uzgan qarindoshga birinchi bo'lib qo'l uzatish chinakam qahramonlikdir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Связь даже с теми, кто отдаляется, подарки родственникам, сохранение семейного единства и преодоление обид. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Bugungi jamiyatdagi eng katta fitnalardan biri – ota-onadan qolgan hovli, yer yoki mol-dunyo tufayli aka-uka, opa-singillarning yovlashib ketishidir. Arzimas matoh uchun qon-qardoshlik rishtalarini uzish – oxiratni dunyoga sotish demakdir. Meros taqsimoti faqat shariat mezonlari asosida adolatli hal qilinishi shart.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Hazrati Umar (r.a) aytganlar: «Nasabingizni (yetti pushtingizni) o'rganinglar, toki qarindoshlik rishtalarini bog'lay olasizlar». Ota-ona farzandlarini qarindoshlar bilan tanishtirishi, bayramlarda birga ziyoratga olib borishi va ularni bir-biriga yaqinlashtirishi zarur.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Поддержание родственных связей (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Поддержание родственных связей (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Qo'shni Haqqi",
    "slug": "dars-35-qoshni-haqqi",
    "summary": "Payg'ambarimiz (s.a.v) aytadilar: «Jabroil (a.s) menga qo'shni haqida shunchalik ko'p vasiyat qildiki, hatto qo'shnini qo'shniga merosxo'r qilib qo'yarmikan, deb o'ylab qoldim».",
    "order": 35,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "IJUxB-uX63o",
    "videoUrl": "https://www.youtube.com/watch?v=IJUxB-uX63o",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Jabroil (a.s)ning Qo'shni Haqidagi Vasiyatlari",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Payg'ambarimiz (s.a.v) aytadilar: «Jabroil (a.s) menga qo'shni haqida shunchalik ko'p vasiyat qildiki, hatto qo'shnini qo'shniga merosxo'r qilib qo'yarmikan, deb o'ylab qoldim».",
        "example": "Islomda qo'shnining haqqi qarindoshning haqqi darajasiga ko'tarilgan.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Qo'shniga Ozor Berishning Haromligi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Rasululloh (s.a.v) uch marta: «Allohga qasamki, iymon keltirmabdi!» dedilar. «Kim, ey Rasululloh?» deb so'ralganda: «Qo'shnisi uning yomonligidan omonda bo'lmagan kishi», deb javob berdilar. Baland musiqa qo'yish, eshik oldiga chiqindi tashlash, devor orqasidan shovqin qilish qo'shniga yetkazilgan og'ir ozordir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Qo'shnining 3 Toifasi va Ularning Haqlari",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "1) Bitta haqqi bor qo'shni – g'ayridin qo'shni (faqat qo'shnichilik haqqi); 2) Ikkita haqqi bor qo'shni – musulmon qo'shni (qo'shnichilik va Islom haqqi); 3) Uchta haqqi bor qo'shni – qarindosh bo'lgan musulmon qo'shni (qo'shnichilik, Islom va silai rahm haqqi). Qo'shni g'ayridin yoki gunohkor bo'lsa ham, unga yaxshi muomala qilish Islomning go'zalligidir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Uydan Oldin Qo'shni Tanlash Hikmati",
        "subtitle": "Bugungi amaliy qadam",
        "content": "«Al-jor qablal-dor» – ya'ni «Hovli sotib olishdan oldin qo'shnini surishtir». Yaxshi qo'shni – hayotiy saodat, yomon qo'shni esa – doimiy kulfatdir. Farzandga qo'shnilar bilan salom-alik qilish, ularga yordam berish va hurmat ko'rsatish odobi o'rgatiladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Qo'shni Haqqi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Qo'shni Haqqi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Qo'shni Haqqi",
        "summary": "Payg'ambarimiz (s.a.v) aytadilar: «Jabroil (a.s) menga qo'shni haqida shunchalik ko'p vasiyat qildiki, hatto qo'shnini qo'shniga merosxo'r qilib qo'yarmikan, deb o'ylab qoldim».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Jabroil (a.s)ning Qo'shni Haqidagi Vasiyatlari",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Jabroil (a.s) menga qo'shni haqida shunchalik ko'p vasiyat qildiki, hatto qo'shnini qo'shniga merosxo'r qilib qo'yarmikan, deb o'ylab qoldim».",
            "example": "Islomda qo'shnining haqqi qarindoshning haqqi darajasiga ko'tarilgan.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Qo'shniga Ozor Berishning Haromligi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Rasululloh (s.a.v) uch marta: «Allohga qasamki, iymon keltirmabdi!» dedilar. «Kim, ey Rasululloh?» deb so'ralganda: «Qo'shnisi uning yomonligidan omonda bo'lmagan kishi», deb javob berdilar. Baland musiqa qo'yish, eshik oldiga chiqindi tashlash, devor orqasidan shovqin qilish qo'shniga yetkazilgan og'ir ozordir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Qo'shnining 3 Toifasi va Ularning Haqlari",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "1) Bitta haqqi bor qo'shni – g'ayridin qo'shni (faqat qo'shnichilik haqqi); 2) Ikkita haqqi bor qo'shni – musulmon qo'shni (qo'shnichilik va Islom haqqi); 3) Uchta haqqi bor qo'shni – qarindosh bo'lgan musulmon qo'shni (qo'shnichilik, Islom va silai rahm haqqi). Qo'shni g'ayridin yoki gunohkor bo'lsa ham, unga yaxshi muomala qilish Islomning go'zalligidir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Uydan Oldin Qo'shni Tanlash Hikmati",
            "subtitle": "Bugungi amaliy qadam",
            "content": "«Al-jor qablal-dor» – ya'ni «Hovli sotib olishdan oldin qo'shnini surishtir». Yaxshi qo'shni – hayotiy saodat, yomon qo'shni esa – doimiy kulfatdir. Farzandga qo'shnilar bilan salom-alik qilish, ularga yordam berish va hurmat ko'rsatish odobi o'rgatiladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Qo'shni Haqqi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Qo'shni Haqqi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Rights of Neighbors in Islam",
        "summary": "Gabriel's testament on neighbors, sharing food, keeping noise down, checking on sick neighbors, and hospitality.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Rights of Neighbors in Islam",
            "subtitle": "Real-life Context & Introduction",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Jabroil (a.s) menga qo'shni haqida shunchalik ko'p vasiyat qildiki, hatto qo'shnini qo'shniga merosxo'r qilib qo'yarmikan, deb o'ylab qoldim».",
            "example": "Islomda qo'shnining haqqi qarindoshning haqqi darajasiga ko'tarilgan.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Gabriel's testament on neighbors, sharing food, keeping noise down, checking on sick neighbors, and hospitality. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "1) Bitta haqqi bor qo'shni – g'ayridin qo'shni (faqat qo'shnichilik haqqi); 2) Ikkita haqqi bor qo'shni – musulmon qo'shni (qo'shnichilik va Islom haqqi); 3) Uchta haqqi bor qo'shni – qarindosh bo'lgan musulmon qo'shni (qo'shnichilik, Islom va silai rahm haqqi). Qo'shni g'ayridin yoki gunohkor bo'lsa ham, unga yaxshi muomala qilish Islomning go'zalligidir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "«Al-jor qablal-dor» – ya'ni «Hovli sotib olishdan oldin qo'shnini surishtir». Yaxshi qo'shni – hayotiy saodat, yomon qo'shni esa – doimiy kulfatdir. Farzandga qo'shnilar bilan salom-alik qilish, ularga yordam berish va hurmat ko'rsatish odobi o'rgatiladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Rights of Neighbors in Islam",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Rights of Neighbors in Islam'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Права соседей в Исламе",
        "summary": "Наставления Джибриля о правах соседей, угощение едой, соблюдение тишины, помощь и добрососедство.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Права соседей в Исламе",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Jabroil (a.s) menga qo'shni haqida shunchalik ko'p vasiyat qildiki, hatto qo'shnini qo'shniga merosxo'r qilib qo'yarmikan, deb o'ylab qoldim».",
            "example": "Islomda qo'shnining haqqi qarindoshning haqqi darajasiga ko'tarilgan.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Наставления Джибриля о правах соседей, угощение едой, соблюдение тишины, помощь и добрососедство. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "1) Bitta haqqi bor qo'shni – g'ayridin qo'shni (faqat qo'shnichilik haqqi); 2) Ikkita haqqi bor qo'shni – musulmon qo'shni (qo'shnichilik va Islom haqqi); 3) Uchta haqqi bor qo'shni – qarindosh bo'lgan musulmon qo'shni (qo'shnichilik, Islom va silai rahm haqqi). Qo'shni g'ayridin yoki gunohkor bo'lsa ham, unga yaxshi muomala qilish Islomning go'zalligidir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "«Al-jor qablal-dor» – ya'ni «Hovli sotib olishdan oldin qo'shnini surishtir». Yaxshi qo'shni – hayotiy saodat, yomon qo'shni esa – doimiy kulfatdir. Farzandga qo'shnilar bilan salom-alik qilish, ularga yordam berish va hurmat ko'rsatish odobi o'rgatiladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Права соседей в Исламе",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Права соседей в Исламе»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Muallimlar Haqida",
    "slug": "dars-36-muallimlar-haqida",
    "summary": "Rasululloh (s.a.v) faxr bilan: «Haqiqatan, men muallim (o'rgatuvchi) qilib yuborildim», deganlar.",
    "order": 36,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "t36qlXN2zGg",
    "videoUrl": "https://www.youtube.com/watch?v=t36qlXN2zGg",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Muallimlik – Payg'ambarlar Kasbi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Rasululloh (s.a.v) faxr bilan: «Haqiqatan, men muallim (o'rgatuvchi) qilib yuborildim», deganlar.",
        "example": "Ilm o'rgatuvchi muallim – insonni jaholat zulmatidan ilm nuriga olib chiquvchi ma'naviy otadir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Olim va Muallimning Cheksiz Fazilati",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Hadisda aytiladi: «Olimning obiddan (faqat ibodat qiluvchidan) ustunligi – to'lin oyning boshqa yulduzlardan ustunligi kabidir». Hatto suvdagi baliqlar, inidagi chumolilar ham ilm o'rgatuvchi muallimning haqqiga xayrli duolar qilib turadi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Ustozga Kamtarlik Qilish Majburiyati",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Hazrati Ali (r.a) aytadilar: «Menga bitta harf o'rgatgan kishining quliman, xohlasa meni sotsin, xohlasa ozod qilsin». Ustoz oldida o'zini past tutish xorlik emas, balki ilmning ulug'ligini e'tirof etishdir. Ustoziga takabburlik qilgan inson hech qachon yetuk olim bo'la olmaydi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Ustoz Haqqini Poymol Qilish Oqibati",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Ustozning ko'nglini og'ritish, unga behurmatlik qilish ilmdan barakani ketkazadi va insonni jaholatda qoldiradi. Buyuk allomalarning hayotiga qaralsa, ularning barchasi ustozlarining roziligini olib, duolari evaziga yuksak martabalarga yetishgan.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Muallimlar Haqida",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Muallimlar Haqida») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Muallimlar Haqida",
        "summary": "Rasululloh (s.a.v) faxr bilan: «Haqiqatan, men muallim (o'rgatuvchi) qilib yuborildim», deganlar.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Muallimlik – Payg'ambarlar Kasbi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Rasululloh (s.a.v) faxr bilan: «Haqiqatan, men muallim (o'rgatuvchi) qilib yuborildim», deganlar.",
            "example": "Ilm o'rgatuvchi muallim – insonni jaholat zulmatidan ilm nuriga olib chiquvchi ma'naviy otadir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Olim va Muallimning Cheksiz Fazilati",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Hadisda aytiladi: «Olimning obiddan (faqat ibodat qiluvchidan) ustunligi – to'lin oyning boshqa yulduzlardan ustunligi kabidir». Hatto suvdagi baliqlar, inidagi chumolilar ham ilm o'rgatuvchi muallimning haqqiga xayrli duolar qilib turadi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Ustozga Kamtarlik Qilish Majburiyati",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Hazrati Ali (r.a) aytadilar: «Menga bitta harf o'rgatgan kishining quliman, xohlasa meni sotsin, xohlasa ozod qilsin». Ustoz oldida o'zini past tutish xorlik emas, balki ilmning ulug'ligini e'tirof etishdir. Ustoziga takabburlik qilgan inson hech qachon yetuk olim bo'la olmaydi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Ustoz Haqqini Poymol Qilish Oqibati",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Ustozning ko'nglini og'ritish, unga behurmatlik qilish ilmdan barakani ketkazadi va insonni jaholatda qoldiradi. Buyuk allomalarning hayotiga qaralsa, ularning barchasi ustozlarining roziligini olib, duolari evaziga yuksak martabalarga yetishgan.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Muallimlar Haqida",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Muallimlar Haqida») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Respect for Teachers and Mentors",
        "summary": "Revering spiritual and academic educators, etiquette in classroom, gratitude to mentors, and acquiring blessings of knowledge.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Respect for Teachers and Mentors",
            "subtitle": "Real-life Context & Introduction",
            "content": "Rasululloh (s.a.v) faxr bilan: «Haqiqatan, men muallim (o'rgatuvchi) qilib yuborildim», deganlar.",
            "example": "Ilm o'rgatuvchi muallim – insonni jaholat zulmatidan ilm nuriga olib chiquvchi ma'naviy otadir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Revering spiritual and academic educators, etiquette in classroom, gratitude to mentors, and acquiring blessings of knowledge. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Hazrati Ali (r.a) aytadilar: «Menga bitta harf o'rgatgan kishining quliman, xohlasa meni sotsin, xohlasa ozod qilsin». Ustoz oldida o'zini past tutish xorlik emas, balki ilmning ulug'ligini e'tirof etishdir. Ustoziga takabburlik qilgan inson hech qachon yetuk olim bo'la olmaydi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Ustozning ko'nglini og'ritish, unga behurmatlik qilish ilmdan barakani ketkazadi va insonni jaholatda qoldiradi. Buyuk allomalarning hayotiga qaralsa, ularning barchasi ustozlarining roziligini olib, duolari evaziga yuksak martabalarga yetishgan.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Respect for Teachers and Mentors",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Respect for Teachers and Mentors'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Уважение к учителям и наставникам",
        "summary": "Почитание учителей и духовных наставников, этикет на уроках, благодарность и благословение знаний.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Уважение к учителям и наставникам",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Rasululloh (s.a.v) faxr bilan: «Haqiqatan, men muallim (o'rgatuvchi) qilib yuborildim», deganlar.",
            "example": "Ilm o'rgatuvchi muallim – insonni jaholat zulmatidan ilm nuriga olib chiquvchi ma'naviy otadir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Почитание учителей и духовных наставников, этикет на уроках, благодарность и благословение знаний. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Hazrati Ali (r.a) aytadilar: «Menga bitta harf o'rgatgan kishining quliman, xohlasa meni sotsin, xohlasa ozod qilsin». Ustoz oldida o'zini past tutish xorlik emas, balki ilmning ulug'ligini e'tirof etishdir. Ustoziga takabburlik qilgan inson hech qachon yetuk olim bo'la olmaydi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Ustozning ko'nglini og'ritish, unga behurmatlik qilish ilmdan barakani ketkazadi va insonni jaholatda qoldiradi. Buyuk allomalarning hayotiga qaralsa, ularning barchasi ustozlarining roziligini olib, duolari evaziga yuksak martabalarga yetishgan.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Уважение к учителям и наставникам",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Уважение к учителям и наставникам»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Do'st Haqida (1-qism)",
    "slug": "dars-37-dost-haqida-1-qism",
    "summary": "Payg'ambarimiz (s.a.v) qat'iy mezon qo'yadilar: «Kishi o'z do'stining dinidadir. Bas, har biringiz kim bilan do'stlashayotganiga qarasin!».",
    "order": 37,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "GiVjsD3sr9c",
    "videoUrl": "https://www.youtube.com/watch?v=GiVjsD3sr9c",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Inson Do'stining Dinidadir",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Payg'ambarimiz (s.a.v) qat'iy mezon qo'yadilar: «Kishi o'z do'stining dinidadir. Bas, har biringiz kim bilan do'stlashayotganiga qarasin!».",
        "example": "Do'st – insonning ko'zgusi va uning kimligini belgilovchi eng asosiy omildir. Yaxshi do'st jannatga, yomon do'st esa jahannamga yetaklaydi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Yaxshi va Yomon Hamrohning Misoli",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Rasululloh (s.a.v) chiroyli o'xshatish keltirganlar: «Yaxshi hamroh – attor (mushk sotuvchi) kabidir, uning oldida o'tirsang yoki mushk sotib olasan, yoki hech bo'lmaganda xushbo'y hididan bahramand bo'lasan. Yomon hamroh esa – temirchining bosqoni kabidir, yoki kiyimingni kuydiradi, yoki noxush tutuniga chidab o'tirasan». Iymonli do'st davrasida yurgan bola tabiiy ravishda axloqli va ibodatli bo'ladi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Yaxshi Do'st Tanlash Mezonlari",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Ulug'lar do'st tanlashda 4 shartga e'tibor berishni tayinlaganlar: 1) Aqlli bo'lishi (ahmoq do'st foyda keltiraman deb zarar beradi); 2) Go'zal xulqli bo'lishi; 3) Taqvodor bo'lishi (fosiq odam Allohdan qo'rqmaydi, senga ham xiyonat qiladi); 4) Dunyoparast bo'lmasligi. Farzand do'st tanlashda uning boyligiga yoki kiyimiga emas, tarbiyasi va namoziga qarashga o'rgatiladi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Do'stning Oxiratdagi Shafoati",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Hasan Basriy (r.a) aytadilar: «Solih mo'min do'stlarni ko'paytiringlar! Chunki Qiyomat kunida ularning har biri uchun shafoat qilish imkoni beriladi». Do'sting jannatga kirsa, seni ham qidiradi va Allohdan senga jannat so'raydi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Do'st Haqida (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Do'st Haqida (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Do'st Haqida (1-qism)",
        "summary": "Payg'ambarimiz (s.a.v) qat'iy mezon qo'yadilar: «Kishi o'z do'stining dinidadir. Bas, har biringiz kim bilan do'stlashayotganiga qarasin!».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Inson Do'stining Dinidadir",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Payg'ambarimiz (s.a.v) qat'iy mezon qo'yadilar: «Kishi o'z do'stining dinidadir. Bas, har biringiz kim bilan do'stlashayotganiga qarasin!».",
            "example": "Do'st – insonning ko'zgusi va uning kimligini belgilovchi eng asosiy omildir. Yaxshi do'st jannatga, yomon do'st esa jahannamga yetaklaydi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Yaxshi va Yomon Hamrohning Misoli",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Rasululloh (s.a.v) chiroyli o'xshatish keltirganlar: «Yaxshi hamroh – attor (mushk sotuvchi) kabidir, uning oldida o'tirsang yoki mushk sotib olasan, yoki hech bo'lmaganda xushbo'y hididan bahramand bo'lasan. Yomon hamroh esa – temirchining bosqoni kabidir, yoki kiyimingni kuydiradi, yoki noxush tutuniga chidab o'tirasan». Iymonli do'st davrasida yurgan bola tabiiy ravishda axloqli va ibodatli bo'ladi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Yaxshi Do'st Tanlash Mezonlari",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Ulug'lar do'st tanlashda 4 shartga e'tibor berishni tayinlaganlar: 1) Aqlli bo'lishi (ahmoq do'st foyda keltiraman deb zarar beradi); 2) Go'zal xulqli bo'lishi; 3) Taqvodor bo'lishi (fosiq odam Allohdan qo'rqmaydi, senga ham xiyonat qiladi); 4) Dunyoparast bo'lmasligi. Farzand do'st tanlashda uning boyligiga yoki kiyimiga emas, tarbiyasi va namoziga qarashga o'rgatiladi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Do'stning Oxiratdagi Shafoati",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Hasan Basriy (r.a) aytadilar: «Solih mo'min do'stlarni ko'paytiringlar! Chunki Qiyomat kunida ularning har biri uchun shafoat qilish imkoni beriladi». Do'sting jannatga kirsa, seni ham qidiradi va Allohdan senga jannat so'raydi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Do'st Haqida (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Do'st Haqida (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Choosing Good Companions (Part 1)",
        "summary": "The perfume seller vs blacksmith parable, peer influence on faith, identifying loyal sincere friends, and avoiding bad company.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Choosing Good Companions (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Payg'ambarimiz (s.a.v) qat'iy mezon qo'yadilar: «Kishi o'z do'stining dinidadir. Bas, har biringiz kim bilan do'stlashayotganiga qarasin!».",
            "example": "Do'st – insonning ko'zgusi va uning kimligini belgilovchi eng asosiy omildir. Yaxshi do'st jannatga, yomon do'st esa jahannamga yetaklaydi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "The perfume seller vs blacksmith parable, peer influence on faith, identifying loyal sincere friends, and avoiding bad company. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Ulug'lar do'st tanlashda 4 shartga e'tibor berishni tayinlaganlar: 1) Aqlli bo'lishi (ahmoq do'st foyda keltiraman deb zarar beradi); 2) Go'zal xulqli bo'lishi; 3) Taqvodor bo'lishi (fosiq odam Allohdan qo'rqmaydi, senga ham xiyonat qiladi); 4) Dunyoparast bo'lmasligi. Farzand do'st tanlashda uning boyligiga yoki kiyimiga emas, tarbiyasi va namoziga qarashga o'rgatiladi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Hasan Basriy (r.a) aytadilar: «Solih mo'min do'stlarni ko'paytiringlar! Chunki Qiyomat kunida ularning har biri uchun shafoat qilish imkoni beriladi». Do'sting jannatga kirsa, seni ham qidiradi va Allohdan senga jannat so'raydi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Choosing Good Companions (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Choosing Good Companions (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Выбор праведных друзей (Часть 1)",
        "summary": "Притча о продавце благовоний и кузнеце, влияние окружения на веру и выбор искренних, надежных друзей.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Выбор праведных друзей (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Payg'ambarimiz (s.a.v) qat'iy mezon qo'yadilar: «Kishi o'z do'stining dinidadir. Bas, har biringiz kim bilan do'stlashayotganiga qarasin!».",
            "example": "Do'st – insonning ko'zgusi va uning kimligini belgilovchi eng asosiy omildir. Yaxshi do'st jannatga, yomon do'st esa jahannamga yetaklaydi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Притча о продавце благовоний и кузнеце, влияние окружения на веру и выбор искренних, надежных друзей. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Ulug'lar do'st tanlashda 4 shartga e'tibor berishni tayinlaganlar: 1) Aqlli bo'lishi (ahmoq do'st foyda keltiraman deb zarar beradi); 2) Go'zal xulqli bo'lishi; 3) Taqvodor bo'lishi (fosiq odam Allohdan qo'rqmaydi, senga ham xiyonat qiladi); 4) Dunyoparast bo'lmasligi. Farzand do'st tanlashda uning boyligiga yoki kiyimiga emas, tarbiyasi va namoziga qarashga o'rgatiladi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Hasan Basriy (r.a) aytadilar: «Solih mo'min do'stlarni ko'paytiringlar! Chunki Qiyomat kunida ularning har biri uchun shafoat qilish imkoni beriladi». Do'sting jannatga kirsa, seni ham qidiradi va Allohdan senga jannat so'raydi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Выбор праведных друзей (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Выбор праведных друзей (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Do'st Haqida (2-qism)",
    "slug": "dars-38-dost-haqida-2-qism",
    "summary": "Qur'oni Karimda zolim insonning qiyomatdagi afsusi keltiriladi: «Ey voh, qaniydi men falonchini do'st tutmaganimda edi! Haqiqatan, u menga zikr (Qur'on) kelganidan keyin meni yo'ldan ozdirdi!» (Furqon surasi, 27-28-oyatlar).",
    "order": 38,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "BTlGVkTJJfY",
    "videoUrl": "https://www.youtube.com/watch?v=BTlGVkTJJfY",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Yomon Ulfatning Dunyo va Oxiratdagi Qaltisligi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Qur'oni Karimda zolim insonning qiyomatdagi afsusi keltiriladi: «Ey voh, qaniydi men falonchini do'st tutmaganimda edi! Haqiqatan, u menga zikr (Qur'on) kelganidan keyin meni yo'ldan ozdirdi!» (Furqon surasi, 27-28-oyatlar).",
        "example": "Ko'chadagi ichkilik, giyohvandlik, o'g'irlik va behayolik botqog'iga tushgan yoshlarning 90 foizi yomon do'stlar ta'sirida shu ko'yga tushganlar.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Do'stlik Odoblari va Sadoqat",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Haqiqiy do'stlik – qiyin kunda bilinadi. Boyliging borida yoningda bo'lib, kambag'al bo'lganingda tashlab ketgan odam do'st emas, balki tekinxo'rdir. Do'stining sirini saqlash, orqasidan g'iybat qilmaslik va uning obro'sini begonalardan himoya qilish do'stlik burchidir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Do'stga Samimiy Nasihat Qilish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) aytadilar: «Mo'min mo'minning ko'zgusidir». Ko'zgu insonning yuzidagi kirni qanday ko'rsatsa, do'st ham birodarining xatosini yolg'iz qolganda muloyimlik bilan aytishi kerak. Xatoni ko'ra-bila turib indamaslik – xiyonatdir; xatoni el oldida sharmanda qilib aytish esa – haqoratdir. Haqiqiy do'st xolis nasihat qiladi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Zararli Do'stlik Rishtasini Uzish Jasorati",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Agar do'st gunohga, zalolatga boshlasa va nasihatni qabul qilmasa, u bilan orani ochiq qilish kerak. Yomon do'st bilan yurgandan ko'ra, yolg'iz qolish ming marta afzaldir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Do'st Haqida (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Do'st Haqida (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Do'st Haqida (2-qism)",
        "summary": "Qur'oni Karimda zolim insonning qiyomatdagi afsusi keltiriladi: «Ey voh, qaniydi men falonchini do'st tutmaganimda edi! Haqiqatan, u menga zikr (Qur'on) kelganidan keyin meni yo'ldan ozdirdi!» (Furqon surasi, 27-28-oyatlar).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Yomon Ulfatning Dunyo va Oxiratdagi Qaltisligi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Qur'oni Karimda zolim insonning qiyomatdagi afsusi keltiriladi: «Ey voh, qaniydi men falonchini do'st tutmaganimda edi! Haqiqatan, u menga zikr (Qur'on) kelganidan keyin meni yo'ldan ozdirdi!» (Furqon surasi, 27-28-oyatlar).",
            "example": "Ko'chadagi ichkilik, giyohvandlik, o'g'irlik va behayolik botqog'iga tushgan yoshlarning 90 foizi yomon do'stlar ta'sirida shu ko'yga tushganlar.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Do'stlik Odoblari va Sadoqat",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Haqiqiy do'stlik – qiyin kunda bilinadi. Boyliging borida yoningda bo'lib, kambag'al bo'lganingda tashlab ketgan odam do'st emas, balki tekinxo'rdir. Do'stining sirini saqlash, orqasidan g'iybat qilmaslik va uning obro'sini begonalardan himoya qilish do'stlik burchidir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Do'stga Samimiy Nasihat Qilish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) aytadilar: «Mo'min mo'minning ko'zgusidir». Ko'zgu insonning yuzidagi kirni qanday ko'rsatsa, do'st ham birodarining xatosini yolg'iz qolganda muloyimlik bilan aytishi kerak. Xatoni ko'ra-bila turib indamaslik – xiyonatdir; xatoni el oldida sharmanda qilib aytish esa – haqoratdir. Haqiqiy do'st xolis nasihat qiladi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Zararli Do'stlik Rishtasini Uzish Jasorati",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Agar do'st gunohga, zalolatga boshlasa va nasihatni qabul qilmasa, u bilan orani ochiq qilish kerak. Yomon do'st bilan yurgandan ko'ra, yolg'iz qolish ming marta afzaldir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Do'st Haqida (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Do'st Haqida (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Friendship Ethics and Loyalty (Part 2)",
        "summary": "Keeping friend secrets, defending their honor in absence, helping in hardship, and mutual spiritual reminder.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Friendship Ethics and Loyalty (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Qur'oni Karimda zolim insonning qiyomatdagi afsusi keltiriladi: «Ey voh, qaniydi men falonchini do'st tutmaganimda edi! Haqiqatan, u menga zikr (Qur'on) kelganidan keyin meni yo'ldan ozdirdi!» (Furqon surasi, 27-28-oyatlar).",
            "example": "Ko'chadagi ichkilik, giyohvandlik, o'g'irlik va behayolik botqog'iga tushgan yoshlarning 90 foizi yomon do'stlar ta'sirida shu ko'yga tushganlar.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Keeping friend secrets, defending their honor in absence, helping in hardship, and mutual spiritual reminder. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) aytadilar: «Mo'min mo'minning ko'zgusidir». Ko'zgu insonning yuzidagi kirni qanday ko'rsatsa, do'st ham birodarining xatosini yolg'iz qolganda muloyimlik bilan aytishi kerak. Xatoni ko'ra-bila turib indamaslik – xiyonatdir; xatoni el oldida sharmanda qilib aytish esa – haqoratdir. Haqiqiy do'st xolis nasihat qiladi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Agar do'st gunohga, zalolatga boshlasa va nasihatni qabul qilmasa, u bilan orani ochiq qilish kerak. Yomon do'st bilan yurgandan ko'ra, yolg'iz qolish ming marta afzaldir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Friendship Ethics and Loyalty (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Friendship Ethics and Loyalty (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этика дружбы и верность (Часть 2)",
        "summary": "Хранение секретов друга, защита чести в его отсутствие, взаимопомощь в трудностях и благое напоминание.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этика дружбы и верность (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Qur'oni Karimda zolim insonning qiyomatdagi afsusi keltiriladi: «Ey voh, qaniydi men falonchini do'st tutmaganimda edi! Haqiqatan, u menga zikr (Qur'on) kelganidan keyin meni yo'ldan ozdirdi!» (Furqon surasi, 27-28-oyatlar).",
            "example": "Ko'chadagi ichkilik, giyohvandlik, o'g'irlik va behayolik botqog'iga tushgan yoshlarning 90 foizi yomon do'stlar ta'sirida shu ko'yga tushganlar.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Хранение секретов друга, защита чести в его отсутствие, взаимопомощь в трудностях и благое напоминание. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) aytadilar: «Mo'min mo'minning ko'zgusidir». Ko'zgu insonning yuzidagi kirni qanday ko'rsatsa, do'st ham birodarining xatosini yolg'iz qolganda muloyimlik bilan aytishi kerak. Xatoni ko'ra-bila turib indamaslik – xiyonatdir; xatoni el oldida sharmanda qilib aytish esa – haqoratdir. Haqiqiy do'st xolis nasihat qiladi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Agar do'st gunohga, zalolatga boshlasa va nasihatni qabul qilmasa, u bilan orani ochiq qilish kerak. Yomon do'st bilan yurgandan ko'ra, yolg'iz qolish ming marta afzaldir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этика дружбы и верность (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этика дружбы и верность (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Yoshi Kattalar Haqqi (1-qism)",
    "slug": "dars-39-yoshi-kattalar-haqqi-1-qism",
    "summary": "Payg'ambarimiz (s.a.v) qat'iy ogohlantiradilar: «Kichiklarimizga rahm qilmagan va kattalarimizning qadr-qimmatini bilmagan (hurmat qilmagan) kishi bizdan emasdir!».",
    "order": 39,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "kVjUsif9Snc",
    "videoUrl": "https://www.youtube.com/watch?v=kVjUsif9Snc",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Kattalarni Hurmat Qilish – Islom Belgisi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Payg'ambarimiz (s.a.v) qat'iy ogohlantiradilar: «Kichiklarimizga rahm qilmagan va kattalarimizning qadr-qimmatini bilmagan (hurmat qilmagan) kishi bizdan emasdir!».",
        "example": "Keksalarga ehtirom ko'rsatish Islom madaniyatining poydevori hisoblanadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Oq Sochli Qariyalarni Hurmat Qilish – Allohni Ulug'lashdir",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Hadisda aytiladi: «Musulmon bo'lgan sochi oqargan qariyani hurmat qilish – Alloh taoloni ulug'lashning bir ko'rinishidir». Uzoq umr ko'rib, peshonasi sajdada oqargan otaxon va onaxonlarning har bir sochi Alloh nazdida nurlidir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Keksalarga Yo'l Berish va Xizmatida Bo'lish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Majlisda to'rga o'tqazish, so'z navbatini avval ularga berish, taomlanishda oldin ularning boshlashini kutish va jamoat transportida o'rnidan turib joy berish odoblari. Yoshligida qariyalarga xizmat qilgan kishiga Alloh taolo keksayganida unga xizmat qiladigan yoshlarni tayyorlab qo'yadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Keksalarning Duosini Olish Baxti",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Payg'ambarimiz (s.a.v) aytadilar: «Agar orangizda keksaygan qariyalar, emizikli go'daklar va o'tlab yurgan hayvonlar bo'lmaganida edi, ustingizga balolar yog'ilib ketgan bo'lardi». Bolaga qariyalarning ko'nglini olish, ulardan duo so'rash va ularga shirin so'z bo'lish fazilati uqtiriladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Yoshi Kattalar Haqqi (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Yoshi Kattalar Haqqi (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Yoshi Kattalar Haqqi (1-qism)",
        "summary": "Payg'ambarimiz (s.a.v) qat'iy ogohlantiradilar: «Kichiklarimizga rahm qilmagan va kattalarimizning qadr-qimmatini bilmagan (hurmat qilmagan) kishi bizdan emasdir!».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Kattalarni Hurmat Qilish – Islom Belgisi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Payg'ambarimiz (s.a.v) qat'iy ogohlantiradilar: «Kichiklarimizga rahm qilmagan va kattalarimizning qadr-qimmatini bilmagan (hurmat qilmagan) kishi bizdan emasdir!».",
            "example": "Keksalarga ehtirom ko'rsatish Islom madaniyatining poydevori hisoblanadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Oq Sochli Qariyalarni Hurmat Qilish – Allohni Ulug'lashdir",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Hadisda aytiladi: «Musulmon bo'lgan sochi oqargan qariyani hurmat qilish – Alloh taoloni ulug'lashning bir ko'rinishidir». Uzoq umr ko'rib, peshonasi sajdada oqargan otaxon va onaxonlarning har bir sochi Alloh nazdida nurlidir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Keksalarga Yo'l Berish va Xizmatida Bo'lish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Majlisda to'rga o'tqazish, so'z navbatini avval ularga berish, taomlanishda oldin ularning boshlashini kutish va jamoat transportida o'rnidan turib joy berish odoblari. Yoshligida qariyalarga xizmat qilgan kishiga Alloh taolo keksayganida unga xizmat qiladigan yoshlarni tayyorlab qo'yadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Keksalarning Duosini Olish Baxti",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Agar orangizda keksaygan qariyalar, emizikli go'daklar va o'tlab yurgan hayvonlar bo'lmaganida edi, ustingizga balolar yog'ilib ketgan bo'lardi». Bolaga qariyalarning ko'nglini olish, ulardan duo so'rash va ularga shirin so'z bo'lish fazilati uqtiriladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Yoshi Kattalar Haqqi (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Yoshi Kattalar Haqqi (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Revering Elders and Seniors (Part 1)",
        "summary": "Prophetic mandate on respecting elders, offering seat, yielding the floor, polite greetings, and dignity.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Revering Elders and Seniors (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Payg'ambarimiz (s.a.v) qat'iy ogohlantiradilar: «Kichiklarimizga rahm qilmagan va kattalarimizning qadr-qimmatini bilmagan (hurmat qilmagan) kishi bizdan emasdir!».",
            "example": "Keksalarga ehtirom ko'rsatish Islom madaniyatining poydevori hisoblanadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Prophetic mandate on respecting elders, offering seat, yielding the floor, polite greetings, and dignity. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Majlisda to'rga o'tqazish, so'z navbatini avval ularga berish, taomlanishda oldin ularning boshlashini kutish va jamoat transportida o'rnidan turib joy berish odoblari. Yoshligida qariyalarga xizmat qilgan kishiga Alloh taolo keksayganida unga xizmat qiladigan yoshlarni tayyorlab qo'yadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Agar orangizda keksaygan qariyalar, emizikli go'daklar va o'tlab yurgan hayvonlar bo'lmaganida edi, ustingizga balolar yog'ilib ketgan bo'lardi». Bolaga qariyalarning ko'nglini olish, ulardan duo so'rash va ularga shirin so'z bo'lish fazilati uqtiriladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Revering Elders and Seniors (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Revering Elders and Seniors (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Уважение к старшим (Часть 1)",
        "summary": "Пророческий завет об уважении к старшим, уступать место, пропускать вперед и почитать седину.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Уважение к старшим (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Payg'ambarimiz (s.a.v) qat'iy ogohlantiradilar: «Kichiklarimizga rahm qilmagan va kattalarimizning qadr-qimmatini bilmagan (hurmat qilmagan) kishi bizdan emasdir!».",
            "example": "Keksalarga ehtirom ko'rsatish Islom madaniyatining poydevori hisoblanadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Пророческий завет об уважении к старшим, уступать место, пропускать вперед и почитать седину. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Majlisda to'rga o'tqazish, so'z navbatini avval ularga berish, taomlanishda oldin ularning boshlashini kutish va jamoat transportida o'rnidan turib joy berish odoblari. Yoshligida qariyalarga xizmat qilgan kishiga Alloh taolo keksayganida unga xizmat qiladigan yoshlarni tayyorlab qo'yadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Agar orangizda keksaygan qariyalar, emizikli go'daklar va o'tlab yurgan hayvonlar bo'lmaganida edi, ustingizga balolar yog'ilib ketgan bo'lardi». Bolaga qariyalarning ko'nglini olish, ulardan duo so'rash va ularga shirin so'z bo'lish fazilati uqtiriladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Уважение к старшим (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Уважение к старшим (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "oila-ota-ona-va-jamiyat-haqlari",
    "title": "Yoshi Kattalar Haqqi (2-qism)",
    "slug": "dars-40-yoshi-kattalar-haqqi-2-qism",
    "summary": "Yoshlarning kattalar bilan tortishishi, ularning gapini bo'lib «Siz bilmaysiz, zamon o'zgargan» deb aql o'rgatishi o'ta behurmatlikdir.",
    "order": 40,
    "estimatedMinutes": 5,
    "ageGroup": "10-13",
    "xpReward": 15,
    "isFree": false,
    "videoId": "AyGAJYnDF0o",
    "videoUrl": "https://www.youtube.com/watch?v=AyGAJYnDF0o",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Keksalarning So'zini Bo'lmaslik va Gap Talashmaslik",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Yoshlarning kattalar bilan tortishishi, ularning gapini bo'lib «Siz bilmaysiz, zamon o'zgargan» deb aql o'rgatishi o'ta behurmatlikdir.",
        "example": "Ular biror narsada yanglishsa ham, ularning yoshini va tajribasini hurmat qilgan holda muloyimlik bilan haqiqat bayon qilinadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Ko'chada va Jamoat Joylarida Kattalar Bilan Yurish Odobi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Kattalarning oldiga tushib yurmaslik, balki yonma-yon yoki bir qadam orqada yurish odobi. Eshikdan kirishda va chiqishda yoshi kattalarga yo'l berish va ularning og'ir yuklarini ko'tarishib yuborish mardlikdir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Keksalikdagi Sodiq Sabr va Tushunish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Keksaygan insonlarda xastaliklar, asabiylik, ko'p gapirish yoki injiqlik paydo bo'lishi tabiiydir. Ota-ona va farzandlar bunga sabr qilishi, ularga hech qachon malol kelmasliklari va tabassum bilan muomala qilishlari farzdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Farzandga Keksani Hurmat Qilishni Amalda Ko'rsatish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Ota o'zining otasini, ona o'zining onasini qanday e'zozlasa, bola ham buni ko'rib shunday bo'lib o'sadi. O'z ota-onasiga baqirgan inson, o'z farzandidan ham kelajakda shafqatsizlik ko'rishi muqarrardir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Yoshi Kattalar Haqqi (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Yoshi Kattalar Haqqi (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Yoshi Kattalar Haqqi (2-qism)",
        "summary": "Yoshlarning kattalar bilan tortishishi, ularning gapini bo'lib «Siz bilmaysiz, zamon o'zgargan» deb aql o'rgatishi o'ta behurmatlikdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Keksalarning So'zini Bo'lmaslik va Gap Talashmaslik",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Yoshlarning kattalar bilan tortishishi, ularning gapini bo'lib «Siz bilmaysiz, zamon o'zgargan» deb aql o'rgatishi o'ta behurmatlikdir.",
            "example": "Ular biror narsada yanglishsa ham, ularning yoshini va tajribasini hurmat qilgan holda muloyimlik bilan haqiqat bayon qilinadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Ko'chada va Jamoat Joylarida Kattalar Bilan Yurish Odobi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Kattalarning oldiga tushib yurmaslik, balki yonma-yon yoki bir qadam orqada yurish odobi. Eshikdan kirishda va chiqishda yoshi kattalarga yo'l berish va ularning og'ir yuklarini ko'tarishib yuborish mardlikdir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Keksalikdagi Sodiq Sabr va Tushunish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Keksaygan insonlarda xastaliklar, asabiylik, ko'p gapirish yoki injiqlik paydo bo'lishi tabiiydir. Ota-ona va farzandlar bunga sabr qilishi, ularga hech qachon malol kelmasliklari va tabassum bilan muomala qilishlari farzdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Farzandga Keksani Hurmat Qilishni Amalda Ko'rsatish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Ota o'zining otasini, ona o'zining onasini qanday e'zozlasa, bola ham buni ko'rib shunday bo'lib o'sadi. O'z ota-onasiga baqirgan inson, o'z farzandidan ham kelajakda shafqatsizlik ko'rishi muqarrardir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Yoshi Kattalar Haqqi (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Yoshi Kattalar Haqqi (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Revering Elders and Seniors (Part 2)",
        "summary": "Serving grandparents, listening attentively to elderly wisdom, patience with their weaknesses, and gaining du'a.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Revering Elders and Seniors (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Yoshlarning kattalar bilan tortishishi, ularning gapini bo'lib «Siz bilmaysiz, zamon o'zgargan» deb aql o'rgatishi o'ta behurmatlikdir.",
            "example": "Ular biror narsada yanglishsa ham, ularning yoshini va tajribasini hurmat qilgan holda muloyimlik bilan haqiqat bayon qilinadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Serving grandparents, listening attentively to elderly wisdom, patience with their weaknesses, and gaining du'a. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Keksaygan insonlarda xastaliklar, asabiylik, ko'p gapirish yoki injiqlik paydo bo'lishi tabiiydir. Ota-ona va farzandlar bunga sabr qilishi, ularga hech qachon malol kelmasliklari va tabassum bilan muomala qilishlari farzdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Ota o'zining otasini, ona o'zining onasini qanday e'zozlasa, bola ham buni ko'rib shunday bo'lib o'sadi. O'z ota-onasiga baqirgan inson, o'z farzandidan ham kelajakda shafqatsizlik ko'rishi muqarrardir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Revering Elders and Seniors (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Revering Elders and Seniors (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Уважение к старшим (Часть 2)",
        "summary": "Забота о бабушках и дедушках, внимательное слушание их мудрости, терпение к немощи и получение их дуа.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Уважение к старшим (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Yoshlarning kattalar bilan tortishishi, ularning gapini bo'lib «Siz bilmaysiz, zamon o'zgargan» deb aql o'rgatishi o'ta behurmatlikdir.",
            "example": "Ular biror narsada yanglishsa ham, ularning yoshini va tajribasini hurmat qilgan holda muloyimlik bilan haqiqat bayon qilinadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Забота о бабушках и дедушках, внимательное слушание их мудрости, терпение к немощи и получение их дуа. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Keksaygan insonlarda xastaliklar, asabiylik, ko'p gapirish yoki injiqlik paydo bo'lishi tabiiydir. Ota-ona va farzandlar bunga sabr qilishi, ularga hech qachon malol kelmasliklari va tabassum bilan muomala qilishlari farzdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Ota o'zining otasini, ona o'zining onasini qanday e'zozlasa, bola ham buni ko'rib shunday bo'lib o'sadi. O'z ota-onasiga baqirgan inson, o'z farzandidan ham kelajakda shafqatsizlik ko'rishi muqarrardir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Уважение к старшим (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Уважение к старшим (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Fitrat va Sibg'a Farqi",
    "slug": "dars-41-fitrat-va-sibga-farqi",
    "summary": "Rasululloh (s.a.v) aytadilar: «Har bir chaqaloq sof fitratda (Islom tabiati bilan) tug'iladi. So'ngra ota-onasi uni yo yahudiy, yo nasroniy, yo majusiy qilib tarbiyalaydi».",
    "order": 41,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": true,
    "videoId": "mqHrpd2Xf9I",
    "videoUrl": "https://www.youtube.com/watch?v=mqHrpd2Xf9I",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Fitratning Asl Mohiyati (Poklik Xilqati)",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Rasululloh (s.a.v) aytadilar: «Har bir chaqaloq sof fitratda (Islom tabiati bilan) tug'iladi. So'ngra ota-onasi uni yo yahudiy, yo nasroniy, yo majusiy qilib tarbiyalaydi».",
        "example": "Bola qalbi – oq qog'oz kabidir. Unga nima yozilsa, shuni qabul qiladi. Fitrat pokligini saqlab qolish tarbiyaning birinchi vazifasidir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "«Sibg'atulloh» – Allohning Bo'yog'i",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Alloh taolo Baqara surasida marhamat qiladi: «(Bizga) Allohning bo'yog'i (bo'yalish bo'ldi). Allohdan ko'ra go'zalroq bo'yoq beruvchi kim bor?! Biz Ungagina ibodat qiluvchilarmiz» (138-oyat). Sibg'a – bu Islom ta'limoti, aqidasi va go'zal axloqining inson botiniga singishi, uning butun vujudi iymon rangi bilan bo'yalishidir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Fitrat va Sibg'aning O'zaro Bog'liqligi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Fitrat – poydevor bo'lsa, sibg'a – uning ustiga qurilgan muhtasham qasirdir. Fitrat urug' bo'lsa, sibg'a – uni parvarishlab meva berdiruvchi tarbiyadir. Agar bolaning fitrati shariat ilmlari va odoblari (sibg'atulloh) bilan sayqallanmasa, atrofdagi buzuq muhit uni o'z rangiga bo'yab oladi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Amaliy Tarbiya: Bolani Qanday Bo'yash Kerak?",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Farzandni erta yoshdanoq namozga, Qur'onga, halollikka va rostgo'ylikka odatlantirish – unga «Sibg'atulloh» rangini berishdir. Iymon rangi bilan bo'yalgan farzand har qanday to'fon va sinovlar qarshisida o'z e'tiqodini yo'qotmaydi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Fitrat va Sibg'a Farqi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Fitrat va Sibg'a Farqi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Fitrat va Sibg'a Farqi",
        "summary": "Rasululloh (s.a.v) aytadilar: «Har bir chaqaloq sof fitratda (Islom tabiati bilan) tug'iladi. So'ngra ota-onasi uni yo yahudiy, yo nasroniy, yo majusiy qilib tarbiyalaydi».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Fitratning Asl Mohiyati (Poklik Xilqati)",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Rasululloh (s.a.v) aytadilar: «Har bir chaqaloq sof fitratda (Islom tabiati bilan) tug'iladi. So'ngra ota-onasi uni yo yahudiy, yo nasroniy, yo majusiy qilib tarbiyalaydi».",
            "example": "Bola qalbi – oq qog'oz kabidir. Unga nima yozilsa, shuni qabul qiladi. Fitrat pokligini saqlab qolish tarbiyaning birinchi vazifasidir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "«Sibg'atulloh» – Allohning Bo'yog'i",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Alloh taolo Baqara surasida marhamat qiladi: «(Bizga) Allohning bo'yog'i (bo'yalish bo'ldi). Allohdan ko'ra go'zalroq bo'yoq beruvchi kim bor?! Biz Ungagina ibodat qiluvchilarmiz» (138-oyat). Sibg'a – bu Islom ta'limoti, aqidasi va go'zal axloqining inson botiniga singishi, uning butun vujudi iymon rangi bilan bo'yalishidir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Fitrat va Sibg'aning O'zaro Bog'liqligi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Fitrat – poydevor bo'lsa, sibg'a – uning ustiga qurilgan muhtasham qasirdir. Fitrat urug' bo'lsa, sibg'a – uni parvarishlab meva berdiruvchi tarbiyadir. Agar bolaning fitrati shariat ilmlari va odoblari (sibg'atulloh) bilan sayqallanmasa, atrofdagi buzuq muhit uni o'z rangiga bo'yab oladi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Amaliy Tarbiya: Bolani Qanday Bo'yash Kerak?",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Farzandni erta yoshdanoq namozga, Qur'onga, halollikka va rostgo'ylikka odatlantirish – unga «Sibg'atulloh» rangini berishdir. Iymon rangi bilan bo'yalgan farzand har qanday to'fon va sinovlar qarshisida o'z e'tiqodini yo'qotmaydi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Fitrat va Sibg'a Farqi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Fitrat va Sibg'a Farqi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Natural Purity (Fitrah) vs Cultivation",
        "summary": "Every child is born on pure innate monotheism, protecting natural innocence from corrupt environments.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Natural Purity (Fitrah) vs Cultivation",
            "subtitle": "Real-life Context & Introduction",
            "content": "Rasululloh (s.a.v) aytadilar: «Har bir chaqaloq sof fitratda (Islom tabiati bilan) tug'iladi. So'ngra ota-onasi uni yo yahudiy, yo nasroniy, yo majusiy qilib tarbiyalaydi».",
            "example": "Bola qalbi – oq qog'oz kabidir. Unga nima yozilsa, shuni qabul qiladi. Fitrat pokligini saqlab qolish tarbiyaning birinchi vazifasidir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Every child is born on pure innate monotheism, protecting natural innocence from corrupt environments. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Fitrat – poydevor bo'lsa, sibg'a – uning ustiga qurilgan muhtasham qasirdir. Fitrat urug' bo'lsa, sibg'a – uni parvarishlab meva berdiruvchi tarbiyadir. Agar bolaning fitrati shariat ilmlari va odoblari (sibg'atulloh) bilan sayqallanmasa, atrofdagi buzuq muhit uni o'z rangiga bo'yab oladi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Farzandni erta yoshdanoq namozga, Qur'onga, halollikka va rostgo'ylikka odatlantirish – unga «Sibg'atulloh» rangini berishdir. Iymon rangi bilan bo'yalgan farzand har qanday to'fon va sinovlar qarshisida o'z e'tiqodini yo'qotmaydi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Natural Purity (Fitrah) vs Cultivation",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Natural Purity (Fitrah) vs Cultivation'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Природная чистота (Фитра) и воспитание",
        "summary": "Каждый ребенок рождается с чистой природой (фитра), сохранение естественной чистоты от порочной среды.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Природная чистота (Фитра) и воспитание",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Rasululloh (s.a.v) aytadilar: «Har bir chaqaloq sof fitratda (Islom tabiati bilan) tug'iladi. So'ngra ota-onasi uni yo yahudiy, yo nasroniy, yo majusiy qilib tarbiyalaydi».",
            "example": "Bola qalbi – oq qog'oz kabidir. Unga nima yozilsa, shuni qabul qiladi. Fitrat pokligini saqlab qolish tarbiyaning birinchi vazifasidir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Каждый ребенок рождается с чистой природой (фитра), сохранение естественной чистоты от порочной среды. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Fitrat – poydevor bo'lsa, sibg'a – uning ustiga qurilgan muhtasham qasirdir. Fitrat urug' bo'lsa, sibg'a – uni parvarishlab meva berdiruvchi tarbiyadir. Agar bolaning fitrati shariat ilmlari va odoblari (sibg'atulloh) bilan sayqallanmasa, atrofdagi buzuq muhit uni o'z rangiga bo'yab oladi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Farzandni erta yoshdanoq namozga, Qur'onga, halollikka va rostgo'ylikka odatlantirish – unga «Sibg'atulloh» rangini berishdir. Iymon rangi bilan bo'yalgan farzand har qanday to'fon va sinovlar qarshisida o'z e'tiqodini yo'qotmaydi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Природная чистота (Фитра) и воспитание",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Природная чистота (Фитра) и воспитание»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Ovqatlanish Odobi",
    "slug": "dars-42-ovqatlanish-odobi",
    "summary": "Taomlanishdan oldin qo'llarni yaxshilab yuvish, «Bismillah» deb boshlash sunnatdir. Agar boshida aytish unutilsa, eslaganda «Bismillahi avvalahu va axirohu» deyiladi.",
    "order": 42,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "WXK_V-nBWYc",
    "videoUrl": "https://www.youtube.com/watch?v=WXK_V-nBWYc",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Ovqatlanishdan Oldingi Sunnatlar",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Taomlanishdan oldin qo'llarni yaxshilab yuvish, «Bismillah» deb boshlash sunnatdir. Agar boshida aytish unutilsa, eslaganda «Bismillahi avvalahu va axirohu» deyiladi.",
        "example": "Bismillah aytilmagan taomga shayton sherik bo'ladi va undagi baraka yo'qoladi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "O'ng Qo'l Bilan va O'z Oldidan Yeyish",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) qat'iy buyurganlar: «Chap qo'lda yemanglar va ichmanglar! Chunki shayton chap qo'li bilan yeydi va ichadi». Dasturxonda umumiy idishdan yeyilayotgan bo'lsa, birovning oldiga qo'l uzatmasdan, faqat o'z oldidan olish odobiga rioya qilish shart.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Ovqatni Ayblamaslik va Isrof Qilmaslik",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Abu Hurayra (r.a) aytadilar: «Rasululloh (s.a.v) hech qachon biror taomni ayblamaganlar: agar yoqsa yer edilar, yoqmasa indamay tark etar edilar». Taomni «sho'r ekan», «mazasiz ekan» deb jerkish ne'matga noshukrlikdir. Likopchadagi ovqatni qoldirmay toza yeyish barakadir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Taomdan Keyingi Hamd va Shukr",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Ovqatdan so'ng qo'llarni va og'izni yuvish, tishlarni tozalash (misvok ishlatish) hamda Allohga hamd aytish («Alhamdulillahillazi at'amana va saqona va ja'alana minal-muslimin») sunnatdir. Alloh taolo bandasining har bir luqmasidan va qultumidan so'ng O'ziga hamd aytishidan rozi bo'ladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Ovqatlanish Odobi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Ovqatlanish Odobi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Ovqatlanish Odobi",
        "summary": "Taomlanishdan oldin qo'llarni yaxshilab yuvish, «Bismillah» deb boshlash sunnatdir. Agar boshida aytish unutilsa, eslaganda «Bismillahi avvalahu va axirohu» deyiladi.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ovqatlanishdan Oldingi Sunnatlar",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Taomlanishdan oldin qo'llarni yaxshilab yuvish, «Bismillah» deb boshlash sunnatdir. Agar boshida aytish unutilsa, eslaganda «Bismillahi avvalahu va axirohu» deyiladi.",
            "example": "Bismillah aytilmagan taomga shayton sherik bo'ladi va undagi baraka yo'qoladi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "O'ng Qo'l Bilan va O'z Oldidan Yeyish",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) qat'iy buyurganlar: «Chap qo'lda yemanglar va ichmanglar! Chunki shayton chap qo'li bilan yeydi va ichadi». Dasturxonda umumiy idishdan yeyilayotgan bo'lsa, birovning oldiga qo'l uzatmasdan, faqat o'z oldidan olish odobiga rioya qilish shart.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Ovqatni Ayblamaslik va Isrof Qilmaslik",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Abu Hurayra (r.a) aytadilar: «Rasululloh (s.a.v) hech qachon biror taomni ayblamaganlar: agar yoqsa yer edilar, yoqmasa indamay tark etar edilar». Taomni «sho'r ekan», «mazasiz ekan» deb jerkish ne'matga noshukrlikdir. Likopchadagi ovqatni qoldirmay toza yeyish barakadir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Taomdan Keyingi Hamd va Shukr",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Ovqatdan so'ng qo'llarni va og'izni yuvish, tishlarni tozalash (misvok ishlatish) hamda Allohga hamd aytish («Alhamdulillahillazi at'amana va saqona va ja'alana minal-muslimin») sunnatdir. Alloh taolo bandasining har bir luqmasidan va qultumidan so'ng O'ziga hamd aytishidan rozi bo'ladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Ovqatlanish Odobi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Ovqatlanish Odobi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Islamic Table Manners and Etiquette",
        "summary": "Saying Bismillah, eating with right hand, eating from what is in front, gratitude after meals, and zero food waste.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Islamic Table Manners and Etiquette",
            "subtitle": "Real-life Context & Introduction",
            "content": "Taomlanishdan oldin qo'llarni yaxshilab yuvish, «Bismillah» deb boshlash sunnatdir. Agar boshida aytish unutilsa, eslaganda «Bismillahi avvalahu va axirohu» deyiladi.",
            "example": "Bismillah aytilmagan taomga shayton sherik bo'ladi va undagi baraka yo'qoladi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Saying Bismillah, eating with right hand, eating from what is in front, gratitude after meals, and zero food waste. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Abu Hurayra (r.a) aytadilar: «Rasululloh (s.a.v) hech qachon biror taomni ayblamaganlar: agar yoqsa yer edilar, yoqmasa indamay tark etar edilar». Taomni «sho'r ekan», «mazasiz ekan» deb jerkish ne'matga noshukrlikdir. Likopchadagi ovqatni qoldirmay toza yeyish barakadir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Ovqatdan so'ng qo'llarni va og'izni yuvish, tishlarni tozalash (misvok ishlatish) hamda Allohga hamd aytish («Alhamdulillahillazi at'amana va saqona va ja'alana minal-muslimin») sunnatdir. Alloh taolo bandasining har bir luqmasidan va qultumidan so'ng O'ziga hamd aytishidan rozi bo'ladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Islamic Table Manners and Etiquette",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Islamic Table Manners and Etiquette'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Исламский этикет приема пищи",
        "summary": "Произнесение «Бисмиллях», еда правой рукой, еда перед собой, благодарность после еды и бережное отношение к пище.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Исламский этикет приема пищи",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Taomlanishdan oldin qo'llarni yaxshilab yuvish, «Bismillah» deb boshlash sunnatdir. Agar boshida aytish unutilsa, eslaganda «Bismillahi avvalahu va axirohu» deyiladi.",
            "example": "Bismillah aytilmagan taomga shayton sherik bo'ladi va undagi baraka yo'qoladi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Произнесение «Бисмиллях», еда правой рукой, еда перед собой, благодарность после еды и бережное отношение к пище. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Abu Hurayra (r.a) aytadilar: «Rasululloh (s.a.v) hech qachon biror taomni ayblamaganlar: agar yoqsa yer edilar, yoqmasa indamay tark etar edilar». Taomni «sho'r ekan», «mazasiz ekan» deb jerkish ne'matga noshukrlikdir. Likopchadagi ovqatni qoldirmay toza yeyish barakadir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Ovqatdan so'ng qo'llarni va og'izni yuvish, tishlarni tozalash (misvok ishlatish) hamda Allohga hamd aytish («Alhamdulillahillazi at'amana va saqona va ja'alana minal-muslimin») sunnatdir. Alloh taolo bandasining har bir luqmasidan va qultumidan so'ng O'ziga hamd aytishidan rozi bo'ladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Исламский этикет приема пищи",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Исламский этикет приема пищи»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Salomlashish Odobi",
    "slug": "dars-43-salomlashish-odobi",
    "summary": "Payg'ambarimiz (s.a.v) aytadilar: «Iymon keltirmaguningizcha jannatga kirmaysiz. Bir-biringizni yaxshi ko'rmaguningizcha haqiqiy iymonli bo'lmaysiz. Sizlarni bir-biringizga mehrli qiladigan amalga dalolat qilaymi? Orangizda salomni yoyinglar!»",
    "order": 43,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "cDulH1PQlb8",
    "videoUrl": "https://www.youtube.com/watch?v=cDulH1PQlb8",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Salomni Yoyish (Ifsho'us-Salom) – Mehr Kaliti",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Payg'ambarimiz (s.a.v) aytadilar: «Iymon keltirmaguningizcha jannatga kirmaysiz. Bir-biringizni yaxshi ko'rmaguningizcha haqiqiy iymonli bo'lmaysiz. Sizlarni bir-biringizga mehrli qiladigan amalga dalolat qilaymi? Orangizda salomni yoyinglar!»",
        "example": "«Assalomu alaykum va rahmatullohi va barokatuh» so'zi – tinchlik, salomatlik va Allohning barakasi tilangan eng buyuk duodir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Salom Berishning Sunnat Qoidalari",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Rasululloh (s.a.v) o'rgatgan qoidalar: 1) Otliq/ulovdagi kishi – piyodaga; 2) Yurib ketayotgan kishi – o'tirganga; 3) Ozchilik – ko'pchilikka; 4) Yoshi kichik – yoshi kattaga birinchi bo'lib salom beradi. Biroq kamtarlik yuzasidan kattalarning ham bolalarga birinchi bo'lib salom berishi Rasulullohning (s.a.v) go'zal sunnatlaridandir (Anas r.a. rivoyati).",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Salomga Alik Olish – Farzi Ayn",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Salom berish – sunnat, ammo berilgan salomga alik olish – Qur'oni Karim amriga ko'ra farzdir (Niso surasi, 86-oyat). Salomga undan ham chiroyliroq yoki o'ziday qilib darhol javob qaytarish kerak. Birovning salomini e'tiborsiz qoldirish og'ir gunohdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Salomlashishdagi Xatolar",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Bosh qimirlatish, qo'l silkib o'tish yoki g'ayridinlarning so'zlari («Privet», «Chao» va h.k.) bilan Islomiy salomni almashtirish to'g'ri emas. Nomahram ayollar va erkaklar o'rtasida qo'l berib ko'rishish mutlaqo haromdir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Salomlashish Odobi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Salomlashish Odobi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Salomlashish Odobi",
        "summary": "Payg'ambarimiz (s.a.v) aytadilar: «Iymon keltirmaguningizcha jannatga kirmaysiz. Bir-biringizni yaxshi ko'rmaguningizcha haqiqiy iymonli bo'lmaysiz. Sizlarni bir-biringizga mehrli qiladigan amalga dalolat qilaymi? Orangizda salomni yoyinglar!»",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Salomni Yoyish (Ifsho'us-Salom) – Mehr Kaliti",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Iymon keltirmaguningizcha jannatga kirmaysiz. Bir-biringizni yaxshi ko'rmaguningizcha haqiqiy iymonli bo'lmaysiz. Sizlarni bir-biringizga mehrli qiladigan amalga dalolat qilaymi? Orangizda salomni yoyinglar!»",
            "example": "«Assalomu alaykum va rahmatullohi va barokatuh» so'zi – tinchlik, salomatlik va Allohning barakasi tilangan eng buyuk duodir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Salom Berishning Sunnat Qoidalari",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Rasululloh (s.a.v) o'rgatgan qoidalar: 1) Otliq/ulovdagi kishi – piyodaga; 2) Yurib ketayotgan kishi – o'tirganga; 3) Ozchilik – ko'pchilikka; 4) Yoshi kichik – yoshi kattaga birinchi bo'lib salom beradi. Biroq kamtarlik yuzasidan kattalarning ham bolalarga birinchi bo'lib salom berishi Rasulullohning (s.a.v) go'zal sunnatlaridandir (Anas r.a. rivoyati).",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Salomga Alik Olish – Farzi Ayn",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Salom berish – sunnat, ammo berilgan salomga alik olish – Qur'oni Karim amriga ko'ra farzdir (Niso surasi, 86-oyat). Salomga undan ham chiroyliroq yoki o'ziday qilib darhol javob qaytarish kerak. Birovning salomini e'tiborsiz qoldirish og'ir gunohdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Salomlashishdagi Xatolar",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Bosh qimirlatish, qo'l silkib o'tish yoki g'ayridinlarning so'zlari («Privet», «Chao» va h.k.) bilan Islomiy salomni almashtirish to'g'ri emas. Nomahram ayollar va erkaklar o'rtasida qo'l berib ko'rishish mutlaqo haromdir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Salomlashish Odobi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Salomlashish Odobi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Etiquette of Greetings (Salam)",
        "summary": "Spreading Salam, who greets whom, smiling as charity, warm handshakes, and responding with better greeting.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Etiquette of Greetings (Salam)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Iymon keltirmaguningizcha jannatga kirmaysiz. Bir-biringizni yaxshi ko'rmaguningizcha haqiqiy iymonli bo'lmaysiz. Sizlarni bir-biringizga mehrli qiladigan amalga dalolat qilaymi? Orangizda salomni yoyinglar!»",
            "example": "«Assalomu alaykum va rahmatullohi va barokatuh» so'zi – tinchlik, salomatlik va Allohning barakasi tilangan eng buyuk duodir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Spreading Salam, who greets whom, smiling as charity, warm handshakes, and responding with better greeting. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Salom berish – sunnat, ammo berilgan salomga alik olish – Qur'oni Karim amriga ko'ra farzdir (Niso surasi, 86-oyat). Salomga undan ham chiroyliroq yoki o'ziday qilib darhol javob qaytarish kerak. Birovning salomini e'tiborsiz qoldirish og'ir gunohdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Bosh qimirlatish, qo'l silkib o'tish yoki g'ayridinlarning so'zlari («Privet», «Chao» va h.k.) bilan Islomiy salomni almashtirish to'g'ri emas. Nomahram ayollar va erkaklar o'rtasida qo'l berib ko'rishish mutlaqo haromdir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Etiquette of Greetings (Salam)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Etiquette of Greetings (Salam)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет приветствия (Салям)",
        "summary": "Распространение Саляма, правила приветствия, улыбка как садака, рукопожатие и наилучший ответ на приветствие.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет приветствия (Салям)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Iymon keltirmaguningizcha jannatga kirmaysiz. Bir-biringizni yaxshi ko'rmaguningizcha haqiqiy iymonli bo'lmaysiz. Sizlarni bir-biringizga mehrli qiladigan amalga dalolat qilaymi? Orangizda salomni yoyinglar!»",
            "example": "«Assalomu alaykum va rahmatullohi va barokatuh» so'zi – tinchlik, salomatlik va Allohning barakasi tilangan eng buyuk duodir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Распространение Саляма, правила приветствия, улыбка как садака, рукопожатие и наилучший ответ на приветствие. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Salom berish – sunnat, ammo berilgan salomga alik olish – Qur'oni Karim amriga ko'ra farzdir (Niso surasi, 86-oyat). Salomga undan ham chiroyliroq yoki o'ziday qilib darhol javob qaytarish kerak. Birovning salomini e'tiborsiz qoldirish og'ir gunohdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Bosh qimirlatish, qo'l silkib o'tish yoki g'ayridinlarning so'zlari («Privet», «Chao» va h.k.) bilan Islomiy salomni almashtirish to'g'ri emas. Nomahram ayollar va erkaklar o'rtasida qo'l berib ko'rishish mutlaqo haromdir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет приветствия (Салям)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет приветствия (Салям)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Izn So'rash Odobi (Isti'zon)",
    "slug": "dars-44-izn-sorash-odobi-istizon",
    "summary": "Alloh taolo Nur surasida buyuradi: «Ey iymon keltirganlar! O'z uylaringizdan boshqa uylarga to izn so'ramaguningizcha va ahliga salom bermaguningizcha kirmang!» (27-oyat).",
    "order": 44,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "WXh0uEsjqWc",
    "videoUrl": "https://www.youtube.com/watch?v=WXh0uEsjqWc",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Izn So'rashning Farzligi va Hikmati",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Alloh taolo Nur surasida buyuradi: «Ey iymon keltirganlar! O'z uylaringizdan boshqa uylarga to izn so'ramaguningizcha va ahliga salom bermaguningizcha kirmang!» (27-oyat).",
        "example": "Izn so'rashning asosiy sababi – ko'zni nomahramlikdan, boshqalarning shaxsiy hayotini va avratini ko'rib qolishdan asrashdir.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Uch Marta Izn So'rash Qoidasi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) buyuradilar: «Izn so'rash uch martadir. Agar senga ruxsat berilsa (kir), aks holda qaytib ket!». Eshikni qattiq taqillatmasdan, muloyimlik bilan qoqish kerak. Uch martada javob bo'lmasa, xafa bo'lmasdan orqaga qaytish lozim.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Eshik Qarshisida emas, Chetida Turish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) birovning eshigi oldiga kelsalar, to'g'ri eshikning ro'parasida emas, eshikning o'ng yoki chap burchagida turar edilar. Chunki eshik ochilganda xonadon ichkarisi va uydagi ayollar to'g'ridan-to'g'ri ko'rinib qolmasligi shart.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "«Kim bu?» Deganda O'z Ismini Aniq Aytish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Eshik taqillatilganda «Kim u?» deb so'ralsa, shunchaki «Menman» deb noaniq javob berish makruhdir (Rasululloh s.a.v buni yoqtirmaganlar). O'zining ismini aniq aytish («Men Ahmadman», «Men falonchiman») lozim.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Izn So'rash Odobi (Isti'zon)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Izn So'rash Odobi (Isti'zon)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Izn So'rash Odobi (Isti'zon)",
        "summary": "Alloh taolo Nur surasida buyuradi: «Ey iymon keltirganlar! O'z uylaringizdan boshqa uylarga to izn so'ramaguningizcha va ahliga salom bermaguningizcha kirmang!» (27-oyat).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Izn So'rashning Farzligi va Hikmati",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Alloh taolo Nur surasida buyuradi: «Ey iymon keltirganlar! O'z uylaringizdan boshqa uylarga to izn so'ramaguningizcha va ahliga salom bermaguningizcha kirmang!» (27-oyat).",
            "example": "Izn so'rashning asosiy sababi – ko'zni nomahramlikdan, boshqalarning shaxsiy hayotini va avratini ko'rib qolishdan asrashdir.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Uch Marta Izn So'rash Qoidasi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) buyuradilar: «Izn so'rash uch martadir. Agar senga ruxsat berilsa (kir), aks holda qaytib ket!». Eshikni qattiq taqillatmasdan, muloyimlik bilan qoqish kerak. Uch martada javob bo'lmasa, xafa bo'lmasdan orqaga qaytish lozim.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Eshik Qarshisida emas, Chetida Turish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) birovning eshigi oldiga kelsalar, to'g'ri eshikning ro'parasida emas, eshikning o'ng yoki chap burchagida turar edilar. Chunki eshik ochilganda xonadon ichkarisi va uydagi ayollar to'g'ridan-to'g'ri ko'rinib qolmasligi shart.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "«Kim bu?» Deganda O'z Ismini Aniq Aytish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Eshik taqillatilganda «Kim u?» deb so'ralsa, shunchaki «Menman» deb noaniq javob berish makruhdir (Rasululloh s.a.v buni yoqtirmaganlar). O'zining ismini aniq aytish («Men Ahmadman», «Men falonchiman») lozim.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Izn So'rash Odobi (Isti'zon)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Izn So'rash Odobi (Isti'zon)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Etiquette of Asking Permission (Isti'zan)",
        "summary": "Knocking three times, standing to the side of the door, respecting privacy in bedrooms, and accepting refusals graciously.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Etiquette of Asking Permission (Isti'zan)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Alloh taolo Nur surasida buyuradi: «Ey iymon keltirganlar! O'z uylaringizdan boshqa uylarga to izn so'ramaguningizcha va ahliga salom bermaguningizcha kirmang!» (27-oyat).",
            "example": "Izn so'rashning asosiy sababi – ko'zni nomahramlikdan, boshqalarning shaxsiy hayotini va avratini ko'rib qolishdan asrashdir.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Knocking three times, standing to the side of the door, respecting privacy in bedrooms, and accepting refusals graciously. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) birovning eshigi oldiga kelsalar, to'g'ri eshikning ro'parasida emas, eshikning o'ng yoki chap burchagida turar edilar. Chunki eshik ochilganda xonadon ichkarisi va uydagi ayollar to'g'ridan-to'g'ri ko'rinib qolmasligi shart.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Eshik taqillatilganda «Kim u?» deb so'ralsa, shunchaki «Menman» deb noaniq javob berish makruhdir (Rasululloh s.a.v buni yoqtirmaganlar). O'zining ismini aniq aytish («Men Ahmadman», «Men falonchiman») lozim.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Etiquette of Asking Permission (Isti'zan)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Etiquette of Asking Permission (Isti'zan)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет испрашивания разрешения (Истизан)",
        "summary": "Трехкратный стук в дверь, соблюдение приватности комнат, не заглядывать внутрь и спокойное принятие отказа.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет испрашивания разрешения (Истизан)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Alloh taolo Nur surasida buyuradi: «Ey iymon keltirganlar! O'z uylaringizdan boshqa uylarga to izn so'ramaguningizcha va ahliga salom bermaguningizcha kirmang!» (27-oyat).",
            "example": "Izn so'rashning asosiy sababi – ko'zni nomahramlikdan, boshqalarning shaxsiy hayotini va avratini ko'rib qolishdan asrashdir.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Трехкратный стук в дверь, соблюдение приватности комнат, не заглядывать внутрь и спокойное принятие отказа. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) birovning eshigi oldiga kelsalar, to'g'ri eshikning ro'parasida emas, eshikning o'ng yoki chap burchagida turar edilar. Chunki eshik ochilganda xonadon ichkarisi va uydagi ayollar to'g'ridan-to'g'ri ko'rinib qolmasligi shart.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Eshik taqillatilganda «Kim u?» deb so'ralsa, shunchaki «Menman» deb noaniq javob berish makruhdir (Rasululloh s.a.v buni yoqtirmaganlar). O'zining ismini aniq aytish («Men Ahmadman», «Men falonchiman») lozim.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет испрашивания разрешения (Истизан)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет испрашивания разрешения (Истизан)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Majlis Odobi",
    "slug": "dars-45-majlis-odobi",
    "summary": "Davraga kirib kelgan kishi jamoatga salom berishi va odamlarni bezovta qilib to'rga suqilmasdan, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirishi sunnatdir.",
    "order": 45,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "Mz_0HyQVG-s",
    "videoUrl": "https://www.youtube.com/watch?v=Mz_0HyQVG-s",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Majlisga Kirib Kelganda Salom Berish va Bo'sh Joyga O'tirish",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Davraga kirib kelgan kishi jamoatga salom berishi va odamlarni bezovta qilib to'rga suqilmasdan, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirishi sunnatdir.",
        "example": "Payg'ambarimiz (s.a.v) sahobalar davrasiga kelsalar, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirar edilar.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Birovni O'rnidan Turrg'izib O'tirishning Taqiqlanishi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Rasululloh (s.a.v) birovni o'tirgan joyidan turg'izib, uning o'rniga o'tirishdan qat'iy qaytarganlar. Odamlar majlisga yangi kelgan birodarlariga kengchilik qilib joy ochib berishlari kerak (Mujodala surasi, 11-oyat).",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Ikki Kishi O'rtasiga Ruxsatsiz O'tirmaslik",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Hadisda keladi: «Ikki kishining o'rtasiga ularning ruxsatisiz kirib o'tirish halol emasdir». Ular o'zaro shaxsiy suhbat qurayotgan bo'lishi mumkin. Ularning orasini bo'lish odobsizlikdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Majlis Omonati va Majlis Kafforati Duosi",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Majlisda aytilgan gaplar – omonatdir. U yerdagi sirlarni tashqariga olib chiqib tarqatish xiyonatdir. Majlisdan turayotganda kafforat duosini: «Subhanakallohumma va bihamdika, ashhadu alla ilaha illa anta, astag'firuka va atubu ilayk» deb aytish o'sha davrada sodir bo'lgan kichik xatolarning kechirilishiga sabab bo'ladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Majlis Odobi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Majlis Odobi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Majlis Odobi",
        "summary": "Davraga kirib kelgan kishi jamoatga salom berishi va odamlarni bezovta qilib to'rga suqilmasdan, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirishi sunnatdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Majlisga Kirib Kelganda Salom Berish va Bo'sh Joyga O'tirish",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Davraga kirib kelgan kishi jamoatga salom berishi va odamlarni bezovta qilib to'rga suqilmasdan, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirishi sunnatdir.",
            "example": "Payg'ambarimiz (s.a.v) sahobalar davrasiga kelsalar, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirar edilar.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Birovni O'rnidan Turrg'izib O'tirishning Taqiqlanishi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Rasululloh (s.a.v) birovni o'tirgan joyidan turg'izib, uning o'rniga o'tirishdan qat'iy qaytarganlar. Odamlar majlisga yangi kelgan birodarlariga kengchilik qilib joy ochib berishlari kerak (Mujodala surasi, 11-oyat).",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Ikki Kishi O'rtasiga Ruxsatsiz O'tirmaslik",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Hadisda keladi: «Ikki kishining o'rtasiga ularning ruxsatisiz kirib o'tirish halol emasdir». Ular o'zaro shaxsiy suhbat qurayotgan bo'lishi mumkin. Ularning orasini bo'lish odobsizlikdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Majlis Omonati va Majlis Kafforati Duosi",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Majlisda aytilgan gaplar – omonatdir. U yerdagi sirlarni tashqariga olib chiqib tarqatish xiyonatdir. Majlisdan turayotganda kafforat duosini: «Subhanakallohumma va bihamdika, ashhadu alla ilaha illa anta, astag'firuka va atubu ilayk» deb aytish o'sha davrada sodir bo'lgan kichik xatolarning kechirilishiga sabab bo'ladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Majlis Odobi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Majlis Odobi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Etiquette of Assemblies and Gatherings",
        "summary": "Sitting where space is available, not separating two people without permission, making room for others, and ending with kaffarah.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Etiquette of Assemblies and Gatherings",
            "subtitle": "Real-life Context & Introduction",
            "content": "Davraga kirib kelgan kishi jamoatga salom berishi va odamlarni bezovta qilib to'rga suqilmasdan, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirishi sunnatdir.",
            "example": "Payg'ambarimiz (s.a.v) sahobalar davrasiga kelsalar, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirar edilar.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Sitting where space is available, not separating two people without permission, making room for others, and ending with kaffarah. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Hadisda keladi: «Ikki kishining o'rtasiga ularning ruxsatisiz kirib o'tirish halol emasdir». Ular o'zaro shaxsiy suhbat qurayotgan bo'lishi mumkin. Ularning orasini bo'lish odobsizlikdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Majlisda aytilgan gaplar – omonatdir. U yerdagi sirlarni tashqariga olib chiqib tarqatish xiyonatdir. Majlisdan turayotganda kafforat duosini: «Subhanakallohumma va bihamdika, ashhadu alla ilaha illa anta, astag'firuka va atubu ilayk» deb aytish o'sha davrada sodir bo'lgan kichik xatolarning kechirilishiga sabab bo'ladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Etiquette of Assemblies and Gatherings",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Etiquette of Assemblies and Gatherings'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет собраний и общения",
        "summary": "Садиться на свободное место, не разделять сидящих без разрешения, потесниться для входящего и дуа собрания.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет собраний и общения",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Davraga kirib kelgan kishi jamoatga salom berishi va odamlarni bezovta qilib to'rga suqilmasdan, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirishi sunnatdir.",
            "example": "Payg'ambarimiz (s.a.v) sahobalar davrasiga kelsalar, qayerda bo'sh joy bo'lsa, o'sha yerga o'tirar edilar.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Садиться на свободное место, не разделять сидящих без разрешения, потесниться для входящего и дуа собрания. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Hadisda keladi: «Ikki kishining o'rtasiga ularning ruxsatisiz kirib o'tirish halol emasdir». Ular o'zaro shaxsiy suhbat qurayotgan bo'lishi mumkin. Ularning orasini bo'lish odobsizlikdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Majlisda aytilgan gaplar – omonatdir. U yerdagi sirlarni tashqariga olib chiqib tarqatish xiyonatdir. Majlisdan turayotganda kafforat duosini: «Subhanakallohumma va bihamdika, ashhadu alla ilaha illa anta, astag'firuka va atubu ilayk» deb aytish o'sha davrada sodir bo'lgan kichik xatolarning kechirilishiga sabab bo'ladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет собраний и общения",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет собраний и общения»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "So'zlashish Odobi",
    "slug": "dars-46-sozlashish-odobi",
    "summary": "Payg'ambarimiz (s.a.v) umumiy qoida qo'yadilar: «Kim Allohga va oxirat kuniga iymon keltirgan bo'lsa, faqat yaxshi gapni gapirsin yoki jim tursin (sukut saqlasin)!».",
    "order": 46,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "f8wTfuwNrr4",
    "videoUrl": "https://www.youtube.com/watch?v=f8wTfuwNrr4",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Faqat Yaxshi Gap Gapirish Yoki Sukut Saqlash",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Payg'ambarimiz (s.a.v) umumiy qoida qo'yadilar: «Kim Allohga va oxirat kuniga iymon keltirgan bo'lsa, faqat yaxshi gapni gapirsin yoki jim tursin (sukut saqlasin)!».",
        "example": "Ko'p gapirish ko'p xatoga olib keladi. Oz va ma'noli gapirish aqlning komilligidan darak beradi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Birovning So'zini Bo'lmaslik va Diqqat Bilan Tinglash",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "So'zlashish madaniyatining yarmi – chiroyli tinglashdir. Suhbatdoshning gapini oxirigacha sabr bilan eshitish lozim. Ota-ona bolaning gapini shoshiltirmasdan tinglashi, bola ham kattalar gapirayotganda jim turish odobiga amal qilishi shart.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Ovozni Balandlatmaslik (Baqirmaslik)",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Luqmoni Hakim o'g'liga qilgan vasiyatida aytadi: «Yurishingda o'rtacha bo'l va ovozingni pasaytir! Chunki ovozlarning eng yomoni – eshaklarning hangrashidir» (Luqmon surasi, 19-oyat). Haqiqat baqirish bilan isbotlanmaydi. Baland ovoz asabiylik va ojizlik belgisidir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Tilning Oqibati va Oxiratdagi So'rovi",
        "subtitle": "Bugungi amaliy qadam",
        "content": "«U biror so'zni aytmas, magar uning huzurida hoziru nozir bo'lgan kuzatuvchi (farishta) bordir» (Qof surasi, 18-oyat). Har bir aytilgan so'z hisob-kitob qilinadi. Tildan chiqqan yaxshi so'z – sadaqa, yomon so'z esa – gunohdir.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: So'zlashish Odobi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («So'zlashish Odobi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "So'zlashish Odobi",
        "summary": "Payg'ambarimiz (s.a.v) umumiy qoida qo'yadilar: «Kim Allohga va oxirat kuniga iymon keltirgan bo'lsa, faqat yaxshi gapni gapirsin yoki jim tursin (sukut saqlasin)!».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Faqat Yaxshi Gap Gapirish Yoki Sukut Saqlash",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Payg'ambarimiz (s.a.v) umumiy qoida qo'yadilar: «Kim Allohga va oxirat kuniga iymon keltirgan bo'lsa, faqat yaxshi gapni gapirsin yoki jim tursin (sukut saqlasin)!».",
            "example": "Ko'p gapirish ko'p xatoga olib keladi. Oz va ma'noli gapirish aqlning komilligidan darak beradi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Birovning So'zini Bo'lmaslik va Diqqat Bilan Tinglash",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "So'zlashish madaniyatining yarmi – chiroyli tinglashdir. Suhbatdoshning gapini oxirigacha sabr bilan eshitish lozim. Ota-ona bolaning gapini shoshiltirmasdan tinglashi, bola ham kattalar gapirayotganda jim turish odobiga amal qilishi shart.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Ovozni Balandlatmaslik (Baqirmaslik)",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Luqmoni Hakim o'g'liga qilgan vasiyatida aytadi: «Yurishingda o'rtacha bo'l va ovozingni pasaytir! Chunki ovozlarning eng yomoni – eshaklarning hangrashidir» (Luqmon surasi, 19-oyat). Haqiqat baqirish bilan isbotlanmaydi. Baland ovoz asabiylik va ojizlik belgisidir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Tilning Oqibati va Oxiratdagi So'rovi",
            "subtitle": "Bugungi amaliy qadam",
            "content": "«U biror so'zni aytmas, magar uning huzurida hoziru nozir bo'lgan kuzatuvchi (farishta) bordir» (Qof surasi, 18-oyat). Har bir aytilgan so'z hisob-kitob qilinadi. Tildan chiqqan yaxshi so'z – sadaqa, yomon so'z esa – gunohdir.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: So'zlashish Odobi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («So'zlashish Odobi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Etiquette of Speech and Dialogue",
        "summary": "Speaking pleasant words, avoiding interrupting, lowering voice volume, truthful speech, and silence when necessary.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Etiquette of Speech and Dialogue",
            "subtitle": "Real-life Context & Introduction",
            "content": "Payg'ambarimiz (s.a.v) umumiy qoida qo'yadilar: «Kim Allohga va oxirat kuniga iymon keltirgan bo'lsa, faqat yaxshi gapni gapirsin yoki jim tursin (sukut saqlasin)!».",
            "example": "Ko'p gapirish ko'p xatoga olib keladi. Oz va ma'noli gapirish aqlning komilligidan darak beradi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Speaking pleasant words, avoiding interrupting, lowering voice volume, truthful speech, and silence when necessary. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Luqmoni Hakim o'g'liga qilgan vasiyatida aytadi: «Yurishingda o'rtacha bo'l va ovozingni pasaytir! Chunki ovozlarning eng yomoni – eshaklarning hangrashidir» (Luqmon surasi, 19-oyat). Haqiqat baqirish bilan isbotlanmaydi. Baland ovoz asabiylik va ojizlik belgisidir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "«U biror so'zni aytmas, magar uning huzurida hoziru nozir bo'lgan kuzatuvchi (farishta) bordir» (Qof surasi, 18-oyat). Har bir aytilgan so'z hisob-kitob qilinadi. Tildan chiqqan yaxshi so'z – sadaqa, yomon so'z esa – gunohdir.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Etiquette of Speech and Dialogue",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Etiquette of Speech and Dialogue'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет речи и культура общения",
        "summary": "Доброе слово, запрет перебивать собеседника, умеренный тон голоса, правдивость и своевременное молчание.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет речи и культура общения",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Payg'ambarimiz (s.a.v) umumiy qoida qo'yadilar: «Kim Allohga va oxirat kuniga iymon keltirgan bo'lsa, faqat yaxshi gapni gapirsin yoki jim tursin (sukut saqlasin)!».",
            "example": "Ko'p gapirish ko'p xatoga olib keladi. Oz va ma'noli gapirish aqlning komilligidan darak beradi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Доброе слово, запрет перебивать собеседника, умеренный тон голоса, правдивость и своевременное молчание. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Luqmoni Hakim o'g'liga qilgan vasiyatida aytadi: «Yurishingda o'rtacha bo'l va ovozingni pasaytir! Chunki ovozlarning eng yomoni – eshaklarning hangrashidir» (Luqmon surasi, 19-oyat). Haqiqat baqirish bilan isbotlanmaydi. Baland ovoz asabiylik va ojizlik belgisidir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "«U biror so'zni aytmas, magar uning huzurida hoziru nozir bo'lgan kuzatuvchi (farishta) bordir» (Qof surasi, 18-oyat). Har bir aytilgan so'z hisob-kitob qilinadi. Tildan chiqqan yaxshi so'z – sadaqa, yomon so'z esa – gunohdir.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет речи и культура общения",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет речи и культура общения»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Hazil Odobi",
    "slug": "dars-47-hazil-odobi",
    "summary": "Islom inson tabiatini inkor etmaydi; qalbni yozish, kulish va samimiy hazillashishga shariatda ruxsat berilgan.",
    "order": 47,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "hUk7ZjGYc9I",
    "videoUrl": "https://www.youtube.com/watch?v=hUk7ZjGYc9I",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Islomda Hazilga Ruxsat va Uning Me'yori",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Islom inson tabiatini inkor etmaydi; qalbni yozish, kulish va samimiy hazillashishga shariatda ruxsat berilgan.",
        "example": "Biroq hazil taomdagi tuz kabi me'yorida bo'lishi kerak: me'yoridan oshsa, qadr-qimmatni ketkazadi va qalbni qotiradi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Hazilda Yolg'on Aralashtirmaslik Sharti",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) ham hazillashganlar, lekin u zot: «Men hazillashaman, ammo faqat haqiqatni aytaman», deganlar. Rasululloh (s.a.v) qattiq ogohlantirganlar: «Odamlarni kuldirish uchun yolg'on gapiradigan kimsaga halokat bo'lsin! Unga halokat bo'lsin, unga halokat bo'lsin!».",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Birovni Masxara Qilish va Mazaxlashning Haromligi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Qur'onda Alloh taolo qat'iy qaytaradi: «Ey iymon keltirganlar! Bir qavm boshqa bir qavmni masxara qilmasin, ehtimol ular bulardan yaxshiroqdir...» (Hujurot surasi, 11-oyat). Birovning tutilib gapirishini, nuqsonini yoki kiyimini kulgiga qo'yish hazil emas, balki qabih zulmdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Birovni Qo'rqitish Orqali Hazillashmaslik",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Payg'ambarimiz (s.a.v) aytadilar: «Musulmonga boshqa bir musulmonni qo'rqitish halol emasdir!». Birovning buyumini berkitib qo'yish yoki uni to'satdan qo'rqitib yuborish orqali qilingan pranklar Islomda mutlaqo harom qilingan.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Hazil Odobi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Hazil Odobi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Hazil Odobi",
        "summary": "Islom inson tabiatini inkor etmaydi; qalbni yozish, kulish va samimiy hazillashishga shariatda ruxsat berilgan.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Islomda Hazilga Ruxsat va Uning Me'yori",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Islom inson tabiatini inkor etmaydi; qalbni yozish, kulish va samimiy hazillashishga shariatda ruxsat berilgan.",
            "example": "Biroq hazil taomdagi tuz kabi me'yorida bo'lishi kerak: me'yoridan oshsa, qadr-qimmatni ketkazadi va qalbni qotiradi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Hazilda Yolg'on Aralashtirmaslik Sharti",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) ham hazillashganlar, lekin u zot: «Men hazillashaman, ammo faqat haqiqatni aytaman», deganlar. Rasululloh (s.a.v) qattiq ogohlantirganlar: «Odamlarni kuldirish uchun yolg'on gapiradigan kimsaga halokat bo'lsin! Unga halokat bo'lsin, unga halokat bo'lsin!».",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Birovni Masxara Qilish va Mazaxlashning Haromligi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Qur'onda Alloh taolo qat'iy qaytaradi: «Ey iymon keltirganlar! Bir qavm boshqa bir qavmni masxara qilmasin, ehtimol ular bulardan yaxshiroqdir...» (Hujurot surasi, 11-oyat). Birovning tutilib gapirishini, nuqsonini yoki kiyimini kulgiga qo'yish hazil emas, balki qabih zulmdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Birovni Qo'rqitish Orqali Hazillashmaslik",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Musulmonga boshqa bir musulmonni qo'rqitish halol emasdir!». Birovning buyumini berkitib qo'yish yoki uni to'satdan qo'rqitib yuborish orqali qilingan pranklar Islomda mutlaqo harom qilingan.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Hazil Odobi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Hazil Odobi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Etiquette of Humor and Joking",
        "summary": "Humor in the Prophetic tradition, never lying to make people laugh, avoiding mockery or hurting feelings.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Etiquette of Humor and Joking",
            "subtitle": "Real-life Context & Introduction",
            "content": "Islom inson tabiatini inkor etmaydi; qalbni yozish, kulish va samimiy hazillashishga shariatda ruxsat berilgan.",
            "example": "Biroq hazil taomdagi tuz kabi me'yorida bo'lishi kerak: me'yoridan oshsa, qadr-qimmatni ketkazadi va qalbni qotiradi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Humor in the Prophetic tradition, never lying to make people laugh, avoiding mockery or hurting feelings. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Qur'onda Alloh taolo qat'iy qaytaradi: «Ey iymon keltirganlar! Bir qavm boshqa bir qavmni masxara qilmasin, ehtimol ular bulardan yaxshiroqdir...» (Hujurot surasi, 11-oyat). Birovning tutilib gapirishini, nuqsonini yoki kiyimini kulgiga qo'yish hazil emas, balki qabih zulmdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Musulmonga boshqa bir musulmonni qo'rqitish halol emasdir!». Birovning buyumini berkitib qo'yish yoki uni to'satdan qo'rqitib yuborish orqali qilingan pranklar Islomda mutlaqo harom qilingan.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Etiquette of Humor and Joking",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Etiquette of Humor and Joking'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет шуток и юмора",
        "summary": "Шутки по примеру Пророка (мир ему), запрет лжи ради смеха, недопустимость насмешек и обидных прозвищ.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет шуток и юмора",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Islom inson tabiatini inkor etmaydi; qalbni yozish, kulish va samimiy hazillashishga shariatda ruxsat berilgan.",
            "example": "Biroq hazil taomdagi tuz kabi me'yorida bo'lishi kerak: me'yoridan oshsa, qadr-qimmatni ketkazadi va qalbni qotiradi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Шутки по примеру Пророка (мир ему), запрет лжи ради смеха, недопустимость насмешек и обидных прозвищ. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Qur'onda Alloh taolo qat'iy qaytaradi: «Ey iymon keltirganlar! Bir qavm boshqa bir qavmni masxara qilmasin, ehtimol ular bulardan yaxshiroqdir...» (Hujurot surasi, 11-oyat). Birovning tutilib gapirishini, nuqsonini yoki kiyimini kulgiga qo'yish hazil emas, balki qabih zulmdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Musulmonga boshqa bir musulmonni qo'rqitish halol emasdir!». Birovning buyumini berkitib qo'yish yoki uni to'satdan qo'rqitib yuborish orqali qilingan pranklar Islomda mutlaqo harom qilingan.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет шуток и юмора",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет шуток и юмора»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Muborakbod Etish Odobi (Tabriklash)",
    "slug": "dars-48-muborakbod-etish-odobi-tabriklash",
    "summary": "Birodarining shodligiga sherik bo'lish, uni yutug'i, to'yi, farzand ko'rgani yoki bayramlari bilan qutlash mo'minlik burchidir.",
    "order": 48,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "4ELdQhLI1cQ",
    "videoUrl": "https://www.youtube.com/watch?v=4ELdQhLI1cQ",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Quvonchli Kunlarda Hamdard va Hamnafas Bo'lish",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Birodarining shodligiga sherik bo'lish, uni yutug'i, to'yi, farzand ko'rgani yoki bayramlari bilan qutlash mo'minlik burchidir.",
        "example": "Muborakbod etish qalblardagi kin va hasadni ketkazadi, mehr-muhabbat rishtalarini mustahkamlaydi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Farzand Tug'ilganda Tabriklash Sunnati",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Yangi farzand ko'rgan kishiga Hasan Basriy (r.a) o'rgatgan duo bilan tabriklash sunnatdir: «Borakallohu laka fil-mavhubi lak, va shakartal-Vohib, va balag'a ashuddahu, va ruziqta birroh» (Berilgan bu hadyani Alloh senga muborak qilsin, Hadya etuvchiga shukr qilgin, bolang balog'atga yetsin va uning yaxshiligi senga nasib qilsin!). O'g'il yoki qiz deb ajratmasdan, farzand tug'ilgani bilan xolis qutlash lozim.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Nikoh va To'ylarda Qilinadigan Duo",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Payg'ambarimiz (s.a.v) yangi oila qurganlarni tabriklab: «Borakallohu laka va boraka alayka va jama'a baynakuma fi xayr» (Alloh senga baraka bersin, barakasini ustingda doimiy qilsin va ikkovingizni doim yaxshilikda jamlasin!) deb duo qilganlar. To'ylardagi ma'nosiz odatlarning o'rniga mana shu sunnat duolar bilan qutlash baraka keltiradi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Hadya Ulashish Fazilati",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Rasululloh (s.a.v) aytadilar: «Bir-biringizga hadya beringlar, bir-biringizni yaxshi ko'rib qolasizlar!». Hadya qimmatbaho bo'lishi shart emas; arzimagan bir kitob yoki shirinlik ham insonning ko'nglini tog'dek ko'taradi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Muborakbod Etish Odobi (Tabriklash)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Muborakbod Etish Odobi (Tabriklash)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Muborakbod Etish Odobi (Tabriklash)",
        "summary": "Birodarining shodligiga sherik bo'lish, uni yutug'i, to'yi, farzand ko'rgani yoki bayramlari bilan qutlash mo'minlik burchidir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Quvonchli Kunlarda Hamdard va Hamnafas Bo'lish",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Birodarining shodligiga sherik bo'lish, uni yutug'i, to'yi, farzand ko'rgani yoki bayramlari bilan qutlash mo'minlik burchidir.",
            "example": "Muborakbod etish qalblardagi kin va hasadni ketkazadi, mehr-muhabbat rishtalarini mustahkamlaydi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Farzand Tug'ilganda Tabriklash Sunnati",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Yangi farzand ko'rgan kishiga Hasan Basriy (r.a) o'rgatgan duo bilan tabriklash sunnatdir: «Borakallohu laka fil-mavhubi lak, va shakartal-Vohib, va balag'a ashuddahu, va ruziqta birroh» (Berilgan bu hadyani Alloh senga muborak qilsin, Hadya etuvchiga shukr qilgin, bolang balog'atga yetsin va uning yaxshiligi senga nasib qilsin!). O'g'il yoki qiz deb ajratmasdan, farzand tug'ilgani bilan xolis qutlash lozim.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Nikoh va To'ylarda Qilinadigan Duo",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Payg'ambarimiz (s.a.v) yangi oila qurganlarni tabriklab: «Borakallohu laka va boraka alayka va jama'a baynakuma fi xayr» (Alloh senga baraka bersin, barakasini ustingda doimiy qilsin va ikkovingizni doim yaxshilikda jamlasin!) deb duo qilganlar. To'ylardagi ma'nosiz odatlarning o'rniga mana shu sunnat duolar bilan qutlash baraka keltiradi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Hadya Ulashish Fazilati",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Rasululloh (s.a.v) aytadilar: «Bir-biringizga hadya beringlar, bir-biringizni yaxshi ko'rib qolasizlar!». Hadya qimmatbaho bo'lishi shart emas; arzimagan bir kitob yoki shirinlik ham insonning ko'nglini tog'dek ko'taradi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Muborakbod Etish Odobi (Tabriklash)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Muborakbod Etish Odobi (Tabriklash)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Etiquette of Congratulations and Joy",
        "summary": "Congratulating on weddings, newborn babies, holidays, Eid greetings, genuine joy for other people's happiness.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Etiquette of Congratulations and Joy",
            "subtitle": "Real-life Context & Introduction",
            "content": "Birodarining shodligiga sherik bo'lish, uni yutug'i, to'yi, farzand ko'rgani yoki bayramlari bilan qutlash mo'minlik burchidir.",
            "example": "Muborakbod etish qalblardagi kin va hasadni ketkazadi, mehr-muhabbat rishtalarini mustahkamlaydi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Congratulating on weddings, newborn babies, holidays, Eid greetings, genuine joy for other people's happiness. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Payg'ambarimiz (s.a.v) yangi oila qurganlarni tabriklab: «Borakallohu laka va boraka alayka va jama'a baynakuma fi xayr» (Alloh senga baraka bersin, barakasini ustingda doimiy qilsin va ikkovingizni doim yaxshilikda jamlasin!) deb duo qilganlar. To'ylardagi ma'nosiz odatlarning o'rniga mana shu sunnat duolar bilan qutlash baraka keltiradi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Rasululloh (s.a.v) aytadilar: «Bir-biringizga hadya beringlar, bir-biringizni yaxshi ko'rib qolasizlar!». Hadya qimmatbaho bo'lishi shart emas; arzimagan bir kitob yoki shirinlik ham insonning ko'nglini tog'dek ko'taradi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Etiquette of Congratulations and Joy",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Etiquette of Congratulations and Joy'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет поздравлений и добрых вестей",
        "summary": "Поздравления со свадьбой, рождением ребенка, праздниками Ид и искренняя радость за счастье ближнего.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет поздравлений и добрых вестей",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Birodarining shodligiga sherik bo'lish, uni yutug'i, to'yi, farzand ko'rgani yoki bayramlari bilan qutlash mo'minlik burchidir.",
            "example": "Muborakbod etish qalblardagi kin va hasadni ketkazadi, mehr-muhabbat rishtalarini mustahkamlaydi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Поздравления со свадьбой, рождением ребенка, праздниками Ид и искренняя радость за счастье ближнего. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Payg'ambarimiz (s.a.v) yangi oila qurganlarni tabriklab: «Borakallohu laka va boraka alayka va jama'a baynakuma fi xayr» (Alloh senga baraka bersin, barakasini ustingda doimiy qilsin va ikkovingizni doim yaxshilikda jamlasin!) deb duo qilganlar. To'ylardagi ma'nosiz odatlarning o'rniga mana shu sunnat duolar bilan qutlash baraka keltiradi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Rasululloh (s.a.v) aytadilar: «Bir-biringizga hadya beringlar, bir-biringizni yaxshi ko'rib qolasizlar!». Hadya qimmatbaho bo'lishi shart emas; arzimagan bir kitob yoki shirinlik ham insonning ko'nglini tog'dek ko'taradi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет поздравлений и добрых вестей",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет поздравлений и добрых вестей»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Kasalni Ziyorat Qilish va Ta'ziya Odobi (1-qism)",
    "slug": "dars-49-kasalni-ziyorat-qilish-va-taziya-odobi-1-qism",
    "summary": "Payg'ambarimiz (s.a.v) aytadilar: «Kasal ko'rishga borgan kishi to qaytib kelgunicha jannat mevalarini terib yurgandek bo'ladi».",
    "order": 49,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "hRTT7mf3KIs",
    "videoUrl": "https://www.youtube.com/watch?v=hRTT7mf3KIs",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Bemor Ko'rishning Ulkan Savobi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Payg'ambarimiz (s.a.v) aytadilar: «Kasal ko'rishga borgan kishi to qaytib kelgunicha jannat mevalarini terib yurgandek bo'ladi».",
        "example": "Kasalni ertalab ziyorat qilgan kishi uchun 70 ming farishta kechgacha duo qiladi; kechqurun borgan kishi uchun 70 ming farishta tonggacha istig'for aytadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Bemor Oldida O'tirish Odobi",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Bemorning bosh tomonida o'tirish, uning peshonasiga qo'l qo'yib holini so'rash va unga dalda berish sunnatdir. Bemor huzurida uzoq vaqt o'tirib olib, unga malol kelmaslik, suhbatni qisqa va maroqli qilish odobdir.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Bemorning Haqqiga O'qiladigan Sunnat Duolar",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) bemor oldiga kirsalar: «La ba'sa, tahurun inshaAlloh» (Zarari yo'q, inshaAlloh bu xastalik gunohlardan poklovchidir) der edilar. Yetti marta: «As'alullohal-Aziym, Robbal-Arshil-Aziym an yashfiyak» (Ulug' Arshning Rabbi bo'lgan Buyuk Allohdan senga shifo berishini so'rayman) deb duo qilish sunnatdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "G'ayridin Bemorni Ham Ziyorat Qilish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Payg'ambarimiz (s.a.v) o'zlariga xizmat qilgan yahudiy bolakay betob bo'lib qolganida, uni uyiga borib ziyorat qildilar va mehr bilan Islomga da'vat qildilar, bola Islomni qabul qilib vafot etdi. Musulmonning bag'rikengligi va mehri barcha insonlarga birdek taralishi lozim.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Kasalni Ziyorat Qilish va Ta'ziya Odobi (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Kasalni Ziyorat Qilish va Ta'ziya Odobi (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Kasalni Ziyorat Qilish va Ta'ziya Odobi (1-qism)",
        "summary": "Payg'ambarimiz (s.a.v) aytadilar: «Kasal ko'rishga borgan kishi to qaytib kelgunicha jannat mevalarini terib yurgandek bo'ladi».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Bemor Ko'rishning Ulkan Savobi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Kasal ko'rishga borgan kishi to qaytib kelgunicha jannat mevalarini terib yurgandek bo'ladi».",
            "example": "Kasalni ertalab ziyorat qilgan kishi uchun 70 ming farishta kechgacha duo qiladi; kechqurun borgan kishi uchun 70 ming farishta tonggacha istig'for aytadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Bemor Oldida O'tirish Odobi",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Bemorning bosh tomonida o'tirish, uning peshonasiga qo'l qo'yib holini so'rash va unga dalda berish sunnatdir. Bemor huzurida uzoq vaqt o'tirib olib, unga malol kelmaslik, suhbatni qisqa va maroqli qilish odobdir.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Bemorning Haqqiga O'qiladigan Sunnat Duolar",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) bemor oldiga kirsalar: «La ba'sa, tahurun inshaAlloh» (Zarari yo'q, inshaAlloh bu xastalik gunohlardan poklovchidir) der edilar. Yetti marta: «As'alullohal-Aziym, Robbal-Arshil-Aziym an yashfiyak» (Ulug' Arshning Rabbi bo'lgan Buyuk Allohdan senga shifo berishini so'rayman) deb duo qilish sunnatdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "G'ayridin Bemorni Ham Ziyorat Qilish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Payg'ambarimiz (s.a.v) o'zlariga xizmat qilgan yahudiy bolakay betob bo'lib qolganida, uni uyiga borib ziyorat qildilar va mehr bilan Islomga da'vat qildilar, bola Islomni qabul qilib vafot etdi. Musulmonning bag'rikengligi va mehri barcha insonlarga birdek taralishi lozim.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Kasalni Ziyorat Qilish va Ta'ziya Odobi (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Kasalni Ziyorat Qilish va Ta'ziya Odobi (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Visiting the Sick and Compassion (Part 1)",
        "summary": "High reward of visiting patients, keeping visits short, uplifting comforting words, and praying for healing (Shifa).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Visiting the Sick and Compassion (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Kasal ko'rishga borgan kishi to qaytib kelgunicha jannat mevalarini terib yurgandek bo'ladi».",
            "example": "Kasalni ertalab ziyorat qilgan kishi uchun 70 ming farishta kechgacha duo qiladi; kechqurun borgan kishi uchun 70 ming farishta tonggacha istig'for aytadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "High reward of visiting patients, keeping visits short, uplifting comforting words, and praying for healing (Shifa). Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) bemor oldiga kirsalar: «La ba'sa, tahurun inshaAlloh» (Zarari yo'q, inshaAlloh bu xastalik gunohlardan poklovchidir) der edilar. Yetti marta: «As'alullohal-Aziym, Robbal-Arshil-Aziym an yashfiyak» (Ulug' Arshning Rabbi bo'lgan Buyuk Allohdan senga shifo berishini so'rayman) deb duo qilish sunnatdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Payg'ambarimiz (s.a.v) o'zlariga xizmat qilgan yahudiy bolakay betob bo'lib qolganida, uni uyiga borib ziyorat qildilar va mehr bilan Islomga da'vat qildilar, bola Islomni qabul qilib vafot etdi. Musulmonning bag'rikengligi va mehri barcha insonlarga birdek taralishi lozim.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Visiting the Sick and Compassion (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Visiting the Sick and Compassion (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Посещение больных и сострадание (Часть 1)",
        "summary": "Награда за посещение больного, тактичность, краткость визита, слова поддержки и мольба об исцелении (шифа).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Посещение больных и сострадание (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Kasal ko'rishga borgan kishi to qaytib kelgunicha jannat mevalarini terib yurgandek bo'ladi».",
            "example": "Kasalni ertalab ziyorat qilgan kishi uchun 70 ming farishta kechgacha duo qiladi; kechqurun borgan kishi uchun 70 ming farishta tonggacha istig'for aytadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Награда за посещение больного, тактичность, краткость визита, слова поддержки и мольба об исцелении (шифа). Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) bemor oldiga kirsalar: «La ba'sa, tahurun inshaAlloh» (Zarari yo'q, inshaAlloh bu xastalik gunohlardan poklovchidir) der edilar. Yetti marta: «As'alullohal-Aziym, Robbal-Arshil-Aziym an yashfiyak» (Ulug' Arshning Rabbi bo'lgan Buyuk Allohdan senga shifo berishini so'rayman) deb duo qilish sunnatdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Payg'ambarimiz (s.a.v) o'zlariga xizmat qilgan yahudiy bolakay betob bo'lib qolganida, uni uyiga borib ziyorat qildilar va mehr bilan Islomga da'vat qildilar, bola Islomni qabul qilib vafot etdi. Musulmonning bag'rikengligi va mehri barcha insonlarga birdek taralishi lozim.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Посещение больных и сострадание (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Посещение больных и сострадание (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Kasalni Ziyorat Qilish va Ta'ziya Odobi (2-qism)",
    "slug": "dars-50-kasalni-ziyorat-qilish-va-taziya-odobi-2-qism",
    "summary": "Ta'ziya – yaqini vafot etgan kishiga hamdardlik bildirish, uning musibatiga sherik bo'lish va uni sabrga chaqirishdir.",
    "order": 50,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "BT0b2B6t7Ug",
    "videoUrl": "https://www.youtube.com/watch?v=BT0b2B6t7Ug",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Ta'ziya Bildirishning Maqsadi va Savobi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Ta'ziya – yaqini vafot etgan kishiga hamdardlik bildirish, uning musibatiga sherik bo'lish va uni sabrga chaqirishdir.",
        "example": "Hadisda aytiladi: «Musibat yetgan birodariga ta'ziya bildirgan kishiga o'sha musibatga sabr qilgan kishining ajricha ajr beriladi».",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Sunnatda Kelgan Ta'ziya So'zlari",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Eng afzal ta'ziya so'zi: «Inna lillahi va inna ilayhi roji'un. Lillahi ma axaza va lahu ma a'to va kullu shay'in indahu bi ajalim-musamma. Fasbir vahtahtaasib» (Albatta, biz Allohnikimiz va Unga qaytuvchimiz. Olgoni ham Allohning O'ziniki, bergani ham O'ziniki. Har bir narsa Uning huzurida belgilangan muddatgachadir. Bas, sabr qiling va mukofotini Allohdan kuting). Xalq orasidagi bid'at gaplar o'rniga sunnatdagi hikmatli duolar bilan tasalli berish lozim.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Dod Solib Yig'lash (Niyohat)ning Taqiqlanishi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Ko'zdan yosh oqishi va qalbning mahzun bo'lishi tabiiy rahm-shafqat belgisidir (Payg'ambarimiz s.a.v o'g'illari Ibrohim vafotida yig'laganlar). Biroq yoqani yirtish, yuziga urish, ovoz chiqarib dod solib faryod urish Islomda qattiq harom qilingan va johiliyat amali hisoblanadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Mayyitning Haqqiga Istig'for va Qarzini Uzish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Mayyit dafn qilingach, uning qabri ustida turib sobitqadamlik va mag'firat so'rab duo qilish lozim. Agar mayyitning zimmada qarzi bo'lsa, merosxo'rlari darhol uni to'lab qutulishi shart, toki qabrdagi ruhi qarz sababli bog'lanib qolmasin.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Kasalni Ziyorat Qilish va Ta'ziya Odobi (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Kasalni Ziyorat Qilish va Ta'ziya Odobi (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Kasalni Ziyorat Qilish va Ta'ziya Odobi (2-qism)",
        "summary": "Ta'ziya – yaqini vafot etgan kishiga hamdardlik bildirish, uning musibatiga sherik bo'lish va uni sabrga chaqirishdir.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ta'ziya Bildirishning Maqsadi va Savobi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Ta'ziya – yaqini vafot etgan kishiga hamdardlik bildirish, uning musibatiga sherik bo'lish va uni sabrga chaqirishdir.",
            "example": "Hadisda aytiladi: «Musibat yetgan birodariga ta'ziya bildirgan kishiga o'sha musibatga sabr qilgan kishining ajricha ajr beriladi».",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Sunnatda Kelgan Ta'ziya So'zlari",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Eng afzal ta'ziya so'zi: «Inna lillahi va inna ilayhi roji'un. Lillahi ma axaza va lahu ma a'to va kullu shay'in indahu bi ajalim-musamma. Fasbir vahtahtaasib» (Albatta, biz Allohnikimiz va Unga qaytuvchimiz. Olgoni ham Allohning O'ziniki, bergani ham O'ziniki. Har bir narsa Uning huzurida belgilangan muddatgachadir. Bas, sabr qiling va mukofotini Allohdan kuting). Xalq orasidagi bid'at gaplar o'rniga sunnatdagi hikmatli duolar bilan tasalli berish lozim.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Dod Solib Yig'lash (Niyohat)ning Taqiqlanishi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Ko'zdan yosh oqishi va qalbning mahzun bo'lishi tabiiy rahm-shafqat belgisidir (Payg'ambarimiz s.a.v o'g'illari Ibrohim vafotida yig'laganlar). Biroq yoqani yirtish, yuziga urish, ovoz chiqarib dod solib faryod urish Islomda qattiq harom qilingan va johiliyat amali hisoblanadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Mayyitning Haqqiga Istig'for va Qarzini Uzish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Mayyit dafn qilingach, uning qabri ustida turib sobitqadamlik va mag'firat so'rab duo qilish lozim. Agar mayyitning zimmada qarzi bo'lsa, merosxo'rlari darhol uni to'lab qutulishi shart, toki qabrdagi ruhi qarz sababli bog'lanib qolmasin.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Kasalni Ziyorat Qilish va Ta'ziya Odobi (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Kasalni Ziyorat Qilish va Ta'ziya Odobi (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Condolence Etiquette and Grief Support (Part 2)",
        "summary": "Etiquette of Ta'ziyah, preparing food for bereaved family, patient acceptance of decree, and comforting the grieving.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Condolence Etiquette and Grief Support (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Ta'ziya – yaqini vafot etgan kishiga hamdardlik bildirish, uning musibatiga sherik bo'lish va uni sabrga chaqirishdir.",
            "example": "Hadisda aytiladi: «Musibat yetgan birodariga ta'ziya bildirgan kishiga o'sha musibatga sabr qilgan kishining ajricha ajr beriladi».",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Etiquette of Ta'ziyah, preparing food for bereaved family, patient acceptance of decree, and comforting the grieving. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Ko'zdan yosh oqishi va qalbning mahzun bo'lishi tabiiy rahm-shafqat belgisidir (Payg'ambarimiz s.a.v o'g'illari Ibrohim vafotida yig'laganlar). Biroq yoqani yirtish, yuziga urish, ovoz chiqarib dod solib faryod urish Islomda qattiq harom qilingan va johiliyat amali hisoblanadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Mayyit dafn qilingach, uning qabri ustida turib sobitqadamlik va mag'firat so'rab duo qilish lozim. Agar mayyitning zimmada qarzi bo'lsa, merosxo'rlari darhol uni to'lab qutulishi shart, toki qabrdagi ruhi qarz sababli bog'lanib qolmasin.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Condolence Etiquette and Grief Support (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Condolence Etiquette and Grief Support (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет соболезнования и утешения (Часть 2)",
        "summary": "Этикет выражения соболезнований (тазия), приготовление еды для скорбящей семьи, терпение и слова утешения.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет соболезнования и утешения (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Ta'ziya – yaqini vafot etgan kishiga hamdardlik bildirish, uning musibatiga sherik bo'lish va uni sabrga chaqirishdir.",
            "example": "Hadisda aytiladi: «Musibat yetgan birodariga ta'ziya bildirgan kishiga o'sha musibatga sabr qilgan kishining ajricha ajr beriladi».",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Этикет выражения соболезнований (тазия), приготовление еды для скорбящей семьи, терпение и слова утешения. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Ko'zdan yosh oqishi va qalbning mahzun bo'lishi tabiiy rahm-shafqat belgisidir (Payg'ambarimiz s.a.v o'g'illari Ibrohim vafotida yig'laganlar). Biroq yoqani yirtish, yuziga urish, ovoz chiqarib dod solib faryod urish Islomda qattiq harom qilingan va johiliyat amali hisoblanadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Mayyit dafn qilingach, uning qabri ustida turib sobitqadamlik va mag'firat so'rab duo qilish lozim. Agar mayyitning zimmada qarzi bo'lsa, merosxo'rlari darhol uni to'lab qutulishi shart, toki qabrdagi ruhi qarz sababli bog'lanib qolmasin.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет соболезнования и утешения (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет соболезнования и утешения (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Aksa Urish va Esnash Odobi",
    "slug": "dars-51-aksa-urish-va-esnash-odobi",
    "summary": "Payg'ambarimiz (s.a.v) aytadilar: «Alloh taolo aksa urishni yaxshi ko'radi, esnashni esa yoqtirmaydi».",
    "order": 51,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "mvXCSmvvCNI",
    "videoUrl": "https://www.youtube.com/watch?v=mvXCSmvvCNI",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Aksa Urish – Rahmondan, Esnash – Shaytondan",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Payg'ambarimiz (s.a.v) aytadilar: «Alloh taolo aksa urishni yaxshi ko'radi, esnashni esa yoqtirmaydi».",
        "example": "Aksa urish inson miyasidagi tiqinlarni ochadi, vujudga yengillik va tetiklik baxsh etadi. Esnash esa tanballik, to'qlik va yalqovlik oqibatida yuzaga keladi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Aksa Urgandagi 3 Bosqichli Sunnat",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "1) Aksa urgan kishi: «Alhamdulillah» deydi; 2) Buni eshitgan musulmon birodari unga: «Yarhamukalloh» (Alloh senga rahm qilsin) deb duo qiladi; 3) Aksa urgan kishi javoban: «Yahdiykumullohu va yuslihu balakum» (Alloh sizni to'g'ri yo'lga hidoyat qilsin va qalbingizni isloh etsin) deydi. Bu go'zal muloqot jamiyatda o'zaro mehr va samimiyatni mustahkamlaydi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Aksa Urganda Ovozni Pasaytirish va Og'izni To'sish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) aksa ursalar, yuzlarini qo'llari yoki kiyimlari bilan to'sar va ovozlarini pasaytirar edilar. Odamlarning yuziga qarab yoki baland ovozda aksa urish boshqalarga ozor va jirkanish keltiradi. Gigiyena qoidalariga rioya qilish sunnatdir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Farzandga Bu Odoblarni Yoshligidan Singdirish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Bola tilga kirganidanoq aksa urganda «Alhamdulillah» deyishni va dadasidan «Yarhamukalloh» deb javob eshitishni tabiiy odatga aylantirishi kerak. Esnaganda chap qo'lning orqasi bilan og'izni to'sish odobi o'rgatiladi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Aksa Urish va Esnash Odobi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Aksa Urish va Esnash Odobi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Aksa Urish va Esnash Odobi",
        "summary": "Payg'ambarimiz (s.a.v) aytadilar: «Alloh taolo aksa urishni yaxshi ko'radi, esnashni esa yoqtirmaydi».",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Aksa Urish – Rahmondan, Esnash – Shaytondan",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Alloh taolo aksa urishni yaxshi ko'radi, esnashni esa yoqtirmaydi».",
            "example": "Aksa urish inson miyasidagi tiqinlarni ochadi, vujudga yengillik va tetiklik baxsh etadi. Esnash esa tanballik, to'qlik va yalqovlik oqibatida yuzaga keladi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Aksa Urgandagi 3 Bosqichli Sunnat",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "1) Aksa urgan kishi: «Alhamdulillah» deydi; 2) Buni eshitgan musulmon birodari unga: «Yarhamukalloh» (Alloh senga rahm qilsin) deb duo qiladi; 3) Aksa urgan kishi javoban: «Yahdiykumullohu va yuslihu balakum» (Alloh sizni to'g'ri yo'lga hidoyat qilsin va qalbingizni isloh etsin) deydi. Bu go'zal muloqot jamiyatda o'zaro mehr va samimiyatni mustahkamlaydi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Aksa Urganda Ovozni Pasaytirish va Og'izni To'sish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) aksa ursalar, yuzlarini qo'llari yoki kiyimlari bilan to'sar va ovozlarini pasaytirar edilar. Odamlarning yuziga qarab yoki baland ovozda aksa urish boshqalarga ozor va jirkanish keltiradi. Gigiyena qoidalariga rioya qilish sunnatdir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Farzandga Bu Odoblarni Yoshligidan Singdirish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Bola tilga kirganidanoq aksa urganda «Alhamdulillah» deyishni va dadasidan «Yarhamukalloh» deb javob eshitishni tabiiy odatga aylantirishi kerak. Esnaganda chap qo'lning orqasi bilan og'izni to'sish odobi o'rgatiladi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Aksa Urish va Esnash Odobi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Aksa Urish va Esnash Odobi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Etiquette of Sneezing and Yawning",
        "summary": "Saying Alhamdulillah upon sneezing, replying with Yarhamukallah, covering mouth when yawning, and suppressing loud sounds.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Etiquette of Sneezing and Yawning",
            "subtitle": "Real-life Context & Introduction",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Alloh taolo aksa urishni yaxshi ko'radi, esnashni esa yoqtirmaydi».",
            "example": "Aksa urish inson miyasidagi tiqinlarni ochadi, vujudga yengillik va tetiklik baxsh etadi. Esnash esa tanballik, to'qlik va yalqovlik oqibatida yuzaga keladi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Saying Alhamdulillah upon sneezing, replying with Yarhamukallah, covering mouth when yawning, and suppressing loud sounds. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) aksa ursalar, yuzlarini qo'llari yoki kiyimlari bilan to'sar va ovozlarini pasaytirar edilar. Odamlarning yuziga qarab yoki baland ovozda aksa urish boshqalarga ozor va jirkanish keltiradi. Gigiyena qoidalariga rioya qilish sunnatdir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Bola tilga kirganidanoq aksa urganda «Alhamdulillah» deyishni va dadasidan «Yarhamukalloh» deb javob eshitishni tabiiy odatga aylantirishi kerak. Esnaganda chap qo'lning orqasi bilan og'izni to'sish odobi o'rgatiladi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Etiquette of Sneezing and Yawning",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Etiquette of Sneezing and Yawning'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет чихания и зевания",
        "summary": "Произнесение «Альхамдулиллях» при чихании, ответ «Ярхамукаллах», прикрытие рта при зевании и сдержанность.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет чихания и зевания",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Payg'ambarimiz (s.a.v) aytadilar: «Alloh taolo aksa urishni yaxshi ko'radi, esnashni esa yoqtirmaydi».",
            "example": "Aksa urish inson miyasidagi tiqinlarni ochadi, vujudga yengillik va tetiklik baxsh etadi. Esnash esa tanballik, to'qlik va yalqovlik oqibatida yuzaga keladi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Произнесение «Альхамдулиллях» при чихании, ответ «Ярхамукаллах», прикрытие рта при зевании и сдержанность. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) aksa ursalar, yuzlarini qo'llari yoki kiyimlari bilan to'sar va ovozlarini pasaytirar edilar. Odamlarning yuziga qarab yoki baland ovozda aksa urish boshqalarga ozor va jirkanish keltiradi. Gigiyena qoidalariga rioya qilish sunnatdir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Bola tilga kirganidanoq aksa urganda «Alhamdulillah» deyishni va dadasidan «Yarhamukalloh» deb javob eshitishni tabiiy odatga aylantirishi kerak. Esnaganda chap qo'lning orqasi bilan og'izni to'sish odobi o'rgatiladi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет чихания и зевания",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет чихания и зевания»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Amri Ma'ruf va Nahyi Munkar (1-qism)",
    "slug": "dars-52-amri-maruf-va-nahyi-munkar-1-qism",
    "summary": "Alloh taolo Qur'oni Karimda marhamat qiladi: «Sizlar odamlar uchun chiqarilgan eng yaxshi ummat bo'ldingiz: yaxshilikka buyurasiz, yomonlikdan qaytarasiz va Allohga iymon keltirasiz» (Oli Imron surasi, 110-oyat).",
    "order": 52,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "rIJNvsG2IDk",
    "videoUrl": "https://www.youtube.com/watch?v=rIJNvsG2IDk",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Ummatning Eng Buyuk Fazilati",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Alloh taolo Qur'oni Karimda marhamat qiladi: «Sizlar odamlar uchun chiqarilgan eng yaxshi ummat bo'ldingiz: yaxshilikka buyurasiz, yomonlikdan qaytarasiz va Allohga iymon keltirasiz» (Oli Imron surasi, 110-oyat).",
        "example": "Ushbu burch tark etilsa, bu ummat o'zining peshqadamlik maqomini yo'qotadi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Kemadagilarning Mashhur Qissasi (Hadis)",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Payg'ambarimiz (s.a.v) ajoyib o'xshatish keltirganlar: Bir kemaning tepasida va pastida odamlar joylashdi. Pastdagilar suv olish uchun tepaga chiqib bezovta qilmaslik maqsadida: «Kemamizning tagini teshsak, tepaga chiqmay suv olamiz», deyishdi. Agar tepada turganlar ularni bu ishdan to'xtatmasalar, hamma birga cho'kib halok bo'ladi. Agar ularni to'xtatsalar, hamma birga najot topadi. Jamiyatdagi gunohlarga beparvo qarash – butun xalqning boshiga balo yog'ilishiga olib keladi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Munkarni (Yomonlikni) O'zgartirishning 3 Darajasi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Rasululloh (s.a.v) buyuradilar: «Sizlardan kim bir yomonlikni ko'rsa, uni qo'li bilan o'zgartirsin (kuchi yetgan rahbar yoki ota-ona); agar bunga qodir bo'lmasa, tili bilan o'zgartirsin (nasihat qilsin); agar bunga ham qodir bo'lmasa, qalbi bilan yomon ko'rsin (bu iymonning eng zaif darajasidir)». Gunohni ko'rib xursand bo'lish yoki unga loqayd qarab turish iymonsizlik alomatidir.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Amri Ma'rufni Avvalo O'z Oilasidan Boshlash",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Ko'chada boshqalarga aql o'rgatib, o'zining xotini va bolalarini namozsiz, tarbiyasiz qoldirish ikkiyuzlamachilikdir. «Ey iymon keltirganlar, o'zingizni va ahlingizni do'zaxdan saqlang!» oyati birinchi mas'uliyat oila ekanini ko'rsatadi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Amri Ma'ruf va Nahyi Munkar (1-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Amri Ma'ruf va Nahyi Munkar (1-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Amri Ma'ruf va Nahyi Munkar (1-qism)",
        "summary": "Alloh taolo Qur'oni Karimda marhamat qiladi: «Sizlar odamlar uchun chiqarilgan eng yaxshi ummat bo'ldingiz: yaxshilikka buyurasiz, yomonlikdan qaytarasiz va Allohga iymon keltirasiz» (Oli Imron surasi, 110-oyat).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ummatning Eng Buyuk Fazilati",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Alloh taolo Qur'oni Karimda marhamat qiladi: «Sizlar odamlar uchun chiqarilgan eng yaxshi ummat bo'ldingiz: yaxshilikka buyurasiz, yomonlikdan qaytarasiz va Allohga iymon keltirasiz» (Oli Imron surasi, 110-oyat).",
            "example": "Ushbu burch tark etilsa, bu ummat o'zining peshqadamlik maqomini yo'qotadi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Kemadagilarning Mashhur Qissasi (Hadis)",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Payg'ambarimiz (s.a.v) ajoyib o'xshatish keltirganlar: Bir kemaning tepasida va pastida odamlar joylashdi. Pastdagilar suv olish uchun tepaga chiqib bezovta qilmaslik maqsadida: «Kemamizning tagini teshsak, tepaga chiqmay suv olamiz», deyishdi. Agar tepada turganlar ularni bu ishdan to'xtatmasalar, hamma birga cho'kib halok bo'ladi. Agar ularni to'xtatsalar, hamma birga najot topadi. Jamiyatdagi gunohlarga beparvo qarash – butun xalqning boshiga balo yog'ilishiga olib keladi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Munkarni (Yomonlikni) O'zgartirishning 3 Darajasi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Rasululloh (s.a.v) buyuradilar: «Sizlardan kim bir yomonlikni ko'rsa, uni qo'li bilan o'zgartirsin (kuchi yetgan rahbar yoki ota-ona); agar bunga qodir bo'lmasa, tili bilan o'zgartirsin (nasihat qilsin); agar bunga ham qodir bo'lmasa, qalbi bilan yomon ko'rsin (bu iymonning eng zaif darajasidir)». Gunohni ko'rib xursand bo'lish yoki unga loqayd qarab turish iymonsizlik alomatidir.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Amri Ma'rufni Avvalo O'z Oilasidan Boshlash",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Ko'chada boshqalarga aql o'rgatib, o'zining xotini va bolalarini namozsiz, tarbiyasiz qoldirish ikkiyuzlamachilikdir. «Ey iymon keltirganlar, o'zingizni va ahlingizni do'zaxdan saqlang!» oyati birinchi mas'uliyat oila ekanini ko'rsatadi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Amri Ma'ruf va Nahyi Munkar (1-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Amri Ma'ruf va Nahyi Munkar (1-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Enjoining Good and Forbidding Evil (Part 1)",
        "summary": "Core responsibility of Amr bil Ma'ruf, wisdom, gentleness, prioritizing kindness over harsh rebuke, and proper timing.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Enjoining Good and Forbidding Evil (Part 1)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Alloh taolo Qur'oni Karimda marhamat qiladi: «Sizlar odamlar uchun chiqarilgan eng yaxshi ummat bo'ldingiz: yaxshilikka buyurasiz, yomonlikdan qaytarasiz va Allohga iymon keltirasiz» (Oli Imron surasi, 110-oyat).",
            "example": "Ushbu burch tark etilsa, bu ummat o'zining peshqadamlik maqomini yo'qotadi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Core responsibility of Amr bil Ma'ruf, wisdom, gentleness, prioritizing kindness over harsh rebuke, and proper timing. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Rasululloh (s.a.v) buyuradilar: «Sizlardan kim bir yomonlikni ko'rsa, uni qo'li bilan o'zgartirsin (kuchi yetgan rahbar yoki ota-ona); agar bunga qodir bo'lmasa, tili bilan o'zgartirsin (nasihat qilsin); agar bunga ham qodir bo'lmasa, qalbi bilan yomon ko'rsin (bu iymonning eng zaif darajasidir)». Gunohni ko'rib xursand bo'lish yoki unga loqayd qarab turish iymonsizlik alomatidir.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Ko'chada boshqalarga aql o'rgatib, o'zining xotini va bolalarini namozsiz, tarbiyasiz qoldirish ikkiyuzlamachilikdir. «Ey iymon keltirganlar, o'zingizni va ahlingizni do'zaxdan saqlang!» oyati birinchi mas'uliyat oila ekanini ko'rsatadi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Enjoining Good and Forbidding Evil (Part 1)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Enjoining Good and Forbidding Evil (Part 1)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Побуждение к добру и удержание от зла (Часть 1)",
        "summary": "Суть призыва к добру и удержания от порицаемого, мудрость, мягкость, отсутствие грубости и правильный момент.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Побуждение к добру и удержание от зла (Часть 1)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Alloh taolo Qur'oni Karimda marhamat qiladi: «Sizlar odamlar uchun chiqarilgan eng yaxshi ummat bo'ldingiz: yaxshilikka buyurasiz, yomonlikdan qaytarasiz va Allohga iymon keltirasiz» (Oli Imron surasi, 110-oyat).",
            "example": "Ushbu burch tark etilsa, bu ummat o'zining peshqadamlik maqomini yo'qotadi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Суть призыва к добру и удержания от порицаемого, мудрость, мягкость, отсутствие грубости и правильный момент. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Rasululloh (s.a.v) buyuradilar: «Sizlardan kim bir yomonlikni ko'rsa, uni qo'li bilan o'zgartirsin (kuchi yetgan rahbar yoki ota-ona); agar bunga qodir bo'lmasa, tili bilan o'zgartirsin (nasihat qilsin); agar bunga ham qodir bo'lmasa, qalbi bilan yomon ko'rsin (bu iymonning eng zaif darajasidir)». Gunohni ko'rib xursand bo'lish yoki unga loqayd qarab turish iymonsizlik alomatidir.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Ko'chada boshqalarga aql o'rgatib, o'zining xotini va bolalarini namozsiz, tarbiyasiz qoldirish ikkiyuzlamachilikdir. «Ey iymon keltirganlar, o'zingizni va ahlingizni do'zaxdan saqlang!» oyati birinchi mas'uliyat oila ekanini ko'rsatadi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Побуждение к добру и удержание от зла (Часть 1)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Побуждение к добру и удержание от зла (Часть 1)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Amri Ma'ruf va Nahyi Munkar (2-qism)",
    "slug": "dars-53-amri-maruf-va-nahyi-munkar-2-qism",
    "summary": "Qur'onda Alloh taolo buyuradi: «Rabbingizning yo'liga hikmat va go'zal mav'iza (chiroyli nasihat) bilan da'vat qiling hamda ular bilan eng go'zal uslubda bahslashaing!» (Nahl surasi, 125-oyat).",
    "order": 53,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "xl-NXo30lyo",
    "videoUrl": "https://www.youtube.com/watch?v=xl-NXo30lyo",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Hikmat va Chiroyli Mav'iza Bilan Nasihat Qilish",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Qur'onda Alloh taolo buyuradi: «Rabbingizning yo'liga hikmat va go'zal mav'iza (chiroyli nasihat) bilan da'vat qiling hamda ular bilan eng go'zal uslubda bahslashaing!» (Nahl surasi, 125-oyat).",
        "example": "Qo'pollik, haqorat, jerkish va el oldida izza qilish insonni faqat dindan bezdiradi va qaysarligini oshiradi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Fir'avnga Ham Muloyim So'z So'zlash Buyrug'i",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Alloh taolo Muso va Horun alayhimussalomlarni zolimlarning eng kattasi bo'lgan Fir'avn huzuriga yuborayotganda ham: «Unga muloyim so'z so'zlanglar, shoyad eslatma olsa yoki qo'rqsa!» deb buyurdi (Toha surasi, 44-oyat). Hech bir inson Fir'avndan yomonroq emas va hech bir da'vatchi Muso (a.s)dan afzalroq emas. Demak, barchaga muloyimlik bilan gapirish shart.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Xatoni Xilvatda (Yolg'iz Qolganda) Tushuntirish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Imom Shofiiy (r.a) aytadilar: «Kim o'z birodariga xilvatda nasihat qilsa, unga chin dildan yaxshilik qilgan va uni bezagan bo'ladi. Kim unga odamlar oldida nasihat qilsa, uni sharmanda qilgan va qadrini to'kkan bo'ladi». Farzandning ham aybini ko'chada yoki qarindoshlar oldida emas, uyda xilvatda tushuntirish kerak.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Natijaga Sabr Qilish (Aql Bilan Harakat)",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Nasihat qilinganda darhol natija chiqmasligi yoki dushmanlikka uchrash mumkin. Luqmoni Hakim o'g'liga aytganidek: «Yaxshilikka buyur, yomonlikdan qaytar va senga yetgan musibatlarga sabr qil!» (Luqmon surasi, 17-oyat). Farzandda da'vat yo'lidagi sabot va chidamlilik tarbiyalanadi.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Amri Ma'ruf va Nahyi Munkar (2-qism)",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Amri Ma'ruf va Nahyi Munkar (2-qism)») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Amri Ma'ruf va Nahyi Munkar (2-qism)",
        "summary": "Qur'onda Alloh taolo buyuradi: «Rabbingizning yo'liga hikmat va go'zal mav'iza (chiroyli nasihat) bilan da'vat qiling hamda ular bilan eng go'zal uslubda bahslashaing!» (Nahl surasi, 125-oyat).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Hikmat va Chiroyli Mav'iza Bilan Nasihat Qilish",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Qur'onda Alloh taolo buyuradi: «Rabbingizning yo'liga hikmat va go'zal mav'iza (chiroyli nasihat) bilan da'vat qiling hamda ular bilan eng go'zal uslubda bahslashaing!» (Nahl surasi, 125-oyat).",
            "example": "Qo'pollik, haqorat, jerkish va el oldida izza qilish insonni faqat dindan bezdiradi va qaysarligini oshiradi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Fir'avnga Ham Muloyim So'z So'zlash Buyrug'i",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Alloh taolo Muso va Horun alayhimussalomlarni zolimlarning eng kattasi bo'lgan Fir'avn huzuriga yuborayotganda ham: «Unga muloyim so'z so'zlanglar, shoyad eslatma olsa yoki qo'rqsa!» deb buyurdi (Toha surasi, 44-oyat). Hech bir inson Fir'avndan yomonroq emas va hech bir da'vatchi Muso (a.s)dan afzalroq emas. Demak, barchaga muloyimlik bilan gapirish shart.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Xatoni Xilvatda (Yolg'iz Qolganda) Tushuntirish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Imom Shofiiy (r.a) aytadilar: «Kim o'z birodariga xilvatda nasihat qilsa, unga chin dildan yaxshilik qilgan va uni bezagan bo'ladi. Kim unga odamlar oldida nasihat qilsa, uni sharmanda qilgan va qadrini to'kkan bo'ladi». Farzandning ham aybini ko'chada yoki qarindoshlar oldida emas, uyda xilvatda tushuntirish kerak.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Natijaga Sabr Qilish (Aql Bilan Harakat)",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Nasihat qilinganda darhol natija chiqmasligi yoki dushmanlikka uchrash mumkin. Luqmoni Hakim o'g'liga aytganidek: «Yaxshilikka buyur, yomonlikdan qaytar va senga yetgan musibatlarga sabr qil!» (Luqmon surasi, 17-oyat). Farzandda da'vat yo'lidagi sabot va chidamlilik tarbiyalanadi.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Amri Ma'ruf va Nahyi Munkar (2-qism)",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Amri Ma'ruf va Nahyi Munkar (2-qism)») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Gentle Advice and Sincere Admonition (Part 2)",
        "summary": "Advising in private rather than public humiliation, practicing what one preaches, and patience with outcomes.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Gentle Advice and Sincere Admonition (Part 2)",
            "subtitle": "Real-life Context & Introduction",
            "content": "Qur'onda Alloh taolo buyuradi: «Rabbingizning yo'liga hikmat va go'zal mav'iza (chiroyli nasihat) bilan da'vat qiling hamda ular bilan eng go'zal uslubda bahslashaing!» (Nahl surasi, 125-oyat).",
            "example": "Qo'pollik, haqorat, jerkish va el oldida izza qilish insonni faqat dindan bezdiradi va qaysarligini oshiradi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Advising in private rather than public humiliation, practicing what one preaches, and patience with outcomes. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Imom Shofiiy (r.a) aytadilar: «Kim o'z birodariga xilvatda nasihat qilsa, unga chin dildan yaxshilik qilgan va uni bezagan bo'ladi. Kim unga odamlar oldida nasihat qilsa, uni sharmanda qilgan va qadrini to'kkan bo'ladi». Farzandning ham aybini ko'chada yoki qarindoshlar oldida emas, uyda xilvatda tushuntirish kerak.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Nasihat qilinganda darhol natija chiqmasligi yoki dushmanlikka uchrash mumkin. Luqmoni Hakim o'g'liga aytganidek: «Yaxshilikka buyur, yomonlikdan qaytar va senga yetgan musibatlarga sabr qil!» (Luqmon surasi, 17-oyat). Farzandda da'vat yo'lidagi sabot va chidamlilik tarbiyalanadi.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Gentle Advice and Sincere Admonition (Part 2)",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Gentle Advice and Sincere Admonition (Part 2)'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Культура искреннего наставления (Часть 2)",
        "summary": "Наставление наедине, запрет публичного унижения, соответствие слов делам и терпеливое ожидание результата.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Культура искреннего наставления (Часть 2)",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Qur'onda Alloh taolo buyuradi: «Rabbingizning yo'liga hikmat va go'zal mav'iza (chiroyli nasihat) bilan da'vat qiling hamda ular bilan eng go'zal uslubda bahslashaing!» (Nahl surasi, 125-oyat).",
            "example": "Qo'pollik, haqorat, jerkish va el oldida izza qilish insonni faqat dindan bezdiradi va qaysarligini oshiradi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Наставление наедине, запрет публичного унижения, соответствие слов делам и терпеливое ожидание результата. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Imom Shofiiy (r.a) aytadilar: «Kim o'z birodariga xilvatda nasihat qilsa, unga chin dildan yaxshilik qilgan va uni bezagan bo'ladi. Kim unga odamlar oldida nasihat qilsa, uni sharmanda qilgan va qadrini to'kkan bo'ladi». Farzandning ham aybini ko'chada yoki qarindoshlar oldida emas, uyda xilvatda tushuntirish kerak.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Nasihat qilinganda darhol natija chiqmasligi yoki dushmanlikka uchrash mumkin. Luqmoni Hakim o'g'liga aytganidek: «Yaxshilikka buyur, yomonlikdan qaytar va senga yetgan musibatlarga sabr qil!» (Luqmon surasi, 17-oyat). Farzandda da'vat yo'lidagi sabot va chidamlilik tarbiyalanadi.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Культура искреннего наставления (Часть 2)",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Культура искреннего наставления (Часть 2)»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "Xutba Qilinayotgan Qizga va Mahramlarga Qarash Odobi",
    "slug": "dars-54-xutba-qilinayotgan-qizga-va-mahramlarga-qarash-odobi",
    "summary": "Alloh taolo Qur'onda buyuradi: «Mo'minlarga ayting, ko'zlarini (nomahramlardan) quyi tutsinlar... Mo'mina ayollarga ham ayting, ko'zlarini quyi tutsinlar...» (Nur surasi, 30-31-oyatlar).",
    "order": 54,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "rTXPBWhpcAg",
    "videoUrl": "https://www.youtube.com/watch?v=rTXPBWhpcAg",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Ko'zni Saqlash – Iymon Pokligining Asosi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Alloh taolo Qur'onda buyuradi: «Mo'minlarga ayting, ko'zlarini (nomahramlardan) quyi tutsinlar... Mo'mina ayollarga ham ayting, ko'zlarini quyi tutsinlar...» (Nur surasi, 30-31-oyatlar).",
        "example": "Ko'z – qalbning darvozasidir. Ko'z nimaga qarasa, qalb o'sha narsa bilan to'ladi. Harom nigoh qalbga zaharli nayza kabi uriladi.",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "Xutba (Sovchilik) Paytida Qizga Qarash Ruxsati",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "Bir sahobiy uylanmoqchi bo'lganida Rasululloh (s.a.v): «Borib unga qara! Chunki qarashing oralarida muhabbat va hamjihatlik paydo bo'lishiga eng yaxshi sababdir», dedilar. Uylanish niyati jiddiy bo'lgan yigit qizning yuziga va qo'llariga (faqat mahramlari ishtirokida) qarashi shariatda joiz va mustahab qilingan.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "Mahramlar va Nomahramlar Chegarasi",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Mahram – unga uylanish abadiy harom bo'lgan yaqinlar (ona, qiz, opa-singil, xola, amma, emikdosh qarindoshlar). Amakivachcha, tog'avachcha, xolavachcha va ammavachchalar nomahram hisoblanadi. Ularning o'zaro yolg'iz qolishi yoki erkin muomala qilishi shariatda taqiqlanadi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Hayo Pardasini Yoshlikdan Shakllantirish",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Farzandlar balog'at yoshiga yetganda, qizlar ro'mol va satri avratga, o'g'il bolalar esa ko'zlarini tiyishga o'rgatilishi shart. Uy ichida ham kiyinish odoblariga qat'iy e'tibor berish lozim.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: Xutba Qilinayotgan Qizga va Mahramlarga Qarash Odobi",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («Xutba Qilinayotgan Qizga va Mahramlarga Qarash Odobi») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "Xutba Qilinayotgan Qizga va Mahramlarga Qarash Odobi",
        "summary": "Alloh taolo Qur'onda buyuradi: «Mo'minlarga ayting, ko'zlarini (nomahramlardan) quyi tutsinlar... Mo'mina ayollarga ham ayting, ko'zlarini quyi tutsinlar...» (Nur surasi, 30-31-oyatlar).",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ko'zni Saqlash – Iymon Pokligining Asosi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Alloh taolo Qur'onda buyuradi: «Mo'minlarga ayting, ko'zlarini (nomahramlardan) quyi tutsinlar... Mo'mina ayollarga ham ayting, ko'zlarini quyi tutsinlar...» (Nur surasi, 30-31-oyatlar).",
            "example": "Ko'z – qalbning darvozasidir. Ko'z nimaga qarasa, qalb o'sha narsa bilan to'ladi. Harom nigoh qalbga zaharli nayza kabi uriladi.",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Xutba (Sovchilik) Paytida Qizga Qarash Ruxsati",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "Bir sahobiy uylanmoqchi bo'lganida Rasululloh (s.a.v): «Borib unga qara! Chunki qarashing oralarida muhabbat va hamjihatlik paydo bo'lishiga eng yaxshi sababdir», dedilar. Uylanish niyati jiddiy bo'lgan yigit qizning yuziga va qo'llariga (faqat mahramlari ishtirokida) qarashi shariatda joiz va mustahab qilingan.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Mahramlar va Nomahramlar Chegarasi",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Mahram – unga uylanish abadiy harom bo'lgan yaqinlar (ona, qiz, opa-singil, xola, amma, emikdosh qarindoshlar). Amakivachcha, tog'avachcha, xolavachcha va ammavachchalar nomahram hisoblanadi. Ularning o'zaro yolg'iz qolishi yoki erkin muomala qilishi shariatda taqiqlanadi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Hayo Pardasini Yoshlikdan Shakllantirish",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Farzandlar balog'at yoshiga yetganda, qizlar ro'mol va satri avratga, o'g'il bolalar esa ko'zlarini tiyishga o'rgatilishi shart. Uy ichida ham kiyinish odoblariga qat'iy e'tibor berish lozim.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: Xutba Qilinayotgan Qizga va Mahramlarga Qarash Odobi",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («Xutba Qilinayotgan Qizga va Mahramlarga Qarash Odobi») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Propriety of Gaze and Mahram Boundaries",
        "summary": "Guarding eyes in youth, rules of proposal viewing, clear distinction of mahrams vs non-mahrams, and modesty at home.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Propriety of Gaze and Mahram Boundaries",
            "subtitle": "Real-life Context & Introduction",
            "content": "Alloh taolo Qur'onda buyuradi: «Mo'minlarga ayting, ko'zlarini (nomahramlardan) quyi tutsinlar... Mo'mina ayollarga ham ayting, ko'zlarini quyi tutsinlar...» (Nur surasi, 30-31-oyatlar).",
            "example": "Ko'z – qalbning darvozasidir. Ko'z nimaga qarasa, qalb o'sha narsa bilan to'ladi. Harom nigoh qalbga zaharli nayza kabi uriladi.",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "Guarding eyes in youth, rules of proposal viewing, clear distinction of mahrams vs non-mahrams, and modesty at home. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Mahram – unga uylanish abadiy harom bo'lgan yaqinlar (ona, qiz, opa-singil, xola, amma, emikdosh qarindoshlar). Amakivachcha, tog'avachcha, xolavachcha va ammavachchalar nomahram hisoblanadi. Ularning o'zaro yolg'iz qolishi yoki erkin muomala qilishi shariatda taqiqlanadi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Farzandlar balog'at yoshiga yetganda, qizlar ro'mol va satri avratga, o'g'il bolalar esa ko'zlarini tiyishga o'rgatilishi shart. Uy ichida ham kiyinish odoblariga qat'iy e'tibor berish lozim.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Propriety of Gaze and Mahram Boundaries",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Propriety of Gaze and Mahram Boundaries'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Этикет взгляда и границы махремов",
        "summary": "Охрана взора в юности, правила сватовства, четкие границы махремов и скромность в домашней обстановке.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Этикет взгляда и границы махремов",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Alloh taolo Qur'onda buyuradi: «Mo'minlarga ayting, ko'zlarini (nomahramlardan) quyi tutsinlar... Mo'mina ayollarga ham ayting, ko'zlarini quyi tutsinlar...» (Nur surasi, 30-31-oyatlar).",
            "example": "Ko'z – qalbning darvozasidir. Ko'z nimaga qarasa, qalb o'sha narsa bilan to'ladi. Harom nigoh qalbga zaharli nayza kabi uriladi.",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Охрана взора в юности, правила сватовства, четкие границы махремов и скромность в домашней обстановке. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Mahram – unga uylanish abadiy harom bo'lgan yaqinlar (ona, qiz, opa-singil, xola, amma, emikdosh qarindoshlar). Amakivachcha, tog'avachcha, xolavachcha va ammavachchalar nomahram hisoblanadi. Ularning o'zaro yolg'iz qolishi yoki erkin muomala qilishi shariatda taqiqlanadi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Farzandlar balog'at yoshiga yetganda, qizlar ro'mol va satri avratga, o'g'il bolalar esa ko'zlarini tiyishga o'rgatilishi shart. Uy ichida ham kiyinish odoblariga qat'iy e'tibor berish lozim.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Этикет взгляда и границы махремов",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Этикет взгляда и границы махремов»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "islomiy-odoblar-va-balogat-davri",
    "title": "JINSIY TARBIYA",
    "slug": "dars-55-jinsiy-tarbiya",
    "summary": "Islom dini inson hayotining barcha jabhalarini, jumladan jinsiy tarbiyani ham qamrab olgan mukammal dindir. Bu masalada Islomda soxta uyalish yo'q, balki shariatiy odob va mezonlar bor.",
    "order": 55,
    "estimatedMinutes": 5,
    "ageGroup": "14+",
    "xpReward": 15,
    "isFree": false,
    "videoId": "Dk2zvp6BN4c",
    "videoUrl": "https://www.youtube.com/watch?v=Dk2zvp6BN4c",
    "screens": [
      {
        "screenIndex": 1,
        "type": "scenario",
        "title": "Islomda Jinsiy Tarbiya Tushunchasi",
        "subtitle": "Hayotiy holat va muqaddima",
        "content": "Islom dini inson hayotining barcha jabhalarini, jumladan jinsiy tarbiyani ham qamrab olgan mukammal dindir. Bu masalada Islomda soxta uyalish yo'q, balki shariatiy odob va mezonlar bor.",
        "example": "Oysha onamiz (r.a) aytganlar: «Ansoriy ayollar qanday ham yaxshi ayollar edi! Hayo ularni din ilmini chuqur o'rganishdan to'sib qolmas edi».",
        "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
      },
      {
        "screenIndex": 2,
        "type": "concept",
        "title": "O'smirlik Davri va Balog'at Belgilarini Tushuntirish",
        "subtitle": "Asosiy tushuncha va ruhiyat",
        "content": "O'g'il bolalarga otasi, qiz bolalarga esa onasi balog'at yoshiga yetgandagi o'zgarishlarni (ehtilom, hayz) oldindan to'g'ri va xolis tushuntirishi shart. Agar ota-ona buni o'z vaqtida tushuntirmasa, bola bu ma'lumotlarni ko'chadan yoki internetdagi buzuq manbalardan o'rganadi va ruhiyati buziladi.",
        "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
      },
      {
        "screenIndex": 3,
        "type": "islamic_perspective",
        "title": "G'usl va Tahoratning Farz Qoidalarini O'rgatish",
        "subtitle": "Qur'on, Sunnat va salaf hikmati",
        "content": "Balog'atga yetgan har bir o'smirga qachon va qanday g'usl qilish farz bo'lishi (og'iz-burunni chayish, butun badanga suv yetkazish) amalda to'liq o'rgatilishi ota-onaning bo'ynidagi qarzidir. G'uslsiz o'qilgan namozlar botildir. Poklikni bilmaslik insonni doimiy junublik va gunohda qoldiradi.",
        "quoteSource": "Qur'oni Karim / Hadisi Sharif",
        "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
      },
      {
        "screenIndex": 4,
        "type": "practice",
        "title": "Uylanish va Nikohga Mas'uliyatli Tayyorgarlik",
        "subtitle": "Bugungi amaliy qadam",
        "content": "Farzandga nikoh shunchaki shahvoniy hirslarni qondirish emas, balki Alloh oldidagi muqaddas ahd, oila mas'uliyati va solih zurriyot qoldirish ekani singdiriladi. Payg'ambarimiz (s.a.v) yoshlarga xitob qilib: «Ey yoshlar jamoasi! Sizlardan kimning uylanishga qurbi yetsa, uylansin! Chunki bu ko'zni nomahramdan eng yaxshi saqlovchi va avratni eng yaxshi himoya qiluvchidir. Kim qodir bo'lmasa, ro'za tutsin, chunki ro'za uning shahvatini sindiradi», deganlar.",
        "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
        "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
      },
      {
        "screenIndex": 5,
        "type": "quiz",
        "title": "Dars sinovi: JINSIY TARBIYA",
        "subtitle": "Bilimingizni mustahkamlang",
        "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
        "quizQuestion": "Ushbu darsning («JINSIY TARBIYA») asosiy tarbiyaviy mohiyati nima?",
        "quizOptions": [
          "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
          "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
          "Tarbiyani faqat maktab va tashqi muhitga topshirish"
        ],
        "correctOptionIndex": 1,
        "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
      }
    ],
    "translations": {
      "uz": {
        "title": "JINSIY TARBIYA",
        "summary": "Islom dini inson hayotining barcha jabhalarini, jumladan jinsiy tarbiyani ham qamrab olgan mukammal dindir. Bu masalada Islomda soxta uyalish yo'q, balki shariatiy odob va mezonlar bor.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Islomda Jinsiy Tarbiya Tushunchasi",
            "subtitle": "Hayotiy holat va muqaddima",
            "content": "Islom dini inson hayotining barcha jabhalarini, jumladan jinsiy tarbiyani ham qamrab olgan mukammal dindir. Bu masalada Islomda soxta uyalish yo'q, balki shariatiy odob va mezonlar bor.",
            "example": "Oysha onamiz (r.a) aytganlar: «Ansoriy ayollar qanday ham yaxshi ayollar edi! Hayo ularni din ilmini chuqur o'rganishdan to'sib qolmas edi».",
            "highlight": "Tarbiyadagi har bir qadam farzandning kelajagini shakllantiradi."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "O'smirlik Davri va Balog'at Belgilarini Tushuntirish",
            "subtitle": "Asosiy tushuncha va ruhiyat",
            "content": "O'g'il bolalarga otasi, qiz bolalarga esa onasi balog'at yoshiga yetgandagi o'zgarishlarni (ehtilom, hayz) oldindan to'g'ri va xolis tushuntirishi shart. Agar ota-ona buni o'z vaqtida tushuntirmasa, bola bu ma'lumotlarni ko'chadan yoki internetdagi buzuq manbalardan o'rganadi va ruhiyati buziladi.",
            "highlight": "Bola nasihatlardan ko'ra, ota-onaning amaliy xulqini ko'proq o'ziga singdiradi."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "G'usl va Tahoratning Farz Qoidalarini O'rgatish",
            "subtitle": "Qur'on, Sunnat va salaf hikmati",
            "content": "Balog'atga yetgan har bir o'smirga qachon va qanday g'usl qilish farz bo'lishi (og'iz-burunni chayish, butun badanga suv yetkazish) amalda to'liq o'rgatilishi ota-onaning bo'ynidagi qarzidir. G'uslsiz o'qilgan namozlar botildir. Poklikni bilmaslik insonni doimiy junublik va gunohda qoldiradi.",
            "quoteSource": "Qur'oni Karim / Hadisi Sharif",
            "highlight": "Islomiy tarbiya — dunyo va oxirat saodatini ta'minlovchi ilohiy yo'l-yo'riqdir."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Uylanish va Nikohga Mas'uliyatli Tayyorgarlik",
            "subtitle": "Bugungi amaliy qadam",
            "content": "Farzandga nikoh shunchaki shahvoniy hirslarni qondirish emas, balki Alloh oldidagi muqaddas ahd, oila mas'uliyati va solih zurriyot qoldirish ekani singdiriladi. Payg'ambarimiz (s.a.v) yoshlarga xitob qilib: «Ey yoshlar jamoasi! Sizlardan kimning uylanishga qurbi yetsa, uylansin! Chunki bu ko'zni nomahramdan eng yaxshi saqlovchi va avratni eng yaxshi himoya qiluvchidir. Kim qodir bo'lmasa, ro'za tutsin, chunki ro'za uning shahvatini sindiradi», deganlar.",
            "example": "Amaliy tavsiya: Har kuni farzandingizga mehr bilan quloq tuting va unga samimiy e'tibor bering.",
            "highlight": "Tarbiyada doimiylik va sabr eng katta natijalarga olib boradi."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Dars sinovi: JINSIY TARBIYA",
            "subtitle": "Bilimingizni mustahkamlang",
            "content": "Ushbu darsda o'rganilgan asosiy qoidani eslab ko'ring va to'g'ri javobni tanlang.",
            "quizQuestion": "Ushbu darsning («JINSIY TARBIYA») asosiy tarbiyaviy mohiyati nima?",
            "quizOptions": [
              "Faqat tashqi qat'iy nazorat va cheklovlar o'rnatish",
              "Ota-ona o'z ibrati va iymoniy tushuntirish orqali bolada ichki ong va axloqni shakllantirishi",
              "Tarbiyani faqat maktab va tashqi muhitga topshirish"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Islomiy tarbiyada asosiy kuch — ota-onaning shaxsiy ibrati, muhabbati va qalbda Allohga bo'lgan iymonni uyg'otishdir."
          }
        ]
      },
      "en": {
        "title": "Islamic Adolescent & Moral Education",
        "summary": "No false shame in vital learning, preparing for puberty changes, rules of ghusl, avoiding obscenity, and marriage sanctity.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Core Principle: Islamic Adolescent & Moral Education",
            "subtitle": "Real-life Context & Introduction",
            "content": "Islom dini inson hayotining barcha jabhalarini, jumladan jinsiy tarbiyani ham qamrab olgan mukammal dindir. Bu masalada Islomda soxta uyalish yo'q, balki shariatiy odob va mezonlar bor.",
            "example": "Oysha onamiz (r.a) aytganlar: «Ansoriy ayollar qanday ham yaxshi ayollar edi! Hayo ularni din ilmini chuqur o'rganishdan to'sib qolmas edi».",
            "highlight": "Every mindful parenting step shapes your child's character and future."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Understanding the Foundation",
            "subtitle": "Psychological & Ethical Impact",
            "content": "No false shame in vital learning, preparing for puberty changes, rules of ghusl, avoiding obscenity, and marriage sanctity. Consistent moral presence provides the emotional security children need to thrive.",
            "highlight": "Children follow what they see practiced rather than mere verbal instructions."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Sacred Perspective & Prophetic Guidance",
            "subtitle": "Qur'an & Sunnah Principles",
            "content": "Balog'atga yetgan har bir o'smirga qachon va qanday g'usl qilish farz bo'lishi (og'iz-burunni chayish, butun badanga suv yetkazish) amalda to'liq o'rgatilishi ota-onaning bo'ynidagi qarzidir. G'uslsiz o'qilgan namozlar botildir. Poklikni bilmaslik insonni doimiy junublik va gunohda qoldiradi.",
            "quoteSource": "Holy Qur'an / Sahih Hadith",
            "highlight": "Faith-based education is an enduring investment for this life and the hereafter."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Today's Practical Parenting Step",
            "subtitle": "Actionable Guidance for Parents",
            "content": "Farzandga nikoh shunchaki shahvoniy hirslarni qondirish emas, balki Alloh oldidagi muqaddas ahd, oila mas'uliyati va solih zurriyot qoldirish ekani singdiriladi. Payg'ambarimiz (s.a.v) yoshlarga xitob qilib: «Ey yoshlar jamoasi! Sizlardan kimning uylanishga qurbi yetsa, uylansin! Chunki bu ko'zni nomahramdan eng yaxshi saqlovchi va avratni eng yaxshi himoya qiluvchidir. Kim qodir bo'lmasa, ro'za tutsin, chunki ro'za uning shahvatini sindiradi», deganlar.",
            "example": "Practical Tip: Set aside uninterrupted, phone-free time today to bond with your child.",
            "highlight": "Consistency and gentle patience yield profound lasting transformation."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Knowledge Check: Islamic Adolescent & Moral Education",
            "subtitle": "Reinforce your learning",
            "content": "Recall the core lesson principle and choose the most accurate answer below.",
            "quizQuestion": "What is the key parenting takeaway from 'Islamic Adolescent & Moral Education'?",
            "quizOptions": [
              "Relying solely on external coercion and severe restrictions",
              "Leading with sincere parental role modeling and nurturing internal moral conviction",
              "Leaving character development entirely to schools and peer groups"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "True parenting success stems from loving personal example, deep empathy, and God-consciousness."
          }
        ]
      },
      "ru": {
        "title": "Половое и нравственное воспитание в Исламе",
        "summary": "Отсутствие ложного стыда в религиозном обучении, подготовка к переходному возрасту, правила гусля и святость брака.",
        "screens": [
          {
            "screenIndex": 1,
            "type": "scenario",
            "title": "Ключевой принцип: Половое и нравственное воспитание в Исламе",
            "subtitle": "Жизненная ситуация и введение",
            "content": "Islom dini inson hayotining barcha jabhalarini, jumladan jinsiy tarbiyani ham qamrab olgan mukammal dindir. Bu masalada Islomda soxta uyalish yo'q, balki shariatiy odob va mezonlar bor.",
            "example": "Oysha onamiz (r.a) aytganlar: «Ansoriy ayollar qanday ham yaxshi ayollar edi! Hayo ularni din ilmini chuqur o'rganishdan to'sib qolmas edi».",
            "highlight": "Каждый осознанный шаг родителей закладывает фундамент характера ребенка."
          },
          {
            "screenIndex": 2,
            "type": "concept",
            "title": "Суть и психологическое значение",
            "subtitle": "Влияние на личность ребенка",
            "content": "Отсутствие ложного стыда в религиозном обучении, подготовка к переходному возрасту, правила гусля и святость брака. Личный пример родителей оказывает глубокое и неизгладимое влияние на подсознание ребенка.",
            "highlight": "Дети перенимают искренние поступки родителей быстрее любых сухих нотаций."
          },
          {
            "screenIndex": 3,
            "type": "islamic_perspective",
            "title": "Священные источники и пророческая мудрость",
            "subtitle": "Наставления Корана и Сунны",
            "content": "Balog'atga yetgan har bir o'smirga qachon va qanday g'usl qilish farz bo'lishi (og'iz-burunni chayish, butun badanga suv yetkazish) amalda to'liq o'rgatilishi ota-onaning bo'ynidagi qarzidir. G'uslsiz o'qilgan namozlar botildir. Poklikni bilmaslik insonni doimiy junublik va gunohda qoldiradi.",
            "quoteSource": "Священный Коран / Хадисы Пророка",
            "highlight": "Исламское воспитание — это залог благополучия и счастья в обоих мирах."
          },
          {
            "screenIndex": 4,
            "type": "practice",
            "title": "Практический шаг для родителей",
            "subtitle": "Рекомендации на каждый день",
            "content": "Farzandga nikoh shunchaki shahvoniy hirslarni qondirish emas, balki Alloh oldidagi muqaddas ahd, oila mas'uliyati va solih zurriyot qoldirish ekani singdiriladi. Payg'ambarimiz (s.a.v) yoshlarga xitob qilib: «Ey yoshlar jamoasi! Sizlardan kimning uylanishga qurbi yetsa, uylansin! Chunki bu ko'zni nomahramdan eng yaxshi saqlovchi va avratni eng yaxshi himoya qiluvchidir. Kim qodir bo'lmasa, ro'za tutsin, chunki ro'za uning shahvatini sindiradi», deganlar.",
            "example": "Совет: Выделите сегодня время для спокойного общения с ребенком без отвлекающих гаджетов.",
            "highlight": "Постоянство, доброта и терпение приносят наилучшие плоды в воспитании."
          },
          {
            "screenIndex": 5,
            "type": "quiz",
            "title": "Проверка знаний: Половое и нравственное воспитание в Исламе",
            "subtitle": "Закрепите пройденный материал",
            "content": "Вспомните главную суть урока и выберите правильный ответ.",
            "quizQuestion": "В чем заключается главный урок по теме «Половое и нравственное воспитание в Исламе»?",
            "quizOptions": [
              "Опираться исключительно на жесткие внешние наказания и запреты",
              "Воспитывать личным праведным примером и пробуждать внутреннюю осознанность и богобоязненность",
              "Переложить ответственность за воспитание только на школу и окружение"
            ],
            "correctOptionIndex": 1,
            "quizExplanation": "Истинный успех воспитания основан на личном примере родителей, любви и воспитании совести перед Аллахом."
          }
        ]
      }
    },
    "isPremium": true
  },
  {
    "courseSlug": "barkamol-farzand-fitrat-pedagogikasi",
    "title": "Bolaning darajasiga chiqish: Ahsani taqvim va onalik nuri",
    "slug": "bolaning-darajasiga-chiqish",
    "summary": "Bolaning oldida pastga tushilmaydi, aksincha uning pokiza fitrat darajasiga ko'tarilinadi. Qur'oniy onalik sayohati.",
    "order": 1,
    "estimatedMinutes": 6,
    "ageGroup": "0-2",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "Bolaning darajasiga tushilmaydi, aksincha chiqiladi",
        "subtitle": "Xadicha Kubro Tongar — Barkamol farzand tarbiyasi",
        "content": "Dastlab bu fikr g'alati tuyulishi mumkin. Axir bolalar mitti jussasi bilan bizdan pastda emasmi? Biz esa hayotiy tajribaga ega insonlarmiz.\n\nBiroq Qur'oniy haqiqat shuni ko'rsatadiki: Bolalar — «Ahsani taqvim» (eng go'zal suratda yaratilgan) fitrat egalaridir. Ular pok, beg'ubor va gunohlardan xolidir. Biz esa ulg'ayganimiz sari gunohlar ortidan asl fitratimizni xiralashtirib boramiz.\n\nDemak, ma'naviy soflik nuqtai nazaridan bolalar bizdan ancha yuqorida turadi. Shu bois ota-ona bolaning oldida pastga «tushmaydi», balki uning soflik pog'onasiga «chiqishi» lozim.",
        "highlight": "Bolaning darajasiga tushilmaydi — uning beg'ubor, pokiza soflik cho'qqisiga chiqiladi."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Bolalar orqali qalbni poklash yo'li",
        "subtitle": "Bolalikdagi og'riqlarga shifo topish",
        "content": "Payg'ambarimiz Muhammad (s.a.v.) muborak vujudlariga yog'ayotgan yomg'ir tomchilarini: «Bu Robbimning huzuridan yangi kelmoqda», deya erkalaganlaridek, ota-ona ham pokiza bolasi orqali o'z ruhiyatini tozalaydi.\n\nBu poklanish oson kechmaydi: o'tmishdagi bitgan jarohatlarimiz qayta og'rishi mumkin, lekin bola bilan samimiy bola bo'lishni o'rganganimiz sayin, o'z bolaligimizdan qolgan asoratlar ham shifo topadi.",
        "example": "Farzandingiz ko'zidagi mehr va beg'uborlikka boqqaningizda, o'zingizdagi dunyo g'uborlari yuviladi."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Onalik yo'lida ilohiy dastur — Qur'on",
        "subtitle": "Eng buyuk Muallim vahiysi",
        "content": "Qanday ota-ona bo'lishimiz, o'z fitratimizni qanday eslashimiz va bolaning yaratilish g'oyasini qanday qabul qilishimiz kerakligi haqidagi barcha savollarga Qur'oni karimdan javob izlaymiz.\n\nHar bir oyat sabr qilishni, shukrona aytishni va omonatga sodiq qolishni o'rgatadi. Bu beqiyos talabalik bo'lib, Muallim — Odam alayhissalomga so'zlarni o'rgatgan Buyuk Yaratuvchining O'zidir.",
        "quoteSource": "Xadicha Kubro Tongar, «Barkamol farzand tarbiyasi»"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Bugungi ruhiy amaliyot",
        "subtitle": "Soflikka intilish mashqi",
        "content": "1. Bugun bolangiz oldida gapirayotganingizda yoki unga qarayotganingizda, o'zingizni «buyruq beruvchi xo'jayin» deb emas, «Allohning pokiza omonatiga xizmat qiluvchi murabbiy» deb his eting.\n2. Bolangizning kulgusi, quvonchi va kechirimliligiga e'tibor bering: u biroz avvalgi arazni bir zumda unutadi. Siz ham bugun uning ushbu qalb sofligidan ibrat oling.",
        "highlight": "Bolangizdan kechirimli bo'lishni va keksiz yashashni o'rganing."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Fahmni sinash mini-testi",
        "quizQuestion": "Nima sababdan ota-ona bolaning oldida «darajasiga tushmaydi», balki «uning darajasiga chiqadi» deyiladi?",
        "quizOptions": [
          "Chunki bolalar ma'naviy jihatdan pok, beg'ubor fitratda (Ahsani taqvim) bo'lib, gunohlardan xolidir",
          "Chunki bolaning jismoniy bo'yi balandroq o'sishi kerak",
          "Chunki ota-ona bolaga qimmatbaho sovg'alar berishi shart",
          "Chunki bolaning aqlli bo'lishi faqat maktab baholariga bog'liq"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Bolalar «Ahsani taqvim» fitratida dunyoga keladi. Kattalar dunyo tashvishlari va xatolar bilan fitratini xiralashtirgani sababli, bolaning poklik va soflik darajasiga ko'tarilishi lozim."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "barkamol-farzand-fitrat-pedagogikasi",
    "title": "Fitrat pedagogikasi: Qur'oniy tarbiya asoslari va 3 bosqich",
    "slug": "fitrat-pedagogikasi-quroniy-asoslar",
    "summary": "Qur'on hayot dasturi, Bismilloh kibri yengish kaliti, har bir bolaning o'ziga xos fitrati hamda 3 bosqichli Qur'oniy model.",
    "order": 2,
    "estimatedMinutes": 8,
    "ageGroup": "0-2",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "Qur'on — devordagi bezak emas, hayot dasturi",
        "subtitle": "Yaratuvchining tarbiya qo'llanmasi",
        "content": "Inson suv va havoga qanchalik muhtoj bo'lsa, to'g'ri ota-onalik burchini ado etishda ham Qur'onga shunchalik muhtoj. Texnika olganda foydalanish yo'riqnomasiga qaraladi. Insonni yaratgan Zot uning ruhiyati va tarbiyasini hammadan yaxshi biladi («Yaratgan zot o'zi bilmasmi?» — Mulk surasi, 14-oyat).\n\n«Bismilloh» — yaxshi ota-onalikning boshlanishi: Tarbiyani «men qilyapman» deb bilish kibrdir. Asl tarbiyachi — Robbil a'lamin. Ota-ona faqat sababchi va omonatdordir.",
        "highlight": "Bola o'zidan emas, Allohdan ekanini e'tirof etgan ota-ona ortiqcha xavotir va kibrdan xalos bo'ladi."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Har bir bola — alohida fitrat kitobi",
        "subtitle": "Olma daraxtidan uzum kutmang",
        "content": "Bola «bo'sh oq qog'oz» yoki «xamir» emas. Har bir go'dak o'ziga xos ilohiy dastur bilan tug'iladi. «Katta bo'lsang kim bo'lasan?» emas, «Sen aslida kimsan?» deb yondashish kerak.\n\nIchida Fotih shijoati (hazrati Umar tabiati — qat'iyatli) bor boladan Yunus muloyimligini (hazrati Usmon tabiati — hayoli, bosiq) kutish olma daraxtidan uzum kutish bilan barobardir. Chumchuqqa taqlid qilib o'z yurishini yo'qotgan qarg'a kabi o'zligini boy berishiga yo'l qo'ymang.",
        "example": "Payg'ambarimiz (s.a.v.) Umarning shijoatini, Usmonning hayosini, Alining jasoratini o'z o'rnida qadrlab, hech kimni birovning qolipiga solmaganlar."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Tarbiyaning Qur'oniy uch bosqichi",
        "subtitle": "Vahiy tartibidagi tarbiya formulasi",
        "content": "Vahiyning nozil bo'lish tartibi (Alaq -> Muzammil -> Muddassir) tarbiyaning 3 bosqichini ko'rsatadi:\n\n1. O'qish / Kashf etish (0–2 yosh): «O'qi» (Alaq). Bolani majburlash emas, uning fitrati va fe'lini kuzatish davri.\n2. Amal / Namuna (2–7 yosh): «Turgin va ibodat qil» (Muzammil). Bola faqat ko'rganiga taqlid qiladi. Shaxsiy namuna («hol ilmi») orqali tarbiyalanadi.\n3. Nasihat / Da'vat (7–14 yosh): «Tur va ogohlantir» (Muddassir). Bola ibrat bo'lgan ota-onaning so'zi va nasihatini qabul qiladi.",
        "highlight": "«Qol ilmi» (so'z) emas, «Hol ilmi» (amal) hal qiladi. Sof surasi 2-oyat: «Nima uchun o'zingiz qilmagan narsani gapirasiz?»"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Imom G'azoliy va Hudaybiya ibrati",
        "subtitle": "Amalda ko'rsatish san'ati",
        "content": "Imom G'azoliy bolaga asal yemaslikni aytishdan oldin, o'z tanasidan asalning ta'siri ketishi uchun 40 kun kutganlar.\nHudaybiyada sahobalar tushkunlikda turganda, Rasululloh (s.a.v.) o'zlari qurbonlik qilib ko'rsatganlaridagina hamma u zotga ergashdi.\n\nBugungi qoida: Bolangizga aytmoqchi bo'lgan har qanday nasihatni avvalo o'zingiz bajaring!",
        "quoteSource": "Hudaybiya va Ummu Salama onamiz maslahati"
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Bilimni tekshirish",
        "quizQuestion": "Qur'oniy 3 bosqichli tarbiya modeliga ko'ra, 2–7 yoshdagi bolaning asosiy tarbiya vositasi nima?",
        "quizOptions": [
          "«Hol ilmi» — ota-onaning shaxsiy amaliy namunasi va ibrati",
          "Kun bo'yi qattiq tanbeh berish va majburlash",
          "Faqat planshet va audio darslar eshittirish",
          "Boshqa qo'shnilarning bolasi bilan solishtirish"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! 2–7 yosh oralig'i (Muzammil surasi asosida) «Amal va ibrat» davridir. Bola so'zga emas, ota-onaning amaliy ko'rinishiga («hol ilmi»ga) ergashadi."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "barkamol-farzand-fitrat-pedagogikasi",
    "title": "Ota-onalik mas'uliyati: Oqila ona, qalb illatlari va sabr",
    "slug": "ota-onalik-masuliyati-va-qalb-tarbiyasi",
    "summary": "Ota-onalik mashaqqat emas, balki ne'mat. Bilimli va oqila ona farqi, qalb illatlari va ichki sokinlik ritmi.",
    "order": 3,
    "estimatedMinutes": 7,
    "ageGroup": "3-5",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "Ota-onalik — mashaqqat emas, lazzatli ne'mat",
        "subtitle": "Zavod sozlamalariga qaytish",
        "content": "Alloh inson hayoti davom etishi uchun har bir ehtiyojga nafaqat burch, balki rohat va zavq bergan. Nasl davomiyligi bo'lgan ota-onalik ham buyuk surur ne'matidir. Qizaloqning qo'g'irchog'iga alla aytishi — fitrat sozlamasidir.\n\nAgar ota-onalik og'ir yukka aylanayotgan bo'lsa, muammo bolaning injiqligida emas, ota-onaning o'z bolaligidan qolgan jarohatlari tufayli fitrat sozlamalari buzilganidadir.",
        "highlight": "Inson nima uchun yaratilgan bo'lsa, o'sha ish unga yengillashtiriladi."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Bilimli ona va oqila ona o'rtasidagi farq",
        "subtitle": "Ilmni 3 yo'l bilan idrok etish",
        "content": "Axborot asrida kitoblarni yodlab olgan ota-onalar ko'p, ammo oqila bo'lish 3 xislatni talab qiladi:\n\n1. Haddini bilmoqlik: «Eng yaxshisini men bilaman» degan kibrdan tiyilish. Asl tarbiyachi Alloh ekanini tan olish.\n2. O'zini bilmoqlik: «Seni deb jahlim chiqdi» deb aybni bolaga to'nkamasdan, «Men charchadim, men g'azablandim» deya o'z emotsiyalariga egalik qilish.\n3. Maqsadini bilmoqlik: Qisqa muddatli qutulish choralariga (tahdid, yolg'on, pora) aldanmay, mustaqil shaxs yetishtirish degan oliy maqsadni ko'zlash.",
        "example": "Oqila ona bolasining his-tuyg'ularini o'z hissiyotlaridan ajrata oladi."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Qalb fikrlaydi: Qalb illatlari va Falaq surasi",
        "subtitle": "A'rof surasi 179-oyat hikmati",
        "content": "Qur'onda «Ongi bor-u tushunmaslar» deb emas, «Dillari (qalblari) bor-u, tushuna olmaslar» deyiladi. Voqealar avval tuyg'uni, tuyg'u fikrni, fikr xulqni shakllantiradi.\n\nQalbni xastalantiruvchi 3 illat:\n• Kibr: Bolani alohida shaxs deb bilmay, o'z mulkidek tasarruf qilish.\n• Hasad: Farzandini o'zgalar bolasi bilan solishtirish.\n• Adashgan mehr: Bolani dars deb uxlatmay, bomdod namoziga kelganda «uyqusi buzilmasin» deb rahm qilish — adashgan dunyoviy mehrdir.",
        "quoteSource": "A'rof surasi, 179-oyat"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "«Shoshilmang!» — Ichki ritm va sabr",
        "subtitle": "Nabaviy sunnat — xotirjamlik",
        "content": "Bolaning sekin ovqatlanishi, kiyinishi yoki dars qilishiga toqat qilolmay, hamma ishni uning o'rniga qilib qo'yish o'ziga ishonchsizlikni keltirib chiqaradi.\n\nPayg'ambarimiz (s.a.v.) shoshqaloqlik shaytondan, xotirjamlik esa Allohdan ekanini ta'kidlaganlar. Ashaj al-Asariyning shoshilmasdan, avval kiyimini almashtirib kelganini maqtaganlar.\n\nAmaliy qadam: Bugun bolangiz o'z ishini o'zi qilishiga imkon bering, shoshiltirmang!",
        "highlight": "Bolani o'z tabiiy tezligida, sokin va xotirjam muhitda ulg'aytiring."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Mini-test",
        "quizQuestion": "Oqila onaning «O'zini bilmoqlik» tamoyili nimani anglatadi?",
        "quizOptions": [
          "O'zining his-tuyg'ulariga (g'azab, charchoq) o'zi egalik qilish va bolani asabiylashishda ayblamaslik",
          "Faqat o'zi xohlagan qimmatbaho kiyimlarni sotib olish",
          "Bolaning barcha injiqliklariga darhol rozilik berish",
          "Tarbiya kitoblaridagi barcha qoidalarni so'zma-so'z yodlab olish"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Oqila ona o'z his-tuyg'ularini ajratadi. «Seni deb jahlim chiqdi» deb aybni bolaga yuklamasdan, o'zining charchog'i yoki g'azabini e'tirof etadi va uni boshqaradi."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "barkamol-farzand-fitrat-pedagogikasi",
    "title": "Bola ruhiyati: Emizish, g'azabni yengish va nafs tarbiyasi",
    "slug": "bola-ruhiyati-va-nafs-tarbiyasi",
    "summary": "2 yil emizish hikmati, ota-onadagi jahlni jilovlashning 4 qadami, Luqmon 19 ovoz me'yori va taomlanish me'yori.",
    "order": 4,
    "estimatedMinutes": 9,
    "ageGroup": "0-2",
    "xpReward": 25,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "Emizish va ishonch tuyg'usining shakllanishi (0–2 yosh)",
        "subtitle": "Baqara surasi 233-oyat",
        "content": "«Onalar bolalarini to'liq ikki yil emizurlar» (Baqara, 233). Chaqaloq yig'laganda nafaqat ochlikni, balki himoyasizlik qo'rquvini ham his qiladi. Ona uni bag'riga bosib emizganda qorni bilan birga ruhi ham to'yinadi, dunyoga birlamchi ishonch shakllanadi.\n\nDastlabki 2 yilda onaning mehriga, hidiga to'ygan bola ulg'aygach onasiga qaram bo'lib qolmaydi, balki mustaqil shaxs sifatida dadil qadam tashlaydi. Mehrdan bebahra qolgan bola esa katta bo'lsa ham tobe bo'lib o'sadi.",
        "highlight": "2 yil to'liq emizish va onaning bag'ri — kelajakdagi mustaqil shaxsning birlamchi poydevoridir."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "G'azabni jilovlashning 4 qadami",
        "subtitle": "Hazrati Ali (r.a.) ibrati",
        "content": "Hazrati Ali dushmanga qilich ko'targanda yuziga tupurilgani uchun uni qo'yib yuborganlar — chunki unga nafs aralashib qolishini istamadilar. Ota-ona jazolashdan oldin so'rashi kerak: «Men hozir Alloh uchun tarbiyalayapmanmi yoki alamim uchunmi?»\n\nG'azabni bosishning 4 qadami:\n1. To'xtash: Darhol javob qaytarmang, nafas rostlash uchun vaqt bering.\n2. Ko'zguga qarash: O'zining qizarib bo'rtgan yuz ifodasini ko'rish orqali hushyor tortish.\n3. Reallikka qaytish: To'kilgan narsa yuviladi, lekin bolaning singan qalbi yillar davomida tuzalmaydi.\n4. Muqobil yechim: Baqirish o'rniga hazil yoki o'yin orqali vaziyatni yumshatish.",
        "example": "«Chumolilarni mehmon qilmoqchi bo'ldingmi?» deya to'kilgan shakar ustida tabassum qilish singan ko'ngilni saqlaydi."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Hurmat va ovoz me'yori: Baqirishning zararlari",
        "subtitle": "Luqmon surasi 19-oyat va oshiqlar masali",
        "content": "«Yurishingda me'yorni tanla va ovozingni pasaytir, chunki ovozlarning eng yoqimsizi eshakning ovozidir» (Luqmon, 19).\n\nDonishmand masali: Insonlar bir-biriga g'azablansa, qalblari uzoqlashadi va ovozini yetkazish uchun baqirishga majbur bo'ladi. Mehr kuchaysa, sokin gapiriladi, juda chuqur muhabbatda esa faqat nigohlar kifoya qiladi. Baqirish ota-ona va bola qalbi orasidagi masofani uzaytiradi.\n\nTibbiy oqibat: Doimiy baqiriq ostida o'sgan bolada bo'y o'sishi sekinlashadi va immunitet zaiflashadi.",
        "quoteSource": "Luqmon surasi, 19-oyat"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Nafs mayli va taomlanish me'yori",
        "subtitle": "1/3 qoidasi va «Zavq maxluqi»",
        "content": "Bola yig'lashi bilan uning har bir xohishini (shirinlik, telefon) darhol muhayyo qilish undagi «nafs maxluqi»ni o'stiradi. Sabr tarbiyasi: shirinlikni ovqatdan keyinga qoldirish, do'konda bitta narsa olish kelishuvi.\n\nKam yeyish — qalb hayoti: «Qorinlaringizni haddan ortiq to'ydirib, qalblaringizni o'ldirmangiz...» (Hadis). Oshqozonning 1/3 qismi taom, 1/3 qismi suv, 1/3 qismi nafas uchun bo'sh qolishi lozim. Majburlab, multfilm qo'yib ovqatlantirmang.",
        "highlight": "Oshqozon me'yorida bo'sh tursa, tafakkur va idrok kuchayadi."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Yakuniy test",
        "quizQuestion": "Luqmon surasi 19-oyat va oshiqlar masaliga ko'ra, insonlar bir-biriga nima sababdan baqiradilar?",
        "quizOptions": [
          "Qalblar bir-biridan uzoqlashgani sababli ovozini yetkazish uchun",
          "Chunki eshitish qobiliyati pasaygan bo'ladi",
          "Chunki ko'proq baqirgan odam haq bo'ladi",
          "Baqirish bolaning xotirasini kuchaytiradi"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Oshiqlar masalida aytilganidek, mehr va muhabbat bor joyda shivirlash ham kifoya qiladi; qalblar g'azab tufayli uzoqlashgandagina insonlar baqirishga majbur bo'ladilar."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "zamonaviy-tarbiya-va-talim-sirlari",
    "title": "Ta'lim va tarbiyaning farqi: «Nega?» savoli va rag'bat",
    "slug": "talim-va-tarbiyada-nega-savoli",
    "summary": "Rahimov School tajribasi: tarbiyada 'nega'ga o'rin yo'qligi, ta'limda affordance tamoyili, kitobxonlik rag'bati va muhandislik kelajagi.",
    "order": 1,
    "estimatedMinutes": 8,
    "ageGroup": "10-13",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "Tarbiyada «nega?»ga o'rin yo'q, ta'lim esa «nega?»siz yashamaydi",
        "subtitle": "Aziz Rahimov («Dilkash» ko'rsatuvi)",
        "content": "Tarbiya — ota-onadan, ajdodlardan va milliy qadriyatlardan so'zsiz, ko'rib o'rganiladigan odatlar yig'indisi (kattani hurmat qilish, fidoiy bo'lish, salom berish). Bunga ortiqcha savol berilmaydi.\n\nTa'lim esa «nega?»siz yashamaydi: Agar o'quvchiga o'rganayotgan narsasi hayotda nima uchun kerakligi (affordance tamoyili) tushuntirilmasa, u bilim esda qolmaydi. Odam o'z ehtiyojiga xizmat qiladigan ma'lumotnigina qabul qiladi.",
        "highlight": "O'qituvchi fanning hayotiy zaruratini tushuntirib bera olmasa, o'quvchi nega o'qiyotganini so'rashga to'la haqli."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Tarbiyada rag'bat va havas uyg'otish",
        "subtitle": "Kitobxonlikni statusga aylantirish",
        "content": "Salomsiz yoki itoatsiz bolani jazolashdan ko'ra, to'g'ri harakat qilganlarni rag'batlantirish samaraliroq. Maktabda kitob o'qish majburiyat emas, obro'-e'tibor (status) belgisiga aylantirilgan (MacBook, velosiped, sayohatlar bilan rag'batlantiriladi).\n\nNatija: Birinchi yili o'quvchilarning 35%i mustaqil kitob o'qigan bo'lsa, keyingi yili bu ko'rsatkich 55%ga yetdi va doimiy o'smoqda.\n\nOdob — poydevor: Xuddi tahoratsiz ibodat qabul bo'lmaganidek, odobsiz na ta'lim, na tarbiya natija beradi.",
        "example": "Maktabdan biror bola bahosi pastligi uchun emas, faqat tarbiyasidagi muammolar (masalan, bulling) boshqalarga ziyon keltirgani uchungina chetlatiladi."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Xalqaro grantlar va muhandislik yo'nalishi",
        "subtitle": "44 bitiruvchidan 18 nafari top universitetlarda",
        "content": "44 nafar bitiruvchidan 18 nafari dunyoning top-100 universitetlariga 100% grant yutgan ($5M+). Nega aynan muhandislik?\n\nOson yo'nalishlarda (biznes, marketing) raqobat katta. O'zbekistonga esa dronlar, ko'priklar, elektr stansiyalar uchun mahalliy muhandislar zarur. Texnik fanni o'zlashtirgan kadr boshqa har qanday sohani tezda eplay oladi.\n\nVatanga qaytish kayfiyati: Talabalar chet elga migrant bo'lib ketish emas, bilim va sarmoya to'plab O'zbekistonga qaytish niyatida ta'lim olmoqda.",
        "quoteSource": "Aziz Rahimov, Rahimov School"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Ota-onalar uchun amaliy qadam",
        "subtitle": "Bolaga maqsad berish",
        "content": "1. Bolangizdan maktabdagi fanni yodlashni talab qilishdan oldin, bu bilim kelajakda unga qanday yordam berishini hayotiy misol bilan ko'rsatib bering.\n2. Oilangizda kitobxonlikni jazo emas, eng sevimli oilaviy sharaf va bayramga aylantiring.",
        "highlight": "Ta'limda bolaga havas va hayotiy maqsad bering."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Test savoli",
        "quizQuestion": "Aziz Rahimov ta'lim va tarbiyaning asosiy farqini qanday ifodalaydi?",
        "quizOptions": [
          "Tarbiyada so'zsiz ko'rib o'rganiladi («nega»ga o'rin yo'q), ta'limda esa hayotiy zarurat («nega») tushuntirilishi shart",
          "Tarbiya faqat pulli maktablarda beriladi",
          "Ta'limda hech qanday savol berish mumkin emas",
          "Ikkalasining ham hech qanday farqi yo'q"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Aziz Rahimov ta'kidlaganidek, milliy odob-axloq va qadriyatlar so'zsiz ko'rib o'rganiladi, ta'limda esa bola nima uchun o'rganayotganini (affordance) bilmasa, bilim esda qolmaydi."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "zamonaviy-tarbiya-va-talim-sirlari",
    "title": "O'smirlik xususiyatlari, gadjetlar taqiqi va Brain Rot",
    "slug": "osmir-yosh-va-diqqatni-asrash",
    "summary": "5-8 sinflardagi energiya, telefon taqiqi va Brain Rot xavfi, Vigotskiy nazariyasi hamda Kumon mustaqil ta'lim uslubi.",
    "order": 2,
    "estimatedMinutes": 8,
    "ageGroup": "10-13",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "O'smirlik (5–8-sinflar): Tana va aql o'sishi",
        "subtitle": "Ortiqcha bosim o'tkazmaslik qoidasi",
        "content": "5–8-sinflarda bolaning butun energiyasi jismoniy tana o'sishiga ketadi, aqliy o'sish biroz sekinlashadi. Bu tabiiy biologik jarayondir.\n\nBu davrda bolaga ortiqcha bosim o'tkazmay, qiziqishlarini (shaxmat, robototexnika, sport, pazandachilik, kitobxonlik) saqlab qolish eng asosiy vazifa hisoblanadi.",
        "highlight": "O'smirlikdagi o'zgarishlarni to'g'ri tushuning va unga sevimli mashg'ulot maydoni qoldiring."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Telefon taqiqi va «Brain Rot» xavfi",
        "subtitle": "Silikon vodiysi rahbarlari tajribasi",
        "content": "Gadjetlar va qisqa videolar (Shorts, Reels) diqqatni o'g'irlaydi va miyani toliqtiradi («Brain Rot»). Silikon vodiysidagi texnologiya rahbarlarining o'zi ham farzandlarini ekransiz (Valdorf) maktablarda o'qitadi.\n\nRahimov School da 10-sinfgacha telefon to'liq taqiqlangan. Maqsad — ota-onalar bilan kelishib, buni uyda ham nazoratga olish va bolaning jonli muloqotini saqlab qolish.",
        "example": "Telefonsiz qolgan bola tanaffusda do'stlari bilan suhbatlashadi, kitob varaqlaydi va asab tizimi dam oladi."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Vigotskiy nazariyasi: O'qituvchi shaxsiyati",
        "subtitle": "Shaxsga mehr -> Fanga mehr",
        "content": "O'qituvchilarni saralash mezonlari: Mehr va bolajonlik, Pedagogik mahorat, Bilim darajasi.\n\nLev Vigotskiy nazariyasiga ko'ra: O'quvchi avval o'qituvchining shaxsiyatini yaxshi ko'radi, shundan so'ng uning faniga mehr qo'yadi. Sinfdan tashqaridagi iliq munosabat sinf ichidagi o'zlashtirish samaradorligini belgilaydi.",
        "quoteSource": "Lev Vigotskiy psixologik modeli"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Kumon metodikasi va amaliy tashabbus",
        "subtitle": "O'quvchilar yasagan asboblar",
        "content": "Laboratoriyada fizika jihozlari yo'qligida o'quvchilar nazariyani o'rganib, asboblarni 3,5 oyda o'zlari yasadilar. Ular bozor narxidan 5–7 barobar arzon va 99% aniqlikda ishlab, boshqa maktablarga sotish tashabbusi bilan chiqdilar.\n\nYaponiyaning Kumon metodikasi: Boshlang'ich sinflarda mustaqil o'rganish (self-studying) tizimi. Kuniga 30 daqiqa o'qituvchisiz, mantiqiy misollar yechiladi. Xatoni o'qituvchi to'g'rilamaydi, bola savollar orqali o'zi topadi.",
        "highlight": "Bolaning tashabbusini cheklamang, unga o'z xatosini o'zi tushunishga imkon bering."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Mini-test",
        "quizQuestion": "Vigotskiy nazariyasiga ko'ra, o'quvchining biror fanga qiziqishi qanday shakllanadi?",
        "quizOptions": [
          "Avval o'qituvchining shaxsiyatini yaxshi ko'radi, keyin faniga mehr qo'yadi",
          "Faqat imtihonda 2 baho olishdan qo'rqqani uchun",
          "Faqat repetitorga qatnagani uchun",
          "Fan qanchalik murakkab bo'lsa, o'z-o'zidan qiziqish paydo bo'ladi"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Lev Vigotskiy nazariyasiga binoan, o'quvchi avvalo ustozning samimiy shaxsiyati va mehrini his qiladi, shundan so'ng uning fanini qadrlab o'rganadi."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "zamonaviy-tarbiya-va-talim-sirlari",
    "title": "To'rt turdagi sarmoya va bolaga 100% so'zsiz ishonch",
    "slug": "tashabbuskorlik-va-tort-sarmoya",
    "summary": "Moddiy, madaniy, ijtimoiy va ramziy sarmoyalar. Bolaning gapini oxirigacha eshitish va ota-onaning so'zsiz ishonchi.",
    "order": 3,
    "estimatedMinutes": 7,
    "ageGroup": "10-13",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "Sarmoya faqat pul emas: To'rt turdagi sarmoya",
        "subtitle": "Pierre Bourdieu ijtimoiy sarmoya modeli",
        "content": "Ota-onalar ko'pincha farzandiga faqat moddiy boylik qoldirishni o'ylaydi. Biroq inson hayotida 4 turdagi sarmoya mavjud:\n\n1. Moddiy sarmoya (pul, uy, mulk);\n2. Madaniy sarmoya (uy kutubxonasi, o'qilgan kitoblar, dunyoqarash);\n3. Ijtimoiy sarmoya (atrofdagi do'stlar muhiti, ustozlar, tanishlar doirasi);\n4. Ramziy sarmoya (yutuqlar, obro', nufuz, maqom).",
        "highlight": "Moddiy sarmoya qolgan uchtasisiz havoga uchadi. Qolgan uchtasi bor insonga moddiy sarmoya o'zi keladi."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Bolani jiddiy olish madaniyati",
        "subtitle": "Gapini oxirigacha bo'lmasdan tinglash",
        "content": "Kattalarga ko'rsatiladigan ehtirom kabi bolaning gapi, orzusi va fikri oxirigacha bo'linmasdan eshitilishi kerak.\n\nAgar bola gapirayotganda telefoningizga qarasangiz yoki «sen hali kichkinasan, tushunmaysan» desangiz, u o'z dunyosini sizga yopadi va ko'chadan yoki virtual tarmoqdan tinglovchi izlaydi.",
        "example": "Bolangiz gap boshlaganda ishni to'xtatib, ko'ziga qarab diqqat bilan eshiting."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Ota-onaning so'zsiz 100 foizlik ishonchi",
        "subtitle": "Eng buyuk qanot",
        "content": "Ota-onaning so'zsiz, 100 foizlik ishonchi bolaga hayotdagi eng katta qanot bo'ladi. Ota-onasi unga ishonishini his qilgan bola noto'g'ri qadam qo'yishdan o'zini tiyadi, mas'uliyatni his qiladi va mustaqil, dadil shaxs bo'lib ulg'ayadi.\n\nAksincha, har qadamida gumonsirab, tekshiruv va hadik ostida ushlangan bola ikkiyuzlamachilikka o'rganadi.",
        "quoteSource": "Aziz Rahimov tavsiyalari"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Oila davrasida bugungi suhbat",
        "subtitle": "Madaniy va ijtimoiy sarmoya mashqi",
        "content": "1. Bugun kechki ovqat paytida bolangizdan uning eng katta orzusi haqida so'rang va hech qanday e'tiroz yoki tanqidsiz, oxirigacha eshiting.\n2. «Men senga ishonaman, sen bu ishni eplay olasan» deb unga ruhiy tayanch bering.",
        "highlight": "Ishonch ko'rgan farzand adolat va jasorat yo'lidan og'ishmaydi."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Sinov savoli",
        "quizQuestion": "To'rt turdagi sarmoya qoidasiga ko'ra, nima sababdan moddiy sarmoyaning o'zi yetarli emas?",
        "quizOptions": [
          "Chunki madaniy, ijtimoiy va ramziy sarmoyasiz moddiy sarmoya tezda yo'q bo'lib ketadi",
          "Chunki banklar bolalarga hisob ochmaydi",
          "Chunki bolalar faqat pulni yaxshi ko'radi",
          "Chunki maktabda pul ishlatish mumkin emas"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Aziz Rahimov ta'kidlaganidek, madaniy sarmoya (dunyoqarash, bilim) va ijtimoiy sarmoyasi (yaxshi ustozlar, muhit) bo'lmagan odamga berilgan moddiy boylik havoga uchadi. Qolgan uchtasi bor insonga esa moddiy boylik o'zi keladi."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "jasur-va-mustaqil-farzand-tarbiyasi",
    "title": "Jasur va mard farzand voyaga yetkazish asoslari",
    "slug": "jasur-farzand-poydevori",
    "summary": "Halol luqma, qo'rquv va hadikdan asrash, mas'uliyat yuklash hamda Venn diagrammasida umumiy nuqta topish.",
    "order": 1,
    "estimatedMinutes": 7,
    "ageGroup": "14+",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "Jasur va mustaqil farzand poydevori",
        "subtitle": "5 muhim jihat",
        "content": "Jasur va mustaqil farzand voyaga yetkazish uchun quyidagi muhim jihatlarga urg'u beriladi:\n\n1. Shaxsiy namuna va halol luqma: Bolaning ruhiy va jismoniy salohiyatida oiladagi halol rizq va muhit birinchi darajali poydevordir.\n2. Qo'rquv va hadikdan asrash: Bolani turli uydirmalar yoki tahdidlar bilan qo'rqitib tarbiyalamaslik, ularda faqat Yaratgandan qo'rqish va adolat yo'lida dadil bo'lish tuyg'usini shakllantirish.\n3. Mas'uliyat yuklash: Yoshlikdan yoshiga mos vazifalar berib, o'ziga ishonchini oshirish.\n4. Mardlik sifatlari: Sahobalar va ajdodlar hayotidan ibratli qissalarni o'rgatish.\n5. Hissiy tayanch va hurmat: Fikrini tinglash, irodasini sindirmaslik.",
        "highlight": "Bolani qo'rquv bilan emas, adolat va o'ziga ishonch bilan tarbiyalang."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Zamonaviy asosiy muammo: Ikki begona dunyo",
        "subtitle": "Jismoniy nazorat bor, virtual nazorat yo'q",
        "content": "Ilgari bola ko'chada erkin yurgan, ammo nima ko'rayotgani va kim bilan do'stlashayotgani qattiq nazoratda bo'lgan. Bugun esa bola qayerda ekani (GPS, taksi) aniq, biroq uning virtual olamida kimlar bilan ekani noma'lum.\n\nBir-biriga begona ikki dunyo: Ota-ona va farzandning qiziqishlari, ko'radigan kontenti kesishmay qolgan (Venn diagrammasida umumiy nuqta yo'q). Natijada ota-ona bola uchun obro'li shaxs bo'lmay qoladi.\n\n«Inkubator» yondashuvi: Bolani faqat taqiqlar bilan bir qolipga solish uning mustaqil fikri va ijodkorligini o'ldiradi. Ularning ulg'aygach birovning ko'ziga qarab yashaydigan tobe shaxsga aylanishiga sabab bo'ladi.",
        "example": "Farzandingiz qaysi blogerni kuzatishi va nimalarga qiziqishini o'rganib, umumiy suhbat mavzusi yarating."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Sahobalar va buyuk allomalar ibrati",
        "subtitle": "10–20 yosh: Buyuk poydevor davri",
        "content": "10–20 yosh oralig'i — inson tafakkuri, ijodi va g'ayrati eng yuqori nuqtaga chiqadigan davr. Tarixdagi ko'plab buyuk allomalar (Ibn Sino, Imom Buxoriy, Alisher Navoiy) asosiy asarlari va yutuqlariga aynan shu yosh oralig'ida poydevor qo'ygan.\n\nKurashuvchanlik — tabiiy xususiyat: Aka-uka o'rtasidagi tortishuvlar yoki norozilikni kaltak yoki qattiq jazo bilan bostirish emas, sport, ilm va foydali mehnatga to'g'ri yo'naltirish lozim.",
        "quoteSource": "Islomiy tarbiya asoslari"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Mustaqillik mashg'uloti",
        "subtitle": "Mas'uliyat berish",
        "content": "1. Bugun farzandingizga oilaviy masalalardan birida (masalan, xarid qilish, yo'l tanlash, uyni tartibga solish) to'liq vakolat va mas'uliyat bering.\n2. Uning xatosini darhol tuzatmay, natijani o'zi ko'rishiga va to'g'irlashiga imkon bering.",
        "highlight": "Mustaqillik mas'uliyat berilgandagina shakllanadi."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Savol",
        "quizQuestion": "Bolani doimiy qo'rquv va qattiq «inkubator» qoliplari bilan tarbiyalash qanday salbiy oqibatga olib keladi?",
        "quizOptions": [
          "Bolaning mustaqil fikri o'lib, birovning ko'ziga qarab yashaydigan tobe shaxsga aylanadi",
          "Bola juda jasur va mustaqil lider bo'lib voyaga yetadi",
          "Bolaning jismoniy salomatligi yanada mustahkamlanadi",
          "U barcha fanlardan faqat a'lo baho oladi"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Haddan tashqari taqiqlar va inkubator yondashuvi bolaning irodasini sindiradi, uni mustaqil qaror qabul qilolmaydigan tobe insonga aylantiradi."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "jasur-va-mustaqil-farzand-tarbiyasi",
    "title": "O'smirlik inqirozi: Sabablar, xatolar va 4 amaliy yechim",
    "slug": "osmirlik-inqirozi-va-yechimlar",
    "summary": "O'smirlik oldingi tarbiyaning mevasi. Taqiq o'rniga to'yimli muqobil, xatoni tan olish va 4 amaliy chora.",
    "order": 2,
    "estimatedMinutes": 8,
    "ageGroup": "14+",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "O'smirlik — kutilmagan o'zgarish emas, oldingi tarbiyaning mevasi",
        "subtitle": "Kuch to'plangan davr",
        "content": "Ko'pchilik bola 12–15 yoshda to'satdan buzildi deb o'ylaydi. Aslida bu yosh — 10–12 yoshgacha singdirilgan moddiy va ma'naviy tarbiyaning yuzaga chiqishi. Bola kuch-quvvat to‘plagach, ichida borini namoyon qila boshlaydi.\n\nBola — ota-onaning ko'zgusi: Bolaning o'jarligi yoki jahldorligi oiladagi muhitning aksidir. O'zi telefondan bosh ko'tarmaydigan yoki kattalarga baqiradigan ota-ona boladan boshqacha natija kutolmaydi.",
        "highlight": "Bola ulg'aygach, unga bergan ma'naviy ozuqangiz mevasini ko'rsatadi."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Taqiqning o'rniga to'yimli muqobil",
        "subtitle": "Toza suvning ta'mi",
        "content": "Bolaga «buni qilma, uni ko'rma» deyish bilan ehtiyoj yo'qolmaydi. Zararni man qilishdan oldin uning qalb va aql ehtiyojini qondiradigan toza ma'naviy ozuqa (ilm, mehr, qiziqarli mashg'ulot) berish kerak.\n\nToza suvning ta'mini bilgan odam loyqa suv ichmaydi. Qalb va tuyg'ular tarbiyasi: Qarorlarning katta qismini his-tuyg'u (qalb) qabul qiladi, aql esa unga bahona topib beradi. Tarbiya qalbni isloh qilish bilan bo'lishi lozim.",
        "example": "Xatoni tan olish madaniyati: Ota-onaning o'z xatosini bolasi oldida tan olishi ishonchni qaytaradi."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Katta bo'lib qolgan o'smirlar bilan ishlashning 4 chorasi",
        "subtitle": "Amaliy yechimlar yo'li",
        "content": "1. O'rtadagi sun'iy devorni olib tashlash: Bola bilan buyruq ohangida emas, shaxs sifatida, do'stona muloqot qilish.\n2. Xatolarning ildizini o'zidan qidirish: Boladagi qiliqqa achchiqlanishdan oldin «Bunga o'zim sababchi emasmanmi?» deb o'ylash.\n3. Salohiyatli ustozga yo'naltirish: Ota-ona ta'sirini yo'qotgan bo'lsa, eng yaxshi chora — bolani kuchli, shaxsiyati to'laqonli ustozga topshirish. Bola ustozning insoniy ojizliklarini ko'rmagani sababli uning so'zini osonroq qabul qiladi.\n4. Taqiq — eng oxirgi chora: Qo'pol chora xuddi dori bilan tuzaladigan bemorni darhol operatsiya stoliga yotqizish kabidir.",
        "quoteSource": "Muammolar va yechimlar transkripti"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "O'smir bilan do'stona suhbat",
        "subtitle": "Devorlarni buzish",
        "content": "1. Bugun o'smir farzandingizga hech qanday pand-nasihat qilmasdan, choy ustida uning rejalari va qiziqishlari haqida tengdoshdek suhbatlashing.\n2. Agar o'tmishda unga nisbatan adolatsizlik qilgan bo'lsangiz, samimiy uzr so'rang. Bu uning qalbida sizga nisbatan ulkan hurmat uyg'otadi.",
        "highlight": "Samimiy uzr ota-onaning obro'sini tushirmaydi, balki yuksaltiradi."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Test savoli",
        "quizQuestion": "O'smir yoshidagi bola ota-onasining so'zini qabul qilmay qo'ysa, eng to'g'ri pedagogik qadam nima?",
        "quizOptions": [
          "Bolani shaxsiyati kuchli, salohiyatli va ibratli ustozga yo'naltirish",
          "Uyga qamab qo'yish va ovqat bermaslik",
          "Barcha qarindoshlar oldida uni izza qilish",
          "U bilan butunlay gaplashmay qo'yish"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Agar ota-ona o'z nufuzini yo'qotgan bo'lsa, eng to'g'ri chora — bolani shaxsiyati kuchli va ibratli ustozga topshirishdir. Bola ustozning so'zini osonroq qabul qiladi."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "kitobxonlik-va-30-mutafakkir",
    "title": "Kitob, o'yinchoq va ekran: Klip tafakkur xavfi",
    "slug": "kitob-ekran-va-klip-tafakkur",
    "summary": "Bola tafakkurida ekran va kitob farqi, qisqa videolarning klip tafakkur xavfi, oltin yosh (7-12) va uxlashdan oldin mutolaa.",
    "order": 1,
    "estimatedMinutes": 7,
    "ageGroup": "6-9",
    "xpReward": 20,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "Kitob, o'yinchoq va ekranning farqi",
        "subtitle": "Tafakkur maydonini ochish",
        "content": "O'yinchoq va multfilmlar: O'yinchoq boladagi mavjud bo'shliqni to'ldiradi, multfilm esa vaqtni band qiladi. Ekran va o'yinchoqlar zehnni faqat o'ziga bog'lab, passiv iste'molchiga aylantiradi.\n\nKitob — yangi maydon: Kitob bolaning zehnini o'zidan ajratib, keng dunyoga bog'laydi; ilgari mavjud bo'lmagan yangi tafakkur maydonini ochadi.\n\nKlip tafakkur xavfi: Kuniga ekranga tikilib, 1–3 daqiqalik qisqa videolarga o'rgangan zehn keyinchalik 10 sahifali matn yoki hikoyani o'qishga toqat qilolmaydi.",
        "highlight": "Kitob — bolaning tasavvur qanotlarini kengaytiruvchi yagona sehrli vositadir."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Quruq shiorlardan qochish va yozgi ta'til",
        "subtitle": "Majburlash o'rniga qiziqarli muqobil",
        "content": "Bolani balandparvoz gaplar, qarsaklar yoki buyruq bilan kitobxon qilib bo'lmaydi. Yechim — unga qiziqarli, chiroyli bezatilgan va mazmunli muqobil berish.\n\nYozgi ta'tilni unumli o'tkazish: Yoz — vaqtni behuda sarflash emas, balki bilim zaxirasini to'plash mavsumi. Yozda sifatli biografik kitoblarni mutolaa qilgan bola yangi o'quv yiliga so'z boyligi oshgan, sabrli va tafakkuri o'sgan holda kirib boradi.",
        "example": "Farzandingizga qiziqarli mutafakkirlar hayotidan hikoya aytib bering, uning qiziqishi kitobga o'z-o'zidan ulanadi."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Oltin yosh davri (7–12 yosh) va birga o'qish",
        "subtitle": "Ota-onaning ovozidagi mehr",
        "content": "7–12 yosh — bola o'z ichki dunyosini quradigan oltin davrdir. Unga singdirilgan qahramonlar va qadriyatlar umrboqiy poydevorga aylanadi.\n\nOta-ona bilan birga o'qish: Bolaga eng yaxshi sovg'a — ota-onaning ovozi orqali yetkazilgan ertak va hikoyadir. Uyqudan oldin 15–20 daqiqa birga o'qish, savol-javob qilish ota-ona va bola o'rtasidagi mehr rishtasini mustahkamlaydi.",
        "quoteSource": "Bolalar uchun biografik to'plam qo'llanmasi"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Bugun oqshom mutolaasi",
        "subtitle": "15 daqiqa qoidasi",
        "content": "1. Bugun kechqurun televizor va telefonlarni o'chiring.\n2. Farzandingiz bilan birga o'tirib, u sevgan yoki yangi biografik kitobdan bir bobni birgalikda, ovoz chiqarib o'qing va qahramonning xatti-harakati haqida fikr almashing.",
        "highlight": "Uxlashdan oldingi 15 daqiqalik samimiy mutolaa butun umrga tatigulik xotira bo'ladi."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Test",
        "quizQuestion": "Nima sababdan 1–3 daqiqalik qisqa videolarni (Reels, TikTok) ko'p tomosha qilish o'qish qobiliyatiga ziyon keltiradi?",
        "quizOptions": [
          "Miyada klip tafakkur shakllanib, diqqatni uzoq matnni chuqur tushunishga jamlash qobiliyati susayadi",
          "Chunki telefon batareyasi tez tugab qoladi",
          "Chunki telefon har doim internet talab qiladi",
          "Bunday videolarning kitob o'qishga hech qanday ta'siri yo'q"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Qisqa videolarga o'rgangan miya chuqur fikrlashdan toliqadi va 10 sahifali matnni tahlil qilishga sabri yetmaydigan «klip tafakkur» quliga aylanadi."
      }
    ],
    "isPremium": true
  },
  {
    "courseSlug": "kitobxonlik-va-30-mutafakkir",
    "title": "Bolalar xonasidagi 3 ta deraza: 30 buyuk daho",
    "slug": "xazinadagi-uch-deraza-va-30-daho",
    "summary": "Sharq mutafakkirlari, G'arb ixtirochilari va zamon qahramonlari. Orzular miqyosini kengaytirish va diaspora uchun ko'prik.",
    "order": 2,
    "estimatedMinutes": 8,
    "ageGroup": "6-9",
    "xpReward": 25,
    "isFree": true,
    "screens": [
      {
        "screenIndex": 0,
        "type": "concept",
        "title": "To'plam tuzilishi: «Bolalar xonasidagi 3 ta deraza»",
        "subtitle": "30 jildlik biografik to'plam",
        "content": "To'plam jami 30 ta kitobdan iborat bo'lib, 3 ta turkumga (har birida 10 tadan biografiya) bo'lingan:\n\n1-turkum: Sharq mutafakkirlari va allomalari (Ibn Sino, Forobiy, Xorazmiy, Mirzo Ulug'bek, Ali Qushchi, Ahmad Farg'oniy, Al-Jazariy — ilk robototexnika ixtirochisi, Ibn Xaldun, Alisher Navoiy).\n2-turkum: G'arb ilmining asoschilari va ixtirochilar (Arximed, Nyuton, Galiley, Albert Eynshteyn, Tomas Edison, Nikola Tesla, Nikolay Kopernik, Lui Paster, Aleksandr Bell).\n3-turkum: San'at, sport, zamonaviy texnologiya (Leonardo da Vinchi, Muhammad Ali, Pablo Pikasso, Zaha Hadid, Aziz Sanjar, Hayao Miyazaki, Stiv Jobs, Solijon Sharipov).",
        "highlight": "Sharq, G'arb va zamonaviy ilm yulduzlarini tanigan bolaning orzulari yuksak bo'ladi."
      },
      {
        "screenIndex": 1,
        "type": "explanation",
        "title": "Orzular miqyosini kengaytirish",
        "subtitle": "Bola kimga havas qilsa, shunga qarab shakllanadi",
        "content": "Bola kimga havas qilsa, shunga qarab shakllanadi. Uning atrofidagi namunalar faqat bloger yoki arzon shoular bilan cheklanib qolsa, qiziqishlari ham tor bo'ladi.\n\n30 ta har xil soha daholari va qahramonlarini tanigan bola mayda orzular qilishdan yiroq bo'ladi. U robot yasashni Al-Jazariydan, koinotni Ulug'bekdan, jasoratni Muhammad Alidan, yangilik yaratishni Stiv Jobsdan o'rganadi.",
        "example": "«Sen ham Al-Xorazmiy kabi yangi matematik qoidalar yarata olasan» deb uning shaxsiyatini allomalarga bog'lang."
      },
      {
        "screenIndex": 2,
        "type": "islamic_perspective",
        "title": "Xorijdagi vatandoshlar uchun ma'naviy ko'prik",
        "subtitle": "Ildizlarni unutmaslik",
        "content": "Maktablar uchun qo'llanma: O'qituvchilar ushbu kitoblardan sinfdan tashqari o'qish, loyiha ishlari va munozaralar uchun tayyor manba sifatida foydalanishi mumkin.\n\nXorijdagi vatandoshlar (diaspora) uchun ko'prik: Chet elda o'sayotgan bolalarning o'zbek tilini unutmasligi, o'z ildizlari va milliy qahramonlarini tanishi uchun ushbu kitoblar o'ziga xos ma'naviy ko'prik vazifasini bajaradi.",
        "quoteSource": "30 jildlik to'plam maqsadlari"
      },
      {
        "screenIndex": 3,
        "type": "practice",
        "title": "Mutafakkir bilan tanishuv mashqi",
        "subtitle": "Qahramon tanlash",
        "content": "1. Farzandingizga 30 daho ichidan bittasini (masalan, Ibn Sino yoki Al-Jazariyni) tanlashni taklif qiling.\n2. U bilan birga ushbu alloma bolaligida qanday qiyinchiliklarni yengib o'tgani va qanday kashfiyot qilgani haqida 10 daqiqa suhbatlashing.",
        "highlight": "Buyuk insonlarning bolaligi haqidagi qissalar bolaga eng kuchli motivatsiyadir."
      },
      {
        "screenIndex": 4,
        "type": "quiz",
        "title": "Mini-test",
        "quizQuestion": "«Bolalar xonasidagi 3 ta deraza» to'plamida robototexnikaning ilk ixtirochisi sifatida qaysi alloma keltirilgan?",
        "quizOptions": [
          "Al-Jazariy",
          "Nikola Tesla",
          "Tomas Edison",
          "Stiv Jobs"
        ],
        "correctOptionIndex": 0,
        "quizExplanation": "To'g'ri! Islom olamining buyuk muhandisi va olimi Al-Jazariy XII asrdayoq ilk dasturlanadigan avtomat mexanizmlar va robototexnika asoslarini yaratgan."
      }
    ],
    "isPremium": true
  }
];

export const seedArticles = [
  {
    "title": "Islomda farzand tarbiyasining 5 oltin qoidasi",
    "slug": "islomda-farzand-tarbiyasining-5-oltin-qoidasi",
    "excerpt": "Abdulloh Domlaning 55 darslik silsilasi asosida ota-onalar uchun eng muhim va dolzarb tavsiyalar.",
    "content": "Farzand tarbiyasi ota-ona uchun nafaqat oilaviy baxt, balki ulkan diniy omonat va mas'uliyatdir. Payg'ambarimiz (s.a.v) hadislarida har bir ota-ona o'z farzandi uchun so'ralishi qat'iy ta'kidlangan. Birinchi qoida — shaxsiy ibrat. Bolalar so'zimizga emas, xulqimizga ergashadi. Ikkinchi qoida — mehr va adolat. Aka-ukalar o'rtasida mehr va sovg'ada tenglik bo'lishi shart. Uchinchi qoida — halol luqma. Halol luqma bolaning qoniga singib, xulqini go'zallashtiradi. To'rtinchi qoida — tilni asrash. Jahl chiqqanda so'kinish o'rniga duo qilish lozim. Beshinchi qoida — ibodatga muhabbat. 7 yoshdan boshlab mehr bilan namozga o'rgatish zarur.",
    "categorySlug": "tarbiya-asoslari",
    "ageGroup": "3-5",
    "readingTimeMinutes": 5,
    "tags": [
      "farzand tarbiyasi",
      "sunnat",
      "mehr",
      "namoz",
      "odob"
    ],
    "seoTitle": "Islomda farzand tarbiyasining 5 oltin qoidasi | Farzandly",
    "seoDescription": "Abdulloh Domla darslari asosida farzand tarbiyasining eng muhim qoidalari, sunnatga muvofiq tavsiyalar.",
    "isPublished": true,
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
    },
    "isPremium": false
  },
  {
    "title": "Bolaning darajasiga tushilmaydi, aksincha chiqiladi: Ahsani taqvim siri",
    "slug": "xadicha-kubro-bolaning-darajasiga-chiqish",
    "excerpt": "Nima uchun bolalarga pastga qarash emas, ularning ma'naviy sofligi va beg'uborligi darajasiga ko'tarilish kerak? Xadicha Kubro Tongar asaridan xulosalar.",
    "content": "Bir necha yil avval ko‘rsatuvimga kelgan yozuvchi mehmonlardan biri shunday degan edi: «Bolaning darajasiga tushilmaydi, aksincha uning darajasiga chiqiladi».\n\nDastlab bu fikr g‘alati tuyulishi mumkin. Axir bolalar mitti jussasi, nozik barmoqlari bilan bizdan pastda emasmi? Biz esa hayotiy tajribaga ega, aqlan to‘lishgan insonlarmiz. Demak, mantiqan bola bizning darajamizga ko‘tarilishi kerakdek.\n\nBiroq bu fikr Qur’oniy haqiqat bilan izohlanadi:\n1. Bolalar — «Ahsani taqvim» (eng go‘zal suratda yaratilgan) fitrat egalaridir. Ular pok, beg‘ubor va gunohlardan xolidir.\n2. Biz esa ulg‘ayganimiz sari gunohlar ortidan asl fitratimizni xiralashtirib, pastlatib boramiz.\n\nDemak, ma’naviy soflik nuqtai nazaridan bolalar bizdan ancha yuqorida turadi. Shu bois ota-ona bolaning oldida pastga «tushmaydi», balki uning soflik pog‘onasiga «chiqishi» lozim.\n\nPayg‘ambarimiz Muhammad (s.a.v.) muborak vujudlariga yog‘ayotgan yomg‘ir tomchilarini: «Bu Robbimning huzuridan yangi kelmoqda», — deya erkalaganlaridek, ota-ona ham pokiza farzandi orqali o‘z ruhiyatini tozalashga harakat qilishi darkor.\n\nBu poklanish jarayoni oson kechmaydi: o‘tmishdagi bitgan jarohatlarimiz qayta og‘rishi mumkin, lekin bola bilan bola bo‘lishni o‘rganganimiz sayin, o‘z bolaligimizdan qolgan og‘riqli asoratlar ham davolana boradi. Har bir oyat menga sabr qilishni, shukrona aytishni va omonatga sodiq qolishni o‘rgatadi.",
    "categorySlug": "tarbiya-asoslari",
    "ageGroup": "0-2",
    "readingTimeMinutes": 5,
    "tags": [
      "fitrat",
      "ahsani taqvim",
      "xadicha kubro tongar",
      "poklik",
      "onalar"
    ],
    "seoTitle": "Bolaning darajasiga tushilmaydi, aksincha chiqiladi | Farzandly",
    "seoDescription": "Xadicha Kubro Tongar: Bolalar Ahsani taqvim fitratida pok yaratilgan. Ota-onaning bola sofligi darajasiga ko'tarilishi siri.",
    "isPremium": true
  },
  {
    "title": "Fitrat pedagogikasi: Qur’oniy tarbiya asoslari va 3 bosqichli model",
    "slug": "fitrat-pedagogikasi-quroniy-tarbiya-uch-bosqichi",
    "excerpt": "Vahiy nozil bo'lish tartibiga asoslangan tarbiya: Alaq (0-2 yosh kashf etish), Muzammil (2-7 yosh ibrat va hol ilmi), Muddassir (7-14 yosh nasihat).",
    "content": "Qur’on — devordagi bezak emas, balki tirik hayot va tarbiya dasturidir. Inson suv, oziq-ovqat va havoga qanchalik muhtoj bo‘lsa, to‘g‘ri ota-onalik burchini ado etishda ham Qur’onga shunchalik muhtoj. Insonni yaratgan Zot uning ruhiyati, ehtiyoji va tarbiyasini hammadan yaxshi biladi («Yaratgan zot o‘zi bilmasmi?» — Mulk surasi, 14-oyat).\n\n1. “Bismilloh” — yaxshi ota-onalikning boshlanishi\nTarbiyani «men qilyapman, o‘zim o‘stirdim» deb bilish — kibr ildizidir. Asl tarbiyachi — Robbil a’lamin. Ota-onaning vazifasi esa faqat sababchi va omonatdor bo‘lishdir. Bola o‘zidan emas, Allohdan ekanini e’tirof etgan ota-ona har bir muammoda o‘zini yeb bitirmaydi, sababini qilib, natijani Parvardigorga havola etadi.\n\n2. Har bir bola — alohida fitrat kitobi\nBolani xamirdek istalgan shaklga solish mumkin degan qarash xatodir. Har bir go‘dak o‘ziga xos ilohiy dastur bilan dunyoga keladi. «Katta bo‘lsang, kim bo‘lasan?» emas, «Sen aslida kimsan?» deb savol berish kerak.\nIchida Fotih shijoati (hazrati Umar tabiati) bor boladan Yunus muloyimligini (hazrati Usmon tabiati) kutish olma daraxtidan uzum kutish bilan barobardir.\n\n3. Tarbiyaning Qur’oniy uch bosqichi\nVahiyning nozil bo‘lish tartibi tarbiyaning uch bosqichli modelini ko‘rsatadi:\n• 1-bosqich: O‘qish va kashf etish (0 – 2 yosh) — «O‘qi» (Alaq surasi). Bolani majburlash emas, uning fitratini sinchiklab kuzatish davri.\n• 2-bosqich: Amal va namuna (2 – 7 yosh) — «Turgin va ibodat qil» (Muzammil surasi). Bola bu davrda faqat ko‘rganiga taqlid qiladi. So‘z bilan emas, shaxsiy namuna («hol ilmi») orqali tarbiyalanadi.\n• 3-bosqich: Nasihat va yetkazish (7 – 14 yosh) — «Tur va ogohlantir» (Muddassir surasi). Bolada ma’naviy savollar uyg‘onadi; oldingi bosqichlarda o‘ziga ibrat bo‘lgan ota-onaning nasihatini qabul qiladi.\n\n«Qol ilmi» (so‘z) emas, «Hol ilmi» (amal) hal qiladi. O‘zi televizordan ko‘z uzmaydigan ota-ona bolaga kitob o‘qitolmaydi («Nima uchun o‘zingiz qilmagan narsani gapirasiz?» — Sof surasi, 2-oyat).",
    "categorySlug": "tarbiya-asoslari",
    "ageGroup": "0-2",
    "readingTimeMinutes": 7,
    "tags": [
      "fitrat pedagogikasi",
      "quroniy tarbiya",
      "uch bosqich",
      "hol ilmi",
      "tarbiya usullari"
    ],
    "seoTitle": "Fitrat pedagogikasi: Qur’oniy tarbiya asoslari va 3 bosqich | Farzandly",
    "seoDescription": "Xadicha Kubro Tongar: Vahiy tartibiga asoslangan Alaq, Muzammil va Muddassir bosqichlari hamda Hol ilmi mohiyati.",
    "isPremium": true
  },
  {
    "title": "G‘azab otiga minganda: Ota-onalar uchun jahlni bosishning 4 qadami",
    "slug": "ota-onadagi-gazabni-jilovlashning-4-qadami",
    "excerpt": "Hazrati Ali ibrati, Luqmon surasi 19-oyatidagi ovoz me'yori, oshiqlar masali hamda jahlni jilovlashning amaliy 4 qadami.",
    "content": "G‘azab aql va vijdonni o‘chiradi, insonni tuzatib bo‘lmas xatolarga boshlaydi. Farzand tarbiyasida ota-ona jahl ustida bolaning irodasini sindirib qo'yishi juda oson.\n\nHazrati Ali (r.a.) ibrati: Dushmanga qilich ko‘targanda yuziga tupurilgani uchun uni qo‘yib yuborganlar — chunki unga nafs aralashgan edi. Ota-ona ham jazolashdan oldin o‘ziga savol berishi kerak: «Men hozir Alloh roziligi uchun jazolayapmanmi yoki nafsim, alamim va asabiyligim uchunmi?»\n\nG‘azabni bosishning 4 qadami:\n1. To‘xtash: Darhol javob qaytarmang, bolani boshqa xonaga chiqarib, o‘zingizga nafas rostlash uchun vaqt bering.\n2. Ko‘zguga qarash: O‘zingizning qizarib, tomirlari bo‘rtgan qo‘rqinchli yuz ifodangizni ko‘rish orqali hushyor torting.\n3. Reallikka qaytish: Qulay to‘kilgan gilam vaqt o‘tib yuviladi, lekin bolaning singan qalbi yillar davomida tuzalmasligini anglang.\n4. Muqobil yechim topish: Baqirish o‘rniga aniq tushuntirish, o‘yin yoki hazil orqali vaziyatni yumshating («Chumolilarni mehmon qilmoqchi bo‘ldingmi?»).\n\nHurmat va ovoz me’yori: Luqmon surasi 19-oyat: «Yurishingda me’yorni tanla va ovozingni pasaytir, chunki ovozlarning eng yoqimsizi eshakning ovozidir».\nDonishmand va oshiqlar masali shuni o'rgatadi: insonlar bir-biriga g'azablansa, qalblari uzoqlashadi va bir-biriga ovozini yetkazish uchun baqirishga majbur bo'ladi. Mehr kuchaysa, sokin gapiriladi. Baqirish ota-ona va bola qalbi orasidagi masofani uzaytiradi.",
    "categorySlug": "bola-ruhiyati",
    "ageGroup": "3-5",
    "readingTimeMinutes": 6,
    "tags": [
      "gazabni yengish",
      "sabr",
      "hazrati ali",
      "luqmon surasi",
      "bola ruhiyati"
    ],
    "seoTitle": "G‘azab otiga minganda: Jahlni bosishning 4 qadami | Farzandly",
    "seoDescription": "Farzand tarbiyasida ota-onaning g'azabini jilovlashning 4 amaliy qadami va ovoz me'yori madaniyati.",
    "isPremium": true
  },
  {
    "title": "Aziz Rahimov bilan suhbat: Ta’lim va tarbiyaning farqi hamda muhandislik kelajagi",
    "slug": "aziz-rahimov-talim-va-tarbiya-suhbati",
    "excerpt": "Rahimov School asoschisi bilan 'Dilkash' suhbati: nima uchun ta'limda 'nega' savoli zarur, Brain Rot xavfi, Kumon uslubi va 4 turdagi sarmoya.",
    "content": "«Dilkash» ko‘rsatuvida Rahimov School asoschisi Aziz Rahimov bilan ta’lim va tarbiya mavzusida bo'lib o'tgan suhbatning eng muhim xulosalari:\n\n1. Ta’lim va tarbiyaning farqi: “Nega?” savoli\nTarbiyada “nega?”ga o‘rin yo‘q: Tarbiya — ota-onadan, ajdodlardan va milliy qadriyatlardan so‘zsiz, ko‘rib o‘rganiladigan odatlar yig‘indisi (kattani hurmat qilish, fidoiy bo‘lish, salom berish).\nTa’lim esa “nega?”siz yashamaydi: Agar o‘quvchiga o‘rganayotgan narsasi hayotda nima uchun kerakligi (affordance tamoyili) tushuntirilmasa, u bilim esda qolmaydi. Odam o‘z ehtiyojiga xizmat qiladigan ma’lumotnigina qabul qiladi.\n\n2. Tarbiyada rag‘bat va ibrat usuli\nMajburlash emas, havas uyg‘otish: Salomsiz bolani jazolashdan ko‘ra, to‘g‘ri harakat qilganlarni rag‘batlantirish samaraliroq. Maktabda kitob o‘qish majburiyat emas, obro‘-e’tibor (status) belgisiga aylantirilgan (MacBook, sayohatlar bilan rag‘batlantiriladi). Natijada birinchi yili 35% o‘quvchi kitob o‘qigan bo‘lsa, keyingi yili 55%ga yetdi.\n\n3. Nega aynan muhandislik?\n44 nafar bitiruvchidan 18 nafari dunyoning top universitetlariga 100% grant yutgan ($5M+). Oson yo‘nalishlarda (biznes, marketing) raqobat katta. O‘zbekistonga esa dronlar, ko‘priklar, elektr stansiyalar uchun mahalliy muhandislar zarur.\n\n4. Telefon taqiqi va “Brain Rot”\nGadjetlar va qisqa videolar diqqatni o‘g‘irlaydi va miyani toliqtiradi. Silikon vodiysidagi rahbarlarning o‘zi ham farzandlarini ekransiz (Valdorf) maktablarda o‘qitadi. Maktabda 10-sinfgacha telefon taqiqlangan.\n\n5. To‘rt turdagi sarmoya\nSarmoya faqat pul emas:\n1. Moddiy sarmoya (pul, mulk);\n2. Madaniy sarmoya (uy kutubxonasi, o‘qilgan kitoblar, dunyoqarash);\n3. Ijtimoiy sarmoya (muhit, ustozlar, tanishlar);\n4. Ramziy sarmoya (yutuqlar, obro‘).\nModdiy sarmoya qolgan uchtasisiz havoga uchadi. Qolgan uchtasi bor insonga moddiy sarmoya o‘zi keladi.",
    "categorySlug": "soglom-turmush",
    "ageGroup": "10-13",
    "readingTimeMinutes": 8,
    "tags": [
      "aziz rahimov",
      "rahimov school",
      "talim va tarbiya",
      "muhandislik",
      "brain rot",
      "sarmoya"
    ],
    "seoTitle": "Aziz Rahimov: Ta’lim va tarbiya suhbati | Farzandly",
    "seoDescription": "Rahimov School asoschisi Aziz Rahimov: Ta'lim va tarbiya farqi, kitobxonlik statusi, telefon taqiqi va 4 sarmoya.",
    "isPremium": true
  },
  {
    "title": "Klip tafakkur domidan kitobxonlik sari: Bolalar xonasidagi 3 ta deraza",
    "slug": "bolalarda-klip-tafakkur-va-30-jildlik-biografik-toplam",
    "excerpt": "Ekranga bog'lanish va klip tafakkur xavfi, 30 buyuk mutafakkir biografiyasi, Sharq va G'arb daholari hamda oltin yosh (7-12) mutolaasi.",
    "content": "1. Bola tafakkurida kitob, o‘yinchoq va ekranning farqi\nO‘yinchoq boladagi mavjud bo‘shliqni to‘ldiradi, multfilm esa vaqtni band qiladi. Ekran va o‘yinchoqlar zehnni passiv iste’molchiga aylantiradi.\nKitob esa bolaning zehnini o‘zidan ajratib, keng dunyoga bog‘laydi; ilgari mavjud bo‘lmagan yangi tafakkur maydonini ochadi.\nKlip tafakkur xavfi: Kuniga ekranga tikilib, 1–3 daqiqalik qisqa videolarga o‘rgangan zehn keyinchalik 10 sahifali matn yoki hikoyani o‘qishga toqat qilolmaydi.\n\n2. “Bolalar xonasidagi 3 ta deraza”: 30 jildlik biografik to‘plam\nTo‘plam jami 30 ta kitobdan iborat bo‘lib, 3 ta turkumga bo‘lingan:\n• 1-turkum: Sharq mutafakkirlari (Ibn Sino, Forobiy, Xorazmiy, Mirzo Ulug‘bek, Ali Qushchi, Ahmad Farg‘oniy, Al-Jazariy, Ibn Xaldun, Alisher Navoiy).\n• 2-turkum: G‘arb ilmining asoschilari va ixtirochilar (Arximed, Nyuton, Galiley, Albert Eynshteyn, Tomas Edison, Nikola Tesla, Nikolay Kopernik, Lui Paster, Aleksandr Bell).\n• 3-turkum: Zamon qahramonlari (Leonardo da Vinchi, Muhammad Ali, Zaha Hadid, Aziz Sanjar, Hayao Miyazaki, Stiv Jobs, Solijon Sharipov).\n\n3. To‘plamning tarbiyaviy ahamiyati\nOrzular miqyosini kengaytirish: Bola kimga havas qilsa, shunga qarab shakllanadi. Uning atrofidagi namunalar faqat bloger bilan cheklanib qolsa, qiziqishlari ham tor bo‘ladi. 30 ta har xil soha daho va qahramonlarini tanigan bola mayda orzular qilishdan yiroq bo‘ladi.\nOltin yosh davri (7–12 yosh): Bu davrda bola ichki dunyosini quradi. Bolaga eng yaxshi sovg‘a — ota-onaning ovozi orqali yetkazilgan ertak va hikoyadir. Uyqudan oldin 15–20 daqiqa birga o‘qish ota-ona va bola o‘rtasidagi munosabatni mustahkamlaydi.",
    "categorySlug": "odob-axloq",
    "ageGroup": "6-9",
    "readingTimeMinutes": 6,
    "tags": [
      "kitobxonlik",
      "klip tafakkur",
      "30 mutafakkir",
      "ibn sino",
      "al-jazariy",
      "bolalar kitoblari"
    ],
    "seoTitle": "Klip tafakkurdan kitobxonlik sari: 30 buyuk mutafakkir | Farzandly",
    "seoDescription": "Bolalarda klip tafakkurni yengish, bolalar xonasidagi 3 deraza va 30 alloma orqali orzularni kengaytirish.",
    "isPremium": true
  },
  {
    "title": "Jasur va mustaqil farzand voyaga yetkazish: Zamonaviy xatolar va 4 yechim",
    "slug": "jasur-va-mustaqil-farzand-tarbiyasi-muammolar-yechimlar",
    "excerpt": "Jismoniy nazorat bor, virtual nazorat yo'q. Inkubator yondashuvi zararlari, o'smirlik inqirozi va 4 amaliy yechim.",
    "content": "Jasur va mustaqil farzand voyaga yetkazish uchun 5 muhim poydevor zarur:\n1. Shaxsiy namuna va halol luqma: Oiladagi muhit birinchi darajali poydevordir.\n2. Qo‘rquv va hadikdan asrash: Bolani uydirmalar yoki tahdidlar bilan qo‘rqitmaslik, faqat Yaratgandan qo‘rqish va adolatda dadil bo‘lish tuyg‘usini singdirish.\n3. Mas'uliyat yuklash: Yoshlikdan yoshiga mos vazifalar berib, o‘ziga ishonchini oshirish.\n4. Mardlik sifatlari: Sahobalar va ajdodlar hayotidan ibratli qissalarni o‘rgatish.\n5. Hissiy tayanch va hurmat: Fikrini tinglash, irodasini sindirmaslik.\n\nAsosiy zamonaviy muammo va xatolar:\n• Jismoniy nazorat bor, virtual nazorat yo‘q: Bola qayerda ekani aniq, ammo virtual olamda nimalar ko‘rayotgani noma’lum. Venn diagrammasida ota-ona va bola dunyosi kesishmay qolgan.\n• “Inkubator” yondashuvi: Bolani faqat taqiqlar bilan bir qolipga solish uning tashabbusini o‘ldiradi va birovning ko‘ziga qarab yashaydigan tobe shaxsga aylantiradi.\n• O‘smirlik — kutilmagan o‘zgarish emas: 10–12 yoshgacha singdirilgan tarbiya 12–15 yoshda kuch to‘plab yuzaga chiqadi.\n\nKatta bo‘lib qolgan o‘smirlar bilan ishlashning 4 chorasi:\n1. O‘rtadagi sun’iy devorni olib tashlash: Buyruq ohangida emas, do‘stona va ochiq muloqot qilish.\n2. Xatolarning ildizini o‘zidan qidirish: «Bunga o‘zim sababchi emasmanmi?» deb o‘ylash.\n3. Salohiyatli ustozga yo‘naltirish: Ota-ona nufuzini yo‘qotgan bo‘lsa, bolani shaxsiyati to‘laqonli ustozga topshirish.\n4. Taqiq — eng oxirgi chora: Asosiy e’tiborni jazolashga emas, bolaning ichki bo‘shlig‘ini to‘ldirishga qaratish.",
    "categorySlug": "bola-ruhiyati",
    "ageGroup": "14+",
    "readingTimeMinutes": 7,
    "tags": [
      "jasur farzand",
      "mustaqillik",
      "osmirlik",
      "halol luqma",
      "venn diagrammasi"
    ],
    "seoTitle": "Jasur va mustaqil farzand voyaga yetkazish | Farzandly",
    "seoDescription": "Zamonaviy ota-onalik xatolari, o'smirlik inqirozi, inkubator yondashuvi va 4 amaliy yechim.",
    "isPremium": true
  },
  {
    "title": "Taomlanish me’yori va nafs tarbiyasi: Yurak qotishidan asrash sirlari",
    "slug": "taomlanish-meyori-va-nafs-tarbiyasi",
    "excerpt": "1/3 oshqozon qoidasi, 'Zavq maxluqi'ni o'stirmaslik, multfilm ostida ovqatlantirish zarari va sabr tarbiyasi.",
    "content": "Jamiyatdagi noto‘g‘ri qarash: Bolaning semiz bo‘lishi — uning sog‘lomligi va yaxshi tarbiyaning belgisi degan yanglish stereotip mavjud.\n\nKam yeyish — qalb hayoti:\nHadisi sharif: «Qorinlaringizni haddan ortiq to‘ydirib, qalblaringizni o‘ldirmangiz. Zotan, ekin ko‘p suvdan qanday nobud bo‘lsa, qalb ham ko‘p taomdan shunday quriydi».\n\nOshqozon va yurak muvozanati: Oshqozon haddan tashqari to‘lsa, qalb nuri so‘nadi; me’yorida bo‘sh tursa, tafakkur va idrok kuchayadi.\nOshqozonning 1/3 qoidasi: Taom uchun 1/3, suv uchun 1/3 va nafas uchun 1/3 qism bo‘sh qolishi lozim.\n\nMajburlab ovqatlantirishning zarari:\nChaqaloqlikdan boshlab bolani televizor yoki telefon qo‘yib, aldab yoki majburlab tiqishtirish uning tabiiy to‘yish/ochlik reflekslarini buzadi. Bola hissiyotlarini taom bilan bosishga o‘rganadi.\n\n«Zavq maxluqi»ni o‘stirmaslik:\nBola xarxasha qilishi bilan har bir xohishini (shirinlik, telefon) darhol muhayyo qilish undagi nafsni kattalashtiradi. Vaqt o‘tishi bilan bunday bola hech narsadan qoniqmaydigan bo‘lib qoladi.\nYechim — sabr mashqi: shirinlikni ovqatdan keyinga qoldirish, do‘konga kirishdan oldin bitta narsa olish qoidasini kelishish va ro‘za maktabi orqali xohishlarni jilovlashni o‘rgatish.",
    "categorySlug": "soglom-turmush",
    "ageGroup": "3-5",
    "readingTimeMinutes": 5,
    "tags": [
      "taomlanish meyori",
      "nafs tarbiyasi",
      "1/3 qoidasi",
      "sabr",
      "soglom bola"
    ],
    "seoTitle": "Taomlanish me’yori va nafs tarbiyasi | Farzandly",
    "seoDescription": "Bolalarda taomlanish me'yori, 1/3 qoidasi, multfilm ostida ovqatlantirish zarari va nafs tarbiyasi.",
    "isPremium": true
  },
  {
    "title": "Imom al-G‘azzoliy: «Ey farzand» (Nasihatnoma)",
    "slug": "imom-al-gazzoliy-ey-farzand-nasihatnoma",
    "excerpt": "Hujjatul Islom Imom al-G‘azzoliyning yetuk shogirdiga yozgan umrboqiy vasiyatnomasi: ilm va amal uyg'unligi, ibratli hikoyalar va 8 ta bosh tavsiya.",
    "content": "1. Risolaning yozilish sababi\nImom G‘azzoliyning yetuk shogirdlaridan biri uzoq yillar tahsil olib, turli shariat va aql ilmlarini jamlagach, o‘ziga savol beradi: «Qaysi ilm oxiratda, qabrda menga hamroh bo‘ladi va qaysi biri naf bermaydigan ilmdir?». Shogird ustozining barcha asarlaridan eng zarur, umr bo‘yi amal qilinadigan xulosalarni bir varaqqa jamlab berishini o‘tinib xat yozadi. Ushbu risola ana shu talabga javob tariqasida bitilgan.\n\n2. Ilm va amalning ajralmasligi: Amalsiz ilm — falokat\n• Quruq ilm najot bermaydi: O‘rganganiga amal qilmagan tolibi ilm uchun ilmi qiyomatda o‘ziga qarshi hujjat bo‘ladi («Qiyomatda eng qattiq azoblanuvchi kimsa — Alloh ilmidan manfaatlantirmagan kishidir»).\n• Qurollangan jangchi misoli: Sahroda sher hamla qilgan bahodirning yonida o‘nta qilichi bo‘lsa-yu, ularni qinidan chiqarmasa, qilichlar uni yirtqichdan asray olmaydi. Xuddi shuningdek, yuz minglab ilmiy masalani bilgan odam amal qilmasa, ilmi uni jahannamdan qutqarolmaydi.\n• Isitma va dori misoli: Isitmasi chiqqan odamga dorining nomi yoki idishini ushlab turish emas, uni ichishgina shifo beradi. Ming ko‘za sharobni ushlab turgan bilan ichilmasa, mast bo‘linmaganidek, mingta kitob o‘qilgani bilan amal qilinmasa, najot topilmaydi.\n• Jannat amalsiz orzu qilinmaydi: Banda jannatga Allohning fazli bilan kiradi, biroq unga toat va amali orqali tayyor bo‘ladi. Hasan Basriy: «Amalsiz jannatni istash — gunohlardan biridir», — deganlar.\n\n3. Ilm yo‘lidagi niyat va ixlos\n• Nafs uchun ilm o‘rganish halokati: Agar ilm olishdan maqsad mol-dunyo to‘plash, mansabga erishish yoki tengdoshlarga maqtanish bo‘lsa, u kimsaning holiga voy.\n• Haqiqiy niyat: Ilm shariatni tiriltirish, axloqni go‘zallashtirish va yomonlikka buyuruvchi nafsni sindirish uchun o‘rganilishi shart.\n• Junayd Bag‘dodiy tushi: Vafotlaridan so‘ng ko‘rganlarida u zot: «Iboralar ketdi, ishoralar yo‘q bo‘ldi. Bizga faqat yarim tunda o‘qigan ikki rakat namozimizgina naf berdi», — deganlar.\n\n4. Vaqt qadri va tungi bedorlik (Qiyomul layl)\n• Allohning yuz o‘girishi alomati: Bandaning o‘ziga keraksiz (befoyda) narsalar bilan mashg‘ul bo‘lishi — Allohning undan yuz o‘girganiga belgidir. Kishi umrining bir soatini behuda sarflasa, unga uzoq hasrat chekadi.\n• Sahar vaqti xazinasi: Tunda ko‘p uxlash qiyomat kuni faqirlik keltiradi. Saharda qilingan istig‘for, tilovat va namoz Arshga yetib boradi.\n• Luqmon Hakim vasiyati: «Ey o‘g‘lim, zinhor xo‘roz sendan ziyrakroq bo‘lmasin. U saharlarda qichqirganda, sen uxlab yotgan bo‘lma!»\n\n5. O‘rnak bo‘luvchi ibratli hikoyalar\nHukmdor Shibliy tanlagan hadis: Shibliy 400 ustoz ko‘rib, 4 000 hadis o‘rgangan, biroq barcha ilmlarni o‘zida jamlagan quyidagi bitta hadisni hayotiy shior qilib olgan:\n— Dunyoying uchun — unda qolishing miqdoricha amal qil.\n— Oxirating uchun — unda boqiy qolishing miqdoricha amal qil.\n— Alloh uchun — U Zotga bo‘lgan ehtiyojing qadaricha toat qil.\n— Do‘zax uchun — uning azobiga bo‘lgan sabring qadaricha gunoh qil.\n\nXotam al-Asomning 30 yillik suhbatdan olgan 8 xulosasi (To‘rt muqaddas kitob mag‘zi):\n1. Haqiqiy mahbub: Barcha do‘stlar qabrgacha hamroh bo‘ladi; qabrga birga kiradigan yagona mahbub — solih amallardir.\n2. Nafsga xilof qilish: Nafsni hoyu havasdan tiygandagina maskan jannat bo‘ladi.\n3. Boylikni zaxira qilish: Dunyoda yig‘ilgan mol yo‘qoladi, Alloh yo‘lida berilgan ehsongina boqiy qoladi.\n4. Izzat taqvodadir: Odamlar obro‘ni nasl-nasab yoki mol-dunyoda deb biladi, haqiqiy izzat esa taqvodadir.\n5. Hasadni tark etish: Rizq va maqomni Alloh taqsimlaganini anglab, hech kimga hasad qilmaslik.\n6. Yagona dushman — shayton: Odamlarga adovat qilmay, faqat ochiq dushman bo‘lgan shaytonga qarshi kurashish.\n7. Rizq kafolati: Har bir jonivorning rizqi Alloh zimmasidadir; halol kasb qilib, ta’mani bandalardan uzish.\n8. Tavakkul: Molga, hunarga yoki insonlarga emas, faqat Allohga suyanish.\n\n6. Tasavvuf, soliklik va murabbiy ustoz shartlari\n• Shariat va tariqat birligi: Shariatsiz tasavvuf — zindiqlikdir. Tasavvuf xushdan ketish yoki oh-voh chekish emas, nafsni riyozat bilan tarbiyalashdir.\n• Tasavvufning ikki asosi:\n  1. Istiqomat (Alloh buyrug‘ida sobit turish);\n  2. Xalqdan tinch bo‘lish (shariat buzilmagan o‘rinda o‘z xohishini boshqalarga majburlamaslik, ularga chiroyli muomala qilish).\n• Komil murshid belgilari: Dunyo va mansabga hirs qo‘ymagan, silsilasi Rasulullohga (s.a.v.) borib ulanadigan, kam yeb, kam uxlaydigan, sabr, shukr, hilm va viqor sohibi bo‘lgan olim.\n• Shogird odobi: Ustoz bilan tortishmaslik, unga e’tiroz bildirmaslik, uning ko‘rsatmalarini zohiran va botinan birdek qabul qilish.\n\n7. Imom G‘azzoliyning 8 ta bosh tavsiyasi (4 ta tark qilinadigan, 4 ta qilinadigan amal)\nTark qilinadigan to‘rt narsa:\n1. Munozara va bahslar: Manfaati kam, zarari ko‘p (kibr, gina, riyo manbai). Faqat haqni yuzaga chiqarish niyatida bo‘lsa va haq boshqaning tilidan chiqsa ham xursand bo‘lish sharti bilan joiz.\n2. Ahmoq va hasadgo‘y bilan tortishish (Johillik turlari):\n  — Hasadgo‘y: Javob bergan sari hasadi ortadi, sukut saqlash ma’qul.\n  — Ahmoq: O‘lik tirilsa ham, ahmoq tuzalmaydi (Iso a.s.); unga ham javob — sukut.\n  — Fahmi past: Haqiqatlarni ko‘tarolmaydi; odamlarga aqli darajasida gapirish lozim.\n  — Haqni izlovchi tolib: Faqat shunday oqil kishining savoliga javob berish lozim va vojibdir.\n3. Quruq, sun’iy va hissiz va’zxonlik: O‘zi amal qilmay turib pand-nasihat qilmaslik. Qofiyali, takallufli balandparvoz so‘zlar bilan olomonni jazavaga solish va maqtov ilinjida bo‘lishdan qochish.\n4. Zolimlarning hadyasi va dunyoviy ta’ma: «Pulingizni olib faqirlarga tarqataman» degan bahona bilan nopok kimsalarning molini olmaslik (bu shaytoniy aldovdir).\n\nAmal qilinadigan to‘rt narsa:\n1. Alloh bilan muomala: O‘z xizmatingizdagi quldan qanday itoat va sadoqat kutgan bo‘lsangiz, Xojangiz bo‘lmish Allohga ham shunday toatda bo‘lish.\n2. Bandalarga munosabat: O‘zingizga qanday muomala qilinishini istasangiz, odamlarga ham shuni ravo ko‘rish.\n3. Qalbni isloh qiluvchi ilmlar bilan mashg‘ul bo‘lish: Bir haftalik umri qolganini bilgan odam bahs-munozara ilmlari bilan emas, qalbini kibr, riyo va g‘aflatdan tozalash bilan band bo‘ladi. Har bir kunni o‘limga tayyorgarlik deb bilish.\n4. Kifoya qilgudek rizqqa qanoat: Dunyo boyligini bir yildan (yoki yaqin ahli bo‘lsa, bir kundan) ortiq g‘amlamaslik, qanoatli bo‘lish.\n\n8. Xulosa va duo\nAsar oxirida Imom G‘azzoliy shogirdiga barcha amallarda ixlosli bo‘lishni vasiyat qilib, uning haqqiga hamda barcha mo‘minlar uchun mukammal ofiyat, taqvo, go‘zal xotima, qalb pokligi va jahannamdan najot so‘rab qilingan jamlovchi duo bilan yakunlaydi.",
    "categorySlug": "tarbiya-asoslari",
    "ageGroup": "10-13",
    "readingTimeMinutes": 10,
    "tags": [
      "imom gazzoliy",
      "ey farzand",
      "nasihatnoma",
      "ilm va amal",
      "ixlos",
      "tarbiya asoslari"
    ],
    "seoTitle": "Imom al-G‘azzoliy: «Ey farzand» (Nasihatnoma) | Farzandly",
    "seoDescription": "Hujjatul Islom Imom al-G‘azzoliyning yetuk shogirdiga yozgan umrboqiy vasiyatnomasi: ilm va amal, ibratli hikoyalar hamda 8 ta bosh tavsiya.",
    "isPremium": true,
    "isPublished": true,
    "publishedAt": "2026-09-21T12:00:00.000Z"
  }
];
