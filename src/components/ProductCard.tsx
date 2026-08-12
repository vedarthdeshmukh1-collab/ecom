"use client";

import Link from "next/link";
import { useState } from "react";
import {
  discountPercent,
  formatPrice,
  type Product,
} from "@/data/products";
import { ProductImage } from "@/components/ProductImage";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-xs text-accent" aria-label={`${rating} out of 5`}>
      {"★".repeat(Math.round(rating))}
      <span className="text-stone">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const { addItem, openCart } = useCart();
  const { toggle, has } = useWishlist();
  const [quickSize, setQuickSize] = useState<string | null>(null);
  const wished = has(product.id);
  const discount = discountPercent(product.price, product.compareAt);
  const primary = product.images.primary;
  const secondary = product.images.secondary;

  return (
    <article className="group relative">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-mist">
        <Link href={`/product/${product.slug}`} className="block h-full">
          <ProductImage
            src={primary}
            alt={product.name}
            fill
            priority={priority}
            className={`object-contain p-3 transition duration-500 md:p-5 ${
              secondary ? "group-hover:opacity-0" : "group-hover:scale-[1.03]"
            }`}
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          {secondary && (
            <ProductImage
              src={secondary}
              alt=""
              fill
              className="object-contain p-3 opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100 md:p-5"
              sizes="(max-width: 768px) 50vw, 25vw"
              showUnavailable={false}
            />
          )}
        </Link>

        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badge && (
            <span className="rounded-md bg-ink/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper">
              {product.badge}
            </span>
          )}
          {!product.badge && product.new && (
            <span className="rounded-md bg-ink/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper">
              New
            </span>
          )}
          {discount && (
            <span className="rounded-md bg-accent px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-paper">
              -{discount}%
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => toggle(product.id)}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md bg-paper/95 text-sm transition hover:bg-paper"
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
        >
          {wished ? "♥" : "♡"}
        </button>

        <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="rounded-xl bg-paper/95 p-2 shadow-sm backdrop-blur">
            <div className="mb-2 flex flex-wrap gap-1">
              {product.sizes.slice(0, 6).map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setQuickSize(size)}
                  className={`min-w-8 rounded-md px-2 py-1 text-[11px] font-medium transition ${
                    quickSize === size
                      ? "bg-ink text-paper"
                      : "bg-mist text-ink hover:bg-stone"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <Link
                href={`/product/${product.slug}`}
                className="rounded-md border border-line py-2 text-center text-[11px] font-semibold"
              >
                Quick view
              </Link>
              <button
                type="button"
                className="rounded-md bg-accent py-2 text-[11px] font-semibold text-paper transition hover:bg-accent-deep"
                onClick={() => {
                  const size = quickSize ?? product.sizes[0]!;
                  addItem(product, product.colors[0]!.name, size, 1);
                  openCart();
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <Link href={`/product/${product.slug}`} className="mt-3 block">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-display text-base font-medium tracking-tight md:text-lg">
              {product.name}
            </h3>
            <p className="mt-0.5 text-xs text-muted">
              {product.primaryColor} · {product.category}
            </p>
            <div className="mt-1 flex items-center gap-1.5">
              <Stars rating={product.rating} />
              <span className="text-[11px] text-muted">
                ({product.reviewCount})
              </span>
            </div>
          </div>
          <div className="text-right text-sm">
            <p className="font-semibold">{formatPrice(product.price)}</p>
            {product.compareAt && (
              <p className="text-xs text-muted line-through">
                {formatPrice(product.compareAt)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
