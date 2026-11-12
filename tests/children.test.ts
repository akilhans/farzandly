import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeAgeGroup, getActiveChild } from '../client/lib/children.ts';

test('Children: normalizeAgeGroup handles legacy codes and defaults', () => {
  assert.equal(normalizeAgeGroup('14-18'), '14+');
  assert.equal(normalizeAgeGroup('0-2'), '0-2');
  assert.equal(normalizeAgeGroup('3-5'), '3-5');
  assert.equal(normalizeAgeGroup('6-9'), '6-9');
  assert.equal(normalizeAgeGroup('10-13'), '10-13');
  assert.equal(normalizeAgeGroup(undefined), '3-5');
});

test('Children: getActiveChild finds targeted child or first child', () => {
  const user = {
    activeChildId: 'c2',
    children: [
      { id: 'c1', name: 'Ali', ageGroup: '3-5', completedLessons: [] },
      { id: 'c2', name: 'Fotima', ageGroup: '6-9', completedLessons: ['dars-1'] },
    ],
  };

  const active = getActiveChild(user);
  assert.equal(active?.name, 'Fotima');

  // Fallback to first if activeChildId is not set
  const userWithoutActive = {
    children: [
      { id: 'c1', name: 'Ali', ageGroup: '3-5', completedLessons: [] },
      { id: 'c2', name: 'Fotima', ageGroup: '6-9', completedLessons: [] },
    ],
  };
  assert.equal(getActiveChild(userWithoutActive)?.name, 'Ali');

  // Empty or null user
  assert.equal(getActiveChild(null), undefined);
  assert.equal(getActiveChild({ children: [] }), undefined);
});
