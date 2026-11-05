export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      className={`grid size-11 shrink-0 place-items-center border border-gold/70 font-serif text-sm font-bold tracking-[0.08em] text-gold-deep ${className}`}
      aria-hidden
    >
      SD
    </span>
  );
}
