import Link from 'next/link';
import Image from 'next/image';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: React.ReactNode;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  imageSrc?: string;
  imageAlt?: string;
}

export default function PageHero({
  title,
  subtitle,
  breadcrumbs,
  imageSrc = '/images/hero-clinic.webp',
  imageAlt = 'Back and Body Chiropractic Center',
}: PageHeroProps) {
  return (
    <section className="relative pt-[120px] md:pt-[140px] pb-14 md:pb-16">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,47,58,.78)] via-[rgba(26,47,58,.85)] to-[rgba(26,47,58,.92)]" />
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
        <h1 className="text-[36px] md:text-[52px] font-extrabold text-text-light leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-[17px] text-text-light/[.65] mt-4 max-w-[600px] leading-[1.65]">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
