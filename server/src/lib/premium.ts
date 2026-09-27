/**
 * Premium entitlement rules — the single place the server decides who can read what.
 *
 *  - premiumType 'lifetime'  → paid once (79 000 so'm), never expires.
 *  - premiumType 'bonus'     → referral days, valid until premiumExpiresAt.
 *  - legacy records          → isPremium true with an optional premiumExpiresAt.
 */
export function isPremiumActive(user: any): boolean {
  if (!user) return false;
  if (user.premiumType === 'lifetime') return true;
  if (user.premiumExpiresAt) return new Date(user.premiumExpiresAt).getTime() > Date.now();
  return Boolean(user.isPremium);
}

function plain<T = any>(doc: any): T {
  return doc && typeof doc.toObject === 'function' ? doc.toObject() : { ...doc };
}

/** Public view of a user: no secrets, with premium computed on the server. */
export function toPublicUser(user: any) {
  if (!user) return null;
  const u: any = plain(user);
  delete u.passwordHash;
  delete u.__v;
  const active = isPremiumActive(u);
  u.isPremium = active;
  u.subscriptionStatus = active ? 'premium' : 'free';
  return u;
}

/** Lesson without its body — enough to render a locked card and the paywall. */
export function lockLesson(lesson: any) {
  const l: any = plain(lesson);
  const firstScreen = Array.isArray(l.screens) ? l.screens[0] : null;
  l.screens = firstScreen
    ? [{ ...firstScreen, content: (firstScreen.content || '').slice(0, 280), quizOptions: [], correctOptionIndex: undefined }]
    : [];
  l.videoId = undefined;
  l.videoUrl = undefined;
  l.locked = true;
  if (l.translations) {
    for (const lang of Object.keys(l.translations)) {
      const t = l.translations[lang];
      if (t && Array.isArray(t.screens)) t.screens = t.screens.slice(0, 1);
    }
  }
  return l;
}

/** List views never need lesson bodies. */
export function lessonSummary(lesson: any) {
  const l: any = plain(lesson);
  delete l.screens;
  if (l.translations) {
    for (const lang of Object.keys(l.translations)) {
      if (l.translations[lang]) delete l.translations[lang].screens;
    }
  }
  return l;
}

export function lockArticle(article: any) {
  const a: any = plain(article);
  a.content = (a.content || '').slice(0, 400);
  a.locked = true;
  if (a.translations) {
    for (const lang of Object.keys(a.translations)) {
      if (a.translations[lang]?.content) a.translations[lang].content = a.translations[lang].content.slice(0, 400);
    }
  }
  return a;
}

export function articleSummary(article: any) {
  const a: any = plain(article);
  delete a.content;
  if (a.translations) {
    for (const lang of Object.keys(a.translations)) {
      if (a.translations[lang]) delete a.translations[lang].content;
    }
  }
  return a;
}

export function lockHealthTopic(topic: any) {
  const t: any = plain(topic);
  t.sections = Array.isArray(t.sections) ? t.sections.slice(0, 1) : [];
  t.quiz = [];
  t.funFacts = [];
  t.takeaways = [];
  t.locked = true;
  return t;
}
