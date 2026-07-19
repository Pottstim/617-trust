'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Suspense, useMemo, useRef, useEffect } from 'react';
import { useReducedMotion } from './useReducedMotion';
import { EffectComposer, Bloom, Vignette, Noise, DepthOfField, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { ContactShadows } from '@react-three/drei';

// ----- GPU noise helpers (inline GLSL) -----
const classicGLSL = `
// Simplex 2D noise — Ashima/Stefan Gustavson
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec2 mod289(vec2 x){return x-floor(x*(1.0/289.0))*289.0;}
vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
float snoise(vec2 v){
  const vec4 C=vec4(0.211324865405187,0.366025403784439,-0.577350269189626,0.024390243902439);
  vec2 i=floor(v+dot(v,C.yy));
  vec2 x0=v-i+dot(i,C.xx);
  vec2 i1; i1=(x0.x>x0.y)?vec2(1.0,0.0):vec2(0.0,1.0);
  vec4 x12=x0.xyxy+C.xxzz; x12.xy-=i;
  i=mod289(i);
  vec3 p=permute(permute(i.y+vec3(0.0,i1.y,1.0))+i.x+vec3(0.0,i1.x,1.0));
  vec3 m=max(0.5-vec3(dot(x0,x0),dot(x12.xy,x12.xy),dot(x12.zw,x12.zw)),0.0);
  m*=m; m*=m;
  vec3 x=2.0*fract(p*C.www)-1.0;
  vec3 h=abs(x)-0.5;
  vec3 ox=floor(x+0.5);
  vec3 a0=x-ox;
  m*=1.79284291400159-0.85373472095314*(a0*a0+h*h);
  vec3 g;
  g.x=a0.x*x0.x-h.x*x0.y;
  g.yz=a0.yz*x12.xz-h.yz*x12.yw;
  return 130.0*dot(m,g);
}
float fbm(vec2 p){
  float v=0.0; float a=0.5;
  for(int i=0;i<5;i++){ v+=a*snoise(p); p*=2.0; a*=0.5; }
  return v;
}
`;

// ----- Procedural terrain: GPU vertex displacement + contour-line shading -----
function ProceduralTerrain() {
  const matRef = useRef<THREE.ShaderMaterial>(null!);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uScroll: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColorLow: { value: new THREE.Color('#1c1611') },
    uColorMid: { value: new THREE.Color('#8b6e3e') },
    uColorHigh: { value: new THREE.Color('#e8d4a0') },
    uOpacity: { value: 0.22 },
  }), []);

  const geometry = useMemo(() => new THREE.PlaneGeometry(80, 48, 256, 160), []);

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime * 0.1;
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = uniforms.uTime.value;
    }
  });

  return (
    <mesh
      ref={(m) => { if (m) (m as THREE.Mesh & { _terrain?: boolean })._terrain = true; }}
      geometry={geometry}
      rotation={[-Math.PI / 2.3, 0, 0]}
      position={[0, -7, -4]}
    >
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        wireframe
        transparent
        vertexShader={`
          ${classicGLSL}
          uniform float uTime;
          uniform vec2 uMouse;
          varying float vH;
          varying vec3 vWorldPos;
          void main(){
            vec3 pos = position;
            vec2 q = pos.xy * 0.06 + vec2(uTime * 0.15, uTime * 0.08);
            float h = fbm(q);
            h += fbm(q * 2.3 + 5.0) * 0.4;
            // Mouse warp — terrain subtly responds to pointer
            float md = length(pos.xy * 0.04 - uMouse * 2.0);
            h -= exp(-md * md * 1.8) * 0.6;
            pos.z = h * 3.2;
            vH = h;
            vWorldPos = (modelMatrix * vec4(pos, 1.0)).xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          }
        `}
        fragmentShader={`
          uniform vec3 uColorLow;
          uniform vec3 uColorMid;
          uniform vec3 uColorHigh;
          uniform float uOpacity;
          uniform float uTime;
          varying float vH;
          varying vec3 vWorldPos;
          ${classicGLSL}
          void main(){
            // Height-based ramp
            float t = smoothstep(-2.0, 2.0, vH);
            vec3 col = mix(uColorLow, uColorMid, t);
            col = mix(col, uColorHigh, smoothstep(0.5, 1.4, vH));
            // Contour lines (topographic map feel)
            float contour = abs(fract(vH * 3.0) - 0.5);
            float line = smoothstep(0.42, 0.5, contour);
            col = mix(col * 1.5, col, line);
            // Distance fade
            float depth = clamp(-vWorldPos.z * 0.04, 0.0, 1.0);
            col = mix(col, vec3(0.02, 0.02, 0.015), depth);
            gl_FragColor = vec4(col, uOpacity);
          }
        `}
      />
    </mesh>
  );
}

