import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Split-test middleware. Assigns each unique visitor to A or B for each active test.
 * Cookie format: spl-var-<test-id> = "a" | "b"
 *
 * Active tests register here. Server components read via cookies() or pages
 * read via getCookie helper.
 */
const ACTIVE_TESTS: Array<{
  id: string;
  paths: string[];      // path prefixes this test applies to (empty array = all)
  ratio: number;        // 0..1 fraction assigned to variant B (default 0.5)
}> = [
  { id: "hero-cta-002", paths: ["/"], ratio: 0.5 },
  { id: "form-cta-003", paths: ["/"], ratio: 0.5 },
];

function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function middleware(req: NextRequest) {
  const res = NextResponse.next();
  if (ACTIVE_TESTS.length === 0) return res;

  const path = req.nextUrl.pathname;
  // Get or create stable visitor ID (cookie)
  let visitorId = req.cookies.get("spl-vid")?.value;
  if (!visitorId) {
    visitorId = `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    res.cookies.set("spl-vid", visitorId, {
      maxAge: 60 * 60 * 24 * 90, // 90d
      sameSite: "lax",
      path: "/",
    });
  }

  for (const test of ACTIVE_TESTS) {
    if (test.paths.length && !test.paths.some((p) => path === p || path.startsWith(p))) continue;
    const cookieKey = `spl-var-${test.id}`;
    if (req.cookies.get(cookieKey)) continue;
    const bucket = hashStr(`${visitorId}-${test.id}`) % 1000;
    const variant = bucket < test.ratio * 1000 ? "b" : "a";
    res.cookies.set(cookieKey, variant, {
      maxAge: 60 * 60 * 24 * 90,
      sameSite: "lax",
      path: "/",
    });
    // Also send variant in a response header so server components can read it
    res.headers.set(`x-spl-${test.id}`, variant);
  }
  return res;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:webp|svg|png|jpg|ico)).*)"],
};
