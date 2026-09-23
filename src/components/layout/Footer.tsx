import { useState } from 'react'
import { Container } from '@/components/system/Container'
import { Heading } from '@/components/system/Heading'
import { TextLink } from '@/components/system/Link'
import { Button } from '@/components/ui/Button'
import { useBrand } from '@/engine/BrandProvider'
import { cx, typeClass } from '@/system/cx'

export function Footer() {
  const brand = useBrand()
  const [sent, setSent] = useState(false)
  const newsletter = brand.footer.newsletter

  return (
    <footer className="border-t border-[var(--color-line)]">
      {newsletter && (
        <div className="border-b border-[var(--color-line)]">
          <Container className="grid gap-8 py-12 md:grid-cols-2 md:items-end md:py-16">
            <div>
              <Heading variant="h2">{newsletter.heading}</Heading>
              <Heading variant="body-sm" as="p" className="mt-3 max-w-md">
                {newsletter.body}
              </Heading>
            </div>
            {sent ? (
              <p className="type-body">You are on the list. We write rarely.</p>
            ) : (
              <form
                className="flex flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <input
                  required
                  type="email"
                  placeholder={newsletter.placeholder}
                  className="type-body h-12 flex-1 border border-[var(--color-line)] bg-transparent px-4 outline-none placeholder:text-[var(--color-muted)]"
                  style={{ borderRadius: 'var(--radius-sm)' }}
                />
                <Button type="submit">{newsletter.ctaLabel}</Button>
              </form>
            )}
          </Container>
        </div>
      )}

      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="sm:col-span-2 lg:col-span-4">
          <p className={typeClass.logo}>{brand.logoText}</p>
          <p className="type-body-sm mt-5 max-w-sm">{brand.footer.blurb}</p>
          {brand.footer.social.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4">
              {brand.footer.social.map((item) => (
                <li key={item.label}>
                  <TextLink href={item.href} external className={typeClass.nav}>
                    {item.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          )}
        </div>
        {brand.footer.columns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <p className={typeClass.eyebrow}>{col.title}</p>
            <ul className="mt-4 space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <TextLink href={link.href}>{link.label}</TextLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-[var(--color-line)]">
        <Container className="flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <p className={typeClass.meta}>{brand.footer.copyright}</p>
          <ul className="flex flex-wrap gap-4">
            {brand.footer.legal.map((link) => (
              <li key={link.label}>
                <TextLink href={link.href} className={typeClass.meta}>
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
          {brand.footer.payments.length > 0 && (
            <p className={cx(typeClass.meta, 'tracking-[0.12em] uppercase')}>
              {brand.footer.payments.join(' · ')}
            </p>
          )}
        </Container>
      </div>
    </footer>
  )
}
