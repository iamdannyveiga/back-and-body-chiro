import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';

export const metadata: Metadata = {
  title: 'New Patient Paperwork | Back and Body Chiropractic Center',
  description:
    'Complete your new patient intake forms online before your first visit to Back and Body Chiropractic Center in Shelby Township, MI. Save time at check-in.',
  alternates: {
    canonical: '/new-patient-paperwork',
  },
};

export default function NewPatientPaperworkPage() {
  return (
    <>
      <PageHero
        title="New Patient Paperwork"
        subtitle="Complete your intake forms online before your visit to save time at check-in."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'New Patients', href: '/new-patients' },
          { label: 'Paperwork' },
        ]}
      />

      <ScrollReveal>
        <section className="py-20 bg-white">
          <div className="max-w-[800px] mx-auto px-5 sm:px-8">
            <h2
              className="text-[34px] md:text-[44px] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              <span className="font-normal">Complete your </span>
              <span className="font-extrabold">forms online.</span>
            </h2>
            <p className="text-text/70 text-[1.05rem] leading-relaxed mb-10">
              Save 10-15 minutes at your first appointment by completing your
              new patient intake forms before you arrive. Click the button below
              to access the secure online forms through ChiroHD.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Online Forms Card */}
              <div className="bg-surface rounded-xl p-8 border border-border/50 text-center">
                <div className="w-14 h-14 rounded-full bg-mint/10 text-teal flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="8" y1="13" x2="16" y2="13" opacity="0.5" />
                    <line x1="8" y1="17" x2="14" y2="17" opacity="0.5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  New Patient Intake Forms
                </h3>
                <p className="text-text/60 text-sm mb-5">
                  Health history, current concerns, and consent forms. Takes about 10 minutes.
                </p>
                <a
                  href="https://www.chirohd.com/office-forms/679/back-and-body-chiropractic-center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--mint inline-flex justify-center"
                >
                  Complete Forms Online &rarr;
                </a>
              </div>

              {/* In-Office Card */}
              <div className="bg-surface rounded-xl p-8 border border-border/50 text-center">
                <div className="w-14 h-14 rounded-full bg-mint/10 text-teal flex items-center justify-center mx-auto mb-4">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                  Prefer to Fill Out In-Office?
                </h3>
                <p className="text-text/60 text-sm mb-5">
                  No problem. Just arrive 10-15 minutes early and we will have everything ready for you.
                </p>
                <Link href="/schedule-appointment" className="btn btn--mint inline-flex justify-center">
                  Book Your Visit &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-surface rounded-xl p-8 border border-border/50">
              <h3 className="text-lg font-bold text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                What to Bring to Your First Visit
              </h3>
              <ul className="space-y-3 text-text/70 text-[0.95rem]">
                <li className="flex gap-3 items-start">
                  <span className="text-mint font-bold mt-0.5">&#10003;</span>
                  <span>Photo ID (driver&apos;s license or state ID)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-mint font-bold mt-0.5">&#10003;</span>
                  <span>Insurance card (if applicable)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-mint font-bold mt-0.5">&#10003;</span>
                  <span>Any previous imaging (X-rays, MRIs) if you have them</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-mint font-bold mt-0.5">&#10003;</span>
                  <span>Comfortable clothing</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <p className="text-text/60 text-sm">
                Questions about your first visit? Call us at{' '}
                <a href="tel:+15864865235" className="text-teal font-bold">
                  (586) 486-5235
                </a>
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ConversionCTA />
    </>
  );
}
