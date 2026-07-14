import { useEffect, useState } from "react";

/**
 * GrainOverlay — fixed full-screen film grain / noise texture.
 * A hallmark of cinematic dark agency sites. Sits above content but
 * ignores pointer events. Uses an animated SVG turbulence so the grain
 * "shimmers" subtly rather than sitting dead-still.
 *
 * Respects prefers-reduced-motion: when set, the grain is static.
 */
export function GrainOverlay({ opacity = 0.05 }: { opacity?: number }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const turbulence = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-soft-light"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,${turbulence}")`,
        backgroundSize: "200px 200px",
        animation: reduced ? undefined : "grainShift 0.6s steps(2) infinite",
      }}
    />
  );
}
export default GrainOverlay;
