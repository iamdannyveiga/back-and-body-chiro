import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self)",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Service pages: WordPress flat URLs -> Next.js /services/ routes
      { source: "/carpal-tunnel", destination: "/services/carpal-tunnel-treatment", permanent: true },
      { source: "/massage-therapy", destination: "/services/massage-therapy", permanent: true },
      { source: "/pregnancy", destination: "/services/prenatal-chiropractic", permanent: true },
      { source: "/arm-leg-pain", destination: "/services/arm-leg-pain", permanent: true },
      { source: "/wellness-care", destination: "/services/wellness-care", permanent: true },
      { source: "/shoulder-pain", destination: "/services/shoulder-pain-treatment", permanent: true },
      { source: "/sciatica", destination: "/services/sciatica-treatment", permanent: true },
      { source: "/spinal-decompression", destination: "/services/spinal-decompression", permanent: true },
      { source: "/vertigo", destination: "/services/vertigo-treatment", permanent: true },
      { source: "/back-pain", destination: "/services/back-pain-treatment", permanent: true },
      { source: "/headaches-migraines", destination: "/services/headaches-migraines", permanent: true },
      { source: "/neck-pain", destination: "/services/neck-pain-treatment", permanent: true },
      { source: "/scoliosis", destination: "/services/scoliosis-treatment", permanent: true },
      { source: "/disc-injury", destination: "/services/disc-injury-treatment", permanent: true },
      { source: "/work-injury", destination: "/services/work-injury-treatment", permanent: true },
      { source: "/chiropractic-care-kids", destination: "/services/pediatric-chiropractic", permanent: true },
      { source: "/nutrition", destination: "/services/nutrition", permanent: true },
      { source: "/weight-loss", destination: "/services/weight-loss", permanent: true },
      { source: "/whiplash", destination: "/services/whiplash-treatment", permanent: true },

      // Informational pages: WordPress -> Next.js restructured routes
      { source: "/chiropractor", destination: "/dr-brad", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/us", destination: "/about", permanent: true },
      { source: "/new-patient-paperwork", destination: "/new-patients", permanent: true },
      { source: "/review-us", destination: "/testimonials", permanent: true },
      { source: "/finding-a-chiropractor", destination: "/about", permanent: true },
      { source: "/office-tour", destination: "/about", permanent: true },
      { source: "/special", destination: "/schedule", permanent: true },
      { source: "/describe-your-concern", destination: "/schedule", permanent: true },
      { source: "/thank-you-form", destination: "/", permanent: true },

      // Legal pages: temporary redirect to homepage until legal section is built
      { source: "/good-faith-estimate", destination: "/", permanent: false },
      { source: "/hipaa-privacy-policy", destination: "/", permanent: false },
      { source: "/terms-service", destination: "/", permanent: false },
      { source: "/accessibility", destination: "/", permanent: false },
      { source: "/healthcare-disclaimer", destination: "/", permanent: false },
      { source: "/anti-discrimination", destination: "/", permanent: false },
      { source: "/privacy-policy", destination: "/", permanent: false },
      { source: "/ai-generated-content-disclaimer", destination: "/", permanent: false },

      // Blog: temporary redirect until blog is implemented
      { source: "/blog", destination: "/", permanent: false },
    ];
  },
};

export default nextConfig;
