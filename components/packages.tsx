import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { cta, packages, packagesSection } from "@/lib/site";

export function Packages() {
  return (
    <Section id="packages">
      <SectionHeading
        eyebrow={packagesSection.eyebrow}
        title={packagesSection.title}
        lede={packagesSection.lede}
      />
      <ul className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
        {packages.map((pkg) => (
          <li
            key={pkg.id}
            className={pkg.featured ? "order-first lg:order-0" : undefined}
          >
            <article
              className={`relative flex h-full flex-col border p-6 md:p-8 ${
                pkg.featured
                  ? "border-gold bg-paper shadow-[0_28px_70px_-40px_rgba(110,82,44,0.55)]"
                  : "border-ink/10 bg-foam/70"
              }`}
            >
              {pkg.featured ? (
                <p className="absolute -top-3 start-6 bg-gold-deep px-3 py-1 text-[11px] tracking-[0.16em] text-cream">
                  הכי נבחר
                </p>
              ) : null}
              <p className="text-xs tracking-[0.18em] text-gold-deep">{pkg.hours}</p>
              <h3 className="mt-3 text-4xl">{pkg.name}</h3>
              <p className="mt-3 leading-7 text-ink-soft">{pkg.summary}</p>
              <p className="mt-6 font-serif text-4xl text-ink">
                <span className="text-base text-ink-soft">החל מ־</span>
                {pkg.price}
                <span className="text-lg"> ₪</span>
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center justify-center gap-2 text-center leading-7 md:items-start md:justify-start md:text-start">
                    <Check className="mt-1.5 size-4 shrink-0 text-gold-deep" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppLink
                variant={pkg.featured ? "solid" : "ghost"}
                className="mt-8 w-full"
              >
                {pkg.featured ? cta.book : cta.availability}
              </WhatsAppLink>
            </article>
          </li>
        ))}
      </ul>
      <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-7 text-ink-soft">
        {packagesSection.footnote}
      </p>
    </Section>
  );
}
