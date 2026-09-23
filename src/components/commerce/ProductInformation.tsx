import { Star } from 'lucide-react'
import type { Product } from '@/brands/types'
import { formatMoney, resolvePrice } from '@/engine/format'

export function ProductInformation({
  product,
  variantId,
}: {
  product: Product
  variantId: string
}) {
  const variant = product.variants.find((v) => v.id === variantId) ?? product.variants[0]
  const { price, compareAt } = resolvePrice(
    product.price,
    product.compareAtPrice,
    variant?.price,
    variant?.compareAtPrice,
  )

  return (
    <div>
      <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-muted)]">{product.category}</p>
      <h1 className="font-display mt-2 text-4xl leading-none tracking-tight md:text-5xl">{product.name}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-4">
        <p className="text-base tabular-nums">
          {compareAt ? (
            <>
              <span className="mr-2 text-[var(--color-muted)] line-through">{formatMoney(compareAt)}</span>
              {formatMoney(price)}
            </>
          ) : (
            formatMoney(price)
          )}
        </p>
        <span className="flex items-center gap-1 text-xs text-[var(--color-muted)]">
          <Star size={12} fill="currentColor" className="text-[var(--color-accent)]" />
          {product.rating.toFixed(1)} · {product.reviewCount} reviews
        </span>
      </div>
      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-[var(--color-ink)]">{product.description}</p>
      {product.size && (
        <p className="mt-4 text-xs tracking-[0.08em] text-[var(--color-muted)]">{product.size}</p>
      )}
    </div>
  )
}
