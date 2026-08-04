export type Collection = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type ProductCategory =
  | "running"
  | "casual"
  | "basketball"
  | "training"
  | "lifestyle"
  | "limited";

export type Gender = "men" | "women" | "unisex";

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
  category: ProductCategory;
  gender: Gender;
  sport: string;
  brand: string;
  colors: { name: string; hex: string }[];
  sizes: number[];
  images: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
  bestSeller?: boolean;
  technology: string[];
  specs: Record<string, string>;
};

export const FREE_SHIPPING_THRESHOLD = 3000;

export const collections: Collection[] = [
  {
    slug: "men",
    name: "Men",
    description: "Performance and lifestyle footwear engineered for every mile.",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "women",
    name: "Women",
    description: "Light, responsive silhouettes built for training and everyday.",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "running",
    name: "Running",
    description: "Cushioned, breathable runners for road, tempo, and recovery.",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "Street-ready sneakers that move from gym to city without missing a step.",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1600&q=80",
  },
  {
    slug: "limited",
    name: "Limited Edition",
    description: "Drop-exclusive colorways and materials — while they last.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80",
  },
];

export const categoryMeta: {
  slug: ProductCategory | "men" | "women" | "casual" | "basketball" | "training";
  name: string;
  image: string;
  href: string;
}[] = [
  {
    slug: "men",
    name: "Men",
    image:
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=900&q=80",
    href: "/collections/men",
  },
  {
    slug: "women",
    name: "Women",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80",
    href: "/collections/women",
  },
  {
    slug: "running",
    name: "Running",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=900&q=80",
    href: "/shop?category=running",
  },
  {
    slug: "casual",
    name: "Casual",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=900&q=80",
    href: "/shop?category=casual",
  },
  {
    slug: "basketball",
    name: "Basketball",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
    href: "/shop?category=basketball",
  },
  {
    slug: "training",
    name: "Training",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
    href: "/shop?category=training",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=80",
    href: "/shop?category=lifestyle",
  },
  {
    slug: "limited",
    name: "Limited Edition",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    href: "/collections/limited",
  },
];

export const sports = [
  {
    name: "Running",
    href: "/shop?sport=running",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Gym",
    href: "/shop?sport=gym",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Walking",
    href: "/shop?sport=walking",
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Basketball",
    href: "/shop?sport=basketball",
    image:
      "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Tennis",
    href: "/shop?sport=tennis",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Hiking",
    href: "/shop?sport=hiking",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Lifestyle",
    href: "/shop?sport=lifestyle",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=80",
  },
];

export const technologies = [
  {
    title: "Ultra Cushion Foam",
    body: "Responsive midsole foam that softens impact and returns energy on every stride.",
  },
  {
    title: "Breathable Knit Upper",
    body: "Adaptive engineered knit that flexes with your foot and stays cool under load.",
  },
  {
    title: "Anti Slip Rubber Sole",
    body: "Multi-zone rubber outsole for grip on wet pavement, gym floors, and court.",
  },
  {
    title: "Lightweight Construction",
    body: "Gram-shaving design without sacrificing structure or lockdown.",
  },
  {
    title: "Shock Absorption",
    body: "Heel-to-forefoot cushioning channels that absorb repeated impact.",
  },
  {
    title: "Water Resistant Materials",
    body: "Treated uppers that shed light rain so you keep moving through the day.",
  },
];

const sizesMen = [7, 8, 9, 10, 11, 12];
const sizesWomen = [5, 6, 7, 8, 9, 10];
const sizesUnisex = [6, 7, 8, 9, 10, 11];

