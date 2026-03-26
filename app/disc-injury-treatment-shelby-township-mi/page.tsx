import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { DecompressionIcon, SciaticaIcon, SpineIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Disc Injury Treatment | Chiropractor Shelby Township MI',
  description:
    'Herniated and bulging disc treatment from Dr. Brad Krawczyk. Non-surgical chiropractic care and spinal decompression. $67 New Patient Special. (586) 486-5235. Shelby Township, MI.',
  alternates: {
    canonical: '/disc-injury-treatment-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'What is the difference between a bulging disc and a herniated disc?',
    answer:
      'A bulging disc extends beyond its normal boundary but the outer wall remains intact. A herniated disc has a tear in the outer wall, allowing inner material to leak out. Both can compress nerves and cause pain. Dr. Brad treats both conditions.',
  },
  {
    question: 'Can disc injuries heal without surgery?',
    answer:
      'Yes. Many disc injuries respond well to conservative care — chiropractic adjustments and spinal decompression therapy. Surgery should be a last resort, not a first option. Dr. Brad will be honest about your specific situation.',
  },
  {
    question: 'How does spinal decompression help disc injuries?',
    answer:
      'Decompression creates negative pressure within the disc, which helps retract bulging material, reduces nerve compression, and draws in nutrients that promote disc healing. It is gentle, non-invasive, and effective for many disc conditions.',
  },
  {
    question: 'How long does disc injury treatment take?',
    answer:
      'It depends on the severity. Mild bulges may improve in a few weeks. More significant herniations may require several weeks of combined chiropractic and decompression therapy. Dr. Brad will give you a realistic timeline.',
  },
];

const conditions = [
  'Herniated Disc', 'Bulging Disc', 'Degenerative Disc Disease',
  'Disc Protrusion', 'Disc Extrusion', 'Annular Tear',
  'Cervical Disc Injury', 'Lumbar Disc Injury', 'Thoracic Disc Injury',
  'Sciatica from Disc', 'Radiculopathy',
];

export default function DiscInjuryTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Disc Injury Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Herniated disc? Bulging disc? Dr. Brad treats disc injuries without surgery — honestly and effectively."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Disc Injury Treatment' },
        ]}
        bannerText="Disc injury treatment — clinical, professional"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">A disc diagnosis </span>doesn&apos;t mean surgery.
                </h2>
                <div className="prose-custom">
                  <p>When you hear &ldquo;herniated disc&rdquo; or &ldquo;bulging disc,&rdquo; it sounds serious. And it can be. But it doesn&apos;t automatically mean you need surgery, injections, or a life of medication. Many disc injuries respond well to non-surgical treatment.</p>
                  <p>At Back and Body, Dr. Brad combines chiropractic adjustments with spinal decompression therapy to treat disc injuries conservatively. Adjustments restore proper spinal alignment and reduce the mechanical stress on the disc. Decompression creates space for the disc to heal by reducing intradiscal pressure.</p>
                  <p>The key is an accurate diagnosis. Dr. Brad performs a thorough examination to understand exactly what type of disc injury you have, how severe it is, and whether conservative care is appropriate. He&apos;ll be honest — if your case requires a surgical referral, he&apos;ll tell you.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <ellipse cx="28" cy="28" rx="12" ry="4" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <ellipse cx="28" cy="20" rx="10" ry="3" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <ellipse cx="28" cy="36" rx="10" ry="3" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <path d="M28 12v32" stroke="#5ED299" strokeWidth="1" opacity=".1" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Non-surgical disc </span><span className="font-extrabold">treatment benefits.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16M12 4v16" /></svg>, title: 'Spinal Decompression', text: 'Gentle traction creates negative pressure within the disc, encouraging bulging material to retract and promoting nutrient flow for healing.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Nerve Pressure Relief', text: 'Adjustments and decompression reduce the pressure on compressed nerves, relieving the pain, numbness, and tingling caused by disc injuries.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Avoids Surgery', text: 'Conservative treatment first. Many patients scheduled for disc surgery find relief with chiropractic and decompression. Surgery should be the last option.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Comprehensive Approach', text: 'Chiropractic adjustments, decompression, massage, and corrective exercises work together for complete disc injury recovery.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Conditions Treated</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Disc conditions </span><span className="font-extrabold">we treat.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{conditions.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your disc injury </span><span className="font-extrabold">evaluation.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Diagnosis', text: 'Dr. Brad performs orthopedic and neurological tests to determine the type and severity of your disc injury. He reviews any existing MRI or imaging and may order additional studies if needed.' },
              { num: '2', title: 'Treatment Plan', text: 'A combination of chiropractic adjustments and spinal decompression, tailored to your specific disc condition. Massage therapy may be added to address surrounding muscle tension.' },
              { num: '3', title: 'Honest Prognosis', text: 'Dr. Brad tells you what to expect, how long recovery may take, and whether conservative care is the right path for your case. No overselling. No false promises.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Disc injury </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'The ideal complement for disc injuries — gentle traction therapy.', href: '/spinal-decompression-shelby-township-mi' },
                { icon: <SciaticaIcon className="w-6 h-6" />, title: 'Sciatica Treatment', desc: 'Disc injuries are the most common cause of sciatica.', href: '/sciatica-treatment-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Back Pain Treatment', desc: 'Comprehensive back pain care for all causes.', href: '/back-pain-treatment-shelby-township-mi' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Disc injury doesn't have to mean surgery." anchor="$67 to explore your options." />
    </>
  );
}
