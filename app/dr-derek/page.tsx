import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import { personSchemaDerek, breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: "Meet Dr. Derek Landis, Chiropractor",
  description:
    "Meet Dr. Derek Landis, DC, at Back and Body Chiropractic Center in Shelby Charter Township. Life University graduate with a focus on sports chiropractic and care for the whole family.",
  alternates: {
    canonical: '/dr-derek',
  },
};

export default function DrDerekPage() {
  return (
    <>
      <PageHero
        title={<>
          <span className="font-normal">Meet </span>Dr. Derek.
        </>}
        subtitle="Life University graduate. Sports chiropractic. Care for athletes and families of all ages."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Meet Dr. Derek' },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-[900px] mx-auto">
            <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
              <ScrollReveal>
                <div className="w-full aspect-[2/3] rounded-xl overflow-hidden shadow-lg relative -mt-10 z-20">
                  <Image
                    src="/images/dr-derek-landis.webp"
                    alt="Dr. Derek Landis, DC, chiropractor at Back and Body Chiropractic Center in Shelby Township, MI"
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </ScrollReveal>

              <div>
                <ScrollReveal>
                  <h2 className="text-[34px] font-extrabold text-teal mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                    Dr. Derek Landis, D.C.
                  </h2>
                  <p className="text-sm text-[#888] mb-8 leading-relaxed">
                    Associate Chiropractor &middot; Grand Valley State University &middot; Life University College of Chiropractic, 2025
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="prose-custom">
                  <p>Dr. Derek Landis grew up in Marine City, Michigan. Sports have always been a big part of his life, playing football, baseball, golf and a variety of other sports and activities like hunting. As a baseball pitcher, he experienced his fair share of shoulder injuries. After trying different doctors and treatment approaches, it was chiropractic care that truly helped him work through those injuries and get lasting results. That experience would ultimately shape the direction of his life.</p>
                  <p>Derek went on to attend Grand Valley State University before completing both his undergraduate and graduate education at Life University in Atlanta, Georgia. In 2025, he earned his Doctor of Chiropractic degree from Life University College of Chiropractic. His athletic background and personal experience with injuries helped develop his passion for sports chiropractic and helping athletes recover, perform at their best, and stay active. He also enjoys caring for individuals and families of all ages, helping people move better and feel their best at every stage of life.</p>
                  <p>Today, Dr. Derek brings that same passion for chiropractic care to patients at Back and Body Chiropractic Center. His approach focuses on thorough examinations, individualized treatment, clear communication, and helping patients better understand their health. Outside the office, he enjoys hunting, golfing, and spending time outdoors.</p>
                  <p>Whether he&apos;s working with an athlete recovering from an injury, someone dealing with everyday aches and pains, or a family looking to stay active and healthy, his goal is simple: help people get back to doing what they love.</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="mt-9">
                    <h3 className="text-lg font-bold text-teal mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Focus Areas</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Sports Chiropractic', 'Shoulder Injuries', 'Athletes', 'Families of All Ages'].map((tag) => (
                        <span key={tag} className="inline-block px-4 py-[6px] bg-[#f1f5f5] text-teal text-sm font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA line1="$67 gets you started." anchor="Just honest care." />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchemaDerek()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
          { name: 'Home', href: '/' },
          { name: 'Dr. Derek' },
        ])) }}
      />
    </>
  );
}
