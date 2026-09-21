'use client';

import { useI18n } from '@/context/LanguageContext';

/** Translatable text node — usable from server components (renders Uzbek on the server, swaps on the client). */
export function T({ k, fb }: { k: string; fb?: string }) {
  const { t } = useI18n();
  return <>{t(k, fb)}</>;
}

type Translations = Record<string, Record<string, string> | undefined> | undefined;

/** Picks a field from an entity's `translations` map (categories, age groups, articles…) with the base value as fallback. */
export function useLocalized() {
  const { language } = useI18n();
  return (translations: Translations, field: string, fallback: string) =>
    (language !== 'uz' && translations?.[language]?.[field]) || fallback;
}

export function Tr({ data, field, fb }: { data: Translations; field: string; fb: string }) {
  const pick = useLocalized();
  return <>{pick(data, field, fb)}</>;
}
