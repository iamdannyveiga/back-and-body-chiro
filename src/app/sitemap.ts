import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://backandbodydoc.com";

  const servicePages = [
    "chiropractic-care",
    "spinal-decompression",
    "massage-therapy",
    "back-pain-treatment",
    "neck-pain-treatment",
    "headaches-migraines",
    "sciatica-treatment",
    "disc-injury-treatment",
    "scoliosis-treatment",
    "pediatric-chiropractic",
    "prenatal-chiropractic",
    "carpal-tunnel-treatment",
    "whiplash-treatment",
    "work-injury-treatment",
    "vertigo-treatment",
    "shoulder-pain-treatment",
    "arm-leg-pain",
    "wellness-care",
    "nutrition",
    "weight-loss",
    "applied-kinesiology",
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
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/conditions/back-pain`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  const serviceEntries = servicePages.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...serviceEntries];
}
