import { PhoneFrame } from "@/components/phone-frame";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { assurances, cta, hero, reels } from "@/lib/site";

export function Hero() {
  const featured = reels[2];
  const sideA = reels[3];
  const sideB = reels[0];

  return (
    <section id="top" className="px-5 pt-12 pb-16 md:px-8 md:pt-20 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="rise flex items-start justify-between gap-6">
          <div className="min-w-0">
          <p className="text-[11px] tracking-[0.28em] text-gold-deep">{hero.eyebrow}</p>
          <h1 className="mt-5 max-w-xl text-[2.35rem] leading-[1.3] md:text-5xl lg:text-[3.5rem] lg:leading-[1.25]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">{hero.lede}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink>{cta.book}</WhatsAppLink>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center border border-ink/15 bg-foam/70 px-5 py-3 text-sm transition hover:border-gold-deep"
            >
              {cta.portfolio}
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-ink/10 pt-6">
            {assurances.map((item) => (
              <div key={item.label}>
                <dt className="font-serif text-xl text-gold-deep md:text-2xl">{item.value}</dt>
                <dd className="mt-1 text-xs leading-5 text-ink-soft md:text-sm">{item.label}</dd>
              </div>
            ))}
          </dl>
          </div>
          <img
            src="/logo.jpg"
            alt="SD Social"
            className="h-28 w-28 shrink-0 object-cover shadow-[0_18px_40px_-24px_rgba(42,38,34,0.45)] md:h-36 md:w-36"
          />
        </div>

        <div className="rise relative mx-auto h-[340px] w-full max-w-md sm:h-[460px] md:h-[540px] md:max-w-lg">
          <PhoneFrame
            {...sideA}
            className="absolute top-12 left-0 w-[34%] -rotate-6 sm:top-16 sm:w-[158px]"
          />
          <PhoneFrame
            {...sideB}
            className="absolute top-14 right-0 w-[34%] rotate-6 sm:top-20 sm:w-[158px]"
          />
          <PhoneFrame
            {...featured}
            featured
            autoPlay
            className="absolute top-0 left-1/2 z-10 w-[52%] -translate-x-1/2 sm:w-[210px] md:w-[228px]"
          />
        </div>
      </div>
    </section>
  );
}
