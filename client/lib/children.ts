export interface ChildProfile {
  id: string;
  name: string;
  ageGroup: string;
  completedLessons: string[];
}

export const MAX_CHILDREN = 5;

/** Lesson data uses "14+"; older profiles may still hold "14-18". */
export const normalizeAgeGroup = (code?: string) => (code === '14-18' ? '14+' : code || '3-5');

export const AGE_GROUP_OPTIONS = [
  { code: '0-2', label: '0–2 yosh', desc: 'Chaqaloqlik va ilk qadamlar' },
  { code: '3-5', label: '3–5 yosh', desc: 'Bog‘cha va mustaqillik davri' },
  { code: '6-9', label: '6–9 yosh', desc: 'Kichik maktab va qiziqishlar' },
  { code: '10-13', label: '10–13 yosh', desc: 'O‘smirlikka o‘tish va xarakter' },
  { code: '14+', label: '14+ yosh', desc: 'Balog‘at va shaxs kamoloti' },
];

export function getActiveChild(user?: { children?: ChildProfile[]; activeChildId?: string } | null) {
  if (!user?.children?.length) return undefined;
  return user.children.find((c) => c.id === user.activeChildId) || user.children[0];
}
