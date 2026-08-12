import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import {
  categoryMeta,
  getBestSellers,
  getFeaturedProducts,
  sports,
  technologies,
} from "@/data/products";
import { reviews } from "@/data/products";

export default function HomePage() {
  const arrivals = getFeaturedProducts().slice(0, 4);
  const bestsellers = getBestSellers().length
    ? getBestSellers().slice(0, 4)
    : getFeaturedProducts().slice(0, 4);
  const homeReviews = reviews.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden hero-wash text-paper">
        <Image
          src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=2200&q=80"
          alt="Soft morning walk in comfortable sneakers"
          fill
          priority
          className="object-cover opacity-55 animate-fade"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-ink/10" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:justify-end md:px-8 md:pb-24">
          <p className="font-display animate-rise text-5xl font-semibold tracking-[0.18em] md:text-7xl lg:text-8xl">
            SOLEVA
          </p>
          <h1 className="animate-rise-delay-1 mt-5 max-w-xl font-display text-3xl font-medium leading-[1.15] tracking-tight md:text-5xl">
            Soft steps. All day.
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-paper/80 md:text-lg">
            Footwear that feels easy the moment you put it on — for walks,
            workdays, and weekends in between.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/collections/men"
              className="btn-primary bg-paper text-ink hover:bg-paper hover:text-ink"
            >
              Shop Men
            </Link>
            <Link href="/collections/women" className="btn-secondary">
              Shop Women
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Start here
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Find your everyday pair
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {categoryMeta.map((cat) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="group relative min-h-[220px] overflow-hidden rounded-xl md:min-h-[280px]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <span className="absolute bottom-4 left-4 font-display text-xl font-medium text-paper md:text-2xl">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                New arrivals
              </p>
              <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
                Fresh underfoot
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
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

      <section className="relative overflow-hidden py-20 text-paper md:py-28">
        <Image
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2200&q=80"
          alt="Easy outdoor miles in SOLEVA footwear"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-paper/70">
            Made for miles
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-medium tracking-tight md:text-5xl">
            Light enough to forget. Steady enough to trust.
          </h2>
          <p className="mt-5 max-w-lg text-paper/80">
            Soft cushioning and breathable uppers for days that stretch longer
            than planned.
          </p>
          <Link href="/collections/running" className="btn-accent mt-8 inline-flex">
            Shop running
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Best sellers
            </p>
            <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
              Most loved
            </h2>
          </div>
          <Link
            href="/shop?sort=featured"
            className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Shop bestsellers
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-mist/70 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            Shop by movement
          </h2>
          <div className="mt-10 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible lg:grid-cols-7">
            {sports.map((sport) => (
              <Link
                key={sport.name}
                href={sport.href}
                className="group relative min-w-[140px] flex-shrink-0 overflow-hidden rounded-xl md:min-w-0"
              >
                <div className="relative aspect-[3/4]">
                  <Image
                    src={sport.image}
                    alt={sport.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="160px"
                  />
                  <div className="absolute inset-0 bg-ink/30 transition group-hover:bg-ink/20" />
                  <span className="absolute inset-x-0 bottom-3 text-center text-sm font-semibold text-paper">
                    {sport.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            Why it feels better
          </p>
          <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Comfort built in
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech, i) => (
            <div key={tech.title} className="border-t border-line pt-6">
              <span className="text-xs font-semibold tracking-[0.18em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-medium">{tech.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{tech.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
            From real wearers
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {homeReviews.map((review) => (
              <figure key={review.id} className="border-t border-line pt-6">
                <div className="flex items-center gap-2 text-sm text-accent">
                  {"★".repeat(review.rating)}
                  {review.verified && (
                    <span className="text-[10px] font-semibold uppercase tracking-wide text-muted">
                      Verified
                    </span>
                  )}
                </div>
                <blockquote className="mt-3 font-display text-lg font-medium tracking-tight">
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
