import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Dr. Brad Krawczyk -- Macomb County native, MSU grad, 14+ years of honest chiropractic care. No sales pitches. No gimmicks. Just results.',

  alternates: {
    canonical: "https://backandbodydoc.com/about/",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={<><span className="font-normal">About </span>Back and Body.</>}
        subtitle="One doctor. One location. 14 years of honest chiropractic care in Shelby Township."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        bannerText="Clinic interior -- bright, welcoming, clean"
      />

      {/* Dr. Brad's Story */}
      <section className="py-[100px] bg-white">
        <div className="container">
          <ScrollReveal className="max-w-[860px] mx-auto">
            <span className="label">Dr. Brad&apos;s Story</span>
            <h2 className="text-[40px] font-extrabold text-teal mb-7 leading-[1.15]" style={{ fontFamily: 'var(--font-heading)' }}>A Macomb County kid who found his calling.</h2>
            <div className="text-[16px] leading-[1.75] space-y-[18px]">
              <p>Brad Krawczyk grew up right here -- in Macomb County, Michigan. He played football in high school, did the Friday night lights thing, and took a hit that would end up changing his life. Not because it ended his football career, but because it introduced him to chiropractic care.</p>
              <p>That experience -- going from pain to relief, from frustration to function -- stuck with him. He went to Michigan State University to study Kinesiology, then headed south to Life University College of Chiropractic in Atlanta, Georgia. He earned his Doctor of Chiropractic degree in 2011.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-[60px] mt-12 max-w-[860px] mx-auto items-center">
            <div className="text-[16px] leading-[1.75] space-y-[18px]">
              <p>That same year -- September 2011 -- Brad opened Back and Body Chiropractic Center at 25 Mile and Van Dyke, in Vince and Joe&apos;s plaza. He was fresh out of school, but he was clear about one thing: he was going to do this differently.</p>
              <p>No sales pitches. No high-pressure care plan packages. No gimmick marketing. Just honest, thorough chiropractic care at a fair price.</p>
              <p>Fourteen years later, he&apos;s still in the same plaza, still serving the same community, still operating by the same principle.</p>
            </div>
            <div className="w-full h-[380px] rounded-xl overflow-hidden shadow-[var(--shadow)]">
              <div className="w-full h-full bg-gradient-to-br from-[#2a4a58] to-[#1a3540] flex items-center justify-center">
                <svg className="w-14 h-14 opacity-15" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="20" r="12" stroke="#fff" strokeWidth="1.5" /><path d="M10 52c0-10 8-18 18-18s18 8 18 18" stroke="#fff" strokeWidth="1.5" /></svg>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal className="max-w-[860px] mx-auto mt-10">
            <div className="border-l-4 border-mint py-7 px-8 bg-mint/[.04] rounded-r-xl">
              <div className="text-[80px] leading-[.8] text-mint opacity-20" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
              <div className="text-[22px] font-normal leading-[1.5] text-teal" style={{ fontFamily: 'var(--font-heading)' }}>The best care without any of the nonsense.</div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-[100px] bg-teal relative overflow-hidden" style={{ clipPath: 'polygon(0 48px, 100% 0, 100% 100%, 0 100%)', paddingTop: '148px' }}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.04] pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal className="text-center py-5">
            {['"No sales pitches."', '"No crazy care plans."', '"No gimmicks."'].map((line, i) => (
              <div key={i} className="text-[26px] md:text-[36px] font-normal text-text-light leading-[1.5] opacity-80" style={{ fontFamily: 'var(--font-heading)' }}>{line}</div>
            ))}
            <div className="text-[32px] md:text-[44px] font-extrabold text-mint mt-2" style={{ fontFamily: 'var(--font-heading)' }}>&ldquo;Just honest heartfelt care.&rdquo;</div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-[100px] bg-light-gray">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="label">By The Numbers</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">14 years of </span><span className="font-extrabold">results.</span></h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
              {[
                { num: <>4.9<span className="text-amber">&#9733;</span></>, label: 'Google Rating' },
                { num: '34+', label: 'Patient Reviews' },
                { num: '14+', label: 'Years Serving Macomb' },
                { num: 'Sat', label: 'Hours Available' },
              ].map((s, i) => (
                <div key={i} className="relative">
                  <div className="text-[44px] font-extrabold text-mint leading-none mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>{s.num}</div>
                  <div className="text-sm font-semibold text-text opacity-60" style={{ fontFamily: 'var(--font-heading)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Community */}
      <section className="py-[100px] bg-white">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="label">Our Community</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}><span className="font-normal">Rooted in </span><span className="font-extrabold">Macomb County.</span></h2>
          </ScrollReveal>
          <ScrollReveal className="max-w-[720px] mx-auto text-center">
            <p className="text-[17px] leading-[1.75] mb-4">Located in Vince and Joe&apos;s plaza at the northeast corner of 25 Mile Road and Van Dyke Avenue. It&apos;s where Shelby Township meets Sterling Heights -- and it&apos;s been home base since day one.</p>
            <p className="text-[15px] leading-[1.7] text-[#888]">Serving Shelby Township, Sterling Heights, Utica, Rochester Hills, Troy, Macomb, Clinton Township, Washington Township, Romeo -- and anywhere else you&apos;re driving from to get honest care.</p>
            <div className="mt-8"><Link href="/contact" className="btn btn--mint">Get Directions &rarr;</Link></div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA />
    </>
  );
}
