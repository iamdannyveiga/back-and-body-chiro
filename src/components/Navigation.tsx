'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoIcon, MenuIcon, XIcon } from './Icons';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const solid = !isHome || scrolled;

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[1000] transition-all duration-[350ms] ease-out"
      style={{
        background: solid ? 'rgba(255,255,255,0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(12px)' : 'none',
        boxShadow: solid ? '0 2px 20px rgba(0,0,0,.06)' : 'none',
        padding: solid ? '12px 0' : '18px 0',
      }}
    >
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-5 md:px-6 lg:px-20">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <LogoIcon />
          <div
            className="font-heading font-bold text-[16px] leading-[1.2] transition-colors duration-[350ms]"
            style={{ color: solid ? 'var(--teal)' : 'var(--white)', fontFamily: 'var(--font-heading)' }}
          >
            Back &amp; Body
            <span className="block font-normal text-[11px] tracking-[0.5px] opacity-80">
              Chiropractic Center
            </span>
          </div>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {[
            { href: '/services/chiropractic-care', label: 'Services' },
            { href: '/about', label: 'About' },
            { href: '/testimonials', label: 'Reviews' },
            { href: '/new-patients', label: 'New Patients' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-semibold text-sm tracking-[0.3px] no-underline transition-colors duration-250"
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: solid ? 'var(--text-nav)' : 'rgba(255,255,255,0.9)',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right side */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:5862071624"
            className="font-bold text-sm no-underline transition-colors duration-[350ms]"
            style={{
              fontFamily: 'var(--font-heading)',
              color: solid ? 'var(--teal)' : 'var(--white)',
            }}
          >
            (586) 207-1624
          </a>
          <Link
            href="/schedule"
            className="font-bold text-[13px] px-[22px] py-2.5 rounded-lg no-underline transition-all duration-250 hover:-translate-y-px"
            style={{
              fontFamily: 'var(--font-heading)',
              background: 'var(--mint)',
              color: 'var(--teal)',
            }}
          >
            Book Your $55 Visit
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden flex items-center justify-center p-1 bg-transparent border-none cursor-pointer"
          aria-label="Menu"
        >
          {mobileOpen ? (
            <XIcon className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
          <style>{`
            button svg { stroke: ${solid ? 'var(--teal)' : 'var(--white)'}; }
          `}</style>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/[.98] shadow-lg py-5 px-6 flex flex-col gap-4">
          {[
            { href: '/services/chiropractic-care', label: 'Services' },
            { href: '/about', label: 'About' },
            { href: '/testimonials', label: 'Reviews' },
            { href: '/new-patients', label: 'New Patients' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-sm no-underline"
              style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-nav)' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:5862071624"
            className="font-bold text-sm no-underline"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--teal)' }}
          >
            (586) 207-1624
          </a>
          <Link href="/schedule" className="btn btn--mint text-center justify-center">
            Book Your $55 Visit
          </Link>
        </div>
      )}
    </nav>
  );
}
