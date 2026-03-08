import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { NeckPainIcon, MassageIcon, SpineIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Shoulder Pain Treatment | Chiropractor Shelby Township MI',
  description:
    'Shoulder pain treatment from Dr. Brad Krawczyk. Chiropractic care for frozen shoulder, rotator cuff issues, and more. $55 New Patient Special. (586) 207-1624. Shelby Township, MI.',
};

const faqItems = [
  {
    question: 'Can a chiropractor help with shoulder pain?',
    answer:
      'Yes. Many shoulder problems involve the cervical spine, thoracic spine, or both. Dr. Brad evaluates the shoulder joint itself plus the spine and surrounding structures to identify the true source of your pain.',
  },
  {
    question: 'What about frozen shoulder?',
    answer:
      'Frozen shoulder (adhesive capsulitis) involves progressive stiffness and pain. Chiropractic care, combined with specific stretching and mobilization, can help improve range of motion and reduce pain throughout the stages of frozen shoulder.',
  },
  {
    question: 'Do I need an MRI for shoulder pain?',
    answer:
      'Not always. Dr. Brad performs a thorough examination first. If he suspects a rotator cuff tear or other structural damage that would change the treatment approach, he will recommend imaging. No unnecessary tests.',
  },
];

const conditions = [
  'Frozen Shoulder', 'Rotator Cuff Issues', 'Shoulder Impingement',
  'AC Joint Pain', 'Shoulder Bursitis', 'Thoracic Outlet Syndrome',
  'Referred Shoulder Pain', 'Postural Shoulder Pain', 'Sports Shoulder Injuries',
];

export default function ShoulderPainTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Shoulder Pain Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Frozen shoulder? Rotator cuff? Stiffness? Dr. Brad finds what's causing it and treats it."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Shoulder Pain Treatment' },
        ]}
        bannerText="Shoulder pain treatment — clinical, professional"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Shoulder pain </span>isn&apos;t always about the shoulder.
                </h2>
                <div className="prose-custom">
                  <p>The shoulder is one of the most complex joints in your body — and one of the most commonly misunderstood when it comes to pain. Many shoulder problems actually originate from the cervical spine, thoracic spine, or the surrounding musculature.</p>
                  <p>Dr. Brad evaluates the entire kinetic chain — your neck, upper back, shoulder blade mechanics, and the shoulder joint itself. This comprehensive approach identifies whether your pain is from the shoulder, the spine, or both.</p>
                  <p>Treatment may include chiropractic adjustments to the thoracic and cervical spine, shoulder joint mobilization, soft tissue therapy, and targeted exercises. The approach depends on the diagnosis — and getting the diagnosis right is what Dr. Brad does best.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule" className="btn btn--mint">Book Your $55 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="24" r="8" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <path d="M20 24 C16 26, 14 30, 14 34" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <path d="M36 24 C40 26, 42 30, 42 34" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <path d="M28 32v12" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why chiropractic works </span><span className="font-extrabold">for shoulder pain.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Full Kinetic Chain Assessment', text: 'Dr. Brad checks your neck, upper back, and shoulder — not just the painful joint — to find where the problem truly starts.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Improved Range of Motion', text: 'Adjustments and mobilization restore movement in stiff shoulders, whether from frozen shoulder, impingement, or postural dysfunction.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Non-Surgical Approach', text: 'Many shoulder conditions respond to conservative care. Chiropractic is worth trying before considering cortisone injections or surgery.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Corrective Exercises', text: 'Targeted exercises strengthen the rotator cuff and shoulder blade stabilizers, preventing recurrence and improving long-term function.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Conditions Treated</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Shoulder conditions </span><span className="font-extrabold">we treat.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{conditions.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your shoulder pain </span><span className="font-extrabold">visit.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Comprehensive Exam', text: 'Dr. Brad tests your shoulder joint, rotator cuff, cervical spine, and thoracic spine. He checks range of motion, strength, and identifies the source of pain.' },
              { num: '2', title: 'Targeted Treatment', text: 'Adjustments to the spine and/or shoulder joint, soft tissue work on tight muscles, and mobilization techniques to restore movement and reduce pain.' },
              { num: '3', title: 'Exercise Program', text: 'Specific exercises to strengthen weak areas and stabilize the shoulder for long-term results. Dr. Brad shows you exactly what to do at home.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Shoulder pain </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <NeckPainIcon className="w-6 h-6" />, title: 'Neck Pain Treatment', desc: 'Neck and shoulder pain often share the same cause.', href: '/services/neck-pain-treatment' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'Release muscle tension that contributes to shoulder pain.', href: '/services/massage-therapy' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Arm & Leg Pain', desc: 'Nerve compression can cause pain into the arms.', href: '/services/arm-leg-pain' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Learn More &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Shoulder pain limiting your life?" anchor="$55 to find the cause." />
    </>
  );
}
