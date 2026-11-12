import test from 'node:test';
import assert from 'node:assert/strict';
import { getLessonAuthor, getArticleAuthor } from '../client/lib/author.ts';

test('Author: getLessonAuthor resolves correct authors based on courses and metadata', () => {
  // Explicit author is preserved
  assert.equal(getLessonAuthor({ author: 'Ustoz Muallif' }), 'Ustoz Muallif');

  // Abdulloh Domla series
  assert.equal(getLessonAuthor({ courseSlug: 'tarbiya-asoslari-va-boshlangich-himoya' }), 'Abdulloh Domla');
  assert.equal(getLessonAuthor({ courseSlug: 'islomiy-odoblar-va-balogat-davri' }), 'Abdulloh Domla');
  assert.equal(getLessonAuthor({ videoId: '0q8cJ5Ybv80' }), 'Abdulloh Domla');

  // Dr. Adem Gunesh
  assert.equal(getLessonAuthor({ courseSlug: 'jazosiz-tarbiya-kursi' }), 'Dr. Odam Gunesh (Adem Güneş)');

  // Xadicha Kubro Tongar
  assert.equal(getLessonAuthor({ courseSlug: 'barkamol-farzand-va-fitrat-pedagogikasi' }), 'Xadicha Kubro Tongar');

  // Aziz Rahimov
  assert.equal(getLessonAuthor({ courseSlug: 'zamonaviy-talim-va-4-sarmoya' }), 'Aziz Rahimov');

  // Default fallback
  assert.equal(getLessonAuthor(null), 'Farzandly Pedagogik Jamoasi');
});

test('Author: getArticleAuthor resolves correct article authors', () => {
  // Explicit author
  assert.equal(getArticleAuthor({ author: 'Psixolog Nilufar' }), 'Psixolog Nilufar');

  // Abdulloh Domla article
  assert.equal(getArticleAuthor({ slug: 'islomda-farzand-tarbiyasining-5-oltin-qoidasi' }), 'Abdulloh Domla silsilasi');

  // Jazosiz tarbiya article
  assert.equal(getArticleAuthor({ slug: 'bolani-urmasdan-tarbiyalash' }), 'Dr. Odam Gunesh metodikasi');

  // Muslimaat.uz article
  assert.equal(getArticleAuthor({ slug: 'bolaning-jahli-chiqqanda-muslimaat' }), 'Muslimaat.uz');

  // Default fallback
  assert.equal(getArticleAuthor(null), 'Farzandly Pedagogik Tahririyati');
});
