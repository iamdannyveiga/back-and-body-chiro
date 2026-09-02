import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Back and Body Chiropractic Center in Shelby Charter Township, MI. How we collect, use, and protect your information, including SMS terms.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = 'September 3, 2026';

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <ScrollReveal>
      <div className="mb-10">
        <h2 className="text-[24px] md:text-[28px] font-extrabold text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h2>
        <div className="text-[16px] text-text/80 leading-relaxed space-y-4">{children}</div>
      </div>
    </ScrollReveal>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle={`How Back and Body Chiropractic Center collects, uses, and protects your information. Effective ${EFFECTIVE_DATE}.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="py-[70px] bg-white">
        <div className="container max-w-[840px] mx-auto">
          <PolicySection title="Who we are">
            <p>
              Back and Body Chiropractic Center ("we," "us," or "our") operates the website
              backandbodydoc.com and provides chiropractic care in Shelby Charter Township, Michigan
              under the direction of Dr. Bradley Krawczyk, D.C. This Privacy Policy explains what
              information we collect through our website and communications, how we use it, and how
              we protect it.
            </p>
          </PolicySection>

          <PolicySection title="Information we collect">
            <p>We collect information you choose to provide to us, including when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Submit a contact or appointment form</strong> on our website: your name,
                phone number, email address, and any details you share about your health concern or
                the reason for your visit.
              </li>
              <li>
                <strong>Schedule an appointment online</strong> through our scheduling system: your
                name, contact information, and appointment preferences.
              </li>
              <li>
                <strong>Opt in to SMS text messaging</strong>: your mobile phone number and your
                consent to receive text messages from our office.
              </li>
              <li>
                <strong>Call or email our office</strong>: the contact information and details you
                provide during that communication.
              </li>
            </ul>
            <p>
              We also collect limited technical information automatically when you browse our site,
              as described in the Cookies and Analytics section below.
            </p>
          </PolicySection>

          <PolicySection title="How we use your information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and requests.</li>
              <li>Schedule, confirm, remind you of, and manage your appointments.</li>
              <li>Communicate with you about your care and our office (hours, closures, follow-ups).</li>
              <li>Improve our website and the experience of visitors using it.</li>
              <li>Comply with legal and regulatory obligations that apply to healthcare practices.</li>
            </ul>
            <p>We do not sell your personal information.</p>
          </PolicySection>

          <PolicySection title="How we protect patient information">
            <p>
              As a healthcare practice, we take the confidentiality of patient information
              seriously. Health information you share with us in the course of care is handled in
              accordance with applicable federal and state privacy laws, including HIPAA where it
              applies. We use reasonable administrative, technical, and physical safeguards to
              protect the information we hold, we limit access to staff who need it to serve you,
              and we retain information only as long as needed for the purposes described in this
              policy or as required by law.
            </p>
            <p>
              Please avoid submitting detailed medical history through the website contact form.
              Detailed health information is best shared directly with our team during your visit.
            </p>
          </PolicySection>

          <PolicySection title="SMS and mobile opt-in data">
            <p>
              <strong>
                No mobile information will be shared with third parties or affiliates for marketing
                or promotional purposes.
              </strong>{' '}
              SMS opt-in data and consent are never sold, rented, or shared with any third party for
              their own marketing. Information shared with service providers that help us send
              messages (such as our messaging platform) is used only to deliver those messages on
              our behalf.
            </p>
          </PolicySection>

          <PolicySection title="SMS messaging terms and conditions">
            <p>
              By providing your mobile number and opting in, you consent to receive text messages
              from Back and Body Chiropractic Center, including appointment confirmations,
              reminders, scheduling updates, and replies to your inquiries.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Message frequency varies</strong> based on your appointments and inquiries.
              </li>
              <li>
                <strong>Message and data rates may apply</strong> depending on your mobile carrier
                plan.
              </li>
              <li>
                <strong>Reply STOP</strong> at any time to opt out of text messages.
              </li>
              <li>
                <strong>Reply HELP</strong> for help, or contact our office at{' '}
                <a href="tel:5862071624" className="text-teal font-bold underline">(586) 207-1624</a>.
              </li>
              <li>Consent to receive text messages is not a condition of receiving care.</li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Cookies and analytics">
            <p>
              Our website uses cookies and similar technologies to make the site work and to
              understand how visitors use it. We use analytics tools (such as Google Analytics and
              Microsoft Clarity) that collect information like pages visited, approximate location,
              device type, and how you interact with pages. This information is aggregated and does
              not identify you personally. You can control cookies through your browser settings;
              disabling cookies may affect some site features.
            </p>
          </PolicySection>

          <PolicySection title="Third-party services">
            <p>
              We work with trusted service providers to operate our website, process form
              submissions, schedule appointments, and send communications. These providers may
              process your information only to perform services for us and are not permitted to use
              it for their own purposes. Our website may link to third-party sites (such as Google
              or Facebook); their privacy practices are governed by their own policies.
            </p>
          </PolicySection>

          <PolicySection title="Your choices">
            <ul className="list-disc pl-6 space-y-2">
              <li>You may opt out of text messages at any time by replying STOP.</li>
              <li>
                You may request access to, correction of, or deletion of the contact information we
                hold about you by contacting our office. Requests involving medical records are
                handled under applicable healthcare records laws.
              </li>
              <li>You can manage cookies through your browser settings.</li>
            </ul>
          </PolicySection>

          <PolicySection title="Children's privacy">
            <p>
              Our website is not directed at children, and we do not knowingly collect personal
              information from children online. Information about pediatric patients is provided by
              a parent or guardian in the course of care.
            </p>
          </PolicySection>

          <PolicySection title="Changes to this policy">
            <p>
              We may update this Privacy Policy from time to time. The current version will always
              be posted on this page with its effective date. Continued use of our website after an
              update means you accept the revised policy.
            </p>
          </PolicySection>

          <PolicySection title="Contact us">
            <p>Questions about this Privacy Policy or how your information is handled? Contact us:</p>
            <div className="bg-[#f8fafb] rounded-xl p-7 border border-border">
              <p className="font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Back and Body Chiropractic Center
              </p>
              <p className="mb-1">55130 Van Dyke Ave #25</p>
              <p className="mb-3">Shelby Charter Township, MI 48317</p>
              <p className="mb-1">
                Phone:{' '}
                <a href="tel:5862071624" className="text-teal font-bold underline">(586) 207-1624</a>
              </p>
              <p>
                Email:{' '}
                <a href="mailto:hello@backandbodydoc.com" className="text-teal font-bold underline">
                  hello@backandbodydoc.com
                </a>
              </p>
            </div>
            <p className="mt-6">
              <Link href="/" className="text-teal font-bold underline">Return to homepage</Link>
            </p>
          </PolicySection>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Privacy Policy' },
        ])) }}
      />
    </>
  );
}
