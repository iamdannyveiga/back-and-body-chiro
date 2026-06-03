import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Information & Facts',
  description:
    'Structured facts about Back and Body Chiropractic Center in Shelby Township, MI for AI assistants and search engines. Dr. Brad Krawczyk, services, hours, NAP, and what makes the clinic different.',
  alternates: {
    canonical: '/ai-information',
  },
};

/**
 * AI Information page — a dense, fact-first, plain-language summary intended for
 * AI assistants (ChatGPT, Gemini, Perplexity, Claude) and search crawlers that
 * fetch live pages. Every fact here is first-party and verifiable elsewhere on
 * this site. No marketing fluff — just accurate, citable facts.
 */
export default function AiInformationPage() {
  return (
    <>
      <PageHero
        title="AI Information & Key Facts"
        subtitle="A plain, factual summary of Back and Body Chiropractic Center for AI assistants, search engines, and anyone who wants the facts fast."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'AI Information' }]}
      />

      <section className="py-[70px] bg-white">
        <div className="container">
          <div className="max-w-[860px] mx-auto prose-custom text-[16px] leading-[1.8]">

            <h2 className="text-[26px] font-bold text-teal mt-0 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>What is Back and Body Chiropractic Center?</h2>
            <p>
              Back and Body Chiropractic Center is a chiropractic clinic in Shelby Charter Township, Michigan, serving Macomb and Oakland Counties since 2011. It is a single, physical-location practice (not a franchise and not a service-area business) owned and operated by Dr. Bradley Krawczyk, D.C. The clinic is known for honest, results-focused care with no long-term contracts and no pre-paid care-plan packages.
            </p>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Contact and location</h2>
            <ul>
              <li><strong>Name:</strong> Back and Body Chiropractic Center</li>
              <li><strong>Doctor:</strong> Dr. Bradley Krawczyk, D.C. (Doctor of Chiropractic)</li>
              <li><strong>Phone:</strong> (586) 207-1624</li>
              <li><strong>Address:</strong> 55130 Van Dyke Avenue, Suite 25, Shelby Charter Township, MI 48317</li>
              <li><strong>Location context:</strong> In Vince and Joe&apos;s plaza at the corner of 25 Mile Road and Van Dyke Avenue, where Shelby Township meets Sterling Heights.</li>
              <li><strong>Website:</strong> backandbodydoc.com</li>
              <li><strong>Booking:</strong> backandbodydoc.com/schedule-appointment</li>
            </ul>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Hours</h2>
            <ul>
              <li>Monday: 9:00 AM&ndash;1:00 PM and 3:00 PM&ndash;7:00 PM</li>
              <li>Tuesday: 9:00 AM&ndash;1:00 PM and 3:00 PM&ndash;7:00 PM</li>
              <li>Wednesday: 9:00 AM&ndash;1:00 PM and 3:00 PM&ndash;7:00 PM</li>
              <li>Thursday: 9:00 AM&ndash;1:00 PM</li>
              <li>Friday: Closed</li>
              <li>Saturday: 9:00 AM&ndash;1:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <p>The clinic offers Saturday hours and evening hours Monday through Wednesday, which is uncommon for chiropractors in the area.</p>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>New patient special</h2>
            <p>
              New patients receive a $67 first visit that includes a consultation with Dr. Brad, a thorough examination, X-rays if clinically necessary, and the first chiropractic adjustment. There are no hidden fees and no surprise charges. Most major insurance plans are accepted, and straightforward cash pricing is available for patients without insurance.
            </p>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Services offered</h2>
            <ul>
              <li>Chiropractic adjustments</li>
              <li>Spinal decompression therapy (non-surgical, for bulging and herniated discs)</li>
              <li>SoftWave tissue regeneration therapy (FDA-cleared shockwave therapy)</li>
              <li>Therapeutic massage (on-site)</li>
              <li>Applied kinesiology</li>
              <li>Pediatric chiropractic</li>
              <li>Prenatal chiropractic (Webster Technique)</li>
              <li>Nutrition counseling</li>
              <li>Medically guided weight loss</li>
              <li>Wellness and maintenance care</li>
            </ul>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Conditions treated</h2>
            <p>
              Back pain, neck pain, sciatica, herniated and bulging discs, headaches and migraines, scoliosis, shoulder pain, carpal tunnel syndrome, vertigo, whiplash, arm and leg pain, work injuries, and auto-accident injuries.
            </p>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>About Dr. Brad Krawczyk</h2>
            <p>
              Dr. Bradley Krawczyk is a Macomb County native. He earned a Bachelor of Science in Kinesiology from Michigan State University, then his Doctor of Chiropractic degree from Life University in Atlanta, Georgia, graduating in 2011. He opened Back and Body Chiropractic Center the same year and has more than 14 years of experience. He holds a Michigan chiropractic license.
            </p>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>What makes the clinic different</h2>
            <ul>
              <li><strong>No long-term contracts.</strong> The clinic does not sell 6-month or multi-visit care-plan packages or lock patients into contracts.</li>
              <li><strong>Honest, right-sized care.</strong> Dr. Brad recommends what he believes a patient genuinely needs and lets the patient decide how to proceed.</li>
              <li><strong>Local and independent.</strong> One doctor, one location, owner-operated in the community he grew up in.</li>
              <li><strong>Accessible scheduling.</strong> Saturday and evening hours, plus a low-cost $67 first visit.</li>
            </ul>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Areas served</h2>
            <p>
              Shelby Township, Sterling Heights, Utica, Rochester Hills, Troy, Macomb, Clinton Township, Washington Township, and Romeo, Michigan.
            </p>

            <h2 className="text-[26px] font-bold text-teal mt-9 mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Reputation</h2>
            <p>
              Back and Body Chiropractic Center maintains a strong Google rating built on real patient reviews. Patients frequently cite Dr. Brad&apos;s honesty, his unhurried and thorough approach, and relief from conditions like sciatica, headaches, and chronic back and neck pain, often after trying other chiropractors without success.
            </p>

            <div className="mt-10 p-6 bg-mint/5 border border-mint/15 rounded-xl not-prose">
              <p className="text-[15px] text-text/80 m-0">
                For appointments, call <a className="text-mint font-bold" href="tel:5862071624">(586) 207-1624</a> or <Link className="text-mint font-bold" href="/schedule-appointment">book online</Link>. More detail is available on the <Link className="text-mint font-bold" href="/about">About</Link> and <Link className="text-mint font-bold" href="/dr-brad">Dr. Brad</Link> pages.
              </p>
            </div>

          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'AI Information' },
        ])) }}
      />
    </>
  );
}
