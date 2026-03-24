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
      </body>
    </html>
  );
}
