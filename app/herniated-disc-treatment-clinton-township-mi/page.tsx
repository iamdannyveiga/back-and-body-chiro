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
      question: 'What is the difference between a bulging disc and a herniated disc?',
      answer: 'A bulging disc extends past its normal edge while its outer ring stays intact. In a herniated disc the softer inner material has pushed through that ring. Both can press on a nerve, and the exam is how Dr. Brad tells which one you are dealing with.',
    },
    {
      question: 'Do I need surgery for a herniated disc?',
      answer: 'Not automatically. Many disc injuries respond well to non-surgical care. Dr. Brad examines you first, and if your case needs a surgical referral he will say so.',
    },
    {
      question: 'How does decompression help a bulging disc?',
      answer: 'The table applies gentle, controlled traction. The stretch creates negative pressure inside the disc, which is designed to help draw bulging material back in and relieve pressure on the nerve. Sessions are about 15 to 20 minutes.',
    },
    {
      question: 'I live near Romeo Plank Road. How do I get to your office?',
      answer: 'Head south to Hall Road (M-59), go west to Van Dyke Avenue in Utica, then north on Van Dyke past 23 Mile Road to 25 Mile. The office is at 55130 Van Dyke Ave #25 in Shelby Charter Township.',
    },
    {
      question: 'Do you only see people from Clinton Township?',
      answer: 'No. Dr. Brad has served patients across Macomb and Oakland Counties since 2011, and many come from the townships around us.',
    },
    {
      question: 'Should I bring my MRI report?',
      answer: 'Yes, along with any X-ray reports. Dr. Brad will walk you through what the report means and whether decompression, adjustments or both fit your case.',
    },
    {
      question: 'What are your hours?',
      answer: 'Monday through Thursday 9am to 1pm and 3pm to 7pm, and Friday 9am to 12pm. We are closed on weekends.',
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
        subtitle='Bulging and herniated disc care that starts with decompression. Hall Road west, then north on Van Dyke.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Herniated Disc Treatment Clinton Township' },
        ]}
      />

            <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Start Here</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>What a Disc Diagnosis Actually Means</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Between each pair of vertebrae sits a disc, a cushion with a tougher outer ring around softer material. A bulging disc pushes past its normal edge. A herniated disc is one where the inner material has pushed through the outer ring. Either one can press on a nearby nerve, which is why disc problems so often show up as low back pain, pain down a leg, or tingling and numbness in the foot.</p>
              <p>Many people hear the word herniated for the first time in an urgent care room or on an MRI report and assume the next step is surgery or injections. It does not have to be. Many disc injuries respond to conservative care, and Dr. Brad examines you first to see whether yours is a good fit. If your case needs a surgical referral, he will tell you so plainly.</p>
              <p>For disc problems we usually begin with spinal decompression. The table applies controlled, gentle traction, and that stretch creates negative pressure inside the disc, which is designed to help draw bulging material back in and take pressure off the nerve. You stay fully clothed, and a session takes about 15 to 20 minutes.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">From Clinton Township</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Coming Down From the North Side of the Township</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div className="prose-custom">
                <p>Clinton Township is large, so the trip depends on where you start. From the Clinton-Macomb Public Library&apos;s Main Library at 40900 Romeo Plank Road, head south to Hall Road (M-59), go west and follow it to Van Dyke Avenue in Utica. From the Gratiot Avenue side, the same Hall Road leg gets you there. Then it is north on Van Dyke, past 23 Mile Road, to 25 Mile.</p>
                <p>The office is in the Vince and Joe&apos;s International Gourmet Shopping Plaza at the northeast corner of Van Dyke and 25 Mile Road. Our own route estimate from the middle of the township is about 14 miles and 23 minutes in light traffic.</p>
                <p>If you study or work near Macomb Community College&apos;s Center Campus at Garfield and Hall Road, you are already on the way. Hall Road is the main shopping and dining strip of the area, so many patients fold the visit in with errands.</p>
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
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Who Comes In</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Desks, Job Sites and Sidelines</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Disc trouble does not pick a type of person. It can catch someone who sits at a desk all day, someone who lifts for a living, or a parent who stands through a Chippewa Valley or Clintondale game and cannot get comfortable. What they share is pain that has not gone away after rest.</p>
              <p>Dr. Bradley Krawczyk, DC, grew up in Macomb County, studied kinesiology at Michigan State University and earned his Doctor of Chiropractic degree from Life University in Atlanta in 2011. His own path into chiropractic began with a football injury, so a patient who says they want to get back to their sport or their job is speaking his language.</p>
              <p>Your visit is built around a thorough exam, a clear explanation and a plan sized to your case. There are no long-term contracts and no six-month packages.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="label">What We See</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Disc Problems We Hear About</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Pain that started with a lift</h3>
              <p className="text-sm text-text/70 leading-relaxed">A sudden catch in the low back after lifting, bending or twisting that never fully let go.</p>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Numbness in the leg or arm</h3>
              <p className="text-sm text-text/70 leading-relaxed">Tingling or weakness that follows a nerve, sometimes the first sign a disc is pressing on it.</p>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>A report you do not understand</h3>
              <p className="text-sm text-text/70 leading-relaxed">An MRI that says bulge, protrusion or herniation, and no clear explanation of what to do next.</p>
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
                <p className="text-sm text-text/70 mt-4">Please bring your MRI or X-ray reports. You will not be locked into a contract.</p>
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
                <p className="text-sm text-text/70 mt-4">Evening slots Monday to Thursday work around a full day at the office or on the job.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ConversionCTA line1='Told you have a bad disc? Get a second look.' anchor='See if decompression fits.' withForm={false} />

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
