export async function GET() {
  const content = `# Back and Body Chiropractic Center

> Chiropractor in Shelby Charter Township, MI. Dr. Bradley Krawczyk, DC. No sales pitches, no gimmicks -- just honest care focused on results.

## Contact
- Phone: (586) 207-1624
- Address: 55130 Van Dyke Ave #25, Shelby Charter Township, MI 48316
- Website: https://backandbodydoc.com
- New Patient Special: $55

## Hours
- Monday-Wednesday: 9AM-1PM & 3PM-7PM
- Thursday: 9AM-1PM
- Saturday: 9AM-1PM

## About Dr. Brad
Dr. Bradley Krawczyk earned his BS in Kinesiology from Michigan State University and his Doctor of Chiropractic from Life University (2011). 14+ years of experience. 4.9-star Google rating.

## Services
- Chiropractic Care: /services/chiropractic-care
- Spinal Decompression: /services/spinal-decompression
- Massage Therapy: /services/massage-therapy
- Applied Kinesiology: /services/applied-kinesiology
- Back Pain Treatment: /services/back-pain-treatment
- Neck Pain Treatment: /services/neck-pain-treatment
- Sciatica Treatment: /services/sciatica-treatment
- Headaches & Migraines: /services/headaches-migraines
- Scoliosis Treatment: /services/scoliosis-treatment
- Pediatric Chiropractic: /services/pediatric-chiropractic
- Prenatal Chiropractic: /services/prenatal-chiropractic
- Disc Injury Treatment: /services/disc-injury-treatment
- Whiplash Treatment: /services/whiplash-treatment
- Carpal Tunnel Treatment: /services/carpal-tunnel-treatment
- Vertigo Treatment: /services/vertigo-treatment
- Shoulder Pain Treatment: /services/shoulder-pain-treatment
- Arm & Leg Pain: /services/arm-leg-pain
- Work Injury Treatment: /services/work-injury-treatment
- Wellness Care: /services/wellness-care
- Nutrition: /services/nutrition
- Weight Loss: /services/weight-loss

## Pages
- Home: /
- About: /about
- Dr. Brad: /dr-brad
- New Patients: /new-patients
- Contact: /contact
- Schedule: /schedule
- Testimonials: /testimonials
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
