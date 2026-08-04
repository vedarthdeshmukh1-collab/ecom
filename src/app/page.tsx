import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import {
  categoryMeta,
  getBestSellers,
  getNewArrivals,
  sports,
  technologies,
} from "@/data/products";
import { reviews } from "@/data/products";

export default function HomePage() {
  const arrivals = getNewArrivals().slice(0, 4);
  const bestsellers = getBestSellers().slice(0, 4);
  const homeReviews = reviews.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden hero-wash text-paper">
        <Image
          src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=2000&q=80"
          alt="Athlete in premium running sneakers"
          fill
          priority
          className="object-cover opacity-50 animate-fade"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-20 pt-28 md:justify-center md:px-8 md:pb-24">
          <p className="font-display animate-rise text-5xl font-bold tracking-[0.14em] md:text-7xl lg:text-8xl">
            SOLEVA
          </p>
          <h1 className="animate-rise-delay-1 mt-4 max-w-xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Move Different.
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-paper/80 md:text-lg">
            Premium footwear engineered for comfort, movement, and everyday
            performance.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link href="/collections/men" className="btn-primary bg-paper text-ink hover:bg-accent hover:text-paper">
              Shop Men
            </Link>
            <Link href="/collections/women" className="btn-secondary">
              Shop Women
            </Link>
            <Link href="/shop" className="btn-secondary">
              Explore Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-line bg-mist py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-xs font-semibold uppercase tracking-[0.28em] text-ink-soft">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10">
              {[
                "Free shipping over ₹3,000",
                "Ultra Cushion Foam",
                "14-day easy returns",
                "Performance Meets Everyday Style",
                "Limited drops weekly",
                "Engineered for every step",
              ].map((item) => (
                <span key={`${copy}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Featured categories
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Shop your lane
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {categoryMeta.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative min-h-[200px] overflow-hidden rounded-2xl md:min-h-[260px]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-xl font-bold text-paper md:text-2xl">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                New arrivals
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Just dropped
              </h2>
            </div>
            <Link href="/shop" className="text-sm font-semibold text-accent hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {arrivals.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-paper md:py-32">
        <Image
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2000&q=80"
          alt="Runner on the road in SOLEVA footwear"
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Limited collection
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Engineered For Every Step
          </h2>
          <p className="mt-5 max-w-lg text-paper/75">
            Flagship cushioning, breathable knits, and grip that stays honest —
            built for athletes who don’t clock out when the workout ends.
          </p>
          <Link href="/collections/limited" className="btn-accent mt-8 inline-flex">
            Shop limited edition
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Best sellers
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Crowd favorites
            </h2>
          </div>
          <Link href="/shop?sort=featured" className="text-sm font-semibold text-accent hover:underline">
            Shop bestsellers
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Shop by sport
          </h2>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible lg:grid-cols-7">
            {sports.map((sport) => (
              <Link
                key={sport.name}
                href={sport.href}
                className="group relative min-w-[140px] flex-shrink-0 overflow-hidden rounded-2xl md:min-w-0"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 bg-ink/35" />
                  <span className="absolute inset-x-0 bottom-3 text-center text-sm font-bold text-paper">
                    {sport.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Technology
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-5xl">
            Built into every pair
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, i) => (
            <div
              key={tech.title}
              className="rounded-2xl border border-line bg-paper p-6 transition hover:border-accent/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mist text-sm font-bold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold">{tech.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tech.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Verified buyers
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {homeReviews.map((review) => (
              <figure
                key={review.id}
                className="rounded-2xl border border-line bg-mist/50 p-6"
              >
                <div className="flex items-center gap-2 text-accent text-sm">
                  {"★".repeat(review.rating)}
                  {review.verified && (
                    <span className="rounded-full bg-paper px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink">
                      Verified
                    </span>
                  )}
                </div>
                <blockquote className="mt-3 font-display text-lg font-semibold tracking-tight">
                  {review.title}
                </blockquote>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {review.body}
                </p>
                <figcaption className="mt-4 text-xs font-medium text-ink">
                  {review.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
