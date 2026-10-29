// Run: npm test  (node --experimental-strip-types --test lib/*.test.ts)
// 0268c-FT-BAB: the shared 90-day first touch (hooks.chiroflow.ai/lp/ft.js) reaches /api/lead -> CRM as flat ft_* keys.
// Fake DOM: the real shared ft.js runs in a node vm against a fake window/document per client (two-client isolation).
import assert from "node:assert/strict";
import test from "node:test";
import { existsSync, readFileSync } from "node:fs";
import vm from "node:vm";
import { attachFirstTouch, leadFirstTouchFields, leadReferrerFields } from "./firstTouchReferrer.ts";

const FT_JS = process.env.FT_JS || "/root/ops-board/tools/lib/first_touch/first-touch.js";
const haveFt = existsSync(FT_JS);

function memStorage() {
  const m = new Map<string, string>();
  return { getItem: (k: string) => (m.has(k) ? (m.get(k) as string) : null), setItem: (k: string, v: string) => void m.set(k, v) };
}

// One browser profile on one site: own localStorage + cookie jar.
function fakeBrowser(href: string, referrer: string) {
  const ls = memStorage();
  let cookie = "";
  const doc = {
    referrer,
    readyState: "complete",
    get cookie() { return cookie; },
    set cookie(v: string) { cookie = v.split(";")[0]; },
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: () => ({}),
  };
  const win: Record<string, unknown> = { location: { href, protocol: "https:" }, localStorage: ls, document: doc };
  return {
    win,
    load(nextHref: string, nextReferrer: string) {
      (win.location as { href: string }).href = nextHref;
      doc.referrer = nextReferrer;
      const ctx = vm.createContext({ window: win, document: doc, URL, Date, JSON, String, isNaN, encodeURIComponent, decodeURIComponent });
      vm.runInContext(readFileSync(FT_JS, "utf8"), ctx);
      return win;
    },
  };
}

const LANDING = "https://backandbodydoc.com/softwave-therapy-sterling-heights-mi?utm_source=chatgpt.com&utm_medium=referral";
const CONTACT = "https://backandbodydoc.com/contact";

test("attachFirstTouch without ft.js loaded (blocked / slow script) leaves the payload as is", () => {
  const p = { firstName: "A", referrer: "https://www.google.com/" };
  assert.deepEqual(attachFirstTouch({ ...p }, {}), p);
  assert.deepEqual(attachFirstTouch({ ...p }, { cfFirstTouch: { attach: () => { throw new Error("x"); } } }), p);
});

test("route: ft_* forwarded only with a valid ft_ts; urls checked; capped at 500; unknown ft_ keys dropped", () => {
  assert.deepEqual(leadFirstTouchFields({ ft_referrer: "https://chatgpt.com/", ft_utm_source: "x" }), {});
  assert.deepEqual(leadFirstTouchFields({ ft_ts: "not a date", ft_utm_source: "x" }), {});
  const out = leadFirstTouchFields({
    ft_ts: "2026-10-29T18:00:00.000Z",
    ft_referrer: "javascript:alert(1)",
    ft_landing_url: "https://backandbodydoc.com/?q=" + "a".repeat(600),
    ft_utm_source: "  chatgpt.com ",
    ft_gclid: "",
    ft_evil: "x",
    ft_utm_medium: 7,
  });
  assert.deepEqual(Object.keys(out).sort(), ["ft_landing_url", "ft_ts", "ft_utm_source"]);
  assert.equal(out.ft_landing_url.length, 500);
  assert.equal(out.ft_utm_source, "chatgpt.com");
});

test("178g session fields unchanged next to the ft_* keys", () => {
  const body = { referrer: "https://www.google.com/", landing_url: LANDING, page_url: CONTACT, ft_ts: "2026-10-29T18:00:00.000Z" };
  assert.deepEqual(leadReferrerFields(body), { referrer: "https://www.google.com/", landing_url: LANDING, page_url: CONTACT });
});

test("fake DOM: first touch survives a later visit; payload carries ft_ts + ft_* through the route", { skip: !haveFt && "ft.js missing" }, () => {
  const bab = fakeBrowser(LANDING, "https://chatgpt.com/");
  bab.load(LANDING, "https://chatgpt.com/");
  const win = bab.load(CONTACT, "https://www.google.com/"); // later visit, other referrer: record must not change
  const body = attachFirstTouch({ firstName: "T", referrer: "https://www.google.com/", page_url: CONTACT }, win);
  const fwd = leadFirstTouchFields(body);
  assert.ok(fwd.ft_ts && !isNaN(Date.parse(fwd.ft_ts)));
  assert.equal(fwd.ft_referrer, "https://chatgpt.com/");
  assert.equal(fwd.ft_landing_url, LANDING);
  assert.equal(fwd.ft_utm_source, "chatgpt.com");
  assert.equal(body.referrer, "https://www.google.com/"); // 178g session referrer kept as sent
});

test("two-client isolation: another client's browser profile never shares the BAB record", { skip: !haveFt && "ft.js missing" }, () => {
  const bab = fakeBrowser(LANDING, "https://chatgpt.com/").load(LANDING, "https://chatgpt.com/");
  const other = fakeBrowser("https://yentzfamilychiropractic.com/", "https://www.google.com/")
    .load("https://yentzfamilychiropractic.com/?gclid=abc", "https://www.google.com/");
  const a = leadFirstTouchFields(attachFirstTouch({}, bab));
  const b = leadFirstTouchFields(attachFirstTouch({}, other));
  assert.equal(a.ft_referrer, "https://chatgpt.com/");
  assert.equal(b.ft_referrer, "https://www.google.com/");
  assert.equal(b.ft_gclid, "abc");
  assert.equal(a.ft_gclid, undefined);
  assert.ok(!a.ft_landing_url.includes("yentz") && b.ft_landing_url.includes("yentz"));
});
