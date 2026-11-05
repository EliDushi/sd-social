import { PhoneFrame } from "@/components/phone-frame";
import { Section, SectionHeading } from "@/components/section";
import { portfolioSection, reels, site } from "@/lib/site";

export function Portfolio() {
  return (
    <Section id="portfolio">
      <SectionHeading
        eyebrow={portfolioSection.eyebrow}
        title={portfolioSection.title}
        lede={portfolioSection.lede}
      />

      <ul className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {reels.map((reel) => (
          <li key={reel.id}>
            <PhoneFrame {...reel} autoPlay={reel.featured} featured={reel.featured} />
          </li>
        ))}
      </ul>

      <a
        href={site.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 block text-center text-sm text-gold-deep underline decoration-gold/40 underline-offset-4"
      >
        כל הרילסים אצל <bdi dir="ltr">{site.handle}</bdi>
      </a>
    </Section>
  );
}
