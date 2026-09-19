import type { BrandStory as BrandStoryType } from '@/brands/types'
import { useBrand } from '@/engine/BrandProvider'
import { BrandImage } from '@/media/BrandImage'

export function BrandStory({ story }: { story: BrandStoryType }) {
  const brand = useBrand()
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="aspect-[4/5] overflow-hidden bg-[var(--color-surface)]">
            <BrandImage
              src={story.image}
              alt={story.imageAlt}
              fallbackLabel={brand.logoText}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-muted)]">{story.eyebrow}</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight">{story.heading}</h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-[var(--color-muted)]">
            {story.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
      <ul className="mt-16 grid gap-10 border-t border-[var(--color-line)] pt-12 md:grid-cols-3">
        {story.values.map((value) => (
          <li key={value.title}>
            <h3 className="text-[13px] tracking-[0.12em] uppercase">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{value.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
