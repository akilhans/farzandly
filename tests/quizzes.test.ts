import test from 'node:test';
import assert from 'node:assert/strict';
import { seedLessons } from '../client/lib/seedData.ts';

test('Quizzes: all 69 lessons have high-quality, situation-based quizzes', () => {
  assert.equal(seedLessons.length, 69);

  const stats = { 0: 0, 1: 0, 2: 0 };

  for (const lesson of seedLessons) {
    const quiz = lesson.screens.find((s) => s.type === 'quiz');
    assert.ok(quiz, `Lesson ${lesson.slug} must have a quiz screen`);
    assert.ok(quiz.quizQuestion, `Quiz in ${lesson.slug} must have a question`);
    assert.ok(!quiz.quizQuestion.includes('asosiy tarbiyaviy mohiyati nima?'), `Quiz in ${lesson.slug} must not be the generic template`);
    assert.ok(Array.isArray(quiz.quizOptions) && quiz.quizOptions.length >= 3, `Quiz in ${lesson.slug} must have at least 3 options`);
    assert.ok(quiz.correctOptionIndex !== undefined && quiz.correctOptionIndex >= 0 && quiz.correctOptionIndex < quiz.quizOptions.length);
    assert.ok(quiz.quizExplanation && quiz.quizExplanation.length > 20, `Quiz in ${lesson.slug} must have a thorough explanation`);

    stats[quiz.correctOptionIndex as 0 | 1 | 2]++;

    // Verify Cyrillic translation
    const krQuiz = lesson.translations?.kr?.screens?.find((s: any) => s.type === 'quiz');
    assert.ok(krQuiz, `Lesson ${lesson.slug} must have a Cyrillic quiz`);
    assert.equal(krQuiz.correctOptionIndex, quiz.correctOptionIndex, `Cyrillic quiz correctOptionIndex must match Latin for ${lesson.slug}`);
    assert.equal(krQuiz.quizOptions.length, quiz.quizOptions.length, `Cyrillic quiz options length must match Latin for ${lesson.slug}`);
  }

  // Verify balanced distribution: roughly 23 each across 0, 1, 2
  assert.equal(stats[0], 23);
  assert.equal(stats[1], 23);
  assert.equal(stats[2], 23);
});
