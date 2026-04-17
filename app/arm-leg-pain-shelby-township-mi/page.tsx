import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SciaticaIcon, NeckPainIcon, DecompressionIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Arm & Leg Pain | Chiropractor Shelby Township MI',
  description:
    'Arm and leg pain treatment from Dr. Brad Krawczyk. Radiating pain, numbness, and tingling traced to the spinal source. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/arm-leg-pain-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Why does my arm or leg hurt if the problem is in my spine?',
    answer:
      'Nerves exit the spine and travel to your arms and legs. When a spinal misalignment, disc bulge, or stenosis compresses a nerve, the pain is felt wherever that nerve goes — often far from the actual source of the problem.',
  },
  {
    question: 'What causes radiating pain?',
    answer:
      'Common causes include herniated discs, spinal stenosis, bone spurs, piriformis syndrome, and cervical radiculopathy. Dr. Brad performs specific tests to identify the source of nerve compression.',
  },
  {
    question: 'Can chiropractic help numbness and tingling?',
    answer:
      'Yes. Numbness and tingling in the arms or legs are signs of nerve compression. Chiropractic adjustments reduce the compression, often resolving these symptoms. The key is identifying where the nerve is being compressed.',
  },
];

const conditions = [
  'Radiating Arm Pain', 'Radiating Leg Pain', 'Numbness & Tingling',
  'Cervical Radiculopathy', 'Lumbar Radiculopathy', 'Sciatica',
  'Peripheral Neuropathy', 'Thoracic Outlet Syndrome', 'Piriformis Syndrome',
  'Pinched Nerve', 'Weakness in Extremities',
];

export default function ArmLegPainPage() {
  return (
    <>
      <PageHero
        title={<>
          Arm &amp; Leg Pain <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Radiating pain, numbness, tingling in your arms or legs? The cause is often in your spine."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Arm & Leg Pain' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">The pain is in your arm. </span>The cause is in your spine.
                </h2>
                <div className="prose-custom">
                  <p>When pain, numbness, or tingling radiates into your arms or legs, the instinct is to focus on where it hurts. But the source is usually your spine. Nerves exit between vertebrae and travel to every part of your body. When something compresses those nerves — a disc bulge, bone spur, or misalignment — you feel it in your extremities.</p>
                  <p>Dr. Brad traces the nerve pathway to find exactly where the compression is occurring. It might be a cervical disc causing arm pain. A lumbar issue causing leg pain. Or a peripheral entrapment at the elbow, hip, or piriformis muscle. The treatment depends entirely on the source.</p>
                  <p>This is why treating arm and leg pain with medication alone rarely works long-term — it addresses the signal but ignores the source. Chiropractic addresses both.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/office-exam-bed.webp"
                  alt="Arm and leg pain treatment room at Back and Body in Shelby Township, MI"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why chiropractic works </span><span className="font-extrabold">for radiating pain.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Traces Pain to the Source', text: 'Dr. Brad follows the nerve pathway to find exactly where compression is occurring — not just where you feel the pain.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Relieves Nerve Compression', text: 'Adjustments restore alignment and reduce the pressure on compressed nerves, often resolving symptoms that medication cannot.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Restores Sensation', text: 'As nerve compression is relieved, numbness and tingling typically resolve. Many patients notice improvement within the first few visits.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Comprehensive Approach', text: 'Chiropractic adjustments, decompression for disc issues, and targeted exercises work together for complete nerve recovery.' },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{card.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3><p className="text-sm text-text/70 leading-relaxed">{card.text}</p></div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Conditions Treated</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Radiating pain </span><span className="font-extrabold">conditions.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{conditions.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your radiating pain </span><span className="font-extrabold">evaluation.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Nerve Testing', text: 'Dr. Brad performs neurological tests — reflexes, sensation, muscle strength — to determine which nerve is involved and where it is being compressed.' },
              { num: '2', title: 'Targeted Treatment', text: 'Spinal adjustments at the level of nerve compression. Decompression therapy if disc involvement is present. Peripheral mobilization if entrapment is at the extremity.' },
              { num: '3', title: 'Progress Tracking', text: 'Nerve recovery takes time. Dr. Brad monitors your progress honestly and adjusts the treatment approach as your symptoms improve.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Arm &amp; leg pain </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <SciaticaIcon className="w-6 h-6" />, title: 'Sciatica Treatment', desc: 'The most common cause of radiating leg pain.', href: '/sciatica-treatment-shelby-township-mi' },
                { icon: <NeckPainIcon className="w-6 h-6" />, title: 'Carpal Tunnel Treatment', desc: 'Nerve compression causing arm and hand symptoms.', href: '/carpal-tunnel-treatment-shelby-township-mi' },
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'Disc-related nerve compression treated with traction.', href: '/spinal-decompression-shelby-township-mi' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-light-gray rounded-xl p-7 hover:shadow-md transition-shadow group"><div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div><h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3><p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p><div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">{svc.title} &rarr;</div></Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Pain radiating into your arms or legs?" anchor="$67 to trace the source." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Arm & Leg Pain Treatment',
          'Arm and leg pain treatment from Dr. Brad Krawczyk. Radiating pain, numbness, and tingling traced to the spinal source. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'arm-leg-pain-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Arm & Leg Pain' },
        ])) }}
      />
    </>
  );
}
