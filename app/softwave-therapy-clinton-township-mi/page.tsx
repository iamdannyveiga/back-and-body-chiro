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
// /home/codex/projects/automation-framework/clients/back-and-body-chiro/data/staged-city-pages/softwave-therapy-clinton-township-mi.json
// by /root/seomaxx/pages/gen_backbody.py. Site component system unchanged.
// Sentences in the spec claiming Saturday hours were dropped at build time:
// the live site states "Closed Saturday and Sunday" (app/page.tsx:100,
// app/contact/page.tsx:58, app/faq/page.tsx:55); GBP hours are null.
export const metadata: Metadata = {
  title: 'SoftWave Therapy in Clinton Township, MI',
  description: 'SoftWave therapy for Clinton Township patients at Back and Body Chiropractic Center in nearby Shelby Township. No surgery, no downtime. Call (586) 207-1624.',
  alternates: {
    canonical: '/softwave-therapy-clinton-township-mi',
  },
  openGraph: {
    title: 'SoftWave Therapy in Clinton Township, MI',
    description: 'SoftWave therapy for Clinton Township patients at Back and Body Chiropractic Center in nearby Shelby Township. No surgery, no downtime. Call (586) 207-1624.',
    url: 'https://backandbodydoc.com/softwave-therapy-clinton-township-mi',
    siteName: 'Back and Body Chiropractic Center',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/services/softwave-therapy-clinton-township-mi.webp' }],
  },
};

