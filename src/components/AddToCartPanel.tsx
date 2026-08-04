"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export function AddToCartPanel({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [color, setColor] = useState(product.colors[0]?.name ?? "Default");
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Color</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {product.colors.map((c) => {
            const selected = c.name === color;
            return (
              <button
                key={c.name}
                type="button"
                onClick={() => setColor(c.name)}
                className={`flex items-center gap-2 border px-3 py-2 text-sm transition ${
                  selected
                    ? "border-ink bg-ink text-mist"
                    : "border-line hover:border-ink/40"
                }`}
                aria-pressed={selected}
              >
                <span
                  className="h-3.5 w-3.5 rounded-sm ring-1 ring-black/10"
                  style={{ backgroundColor: c.hex }}
                />
                {c.name}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.18em] text-muted">
          Quantity
        </p>
        <div className="mt-3 inline-flex items-center border border-line">
          <button
            type="button"
            className="px-3.5 py-2 text-base"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="min-w-10 text-center text-sm">{quantity}</span>
          <button
            type="button"
            className="px-3.5 py-2 text-base"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          addItem(product, color, quantity);
          setAdded(true);
          window.setTimeout(() => setAdded(false), 1600);
        }}
        className="w-full bg-verdigris px-6 py-4 text-sm font-medium tracking-wide text-paper transition hover:bg-verdigris-soft"
      >
        {added ? "Added to cart" : "Add to cart"}
      </button>
    </div>
  );
}
