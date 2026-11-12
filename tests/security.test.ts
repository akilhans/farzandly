import test from 'node:test';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import {
  signSessionToken,
  signLoginTicket,
  verifyToken,
  hashPassword,
  verifyPassword,
  verifyTelegramWidget,
} from '../server/src/lib/security.ts';

test('Security: Session tokens are created and verified correctly', () => {
  const userId = 'user_abc_123';
  const token = signSessionToken(userId);
  assert.ok(token.startsWith('v1.'));

  const verified = verifyToken(token, 'session');
  assert.equal(verified?.uid, userId);
  assert.equal(verified?.pur, 'session');

  // Tampered token fails
  const tampered = token.slice(0, -4) + 'abcd';
  assert.equal(verifyToken(tampered, 'session'), null);

  // Random garbage fails
  assert.equal(verifyToken('not-a-token', 'session'), null);
});

test('Security: Login ticket is short-lived and single-purpose', () => {
  const telegramId = '123456789';
  const ticket = signLoginTicket(telegramId);
  assert.ok(ticket.startsWith('v1.'));

  const verified = verifyToken(ticket, 'ticket');
  assert.equal(verified?.tg, telegramId);
  assert.equal(verified?.pur, 'ticket');

  // Cannot use login ticket as session token
  assert.equal(verifyToken(ticket, 'session'), null);
});

test('Security: Password scrypt hashing and verification', () => {
  const plain = 'MeningParolim123!';
  const hash = hashPassword(plain);

  assert.ok(hash.startsWith('scrypt$'));

  const correct = verifyPassword(plain, hash);
  assert.equal(correct.ok, true);

  const wrong = verifyPassword('WrongPassword!', hash);
  assert.equal(wrong.ok, false);
});

test('Security: Telegram Login Widget HMAC validation', () => {
  const testBotToken = '123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11';
  process.env.TELEGRAM_BOT_TOKEN = testBotToken;

  const authDate = Math.floor(Date.now() / 1000);
  const data: Record<string, any> = {
    id: '987654321',
    first_name: 'Aziza',
    username: 'aziza_onam',
    auth_date: String(authDate),
  };

  const checkString = ['auth_date', 'first_name', 'id', 'username']
    .map((k) => `${k}=${data[k]}`)
    .join('\n');

  const secretKey = crypto.createHash('sha256').update(testBotToken).digest();
  const validHash = crypto.createHmac('sha256', secretKey).update(checkString).digest('hex');

  data.hash = validHash;

  // Valid payload passes
  assert.equal(verifyTelegramWidget(data), true);

  // Modified username fails
  const tampered = { ...data, username: 'hacker' };
  assert.equal(verifyTelegramWidget(tampered), false);

  // Expired auth fails
  const expired = { ...data, auth_date: String(authDate - 100000) };
  assert.equal(verifyTelegramWidget(expired), false);
});
