/**
 * SOLEVA catalog types — deterministic product ownership model.
 * Every product owns its image set. Image URLs must never be shared across products.
 */

export type ProductCategory =
  | "running"
  | "walking"
  | "training"
  | "basketball"
  | "lifestyle"
  | "trail";

export type ProductSubcategory =
  | "road-running"
  | "daily-running"
  | "race-running"
  | "everyday-walking"
  | "comfort-walking"
  | "long-distance-walking"
  | "gym"
  | "cross-training"
  | "workout"
  | "performance-basketball"
  | "lifestyle-basketball"
  | "casual"
  | "streetwear"
  | "premium-sneakers"
  | "hiking"
  | "trail-running"
  | "outdoor";

export type Gender = "men" | "women" | "unisex";

/**
 * Product-owned image set.
 * `null` means the slot is intentionally unavailable (never borrow another product's image).
 */
export type ProductImages = {
  primary: string;
  secondary: string | null;
  side: string | null;
  back: string | null;
  top: string | null;
  lifestyle: string | null;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  subcategory: ProductSubcategory;
  gender: Gender;
  color: string;
  colorHex: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  materials: string;
  images: ProductImages;
  sizes: string[];
  tags: string[];
  rating: number;
  reviewCount: number;
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
  bestSeller?: boolean;
  technology: string[];
  specs: Record<string, string>;
};

export type Collection = {
  slug: string;
  name: string;
  description: string;
  /** Marketing banner only — never used as a product image */
  image: string;
};

export type CatalogIssue = {
  severity: "error" | "warning";
  productId?: string;
  productName?: string;
  code: string;
  message: string;
};

export type CatalogValidationResult = {
  ok: boolean;
  errors: CatalogIssue[];
  warnings: CatalogIssue[];
};

export const IMAGE_SLOTS = [
  "primary",
  "secondary",
  "side",
  "back",
  "top",
  "lifestyle",
] as const;

export type ImageSlot = (typeof IMAGE_SLOTS)[number];
