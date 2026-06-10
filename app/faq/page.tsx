import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    'Answers to the most common questions about Back & Body Chiropractic in Shelby Township, MI: the $67 first visit, insurance, hours, spinal decompression, SoftWave therapy, and more.',
  alternates: {
    canonical: '/faq',
  },
};

const VISIT_FAQS = [
  {
    question: "What's included in the $67 new patient special?",
    answer:
      'Your first visit includes a consultation with Dr. Brad, a thorough examination, X-rays if clinically necessary, and your first adjustment -- all for $67. No hidden fees, no surprise charges.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      "Yes, we work with most major insurance plans. Bring your card to your first visit and we'll verify your benefits and explain any out-of-pocket cost before we begin. Even without insurance, our pricing is straightforward and affordable.",
  },
  {
    question: 'Do I need a referral to see a chiropractor?',
    answer:
      'No referral needed. You can book directly online or call the office at (586) 207-1624.',
  },
  {
    question: 'Do you do long-term care plans or contracts?',
    answer:
      "No. This is one of the biggest things that sets us apart. We don't sell long-term care plan packages and we don't pressure you into 6-month contracts. Dr. Brad recommends what he genuinely believes you need -- and you decide how to proceed. Come when you need to, stop when you're feeling good.",
  },
  {
    question: 'Do you take walk-ins or do I need an appointment?',
    answer:
      'Appointments are best so we can give you our full attention, and you can book online anytime. If something flares up suddenly, call us and we will do our best to fit you in.',
  },
];

const LOCATION_FAQS = [
  {
    question: 'Where are you located?',
    answer:
      "55130 Van Dyke Ave, Suite 25, Shelby Township, MI 48317 -- in the Vince and Joe's plaza at the corner of 25 Mile Road and Van Dyke, with plenty of free parking.",
  },
  {
    question: 'What are your hours?',
    answer:
      'Monday through Wednesday 9 AM-1 PM and 3 PM-7 PM, Thursday 9 AM-1 PM, and Saturday 9 AM-1 PM. Closed Friday and Sunday.',
  },
];

const CONDITION_FAQS = [
  {
    question: 'Do you treat sciatica and disc problems?',
    answer:
      'Yes. We use chiropractic adjustments and non-surgical spinal decompression for sciatica, herniated and bulging discs, and chronic low-back pain.',
  },
  {
    question: 'Can chiropractic help with headaches and migraines?',
    answer:
      'Yes. Many headaches and migraines are linked to neck and upper-spine tension that responds well to chiropractic care.',
  },
  {
    question: 'Do you treat auto-accident and work injuries?',
    answer:
      'Yes. We treat whiplash, auto-injury, and work-injury cases, and we can document your care for your claim.',
  },
];

const SERVICE_FAQS = [
  {
    question: 'What is spinal decompression?',
    answer:
      'Spinal decompression is a non-surgical treatment that gently stretches the spine using a specialized table. It creates negative pressure inside the discs, which can help bulging or herniated discs retract and allow nutrients and oxygen to flow back in.',
  },
  {
    question: 'What is SoftWave therapy?',
    answer:
      "SoftWave is a non-invasive shockwave treatment that stimulates your body's own healing cells to repair damaged tissue and reduce inflammation. It's often used when other treatments haven't worked.",
  },
  {
    question: 'What is applied kinesiology?',
    answer:
      'Applied kinesiology is a diagnostic technique that uses muscle testing to evaluate structural, chemical, and mental aspects of health. By testing the strength and response of specific muscles, Dr. Brad can identify imbalances that standard exams might miss.',
  },
  {
    question: 'Do you offer massage therapy?',
    answer:
      "Yes -- on-site therapeutic massage. It's a great complement to chiropractic care, helping reduce muscle tension, improve range of motion, and accelerate your recovery.",
  },
  {
    question: 'Do you offer nutrition counseling?',
    answer:
      "Yes. Dr. Brad takes a whole-body approach, offering personalized nutrition counseling with practical plans that work for real life and support your body's healing from the inside out.",
  },
  {
    question: 'Do you treat children and pregnant women?',
    answer:
      'Absolutely. Dr. Brad provides gentle, specialized care for children of all ages and pregnant women. Pediatric adjustments use very light pressure, and prenatal chiropractic (Webster Technique) helps with back pain, sciatica, and optimal baby positioning.',
  },
];

const ALL_FAQS = [...VISIT_FAQS, ...LOCATION_FAQS, ...CONDITION_FAQS, ...SERVICE_FAQS];

const SECTIONS = [
  { label: 'Visits, Pricing & Scheduling', items: VISIT_FAQS },
  { label: 'Location & Hours', items: LOCATION_FAQS },
  { label: 'Conditions We Treat', items: CONDITION_FAQS },
  { label: 'Services & Treatments', items: SERVICE_FAQS },
];

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently asked questions."
        subtitle="Straight answers about visits, pricing, insurance, and how we treat -- from Dr. Brad and the Back & Body team in Shelby Township."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'FAQ' },
        ]}
      />

      {SECTIONS.map((section, i) => (
        <section key={section.label} className={`py-[60px] md:py-[70px] ${i % 2 === 0 ? 'bg-white' : 'bg-[#f8fafb]'}`}>
          <div className="container max-w-[880px] mx-auto">
            <ScrollReveal>
              <h2 className="text-[26px] md:text-[32px] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-extrabold text-teal">{section.label}</span>
              </h2>
            </ScrollReveal>
            <FAQAccordion items={section.items} withSchema={false} />
          </div>
        </section>
      ))}

      {/* Still have a question */}
      <section className="py-[70px] bg-white text-center">
        <div className="container">
          <ScrollReveal>
            <h2 className="text-[28px] md:text-[34px] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">Still have a </span><span className="font-extrabold text-teal">question</span><span className="font-normal">?</span>
            </h2>
            <p className="text-text/75 mb-7 max-w-[620px] mx-auto">
              Call us at <a className="font-semibold text-teal hover:underline" href="tel:5862071624">(586) 207-1624</a> and we&apos;ll give you a straight answer -- or come in and ask Dr. Brad yourself. Your first visit is $67, with no contracts.
            </p>
            <Link href="/schedule-appointment" className="btn btn--mint inline-block">
              Book Your $67 First Visit &rarr;
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Questions answered." anchor="Now let's fix the pain." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(ALL_FAQS)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'FAQ' },
        ])) }}
      />
    </>
  );
}
