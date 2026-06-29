'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useMemo, useRef, useState, useEffect } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Button, ButtonLink } from './ui/Button';
import { SITE } from '@/lib/siteData';
import { NCBackground } from './NCBackground';

/**
 * Hero3D Component
 * Lazy-loads Three.js after LCP to avoid blocking first paint.
 */

function ParticleField({ count = 800 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 24;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.006) * 0.06;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#b8975e"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.5}
      />
    </Points>
  );
}

function AnimatedHeadline({ text }: { text: string }) {
  return (
    <h1 className="text-balance">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.5,
            delay: 0.06 * index,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </h1>
  );
}

export function Hero3D() {
  const [threeReady, setThreeReady] = useState(false);

  useEffect(() => {
    // Lazy-load Three.js after first paint
    const timer = setTimeout(() => setThreeReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#0a0908] pt-16">
      {/* NCBackground - always visible */}
      <NCBackground variant="hero" intensity={0.75} />

      {/* Three.js Particle Layer - lazy loaded */}
      {threeReady && (
        <div className="absolute inset-0 z-[1]">
          <Canvas
            camera={{ position: [0, 0, 14], fov: 52 }}
            style={{ background: 'transparent' }}
            gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
            frameloop="demand"
          >
            <ParticleField count={800} />
            <ambientLight intensity={0.4} />
          </Canvas>
        </div>
      )}

      {/* Strong content overlay for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(10,9,8,0.2)_0%,rgba(10,9,8,0.7)_65%)] z-[2]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs tracking-[0.12em] text-[#b8975e] uppercase backdrop-blur-sm">
            {SITE.preHeader}
          </div>
        </motion.div>

        <AnimatedHeadline text="Form. Grow. Maintain." />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-xl text-[#f4f1eb]/85 tracking-tight"
        >
          {SITE.thesis}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <ButtonLink href="/contact" size="lg" className="group min-w-[220px]">
            Book a Free Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>

          <ButtonLink
            href={SITE.phoneHref}
            variant="ghost"
            size="lg"
            className="min-w-[220px] border-white/20 text-[#f4f1eb] hover:border-[#b8975e] hover:text-[#b8975e]"
          >
            <Phone className="mr-2 h-4 w-4" />
            {SITE.phone} — We answer.
          </ButtonLink>
        </motion.div>
      </div>

      {/* Trust signals — below the hero */}
      <div className="absolute bottom-8 left-0 right-0 z-10 hidden sm:flex justify-center gap-6 px-6">
        {SITE.heroTrustSignals.map((signal, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 + 0.15 * index }}
            className="text-xs text-[#f4f1eb]/50 italic max-w-[200px] text-center"
          >
            "{signal.quote}"
          </motion.div>
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0908] to-transparent z-[3]" />
    </section>
  );
}

export default Hero3D;