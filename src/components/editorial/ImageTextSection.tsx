import type { ImageTextSectionConfig } from '@/brands/types'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'

export function ImageTextSection({ section }: { section: ImageTextSectionConfig }) {
  const brand = useBrand()
  return (
    <section className="mx-auto grid max-w-[1440px] items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-24 lg:px-12">
      <div className={section.reverse ? 'md:order-2' : ''}>
        <div className="aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
          <BrandImage
            src={section.image}
            alt={section.imageAlt}
            fallbackLabel={brand.logoText}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className={section.reverse ? 'md:order-1' : ''}>
        {section.eyebrow && (
          <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)]">{section.eyebrow}</p>
        )}
        <h2 className="font-display mt-3 max-w-md text-3xl tracking-tight md:text-[2.5rem] md:leading-tight">
          {section.heading}
        </h2>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-[var(--color-muted)]">{section.body}</p>
        {section.ctaLabel && section.ctaHref && (
          <Button variant="underline" href={section.ctaHref} className="mt-7">
            {section.ctaLabel}
          </Button>
        )}
      </div>
    </section>
  )
}
