import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

const SLUG = 'choosing-a-chiropractor-shelby-township-mi';
export const metadata: Metadata = {
  title: 'How to Choose a Chiropractor in Shelby Township: 6 Things to Check',
  description: 'A simple checklist for picking a chiropractor in Shelby Township, MI: exam, plan, services, hours, location and reviews. From Dr. Brad Krawczyk.',
  alternates: { canonical: `/guides/${SLUG}` },
};

export default function Page() {
  return (
    <GuideArticle
      slug={SLUG}
      title="Choosing a Chiropractor in Shelby Township:"
      titleAccent="6 Things to Check."
      subtitle="A short checklist before you book."
      updated="2026-11-08"
      intro={[
        'Whether you are looking for a chiropractor near Shelby Township or comparing a few offices, these six checks help you pick the right fit.',
      ]}
      items={[
        { heading: 'A real exam before treatment', body: ['Look for an office that diagnoses first. At Back and Body, Dr. Brad Krawczyk starts with a thorough exam so care is built around your condition.'] },
        { heading: 'A personalized plan', body: ['Ask what the plan is and why. You should leave knowing the goal and the next step.'] },
        { heading: 'Services under one roof', body: ['Chiropractic adjustments, spinal decompression, SoftWave therapy and on-site massage in one office means one coordinated plan.'] },
        { heading: 'Hours that fit your week', body: ['We are open Monday to Thursday 9 to 1 and 3 to 7, and Friday 9 to 12.'] },
        { heading: 'Location and ease of booking', body: ['We are at 55130 Van Dyke Ave #25 in Shelby Township. You can book online or call (586) 207-1624.'] },
        { heading: 'Real patient feedback', body: ['Read recent patient reviews and ask about their experience with the condition you have, from neck pain and headaches to sciatica and disc injuries.'] },
      ]}
      links={[
        { href: '/chiropractic-care-shelby-township-mi', label: 'Chiropractic Care in Shelby Township' },
        { href: '/about', label: 'About Dr. Brad Krawczyk' },
        { href: '/new-patients', label: 'New Patients' },
        { href: '/testimonials', label: 'Patient Testimonials' },
      ]}
    />
  );
}
