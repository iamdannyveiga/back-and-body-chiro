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
      { source: "/services/chiropractic-care", destination: "/chiropractic-care-shelby-township-mi", statusCode: 301 },
      { source: "/services/spinal-decompression", destination: "/spinal-decompression-shelby-township-mi", statusCode: 301 },
      { source: "/services/massage-therapy", destination: "/massage-therapy-shelby-township-mi", statusCode: 301 },
      { source: "/services/applied-kinesiology", destination: "/applied-kinesiology-shelby-township-mi", statusCode: 301 },
      { source: "/services/back-pain-treatment", destination: "/back-pain-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/neck-pain-treatment", destination: "/neck-pain-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/sciatica-treatment", destination: "/sciatica-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/headaches-migraines", destination: "/headaches-migraines-shelby-township-mi", statusCode: 301 },
      { source: "/services/scoliosis-treatment", destination: "/scoliosis-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/pediatric-chiropractic", destination: "/pediatric-chiropractic-shelby-township-mi", statusCode: 301 },
      { source: "/services/prenatal-chiropractic", destination: "/prenatal-chiropractic-shelby-township-mi", statusCode: 301 },
      { source: "/services/carpal-tunnel-treatment", destination: "/carpal-tunnel-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/disc-injury-treatment", destination: "/disc-injury-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/whiplash-treatment", destination: "/whiplash-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/work-injury-treatment", destination: "/work-injury-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/vertigo-treatment", destination: "/vertigo-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/shoulder-pain-treatment", destination: "/shoulder-pain-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/services/arm-leg-pain", destination: "/arm-leg-pain-shelby-township-mi", statusCode: 301 },
      { source: "/services/wellness-care", destination: "/wellness-care-shelby-township-mi", statusCode: 301 },
      { source: "/services/nutrition", destination: "/nutrition-shelby-township-mi", statusCode: 301 },
      { source: "/services/weight-loss", destination: "/weight-loss-shelby-township-mi", statusCode: 301 },

      // Old conditions path
      { source: "/conditions/back-pain", destination: "/back-pain-treatment-shelby-township-mi", statusCode: 301 },

      // Old /schedule -> new /schedule-appointment
      { source: "/schedule", destination: "/schedule-appointment", statusCode: 301 },

      // WordPress flat URLs -> geo-slugged paths
      { source: "/carpal-tunnel", destination: "/carpal-tunnel-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/pregnancy", destination: "/prenatal-chiropractic-shelby-township-mi", statusCode: 301 },
      { source: "/shoulder-pain", destination: "/shoulder-pain-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/sciatica", destination: "/sciatica-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/vertigo", destination: "/vertigo-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/back-pain", destination: "/back-pain-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/neck-pain", destination: "/neck-pain-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/scoliosis", destination: "/scoliosis-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/disc-injury", destination: "/disc-injury-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/work-injury", destination: "/work-injury-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/chiropractic-care-kids", destination: "/pediatric-chiropractic-shelby-township-mi", statusCode: 301 },
      { source: "/whiplash", destination: "/whiplash-treatment-shelby-township-mi", statusCode: 301 },
      { source: "/headaches-migraines", destination: "/headaches-migraines-shelby-township-mi", statusCode: 301 },
      { source: "/massage-therapy", destination: "/massage-therapy-shelby-township-mi", statusCode: 301 },
      { source: "/arm-leg-pain", destination: "/arm-leg-pain-shelby-township-mi", statusCode: 301 },
      { source: "/wellness-care", destination: "/wellness-care-shelby-township-mi", statusCode: 301 },
      { source: "/spinal-decompression", destination: "/spinal-decompression-shelby-township-mi", statusCode: 301 },
      { source: "/nutrition", destination: "/nutrition-shelby-township-mi", statusCode: 301 },
      { source: "/weight-loss", destination: "/weight-loss-shelby-township-mi", statusCode: 301 },

      // Informational pages: WordPress -> Next.js restructured routes
      { source: "/chiropractor", destination: "/dr-brad", statusCode: 301 },
      { source: "/contact-us", destination: "/contact", statusCode: 301 },
      { source: "/us", destination: "/about", statusCode: 301 },
      // /new-patient-paperwork now has its own page -- no redirect needed
      { source: "/review-us", destination: "/testimonials", statusCode: 301 },
      { source: "/finding-a-chiropractor", destination: "/about", statusCode: 301 },
      { source: "/office-tour", destination: "/about", statusCode: 301 },
      { source: "/special", destination: "/schedule-appointment", statusCode: 301 },
      { source: "/describe-your-concern", destination: "/schedule-appointment", statusCode: 301 },
      { source: "/thank-you-form", destination: "/", statusCode: 301 },

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
