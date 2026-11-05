import type { ReactNode } from "react";

export function Section({
  id,
  children,
  tone = "plain",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: "plain" | "paper";
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`px-5 py-20 md:px-8 md:py-28 ${tone === "paper" ? "bg-paper/80" : ""} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  align?: "center" | "start";
}) {
  const centered = align === "center";
  return (
    <header className={centered ? "mx-auto max-w-2xl text-center" : "max-w-xl text-start"}>
      <p className="text-[11px] tracking-[0.28em] text-gold-deep">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-tight text-ink md:text-5xl">{title}</h2>
      {lede ? <p className="mt-5 text-lg leading-8 text-ink-soft">{lede}</p> : null}
      <span
        className={`mt-6 block h-px w-16 bg-gold ${centered ? "mx-auto" : ""}`}
        aria-hidden
      />
    </header>
  );
}
