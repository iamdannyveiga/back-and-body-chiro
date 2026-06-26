'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA4_ID

let listenersAttached = false
type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void
  clarity?: (...args: unknown[]) => void
}

// Read all active split-test variants from cookies → tag GA4 events with them
function readSplitTestVariants(): Record<string, string> {
  if (typeof document === 'undefined') return {}
  const out: Record<string, string> = {}
  for (const cookie of document.cookie.split(';')) {
    const [k, v] = cookie.trim().split('=')
    if (k && k.startsWith('spl-var-') && (v === 'a' || v === 'b')) {
      out[`variant_${k.replace('spl-var-', '').replace(/-/g, '_')}`] = v
    }
  }
  return out
}

function trackClientEvent(name: string, params: Record<string, unknown>) {
  const w = window as AnalyticsWindow
  w.gtag?.('event', name, params)
  w.clarity?.('event', name)
}

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
      trackClientEvent('phone_click', {
        event_category: 'engagement',
        event_label: phone,
        phone_number: phone,
        link_text: (link.textContent || '').trim().slice(0, 80),
        ...readSplitTestVariants(),
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
      trackClientEvent('form_submit', {
        event_category: 'engagement',
        event_label: name,
        form_name: name,
        ...readSplitTestVariants(),
      })
    }

    // Track variant CTA clicks specifically (more direct than tel-only)
    const handleVariantClick = (e: Event) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const el = target.closest('[data-spl-variant]') as HTMLElement | null
      if (!el) return
      const [testId, variant] = (el.getAttribute('data-spl-variant') || '').split(':')
      if (!testId || !variant) return
      trackClientEvent('split_test_cta_click', {
        event_category: 'split_test',
        test_id: testId,
        variant,
        text: (el.textContent || '').trim().slice(0, 80),
        ...readSplitTestVariants(),
      })
    }

    document.addEventListener('click', handleClick, true)
    document.addEventListener('click', handleVariantClick, true)
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
