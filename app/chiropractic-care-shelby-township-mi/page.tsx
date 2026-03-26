import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { DecompressionIcon, MassageIcon, KinesiologyIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Chiropractic Care',
  description:
    'Honest, results-focused chiropractic adjustments from Dr. Brad Krawczyk. No sales pitches. No gimmicks. $67 New Patient Special. Shelby Township, MI.',
  alternates: {
    canonical: '/chiropractic-care-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Is chiropractic safe?',
    answer:
      "Yes. Chiropractic is one of the safest forms of healthcare. Dr. Brad has 14+ years of experience and tailors every adjustment to the individual patient. It's non-invasive, drug-free, and recognized by every major medical organization.",
  },
  {
    question: 'Will I be pressured into a long-term care plan?',
    answer:
      'No. This is one of the core principles of Back and Body. Dr. Brad does not sell long-term care plan packages. He recommends what he genuinely believes you need and you decide how to proceed. No contracts. No pressure. Period.',
  },
  {
    question: 'How many visits will I need?',
    answer:
      "That depends entirely on your condition. Some patients feel better after one visit. Others benefit from a series of adjustments over a few weeks. Dr. Brad will give you an honest assessment — not a sales pitch for more visits than you need.",
  },
  {
    question: 'Do you also offer massage therapy?',
    answer:
      "Yes — on-site therapeutic massage. It's a great complement to chiropractic adjustments, helping reduce muscle tension and accelerate recovery. Ask about it at your visit.",
  },
];

const conditions = [
  'Back Pain', 'Neck Pain', 'Sciatica', 'Headaches & Migraines', 'Shoulder Pain',
  'Disc Injuries', 'Scoliosis', 'Whiplash', 'Carpal Tunnel', 'Vertigo',
  'Arm & Leg Pain', 'Sports Injuries', 'Auto Injuries', 'Work Injuries',
  'Prenatal Pain', 'Pediatric Conditions',
];

export default function ChiropracticCarePage() {
  return (
    <>
      <PageHero
        title={<>
          Chiropractic <span className="text-mint">Care.</span>
        </>}
        subtitle="The foundation of everything we do. Precise adjustments. Honest assessments. Real results."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Chiropractic Care' },
        ]}
        bannerText="Chiropractic adjustment — professional, clinical, approachable"
      />

      {/* A: OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Adjustments that </span>actually work.
                </h2>
                <div className="prose-custom">
                  <p>Chiropractic care at Back and Body starts with something most patients don&apos;t expect: Dr. Brad actually listening. Before any adjustment, he takes time to understand your history, your symptoms, and what you&apos;ve already tried.</p>
                  <p>Then comes a thorough examination — hands-on assessment, range of motion testing, and X-rays if clinically necessary. Not to sell you on a treatment plan, but to understand exactly what&apos;s going on with your spine.</p>
                  <p>The adjustments themselves are precise and gentle. Dr. Brad uses a combination of manual techniques tailored to your specific condition. No cookie-cutter protocols. No one-size-fits-all approach. Just what your body needs to start healing.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <path d="M28 8 C24 14, 22 20, 22 28 C22 36, 24 42, 28 46 C32 42, 34 36, 34 28 C34 20, 32 14, 28 8Z" stroke="#5ED299" strokeWidth="1.5" opacity=".3" />
                  <path d="M16 18 C20 22, 24 24, 28 24 C32 24, 36 22, 40 18" stroke="#5ED299" strokeWidth="1.5" fill="none" opacity=".2" />
                  <path d="M14 30 C20 34, 24 36, 28 36 C32 36, 36 34, 42 30" stroke="#5ED299" strokeWidth="1.5" fill="none" opacity=".2" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* B: BENEFITS */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Benefits</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Why chiropractic </span><span className="font-extrabold">works.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Pain Relief at the Source',
                  text: 'Rather than masking pain with medication, chiropractic adjustments address the structural cause — misalignments, joint restrictions, and nerve interference.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
                  title: 'Improved Mobility',
                  text: 'Restricted joints lead to compensatory movement patterns. Regular adjustments restore proper range of motion, reducing strain on surrounding muscles and tissues.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
                  title: 'Whole-Family Care',
                  text: "From pediatric patients to seniors, chiropractic is safe and effective across all ages. Dr. Brad adjusts his technique for each patient's needs.",
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Drug-Free, Surgery-Free',
                  text: "Chiropractic is a natural, non-invasive approach. No prescriptions. No operating room. Just your body's own healing ability, supported by expert hands.",
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

      {/* C: CONDITIONS */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="label">Conditions Treated</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">What chiropractic </span><span className="font-extrabold">can help.</span>
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

      {/* D: WHAT TO EXPECT */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">What to Expect</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Your first </span><span className="font-extrabold">adjustment.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Before', text: "Dr. Brad reviews your history, discusses your symptoms, and performs a hands-on examination. X-rays if clinically needed. No pressure \u2014 just a thorough, honest assessment." },
              { num: '2', title: 'During', text: "Precise, gentle adjustments targeted to your specific misalignments. You may hear a pop (normal \u2014 it's just gas releasing from the joint). Most patients feel immediate relief." },
              { num: '3', title: 'After', text: "Dr. Brad explains what he found, what he did, and what he recommends going forward. No sales pitch. No 6-month care plan you didn't ask for. Just an honest plan based on what you actually need." },
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

      {/* E: THE PROMISE */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mx-auto border-[3px] border-mint/30 rounded-xl p-10 relative">
              <div className="inline-block bg-mint text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-[6px] rounded-full mb-3">
                The Back &amp; Body Promise
              </div>
              <p className="text-base text-text/80 leading-[1.8]">
                At Back and Body, Dr. Brad treats chiropractic care with the same philosophy he applies to everything: <strong>no sales, no gimmicks, just honest care focused on results.</strong> Your treatment plan is based on what you actually need — nothing more. Come when you need to. Stop when you&apos;re feeling good. No guilt, no pressure.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* F: FAQ */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">FAQ</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Common </span><span className="font-extrabold">questions.</span>
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* G: RELATED SERVICES */}
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
                { icon: <KinesiologyIcon className="w-6 h-6" />, title: 'Applied Kinesiology', desc: 'Advanced muscle testing diagnostics for deeper insight.', href: '/applied-kinesiology-shelby-township-mi' },
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

      <ConversionCTA line1="$67 to get started." anchor="Just honest care." />
    </>
  );
}