export default function SoftwaveTherapyClintonTownshipMiPage() {
  const faqItems = [
  {
    "question": "Is there a SoftWave office in Clinton Township?",
    "answer": "Our only office is at 55130 Van Dyke Avenue #25 in Shelby Charter Township. We serve SoftWave patients from the area at that location."
  },
  {
    "question": "Is SoftWave FDA-cleared?",
    "answer": "Yes. SoftWave is FDA 510(k) cleared for activation of connective tissue, treatment of pain and improving blood supply."
  },
  {
    "question": "How long does a session take?",
    "answer": "Most SoftWave sessions take about 10 to 15 minutes, with no downtime afterward."
  },
  {
    "question": "How many sessions are typical?",
    "answer": "Plans usually run 6 to 12 sessions, depending on the condition and how long it has been present."
  },
  {
    "question": "Can I combine SoftWave with chiropractic care?",
    "answer": "Yes. Dr. Brad may pair SoftWave with adjustments, spinal decompression or massage when that supports your recovery."
  }
];

  const businessSchema = {
  "@context": "https://schema.org",
  "@type": [
    "Chiropractor",
    "MedicalBusiness"
  ],
  "name": "Back and Body Chiropractic Center",
  "url": "https://backandbodydoc.com/softwave-therapy-clinton-township-mi",
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
    "name": "Clinton Township, MI"
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
    url: 'https://backandbodydoc.com/softwave-therapy-clinton-township-mi',
    areaServed: { '@type': 'City', name: 'Clinton Township, MI' },
    provider: { '@type': 'Chiropractor', '@id': 'https://backandbodydoc.com/#organization', name: 'Back and Body Chiropractic Center' },
  };

  const breadcrumbNode = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://backandbodydoc.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://backandbodydoc.com/#services' },
      { '@type': 'ListItem', position: 3, name: 'SoftWave Therapy in Clinton Township', item: 'https://backandbodydoc.com/softwave-therapy-clinton-township-mi' },
    ],
  };

  return (
    <>
      <PageHero
        title={<>
          SoftWave Therapy <span className="text-mint">in Clinton Township.</span>
        </>}
        subtitle='Regenerative SoftWave therapy at our Shelby Charter Township office, close to home for patients in the area.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'SoftWave Therapy in Clinton Township' },
        ]}
      />

      {/* HERO LEAD FORM — site pattern (chiropractic-care page): above-the-fold
          capture posting to /api/lead. LEAD_GEN_FORM_RULES: money pages carry a
          hero form with all fields visible. */}
      <section id="get-started" className="py-14 md:py-16 bg-teal relative overflow-hidden scroll-mt-20">
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 items-center max-w-[1080px] mx-auto">
            <div className="text-center lg:text-left">
              <span className="inline-block bg-mint text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-[6px] rounded-full mb-4">
                $67 New Patient Visit
              </span>
              <h2 className="text-[32px] md:text-[42px] font-extrabold text-white mb-4 leading-[1.15]" style={{ fontFamily: 'var(--font-heading)' }}>
                {'Book your SoftWave visit with Dr. Brad.'}
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6 max-w-[520px] mx-auto lg:mx-0">
                {'Regenerative SoftWave therapy close to home for Clinton Township patients. Fill this out and we\'ll reach out to lock in your time.'}
              </p>
              <ul className="space-y-2 text-white/90 text-sm inline-block text-left">
                <li className="flex items-center gap-2"><span className="text-mint font-bold">&#10003;</span> 14+ years of experience</li>
                <li className="flex items-center gap-2"><span className="text-mint font-bold">&#10003;</span> 4.9-star rated by local patients</li>
                <li className="flex items-center gap-2"><span className="text-mint font-bold">&#10003;</span> No long-term care-plan pressure</li>
              </ul>
              <p className="mt-6 text-white/80 text-sm">
                Prefer to call? <a href="tel:+15862071624" className="text-mint font-semibold">(586) 207-1624</a>
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-7 shadow-xl">
              <h3 className="text-xl font-bold text-teal mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Claim your $67 visit</h3>
              <p className="text-sm text-text/60 mb-5">Fill this out and we&apos;ll reach out to lock in your time.</p>
              <BookingForm variant="compact" defaultService='SoftWave Therapy' />
            </div>
          </div>
        </div>
      </section>


      {/* SOFTWAVE THERAPY FOR CLINTON TOWNSHIP RESIDENTS */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Overview</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>SoftWave Therapy for Clinton Township Residents</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div className="prose-custom">
              <p>If you live in Clinton Township and have pain that will not settle down, SoftWave therapy may be worth a look. Back and Body Chiropractic Center is in neighboring Shelby Charter Township, in Vince and Joe's plaza at 25 Mile and Van Dyke. We do not have a Clinton Township office, but your community is part of the area we serve.</p>
              <p>SoftWave uses unfocused electrohydraulic shockwaves to trigger the body's own healing response. It is FDA 510(k) cleared for activation of connective tissue, treatment of pain and improving blood supply, and it involves no surgery, no medication and no recovery period.</p>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/services/softwave-therapy-clinton-township-mi.webp"
                  alt="SoftWave therapy device at Back and Body Chiropractic Center, serving Clinton Township, MI"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY PATIENTS TRY SOFTWAVE */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Why SoftWave</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Why Patients Try SoftWave</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Many people who ask about SoftWave have already tried rest, stretching, braces or pain medication. When tissue has been irritated for months, the repair process can stall. SoftWave is designed to restart it by increasing blood flow, activating resident stem cells and reducing inflammation where it starts.</p>
              <p>The acoustic waves reach deep into tissue and spread across a broad area, so Dr. Brad can treat the painful spot and the tissue around it in the same session.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONDITIONS WE COMMONLY SEE */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="label">Conditions</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Conditions We Commonly See</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Lower body</h3>
              <p className="text-sm text-text/70 leading-relaxed">Plantar fasciitis, Achilles tendonitis, knee pain and hip pain are some of the most common reasons local patients call.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Upper body</h3>
              <p className="text-sm text-text/70 leading-relaxed">Shoulder pain, rotator cuff injuries, tennis elbow, golfer's elbow and carpal tunnel are all evaluated for SoftWave.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Chronic and nerve-related pain</h3>
              <p className="text-sm text-text/70 leading-relaxed">Chronic low back pain, arthritis, neuropathy and sports or soft tissue injuries may be candidates, based on your exam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* YOUR SOFTWAVE APPOINTMENT */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Your Appointment</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Your SoftWave Appointment</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Your visit begins with an exam so Dr. Brad can confirm SoftWave makes sense for you. During treatment he applies ultrasound gel and places the SoftWave applicator over the injury. You will feel mild pressure or tapping for about 10 to 15 minutes, and then you are free to go back to your day.</p>
              <p>Most patients notice improvement after the first session, and a typical plan runs 6 to 12 sessions depending on the condition. The plan is built around you, not a one-size-fits-all package, and it is adjusted as you progress.</p>
              <p>Because our office is only a short trip for patients from the area, many schedule SoftWave visits before or after work, and our front desk will help you set up a series that fits your week.</p>
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

      {/* ABOUT DR. BRAD */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">About Dr. Brad</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>About Dr. Brad</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Dr. Bradley Krawczyk, DC, opened Back and Body Chiropractic Center in 2011 and has served Macomb and Oakland Counties since. His approach is simple: a thorough exam, a clear explanation of what is going on and a care plan sized to your condition. There are no long-term contracts and no six-month packages.</p>
              <p>When it helps, SoftWave can be paired with chiropractic adjustments, spinal decompression or therapeutic massage. If another option would serve you better, Dr. Brad will tell you.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1='SoftWave therapy, close to home in Clinton Township.' anchor='Start with the $67 visit.' withForm={false} />


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
                <p className="text-sm text-text/70 leading-relaxed mb-3">Non-surgical disc relief, minutes from Clinton Township.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Spinal Decompression &rarr;</div>
              </Link>
              <Link key="/back-pain-treatment-shelby-township-mi" href="/back-pain-treatment-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><SpineIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Back Pain Treatment</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">Honest, results-focused care for stubborn back pain.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Back Pain Treatment &rarr;</div>
              </Link>
              <Link key="/carpal-tunnel-treatment-shelby-township-mi" href="/carpal-tunnel-treatment-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><SciaticaIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Carpal Tunnel Treatment</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">SoftWave pairs well with carpal tunnel care plans.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Carpal Tunnel Treatment &rarr;</div>
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
