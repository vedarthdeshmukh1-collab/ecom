import { motion } from 'framer-motion'
import type { HeroSection } from '@/brands/types'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'

export function Hero({ section }: { section: HeroSection }) {
  const brand = useBrand()
  const overlay = section.layout !== 'split'

  if (overlay) {
    return (
      <section className="relative min-h-[78vh] md:min-h-[88vh]">
        <BrandImage
          src={section.image}
          alt={section.imageAlt}
          fallbackLabel={brand.logoText}
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/55 via-[var(--color-ink)]/15 to-transparent" />
          <div className="relative mx-auto flex min-h-[78vh] max-w-[var(--container-max)] flex-col justify-end px-[var(--gutter)] pb-12 md:min-h-[88vh] md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-[var(--color-inverse)]"
          >
            {section.eyebrow && <p className="type-eyebrow text-[var(--color-inverse)]">{section.eyebrow}</p>}
            <h1 className="type-display mt-3 text-[var(--color-inverse)]">{section.heading}</h1>
            <p className="type-body mt-5 max-w-md text-[var(--color-inverse)]/85">{section.subheading}</p>
            <Button
              href={section.ctaHref}
              className="mt-8 !bg-[var(--color-inverse)] !text-[var(--color-ink)]"
            >
              {section.ctaLabel}
            </Button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="grid md:grid-cols-2">
      <div className="order-2 flex flex-col justify-center px-4 py-14 md:order-1 md:px-12 md:py-24">
        {section.eyebrow && (
          <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--color-muted)]">{section.eyebrow}</p>
        )}
        <h1 className="font-display mt-3 text-4xl leading-[1.05] md:text-5xl">{section.heading}</h1>
        <p className="mt-5 max-w-md text-sm text-[var(--color-muted)]">{section.subheading}</p>
        <Button href={section.ctaHref} className="mt-8 w-fit">
          {section.ctaLabel}
        </Button>
      </div>
      <div className="order-1 aspect-[4/5] md:order-2 md:aspect-auto md:min-h-[80vh]">
        <BrandImage
          src={section.image}
          alt={section.imageAlt}
          fallbackLabel={brand.logoText}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
