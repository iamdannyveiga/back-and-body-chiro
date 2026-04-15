import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { DecompressionIcon, SpineIcon, MassageIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Sciatica Treatment | Chiropractor Shelby Township MI',
  description:
    'Sciatica treatment from Dr. Brad Krawczyk. Non-surgical relief for radiating leg pain, numbness, and tingling. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/sciatica-treatment-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'What is sciatica?',
    answer:
      'Sciatica is pain that radiates along the sciatic nerve — from the lower back through the hip and buttock, down the leg. It usually affects one side. Common causes include herniated discs, bone spurs, and spinal stenosis compressing the nerve.',
  },
  {
    question: 'Can chiropractic actually help sciatica?',
    answer:
      'Yes. Chiropractic adjustments reduce the pressure on the sciatic nerve by restoring proper spinal alignment. Combined with spinal decompression, many patients experience significant relief without surgery or injections.',
  },
  {
    question: 'How long does sciatica treatment take?',
    answer:
      'It varies. Some patients feel better after 2-3 visits. More severe cases with disc involvement may take several weeks. Dr. Brad will give you an honest timeline — not a sales pitch for more visits than you need.',
  },
  {
    question: 'Should I get surgery for sciatica?',
    answer:
      'Surgery should be a last resort. Most sciatica responds well to conservative care like chiropractic and decompression. Dr. Brad will be honest — if your case requires surgical referral, he will tell you.',
  },
];

const conditions = [
  'Radiating Leg Pain', 'Numbness & Tingling', 'Herniated Disc',
  'Bulging Disc', 'Piriformis Syndrome', 'Spinal Stenosis',
  'SI Joint Dysfunction', 'Lumbar Radiculopathy', 'Hip Pain',
];

export default function SciaticaTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Sciatica Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Shooting leg pain, numbness, tingling. Dr. Brad finds the source and takes the pressure off."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Sciatica Treatment' },
        ]}
      />

      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">That shooting leg pain? </span>It starts in your spine.
                </h2>
                <div className="prose-custom">
                  <p>Sciatica isn&apos;t a diagnosis — it&apos;s a symptom. That burning, shooting pain traveling from your low back into your leg is caused by something compressing or irritating the sciatic nerve. The question is: what?</p>
                  <p>It could be a herniated disc pressing on the nerve root. A bone spur narrowing the spinal canal. A tight piriformis muscle. Or a combination of factors. The treatment depends entirely on the cause — which is why Dr. Brad starts with a thorough examination, not a one-size-fits-all adjustment.</p>
                  <p>At Back and Body, sciatica treatment combines precise chiropractic adjustments with spinal decompression to take pressure off the nerve, reduce inflammation, and allow healing. No injections. No surgery. Just targeted, effective care.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <path d="M28 8v20" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <path d="M28 28 C24 34, 20 40, 16 48" stroke="#5ED299" strokeWidth="2" opacity=".3" />
                  <path d="M28 28 C32 34, 36 40, 40 48" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Benefits</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Why chiropractic works </span><span className="font-extrabold">for sciatica.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Relieves Nerve Compression',
                  text: 'Chiropractic adjustments restore spinal alignment, reducing the pressure on the sciatic nerve that causes pain, numbness, and tingling.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16M12 4v16" /></svg>,
                  title: 'Decompression Therapy',
                  text: 'For disc-related sciatica, spinal decompression creates negative pressure that helps retract bulging disc material away from the nerve.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Avoids Surgery & Injections',
                  text: 'Most sciatica responds well to conservative care. Chiropractic offers a non-invasive alternative to epidural injections and surgical intervention.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
                  title: 'Restored Mobility',
                  text: 'Sciatica can make walking, sitting, and sleeping miserable. Treatment restores your ability to move comfortably and get back to daily life.',
                },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div>
                  <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3>
                  <p className="text-sm text-text/70 leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="label">Related Conditions</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Sciatica-related </span><span className="font-extrabold">conditions.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">
              {conditions.map((c) => (
                <span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">What to Expect</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Your sciatica </span><span className="font-extrabold">visit.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Diagnosis', text: 'Dr. Brad performs orthopedic and neurological tests to identify the source of nerve compression. He checks reflexes, sensation, and muscle strength to understand exactly where the problem is.' },
              { num: '2', title: 'Treatment', text: 'Targeted adjustments to decompress the nerve root. If disc involvement is present, spinal decompression therapy may be recommended. Massage may be added to address muscle guarding.' },
              { num: '3', title: 'Recovery Plan', text: 'Dr. Brad explains the cause, the treatment approach, and gives you specific exercises and modifications. Honest timeline. No upselling. Just what you need to recover.' },
            ].map((step, i) => (
              <div key={step.num}>
                <ScrollReveal delay={`${i * 0.1}s`}>
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-extrabold text-lg shrink-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      {step.num}
                    </div>
                    <div className="pb-2">
                      <h4 className="text-[17px] font-bold text-teal mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h4>
                      <p className="text-sm text-text/70 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
                {i < 2 && <div className="ml-6 w-px h-8 bg-mint/20 my-1" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mx-auto border-[3px] border-mint/30 rounded-xl p-10 relative">
              <div className="inline-block bg-mint text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-[6px] rounded-full mb-3">
                The Back &amp; Body Promise
              </div>
              <p className="text-base text-text/80 leading-[1.8]">
                Dr. Brad treats every patient with the same philosophy: <strong>no sales, no gimmicks, just honest care focused on results.</strong> Your treatment plan is based on what you actually need — nothing more. Come when you need to. Stop when you&apos;re feeling good. No guilt, no pressure.
              </p>
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
                <span className="font-normal">Sciatica </span><span className="font-extrabold">questions.</span>
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

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
              {[
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'Non-surgical disc relief — the ideal complement for sciatica.', href: '/spinal-decompression-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Back Pain Treatment', desc: 'Comprehensive care for all types of back pain.', href: '/back-pain-treatment-shelby-township-mi' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Disc Injury Treatment', desc: 'Specialized care for herniated and bulging discs.', href: '/disc-injury-treatment-shelby-township-mi' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div>
                  <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3>
                  <p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p>
                  <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Stop living with sciatica." anchor="$67 to start healing." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Sciatica Treatment',
          'Sciatica treatment from Dr. Brad Krawczyk. Non-surgical relief for radiating leg pain, numbness, and tingling. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'sciatica-treatment-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Sciatica Treatment' },
        ])) }}
      />
    </>
  );
}
