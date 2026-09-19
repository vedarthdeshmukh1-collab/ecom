import type { RitualSectionConfig } from '@/brands/types'
import { Reveal } from '@/components/editorial/Reveal'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'
import { getProduct } from '@/engine/catalog'
import { BrandImage } from '@/media/BrandImage'
import { cx } from '@/system/cx'

export function RitualSection({ section }: { section: RitualSectionConfig }) {
  const brand = useBrand()

  return (
    <section className="container-site section-y">
      <Reveal>
        <h2 className="type-h2 max-w-lg">{section.heading}</h2>
      </Reveal>
      <div className="mt-12 grid gap-14 md:mt-16 lg:grid-cols-3 lg:items-start lg:gap-8">
        {section.steps.map((step, index) => {
          const product = getProduct(brand, step.productId)
          const href = product ? `/products/${product.slug}` : '/collections/all'
          const name = product?.name ?? step.title
          return (
            <Reveal key={step.number} delay={index * 0.08} className={cx(index === 1 && 'lg:mt-12', index === 2 && 'lg:mt-6')}>
              <article className="group">
                <div className="aspect-[3/4] overflow-hidden bg-[var(--color-surface)]">
                  <BrandImage
                    src={step.image}
                    alt={step.imageAlt}
                    fallbackLabel={brand.logoText}
                    className="media-hover-zoom h-full w-full object-cover"
                  />
                </div>
                <p className="type-eyebrow mt-6">{step.number}</p>
                <h3 className="type-h3 mt-3">{step.title}</h3>
                <p className="type-product mt-2">{name}</p>
                <p className="type-body-sm mt-3 max-w-sm">{step.body}</p>
                <Button variant="underline" href={href} className="mt-5">
                  {step.ctaLabel}
                </Button>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
