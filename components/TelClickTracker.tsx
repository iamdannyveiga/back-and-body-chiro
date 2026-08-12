"use client";

import { useEffect } from "react";

/**
 * SEOMAXX website call tracking.
 *
 * Fires a GA4 `tel_click` event (and a Microsoft Clarity custom tag when Clarity
 * is live) on any click of an `a[href^="tel:"]` anywhere on the site. The listener
 * is delegated at the document in the capture phase, so it survives client-side
 * navigation and picks up tel: links rendered by any component.
 *
 * Deliberately does NOT load gtag itself: the site's existing analytics component
 * owns that. If gtag is absent the handler is a no-op.
 *
 * Outcomes dedupe: some builds also fire a legacy `phone_click` on the same click.
 * The SEOMAXX weekly pull takes max(tel_click, phone_click) per week, so running
 * both side by side never double-counts.
 */
export default function TelClickTracker() {
  useEffect(() => {
    const onClick = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const link =
        target && typeof target.closest === "function"
          ? (target.closest('a[href^="tel:"]') as HTMLAnchorElement | null)
          : null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const w = window as unknown as {
        gtag?: (...args: unknown[]) => void;
        clarity?: (...args: unknown[]) => void;
      };
      try {
        if (typeof w.gtag === "function") {
          w.gtag("event", "tel_click", {
            event_category: "lead",
            link_url: href,
            page_path: window.location.pathname,
          });
        }
        if (typeof w.clarity === "function") {
          w.clarity("set", "tel_click", href);
        }
      } catch {
        /* analytics must never break the page */
      }
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
