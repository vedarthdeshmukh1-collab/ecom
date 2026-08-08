import { catalogProducts } from "./products";
import {
  marketingCategoryMeta,
  marketingCollections,
  sports,
  technologies,
} from "./marketing";
import type { Product, ProductCategory, ProductImages } from "./types";
import { assertValidCatalog, listAssignedImages } from "./validator";

export type {
  CatalogIssue,
  CatalogValidationResult,
  Collection,
  Gender,
  ImageSlot,
  Product,
  ProductCategory,
  ProductImages,
  ProductSubcategory,
} from "./types";

export { IMAGE_SLOTS } from "./types";
export {
  assertValidCatalog,
  getAssignedImageCount,
  listAssignedImages,
  validateCatalog,
} from "./validator";

/** Storefront product with UI convenience fields (derived, never override ownership). */
export type StoreProduct = Product & {
  /** Alias for originalPrice — used by pricing UI */
  compareAt?: number;
  primaryColor: string;
  colors: { name: string; hex: string }[];
  /** Collection routing key — mirrors category (or gender for men/women pages) */
  collection: string;
  /** Sport filter key derived from category/subcategory */
  sport: string;
  brand: string;
};

function sportFromProduct(product: Product): string {
  switch (product.category) {
    case "running":
      return "running";
    case "walking":
      return "walking";
    case "training":
      return "gym";
    case "basketball":
      return "basketball";
    case "trail":
      return "hiking";
    case "lifestyle":
      return "lifestyle";
    default:
      return product.category;
  }
}

function toStoreProduct(product: Product): StoreProduct {
  return {
    ...product,
    compareAt: product.originalPrice,
    primaryColor: product.color,
    colors: [{ name: product.color, hex: product.colorHex }],
    collection: product.category,
    sport: sportFromProduct(product),
    brand: "SOLEVA",
  };
}

export const products: StoreProduct[] = catalogProducts.map(toStoreProduct);

// Validate once at module load in development
if (process.env.NODE_ENV !== "production") {
  assertValidCatalog(catalogProducts);
}

export const collections = marketingCollections;
export const categoryMeta = marketingCategoryMeta;
export { sports, technologies };
export const FREE_SHIPPING_THRESHOLD = 3000;

export type Review = {
  id: string;
  productSlug: string;
  name: string;
  rating: number;
  title: string;
  body: string;
  verified: boolean;
  date: string;
  photo?: string;
};

export const reviews: Review[] = [
  {
    id: "r1",
    productSlug: "velocity-runner",
    name: "Aarav M.",
    rating: 5,
    title: "Daily miles feel effortless",
    body: "Light, breathable, and the white colorway stays clean. Exactly the Velocity Runner I ordered.",
    verified: true,
    date: "2026-06-12",
  },
  {
    id: "r2",
    productSlug: "cloud-walk",
    name: "Neha S.",
    rating: 5,
    title: "All-day comfort",
    body: "Walked 12k steps without hotspots. Soft collar and true-to-size fit.",
    verified: true,
    date: "2026-05-28",
  },
  {
    id: "r3",
    productSlug: "forge-gym",
    name: "Rohan D.",
    rating: 5,
    title: "Stable for lifting and HIIT",
    body: "Flat base is perfect for squats. Grip on rubber gym floors is excellent.",
    verified: true,
    date: "2026-04-19",
  },
  {
    id: "r4",
    productSlug: "urban-motion",
    name: "Ishaan P.",
    rating: 5,
    title: "Street-ready",
    body: "Looks exactly like the product photos. Thick midsole but still flexible.",
    verified: true,
    date: "2026-07-18",
  },
  {
    id: "r5",
    productSlug: "ridge-trail",
    name: "Kavya R.",
    rating: 5,
    title: "Grip on wet rock",
    body: "Trail lugs bite hard on monsoon trails. No roll on technical sections.",
    verified: true,
    date: "2026-07-02",
  },
];

/**
 * Ordered gallery for a product — only assigned (non-null) owned slots.
 * Never invents or borrows images.
 */
export function productImageList(product: Product | StoreProduct): string[] {
  return listAssignedImages(product.images).map((item) => item.url);
}

export function productGallerySlots(product: Product | StoreProduct) {
  return listAssignedImages(product.images);
}

export function allCatalogImageUrls(): string[] {
  return products.flatMap((p) => productImageList(p));
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
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
    (p) => p.collection === slug || p.category === (slug as ProductCategory),
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

/** Recommended products use their own image ownership — never the source gallery. */
export function getRecommendedProducts(product: Product | StoreProduct, limit = 4) {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category || p.gender === product.gender),
    )
    .slice(0, limit);
}

export function emptyImages(): ProductImages {
  return {
    primary: "",
    secondary: null,
    side: null,
    back: null,
    top: null,
    lifestyle: null,
  };
}

export { marketingCollections, marketingCategoryMeta };
