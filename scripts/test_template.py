# -*- coding: utf-8 -*-
import json
import os

# We will read existing healthData.ts, parse existing topics, enrich with Russian and 3rd/4th quiz questions,
# add the 2 new topics ('brain-nervous-system' and 'mouth-and-teeth'),
# fix all image paths to match desktop pictures:
# Brain -> /body basics/brain.jpg
# Mouth & Teeth -> /body basics/throat.gif
# Endocrine -> /body basics/pituitary-gland.jpg
# Eyes -> /body basics/eyes.gif
# Heart -> /body basics/heart.png
# Respiratory -> /body basics/throat.gif
# Lymphatic -> /body basics/lymphatic-system.svg
# Puberty -> /body basics/puberty-growth.svg
# Tonsillitis -> /body basics/throat.gif
# Appendicitis -> /body basics/appendicitis-400x400-rd1-enIL.gif
# Digestive -> /body basics/DigestiveSystem-enSS-1.jpg
# Hiccups -> /body basics/throat.gif

code = """import { HealthTopic } from './healthData';

// Shared trilingual interfaces
export interface HealthSection {
  title: string;
  titleUz: string;
  titleRu: string;
  paragraphs: string[];
  paragraphsUz: string[];
  paragraphsRu: string[];
  highlightBox?: {
    title: string;
    titleUz: string;
    titleRu: string;
    text: string;
    textUz: string;
    textRu: string;
    type?: 'info' | 'tip' | 'warning';
  };
}

export interface PronunciationTerm {
  term: string;
  phonetic: string;
  meaningUz: string;
  meaningEn: string;
  meaningRu: string;
}

export interface GalleryImage {
  url: string;
  labelUz: string;
  labelEn: string;
  labelRu: string;
}

export interface HealthQuizItem {
  question: string;
  questionUz: string;
  questionRu: string;
  options: string[];
  optionsUz: string[];
  optionsRu: string[];
  correctIndex: number;
  explanation: string;
  explanationUz: string;
  explanationRu: string;
  xpReward: number;
}

export interface HealthTopic {
  id: string;
  slug: string;
  title: string;
  titleUz: string;
  titleRu: string;
  subtitle: string;
  subtitleUz: string;
  subtitleRu: string;
  system: string;
  systemUz: string;
  systemRu: string;
  category: string;
  readingMinutes: number;
  medicallyReviewedBy: string;
  reviewDate: string;
  heroImage?: string;
  diagramImage?: string;
  galleryImages?: GalleryImage[];
  pronunciations?: PronunciationTerm[];
  sections: HealthSection[];
  funFacts: { en: string; uz: string; ru: string }[];
  takeaways: { en: string; uz: string; ru: string }[];
  quiz: HealthQuizItem[];
  translations?: Record<string, any>;
}
"""
print("Python script template ready")
