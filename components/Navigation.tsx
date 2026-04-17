'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MenuIcon, XIcon } from './Icons';

const serviceGroups = [
  {
    title: 'Core Services',
    links: [
      { href: '/chiropractic-care-shelby-township-mi', label: 'Chiropractic Care' },
      { href: '/spinal-decompression-shelby-township-mi', label: 'Spinal Decompression' },
      { href: '/softwave-therapy-shelby-township-mi', label: 'SoftWave Therapy' },
      { href: '/massage-therapy-shelby-township-mi', label: 'Massage Therapy' },
      { href: '/applied-kinesiology-shelby-township-mi', label: 'Applied Kinesiology' },
      { href: '/pediatric-chiropractic-shelby-township-mi', label: 'Pediatric Chiropractic' },
      { href: '/prenatal-chiropractic-shelby-township-mi', label: 'Prenatal Chiropractic' },
    ],
  },
  {
    title: 'Conditions We Treat',
    links: [
      { href: '/back-pain-treatment-shelby-township-mi', label: 'Back Pain' },
      { href: '/neck-pain-treatment-shelby-township-mi', label: 'Neck Pain' },
      { href: '/sciatica-treatment-shelby-township-mi', label: 'Sciatica' },
      { href: '/headaches-migraines-shelby-township-mi', label: 'Headaches & Migraines' },
      { href: '/scoliosis-treatment-shelby-township-mi', label: 'Scoliosis' },
      { href: '/disc-injury-treatment-shelby-township-mi', label: 'Disc Injuries' },
      { href: '/shoulder-pain-treatment-shelby-township-mi', label: 'Shoulder Pain' },
      { href: '/arm-leg-pain-shelby-township-mi', label: 'Arm & Leg Pain' },
      { href: '/carpal-tunnel-treatment-shelby-township-mi', label: 'Carpal Tunnel' },
      { href: '/whiplash-treatment-shelby-township-mi', label: 'Whiplash' },
      { href: '/vertigo-treatment-shelby-township-mi', label: 'Vertigo' },
      { href: '/work-injury-treatment-shelby-township-mi', label: 'Work Injuries' },
    ],
  },
  {
    title: 'Wellness',
    links: [
      { href: '/wellness-care-shelby-township-mi', label: 'Wellness Care' },
      { href: '/nutrition-shelby-township-mi', label: 'Nutrition' },
      { href: '/weight-loss-shelby-township-mi', label: 'Weight Loss' },
    ],
  },
];

const allServiceLinks = serviceGroups.flatMap((g) => g.links);

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
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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

  const showDropdown = () => {
    if (hideTimer.current) { clearTimeout(hideTimer.current); hideTimer.current = null; }
    setServicesOpen(true);
  };
  const scheduleHide = () => {
    hideTimer.current = setTimeout(() => setServicesOpen(false), 200);
  };

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
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <Image
            src={solid ? '/images/logo-scrolling.webp' : '/images/logo-header-white-green.webp'}
            alt="Back and Body Chiropractic Center"
            width={solid ? 160 : 260}
            height={solid ? 60 : 100}
            className="transition-opacity duration-[350ms] h-[52px] w-auto"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8 list-none">
          {/* Services dropdown */}
          <li ref={dropdownRef} className="relative" onMouseEnter={showDropdown} onMouseLeave={scheduleHide}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="font-semibold text-sm tracking-[0.3px] transition-colors duration-250 bg-transparent border-none cursor-pointer flex items-center gap-1.5"
              style={{ fontFamily: 'var(--font-heading)', color: linkColor }}
            >
              Services
              <svg className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5l3 3 3-3" /></svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-3 bg-white rounded-xl shadow-[0_8px_32px_rgba(0,0,0,.12)] p-6 flex gap-8 min-w-[600px]" onMouseEnter={showDropdown} onMouseLeave={scheduleHide}>
                {serviceGroups.map((group) => (
                  <div key={group.title} className="flex-1 min-w-0">
                    <div
                      className="text-[11px] font-semibold tracking-[1.5px] uppercase mb-3 pb-2 border-b border-border"
                      style={{ fontFamily: 'var(--font-heading)', color: 'var(--teal)' }}
                    >
                      {group.title}
                    </div>
                    {group.links.map((svc) => (
                      <Link
                        key={svc.href}
                        href={svc.href}
                        className="block py-[5px] px-2 -mx-2 rounded text-[13px] no-underline transition-all duration-150 hover:bg-[rgba(94,210,153,.1)]"
                        style={{ fontFamily: 'var(--font-heading)', color: '#555' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#213540')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                      >
                        {svc.label}
                      </Link>
                    ))}
                  </div>
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
            href="/schedule-appointment"
            className="font-bold text-[13px] px-[22px] py-2.5 rounded-lg no-underline transition-all duration-250 hover:-translate-y-px"
            style={{ fontFamily: 'var(--font-heading)', background: 'var(--mint)', color: 'var(--teal)' }}
          >
            Book Your $67 Visit
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
            <svg className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5l3 3 3-3" /></svg>
          </button>
          {mobileServicesOpen && (
            <div className="flex flex-col gap-1 pl-4 border-l-2 border-mint/20">
              {serviceGroups.map((group) => (
                <div key={group.title}>
                  <div className="text-[10px] font-semibold tracking-[1.5px] uppercase mt-3 mb-1 text-teal/50" style={{ fontFamily: 'var(--font-heading)' }}>
                    {group.title}
                  </div>
                  {group.links.map((svc) => (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="block text-sm text-text/80 no-underline py-1.5 hover:text-teal transition-colors"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {svc.label}
                    </Link>
                  ))}
                </div>
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
          <Link href="/schedule-appointment" className="btn btn--mint text-center justify-center">
            Book Your $67 Visit
          </Link>
        </div>
      )}
    </nav>
  );
}
