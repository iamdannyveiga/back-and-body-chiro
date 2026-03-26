export async function GET() {
  const content = `# Back and Body Chiropractic Center

> Chiropractor in Shelby Charter Township, MI. Dr. Bradley Krawczyk, DC. No sales pitches, no gimmicks -- just honest care focused on results.

## Contact
- Phone: (586) 486-5235
- Address: 55130 Van Dyke Avenue, Shelby Charter Township, MI 48316
- Website: https://backandbodydoc.com
- New Patient Special: $67

## Hours
- Monday-Wednesday: 9AM-1PM & 3PM-7PM
- Thursday: 9AM-1PM
- Saturday: 9AM-1PM

## About Dr. Brad
Dr. Bradley Krawczyk earned his BS in Kinesiology from Michigan State University and his Doctor of Chiropractic from Life University (2011). 14+ years of experience. 4.9-star Google rating.

## Services
- Chiropractic Care: /chiropractic-care-shelby-township-mi
- Spinal Decompression: /spinal-decompression-shelby-township-mi
- Massage Therapy: /massage-therapy-shelby-township-mi
- Applied Kinesiology: /applied-kinesiology-shelby-township-mi
- Back Pain Treatment: /back-pain-treatment-shelby-township-mi
- Neck Pain Treatment: /neck-pain-treatment-shelby-township-mi
- Sciatica Treatment: /sciatica-treatment-shelby-township-mi
- Headaches & Migraines: /headaches-migraines-shelby-township-mi
- Scoliosis Treatment: /scoliosis-treatment-shelby-township-mi
- Pediatric Chiropractic: /pediatric-chiropractic-shelby-township-mi
- Prenatal Chiropractic: /prenatal-chiropractic-shelby-township-mi
- Disc Injury Treatment: /disc-injury-treatment-shelby-township-mi
- Whiplash Treatment: /whiplash-treatment-shelby-township-mi
- Carpal Tunnel Treatment: /carpal-tunnel-treatment-shelby-township-mi
- Vertigo Treatment: /vertigo-treatment-shelby-township-mi
- Shoulder Pain Treatment: /shoulder-pain-treatment-shelby-township-mi
- Arm & Leg Pain: /arm-leg-pain-shelby-township-mi
- Work Injury Treatment: /work-injury-treatment-shelby-township-mi
- Wellness Care: /wellness-care-shelby-township-mi
- Nutrition: /nutrition-shelby-township-mi
- Weight Loss: /weight-loss-shelby-township-mi

## Pages
- Home: /
- About: /about
- Dr. Brad: /dr-brad
- New Patients: /new-patients
- Contact: /contact
- Schedule: /schedule-appointment
- Testimonials: /testimonials
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
