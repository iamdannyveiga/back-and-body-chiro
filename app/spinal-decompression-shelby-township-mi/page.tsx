import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, SciaticaIcon, DiscIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Spinal Decompression | Chiropractor Shelby Township MI',
  description:
    'Non-surgical spinal decompression therapy from Dr. Brad Krawczyk. Disc relief without surgery. $67 New Patient Special. (586) 486-5235. Shelby Township, MI.',
  alternates: {
    canonical: '/spinal-decompression-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'What is spinal decompression?',
    answer:
      'Spinal decompression is a non-surgical traction therapy that gently stretches the spine, creating negative pressure within the disc. This helps retract bulging or herniated disc material, takes pressure off nerves, and promotes nutrient flow for healing.',
  },
  {
    question: 'Does spinal decompression hurt?',
    answer:
      'No. Most patients find it comfortable and relaxing. You lie on the decompression table while the machine applies gentle, controlled traction. Many patients actually fall asleep during sessions.',
  },
  {
    question: 'How many sessions will I need?',
    answer:
      'It depends on the severity of your disc condition. Some patients feel improvement in a few sessions. More significant disc injuries may benefit from a series of treatments. Dr. Brad will be upfront about what to expect.',
  },
  {
    question: 'Is spinal decompression covered by insurance?',
    answer:
      'Coverage varies by plan. Our office can help you understand your benefits. Either way, at $67 for a new patient visit, you can find out if decompression is right for you without a big financial commitment.',
  },
];

const conditions = [
  'Herniated Disc', 'Bulging Disc', 'Degenerative Disc Disease', 'Sciatica',
  'Spinal Stenosis', 'Pinched Nerve', 'Chronic Low Back Pain',
  'Cervical Disc Issues', 'Facet Syndrome', 'Failed Back Surgery Syndrome',
];

export default function SpinalDecompressionPage() {
  return (
    <>
      <PageHero
        title={<>
          Spinal Decompression <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Non-surgical disc relief. Gentle traction therapy that creates space, reduces pressure, and promotes healing."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Spinal Decompression' },
        ]}
        bannerText="Spinal decompression therapy — clinical, modern"
      />

      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Disc relief </span>without surgery.
                </h2>
                <div className="prose-custom">
                  <p>When a disc bulges, herniates, or degenerates, it can put pressure on nearby nerves — causing pain, numbness, tingling, or weakness. Traditional options often jump to epidural injections or surgery. Spinal decompression offers another path.</p>
                  <p>Decompression therapy uses a specialized table to apply controlled, gentle traction to the spine. This creates negative intradiscal pressure — essentially a vacuum effect that helps retract bulging disc material, take pressure off nerves, and draw in nutrients that promote disc healing.</p>
                  <p>At Back and Body, Dr. Brad combines spinal decompression with chiropractic adjustments for a comprehensive approach to disc-related pain. It&apos;s non-invasive, drug-free, and effective for many patients who&apos;ve been told surgery is their only option.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <path d="M28 12v32" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <path d="M20 20h16" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <path d="M22 28h12" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <path d="M20 36h16" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <circle cx="28" cy="28" r="3" stroke="#5ED299" strokeWidth="1.5" opacity=".3" />
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
                <span className="font-normal">Why decompression </span><span className="font-extrabold">works.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 12h16M12 4v16" /></svg>,
                  title: 'Creates Space for Healing',
                  text: 'Negative pressure draws bulging disc material back toward center, reducing nerve compression and creating an environment for the disc to heal.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Reduces Pain Naturally',
                  text: 'By addressing the disc issue directly, decompression relieves the nerve pressure causing your pain — without medication or injections.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Non-Surgical Alternative',
                  text: 'Many patients scheduled for disc surgery find relief with decompression therapy. It is a safe, proven alternative worth trying first.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
                  title: 'Comfortable Treatment',
                  text: 'Sessions are gentle and relaxing. Patients lie on the decompression table while controlled traction is applied. Many patients fall asleep during treatment.',
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
              <span className="label">Conditions Treated</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Decompression </span><span className="font-extrabold">can help.</span>
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
                <span className="font-normal">Your decompression </span><span className="font-extrabold">session.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Setup', text: 'You lie comfortably on the decompression table, fully clothed. A harness is placed around your hips. The table is adjusted to target your specific disc level.' },
              { num: '2', title: 'Treatment', text: 'The table applies controlled, gentle traction — stretching and releasing in cycles. Each session lasts about 15-20 minutes. Most patients feel a gentle stretch with no pain.' },
              { num: '3', title: 'Follow-Up', text: 'Dr. Brad may perform a chiropractic adjustment after decompression to maximize results. He discusses progress and adjusts the treatment plan as needed — always honest, never overselling.' },
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
                Dr. Brad treats every patient with the same philosophy: <strong>no sales, no gimmicks, just honest care focused on results.</strong> Your treatment plan is based on what you actually need — nothing more. Come when you need to. Stop when you&apos;re feeling good. No guilt, no pressure.
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
                <span className="font-normal">Decompression </span><span className="font-extrabold">questions.</span>
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
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'The foundation — precise adjustments to support decompression results.', href: '/chiropractic-care-shelby-township-mi' },
                { icon: <SciaticaIcon className="w-6 h-6" />, title: 'Sciatica Treatment', desc: 'Decompression is often key to resolving sciatica pain.', href: '/sciatica-treatment-shelby-township-mi' },
                { icon: <DiscIcon className="w-6 h-6" />, title: 'Disc Injury Treatment', desc: 'Comprehensive care for herniated and bulging discs.', href: '/disc-injury-treatment-shelby-township-mi' },
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

      <ConversionCTA line1="Disc pain doesn't have to mean surgery." anchor="$67 to find out." />
    </>
  );
}
