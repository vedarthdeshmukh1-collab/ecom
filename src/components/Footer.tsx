import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative z-[2] border-t border-line bg-ink text-mist">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8 md:py-20">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-[0.16em]">FORMA</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist/70">
            Contemporary furniture and objects for rooms that prefer quiet
            confidence over noise. A demo storefront built for portfolio and
            case-study work.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-mist/50">
            Shop
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mist/80">
            <li>
              <Link href="/shop" className="hover:text-mist">
                All products
              </Link>
            </li>
            <li>
              <Link href="/collections/living" className="hover:text-mist">
                Living
              </Link>
            </li>
            <li>
              <Link href="/collections/light" className="hover:text-mist">
                Light
              </Link>
            </li>
            <li>
              <Link href="/collections/objects" className="hover:text-mist">
                Objects
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs uppercase tracking-[0.2em] text-mist/50">
            Studio
          </p>
          <ul className="mt-4 space-y-2 text-sm text-mist/80">
            <li>
              <Link href="/about" className="hover:text-mist">
                About
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-mist">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="hover:text-mist">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase tracking-[0.2em] text-mist/50">
            Notes
          </p>
          <p className="mt-4 text-sm leading-relaxed text-mist/70">
            This is a fictional brand for demonstration. Checkout does not
            process real payments.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-mist/45 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} FORMA Studio · Demo store</p>
          <p>Designed for portfolios and case studies</p>
        </div>
      </div>
    </footer>
  );
}
