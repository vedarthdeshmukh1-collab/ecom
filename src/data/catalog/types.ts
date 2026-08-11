/**
 * SOLEVA catalog types — deterministic product ownership model.
 * Every product owns its image set. Image URLs must never be shared across products.
 */

export type ProductCategory =
  | "running"
  | "walking"
  | "training"
  | "lifestyle"
  | "trail";

export type ProductSubcategory =
  | "road-running"
  | "everyday-walking"
  | "workout"
  | "streetwear"
  | "outdoor";

export type Gender = "men" | "women" | "unisex";

export type ProductBadge =
  | "BEST SELLER"
  | "ALL DAY COMFORT"
  | "NEW"
  | "PERFORMANCE"
  | "OUTDOOR";

/**
 * Product-owned image set.
 * `null` means the slot is intentionally unavailable (never borrow another product's image).
 */
export type ProductImages = {
  primary: string | null;
  secondary: string | null;
  side: string | null;
  rear: string | null;
  top: string | null;
  sole: string | null;
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
  badge?: ProductBadge;
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
  "rear",
  "top",
  "sole",
  "lifestyle",
] as const;

export type ImageSlot = (typeof IMAGE_SLOTS)[number];

/** Expected on-disk filenames for each owned slot */
export const IMAGE_FILENAMES: Record<ImageSlot, string> = {
  primary: "primary.webp",
  secondary: "secondary.webp",
  side: "side.webp",
  rear: "rear.webp",
  top: "top.webp",
  sole: "sole.webp",
  lifestyle: "lifestyle.webp",
};
