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
// /home/codex/projects/automation-framework/clients/back-and-body-chiro/data/staged-city-pages/spinal-decompression-sterling-heights-mi.json
// by /root/seomaxx/pages/gen_backbody.py. Site component system unchanged.
// Sentences in the spec claiming Saturday hours were dropped at build time:
// the live site states "Closed Saturday and Sunday" (app/page.tsx:100,
// app/contact/page.tsx:58, app/faq/page.tsx:55); GBP hours are null.
export const metadata: Metadata = {
  title: 'Spinal Decompression in Sterling Heights, MI',
  description: 'Spinal decompression for Sterling Heights patients at Back and Body Chiropractic Center in Shelby Township. Non-surgical disc care. Call (586) 207-1624.',
  alternates: {
    canonical: '/spinal-decompression-sterling-heights-mi',
  },
  openGraph: {
    title: 'Spinal Decompression in Sterling Heights, MI',
    description: 'Spinal decompression for Sterling Heights patients at Back and Body Chiropractic Center in Shelby Township. Non-surgical disc care. Call (586) 207-1624.',
    url: 'https://backandbodydoc.com/spinal-decompression-sterling-heights-mi',
    siteName: 'Back and Body Chiropractic Center',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/services/spinal-decompression-sterling-heights-mi.webp' }],
  },
};

