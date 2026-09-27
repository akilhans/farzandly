/** Payment settings come from the client env so no card number lives in the code. */
export const PREMIUM_PRICE_UZS = Number(process.env.NEXT_PUBLIC_PREMIUM_PRICE) || 79000;
export const PAYMENT_CARD = (process.env.NEXT_PUBLIC_PAYMENT_CARD || '').trim();
export const PAYMENT_CARD_HOLDER = (process.env.NEXT_PUBLIC_PAYMENT_CARD_HOLDER || '').trim();
export const SUPPORT_TELEGRAM = (process.env.NEXT_PUBLIC_SUPPORT_TELEGRAM || '').replace(/^@/, '').trim();

export function formatSom(amount: number): string {
  return amount.toLocaleString('ru-RU').replace(/,/g, ' ');
}

/** "8600123412341234" → "8600 1234 1234 1234" */
export function formatCard(card: string): string {
  return card.replace(/\s+/g, '').replace(/(\d{4})(?=\d)/g, '$1 ');
}
