import type { TrustSectionConfig } from '@/brands/types'
import { Reveal } from '@/components/editorial/Reveal'

export function TrustSection({ section }: { section: TrustSectionConfig }) {
  return (
    <section className="container-site section-y">
      {(section.eyebrow || section.heading) && (
        <Reveal className="max-w-2xl">
          {section.eyebrow && <p className="type-eyebrow">{section.eyebrow}</p>}
          {section.heading && (
            <h2 className={section.eyebrow ? 'type-h2 mt-4' : 'type-h2'}>{section.heading}</h2>
          )}
        </Reveal>
      )}
      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-16">
        {section.items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.06}>
            <h3 className="type-h3">{item.title}</h3>
            <p className="type-body-sm mt-4 max-w-xs">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
