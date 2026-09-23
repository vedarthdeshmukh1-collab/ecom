import { motion } from 'framer-motion'
import type { HeroSection } from '@/brands/types'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'

export function Hero({ section }: { section: HeroSection }) {
  const brand = useBrand()
  const overlay = section.layout === 'overlay'

  if (overlay) {
    return (
      <section className="relative min-h-[78vh] md:min-h-[88vh]">
        <BrandImage
          src={section.image}
          alt={section.imageAlt}
          fallbackLabel={brand.logoText}
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-[var(--color-ink)]/45" />
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
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Button href={section.ctaHref} className="!bg-[var(--color-inverse)] !text-[var(--color-ink)]">
                {section.ctaLabel}
              </Button>
              {section.ctaSecondaryLabel && section.ctaSecondaryHref && (
                <Button variant="underline" href={section.ctaSecondaryHref} className="text-[var(--color-inverse)]">
                  {section.ctaSecondaryLabel}
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="grid overflow-hidden lg:grid-cols-[minmax(0,1.22fr)_minmax(0,1fr)] lg:min-h-[min(90vh,52rem)]">
      <motion.div
        className="relative aspect-[4/5] overflow-hidden bg-[var(--color-surface)] sm:aspect-[5/4] lg:aspect-auto lg:min-h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrandImage
            src={section.image}
            alt={section.imageAlt}
            fallbackLabel={brand.logoText}
            loading="eager"
            position="78% center"
            className="h-full w-full lg:object-contain xl:object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="flex flex-col justify-center px-[var(--gutter)] py-14 lg:py-24 xl:pl-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-md"
        >
          {section.eyebrow && <p className="type-eyebrow">{section.eyebrow}</p>}
          <h1 className="type-display mt-4">{section.heading}</h1>
          <p className="type-body-lg mt-6 text-[var(--color-muted)]">{section.subheading}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href={section.ctaHref}>{section.ctaLabel}</Button>
            {section.ctaSecondaryLabel && section.ctaSecondaryHref && (
              <Button variant="underline" href={section.ctaSecondaryHref}>
                {section.ctaSecondaryLabel}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
