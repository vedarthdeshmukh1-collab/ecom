import { Star } from 'lucide-react'
import type { Review } from '@/brands/types'
import { Reveal } from '@/components/editorial/Reveal'

export function ReviewSection({
  heading,
  reviews,
  showStars = true,
}: {
  heading: string
  reviews: Review[]
  showStars?: boolean
}) {
  const items = reviews.slice(0, 3)

  return (
    <section className="container-site section-y">
      <Reveal>
        <h2 className="type-h2 max-w-xl">{heading}</h2>
      </Reveal>
      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-16">
        {items.map((review, index) => (
          <Reveal key={review.id} delay={index * 0.06}>
            <blockquote className="border-t border-[var(--color-line)] pt-8">
              {showStars && (
                <div className="mb-5 flex gap-0.5 text-[var(--color-ink)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={11}
                      fill={i < review.rating ? 'currentColor' : 'none'}
                      strokeWidth={1.25}
                    />
                  ))}
                </div>
              )}
              <p className="type-h3 italic">{review.body}</p>
              <footer className="type-meta mt-6 text-[var(--color-ink)]">— {review.author}</footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
