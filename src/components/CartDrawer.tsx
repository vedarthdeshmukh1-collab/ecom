"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { formatPrice } from "@/data/products";

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
            <p className="font-display text-xl tracking-tight">Cart</p>
            <p className="text-xs text-muted">{itemCount} items</p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="text-sm tracking-wide text-ink-soft hover:opacity-70"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
              <p className="font-display text-2xl">Your cart is empty</p>
              <p className="max-w-xs text-sm text-muted">
                Browse the shop and add pieces that earn their place.
              </p>
              <Link
                href="/shop"
                onClick={closeCart}
                className="mt-2 bg-pine px-5 py-3 text-sm text-mist transition hover:bg-pine-deep"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={`${item.productId}-${item.color}`}
                  className="flex gap-4"
                >
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={closeCart}
                    className="relative h-24 w-20 shrink-0 overflow-hidden bg-stone"
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
                          className="font-display text-base leading-tight hover:opacity-70"
                        >
                          {item.name}
                        </Link>
                        <p className="mt-1 text-xs text-muted">{item.color}</p>
                      </div>
                      <p className="text-sm">{formatPrice(item.price)}</p>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="inline-flex items-center border border-line">
                        <button
                          type="button"
                          className="px-2.5 py-1 text-sm"
                          onClick={() =>
                            updateQuantity(
                              item.productId,
                              item.color,
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
                        onClick={() => removeItem(item.productId, item.color)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-line px-5 py-5">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted">Subtotal</span>
              <span className="font-display text-lg">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted">
              Shipping calculated at checkout. Demo store — no real charges.
            </p>
            <div className="mt-4 grid gap-2">
              <Link
                href="/checkout"
                onClick={closeCart}
                className="bg-verdigris px-5 py-3.5 text-center text-sm font-medium text-paper transition hover:bg-verdigris-soft"
              >
                Checkout
              </Link>
              <Link
                href="/cart"
                onClick={closeCart}
                className="border border-line px-5 py-3 text-center text-sm transition hover:bg-mist"
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
