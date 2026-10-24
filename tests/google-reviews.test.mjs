// node --test tests/google-reviews.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { selectReviews, MIN_LEN, MAX_LEN } from '../scripts/import-google-reviews.mjs';
import { REVIEWS, homeReviews, pageReviews, monthYear } from '../lib/google-reviews.mjs';

const row = (name, text, extra = {}) => ({ name, text, stars: 5, at: '2026-10-22T17:10:11Z', review_id: 'id-' + name, ...extra });
const long = (s) => (s + ' ').repeat(8).trim();

test('selectReviews keeps feed order, card length, 5 stars, one per text, cap', () => {
  const feed = { proof: { reviews: [
    row('Ann A.', long('Great visit')), row('Bob B.', 'too short'), row('Cy C.', long('Great visit')),
    row('Di D.', long('Kind staff'), { stars: 4 }), row('Ed E.', 'x'.repeat(MAX_LEN + 1)), row('Flo F.', long('Fast and friendly')),
    row('Gus G.', long('Very helpful team')),
  ] } };
  const out = selectReviews(feed, 2);
  assert.deepEqual(out.map((r) => r.name), ['Ann A.', 'Flo F.']);
  for (const r of out) assert.ok(r.text.length >= MIN_LEN && r.text.length <= MAX_LEN && r.stars === 5 && r.review_id);
});

test('selectReviews refuses an empty feed', () => {
  assert.throws(() => selectReviews({ proof: { reviews: [] } }), /no reviews/);
});

test('lib data: 12 verbatim 5-star feed reviews, first name + last initial, newest first', () => {
  const data = JSON.parse(readFileSync(new URL('../lib/google-reviews.json', import.meta.url), 'utf8'));
  assert.equal(data.crm_id, 'mEE5D5TrXWgcB6OpCBMY');
  assert.deepEqual(data.corpus_keys, ['live-bradley']);
  assert.equal(REVIEWS.length, 12);
  for (const r of REVIEWS) {
    assert.match(r.name, /^\S+ \w\.$/);
    assert.equal(r.stars, 5);
    assert.ok(r.review_id && r.text.length >= MIN_LEN && r.text.length <= MAX_LEN);
  }
  const at = REVIEWS.map((r) => r.at);
  assert.deepEqual(at, [...at].sort().reverse());
});

test('home shows 3 (featured + 2), /testimonials shows all 12, with a month-year line', () => {
  assert.equal(homeReviews().length, 3);
  assert.deepEqual(pageReviews().map((r) => r.review_id), REVIEWS.map((r) => r.review_id));
  assert.equal(monthYear('2026-10-22T17:10:11Z'), 'October 2026');
  for (const r of homeReviews()) assert.match(r.when, /^[A-Z][a-z]+ \d{4}$/);
});

test('review sections render the feed, not the unsourced quotes or condition tags', () => {
  const home = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
  const page = readFileSync(new URL('../app/testimonials/page.tsx', import.meta.url), 'utf8');
  for (const src of [home, page]) assert.match(src, /lib\/google-reviews\.mjs['"]/);
  const testimonials = home.slice(home.indexOf('{/* TESTIMONIALS */}'));
  for (const old of ['He helped me so much with my headaches', 'After about 3 months, my headaches', 'Verified Patient <span']) {
    assert.ok(!testimonials.includes(old), `home testimonials still has ${old}`);
  }
  for (const old of ['I was skeptical at first', 'No BS, just results', 'The sciatica was that bad', "tag: 'Pediatric'", 'almost lost hope', 'Verified Patient <span']) {
    assert.ok(!page.includes(old), `/testimonials still has ${old}`);
  }
});
