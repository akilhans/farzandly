/**
 * Farzandly Author helper utilities.
 * Maps courses, lessons, and articles to their respective authors/teachers.
 */

export interface AuthorInfo {
  author?: string;
  courseSlug?: string;
  videoId?: string;
  slug?: string;
}

/**
 * Returns the human author name for a lesson.
 */
export function getLessonAuthor(lesson?: AuthorInfo | null): string {
  if (!lesson) return 'Farzandly Pedagogik Jamoasi';
  if (lesson.author && lesson.author.trim()) {
    return lesson.author.trim();
  }

  const slug = (lesson.courseSlug || lesson.slug || '').toLowerCase();

  // Abdulloh Domla's Islamic parenting series (55-lesson curriculum)
  if (
    slug.includes('tarbiya-asoslari') ||
    slug.includes('islomiy-odoblar') ||
    slug.includes('ruhiy-qatiyat') ||
    slug.includes('oila-ota-ona') ||
    slug.includes('shaxsiy-ibrat') ||
    lesson.videoId
  ) {
    return 'Abdulloh Domla';
  }

  // Dr. Adem Gunesh (Jazosiz tarbiya / pedagogika)
  if (slug.includes('jazo') || slug.includes('jazosiz')) {
    return 'Dr. Odam Gunesh (Adem Güneş)';
  }

  // Xadicha Kubro Tongar (Barkamol farzand va fitrat pedagogikasi)
  if (slug.includes('fitrat') || slug.includes('tongar')) {
    return 'Xadicha Kubro Tongar';
  }

  // Aziz Rahimov (Zamonaviy ta'lim va 4 sarmoya)
  if (slug.includes('talim') || slug.includes('sarmoya') || slug.includes('rahimov')) {
    return 'Aziz Rahimov';
  }

  // Default editorial author
  return 'Farzandly Pedagogik Jamoasi';
}

/**
 * Returns the human author name for an article.
 */
export function getArticleAuthor(article?: { author?: string; slug?: string } | null): string {
  if (!article) return 'Farzandly Pedagogik Tahririyati';
  if (article.author && article.author.trim()) {
    return article.author.trim();
  }

  const slug = (article.slug || '').toLowerCase();

  if (slug.includes('islomda-farzand-tarbiyasining-5-oltin-qoidasi') || slug.includes('abdulloh')) {
    return 'Abdulloh Domla silsilasi';
  }

  if (slug.includes('urmasdan') || slug.includes('jazo') || slug.includes('jazosiz')) {
    return 'Dr. Odam Gunesh metodikasi';
  }

  if (slug.includes('muslimaat')) {
    return 'Muslimaat.uz';
  }

  return 'Farzandly Pedagogik Tahririyati';
}
