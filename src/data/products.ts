export type Collection = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  description: string;
  details: string[];
  materials: string;
  collection: string;
  category: "seating" | "lighting" | "tables" | "objects" | "textiles";
  colors: { name: string; hex: string }[];
  images: string[];
  featured?: boolean;
  new?: boolean;
};

export const collections: Collection[] = [
  {
    slug: "living",
    name: "Living",
    description: "Seating and tables shaped for quiet evenings and open rooms.",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "light",
    name: "Light",
    description: "Lamps and pendants that soften architecture without shouting.",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "objects",
    name: "Objects",
    description: "Ceramics, vessels, and small forms for the everyday shelf.",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1600&q=80",
  },
];

export const products: Product[] = [
  {
    id: "p01",
    slug: "arc-lounge-chair",
    name: "Arc Lounge Chair",
    price: 1280,
    compareAt: 1480,
    description:
      "A low, sculptural lounge with a continuous oak frame and hand-finished linen upholstery. Designed to sit quietly in the room — and still hold a long afternoon.",
    details: [
      "Solid white oak frame",
      "Removable linen seat cushion",
      "Arrives fully assembled",
      "Made in small batches in Portugal",
    ],
    materials: "White oak, linen, high-resilience foam",
    collection: "living",
    category: "seating",
    colors: [
      { name: "Natural Oak", hex: "#c4a574" },
      { name: "Smoke", hex: "#6b6e6a" },
      { name: "Ink", hex: "#1a1d1b" },
    ],
    images: [
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    new: true,
  },
  {
    id: "p02",
    slug: "linea-dining-table",
    name: "Linea Dining Table",
    price: 2400,
    description:
      "A slender ash table with a stone-quiet top and a silhouette that disappears until dinner arrives. Seats six without crowding the room.",
    details: [
      "Solid ash legs with matte oil finish",
      "Sealed birch plywood top",
      "Seats 6 comfortably",
      "Felt pads included",
    ],
    materials: "Ash, birch plywood, natural oil",
    collection: "living",
    category: "tables",
    colors: [
      { name: "Ash", hex: "#d8cfc0" },
      { name: "Walnut stain", hex: "#5c4033" },
    ],
    images: [
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    id: "p03",
    slug: "halo-floor-lamp",
    name: "Halo Floor Lamp",
    price: 620,
    description:
      "A brushed aluminum stem with a linen drum that throws warm, even light. Dims from reading bright to late-night hush.",
    details: [
      "Brushed aluminum stem",
      "Linen drum shade",
      "Inline dimmer",
      "LED compatible, E26 base",
    ],
    materials: "Aluminum, linen, steel base",
    collection: "light",
    category: "lighting",
    colors: [
      { name: "Brushed Aluminum", hex: "#b8b8b8" },
      { name: "Matte Black", hex: "#2a2a2a" },
    ],
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    new: true,
  },
  {
    id: "p04",
    slug: "tide-pendant",
    name: "Tide Pendant",
    price: 480,
    description:
      "Hand-blown glass with a soft ripple that catches daylight and candle hour alike. Hang alone over a table or in a quiet triad.",
    details: [
      "Hand-blown glass shade",
      "Adjustable fabric cord",
      "Ceiling canopy included",
      "60W max equivalent",
    ],
    materials: "Glass, brass fittings, cotton cord",
    collection: "light",
    category: "lighting",
    colors: [
      { name: "Opal", hex: "#f5f2eb" },
      { name: "Smoke glass", hex: "#8a8f8c" },
    ],
    images: [
      "https://images.unsplash.com/photo-1524484487850-91a7c6e5f2a3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1543198126-a87ad1cd7d5f?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
  },
  {
    id: "p05",
    slug: "ridge-side-table",
    name: "Ridge Side Table",
    price: 540,
    description:
      "A compact companion table with a carved edge profile and a top large enough for a book, a mug, and nothing else.",
    details: [
      "Solid walnut construction",
      "Hand-carved edge detail",
      "16\" diameter top",
      "Natural oil finish",
    ],
    materials: "Solid walnut, natural oil",
    collection: "living",
    category: "tables",
    colors: [{ name: "Walnut", hex: "#5c4033" }],
    images: [
      "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1532372320572-cda25611abd4?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "p06",
    slug: "kiln-vessel-set",
    name: "Kiln Vessel Set",
    price: 186,
    description:
      "Three nesting stoneware vessels with a mineral glaze that shifts from mist to moss. Made for flowers, utensils, or empty space.",
    details: [
      "Set of three nesting vessels",
      "Food-safe mineral glaze",
      "Dishwasher safe",
      "Variations between pieces are expected",
    ],
    materials: "Stoneware, mineral glaze",
    collection: "objects",
    category: "objects",
    colors: [
      { name: "Mist", hex: "#c5cec8" },
      { name: "Moss", hex: "#5a6b55" },
    ],
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1400&q=80",
    ],
    featured: true,
    new: true,
  },
  {
    id: "p07",
    slug: "loom-throw",
    name: "Loom Throw",
    price: 220,
    description:
      "A heavyweight wool throw with a loose, open weave. Soft enough for the sofa, structured enough to drape like furniture.",
    details: [
      "100% merino wool",
      "52\" × 72\"",
      "Fringed edges",
      "Dry clean or gentle hand wash",
    ],
    materials: "Merino wool",
    collection: "objects",
    category: "textiles",
    colors: [
      { name: "Oat", hex: "#d4cfc4" },
      { name: "Charcoal", hex: "#3d3f3d" },
      { name: "Forest", hex: "#3d5c45" },
    ],
    images: [
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "p08",
    slug: "folio-bookshelf",
    name: "Folio Bookshelf",
    price: 1680,
    description:
      "Open shelving with thin steel uprights and solid oak shelves. Built to display what you keep — and leave room for air.",
    details: [
      "Powder-coated steel frame",
      "Solid oak shelves",
      "Wall-anchor kit included",
      "72\" H × 48\" W × 12\" D",
    ],
    materials: "Oak, powder-coated steel",
    collection: "living",
    category: "tables",
    colors: [
      { name: "Black / Oak", hex: "#1a1a1a" },
      { name: "Ivory / Oak", hex: "#e8e4dc" },
    ],
    images: [
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce060fe85?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "p09",
    slug: "ember-table-lamp",
    name: "Ember Table Lamp",
    price: 340,
    description:
      "A compact ceramic base with a linen shade that pools light on a nightstand or desk. Warm, directional, and unfussy.",
    details: [
      "Glazed ceramic base",
      "Linen shade",
      "Rotary switch on cord",
      "LED compatible",
    ],
    materials: "Ceramic, linen, brass hardware",
    collection: "light",
    category: "lighting",
    colors: [
      { name: "Bone", hex: "#e8e2d6" },
      { name: "Slate", hex: "#5a5e5c" },
    ],
    images: [
      "https://images.unsplash.com/photo-1543198126-a87ad1cd7d5f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "p10",
    slug: "grove-dining-chair",
    name: "Grove Dining Chair",
    price: 420,
    description:
      "A stackable ash chair with a gently scooped seat. Comfortable enough for long dinners, light enough to move when the room changes.",
    details: [
      "Solid ash frame",
      "Sculpted seat",
      "Stackable up to 4",
      "Sold individually",
    ],
    materials: "Solid ash, natural oil finish",
    collection: "living",
    category: "seating",
    colors: [
      { name: "Natural Ash", hex: "#d8cfc0" },
      { name: "Blackened", hex: "#2c2c2c" },
    ],
    images: [
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&w=1400&q=80",
    ],
    new: true,
  },
  {
    id: "p11",
    slug: "drift-cushion",
    name: "Drift Cushion",
    price: 98,
    description:
      "A linen cushion with feather-down fill and a cover you can wash. Soft structure for sofas that need one more layer.",
    details: [
      "Stonewashed linen cover",
      "Feather-down insert",
      "Hidden zipper",
      "20\" × 20\"",
    ],
    materials: "Linen, feather-down fill",
    collection: "objects",
    category: "textiles",
    colors: [
      { name: "Fog", hex: "#c8cec9" },
      { name: "Sand", hex: "#d6cbb8" },
      { name: "Ink", hex: "#2a2e2c" },
    ],
    images: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1400&q=80",
    ],
  },
  {
    id: "p12",
    slug: "basin-bowl",
    name: "Basin Bowl",
    price: 74,
    description:
      "A wide, shallow stoneware bowl with a matte exterior and glossy well. For fruit on the table or keys by the door.",
    details: [
      "Hand-thrown stoneware",
      "Matte / gloss dual glaze",
      "12\" diameter",
      "Food safe",
    ],
    materials: "Stoneware, dual glaze",
    collection: "objects",
    category: "objects",
    colors: [
      { name: "Clay White", hex: "#e5e0d8" },
      { name: "Iron", hex: "#6e6860" },
    ],
    images: [
      "https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1400&q=80",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getProductsByCollection(slug: string) {
  return products.filter((p) => p.collection === slug);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function formatPrice(centsOrDollars: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(centsOrDollars);
}
