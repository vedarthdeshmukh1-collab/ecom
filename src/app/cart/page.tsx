"use client";

import Image from "next/image";
import Link from "next/link";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal, itemCount } = useCart();

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
      <h1 className="font-display text-4xl tracking-tight md:text-6xl">Cart</h1>
      <p className="mt-3 text-muted">
        {itemCount} item{itemCount === 1 ? "" : "s"}
      </p>

      {items.length === 0 ? (
        <div className="mt-16 max-w-md">
          <p className="font-display text-2xl">Nothing here yet</p>
          <p className="mt-3 text-muted">
            When you add a piece, it will appear here — ready for checkout.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-flex bg-pine px-6 py-3.5 text-sm text-mist transition hover:bg-pine-deep"
          >
            Browse the shop
          </Link>
        </div>
      ) : (
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_340px]">
          <ul className="divide-y divide-line border-y border-line">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.color}`}
                className="flex gap-4 py-6 md:gap-6"
              >
                <Link
                  href={`/product/${item.slug}`}
                  className="relative h-28 w-24 shrink-0 overflow-hidden bg-stone md:h-36 md:w-28"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex justify-between gap-4">
                    <div>
                      <Link
                        href={`/product/${item.slug}`}
                        className="font-display text-xl tracking-tight hover:opacity-70"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-sm text-muted">{item.color}</p>
                    </div>
                    <p className="text-sm md:text-base">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <div className="inline-flex items-center border border-line">
                      <button
                        type="button"
                        className="px-3 py-1.5"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            item.color,
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
                      onClick={() => removeItem(item.productId, item.color)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit border border-line bg-mist/40 p-6">
            <h2 className="font-display text-2xl tracking-tight">Summary</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">Shipping</span>
                <span>Calculated next</span>
              </div>
            </div>
            <div className="mt-6 flex justify-between border-t border-line pt-4">
              <span className="font-medium">Total</span>
              <span className="font-display text-xl">
                {formatPrice(subtotal)}
              </span>
            </div>
            <Link
              href="/checkout"
              className="mt-6 flex w-full items-center justify-center bg-verdigris px-5 py-3.5 text-sm font-medium text-paper transition hover:bg-verdigris-soft"
            >
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
