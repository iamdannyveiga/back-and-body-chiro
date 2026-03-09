const BUSINESS = {
  name: 'Back and Body Chiropractic Center',
  phone: '(586) 207-1624',
  phonePlain: '5862071624',
  url: 'https://backandbodydoc.com',
  street: '55130 Van Dyke Ave #25',
  city: 'Shelby Charter Township',
  state: 'MI',
  zip: '48316',
  lat: 42.6994733,
  lng: -83.0322461,
  doctor: 'Dr. Bradley Krawczyk',
  doctorTitle: 'Doctor of Chiropractic',
  rating: '4.9',
  reviewCount: '34',
} as const;

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Chiropractor',
    '@id': `${BUSINESS.url}/#organization`,
    name: BUSINESS.name,
    image: `${BUSINESS.url}/images/clinic.jpg`,
    telephone: BUSINESS.phone,
    url: BUSINESS.url,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.street,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.lat,
      longitude: BUSINESS.lng,
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'], opens: '09:00', closes: '13:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'], opens: '15:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Thursday', opens: '09:00', closes: '13:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61587075946629',
      BUSINESS.url,
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: '5',
    },
    founder: {
      '@type': 'Person',
      name: BUSINESS.doctor,
      jobTitle: BUSINESS.doctorTitle,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Chiropractic Services',
      itemListElement: [
        'Chiropractic Care', 'Spinal Decompression', 'Massage Therapy',
        'Back Pain Treatment', 'Neck Pain Treatment', 'Headache & Migraine Relief',
        'Sciatica Treatment', 'Disc Injury Treatment', 'Scoliosis Treatment',
        'Pediatric Chiropractic', 'Prenatal Chiropractic', 'Sports Medicine',
        'Auto & Work Injury Treatment', 'Whiplash Treatment', 'Carpal Tunnel Treatment',
        'Vertigo Treatment', 'Shoulder Pain Treatment', 'Arm & Leg Pain Treatment',
        'Nutrition Counseling', 'Weight Loss Program',
      ].map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };
}

export function breadcrumbSchema(items: { name: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.href ? { item: `${BUSINESS.url}${item.href}` } : {}),
    })),
  };
}

export function serviceSchema(serviceName: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    url: `${BUSINESS.url}/services/${slug}`,
    provider: {
      '@type': 'Chiropractor',
      '@id': `${BUSINESS.url}/#organization`,
      name: BUSINESS.name,
    },
    areaServed: {
      '@type': 'City',
      name: BUSINESS.city,
    },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
