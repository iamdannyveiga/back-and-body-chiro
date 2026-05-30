import { cookies } from "next/headers";

/**
 * Helper to read the current visitor's variant assignment for a given test.
 * Used by server components.
 *
 * Returns "a" (control) by default if cookie is missing.
 */
export async function getVariant(testId: string): Promise<"a" | "b"> {
  const c = await cookies();
  const v = c.get(`spl-var-${testId}`)?.value;
  return v === "b" ? "b" : "a";
}

/**
 * Track a variant view in GA4 (call from client components).
 * The GoogleAnalytics component reads window.SPL_VARIANTS and tags events with `variant_*`.
 */
export function clientGetVariant(testId: string): "a" | "b" {
  if (typeof document === "undefined") return "a";
  const match = document.cookie.match(new RegExp(`spl-var-${testId.replace(/[^a-zA-Z0-9-]/g, "")}=(a|b)`));
  return match?.[1] === "b" ? "b" : "a";
}
