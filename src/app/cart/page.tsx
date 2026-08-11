"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FREE_SHIPPING_THRESHOLD,
  formatPrice,
} from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, itemCount } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
        Cart
      </h1>
      <p className="mt-3 text-muted">
        {itemCount} item{itemCount === 1 ? "" : "s"}
      </p>

      {items.length === 0 ? (
        <div className="mt-16 max-w-md">
          <p className="font-display text-2xl font-bold">Nothing here yet</p>
          <p className="mt-3 text-muted">
            Add a pair and you’re one step closer to free shipping.
          </p>
          <Link href="/shop" className="btn-accent mt-8 inline-flex">
            Browse the shop
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_340px]">
          <ul className="divide-y divide-line border-y border-line">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.color}-${item.size}`}
                className="flex gap-4 py-6 md:gap-6"
              >
                <Link
                  href={`/product/${item.slug}`}
                  className="relative h-28 w-24 shrink-0 overflow-hidden rounded-xl bg-mist md:h-36 md:w-28"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    quality={90}
                    className="object-contain p-1.5"
                    sizes="112px"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/product/${item.slug}`}
                        className="font-display text-xl font-semibold tracking-tight hover:opacity-70"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-muted">
                        {item.color} · UK {item.size}
                      </p>
                    </div>
                    <p className="text-sm font-medium md:text-base">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="inline-flex items-center rounded-full border border-line">
                      <button
                        type="button"
                        className="px-3 py-1.5"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.color,
                            item.size,
                            item.quantity - 1,
                          )
                        }
                      >
                        −
                      </button>
                      <span className="min-w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="px-3 py-1.5"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.color,
                            item.size,
                            item.quantity + 1,
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-muted underline-offset-2 hover:underline"
                      onClick={() =>
                        removeItem(item.productId, item.color, item.size)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-2xl border border-line bg-mist/40 p-6">
            <h2 className="font-display text-2xl font-bold tracking-tight">
              Summary
            </h2>
            <p className="mt-3 text-xs text-muted">
              {remaining > 0
                ? `You are ${formatPrice(remaining)} away from Free Shipping`
                : "Free shipping unlocked"}
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span>{remaining > 0 ? "Calculated next" : "Free"}</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between border-t border-line pt-4">
              <span className="font-medium">Total</span>
              <span className="font-display text-xl font-bold">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Link href="/checkout" className="btn-accent mt-6 flex w-full">
              Proceed to checkout
            </Link>
            <Link
              href="/shop"
              className="mt-3 flex w-full items-center justify-center py-2 text-sm text-muted underline-offset-2 hover:underline"
            >
              Continue shopping
            </Link>
          </aside>
        </div>
      )}
    </div>
  );
}
