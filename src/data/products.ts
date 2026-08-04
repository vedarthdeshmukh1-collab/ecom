/**
 * SOLEVA catalog — every product image URL is unique across the entire catalog.
 * Image sets are curated by category + primary color from Unsplash & Pexels.
 */

export type Collection = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export type ProductCategory =
  | "running"
  | "walking"
  | "casual"
  | "basketball"
  | "training"
  | "lifestyle"
  | "trail"
  | "limited";

export type Gender = "men" | "women" | "unisex";

export type ProductImageSet = {
  mainImage: string;
  hoverImage: string;
  /** Side, back, top (and extra detail shots) — same colorway/model family */
  gallery: string[];
  thumbnail: string;
  lifestyleImage: string;
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
  category: ProductCategory;
  gender: Gender;
  sport: string;
  brand: string;
  /** Primary colorway shown in all product photos */
  primaryColor: string;
  colors: { name: string; hex: string }[];
  sizes: number[];
  images: ProductImageSet;
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

const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const p = (id: number, w = 1400) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export function productImageList(product: Product): string[] {
  const { mainImage, hoverImage, gallery, lifestyleImage } = product.images;
  return [mainImage, hoverImage, ...gallery, lifestyleImage];
}

export function allCatalogImageUrls(): string[] {
  return products.flatMap(productImageList);
}

export const collections: Collection[] = [
  {
    slug: "men",
    name: "Men",
    description: "Performance and lifestyle footwear engineered for every mile.",
    image: u("photo-1552674605-db6ffd4facb5", 1600),
  },
  {
    slug: "women",
    name: "Women",
    description: "Light, responsive silhouettes built for training and everyday.",
    image: u("photo-1554068865-24cecd4e34b8", 1600),
  },
  {
    slug: "running",
    name: "Running",
    description: "Cushioned, breathable runners for road, tempo, and recovery.",
    image: u("photo-1476480862126-209bfaa8edc8", 1600),
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "Street-ready sneakers that move from gym to city without missing a step.",
    image: p(298863, 1600),
  },
  {
    slug: "limited",
    name: "Limited Edition",
    description: "Drop-exclusive colorways and materials — while they last.",
    image: p(2385477, 1600),
  },
];

export const categoryMeta: {
  slug: string;
  name: string;
  image: string;
  href: string;
}[] = [
  {
    slug: "men",
    name: "Men",
    image: p(1456706, 900),
    href: "/collections/men",
  },
  {
    slug: "women",
    name: "Women",
    image: p(336372, 900),
    href: "/collections/women",
  },
  {
    slug: "running",
    name: "Running",
    image: p(2529148, 900),
    href: "/shop?category=running",
  },
  {
    slug: "casual",
    name: "Casual",
    image: p(267320, 900),
    href: "/shop?category=casual",
  },
  {
    slug: "basketball",
    name: "Basketball",
    image: p(4753928, 900),
    href: "/shop?category=basketball",
  },
  {
    slug: "training",
    name: "Training",
    image: u("photo-1517836357463-d25dfeac3438", 900),
    href: "/shop?category=training",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    image: p(292999, 900),
    href: "/shop?category=lifestyle",
  },
  {
    slug: "limited",
    name: "Limited Edition",
    image: p(2048548, 900),
    href: "/collections/limited",
  },
];

export const sports = [
  {
    name: "Running",
    href: "/shop?sport=running",
    image: u("photo-1502904550040-7534597429ae", 900),
  },
  {
    name: "Gym",
    href: "/shop?sport=gym",
    image: u("photo-1571019614242-c5c5dee9f50b", 900),
  },
  {
    name: "Walking",
    href: "/shop?sport=walking",
    image: u("photo-1571008887538-b36bb32f4571", 900),
  },
  {
    name: "Basketball",
    href: "/shop?sport=basketball",
    image: u("photo-1546519638-68e109498ffc", 900),
  },
  {
    name: "Tennis",
    href: "/shop?sport=tennis",
    image: p(5710081, 900),
  },
  {
    name: "Hiking",
    href: "/shop?sport=hiking",
    image: u("photo-1541534741688-6078c6bfb5c5", 900),
  },
  {
    name: "Lifestyle",
    href: "/shop?sport=lifestyle",
    image: p(731082, 900),
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
    price: 5999,
    compareAt: 7499,
    description:
      "A daily white road trainer with Ultra Cushion Foam and a breathable knit upper. Built for tempo runs, recovery miles, and the commute that follows.",
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
    primaryColor: "Blue",
    colors: [{ name: "Volt Blue", hex: "#2b6cff" }],
    sizes: sizesUnisex,
    images: {
      mainImage: u("photo-1637437757614-6491c8e915b5"),
      hoverImage: u("photo-1608229751021-ed4bd8677753"),
      gallery: [
        u("photo-1600185365483-26d7a4cc7519"),
        u("photo-1600185365926-3a2ce3cdb9eb"),
        p(2529147),
      ],
      thumbnail: u("photo-1637437757614-6491c8e915b5", 400),
      lifestyleImage: u("photo-1770177132209-e67de0b6dad8"),
    },
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
    price: 4499,
    description:
      "Street-ready black lifestyle sneaker with soft foam underfoot and a clean silhouette for denim or training kit.",
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
    primaryColor: "Black",
    colors: [{ name: "Ink Black", hex: "#111111" }],
    sizes: sizesUnisex,
    images: {
      mainImage: u("photo-1634624943356-189dd1d5d4bf"),
      hoverImage: u("photo-1543508282-6319a3e2621f"),
      gallery: [p(1598505), p(1598508), p(292998)],
      thumbnail: u("photo-1634624943356-189dd1d5d4bf", 400),
      lifestyleImage: p(1124466),
    },
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
    price: 8999,
    compareAt: 10499,
    description:
      "Race-day energy for serious sessions. Dual-density cushioning and a locked-in fit keep you sharp through intervals.",
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
    primaryColor: "Black",
    colors: [{ name: "Midnight", hex: "#0d1117" }],
    sizes: sizesMen,
    images: {
      mainImage: u("photo-1620138547487-bd817502a919"),
      hoverImage: p(1456705),
      gallery: [p(1456707), p(1478441), p(1478442)],
      thumbnail: u("photo-1620138547487-bd817502a919", 400),
      lifestyleImage: u("photo-1460353581641-37baddab0fa2"),
    },
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
    price: 8499,
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
    primaryColor: "White",
    colors: [{ name: "Pearl", hex: "#f0ece6" }],
    sizes: sizesWomen,
    images: {
      mainImage: u("photo-1600269452121-4f2416e55c28"),
      hoverImage: u("photo-1614252369475-531eba835eb1"),
      gallery: [p(2529146), p(2529149), p(1032110)],
      thumbnail: u("photo-1600269452121-4f2416e55c28", 400),
      lifestyleImage: u("photo-1520256862855-398228c41684"),
    },
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
    price: 5499,
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
    primaryColor: "Grey",
    colors: [{ name: "Storm Grey", hex: "#6b6b6b" }],
    sizes: sizesUnisex,
    images: {
      mainImage: u("photo-1705997696447-acfa8f31da50"),
      hoverImage: p(292997),
      gallery: [p(2300333), p(2300334), p(2300335)],
      thumbnail: u("photo-1705997696447-acfa8f31da50", 400),
      lifestyleImage: u("photo-1518611012118-696072aa579a"),
    },
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
    price: 6999,
    compareAt: 7999,
    description:
      "Limited drop in signal orange with premium overlays and a chunky foam midsole for city miles and weekend fits.",
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
    primaryColor: "Orange",
    colors: [{ name: "Signal Orange", hex: "#FF5A1F" }],
    sizes: sizesUnisex,
    images: {
      mainImage: u("photo-1542291026-7eec264c27ff"),
      hoverImage: u("photo-1552346154-21d32810aba3"),
      gallery: [p(1895019), p(1895018), p(2048547)],
      thumbnail: u("photo-1542291026-7eec264c27ff", 400),
      lifestyleImage: p(2385478),
    },
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
    price: 7999,
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
    primaryColor: "White",
    colors: [{ name: "Flight White", hex: "#f5f5f5" }],
    sizes: sizesMen,
    images: {
      mainImage: u("photo-1625875061556-7b794d9c4a4e"),
      hoverImage: u("photo-1768851342799-d55a6801713c"),
      gallery: [
        p(1464625),
        u("photo-1491553895911-0055eca6402d"),
        u("photo-1617606002779-51d866bdd1d1"),
      ],
      thumbnail: u("photo-1625875061556-7b794d9c4a4e", 400),
      lifestyleImage: u("photo-1556906781-9a412961c28c"),
    },
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
    slug: "cloud-walk",
    name: "Cloud Walk",
    price: 4999,
    description:
      "Neutral grey walking shoe with soft landings, a wide toe box, and all-day comfort out of the box.",
    details: [
      "Soft Ultra Cushion Foam",
      "Wide comfort last",
      "Breathable mesh upper",
      "Durable heel rubber",
    ],
    materials: "Mesh, foam, rubber",
    collection: "women",
    category: "walking",
    gender: "women",
    sport: "walking",
    brand: "SOLEVA",
    primaryColor: "Grey",
    colors: [{ name: "Soft Grey", hex: "#9a9a9a" }],
    sizes: sizesWomen,
    images: {
      mainImage: u("photo-1560769629-975ec94e6a86"),
      hoverImage: u("photo-1562183241-b937e95585b6"),
      gallery: [p(1670765), p(1670766), p(1858406)],
      thumbnail: u("photo-1560769629-975ec94e6a86", 400),
      lifestyleImage: p(1858407),
    },
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
    price: 3999,
    compareAt: 4599,
    description:
      "Minimal white casual sneaker with a flexible sole and washable knit upper — your go-to for travel days and city walks.",
    details: [
      "Machine-washable knit",
      "Flexible rubber outsole",
      "Slip-on friendly fit",
      "Removable cushioned insole",
    ],
    materials: "Knit textile, rubber",
    collection: "lifestyle",
    category: "casual",
    gender: "unisex",
    sport: "lifestyle",
    brand: "SOLEVA",
    primaryColor: "White",
    colors: [{ name: "Pure White", hex: "#ffffff" }],
    sizes: sizesUnisex,
    images: {
      mainImage: u("photo-1680204101400-aeac783c9d87"),
      hoverImage: u("photo-1549298916-b41d501d3772"),
      gallery: [p(1240892), p(1302328), p(271711)],
      thumbnail: u("photo-1680204101400-aeac783c9d87", 400),
      lifestyleImage: p(271712),
    },
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
    slug: "trail-force",
    name: "Trail Force",
    price: 7499,
    description:
      "Slate all-terrain trainer with water-resistant upper and aggressive tread for trail-adjacent paths and light hikes.",
    details: [
      "Water-resistant membrane",
      "Aggressive multi-surface tread",
      "Protective toe cap",
      "Gusseted tongue keeps debris out",
    ],
    materials: "Ripstop, water-resistant membrane, rubber",
    collection: "men",
    category: "trail",
    gender: "men",
    sport: "hiking",
    brand: "SOLEVA",
    primaryColor: "Slate",
    colors: [{ name: "Trail Slate", hex: "#5a6b7a" }],
    sizes: sizesMen,
    images: {
      mainImage: u("photo-1776725121337-48de2c501672"),
      hoverImage: u("photo-1765530813373-255480ea4b42"),
      gallery: [u("photo-1775400787816-5f337c84a87d"), p(4462781), p(4462782)],
      thumbnail: u("photo-1776725121337-48de2c501672", 400),
      lifestyleImage: p(4462783),
    },
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
    price: 6299,
    description:
      "White tennis and multi-court shoe with durable upper and pivot zones for quick direction changes.",
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
    primaryColor: "White",
    colors: [{ name: "Ace White", hex: "#fafafa" }],
    sizes: sizesWomen,
    images: {
      mainImage: u("photo-1600180758890-6b94519a8ba6"),
      hoverImage: u("photo-1595950653106-6c9ebd614d3a"),
      gallery: [p(6050916), p(6050917), p(6050918)],
      thumbnail: u("photo-1600180758890-6b94519a8ba6", 400),
      lifestyleImage: p(6551096),
    },
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
    price: 9999,
    compareAt: 11999,
    description:
      "Flagship limited edition in electric red with reflective accents and our softest Ultra Cushion Foam compound.",
    details: [
      "Limited production run",
      "Reflective hits",
      "Softest Ultra Cushion compound",
      "Numbered hangtag",
    ],
    materials: "Premium knit, Ultra Cushion Foam, rubber",
    collection: "limited",
    category: "limited",
    gender: "unisex",
    sport: "lifestyle",
    brand: "SOLEVA",
    primaryColor: "Red",
    colors: [{ name: "Electric Red", hex: "#c41e3a" }],
    sizes: sizesUnisex,
    images: {
      mainImage: u("photo-1581068505339-d155712f0add"),
      hoverImage: u("photo-1525966222134-fcfa99b8ae77"),
      gallery: [p(3261068), p(3280129), p(3280130)],
      thumbnail: u("photo-1581068505339-d155712f0add", 400),
      lifestyleImage: p(2421374),
    },
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
    photo: p(1032111, 400),
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
    photo: p(1124465, 400),
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
