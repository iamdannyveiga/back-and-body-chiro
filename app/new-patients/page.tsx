import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'New Patients | $67 First Visit',
  description:
    'Looking for a new chiropractor? Your $67 first visit with Dr. Brad includes consultation, exam, X-rays if needed, and first adjustment. No contracts.',
  alternates: {
    canonical: '/new-patients',
  },
};

const faqItems = [
  {
    question: 'How do I choose a chiropractor near Shelby Township?',
    answer:
      'Compare how the first visit works. At Back and Body Chiropractic Center in Shelby Township the first visit is $67 and includes a consultation, exam, X-rays if clinically necessary and your first adjustment, with no long-term contracts. Dr. Brad explains what he found and recommends a plan sized to you.',
  },
  {
    question: 'Where is your Shelby Township office and when are you open?',
    answer:
      '55130 Van Dyke Ave #25, Shelby Township, MI 48317. Hours are Monday to Thursday 9 AM to 1 PM and 3 PM to 7 PM, and Friday 9 AM to 12 PM. Call (586) 207-1624 to book.',
  },
  {
    question: 'Does Dr. Brad offer spinal decompression?',
    answer:
      'Yes. Spinal decompression is the first option Dr. Brad discusses when your exam points to a disc problem, sciatica or nerve irritation. It is non-surgical and gentle, and your first visit is $67.',
  },
  {
    question: 'Will I be pressured into a long-term plan?',
    answer:
      'No. This is the question we get asked most, and the answer is always the same. Dr. Brad does not sell long-term care plan packages. He does not use high-pressure sales tactics. He recommends what he genuinely believes you need, and you decide how to proceed. No contracts. No guilt. No "you have to come back 3 times a week for 6 months." Just honest recommendations.',
  },
  {
    question: 'What should I bring to my first visit?',
    answer:
      "Bring your insurance card (if applicable), photo ID, and any previous imaging (X-rays, MRIs) if you have them. Wear comfortable clothing. That's it — we keep it simple.",
  },
  {
    question: 'How long is the first visit?',
    answer:
      "Plan for about 45 minutes to an hour. Dr. Brad takes the time to be thorough — he doesn't rush through examinations. The consultation, exam, any needed X-rays, and your first adjustment are all included.",
  },
  {
    question: 'Do you take walk-ins?',
    answer:
      "We prefer appointments so Dr. Brad can give you his full attention, but call us — we'll do our best to fit you in, especially if you're in acute pain.",
  },
  {
    question: 'Is chiropractic safe for children?',
    answer:
      'Absolutely. Pediatric chiropractic uses very gentle, age-appropriate techniques — nothing like an adult adjustment. Dr. Brad treats children of all ages, and many families bring their entire household.',
  },
  {
    question: "What if chiropractic isn't right for me?",
    answer:
      "Dr. Brad will tell you. Honestly. If your condition requires a specialist, surgery, or a different type of care, he'll refer you appropriately. He's not going to treat you just to collect a fee. That's the whole point of the \"no nonsense\" approach.",
  },
];

