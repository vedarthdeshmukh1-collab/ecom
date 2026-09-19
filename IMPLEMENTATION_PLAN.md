# AUREL Ecommerce Engine — Implementation Plan

## Goal

A reusable frontend engine for agency ecommerce portfolio sites. Brand identity, copy, merchandising, photography, and homepage composition live in data. UI primitives and commerce interactions stay shared.

Switching brands is a data swap, not a rewrite.

## Architecture

```
Brand config  →  Theme (CSS variables + fonts)
              →  Section renderer (homepage composition)
              →  Pages (home / collection / product / about)
              →  Shared chrome (header, cart, search, menu, footer)

Cart + UI overlays are React context, persisted locally. No backend.
```

Layers:

1. **Brand layer** — typed config: identity, tokens, nav, products, collections, photography, homepage sections, social proof, story, footer.
2. **Engine layer** — `BrandProvider`, `CartProvider`, `OverlayProvider`, money/search/filter helpers, `BrandImage` with fallbacks.
3. **Component layer** — layout, commerce, editorial, and UI primitives. No hardcoded brand strings or image paths.
4. **Page layer** — thin composition from brand data + route params.

## File structure

```
public/brands/aurel/          # photography (predictable paths)
src/
  brands/
    types.ts                  # Brand, Product, Collection, Section configs
    registry.ts               # activeBrandId → brand map
    aurel/
      brand.ts                # identity, tokens, nav, sections, story
      products.ts
      collections.ts
      reviews.ts
  engine/
    BrandProvider.tsx
    CartProvider.tsx
    OverlayProvider.tsx
    applyTheme.ts
    format.ts
    catalog.ts
  media/
    BrandImage.tsx
    fallback.ts
  components/
    ui/         Button, Modal, Breadcrumbs, QuantitySelector, Marquee
    layout/     AnnouncementBar, Header, MobileMenu, Footer
    commerce/   ProductCard, ProductGrid, gallery, PDP, cart, filters, reviews
    editorial/  Hero, Editorial, ImageText, BrandStory, Newsletter, Trust
  pages/        Home, Collection, Product, About
  app/          App, Layout, router
  styles/       index.css (tokens, type scale, motion)
```

## Component relationships

- `Layout` mounts AnnouncementBar, Header, Footer, CartDrawer, MobileMenu, Search (Modal).
- `Header` opens overlays; never owns cart line items.
- `HomePage` maps `brand.homepage.sections` to section components.
- `CollectionPage` uses CollectionHeader + CollectionFilters + ProductGrid.
- `ProductPage` uses Breadcrumbs, ProductGallery, ProductInformation, VariantSelector, QuantitySelector, AddToCartButton, ReviewSection.
- `ProductCard` is the merchandising atom for grids, search, and related products.
- `BrandImage` is the only image renderer; `src` always comes from brand/product data.

## Data architecture

- `Brand` is the root document: name, tagline, description, category, typography, colors, logo, navigation, photography map, homepage sections, socialProof, brandStory, footer, announcement.
- `Product` includes id, slug, name, description, price, compareAtPrice, category, images[], variants[], rating, reviewCount, tags, details, ingredients, howToUse, size.
- `Collection` includes slug, title, description, heroImage, productIds, filter facets.
- Homepage sections are a discriminated union: `hero | marquee | featured | editorial | imageText | trust | reviews | newsletter`.
- Active brand is selected in `registry.ts` (`aurel` for this project). A future brand is a new folder + registry entry.

## Styling approach

- Tailwind utility classes + CSS variables from brand colors (`--color-bg`, `--color-ink`, `--color-muted`, `--color-accent`, `--color-line`).
- Typography: display serif + restrained sans, loaded from brand config. Tight tracking for logo, generous leading for editorial body. No oversized display type on every section.
- Quiet luxury: warm neutrals, hairline borders, flush photography, almost no radius on cards, no drop shadows, no glass, no gradients as decoration.
- Product cards: image-first, caption typography, hover swap to second image (desktop).
- Buttons: solid ink or ghost underline, not pill SaaS CTAs.

## Responsive strategy

Intentional layouts, not scaled-down desktop.

| Width | Behavior |
| --- | --- |
| 1440 / 1280 | Full editorial grid, 3–4 product columns, split PDP |
| 1024 | 3 columns, condensed header, PDP still split |
| 768 | 2 columns, stacked PDP, filters as chips |
| 390 / 375 | 2-col compact merch or 1-col editorial, hamburger, full-width hero, bottom-friendly cart |

Type scale, padding, and image crop (`object-position`) change at breakpoints. Hero copy sits over image on desktop and below on small screens if contrast would fail.

## Animation

Framer Motion only for: cart drawer, mobile menu, search overlay, product image fade, subtle section reveal (once, low offset), card image crossfade. Duration ~0.35s, ease similar to `cubic-bezier(0.22, 1, 0.36, 1)`. No page-load choreography.

## Ecommerce interactions (client-only)

Variant select → price/image can follow variant. Quantity, add to cart, drawer, update qty, remove, search against catalog, collection filters (category/tag), gallery thumbnails, hover image.

## Implementation sequence

1. Vite + React + TS + Tailwind + Router + Motion + Lucide
2. Types, AUREL data, theme application, BrandImage
3. Cart + overlay providers
4. Layout chrome
5. Commerce + editorial components
6. Pages
7. Photography assets + fallbacks
8. Visual polish across breakpoints

## Example brand: AUREL

Premium modern skincare. Quiet luxury, warm stone/ivory/clay palette, editorial still-life photography, approachable clinical copy. Collections: Cleansers, Treatments, Moisturize, Rituals.
