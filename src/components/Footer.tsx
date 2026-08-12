import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-line bg-mist/80 text-ink">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-4">
          <p className="font-display text-2xl font-semibold tracking-[0.2em]">
            SOLEVA
          </p>
          <p className="mt-2 text-sm font-medium text-accent">
            Comfort for every day.
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Soft, steady footwear for walks, workdays, and weekends — made to
            feel easy from the first step.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Collections
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/collections/men" className="hover:text-accent">
                Men
              </Link>
            </li>
            <li>
              <Link href="/collections/women" className="hover:text-accent">
                Women
              </Link>
            </li>
            <li>
              <Link href="/shop?sport=running" className="hover:text-accent">
                Sports
              </Link>
            </li>
            <li>
              <Link href="/collections/trail" className="hover:text-accent">
                Trail
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Customer Care
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/size-guide" className="hover:text-accent">
                Size Guide
              </Link>
            </li>
            <li>
              <Link href="/about#shipping" className="hover:text-accent">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/about#returns" className="hover:text-accent">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-accent">
                Track Order
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Company
          </p>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/about" className="hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-accent">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/about#careers" className="hover:text-accent">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/about#contact" className="hover:text-accent">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} SOLEVA · Demo storefront</p>
          <p>Free shipping over ₹3,000 · Easy 14-day returns</p>
        </div>
      </div>
    </footer>
  );
}
