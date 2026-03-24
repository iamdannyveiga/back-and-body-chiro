'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { MenuIcon, XIcon } from './Icons';

const serviceLinks = [
  { href: '/services/chiropractic-care', label: 'Chiropractic Care' },
  { href: '/services/spinal-decompression', label: 'Spinal Decompression' },
  { href: '/services/massage-therapy', label: 'Massage Therapy' },
  { href: '/services/applied-kinesiology', label: 'Applied Kinesiology' },
  { href: '/services/back-pain-treatment', label: 'Back Pain Treatment' },
  { href: '/services/neck-pain-treatment', label: 'Neck Pain Treatment' },
  { href: '/services/sciatica-treatment', label: 'Sciatica Treatment' },
  { href: '/services/headaches-migraines', label: 'Headaches & Migraines' },
  { href: '/services/scoliosis-treatment', label: 'Scoliosis Treatment' },
  { href: '/services/pediatric-chiropractic', label: 'Pediatric Chiropractic' },
  { href: '/services/prenatal-chiropractic', label: 'Prenatal Chiropractic' },
  { href: '/services/carpal-tunnel-treatment', label: 'Carpal Tunnel Treatment' },
  { href: '/services/disc-injury-treatment', label: 'Disc Injury Treatment' },
  { href: '/services/whiplash-treatment', label: 'Whiplash Treatment' },
  { href: '/services/work-injury-treatment', label: 'Work Injury Treatment' },
  { href: '/services/vertigo-treatment', label: 'Vertigo Treatment' },
  { href: '/services/shoulder-pain-treatment', label: 'Shoulder Pain Treatment' },
  { href: '/services/arm-leg-pain', label: 'Arm & Leg Pain' },
  { href: '/services/wellness-care', label: 'Wellness Care' },
  { href: '/services/nutrition', label: 'Nutrition' },
  { href: '/services/weight-loss', label: 'Weight Loss' },
];

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/dr-brad', label: 'Dr. Brad' },
  { href: '/testimonials', label: 'Reviews' },
  { href: '/new-patients', label: 'New Patients' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const solid = !isHome || scrolled;
  const linkColor = solid ? 'var(--text-nav)' : 'rgba(255,255,255,0.9)';

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
        <Link href="/" className="flex items-center no-underline">
          <Image
            src={solid ? '/images/logo-scrolling.webp' : '/images/logo-header-white-green.webp'}
            alt="Back and Body Chiropractic Center"
            width={180}
            height={48}
            className="transition-opacity duration-[350ms]"
            style={{ height: 'auto', maxHeight: 44, width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {/* Services dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="font-semibold text-sm tracking-[0.3px] transition-colors duration-250 bg-transparent border-none cursor-pointer flex items-center gap-1"
              style={{ fontFamily: 'var(--font-heading)', color: linkColor }}
            >
              Services
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5l3 3 3-3" /></svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,.12)] py-3 w-[520px] grid grid-cols-2 gap-x-2 max-h-[70vh] overflow-y-auto">
                {serviceLinks.map((svc) => (
                  <Link
                    key={svc.href}
                    href={svc.href}
                    className="block px-5 py-2 text-sm text-text hover:bg-mint/10 hover:text-teal transition-colors no-underline"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    {svc.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="font-semibold text-sm tracking-[0.3px] no-underline transition-colors duration-250"
                style={{ fontFamily: 'var(--font-heading)', color: linkColor }}
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
            style={{ fontFamily: 'var(--font-heading)', color: solid ? 'var(--teal)' : 'var(--white)' }}
          >
            (586) 207-1624
          </a>
          <Link
            href="/schedule"
            className="font-bold text-[13px] px-[22px] py-2.5 rounded-lg no-underline transition-all duration-250 hover:-translate-y-px"
            style={{ fontFamily: 'var(--font-heading)', background: 'var(--mint)', color: 'var(--teal)' }}
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/[.98] shadow-lg py-5 px-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
          {/* Mobile services accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="font-semibold text-sm no-underline bg-transparent border-none cursor-pointer text-left flex items-center justify-between w-full"
            style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-nav)' }}
          >
            Services
            <svg className={`w-3 h-3 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 5l3 3 3-3" /></svg>
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col gap-1 pl-4 border-l-2 border-mint/20">
              {serviceLinks.map((svc) => (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="text-sm text-text/80 no-underline py-1.5 hover:text-teal transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {svc.label}
                </Link>
              ))}
            </div>
          )}
          {navLinks.map((link) => (
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
