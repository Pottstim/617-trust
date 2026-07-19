'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense, useMemo, useRef, useState, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';
import {
  EffectComposer,
  Bloom,
  Vignette,
  Noise,
} from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

// Simplex noise (minimal)
function simplexNoise2(x: number, y: number) {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;
  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);
  const u = xf * xf * (3 - 2 * xf);
  const v = yf * yf * (3 - 2 * yf);
  const hash = (i: number, j: number) => {
    let h = (i * 374761393 + j * 668265263) & 0x7fffffff;
    h = ((h ^ (h >>> 13)) * 1274126177) & 0x7fffffff;
    return (h ^ (h >>> 16)) / 0x7fffffff;
  };
  const a = hash(X, Y);
  const b = hash(X + 1, Y);
  const c = hash(X, Y + 1);
  const d = hash(X + 1, Y + 1);
  const lerp = (a: number, b: number, t: number) => a + t * (b - a);
  return lerp(lerp(a, b, u), lerp(c, d, u), v);
}

// Procedural Topographic Mesh (financial terrain)
function TopographicMesh() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const prefersReduced = useReducedMotion();

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(40, 25, 120, 60);
    return geo;
  }, []);

  useFrame((state) => {
    if (!meshRef.current || prefersReduced) return;
    const time = state.clock.elapsedTime * 0.08;
    const positions = geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const n1 = simplexNoise2(x * 0.15 + time, y * 0.12);
      const n2 = simplexNoise2(x * 0.35, y * 0.28 + time * 0.5);
      const height = n1 * 1.2 + n2 * 0.5;
      positions[i + 2] = height;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
  });

  return (
    <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 2.2, 0, 0]} position={[0, -2, -8]}>
      <meshBasicMaterial
        wireframe
        color="#b8975e"
        transparent
        opacity={0.18}
      />
    </mesh>
  );
}

