import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateLevel } from '../client/lib/gamification.ts';

test('Gamification: calculateLevel returns correct Uzbek tiers', () => {
  const lvl0 = calculateLevel(0, 'uz');
  assert.equal(lvl0.level, 'Boshlovchi ota-ona');
  assert.equal(lvl0.levelIndex, 1);
  assert.equal(lvl0.progressPercent, 0);

  const lvl50 = calculateLevel(50, 'uz');
  assert.equal(lvl50.level, 'O‘rganuvchi ota-ona');
  assert.equal(lvl50.levelIndex, 2);

  const lvl150 = calculateLevel(150, 'uz');
  assert.equal(lvl150.level, 'Ongli ota-ona');
  assert.equal(lvl150.levelIndex, 3);

  const lvl250 = calculateLevel(250, 'uz');
  assert.equal(lvl250.level, 'Ongli tarbiyachi');
  assert.equal(lvl250.levelIndex, 4);

  const lvl400 = calculateLevel(400, 'uz');
  assert.equal(lvl400.level, 'Mehrli murabbiy');
  assert.equal(lvl400.levelIndex, 5);

  const lvl750 = calculateLevel(750, 'uz');
  assert.equal(lvl750.level, 'Tajribali ota-ona');
  assert.equal(lvl750.levelIndex, 6);

  const lvl1500 = calculateLevel(1500, 'uz');
  assert.equal(lvl1500.level, 'Donishmand ota-ona');
  assert.equal(lvl1500.levelIndex, 7);
});

test('Gamification: calculateLevel localization works for Cyrillic', () => {
  const kr = calculateLevel(120, 'kr');
  assert.equal(kr.level, 'Онгли ота-она');
});

test('Gamification: progressPercent bounds check', () => {
  const negative = calculateLevel(-50, 'uz');
  assert.equal(negative.progressPercent, 0);

  const high = calculateLevel(5000, 'uz');
  assert.ok(high.progressPercent >= 0 && high.progressPercent <= 100);
});
