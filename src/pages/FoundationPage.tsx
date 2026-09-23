import { Container } from '@/components/system/Container'
import { Heading } from '@/components/system/Heading'
import { Image } from '@/components/system/Image'
import { Section } from '@/components/system/Section'
import { ProductGrid } from '@/components/commerce/ProductGrid'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'

const typeRows = [
  ['display', 'Keep the barrier, lose the noise.'],
  ['h1', 'Lumen Cleansing Milk'],
  ['h2', 'The weekday edit'],
  ['h3', 'Skin barrier first'],
  ['body-lg', 'A milky first cleanse for skin that prefers to be asked, not told.'],
  ['body', 'Essence while the face is still damp. Serum in three drops, not five.'],
  ['body-sm', 'Fragrance-free. Essential-oil free. pH 5.2.'],
  ['eyebrow', 'Autumn cabinet'],
  ['nav', 'The Cabinet'],
  ['button', 'Add to cabinet'],
  ['price', '$72'],
  ['product', 'Cloud Barrier Cream'],
  ['meta', 'Treatments · 30 ml'],
  ['logo', 'AUREL'],
] as const

export function FoundationPage() {
  const brand = useBrand()
  const sample = brand.products.slice(0, 4)

  return (
    <main>
      <Section>
        <Container width="narrow" className="text-center">
          <Heading variant="eyebrow">Design system</Heading>
          <Heading variant="display" className="mt-3">
            Foundation
          </Heading>
          <Heading variant="body" as="p" className="mt-4">
            Tokens, type, and merchandising primitives. Brand identity is injected from data; these
            components stay shared across storefronts.
          </Heading>
          <Heading variant="body-sm" as="p" className="mt-3">
            Append ?brand=contrast to restyle this page from configuration only.
          </Heading>
        </Container>
      </Section>

      <Section tone="surface" y={false} className="border-y border-[var(--color-line)] py-10">
        <Container>
          <Heading variant="eyebrow">Color</Heading>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
            {Object.entries(brand.colors).map(([name, value]) => (
              <div key={name}>
                <div className="aspect-[4/3] border border-[var(--color-line)]" style={{ background: value }} />
                <p className="type-meta mt-2 uppercase">{name}</p>
                <p className="type-meta">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading variant="eyebrow">Typography</Heading>
          <div className="mt-10 space-y-8">
            {typeRows.map(([variant, sampleText]) => (
              <div key={variant} className="grid gap-2 border-t border-[var(--color-line)] pt-6 md:grid-cols-12">
                <p className="type-meta md:col-span-2">{variant}</p>
                <div className="md:col-span-10">
                  <Heading variant={variant}>{sampleText}</Heading>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <Heading variant="eyebrow">Buttons</Heading>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button>Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="underline">Underline</Button>
            <Button size="sm">Compact</Button>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <Heading variant="eyebrow">Image</Heading>
          <Heading variant="h2" className="mt-2">
            Ratios and fallback
          </Heading>
          <div className="mt-10 grid grid-cols-2 items-start gap-4 md:grid-cols-4">
            <Image src={brand.photography.hero} alt="Hero still life" ratio={brand.media.productRatio} loading="eager" />
            <Image src={brand.photography.story} alt="Atelier" ratio={brand.media.storyRatio} loading="eager" />
            <Image src={brand.photography.editorial01} alt="Editorial" ratio={brand.media.editorialRatio} loading="eager" />
            <Image src="/brands/aurel/missing.webp" alt="Missing asset fallback" ratio={brand.media.productRatio} loading="eager" />
          </div>
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <Heading variant="eyebrow">Product card</Heading>
              <Heading variant="h2" className="mt-2">
                Merchandising atom
              </Heading>
            </div>
            <Heading variant="body-sm" as="p" className="max-w-sm">
              Hover image, badge, rating, swatches, quick add. Alignment and ratio are props, not brand forks.
            </Heading>
          </div>
          <ProductGrid products={sample} columns={4} />
        </Container>
      </Section>

      <Section className="border-t border-[var(--color-line)]">
        <Container>
          <Heading variant="eyebrow">Centered · square</Heading>
          <div className="mt-8 max-w-xs">
            <ProductGrid
              products={sample.slice(0, 1)}
              columns={2}
              card={{ align: 'center', ratio: 'square', showRating: true, showQuickAdd: false }}
            />
          </div>
        </Container>
      </Section>
    </main>
  )
}
