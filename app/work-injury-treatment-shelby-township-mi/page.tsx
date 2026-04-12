import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, DecompressionIcon, NeckPainIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Work Injury Treatment | Chiropractor Shelby Township MI',
  description:
    'Work injury and workers comp chiropractic treatment from Dr. Brad Krawczyk. Back pain, repetitive strain, and workplace injuries. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/work-injury-treatment-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Does workers compensation cover chiropractic?',
    answer:
      'Yes. In Michigan, workers compensation covers chiropractic care for workplace injuries. Our office can help you navigate the claims process and ensure proper documentation.',
  },
  {
    question: 'What types of work injuries do you treat?',
    answer:
      'Everything from lifting injuries and repetitive strain to slip-and-fall accidents and prolonged sitting/desk-related problems. If your injury is related to work, Dr. Brad can help.',
  },
  {
    question: 'How soon should I come in after a work injury?',
    answer:
      'As soon as possible. Early treatment prevents injuries from becoming chronic. Document your injury with your employer and come in for an evaluation right away.',
  },
];

const conditions = [
  'Lifting Injuries', 'Repetitive Strain', 'Slip & Fall Injuries',
  'Desk-Related Pain', 'Warehouse Injuries', 'Construction Injuries',
  'Carpal Tunnel from Work', 'Lower Back Strain', 'Neck & Shoulder Tension',
];

export default function WorkInjuryTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Work Injury Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Hurt at work? Dr. Brad treats workplace injuries with the same honest approach — no games, no runaround."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Work Injury Treatment' },
        ]}
        bannerText="Work injury treatment — clinical, professional"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Work injuries need </span>proper treatment.
                </h2>
                <div className="prose-custom">
                  <p>Workplace injuries are among the most common reasons people develop chronic pain. Whether it&apos;s a lifting injury, a slip and fall, repetitive strain from desk work, or the physical demands of manual labor — these injuries need proper treatment, not just time off and painkillers.</p>
                  <p>Dr. Brad treats work injuries with the same approach he uses for everything: find the cause, fix it, and be honest about the process. He provides thorough documentation for workers compensation claims and coordinates with your employer&apos;s insurance when needed.</p>
                  <p>Don&apos;t ignore a work injury hoping it will go away. Early intervention is the best way to prevent a short-term problem from becoming a lifelong issue.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <rect x="16" y="12" width="24" height="32" rx="3" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <path d="M24 24h8M24 30h8M24 36h4" stroke="#5ED299" strokeWidth="1" opacity=".2" />
                  <path d="M28 12v-4M24 8h8" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why choose chiropractic </span><span className="font-extrabold">for work injuries.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Faster Return to Work', text: 'Proper treatment gets you back to work sooner. Ignoring injuries or masking them with medication prolongs recovery.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Proper Documentation', text: 'Dr. Brad provides detailed records of your injuries, treatment, and progress — essential for workers comp claims.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Prevents Chronic Issues', text: 'Early treatment prevents acute work injuries from becoming chronic conditions that affect you for years.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Drug-Free Recovery', text: 'Chiropractic treats the injury itself — not just the pain signal. No prescriptions. No dependence on medication.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Conditions Treated</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Work injury </span><span className="font-extrabold">conditions.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{conditions.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your work injury </span><span className="font-extrabold">visit.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Injury Evaluation', text: 'Dr. Brad documents your injury, performs a thorough examination, and identifies the structural cause of your pain. This documentation supports your workers comp claim.' },
              { num: '2', title: 'Treatment', text: 'Targeted chiropractic adjustments, soft tissue therapy, and rehabilitative exercises. Treatment is specific to your injury type — lifting injury, repetitive strain, or impact injury.' },
              { num: '3', title: 'Return-to-Work Plan', text: 'Dr. Brad provides a clear timeline for recovery and communicates with your employer\'s insurance as needed. His goal is getting you better and back to work safely.' },
            ].map((step, i) => (
              <div key={step.num}>
                <ScrollReveal delay={`${i * 0.1}s`}><div className="flex gap-5 items-start"><div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-extrabold text-lg shrink-0" style={{ fontFamily: 'var(--font-heading)' }}>{step.num}</div><div className="pb-2"><h4 className="text-[17px] font-bold text-teal mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h4><p className="text-sm text-text/70 leading-relaxed">{step.text}</p></div></div></ScrollReveal>
                {i < 2 && <div className="ml-6 w-px h-8 bg-mint/20 my-1" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="max-w-[860px] mx-auto border-[3px] border-mint/30 rounded-xl p-10 relative"><div className="inline-block bg-mint text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-[6px] rounded-full mb-3">The Back &amp; Body Promise</div><p className="text-base text-text/80 leading-[1.8]">Dr. Brad treats every patient with the same philosophy: <strong>no sales, no gimmicks, just honest care focused on results.</strong> Your treatment plan is based on what you actually need — nothing more. Come when you need to. Stop when you&apos;re feeling good. No guilt, no pressure.</p></div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Work injury </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Back Pain Treatment', desc: 'Lifting injuries and back strain from work.', href: '/back-pain-treatment-shelby-township-mi' },
                { icon: <NeckPainIcon className="w-6 h-6" />, title: 'Carpal Tunnel Treatment', desc: 'Repetitive strain injuries from work tasks.', href: '/carpal-tunnel-treatment-shelby-township-mi' },
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'Disc injuries from heavy lifting at work.', href: '/spinal-decompression-shelby-township-mi' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Hurt at work?" anchor="$67 to get treated right." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Work Injury Treatment',
          'Work injury and workers comp chiropractic treatment from Dr. Brad Krawczyk. Back pain, repetitive strain, and workplace injuries. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'work-injury-treatment-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Work Injury Treatment' },
        ])) }}
      />
    </>
  );
}
