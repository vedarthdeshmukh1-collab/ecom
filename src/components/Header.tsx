"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { SearchModal } from "@/components/SearchModal";

const links = [
  { href: "/shop?sort=featured", label: "New Arrivals" },
  { href: "/shop", label: "Shop All" },
  { href: "/collections/men", label: "Men" },
  { href: "/collections/women", label: "Women" },
  { href: "/collections/running", label: "Running" },
];

export function Header() {
  const pathname = usePathname();
  const { openCart, itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="bg-ink px-4 py-2 text-center text-[11px] font-medium tracking-wide text-paper md:text-xs">
        Free shipping over ₹3,000 · Easy 14-day returns
      </div>
      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/95 text-ink backdrop-blur-md">
        <div className="mx-auto grid h-14 max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-4 md:h-16 md:px-6">
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="md:hidden text-xs font-bold uppercase tracking-[0.14em]"
              aria-expanded={menuOpen}
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? "Close" : "Menu"}
            </button>
            <nav className="hidden items-center gap-5 lg:flex">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-60 ${
                    pathname.startsWith(link.href.split("?")[0]!)
                      ? "opacity-100"
                      : "opacity-80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <Link
            href="/"
            className="font-display text-center text-[1.65rem] font-medium tracking-tight md:text-[1.85rem]"
            onClick={() => setMenuOpen(false)}
          >
            soleva
          </Link>

          <div className="flex items-center justify-end gap-4 md:gap-5">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-[11px] font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
              aria-label="Search"
            >
              Search
            </button>
            <button
              type="button"
              onClick={openCart}
              className="relative text-[11px] font-bold uppercase tracking-[0.14em] transition-opacity hover:opacity-60"
              aria-label={`Open cart, ${itemCount} items`}
            >
              Cart
              {itemCount > 0 && (
                <span className="ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-ink px-1 text-[10px] font-bold text-paper">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-line bg-paper px-5 py-6 lg:hidden">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase tracking-[0.14em]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/about"
                className="text-sm font-bold uppercase tracking-[0.14em]"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-sm font-bold uppercase tracking-[0.14em]"
                onClick={() => setMenuOpen(false)}
              >
                Journal
              </Link>
            </nav>
          </div>
        )}
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
