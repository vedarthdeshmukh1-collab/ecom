import type { Collection } from "./types";

/**
 * Marketing banners only.
 * These URLs must NEVER be used as product images.
 */
export const marketingCollections: Collection[] = [
  {
    slug: "men",
    name: "Men",
    description: "Performance and lifestyle footwear engineered for every mile.",
    image: "/marketing/men.jpg",
  },
  {
    slug: "women",
    name: "Women",
    description: "Light, responsive silhouettes built for training and everyday.",
    image: "/marketing/women.jpg",
  },
  {
    slug: "running",
    name: "Running",
    description: "Cushioned, breathable runners for road, tempo, and recovery.",
    image: "/marketing/running.jpg",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "Street-ready sneakers that move from gym to city.",
    image: "/marketing/lifestyle.jpg",
  },
  {
    slug: "trail",
    name: "Trail",
    description: "Grip and protection for hiking, trail running, and outdoor miles.",
    image: "/marketing/trail.jpg",
  },
  {
    slug: "training",
    name: "Training",
    description: "Stable trainers for gym, HIIT, and cross-training sessions.",
    image: "/marketing/training.jpg",
  },
  {
    slug: "basketball",
    name: "Basketball",
    description: "Court performance and lifestyle basketball footwear.",
    image: "/marketing/basketball.jpg",
  },
  {
    slug: "walking",
    name: "Walking",
    description: "Everyday comfort for city walks and long-distance days.",
    image: "/marketing/walking.jpg",
  },
];

export const marketingCategoryMeta: {
  slug: string;
  name: string;
  image: string;
  href: string;
}[] = [
  {
    slug: "men",
    name: "Men",
    image: "/marketing/men.jpg",
    href: "/collections/men",
  },
  {
    slug: "women",
    name: "Women",
    image: "/marketing/women.jpg",
    href: "/collections/women",
  },
  {
    slug: "running",
    name: "Running",
    image: "/marketing/running.jpg",
    href: "/collections/running",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    image: "/marketing/lifestyle.jpg",
    href: "/collections/lifestyle",
  },
  {
    slug: "trail",
    name: "Trail",
    image: "/marketing/trail.jpg",
    href: "/collections/trail",
  },
];

/** Marketing sport tiles — never used as product SKU images. */
export const sports = [
  {
    name: "Running",
    href: "/shop?sport=running",
    image: "/marketing/running.jpg",
  },
  {
    name: "Gym",
    href: "/shop?sport=gym",
    image: "/marketing/training.jpg",
  },
  {
    name: "Walking",
    href: "/shop?sport=walking",
    image: "/marketing/walking.jpg",
  },
  {
    name: "Basketball",
    href: "/shop?sport=basketball",
    image: "/marketing/basketball.jpg",
  },
  {
    name: "Hiking",
    href: "/shop?sport=hiking",
    image: "/marketing/trail.jpg",
  },
  {
    name: "Lifestyle",
    href: "/shop?sport=lifestyle",
    image: "/marketing/lifestyle.jpg",
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
