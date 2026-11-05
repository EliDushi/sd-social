import type { ReactNode } from "react";
import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/lib/site";

export function WhatsAppLink({
  children,
  variant = "solid",
  className = "",
}: {
  children: ReactNode;
  variant?: "solid" | "ghost" | "text";
  className?: string;
}) {
  const styles = {
    solid: "bg-ink px-5 py-3 text-cream hover:bg-gold-deep",
    ghost: "border border-ink/15 bg-foam/70 px-5 py-3 text-ink hover:border-gold-deep",
    text: "text-gold-deep underline decoration-gold/50 underline-offset-4 hover:decoration-gold-deep",
  }[variant];

  return (
    <a
      href={whatsappHref()}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 text-sm transition ${styles} ${className}`}
    >
      {variant === "text" ? null : <MessageCircle className="size-4 shrink-0" aria-hidden />}
      {children}
    </a>
  );
}
