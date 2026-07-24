# 617 East Trust — Project Notes
Last updated: 2026-07-18

## Architecture
- **Frontend**: React 19 + Vite 7 + Tailwind CSS 4 + Three.js (react-three/fiber, drei) + Framer Motion
- **Routing**: wouter (lightweight SPA router)
- **Edge**: Caddy (`n8n-caddy-1`, on network `n8n_default`) owns ports 80/443. Caddyfile at `/opt/n8n/Caddyfile` (host) = `/etc/caddy/Caddyfile` (container). Routes: `n8n.617east.com` → `n8n:5678`, and `617east.com` + `www.617east.com` → `617east-web:80`. Reload with `docker exec n8n-caddy-1 caddy reload --config /etc/caddy/Caddyfile`.
- **App container**: Docker (`617east-web:latest`, nginx:alpine), on network `n8n_default`, port 80 only (no TLS). Caddy terminates TLS and reverse-proxies to it.
- **Domain**: 617east.com (Cloudflare DNS → VPS 40.160.233.147)
- **Repo**: GitHub `617-East-Trust/617-trust` (mirrors the VPS source)

## ✅ EDGE STATUS (resolved 2026-07-18)
The site is LIVE: `https://617east.com` and `https://www.617east.com` both return HTTP 200; n8n at `https://n8n.617east.com` returns 200. Root cause was a missing Caddy route for the apex domain (Caddy owned 443 but only proxied `n8n.617east.com`). Fix = added a `617east.com, www.617east.com` block to `/opt/n8n/Caddyfile` reverse-proxying to `617east-web:80`, then `caddy reload`. No Traefik is involved — the Traefik labels in the compose files are vestigial (Caddy is the real edge). Verify deploys with `curl -sI https://617east.com -w '%{http_code}\n'` → must be 200.

## Build & Deploy

### Local build
```bash
cd /home/workspace/Projects/617east-source
npm install
npm run build      # Output in dist/
```

### Deploy to VPS (bundle only — does NOT fix the edge)
```bash
# From the project root:
tar czf - -C dist . | ssh debian@40.160.233.147 "bash /home/debian/617east/redeploy-local.sh"
```
After this, **verify** with `curl -sI https://617east.com -w '%{http_code}\n'` — expect 200 once the edge is restored.

### Full redeploy (rebuild on VPS)
```bash
ssh debian@40.160.233.147
bash /home/debian/617east/redeploy.sh
```

## File Structure
- `client/index.html` — two JSON-LD blocks (WebSite+SearchAction at top, ProfessionalService with `areaServed`/`hasOfferCatalog`/`founder` mid-doc). See SEO section.
- `client/src/components/Hero3D.tsx — 3D hero; lazy-loads EvolvingTopography (Theme 2) on WebGL + non-reduced-motion; scroll parallax; reduced-motion safe.
- `client/src/components/NCBackground.tsx — Animated SVG layers (Charlotte skyline, Pinehurst golf, mountains); lazy-loaded, suppressed on `prefers-reduced-motion`.
- `client/src/components/EvolvingTopography.tsx` — **Live 3D visual system** (commit 816eba2): shader-displaced procedural terrain (GPU vertex shader, snoise), volumetric fog, focal gold marker with contact shadow + hover-detach, flow particles, DOF + chromatic-aberration post (reduced-motion safe; static gradient fallback).
- `client/src/components/GrainOverlay.tsx` — Film grain overlay (opacity tuned to 0.035).
- `client/src/pages/Home.tsx` — 3-phase narrative (Form/Grow/Maintain, honest-advisor voice). Testimonials section OMITTED (dead `TESTIMONIALS` export removed, `.tilt-card` CSS removed, anchors repointed to `/#why-us`).
- `client/src/pages/About.tsx` — Honest-advisor thesis echo (restraint paragraph).
- `client/src/pages/Contact.tsx` — Has `sent` success state with inline confirmation, delays `navigate('/thank-you')` by ~1.4s. Phone CTAs framed as "real answers, not a sales call."
- `client/src/lib/siteData.ts` — All centralized content/data. Edit here, not in components.
- `client/src/index.css` — Design system (CSS variables, Tailwind theme).
- `client/public/robots.txt` — `Allow: /` + `Sitemap: https://617east.com/sitemap.xml`.
- `client/public/sitemap.xml` — lastmod refreshed to 2026-07-17.

## Key Conventions
- All content lives in `siteData.ts` — edit there, not in components.
- CSS variables defined in `index.css` `:root` — don't use arbitrary color values in components.
- Three.js Canvas is in Viewgraph.material.tsx — uses @react-three/fiber + @react-three/drei.
- Reduced-motion: all animation components check `useReducedMotion()` or `window.matchMedia('(prefers-reduced-motion: reduce)')`.
- Commits push to GitHub AND redeploy to VPS in the same session — keep them paired.

