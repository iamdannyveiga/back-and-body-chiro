export async function GET() {
  const content = `# Back and Body Chiropractic Center

> Chiropractor in Shelby Charter Township, MI. Dr. Bradley Krawczyk, DC. Thorough diagnosis, personalized care, and real results — focused on your goals, not a prescribed plan.

## Contact
- Phone: (586) 207-1624
- Address: 55130 Van Dyke Ave #25, Shelby Charter Township, MI 48317
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
- SoftWave Therapy (FDA-cleared shockwave / tissue regeneration): /softwave-therapy-shelby-township-mi
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

## Appointment
- Book an appointment online: https://backandbodydoc.com/schedule-appointment
- Call to schedule an appointment: (586) 207-1624
- Walk-ins accepted when schedule permits
- New patient appointments include consultation, exam, and first adjustment for $67
- Most major insurance accepted; cash-pay options available

## FAQ
- What's the $67 new patient special? Consultation, exam, X-rays if needed, and first adjustment. No hidden fees.
- Do you require long-term care contracts? No. Dr. Brad recommends what he believes you need; you decide when to start and stop.
- Do you treat children and pregnant women? Yes. Gentle pediatric adjustments and Webster-style prenatal care.
- Do you accept insurance? Yes, most major plans. Call (586) 207-1624 to verify benefits.
- What is spinal decompression? Non-surgical traction therapy for bulging or herniated discs.
- What conditions do you treat? Back pain, neck pain, sciatica, headaches, disc injuries, whiplash, scoliosis, carpal tunnel, vertigo, work injuries, and general wellness.
- Where are you located? 55130 Van Dyke Ave Suite 25, Shelby Charter Township, MI 48317.
- What are your hours? Monday-Wednesday 9AM-1PM and 3PM-7PM; Thursday 9AM-1PM; Saturday 9AM-1PM.

## Pages
- Home: /
- About: /about
- Dr. Brad: /dr-brad
- New Patients: /new-patients
- Contact: /contact
- Schedule Appointment: /schedule-appointment
- Testimonials: /testimonials
- Leave a Review: /leave-a-review
- AI Information (structured facts): /ai-information
- FAQ (visits, pricing, insurance, treatments): /faq
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
