export type TemplateType =
  | 'platform-intro'
  | 'nega-farzandly'
  | 'feature-showcase'
  | 'mehrli-tarbiya'
  | 'ekran-vaqti'
  | 'gamification'
  | 'hikmat-va-ilm';

export type ColorTheme = 'sage-classic' | 'warm-cream' | 'emerald-depth' | 'golden-sand';

export type AgeCategory = '0-2 yosh' | '3-5 yosh' | '6-9 yosh' | '10-13 yosh' | 'Barcha yoshlar';

export interface PlatformIntroContent {
  hook: string;
  subtitle: string;
  categoryTag: string;
  pillar1Title: string;
  pillar1Desc: string;
  pillar1Tag: string;
  pillar2Title: string;
  pillar2Desc: string;
  pillar2Tag: string;
  pillar3Title: string;
  pillar3Desc: string;
  pillar3Tag: string;
  targetAges: string;
  ctaText: string;
}

export interface NegaFarzandlyContent {
  hook: string;
  subtitle: string;
  categoryTag: string;
  prob1Title: string;
  prob1Text: string;
  sol1Title: string;
  sol1Text: string;
  prob2Title: string;
  prob2Text: string;
  sol2Title: string;
  sol2Text: string;
  prob3Title: string;
  prob3Text: string;
  sol3Title: string;
  sol3Text: string;
  takeaway: string;
}

export interface FeatureShowcaseContent {
  hook: string;
  subtitle: string;
  categoryTag: string;
  feat1Title: string;
  feat1Desc: string;
  feat1Badge: string;
  feat2Title: string;
  feat2Desc: string;
  feat2Badge: string;
  feat3Title: string;
  feat3Desc: string;
  feat3Badge: string;
  feat4Title: string;
  feat4Desc: string;
  feat4Badge: string;
  bottomPromo: string;
}

export interface MehrliTarbiyaContent {
  hook: string;
  subtitle: string;
  categoryTag: string;
  step1Title: string;
  step1Desc: string;
  step1Tag: string;
  step2Title: string;
  step2Desc: string;
  step2Tag: string;
  step3Title: string;
  step3Desc: string;
  step3Tag: string;
  comparisonWrong: string;
  comparisonRight: string;
  takeaway: string;
}

export interface EkranVaqtiContent {
  hook: string;
  subtitle: string;
  categoryTag: string;
  alt1Title: string;
  alt1Desc: string;
  alt1Badge: string;
  alt2Title: string;
  alt2Desc: string;
  alt2Badge: string;
  alt3Title: string;
  alt3Desc: string;
  alt3Badge: string;
  recommendation: string;
  takeaway: string;
}

export interface GamificationContent {
  hook: string;
  subtitle: string;
  categoryTag: string;
  streakDays: number;
  streakText: string;
  xpPoints: number;
  levelTitle: string;
  levelNumber: number;
  lesson1Title: string;
  lesson1Status: string;
  lesson2Title: string;
  lesson2Status: string;
  lesson3Title: string;
  lesson3Status: string;
  quizQuestion: string;
  quizWrongAnswer: string;
  quizRightAnswer: string;
  takeaway: string;
}

export interface HikmatVaIlmContent {
  hook: string;
  subtitle: string;
  categoryTag: string;
  hadithTitle: string;
  hadithText: string;
  hadithSource: string;
  hadithDetail: string;
  scienceTitle: string;
  scienceText: string;
  scienceSource: string;
  scienceDetail: string;
  synthesisTitle: string;
  synthesisText: string;
}

export interface CardCustomization {
  template: TemplateType;
  theme: ColorTheme;
  ageCategory: AgeCategory;
  showLogo: boolean;
  showQrCode: boolean;
  showSlideNumber: boolean;
  slideNumber: string;
  footerHandle: string;
  footerTagline: string;

  // Content per template
  platformIntro: PlatformIntroContent;
  negaFarzandly: NegaFarzandlyContent;
  featureShowcase: FeatureShowcaseContent;
  mehrliTarbiya: MehrliTarbiyaContent;
  ekranVaqti: EkranVaqtiContent;
  gamification: GamificationContent;
  hikmatVaIlm: HikmatVaIlmContent;
}

export interface TemplateDefinition {
  id: TemplateType;
  title: string;
  shortDesc: string;
  hookPreview: string;
  iconName: string;
  badge: string;
  category: 'intro' | 'parenting';
}
