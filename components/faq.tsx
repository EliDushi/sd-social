"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { faqSection, faqs } from "@/lib/site";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <SectionHeading eyebrow={faqSection.eyebrow} title={faqSection.title} />
      <div className="mx-auto mt-12 max-w-3xl border-t border-ink/10">
        {faqs.map((item, index) => {
          const expanded = open === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;
          return (
            <div key={item.q} className="border-b border-ink/10">
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-start font-serif text-xl leading-8 md:text-2xl"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? null : index)}
                >
                  {item.q}
                  <ChevronDown
                    className={`size-5 shrink-0 text-gold-deep transition ${expanded ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!expanded}
                className="pb-5 leading-8 text-ink-soft"
              >
                {item.a}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
