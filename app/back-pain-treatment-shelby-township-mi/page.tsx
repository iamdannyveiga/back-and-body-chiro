import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, DecompressionIcon, MassageIcon, CheckIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Back Pain Treatment | Chiropractor Shelby Township MI',
  description:
    'Back pain treatment from Dr. Brad Krawczyk. Root-cause chiropractic care — no band-aids. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/back-pain-treatment-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'How quickly will I feel relief from back pain?',
    answer:
      'Many patients notice improvement after their first visit. More chronic conditions may require a series of adjustments. Dr. Brad will give you an honest, realistic timeline — not a sales pitch for unnecessary visits.',
  },
  {
    question: 'Do I need X-rays for back pain?',
    answer:
      'Not always. Dr. Brad only takes X-rays when clinically necessary — not as a routine upsell. He performs a thorough hands-on examination first and orders imaging only if it will change the treatment approach.',
  },
  {
    question: 'Can chiropractic help if I have a herniated disc?',
    answer:
      'Yes. Chiropractic adjustments combined with spinal decompression therapy can effectively treat many disc conditions without surgery. Dr. Brad will evaluate your specific situation and be honest about whether chiropractic is the right fit.',
  },
  {
    question: 'Will I need to keep coming back forever?',
    answer:
      'No. Dr. Brad does not sell long-term care packages. He recommends what you actually need. Some patients come once and feel great. Others benefit from periodic maintenance. Your call — no pressure, no guilt.',
  },
];

const conditions = [
  'Lower Back Pain', 'Upper Back Pain', 'Muscle Spasms', 'Disc Bulge',
  'Herniated Disc', 'Facet Joint Pain', 'SI Joint Dysfunction', 'Sciatica',
  'Degenerative Disc Disease', 'Postural Dysfunction', 'Spinal Stenosis',
];

export default function BackPainTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Back Pain Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="The #1 reason patients find Dr. Brad. Root-cause treatment — not band-aids, not painkillers."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Back Pain Treatment' },
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
                  <span className="font-normal">Back pain that </span>actually gets fixed.
                </h2>
                <div className="prose-custom">
                  <p>Back pain affects roughly 80% of adults at some point in their lives. It&apos;s the #1 cause of missed work and one of the most common reasons people visit a doctor. And yet it&apos;s often dismissed, medicated, or mismanaged.</p>
                  <p>At Back and Body, Dr. Brad doesn&apos;t hand you a prescription and send you on your way. He investigates the cause. Where does it hurt? When did it start? What makes it worse? He listens to the full story before putting his hands on your spine.</p>
                  <p>Because &ldquo;back pain&rdquo; isn&apos;t a diagnosis — it&apos;s a symptom. It could be a disc bulge, a facet joint problem, SI joint dysfunction, muscle spasm, or nerve compression. The treatment depends on the cause, and getting the diagnosis right is step one.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <path d="M28 8 C24 14, 22 20, 22 28 C22 36, 24 42, 28 46" stroke="#5ED299" strokeWidth="2" opacity=".25" />
                  <circle cx="28" cy="28" r="4" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <circle cx="28" cy="20" r="3" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <circle cx="28" cy="36" r="3" stroke="#5ED299" strokeWidth="1" opacity=".15" />
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
                <span className="font-normal">Why chiropractic works </span><span className="font-extrabold">for back pain.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Treats the Root Cause',
                  text: 'Instead of masking pain with medication, Dr. Brad identifies the structural issue — misalignment, disc problem, nerve compression — and addresses it directly.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'No Drugs, No Surgery',
                  text: 'Chiropractic is a natural, non-invasive approach. No prescriptions. No operating room. Just your body healing with the right structural support.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
                  title: 'Faster Recovery',
                  text: 'Many patients feel improvement after their first adjustment. Combined with decompression and massage, recovery from back pain can be faster than you expect.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
                  title: 'Long-Term Prevention',
                  text: 'Dr. Brad teaches corrective exercises and postural awareness so you can maintain your results and reduce the chance of back pain coming back.',
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
              <span className="label">Conditions Treated</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Types of back pain </span><span className="font-extrabold">we treat.</span>
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
                <span className="font-normal">Your back pain </span><span className="font-extrabold">visit.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Evaluation', text: 'Dr. Brad reviews your history, asks detailed questions about your pain, and performs a hands-on spinal examination. X-rays only if clinically necessary.' },
              { num: '2', title: 'Treatment', text: 'Targeted chiropractic adjustments to restore alignment, reduce nerve interference, and relieve pressure. Spinal decompression or massage may be added depending on your condition.' },
              { num: '3', title: 'Plan', text: "Dr. Brad explains what he found, what he did, and what he recommends. A clear, right-sized care plan built around your specific condition — no contracts, no upsells." },
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
                Dr. Brad treats every back pain patient with the same philosophy: <strong>find the cause, fix the cause, and be honest about the process.</strong> No unnecessary visits. No scare tactics about your spine. Come when you need to. Stop when you&apos;re feeling good. No guilt, no pressure.
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
                <span className="font-normal">Back pain </span><span className="font-extrabold">questions.</span>
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
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'Non-surgical disc relief through gentle traction therapy.', href: '/spinal-decompression-shelby-township-mi' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'On-site therapeutic massage to complement your adjustments.', href: '/massage-therapy-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Sciatica Treatment', desc: 'Targeted relief for radiating leg pain starting in the lower back.', href: '/sciatica-treatment-shelby-township-mi' },
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

      <ConversionCTA line1="Stop living with back pain." anchor="$67 to start feeling better." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Back Pain Treatment',
          'Back pain treatment from Dr. Brad Krawczyk. Root-cause chiropractic care — no band-aids. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'back-pain-treatment-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Back Pain Treatment' },
        ])) }}
      />
    </>
  );
}
