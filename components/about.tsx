import { AboutPhotos } from "@/components/about-photos";
import { Section, SectionHeading } from "@/components/section";
import { about } from "@/lib/site";

export function About() {
  return (
    <Section id="about" tone="paper">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16">
        <div className="min-w-0">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} align="start" />
          <AboutPhotos />
        </div>
        <div className="min-w-0 space-y-5 text-lg leading-8 text-ink-soft">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="border-s-2 border-gold ps-5 font-serif text-2xl leading-9 text-ink">
            אתם האורחים. אני על הטלפון.
          </p>
        </div>
      </div>
    </Section>
  );
}
