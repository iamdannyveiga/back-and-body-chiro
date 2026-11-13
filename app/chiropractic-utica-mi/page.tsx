import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import BookingForm from '@/components/BookingForm';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, SciaticaIcon, DiscIcon } from '@/components/Icons';

// Utica, MI city page (bradley-krawczyk lane, SEO page-buildout #2, rulings.log:2659 / 2188 decompression first).
// Target query: "utica chiropractic" (KW-RESEARCH-20261109, 170/mo).
// Drive facts: OSRM route Utica City Hall (7550 Auburn Rd) -> 55130 Van Dyke Ave = 5.29 mi, ~10 min free-flow,
// Auburn Rd -> Cass Ave -> Summers St -> Van Dyke Ave; Hall Road (M-59) and 23 Mile Road cross Van Dyke on that stretch (OSM).
// Offer, hours, session length, 2011 and "no contracts" are copied from the live site pages.
const PAGE_URL = 'https://backandbodydoc.com/chiropractic-utica-mi';
const TITLE = 'Utica Chiropractic & Spinal Decompression';
const DESCRIPTION = 'Chiropractic and spinal decompression for Utica, MI, about 5 miles up Van Dyke at 25 Mile in Shelby Township. $67 first visit. Call (586) 207-1624.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/chiropractic-utica-mi',
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

