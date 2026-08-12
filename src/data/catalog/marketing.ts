import type { Collection } from "./types";

/**
 * Marketing banners only — never used as product SKU images.
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
    slug: "walking",
    name: "Walking",
    description: "Everyday comfort for city walks and long-distance days.",
    image: "/marketing/walking.jpg",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    description: "Street-ready sneakers that move from gym to city.",
    image: "/marketing/lifestyle.jpg",
  },
  {
    slug: "training",
    name: "Training",
    description: "Stable trainers for gym, HIIT, and cross-training sessions.",
    image: "/marketing/training.jpg",
  },
  {
    slug: "trail",
    name: "Trail",
    description: "Grip and protection for hiking, trail running, and outdoor miles.",
    image: "/marketing/trail.jpg",
  },
];

export const marketingCategoryMeta: {
  slug: string;
  name: string;
  image: string;
  href: string;
}[] = [
  {
    slug: "running",
    name: "Running",
    image: "/marketing/running.jpg",
    href: "/collections/running",
  },
  {
    slug: "walking",
    name: "Walking",
    image: "/marketing/walking.jpg",
    href: "/collections/walking",
  },
  {
    slug: "lifestyle",
    name: "Lifestyle",
    image: "/marketing/lifestyle.jpg",
    href: "/collections/lifestyle",
  },
  {
    slug: "training",
    name: "Training",
    image: "/marketing/training.jpg",
    href: "/collections/training",
  },
  {
    slug: "trail",
    name: "Trail",
    image: "/marketing/trail.jpg",
    href: "/collections/trail",
  },
];

export const sports = [
  {
    name: "Running",
    href: "/shop?sport=running",
    image: "/marketing/running.jpg",
  },
  {
    name: "Walking",
    href: "/shop?sport=walking",
    image: "/marketing/walking.jpg",
  },
  {
    name: "Lifestyle",
    href: "/shop?sport=lifestyle",
    image: "/marketing/lifestyle.jpg",
  },
  {
    name: "Training",
    href: "/shop?sport=training",
    image: "/marketing/training.jpg",
  },
  {
    name: "Trail",
    href: "/shop?sport=trail",
    image: "/marketing/trail.jpg",
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
    body: "Multi-zone rubber outsole for grip on wet pavement, gym floors, and trail.",
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
