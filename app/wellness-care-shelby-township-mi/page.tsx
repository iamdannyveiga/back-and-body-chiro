import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, MassageIcon, PediatricIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Wellness Care | Chiropractor Shelby Township MI',
  description:
    'Wellness and maintenance chiropractic care from Dr. Brad Krawczyk. Stay healthy, prevent problems, feel your best. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/wellness-care-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Do I need wellness care if I am not in pain?',
    answer:
      'It depends. Some people benefit from periodic adjustments to maintain spinal health and prevent problems. Others come only when they need to. Dr. Brad will never pressure you into maintenance visits you do not want or need.',
  },
  {
    question: 'How often should I come for wellness visits?',
    answer:
      'There is no one-size-fits-all answer. Some patients come monthly, others quarterly. Dr. Brad will recommend a frequency based on your body, your lifestyle, and your goals — not a standard package.',
  },
  {
    question: 'Is wellness care the same as being locked into a plan?',
    answer:
      'Absolutely not. Wellness care at Back and Body is completely optional and on your terms. No contracts. No prepaid packages. Come when you want to. Stop when you want to. This is the opposite of a hard sell.',
  },
];

const specialties = [
  'Preventive Adjustments', 'Posture Correction', 'Stress Management',
  'Spinal Maintenance', 'Athletic Performance', 'Flexibility Improvement',
  'Immune Support', 'Sleep Quality', 'Overall Well-Being',
];

export default function WellnessCarePage() {
  return (
    <>
      <PageHero
        title={<>
          Wellness Care <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Not just for when you're hurting. Preventive care that keeps your spine healthy and your body moving well."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Wellness Care' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Stay well. </span>Don&apos;t just get well.
                </h2>
                <div className="prose-custom">
                  <p>Most people come to a chiropractor when something hurts. And that&apos;s fine — Dr. Brad is great at fixing problems. But some patients discover that periodic chiropractic care helps them feel better, move better, and prevent the problems that brought them in the first time.</p>
                  <p>Wellness care at Back and Body is not a sales pitch for lifelong visits. It&apos;s an option for patients who have experienced the benefits of chiropractic and want to maintain them. Think of it like going to the dentist for cleanings — you don&apos;t wait until you have a cavity.</p>
                  <p>And here is the important part: Dr. Brad will never pressure you into wellness visits. Come when you want to. Stop when you want to. No contracts, no guilt, no judgment. If you feel great and do not want to come in, that&apos;s a win.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="28" r="16" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <path d="M28 16v24M16 28h24" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <circle cx="28" cy="28" r="6" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why wellness </span><span className="font-extrabold">care works.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Prevents Problems', text: 'Periodic adjustments catch small misalignments before they become big problems. Prevention is always easier than treatment.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Better Performance', text: 'Athletes and active people find that regular adjustments improve flexibility, reduce injury risk, and enhance overall performance.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Less Stress', text: 'Chiropractic care reduces tension in the nervous system. Many wellness patients report better sleep, less stress, and improved mood.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Your Terms, Always', text: 'No contracts. No packages. No pressure. Come monthly, quarterly, or whenever you feel like it. This is your health, your choice.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Focus Areas</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Wellness care </span><span className="font-extrabold">includes.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{specialties.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">A wellness </span><span className="font-extrabold">visit.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Check-In', text: 'Quick assessment of how you are feeling, any new stresses or activities, and a spinal check to identify any areas that need attention.' },
              { num: '2', title: 'Adjustment', text: 'Targeted adjustments to maintain alignment and keep your spine and nervous system functioning optimally. Quick, efficient, and effective.' },
              { num: '3', title: 'Guidance', text: 'Tips on posture, exercise, and daily habits to maintain your results between visits. Dr. Brad keeps it practical and honest.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Wellness </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'The foundation of your wellness routine.', href: '/chiropractic-care-shelby-township-mi' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'Maintenance massage for stress and tension relief.', href: '/massage-therapy-shelby-township-mi' },
                { icon: <PediatricIcon className="w-6 h-6" />, title: 'Nutrition', desc: 'Fuel your body right for optimal health.', href: '/nutrition-shelby-township-mi' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Feel good and stay that way." anchor="$67 to start." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Wellness Care',
          'Wellness and maintenance chiropractic care from Dr. Brad Krawczyk. Stay healthy, prevent problems, feel your best. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'wellness-care-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Wellness Care' },
        ])) }}
      />
    </>
  );
}
