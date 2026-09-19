import { BrandStory } from '@/components/editorial/BrandStory'
import { ImageTextSection } from '@/components/editorial/ImageTextSection'
import { Newsletter } from '@/components/editorial/Newsletter'
import { useBrand } from '@/engine/BrandProvider'
import type { NewsletterSectionConfig } from '@/brands/types'

export function AboutPage() {
  const brand = useBrand()
  return (
    <main>
      <header className="mx-auto max-w-[720px] px-4 py-16 text-center md:py-20">
        <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--color-muted)]">{brand.category}</p>
        <h1 className="font-display mt-3 text-4xl tracking-tight md:text-6xl">{brand.name}</h1>
        <p className="mt-5 text-sm leading-relaxed text-[var(--color-muted)] md:text-[15px]">{brand.description}</p>
      </header>
      <BrandStory story={brand.brandStory} />
      <ImageTextSection
        section={{
          type: 'imageText',
          reverse: true,
          eyebrow: 'Atelier',
          heading: 'Small lots. Lisbon light.',
          body: 'We mix, fill, and photograph in the same rooms so the formula you unbox matches the one we lived with. Lots are dated. If a batch is not honest, it does not ship.',
          image: brand.photography.about ?? brand.photography.story,
          imageAlt: 'AUREL atelier still life',
          ctaLabel: 'Shop the cabinet',
          ctaHref: '/collections/all',
        }}
      />
      <Newsletter
        section={
          brand.homepage.sections.find((s): s is NewsletterSectionConfig => s.type === 'newsletter') ?? {
            type: 'newsletter',
            heading: 'Notes from the house',
            body: 'Restocks and ritual letters. Four a year.',
            placeholder: 'Email address',
            ctaLabel: 'Subscribe',
          }
        }
      />
    </main>
  )
}
