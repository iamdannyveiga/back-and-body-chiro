import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import BookingForm from '@/components/BookingForm';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, SciaticaIcon, DiscIcon } from '@/components/Icons';

// PAGES-1 city page, generated from the staged spec
// /home/codex/projects/automation-framework/clients/back-and-body-chiro/data/staged-city-pages/softwave-therapy-sterling-heights-mi.json
// by /root/seomaxx/pages/gen_backbody.py. Site component system unchanged.
// Sentences in the spec claiming Saturday hours were dropped at build time:
// the live site states "Closed Saturday and Sunday" (app/page.tsx:100,
// app/contact/page.tsx:58, app/faq/page.tsx:55); GBP hours are null.
export const metadata: Metadata = {
  title: 'SoftWave Therapy in Sterling Heights, MI',
  description: 'SoftWave therapy for Sterling Heights patients at Back and Body Chiropractic Center in Shelby Township. No surgery, no downtime. Call (586) 207-1624 to book.',
  alternates: {
    canonical: '/softwave-therapy-sterling-heights-mi',
  },
  openGraph: {
    title: 'SoftWave Therapy in Sterling Heights, MI',
    description: 'SoftWave therapy for Sterling Heights patients at Back and Body Chiropractic Center in Shelby Township. No surgery, no downtime. Call (586) 207-1624 to book.',
    url: 'https://backandbodydoc.com/softwave-therapy-sterling-heights-mi',
    siteName: 'Back and Body Chiropractic Center',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/services/softwave-therapy-sterling-heights-mi.webp' }],
  },
};

