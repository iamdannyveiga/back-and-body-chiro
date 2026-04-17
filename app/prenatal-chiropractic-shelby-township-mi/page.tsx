import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, MassageIcon, PediatricIcon } from '@/components/Icons';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Prenatal Chiropractic | Chiropractor Shelby Township MI',
  description:
    'Prenatal chiropractic care from Dr. Brad Krawczyk. Safe, gentle adjustments for pregnancy-related back pain and pelvic alignment. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
  alternates: {
    canonical: '/prenatal-chiropractic-shelby-township-mi',
  },
};

const faqItems = [
  {
    question: 'Is chiropractic safe during pregnancy?',
    answer:
      'Yes. Chiropractic care during pregnancy is safe and well-researched. Dr. Brad uses modified techniques and positioning to accommodate your growing belly. Many OB-GYNs and midwives recommend chiropractic care during pregnancy.',
  },
  {
    question: 'When should I start prenatal chiropractic?',
    answer:
      'You can start at any point during pregnancy. Many women begin in the second trimester when back and pelvic pain typically starts. Some come in early for preventive care and continue through delivery.',
  },
  {
    question: 'Can chiropractic help with breech presentation?',
    answer:
      'The Webster Technique is a specific chiropractic adjustment that helps optimize pelvic alignment, which may encourage the baby to move into the proper position. Dr. Brad will discuss whether this technique is appropriate for your situation.',
  },
  {
    question: 'How often should I come during pregnancy?',
    answer:
      'It depends on your symptoms and stage of pregnancy. Some women come bi-weekly, others monthly. Dr. Brad recommends only what you need — no mandatory schedules, no pressure.',
  },
];

const conditions = [
  'Pregnancy Back Pain', 'Pelvic Pain', 'Sciatica During Pregnancy',
  'Round Ligament Pain', 'Hip Pain', 'Breech Positioning',
  'Postpartum Recovery', 'SI Joint Dysfunction', 'Pubic Symphysis Pain',
];

export default function PrenatalChiropracticPage() {
  return (
    <>
      <PageHero
        title={<>
          Prenatal Chiropractic <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Safe, gentle care for expecting moms. Relieve pregnancy pain and optimize pelvic alignment."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Prenatal Chiropractic' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Pregnancy changes </span>your body. We help.
                </h2>
                <div className="prose-custom">
                  <p>Pregnancy puts tremendous stress on the spine and pelvis. As your body changes to accommodate your growing baby, ligaments loosen, your center of gravity shifts, and your lower back takes on significantly more load. The result? Back pain, pelvic pain, sciatica, and discomfort that can make pregnancy harder than it needs to be.</p>
                  <p>Dr. Brad provides gentle, pregnancy-safe chiropractic adjustments that help maintain proper spinal and pelvic alignment throughout pregnancy. Using modified techniques and specialized positioning, he helps relieve pain, improve comfort, and optimize pelvic alignment for delivery.</p>
                  <p>This is not aggressive treatment. It&apos;s careful, gentle care designed specifically for the unique demands of pregnancy.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule-appointment" className="btn btn--mint">Book Your $67 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] rounded-xl overflow-hidden relative shadow-sm">
                <Image
                  src="/images/services/service-prenatal-care.webp"
                  alt="Pregnant woman receiving Webster technique care — prenatal chiropractic at Back and Body in Shelby Township, MI"
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
          <ScrollReveal><div className="text-center mb-12"><span className="label">Benefits</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why prenatal </span><span className="font-extrabold">chiropractic helps.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Back & Pelvic Pain Relief', text: 'Gentle adjustments relieve the back and pelvic pain that commonly accompanies pregnancy, often without any medication.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Optimal Pelvic Alignment', text: 'Proper pelvic alignment gives your baby more room to move into the best position for delivery, potentially reducing labor complications.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'More Comfortable Pregnancy', text: 'When your spine is aligned and your pelvis is balanced, daily activities become easier and sleep improves.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Postpartum Recovery', text: 'Chiropractic care after delivery helps your body recover faster, addressing the spinal and pelvic changes from pregnancy and birth.' },
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

      <section className="py-20 bg-white"><div className="container"><ScrollReveal><div className="text-center mb-10"><span className="label">Conditions Treated</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Pregnancy conditions </span><span className="font-extrabold">we address.</span></h2></div></ScrollReveal><ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{conditions.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal></div></section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your prenatal </span><span className="font-extrabold">visit.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Comfortable Setup', text: 'Modified positioning and pregnancy pillows ensure you are comfortable throughout the visit. Dr. Brad reviews your pregnancy history and current symptoms.' },
              { num: '2', title: 'Gentle Adjustment', text: 'Light, targeted adjustments to your spine and pelvis. No aggressive maneuvers — just careful, precise care designed for your pregnant body.' },
              { num: '3', title: 'Supportive Guidance', text: 'Stretches, sleeping positions, and daily tips to manage discomfort between visits. Dr. Brad works with your OB or midwife when needed.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Prenatal </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <PediatricIcon className="w-6 h-6" />, title: 'Pediatric Chiropractic', desc: 'Gentle care for your newborn and growing children.', href: '/pediatric-chiropractic-shelby-township-mi' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Massage Therapy', desc: 'Prenatal massage to relieve pregnancy muscle tension.', href: '/massage-therapy-shelby-township-mi' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Back Pain Treatment', desc: 'Comprehensive back pain care for during and after pregnancy.', href: '/back-pain-treatment-shelby-township-mi' },
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

      <ConversionCTA line1="Pregnant and in pain?" anchor="$67 for gentle relief." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(
          'Prenatal Chiropractic',
          'Prenatal chiropractic care from Dr. Brad Krawczyk. Safe, gentle adjustments for pregnancy-related back pain and pelvic alignment. $67 New Patient Special. (586) 207-1624. Shelby Township, MI.',
          'prenatal-chiropractic-shelby-township-mi'
        )) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/#services' },
          { name: 'Prenatal Chiropractic' },
        ])) }}
      />
    </>
  );
}
