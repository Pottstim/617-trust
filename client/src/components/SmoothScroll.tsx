import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * SmoothScroll — wraps the app in a Lenis inertial scroll instance.
 * Replaces the janky native/smooth CSS scroll with buttery momentum
 * scrolling that plays nicely with Framer Motion and GSAP.
 *
 * Critically: when the user prefers reduced motion, Lenis is NOT started,
 * so we fall back to the browser's native scroll (accessible, instant).
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.15,
      // ease-out-expo — long, luxurious settle
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
export default SmoothScroll;
