import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  bannerText?: string;
}

export default function PageHero({ title, subtitle, breadcrumbs, bannerText = 'Photo placeholder' }: PageHeroProps) {
  return (
    <section className="pt-[72px]">
      {/* Banner */}
      <div className="w-full h-[28vh] min-h-[200px] max-h-[320px] overflow-hidden relative">
        <div className="w-full h-full bg-gradient-to-br from-[#2a4a58] via-[#1a3040] to-teal flex items-center justify-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_600px_300px_at_30%_60%,rgba(94,210,153,.08),transparent),radial-gradient(ellipse_400px_200px_at_70%_40%,rgba(94,210,153,.05),transparent)]" />
          <p className="text-white/15 text-xs tracking-[2px] uppercase z-10" style={{ fontFamily: 'var(--font-heading)' }}>{bannerText}</p>
        </div>
      </div>
      {/* Band */}
      <div className="bg-teal py-14 md:py-16 relative -mt-10 z-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%270%200%20256%20256%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter%20id=%27n%27%3E%3CfeTurbulence%20type=%27fractalNoise%27%20baseFrequency=%27.85%27%20numOctaves=%274%27%20stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect%20width=%27100%25%27%20height=%27100%25%27%20filter=%27url(%23n)%27/%3E%3C/svg%3E')] opacity-[.03] pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-[13px] text-text-light/[.45] mb-4">
            {breadcrumbs.map((bc, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2 opacity-40">/</span>}
                {bc.href ? (
                  <Link href={bc.href} className="text-text-light/[.55] no-underline hover:text-mint transition-colors">{bc.label}</Link>
                ) : (
                  <span>{bc.label}</span>
                )}
              </span>
            ))}
          </div>
          <h1 className="text-[36px] md:text-[52px] font-extrabold text-text-light leading-[1.1] relative z-10" style={{ fontFamily: 'var(--font-heading)' }}>
            {title}
          </h1>
          {subtitle && (
            <p className="text-[17px] text-text-light/[.65] mt-4 max-w-[600px] leading-[1.65] relative z-10">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
