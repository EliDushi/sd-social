"use client";

import { useRef } from "react";

const photos = [
  {
    src: "/instagram/hadar-ido.jpg",
    alt: "הדר עם זר פרחים ביום החתונה",
    delay: "0.05s",
    fromX: "-16%",
    fromY: "-30%",
    spin: "-26deg",
    x: "0%",
    y: "0%",
    w: "52%",
    z: "80px",
    rx: "8deg",
    ry: "-18deg",
    rz: "-7deg",
    float: "6.2s",
    layer: 3,
  },
  {
    src: "/instagram/reel-garden.jpg",
    alt: "זוג יושב ליד סידור פרחים מול חופה מוארת",
    delay: "0.18s",
    fromX: "20%",
    fromY: "-22%",
    spin: "24deg",
    x: "46%",
    y: "2%",
    w: "44%",
    z: "-50px",
    rx: "-6deg",
    ry: "20deg",
    rz: "8deg",
    float: "7.2s",
    layer: 1,
  },
  {
    src: "/instagram/reel-kiss.jpg",
    alt: "זוג עם זר בלילה, מתחת לדגל",
    delay: "0.32s",
    fromX: "-18%",
    fromY: "28%",
    spin: "-16deg",
    x: "2%",
    y: "46%",
    w: "42%",
    z: "120px",
    rx: "7deg",
    ry: "14deg",
    rz: "-11deg",
    float: "5.6s",
    layer: 4,
  },
  {
    src: "/instagram/reel-crowd.jpg",
    alt: "האורחים ברחבה בלילה",
    delay: "0.46s",
    fromX: "16%",
    fromY: "32%",
    spin: "20deg",
    x: "48%",
    y: "50%",
    w: "40%",
    z: "24px",
    rx: "5deg",
    ry: "-14deg",
    rz: "7deg",
    float: "6.8s",
    layer: 2,
  },
] as const;

/** Wedding stills in glassy crystal slabs that fly in and drift in 3D. */
export function AboutPhotos() {
  const tiltRef = useRef<HTMLDivElement>(null);

  function tilt(event: React.PointerEvent<HTMLDivElement>) {
    const node = tiltRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const box = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    node.style.transform = `rotateX(${(-y * 14).toFixed(2)}deg) rotateY(${(x * 18).toFixed(2)}deg)`;
  }

  function reset() {
    if (tiltRef.current) tiltRef.current.style.transform = "";
  }

  return (
    <div className="photo-stage" onPointerMove={tilt} onPointerLeave={reset}>
      <div className="crystal-glow" aria-hidden />
      <div ref={tiltRef} className="photo-tilt">
        {photos.map((photo) => (
          <div
            key={photo.src}
            className="photo-card"
            style={{
              zIndex: photo.layer,
              ["--delay" as string]: photo.delay,
              ["--from-x" as string]: photo.fromX,
              ["--from-y" as string]: photo.fromY,
              ["--spin" as string]: photo.spin,
            }}
          >
            <figure
              className="photo-pose"
              style={{
                ["--x" as string]: photo.x,
                ["--y" as string]: photo.y,
                ["--w" as string]: photo.w,
                ["--z" as string]: photo.z,
                ["--rx" as string]: photo.rx,
                ["--ry" as string]: photo.ry,
                ["--rz" as string]: photo.rz,
                ["--float" as string]: photo.float,
                ["--delay" as string]: photo.delay,
              }}
            >
              <div className="photo-float">
                <div className="crystal-slab">
                  <img src={photo.src} alt={photo.alt} />
                  <span className="crystal-sheen" aria-hidden />
                </div>
              </div>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
