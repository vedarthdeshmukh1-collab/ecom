import { useState } from 'react'
import type { NewsletterSectionConfig } from '@/brands/types'
import { Button } from '@/components/ui/Button'

export function Newsletter({ section }: { section: NewsletterSectionConfig }) {
  const [sent, setSent] = useState(false)

  return (
    <section className="border-t border-[var(--color-line)] bg-[var(--color-surface)]/40">
      <div className="mx-auto max-w-xl px-4 py-16 text-center md:py-20">
        <h2 className="font-display text-3xl tracking-tight md:text-4xl">{section.heading}</h2>
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{section.body}</p>
        {sent ? (
          <p className="mt-8 text-sm">You are on the list. We write rarely.</p>
        ) : (
          <form
            className="mt-8 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault()
              setSent(true)
            }}
          >
            <input
              required
              type="email"
              placeholder={section.placeholder}
              className="h-12 flex-1 border border-[var(--color-line)] bg-transparent px-4 text-sm outline-none placeholder:text-[var(--color-muted)]"
            />
            <Button type="submit">{section.ctaLabel}</Button>
          </form>
        )}
      </div>
    </section>
  )
}
