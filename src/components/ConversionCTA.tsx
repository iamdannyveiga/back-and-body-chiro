import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

interface ConversionCTAProps {
  line1?: string;
  anchor?: string;
  note?: string;
}

export default function ConversionCTA({
  line1 = '$55 gets you started.',
  anchor = 'Just honest care.',
  note = 'Open Saturdays \u00b7 Evening hours Mon\u2013Wed',
}: ConversionCTAProps) {
  return (
    <section className="py-[120px] bg-teal relative text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.04] pointer-events-none" />
      <div className="container relative z-10">
        <ScrollReveal>
          <div className="text-[36px] md:text-[36px] font-normal text-text-light leading-[1.4]" style={{ fontFamily: 'var(--font-heading)' }}>
            {line1}
          </div>
          <div className="text-[38px] md:text-[52px] font-extrabold text-mint mt-2 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            {anchor}
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
            <Link href="/schedule" className="btn btn--mint">Book My $55 Visit &rarr;</Link>
            <a href="tel:5862071624" className="btn btn--outline">Call (586) 207-1624</a>
          </div>
          <p className="text-sm text-text-light/40">{note}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
