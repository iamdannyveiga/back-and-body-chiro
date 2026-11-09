import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import ConversionCTA from '@/components/ConversionCTA';
import FAQAccordion from '@/components/FAQAccordion';
import { breadcrumbSchema } from '@/lib/schema';

export interface GuideItem { heading: string; body: string[]; }
export interface GuideLink { href: string; label: string; }
export interface GuideFaq { question: string; answer: string; }

// Shared layout for health-library guides (listicle format). Server component.
// Optional faq renders a visible FAQ accordion that emits the page's one FAQPage schema.
export default function GuideArticle({
  slug, title, titleAccent, subtitle, intro, items, links, updated, faq, faqTitle,
}: {
  slug: string; title: string; titleAccent: string; subtitle: string;
  intro: string[]; items: GuideItem[]; links: GuideLink[]; updated: string;
  faq?: GuideFaq[]; faqTitle?: string;
}) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${title} ${titleAccent}`,
    dateModified: updated,
    datePublished: updated,
    mainEntityOfPage: `https://backandbodydoc.com/guides/${slug}`,
    author: { '@type': 'Person', name: 'Dr. Bradley Krawczyk', jobTitle: 'Doctor of Chiropractic' },
    publisher: { '@type': 'Organization', name: 'Back and Body Chiropractic Center', url: 'https://backandbodydoc.com' },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: 'Home', href: '/' }, { name: 'Guides' }, { name: `${title} ${titleAccent}` },
      ])) }} />
      <PageHero
        title={<>{title} <span className="text-mint">{titleAccent}</span></>}
        subtitle={subtitle}
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Guides' }, { label: title }]}
      />
      <section className="py-20 bg-white">
        <div className="container max-w-[860px] mx-auto">
          <ScrollReveal>
            <div className="prose-custom">
              {intro.map((p, i) => <p key={i}>{p}</p>)}
              <p className="text-sm text-text/60">By Dr. Bradley Krawczyk, Back and Body Chiropractic Center, 55130 Van Dyke Ave #25, Shelby Township, MI. Updated {updated}.</p>
            </div>
          </ScrollReveal>
          {items.map((it, n) => (
            <ScrollReveal key={n}>
              <div className="mt-10">
                <h2 className="text-[28px] font-extrabold text-teal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>{n + 1}. {it.heading}</h2>
                <div className="prose-custom">{it.body.map((p, i) => <p key={i}>{p}</p>)}</div>
              </div>
            </ScrollReveal>
          ))}
          {faq && faq.length > 0 && (
            <div className="mt-14">
              <ScrollReveal>
                <div className="text-center mb-8">
                  <span className="label">FAQ</span>
                  <h2 className="text-[30px] md:text-[36px] font-extrabold text-teal" style={{ fontFamily: 'var(--font-heading)' }}>{faqTitle || 'Frequently asked questions'}</h2>
                </div>
              </ScrollReveal>
              <FAQAccordion items={faq} />
            </div>
          )}
          <ScrollReveal>
            <div className="mt-12 border-[3px] border-mint/30 rounded-xl p-8">
              <h2 className="text-[24px] font-extrabold text-teal mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Keep reading</h2>
              <ul className="list-disc pl-6 space-y-2">
                {links.map((l) => (
                  <li key={l.href}><Link href={l.href} className="text-mint font-semibold underline underline-offset-4">{l.label}</Link></li>
                ))}
              </ul>
              <p className="mt-6">Questions? Call us at <a href="tel:5862071624" className="text-mint font-semibold underline">(586) 207-1624</a> or <Link href="/schedule-appointment" className="text-mint font-semibold underline">book your $67 new patient visit</Link>.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
      <ConversionCTA />
    </>
  );
}
