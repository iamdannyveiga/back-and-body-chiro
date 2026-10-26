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
