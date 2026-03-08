import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, DecompressionIcon, MassageIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Applied Kinesiology',
  description:
    'Applied kinesiology and muscle testing from Dr. Brad Krawczyk. Advanced diagnostic technique for deeper insight into your condition. $55 New Patient Special. (586) 207-1624. Shelby Township, MI.',
};

const faqItems = [
  {
    question: 'What is applied kinesiology?',
    answer:
      'Applied kinesiology is a diagnostic technique that uses manual muscle testing to evaluate how your body is functioning. By testing the strength and response of specific muscles, Dr. Brad can identify imbalances, nutritional deficiencies, and structural issues that might not show up on standard exams.',
  },
  {
    question: 'Is applied kinesiology the same as chiropractic?',
    answer:
      'No, but they complement each other well. Applied kinesiology is a diagnostic tool that helps Dr. Brad understand what is going on in your body at a deeper level. The information from muscle testing then guides chiropractic adjustments and other treatment decisions for better outcomes.',
  },
  {
    question: 'Does muscle testing hurt?',
    answer:
      'Not at all. Muscle testing involves gentle pressure against specific muscles while you resist. It is painless and non-invasive. Most patients find it interesting to see how their body responds.',
  },
  {
    question: 'How does applied kinesiology help with treatment?',
    answer:
      'It provides additional diagnostic information beyond what X-rays and physical exams reveal. Dr. Brad uses it to identify which areas need attention, whether nutritional support might help, and how your nervous system is responding to treatment. It helps him tailor your care more precisely.',
  },
];

const conditions = [
  'Chronic Pain', 'Nutritional Deficiencies', 'Muscle Weakness', 'Joint Instability',
  'Digestive Issues', 'Fatigue', 'Allergies & Sensitivities', 'Hormonal Imbalance',
  'Recurring Injuries', 'Poor Recovery', 'Unexplained Symptoms', 'Stress-Related Conditions',
];

export default function AppliedKinesiologyPage() {
  return (
    <>
      <PageHero
        title={<>
          Applied <span className="text-mint">Kinesiology.</span>
        </>}
        subtitle="Advanced muscle testing diagnostics for deeper insight into your condition and more precise treatment."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Applied Kinesiology' },
        ]}
        bannerText="Diagnostic muscle testing — professional, clinical, precise"
      />

      {/* A: OVERVIEW */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Diagnostics that go </span>deeper.
                </h2>
                <div className="prose-custom">
                  <p>Applied kinesiology at Back and Body gives Dr. Brad an additional diagnostic lens that most chiropractors do not use. By testing the strength and response patterns of specific muscles, he can identify imbalances and dysfunction that standard exams might miss.</p>
                  <p>This is not guesswork. Applied kinesiology is a structured diagnostic method used by chiropractors, physicians, and healthcare professionals worldwide. Dr. Brad uses it to understand how your muscles, nerves, and organs are communicating — and where the breakdowns are happening.</p>
                  <p>The result is more targeted treatment. Instead of a one-size-fits-all adjustment, Dr. Brad can tailor his approach based on what your body is actually telling him. Better diagnostics lead to better outcomes.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule" className="btn btn--mint">Book Your $55 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="20" r="6" stroke="#5ED299" strokeWidth="1.5" opacity=".3" />
                  <path d="M28 26 C24 32, 20 38, 20 44 M28 26 C32 32, 36 38, 36 44" stroke="#5ED299" strokeWidth="1.5" opacity=".3" />
                  <path d="M20 34 L36 34" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* B: BENEFITS */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Benefits</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Why muscle testing </span><span className="font-extrabold">matters.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>,
                  title: 'Find Hidden Problems',
                  text: 'Muscle testing can reveal imbalances and dysfunction that X-rays and standard exams miss. Dr. Brad uses it to dig deeper when something does not add up.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                  title: 'More Precise Treatment',
                  text: 'When diagnostics are better, treatment is better. Applied kinesiology helps Dr. Brad target exactly what your body needs instead of following a generic protocol.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
                  title: 'Whole-Body Assessment',
                  text: 'Applied kinesiology evaluates the relationship between muscles, nerves, and organs. It looks at the whole picture, not just the area where you feel pain.',
                },
                {
                  icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
                  title: 'Non-Invasive & Painless',
                  text: 'No needles, no machines, no discomfort. Just gentle manual muscle testing that gives Dr. Brad real-time feedback about how your body is functioning.',
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

      {/* C: CONDITIONS */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="label">Applications</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">What it </span><span className="font-extrabold">can reveal.</span>
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

      {/* D: WHAT TO EXPECT */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">What to Expect</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">How muscle testing </span><span className="font-extrabold">works.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Assessment', text: 'Dr. Brad tests specific muscles by applying gentle pressure while you resist. The strength or weakness of each muscle response reveals information about the corresponding body systems.' },
              { num: '2', title: 'Analysis', text: 'Based on the muscle testing results, Dr. Brad identifies patterns of imbalance — whether structural, nutritional, or neurological. This gives him a more complete picture of what is going on.' },
              { num: '3', title: 'Treatment', text: 'The findings guide a targeted treatment plan. Dr. Brad may adjust specific areas, recommend nutritional support, or combine therapies based on what your body revealed during testing.' },
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

      {/* E: FAQ */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">FAQ</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Common </span><span className="font-extrabold">questions.</span>
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* F: RELATED SERVICES */}
      <section className="py-20 bg-light-gray">
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
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'Precise, gentle adjustments tailored to your specific condition.', href: '/services/chiropractic-care' },
                { icon: <DecompressionIcon className="w-6 h-6" />, title: 'Spinal Decompression', desc: 'Non-surgical disc relief through gentle traction therapy.', href: '/services/spinal-decompression' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'On-site therapeutic massage to complement your adjustments.', href: '/services/massage-therapy' },
              ].map((svc) => (
                <Link key={svc.title} href={svc.href} className="block bg-white rounded-xl p-7 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">{svc.icon}</div>
                  <h3 className="text-[17px] font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{svc.title}</h3>
                  <p className="text-sm text-text/70 leading-relaxed mb-3">{svc.desc}</p>
                  <div className="text-sm font-semibold text-mint group-hover:translate-x-1 transition-transform">Learn More &rarr;</div>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="$55 to get started." anchor="Just honest care." />
    </>
  );
}
