import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, PediatricIcon, DecompressionIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Scoliosis Treatment | Chiropractor Shelby Township MI',
  description:
    'Scoliosis treatment and management from Dr. Brad Krawczyk. Non-surgical chiropractic care for spinal curvature. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/scoliosis-treatment-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Can chiropractic fix scoliosis?',
    answer:
      'Chiropractic cannot fully reverse a structural scoliosis curve, but it can significantly improve mobility, reduce pain, slow progression, and improve quality of life. Dr. Brad will be completely honest about what chiropractic can and cannot do for your curve.',
  },
  {
    question: 'At what age should scoliosis be treated?',
    answer:
      'The earlier the better. Adolescent scoliosis is most responsive to conservative care during growth spurts. However, adults with scoliosis also benefit from chiropractic care for pain management and mobility improvement.',
  },
  {
    question: 'How does Dr. Brad treat scoliosis differently?',
    answer:
      'Dr. Brad uses a combination of specific adjustments, corrective exercises, and postural training tailored to your curve pattern. Every scoliosis is different, and cookie-cutter treatment does not work.',
  },
  {
    question: 'Will I need to come in frequently?',
    answer:
      'It depends on the severity and your goals. Some patients come weekly during active treatment, then transition to monthly maintenance. Dr. Brad will give you an honest recommendation — no pressure to over-commit.',
  },
];

const conditions = [
  'Adolescent Idiopathic Scoliosis', 'Adult Degenerative Scoliosis',
  'Spinal Curvature', 'Postural Imbalance', 'Uneven Shoulders',
  'Hip Asymmetry', 'Back Pain from Scoliosis', 'Rib Hump',
  'Muscle Imbalance', 'Spinal Rotation',
];

export default function ScoliosisTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Scoliosis Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Non-surgical management of spinal curvature. Honest care — Dr. Brad tells you what chiropractic can and cannot do."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Scoliosis Treatment' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Scoliosis care that&apos;s </span>honest about outcomes.
                </h2>
                <div className="prose-custom">
                  <p>Scoliosis — an abnormal lateral curvature of the spine — affects millions of Americans. Whether diagnosed in adolescence or developing later in life, scoliosis can cause pain, postural imbalance, and reduced quality of life.</p>
                  <p>Dr. Brad is upfront about scoliosis treatment: chiropractic won&apos;t eliminate a structural curve. But it can reduce pain, improve mobility, slow progression, correct compensatory patterns, and genuinely improve how you feel and move every day.</p>
                  <p>His approach combines specific adjustments tailored to your curve pattern with corrective exercises and postural training. Every scoliosis is unique, and the treatment should be too.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/office-exam-bed.webp"
                  alt="Scoliosis treatment room at Back and Body in Shelby Township, MI"
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
            <div className="text-center mb-12">
              <span className="label">Benefits</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">What chiropractic does </span><span className="font-extrabold">for scoliosis.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Pain Reduction', text: 'Scoliosis creates uneven stress on muscles and joints. Adjustments reduce that stress, easing the pain that comes with daily life.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Improved Mobility', text: 'Spinal curvature restricts movement. Chiropractic care helps restore range of motion and reduce stiffness.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Slowed Progression', text: 'Regular chiropractic care can help slow the progression of scoliosis curves, especially in adolescents during growth spurts.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Better Postural Balance', text: 'Corrective exercises and adjustments improve muscle symmetry and postural alignment, reducing the visible effects of scoliosis.' },
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

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="label">Conditions Treated</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Scoliosis-related </span><span className="font-extrabold">conditions.</span>
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

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">What to Expect</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Your scoliosis </span><span className="font-extrabold">evaluation.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Assessment', text: 'Dr. Brad evaluates your spinal curvature, posture, muscle balance, and range of motion. X-rays may be taken to measure the degree of curvature and establish a baseline.' },
              { num: '2', title: 'Treatment', text: 'Specific adjustments targeted to your curve pattern, combined with corrective exercises designed to strengthen weak muscles and stretch tight ones.' },
              { num: '3', title: 'Monitoring', text: 'Regular check-ins to track progress. Dr. Brad is honest about results — if something is working, you will know. If a different approach is needed, he will tell you.' },
            ].map((step, i) => (
              <div key={step.num}>
                <ScrollReveal delay={`${i * 0.1}s`}>
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-extrabold text-lg shrink-0" style={{ fontFamily: 'var(--font-heading)' }}>{step.num}</div>
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

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mx-auto border-[3px] border-mint/30 rounded-xl p-10 relative">
              <div className="inline-block bg-mint text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-[6px] rounded-full mb-3">The Back &amp; Body Promise</div>
              <p className="text-base text-text/80 leading-[1.8]">Dr. Brad treats every patient with the same philosophy: <strong>thorough diagnosis, personalized care, and real results.</strong> Your treatment plan is built around your specific condition and goals. Come when you need to. Stop when you&apos;re feeling good. You&apos;re in control of your care.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">FAQ</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Scoliosis </span><span className="font-extrabold">questions.</span></h2>
            </div>
          </ScrollReveal>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Related Services</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <PediatricIcon className="w-6 h-6" />, title: 'Pediatric Chiropractic', desc: 'Early intervention for adolescent scoliosis during growth.', href: '/pediatric-chiropractic-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Back Pain Treatment', desc: 'Scoliosis-related back pain treated at the source.', href: '/back-pain-treatment-shelby-township-mi' },
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Wellness Care', desc: 'Ongoing maintenance to manage scoliosis long-term.', href: '/wellness-care-shelby-township-mi' },
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

      <ConversionCTA line1="Living with scoliosis?" anchor="$67 for honest answers." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Scoliosis Treatment',
          'Scoliosis treatment and management from Dr. Brad Krawczyk. Non-surgical chiropractic care for spinal curvature. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'scoliosis-treatment-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Scoliosis Treatment' },
        ])) }}
      />
    </>
  );
}
