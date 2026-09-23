import { Menu, Search, ShoppingBag, User } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { Container } from '@/components/system/Container'
import { useBrand } from '@/engine/BrandProvider'
import { useCart } from '@/engine/CartProvider'
import { useOverlay } from '@/engine/OverlayProvider'
import { cx, typeClass } from '@/system/cx'

function NavItems({ links }: { links: { label: string; href: string }[] }) {
  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.href + link.label}
          to={link.href}
          className={({ isActive }) =>
            cx(
              typeClass.nav,
              isActive ? 'text-[var(--color-ink)]' : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]',
            )
          }
        >
          {link.label}
        </NavLink>
      ))}
    </>
  )
}

export function Header() {
  const brand = useBrand()
  const { count } = useCart()
  const { open } = useOverlay()
  const chrome = brand.header
  const navVisible = chrome.desktopNavFrom === 'lg' ? 'hidden lg:flex' : 'hidden xl:flex'
  const burgerVisible = chrome.desktopNavFrom === 'lg' ? 'flex lg:hidden' : 'flex xl:hidden'
  const splitAt = Math.ceil(brand.navigation.length / 2)
  const leftNav =
    chrome.splitNav && chrome.logoPosition === 'center'
      ? brand.navigation.slice(0, splitAt)
      : brand.navigation
  const rightNav =
    chrome.splitNav && chrome.logoPosition === 'center' ? brand.navigation.slice(splitAt) : []

  return (
    <header
      className={cx(
        'z-40 bg-[var(--color-bg)]',
        chrome.sticky && 'sticky top-0',
        chrome.blur && 'bg-[var(--color-bg)]/95',
        chrome.bordered && 'border-b border-[var(--color-line)]',
      )}
      style={{ boxShadow: 'var(--shadow-header)' }}
    >
      {brand.secondaryNav.length > 0 && (
        <div className={cx('hidden xl:block', chrome.bordered && 'border-b border-[var(--color-line)]')}>
          <Container className="flex h-8 items-center justify-end gap-6">
            {brand.secondaryNav.map((link) => (
              <Link
                key={link.href + link.label}
                to={link.href}
                className={cx(typeClass.meta, 'hover:text-[var(--color-ink)]')}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      )}

      <Container className="relative flex items-center justify-between" style={{ minHeight: 'var(--header-height)' }}>
        <div className="flex min-w-0 flex-1 items-center gap-8">
          <button
            type="button"
            className={cx('h-10 w-10 items-center justify-center', burgerVisible)}
            aria-label={brand.copy.menu}
            onClick={() => open('menu')}
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>
          {chrome.logoPosition === 'left' && (
            <Link to="/" className={typeClass.logo}>
              {brand.logoText}
            </Link>
          )}
          <nav className={cx(navVisible, 'flex-1 items-center gap-10 xl:gap-12')}>
            <NavItems links={leftNav} />
          </nav>
        </div>

        {chrome.logoPosition === 'center' && (
          <Link to="/" className={cx(typeClass.logo, 'absolute left-1/2 -translate-x-1/2')}>
            {brand.logoText}
          </Link>
        )}

        <div className="flex flex-1 items-center justify-end gap-1">
          {rightNav.length > 0 && (
            <nav className={cx(navVisible, 'mr-6 items-center gap-10 xl:gap-12')}>
              <NavItems links={rightNav} />
            </nav>
          )}
          {chrome.showSearch && (
            <button
              type="button"
              aria-label={brand.copy.search}
              className="flex h-10 w-10 items-center justify-center"
              onClick={() => open('search')}
            >
              <Search size={17} strokeWidth={1.5} />
            </button>
          )}
          {chrome.showAccount && (
            <Link
              to={chrome.accountHref}
              aria-label={brand.copy.account}
              className="flex h-10 w-10 items-center justify-center"
            >
              <User size={17} strokeWidth={1.5} />
            </Link>
          )}
          {chrome.showCart && (
            <button
              type="button"
              aria-label={brand.copy.cart}
              className="relative flex h-10 w-10 items-center justify-center"
              onClick={() => open('cart')}
            >
              <ShoppingBag size={17} strokeWidth={1.5} />
              {count > 0 && (
                <span
                  className="absolute top-1.5 right-1 min-w-4 px-1 text-[9px] leading-4 text-[var(--color-inverse)]"
                  style={{
                    background: 'var(--color-ink)',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {count}
                </span>
              )}
            </button>
          )}
        </div>
      </Container>
    </header>
  )
}