// ----- Focal waypoint: solitary gold marker above the terrain ridge -----
function FocalMarker() {
  const meshRef = useRef<THREE.Group>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.position.y = 3.2 + Math.sin(t * 0.5) * 0.35;
      meshRef.current.rotation.y = t * 0.25;
    }
    if (ringRef.current) {
      const s = 1.0 + Math.sin(t * 0.8) * 0.08;
      ringRef.current.scale.set(s, s, s);
      (ringRef.current.material as THREE.MeshBasicMaterial).opacity = 0.35 + Math.sin(t * 0.8) * 0.15;
    }
  });

  return (
    <group ref={meshRef} position={[0, 3.2, 0]}>
      <mesh>
        <octahedronGeometry args={[0.55, 0]} />
        <meshBasicMaterial color="#f3e1a6" wireframe transparent opacity={0.92} />
      </mesh>
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.7, 0]}>
        <ringGeometry args={[0.85, 0.92, 64]} />
        <meshBasicMaterial color="#d6b878" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <octahedronGeometry args={[0.22, 0]} />
        <meshBasicMaterial color="#fff4d0" />
      </mesh>
    </group>
  );
}

// ----- Floating geometric markers (waypoints through the terrain) -----
function FloatingMarkers() {
  const groupRef = useRef<THREE.Group>(null!);

  const markers = useMemo(() => {
    const items: { x: number; y: number; z: number; scale: number; type: number; speed: number; phase: number }[] = [];
    for (let i = 0; i < 14; i++) {
      items.push({
        x: (Math.random() - 0.5) * 28,
        y: (Math.random() - 0.5) * 10 - 1,
        z: (Math.random() - 0.5) * 16 - 4,
        scale: 0.12 + Math.random() * 0.28,
        type: Math.floor(Math.random() * 3),
        speed: 0.2 + Math.random() * 0.4,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return items;
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (!groupRef.current) return;
    groupRef.current.children.forEach((child, i) => {
      const m = markers[i];
      if (!m) return;
      child.position.x = m.x + Math.sin(time * m.speed * 0.3 + m.phase) * 0.7;
      child.position.y = m.y + Math.cos(time * m.speed * 0.25 + m.phase) * 0.5;
      child.rotation.x = time * 0.15 * m.speed;
      child.rotation.y = time * 0.2 * m.speed;
    });
  });

  return (
    <group ref={groupRef}>
      {markers.map((m, i) => {
        let geo: THREE.BufferGeometry;
        if (m.type === 0) geo = new THREE.OctahedronGeometry(m.scale, 0);
        else if (m.type === 1) geo = new THREE.IcosahedronGeometry(m.scale, 0);
        else geo = new THREE.TetrahedronGeometry(m.scale, 0);
        return (
          <mesh key={i} position={[m.x, m.y, m.z]}>
            <primitive object={geo} attach="geometry" />
            <meshBasicMaterial color="#d6b878" wireframe transparent opacity={0.42} />
          </mesh>
        );
      })}
    </group>
  );
}

// ----- Flow-field particles (organic movement along noise flow lines) -----
function FlowFieldParticles() {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const count = 1400;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 24;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const velocities = useRef<Float32Array>(new Float32Array(positions.length).fill(0));

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (!pointsRef.current) return;
    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const vel = velocities.current;
    const scaleN = 0.045;
    const speedN = 0.016;
    for (let i = 0; i < pos.length / 3; i++) {
      const angle = simplexInline(pos[i * 3] * scaleN + time * 0.06, pos[i * 3 + 1] * scaleN + time * 0.04) * Math.PI * 4;
      vel[i * 3] += Math.cos(angle) * speedN;
      vel[i * 3 + 1] += Math.sin(angle) * speedN;
      pos[i * 3] += vel[i * 3];
      pos[i * 3 + 1] += vel[i * 3 + 1];
      vel[i * 3] *= 0.965;
      vel[i * 3 + 1] *= 0.965;
      if (pos[i * 3] > 25) pos[i * 3] = -25;
      if (pos[i * 3] < -25) pos[i * 3] = 25;
      if (pos[i * 3 + 1] > 15) pos[i * 3 + 1] = -15;
      if (pos[i * 3 + 1] < -15) pos[i * 3 + 1] = 15;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#c4a55a"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ----- CPU simplex for particle flow (kept light; particles are few) -----
class SimplexNoise {
  private p: number[];
  constructor(seed = Math.random()) {
    this.p = new Array(512);
    const perm = new Array(256);
    for (let i = 0; i < 256; i++) perm[i] = i;
    let s = seed * 2147483647;
    for (let i = 255; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      const j = s % (i + 1);
      [perm[i], perm[j]] = [perm[j], perm[i]];
    }
    for (let i = 0; i < 512; i++) this.p[i] = perm[i & 255];
  }
  noise2D(xin: number, yin: number) {
    const F2 = 0.5 * (Math.sqrt(3) - 1);
    const G2 = (3 - Math.sqrt(3)) / 6;
    const s = (xin + yin) * F2;
    const i = Math.floor(xin + s);
    const j = Math.floor(yin + s);
    const t = (i + j) * G2;
    const X0 = i - t, Y0 = j - t;
    const x0 = xin - X0, y0 = yin - Y0;
    const i1 = x0 > y0 ? 1 : 0;
    const j1 = x0 > y0 ? 0 : 1;
    const x1 = x0 - i1 + G2, y1 = y0 - j1 + G2;
    const x2 = x0 - 1 + 2 * G2, y2 = y0 - 1 + 2 * G2;
    const ii = i & 255, jj = j & 255;
    const grad = (hash: number, x: number, y: number) => {
      const h = hash & 7;
      const u = h < 4 ? x : y;
      const v = h < 4 ? y : x;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };
    let n0 = 0, n1 = 0, n2 = 0;
    let t0 = 0.5 - x0 * x0 - y0 * y0;
    if (t0 >= 0) { t0 *= t0; n0 = t0 * t0 * grad(this.p[ii + this.p[jj]], x0, y0); }
    let t1 = 0.5 - x1 * x1 - y1 * y1;
    if (t1 >= 0) { t1 *= t1; n1 = t1 * t1 * grad(this.p[ii + i1 + this.p[jj + j1]], x1, y1); }
    let t2 = 0.5 - x2 * x2 - y2 * y2;
    if (t2 >= 0) { t2 *= t2; n2 = t2 * t2 * grad(this.p[ii + 1 + this.p[jj + 1]], x2, y2); }
    return 70 * (n0 + n1 + n2);
  }
}
const simplexInline = new SimplexNoise(42).noise2D.bind(new SimplexNoise(42));

// ----- Volumetric light shafts -----
function LightShafts() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(time * 0.03) * 0.15;
    groupRef.current.rotation.x = Math.cos(time * 0.025) * 0.05;
  });

  return (
    <group ref={groupRef}>
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2 + 0.5;
        const x = Math.cos(angle) * 4;
        const z = Math.sin(angle) * 4;
        return (
          <mesh key={i} position={[x, 5, z]} rotation={[0.4, angle, 0]}>
            <cylinderGeometry args={[0.08, 0.6, 25, 8, 1, true]} />
            <meshBasicMaterial color="#e8d4a0" transparent opacity={0.025} side={THREE.DoubleSide} />
          </mesh>
        );
      })}
    </group>
  );
}

