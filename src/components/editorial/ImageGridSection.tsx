import type { ImageGridSectionConfig } from '@/brands/types'
import { Reveal } from '@/components/editorial/Reveal'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'
import { cx } from '@/system/cx'

const sizeClass = {
  large: 'col-span-2 aspect-[4/5] md:col-span-7 md:row-span-2 md:aspect-auto md:min-h-[36rem]',
  tall: 'col-span-1 aspect-[3/4] md:col-span-5 md:min-h-[22rem]',
  wide: 'col-span-2 aspect-[16/10] md:col-span-7',
  default: 'col-span-1 aspect-square md:col-span-5 md:aspect-auto',
} as const

export function ImageGridSection({ section }: { section: ImageGridSectionConfig }) {
  const brand = useBrand()

  return (
    <section className="container-site section-y">
      <Reveal>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-12 md:gap-3">
          {section.images.map((image) => (
            <div
              key={image.src + image.alt}
              className={cx('group overflow-hidden bg-[var(--color-surface)]', sizeClass[image.size])}
            >
              <BrandImage
                src={image.src}
                alt={image.alt}
                fallbackLabel={brand.logoText}
                className="media-hover-zoom h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
