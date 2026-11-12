import fs from 'fs';
import path from 'path';
import { latnToCyrl, deepLatnToCyrl } from './translit.mjs';
import { quizzesBySlug } from './quizzes_data.mjs';

// We import the seeds from client/lib/seedData.ts dynamically
import {
  seedCategories,
  seedAgeGroups,
  seedAchievements,
  seedCourses,
  seedLearningPaths,
  seedLessons,
  seedArticles,
} from '../client/lib/seedData.ts';

console.log('Original lessons count:', seedLessons.length);

// 1. Process seedCategories
const cleanCategories = seedCategories.map((c) => {
  const uz = c.translations?.uz || { name: c.name, description: c.description };
  const kr = c.translations?.kr || deepLatnToCyrl(uz);
  return {
    ...c,
    translations: { uz, kr },
  };
});

// 2. Process seedAgeGroups
const cleanAgeGroups = seedAgeGroups.map((ag) => {
  const uz = ag.translations?.uz || { name: ag.name, description: ag.description };
  const kr = ag.translations?.kr || deepLatnToCyrl(uz);
  return {
    ...ag,
    translations: { uz, kr },
  };
});

// 3. Process seedAchievements
const cleanAchievements = seedAchievements.map((a) => {
  const uz = a.translations?.uz || { title: a.title, description: a.description };
  const kr = a.translations?.kr || deepLatnToCyrl(uz);
  return {
    ...a,
    translations: { uz, kr },
  };
});

// 4. Process seedCourses
const cleanCourses = seedCourses.map((c) => {
  const uz = c.translations?.uz || { title: c.title, description: c.description };
  const kr = c.translations?.kr || deepLatnToCyrl(uz);
  return {
    ...c,
    translations: { uz, kr },
  };
});

// 5. Process seedLearningPaths
const cleanLearningPaths = seedLearningPaths.map((lp) => {
  const uz = lp.translations?.uz || { title: lp.title, description: lp.description };
  const kr = lp.translations?.kr || deepLatnToCyrl(uz);
  return {
    ...lp,
    translations: { uz, kr },
  };
});

// 6. Process seedLessons with Deep Quizzes & 1/3 Answer Balancing
const answerStats = { 0: 0, 1: 0, 2: 0 };

const cleanLessons = seedLessons.map((lesson, idx) => {
  const qData = quizzesBySlug[lesson.slug];
  if (!qData) {
    throw new Error(`Missing quiz data for slug: ${lesson.slug}`);
  }

  // Desired balanced index: idx % 3
  const targetIdx = idx % 3;
  const currentIdx = qData.correctOptionIndex;

  const balancedOptions = [...qData.quizOptions];
  if (currentIdx !== targetIdx) {
    const temp = balancedOptions[targetIdx];
    balancedOptions[targetIdx] = balancedOptions[currentIdx];
    balancedOptions[currentIdx] = temp;
  }

  answerStats[targetIdx]++;

  // Update screens in Latin
  const screensUz = (lesson.screens || []).map((screen) => {
    if (screen.type === 'quiz') {
      return {
        ...screen,
        title: `Dars sinovi: ${lesson.title}`,
        subtitle: 'Hayotiy vaziyatli sinov',
        content: "Farzandingiz bilan yuzaga keladigan amaliy vaziyatni tahlil qiling va eng to'g'ri yechimni toping.",
        quizQuestion: qData.quizQuestion,
        quizOptions: balancedOptions,
        correctOptionIndex: targetIdx,
        quizExplanation: qData.quizExplanation,
      };
    }
    return { ...screen };
  });

  // Generate screens in Cyrillic
  const screensKr = screensUz.map((screen) => {
    if (screen.type === 'quiz') {
      return {
        screenIndex: screen.screenIndex,
        type: 'quiz',
        title: `Дарс синови: ${latnToCyrl(lesson.title)}`,
        subtitle: 'Ҳаётий вазиятли синов',
        content: 'Фарзандингиз билан юзага келадиган амалий вазиятни таҳлил қилинг ва энг тўғри ечимни топинг.',
        quizQuestion: latnToCyrl(qData.quizQuestion),
        quizOptions: balancedOptions.map(latnToCyrl),
        correctOptionIndex: targetIdx,
        quizExplanation: latnToCyrl(qData.quizExplanation),
      };
    }
    return deepLatnToCyrl(screen);
  });

  const uzTranslation = {
    title: lesson.title,
    summary: lesson.summary,
    screens: screensUz,
  };

  const krTranslation = {
    title: latnToCyrl(lesson.title),
    summary: latnToCyrl(lesson.summary),
    screens: screensKr,
  };

  return {
    ...lesson,
    screens: screensUz,
    translations: {
      uz: uzTranslation,
      kr: krTranslation,
    },
  };
});

// 7. Process seedArticles
const cleanArticles = seedArticles.map((art) => {
  const uz = art.translations?.uz || {
    title: art.title,
    excerpt: art.excerpt,
    content: art.content,
  };
  // If art.translations.ru exists and is actually Cyrillic Uzbek (as created from scraper), check or transliterate
  let kr = art.translations?.kr;
  if (!kr) {
    if (art.translations?.ru && /[\u0400-\u04FF]/.test(art.translations.ru.title || '')) {
      // It's already in Cyrillic (scraped Muslimaat Cyrillic articles)
      kr = {
        title: art.translations.ru.title,
        excerpt: art.translations.ru.excerpt,
        content: art.translations.ru.content,
      };
    } else {
      kr = deepLatnToCyrl(uz);
    }
  }

  return {
    ...art,
    translations: { uz, kr },
  };
});

console.log('Quiz answer index distribution:', answerStats);

// Function to generate file content
function serializeFileContent() {
  return `// Farzandly Master Dataset (Islamic & Modern Child Rearing - Dual-Language: uz & kr)
// Fully optimized: Latin (uz) and Cyrillic (kr), deep scenario quizzes with balanced answers

export const seedCategories = ${JSON.stringify(cleanCategories, null, 2)};

export const seedAgeGroups = ${JSON.stringify(cleanAgeGroups, null, 2)};

export const seedAchievements = ${JSON.stringify(cleanAchievements, null, 2)};

export const seedCourses = ${JSON.stringify(cleanCourses, null, 2)};

export const seedLearningPaths = ${JSON.stringify(cleanLearningPaths, null, 2)};

export const seedLessons = ${JSON.stringify(cleanLessons, null, 2)};

export const seedArticles = ${JSON.stringify(cleanArticles, null, 2)};
`;
}

const fileContent = serializeFileContent();

const clientPath = path.resolve('client/lib/seedData.ts');
const serverPath = path.resolve('server/src/scripts/seedData.ts');

fs.writeFileSync(clientPath, fileContent, 'utf8');
console.log(`Updated client seedData: ${clientPath} (${fileContent.length} bytes)`);

fs.writeFileSync(serverPath, fileContent, 'utf8');
console.log(`Updated server seedData: ${serverPath} (${fileContent.length} bytes)`);
