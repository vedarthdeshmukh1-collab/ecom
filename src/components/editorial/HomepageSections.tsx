import type { FeaturedSection, HomepageSection } from '@/brands/types'
import { ProductGrid } from '@/components/commerce/ProductGrid'
import { ReviewSection } from '@/components/commerce/ReviewSection'
import { EditorialSection } from '@/components/editorial/EditorialSection'
import { Hero } from '@/components/editorial/Hero'
import { ImageTextSection } from '@/components/editorial/ImageTextSection'
import { Newsletter } from '@/components/editorial/Newsletter'
import { TrustSection } from '@/components/editorial/TrustSection'
import { Button } from '@/components/ui/Button'
import { Marquee } from '@/components/ui/Marquee'
import { productsForIds } from '@/engine/catalog'
import { useBrand } from '@/engine/BrandProvider'

export function HomepageSections({ sections }: { sections: HomepageSection[] }) {
  const brand = useBrand()

  return (
    <>
      {sections.map((section, index) => {
        const key = `${section.type}-${index}`
        switch (section.type) {
          case 'hero':
            return <Hero key={key} section={section} />
          case 'marquee':
            return <Marquee key={key} items={section.items} />
          case 'featured':
            return <Featured key={key} section={section} />
          case 'editorial':
            return <EditorialSection key={key} section={section} />
          case 'imageText':
            return <ImageTextSection key={key} section={section} />
          case 'trust':
            return <TrustSection key={key} section={section} />
          case 'reviews':
            return <ReviewSection key={key} heading={section.heading} reviews={brand.socialProof} />
          case 'newsletter':
            return <Newsletter key={key} section={section} />
          default:
            return null
        }
      })}
    </>
  )
}

function Featured({ section }: { section: FeaturedSection }) {
  const brand = useBrand()
  const products = productsForIds(brand, section.productIds)
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-20 lg:px-12">
      <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          {section.eyebrow && (
            <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)]">{section.eyebrow}</p>
          )}
          <h2 className="font-display mt-2 text-3xl tracking-tight md:text-4xl">{section.heading}</h2>
          {section.subheading && (
            <p className="mt-3 max-w-md text-sm text-[var(--color-muted)]">{section.subheading}</p>
          )}
        </div>
        {section.ctaLabel && section.ctaHref && (
          <Button variant="underline" href={section.ctaHref}>
            {section.ctaLabel}
          </Button>
        )}
      </div>
      <ProductGrid products={products} />
    </section>
  )
}
