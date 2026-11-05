import { Clapperboard, FolderOpen, Handshake, Smartphone } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { services, servicesSection } from "@/lib/site";

const icons = {
  stories: Smartphone,
  reels: Clapperboard,
  raw: FolderOpen,
  together: Handshake,
} as const;

export function Services() {
  return (
    <Section id="services" tone="paper">
      <SectionHeading
        eyebrow={servicesSection.eyebrow}
        title={servicesSection.title}
        lede={servicesSection.lede}
      />
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <li key={service.title} className="border border-ink/10 bg-foam p-6 md:p-8">
              <Icon className="size-5 text-gold-deep" aria-hidden />
              <h3 className="mt-5 text-3xl">{service.title}</h3>
              <p className="mt-3 leading-8 text-ink-soft">{service.text}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
