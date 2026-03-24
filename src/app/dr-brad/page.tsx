import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import { StarIcon, HomeIcon, KinesiologyIcon, WorkInjuryIcon, PediatricIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Meet Dr. Brad',
  description:
    'Dr. Bradley Krawczyk, D.C. — MSU grad, Life University 2011, Macomb County native. 14+ years of honest chiropractic care. No nonsense. Just results.',

  alternates: {
    canonical: "https://backandbodydoc.com/dr-brad/",
  },
};

export default function DrBradPage() {
  return (
    <>
      <PageHero
        title={<>
          <span className="font-normal">Meet </span>Dr. Brad.
        </>}
        subtitle="Macomb County native. MSU Spartan. Your chiropractor for 14 years."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Meet Dr. Brad' },
        ]}
        bannerText="Dr. Brad — professional portrait, warm, approachable"
      />

      {/* A: FULL PROFILE */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-[900px] mx-auto">
            {/* Photo placeholder */}
            <ScrollReveal>
              <div className="w-full h-[44vh] min-h-[320px] max-h-[480px] rounded-xl overflow-hidden shadow-lg mb-10 -mt-10 relative z-20">
                <div className="w-full h-full bg-gradient-to-br from-teal-mid to-teal flex flex-col items-center justify-center gap-3">
                  <svg viewBox="0 0 72 72" fill="none" className="w-16 h-16">
                    <circle cx="36" cy="28" r="14" stroke="#fff" strokeWidth="1.5" opacity=".2" />
                    <path d="M12 64c0-12 10-22 24-22s24 10 24 22" stroke="#fff" strokeWidth="1.5" opacity=".2" />
                  </svg>
                  <p className="text-white/15 text-xs tracking-[1.5px] uppercase">Dr. Brad — approachable, confident, clinic background</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-[34px] font-extrabold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Dr. Bradley Krawczyk, D.C.
              </h2>
              <p className="text-sm text-[#888] mb-2 leading-relaxed">
                Founder &middot; Michigan State University &middot; Life University College of Chiropractic, 2011
              </p>
              <p className="text-[13px] text-[#aaa] mb-8">
                MI License: 2301009823 &middot; NPI: 1548556160 &middot; Macomb County Native &middot; 14+ Years
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <div className="prose-custom">
                <p>Brad Krawczyk grew up in Macomb County. He played football at his local high school, took a bad hit, and ended up in a chiropractor&apos;s office. That visit changed his trajectory. Not just because the pain went away — but because he experienced firsthand what honest, hands-on healthcare could do.</p>
                <p>He went to <strong>Michigan State University</strong> and earned a degree in Kinesiology. From there, he headed to <strong>Life University College of Chiropractic</strong> in Atlanta, Georgia. He graduated in 2011 with his Doctor of Chiropractic degree.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="my-10 pl-7 border-l-[3px] border-mint relative">
                <div className="absolute -left-5 -top-2 text-[56px] text-mint/20 font-serif leading-none">&ldquo;</div>
                <p className="text-xl md:text-[22px] text-teal font-medium italic leading-relaxed" style={{ fontFamily: 'var(--font-heading)' }}>
                  I tried a whole lot of chiropractors in the area. I almost lost hope going to chiropractors until I found Dr. Brad.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="prose-custom">
                <p>That same year — September 2011 — he opened <strong>Back and Body Chiropractic Center</strong> in Shelby Township. Same plaza, same corner: 25 Mile and Van Dyke, in Vince and Joe&apos;s. He was 27 years old, fresh out of school, and absolutely certain about one thing: he wasn&apos;t going to play the games he&apos;d seen other practices play.</p>
                <p>No high-pressure sales pitches to get patients to sign up for months of care they might not need. No gimmick discount packages. No scare tactics with X-rays. Just an honest examination, a straightforward plan, and results that speak for themselves.</p>
                <p><strong>&ldquo;The best care without any of the nonsense.&rdquo;</strong> That&apos;s the promise he made on day one. Fourteen years and thousands of patients later, it&apos;s still the promise he keeps.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-9">
                <h3 className="text-lg font-bold text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {['Back Pain', 'Neck Pain', 'Spinal Decompression', 'Pediatric', 'Prenatal', 'Sports Medicine', 'Applied Kinesiology', 'Massage Therapy', 'Nutrition', 'Weight Loss', 'Scoliosis', 'Auto/Work Injury'].map((tag) => (
                    <span key={tag} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* B: WHY DR. BRAD */}
      <section className="py-20 bg-light-gray relative" style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Why Dr. Brad</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">What makes him </span><span className="font-extrabold">different.</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
              {[
                {
                  icon: <HomeIcon className="w-6 h-6" />,
                  title: "He grew up in Macomb County — he's YOUR neighbor.",
                  text: "This isn't some doctor who moved here for a business opportunity. Brad is from here. He went to school here. He chose to build his practice in the community he grew up in.",
                },
                {
                  icon: <KinesiologyIcon className="w-6 h-6" />,
                  title: 'MSU-educated, Life University-trained — the credentials are real.',
                  text: 'B.S. in Kinesiology from Michigan State. Doctor of Chiropractic from Life University. Fourteen years of continuing education and hands-on experience.',
                },
                {
                  icon: <WorkInjuryIcon className="w-6 h-6" />,
                  title: 'No contracts, no pressure — his patients CHOOSE to come back.',
                  text: "Dr. Brad doesn't lock you into 6-month care plans. He doesn't use scare tactics. He tells you what he thinks, recommends what you need, and lets you decide. That's it.",
                },
                {
                  icon: <PediatricIcon className="w-6 h-6" />,
                  title: 'Patients who tried every chiropractor found their answer here.',
                  text: '"I tried a whole lot of chiropractors in the area. I almost lost hope going to chiropractors until I found Dr. Brad." That\'s a real review. From a real patient.',
                },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-mint/10 text-mint flex items-center justify-center mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-teal mb-2 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3>
                  <p className="text-sm text-text/70 leading-relaxed">{card.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* C: PATIENT STORIES */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="label">Patient Stories</span>
              <h2 className="text-[36px] md:text-[44px] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">What patients say about </span><span className="font-extrabold">Dr. Brad.</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
            <ScrollReveal className="md:col-span-2">
              <div className="bg-[#f8fafb] border-l-4 border-mint rounded-xl p-10 h-full">
                <div className="text-[56px] text-mint/20 leading-none font-serif mb-2">&ldquo;</div>
                <p className="text-xl text-teal leading-relaxed italic mb-4">
                  I tried a whole lot of chiropractors in the area. I almost lost hope going to chiropractors until I found Dr. Brad.
                </p>
                <div className="text-sm text-text/50">Verified Patient <span className="text-text/30">&middot; Google Review</span></div>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-6">
              <ScrollReveal delay=".08s">
                <div className="bg-[#f8fafb] rounded-xl p-7">
                  <div className="flex gap-[2px] text-amber mb-2">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                  </div>
                  <p className="text-[15px] text-text/80 leading-relaxed mb-3">He truly cares for all of his patients including my whole family.</p>
                  <div className="text-sm text-text/50">Verified Patient <span className="text-text/30">&middot; Google Review</span></div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay=".16s">
                <div className="bg-[#f8fafb] rounded-xl p-7">
                  <div className="flex gap-[2px] text-amber mb-2">
                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                  </div>
                  <p className="text-[15px] text-text/80 leading-relaxed mb-3">After about 3 months, my headaches completely disappeared and I am now pain-free.</p>
                  <div className="text-sm text-text/50">Verified Patient <span className="text-text/30">&middot; Google Review</span></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA line1="$55 gets you started." anchor="Just honest care." />
    </>
  );
}
