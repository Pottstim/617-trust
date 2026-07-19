# 617 East Trust Site — Phase 1 Handoff Report
**Author:** Zo (for Monsuier Legrand)
**Date:** 2026-07-18
**Project:** 617east-source (live at https://617east.com)
**Status:** Phase 1 complete — site LIVE and verified; edge regression resolved; Phase 2 scoped.

---

## 1. Goal
Rebuild the 617 East Trust web presence around an **honest-advisor narrative** — "the most important thing we do is tell you what not to do" — executed with agency-grade motion (Three.js hero, Framer Motion parallax, film grain) while staying reduced-motion-safe and performance-conscious (lazy 3D background). Ship it self-hosted on the VPS behind a hardened edge, verified live, and leave a clean, well-documented codebase for the next phase.

---

## 2. What's Been Completed

### Narrative & Content (the core ask)
- Rewrote Form/Grow/Maintain copy to the honest-advisor voice — each phase leads with restraint (when *not* to incorporate, which spend to hold, why maintenance is the part no one stays for).
- Hero headline animates: **"The most important thing we do is tell you what not to do."**
- Removed the testimonials section from `Home.tsx`; deleted the dead `TESTIMONIALS` export; fixed the now-broken nav/footer/testimonial anchors (repointed to `/#why-us`).
- Removed orphaned `.tilt-card` CSS from `index.css`.
- Added an honest-advisor thesis echo to `About.tsx`.
- Reframed FinalCTA + contact copy to "real answers, not a sales call."

### Motion / Visual Polish (agency-grade, reduced-motion safe)
- `Hero3D.tsx`: scroll parallax — 3D layer recedes + fades on scroll; gated behind client-mount (no SSR mismatch); respects `prefers-reduced-motion`.
- `NCBackground.tsx`: lazy-loaded via `React.lazy` + `Suspense` (no longer ships in the initial ~1.1MB Three.js bundle); suppressed on reduced-motion.
- `GrainOverlay.tsx` opacity tuned to 0.035.
- `Contact.tsx`: added a `sent` success state with inline confirmation; delays `navigate('/thank-you')` ~1.4s so the user sees feedback; removed a duplicate lucide import.

### SEO / Structured Data
- `ProfessionalService` JSON-LD refined: description + founder `knowsAbout` + `makesOffer` (commit `ff83b54`).
- `WebSite` + `SearchAction` JSON-LD present in `index.html`.
- Schema hours corrected to the by-appointment model (was a false 9–5 weekday claim).
- `sitemap.xml` lastmod refreshed to 2026-07-17; `robots.txt` verified (`Allow: /` + `Sitemap:`).
- `areaServed`: Charlotte, Fayetteville, Pinehurst, Southern Pines, Raleigh + NC State + US Country. **Gap:** does not include a "Sandhills" entry (prose mentions it; JSON array skips it).

### Skill
- Created `Skills/immersive-digital-architect/SKILL.md` (692 lines, ported from `immersive-7f3a976c5e9e.md`) with a finance/consulting vertical reference. Drives the narrative voice used above.

### Repo + Deploy
- 14 commits on `main`, pushed to `617-East-Trust/617-trust` (GitHub mirrors VPS source).
- **Live site verified:** `https://617east.com` and `https://www.617east.com` both return **HTTP 200**; hero copy confirmed present in the served JS bundle (`index-9aC2uUpZ.js`).
- **Edge regression resolved (2026-07-18):** root cause was a missing Caddy route for the apex domain — Caddy owned 443 but only proxied `n8n.617east.com`. Fix: added a `617east.com, www.617east.com` block to `/opt/n8n/Caddyfile` → `617east-web:80`, then `caddy reload`. `n8n.617east.com` unaffected, still 200.
- **Analytics / webhook (per "both and keep as fallback"):** contact form's `trackConversion` fires on any response (success or failure) so lead-conversion events are captured even if the n8n webhook path is unreachable through the edge.

### Memory / Docs
- `Projects/617east-source/AGENTS.md` rewritten with current architecture, edge status, commit chain, and open items.
- Root `AGENTS.md` Active Projects line updated to ✅ LIVE.
- Session facts saved to Supermemory (pipeline verified operational).

---

## 3. What's Next (in execution order)

1. **Verify the n8n webhook path through the edge.** The internal route historically returned `000` (Caddy not proxying the webhook path) — same class of issue as the site regression. Now that the apex route is fixed, confirm the contact-form POST reaches n8n, or add an explicit Caddy route for it. The fallback (client-side `trackConversion`) covers capture, but a working server-side webhook is the durable fix. *No principal decision needed — verification + route add.*

2. **`areaServed` Sandhills entry.** Add "Sandhills" as an `AdministrativeArea`/`Region` to the `ProfessionalService` JSON-LD so the structured data matches the prose. *Quick, low-risk; confirm naming convention.*

3. **The "omit for now" visual phase (Phase 2).** Deeper 3D/visual systems, schema tightening beyond the above, and About/contact-page body expansion — paused per your prior "approve the core, omit for now" call. Ready to start on request.

4. **(Optional) Lead-alert delivery.** Decide whether n8n should deliver leads via email only, SMS only, or both, and to which destination number. The webhook capture exists; the downstream routing is the open product decision.

---

## 4. How to Pick This Up
1. Read `Projects/617east-source/AGENTS.md` (architecture, deploy commands, commit chain).
2. Local changes: `npm install && npm run build` → `tar czf - -C dist . | ssh debian@40.160.233.147 "bash /home/debian/617east/redeploy-local.sh"`.
3. Edge lives in `/opt/n8n/Caddyfile` on the VPS; reload with `docker exec n8n-caddy-1 caddy reload --config /etc/caddy/Caddyfile`.
4. Verify with `curl -sI https://617east.com -w '%{http_code}\n'` → expect 200.
