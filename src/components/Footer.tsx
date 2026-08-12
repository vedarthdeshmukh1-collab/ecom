import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[2] bg-ink text-paper">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-6 md:py-20">
        <div className="md:col-span-4">
          <p className="font-display text-3xl font-medium tracking-tight">
            soleva
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/65">
            Soft, steady footwear for walks, workdays, and weekends. Join the
            list for drops and comfort tips.
          </p>
          <form className="mt-6 flex max-w-md overflow-hidden rounded-full border border-white/20">
            <label className="sr-only" htmlFor="footer-email">
              Email
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-paper outline-none placeholder:text-paper/40"
            />
            <button
              type="button"
              className="bg-paper px-5 text-[11px] font-bold uppercase tracking-[0.12em] text-ink"
            >
              Sign up
            </button>
          </form>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-paper/45">
            Help
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
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
                Orders
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-paper/45">
            Shop
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
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
              <Link href="/shop" className="hover:text-paper">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="/collections/running" className="hover:text-paper">
                Running
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-paper/45">
            Company
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
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

        <div className="md:col-span-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-paper/45">
            Follow
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-paper/75">
            <li>Instagram</li>
            <li>Pinterest</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-5 text-xs text-paper/40 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} SOLEVA · Demo storefront</p>
          <p>Free shipping over ₹3,000 · Easy 14-day returns</p>
        </div>
      </div>
    </footer>
  );
}
