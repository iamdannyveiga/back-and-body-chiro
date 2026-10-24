#!/usr/bin/env node
// Writes lib/google-reviews.json from a gbp-reviews-feed export (ops-board tools/bin/gbp-reviews-feed bradley-krawczyk --json).
// The feed is already gated (5 stars, eligible, first name + last initial, verbatim text); this keeps feed order (newest first)
// and only picks card-length texts. Usage: node scripts/import-google-reviews.mjs <feed-output-file> [max]
import { readFileSync, writeFileSync } from 'node:fs';

export const MIN_LEN = 60;
export const MAX_LEN = 300;

export function selectReviews(feed, max = 12) {
  const rows = feed?.proof?.reviews || [];
  if (!rows.length) throw new Error('feed has no reviews');
  const out = [], seen = new Set();
  for (const r of rows) {
    const text = String(r.text || '').replace(/\s+/g, ' ').trim();
    if (r.stars !== 5 || text.length < MIN_LEN || text.length > MAX_LEN || seen.has(text)) continue;
    seen.add(text);
    out.push({ review_id: r.review_id, name: r.name, stars: 5, at: r.at, text });
    if (out.length >= max) break;
  }
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const [file, max] = process.argv.slice(2);
  if (!file) { console.error('usage: import-google-reviews.mjs <feed-output-file> [max]'); process.exit(2); }
  const raw = readFileSync(file, 'utf8');
  const feed = JSON.parse(raw.slice(raw.indexOf('{')));
  const reviews = selectReviews(feed, max ? Number(max) : 12);
  const data = {
    source: 'gbp-reviews-feed (forge gbp_review_responses_v2, Google Business Profile)',
    crm_id: feed.proof.crm_id,
    corpus_keys: feed.proof.corpus_keys,
    feed_ts: feed.ts,
    reviews,
  };
  writeFileSync(new URL('../lib/google-reviews.json', import.meta.url), JSON.stringify(data, null, 2) + '\n');
  console.log(`wrote ${reviews.length} reviews`);
}
