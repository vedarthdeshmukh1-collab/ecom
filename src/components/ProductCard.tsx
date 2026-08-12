"use client";

import Link from "next/link";
import {
  formatPrice,
  type Product,
} from "@/data/products";
import { ProductImage } from "@/components/ProductImage";
import { useWishlist } from "@/lib/wishlist-context";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { toggle, has } = useWishlist();
  const wished = has(product.id);
  const primary = product.images.primary;
  const secondary = product.images.secondary;
  const isNew = product.new || product.badge?.toLowerCase().includes("new");

  return (
    <article className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white">
        <Link href={`/product/${product.slug}`} className="block h-full">
          <ProductImage
            src={primary}
            alt={product.name}
            fill
            priority={priority}
            className={`object-contain p-5 transition duration-500 md:p-7 ${
              secondary ? "group-hover:opacity-0" : "group-hover:scale-[1.03]"
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {secondary && (
            <ProductImage
              src={secondary}
              alt=""
              fill
              className="object-contain p-5 opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 md:p-7"
              sizes="(max-width: 768px) 50vw, 25vw"
              showUnavailable={false}
            />
          )}
        </Link>

        {isNew && (
          <span className="absolute left-3 top-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
            New
          </span>
        )}
        {!isNew && product.badge && (
          <span className="absolute left-3 top-3 text-[10px] font-bold uppercase tracking-[0.14em] text-ink">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => toggle(product.id)}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-sm opacity-0 transition group-hover:opacity-100"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        >
          {wished ? "♥" : "♡"}
        </button>
      </div>

      <Link href={`/product/${product.slug}`} className="mt-3 block">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-medium text-ink md:text-[0.95rem]">
              {product.name}
            </h3>
            <p className="mt-0.5 truncate text-xs text-muted">
              {product.primaryColor ?? product.color}
            </p>
          </div>
          <p className="shrink-0 text-sm font-medium text-ink">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="mt-2.5 flex items-center gap-1.5">
          {(product.colors?.length
            ? product.colors
            : [{ name: product.color, hex: product.colorHex }]
          )
            .slice(0, 4)
            .map((c) => (
              <span
                key={c.name}
                className="h-3 w-3 rounded-full border border-line"
                style={{ backgroundColor: c.hex }}
                title={c.name}
              />
            ))}
        </div>
      </Link>
    </article>
  );
}
