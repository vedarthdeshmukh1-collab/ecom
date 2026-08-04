"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, subtotal, clearCart, itemCount } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = `FM-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setOrderId(id);
    setPlaced(true);
    clearCart();
  }

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
        <p className="text-xs uppercase tracking-[0.2em] text-verdigris">
          Order confirmed
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-5xl">
          Thank you — demo order placed
        </h1>
        <p className="mt-5 text-muted">
          Reference <span className="text-ink">{orderId}</span>. No payment was
          processed. This checkout exists to demonstrate a complete ecommerce
          flow for portfolio and case-study presentations.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex bg-pine px-6 py-3.5 text-sm text-mist transition hover:bg-pine-deep"
        >
          Back to shop
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
        <h1 className="font-display text-4xl tracking-tight">Checkout</h1>
        <p className="mt-4 text-muted">
          Your cart is empty. Add a few pieces before checking out.
        </p>
        <Link
          href="/shop"
          className="mt-8 inline-flex bg-pine px-6 py-3.5 text-sm text-mist transition hover:bg-pine-deep"
        >
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
      <h1 className="font-display text-4xl tracking-tight md:text-5xl">
        Checkout
      </h1>
      <p className="mt-3 text-sm text-muted">
        Demo only — fields are not sent anywhere and no card is charged.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset className="space-y-4">
            <legend className="font-display text-2xl tracking-tight">
              Contact
            </legend>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
            />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display text-2xl tracking-tight">
              Shipping
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="firstName"
                placeholder="First name"
                className="border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <input
                required
                name="lastName"
                placeholder="Last name"
                className="border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </div>
            <input
              required
              name="address"
              placeholder="Address"
              className="w-full border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <input
                required
                name="city"
                placeholder="City"
                className="border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <input
                required
                name="state"
                placeholder="State"
                className="border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <input
                required
                name="zip"
                placeholder="ZIP"
                className="border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display text-2xl tracking-tight">
              Payment
            </legend>
            <input
              required
              name="card"
              placeholder="Card number (demo)"
              defaultValue="4242 4242 4242 4242"
              className="w-full border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="expiry"
                placeholder="MM / YY"
                defaultValue="12 / 28"
                className="border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <input
                required
                name="cvc"
                placeholder="CVC"
                defaultValue="123"
                className="border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-verdigris px-6 py-4 text-sm font-medium text-paper transition hover:bg-verdigris-soft sm:w-auto"
          >
            Place demo order · {formatPrice(subtotal)}
          </button>
        </form>

        <aside className="h-fit border border-line bg-mist/40 p-6">
          <h2 className="font-display text-2xl tracking-tight">
            Order · {itemCount} items
          </h2>
          <ul className="mt-5 space-y-4">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.color}`}
                className="flex justify-between gap-3 text-sm"
              >
                <span>
                  {item.name}
                  <span className="block text-xs text-muted">
                    {item.color} × {item.quantity}
                  </span>
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex justify-between border-t border-line pt-4">
            <span>Total</span>
            <span className="font-display text-xl">
              {formatPrice(subtotal)}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