export default function SoftwaveTherapySterlingHeightsMiPage() {
  const faqItems = [
  {
    "question": "Is your SoftWave office in Sterling Heights?",
    "answer": "No. Our office is at 55130 Van Dyke Avenue #25 in Shelby Charter Township, at 25 Mile and Van Dyke. We serve patients from the area there."
  },
  {
    "question": "Is SoftWave therapy FDA-cleared?",
    "answer": "Yes. SoftWave is FDA 510(k) cleared for activation of connective tissue, treatment of pain and improving blood supply."
  },
  {
    "question": "Does SoftWave hurt?",
    "answer": "Most patients feel mild pressure or a tapping sensation. Sessions last about 10 to 15 minutes and there is no downtime."
  },
  {
    "question": "How many SoftWave sessions will I need?",
    "answer": "A typical plan is 6 to 12 sessions depending on the condition and how long you have had it. Dr. Brad builds the plan around your situation."
  },
  {
    "question": "Does insurance cover SoftWave?",
    "answer": "Most plans do not cover SoftWave yet. Our team will explain pricing up front so there are no surprises."
  }
];

  const businessSchema = {
  "@context": "https://schema.org",
  "@type": [
    "Chiropractor",
    "MedicalBusiness"
  ],
  "name": "Back and Body Chiropractic Center",
  "url": "https://backandbodydoc.com/softwave-therapy-sterling-heights-mi",
  "telephone": "+15862071624",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "55130 Van Dyke Avenue #25",
    "addressLocality": "Shelby Charter Township",
    "addressRegion": "MI",
    "postalCode": "48317",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Sterling Heights, MI"
  },
  "makesOffer": {
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": "SoftWave Therapy"
    }
  }
};

  const serviceNode = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'SoftWave Therapy',
    url: 'https://backandbodydoc.com/softwave-therapy-sterling-heights-mi',
    areaServed: { '@type': 'City', name: 'Sterling Heights, MI' },
    provider: { '@type': 'Chiropractor', '@id': 'https://backandbodydoc.com/#organization', name: 'Back and Body Chiropractic Center' },
  };

  const breadcrumbNode = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://backandbodydoc.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://backandbodydoc.com/#services' },
      { '@type': 'ListItem', position: 3, name: 'SoftWave Therapy in Sterling Heights', item: 'https://backandbodydoc.com/softwave-therapy-sterling-heights-mi' },
    ],
  };

  return (
    <>
      <PageHero
        aside={(
    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-xl">
      <h3 className="text-xl font-bold text-teal mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Claim your $67 visit</h3>
      <p className="text-sm text-text/60 mb-5">Fill this out and we&apos;ll reach out to lock in your time.</p>
      <BookingForm variant="compact" defaultService='SoftWave Therapy' />
    <p className="mt-4 text-sm text-text/70">Prefer to call? <a href="tel:+15862071624" className="text-teal font-semibold">(586) 207-1624</a></p>
</div>
        )}
        title={<>
          SoftWave Therapy <span className="text-mint">in Sterling Heights.</span>
        </>}
        subtitle='Regenerative SoftWave therapy at our Shelby Charter Township office on Van Dyke, serving patients from the area.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'SoftWave Therapy in Sterling Heights' },
        ]}
      />



      {/* SOFTWAVE THERAPY FOR STERLING HEIGHTS PATIENTS */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Overview</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>SoftWave Therapy for Sterling Heights Patients</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div className="prose-custom">
              <p>Back and Body Chiropractic Center is in Shelby Charter Township, in Vince and Joe's plaza at 25 Mile and Van Dyke. We do not have an office in Sterling Heights, but Van Dyke runs straight between the two communities, and many of our SoftWave patients live or work in Sterling Heights.</p>
              <p>SoftWave is a regenerative therapy that uses unfocused acoustic shockwaves to trigger the body's natural healing response. It is FDA 510(k) cleared for activation of connective tissue, treatment of pain and improving blood supply. There is no surgery, no medication and no downtime, so you can go right back to work or the gym after a session.</p>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/services/softwave-therapy-sterling-heights-mi.webp"
                  alt="SoftWave tissue regeneration therapy at Back and Body, serving Sterling Heights, MI"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW SOFTWAVE WORKS */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">How It Works</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>How SoftWave Works</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>When tissue has been injured for a long time, the healing process can stall. SoftWave sends acoustic waves deep into that tissue, which is designed to increase blood flow, activate resident stem cells and calm inflammation at the source instead of masking it with medication.</p>
              <p>Because the waves are unfocused, they spread across a wider treatment area than a narrow, focused device. Dr. Brad places the applicator over the injury or pain source, and most people feel mild pressure or a tapping sensation while it works.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONDITIONS DR. BRAD EVALUATES FOR SOFTWAVE */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="label">Conditions</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Conditions Dr. Brad Evaluates for SoftWave</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Feet, knees and hips</h3>
              <p className="text-sm text-text/70 leading-relaxed">Plantar fasciitis, Achilles tendonitis, knee pain and hip pain are frequent reasons local patients call about SoftWave.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Shoulders, elbows and wrists</h3>
              <p className="text-sm text-text/70 leading-relaxed">Rotator cuff injuries, shoulder pain, tennis and golfer's elbow and carpal tunnel are all on the list of conditions we evaluate.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Back pain, arthritis and neuropathy</h3>
              <p className="text-sm text-text/70 leading-relaxed">Chronic low back pain, arthritis, neuropathy, sports injuries and other soft tissue injuries may also be candidates, depending on your exam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT AT A SOFTWAVE SESSION */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">What to Expect</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>What to Expect at a SoftWave Session</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Your first step is an exam and an honest conversation about whether SoftWave fits your situation. If it does, ultrasound gel is applied to the treatment area and the SoftWave applicator delivers thousands of acoustic pulses into the tissue. Sessions usually take about 10 to 15 minutes.</p>
              <p>Many patients notice a change after the first session. A typical plan runs 6 to 12 sessions depending on the condition and how long you have had it. Dr. Brad checks in on your progress and adjusts the plan as needed rather than locking you into a packaged protocol.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* IS SOFTWAVE A GOOD FIT FOR YOU? */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Good Fit</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Is SoftWave a Good Fit for You?</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>SoftWave is often worth asking about if you have pain that has lingered for weeks or months, if rest and standard care have not helped, or if you would like to avoid injections or surgery. It is not the right answer for every problem, and part of your first visit is an honest assessment of whether it belongs in your plan at all.</p>
              <p>Before your appointment, think about when the pain started, what makes it better or worse and what you have already tried. Bring any imaging, reports or a list of medications you take. That background helps Dr. Brad make a clear recommendation quickly, so you leave your first visit knowing exactly what the next step is.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HONEST CARE, NO LONG-TERM CONTRACTS */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Our Promise</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Honest Care, No Long-Term Contracts</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Dr. Bradley Krawczyk, DC, opened Back and Body Chiropractic Center in 2011 and has cared for patients across Macomb and Oakland Counties ever since. The practice is built on thorough exams, clear explanations and care plans sized to your condition. There are no long-term contracts and no six-month packages.</p>
              <p>SoftWave can also be combined with chiropractic adjustments, spinal decompression or therapeutic massage when that makes sense for your case. If SoftWave is not the right tool, Dr. Brad will tell you so and explain what he recommends instead.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1='SoftWave therapy for Sterling Heights patients.' anchor='Start with the $67 visit.' withForm={false} />


      {/* RELATED SERVICES */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Related Services</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              <Link key="/spinal-decompression-shelby-township-mi" href="/spinal-decompression-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><DiscIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Spinal Decompression</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">Non-surgical disc relief for Sterling Heights patients.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Spinal Decompression &rarr;</div>
              </Link>
              <Link key="/shoulder-pain-treatment-shelby-township-mi" href="/shoulder-pain-treatment-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><SpineIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Shoulder Pain Treatment</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">A common SoftWave target, evaluated and treated on site.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Shoulder Pain Treatment &rarr;</div>
              </Link>
              <Link key="/chiropractic-care-shelby-township-mi" href="/chiropractic-care-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><SciaticaIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Chiropractic Care</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">The foundation every other care plan builds on.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Chiropractic Care &rarr;</div>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center mt-10">
              <Link href="/dr-brad" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">Meet Dr. Brad</Link>
              <Link href="/new-patients" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">New Patients</Link>
              <Link href="/schedule-appointment" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">Schedule an Appointment</Link>
              <Link href="/contact" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">Contact</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">FAQ</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">SoftWave Therapy </span><span className="font-extrabold">questions.</span>
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion items={faqItems} />
        </div>
      </section>


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceNode) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbNode) }}
      />
    </>
  );
}