export default function NewPatientsPage() {
  return (
    <>
      <PageHero
        title={<>
          New patients: your <span className="text-mint">$67</span> first visit.
        </>}
        subtitle="Here's what to expect — starting with what we WON'T do."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'New Patients' },
        ]}
      />

      {/* A: THE PROMISE */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mx-auto border-[3px] border-mint/30 rounded-xl p-10 relative">
              <div className="inline-block bg-mint text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-[6px] rounded-full mb-3">
                Before We Start
              </div>
              <p className="text-lg leading-[1.8] text-text/80">
                Before we tell you what to expect, here&apos;s what we <strong>won&apos;t</strong> do: we won&apos;t give you a sales pitch. We won&apos;t lock you into a care plan you don&apos;t need. We won&apos;t use scare tactics with your X-rays. We won&apos;t pressure you to prepay for dozens of visits. <strong>We&apos;ll just be honest about what we see and what we recommend.</strong> That&apos;s the Back and Body way — and it&apos;s been that way for 14 years.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* B: WHAT TO EXPECT — FLOWCHART */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">What to Expect</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Four simple </span><span className="font-extrabold">steps.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Call or Book Online', text: '(586) 207-1624 — or use the online form. We\'ll find a time that works, including evening slots Mon\u2013Thu until 7pm and Friday mornings.' },
              { num: '2', title: 'Meet Dr. Brad', text: 'Consultation, thorough examination, X-rays if clinically necessary. He listens to the full story. He asks the right questions. No rush. No judgment.' },
              { num: '3', title: 'Your Honest Plan', text: 'Dr. Brad tells you what he found and what he recommends. A straightforward, right-sized treatment plan — no long-term contracts, no packages.' },
              { num: '4', title: 'Feel Better', text: 'Real results from your first visit. Continue care as needed — come back when YOU want to, not because you\'re locked in. Your body, your choice, your pace.' },
            ].map((step, i) => (
              <div key={step.num}>
                <ScrollReveal delay={`${i * 0.1}s`}>
                  <div className="flex gap-5 items-start">
                    <div className="w-12 h-12 rounded-full bg-mint text-white flex items-center justify-center font-extrabold text-lg shrink-0" style={{ fontFamily: 'var(--font-heading)' }}>
                      {step.num}
                    </div>
                    <div className="pb-2">
                      <h3 className="text-[17px] font-bold text-teal mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h3>
                      <p className="text-sm text-text/70 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
                {i < 3 && (
                  <div className="ml-6 w-px h-8 bg-mint/20 my-1" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C: $67 SPECIAL */}
      <section className="py-24 bg-teal relative overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 40px, 100% 100%, 0 calc(100% - 40px))' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.04] pointer-events-none" />
        <div className="container relative z-10 text-center">
          <ScrollReveal>
            <span className="label label--light">New Patient Special</span>
          </ScrollReveal>
          <ScrollReveal>
            <div className="mb-8">
              <span className="text-[72px] font-extrabold text-amber leading-none" style={{ fontFamily: 'var(--font-heading)' }}>$67</span>
              <h2 className="text-[36px] font-bold text-text-light mt-2" style={{ fontFamily: 'var(--font-heading)' }}>New Patient Special</h2>
              <p className="text-base text-text-light/80 mt-1">+ Free Consultation</p>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-[800px] mx-auto mb-10">
              {[
                { title: 'Consultation', desc: 'Full health history review with Dr. Brad' },
                { title: 'Examination', desc: 'Thorough hands-on assessment' },
                { title: 'X-Rays', desc: 'If clinically necessary (on-site)' },
                { title: 'Adjustment', desc: 'Your first chiropractic adjustment' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-[17px] font-bold text-mint mb-[6px]" style={{ fontFamily: 'var(--font-heading)' }}>{item.title}</div>
                  <p className="text-[13px] text-text-light/80">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <Link href="/schedule-appointment" className="btn btn--mint">Book My $67 Visit &rarr;</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* D-PRE: PATIENT PAPERWORK */}
      <section className="py-16 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[800px] mx-auto text-center">
              <span className="label">Save Time</span>
              <h2 className="text-[30px] md:text-[36px] text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Complete your </span><span className="font-extrabold">paperwork online.</span>
              </h2>
              <p className="text-text/70 text-[0.95rem] mb-6">Save 10-15 minutes at check-in by filling out your new patient intake forms before your visit.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="https://intake.chirohd.com/office-forms/679/back-and-body-chiropractic-center" target="_blank" rel="noopener noreferrer" className="btn btn--mint">
                  Complete Forms Online &rarr;
                </a>
                <Link href="/new-patient-paperwork" className="btn btn--outline">
                  Paperwork Details &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* D: INSURANCE & PAYMENT */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-[1100px] mx-auto">
              <div>
                <span className="label">Insurance &amp; Payment</span>
                <h2 className="text-[36px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Transparent </span>pricing.
                </h2>
                <div className="prose-custom">
                  <p>We work with most major insurance plans. Call us at <a href="tel:5862071624" className="font-bold">(586) 207-1624</a> before your visit and we&apos;ll verify your benefits — no surprises.</p>
                  <p>Don&apos;t have insurance? No problem. Our pricing is straightforward and affordable. The $67 new patient special is available to everyone, regardless of insurance status.</p>
                  <p><strong>No hidden fees. No surprise charges. No &ldquo;recommended packages&rdquo; with inflated prices.</strong> You&apos;ll always know what something costs before you agree to it. That&apos;s the honest way.</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {[
                  { title: 'Insurance', desc: "We accept most major insurance plans. We'll verify your benefits before your first visit." },
                  { title: 'Cash / Self-Pay', desc: 'Competitive rates for those without insurance. $67 new patient special available to everyone.' },
                  { title: 'No Surprise Billing', desc: "You'll always know what something costs before you agree to it. Period." },
                ].map((card) => (
                  <div key={card.title} className="bg-light-gray rounded-xl px-6 py-7">
                    <h3 className="text-base font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3>
                    <p className="text-sm leading-relaxed text-text/80">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* STRIKING-DISTANCE CONTENT */}
      <section id="first-visit" className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="max-w-[860px] mx-auto">
              <span className="label">Choosing a Chiropractor</span>
              <h2 className="text-[32px] md:text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>What to know before you choose a chiropractor</h2>
              <div className="prose-custom">
                  <p>If you are searching for a new chiropractor, the first thing to compare is how the first visit works. At Back and Body Chiropractic Center, 55130 Van Dyke Ave #25 in Shelby Township, the first visit is $67 and includes a consultation, an exam, X-rays if clinically necessary, and your first adjustment. There are no long-term contracts and no 6-month packages, so you can see how Dr. Bradley Krawczyk works before you decide anything else.</p>
                  <p>Dr. Krawczyk studied Kinesiology at Michigan State University, earned his Doctor of Chiropractic at Life University College of Chiropractic in 2011, and the clinic has served Macomb and Oakland Counties since 2011. The visit starts with your story: where it hurts, when it started, what makes it better or worse. The exam and any imaging follow from that, and you leave with a plain-English plan sized to your situation.</p>
                  <p>Many people who call our office are dealing with back pain, neck pain, headaches or sciatica. When the exam points to a disc problem or nerve irritation, <Link href="/spinal-decompression-shelby-township-mi" className="text-teal hover:underline">spinal decompression</Link> is the first option Dr. Brad talks through, because it is a gentle, non-surgical way to take pressure off the disc. Standard <Link href="/chiropractic-care-shelby-township-mi" className="text-teal hover:underline">chiropractic adjustments</Link> are used when joint motion is the main problem. For stubborn tendon and soft tissue pain, patients can add <Link href="/softwave-therapy-shelby-township-mi" className="text-teal hover:underline">SoftWave therapy</Link> or on-site <Link href="/massage-therapy-shelby-township-mi" className="text-teal hover:underline">massage</Link>.</p>
                  <p>Hours are Monday to Thursday 9 AM to 1 PM and 3 PM to 7 PM, and Friday 9 AM to 12 PM. We work with most major insurance plans and will verify your benefits before you come in. You can save 10 to 15 minutes at check-in by finishing the <Link href="/new-patient-paperwork" className="text-teal hover:underline">new patient paperwork</Link> online first, then book through the <Link href="/schedule-appointment" className="text-teal hover:underline">online scheduler</Link> or call (586) 207-1624.</p>
                  <p>Wondering what makes one chiropractor different from another? Ask what the plan looks like after the first visit. Here, the answer is that Dr. Brad tells you what he found, what he recommends, and what it would cost, and you choose the pace. If chiropractic is not the right fit, he will refer you to the right provider.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* E: FIRST VISIT FAQ */}
      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">First Visit FAQ</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">Questions before </span><span className="font-extrabold">your first visit.</span>
              </h2>
            </div>
          </ScrollReveal>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <ConversionCTA line1="$67 gets you started." anchor="No nonsense. Just results." />
    </>
  );
}
