import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="bg-teal border-t border-white/[.06] pt-20 pb-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-8 xl:gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/images/logo-header-white-green.webp"
                alt="Back and Body Chiropractic Center"
                width={260}
                height={100}
                className="h-[44px] w-auto"
              />
            </div>
            <p className="text-sm text-text-light/50 leading-relaxed mb-5">
              Serving Macomb &amp; Oakland Counties since 2011. No sales pitches. No crazy care plans. Just honest heartfelt care.
            </p>
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=61587075946629"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/[.06] hover:bg-mint/20 transition-colors"
              >
                <FacebookIcon className="w-4 h-4 fill-text-light" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <div className="font-bold text-[13px] text-text-light tracking-[1.5px] uppercase mb-5" style={{ fontFamily: 'var(--font-heading)' }}>Services</div>
            <ul className="list-none p-0 m-0">
              {[
                { href: '/chiropractic-care-shelby-township-mi', label: 'Chiropractic Care' },
                { href: '/spinal-decompression-shelby-township-mi', label: 'Spinal Decompression' },
                { href: '/massage-therapy-shelby-township-mi', label: 'Massage Therapy' },
                { href: '/applied-kinesiology-shelby-township-mi', label: 'Applied Kinesiology' },
                { href: '/pediatric-chiropractic-shelby-township-mi', label: 'Pediatric & Prenatal' },
                { href: '/nutrition-shelby-township-mi', label: 'Nutrition & Weight Loss' },
                { href: '/back-pain-treatment-shelby-township-mi', label: 'Back Pain Treatment' },
              ].map((item) => (
                <li key={item.label} className="mb-2.5">
                  <Link href={item.href} className="text-sm text-text-light/[.55] no-underline hover:text-mint transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-bold text-[13px] text-text-light tracking-[1.5px] uppercase mb-5" style={{ fontFamily: 'var(--font-heading)' }}>Quick Links</div>
            <ul className="list-none p-0 m-0">
              {[
                { href: '/about', label: 'About Dr. Brad' },
                { href: '/dr-brad', label: 'Meet Dr. Brad' },
                { href: '/testimonials', label: 'Patient Reviews' },
                { href: '/new-patients', label: 'New Patients' },
                { href: '/contact', label: 'Contact' },
                { href: '/schedule-appointment', label: 'Book Online' },
              ].map((item) => (
                <li key={item.label} className="mb-2.5">
                  <Link href={item.href} className="text-sm text-text-light/[.55] no-underline hover:text-mint transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold text-[13px] text-text-light tracking-[1.5px] uppercase mb-5" style={{ fontFamily: 'var(--font-heading)' }}>Contact</div>
            <p className="text-sm text-text-light/[.55] mb-2">
              <a href="tel:5862071624" className="text-mint font-bold no-underline hover:text-mint-dark">(586) 207-1624</a>
            </p>
            <p className="text-sm text-text-light/[.55] mb-2 leading-relaxed">
              55130 Van Dyke Ave #25<br />Shelby Charter Township, MI 48317
            </p>
            <p className="text-xs text-text-light/[.4] mb-4">In Vince and Joe&apos;s plaza at 25 Mile &amp; Van Dyke</p>
            <div className="mt-4">
              <div className="font-bold text-[13px] text-text-light tracking-[1.5px] uppercase mb-2.5" style={{ fontFamily: 'var(--font-heading)' }}>Hours</div>
              <div className="text-[13px] text-text-light/50 leading-[1.8]">
                <span className="text-text-light/70">Mon:</span> 9am-1pm, 3-7pm<br />
                <span className="text-text-light/70">Tue:</span> 9am-1pm, 3-7pm<br />
                <span className="text-text-light/70">Wed:</span> 9am-1pm, 3-7pm<br />
                <span className="text-text-light/70">Thu:</span> 9am-1pm<br />
                <span className="text-text-light/70">Fri:</span> Closed<br />
                <span className="text-text-light/70">Sat:</span> 9am-1pm<br />
                <span className="text-text-light/70">Sun:</span> Closed
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[.06] pt-7 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-text-light/[.35]">
            &copy; {new Date().getFullYear()} Back and Body Chiropractic Center &middot; Dr. Bradley Krawczyk, D.C.
          </p>
          <p className="text-[13px] text-text-light/[.35]">
            55130 Van Dyke Ave #25, Shelby Charter Township, MI 48317
          </p>
        </div>
      </div>
    </footer>
  );
}
