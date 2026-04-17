import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, SciaticaIcon, DiscIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'SoftWave Therapy | Chiropractor Shelby Township MI',
  description:
    'SoftWave tissue regeneration therapy in Shelby Township, MI. FDA-cleared shockwave therapy for chronic pain, inflammation, and tissue healing. Dr. Brad Krawczyk. $67 New Patient Special. (586) 207-1624.',
  alternates: {
    canonical: '/softwave-therapy-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'What is SoftWave therapy and how does it work?',
    answer:
      'SoftWave therapy uses unfocused electrohydraulic shockwaves to trigger your body\u2019s natural healing response. The acoustic waves reach deep into tissue, increasing blood flow, activating resident stem cells, and reducing inflammation — without surgery or medication.',
  },
  {
    question: 'Is SoftWave therapy FDA-cleared?',
    answer:
      'Yes. SoftWave therapy is FDA 510(k) cleared for activation of connective tissue, treatment of pain, and improving blood supply. It is a safe, non-invasive treatment backed by clinical research.',
  },
  {
    question: 'How many SoftWave sessions will I need?',
    answer:
      'Most patients notice improvement after the first session. A typical treatment plan involves 6 to 12 sessions depending on the condition and how long you\u2019ve had it. Dr. Brad builds the plan around your specific situation — not a packaged protocol.',
  },
  {
    question: 'Does SoftWave therapy hurt?',
    answer:
      'Most patients feel mild pressure or a tapping sensation during treatment. Sessions typically last 10 to 15 minutes with no downtime. You can go right back to your day.',
  },
  {
    question: 'What conditions does SoftWave treat?',
    answer:
      'SoftWave works well for plantar fasciitis, shoulder pain, knee pain, tennis elbow, carpal tunnel, neuropathy, arthritis, back pain, and soft tissue injuries. If you\u2019ve had pain that hasn\u2019t resolved with rest or standard care, SoftWave is often a good next step.',
  },
  {
    question: 'Is SoftWave covered by insurance?',
    answer:
      'Most insurance plans don\u2019t cover SoftWave yet because it\u2019s a newer regenerative therapy. The good news is that pricing is transparent and affordable, and the results typically justify the investment — especially compared to surgery or long-term pain medication.',
  },
];

const conditions = [
  'Plantar Fasciitis', 'Shoulder Pain', 'Rotator Cuff Injuries', 'Knee Pain',
  'Tennis Elbow', 'Golfer\'s Elbow', 'Carpal Tunnel', 'Neuropathy',
  'Arthritis', 'Chronic Low Back Pain', 'Hip Pain', 'Achilles Tendonitis',
  'Soft Tissue Injuries', 'Sports Injuries',
];

export default function SoftWaveTherapyPage() {
  return (
    <>
      <PageHero
        title={<>
          SoftWave Therapy <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="FDA-cleared tissue regeneration. The newest addition at Back and Body — and one of the few SoftWave machines in Macomb County."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'SoftWave Therapy' },
        ]}
      />

      {/* OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Healing at the </span>cellular level.
                </h2>
                <div className="prose-custom">
                  <p>SoftWave therapy uses unfocused electrohydraulic shockwaves — acoustic pulses that travel deep into injured tissue and trigger the same healing cascade your body uses after an injury. It stimulates blood flow, wakes up resident stem cells, and tells the surrounding tissue to start repairing itself.</p>
                  <p>Unlike focused shockwave (which concentrates energy in a tight spot), SoftWave&apos;s unfocused technology covers a wider treatment area and reaches deeper structures without the discomfort. That&apos;s why the FDA cleared it for activation of connective tissue, treatment of pain, and improvement of blood supply.</p>
                  <p>Back and Body recently added SoftWave to our clinic. It&apos;s the same device used across MaxLiving Health Centers nationally — a proven technology that belongs alongside chiropractic care and spinal decompression. For patients with nagging pain that hasn&apos;t responded to other care, SoftWave is often the missing piece.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/office-exam-bed.webp"
                  alt="Softwave therapy treatment room at Back and Body in Shelby Township, MI"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
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
              <span className="label">Why SoftWave</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">What makes it </span><span className="font-extrabold">different.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20" /></svg>,
                  title: 'Regenerates Tissue Without Surgery',
                  text: 'The shockwaves trigger your body to build new blood vessels, activate stem cells, and repair damaged tissue naturally. No cutting, no stitches, no anesthesia.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Reduces Inflammation at the Source',
                  text: 'Instead of masking inflammation with medication, SoftWave addresses the underlying cellular dysfunction that keeps tissue inflamed — so pain gets better and stays better.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
                  title: 'No Drugs, No Downtime',
                  text: 'Sessions last 10-15 minutes. You walk out ready to go back to work, the gym, or wherever you need to be. No pills. No recovery period.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'FDA-Cleared, Clinically Proven',
                  text: 'SoftWave is FDA 510(k) cleared for activation of connective tissue, pain treatment, and improved blood supply. The research is solid and it\'s been used by thousands of clinicians.',
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
                <span className="font-normal">SoftWave </span><span className="font-extrabold">can help.</span>
              </h2>
              <p className="text-text/70 mt-3 max-w-[620px] mx-auto">Particularly effective for pain that hasn&apos;t responded to rest, medication, or standard physical therapy.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center max-w-[720px] mx-auto">
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
                <span className="font-normal">Your SoftWave </span><span className="font-extrabold">session.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Setup', text: 'You sit or lie comfortably while Dr. Brad applies ultrasound gel to the treatment area. The SoftWave applicator is placed against the skin over the injury or pain source.' },
              { num: '2', title: 'Treatment', text: 'The applicator delivers thousands of unfocused acoustic pulses into the tissue. You\'ll feel a tapping sensation and hear a rapid clicking sound. Each session lasts 10-15 minutes — most patients describe it as more intense than painful.' },
              { num: '3', title: 'Afterward', text: 'No rest required. You can go right back to your day. Many patients feel improvement after a single session; most complete a series of 6-12 sessions depending on the condition. Dr. Brad checks in on progress and adjusts the plan as needed.' },
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
                Dr. Brad treats every patient with the same philosophy: <strong>thorough diagnosis, personalized care, and real results.</strong> Your treatment plan is built around your specific condition and goals. Come when you need to. Stop when you&apos;re feeling good. You&apos;re in control of your care.
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
                <span className="font-normal">SoftWave </span><span className="font-extrabold">questions.</span>
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
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'The foundation — precise spinal adjustments that complement SoftWave perfectly.', href: '/chiropractic-care-shelby-township-mi' },
                { icon: <DiscIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'Non-surgical disc relief. Often paired with SoftWave for herniated disc recovery.', href: '/spinal-decompression-shelby-township-mi' },
                { icon: <SciaticaIcon className="w-6 h-6" />, title: 'Sciatica Treatment', desc: 'SoftWave can accelerate recovery for nerve-related pain.', href: '/sciatica-treatment-shelby-township-mi' },
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

      <ConversionCTA line1="Pain that won't quit?" anchor="$67 to see if SoftWave is right for you." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'SoftWave Therapy',
          'FDA-cleared SoftWave tissue regeneration therapy from Dr. Brad Krawczyk. Non-invasive shockwave for chronic pain, inflammation, and tissue healing. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'softwave-therapy-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'SoftWave Therapy' },
        ])) }}
      />
    </>
  );
}
