import type { Metadata } from 'next';
import GuideArticle from '@/components/GuideArticle';

const SLUG = 'massage-types-shelby-township-mi';
export const metadata: Metadata = {
  title: 'Sports, Deep Tissue & Back Massage in Shelby Township: 6 Types Compared',
  description: 'Which massage fits your pain? Sports, deep tissue, back, trigger point, myofascial and prenatal massage compared by Dr. Brad Krawczyk. Shelby Township, MI.',
  alternates: { canonical: `/guides/${SLUG}` },
};

export default function Page() {
  return (
    <GuideArticle
      slug={SLUG}
      title="Massage in Shelby Township:"
      titleAccent="6 Types Compared."
      subtitle="Sports, deep tissue, back and more. How to pick the one that fits your pain."
      updated="2026-11-08"
      intro={[
        'If you are searching for massage in Shelby Township, the options sound similar until you know what each one is built to do. At Back and Body Chiropractic Center, the on-site massage therapist works alongside Dr. Brad, so the session targets what your care plan needs.',
        'Here are six types we offer and the problem each one fits best.',
      ]}
      items={[
        { heading: 'Back massage for tight, achy muscles', body: ['Muscle tension often goes along with, and worsens, back problems. A back-focused session releases the muscles that guard and pull on your spine, which can help adjustments hold longer.', 'Best for: desk-related upper and low back tightness, and soreness that returns after a long day.'] },
        { heading: 'Deep tissue massage', body: ['Slower, firmer pressure reaches the deeper layers of muscle where long-standing knots sit.', 'Best for: chronic tension and areas that feel stuck even after stretching.'] },
        { heading: 'Sports massage', body: ['Sports massage focuses on the muscles you load most, whether that is running, lifting or a weekend league. It supports recovery after training and after minor strains.', 'Best for: active people with recurring tightness in the same spot.'] },
        { heading: 'Trigger point therapy', body: ['Sustained pressure on a specific tender knot to release the referred pain it creates elsewhere, such as a shoulder knot that feeds a headache.', 'Best for: pain that seems to travel from one spot to another.'] },
        { heading: 'Myofascial release', body: ['Gentle, sustained stretching of the fascia, the connective tissue wrapped around muscle. When fascia is restricted it limits movement and creates pain.', 'Best for: stiffness and limited range of motion.'] },
        { heading: 'Prenatal massage', body: ['Massage tailored to pregnancy, paired with our prenatal chiropractic care when you want both.', 'Best for: back and hip discomfort during pregnancy.'] },
      ]}
      links={[
        { href: '/massage-therapy-shelby-township-mi', label: 'Massage Therapy in Shelby Township' },
        { href: '/back-pain-treatment-shelby-township-mi', label: 'Back Pain Treatment in Shelby Township' },
        { href: '/prenatal-chiropractic-shelby-township-mi', label: 'Prenatal Chiropractic in Shelby Township' },
        { href: '/chiropractic-care-shelby-township-mi', label: 'Chiropractic Care in Shelby Township' },
      ]}
    />
  );
}
