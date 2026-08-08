"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FREE_SHIPPING_THRESHOLD,
  formatPrice,
  getBestSellers,
} from "@/data/products";
import { useCart } from "@/lib/cart-context";

export function CartDrawer() {
  const {
    isOpen,
    closeCart,
    items,
    updateQuantity,
    removeItem,
    subtotal,
    itemCount,
  } = useCart();

  if (!isOpen) return null;

  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const recs = getBestSellers().slice(0, 2);

  return (
    <div className="fixed inset-0 z-[80]">
      <button
        type="button"
        className="cart-overlay absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
        aria-label="Close cart"
        onClick={closeCart}
      />
      <aside className="cart-drawer absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper shadow-2xl">
        <div className="flex items-center justify-between border-b border-line px-5 py-5">
          <div>
            <p className="font-display text-xl font-bold tracking-tight">Cart</p>
            <p className="text-xs text-muted">{itemCount} items</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="rounded-full px-3 py-1 text-sm font-medium text-ink-soft hover:bg-mist"
          >
            Close
          </button>
        </div>

        <div className="border-b border-line px-5 py-4">
          <div className="h-1.5 overflow-hidden rounded-full bg-mist">
            <div
              className="h-full rounded-full bg-accent transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted">
            {remaining > 0
              ? `You are ${formatPrice(remaining)} away from Free Shipping`
              : "You’ve unlocked Free Shipping"}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <p className="font-display text-2xl font-bold">Your cart is empty</p>
              <p className="max-w-xs text-sm text-muted">
                Discover shoes engineered for comfort, movement, and everyday style.
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="btn-accent mt-2"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <>
              <ul className="space-y-5">
                {items.map((item) => (
                  <li
                    key={`${item.productId}-${item.color}-${item.size}`}
                    className="flex gap-4"
                  >
                    <Link
                      href={`/product/${item.slug}`}
                      onClick={closeCart}
                      className="relative h-24 w-20 shrink-0 overflow-hidden rounded-xl bg-mist"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </Link>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <Link
                            href={`/product/${item.slug}`}
                            onClick={closeCart}
                            className="font-display text-base font-semibold leading-tight hover:opacity-70"
                          >
                            {item.name}
                          </Link>
                          <p className="mt-1 text-xs text-muted">
                            {item.color} · UK {item.size}
                          </p>
                        </div>
                        <p className="text-sm font-medium">
                          {formatPrice(item.price)}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="inline-flex items-center rounded-full border border-line">
                          <button
                            type="button"
                            className="px-2.5 py-1 text-sm"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.color,
                                item.size,
                                item.quantity - 1,
                              )
                            }
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="min-w-8 text-center text-sm">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            className="px-2.5 py-1 text-sm"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.color,
                                item.size,
                                item.quantity + 1,
                              )
                            }
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          type="button"
                          className="text-xs text-muted underline-offset-2 hover:underline"
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

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  You may also like
                </p>
                <ul className="mt-3 space-y-3">
                  {recs.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/product/${p.slug}`}
                        onClick={closeCart}
                        className="flex items-center gap-3 rounded-xl p-2 hover:bg-mist"
                      >
                        <span className="relative h-14 w-14 overflow-hidden rounded-lg bg-mist">
                          {p.images.primary ? (
                            <Image
                              src={p.images.primary}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="56px"
                            />
                          ) : null}
                        </span>
                        <span className="text-sm font-medium">{p.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-5 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="font-display text-lg font-bold">
                {formatPrice(subtotal)}
              </span>
            </div>
            <div className="mt-4 grid gap-2">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="btn-accent w-full"
              >
                Checkout
              </Link>
              <Link
                href="/cart"
                onClick={closeCart}
                className="rounded-full border border-line px-5 py-3 text-center text-sm font-medium transition hover:bg-mist"
              >
                View cart
              </Link>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
