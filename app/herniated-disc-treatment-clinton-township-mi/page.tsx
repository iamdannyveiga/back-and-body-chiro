import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import BookingForm from '@/components/BookingForm';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, SciaticaIcon, DiscIcon } from '@/components/Icons';

// Clinton Township herniated disc page (bradley-krawczyk lane, SEO page-buildout, rulings.log:2659 / 2188 decompression first).
// Target queries (GSC-EASY-WINS-20261109): herniated disc in clinton township mi (43 imp, pos 10.4), bulging disc treatment in clinton township mi (93 imp, pos 19.3), treatment for bulging disc in clinton township mi (44 imp, pos 26.3).
// Drive facts: OSRM route Clinton Township center (42.587,-82.920) -> 55130 Van Dyke Ave = 13.7 mi, ~23 min free-flow.
// Offer, hours, session length, 2011 and "no contracts" are copied from the live site pages.
const PAGE_URL = 'https://backandbodydoc.com/herniated-disc-treatment-clinton-township-mi';
const TITLE = 'Herniated Disc Treatment Clinton Township MI';
const DESCRIPTION = 'Non-surgical herniated and bulging disc treatment for Clinton Township, MI: spinal decompression first. $67 first visit. Call (586) 207-1624.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/herniated-disc-treatment-clinton-township-mi',
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Back and Body Chiropractic Center',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/services/spinal-decompression-room.webp' }],
  },
};

