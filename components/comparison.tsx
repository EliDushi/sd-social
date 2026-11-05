import { Section, SectionHeading } from "@/components/section";
import { comparison } from "@/lib/site";

function Column({
  title,
  points,
  featured = false,
}: {
  title: string;
  points: readonly { label: string; value: string }[];
  featured?: boolean;
}) {
  return (
    <article
      className={`border p-6 md:p-8 ${
        featured ? "border-gold bg-paper shadow-[0_24px_60px_-40px_rgba(110,82,44,0.5)]" : "border-ink/10 bg-foam/60"
      }`}
    >
      <h3 className="text-3xl">{title}</h3>
      <dl className="mt-6 space-y-4">
        {points.map((point) => (
          <div key={point.label} className="border-t border-ink/10 pt-4">
            <dt className="text-xs tracking-[0.18em] text-gold-deep">{point.label}</dt>
            <dd className="mt-1 leading-7 text-ink">{point.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function Comparison() {
  return (
    <Section>
      <SectionHeading
        eyebrow={comparison.eyebrow}
        title={comparison.title}
        lede={
          <>
            {comparison.ledeBefore}
            <strong className="font-serif text-[1.15em] font-bold text-gold-deep">
              {comparison.ledeEmphasis}
            </strong>
            {comparison.ledeAfter}
          </>
        }
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <Column title={comparison.film.title} points={comparison.film.points} />
        <Column title={comparison.social.title} points={comparison.social.points} featured />
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-center leading-8 text-ink-soft">{comparison.note}</p>
    </Section>
  );
}