export default function ChiropracticUticaMiPage() {
  const faqItems = [
    {
      question: 'Is your chiropractic office in Utica?',
      answer: 'Our office is just north of Utica in Shelby Charter Township at 55130 Van Dyke Ave #25, in the plaza on the northeast corner of Van Dyke and 25 Mile Road. From Utica it is one straight road: Van Dyke Avenue.',
    },
    {
      question: 'How long is the drive from downtown Utica?',
      answer: 'From Utica City Hall on Auburn Road it is about 5 miles, roughly 10 minutes in light traffic. Take Cass Avenue over to Van Dyke, then head north past 23 Mile Road to 25 Mile.',
    },
    {
      question: 'I sit through baseball games at UWM Field. Can you help with a sore back afterward?',
      answer: 'Dr. Brad will examine you first to find out what is behind the pain. Depending on the cause, care can include chiropractic adjustments, spinal decompression, SoftWave therapy or massage.',
    },
    {
      question: 'Do you offer spinal decompression for Utica patients?',
      answer: 'Yes. Spinal decompression is a non-surgical traction therapy for disc and nerve pain such as herniated or bulging discs and sciatica. Each session is about 15 to 20 minutes, and an exam comes first to see whether your case is a good fit.',
    },
    {
      question: 'Do you see kids and expectant moms from Utica?',
      answer: 'Yes. We offer pediatric and prenatal chiropractic care, and each starts with an exam and a clear explanation.',
    },
    {
      question: 'What does the $67 first visit include?',
      answer: 'A consultation, an exam, X-rays if needed and your first adjustment. No contracts and no pressure.',
    },
    {
      question: 'Is chiropractic or spinal decompression covered by insurance?',
      answer: 'Coverage varies by plan. Our office can help you understand your benefits.',
    },
    {
      question: 'Can I come in after work?',
      answer: 'Yes. Monday through Thursday we are open 9am to 1pm and 3pm to 7pm, and Friday 9am to 12pm. We are closed Saturday and Sunday.',
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
      { '@type': 'City', name: 'Utica, MI' },
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
    name: 'Chiropractic Care and Spinal Decompression',
    serviceType: 'Chiropractic',
    url: PAGE_URL,
    areaServed: { '@type': 'City', name: 'Utica, MI' },
    provider: { '@type': 'Chiropractor', '@id': 'https://backandbodydoc.com/#organization', name: 'Back and Body Chiropractic Center' },
  };

  const breadcrumbNode = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://backandbodydoc.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://backandbodydoc.com/#services' },
      { '@type': 'ListItem', position: 3, name: 'Utica Chiropractic', item: PAGE_URL },
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
          Utica Chiropractic <span className="text-mint">&amp; Spinal Decompression.</span>
        </>}
        subtitle='Disc relief first, then adjustments and soft-tissue care. Straight up Van Dyke from Utica.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Utica Chiropractic' },
        ]}
      />

            <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">From Utica</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Auburn Road to Van Dyke in Ten Minutes</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div className="prose-custom">
                <p>Utica is a small city of 5,245 people (2020 census) that sits just south of Shelby Charter Township, with the Clinton River running through its center and M-59 along its southern edge. Back and Body Chiropractic Center is not in Utica itself, but it is the next stop north: the Vince and Joe&apos;s International Gourmet Shopping Plaza at the northeast corner of Van Dyke and 25 Mile Road.</p>
                <p>From Utica City Hall at 7550 Auburn Road, go along Auburn Road to Cass Avenue, then over to Summers Street and onto Van Dyke Avenue, and head north for about 5 miles. In light traffic that is roughly 10 minutes, and you cross 23 Mile Road along the way. The M-53 freeway runs about a mile to the east of Van Dyke through this stretch, so the surface road is the straight shot.</p>
                <p>Coming from the south side of town, for example near the Utica Public Library at 7530 Auburn Road or the ballpark at 7171 Auburn Road, the trip is the same Van Dyke run with a couple more blocks on Auburn.</p>
                <p><strong>Address:</strong> 55130 Van Dyke Ave #25, Shelby Charter Township, MI 48317. <strong>Phone:</strong> <a href="tel:+15862071624" className="text-teal font-semibold">(586) 207-1624</a>.</p>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/services/spinal-decompression-room.webp"
                  alt="Spinal decompression room at Back and Body Chiropractic Center, a short drive up Van Dyke from Utica, MI"
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
              <span className="label">Around Town</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Where Utica Sits, and Why It Matters for Your Back</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>The city was platted by Joseph Stead in 1829 and first called Harlow, and the historic district centered on Cass Avenue and Auburn Road is still the heart of downtown. Walkable blocks, a river and a ballpark make Utica a place people spend time on their feet and in the stands.</p>
              <p>That ballpark is UWM Field at 7171 Auburn Road, home of the Utica Unicorns and the rest of the United Shore Professional Baseball League, with 4,500 seats and a season that runs May through September. Hours on a hard seat, or a long afternoon at Grant Park on Hahn Street with its playgrounds and paved walking path, are the kind of hours that can leave a back sore, and a good reason to get it examined.</p>
              <p>Families here send kids to Utica Community Schools, and the district runs Utica High School and Eppler Junior High. If a child has had a rough landing on a field or court, our office also offers pediatric chiropractic care, and prenatal chiropractic care is available for expectant mothers.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Start Here</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Disc Pain? Decompression Comes First</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>A disc that flared up, pain shooting down a leg, or a low back that has been stiff for months: these are the reasons most people looking for a chiropractor near Utica walk in. For disc and nerve pain, spinal decompression is where we usually begin.</p>
              <p>Decompression uses a specialized table to apply controlled, gentle traction to the spine. That stretch creates negative pressure inside the disc, which is designed to help draw bulging material back in and take pressure off the nerve. You stay fully clothed, a session lasts about 15 to 20 minutes, and Dr. Brad may follow it with a chiropractic adjustment.</p>
              <p>It is a conservative option many people try before injections or a surgical consult. The exam always comes first, so you will know whether your case is a good fit before you start.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="label">What We See</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Common Reasons People Come In</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Bulging and herniated discs</h3>
              <p className="text-sm text-text/70 leading-relaxed">Low back or neck discs pressing on a nerve, the main case for spinal decompression.</p>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Sciatica and leg pain</h3>
              <p className="text-sm text-text/70 leading-relaxed">Pain, tingling or numbness that travels down the leg from the low back.</p>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Back, neck and headaches</h3>
              <p className="text-sm text-text/70 leading-relaxed">Everyday back and neck pain and tension headaches, treated with chiropractic adjustments.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Beyond Decompression</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Chiropractic Care for the Whole Family</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Not every visit is about a disc. Dr. Bradley Krawczyk, DC, has served Macomb and Oakland Counties since 2011 with chiropractic adjustments, SoftWave therapy, therapeutic massage, and pediatric and prenatal chiropractic. When it helps your recovery, those services are combined with decompression in one plan.</p>
              <p>He grew up in Macomb County, so the roads, schools and ballfields in this part of the county are home turf. You get a thorough exam, a clear explanation of what is going on and a plan sized to your condition, with no long-term contracts and no six-month packages.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

{/* FIRST VISIT + HOURS */}
      <section className="py-20 bg-white">
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
                <p className="text-sm text-text/70 mt-4">Stop in on the way home from work or an evening in Utica.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ConversionCTA line1='Utica disc and back pain, checked honestly.' anchor='See if decompression fits.' withForm={false} />

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
                <span className="font-normal">Utica patient </span><span className="font-extrabold">questions.</span>
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
