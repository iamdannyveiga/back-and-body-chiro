'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

let listenersAttached = false

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID || listenersAttached) return
    listenersAttached = true

    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (!link) return
      const phone = link.href.replace(/^tel:/, '')
      const w = window as Window & { gtag?: (...args: unknown[]) => void }
      w.gtag?.('event', 'phone_click', {
        event_category: 'engagement',
        event_label: phone,
        phone_number: phone,
        link_text: (link.textContent || '').trim().slice(0, 80),
      })
    }

    const handleSubmit = (e: Event) => {
      const form = e.target as HTMLFormElement | null
      if (!form || form.tagName !== 'FORM') return
      const name =
        form.getAttribute('name') ||
        form.id ||
        form.getAttribute('data-form-name') ||
        form.action ||
        'unnamed_form'
      const w = window as Window & { gtag?: (...args: unknown[]) => void }
      w.gtag?.('event', 'form_submit', {
        event_category: 'engagement',
        event_label: name,
        form_name: name,
      })
    }

    document.addEventListener('click', handleClick, true)
    document.addEventListener('submit', handleSubmit, true)
  }, [])

  if (!GA_ID) return null

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  )
}
