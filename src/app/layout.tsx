import type { Metadata } from "next";
import { Raleway, Oxygen } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Back and Body Chiropractic Center | Shelby Township Chiropractor",
    template: "%s | Back and Body Chiropractic Center",
  },
  description:
    "No sales pitches. No crazy care plans. No gimmicks. Just honest heartfelt care. Dr. Brad Krawczyk -- $55 New Patient Special. Call (586) 207-1624. Shelby Township, MI chiropractor.",
  metadataBase: new URL("https://backandbodydoc.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Back and Body Chiropractic Center | Shelby Township Chiropractor",
    description:
      "Chiropractor in Shelby Township, MI. Dr. Brad Krawczyk -- 14+ years, 4.9-star rated. $55 New Patient Special. No sales pitches, no gimmicks. Call (586) 207-1624.",
    url: "https://backandbodydoc.com",
    siteName: "Back and Body Chiropractic Center",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Back and Body Chiropractic Center | Shelby Township Chiropractor",
    description:
      "Dr. Brad Krawczyk -- $55 New Patient Special. No sales pitches, no gimmicks. Call (586) 207-1624.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
    other: {
      "msvalidate.01": "BING_VERIFICATION_CODE",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Chiropractor",
  "@id": "https://backandbodydoc.com/#organization",
  name: "Back and Body Chiropractic Center",
  image: "https://backandbodydoc.com/images/clinic.jpg",
  telephone: "(586) 207-1624",
  email: "",
  url: "https://backandbodydoc.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "55130 Van Dyke Ave #25",
    addressLocality: "Shelby Charter Township",
    addressRegion: "MI",
    postalCode: "48316",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.6994733,
    longitude: -83.0322461,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "15:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=61587075946629",
    "https://backandbodydoc.com",
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "34",
    bestRating: "5",
  },
  founder: {
    "@type": "Person",
    name: "Dr. Bradley Krawczyk",
    jobTitle: "Doctor of Chiropractic",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Chiropractic Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Chiropractic Care" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Spinal Decompression" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massage Therapy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Back Pain Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Neck Pain Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Headache & Migraine Relief" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sciatica Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Disc Injury Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scoliosis Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pediatric Chiropractic" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Prenatal Chiropractic" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sports Medicine" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auto & Work Injury Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Whiplash Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Carpal Tunnel Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vertigo Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Shoulder Pain Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arm & Leg Pain Treatment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nutrition Counseling" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Weight Loss Program" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${oxygen.variable} antialiased`}>
        {/* Grain overlay */}
        <div className="grain">
          <svg width="100%" height="100%">
            <filter id="grain-filter">
              <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-filter)" />
          </svg>
        </div>

        <Navigation />
        <main>{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
