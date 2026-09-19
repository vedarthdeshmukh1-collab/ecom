import type { TrustSectionConfig } from '@/brands/types'

export function TrustSection({ section }: { section: TrustSectionConfig }) {
  return (
    <section className="border-y border-[var(--color-line)]">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-12">
        {section.items.map((item) => (
          <div key={item.title}>
            <h3 className="text-[13px] tracking-[0.1em] uppercase">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
