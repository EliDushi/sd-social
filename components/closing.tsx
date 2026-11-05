import { WhatsAppLink } from "@/components/whatsapp-link";
import { closing, cta } from "@/lib/site";

export function Closing() {
  return (
    <section id="contact" className="px-5 pb-6 md:px-8">
      <div className="mx-auto max-w-6xl border border-gold/50 p-2">
        <div className="border border-gold/40 bg-paper px-6 py-16 text-center md:px-16 md:py-24">
          <p className="text-[11px] tracking-[0.28em] text-gold-deep">{closing.eyebrow}</p>
          <h2 className="mt-4 text-5xl md:text-6xl">{closing.title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ink-soft">{closing.text}</p>
          <WhatsAppLink className="mt-8">{cta.book}</WhatsAppLink>
        </div>
      </div>
    </section>
  );
}
