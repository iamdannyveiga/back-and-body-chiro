import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://backandbodydoc.com";

  const servicePages = [
    "chiropractic-care-shelby-township-mi",
    "spinal-decompression-shelby-township-mi",
    "softwave-therapy-shelby-township-mi",
    "massage-therapy-shelby-township-mi",
    "back-pain-treatment-shelby-township-mi",
    "neck-pain-treatment-shelby-township-mi",
    "headaches-migraines-shelby-township-mi",
    "sciatica-treatment-shelby-township-mi",
    "disc-injury-treatment-shelby-township-mi",
    "scoliosis-treatment-shelby-township-mi",
    "pediatric-chiropractic-shelby-township-mi",
    "prenatal-chiropractic-shelby-township-mi",
    "carpal-tunnel-treatment-shelby-township-mi",
    "whiplash-treatment-shelby-township-mi",
    "work-injury-treatment-shelby-township-mi",
    "vertigo-treatment-shelby-township-mi",
    "shoulder-pain-treatment-shelby-township-mi",
    "arm-leg-pain-shelby-township-mi",
    "wellness-care-shelby-township-mi",
    "nutrition-shelby-township-mi",
    "weight-loss-shelby-township-mi",
    "applied-kinesiology-shelby-township-mi",
  ];

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/dr-brad`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/new-patients`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/schedule-appointment`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/new-patient-paperwork`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  const serviceEntries = servicePages.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...serviceEntries];
}
