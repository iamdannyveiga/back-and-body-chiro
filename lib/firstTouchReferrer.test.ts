// Run: npm test  (node --experimental-strip-types --test lib/*.test.ts)
import assert from "node:assert/strict";
import test from "node:test";
import {
  FIRST_REFERRER_KEY,
  FIRST_LANDING_KEY,
  captureFirstTouch,
  leadReferrerFields,
} from "./firstTouchReferrer.ts";

function memStorage(init: Record<string, string> = {}) {
  const m = new Map(Object.entries(init));
  return {
    getItem: (k: string) => (m.has(k) ? (m.get(k) as string) : null),
    setItem: (k: string, v: string) => void m.set(k, v),
    dump: () => Object.fromEntries(m),
  };
}
const blocked = {
  getItem: (): string | null => { throw new Error("SecurityError"); },
  setItem: (): void => { throw new Error("SecurityError"); },
};

const GOOGLE = "https://www.google.com/";
const LANDING = "https://backandbodydoc.com/softwave-therapy-sterling-heights-mi";
const CONTACT = "https://backandbodydoc.com/contact";

test("first page load stores the external referrer and landing url once", () => {
  const s = memStorage();
  const t = captureFirstTouch(s, { referrer: GOOGLE, href: LANDING });
  assert.deepEqual(t, { referrer: GOOGLE, landing_url: LANDING });
  assert.equal(s.dump()[FIRST_REFERRER_KEY], GOOGLE);
  assert.equal(s.dump()[FIRST_LANDING_KEY], LANDING);
});

test("a later page keeps the first-touch referrer, not the internal one", () => {
  const s = memStorage();
  captureFirstTouch(s, { referrer: GOOGLE, href: LANDING });
  const t = captureFirstTouch(s, { referrer: LANDING, href: CONTACT });
  assert.deepEqual(t, { referrer: GOOGLE, landing_url: LANDING });
});

test("a direct visit stores an empty referrer so later internal referrers do not overwrite it", () => {
  const s = memStorage();
  captureFirstTouch(s, { referrer: "", href: LANDING });
  const t = captureFirstTouch(s, { referrer: LANDING, href: CONTACT });
  assert.deepEqual(t, { referrer: "", landing_url: LANDING });
});

test("blocked storage falls back to the live values", () => {
  assert.deepEqual(captureFirstTouch(blocked, { referrer: GOOGLE, href: CONTACT }), {
    referrer: GOOGLE,
    landing_url: CONTACT,
  });
  assert.deepEqual(captureFirstTouch(null, { referrer: GOOGLE, href: CONTACT }), {
    referrer: GOOGLE,
    landing_url: CONTACT,
  });
});

test("route forwards referrer, landing_url and page_url when they are http(s) urls", () => {
  assert.deepEqual(
    leadReferrerFields({ referrer: GOOGLE, landing_url: LANDING, page_url: CONTACT, firstName: "x" }),
    { referrer: GOOGLE, landing_url: LANDING, page_url: CONTACT },
  );
});

test("route drops empty, non-string, non-url and oversized values", () => {
  assert.deepEqual(leadReferrerFields({}), {});
  assert.deepEqual(leadReferrerFields({ referrer: "", landing_url: 5, page_url: null }), {});
  assert.deepEqual(leadReferrerFields({ referrer: "javascript:alert(1)" }), {});
  assert.deepEqual(leadReferrerFields({ referrer: "android-app://com.google.android.gm/" }), {
    referrer: "android-app://com.google.android.gm/",
  });
  assert.deepEqual(leadReferrerFields({ page_url: "https://x.com/" + "a".repeat(3000) }), {});
  assert.deepEqual(leadReferrerFields({ referrer: "  " + GOOGLE + "  " }), { referrer: GOOGLE });
});
