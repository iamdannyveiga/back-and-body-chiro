'use client';

import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

interface BookingFormProps {
  variant?: 'full' | 'compact';
}

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
}

function trackLeadEvent(name: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const w = window as AnalyticsWindow;
  w.gtag?.('event', name, params);
  w.clarity?.('event', name);
}

export default function BookingForm({ variant = 'full' }: BookingFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  // Spam time-trap: bots auto-submit near-instantly; humans take seconds.
  const [mountedAt] = useState(() => Date.now());
  const router = useRouter();

  // Persist ad-click attribution (Google gclid / Meta fbclid / UTMs) from the
  // landing URL so it survives on-site navigation and attaches to the lead —
  // this is what lets the CRM tag paid Google leads (parallel to Meta leads).
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const p = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    ['gclid', 'wbraid', 'gbraid', 'fbclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach((k) => {
      const v = p.get(k);
      if (v) found[k] = v;
    });
    if (Object.keys(found).length) {
      try { sessionStorage.setItem('bb_attribution', JSON.stringify(found)); } catch { /* private mode */ }
    }
  }, []);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    let attribution: Record<string, string> = {};
    try { attribution = JSON.parse(sessionStorage.getItem('bb_attribution') || '{}'); } catch { /* ignore */ }

    const payload = {
      firstName: data.get('first_name') as string,
      lastName: data.get('last_name') as string,
      phone: data.get('phone') as string,
      email: data.get('email') as string,
      concern: data.get('service') as string || data.get('message') as string || '',
      message: data.get('message') as string || '',
      // Ad-click attribution (gclid / fbclid / UTMs) forwarded to the CRM
      ...attribution,
      // Spam signals — checked server-side in /api/lead, stripped before CRM
      hp: (data.get('_gotcha') as string) || '',
      form_ts: mountedAt,
    };
    const visitReason = (data.get('service') as string) || 'not_provided';

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
        trackLeadEvent('generate_lead', {
          event_category: 'conversion',
          event_label: 'booking_form_success',
          form_name: `booking_form_${variant}`,
          form_variant: variant,
          lead_source: 'website',
          visit_reason: visitReason,
          value: 67,
          currency: 'USD',
        });
        trackLeadEvent('lead_submit_success', {
          event_category: 'conversion',
          event_label: 'lead_forwarded_to_chiroflow',
          form_name: `booking_form_${variant}`,
          form_variant: variant,
          lead_source: 'website',
          visit_reason: visitReason,
        });
        form.reset();
        // Track funnel event
        fetch('/api/funnel/event', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'lead-submitted',
            slug: 'bradley-krawczyk',
            source: 'Website',
            formName: `booking_form_${variant}`,
            visitReason,
          }),
        }).catch(() => {});
        // Redirect to schedule appointment; email is the only field the
        // ChiroHD intake scheduler can prefill from the URL
        router.push(
          payload.email
            ? `/schedule-appointment?email=${encodeURIComponent(payload.email)}`
            : '/schedule-appointment'
        );
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-mint/10 text-mint flex items-center justify-center mx-auto mb-4">
          <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3 className="text-xl font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Request Received</h3>
        <p className="text-text/70 text-sm">Redirecting you to schedule your appointment. You can also call us at <a href="tel:+15862071624" className="text-mint font-semibold">(586) 207-1624</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} data-form-name={`booking_form_${variant}`}>
      {/* Honeypot: invisible to humans, bots fill it. type=text (not hidden) so
          naive bots treat it as a real field; CSS-hidden + untabbable. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
        <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="form-group"><input type="text" name="first_name" placeholder="First Name" required /></div>
        <div className="form-group"><input type="text" name="last_name" placeholder="Last Name" required /></div>
      </div>
      <div className="form-group mb-3"><input type="tel" name="phone" placeholder="Phone" required /></div>
      <div className="form-group mb-3"><input type="email" name="email" placeholder="Email" required /></div>
      <div className="form-group mb-3">
        <label htmlFor="service-select" className="sr-only">What brings you in</label>
        <select id="service-select" name="service" defaultValue="" aria-label="What brings you in">
          {variant === 'full' ? (
            <>
              <option value="" disabled>What brings you in? (optional)</option>
              <option>Back Pain</option>
              <option>Neck Pain</option>
              <option>Headaches / Migraines</option>
              <option>Sciatica</option>
              <option>Spinal Decompression</option>
              <option>Massage Therapy</option>
              <option>Pediatric / Prenatal</option>
              <option>Sports Injury</option>
              <option>Auto / Work Injury</option>
              <option>Nutrition</option>
              <option>General Wellness</option>
              <option>Other</option>
            </>
          ) : (
            <>
              <option value="" disabled>Reason for visit (optional)</option>
              <option>Back Pain</option>
              <option>Neck Pain</option>
              <option>Headaches</option>
              <option>Sciatica</option>
              <option>General Wellness</option>
              <option>Other</option>
            </>
          )}
        </select>
      </div>
      <div className="form-group mb-4">
        <textarea
          name="message"
          placeholder={variant === 'full' ? 'Anything else Dr. Brad should know? (optional)' : 'Tell us more (optional)'}
          rows={3}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full btn btn--teal justify-center disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Book My $67 Visit \u2192'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again or call (586) 207-1624.</p>
      )}
    </form>
  );
}
