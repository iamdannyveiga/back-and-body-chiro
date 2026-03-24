import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, DecompressionIcon, MassageIcon, CheckIcon, StarIcon, NeckPainIcon, SciaticaIcon, DiscIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Back Pain Treatment in Shelby Township',
  description:
    "Back pain treatment from Dr. Brad Krawczyk. No sales pitches. No gimmicks. Honest chiropractic care that gets to the root cause. $55 New Patient Special.",

  alternates: {
    canonical: "https://backandbodydoc.com/conditions/back-pain/",
  },
};

const faqItems = [
  {
    question: 'How quickly will I feel relief?',
    answer:
      "Many patients feel improvement after their first visit. More chronic conditions may take a series of visits. Dr. Brad will give you a realistic, honest timeline \u2014 not a sales pitch.",
  },
  {
    question: 'Will I need to commit to a long-term plan?',
    answer:
      "No. Dr. Brad does not sell long-term care plan packages. He'll recommend what he thinks you need, and you decide. No contracts, no high-pressure tactics. This is the Back and Body way.",
  },
  {
    question: 'Can chiropractic help with a herniated disc?',
    answer:
      "Yes. Chiropractic adjustments combined with spinal decompression therapy can effectively treat many disc conditions without surgery. Dr. Brad will evaluate your specific situation and let you know if chiropractic can help or if you need to see a specialist.",
  },
  {
    question: 'Do you also offer massage for back pain?',
    answer:
      'Yes \u2014 on-site therapeutic massage. Muscle tension often accompanies and worsens back pain. Combining massage with chiropractic care can significantly improve results and recovery time.',
  },
];

