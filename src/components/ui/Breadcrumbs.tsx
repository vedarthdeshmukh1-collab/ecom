import { Link } from 'react-router-dom'

export type Crumb = { label: string; href?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-muted)]">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => (
          <li key={`${item.label}-${i}`} className="flex items-center gap-2">
            {item.href ? (
              <Link to={item.href} className="hover:text-[var(--color-ink)]">
                {item.label}
              </Link>
            ) : (
              <span className="text-[var(--color-ink)]">{item.label}</span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
