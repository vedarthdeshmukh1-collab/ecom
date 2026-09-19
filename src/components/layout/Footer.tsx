import { Link } from 'react-router-dom'
import { useBrand } from '@/engine/BrandProvider'

export function Footer() {
  const brand = useBrand()
  return (
    <footer className="border-t border-[var(--color-line)]">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-16 md:grid-cols-12 md:px-8 md:py-20 lg:px-12">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-[0.28em]">{brand.logoText}</p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--color-muted)]">{brand.footer.blurb}</p>
        </div>
        {brand.footer.columns.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted)]">{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm hover:text-[var(--color-accent)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-[var(--color-line)] px-4 py-4 text-center text-[11px] tracking-[0.12em] text-[var(--color-muted)] md:px-8">
        {brand.footer.copyright}
      </div>
    </footer>
  )
}
