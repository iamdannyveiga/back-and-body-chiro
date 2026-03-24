import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, ScoliosisIcon, MassageIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Pediatric Chiropractic | Chiropractor Shelby Township MI',
  description:
    'Gentle pediatric chiropractic care from Dr. Brad Krawczyk. Safe, effective adjustments for kids of all ages. $55 New Patient Special. (586) 207-1624. Shelby Township, MI.',

  alternates: {
    canonical: "https://backandbodydoc.com/services/pediatric-chiropractic/",
  },
};

const faqItems = [
  {
    question: 'Is chiropractic safe for children?',
    answer:
      'Yes. Pediatric chiropractic is extremely safe. Dr. Brad uses very gentle, low-force techniques specifically designed for children. The pressure used is about the same as what you would use to check the ripeness of a tomato.',
  },
  {
    question: 'At what age can a child see a chiropractor?',
    answer:
      'Children can benefit from chiropractic care at any age, including infants. Birth can be physically stressful on the spine, and gentle adjustments can help address issues early. Dr. Brad will evaluate your child and recommend care only if it is appropriate.',
  },
  {
    question: 'Why would a child need chiropractic care?',
    answer:
      'Children fall, play sports, carry heavy backpacks, and sit at desks all day. These activities can create spinal misalignments. Common pediatric conditions include scoliosis, growing pains, headaches, and sports injuries.',
  },
  {
    question: 'Will my child be scared?',
    answer:
      'Dr. Brad is great with kids. He takes time to explain everything in a way children understand, makes the visit comfortable, and never forces anything. Most kids actually enjoy their visits.',
  },
];

const conditions = [
  'Growing Pains', 'Scoliosis Screening', 'Sports Injuries', 'Poor Posture',
  'Headaches in Kids', 'Backpack-Related Pain', 'Neck Pain',
  'Colic (Infants)', 'Ear Infections', 'Bedwetting',
];

export default function PediatricChiropracticPage() {
  return (
    <>
      <PageHero
        title={<>
          Pediatric Chiropractic <span className="text-mint">in Shelby Township.</span>
        </>}
        subtitle="Gentle, safe chiropractic care for kids of all ages. Dr. Brad treats your whole family."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: 'Pediatric Chiropractic' },
        ]}
        bannerText="Pediatric chiropractic — gentle, family-friendly"
      />

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 items-center">
              <div>
                <span className="label">Overview</span>
                <h2 className="text-[40px] font-extrabold text-teal mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="font-normal">Kids need </span>healthy spines too.
                </h2>
                <div className="prose-custom">
                  <p>Children are not just small adults. Their spines are growing, developing, and adapting to the physical demands of childhood — falls, sports, heavy backpacks, hours at a desk. These stresses can create spinal misalignments early in life.</p>
                  <p>Dr. Brad uses extremely gentle techniques for pediatric patients. The adjustments are nothing like adult chiropractic — the force is minimal, the approach is playful, and the results can be remarkable. Many parents bring their children in for scoliosis screening, growing pains, headaches, or sports injuries.</p>
                  <p>And just like with every patient, Dr. Brad will be honest. If your child doesn&apos;t need chiropractic care, he&apos;ll tell you. No unnecessary visits. No fear-based recommendations.</p>
                </div>
                <div className="mt-7">
                  <Link href="/schedule" className="btn btn--mint">Book Your $55 Visit &rarr;</Link>
                </div>
              </div>
              <div className="h-[400px] bg-gradient-to-br from-teal-mid to-teal rounded-xl flex items-center justify-center">
                <svg viewBox="0 0 56 56" fill="none" className="w-14 h-14">
                  <circle cx="28" cy="16" r="6" stroke="#5ED299" strokeWidth="1.5" opacity=".25" />
                  <path d="M28 22v14" stroke="#5ED299" strokeWidth="1.5" opacity=".2" />
                  <path d="M20 30h16" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                  <path d="M24 36l-4 10M32 36l4 10" stroke="#5ED299" strokeWidth="1" opacity=".15" />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Benefits</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Why pediatric </span><span className="font-extrabold">chiropractic matters.</span></h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>, title: 'Early Detection', text: 'Catching spinal issues early — like scoliosis — means more effective treatment and better long-term outcomes.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>, title: 'Ultra-Gentle Technique', text: 'Pediatric adjustments use minimal force — similar to the pressure you would use to test the ripeness of a tomato. Safe and comfortable.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, title: 'Drug-Free Health', text: 'Address growing pains, headaches, and postural issues naturally — without medication. Support your child\'s body as it develops.' },
                { icon: <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>, title: 'Whole-Family Care', text: 'Dr. Brad sees the whole family — parents and kids alike. It is easier when everyone can get care in the same place.' },
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

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-10"><span className="label">Conditions Treated</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Pediatric conditions </span><span className="font-extrabold">we treat.</span></h2></div></ScrollReveal>
          <ScrollReveal><div className="flex flex-wrap gap-2 justify-center max-w-[700px] mx-auto">{conditions.map((c) => (<span key={c} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">{c}</span>))}</div></ScrollReveal>
        </div>
      </section>

      <section className="py-20 bg-light-gray">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">What to Expect</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Your child&apos;s </span><span className="font-extrabold">visit.</span></h2></div></ScrollReveal>
          <div className="max-w-[680px] mx-auto">
            {[
              { num: '1', title: 'Kid-Friendly Exam', text: 'Dr. Brad takes time to make your child comfortable. He explains everything in a way kids understand, checks their spine, posture, and movement patterns.' },
              { num: '2', title: 'Gentle Adjustment', text: 'Ultra-light adjustments tailored to your child\'s age and size. No cracking, no surprises. Most kids barely notice and many think it is fun.' },
              { num: '3', title: 'Parent Conversation', text: 'Dr. Brad discusses findings with you, recommends exercises or lifestyle changes if needed, and is completely honest about whether ongoing care would benefit your child.' },
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

      <section className="py-20 bg-light-gray"><div className="container"><ScrollReveal><div className="text-center mb-12"><span className="label">FAQ</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Pediatric </span><span className="font-extrabold">questions.</span></h2></div></ScrollReveal><FAQAccordion items={faqItems} /></div></section>

      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal><div className="text-center mb-12"><span className="label">Related Services</span><h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Also at </span><span className="font-extrabold">Back and Body.</span></h2></div></ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
              {[
                { icon: <ScoliosisIcon className="w-6 h-6" />, title: 'Scoliosis Treatment', desc: 'Early detection and management for adolescent scoliosis.', href: '/services/scoliosis-treatment' },
                { icon: <SpineIcon className="w-6 h-6" />, title: 'Chiropractic Care', desc: 'The foundation of everything we do — for the whole family.', href: '/services/chiropractic-care' },
                { icon: <MassageIcon className="w-6 h-6" />, title: 'Wellness Care', desc: 'Ongoing health maintenance for growing bodies.', href: '/services/wellness-care' },
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

      <ConversionCTA line1="Give your kids a healthy start." anchor="$55 for the whole family." />
    </>
  );
}
