import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-line bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <p className="font-display text-3xl font-bold tracking-[0.14em]">
            SOLEVA
          </p>
          <p className="mt-2 text-sm font-medium text-accent">
            Performance Meets Everyday Style.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/65">
            Premium footwear engineered for comfort, movement, and everyday
            performance — from road to court to city streets.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/45">
            Collections
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/75">
            <li>
              <Link href="/collections/men" className="hover:text-paper">
                Men
              </Link>
            </li>
            <li>
              <Link href="/collections/women" className="hover:text-paper">
                Women
              </Link>
            </li>
            <li>
              <Link href="/shop?sport=running" className="hover:text-paper">
                Sports
              </Link>
            </li>
            <li>
              <Link href="/collections/trail" className="hover:text-paper">
                Trail
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/45">
            Customer Care
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/75">
            <li>
              <Link href="/size-guide" className="hover:text-paper">
                Size Guide
              </Link>
            </li>
            <li>
              <Link href="/about#shipping" className="hover:text-paper">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/about#returns" className="hover:text-paper">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-paper">
                Track Order
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/45">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-paper/75">
            <li>
              <Link href="/about" className="hover:text-paper">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-paper">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/about#careers" className="hover:text-paper">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/about#contact" className="hover:text-paper">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-paper/40 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} SOLEVA · Demo storefront</p>
          <p>Free shipping over ₹3,000 · Easy 14-day returns</p>
        </div>
      </div>
    </footer>
  );
}