export default function HerniatedDiscTreatmentClintonTownshipMiPage() {
  const faqItems = [
    {
      question: 'Do you treat herniated discs for Clinton Township patients?',
      answer: 'Yes. Many Clinton Township patients drive to our office in Shelby Charter Township at 55130 Van Dyke Ave #25. Dr. Brad combines spinal decompression with chiropractic adjustments for herniated and bulging discs, after an exam to confirm your case is a good fit.',
    },
    {
      question: 'How does spinal decompression help a bulging disc?',
      answer: 'Decompression applies controlled, gentle traction on a specialized table. The stretch creates negative pressure in the disc, which is designed to help draw bulging material back in and relieve pressure on the nerve. You stay fully clothed and a session is about 15 to 20 minutes.',
    },
    {
      question: 'Do I need surgery for a herniated disc?',
      answer: 'Not automatically. Many disc injuries respond well to non-surgical care. Dr. Brad examines you first, and if your case needs a surgical referral he will tell you.',
    },
    {
      question: 'How far is your office from Clinton Township?',
      answer: 'About 14 miles, roughly 23 minutes in light traffic, to 25 Mile and Van Dyke in Shelby Charter Township.',
    },
    {
      question: 'What does the $67 first visit include?',
      answer: 'A consultation, an exam, X-rays if needed and your first adjustment. No contracts and no pressure.',
    },
    {
      question: 'When are you open?',
      answer: 'Monday through Thursday 9am to 1pm and 3pm to 7pm, and Friday 9am to 12pm. We are closed Saturday and Sunday.',
    },
  ];

  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['Chiropractor', 'MedicalBusiness'],
    '@id': 'https://backandbodydoc.com/#organization',
    name: 'Back and Body Chiropractic Center',
    url: PAGE_URL,
    telephone: '+15862071624',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '55130 Van Dyke Avenue #25',
      addressLocality: 'Shelby Charter Township',
      addressRegion: 'MI',
      postalCode: '48317',
      addressCountry: 'US',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 42.6997, longitude: -83.0347 },
    areaServed: [
      { '@type': 'City', name: 'Clinton Township, MI' },
      { '@type': 'City', name: 'Shelby Charter Township, MI' },
    ],
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '09:00', closes: '13:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '15:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Friday', opens: '09:00', closes: '12:00' },
    ],
  };

  const serviceNode = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Herniated and Bulging Disc Treatment (Spinal Decompression)',
    serviceType: 'Herniated and Bulging Disc Treatment (Spinal Decompression)',
    url: PAGE_URL,
    areaServed: { '@type': 'City', name: 'Clinton Township, MI' },
    provider: { '@type': 'Chiropractor', '@id': 'https://backandbodydoc.com/#organization', name: 'Back and Body Chiropractic Center' },
  };

  const breadcrumbNode = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://backandbodydoc.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://backandbodydoc.com/#services' },
      { '@type': 'ListItem', position: 3, name: 'Herniated Disc Treatment Clinton Township', item: PAGE_URL },
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
          Herniated Disc Treatment <span className="text-mint">in Clinton Township, MI.</span>
        </>}
        subtitle='Spinal decompression first, then the adjustments that keep the relief. About 14 miles from Clinton Township.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Herniated Disc Treatment Clinton Township' },
        ]}
      />

      {/* DECOMPRESSION FIRST */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Start Here</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Herniated or Bulging Disc? Start With Decompression</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>A herniated or bulging disc can bring on low back pain, pain down one leg, or tingling and numbness in the foot. For disc problems, spinal decompression is where we usually begin.</p>
              <p>Decompression uses a specialized table to apply controlled, gentle traction to the spine. That gentle stretch creates negative pressure inside the disc, which is designed to help draw bulging material back in and take pressure off the nerve. You stay fully clothed and a session lasts about 15 to 20 minutes.</p>
              <p>Many disc injuries respond well to conservative care, and a disc diagnosis does not automatically mean surgery or injections. The exam comes first. If your case needs a surgical referral, Dr. Brad will tell you honestly.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* LOCAL */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">From Clinton Township</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Getting From Clinton Township to Our Office</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div className="prose-custom">
              <p>Back and Body Chiropractic Center is in Vince and Joe&apos;s plaza at 25 Mile and Van Dyke in Shelby Charter Township. From the center of Clinton Township it is about 14 miles, roughly 23 minutes in light traffic.</p>
              <p>If a disc diagnosis or an MRI report has you weighing your options, bring the report to your first visit. Dr. Brad will go through what it means and whether decompression, adjustments or both fit your case.</p>
                <p><strong>Address:</strong> 55130 Van Dyke Ave #25, Shelby Charter Township, MI 48317. <strong>Phone:</strong> <a href="tel:+15862071624" className="text-teal font-semibold">(586) 207-1624</a>.</p>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/services/spinal-decompression-room.webp"
                  alt="Spinal decompression room at Back and Body Chiropractic Center, serving herniated and bulging disc patients from Clinton Township, MI"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT WE SEE */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="label">What We See</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Disc Problems We See</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Herniated disc</h3>
              <p className="text-sm text-text/70 leading-relaxed">Disc material pressing on a nerve, often with pain, tingling or numbness into the leg or arm.</p>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Bulging disc</h3>
              <p className="text-sm text-text/70 leading-relaxed">A disc pushing past its normal edge, common in the low back and neck.</p>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Pain that will not quit</h3>
              <p className="text-sm text-text/70 leading-relaxed">Back or leg pain that has lingered after rest, medication or earlier care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FIRST VISIT + HOURS */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-10 max-w-[1000px] mx-auto">
            <ScrollReveal>
              <div>
                <span className="label">First Visit</span>
                <h2 className="text-[30px] md:text-[36px] text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Your $67 First Visit</h2>
                <ul className="text-[15px] text-text/80 leading-relaxed list-disc pl-5 space-y-1">
                  <li>Consultation with Dr. Brad</li>
                  <li>Exam</li>
                  <li>X-rays if needed</li>
                  <li>Your first adjustment</li>
                </ul>
                <p className="text-sm text-text/70 mt-4">Bring any MRI or X-ray reports you already have. No contracts, no pressure.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div>
                <span className="label">Hours</span>
                <h2 className="text-[30px] md:text-[36px] text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Evening Hours Mon to Thu</h2>
                <ul className="text-[15px] text-text/80 leading-relaxed list-none p-0 space-y-1">
                  <li>Mon to Thu: 9am to 1pm, 3pm to 7pm</li>
                  <li>Fri: 9am to 12pm</li>
                  <li>Sat and Sun: Closed</li>
                </ul>
                <p className="text-sm text-text/70 mt-4">Evening slots make it easy to stop in on the way home to Clinton Township.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ConversionCTA line1='Clinton Township disc pain, checked honestly.' anchor='See if decompression fits.' withForm={false} />

      {/* RELATED SERVICES */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Services</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Explore </span><span className="font-extrabold">our care.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              <Link href="/spinal-decompression-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><DiscIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Spinal Decompression</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">How the table works and who it helps.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Spinal Decompression &rarr;</div>
              </Link>
              <Link href="/chiropractic-care-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><SpineIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Chiropractic Care</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">Adjustments for back, neck and joint pain.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Chiropractic Care &rarr;</div>
              </Link>
              <Link href="/sciatica-treatment-shelby-township-mi" className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4"><SciaticaIcon className="w-6 h-6" /></div>
                <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Sciatica Treatment</h3>
                <p className="text-sm text-text/70 leading-relaxed mb-3">Relief for pain that runs down the leg.</p>
                <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Sciatica Treatment &rarr;</div>
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 justify-center mt-10">
              <Link href="/sciatica-treatment-clinton-township-mi" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">Sciatica in Clinton Township</Link>
              <Link href="/softwave-therapy-shelby-township-mi" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">SoftWave Therapy</Link>
              <Link href="/massage-therapy-shelby-township-mi" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">Massage Therapy</Link>
              <Link href="/dr-brad" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">Meet Dr. Brad</Link>
              <Link href="/new-patients" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">New Patients</Link>
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
                <span className="font-normal">Clinton Township </span><span className="font-extrabold">questions.</span>
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
