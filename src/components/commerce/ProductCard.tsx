import { Star } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '@/brands/types'
import { Button } from '@/components/ui/Button'
import { Image } from '@/components/system/Image'
import { Heading } from '@/components/system/Heading'
import { useBrand } from '@/engine/BrandProvider'
import { useCart } from '@/engine/CartProvider'
import { formatMoney } from '@/engine/format'
import { aspectClass, cx, type ImageRatio } from '@/system/cx'

export type ProductCardProps = {
  product: Product
  align?: 'left' | 'center'
  ratio?: ImageRatio
  showRating?: boolean
  showQuickAdd?: boolean
  showSwatches?: boolean
  showBadge?: boolean
  showCategory?: boolean
}

export function ProductCard({
  product,
  align = 'left',
  ratio = 'portrait',
  showRating = false,
  showQuickAdd = false,
  showSwatches = true,
  showBadge = true,
  showCategory = true,
}: ProductCardProps) {
  const brand = useBrand()
  const { add } = useCart()
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

  return (
    <article className={cx('group', align === 'center' && 'text-center')}>
      <div className="relative">
        <Link to={`/products/${product.slug}`} className="block">
          <div className={cx('relative overflow-hidden bg-[var(--color-surface)]', aspectClass(ratio))}>
            <Image
              src={image.src}
              alt={image.alt}
              fallbackLabel={brand.logoText}
              loading="eager"
              className="h-full w-full object-cover transition-transform duration-[var(--duration-slow)] ease-[var(--ease-editorial)] group-hover:scale-[1.03]"
            />
            {secondary && (
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
        {showQuickAdd && selected && (
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

      <div className={cx('mt-3', align === 'center' ? 'flex flex-col items-center' : '')}>
        <div
          className={cx(
            'flex gap-3',
            align === 'center' ? 'flex-col items-center' : 'items-baseline justify-between',
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
        {showCategory && <p className="type-meta mt-1">{product.category}</p>}
        {showRating && (
          <p className="type-meta mt-1 flex items-center gap-1">
            <Star size={11} fill="currentColor" className="text-[var(--color-accent)]" />
            {product.rating.toFixed(1)}
            <span>· {product.reviewCount}</span>
          </p>
        )}
        {showSwatches && swatches.length > 0 && (
          <div className={cx('mt-2 flex gap-1.5', align === 'center' && 'justify-center')}>
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