export default function BackPainPage() {
  return (
    <>
      <PageHero
        title={<>
          Back Pain Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="The #1 reason patients find Dr. Brad. Honest, root-cause treatment — not band-aids."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Conditions', href: '/#services' },
          { label: 'Back Pain' },
        ]}
        bannerText="Person holding lower back — relatable, honest"
      />

      {/* A: UNDERSTANDING */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Understanding Back Pain</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">You&apos;re not imagining it. </span>It&apos;s real.
                </h2>
                <div className="prose-custom">
                  <p>Back pain affects nearly 80% of adults at some point. It&apos;s the #1 cause of missed work, the #1 reason for disability, and one of the most common reasons people visit a doctor. And yet — it&apos;s often dismissed, medicated, or mismanaged.</p>
                  <p>At Back and Body, Dr. Brad doesn&apos;t dismiss your pain. He investigates it. Where exactly does it hurt? When did it start? What makes it worse? What have you already tried? He listens to the full story before ever putting his hands on your spine.</p>
                  <p>Because back pain isn&apos;t just &ldquo;back pain.&rdquo; It could be a disc bulge, a facet joint issue, a muscle spasm, nerve compression, or postural dysfunction. The treatment depends on the cause — and getting the diagnosis right is step one.</p>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-[#e8c89a]/20 via-[#d4a86a]/10 to-[#c49862]/15 rounded-xl flex items-center justify-center">
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

      {/* B: DR. BRAD'S APPROACH */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center order-last md:order-first">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="20" r="10" stroke="#fff" strokeWidth="1.5" opacity=".2" />
                  <path d="M16 46c0-8 6-14 12-14s12 6 12 14" stroke="#fff" strokeWidth="1.5" opacity=".2" />
                </svg>
              </div>
              <div>
                <span className="label">Dr. Brad&apos;s Approach</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Find the cause. </span>Fix the cause.
                </h2>
                <div className="prose-custom">
                  <p>Dr. Brad&apos;s approach to back pain is simple: find what&apos;s actually causing it and address that — not just the symptom. He combines chiropractic adjustments with a thorough understanding of spinal biomechanics to create a treatment approach that works.</p>
                  <p>Depending on your condition, treatment may include:</p>
                </div>
                <ul className="mt-5 space-y-3">
                  {[
                    'Targeted chiropractic adjustments',
                    'Spinal decompression for disc-related pain',
                    'Therapeutic massage for muscle tension',
                    'Corrective exercises for long-term stability',
                    'Applied kinesiology for deeper diagnostics',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-mint/15 text-mint flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3" />
                      </span>
                      <span className="text-sm text-text/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* C: TREATMENT OPTIONS */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Treatment Options</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">How Dr. Brad </span><span className="font-extrabold">treats back pain.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Adjustments', desc: 'The foundation. Precise, gentle corrections that restore spinal alignment and relieve nerve pressure.', href: '/services/chiropractic-care' },
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'Non-surgical traction therapy for bulging/herniated discs. Creates space, reduces pressure, promotes healing.', href: '#' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'On-site therapeutic massage to release muscle tension that contributes to and compounds back pain.', href: '#' },
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

      {/* D: SYMPTOMS — BEFORE/AFTER */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Sound Familiar?</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Back pain </span><span className="font-extrabold">before and after.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
              <div className="bg-white rounded-xl p-8 border-t-4 border-[#ccc]">
                <div className="text-xs font-bold tracking-[2px] uppercase text-[#999] mb-5">LIVING WITH IT</div>
                <ul className="space-y-3">
                  {[
                    'Constant dull ache that never fully goes away',
                    'Sharp pain when bending, lifting, or twisting',
                    'Stiffness every morning that takes an hour to work through',
                    'Pain that radiates down your leg (sciatica)',
                    'Relying on Advil, Tylenol, or ice packs daily',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ccc] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8 border-t-4 border-mint">
                <div className="text-xs font-bold tracking-[2px] uppercase text-mint mb-5">AFTER DR. BRAD</div>
                <ul className="space-y-3">
                  {[
                    'Waking up and moving without thinking about it',
                    'Picking up your kids without bracing for pain',
                    'Getting through a workday without shifting in your chair',
                    'Exercising again \u2014 walking, playing sports, living',
                    'Knowing you have a chiropractor who actually listens',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-text/70 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-mint mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* E: PATIENT RESULTS */}
      <section className="py-24 bg-teal relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 40px, 100% 100%, 0 calc(100% - 40px))' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.04] pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="label label--light">Patient Results</span>
              <h2 className="text-[36px] md:text-[44px] text-text-light" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Real back pain </span><span className="font-extrabold">relief.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="max-w-[700px] mx-auto">
              <div className="bg-white/[.06] border-l-4 border-mint rounded-xl p-10">
                <div className="text-[56px] text-mint/20 leading-none font-serif mb-2">&ldquo;</div>
                <p className="text-lg text-text-light leading-relaxed">
                  Dr. Brad is an amazing chiropractor. He helped me so much with my headaches and the rest of my family with their back and neck pain. He truly cares for all of his patients including my whole family.
                </p>
                <div className="text-sm text-text-light/60 mt-4">Verified Patient <span className="text-text-light/35">&middot; Google Review</span></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* F: FAQ */}
      <section className="py-20 bg-white">
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

      {/* G: RELATED CONDITIONS */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Related Conditions</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">We also </span><span className="font-extrabold">treat.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <NeckPainIcon className="w-6 h-6" />, title: 'Neck Pain', desc: 'Often connected to the same spinal issues causing back pain.', href: '/services/neck-pain-treatment' },
                { icon: <SciaticaIcon className="w-6 h-6" />, title: 'Sciatica', desc: 'Radiating leg pain that starts in the lower back.', href: '/services/sciatica-treatment' },
                { icon: <DiscIcon className="w-6 h-6" />, title: 'Disc Injuries', desc: 'Bulging and herniated discs treated without surgery.', href: '/services/disc-injury-treatment' },
              ].map((cond) => (
                <Link key={cond.title} href={cond.href} className="block bg-white rounded-xl p-7 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{cond.icon}</div>
                  <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{cond.title}</h3>
                  <p className="text-sm text-text/70 leading-relaxed mb-3">{cond.desc}</p>
                  <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{cond.title} &rarr;</div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Stop living with back pain." anchor="$55 to start." />
    </>
  );
}
