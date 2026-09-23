import { useState } from 'react'
import type { Product } from '@/brands/types'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'

export function ProductGallery({ product }: { product: Product }) {
  const brand = useBrand()
  const [index, setIndex] = useState(0)
  const current = product.images[index] ?? product.images[0]

  return (
    <div className="flex flex-col gap-3 md:flex-row-reverse">
      <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-[var(--color-surface)]">
        <BrandImage
          key={current.src}
          src={current.src}
          alt={current.alt}
          fallbackLabel={brand.logoText}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex gap-2 overflow-x-auto md:w-20 md:flex-col md:overflow-visible">
        {product.images.map((image, i) => (
          <button
            type="button"
            key={image.src}
            onClick={() => setIndex(i)}
            aria-label={`View image ${i + 1}`}
            className={`relative h-20 w-16 shrink-0 overflow-hidden border ${i === index ? 'border-[var(--color-ink)]' : 'border-transparent'}`}
          >
            <BrandImage
              src={image.src}
              alt=""
              fallbackLabel={brand.logoText}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
