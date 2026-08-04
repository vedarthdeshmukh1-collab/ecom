"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/lib/cart-context";

const links = [
  { href: "/shop", label: "Shop" },
  { href: "/collections/living", label: "Living" },
  { href: "/collections/light", label: "Light" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const { openCart, itemCount } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || !isHome || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-paper/90 text-ink shadow-[0_1px_0_var(--line)] backdrop-blur-md"
          : "bg-transparent text-mist"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
        <button
          type="button"
          className="md:hidden -ml-1 rounded px-2 py-1 text-sm tracking-wide"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-opacity hover:opacity-70 ${
                pathname.startsWith(link.href) ? "opacity-100" : "opacity-80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="font-display absolute left-1/2 -translate-x-1/2 text-2xl font-semibold tracking-[0.18em] md:text-[1.65rem]"
          onClick={() => setMenuOpen(false)}
        >
          FORMA
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          <Link
            href="/shop"
            className="hidden text-sm tracking-wide transition-opacity hover:opacity-70 sm:inline"
          >
            All products
          </Link>
          <button
            type="button"
            onClick={openCart}
            className="group relative text-sm tracking-wide transition-opacity hover:opacity-70"
            aria-label={`Open cart, ${itemCount} items`}
          >
            Cart
            <span
              className={`ml-1.5 inline-flex h-5 min-w-5 items-center justify-center rounded-sm px-1 text-[11px] font-medium ${
                solid
                  ? "bg-pine text-mist"
                  : "bg-mist/20 text-mist ring-1 ring-mist/30"
              }`}
            >
              {itemCount}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-paper px-5 py-6 text-ink md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-2xl tracking-tight"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/cart"
              className="font-display text-2xl tracking-tight"
              onClick={() => setMenuOpen(false)}
            >
              Cart ({itemCount})
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
