import { Phone } from "lucide-react";
import { displayPhone, footer, nav, phoneHref, site } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  const tel = phoneHref();
  const phone = displayPhone();

  return (
    <footer className="px-5 pt-16 pb-28 md:px-8 md:pb-12">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-ink/10 pt-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt=""
              width={128}
              height={128}
              className="size-16 shrink-0 object-cover"
            />
            <span>
              <span className="block font-serif text-xl leading-none font-bold">{site.brand}</span>
              <span className="mt-1 block text-sm text-ink-soft">
                <bdi dir="ltr">{site.handle}</bdi>
              </span>
            </span>
          </a>
          <p className="mt-5 max-w-sm leading-7 text-ink-soft">{footer.blurb}</p>
        </div>

        <nav aria-label="תחתית">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm text-ink-soft hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col items-start gap-3">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-gold-deep"
          >
            <InstagramMark />
            אינסטגרם <bdi dir="ltr">{site.handle}</bdi>
          </a>
          <WhatsAppLink variant="text">וואטסאפ</WhatsAppLink>
          {tel && phone ? (
            <a href={tel} className="inline-flex items-center gap-2 text-sm hover:text-gold-deep">
              <Phone className="size-4" aria-hidden />
              {phone}
            </a>
          ) : null}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-ink-soft">
        © 2026 {footer.rights}
      </p>
    </footer>
  );
}
