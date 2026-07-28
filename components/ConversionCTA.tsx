import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import BookingForm from './BookingForm';

interface ConversionCTAProps {
  line1?: string;
  anchor?: string;
  note?: string;
  /**
   * Render the lead-capturing BookingForm inline (default). Set false on pages
   * that already render their own BookingForm (e.g. /contact) to avoid a
   * duplicate form. When false this falls back to the original button-only band.
   */
  withForm?: boolean;
}

const NOISE_OVERLAY =
  "absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.04] pointer-events-none";

export default function ConversionCTA({
  line1 = '$67 gets you started.',
  anchor = 'Just honest care.',
  note = 'Open Saturdays · Evening hours Mon-Wed',
  withForm = true,
}: ConversionCTAProps) {
  // Button-only variant — pages that already capture (e.g. /contact).
  if (!withForm) {
    return (
      <section id="book" className="py-[120px] bg-teal relative text-center overflow-hidden">
        <div className={NOISE_OVERLAY} />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-[36px] md:text-[36px] font-normal text-text-light leading-[1.4]" style={{ fontFamily: 'var(--font-heading)' }}>
              {line1}
            </div>
            <div className="text-[38px] md:text-[52px] font-extrabold text-mint mt-2 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              {anchor}
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
              <Link href="/schedule-appointment" className="btn btn--mint">Book My $67 Visit &rarr;</Link>
              <a href="tel:5862071624" className="btn btn--outline">Call (586) 207-1624</a>
            </div>
            <p className="text-sm text-text-light/40">{note}</p>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  // Capture-first variant (default) — the inline form POSTs to /api/lead and
  // logs the lead to the CRM *before* the ChiroHD scheduler / phone hand-off, so
  // every service & condition page actually captures an organic lead.
  return (
    <section id="book" className="py-[100px] bg-teal relative overflow-hidden">
      <div className={NOISE_OVERLAY} />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14 items-center max-w-[1040px] mx-auto">
            {/* Value prop + call fallback */}
            <div className="text-center md:text-left">
              <div className="text-[30px] md:text-[34px] font-normal text-text-light leading-[1.35]" style={{ fontFamily: 'var(--font-heading)' }}>
                {line1}
              </div>
              <div className="text-[36px] md:text-[46px] font-extrabold text-mint mt-2 mb-5" style={{ fontFamily: 'var(--font-heading)' }}>
                {anchor}
              </div>
              <p className="text-text-light/75 text-base leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                Request your $67 first visit &mdash; consultation, exam, X-rays if needed, and your first adjustment. No contracts, no pressure.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap">
                <span className="text-text-light/60 text-sm">Prefer to talk?</span>
                <a href="tel:5862071624" className="btn btn--outline">Call (586) 207-1624</a>
              </div>
              <p className="text-sm text-text-light/40 mt-5">{note}</p>
            </div>

            {/* Capturing form card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-left">
              <h3 className="text-xl font-bold text-teal mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                Book your $67 first visit
              </h3>
              <p className="text-text/60 text-sm mb-5">Takes 30 seconds &mdash; we&apos;ll call to confirm your time.</p>
              <BookingForm variant="compact" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
