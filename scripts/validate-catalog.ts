/**
 * CLI catalog validator — exits non-zero on errors.
 * Run: npx tsx scripts/validate-catalog.ts
 */
import { catalogProducts } from "../src/data/catalog/products";
import { validateCatalog } from "../src/data/catalog/validator";

const result = validateCatalog(catalogProducts);

for (const warning of result.warnings) {
  console.warn(
    `[CATALOG WARNING] ${warning.productName ?? ""} ${warning.code}: ${warning.message}`,
  );
}

if (!result.ok) {
  for (const error of result.errors) {
    console.error(
      `\nPRODUCT CATALOG ERROR\nProduct:\n${error.productName ?? error.productId ?? "unknown"}\n\nProblem:\n${error.message}\n`,
    );
  }
  console.error(`\nFAILED: ${result.errors.length} error(s)`);
  process.exit(1);
}

console.log(
  `PASSED: ${catalogProducts.length} products, 0 duplicate IDs, 0 duplicate image URLs, 0 furniture data.`,
);
console.log(`Warnings: ${result.warnings.length} (sparse galleries are OK)`);
