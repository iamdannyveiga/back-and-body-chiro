import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';
import FAQAccordion from '@/components/FAQAccordion';
import { SpineIcon, DecompressionIcon, MassageIcon, BackPainIcon, NeckPainIcon, HeadacheIcon, SciaticaIcon, DiscIcon, ScoliosisIcon, PediatricIcon, SportsMedicineIcon, WorkInjuryIcon, CheckIcon } from '@/components/Icons';

const faqItems = [
  { question: "What's included in the $55 new patient special?", answer: "Your first visit includes a consultation with Dr. Brad, a thorough examination, X-rays if clinically necessary, and your first adjustment -- all for $55. Plus a free consultation to discuss your health goals. No hidden fees, no surprise charges." },
  { question: "Do you do long-term care plans or contracts?", answer: "No. This is one of the biggest things that sets us apart. We don't sell long-term care plan packages. We don't pressure you into 6-month contracts. Dr. Brad recommends what he genuinely believes you need -- and you decide how to proceed. Come when you need to, stop when you're feeling good. No guilt, no pressure." },
  { question: "What is spinal decompression?", answer: "Spinal decompression is a non-surgical treatment that gently stretches the spine using a specialized table. It creates negative pressure inside the discs, which can help bulging or herniated discs retract and allow nutrients and oxygen to flow back in." },
  { question: "Do you treat children and pregnant women?", answer: "Absolutely. Dr. Brad provides gentle, specialized care for children of all ages and pregnant women. Pediatric adjustments use very light pressure. Prenatal chiropractic helps with back pain, sciatica, and optimal baby positioning." },
  { question: "What is applied kinesiology?", answer: "Applied kinesiology is a diagnostic technique that uses muscle testing to evaluate structural, chemical, and mental aspects of health. By testing the strength and response of specific muscles, Dr. Brad can identify imbalances that standard exams might miss." },
  { question: "Do you accept insurance?", answer: "Yes, we work with most major insurance plans. Call us at (586) 207-1624 and we'll verify your benefits before your first visit. Even without insurance, our pricing is straightforward and affordable." },
  { question: "Do you offer massage therapy?", answer: "Yes -- on-site therapeutic massage. It's a great complement to chiropractic care, helping reduce muscle tension, improve range of motion, and accelerate your recovery." },
  { question: "What about nutrition and weight loss?", answer: "We offer personalized nutrition counseling and a medically guided weight loss program. Dr. Brad takes a whole-body approach, helping you with practical nutrition plans that work for real life." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="w-full h-[44vh] min-h-[320px] relative overflow-hidden bg-teal">
        <div className="w-full h-full bg-gradient-to-br from-[#2a4a58] via-[#1a3040] to-teal flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_30%_60%,rgba(94,210,153,.08),transparent),radial-gradient(ellipse_400px_200px_at_70%_40%,rgba(94,210,153,.05),transparent)]" />
          <div className="text-center z-10">
            <svg className="w-20 h-20 opacity-15 mx-auto mb-4" viewBox="0 0 80 80" fill="none">
              <rect x="4" y="16" width="72" height="48" rx="4" stroke="#fff" strokeWidth="2" />
              <path d="M4 52 L28 36 L44 46 L60 30 L76 42" stroke="#5ED299" strokeWidth="2" fill="none" />
              <circle cx="60" cy="28" r="6" stroke="#5ED299" strokeWidth="1.5" />
            </svg>
            <p className="text-white/20 text-[13px] tracking-[2px] uppercase" style={{ fontFamily: 'var(--font-heading)' }}>Clinic exterior or interior -- wide banner</p>
          </div>
        </div>
      </section>

      {/* HERO TEXT + FORM */}
      <section className="bg-teal relative z-10 -mt-[60px] py-20 md:pb-[100px]" id="hero-form">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.03] pointer-events-none" />
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-[60px] items-start">
            <ScrollReveal className="pt-5">
              <span className="label label--light">Chiropractor in Shelby Township, MI</span>
              <div className="mb-5">
                <p className="text-[24px] md:text-[32px] font-normal text-text-light leading-[1.35] opacity-85" style={{ fontFamily: 'var(--font-heading)' }}>No sales pitches.</p>
                <p className="text-[24px] md:text-[32px] font-normal text-text-light leading-[1.35] opacity-85" style={{ fontFamily: 'var(--font-heading)' }}>No crazy care plans.</p>
                <p className="text-[24px] md:text-[32px] font-normal text-text-light leading-[1.35] opacity-85" style={{ fontFamily: 'var(--font-heading)' }}>No gimmicks.</p>
              </div>
              <h1 className="text-[40px] md:text-[56px] font-bold text-text-light leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                Just honest <span className="text-mint">heartfelt care.</span>
              </h1>
              <p className="text-[17px] text-text-light/75 leading-[1.7] mb-8 max-w-[540px]">
                Dr. Brad Krawczyk -- MSU Spartan, Macomb County native, and your chiropractor for 14 years. Back and Body Chiropractic Center is where Shelby Township families come for real results at honest prices.
              </p>
              <Link href="/schedule" className="btn btn--mint">Book Your $55 First Visit &rarr;</Link>
              <div className="flex items-center flex-wrap gap-2 mt-7 text-[13px] text-text-light/60" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="text-amber text-[15px] tracking-[1px]">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
                <span>4.9</span>
                <span className="opacity-30">&middot;</span>
                <span>34+ Reviews</span>
                <span className="opacity-30">&middot;</span>
                <span>14+ Years</span>
                <span className="opacity-30">&middot;</span>
                <span>MSU Graduate</span>
                <span className="opacity-30">&middot;</span>
                <span>Saturday Hours</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay=".15s">
              <div className="bg-white rounded-xl p-8 md:p-10 border-t-4 border-mint shadow-[0_8px_32px_rgba(0,0,0,.10)]">
                <div className="text-center mb-1.5">
                  <span className="text-[38px] font-extrabold text-amber" style={{ fontFamily: 'var(--font-heading)' }}>$55</span>
                  <span className="text-[22px] font-bold text-teal ml-1" style={{ fontFamily: 'var(--font-heading)' }}>New Patient Special</span>
                </div>
                <p className="text-center text-sm text-text opacity-70 mb-6"><span className="text-mint font-bold">+ Free Consultation</span></p>
                <form>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="form-group"><input type="text" placeholder="First Name" /></div>
                    <div className="form-group"><input type="text" placeholder="Last Name" /></div>
                  </div>
                  <div className="form-group mb-3"><input type="tel" placeholder="Phone" /></div>
                  <div className="form-group mb-3"><input type="email" placeholder="Email" /></div>
                  <div className="form-group mb-3"><textarea placeholder="What's bothering you? (optional)" rows={2}></textarea></div>
                  <button type="button" className="w-full py-4 bg-teal text-text-light font-bold text-[15px] border-none rounded-lg cursor-pointer transition-all duration-250 hover:bg-teal-mid hover:-translate-y-px mt-1" style={{ fontFamily: 'var(--font-heading)' }}>
                    Book My $55 Visit &rarr;
                  </button>
                </form>
                <p className="text-center text-xs text-[#888] mt-3.5 leading-relaxed">Open Saturdays &middot; Evening hours Mon-Wed until 7pm</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* EMPATHY - Before/After */}
      <section className="py-[100px] md:py-[110px] bg-white">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="label">Sound Familiar?</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">This is </span><span className="font-extrabold">what pain steals.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
            <ScrollReveal>
              <div className="p-8 md:p-10 rounded-xl border border-border bg-white shadow-[var(--shadow-sm)]">
                <div className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#999] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>BEFORE</div>
                <ul className="list-none flex flex-col gap-[18px]">
                  {['Morning stiffness that ruins your whole day.', 'Headaches you\'ve just "learned to live with."', 'You\'ve tried other chiropractors. Nothing stuck.', 'The fear that surgery is next.'].map((item, i) => (
                    <li key={i} className="flex items-start text-[16px] leading-[1.55] text-[#666]">
                      <span className="text-[#ccc] font-bold text-sm mr-3 shrink-0">&times;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay=".12s">
              <div className="p-8 md:p-10 rounded-xl bg-white border-l-4 border-mint shadow-[var(--shadow)]">
                <div className="text-[11px] font-bold tracking-[2.5px] uppercase text-mint mb-6" style={{ fontFamily: 'var(--font-heading)' }}>AFTER</div>
                <ul className="list-none flex flex-col gap-[18px]">
                  {['Waking up without reaching for Advil.', 'Playing with your kids without planning around pain.', 'Finally finding a chiropractor who gets it.', 'Honest care. Real results. No nonsense.'].map((item, i) => (
                    <li key={i} className="flex items-start text-[16px] leading-[1.55]">
                      <span className="text-mint font-bold text-[16px] mr-3 shrink-0">&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal className="text-center">
            <p className="text-[17px] text-text mb-6">Dr. Brad has been turning &ldquo;before&rdquo; into &ldquo;after&rdquo; for <strong>14 years</strong>.</p>
            <Link href="/schedule" className="btn btn--mint">Start Your Transformation -- $55 &rarr;</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="py-[110px] md:py-[120px] bg-light-gray" id="services">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="label">What We Treat</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">One doctor. </span><span className="font-extrabold">Every condition.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
            {/* Large card */}
            <ScrollReveal className="md:col-span-2 xl:row-span-2">
              <div className="bg-white rounded-xl p-8 md:p-11 shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-[18px]"><SpineIcon className="w-6 h-6 stroke-mint" /></div>
                <div className="text-[26px] font-bold text-teal mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>Chiropractic Care</div>
                <p className="text-[15px] text-text opacity-80 leading-relaxed mb-4">The foundation of everything we do. Precise, gentle adjustments that restore alignment and let your body heal naturally. Dr. Brad combines 14 years of experience with a thorough, no-rush approach.</p>
                <Link href="/services/chiropractic-care" className="font-semibold text-sm text-mint inline-flex items-center gap-1 hover:text-green-sec hover:gap-2 transition-all" style={{ fontFamily: 'var(--font-heading)' }}>Learn More &rarr;</Link>
              </div>
            </ScrollReveal>
            {/* Medium cards */}
            <ScrollReveal className="md:col-span-2" delay=".08s">
              <div className="bg-white rounded-xl p-8 shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-[18px]"><DecompressionIcon className="w-6 h-6 stroke-mint" /></div>
                <div className="text-xl font-bold text-teal mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>Spinal Decompression</div>
                <p className="text-[15px] text-text opacity-80 leading-relaxed mb-4">Non-surgical disc relief. Gentle traction therapy that creates space between vertebrae, reducing pressure on discs and nerves.</p>
                <Link href="/services/spinal-decompression" className="font-semibold text-sm text-mint inline-flex items-center gap-1" style={{ fontFamily: 'var(--font-heading)' }}>Learn More &rarr;</Link>
              </div>
            </ScrollReveal>
            <ScrollReveal className="md:col-span-2" delay=".12s">
              <div className="bg-white rounded-xl p-8 shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-[18px]"><MassageIcon className="w-6 h-6 stroke-mint" /></div>
                <div className="text-xl font-bold text-teal mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>Massage Therapy</div>
                <p className="text-[15px] text-text opacity-80 leading-relaxed mb-4">On-site therapeutic massage to complement your chiropractic care. Reduce tension, improve circulation, and accelerate healing.</p>
                <Link href="/services/massage-therapy" className="font-semibold text-sm text-mint inline-flex items-center gap-1" style={{ fontFamily: 'var(--font-heading)' }}>Learn More &rarr;</Link>
              </div>
            </ScrollReveal>
            {/* Small cards */}
            {[
              { icon: <BackPainIcon className="w-5 h-5 stroke-mint" />, title: 'Back Pain', desc: 'The #1 reason patients find us.' },
              { icon: <NeckPainIcon className="w-5 h-5 stroke-mint" />, title: 'Neck Pain', desc: 'Relief without medication.' },
              { icon: <HeadacheIcon className="w-5 h-5 stroke-mint" />, title: 'Headaches', desc: 'Often spinal in origin.' },
              { icon: <SciaticaIcon className="w-5 h-5 stroke-mint" />, title: 'Sciatica', desc: 'Nerve pain resolved at the source.' },
              { icon: <DiscIcon className="w-5 h-5 stroke-mint" />, title: 'Disc Injuries', desc: 'Non-surgical treatment options.' },
              { icon: <ScoliosisIcon className="w-5 h-5 stroke-mint" />, title: 'Scoliosis', desc: 'Curvature management and care.' },
            ].map((card, i) => (
              <ScrollReveal key={card.title}>
                <div className="bg-white rounded-xl p-7 shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300">
                  <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center mb-3.5">{card.icon}</div>
                  <div className="text-[16px] font-bold text-teal mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</div>
                  <p className="text-[13px] text-text opacity-80">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
            {/* Pediatric medium */}
            <ScrollReveal className="md:col-span-2">
              <div className="bg-white rounded-xl p-8 shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-mint/10 rounded-lg flex items-center justify-center mb-[18px]"><PediatricIcon className="w-6 h-6 stroke-mint" /></div>
                <div className="text-xl font-bold text-teal mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>Pediatric &amp; Prenatal</div>
                <p className="text-[15px] text-text opacity-80 leading-relaxed">Gentle, specialized care for the whole family -- from newborns to expecting moms.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-7 shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center mb-3.5"><SportsMedicineIcon className="w-5 h-5 stroke-mint" /></div>
                <div className="text-[16px] font-bold text-teal mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>Sports Medicine</div>
                <p className="text-[13px] text-text opacity-80">Get back in the game.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white rounded-xl p-7 shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 bg-mint/10 rounded-lg flex items-center justify-center mb-3.5"><WorkInjuryIcon className="w-5 h-5 stroke-mint" /></div>
                <div className="text-[16px] font-bold text-teal mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>Auto / Work Injury</div>
                <p className="text-[13px] text-text opacity-80">Documentation and treatment.</p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal className="text-center text-sm text-[#888] leading-[1.7]">
            <strong className="text-text font-semibold">Plus:</strong> Applied Kinesiology &middot; Carpal Tunnel &middot; Vertigo &middot; Shoulder Pain &middot; Arm &amp; Leg Pain &middot; Nutrition &middot; Weight Loss &middot; Wellness Care
          </ScrollReveal>
        </div>
      </section>

      {/* DUAL FEATURE */}
      <section className="py-[100px] md:py-[110px] bg-white">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="label">Beyond the Adjustment</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">More than </span><span className="font-extrabold">just cracking backs.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
            {[
              { title: 'Massage Therapy', desc: 'On-site massage therapy to complement your chiropractic care. Reduce tension, improve circulation, accelerate healing -- without driving to a separate appointment.', bg: 'from-[#2a4a58] to-[#1a3540]', href: '/services/massage-therapy' },
              { title: 'Nutrition & Weight Loss', desc: 'Personalized nutrition counseling and medically guided weight loss. Whole-body wellness, not just spinal health. Practical plans for real Michigan families.', bg: 'from-[#3a5a48] to-[#2a4538]', href: '/services/nutrition' },
            ].map((card) => (
              <ScrollReveal key={card.title}>
                <div className="bg-white rounded-xl overflow-hidden shadow-[var(--shadow)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-full h-[260px] bg-gradient-to-br ${card.bg} flex items-center justify-center`}>
                    <svg className="w-14 h-14 opacity-20" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="24" stroke="#fff" strokeWidth="1.5" /></svg>
                  </div>
                  <div className="p-7">
                    <h3 className="text-[22px] font-bold text-teal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{card.title}</h3>
                    <p className="text-[15px] leading-[1.65] text-text opacity-80 mb-[18px]">{card.desc}</p>
                    <Link href={card.href} className="font-semibold text-sm text-mint inline-flex items-center gap-1" style={{ fontFamily: 'var(--font-heading)' }}>Learn More &rarr;</Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="py-[120px] bg-teal relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.04] pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="max-w-[900px] mx-auto">
              <div className="text-[28px] md:text-[40px] font-normal text-text-light leading-[1.4] opacity-85" style={{ fontFamily: 'var(--font-heading)' }}>&ldquo;I tried a whole lot of</div>
              <div className="text-[28px] md:text-[40px] font-normal text-text-light leading-[1.4] opacity-85" style={{ fontFamily: 'var(--font-heading)' }}>chiropractors in the area.</div>
              <div className="text-[28px] md:text-[40px] font-normal text-text-light leading-[1.4] opacity-85" style={{ fontFamily: 'var(--font-heading)' }}>I almost lost hope.&rdquo;</div>
              <div className="text-[44px] md:text-[64px] font-extrabold text-mint leading-[1.15] mt-4" style={{ fontFamily: 'var(--font-heading)' }}>&ldquo;Until I found Dr. Brad.&rdquo;</div>
              <p className="mt-6 text-sm text-text-light/40">-- Verified Patient Review</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DR. BRAD SPOTLIGHT */}
      <section className="py-[110px] md:py-[120px] bg-light-gray" id="about">
        <div className="container">
          <ScrollReveal className="text-center mb-[60px]">
            <span className="label">Meet Your Doctor</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">One doctor. </span><span className="font-extrabold">Your doctor.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-12 items-start">
            <ScrollReveal>
              {/* Photo placeholder */}
              <div className="w-full h-[440px] rounded-xl overflow-hidden -mt-10 relative z-[2] shadow-[var(--shadow-lg)] mb-7">
                <div className="w-full h-full bg-gradient-to-br from-[#2a4a58] to-teal flex items-center justify-center flex-col gap-3">
                  <svg className="w-[72px] h-[72px] opacity-15" viewBox="0 0 72 72" fill="none"><circle cx="36" cy="28" r="14" stroke="#fff" strokeWidth="1.5" /><path d="M12 64c0-12 10-22 24-22s24 10 24 22" stroke="#fff" strokeWidth="1.5" /></svg>
                  <p className="text-white/15 text-xs tracking-[1.5px] uppercase">Dr. Brad Krawczyk</p>
                </div>
              </div>
              <h3 className="text-[30px] font-extrabold text-teal mt-7 mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Dr. Bradley Krawczyk, D.C.</h3>
              <p className="text-sm text-[#888] mb-6 leading-relaxed">Founder &middot; Michigan State University &middot; Life University 2011 &middot; Macomb County Native &middot; 14+ Years</p>
              <div className="text-[16px] leading-[1.75] text-text mb-7 space-y-4">
                <p>Brad grew up right here in Macomb County. A high school football injury introduced him to chiropractic -- and changed his life. He went to Michigan State for Kinesiology, then headed to Life University in Atlanta to earn his Doctor of Chiropractic degree.</p>
                <p>In September 2011, the same year he graduated, he opened Back and Body Chiropractic Center at 25 Mile and Van Dyke -- in Vince and Joe&apos;s plaza. He&apos;s been there ever since, quietly building a practice on one simple principle:</p>
                <p><strong className="text-teal">&ldquo;The best care without any of the nonsense.&rdquo;</strong></p>
                <p>No high-pressure sales. No 6-month care plans you don&apos;t need. No gimmick packages. Just an honest evaluation, a straightforward plan, and real results.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Back Pain', 'Neck Pain', 'Spinal Decompression', 'Pediatric', 'Prenatal', 'Sports Medicine', 'Applied Kinesiology', 'Massage', 'Nutrition'].map((tag) => (
                  <span key={tag} className="text-xs font-semibold px-3.5 py-1.5 bg-mint/10 text-green-sec rounded-[20px]" style={{ fontFamily: 'var(--font-heading)' }}>{tag}</span>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay=".1s" className="flex flex-col gap-7">
              <div className="bg-white border-l-4 border-mint rounded-xl p-7 md:p-9 shadow-[var(--shadow)] relative">
                <div className="absolute top-3 left-5 text-[120px] leading-none text-mint opacity-15" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <p className="text-xl font-normal leading-[1.55] text-teal relative z-10 mt-8" style={{ fontFamily: 'var(--font-heading)' }}>He truly cares for all of his patients including my whole family.</p>
              </div>
              <div className="bg-white rounded-xl p-7 shadow-[var(--shadow-sm)]">
                <p className="text-[15px] leading-relaxed text-text mb-3">Dr. Brad is a Macomb County native serving the community he grew up in.</p>
                <div className="flex items-center gap-2 font-bold text-sm text-teal" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#18453B] inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white border border-[#ccc] inline-block" />
                  MSU Spartan
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-[100px] md:pt-[100px] md:pb-[60px] bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[60px] items-center">
            <ScrollReveal>
              <span className="label">Real Results</span>
              <h2 className="text-[34px] md:text-[44px] mb-9" style={{ fontFamily: 'var(--font-heading)' }}>
                <span className="font-normal">This is what </span><span className="font-extrabold">honest care looks like.</span>
              </h2>
              <ul className="list-none flex flex-col gap-5 mb-9">
                {[
                  'Headaches that disappeared after 3 months -- and stayed gone',
                  'Families who bring their kids, their parents, and themselves',
                  'Patients who tried every chiropractor in the area and finally found their answer',
                  '14 years of the same promise: no nonsense, just results',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-[16px] leading-relaxed">
                    <span className="shrink-0 w-7 h-7 bg-mint/[.12] rounded-full flex items-center justify-center mt-0.5"><CheckIcon className="w-3.5 h-3.5 stroke-mint" /></span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/schedule" className="btn btn--mint">Book Your $55 Visit &rarr;</Link>
            </ScrollReveal>
            <ScrollReveal delay=".1s">
              <div className="w-full h-[420px] rounded-xl overflow-hidden shadow-[var(--shadow)]">
                <div className="w-full h-full bg-gradient-to-br from-[#e8efe8] to-[#d4ddd4] flex items-center justify-center">
                  <svg className="w-16 h-16 opacity-15" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="24" r="10" stroke="#5ED299" strokeWidth="1.5" /><path d="M16 56c0-8 7-16 16-16s16 8 16 16" stroke="#5ED299" strokeWidth="1.5" /></svg>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-mint py-12 relative z-10 -mt-11 -mb-11">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-center">
            {[
              { num: <>4.9<span className="text-amber">&#9733;</span></>, label: 'Google Rating' },
              { num: '34+', label: 'Patient Reviews' },
              { num: '14+', label: 'Years Serving Macomb' },
              { num: 'Sat', label: 'Hours Available' },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={`${i * 0.08}s`}>
                <div className="relative">
                  <div className="text-[36px] md:text-[48px] font-extrabold text-teal leading-none mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>{stat.num}</div>
                  <div className="text-sm font-semibold text-teal opacity-70 tracking-[0.5px]" style={{ fontFamily: 'var(--font-heading)' }}>{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-[110px] md:py-[110px] bg-light-gray" id="testimonials">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="label">Patient Stories</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">The proof is </span><span className="font-extrabold">in the results.</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 mb-9">
            <ScrollReveal>
              <div className="bg-white rounded-xl p-9 md:p-11 shadow-[var(--shadow)] border-l-4 border-mint">
                <div className="text-[80px] leading-[.8] text-mint opacity-15" style={{ fontFamily: 'Georgia, serif' }}>&ldquo;</div>
                <p className="text-xl font-normal leading-relaxed text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>I tried a whole lot of chiropractors in the area. I almost lost hope going to chiropractors until I found Dr. Brad.</p>
                <div className="text-sm font-semibold text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Verified Patient <span className="font-normal text-[#999] ml-1">&middot; Google Review</span></div>
              </div>
            </ScrollReveal>
            <div className="flex flex-col gap-6">
              {[
                { text: 'Dr. Brad is an amazing chiropractor. He helped me so much with my headaches and the rest of my family with their back and neck pain. He truly cares for all of his patients including my whole family.', delay: '.08s' },
                { text: 'After about 3 months, my headaches completely disappeared and I am now pain-free. I continue to visit to keep my spine in alignment.', delay: '.16s' },
              ].map((review, i) => (
                <ScrollReveal key={i} delay={review.delay}>
                  <div className="bg-white rounded-xl p-8 shadow-[var(--shadow)]">
                    <div className="text-[16px] text-amber tracking-[2px] mb-4">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
                    <p className="text-[15px] leading-[1.7] text-text mb-4">{review.text}</p>
                    <div className="text-sm font-semibold text-teal" style={{ fontFamily: 'var(--font-heading)' }}>Verified Patient <span className="font-normal text-[#999] ml-1">&middot; Google Review</span></div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
          <ScrollReveal className="text-center text-sm text-[#999]">
            Every review is earned, not incentivized. Dr. Brad lets the results speak.
          </ScrollReveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-[110px] md:py-[120px] bg-white" id="process">
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <span className="label">Getting Started</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">Your </span><span className="font-extrabold"><span className="text-mint">$55</span> first visit.</span>
            </h2>
          </ScrollReveal>
          <div className="flex flex-col items-center max-w-[800px] mx-auto">
            {[
              { num: '1', title: 'Call or Book Online', desc: '(586) 207-1624 -- Saturday hours available. Or fill out the form above. We\'ll get you in fast.' },
              { num: '2', title: 'Meet Dr. Brad', desc: 'Consultation, exam, X-rays if needed. He listens. He\'s thorough. No sales pitch -- just an honest assessment.' },
              { num: '3', title: 'Your Honest Plan', desc: 'A straightforward treatment plan. No 6-month contracts. No gimmick packages. Just what you actually need.' },
              { num: '4', title: 'Feel Better', desc: 'Real results. Come back for maintenance when you want to -- not because you\'re locked into some plan.' },
            ].map((step, i) => (
              <div key={i} className="w-full">
                <ScrollReveal delay={`${i * 0.1}s`}>
                  <div className="flex flex-col sm:flex-row items-center gap-6 bg-white rounded-xl p-8 shadow-[var(--shadow)] border border-border hover:border-mint hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5 transition-all duration-300 relative z-[2] w-full">
                    <div className="w-[52px] h-[52px] bg-mint rounded-full flex items-center justify-center shrink-0 text-[22px] font-extrabold text-teal" style={{ fontFamily: 'var(--font-heading)' }}>{step.num}</div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-teal mb-1.5" style={{ fontFamily: 'var(--font-heading)' }}>{step.title}</h4>
                      <p className="text-[15px] leading-relaxed text-text opacity-80">{step.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
                {i < 3 && (
                  <div className="w-0.5 h-10 relative z-[1] mx-auto">
                    <div className="w-0.5 h-full bg-mint mx-auto relative">
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-mint" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[110px] md:py-[120px] bg-light-gray" id="faq">
        <div className="container">
          <ScrollReveal className="text-center mb-14">
            <span className="label">Common Questions</span>
            <h2 className="text-[34px] md:text-[44px]" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="font-normal">Your questions, </span><span className="font-extrabold">answered honestly.</span>
            </h2>
          </ScrollReveal>
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-[120px] bg-teal relative text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.04] pointer-events-none" />
        <div className="container relative z-10">
          <ScrollReveal>
            <div className="text-[28px] md:text-[38px] font-normal text-text-light leading-[1.4]" style={{ fontFamily: 'var(--font-heading)' }}>$55 gets you started.</div>
            <div className="text-[24px] md:text-[32px] font-normal text-text-light leading-[1.4] opacity-85" style={{ fontFamily: 'var(--font-heading)' }}>No sales. No gimmicks.</div>
            <div className="text-[38px] md:text-[52px] font-extrabold text-mint mt-2 mb-9" style={{ fontFamily: 'var(--font-heading)' }}>Just honest care.</div>
            <div className="flex items-center justify-center gap-4 flex-wrap mb-5">
              <Link href="/schedule" className="btn btn--mint">Book My $55 Visit &rarr;</Link>
              <a href="tel:5862071624" className="btn btn--outline">Call (586) 207-1624</a>
            </div>
            <p className="text-sm text-text-light/[.45] mt-2">Open Saturdays &middot; Evening hours Mon-Wed</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
