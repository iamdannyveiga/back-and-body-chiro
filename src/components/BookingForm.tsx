'use client';

import { useState, FormEvent } from 'react';

interface BookingFormProps {
  variant?: 'full' | 'compact';
}

const BASIN_ENDPOINT = 'https://usebasin.com/f/14c68df74540';

export default function BookingForm({ variant = 'full' }: BookingFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(BASIN_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
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
        <p className="text-text/70 text-sm">We&apos;ll get back to you within 24 hours. You can also call us at <a href="tel:+15862071624" className="text-mint font-semibold">(586) 207-1624</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_gotcha" />
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="form-group"><input type="text" name="first_name" placeholder="First Name" required /></div>
        <div className="form-group"><input type="text" name="last_name" placeholder="Last Name" required /></div>
      </div>
      <div className="form-group mb-3"><input type="tel" name="phone" placeholder="Phone" required /></div>
      <div className="form-group mb-3"><input type="email" name="email" placeholder="Email" required /></div>
      <div className="form-group mb-3">
        <select name="service" defaultValue="">
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
              <option>Nutrition / Weight Loss</option>
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
        className="w-full btn btn--mint justify-center disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending...' : 'Book My $55 Visit \u2192'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-sm mt-2 text-center">Something went wrong. Please try again or call (586) 207-1624.</p>
      )}
    </form>
  );
}