export const products: Product[] = [
  {
    id: "s01",
    slug: "velocity-runner",
    name: "Velocity Runner",
    price: 9999,
    compareAt: 11999,
    description:
      "A daily trainer with Ultra Cushion Foam and a breathable knit upper. Built for tempo runs, recovery miles, and the commute that follows.",
    details: [
      "Ultra Cushion Foam midsole",
      "Breathable engineered knit upper",
      "Anti-slip rubber outsole",
      "Reflective heel hit for low light",
    ],
    materials: "Engineered knit, Ultra Cushion Foam, rubber outsole",
    collection: "running",
    category: "running",
    gender: "unisex",
    sport: "running",
    brand: "SOLEVA",
    colors: [
      { name: "Volt Black", hex: "#111111" },
      { name: "Cloud White", hex: "#f5f5f5" },
      { name: "Signal Orange", hex: "#FF5A1F" },
    ],
    sizes: sizesUnisex,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.8,
    reviewCount: 214,
    inStock: true,
    featured: true,
    new: true,
    bestSeller: true,
    technology: ["Ultra Cushion Foam", "Breathable Knit Upper", "Anti Slip Rubber Sole"],
    specs: {
      Weight: "245g (UK 9)",
      Drop: "8mm",
      "Stack height": "32mm heel",
      Use: "Daily training",
    },
  },
  {
    id: "s02",
    slug: "urban-motion",
    name: "Urban Motion",
    price: 8499,
    description:
      "Street-ready lifestyle sneaker with soft foam underfoot and a clean silhouette that works with denim or training kit.",
    details: [
      "Soft foam midsole",
      "Suede and mesh upper",
      "Cupsole construction",
      "Padded collar for all-day wear",
    ],
    materials: "Suede, mesh, EVA foam, rubber",
    collection: "lifestyle",
    category: "lifestyle",
    gender: "unisex",
    sport: "lifestyle",
    brand: "SOLEVA",
    colors: [
      { name: "Bone", hex: "#e8e2d6" },
      { name: "Ink", hex: "#222222" },
      { name: "Sage", hex: "#8a9a88" },
    ],
    sizes: sizesUnisex,
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.6,
    reviewCount: 168,
    inStock: true,
    featured: true,
    bestSeller: true,
    technology: ["Lightweight Construction", "Shock Absorption"],
    specs: {
      Weight: "280g (UK 9)",
      Drop: "6mm",
      Use: "Everyday / lifestyle",
    },
  },
  {
    id: "s03",
    slug: "airstride-pro",
    name: "AirStride Pro",
    price: 12999,
    compareAt: 14999,
    description:
      "Race-day energy for serious sessions. Dual-density cushioning and a locked-in fit keep you sharp through intervals and long runs.",
    details: [
      "Dual-density Ultra Cushion Foam",
      "Carbon-plate inspired shank",
      "Seamless knit bootie",
      "High-abrasion heel rubber",
    ],
    materials: "Performance knit, dual-density foam, rubber",
    collection: "running",
    category: "running",
    gender: "men",
    sport: "running",
    brand: "SOLEVA",
    colors: [
      { name: "Midnight", hex: "#0d1117" },
      { name: "Electric Blue", hex: "#2b6cff" },
    ],
    sizes: sizesMen,
    images: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.9,
    reviewCount: 97,
    inStock: true,
    featured: true,
    new: true,
    technology: ["Ultra Cushion Foam", "Shock Absorption", "Lightweight Construction"],
    specs: {
      Weight: "220g (UK 9)",
      Drop: "6mm",
      Use: "Speed / race",
    },
  },
  {
    id: "s04",
    slug: "cloudsprint-elite",
    name: "CloudSprint Elite",
    price: 11499,
    description:
      "Women’s performance runner with cloud-soft landings and a rockered geometry that rolls you forward effortlessly.",
    details: [
      "Rockered midsole geometry",
      "Women’s-specific last",
      "Breathable knit upper",
      "Water-resistant treatment",
    ],
    materials: "Engineered knit, Ultra Cushion Foam, rubber",
    collection: "women",
    category: "running",
    gender: "women",
    sport: "running",
    brand: "SOLEVA",
    colors: [
      { name: "Pearl", hex: "#f0ece6" },
      { name: "Blush", hex: "#e8b4b8" },
      { name: "Charcoal", hex: "#3a3a3a" },
    ],
    sizes: sizesWomen,
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.7,
    reviewCount: 142,
    inStock: true,
    featured: true,
    new: true,
    bestSeller: true,
    technology: ["Ultra Cushion Foam", "Breathable Knit Upper", "Water Resistant Materials"],
    specs: {
      Weight: "210g (UK 6)",
      Drop: "8mm",
      Use: "Daily / long run",
    },
  },
  {
    id: "s05",
    slug: "flexmotion",
    name: "FlexMotion",
    price: 7499,
    description:
      "Training shoe built for HIIT, lifting, and studio classes. Stable base with flexible forefoot for multi-directional moves.",
    details: [
      "Wide stable platform",
      "Flexible forefoot grooves",
      "Secure midfoot wrap",
      "Durable rubber outsole",
    ],
    materials: "Mesh, TPU overlays, rubber",
    collection: "men",
    category: "training",
    gender: "unisex",
    sport: "gym",
    brand: "SOLEVA",
    colors: [
      { name: "Black/White", hex: "#111111" },
      { name: "Grey Heat", hex: "#6b6b6b" },
    ],
    sizes: sizesUnisex,
    images: [
      "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.5,
    reviewCount: 88,
    inStock: true,
    featured: true,
    technology: ["Anti Slip Rubber Sole", "Shock Absorption"],
    specs: {
      Weight: "290g (UK 9)",
      Use: "Training / gym",
    },
  },
  {
    id: "s06",
    slug: "streetpulse",
    name: "StreetPulse",
    price: 8999,
    compareAt: 9999,
    description:
      "Limited drop colorway with premium leather overlays and a chunky foam midsole. Built for city miles and weekend fits.",
    details: [
      "Premium leather overlays",
      "Chunky foam midsole",
      "Contrast stitching",
      "Limited seasonal colorway",
    ],
    materials: "Leather, mesh, EVA, rubber",
    collection: "limited",
    category: "limited",
    gender: "unisex",
    sport: "lifestyle",
    brand: "SOLEVA",
    colors: [
      { name: "Flame", hex: "#FF5A1F" },
      { name: "Shadow", hex: "#1a1a1a" },
    ],
    sizes: sizesUnisex,
    images: [
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.8,
    reviewCount: 56,
    inStock: true,
    featured: true,
    new: true,
    technology: ["Lightweight Construction", "Shock Absorption"],
    specs: {
      Weight: "310g (UK 9)",
      Use: "Lifestyle / limited",
    },
  },
  {
    id: "s07",
    slug: "rapid-x",
    name: "Rapid X",
    price: 10999,
    description:
      "Court-ready basketball shoe with lateral support and responsive cushioning for cut-and-drive sessions.",
    details: [
      "Lateral TPU support frame",
      "Responsive heel cushioning",
      "High-traction court rubber",
      "Padded ankle collar",
    ],
    materials: "Synthetic leather, mesh, TPU, rubber",
    collection: "men",
    category: "basketball",
    gender: "men",
    sport: "basketball",
    brand: "SOLEVA",
    colors: [
      { name: "Court Black", hex: "#111111" },
      { name: "Home White", hex: "#ffffff" },
    ],
    sizes: sizesMen,
    images: [
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.6,
    reviewCount: 73,
    inStock: true,
    bestSeller: true,
    technology: ["Shock Absorption", "Anti Slip Rubber Sole"],
    specs: {
      Weight: "340g (UK 9)",
      Use: "Basketball",
    },
  },
  {
    id: "s08",
    slug: "novarun",
    name: "NovaRun",
    price: 9499,
    description:
      "Neutral road shoe for walkers and easy runners. Soft landings, wide toe box, and all-day comfort out of the box.",
    details: [
      "Soft Ultra Cushion Foam",
      "Wide comfort last",
      "Breathable mesh upper",
      "Durable heel rubber",
    ],
    materials: "Mesh, foam, rubber",
    collection: "women",
    category: "casual",
    gender: "women",
    sport: "walking",
    brand: "SOLEVA",
    colors: [
      { name: "Lavender Mist", hex: "#c5b8d0" },
      { name: "Soft Black", hex: "#2c2c2c" },
    ],
    sizes: sizesWomen,
    images: [
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.4,
    reviewCount: 121,
    inStock: true,
    new: true,
    technology: ["Ultra Cushion Foam", "Breathable Knit Upper"],
    specs: {
      Weight: "240g (UK 6)",
      Use: "Walking / easy run",
    },
  },
  {
    id: "s09",
    slug: "urban-flex",
    name: "Urban Flex",
    price: 6999,
    compareAt: 7999,
    description:
      "Minimal casual sneaker with a flexible sole and washable knit upper — your go-to for travel days and city walks.",
    details: [
      "Machine-washable knit",
      "Flexible rubber outsole",
      "Slip-on friendly fit",
      "Removable OrthoLite-style insole",
    ],
    materials: "Knit textile, rubber",
    collection: "lifestyle",
    category: "casual",
    gender: "unisex",
    sport: "lifestyle",
    brand: "SOLEVA",
    colors: [
      { name: "White", hex: "#ffffff" },
      { name: "Navy", hex: "#1b2a41" },
      { name: "Olive", hex: "#556b2f" },
    ],
    sizes: sizesUnisex,
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.3,
    reviewCount: 190,
    inStock: true,
    bestSeller: true,
    technology: ["Breathable Knit Upper", "Lightweight Construction"],
    specs: {
      Weight: "200g (UK 9)",
      Use: "Casual / travel",
    },
  },
  {
    id: "s10",
    slug: "momentum-one",
    name: "Momentum One",
    price: 10499,
    description:
      "All-terrain trainer with water-resistant upper and aggressive tread for trail-adjacent city paths and light hikes.",
    details: [
      "Water-resistant membrane",
      "Aggressive multi-surface tread",
      "Protective toe cap",
      "Gusseted tongue keeps debris out",
    ],
    materials: "Ripstop, water-resistant membrane, rubber",
    collection: "men",
    category: "training",
    gender: "men",
    sport: "hiking",
    brand: "SOLEVA",
    colors: [
      { name: "Trail Brown", hex: "#5c4033" },
      { name: "Storm Grey", hex: "#5a5e5c" },
    ],
    sizes: sizesMen,
    images: [
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.7,
    reviewCount: 64,
    inStock: true,
    featured: true,
    technology: ["Water Resistant Materials", "Anti Slip Rubber Sole", "Shock Absorption"],
    specs: {
      Weight: "320g (UK 9)",
      Use: "Hiking / trail walk",
    },
  },
  {
    id: "s11",
    slug: "court-ace",
    name: "Court Ace",
    price: 8799,
    description:
      "Tennis and multi-court shoe with durable upper and pivot zones for quick direction changes.",
    details: [
      "Durable synthetic upper",
      "Pivot-point outsole",
      "Lateral stability cage",
      "Cushioned midsole for long matches",
    ],
    materials: "Synthetic leather, mesh, rubber",
    collection: "women",
    category: "training",
    gender: "women",
    sport: "tennis",
    brand: "SOLEVA",
    colors: [
      { name: "Ace White", hex: "#fafafa" },
      { name: "Match Green", hex: "#2f4a3c" },
    ],
    sizes: sizesWomen,
    images: [
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.5,
    reviewCount: 41,
    inStock: true,
    technology: ["Anti Slip Rubber Sole", "Shock Absorption"],
    specs: {
      Weight: "275g (UK 6)",
      Use: "Tennis / court",
    },
  },
  {
    id: "s12",
    slug: "pulse-limited",
    name: "Pulse Limited",
    price: 13999,
    compareAt: 15999,
    description:
      "Flagship limited edition with reflective accents and our softest Ultra Cushion Foam compound to date.",
    details: [
      "Limited production run",
      "Reflective 3M-style hits",
      "Softest Ultra Cushion compound",
      "Numbered hangtag",
    ],
    materials: "Premium knit, Ultra Cushion Foam, rubber",
    collection: "limited",
    category: "limited",
    gender: "unisex",
    sport: "lifestyle",
    brand: "SOLEVA",
    colors: [
      { name: "Neon Pulse", hex: "#FF5A1F" },
      { name: "Graphite", hex: "#2a2a2a" },
    ],
    sizes: sizesUnisex,
    images: [
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=80",
    ],
    rating: 4.9,
    reviewCount: 29,
    inStock: true,
    featured: true,
    new: true,
    technology: [
      "Ultra Cushion Foam",
      "Breathable Knit Upper",
      "Lightweight Construction",
    ],
    specs: {
      Weight: "235g (UK 9)",
      Use: "Limited / lifestyle",
    },
  },
];

export type Review = {
  id: string;
  productSlug: string;
  name: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  photo?: string;
  date: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    productSlug: "velocity-runner",
    name: "Aarav M.",
    rating: 5,
    title: "Best daily trainer I’ve owned",
    body: "Ran 200+ km already. Cushioning still feels fresh and the knit doesn’t overheat on humid mornings.",
    verified: true,
    photo:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
    date: "2026-06-12",
  },
  {
    id: "r2",
    productSlug: "urban-motion",
    name: "Priya S.",
    rating: 5,
    title: "Looks premium, feels light",
    body: "Wore these all weekend around the city. No break-in blisters and they pair with everything.",
    verified: true,
    date: "2026-05-28",
  },
  {
    id: "r3",
    productSlug: "cloudsprint-elite",
    name: "Neha K.",
    rating: 4,
    title: "Soft landings for long runs",
    body: "Perfect for my Sunday long run. True to size — go with your usual UK size.",
    verified: true,
    photo:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=400&q=80",
    date: "2026-07-02",
  },
  {
    id: "r4",
    productSlug: "flexmotion",
    name: "Rohan D.",
    rating: 5,
    title: "Stable for lifting and HIIT",
    body: "Finally a shoe that doesn’t wobble on lunges. Grip on rubber gym floors is excellent.",
    verified: true,
    date: "2026-04-19",
  },
  {
    id: "r5",
    productSlug: "streetpulse",
    name: "Ishaan P.",
    rating: 5,
    title: "Worth the drop",
    body: "Limited colorway looks even better in person. Thick midsole but still flexible.",
    verified: true,
    date: "2026-07-18",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}

export function getProductsByCollection(slug: string) {
  if (slug === "men") {
    return products.filter((p) => p.gender === "men" || p.gender === "unisex");
  }
  if (slug === "women") {
    return products.filter((p) => p.gender === "women" || p.gender === "unisex");
  }
  return products.filter(
    (p) => p.collection === slug || p.category === slug || p.sport === slug,
  );
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured);
}

export function getNewArrivals() {
  return products.filter((p) => p.new);
}

export function getBestSellers() {
  return products.filter((p) => p.bestSeller);
}

export function getReviewsForProduct(slug: string) {
  return reviews.filter((r) => r.productSlug === slug);
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function discountPercent(price: number, compareAt?: number) {
  if (!compareAt || compareAt <= price) return null;
  return Math.round(((compareAt - price) / compareAt) * 100);
}
