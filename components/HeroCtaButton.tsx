'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Hero CTA split test (hero-cta-002), client-side so the homepage stays STATIC + cacheable.
 * Renders control text on first paint (no layout shift — same button size), swaps to
 * variant B only if the visitor's cookie assigns them to B. GA4 tags conversions with
 * the variant cookie regardless, so attribution is preserved.
 */
const CONTROL = 'Book Your $67 First Visit →';
const VARIANT_B = 'Claim Your $67 Visit Today →';

export default function HeroCtaButton() {
  const [text, setText] = useState(CONTROL);

  useEffect(() => {
    const m = document.cookie.match(/spl-var-hero-cta-002=(a|b)/);
    if (m?.[1] === 'b') setText(VARIANT_B);
  }, []);

  return (
    <Link
      href="/schedule-appointment"
      className="btn btn--mint"
      data-spl-variant="hero-cta-002"
    >
      {text}
    </Link>
  );
}
