# Theme 2: Reverting Guide

**Revert to Theme 1 (Original SVG):**
Edit `Hero3D.tsx` and change:
```typescript
const ACTIVE_THEME: 'theme1' | 'theme2' = 'theme2';
```
to:
```typescript
const ACTIVE_THEME: 'theme1' | 'theme2' = 'theme1';
```

**Backup Location:** `/home/workspace/Backup/617east-hero-current/` or `/home/workspace/Backup/617east-theme2-20260630/`

**Theme 2 Components:**
- `Hero3D.tsx` - Main hero with theme toggle
- `EvolvingTopography.tsx` - Wireframe city + morphing particles + terrain
- `useReducedMotion.ts` - Motion preference hook

**Theme 1 Components (backed up):**
- `NCBackground.tsx` - Original SVG skyline/fairways/mountains
- Original `Hero3D.tsx` - Particle field + NCBackground

## Reverting via Git (if needed)

```bash
# Revert Hero3D to original
cp /home/workspace/Backup/617east-hero-current/Hero3D.tsx /home/workspace/Projects/Web/617-east-trust/client/src/components/Hero3D.tsx

# Or revert via git
git checkout HEAD -- client/src/components/Hero3D.tsx
git checkout HEAD -- client/src/components/NCBackground.tsx
git checkout HEAD -- client/src/components/EvolvingTopography.tsx
```