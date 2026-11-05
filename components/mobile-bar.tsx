import { WhatsAppLink } from "@/components/whatsapp-link";
import { cta } from "@/lib/site";

/** Persistent booking bar. Hidden from md up, where the header button takes over. */
export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-cream/95 p-3 backdrop-blur-md md:hidden">
      <WhatsAppLink className="w-full">{cta.book}</WhatsAppLink>
    </div>
  );
}
