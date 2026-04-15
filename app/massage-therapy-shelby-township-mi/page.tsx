import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, DecompressionIcon, NeckPainIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Massage Therapy | Chiropractor Shelby Township MI',
  description:
    'On-site therapeutic massage therapy at Back and Body Chiropractic. Complements chiropractic care for faster recovery. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/massage-therapy-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'What kind of massage do you offer?',
    answer:
      'We offer therapeutic massage focused on relieving muscle tension, reducing pain, and supporting chiropractic care. This is not a spa — it is clinical, targeted massage designed to complement your treatment.',
  },
  {
    question: 'Can I get massage without chiropractic?',
    answer:
      'Yes. While massage and chiropractic work best together, you can book massage therapy on its own. Many patients benefit from both, but there is no requirement to do chiropractic to receive massage.',
  },
  {
    question: 'How long are massage sessions?',
    answer:
      'Sessions are typically 30 or 60 minutes. Dr. Brad or the massage therapist can recommend the best duration based on your condition and treatment goals.',
  },
  {
    question: 'Does massage help with back pain?',
    answer:
      'Absolutely. Muscle tension often accompanies and worsens structural back problems. Therapeutic massage releases that tension, reduces inflammation, and helps chiropractic adjustments hold longer.',
  },
];

const specialties = [
  'Deep Tissue Massage', 'Trigger Point Therapy', 'Myofascial Release',
  'Muscle Spasm Relief', 'Post-Injury Recovery', 'Stress & Tension Relief',
  'Sports Massage', 'Prenatal Massage', 'Chronic Pain Management',
];

export default function MassageTherapyPage() {
  return (
    <>
      <PageHero
        title={<>
          Massage Therapy <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="On-site therapeutic massage. Not a spa — clinical, targeted muscle work that complements your care."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Massage Therapy' },
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
                  <span className="font-normal">Massage that </span>actually treats something.
                </h2>
                <div className="prose-custom">
                  <p>Massage therapy at Back and Body isn&apos;t about candles and relaxation music. It&apos;s therapeutic, clinical massage designed to address specific muscle and soft tissue problems that contribute to your pain.</p>
                  <p>When muscles are tight, they pull bones out of alignment. When fascia is restricted, it limits movement and creates pain. Therapeutic massage addresses these soft tissue components — making chiropractic adjustments more effective and longer-lasting.</p>
                  <p>Our on-site massage therapist works closely with Dr. Brad to ensure your massage targets the areas that matter most for your recovery. It&apos;s coordinated care, not isolated treatment.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="20" r="8" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <path d="M16 44c0-8 6-14 12-14s12 6 12 14" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
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
                <span className="font-normal">Why therapeutic massage </span><span className="font-extrabold">works.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Releases Muscle Tension',
                  text: 'Tight muscles pull your spine out of alignment and cause pain. Massage releases that tension, allowing your body to hold adjustments longer.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>,
                  title: 'Reduces Inflammation',
                  text: 'Therapeutic massage improves blood flow and reduces inflammation in injured or overworked tissues, speeding up the healing process.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'Complements Chiropractic',
                  text: 'Chiropractic adjusts the bones. Massage addresses the muscles. Together, they provide comprehensive care that neither can achieve alone.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
                  title: 'Stress & Pain Relief',
                  text: 'Beyond structural benefits, massage reduces cortisol, relieves stress, and promotes overall well-being. It helps your body recover from the demands of daily life.',
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

      {/* SPECIALTIES */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="label">Specialties</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Massage techniques </span><span className="font-extrabold">we offer.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">
              {specialties.map((c) => (
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
                <span className="font-normal">Your massage </span><span className="font-extrabold">session.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Consultation', text: 'Your therapist reviews your condition and treatment goals. If you are also seeing Dr. Brad, your massage is coordinated with your chiropractic care for maximum benefit.' },
              { num: '2', title: 'Treatment', text: 'Targeted, therapeutic massage focused on your problem areas. Techniques are selected based on your specific condition — deep tissue, trigger point, myofascial release, or a combination.' },
              { num: '3', title: 'Follow-Up', text: 'Your therapist discusses what they found, recommends stretches or self-care, and coordinates with Dr. Brad on your overall treatment plan.' },
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
                <span className="font-normal">Massage </span><span className="font-extrabold">questions.</span>
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
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'The perfect complement to massage — adjustments plus soft tissue work.', href: '/chiropractic-care-shelby-township-mi' },
                { icon: <NeckPainIcon className="w-6 h-6" />, title: 'Neck Pain Treatment', desc: 'Massage is highly effective for cervical muscle tension.', href: '/neck-pain-treatment-shelby-township-mi' },
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'Combined with massage for comprehensive disc and muscle relief.', href: '/spinal-decompression-shelby-township-mi' },
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

      <ConversionCTA line1="Muscle tension holding you back?" anchor="$67 to get started." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Massage Therapy',
          'On-site therapeutic massage therapy at Back and Body Chiropractic. Complements chiropractic care for faster recovery. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'massage-therapy-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Massage Therapy' },
        ])) }}
      />
    </>
  );
}
