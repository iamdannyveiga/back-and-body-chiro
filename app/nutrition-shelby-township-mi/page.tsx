import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, MassageIcon, KinesiologyIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Nutrition | Chiropractor Shelby Township MI',
  description:
    'Nutritional counseling from Dr. Brad Krawczyk. Practical, honest guidance to support healing and overall health. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/nutrition-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Does Dr. Brad offer nutrition counseling?',
    answer:
      'Yes. As part of his whole-body approach, Dr. Brad provides practical nutritional guidance to support healing, reduce inflammation, and improve overall health. This is not a fad diet — it is straightforward, evidence-based guidance.',
  },
  {
    question: 'Is nutrition counseling separate from chiropractic?',
    answer:
      'Nutritional guidance is often integrated into your chiropractic care. If your condition would benefit from dietary changes — like reducing inflammation or supporting disc healing — Dr. Brad will discuss it as part of your overall plan.',
  },
  {
    question: 'Do you sell supplements?',
    answer:
      'Dr. Brad may recommend specific supplements when clinically appropriate, but there is no high-pressure supplement sales. He recommends what he believes will help — nothing more.',
  },
];

const specialties = [
  'Anti-Inflammatory Diet', 'Weight Management', 'Supplement Guidance',
  'Nutritional Support for Healing', 'Energy & Vitality', 'Gut Health',
  'Blood Sugar Management', 'Sports Nutrition', 'Whole-Food Focus',
];

export default function NutritionPage() {
  return (
    <>
      <PageHero
        title={<>
          Nutrition <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="What you eat affects how you heal. Dr. Brad provides practical, no-nonsense nutritional guidance."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Nutrition' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Your body heals better </span>when it&apos;s fueled right.
                </h2>
                <div className="prose-custom">
                  <p>Nutrition plays a critical role in healing, inflammation, energy, and overall health. When you are recovering from an injury or managing chronic pain, what you eat can either help or hinder the process.</p>
                  <p>Dr. Brad takes a practical, common-sense approach to nutrition. No fad diets. No extreme restrictions. No expensive supplement packages. Just straightforward guidance on what to eat to support your body&apos;s natural healing ability.</p>
                  <p>Whether you are dealing with chronic inflammation, trying to manage your weight, or simply want to feel more energized, Dr. Brad can help you make practical dietary changes that actually make a difference.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="28" r="12" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <path d="M22 24c2 6 4 10 6 10s4-4 6-10" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <circle cx="28" cy="20" r="3" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why nutrition </span><span className="font-extrabold">matters for healing.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Reduces Inflammation', text: 'Certain foods fuel inflammation, others fight it. Simple dietary shifts can significantly reduce chronic inflammation and pain.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Supports Recovery', text: 'Your body needs the right nutrients to heal from injuries. Proper nutrition accelerates recovery from chiropractic treatment.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'More Energy', text: 'Better nutrition means better energy. Stop relying on caffeine and sugar for fuel. Feed your body what it actually needs.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Practical, Not Extreme', text: 'No keto cult. No juice cleanses. Just practical, sustainable dietary guidance you can actually follow in real life.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Focus Areas</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Nutritional guidance </span><span className="font-extrabold">includes.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{specialties.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your nutrition </span><span className="font-extrabold">consultation.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Assessment', text: 'Dr. Brad reviews your current diet, health goals, and any conditions that nutrition could help address — inflammation, weight, energy, healing.' },
              { num: '2', title: 'Practical Plan', text: 'Simple, actionable dietary recommendations. Not a 50-page meal plan you will never follow — just clear guidance you can start implementing today.' },
              { num: '3', title: 'Follow-Up', text: 'Check-ins on progress and adjustments as needed. Dr. Brad helps you stay on track without judgment or pressure.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Nutrition </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <KinesiologyIcon className="w-6 h-6" />, title: 'Weight Loss', desc: 'Nutrition is a key component of healthy weight management.', href: '/weight-loss-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Wellness Care', desc: 'Combine nutrition with chiropractic for complete wellness.', href: '/wellness-care-shelby-township-mi' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'Nutrition supports and enhances chiropractic results.', href: '/chiropractic-care-shelby-township-mi' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Ready to fuel your healing?" anchor="$67 to get started." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Nutrition Counseling',
          'Nutritional counseling from Dr. Brad Krawczyk. Practical, honest guidance to support healing and overall health. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'nutrition-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Nutrition' },
        ])) }}
      />
    </>
  );
}
