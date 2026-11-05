import { AboutPhotos } from "@/components/about-photos";
import { Section, SectionHeading } from "@/components/section";
import { about } from "@/lib/site";

export function About() {
  return (
    <Section id="about" tone="paper">
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading eyebrow={about.eyebrow} title={about.title} align="start" />
        <div className="space-y-5 text-lg leading-8 text-ink-soft">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="border-s-2 border-gold ps-5 font-serif text-2xl leading-9 text-ink">
            אתם האורחים. אני על הטלפון.
          </p>
        </div>
      </div>
      <AboutPhotos />
    </Section>
  );
}
