# AUREL Ecommerce Engine

A reusable, brand-driven frontend for premium ecommerce portfolio sites.

Swap identity, typography, color, copy, merchandising, photography, and homepage composition in `src/brands/` without rewriting layout or commerce components.

## Example brand

**AUREL** — quiet-luxury modern skincare. Warm neutrals, editorial still life, eight formulas.

## Stack

React, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide, React Router.

## Scripts

```bash
npm install
npm run dev
npm run build
```

Open `http://localhost:5173`.

## New brand

1. Add `src/brands/<id>/` with `brand.ts`, products, collections.
2. Register it in `src/brands/registry.ts` and set `activeBrandId`.
3. Place photography in `public/brands/<id>/` using predictable paths (`hero.webp`, `product-01.webp`, …).

See `IMPLEMENTATION_PLAN.md` for architecture.