export default function SpinalDecompressionSterlingHeightsMiPage() {
  const faqItems = [
  {
    "question": "Do you offer spinal decompression in Sterling Heights?",
    "answer": "Our office is in Shelby Charter Township at 55130 Van Dyke Avenue #25. Patients from the area come to us there for spinal decompression."
  },
  {
    "question": "Does spinal decompression hurt?",
    "answer": "No. Most patients find it comfortable and relaxing, and many fall asleep during sessions."
  },
  {
    "question": "How long is each session?",
    "answer": "About 15 to 20 minutes on the table. Dr. Brad may add a chiropractic adjustment afterward."
  },
  {
    "question": "How many sessions will I need?",
    "answer": "It depends on the severity of your disc condition. Some patients improve in a few sessions, while more significant injuries may benefit from a longer series. Dr. Brad will be upfront about what to expect."
  },
  {
    "question": "Is spinal decompression covered by insurance?",
    "answer": "Coverage varies by plan. Our office can help you check your benefits."
  }
];

  const businessSchema = {
  "@context": "https://schema.org",
  "@type": [
    "Chiropractor",
    "MedicalBusiness"
  ],
  "name": "Back and Body Chiropractic Center",
  "url": "https://backandbodydoc.com/spinal-decompression-sterling-heights-mi",
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
      "name": "Spinal Decompression"
    }
  }
};

  const serviceNode = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Spinal Decompression',
    url: 'https://backandbodydoc.com/spinal-decompression-sterling-heights-mi',
    areaServed: { '@type': 'City', name: 'Sterling Heights, MI' },
    provider: { '@type': 'Chiropractor', '@id': 'https://backandbodydoc.com/#organization', name: 'Back and Body Chiropractic Center' },
  };

  const breadcrumbNode = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://backandbodydoc.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://backandbodydoc.com/#services' },
      { '@type': 'ListItem', position: 3, name: 'Spinal Decompression in Sterling Heights', item: 'https://backandbodydoc.com/spinal-decompression-sterling-heights-mi' },
    ],
  };

  return (
    <>
      <PageHero
        aside={(
    <div className="bg-white rounded-2xl p-6 md:p-7 shadow-xl">
      <h3 className="text-xl font-bold text-teal mb-1" style={{ fontFamily: 'var(--font-heading)' }}>Claim your $67 visit</h3>
      <p className="text-sm text-text/60 mb-5">Fill this out and we&apos;ll reach out to lock in your time.</p>
      <BookingForm variant="compact" defaultService='Spinal Decompression' />
    <p className="mt-4 text-sm text-text/70">Prefer to call? <a href="tel:+15862071624" className="text-teal font-semibold">(586) 207-1624</a></p>
</div>
        )}
        title={<>
          Spinal Decompression <span className="text-mint">in Sterling Heights.</span>
        </>}
        subtitle='Non-surgical spinal decompression at our Shelby Charter Township office for local patients with disc and nerve pain.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Spinal Decompression in Sterling Heights' },
        ]}
      />



      {/* SPINAL DECOMPRESSION FOR STERLING HEIGHTS PATIENTS */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Overview</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Spinal Decompression for Sterling Heights Patients</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div className="prose-custom">
              <p>When a bulging or herniated disc is pressing on a nerve, the usual next steps can be injections or a surgical consult. Spinal decompression offers another path to try first. Back and Body Chiropractic Center provides spinal decompression at our office in Shelby Charter Township, in Vince and Joe's plaza at 25 Mile and Van Dyke. We are not located in Sterling Heights, but we care for many patients who come to us from Sterling Heights.</p>
              <p>Spinal decompression is a non-surgical traction therapy. The table gently stretches the spine, creating negative pressure inside the disc, which is designed to help retract bulging disc material, take pressure off nerves and improve nutrient flow for healing.</p>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/services/spinal-decompression-sterling-heights-mi.webp"
                  alt="Spinal decompression table at Back and Body Chiropractic Center, serving Sterling Heights, MI"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW SPINAL DECOMPRESSION HELPS DISC PAIN */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">How It Helps</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>How Spinal Decompression Helps Disc Pain</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>When a disc bulges, herniates or degenerates, it can press on nearby nerves and cause pain, numbness, tingling or weakness in the back, arm or leg. By addressing the disc directly, spinal decompression aims to relieve that nerve pressure without medication or injections.</p>
              <p>Many patients who were considering surgery choose to try decompression first. It is a conservative, low-risk option, and Dr. Brad will be straightforward with you about whether your case is a good fit.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONDITIONS WE EVALUATE */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="label">Conditions</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Conditions We Evaluate</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Herniated and bulging discs</h3>
              <p className="text-sm text-text/70 leading-relaxed">The most common reason local patients ask about spinal decompression, along with pinched nerves and cervical disc issues.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Sciatica and chronic low back pain</h3>
              <p className="text-sm text-text/70 leading-relaxed">Leg pain that follows a nerve path and low back pain that keeps coming back are both evaluated for decompression.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Degeneration, stenosis and facet problems</h3>
              <p className="text-sm text-text/70 leading-relaxed">Degenerative disc disease, spinal stenosis, facet syndrome and failed back surgery syndrome may also be candidates, depending on your exam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS DURING A SESSION */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">What to Expect</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>What Happens During a Session</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>You lie comfortably on the decompression table, fully clothed. A harness is placed around your hips and the table is adjusted to target your specific disc level. The table then applies controlled, gentle traction, stretching and releasing in cycles. Each session lasts about 15 to 20 minutes, and many patients fall asleep.</p>
              <p>Dr. Brad may perform a chiropractic adjustment after decompression to support the result. He discusses your progress at each stage and adjusts the plan as needed. Some patients feel better within a few sessions, while more significant disc injuries may need a longer series.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHO IS A GOOD CANDIDATE? */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Good Fit</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Who Is a Good Candidate?</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Spinal decompression is often a reasonable option if you have disc-related back or neck pain, pain that travels into an arm or leg, or you have been told surgery may be on the table and want to explore conservative care first. It is not for everyone. Certain fractures, spinal implants, advanced bone loss and some other conditions can rule it out, which is why the exam always comes first.</p>
              <p>Bring any MRI or X-ray reports, a list of medications and a short history of your symptoms to your first visit. If decompression is not the right fit, Dr. Brad will explain why and what he recommends instead.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* A PRACTICE BUILT ON HONEST CARE */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Our Promise</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>A Practice Built on Honest Care</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Dr. Bradley Krawczyk, DC, opened Back and Body Chiropractic Center in 2011 and has served Macomb and Oakland Counties since. You get a thorough exam, clear explanations and a plan sized to your condition. There are no long-term contracts and no six-month packages.</p>
              <p>Decompression can be combined with other services we offer, including chiropractic adjustments, SoftWave therapy and therapeutic massage, when that is the best way to support your recovery.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1='Disc pain, evaluated honestly.' anchor='See if decompression fits.' withForm={false} />


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
              <Link key="/disc-injury-treatment-shelby-township-mi" href="/disc-injury-treatment-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><DiscIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Disc Injury Treatment</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">Focused care for herniated and bulging discs.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Disc Injury Treatment &rarr;</div>
              </Link>
              <Link key="/sciatica-treatment-shelby-township-mi" href="/sciatica-treatment-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><SciaticaIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Sciatica Treatment</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">Relief for pain that runs down the leg.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Sciatica Treatment &rarr;</div>
              </Link>
              <Link key="/softwave-therapy-shelby-township-mi" href="/softwave-therapy-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><SpineIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>SoftWave Therapy</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">Regenerative soft-tissue care that pairs with decompression.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">SoftWave Therapy &rarr;</div>
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
                <span className="font-normal">Spinal Decompression </span><span className="font-extrabold">questions.</span>
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
