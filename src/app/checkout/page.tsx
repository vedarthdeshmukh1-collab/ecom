"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { formatPrice } from "@/data/products";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, subtotal, clearCart, itemCount } = useCart();
  const [placed, setPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  function applyCoupon() {
    if (coupon.trim().toUpperCase() === "SOLEVA10") {
      setDiscount(Math.round(subtotal * 0.1));
    } else {
      setDiscount(0);
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const id = `SV-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
    setOrderId(id);
    setPlaced(true);
    clearCart();
  }

  const total = Math.max(0, subtotal - discount);

  if (placed) {
    return (
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Order confirmed
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Thank you — demo order placed
        </h1>
        <p className="mt-5 text-muted">
          Reference <span className="text-ink font-semibold">{orderId}</span>.
          No payment was processed. This checkout demonstrates a premium
          footwear purchase flow.
        </p>
        <Link href="/shop" className="btn-accent mt-8 inline-flex">
          Back to shop
        </Link>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
        <h1 className="font-display text-4xl font-bold tracking-tight">
          Checkout
        </h1>
        <p className="mt-4 text-muted">
          Your cart is empty. Add a pair before checking out.
        </p>
        <Link href="/shop" className="btn-accent mt-8 inline-flex">
          Browse the shop
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
        Checkout
      </h1>
      <p className="mt-3 text-sm text-muted">
        Demo only — fields are not sent anywhere and no card is charged.
      </p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <fieldset className="space-y-4">
            <legend className="font-display text-2xl font-bold tracking-tight">
              Contact
            </legend>
            <input
              required
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
            />
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display text-2xl font-bold tracking-tight">
              Delivery
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="firstName"
                placeholder="First name"
                className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <input
                required
                name="lastName"
                placeholder="Last name"
                className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </div>
            <input
              required
              name="address"
              placeholder="Address"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
            />
            <div className="grid gap-4 sm:grid-cols-3">
              <input
                required
                name="city"
                placeholder="City"
                className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <input
                required
                name="state"
                placeholder="State"
                className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <input
                required
                name="zip"
                placeholder="PIN"
                className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-4">
            <legend className="font-display text-2xl font-bold tracking-tight">
              Payment
            </legend>
            <input
              required
              name="card"
              placeholder="Card number (demo)"
              defaultValue="4242 4242 4242 4242"
              className="w-full rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                name="expiry"
                placeholder="MM / YY"
                defaultValue="12 / 28"
                className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <input
                required
                name="cvc"
                placeholder="CVC"
                defaultValue="123"
                className="rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
            </div>
          </fieldset>

          <fieldset className="space-y-3">
            <legend className="font-display text-2xl font-bold tracking-tight">
              Coupon
            </legend>
            <div className="flex gap-2">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Try SOLEVA10"
                className="flex-1 rounded-xl border border-line bg-paper px-4 py-3 text-sm outline-none focus:border-ink"
              />
              <button
                type="button"
                onClick={applyCoupon}
                className="rounded-full border border-line px-4 py-2 text-sm font-semibold hover:bg-mist"
              >
                Apply
              </button>
            </div>
          </fieldset>

          <button type="submit" className="btn-accent w-full sm:w-auto">
            Place demo order · {formatPrice(total)}
          </button>

          <div className="flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-wide text-muted">
            <span className="rounded-full bg-mist px-3 py-1">Secure checkout</span>
            <span className="rounded-full bg-mist px-3 py-1">14-day returns</span>
            <span className="rounded-full bg-mist px-3 py-1">Authenticated demo</span>
          </div>
        </form>

        <aside className="h-fit rounded-2xl border border-line bg-mist/40 p-6">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            Order · {itemCount} items
          </h2>
          <ul className="mt-5 space-y-4">
            {items.map((item) => (
              <li
                key={`${item.productId}-${item.color}-${item.size}`}
                className="flex justify-between gap-3 text-sm"
              >
                <span>
                  {item.name}
                  <span className="block text-xs text-muted">
                    {item.color} · UK {item.size} × {item.quantity}
                  </span>
                </span>
                <span>{formatPrice(item.price * item.quantity)}</span>
              </li>
            ))}
          </ul>
          {discount > 0 && (
            <div className="mt-4 flex justify-between text-sm text-accent">
              <span>Coupon</span>
              <span>-{formatPrice(discount)}</span>
            </div>
          )}
          <div className="mt-6 flex justify-between border-t border-line pt-4">
            <span>Total</span>
            <span className="font-display text-xl font-bold">
              {formatPrice(total)}
            </span>
          </div>
        </aside>
      </div>
    </div>
  );
}