// ----- Enhanced camera controller (scroll-linked dolly + mouse parallax) -----
function CameraController() {
  const { camera } = useThree();
  const mousePos = useRef({ x: 0, y: 0 });
  const scrollRef = useRef(0);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    const onScroll = () => {
      scrollRef.current = window.scrollY;
    };
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const scrollFactor = Math.min(scrollRef.current / 800, 1);
    // Scroll dolly: camera pushes in and down as user scrolls
    const baseY = -1.0 + scrollFactor * 0.8;
    const baseZ = 11 - scrollFactor * 4.5;
    // Mouse parallax (subtle, fades on scroll)
    const targetX = mousePos.current.x * 0.9 * (1 - scrollFactor);
    const targetY = mousePos.current.y * 0.5 * (1 - scrollFactor);
    camera.position.x += (targetX - camera.position.x) * 0.025;
    camera.position.y += (baseY + targetY - camera.position.y) * 0.04;
    // Cinematic breathing
    const breathZ = baseZ + Math.sin(time * 0.08) * 0.4;
    camera.position.z += (breathZ - camera.position.z) * 0.02;
    camera.lookAt(0, -scrollFactor * 1.5, 0);
  });

  return null;
}

export function EvolvingTopography() {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-[#11100f] to-[#161514]" aria-hidden="true" />
    );
  }

  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, -1, 11], fov: 46 }}
        gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
        dpr={[1, 1.6]}
      >
        <fog attach="fog" args={['#050505', 14, 60]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 8, 5]} intensity={0.6} color="#e8d4a0" />
          <ProceduralTerrain />
          <FocalMarker />
          <FloatingMarkers />
          <FlowFieldParticles />
          <LightShafts />
          <ContactShadows position={[0, -2.4, 0]} opacity={0.35} scale={18} blur={6} far={10} color="#000000" />
          <CameraController />
          <EffectComposer multisampling={4}>
            <DepthOfField focusDistance={0.018} focalLength={0.09} bokehScale={2.4} />
            <Bloom intensity={0.55} luminanceThreshold={0.22} luminanceSmoothing={0.9} mipmapBlur />
            <ChromaticAberration
              offset={new THREE.Vector2(0.0006, 0.0006)}
              radialModulation={true}
              modulationOffset={0.4}
              blendFunction={BlendFunction.NORMAL}
            />
            <Vignette eskil={false} offset={0.28} darkness={0.7} />
            <Noise premultiply blendFunction={BlendFunction.OVERLAY} opacity={0.035} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(5,5,5,0.08)_0%,rgba(5,5,5,0.72)_64%)]" />
    </div>
  );
}
