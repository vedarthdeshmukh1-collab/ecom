import { useState } from 'react'
import type { NewsletterSectionConfig } from '@/brands/types'
import { Reveal } from '@/components/editorial/Reveal'
import { Button } from '@/components/ui/Button'

export function Newsletter({ section }: { section: NewsletterSectionConfig }) {
  const [sent, setSent] = useState(false)

  return (
    <section className="border-t border-[var(--color-line)]">
      <Reveal>
        <div className="container-narrow section-y text-center">
          {section.eyebrow && <p className="type-eyebrow">{section.eyebrow}</p>}
          <h2 className="type-h2 mx-auto mt-4 max-w-xl">{section.heading}</h2>
          <p className="type-body mx-auto mt-4 max-w-md text-[var(--color-muted)]">{section.body}</p>
          {sent ? (
            <p className="type-body mt-10">You are on the list. We write rarely.</p>
          ) : (
            <form
              className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
            >
              <input
                required
                type="email"
                placeholder={section.placeholder}
                className="type-body h-12 flex-1 border-0 border-b border-[var(--color-line)] bg-transparent px-0 outline-none placeholder:text-[var(--color-muted)] focus:border-[var(--color-ink)]"
              />
              <Button type="submit">{section.ctaLabel}</Button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  )
}
