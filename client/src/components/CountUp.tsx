'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

/**
 * Animates a numeric prefix (e.g. "20%" -> 0..20 then "%") when scrolled into view.
 * Falls back to the raw string when reduced motion is requested or parsing fails.
 */
export default function CountUp({ value, className, duration = 1.6 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const match = value.match(/^([\d.,]+)\s*(.*)$/);
  const num = match ? parseFloat(match[1].replace(/,/g, '')) : NaN;
  const suffix = match ? match[2] : '';
  const decimals = match ? (match[1].includes('.') ? match[1].split('.')[1].length : 0) : 0;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (Number.isNaN(num)) {
        el.textContent = value;
        return;
      }
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        el.textContent = value;
        return;
      }
      const counter = { v: 0 };
      gsap.to(counter, {
        v: num,
        duration,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => {
          el.textContent = `${counter.v.toFixed(decimals)}${suffix}`;
        },
      });
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}
