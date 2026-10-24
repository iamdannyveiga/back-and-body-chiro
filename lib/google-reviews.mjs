// Verbatim Google reviews for the review sections (home "Patient Stories" featured + 2 cards, /testimonials cards).
// Data: lib/google-reviews.json, written by scripts/import-google-reviews.mjs from the ops-board gbp-reviews-feed.
import data from './google-reviews.json' with { type: 'json' };

export const REVIEWS = data.reviews;

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function monthYear(iso) {
  const d = new Date(iso);
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

const withDate = (r) => ({ ...r, when: monthYear(r.at) });

export function homeReviews(n = 3) {
  return REVIEWS.slice(0, n).map(withDate);
}

export function pageReviews() {
  return REVIEWS.map(withDate);
}
