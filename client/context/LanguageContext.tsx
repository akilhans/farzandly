'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'uz' | 'en' | 'ru';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // Nav
    'nav.home': 'Asosiy',
    'nav.dashboard': 'O‘quv yo‘li',
    'nav.courses': 'Kurslar',
    'nav.articles': 'Maqolalar',
    'nav.premium': 'Premium',
    'nav.login': 'Kirish',
    'nav.logout': 'Chiqish',
    'nav.profile': 'Profil',
    'nav.academy': 'Ota-ona akademiyasi',

    // Stats
    'stats.streak': 'Kunlik odat',
    'stats.xp': 'To‘plangan XP',

    // Lesson player
    'lesson.exit': 'Chiqish',
    'lesson.back': 'Ortga',
    'lesson.next': 'Keyingisi',
    'lesson.check': 'Tekshirish',
    'lesson.correct': 'To‘g‘ri javob! 🎉',
    'lesson.incorrect': 'Noto‘g‘ri, yana bir bor o‘ylab ko‘ring',
    'lesson.retry': 'Qayta urinish',
    'lesson.finish': 'Darsni yakunlash',
    'lesson.completed_title': 'Mashalloh! Dars yakunlandi!',
    'lesson.completed_desc': 'Siz ushbu darsni muvaffaqiyatli o‘rganib, yangi tarbiyaviy tajriba va XP ballarga ega bo‘ldingiz.',
    'lesson.earned_xp': 'To‘plangan XP ball',
    'lesson.continue_learning': 'O‘quv yo‘liga qaytish',
    'lesson.video_btn': 'Videoni ko‘rish',
    'lesson.quote_source': 'Manba',
    'lesson.question': 'Savol',
    'lesson.select_answer': 'To‘g‘ri javobni tanlang:',

    // Courses
    'courses.badge': 'Strukturali dasturlar',
    'courses.title': 'Islomda farzand tarbiyasi kurslari',
    'courses.subtitle': '1-55 darslar bo‘yicha tartiblangan, bolaning yoshiga moslashtirilgan interaktiv darslar majmuasi.',
    'courses.all_ages': 'Barcha yoshlar',
    'courses.free_badge': 'BEPUL ASOSIY KURS',
    'courses.premium_badge': 'PREMIUM KONTENT',
    'courses.lessons_count': 'ta dars',
    'courses.duration': 'daqiqa',
    'courses.start_course': 'Kursni boshlash',
    'courses.view_course': 'Kursni ko‘rish',

    // Dashboard
    'dashboard.welcome': 'Assalomu alaykum',
    'dashboard.default_user': 'Ota-ona',
    'dashboard.greeting_sub': 'Bugun tarbiya yo‘lingizda davom etamiz.',
    'dashboard.streak': 'Kunlik streak',
    'dashboard.xp_earned': 'XP to‘plandi',
    'dashboard.lessons_passed': 'Dars o‘tildi',
    'dashboard.today_main': 'BUGUNGI ASOSIY DARS',
    'dashboard.minutes': 'DAQIQA',
    'dashboard.start_today': 'Bugungi darsni boshlash',
    'dashboard.map_title': 'Sizning o‘quv xaritangiz',
    'dashboard.map_subtitle': 'Har bir dars tugagach keyingisi ochiladi. Qadam-baqadam o‘rganing.',
    'dashboard.start_here': 'BU YERDAN BOSHLANG!',
    'dashboard.xp_reward': 'XP MUKOFOT',
    'dashboard.lesson_outline': 'Dars mundarijasi:',
    'dashboard.step_problem': 'Kundalik hayotiy muammo',
    'dashboard.step_psychology': 'Psixologik tushuntirish',
    'dashboard.step_wisdom': 'Hadisi sharif va Islomiy hikmat',
    'dashboard.step_practice': 'Bugungi amaliy vazifa',
    'dashboard.step_quiz': 'Mini-test',
    'dashboard.close': 'Yopish',
    'dashboard.start_lesson': 'Darsni boshlash',
    'dashboard.all_lessons': 'Barcha 55 dars',
    'dashboard.age_label': 'yosh',
    'dashboard.continue_lesson': 'Darsni davom ettirish',
    'dashboard.learning_path': 'Farzand tarbiyasi o‘quv yo‘li',
    'dashboard.completed': 'Tamomlandi',
    'dashboard.locked': 'Qulflangan',
    'dashboard.start': 'Boshlash',

    // Course Detail
    'course_detail.all_courses': 'Kurslar',
    'course_detail.home': 'Asosiy',
    'course_detail.total': 'Jami:',
    'course_detail.start_from_1': '1-darsdan boshlash',
    'course_detail.syllabus_title': 'Kurs darslari ro‘yxati',
    'course_detail.lesson_btn': 'Dars',

    // Footer
    'footer.desc': 'Zamonaviy ilm-fan va islomiy qadriyatlar asosida bolangiz bilan mehrli, ishonchli va mustahkam rishta o‘rnating.',
    'footer.quick_links': 'Tezkor havolalar',
    'footer.rights': 'Barcha huquqlar himoyalangan.',
    'footer.disclaimer': 'Ushbu platforma Abdulloh Domlaning «Islomda farzand tarbiyasi» 1-55 darslari asosida tayyorlangan.',
  },
  en: {
    // Nav
    'nav.home': 'Home',
    'nav.dashboard': 'Learning Path',
    'nav.courses': 'Courses',
    'nav.articles': 'Articles',
    'nav.premium': 'Premium',
    'nav.login': 'Sign In',
    'nav.logout': 'Sign Out',
    'nav.profile': 'Profile',
    'nav.academy': 'Parenting Academy',

    // Stats
    'stats.streak': 'Day streak',
    'stats.xp': 'Total XP',

    // Lesson player
    'lesson.exit': 'Exit',
    'lesson.back': 'Back',
    'lesson.next': 'Next',
    'lesson.check': 'Check Answer',
    'lesson.correct': 'Correct Answer! 🎉',
    'lesson.incorrect': 'Incorrect, please think again',
    'lesson.retry': 'Try Again',
    'lesson.finish': 'Finish Lesson',
    'lesson.completed_title': 'MashaAllah! Lesson Completed!',
    'lesson.completed_desc': 'You have successfully mastered this lesson and earned new parenting insights and XP points.',
    'lesson.earned_xp': 'Earned XP',
    'lesson.continue_learning': 'Return to Learning Path',
    'lesson.video_btn': 'Watch Video',
    'lesson.quote_source': 'Source',
    'lesson.question': 'Question',
    'lesson.select_answer': 'Select the correct option:',

    // Courses
    'courses.badge': 'Structured Curriculum',
    'courses.title': 'Islamic Child Rearing Courses',
    'courses.subtitle': 'Structured interactive micro-courses covering lessons 1–55 tailored to your child\'s age.',
    'courses.all_ages': 'All Ages',
    'courses.free_badge': 'FREE CORE COURSE',
    'courses.premium_badge': 'PREMIUM CONTENT',
    'courses.lessons_count': 'lessons',
    'courses.duration': 'mins',
    'courses.start_course': 'Start Course',
    'courses.view_course': 'View Course',

    // Dashboard
    'dashboard.welcome': 'Assalamu Alaikum',
    'dashboard.default_user': 'Dear Parent',
    'dashboard.greeting_sub': 'Let us continue your parenting journey today.',
    'dashboard.streak': 'Daily streak',
    'dashboard.xp_earned': 'XP earned',
    'dashboard.lessons_passed': 'Lessons completed',
    'dashboard.today_main': 'TODAY\'S MAIN LESSON',
    'dashboard.minutes': 'MINUTES',
    'dashboard.start_today': 'Start Today\'s Lesson',
    'dashboard.map_title': 'Your Learning Roadmap',
    'dashboard.map_subtitle': 'Each completed lesson unlocks the next. Learn step by step.',
    'dashboard.start_here': 'START HERE!',
    'dashboard.xp_reward': 'XP REWARD',
    'dashboard.lesson_outline': 'Lesson Outline:',
    'dashboard.step_problem': 'Everyday real-life scenario',
    'dashboard.step_psychology': 'Psychological & developmental insights',
    'dashboard.step_wisdom': 'Hadith & Islamic wisdom',
    'dashboard.step_practice': 'Actionable parent practice',
    'dashboard.step_quiz': 'Interactive quiz',
    'dashboard.close': 'Close',
    'dashboard.start_lesson': 'Start Lesson',
    'dashboard.all_lessons': 'All 55 Lessons',
    'dashboard.age_label': 'years old',
    'dashboard.continue_lesson': 'Continue Lesson',
    'dashboard.learning_path': 'Parenting Learning Roadmap',
    'dashboard.completed': 'Completed',
    'dashboard.locked': 'Locked',
    'dashboard.start': 'Start',

    // Course Detail
    'course_detail.all_courses': 'Courses',
    'course_detail.home': 'Home',
    'course_detail.total': 'Total:',
    'course_detail.start_from_1': 'Start from Lesson 1',
    'course_detail.syllabus_title': 'Course Curriculum',
    'course_detail.lesson_btn': 'Lesson',

    // Footer
    'footer.desc': 'Build a loving, confident, and resilient bond with your child grounded in timeless Islamic values and modern developmental wisdom.',
    'footer.quick_links': 'Quick Links',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'This platform is based on the 1–55 Islamic child rearing lectures by Abdulloh Domla.',
  },
  ru: {
    // Nav
    'nav.home': 'Главная',
    'nav.dashboard': 'Учебный путь',
    'nav.courses': 'Курсы',
    'nav.articles': 'Статьи',
    'nav.premium': 'Премиум',
    'nav.login': 'Войти',
    'nav.logout': 'Выйти',
    'nav.profile': 'Профиль',
    'nav.academy': 'Академия родителей',

    // Stats
    'stats.streak': 'Дней подряд',
    'stats.xp': 'Всего XP',

    // Lesson player
    'lesson.exit': 'Выход',
    'lesson.back': 'Назад',
    'lesson.next': 'Далее',
    'lesson.check': 'Проверить',
    'lesson.correct': 'Правильный ответ! 🎉',
    'lesson.incorrect': 'Неверно, попробуйте еще раз',
    'lesson.retry': 'Повторить',
    'lesson.finish': 'Завершить урок',
    'lesson.completed_title': 'МашаАллах! Урок завершен!',
    'lesson.completed_desc': 'Вы успешно освоили этот урок, получив важные знания по воспитанию и баллы опыта XP.',
    'lesson.earned_xp': 'Заработанные баллы XP',
    'lesson.continue_learning': 'Вернуться к учебному пути',
    'lesson.video_btn': 'Смотреть видео',
    'lesson.quote_source': 'Источник',
    'lesson.question': 'Вопрос',
    'lesson.select_answer': 'Выберите правильный вариант ответа:',

    // Courses
    'courses.badge': 'Структурированная программа',
    'courses.title': 'Курсы воспитания детей в Исламе',
    'courses.subtitle': 'Комплекс интерактивных уроков по темам 1-55, адаптированных под возраст ребенка.',
    'courses.all_ages': 'Все возрасты',
    'courses.free_badge': 'БЕСПЛАТНЫЙ БАЗОВЫЙ КУРС',
    'courses.premium_badge': 'ПРЕМИУМ КОНТЕНТ',
    'courses.lessons_count': 'уроков',
    'courses.duration': 'мин',
    'courses.start_course': 'Начать курс',
    'courses.view_course': 'Открыть курс',

    // Dashboard
    'dashboard.welcome': 'Ассаляму алейкум',
    'dashboard.default_user': 'Родитель',
    'dashboard.greeting_sub': 'Продолжаем ваш путь осознанного воспитания.',
    'dashboard.streak': 'Дней подряд',
    'dashboard.xp_earned': 'XP получено',
    'dashboard.lessons_passed': 'Уроков пройдено',
    'dashboard.today_main': 'ГЛАВНЫЙ УРОК ДНЯ',
    'dashboard.minutes': 'МИНУТ',
    'dashboard.start_today': 'Начать сегодняшний урок',
    'dashboard.map_title': 'Ваша карта обучения',
    'dashboard.map_subtitle': 'Каждый пройденный урок открывает следующий. Учитесь шаг за шагом.',
    'dashboard.start_here': 'НАЧНИТЕ ЗДЕСЬ!',
    'dashboard.xp_reward': 'XP НАГРАДА',
    'dashboard.lesson_outline': 'Содержание урока:',
    'dashboard.step_problem': 'Повседневная жизненная ситуация',
    'dashboard.step_psychology': 'Психологическое объяснение',
    'dashboard.step_wisdom': 'Хадисы и исламская мудрость',
    'dashboard.step_practice': 'Практическое задание для родителей',
    'dashboard.step_quiz': 'Мини-тест',
    'dashboard.close': 'Закрыть',
    'dashboard.start_lesson': 'Начать урок',
    'dashboard.all_lessons': 'Все 55 уроков',
    'dashboard.age_label': 'лет',
    'dashboard.continue_lesson': 'Продолжить урок',
    'dashboard.learning_path': 'Учебный маршрут воспитания',
    'dashboard.completed': 'Завершено',
    'dashboard.locked': 'Заблокировано',
    'dashboard.start': 'Начать',

    // Course Detail
    'course_detail.all_courses': 'Курсы',
    'course_detail.home': 'Главная',
    'course_detail.total': 'Всего:',
    'course_detail.start_from_1': 'Начать с 1-го урока',
    'course_detail.syllabus_title': 'Список уроков курса',
    'course_detail.lesson_btn': 'Урок',

    // Footer
    'footer.desc': 'Постройте доверительные, крепкие и любящие отношения с ребенком на основе исламских ценностей и современной психологии.',
    'footer.quick_links': 'Быстрые ссылки',
    'footer.rights': 'Все права защищены.',
    'footer.disclaimer': 'Платформа создана на основе цикла из 55 уроков по воспитанию детей в Исламе Абдуллоха Домлы.',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'uz',
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('uz');

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('farzandly_lang') as Language;
      if (savedLang && ['uz', 'en', 'ru'].includes(savedLang)) {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore localStorage read errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('farzandly_lang', lang);
      document.cookie = `farzandly_lang=${lang}; path=/; max-age=31536000`;
    } catch {
      // Ignore localStorage write errors
    }
  };

  const t = (key: string, fallback?: string): string => {
    const langDict = translations[language];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to uz
    if (translations.uz[key]) {
      return translations.uz[key];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  return useContext(LanguageContext);
}
