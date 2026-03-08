'use client';

import { useState } from 'react';
import { PlusMinusIcon } from './Icons';

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="max-w-[820px] mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {items.map((item, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
          <div
            className="faq-q"
            role="button"
            tabIndex={0}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenIndex(openIndex === i ? null : i); } }}
          >
            {item.question}
            <div className="faq-q__icon">
              <PlusMinusIcon />
            </div>
          </div>
          <div className="faq-a">
            <div className="faq-a__inner">{item.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
