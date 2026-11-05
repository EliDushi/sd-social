"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

/** Vertical frame filled with a real reel from @sd_social1. */
export function PhoneFrame({
  title,
  subtitle,
  href,
  poster,
  video,
  featured = false,
  autoPlay = false,
  className = "",
}: {
  id?: string;
  title: string;
  subtitle?: string;
  href: string;
  poster: string;
  video: string;
  featured?: boolean;
  autoPlay?: boolean;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    setReduceMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const shouldAutoPlay = autoPlay && !reduceMotion;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block ${className}`}
      onMouseEnter={() => {
        if (!reduceMotion) void videoRef.current?.play();
      }}
      onMouseLeave={() => {
        const node = videoRef.current;
        if (!node || shouldAutoPlay) return;
        node.pause();
        node.currentTime = 0;
      }}
    >
      <span
        className={`relative block aspect-[9/16] overflow-hidden rounded-[1.7rem] border bg-ink ${
          featured
            ? "border-gold shadow-[0_30px_70px_-36px_rgba(42,38,34,0.55)]"
            : "border-ink/15 shadow-[0_20px_50px_-36px_rgba(42,38,34,0.4)]"
        }`}
      >
        <video
          ref={videoRef}
          src={video}
          poster={poster}
          muted
          loop
          playsInline
          autoPlay={shouldAutoPlay}
          preload={shouldAutoPlay ? "auto" : "metadata"}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span
          className="absolute top-3 left-1/2 z-10 h-1.5 w-10 -translate-x-1/2 rounded-full bg-cream/70"
          aria-hidden
        />
        <span
          className={`absolute top-1/2 left-1/2 z-10 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/40 bg-ink/35 text-cream transition duration-300 group-hover:opacity-0 ${
            shouldAutoPlay ? "opacity-0" : ""
          }`}
        >
          <Play className="size-5 fill-cream" aria-hidden />
        </span>
        <span className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-ink/70 to-transparent px-4 pt-16 pb-4 text-cream">
          <span className="block font-serif text-lg leading-none">{title}</span>
          {subtitle ? (
            <span className="mt-2 block text-xs tracking-wide text-cream/85">{subtitle}</span>
          ) : null}
        </span>
      </span>
    </a>
  );
}
