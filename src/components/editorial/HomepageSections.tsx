import type { FeaturedSection, HomepageSection } from '@/brands/types'
import { ProductGrid } from '@/components/commerce/ProductGrid'
import { ReviewSection } from '@/components/commerce/ReviewSection'
import { EditorialSection } from '@/components/editorial/EditorialSection'
import { Hero } from '@/components/editorial/Hero'
import { ImageGridSection } from '@/components/editorial/ImageGridSection'
import { ImageTextSection } from '@/components/editorial/ImageTextSection'
import { Newsletter } from '@/components/editorial/Newsletter'
import { Reveal } from '@/components/editorial/Reveal'
import { RitualSection } from '@/components/editorial/RitualSection'
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
          case 'ritual':
            return <RitualSection key={key} section={section} />
          case 'trust':
            return <TrustSection key={key} section={section} />
          case 'reviews':
            return (
              <ReviewSection
                key={key}
                heading={section.heading}
                reviews={brand.socialProof}
                showStars={section.showStars}
              />
            )
          case 'imageGrid':
            return <ImageGridSection key={key} section={section} />
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
    <section className="container-site section-y">
      <Reveal>
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-xl">
            {section.eyebrow && <p className="type-eyebrow">{section.eyebrow}</p>}
            <h2 className={section.eyebrow ? 'type-h2 mt-3' : 'type-h2'}>{section.heading}</h2>
            {section.subheading && <p className="type-body mt-4 max-w-md text-[var(--color-muted)]">{section.subheading}</p>}
          </div>
          {section.ctaLabel && section.ctaHref && (
            <Button variant="underline" href={section.ctaHref}>
              {section.ctaLabel}
            </Button>
          )}
        </div>
      </Reveal>
      <ProductGrid products={products} columns={4} card={{ showDescriptor: true, showCategory: false }} />
    </section>
  )
}
