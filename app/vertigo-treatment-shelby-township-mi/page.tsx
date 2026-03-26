import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { NeckPainIcon, HeadacheIcon, SpineIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Vertigo Treatment | Chiropractor Shelby Township MI',
  description:
    'Vertigo and dizziness treatment from Dr. Brad Krawczyk. Chiropractic care for cervicogenic vertigo and BPPV. $67 New Patient Special. (586) 486-5235. Shelby Township, MI.',
  alternates: {
    canonical: '/vertigo-treatment-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Can a chiropractor help with vertigo?',
    answer:
      'Yes. Many cases of vertigo are related to cervical spine dysfunction (cervicogenic vertigo) or inner ear crystal displacement (BPPV). Chiropractic adjustments and specific repositioning maneuvers can provide significant relief.',
  },
  {
    question: 'What is BPPV?',
    answer:
      'Benign Paroxysmal Positional Vertigo (BPPV) occurs when tiny calcium crystals in the inner ear become displaced. Specific head repositioning maneuvers like the Epley maneuver can often resolve BPPV in one or two sessions.',
  },
  {
    question: 'How do I know if my vertigo is from my neck?',
    answer:
      'Cervicogenic vertigo is often accompanied by neck pain or stiffness, and dizziness is triggered by neck movements. Dr. Brad performs specific tests to distinguish between cervical and inner ear causes of vertigo.',
  },
];

const conditions = [
  'Cervicogenic Vertigo', 'BPPV', 'Dizziness', 'Balance Problems',
  'Inner Ear Dysfunction', 'Post-Concussion Dizziness', 'Motion Sensitivity',
  'Neck-Related Vertigo', 'Lightheadedness',
];

export default function VertigoTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Vertigo Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Dizziness, spinning, balance problems. Dr. Brad identifies the cause and treats it — often in just a few visits."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Vertigo Treatment' },
        ]}
        bannerText="Vertigo treatment — clinical, supportive"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Vertigo has </span>a cause. Let&apos;s find it.
                </h2>
                <div className="prose-custom">
                  <p>Vertigo — that feeling that the room is spinning — can be debilitating. It makes driving dangerous, working difficult, and everyday tasks unpredictable. And most people have no idea that a chiropractor can help.</p>
                  <p>There are two common types of vertigo Dr. Brad sees. Cervicogenic vertigo is caused by dysfunction in the upper cervical spine — misalignment or restricted joints that disrupt the signals your brain uses for balance. BPPV is caused by displaced crystals in the inner ear that confuse your vestibular system.</p>
                  <p>Both types respond well to specific treatments. Cervical adjustments for neck-related vertigo. Repositioning maneuvers (like the Epley technique) for BPPV. Dr. Brad determines which type you have and treats accordingly.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="28" r="14" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <circle cx="28" cy="28" r="8" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <circle cx="28" cy="28" r="2" fill="#5ED299" opacity=".3" />
                  <path d="M28 14v4M28 38v4M14 28h4M38 28h4" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why chiropractic works </span><span className="font-extrabold">for vertigo.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Identifies the Type', text: 'Not all vertigo is the same. Dr. Brad performs specific tests to determine whether yours is cervical, vestibular, or another cause entirely.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Often Resolves Quickly', text: 'Many vertigo cases — especially BPPV — can be resolved in just one or two sessions with the right repositioning technique.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'No Medication Needed', text: 'Anti-vertigo medications mask symptoms and cause drowsiness. Treating the cause provides actual resolution without side effects.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Restored Balance', text: 'Proper cervical alignment and vestibular function mean stable balance, confident movement, and safe driving again.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Conditions Treated</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Vertigo-related </span><span className="font-extrabold">conditions.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{conditions.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your vertigo </span><span className="font-extrabold">evaluation.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Diagnostic Testing', text: 'Dr. Brad performs the Dix-Hallpike test and cervical examination to determine whether your vertigo is vestibular (inner ear) or cervicogenic (neck-related).' },
              { num: '2', title: 'Targeted Treatment', text: 'For BPPV: specific repositioning maneuvers to guide displaced crystals back into place. For cervicogenic vertigo: gentle cervical adjustments to restore proper alignment and nerve function.' },
              { num: '3', title: 'Follow-Up', text: 'Many patients feel significant improvement after one session. Dr. Brad will be honest about whether additional visits are needed and what to expect going forward.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Vertigo </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <NeckPainIcon className="w-6 h-6" />, title: 'Neck Pain Treatment', desc: 'Cervical dysfunction is a common vertigo cause.', href: '/neck-pain-treatment-shelby-township-mi' },
                { icon: <HeadacheIcon className="w-6 h-6" />, title: 'Headaches & Migraines', desc: 'Vertigo and headaches often share cervical origins.', href: '/headaches-migraines-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'The foundation of cervicogenic vertigo treatment.', href: '/chiropractic-care-shelby-township-mi' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Room still spinning?" anchor="$67 to find out why." />
    </>
  );
}
