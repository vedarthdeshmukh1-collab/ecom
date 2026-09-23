import { Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { ImageRatio, Product } from '@/brands/types'
import { Button } from '@/components/ui/Button'
import { Image } from '@/components/system/Image'
import { Heading } from '@/components/system/Heading'
import { useBrand } from '@/engine/BrandProvider'
import { useCart } from '@/engine/CartProvider'
import { formatMoney } from '@/engine/format'
import { aspectClass, cx, ratioCss } from '@/system/cx'

export type ProductCardProps = {
  product: Product
  align?: 'left' | 'center'
  ratio?: ImageRatio
  showRating?: boolean
  showQuickAdd?: boolean
  showSwatches?: boolean
  showBadge?: boolean
  showCategory?: boolean
  showDescriptor?: boolean
}

export function ProductCard({
  product,
  align,
  ratio,
  showRating,
  showQuickAdd,
  showSwatches,
  showBadge = true,
  showCategory,
  showDescriptor = false,
}: ProductCardProps) {
  const brand = useBrand()
  const style = brand.productCard
  const { add } = useCart()
  const resolvedAlign = align ?? style.align
  const resolvedRatio = ratio ?? style.ratio
  const resolvedRating = showRating ?? style.showRating
  const resolvedQuickAdd = showQuickAdd ?? style.showQuickAdd
  const resolvedSwatches = showSwatches ?? style.showSwatches
  const resolvedCategory = showCategory ?? style.showCategory
  const [activeSwatch, setActiveSwatch] = useState(
    product.variants.find((v) => v.swatch)?.id ?? product.variants[0]?.id,
  )
  const primary = product.images[0]
  const secondary = product.images[1]
  const swatches = product.variants.filter((v) => v.swatch)
  const selected = product.variants.find((v) => v.id === activeSwatch) ?? product.variants[0]
  const price = selected?.price ?? product.price
  const compare = selected?.compareAtPrice ?? (selected?.price ? undefined : product.compareAtPrice)
  const image = product.images[selected?.imageIndex ?? 0] ?? primary
  const stacked = (resolvedAlign === 'center' ? 'stack' : style.titlePrice) === 'stack'

  return (
    <article className={cx('group', resolvedAlign === 'center' && 'text-center')}>
      <div className="relative">
        <Link to={`/products/${product.slug}`} className="block">
          <div
            className={cx('relative overflow-hidden bg-[var(--color-surface)]', aspectClass(resolvedRatio))}
            style={{
              borderRadius: 'var(--radius-media)',
              boxShadow: 'var(--shadow-card)',
              aspectRatio: ratioCss[resolvedRatio],
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fallbackLabel={brand.logoText}
              loading="eager"
              className="media-hover-zoom h-full w-full object-cover"
            />
            {style.hoverSwap && secondary && (
              <img
                src={secondary.src}
                alt=""
                className="absolute inset-0 hidden h-full w-full object-cover opacity-0 transition-opacity duration-[var(--duration-med)] ease-[var(--ease-editorial)] group-hover:opacity-100 md:block"
              />
            )}
            {showBadge && product.badge && (
              <span className="type-eyebrow absolute top-3 left-3 text-[var(--color-inverse)] mix-blend-difference">
                {product.badge}
              </span>
            )}
          </div>
        </Link>
        {resolvedQuickAdd && selected && (
          <div className="pointer-events-none absolute inset-x-3 bottom-3 hidden opacity-0 transition-opacity duration-[var(--duration-med)] group-hover:opacity-100 md:block">
            <div className="pointer-events-auto">
              <Button
                size="sm"
                className="w-full"
                disabled={!selected.inStock}
                onClick={() => add(product, selected, 1)}
              >
                {brand.copy.quickAdd}
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className={cx('mt-3', resolvedAlign === 'center' ? 'flex flex-col items-center' : '')}>
        <div
          className={cx(
            'flex gap-x-3 gap-y-1',
            stacked || resolvedAlign === 'center'
              ? 'flex-col items-start'
              : 'flex-col items-start sm:flex-row sm:items-baseline sm:justify-between',
            resolvedAlign === 'center' && 'items-center',
          )}
        >
          <Link to={`/products/${product.slug}`}>
            <Heading variant="product" className="hover:text-[var(--color-accent)]">
              {product.name}
            </Heading>
          </Link>
          <p className="type-price shrink-0">
            {compare ? (
              <>
                <span className="mr-2 text-[var(--color-muted)] line-through">{formatMoney(compare)}</span>
                <span>{formatMoney(price)}</span>
              </>
            ) : (
              formatMoney(price)
            )}
          </p>
        </div>
        {showDescriptor && (
          <p className="type-body-sm mt-1 max-w-[16rem]">{product.shortDescription}</p>
        )}
        {resolvedCategory && <p className="type-meta mt-1">{product.category}</p>}
        {resolvedRating && (
          <p className="type-meta mt-1 flex items-center gap-1">
            <Star size={11} fill="currentColor" className="text-[var(--color-accent)]" />
            {product.rating.toFixed(1)}
            <span>· {product.reviewCount}</span>
          </p>
        )}
        {resolvedSwatches && swatches.length > 0 && (
          <div className={cx('mt-2 flex gap-1.5', resolvedAlign === 'center' && 'justify-center')}>
            {swatches.map((variant) => (
              <button
                key={variant.id}
                type="button"
                aria-label={variant.label}
                onClick={() => setActiveSwatch(variant.id)}
                className={cx(
                  'h-3 w-3 border',
                  variant.id === activeSwatch ? 'border-[var(--color-ink)]' : 'border-transparent',
                )}
                style={{ background: variant.swatch, borderRadius: 'var(--radius-full)' }}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
