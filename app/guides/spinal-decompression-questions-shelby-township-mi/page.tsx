import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

const SLUG = 'spinal-decompression-questions-shelby-township-mi';
export const metadata: Metadata = {
  title: { absolute: 'Spinal Decompression Shelby Township: 6 Questions Answered' },
  description: 'What spinal decompression is, whether it hurts, who it helps and what to expect at Back and Body Chiropractic Center in Shelby Township, MI.',
  alternates: { canonical: `/guides/${SLUG}` },
};

export default function Page() {
  return (
    <GuideArticle
      slug={SLUG}
      title="Spinal Decompression in Shelby Township:"
      titleAccent="6 Questions Answered."
      subtitle="Non-surgical disc relief explained in plain language."
      updated="2026-11-09"
      intro={[
        'Spinal decompression is one of the most asked-about treatments for disc pain. Here are the questions Dr. Brad hears most from Shelby Township patients considering it.',
      ]}
      items={[
        { heading: 'What is spinal decompression?', body: ['A non-surgical traction therapy that gently stretches the spine and creates negative pressure within the disc. That can help retract bulging or herniated disc material and take pressure off irritated nerves.'] },
        { heading: 'Does it hurt?', body: ['No. Most patients find it comfortable and relaxing. You lie on the decompression table while the machine applies gentle, controlled traction, and many patients fall asleep.'] },
        { heading: 'Who is it for?', body: ['People with herniated or bulging discs, degenerative disc disease, sciatica, spinal stenosis, pinched nerves and chronic low back pain are common candidates. Dr. Brad confirms with an exam first.'] },
        { heading: 'How many sessions will I need?', body: ['It depends on the severity of the disc problem. Some patients feel improvement in a few sessions, and more significant injuries may benefit from a series. Dr. Brad lays out the plan up front.'] },
        { heading: 'Is it different from a chiropractic adjustment?', body: ['Yes. An adjustment restores joint motion with a quick, specific movement. Decompression is slow, mechanical traction aimed at the disc. Many plans combine them, and massage can ease the surrounding muscles.'] },
        { heading: 'How do I find out if it is right for me?', body: ['Start with the $67 new patient visit at 55130 Van Dyke Ave #25, Shelby Township. Dr. Brad examines you and tells you whether decompression fits. Coverage varies by plan and our office can help you understand your benefits.'] },
      ]}
      faqTitle="More spinal decompression questions"
      faq={[
        { question: 'How long is each session?', answer: 'About 15 to 20 minutes on the table. Dr. Brad may add a chiropractic adjustment afterward.' },
        { question: 'How does spinal decompression help disc injuries?', answer: 'Decompression creates negative pressure within the disc, which helps retract bulging material, reduces nerve compression, and draws in nutrients that promote disc healing. It is gentle, non-invasive, and effective for many disc conditions.' },
        { question: 'What is the difference between a bulging disc and a herniated disc?', answer: 'A bulging disc extends beyond its normal boundary but the outer wall remains intact. A herniated disc has a tear in the outer wall, allowing inner material to leak out. Both can compress nerves and cause pain. Dr. Brad treats both conditions.' },
        { question: 'Where can I get spinal decompression in Shelby Charter Township?', answer: 'Back and Body Chiropractic Center is in Shelby Charter Township, MI at 55130 Van Dyke Ave #25. Dr. Brad Krawczyk offers non-surgical spinal decompression for herniated and bulging discs, sciatica and chronic low back pain. A $67 new patient visit shows whether decompression fits your case.' },
      ]}
      links={[
        { href: '/spinal-decompression-shelby-township-mi', label: 'Spinal Decompression in Shelby Township' },
        { href: '/disc-injury-treatment-shelby-township-mi', label: 'Disc Injury Treatment' },
        { href: '/sciatica-treatment-shelby-township-mi', label: 'Sciatica Treatment' },
        { href: '/spinal-decompression-sterling-heights-mi', label: 'Spinal Decompression in Sterling Heights' },
      ]}
    />
  );
}
