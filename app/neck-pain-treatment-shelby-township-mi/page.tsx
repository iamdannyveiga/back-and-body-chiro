import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, HeadacheIcon, MassageIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Neck Pain Treatment | Chiropractor Shelby Township MI',
  description:
    'Neck pain treatment from Dr. Brad Krawczyk. Gentle chiropractic adjustments for stiffness, tension, and cervical issues. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/neck-pain-treatment-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'What causes neck pain?',
    answer:
      'Common causes include poor posture (especially from desk work and phone use), cervical misalignment, muscle strain, disc issues, and whiplash. Dr. Brad performs a thorough exam to identify your specific cause before any treatment.',
  },
  {
    question: 'Is it safe to adjust the neck?',
    answer:
      'Yes. Cervical adjustments are well-researched and safe when performed by a licensed chiropractor. Dr. Brad has 14+ years of experience and uses gentle, precise techniques tailored to each patient.',
  },
  {
    question: 'Can neck problems cause headaches?',
    answer:
      'Absolutely. Cervicogenic headaches originate from neck dysfunction and are one of the most common types of headaches. Many patients who come in for headaches actually have an underlying neck problem that chiropractic can address.',
  },
  {
    question: 'How many visits will I need for neck pain?',
    answer:
      'It depends on the cause and severity. Some patients improve in 1-2 visits. Others with chronic issues may need a few weeks of care. Dr. Brad will be upfront about what to expect — no long-term contracts.',
  },
];

const conditions = [
  'Cervical Misalignment', 'Tech Neck', 'Stiff Neck', 'Muscle Tension',
  'Cervical Disc Issues', 'Pinched Nerve', 'Whiplash', 'Cervicogenic Headaches',
  'Shoulder & Neck Pain', 'Torticollis', 'Neck Arthritis',
];

export default function NeckPainTreatmentPage() {
  return (
    <>
      <PageHero
        title={<>
          Neck Pain Treatment <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Stiffness, tension, limited range of motion. Dr. Brad finds the cause and fixes it."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Neck Pain Treatment' },
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
                  <span className="font-normal">Your neck pain </span>has a cause.
                </h2>
                <div className="prose-custom">
                  <p>Neck pain is one of the most common complaints Dr. Brad sees — and one of the most misunderstood. Most people assume it&apos;s just &ldquo;sleeping wrong&rdquo; or &ldquo;stress.&rdquo; Sometimes it is. But often there&apos;s a structural issue that, left unaddressed, leads to chronic problems.</p>
                  <p>The cervical spine (your neck) supports the weight of your head — about 10-12 pounds. When alignment is off even slightly, muscles compensate, nerves get compressed, and pain follows. Add desk work, phone use, and daily stress, and you&apos;ve got a recipe for persistent neck problems.</p>
                  <p>Dr. Brad takes the time to examine your cervical spine properly. He identifies the structural cause — not just the symptom — and treats it with precise, gentle adjustments that restore alignment and relieve pressure.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/office-exam-bed.webp"
                  alt="Neck pain treatment table at Back and Body in Shelby Township, MI"
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
              <span className="label">Benefits</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Why chiropractic works </span><span className="font-extrabold">for neck pain.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Restores Cervical Alignment',
                  text: 'Precise adjustments correct misalignments in the cervical spine, reducing nerve interference and relieving pressure on muscles and joints.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
                  title: 'Improved Range of Motion',
                  text: 'Stiff neck keeping you from turning your head? Chiropractic adjustments restore proper mobility so you can move without pain or restriction.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18h6M10 22h4M15.09 14a7 7 0 10-6.18 0" /></svg>,
                  title: 'Headache Relief',
                  text: 'Many headaches originate from neck dysfunction. By fixing the cervical issue, Dr. Brad often resolves headaches that patients have lived with for years.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Drug-Free Approach',
                  text: 'No muscle relaxers. No pain medication. Chiropractic treats neck pain naturally by addressing the structural cause — not just masking the symptoms.',
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
                <span className="font-normal">Neck conditions </span><span className="font-extrabold">we treat.</span>
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
                <span className="font-normal">Your neck pain </span><span className="font-extrabold">visit.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Assessment', text: 'Dr. Brad examines your cervical spine, tests range of motion, and checks for nerve involvement. He asks detailed questions about your symptoms, posture habits, and daily activities.' },
              { num: '2', title: 'Adjustment', text: 'Gentle, precise cervical adjustments to restore alignment. You may hear a small pop — totally normal. Most patients feel immediate improvement in mobility and a reduction in tension.' },
              { num: '3', title: 'Guidance', text: 'Dr. Brad explains what he found and gives you practical recommendations — posture tips, stretches, ergonomic adjustments — so you can maintain results between visits.' },
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
                <span className="font-normal">Neck pain </span><span className="font-extrabold">questions.</span>
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
                { icon: <HeadacheIcon className="w-6 h-6" />, title: 'Headaches & Migraines', desc: 'Many headaches originate from cervical dysfunction.', href: '/headaches-migraines-shelby-township-mi' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'Release muscle tension that compounds neck pain.', href: '/massage-therapy-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Whiplash Treatment', desc: 'Specialized care for neck injuries from auto accidents.', href: '/whiplash-treatment-shelby-township-mi' },
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

      <ConversionCTA line1="Tired of living with neck pain?" anchor="$67 to start." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Neck Pain Treatment',
          'Neck pain treatment from Dr. Brad Krawczyk. Gentle chiropractic adjustments for stiffness, tension, and cervical issues. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'neck-pain-treatment-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Neck Pain Treatment' },
        ])) }}
      />
    </>
  );
}
