import Image from "next/image";
import { notFound } from "next/navigation";
import {
  IMAGE_SLOTS,
  products,
  validateCatalog,
  type ImageSlot,
} from "@/data/products";
import { catalogProducts } from "@/data/catalog/products";

export const dynamic = "force-dynamic";

/**
 * Development-only catalogue audit.
 * Inspect every product's owned image slots and duplicate ownership errors.
 */
export default function CatalogAuditPage() {
  if (process.env.NODE_ENV === "production") {
    notFound();
  }

  const result = validateCatalog(catalogProducts);

  const urlOwners = new Map<string, { id: string; name: string; slot: string }[]>();
  for (const product of catalogProducts) {
    for (const slot of IMAGE_SLOTS) {
      const url = product.images[slot];
      if (!url) continue;
      const key = url.split("?")[0]!;
      const list = urlOwners.get(key) ?? [];
      list.push({ id: product.id, name: product.name, slot });
      urlOwners.set(key, list);
    }
  }

  function statusFor(productId: string) {
    const productErrors = result.errors.filter((e) => e.productId === productId);
    if (productErrors.length > 0) return { ok: false, errors: productErrors };
    return { ok: true, errors: [] };
  }

  return (
    <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Development
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Catalog audit
        </h1>
        <p className="mt-4 text-muted">
          Every product owns its image set. Duplicate URLs across products are
          flagged. Missing optional slots show as unavailable — never borrowed.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-mist px-3 py-1.5 font-medium">
            Products: {products.length}
          </span>
          <span
            className={`rounded-full px-3 py-1.5 font-medium ${
              result.ok
                ? "bg-emerald-100 text-emerald-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {result.ok
              ? "✓ validateCatalog PASSED"
              : `❌ ${result.errors.length} error(s)`}
          </span>
          <span className="rounded-full bg-amber-50 px-3 py-1.5 font-medium text-amber-800">
            {result.warnings.length} warning(s)
          </span>
        </div>
      </header>

      {!result.ok && (
        <section className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-5">
          <h2 className="font-display text-xl font-bold text-red-900">
            PRODUCT CATALOG ERROR
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-red-900">
            {result.errors.map((error, i) => (
              <li key={`${error.code}-${i}`} className="rounded-xl bg-white/70 p-3">
                <p className="font-semibold">
                  Product: {error.productName ?? error.productId ?? "unknown"}
                </p>
                <p className="mt-1">Problem: {error.message}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-red-700">
                  {error.code}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}

      <div className="mt-12 space-y-10">
        {catalogProducts.map((product) => {
          const status = statusFor(product.id);
          return (
            <article
              key={product.id}
              className="rounded-2xl border border-line bg-paper p-5 md:p-6"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    {product.id}
                  </p>
                  <h2 className="mt-1 font-display text-2xl font-bold">
                    {product.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted">
                    {product.category} / {product.subcategory} · Color:{" "}
                    {product.color}
                  </p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                    status.ok
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {status.ok ? "✓ VALID" : "❌ IMAGE ERROR"}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
                {IMAGE_SLOTS.map((slot: ImageSlot) => {
                  const url = product.images[slot];
                  const owners = url
                    ? urlOwners.get(url.split("?")[0]!) ?? []
                    : [];
                  const duplicate = owners.length > 1;
                  return (
                    <div key={slot} className="space-y-2">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                        {slot}
                      </p>
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-mist">
                        {url ? (
                          <Image
                            src={url}
                            alt={`${product.name} ${slot}`}
                            fill
                            className="object-cover"
                            sizes="160px"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center px-2 text-center text-[10px] font-medium uppercase tracking-wide text-muted">
                            Image unavailable
                          </div>
                        )}
                      </div>
                      {duplicate && (
                        <div className="rounded-lg bg-red-50 p-2 text-[10px] leading-snug text-red-800">
                          <p className="font-bold">DUPLICATE IMAGE</p>
                          <p className="mt-1">Used by:</p>
                          <ul className="mt-0.5 list-disc pl-3">
                            {owners.map((o) => (
                              <li key={`${o.id}-${o.slot}`}>
                                {o.name} ({o.slot})
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {url && (
                        <p className="truncate text-[10px] text-muted" title={url}>
                          {url}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
