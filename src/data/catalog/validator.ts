import type {
  CatalogIssue,
  CatalogValidationResult,
  ImageSlot,
  Product,
  ProductCategory,
  ProductImages,
} from "./types";
import { IMAGE_SLOTS } from "./types";

/** Furniture leftovers — exclude shoe terms like cushioning. */
const FURNITURE_PATTERN =
  /\b(sofa|couch|armchair|dining\s*table|coffee\s*table|bed\s*frame|furniture|home\s*decor|floor\s*lamp|throw\s*cushion|cabinet|dresser|ottoman|bookshelf)\b/i;

const ALLOWED_CATEGORIES: ProductCategory[] = [
  "running",
  "walking",
  "training",
  "lifestyle",
  "trail",
];

/** Exact category assignment from master catalogue */
const EXPECTED_CATEGORY: Record<string, ProductCategory> = {
  "velocity-one": "running",
  cloudstep: "walking",
  "urban-x": "lifestyle",
  "apex-pro": "training",
  trailcore: "trail",
};

function normalizeUrl(url: string): string {
  return url.trim().split("?")[0]!;
}

function collectedImages(images: ProductImages): { slot: ImageSlot; url: string }[] {
  const out: { slot: ImageSlot; url: string }[] = [];
  for (const slot of IMAGE_SLOTS) {
    const value = images[slot];
    if (value) out.push({ slot, url: value });
  }
  return out;
}

/**
 * Strict catalog validator.
 * - Unique product IDs
 * - Unique image URLs across the entire catalog (no shared ownership)
 * - Required primary image path
 * - Correct category assignments
 * - No furniture-related product data
 */
export function validateCatalog(products: Product[]): CatalogValidationResult {
  const errors: CatalogIssue[] = [];
  const warnings: CatalogIssue[] = [];

  const idOwners = new Map<string, string>();
  const slugOwners = new Map<string, string>();
  const imageOwners = new Map<string, { productId: string; name: string; slot: string }>();

  if (products.length === 0) {
    errors.push({
      severity: "error",
      code: "EMPTY_CATALOG",
      message: "Catalog contains no products.",
    });
  }

  if (products.length !== 5) {
    warnings.push({
      severity: "warning",
      code: "UNEXPECTED_COUNT",
      message: `Master catalogue expects 5 products, found ${products.length}.`,
    });
  }

  for (const product of products) {
    const label = product.name || product.id || "(unnamed)";

    if (!product.id?.trim()) {
      errors.push({
        severity: "error",
        productName: label,
        code: "MISSING_ID",
        message: "Product is missing a permanent id.",
      });
    } else if (idOwners.has(product.id)) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "DUPLICATE_ID",
        message: `Product ID already used by: ${idOwners.get(product.id)}`,
      });
    } else {
      idOwners.set(product.id, label);
    }

    if (!product.slug?.trim()) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "MISSING_SLUG",
        message: "Product is missing a slug.",
      });
    } else if (slugOwners.has(product.slug)) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "DUPLICATE_SLUG",
        message: `Slug already used by: ${slugOwners.get(product.slug)}`,
      });
    } else {
      slugOwners.set(product.slug, label);
    }

    if (!product.name?.trim()) {
      errors.push({
        severity: "error",
        productId: product.id,
        code: "MISSING_NAME",
        message: "Product is missing a name.",
      });
    }

    if (!product.category || !ALLOWED_CATEGORIES.includes(product.category)) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "MISSING_CATEGORY",
        message: "Product is missing a valid category.",
      });
    }

    const expected = EXPECTED_CATEGORY[product.id];
    if (expected && product.category !== expected) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "WRONG_CATEGORY",
        message: `Expected category "${expected}", found "${product.category}".`,
      });
    }

    if (!product.subcategory) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "MISSING_SUBCATEGORY",
        message: "Product is missing a subcategory.",
      });
    }

    if (!product.color?.trim()) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "MISSING_COLOR",
        message: "Product is missing a color.",
      });
    }

    if (typeof product.price !== "number" || product.price <= 0) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "MISSING_PRICE",
        message: "Product is missing a valid price.",
      });
    }

    if (!product.images?.primary) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "MISSING_PRIMARY",
        message: "Product is missing images.primary.",
      });
    }

    const textBlob = [
      product.name,
      product.slug,
      product.description,
      product.materials,
      ...product.details,
      ...product.tags,
      ...IMAGE_SLOTS.map((slot) => product.images?.[slot]),
    ]
      .filter(Boolean)
      .join(" ");

    if (FURNITURE_PATTERN.test(textBlob)) {
      errors.push({
        severity: "error",
        productId: product.id,
        productName: label,
        code: "FURNITURE_DATA",
        message: "Furniture-related data detected in product fields or image paths.",
      });
    }

    const assigned = collectedImages(product.images);
    if (assigned.length < 4) {
      warnings.push({
        severity: "warning",
        productId: product.id,
        productName: label,
        code: "SPARSE_GALLERY",
        message: `Only ${assigned.length} image slot(s) populated.`,
      });
    }

    for (const { slot, url } of assigned) {
      if (!url.startsWith("/") && !/^https?:\/\//.test(url)) {
        errors.push({
          severity: "error",
          productId: product.id,
          productName: label,
          code: "INVALID_IMAGE_URL",
          message: `Invalid image URL in ${slot}: ${url}`,
        });
        continue;
      }

      // Ownership: image path must live under this product's folder
      if (url.startsWith("/products/") && !url.startsWith(`/products/${product.id}/`)) {
        errors.push({
          severity: "error",
          productId: product.id,
          productName: label,
          code: "CROSS_PRODUCT_IMAGE",
          message: `Image in ${slot} does not belong to product folder /products/${product.id}/: ${url}`,
        });
      }

      const key = normalizeUrl(url);
      const existing = imageOwners.get(key);
      if (existing) {
        errors.push({
          severity: "error",
          productId: product.id,
          productName: label,
          code: "DUPLICATE_IMAGE",
          message: `Image URL already used by: ${existing.name} (${existing.productId} / ${existing.slot}) — slot ${slot}`,
        });
      } else {
        imageOwners.set(key, {
          productId: product.id,
          name: label,
          slot,
        });
      }
    }

    const local = new Set<string>();
    for (const { slot, url } of assigned) {
      const key = normalizeUrl(url);
      if (local.has(key)) {
        errors.push({
          severity: "error",
          productId: product.id,
          productName: label,
          code: "INTERNAL_DUPLICATE_IMAGE",
          message: `Duplicate image within product gallery at slot ${slot}.`,
        });
      }
      local.add(key);
    }
  }

  return {
    ok: errors.length === 0,
    errors,
    warnings,
  };
}

export function assertValidCatalog(products: Product[]): void {
  const result = validateCatalog(products);
  for (const warning of result.warnings) {
    console.warn(
      `[CATALOG WARNING] ${warning.productName ?? ""} ${warning.code}: ${warning.message}`,
    );
  }
  if (!result.ok) {
    for (const error of result.errors) {
      console.error(
        `[PRODUCT CATALOG ERROR]\nProduct: ${error.productName ?? error.productId ?? "unknown"}\nProblem: ${error.message}`,
      );
    }
    throw new Error(
      `Catalog validation failed with ${result.errors.length} error(s). See console for details.`,
    );
  }
}

export function getAssignedImageCount(images: ProductImages): number {
  return collectedImages(images).length;
}

export function listAssignedImages(images: ProductImages) {
  return collectedImages(images);
}
