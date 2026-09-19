import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '@/components/ui/Modal'
import { searchProducts } from '@/engine/catalog'
import { formatMoney } from '@/engine/format'
import { useBrand } from '@/engine/BrandProvider'
import { useOverlay } from '@/engine/OverlayProvider'
import { BrandImage } from '@/media/BrandImage'

export function SearchInterface() {
  const brand = useBrand()
  const { overlay, close } = useOverlay()
  const [query, setQuery] = useState('')
  const results = useMemo(() => searchProducts(brand, query), [brand, query])

  return (
    <Modal open={overlay === 'search'} onClose={close} title="Search">
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={brand.searchPlaceholder}
        className="h-12 w-full border-b border-[var(--color-line)] bg-transparent text-base outline-none placeholder:text-[var(--color-muted)]"
      />
      <ul className="mt-6 max-h-[50vh] space-y-4 overflow-y-auto">
        {query && results.length === 0 && (
          <li className="text-sm text-[var(--color-muted)]">No formulas match “{query}”.</li>
        )}
        {results.map((product) => (
          <li key={product.id}>
            <Link
              to={`/products/${product.slug}`}
              onClick={close}
              className="flex items-center gap-4"
            >
              <BrandImage
                src={product.images[0].src}
                alt=""
                fallbackLabel={brand.logoText}
                className="h-16 w-12 object-cover"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm">{product.name}</p>
                <p className="text-xs text-[var(--color-muted)]">{product.category}</p>
              </div>
              <p className="text-sm tabular-nums">{formatMoney(product.price)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Modal>
  )
}
