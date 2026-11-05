"use client";

import { useEffect, useRef } from "react";

const photos = [
  {
    src: "/instagram/hadar-ido.jpg",
    alt: "הדר עם זר פרחים ביום החתונה",
  },
  {
    src: "/instagram/reel-garden.jpg",
    alt: "זוג יושב ליד סידור פרחים מול חופה מוארת",
  },
  {
    src: "/instagram/reel-kiss.jpg",
    alt: "זוג עם זר בלילה, מתחת לדגל",
  },
  {
    src: "/instagram/reel-crowd.jpg",
    alt: "האורחים ברחבה בלילה",
  },
] as const;

/** Glossy stills that appear in the space under the about heading. */
export function AboutPhotos() {
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const items = [...root.querySelectorAll<HTMLElement>(".photo-reveal")];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={listRef} className="photo-sequence">
      {photos.map((photo, index) => (
        <li
          key={photo.src}
          className="photo-reveal"
          style={{ transitionDelay: `${index * 110}ms` }}
        >
          <div className="crystal-slab">
            <img src={photo.src} alt={photo.alt} />
            <span className="crystal-sheen" aria-hidden />
          </div>
        </li>
      ))}
    </ul>
  );
}
