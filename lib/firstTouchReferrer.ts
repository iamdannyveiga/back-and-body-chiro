// First-touch referrer for website leads. Forms used to post no referrer, so
// the CRM stored website leads as Unknown source. The first page of a session
// keeps document.referrer and the landing URL in sessionStorage (set once);
// the lead post sends them as referrer / landing_url next to page_url, and the
// CRM workflow webhook stores them in leads.raw_data. Same keys as the CRM
// landing pages (cf_first_referrer).

export const FIRST_REFERRER_KEY = "cf_first_referrer";
export const FIRST_LANDING_KEY = "cf_first_landing_url";

type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
};

export type FirstTouch = { referrer: string; landing_url: string };

function keepOnce(storage: StorageLike | null, key: string, live: string): string {
  if (!storage) return live;
  try {
    const stored = storage.getItem(key);
    if (stored !== null) return stored;
    storage.setItem(key, live);
  } catch {
    // Storage blocked (private mode, cookies off): use the live value.
  }
  return live;
}

export function captureFirstTouch(
  storage: StorageLike | null,
  live: { referrer: string; href: string },
): FirstTouch {
  return {
    referrer: keepOnce(storage, FIRST_REFERRER_KEY, live.referrer || ""),
    landing_url: keepOnce(storage, FIRST_LANDING_KEY, live.href || ""),
  };
}

// Browser helper: safe to call on every page load and again at submit.
export function browserFirstTouch(): FirstTouch {
  if (typeof window === "undefined") return { referrer: "", landing_url: "" };
  let storage: StorageLike | null = null;
  try {
    storage = window.sessionStorage;
  } catch {
    storage = null;
  }
  return captureFirstTouch(storage, {
    referrer: document.referrer,
    href: window.location.href,
  });
}

const MAX_LEN = 2048;
const SCHEME = /^(https?|android-app):\/\//i;
const FIELDS = ["referrer", "landing_url", "page_url"] as const;

// Server side: the attribution fields /api/lead forwards to the CRM webhook.
export function leadReferrerFields(body: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const key of FIELDS) {
    const raw = body[key];
    if (typeof raw !== "string") continue;
    const value = raw.trim();
    if (!value || value.length > MAX_LEN || !SCHEME.test(value)) continue;
    out[key] = value;
  }
  return out;
}

// ── 0268c-FT-BAB: shared 90-day first touch (rulings.log:2210) ──────────────
// The root layout loads https://hooks.chiroflow.ai/lp/ft.js (one file for all
// managed sites). It keeps the visit's first referrer / landing URL / utm_* /
// click ids for 90 days and exposes window.cfFirstTouch.attach(payload), which
// adds flat ft_* keys (+ a nested first_touch). The CRM classifies
// leads.source_channel from them; the session fields above stay as they are.

type FirstTouchApi = { attach(payload: Record<string, unknown>): unknown };

// Browser: add ft_* keys to the /api/lead body. If ft.js is blocked, slow or
// throws, the lead is still posted unchanged.
export function attachFirstTouch<T extends Record<string, unknown>>(payload: T, win?: unknown): T {
  const w = (win ?? (typeof window !== "undefined" ? window : undefined)) as
    | { cfFirstTouch?: FirstTouchApi }
    | undefined;
  try {
    const api = w?.cfFirstTouch;
    if (api && typeof api.attach === "function") api.attach(payload);
  } catch {
    // never block a lead over attribution
  }
  return payload;
}

const FT_FIELDS = [
  "ts", "referrer", "landing_url", "utm_source", "utm_medium", "utm_campaign", "utm_content",
  "utm_term", "utm_adset", "gclid", "gbraid", "wbraid", "fbclid",
] as const;
const FT_URL_FIELDS = new Set(["referrer", "landing_url"]);
const FT_MAX = 500; // same cap as ft.js and the CRM

// Server side: the ft_* keys /api/lead forwards to the CRM webhook. The CRM
// only treats them as a first-touch record when ft_ts is present, so nothing
// is forwarded without a valid ft_ts.
export function leadFirstTouchFields(body: Record<string, unknown>): Record<string, string> {
  const out: Record<string, string> = {};
  const ts = body.ft_ts;
  if (typeof ts !== "string" || !ts.trim() || Number.isNaN(Date.parse(ts.trim()))) return out;
  for (const f of FT_FIELDS) {
    const raw = body[`ft_${f}`];
    if (typeof raw !== "string") continue;
    let value = raw.trim();
    if (!value) continue;
    if (FT_URL_FIELDS.has(f) && !SCHEME.test(value)) continue;
    if (value.length > FT_MAX) value = value.slice(0, FT_MAX);
    out[`ft_${f}`] = value;
  }
  return out;
}
