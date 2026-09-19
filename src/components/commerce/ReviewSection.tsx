import { Star } from 'lucide-react'
import type { Review } from '@/brands/types'

export function ReviewSection({ heading, reviews }: { heading: string; reviews: Review[] }) {
  return (
    <section className="mx-auto max-w-[1440px] px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <h2 className="font-display text-center text-3xl tracking-tight md:text-4xl">{heading}</h2>
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <blockquote key={review.id} className="border-t border-[var(--color-line)] pt-6">
            <div className="flex gap-0.5 text-[var(--color-accent)]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  fill={i < review.rating ? 'currentColor' : 'none'}
                  strokeWidth={1.25}
                />
              ))}
            </div>
            <p className="mt-4 font-display text-2xl tracking-tight">{review.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{review.body}</p>
            <footer className="mt-5 text-[11px] tracking-[0.14em] uppercase text-[var(--color-ink)]">
              {review.author}
              {review.location ? ` · ${review.location}` : ''} · {review.date}
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
