"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";
import { useWishlist } from "@/lib/wishlist-context";

export function AddToCartPanel({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const { toggle, has } = useWishlist();
  const [color, setColor] = useState(product.colors[0]?.name ?? "Default");
  const [size, setSize] = useState<number | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [error, setError] = useState("");
  const wished = has(product.id);

  function handleAdd(buyNow = false) {
    if (size == null) {
      setError("Please select a size");
      return;
    }
    setError("");
    addItem(product, color, size, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
    if (buyNow) {
      router.push("/checkout");
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Color — {color}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {product.colors.map((c) => {
            const selected = c.name === color;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => setColor(c.name)}
                className={`flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition ${
                  selected
                    ? "border-ink bg-ink text-paper"
                    : "border-line hover:border-ink/40"
                }`}
                aria-pressed={selected}
              >
                <span
                  className="h-3.5 w-3.5 rounded-full ring-1 ring-black/10"
                  style={{ backgroundColor: c.hex }}
                />
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Size (UK)
          </p>
          <Link
            href="/size-guide"
            className="text-xs font-medium text-accent underline-offset-2 hover:underline"
          >
            Size guide
          </Link>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-6">
          {product.sizes.map((s) => {
            const selected = size === s;
            return (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSize(s);
                  setError("");
                }}
                className={`rounded-xl border py-3 text-sm font-medium transition ${
                  selected
                    ? "border-ink bg-ink text-paper"
                    : "border-line hover:border-ink/40"
                }`}
                aria-pressed={selected}
              >
                {s}
              </button>
            );
          })}
        </div>
        {error && <p className="mt-2 text-sm text-accent">{error}</p>}
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
          Quantity
        </p>
        <div className="mt-3 inline-flex items-center rounded-full border border-line">
          <button
            type="button"
            className="px-4 py-2 text-base"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="min-w-10 text-center text-sm font-medium">
            {quantity}
          </span>
          <button
            type="button"
            className="px-4 py-2 text-base"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <button
          type="button"
          onClick={() => handleAdd(false)}
          className="btn-accent w-full"
        >
          {added ? "Added to cart" : "Add to cart"}
        </button>
        <button
          type="button"
          onClick={() => handleAdd(true)}
          className="btn-primary w-full"
        >
          Buy now
        </button>
      </div>

      <button
        type="button"
        onClick={() => toggle(product.id)}
        className="w-full rounded-full border border-line py-3 text-sm font-medium transition hover:bg-mist"
      >
        {wished ? "♥ Saved to wishlist" : "♡ Add to wishlist"}
      </button>
    </div>
  );
}
