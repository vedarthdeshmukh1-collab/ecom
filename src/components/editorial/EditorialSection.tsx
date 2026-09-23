import type { EditorialSectionConfig } from '@/brands/types'
import { Reveal } from '@/components/editorial/Reveal'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'

export function EditorialSection({ section }: { section: EditorialSectionConfig }) {
  const brand = useBrand()
  return (
    <section className="container-site section-y">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          {section.eyebrow && <p className="type-eyebrow">{section.eyebrow}</p>}
          <h2 className="type-display mt-4 max-w-lg">{section.heading}</h2>
          <p className="type-body-lg mt-6 max-w-md text-[var(--color-muted)]">{section.body}</p>
          {section.ctaLabel && section.ctaHref && (
            <Button variant="underline" href={section.ctaHref} className="mt-8">
              {section.ctaLabel}
            </Button>
          )}
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
          <div className="aspect-[4/5] overflow-hidden bg-[var(--color-surface)] lg:aspect-[3/4]">
            <BrandImage
              src={section.image}
              alt={section.imageAlt}
              fallbackLabel={brand.logoText}
              loading="eager"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
