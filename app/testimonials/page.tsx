import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import { StarIcon, FacebookIcon, CheckIcon } from '@/components/Icons';
import { pageReviews } from '@/lib/google-reviews.mjs';

export const metadata: Metadata = {
  title: "Patient Testimonials & Reviews",
  description:
    "Read real patient reviews for Back and Body Chiropractic, a trusted Shelby Charter Township chiropractor offering personalized spinal care.",
  alternates: {
    canonical: '/testimonials',
  },
};

const [featuredReview, ...reviews] = pageReviews();

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title={<>
          <span className="font-normal">Real patients. </span><span className="text-mint">Real results.</span>
        </>}
        subtitle="4.9 stars on Google. 34+ reviews. Every one earned through results, not incentives."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Reviews' },
        ]}
      />

      {/* A: FEATURED REVIEW */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[800px] mx-auto">
              <div className="bg-[#f8fafb] border-l-4 border-mint rounded-xl p-14">
                <div className="text-[100px] text-mint/15 leading-none font-serif -mb-8">&ldquo;</div>
                <p className="text-2xl text-teal leading-[1.55] italic">
                  {featuredReview.text}
                </p>
                <div className="text-base text-text/50 mt-5">{featuredReview.name} <span className="text-text/30">&middot; Google Review &middot; {featuredReview.when}</span></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* B: ALL REVIEWS — MASONRY */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">All Reviews</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">What patients say about </span><span className="font-extrabold">Dr. Brad.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="columns-1 md:columns-2 lg:columns-3 gap-5 max-w-[1100px] mx-auto">
              {reviews.map((review) => (
                <div key={review.review_id} className="break-inside-avoid mb-5 bg-white rounded-xl p-7 shadow-sm">
                  <div className="inline-block bg-mint/10 text-mint text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-3">
                    {review.when}
                  </div>
                  <div className="flex gap-[2px] text-amber mb-3">
                    {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-3.5 h-3.5" />)}
                  </div>
                  <p className="text-[15px] text-text/80 leading-relaxed mb-3">{review.text}</p>
                  <div className="text-sm text-text/45">{review.name} <span className="text-text/25">&middot; Google Review</span></div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* C: THE PROMISE CALLOUT */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mx-auto border-[3px] border-mint/30 rounded-xl p-10 relative">
              <div className="inline-block bg-mint text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-[6px] rounded-full mb-3">
                Our Promise
              </div>
              <p className="text-base text-text/80 leading-[1.8]">
                Every review is earned through results, not incentives. Dr. Brad doesn&apos;t offer discounts for reviews, doesn&apos;t ask for 5-star ratings, and doesn&apos;t cherry-pick what gets posted. <strong>He lets the work speak for itself.</strong> After 14 years, the results are the best marketing.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* D: SHARE YOUR EXPERIENCE */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="label">Share Your Experience</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Had a great visit? </span><span className="font-extrabold">Tell others.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex justify-center gap-5 flex-wrap">
              <a href="https://search.google.com/local/writereview?placeid=ChIJe8vRnKDOJIgRT5ZtXa8o7zc" target="_blank" rel="noopener noreferrer" className="btn btn--mint min-w-[180px] justify-center">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  <path d="M8 12l2.5 2.5L16 9" />
                </svg>
                Google Review
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587075946629&sk=reviews" target="_blank" rel="noopener noreferrer" className="btn btn--outline-dark min-w-[180px] justify-center">
                <FacebookIcon className="w-[18px] h-[18px]" />
                Facebook Review
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Join 34+ happy patients." anchor="$67 to get started." />
    </>
  );
}
