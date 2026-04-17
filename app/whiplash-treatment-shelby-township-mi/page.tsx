import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { NeckPainIcon, MassageIcon, HeadacheIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Whiplash Treatment | Chiropractor Shelby Township MI',
  description:
    'Whiplash treatment from Dr. Brad Krawczyk. Auto accident and injury recovery with chiropractic care. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/whiplash-treatment-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'How soon after an accident should I see a chiropractor?',
    answer:
      'As soon as possible. Whiplash symptoms can take days or even weeks to fully appear. Early treatment helps prevent chronic problems. Do not wait until the pain gets worse.',
  },
  {
    question: 'Can whiplash cause problems months later?',
    answer:
      'Yes. Untreated whiplash can lead to chronic neck pain, headaches, reduced range of motion, and even cognitive issues. Getting proper care early significantly reduces the risk of long-term problems.',
  },
  {
    question: 'Does insurance cover whiplash treatment?',
    answer:
      'In most cases, yes. Auto insurance (PIP/no-fault) typically covers chiropractic care for accident-related injuries. Our office can help you navigate the insurance process.',
  },
  {
    question: 'What if I feel fine after the accident?',
    answer:
      'Get checked anyway. Adrenaline and inflammation can mask symptoms for days or weeks. A proper examination can identify injuries before they become chronic problems.',
  },
];

const conditions = [
  'Whiplash', 'Auto Accident Injuries', 'Cervical Strain', 'Neck Stiffness',
  'Post-Accident Headaches', 'Shoulder Pain from Accident', 'Concussion-Related Neck Pain',
  'Reduced Range of Motion', 'Muscle Guarding',
];

export default function WhiplashTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Whiplash Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Auto accident? Neck injury? Don't wait. Early treatment prevents chronic problems."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Whiplash Treatment' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Whiplash is </span>more serious than it sounds.
                </h2>
                <div className="prose-custom">
                  <p>Whiplash occurs when the head is suddenly snapped forward and backward — most commonly in a car accident. Even low-speed collisions can cause significant injury to the cervical spine, muscles, ligaments, and nerves.</p>
                  <p>The problem with whiplash is that symptoms often don&apos;t appear immediately. Adrenaline masks the pain. Inflammation builds gradually. By the time you realize something is wrong, the injury has had days or weeks to become entrenched.</p>
                  <p>Dr. Brad recommends getting checked as soon as possible after any accident. A thorough examination can identify injuries early, when they are most treatable. He combines gentle cervical adjustments with soft tissue therapy to restore proper alignment, reduce inflammation, and prevent chronic problems.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="16" r="6" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <path d="M28 22v16" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <path d="M22 16 C24 10, 32 10, 34 16" stroke="#5ED299" strokeWidth="1" opacity=".2" />
                  <path d="M20 14l8 4M36 14l-8 4" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why early whiplash </span><span className="font-extrabold">treatment matters.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Prevents Chronic Pain', text: 'Early treatment prevents whiplash from becoming a chronic condition. The sooner you address the injury, the better the outcome.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Restores Range of Motion', text: 'Whiplash restricts neck movement. Gentle adjustments restore mobility before scar tissue and compensation patterns set in.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Reduces Headaches', text: 'Post-accident headaches often come from cervical dysfunction caused by whiplash. Fixing the neck often resolves the headaches.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Insurance Documentation', text: 'Dr. Brad provides thorough documentation of your injuries for insurance claims, ensuring your treatment is properly covered.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Conditions Treated</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Whiplash-related </span><span className="font-extrabold">conditions.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{conditions.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your whiplash </span><span className="font-extrabold">evaluation.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Injury Assessment', text: 'Dr. Brad performs a thorough examination of your cervical spine, checking for misalignment, soft tissue damage, nerve involvement, and range of motion loss.' },
              { num: '2', title: 'Gentle Treatment', text: 'Careful, gentle adjustments appropriate for acute injury. No aggressive manipulation on a recently injured neck. Treatment intensity increases gradually as healing progresses.' },
              { num: '3', title: 'Recovery & Documentation', text: 'A clear treatment plan with honest timelines. Proper documentation for insurance claims. Coordination with other providers if needed.' },
            ].map((step, i) => (
              <div key={step.num}>
                <ScrollReveal delay={`${i * 0.1}s`}><div className="flex gap-5 items-start"><div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-extrabold text-lg shrink-0" style={{ fontFamily: 'var(--font-heading)' }}>{step.num}</div><div className="pb-2"><h4 className="text-[17px] font-bold text-teal mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h4><p className="text-sm text-text/70 leading-relaxed">{step.text}</p></div></div></ScrollReveal>
                {i < 2 && <div className="ml-6 w-px h-8 bg-mint/20 my-1" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="max-w-[860px] mx-auto border-[3px] border-mint/30 rounded-xl p-10 relative"><div className="inline-block bg-mint text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-[6px] rounded-full mb-3">The Back &amp; Body Promise</div><p className="text-base text-text/80 leading-[1.8]">Dr. Brad treats every patient with the same philosophy: <strong>thorough diagnosis, personalized care, and real results.</strong> Your treatment plan is built around your specific condition and goals. Come when you need to. Stop when you&apos;re feeling good. You&apos;re in control of your care.</p></div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Whiplash </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <NeckPainIcon className="w-6 h-6" />, title: 'Neck Pain Treatment', desc: 'Comprehensive neck care for whiplash-related pain.', href: '/neck-pain-treatment-shelby-township-mi' },
                { icon: <HeadacheIcon className="w-6 h-6" />, title: 'Headaches & Migraines', desc: 'Post-accident headaches treated at the cervical source.', href: '/headaches-migraines-shelby-township-mi' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'Soft tissue therapy for whiplash muscle guarding.', href: '/massage-therapy-shelby-township-mi' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Been in an accident?" anchor="$67 — don't wait." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Whiplash Treatment',
          'Whiplash treatment from Dr. Brad Krawczyk. Auto accident and injury recovery with chiropractic care. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'whiplash-treatment-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Whiplash Treatment' },
        ])) }}
      />
    </>
  );
}
