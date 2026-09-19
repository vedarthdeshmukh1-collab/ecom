import type { ImageTextSectionConfig } from '@/brands/types'
import { Reveal } from '@/components/editorial/Reveal'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'
import { cx } from '@/system/cx'

export function ImageTextSection({ section }: { section: ImageTextSectionConfig }) {
  const brand = useBrand()
  const headingClass = section.headingVariant === 'h1' ? 'type-h1' : 'type-h2'

  return (
    <section className="container-site section-y">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
        <Reveal className={cx(section.reverse && 'md:order-2')}>
          <div className="aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
            <BrandImage
              src={section.image}
              alt={section.imageAlt}
              fallbackLabel={brand.logoText}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08} className={cx(section.reverse && 'md:order-1')}>
          {section.eyebrow && <p className="type-eyebrow">{section.eyebrow}</p>}
          <h2 className={cx(headingClass, 'mt-4 max-w-md')}>{section.heading}</h2>
          <p className="type-body mt-5 max-w-md text-[var(--color-muted)]">{section.body}</p>
          {section.ctaLabel && section.ctaHref && (
            <Button variant="underline" href={section.ctaHref} className="mt-8">
              {section.ctaLabel}
            </Button>
          )}
        </Reveal>
      </div>
    </section>
  )
}
