"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";

const items = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/collections/men", label: "Men" },
  { href: "/cart", label: "Cart" },
];

export function MobileNav() {
  const pathname = usePathname();
  const { itemCount, openCart } = useCart();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-md md:hidden"
      aria-label="Mobile"
    >
      <ul className="mx-auto grid max-w-lg grid-cols-4 px-2 py-2">
        {items.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          if (item.href === "/cart") {
            return (
              <li key={item.href}>
                <button
                  type="button"
                  onClick={openCart}
                  className={`flex w-full flex-col items-center gap-0.5 rounded-xl py-2 text-[11px] font-semibold ${
                    active ? "text-accent" : "text-muted"
                  }`}
                >
                  Cart
                  <span className="text-[10px] text-ink">{itemCount}</span>
                </button>
              </li>
            );
          }
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex flex-col items-center rounded-xl py-2 text-[11px] font-semibold ${
                  active ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
