import { Section, SectionHeading } from "@/components/section";
import { testimonials, testimonialsSection } from "@/lib/site";

export function Testimonials() {
  return (
    <Section id="testimonials" tone="paper">
      <SectionHeading
        eyebrow={testimonialsSection.eyebrow}
        title={testimonialsSection.title}
        lede={testimonialsSection.lede}
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item) => (
          <li key={item.handle} className="border border-ink/10 bg-foam p-6 md:p-8">
            <blockquote className="font-serif text-2xl leading-9 text-ink">
              “{item.quote}”
            </blockquote>
            <p className="mt-6 text-sm text-ink-soft">
              תגובה באינסטגרם · <bdi dir="ltr">@{item.handle}</bdi>
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
