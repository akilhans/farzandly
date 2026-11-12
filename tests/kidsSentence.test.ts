import test from 'node:test';
import assert from 'node:assert/strict';
import { SENTENCE_SCENARIOS } from '../client/lib/kidsSentenceData.ts';

test('KidsSentenceData: has scenarios for all 3 levels', () => {
  const easy = SENTENCE_SCENARIOS.filter((s) => s.level === 'easy');
  const medium = SENTENCE_SCENARIOS.filter((s) => s.level === 'medium');
  const hard = SENTENCE_SCENARIOS.filter((s) => s.level === 'hard');

  assert.ok(easy.length >= 3, 'Expected at least 3 easy scenarios');
  assert.ok(medium.length >= 3, 'Expected at least 3 medium scenarios');
  assert.ok(hard.length >= 3, 'Expected at least 3 hard scenarios');
});

test('KidsSentenceData: every scenario has valid structure and piece references', () => {
  for (const s of SENTENCE_SCENARIOS) {
    assert.ok(s.id, `Scenario must have an id: ${JSON.stringify(s)}`);
    assert.ok(s.titleUz && s.titleKr, `Scenario ${s.id} missing titles`);
    assert.ok(s.sceneDescriptionUz && s.sceneDescriptionKr, `Scenario ${s.id} missing descriptions`);
    assert.ok(s.sceneVisual.mainActorEmoji, `Scenario ${s.id} missing mainActorEmoji`);
    assert.ok(s.xpReward > 0, `Scenario ${s.id} xpReward must be positive`);

    const pieceIds = new Set(s.pieces.map((p) => p.id));

    // Every correctOrder id must exist in pieces
    for (const orderId of s.correctOrder) {
      assert.ok(pieceIds.has(orderId), `Scenario ${s.id} has order piece ${orderId} not found in pieces`);
    }

    // Every piece must have non-empty fields
    for (const piece of s.pieces) {
      assert.ok(piece.id, `Piece in ${s.id} missing id`);
      assert.ok(piece.textUz, `Piece ${piece.id} missing textUz`);
      assert.ok(piece.textKr, `Piece ${piece.id} missing textKr`);
      assert.ok(piece.emoji, `Piece ${piece.id} missing emoji`);
      assert.ok(piece.role, `Piece ${piece.id} missing role`);
    }

    // Easy level should have exact pieces (no distractors)
    if (s.level === 'easy') {
      assert.equal(
        s.pieces.length,
        s.correctOrder.length,
        `Easy scenario ${s.id} should have exact pieces without distractors`
      );
    }

    // Medium and Hard levels must have distractor pieces
    if (s.level === 'medium' || s.level === 'hard') {
      assert.ok(
        s.pieces.length > s.correctOrder.length,
        `Scenario ${s.id} (${s.level}) must contain distractor pieces for challenge`
      );
    }
  }
});
