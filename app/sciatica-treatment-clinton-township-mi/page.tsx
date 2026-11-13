import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import BookingForm from '@/components/BookingForm';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, SciaticaIcon, DiscIcon } from '@/components/Icons';

// Clinton Township sciatica page (bradley-krawczyk lane, SEO page-buildout, rulings.log:2659 / 2188 decompression first).
// Target queries (GSC-EASY-WINS-20261109): sciatica pain in clinton township mi (51 imp, pos 12.6), sciatica treatment in clinton township mi (44 imp, pos 18.5), sciatic nerve in clinton township mi (34 imp, pos 18.3).
// Drive facts: OSRM route Clinton Township center (42.587,-82.920) -> 55130 Van Dyke Ave = 13.7 mi, ~23 min free-flow.
// Offer, hours, session length, 2011 and "no contracts" are copied from the live site pages.
const PAGE_URL = 'https://backandbodydoc.com/sciatica-treatment-clinton-township-mi';
const TITLE = 'Sciatica Treatment Clinton Township MI';
const DESCRIPTION = 'Sciatica pain relief for Clinton Township, MI: spinal decompression and chiropractic adjustments, no injections or surgery. $67 first visit. Call (586) 207-1624.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: '/sciatica-treatment-clinton-township-mi',
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

export default function SciaticaTreatmentClintonTownshipMiPage() {
  const faqItems = [
    {
      question: 'Which route should I take from Clinton Township to your office?',
      answer: 'Take Hall Road (M-59) west to Van Dyke Avenue in Utica, turn north and continue past 23 Mile Road to 25 Mile. The office is at 55130 Van Dyke Ave #25 in Shelby Charter Township, about 14 miles and 23 minutes from the middle of the township in light traffic.',
    },
    {
      question: 'I sit in traffic on Hall Road every day. Will that make my sciatica worse?',
      answer: 'Many people find sitting aggravates sciatic pain, and a long commute is a lot of sitting. We cannot promise a result, but the exam looks at how you sit and what is compressing the nerve, and Dr. Brad will give you straightforward guidance based on what he finds.',
    },
    {
      question: 'Can I come after work?',
      answer: 'Yes. We are open Monday through Thursday from 9am to 1pm and 3pm to 7pm, and Friday from 9am to 12pm. The evening hours suit people driving home from jobs along Hall Road, Gratiot and Groesbeck.',
    },
    {
      question: 'How do you find out why my leg hurts?',
      answer: 'With an exam first. A herniated disc, a bone spur narrowing the spinal canal and a tight piriformis muscle can all produce sciatica, and each calls for a different plan. X-rays are taken if needed.',
    },
    {
      question: 'Do I need to change clothes for decompression?',
      answer: 'No. You stay fully clothed on the table, and a session lasts about 15 to 20 minutes.',
    },
    {
      question: 'Should I bring my MRI if I already have one?',
      answer: 'Yes. Bring any MRI or X-ray reports to the first visit so Dr. Brad can compare them with what he finds in the exam.',
    },
    {
      question: 'What does the $67 first visit cover?',
      answer: 'A consultation with Dr. Brad, an exam, X-rays if needed and your first adjustment. There are no contracts.',
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
    name: 'Sciatica Treatment (Spinal Decompression and Chiropractic)',
    serviceType: 'Sciatica Treatment (Spinal Decompression and Chiropractic)',
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
      { '@type': 'ListItem', position: 3, name: 'Sciatica Treatment Clinton Township', item: PAGE_URL },
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
          Sciatica Treatment <span className="text-mint">in Clinton Township, MI.</span>
        </>}
        subtitle='Decompression first for sciatic nerve pain. Hall Road west, then north on Van Dyke.'
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Sciatica Treatment Clinton Township' },
        ]}
      />

            <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">Start Here</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>The Sciatic Nerve and the Hall Road Commute</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>The sciatic nerve is a long nerve that starts in the lower spine, passes through the buttock and runs down the back of the leg. When something irritates it, the result is the burning, shooting or tingling pain people call sciatica. It is a symptom, not a diagnosis, and the exam is how we find what is behind it.</p>
              <p>Clinton Township is a township built around driving. The 2020 census counted 100,513 people here, more than any other township in Michigan, and a lot of them spend part of every day in a seat on Hall Road, Gratiot Avenue or Groesbeck. Sitting is the position sciatica patients most often say is the hardest, so a long commute can turn a nagging leg ache into the main event of your day.</p>
              <p>When a herniated disc is pressing on the nerve root, spinal decompression is where we usually begin. A specialized table applies controlled, gentle traction to the spine, which is designed to take pressure off the nerve. You stay fully clothed, a session runs about 15 to 20 minutes, and Dr. Brad may follow it with a chiropractic adjustment. If the exam points to a bone spur or a tight piriformis muscle instead, the plan changes to match.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mb-8">
              <span className="label">From Clinton Township</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Hall Road West, Then North on Van Dyke</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div className="prose-custom">
                <p>Our office is in the Vince and Joe&apos;s International Gourmet Shopping Plaza, on the northeast corner of Van Dyke and 25 Mile Road in Shelby Charter Township. From the middle of Clinton Township it is about 14 miles, roughly 23 minutes in light traffic.</p>
                <p>The simplest way to get here is to take Hall Road (M-59) west until it meets Van Dyke Avenue in Utica, where the M-59 freeway ends. Turn north on Van Dyke, drive through Utica and past 23 Mile Road, and the plaza is on your right at 25 Mile. If your errands already take you past The Mall at Partridge Creek or Macomb Community College&apos;s Center Campus at Garfield and Hall, you are on the right road.</p>
                <p>Sitting in a waiting room is no fun with a pinched nerve, so we run evening appointments Monday through Thursday. When you book, tell us where the pain travels (hip, thigh, calf or foot) and Dr. Brad will begin the exam at that spot.</p>
                <p><strong>Address:</strong> 55130 Van Dyke Ave #25, Shelby Charter Township, MI 48317. <strong>Phone:</strong> <a href="tel:+15862071624" className="text-teal font-semibold">(586) 207-1624</a>.</p>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/services/spinal-decompression-room.webp"
                  alt="Spinal decompression room at Back and Body Chiropractic Center, treating sciatica for Clinton Township, MI patients"
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
              <span className="label">Staying Active</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Getting Back to Your Own Routine</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="prose-custom max-w-[860px]">
              <p>Sciatica is usually described by what it stops you doing. Maybe it is the walking paths at George George Memorial Park, a 30-acre township park on Moravian Drive with trails that follow part of the Clinton River. Maybe it is a lap through the Partridge Creek mall, a shift on your feet, or just a night of sleep without waking when the leg flares.</p>
              <p>Bring that list to your first visit. Dr. Brad grew up in Macomb County, played football in high school and landed in a chiropractor&apos;s office after a hard hit, so he understands why a person wants to get back to normal and not just to a pain score. We will talk through what is going on, what the plan looks like and how you will know whether it is working.</p>
              <p>Our care is not limited to decompression. Adjustments, SoftWave therapy and therapeutic massage are all available at the same office, and we add them when they help your recovery.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-8">
              <span className="label">What We See</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>What Sciatica Can Feel Like</h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Pain from back to foot</h3>
              <p className="text-sm text-text/70 leading-relaxed">A line of burning or electric pain that starts near the low back or buttock and follows the leg down one side.</p>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Pins and needles</h3>
              <p className="text-sm text-text/70 leading-relaxed">Tingling, numbness or a heavy, asleep feeling in the calf or foot that comes and goes.</p>
            </div>
            <div className="bg-light-gray rounded-xl p-8">
              <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>Worse in the driver&apos;s seat</h3>
              <p className="text-sm text-text/70 leading-relaxed">Pain that builds the longer you sit and eases when you stand up and walk.</p>
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
                <p className="text-sm text-text/70 mt-4">Bring any MRI or X-ray reports you have. There are no contracts.</p>
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
                <p className="text-sm text-text/70 mt-4">Open late Monday to Thursday, so you can stop in on the drive home.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <ConversionCTA line1='Leg pain on the Hall Road commute? Get the cause checked.' anchor='See if decompression fits.' withForm={false} />

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
              <Link href="/herniated-disc-treatment-clinton-township-mi" className="inline-block px-5 py-2 bg-[#f1f5f5] text-teal text-sm font-medium rounded-full hover:shadow-sm transition-shadow">Herniated Disc in Clinton Township</Link>
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
