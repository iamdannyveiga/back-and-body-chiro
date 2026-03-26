import type { Metadata } from 'next';
import ScrollReveal from '@/components/ScrollReveal';
import { StarIcon } from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Schedule Appointment',
  description:
    'Schedule your $67 new patient special at Back and Body Chiropractic Center in Shelby Township, MI. Consultation, exam, X-rays if needed, and first adjustment. No contracts. Call (586) 486-5235.',
  alternates: {
    canonical: '/schedule-appointment',
  },
};

export default function ScheduleAppointmentPage() {
  return (
    <section className="pt-[100px] pb-20 min-h-screen bg-white">
      <ScrollReveal>
        <div className="text-center mb-8">
          <h1 className="text-[36px] font-extrabold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            Schedule Your Appointment
          </h1>
          <p className="text-base text-text/65 mb-1">No sales pitches. No gimmicks. Just honest care.</p>
          <p className="text-sm text-text/50">$67 New Patient Special -- Consultation, exam, X-rays if needed, and first adjustment</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className="w-full max-w-[800px] mx-auto px-5">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.chirohd.com/online-scheduler/679/back-and-body-chiropractic-center"
              title="Schedule Appointment - Back and Body Chiropractic Center"
              width="100%"
              height="700"
              className="border-0 w-full"
              loading="lazy"
            />
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

          <div className="text-center mt-6">
            <p className="text-sm text-text/50">
              Prefer to call? <a href="tel:5864865235" className="text-mint font-bold">(586) 486-5235</a>
            </p>
          </div>

          <div className="text-center mt-4">
            <p className="text-sm text-[#999]">55130 Van Dyke Avenue, Shelby Charter Township, MI 48316</p>
            <p className="text-xs text-[#bbb] mt-1">In Vince and Joe&apos;s plaza at 25 Mile &amp; Van Dyke</p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
