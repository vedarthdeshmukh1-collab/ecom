import { Menu, Search, ShoppingBag } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useBrand } from '@/engine/BrandProvider'
import { useCart } from '@/engine/CartProvider'
import { useOverlay } from '@/engine/OverlayProvider'

export function Header() {
  const brand = useBrand()
  const { count } = useCart()
  const { open } = useOverlay()

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-bg)]/95 backdrop-blur-[2px]">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 md:h-16 md:px-8 lg:px-12">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center lg:hidden"
          aria-label="Open menu"
          onClick={() => open('menu')}
        >
          <Menu size={18} strokeWidth={1.5} />
        </button>

        <nav className="hidden flex-1 items-center gap-7 lg:flex">
          {brand.navigation.slice(0, 3).map((link) => (
            <NavLink
              key={link.href + link.label}
              to={link.href}
              className={({ isActive }) =>
                `text-[11px] tracking-[0.18em] uppercase ${isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/"
          className="font-display absolute left-1/2 -translate-x-1/2 text-[22px] tracking-[0.42em] md:text-[26px]"
        >
          {brand.logoText}
        </Link>

        <div className="flex flex-1 items-center justify-end gap-1 md:gap-2">
          <nav className="mr-4 hidden items-center gap-7 lg:flex">
            {brand.navigation.slice(3).map((link) => (
              <NavLink
                key={link.href + link.label}
                to={link.href}
                className={({ isActive }) =>
                  `text-[11px] tracking-[0.18em] uppercase ${isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center"
            onClick={() => open('search')}
          >
            <Search size={17} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Open cart"
            className="relative flex h-10 w-10 items-center justify-center"
            onClick={() => open('cart')}
          >
            <ShoppingBag size={17} strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute top-1.5 right-1 min-w-4 rounded-full bg-[var(--color-ink)] px-1 text-[9px] leading-4 text-[var(--color-inverse)]">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
