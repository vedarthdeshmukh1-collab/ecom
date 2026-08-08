/**
 * Public catalogue API.
 * All product data flows through the owned-image catalog architecture.
 */
export {
  allCatalogImageUrls,
  assertValidCatalog,
  categoryMeta,
  collections,
  discountPercent,
  emptyImages,
  formatPrice,
  FREE_SHIPPING_THRESHOLD,
  getAssignedImageCount,
  getBestSellers,
  getCollection,
  getFeaturedProducts,
  getNewArrivals,
  getProduct,
  getProductById,
  getProductsByCollection,
  getRecommendedProducts,
  getReviewsForProduct,
  IMAGE_SLOTS,
  listAssignedImages,
  productGallerySlots,
  productImageList,
  products,
  reviews,
  sports,
  technologies,
  validateCatalog,
  type CatalogIssue,
  type CatalogValidationResult,
  type Collection,
  type Gender,
  type ImageSlot,
  type ProductCategory,
  type ProductImages,
  type ProductSubcategory,
  type Review,
  type StoreProduct,
} from "./catalog";

/** App-facing product type (owned images + UI convenience fields). */
export type { StoreProduct as Product } from "./catalog";
