import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Back and Body Chiropractic Center. (586) 207-1624. 55130 Van Dyke Ave #25, Shelby Charter Township, MI 48317. In Vince and Joe\'s plaza.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title={<>
          <span className="font-normal">Get in </span>touch.
        </>}
        subtitle="In Vince and Joe's plaza at 25 Mile & Van Dyke. Saturday hours available."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
      />

      {/* CONTACT SECTION */}
      <section className="py-20 bg-white">
        <div className="container">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 max-w-[1100px] mx-auto">
              {/* LEFT: INFO */}
              <div>
                <h3 className="text-xl font-bold text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Back and Body Chiropractic Center</h3>
                <p className="mb-2">
                  <a href="tel:5862071624" className="text-teal font-bold text-lg hover:text-mint transition-colors">(586) 207-1624</a>
                </p>
                <p className="text-text/80 leading-relaxed">
                  55130 Van Dyke Ave #25<br />Shelby Charter Township, MI 48317
                </p>
                <p className="text-[13px] text-[#999] mt-1">
                  Northeast corner of 25 Mile Rd and Van Dyke Ave, in Vince and Joe&apos;s plaza
                </p>

                <h3 className="text-xl font-bold text-teal mt-9 mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Office Hours</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Monday', '9:00 AM \u2013 1:00 PM, 3:00 \u2013 7:00 PM'],
                      ['Tuesday', '9:00 AM \u2013 1:00 PM, 3:00 \u2013 7:00 PM'],
                      ['Wednesday', '9:00 AM \u2013 1:00 PM, 3:00 \u2013 7:00 PM'],
                      ['Thursday', '9:00 AM \u2013 1:00 PM'],
                      ['Friday', 'Closed'],
                      ['Saturday', '9:00 AM \u2013 1:00 PM'],
                      ['Sunday', 'Closed'],
                    ].map(([day, hours]) => (
                      <tr key={day} className={`border-b border-gray-100 ${day === 'Saturday' ? 'text-mint font-semibold' : ''}`}>
                        <td className="py-2 pr-6 font-medium text-teal">{day}</td>
                        <td className="py-2 text-text/70">{hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Google Map */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.5!2d-83.0322461!3d42.6994733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824e6f9b1588b71%3A0x371c8aa63efc8c8f!2sBack%20and%20Body%20Chiropractic%20Center!5e0!3m2!1sen!2sus!4v1"
                  className="mt-7 w-full h-[250px] rounded-xl border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Back and Body Chiropractic Center location map"
                />

                <div className="mt-7">
                  <h3 className="text-lg font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>Areas We Serve</h3>
                  <p className="text-sm text-[#888] leading-[1.7]">
                    Shelby Township &middot; Sterling Heights &middot; Utica &middot; Rochester Hills &middot; Troy &middot; Macomb &middot; Clinton Township &middot; Washington Township &middot; Romeo
                  </p>
                </div>
              </div>

              {/* RIGHT: FORM */}
              <div>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-[40px] font-extrabold text-mint leading-none" style={{ fontFamily: 'var(--font-heading)' }}>$67</span>
                    <span className="text-lg font-bold text-teal" style={{ fontFamily: 'var(--font-heading)' }}>New Patient Special</span>
                  </div>
                  <p className="text-sm text-text/50 mb-6">+ Free Consultation</p>
                  <BookingForm variant="compact" />
                  <p className="text-center text-xs text-[#888] mt-4">
                    Open Saturdays &middot; Evening hours Mon&ndash;Wed until 7pm
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <ConversionCTA line1="Ready to feel better?" anchor="$67 gets you started." note="No sales pitches. No gimmicks. Just honest care." />
    </>
  );
}
