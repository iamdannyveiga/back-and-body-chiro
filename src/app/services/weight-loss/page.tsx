import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, MassageIcon, KinesiologyIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Weight Loss | Chiropractor Shelby Township MI',
  description:
    'Weight loss support from Dr. Brad Krawczyk. Practical nutritional guidance and chiropractic care to support healthy weight management. $55 New Patient Special. (586) 207-1624. Shelby Township, MI.',

  alternates: {
    canonical: "https://backandbodydoc.com/services/weight-loss/",
  },
};

const faqItems = [
  {
    question: 'How does a chiropractor help with weight loss?',
    answer:
      'Dr. Brad takes a whole-body approach. Proper spinal alignment improves nervous system function, which affects metabolism and energy. Combined with practical nutritional guidance and exercise recommendations, chiropractic care supports sustainable weight management.',
  },
  {
    question: 'Is this a weight loss program?',
    answer:
      'It is not a packaged weight loss program with monthly fees. Dr. Brad provides practical guidance on nutrition, movement, and lifestyle changes that support healthy weight management. No shakes. No pills. No gimmicks.',
  },
  {
    question: 'How is this different from a diet?',
    answer:
      'Diets are temporary. Dr. Brad helps you make sustainable lifestyle changes — practical shifts in how you eat and move that you can maintain long-term. The goal is lasting health, not a quick fix.',
  },
];

const specialties = [
  'Nutritional Guidance', 'Anti-Inflammatory Diet', 'Exercise Recommendations',
  'Metabolic Support', 'Lifestyle Coaching', 'Body Composition',
  'Sustainable Weight Management', 'Stress-Related Weight Gain', 'Energy Optimization',
];

export default function WeightLossPage() {
  return (
    <>
      <PageHero
        title={<>
          Weight Loss <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="No gimmicks. No shakes. No pills. Just practical, sustainable guidance for healthy weight management."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Weight Loss' },
        ]}
        bannerText="Weight loss support — practical, honest"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Weight loss that </span>actually lasts.
                </h2>
                <div className="prose-custom">
                  <p>If you&apos;ve tried every diet, bought every supplement, and still struggle with your weight — you are not alone. And you are not the problem. The approach was the problem.</p>
                  <p>Dr. Brad takes a practical, honest approach to weight management. No expensive programs. No miracle supplements. No shame. Just straightforward guidance on nutrition, movement, and lifestyle changes that are actually sustainable.</p>
                  <p>He combines nutritional counseling with chiropractic care to address the structural and functional aspects of health that affect weight. When your spine is aligned, your nervous system functions better. When your body moves well, you move more. When you eat right, inflammation drops and energy rises. It all connects.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule" className="btn btn--mint">Book Your $55 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <path d="M20 42 C20 34, 24 28, 28 28 C32 28, 36 34, 36 42" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <circle cx="28" cy="20" r="6" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <path d="M22 32h12" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Our approach to </span><span className="font-extrabold">weight management.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Reduces Inflammation', text: 'Chronic inflammation makes weight loss harder. Anti-inflammatory nutrition reduces the internal obstacles your body faces.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Sustainable Changes', text: 'No crash diets. No deprivation. Just practical shifts in eating and movement that you can maintain for life.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Better Energy', text: 'When you eat better and your spine is aligned, energy levels improve naturally. Less fatigue means more activity means better results.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'No Judgment', text: 'Dr. Brad meets you where you are. No shaming. No unrealistic expectations. Just honest guidance and genuine support.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Focus Areas</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Weight management </span><span className="font-extrabold">includes.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{specialties.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your weight management </span><span className="font-extrabold">consultation.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Honest Conversation', text: 'Dr. Brad talks with you about your history, your goals, what you have tried, and what has not worked. No judgment — just understanding where you are starting from.' },
              { num: '2', title: 'Practical Plan', text: 'Simple nutritional shifts, movement recommendations, and lifestyle adjustments. Nothing extreme. Nothing you cannot sustain. Just practical steps forward.' },
              { num: '3', title: 'Ongoing Support', text: 'Regular check-ins, adjustments to the plan as needed, and chiropractic care to keep your body functioning optimally throughout your journey.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Weight loss </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <KinesiologyIcon className="w-6 h-6" />, title: 'Nutrition', desc: 'The dietary foundation of healthy weight management.', href: '/services/nutrition' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Wellness Care', desc: 'Complete wellness support for lasting health.', href: '/services/wellness-care' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'Spinal health supports metabolic function.', href: '/services/chiropractic-care' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Ready for a real approach to weight loss?" anchor="$55 to start." />
    </>
  );
}
