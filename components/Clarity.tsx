'use client'

import Script from 'next/script'

// Microsoft Clarity — heatmaps + session recordings. Free, unlimited.
// Set NEXT_PUBLIC_CLARITY_ID in Vercel env to the project ID from clarity.microsoft.com.
// Renders nothing until the ID is present, so it's safe to ship inert.
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

export default function Clarity() {
  if (!CLARITY_ID) return null

  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}
    </Script>
  )
}
