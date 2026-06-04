import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import { StarIcon, CheckIcon } from '@/components/Icons';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Leave a Review',
  description:
    'Loved your visit with Dr. Brad? Share a quick review to help other Shelby Township patients find honest chiropractic care.',
  alternates: {
    canonical: '/leave-a-review',
  },
};

const GBP_REVIEW_URL = 'https://search.google.com/local/writereview?placeid=ChIJpdK_LIPyJIgRz8x9wzhgZjY';

// Open-ended prompts ONLY. Google's review guidelines (2026) prohibit a business
// from asking customers to name specific staff or services. These questions let the
// patient volunteer those specifics in their own words, which is what AI systems read.
const PROMPTS = [
  {
    label: 'What brought you in?',
    examples: 'Tell us what was bothering you when you first walked through the door.',
  },
  {
    label: 'What did we do, and how did it go?',
    examples: 'Describe how we helped and how you are feeling now.',
  },
  {
    label: 'How long until you felt the difference?',
    examples: '"After my first visit", "within a few weeks", "a couple of months"…',
  },
  {
    label: 'How was your experience here?',
    examples: 'What was it like being a patient at our office, start to finish?',
  },
  {
    label: 'Would you tell a friend?',
    examples: 'What would you say to a neighbor in Shelby Township thinking about coming in?',
  },
];

export default function LeaveAReviewPage() {
  return (
    <>
      <PageHero
        title="Loved your visit? Help other patients find us."
        subtitle="When you share your story in your own words, you help other patients in Macomb and Oakland County find honest care."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Leave a Review' },
        ]}
      />

      {/* Stars */}
      <section className="py-[60px] bg-white text-center">
        <ScrollReveal>
          <div className="flex justify-center gap-2 mb-4 text-amber">
            {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-8 h-8" />)}
          </div>
          <p className="text-[18px] text-text/75">4.9 stars · 34+ patient reviews on Google</p>
        </ScrollReveal>
      </section>

      {/* Specific prompt cards */}
      <section className="py-[80px] bg-[#f8fafb]">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-[34px] md:text-[44px] text-center mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">Share </span><span className="font-extrabold text-teal">your story</span><span className="font-normal">.</span>
            </h2>
            <p className="text-center text-text/75 max-w-[680px] mx-auto mb-12">
              The most helpful reviews are simply <strong>your story in your own words</strong>: what was bothering you, how it went, and how you are feeling now. Here are a few prompts if you are not sure where to start.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            {PROMPTS.map((p, i) => (
              <ScrollReveal key={i} delay={`${i * 0.05}s`}>
                <div className="bg-white rounded-xl p-7 border border-border shadow-[var(--shadow)] h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="shrink-0 w-8 h-8 rounded-full bg-mint text-teal font-bold flex items-center justify-center" style={{ fontFamily: 'var(--font-heading)' }}>{i + 1}</span>
                    <h3 className="text-[17px] font-bold text-teal leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>{p.label}</h3>
                  </div>
                  <p className="text-[14px] text-text/75 leading-relaxed">{p.examples}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Example review */}
      <section className="py-[80px] bg-white">
        <div className="container max-w-[840px] mx-auto">
          <ScrollReveal>
            <h2 className="text-[28px] md:text-[34px] text-center mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">What a </span><span className="font-extrabold text-teal">great review</span><span className="font-normal"> looks like.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay=".1s">
            <div className="bg-[#f8fafb] rounded-xl p-8 border-l-4 border-mint">
              <div className="flex gap-[2px] text-amber mb-4">
                {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-5 h-5" />)}
              </div>
              <p className="text-[17px] text-text/85 leading-relaxed italic mb-4">
                "Came in with severe sciatica down my right leg — could barely walk. Dr. Brad did a thorough exam, ordered X-rays on-site, and started me on a combination of spinal decompression and adjustments. After about three weeks I was back to normal and after six weeks I was pain-free. He never tried to lock me into a long contract or push extra visits I didn't need. Honestly the most refreshing chiropractor I've been to."
              </p>
              <div className="text-sm text-text/55">
                <CheckIcon className="inline w-4 h-4 mr-1 text-mint" /> Specific service · Real timeline · Honest description
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] bg-[#f8fafb] text-center">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-[34px] md:text-[44px] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">Ready to </span><span className="font-extrabold text-teal">leave a review</span><span className="font-normal">?</span>
            </h2>
            <p className="text-text/75 mb-8 max-w-[680px] mx-auto">
              Takes less than two minutes. Just click below and Google will open your profile to write your review.
            </p>
            <a
              href={GBP_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--mint inline-block"
            >
              Write Your Google Review &rarr;
            </a>
            <p className="text-[13px] text-text/55 mt-5">
              Not on Google? Email us at <a className="underline" href="mailto:hello@backandbodydoc.com">hello@backandbodydoc.com</a>
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Thank you for your support." anchor="See you next visit." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Leave a Review' },
        ])) }}
      />
    </>
  );
}