## SEO / Structured Data state (2026-07-19)
- ProfessionalService JSON-LD tightened (commit 628b6ca, deployed 2026-07-19): `makesOffer` typed as proper {Offer, itemOffered: Service} object; removed unverified `sameAs` array (fake company LinkedIn + fake GBP placeholder) and `founder.url` (unverified personal LinkedIn); `logo`/`image`/`brand.logo` all point to verified https://617east.com/favicon.svg (200 OK). Description + founder `knowsAbout` retained from B-phase commit ff83b54.
- Sandhills added as `AdministrativeArea` in `areaServed` (commit aa49ff6, deployed 2026-07-19).
- WebSite + SearchAction JSON-LD present.
- Schema hours: by-appointment model (corrected from a false 9-5 weekday claim, commit 93f1412).
- sitemap.xml + robots.txt verified live (pre-edge-regression).
- NOTE: when real LinkedIn/GBP/social URLs are confirmed by the principal, re-add `sameAs` array and `founder.url` — they're intentionally omitted, not forgotten.

## Analytics / n8n webhook state
- n8n runs on the VPS at `n8n.617east.com` (v2.31.5, container `n8n`, network `n8n_default`, healthy). Caddy proxy works for all paths under `n8n.617east.com` (already reverse-proxies `n8n:5678` whole-host — no per-path rule needed).
- **Contact webhook RESOLVED 2026-07-24:** `POST https://n8n.617east.com/webhook/617east-contact` now returns HTTP 200 with `{"success":true,"message":"Contact form received - Monsuier Legrand office will respond within 24 hours."}`. Verified live with a real contact-form payload.
- Root cause was NOT Caddy (Caddy was already proxying `/webhook/*` via whole-host reverse_proxy). It was the workflow itself: a persisted Webhook node graph had `httpMethod` unset (defaulted to GET) + a broken connection schema (`connections.Webhook.main` triple-nested `[[[]]]` referencing no node). n8n v2.x therefore 500'd on every POST with `Cannot read properties of undefined (reading 'node')`.
- Resolution path: rewrote `workflow_entity` `nodes` + `connections` JSON with a clean Webhook node (`httpMethod:POST`, `responseMode:responseNode`) → Respond to Webhook (`respondWith:json`, expr body), then `n8n publish:workflow --id=FglHW367PXAI9rM3` (CLI) to re-version + re-register the webhook, then `docker restart n8n` to flush the stale registration cache. Do NOT toggle `workflow_entity.active` directly — n8n v2.x uses a published-version model (`workflow_history` + `activeVersionId`); `publish:workflow` is the correct activation primitive. `n8n workflow:activate` (used in earlier attempts) is deprecated and only mutates the `active` flag without rebuilding the webhook registration, which is why it produced the 500 + GET-only registration.
- Canonical workflow JSON saved at `Projects/617east-source/n8n-workflows/617east-contact-workflow_FINAL_20260724.json`.
- Postgres credentials (n8n-postgres-1): user `root`, db `n8n` (per `N8N_*` env). All workflow/webhook tables use case-sensitive quoted identifiers (`workflowId`, `webhookId`, `webhookPath`) — always double-quote them in SQL.
- Form-submit handler keeps `trackConversion` as fallback on any response; with the webhook fixed, both succeed.

## Skill applied
- `Skills/immersive-digital-architect/SKILL.md` (692 lines, ported from `immersive-7f3a976c5e9e.md`) — honest-advisor narrative voice, finance/consulting vertical reference. Applied to the narrative core, hero line, and omitted-testimonials call.

## Session commit chain (2026-07-19)
`628e4bc` agency-grade (Lenis, grain, postprocessing) → `f9536bc` build path fix → `93f1412` schema hours by-appointment → `19986c0` narrative core + hero line → `12999b8` sharpen 3-phase + dead anchors + CTAs → `85725a5` remove dead TESTIMONIALS export → `a8216f1` remove dead .tilt-card CSS → `ff83b54` B-phase echo on Contact + refine ProfessionalService JSON-LD → `0b14a9b` lazy NCBackground + sitemap lastmod → `b8f54bc` grain 0.035 + Contact `sent` state + dup import removal → `ead5c9a` About thesis echo + WebSite+SearchAction JSON-LD + Hero3D client-mount gate + NCBackground reduced-motion suppression → `f8f698a hero scroll parallax → 9339cab deeper 3D visual system (procedural terrain + floating markers + volumetric fog + cinematic camera, deployed 2026-07-19)

