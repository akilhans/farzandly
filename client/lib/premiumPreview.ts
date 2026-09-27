/**
 * Server-render helpers that keep premium text out of the HTML / RSC payload.
 * The full text is fetched in the browser with the parent's token (see ArticleContentReader
 * and HealthArticleReader); the API only returns it to Premium accounts.
 */
import type { HealthTopic } from './healthData';

export function articleTeaser<T extends { content?: string; isPremium?: boolean; translations?: Record<string, any> }>(article: T): T & { locked?: boolean } {
  if (!article?.isPremium) return article;
  const cut = (text?: string) => (text || '').split('\n\n').slice(0, 2).join('\n\n').slice(0, 700);
  const translations = article.translations
    ? Object.fromEntries(
        Object.entries(article.translations).map(([lang, t]) => [lang, t && typeof t === 'object' ? { ...t, content: cut(t.content) } : t])
      )
    : article.translations;
  return { ...article, content: cut(article.content), translations, locked: true };
}

/** Keeps the first sections readable (the reader's free preview) and blanks the rest. */
export function lockHealthTopic(topic: HealthTopic): HealthTopic & { locked?: boolean } {
  if (!topic?.isPremium) return topic;
  const freeCount = Math.min(2, Math.max(1, Math.floor((topic.sections?.length || 0) / 2)));
  return {
    ...topic,
    sections: (topic.sections || []).map((s, i) =>
      i < freeCount ? s : { ...s, paragraphs: [], paragraphsUz: [], paragraphsRu: [], highlightBox: undefined }
    ),
    quiz: [],
    funFacts: [],
    takeaways: [],
    locked: true,
  } as HealthTopic & { locked?: boolean };
}
