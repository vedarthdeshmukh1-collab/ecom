import type { EditorialSectionConfig } from '@/brands/types'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'

export function EditorialSection({ section }: { section: EditorialSectionConfig }) {
  const brand = useBrand()
  return (
    <section className="mx-auto grid max-w-[1440px] items-center gap-8 px-4 py-16 md:grid-cols-12 md:gap-12 md:px-8 md:py-24 lg:px-12">
      <div className="md:col-span-7">
        <div className="aspect-[16/10] overflow-hidden bg-[var(--color-surface)] md:aspect-[16/9]">
          <BrandImage
            src={section.image}
            alt={section.imageAlt}
            fallbackLabel={brand.logoText}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="md:col-span-5">
        {section.eyebrow && (
          <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)]">{section.eyebrow}</p>
        )}
        <h2 className="font-display mt-3 text-3xl tracking-tight md:text-4xl">{section.heading}</h2>
        <p className="mt-5 text-sm leading-relaxed text-[var(--color-muted)]">{section.body}</p>
        {section.ctaLabel && section.ctaHref && (
          <Button variant="underline" href={section.ctaHref} className="mt-6">
            {section.ctaLabel}
          </Button>
        )}
      </div>
    </section>
  )
}
