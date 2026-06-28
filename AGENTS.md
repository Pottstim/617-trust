# 617 East Trust — Project Notes

## Architecture
- **Frontend**: React 19 + Vite 7 + Tailwind CSS 4 + Three.js (react-three-fiber)
- **Routing**: wouter (lightweight SPA router)
- **Deployment**: Docker (nginx:alpine) on VPS 40.160.233.147, Traefik reverse proxy
- **Domain**: 617east.com (Cloudflare DNS → VPS)

## Build & Deploy

### Local build
```bash
npm install
npm run build
# Output in dist/
```

### Deploy to VPS
```bash
# From the project root:
tar czf - -C /path/to/617-trust dist | ssh debian@40.160.233.147 "bash /home/debian/617east/redeploy-local.sh"
```

Or SSH into the VPS and run the full redeploy:
```bash
ssh debian@40.160.233.147
bash /home/debian/617east/redeploy.sh
```

## File Structure
- `client/src/components/Hero3D.tsx` — 3D hero with Three.js particles + NC background
- `client/src/components/NCBackground.tsx` — Animated SVG layers (Charlotte skyline, Pinehurst golf, mountains)
- `client/src/pages/` — Home, About, Contact, Privacy, Terms
- `client/src/lib/siteData.ts` — All centralized content/data
- `client/src/index.css` — Design system (CSS variables, Tailwind theme)

## Key Conventions
- All content lives in `siteData.ts` — edit there, not in components
- CSS variables defined in `index.css` `:root` — don't use arbitrary color values in components
- Three.js Canvas is in Hero3D.tsx — uses @react-three/fiber + @react-three/drei
