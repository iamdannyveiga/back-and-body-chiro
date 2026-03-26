import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
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
      // 301s: Old /services/ paths -> new geo-slugged root paths
      { source: "/services/chiropractic-care", destination: "/chiropractic-care-shelby-township-mi", permanent: true },
      { source: "/services/spinal-decompression", destination: "/spinal-decompression-shelby-township-mi", permanent: true },
      { source: "/services/massage-therapy", destination: "/massage-therapy-shelby-township-mi", permanent: true },
      { source: "/services/applied-kinesiology", destination: "/applied-kinesiology-shelby-township-mi", permanent: true },
      { source: "/services/back-pain-treatment", destination: "/back-pain-treatment-shelby-township-mi", permanent: true },
      { source: "/services/neck-pain-treatment", destination: "/neck-pain-treatment-shelby-township-mi", permanent: true },
      { source: "/services/sciatica-treatment", destination: "/sciatica-treatment-shelby-township-mi", permanent: true },
      { source: "/services/headaches-migraines", destination: "/headaches-migraines-shelby-township-mi", permanent: true },
      { source: "/services/scoliosis-treatment", destination: "/scoliosis-treatment-shelby-township-mi", permanent: true },
      { source: "/services/pediatric-chiropractic", destination: "/pediatric-chiropractic-shelby-township-mi", permanent: true },
      { source: "/services/prenatal-chiropractic", destination: "/prenatal-chiropractic-shelby-township-mi", permanent: true },
      { source: "/services/carpal-tunnel-treatment", destination: "/carpal-tunnel-treatment-shelby-township-mi", permanent: true },
      { source: "/services/disc-injury-treatment", destination: "/disc-injury-treatment-shelby-township-mi", permanent: true },
      { source: "/services/whiplash-treatment", destination: "/whiplash-treatment-shelby-township-mi", permanent: true },
      { source: "/services/work-injury-treatment", destination: "/work-injury-treatment-shelby-township-mi", permanent: true },
      { source: "/services/vertigo-treatment", destination: "/vertigo-treatment-shelby-township-mi", permanent: true },
      { source: "/services/shoulder-pain-treatment", destination: "/shoulder-pain-treatment-shelby-township-mi", permanent: true },
      { source: "/services/arm-leg-pain", destination: "/arm-leg-pain-shelby-township-mi", permanent: true },
      { source: "/services/wellness-care", destination: "/wellness-care-shelby-township-mi", permanent: true },
      { source: "/services/nutrition", destination: "/nutrition-shelby-township-mi", permanent: true },
      { source: "/services/weight-loss", destination: "/weight-loss-shelby-township-mi", permanent: true },

      // Old conditions path
      { source: "/conditions/back-pain", destination: "/back-pain-treatment-shelby-township-mi", permanent: true },

      // Old /schedule -> new /schedule-appointment
      { source: "/schedule", destination: "/schedule-appointment", permanent: true },

      // WordPress flat URLs -> geo-slugged paths
      { source: "/carpal-tunnel", destination: "/carpal-tunnel-treatment-shelby-township-mi", permanent: true },
      { source: "/pregnancy", destination: "/prenatal-chiropractic-shelby-township-mi", permanent: true },
      { source: "/shoulder-pain", destination: "/shoulder-pain-treatment-shelby-township-mi", permanent: true },
      { source: "/sciatica", destination: "/sciatica-treatment-shelby-township-mi", permanent: true },
      { source: "/vertigo", destination: "/vertigo-treatment-shelby-township-mi", permanent: true },
      { source: "/back-pain", destination: "/back-pain-treatment-shelby-township-mi", permanent: true },
      { source: "/neck-pain", destination: "/neck-pain-treatment-shelby-township-mi", permanent: true },
      { source: "/scoliosis", destination: "/scoliosis-treatment-shelby-township-mi", permanent: true },
      { source: "/disc-injury", destination: "/disc-injury-treatment-shelby-township-mi", permanent: true },
      { source: "/work-injury", destination: "/work-injury-treatment-shelby-township-mi", permanent: true },
      { source: "/chiropractic-care-kids", destination: "/pediatric-chiropractic-shelby-township-mi", permanent: true },
      { source: "/whiplash", destination: "/whiplash-treatment-shelby-township-mi", permanent: true },
      { source: "/headaches-migraines", destination: "/headaches-migraines-shelby-township-mi", permanent: true },
      { source: "/massage-therapy", destination: "/massage-therapy-shelby-township-mi", permanent: true },
      { source: "/arm-leg-pain", destination: "/arm-leg-pain-shelby-township-mi", permanent: true },
      { source: "/wellness-care", destination: "/wellness-care-shelby-township-mi", permanent: true },
      { source: "/spinal-decompression", destination: "/spinal-decompression-shelby-township-mi", permanent: true },
      { source: "/nutrition", destination: "/nutrition-shelby-township-mi", permanent: true },
      { source: "/weight-loss", destination: "/weight-loss-shelby-township-mi", permanent: true },

      // Informational pages: WordPress -> Next.js restructured routes
      { source: "/chiropractor", destination: "/dr-brad", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/us", destination: "/about", permanent: true },
      { source: "/new-patient-paperwork", destination: "/new-patients", permanent: true },
      { source: "/review-us", destination: "/testimonials", permanent: true },
      { source: "/finding-a-chiropractor", destination: "/about", permanent: true },
      { source: "/office-tour", destination: "/about", permanent: true },
      { source: "/special", destination: "/schedule-appointment", permanent: true },
      { source: "/describe-your-concern", destination: "/schedule-appointment", permanent: true },
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
