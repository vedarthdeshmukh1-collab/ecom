import { Link } from 'react-router-dom'
import { useState } from 'react'
import type { Product } from '@/brands/types'
import { formatMoney } from '@/engine/format'
import { BrandImage } from '@/media/BrandImage'
import { useBrand } from '@/engine/BrandProvider'

export function ProductCard({ product }: { product: Product }) {
  const brand = useBrand()
  const [hover, setHover] = useState(false)
  const primary = product.images[0]
  const secondary = product.images[1] ?? product.images[0]

  return (
    <article>
      <Link
        to={`/products/${product.slug}`}
        className="group block"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--color-surface)]">
          <BrandImage
            src={hover ? secondary.src : primary.src}
            alt={hover ? secondary.alt : primary.alt}
            fallbackLabel={brand.logoText}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          {product.badge && (
            <span className="absolute top-3 left-3 text-[10px] tracking-[0.18em] uppercase text-[var(--color-inverse)] mix-blend-difference">
              {product.badge}
            </span>
          )}
        </div>
        <div className="mt-3 flex items-baseline justify-between gap-3">
          <h3 className="text-[13px] tracking-wide md:text-sm">{product.name}</h3>
          <p className="shrink-0 text-[13px] tabular-nums">
            {product.compareAtPrice ? (
              <>
                <span className="mr-2 text-[var(--color-muted)] line-through">
                  {formatMoney(product.compareAtPrice)}
                </span>
                <span>{formatMoney(product.price)}</span>
              </>
            ) : (
              formatMoney(product.price)
            )}
          </p>
        </div>
        <p className="mt-1 text-[12px] text-[var(--color-muted)]">{product.category}</p>
      </Link>
    </article>
  )
}
