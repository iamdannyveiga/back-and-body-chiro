import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { NeckPainIcon, MassageIcon, SpineIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Headaches & Migraines | Chiropractor Shelby Township MI',
  description:
    'Headache and migraine treatment from Dr. Brad Krawczyk. Find the cervical cause and fix it — no medication. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/headaches-migraines-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Can a chiropractor really help with headaches?',
    answer:
      'Yes. Many headaches — especially tension headaches and cervicogenic headaches — originate from dysfunction in the cervical spine. By correcting misalignments and reducing nerve interference, chiropractic care can significantly reduce or eliminate headaches.',
  },
  {
    question: 'What about migraines?',
    answer:
      'While migraines have multiple triggers, cervical dysfunction is a common contributing factor. Many migraine patients report fewer episodes and reduced severity with regular chiropractic care. Dr. Brad will be honest about what chiropractic can and cannot do for your specific situation.',
  },
  {
    question: 'How is this different from just taking medication?',
    answer:
      'Medication masks the symptom. Chiropractic addresses the structural cause. If your headaches are coming from your neck, no amount of Advil or Excedrin will fix that — it will just keep masking it while the problem persists.',
  },
  {
    question: 'How many visits until my headaches improve?',
    answer:
      'Many patients notice improvement within 2-3 visits. Some feel relief after the first adjustment. Chronic headache patients may need a series of visits. Dr. Brad will give you a straight answer based on your exam.',
  },
];

const conditions = [
  'Tension Headaches', 'Cervicogenic Headaches', 'Migraines', 'Cluster Headaches',
  'Chronic Daily Headaches', 'Occipital Neuralgia', 'TMJ-Related Headaches',
  'Post-Concussion Headaches', 'Stress Headaches',
];

export default function HeadachesMigrainesPage() {
  return (
    <>
      <PageHero
        title={<>
          Headaches &amp; Migraines <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Most headaches start in the neck. Dr. Brad finds the cause and fixes it — no pills, no band-aids."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Headaches & Migraines' },
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
                  <span className="font-normal">Your headaches might be </span>a neck problem.
                </h2>
                <div className="prose-custom">
                  <p>If you&apos;ve been living with headaches — popping Advil, Excedrin, or Tylenol just to get through the day — you already know medication isn&apos;t fixing the problem. It&apos;s managing it. And that&apos;s not the same thing.</p>
                  <p>A large percentage of headaches originate from dysfunction in the cervical spine (your neck). Misalignments, muscle tension, and restricted joints in the upper neck create nerve irritation that radiates into your head. These are called cervicogenic headaches, and they respond extremely well to chiropractic care.</p>
                  <p>Dr. Brad examines your cervical spine to determine if your headaches have a structural cause. If they do, targeted adjustments can provide relief that medication never could — because he&apos;s treating the source, not the symptom.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="22" r="10" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <path d="M22 18l3 4M34 18l-3 4M25 28h6" stroke="#5ED299" strokeWidth="1" opacity=".2" />
                  <path d="M28 32v12" stroke="#5ED299" strokeWidth="1.5" opacity=".15" />
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
                <span className="font-normal">Why chiropractic works </span><span className="font-extrabold">for headaches.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Addresses the Root Cause',
                  text: 'If your headaches originate from cervical dysfunction, chiropractic care fixes the structural problem — not just the pain signal.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'No Medication Needed',
                  text: 'Stop the cycle of popping pills. Chiropractic provides drug-free headache relief by correcting the structural cause.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
                  title: 'Fewer Episodes Over Time',
                  text: 'Patients often report not just less intense headaches, but fewer of them. Correcting spinal alignment has lasting effects on headache frequency.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
                  title: 'Better Quality of Life',
                  text: 'Chronic headaches affect everything — work, family, sleep, mood. Getting to the root cause means getting your life back.',
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
              <span className="label">Types We Treat</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Headache types </span><span className="font-extrabold">we address.</span>
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
                <span className="font-normal">Your headache </span><span className="font-extrabold">evaluation.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'History & Exam', text: 'Dr. Brad asks about your headache patterns — frequency, location, triggers, intensity. He examines your cervical spine for misalignment, restricted motion, and muscle tension.' },
              { num: '2', title: 'Adjustment', text: 'If cervical dysfunction is contributing to your headaches, Dr. Brad performs precise, gentle adjustments to the upper cervical spine. Many patients feel relief during their first visit.' },
              { num: '3', title: 'Honest Assessment', text: 'Dr. Brad explains what he found and whether chiropractic can help your specific headache type. If your headaches require a different approach, he will tell you — no runaround.' },
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
                Dr. Brad treats every patient with the same philosophy: <strong>thorough diagnosis, personalized care, and real results.</strong> Your treatment plan is built around your specific condition and goals. Come when you need to. Stop when you&apos;re feeling good. You&apos;re in control of your care.
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
                <span className="font-normal">Headache </span><span className="font-extrabold">questions.</span>
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
                { icon: <NeckPainIcon className="w-6 h-6" />, title: 'Neck Pain Treatment', desc: 'Neck dysfunction is the most common cause of chronic headaches.', href: '/neck-pain-treatment-shelby-township-mi' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'Release the muscle tension that contributes to headaches.', href: '/massage-therapy-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'The foundation of headache treatment at Back and Body.', href: '/chiropractic-care-shelby-township-mi' },
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

      <ConversionCTA line1="Done with headaches running your life?" anchor="$67 to find the cause." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Headache & Migraine Treatment',
          'Headache and migraine treatment from Dr. Brad Krawczyk. Find the cervical cause and fix it — no medication. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'headaches-migraines-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Headaches & Migraines' },
        ])) }}
      />
    </>
  );
}
