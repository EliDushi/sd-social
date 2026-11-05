import { Section, SectionHeading } from "@/components/section";
import { moments, momentsSection } from "@/lib/site";

export function Moments() {
  return (
    <Section id="moments" tone="paper">
      <SectionHeading
        eyebrow={momentsSection.eyebrow}
        title={momentsSection.title}
        lede={momentsSection.lede}
      />
      <ol className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
        {moments.map((moment) => (
          <li key={moment.n} className="bg-paper p-5 md:p-6">
            <p className="font-serif text-sm text-gold">{moment.n}</p>
            <h3 className="mt-3 text-2xl">{moment.title}</h3>
            <p className="mt-3 text-sm leading-7 text-ink-soft">{moment.text}</p>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-ink-soft">
        {momentsSection.note}
      </p>
    </Section>
  );
}
