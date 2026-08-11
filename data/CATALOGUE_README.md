# SOLEVA Cursor Catalogue Package

This package contains the SOLEVA master catalogue reference and a deterministic
folder structure for importing the products into the ecommerce website.

IMPORTANT:
The *_reference.png files are crops from the catalogue sheet. They are REFERENCE
ASSETS, not final ecommerce product photography. They include catalogue framing/
labels and should be used in PhotoRoom (or another image editor) to create clean
individual product images.

After creating final assets, replace the reference files with:

primary.webp
side.webp
rear.webp
top.webp
sole.webp
lifestyle.webp

Do not let Cursor randomly choose images or reuse images between products.

Products:
- Velocity One — Running — White / Black — ₹4,999
- CloudStep — Walking — Grey — ₹3,999
- Urban X — Lifestyle — Black — ₹4,499
- Apex Pro — Training — White / Red — ₹5,499
- TrailCore — Trail — Olive / Black — ₹6,499

Brand:
SOLEVA
Performance Meets Everyday Style.

Recommended final structure:

public/products/
  velocity-one/
    primary.webp
    side.webp
    rear.webp
    top.webp
    sole.webp
    lifestyle.webp
  cloudstep/
  urban-x/
  apex-pro/
  trailcore/

Use products.json as the source of truth.