// Volumetric Fog Layer (depth + atmosphere)
function VolumetricFog() {
  const groupRef = useRef<THREE.Group>(null!);
  const prefersReduced = useReducedMotion();

  const planes = useMemo(() => {
    const planes: [number, number, number, number][] = [];
    for (let i = 0; i < 8; i++) {
      planes.push([
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8,
        -10 + Math.random() * 10,
        Math.random() * 0.015 + 0.005
      ]);
    }
    return planes;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || prefersReduced) return;
    const time = state.clock.elapsedTime;
    groupRef.current.position.y = Math.sin(time * 0.1) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {planes.map((p, i) => (
        <mesh key={i} position={p} rotation={[-Math.PI / 2.5, i * 0.2, 0]}>
          <planeGeometry args={[8, 8]} />
          <meshBasicMaterial
            color="#b8975e"
            transparent
            opacity={p[3]}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  );
}

// Flow Field Particles (guidance/direction)
function FlowFieldParticles({ count = 800 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const prefersReduced = useReducedMotion();

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = -10 + Math.random() * 15;

      vel[i * 3] = (Math.random() - 0.5) * 0.01;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.01;
    }

    return { positions: pos, velocities: vel };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current || prefersReduced) return;
    const time = state.clock.elapsedTime;
    const pos = positions;
    const vel = velocities;

    for (let i = 0; i < count; i++) {
      const x = pos[i * 3];
      const y = pos[i * 3 + 1];
      const angle = simplexNoise2(x * 0.15 + time * 0.15, y * 0.12) * Math.PI * 2;

      vel[i * 3] += Math.cos(angle) * 0.0003;
      vel[i * 3 + 1] += Math.sin(angle) * 0.0003;

      vel[i * 3] *= 0.99;
      vel[i * 3 + 1] *= 0.99;

      pos[i * 3] += vel[i * 3];
      pos[i * 3 + 1] += vel[i * 3 + 1];

      // Wrap around
      if (pos[i * 3] > 15) pos[i * 3] = -15;
      if (pos[i * 3] < -15) pos[i * 3] = 15;
      if (pos[i * 3 + 1] > 10) pos[i * 3 + 1] = -10;
      if (pos[i * 3 + 1] < -10) pos[i * 3 + 1] = 10;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#c8a878"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Floating Geometric Beacons (decision waypoints)
function FloatingBeacons() {
  const groupRef = useRef<THREE.Group>(null!);
  const prefersReduced = useReducedMotion();

  const beacons = useMemo(() => {
    const items: { pos: [number, number, number]; scale: number; type: number }[] = [];
    for (let i = 0; i < 12; i++) {
      items.push({
        pos: [
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10,
          -8 + Math.random() * 8
        ],
        scale: Math.random() * 0.15 + 0.08,
        type: Math.floor(Math.random() * 3)
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    if (!groupRef.current || prefersReduced) return;
    const time = state.clock.elapsedTime;
    groupRef.current.children.forEach((child, i) => {
      const b = beacons[i];
      if (child instanceof THREE.Mesh) {
        child.position.y = b.pos[1] + Math.sin(time * 0.3 + i) * 0.4;
        child.rotation.y = time * 0.2 + i;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {beacons.map((b, i) => {
        let geometry;
        if (b.type === 0) geometry = new THREE.OctahedronGeometry(1);
        else if (b.type === 1) geometry = new THREE.TetrahedronGeometry(1);
        else geometry = new THREE.IcosahedronGeometry(1);

        return (
          <mesh key={i} position={b.pos} scale={b.scale}>
            {geometry}
            <meshBasicMaterial
              color="#d4af8a"
              wireframe
              transparent
              opacity={0.35}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Cinematic Camera Controller
function CameraController({ scrollY }: { scrollY: any }) {
  const { camera } = useThree();
  const prefersReduced = useReducedMotion();
  const scrollRef = useRef(0);

  useEffect(() => {
    if (!scrollY) return;
    return scrollY.onChange((latest: number) => {
      scrollRef.current = latest;
    });
  }, [scrollY]);

  useFrame(() => {
    if (prefersReduced) return;
    const scroll = scrollRef.current;
    const targetY = -scroll * 0.002;
    const targetZ = 10 + scroll * 0.003;

    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.position.z += (targetZ - camera.position.z) * 0.03;
    camera.lookAt(0, targetY * 0.5, 0);
  });

  return null;
}

// Static fallback for reduced motion / mobile
function StaticFallback() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a090f] to-[#0d0c14]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(184,151,94,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(184,151,94,0.04)_0%,transparent_40%)]" />
    </div>
  );
}

// Loading shimmer
function LoadingShimmer() {
  return (
    <div
      className="absolute inset-0 bg-gradient-to-b from-[#050508] via-[#0a090f] to-[#0d0c14]"
      aria-hidden="true"
    >
      <div className="absolute inset-0 animate-pulse bg-[radial-gradient(ellipse_at_50%_40%,rgba(184,151,94,0.12)_0%,transparent_50%)]" />
    </div>
  );
}

interface HeroVisualsProps {
  scrollY?: any;
}

export function HeroVisuals({ scrollY }: HeroVisualsProps) {
  const prefersReduced = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Detect WebGL capability
    const hasWebGL = typeof window !== 'undefined' &&
      window.WebGLRenderingContext &&
      document.createElement('canvas').getContext('webgl');
    const mobile = window.matchMedia('(max-width: 768px)').matches;

    if (hasWebGL && !mobile) {
      setReady(true);
    }
  }, []);

  // Reduced motion or no WebGL → static fallback immediately
  if (prefersReduced || !ready) {
    return <StaticFallback />;
  }

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          logarithmicDepthBuffer: true,
        }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <TopographicMesh />
          <VolumetricFog />
          <FlowFieldParticles count={600} />
          <FloatingBeacons />
          <ambientLight intensity={0.3} />
          <Environment preset="night" />
          {scrollY && <CameraController scrollY={scrollY} />}
          <EffectComposer multisampling={2}>
            <Bloom
              intensity={0.6}
              luminanceThreshold={0.3}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.3} darkness={0.65} />
            <Noise
              premultiply
              blendFunction={BlendFunction.OVERLAY}
              opacity={0.035}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(5,5,8,0.15)_0%,rgba(5,5,8,0.8)_65%)]" />
    </div>
  );
}

export default HeroVisuals;
