import type { Product, ProductImages } from "./types";

/**
 * Deterministic owned image paths for a product.
 * Paths are permanent product→image relationships from the master catalogue.
 * Missing files render as "Image unavailable" — never borrow another product.
 */
function imagesFor(productId: string): ProductImages {
  const base = `/products/${productId}`;
  return {
    primary: `${base}/primary.webp`,
    secondary: `${base}/secondary.webp`,
    side: `${base}/side.webp`,
    // Mockup set has no rear shot — leave unavailable rather than reuse another angle/product
    rear: null,
    top: `${base}/top.webp`,
    sole: `${base}/sole.webp`,
    lifestyle: `${base}/lifestyle.webp`,
  };
}

const UK = ["6", "7", "8", "9", "10", "11", "12"];

/**
 * Master SOLEVA catalogue — 5 products (source of truth: products.json).
 * Do not invent additional products. Do not share images across products.
 */
export const catalogProducts: Product[] = [
  {
    id: "velocity-one",
    name: "Velocity One",
    slug: "velocity-one",
    category: "running",
    subcategory: "road-running",
    gender: "unisex",
    color: "White / Black",
    colorHex: "#F5F5F5",
    price: 4999,
    badge: "BEST SELLER",
    description:
      "A sleek road runner in white and black — engineered mesh, responsive foam, and everyday mile comfort under the SOLEVA badge.",
    details: [
      "Breathable white mesh upper with black SOLEVA S branding",
      "Responsive foam midsole with geometric sidewall detailing",
      "Black outsole tuned for road grip and daily rotation",
    ],
    materials: "Engineered mesh upper, foam midsole, rubber outsole",
    images: imagesFor("velocity-one"),
    sizes: UK,
    tags: ["running", "road", "best-seller", "white-black"],
    rating: 4.9,
    reviewCount: 186,
    inStock: true,
    featured: true,
    bestSeller: true,
    technology: ["RideFoam", "AirMesh"],
    specs: { Drop: "8mm", Weight: "248g", Stack: "32mm" },
  },
  {
    id: "cloudstep",
    name: "CloudStep",
    slug: "cloudstep",
    category: "walking",
    subcategory: "everyday-walking",
    gender: "unisex",
    color: "Grey",
    colorHex: "#9CA3AF",
    price: 3999,
    badge: "ALL DAY COMFORT",
    description:
      "An understated grey walker built for all-day comfort — soft step-in feel, calm silhouette, city-ready sole.",
    details: [
      "Light-grey textured mesh with subtle SOLEVA S mark",
      "Plush collar and soft underfoot foam for long walks",
      "Clean off-white midsole with non-marking outsole",
    ],
    materials: "Knit mesh upper, soft foam midsole, rubber outsole",
    images: imagesFor("cloudstep"),
    sizes: UK,
    tags: ["walking", "comfort", "everyday", "grey"],
    rating: 4.8,
    reviewCount: 142,
    inStock: true,
    featured: true,
    technology: ["CloudStep Foam"],
    specs: { Drop: "10mm", Weight: "255g", Stack: "28mm" },
  },
  {
    id: "urban-x",
    name: "Urban X",
    slug: "urban-x",
    category: "lifestyle",
    subcategory: "streetwear",
    gender: "unisex",
    color: "Black",
    colorHex: "#111111",
    price: 4499,
    badge: "NEW",
    description:
      "Triple-black lifestyle sneaker with a modern minimalist profile — street form, soft ride, zero flash.",
    details: [
      "Monochrome black upper, laces, and midsole",
      "Low streetwear silhouette with padded collar",
      "Everyday rubber outsole for city miles",
    ],
    materials: "Synthetic/mesh upper, foam midsole, rubber outsole",
    images: imagesFor("urban-x"),
    sizes: UK,
    tags: ["lifestyle", "streetwear", "black", "new"],
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    featured: true,
    new: true,
    technology: ["CityFoam"],
    specs: { Drop: "8mm", Weight: "310g", Stack: "30mm" },
  },
  {
    id: "apex-pro",
    name: "Apex Pro",
    slug: "apex-pro",
    category: "training",
    subcategory: "workout",
    gender: "unisex",
    color: "White / Red",
    colorHex: "#FFFFFF",
    price: 5499,
    badge: "PERFORMANCE",
    description:
      "High-contrast training shoe in white with red performance accents — stable platform for lifts, HIIT, and studio work.",
    details: [
      "White mesh upper with grey SOLEVA S branding",
      "Red interior lining and heel/outsole accents",
      "Stable training base with high-friction rubber",
    ],
    materials: "Mesh upper, firm foam midsole, high-grip rubber",
    images: imagesFor("apex-pro"),
    sizes: UK,
    tags: ["training", "gym", "performance", "white-red"],
    rating: 4.8,
    reviewCount: 97,
    inStock: true,
    featured: true,
    technology: ["ApexBase", "GripZone"],
    specs: { Drop: "4mm", Weight: "290g", Stack: "22mm" },
  },
  {
    id: "trailcore",
    name: "TrailCore",
    slug: "trailcore",
    category: "trail",
    subcategory: "outdoor",
    gender: "unisex",
    color: "Olive / Black",
    colorHex: "#556B2F",
    price: 6499,
    badge: "OUTDOOR",
    description:
      "Rugged olive and black outdoor shoe with aggressive lugs — built for trails, rock, and weekend summits.",
    details: [
      "Olive upper with dark structural overlays",
      "Thick, aggressively lugged black outsole",
      "Toe protection and supportive midfoot wrap",
    ],
    materials: "Ripstop mesh, EVA midsole, sticky trail rubber",
    images: imagesFor("trailcore"),
    sizes: UK,
    tags: ["trail", "outdoor", "hiking", "olive-black"],
    rating: 4.7,
    reviewCount: 81,
    inStock: true,
    featured: true,
    technology: ["TrailCore Grip", "RockGuard"],
    specs: { Drop: "8mm", Weight: "340g", Stack: "30mm" },
  },
];
