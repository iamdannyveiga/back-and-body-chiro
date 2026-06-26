'use client'

import Script from 'next/script'

// Set NEXT_PUBLIC_CLARITY_ID in Vercel env to the project ID from clarity.microsoft.com.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID
const TRACKING_VERSION = 'chiroflow_external_tracking_2026_06_26_v2'

export default function Clarity() {
  return (
    <>
      <Script id="chiroflow-tracking-marker" strategy="afterInteractive">
        {`
          window.__chiroflowWebsiteTrackerVersion = "${TRACKING_VERSION}";
          window.__chiroflowWebsiteTrackerInstalled = true;
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "chiroflow_tracker_loaded",
            tracker_version: "${TRACKING_VERSION}",
            tracker_mode: "native_server_crm"
          });
        `}
      </Script>
      {CLARITY_ID ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      ) : null}
    </>
  )
}
