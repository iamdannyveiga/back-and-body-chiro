import type { Metadata } from 'next';
import { LogoIcon, StarIcon } from '@/components/Icons';
import ScrollReveal from '@/components/ScrollReveal';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Schedule Your $55 Visit',
  description:
    'Book your $55 new patient special at Back and Body Chiropractic Center. Consultation, exam, X-rays if needed, and first adjustment. No contracts.',

  alternates: {
    canonical: "https://backandbodydoc.com/schedule/",
  },
};

export default function SchedulePage() {
  return (
    <section className="pt-[100px] pb-20 min-h-screen flex flex-col items-center justify-center bg-white">
      <ScrollReveal>
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <LogoIcon className="w-12 h-12" />
          </div>
          <h1 className="text-[36px] font-extrabold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Book Your Visit
          </h1>
          <p className="text-base text-text/65">No sales pitches. No gimmicks. Just honest care.</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="w-full max-w-[520px] mx-auto px-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-[40px] font-extrabold text-mint leading-none" style={{ fontFamily: 'var(--font-heading)' }}>$55</span>
              <span className="text-lg font-bold text-teal" style={{ fontFamily: 'var(--font-heading)' }}>New Patient Special</span>
            </div>
            <p className="text-sm text-text/50 mb-6">+ Free Consultation &middot; Includes exam, X-rays if needed, and first adjustment</p>
            <BookingForm variant="full" />
            <p className="text-center text-xs text-[#888] mt-4">
              Or call <a href="tel:5862071624" className="font-bold">(586) 207-1624</a>
            </p>
          </div>

          {/* Trust strip */}
          <div className="flex items-center justify-center gap-3 flex-wrap mt-6 text-sm text-text/60">
            <span className="flex items-center gap-1 text-amber">
              {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-3.5 h-3.5" />)}
            </span>
            <span>4.9 Rating</span>
            <span className="text-text/20">&middot;</span>
            <span>14+ Years</span>
            <span className="text-text/20">&middot;</span>
            <span>Saturday Hours</span>
            <span className="text-text/20">&middot;</span>
            <span>No Contracts</span>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-[#999]">55130 Van Dyke Ave #25, Shelby Charter Township, MI 48316</p>
            <p className="text-xs text-[#bbb] mt-1">In Vince and Joe&apos;s plaza at 25 Mile &amp; Van Dyke</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
