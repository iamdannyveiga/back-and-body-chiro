import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Communication Privacy Policy',
  description:
    'Communication privacy policy for Back and Body Chiropractic Center, including information protection and SMS messaging terms.',
  alternates: {
    canonical: '/privacy-policy',
  },
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = 'January 1, 2025';
const LAST_UPDATED_DATE = 'September 8, 2026';

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
        title="Communication Privacy Policy"
        subtitle={`How Back and Body Chiropractic Center collects, uses, discloses, and safeguards communication-related information. Effective ${EFFECTIVE_DATE}; last updated ${LAST_UPDATED_DATE}.`}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <section className="py-[70px] bg-white">
        <div className="container max-w-[840px] mx-auto">
          <PolicySection title="1. Information We Collect">
            <p>
              We may collect your name, email address, phone number, and other contact details when
              you communicate with Back and Body Chiropractic Center.
            </p>
            <p>
              We may also collect the content of communications you send us, including emails,
              messages, and other forms of communication.
            </p>
          </PolicySection>

          <PolicySection title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Communicate with you and respond to your inquiries, requests, or concerns.</li>
              <li>Send service-related announcements, updates, and administrative messages.</li>
              <li>Analyze trends, track interactions, and improve our services.</li>
            </ul>
          </PolicySection>

          <PolicySection title="3. Information Sharing and Disclosure">
            <p>
              We may engage third-party service providers to assist with communication services.
              These providers are contractually required to maintain the confidentiality and
              security of your information and may use it only to provide those services on our
              behalf.
            </p>
            <p>
              We may disclose information when required by law, regulation, or legal process.
            </p>
          </PolicySection>

          <PolicySection title="4. Security Measures">
            <p>
              We implement reasonable security measures to protect against unauthorized access,
              disclosure, alteration, or destruction of your information.
            </p>
          </PolicySection>

          <PolicySection title="5. Your Choices">
            <p>
              You may choose not to receive non-essential communications from Back and Body
              Chiropractic Center by following the opt-out instructions included in the
              communication.
            </p>
          </PolicySection>

          <PolicySection title="6. Information Protection">
            <p>
              Your information will not be sold or distributed to third parties for marketing
              purposes.
            </p>
            <p>
              <strong>
                Mobile opt-in information and SMS consent will not be shared with third parties or
                affiliates for marketing or promotional purposes.
              </strong>
            </p>
          </PolicySection>

          <PolicySection title="7. Contact Information">
            <div className="bg-[#f8fafb] rounded-xl p-7 border border-border">
              <p className="font-bold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                Back and Body Chiropractic Center
              </p>
              <p className="mb-3">55130 Van Dyke, Shelby Twp, MI 48316-5302</p>
              <p className="mb-1">
                Email:{' '}
                <a href="mailto:backandbodydoc@gmail.com" className="text-teal font-bold underline">
                  backandbodydoc@gmail.com
                </a>
              </p>
              <p className="mb-1">
                Phone:{' '}
                <a href="tel:5862071624" className="text-teal font-bold underline">(586) 207-1624</a>
              </p>
            </div>
          </PolicySection>

          <PolicySection title="8. SMS Messaging Terms & Conditions">
            <p>
              You may opt in to receive text message notifications from Back and Body Chiropractic
              Center.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Notifications may include appointment reminders, updates, and other information
                related to services provided by Back and Body Chiropractic Center.
              </li>
              <li>Messaging frequency varies.</li>
              <li>Standard messaging rates and data charges may apply.</li>
              <li>
                You can opt out at any time by replying <strong>STOP</strong> or by contacting Back
                and Body Chiropractic Center directly.
              </li>
              <li>
                You can text <strong>Options</strong> for help information.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="9. Consent">
            <p>
              By engaging with our services and communicating with Back and Body Chiropractic
              Center, you consent to the collection, use, and permitted disclosure of your
              information as described in this Communication Privacy Policy.
            </p>
            <p>
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
