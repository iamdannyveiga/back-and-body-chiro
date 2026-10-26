"use client";

import { useEffect } from "react";
import { browserFirstTouch } from "@/lib/firstTouchReferrer";

/**
 * Keeps the session's first-touch document.referrer and landing URL in
 * sessionStorage on every page load, so a lead sent from a later page still
 * carries where the visitor came from (see lib/firstTouchReferrer.ts).
 */
export default function FirstTouchCapture() {
  useEffect(() => {
    browserFirstTouch();
  }, []);
  return null;
}
