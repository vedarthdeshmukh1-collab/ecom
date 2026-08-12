import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import {
  getBestSellers,
  getFeaturedProducts,
  getProductById,
  technologies,
} from "@/data/products";
import { reviews } from "@/data/products";

const categoryTiles = [
  {
    label: "New Arrivals",
    href: "/shop?sort=featured",
    productId: "urban-x",
    bg: "bg-tile-1",
  },
  {
    label: "Mens",
    href: "/collections/men",
    productId: "velocity-one",
    bg: "bg-tile-2",
  },
  {
    label: "Womens",
    href: "/collections/women",
    productId: "cloudstep",
    bg: "bg-tile-3",
  },
  {
    label: "Best Sellers",
    href: "/shop?sort=featured",
    productId: "apex-pro",
    bg: "bg-tile-4",
  },
] as const;

const promoBands = [
  {
    title: "All-day essentials",
    hrefMen: "/collections/men",
    hrefWomen: "/collections/women",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1400&q=80",
    alt: "Everyday sneakers ready for travel days",
  },
  {
    title: "New arrivals",
    hrefMen: "/shop",
    hrefWomen: "/shop",
    image:
      "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1400&q=80",
    alt: "Fresh SOLEVA colorways in soft light",
  },
  {
    title: "Built for miles",
    hrefMen: "/collections/running",
    hrefWomen: "/collections/walking",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=80",
    alt: "Comfortable footwear for outdoor miles",
  },
] as const;

export default function HomePage() {
  const arrivals = getFeaturedProducts().slice(0, 4);
  const bestsellers = getBestSellers().length
    ? getBestSellers().slice(0, 4)
    : getFeaturedProducts().slice(0, 4);
  const homeReviews = reviews.slice(0, 3);
  const heroProduct = getProductById("velocity-one");

  return (
    <>
      {/* Split lifestyle + product hero */}
      <section className="px-3 pt-3 md:px-5 md:pt-5">
        <div className="relative mx-auto grid min-h-[78svh] max-w-[1400px] overflow-hidden rounded-[1.75rem] bg-ink md:min-h-[84svh] md:grid-cols-2">
          <div className="relative min-h-[42svh] md:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1600&q=80"
              alt="Comfortable everyday style in the city"
              fill
              priority
              className="object-cover animate-fade"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="relative min-h-[42svh] md:min-h-full">
            <Image
              src={
                heroProduct?.images.lifestyle ??
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80"
              }
              alt="SOLEVA Velocity One detail"
              fill
              priority
              className="object-cover animate-fade"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
            aria-hidden
          >
            <p className="rotate-180 font-display text-[0.7rem] font-medium uppercase tracking-[0.35em] text-paper [writing-mode:vertical-rl]">
              soleva · soft steps
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-5 p-6 text-paper md:inset-x-auto md:right-0 md:bottom-0 md:max-w-md md:items-start md:p-10">
            <p className="animate-rise font-display text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              Soft steps.
              <br />
              All day.
            </p>
            <div className="animate-rise-delay-1 flex flex-wrap gap-2.5">
              <Link href="/collections/men" className="btn-primary">
                Shop Men
              </Link>
              <Link href="/collections/women" className="btn-primary">
                Shop Women
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Colored category tiles with product shots */}
      <section className="mx-auto max-w-[1400px] px-3 py-4 md:px-5 md:py-6">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {categoryTiles.map((tile) => {
            const product = getProductById(tile.productId);
            return (
              <Link
                key={tile.label}
                href={tile.href}
                className={`group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] ${tile.bg}`}
              >
                {product?.images.primary && (
                  <Image
                    src={product.images.primary}
                    alt={product.name}
                    fill
                    className="object-contain p-6 transition duration-700 group-hover:scale-105 md:p-8"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                )}
                <span className="absolute inset-x-0 top-1/2 z-10 mx-auto w-max -translate-y-1/2 rounded-full bg-paper/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.14em] text-ink shadow-sm backdrop-blur">
                  {tile.label}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Best sellers */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-6 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="border-b-2 border-ink pb-1 font-display text-3xl font-medium tracking-tight md:text-4xl">
            Best Sellers
          </h2>
          <Link
            href="/shop?sort=featured"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            Shop all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-5">
          {bestsellers.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 2} />
          ))}
        </div>
      </section>

      {/* 3 lifestyle promo bands */}
      <section className="mx-auto max-w-[1400px] px-3 pb-4 md:px-5">
        <div className="grid gap-3 md:grid-cols-3 md:gap-4">
          {promoBands.map((band) => (
            <div
              key={band.title}
              className="group relative min-h-[420px] overflow-hidden rounded-[1.5rem] md:min-h-[520px]"
            >
              <Image
                src={band.image}
                alt={band.alt}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-ink/25" />
              <div className="absolute inset-0 flex flex-col items-center justify-between p-6 text-center text-paper md:p-8">
                <span className="h-4" />
                <h3 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
                  {band.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <Link href={band.hrefMen} className="btn-secondary">
                    Shop Men
                  </Link>
                  <Link href={band.hrefWomen} className="btn-secondary">
                    Shop Women
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* New arrivals */}
      <section className="mx-auto max-w-[1400px] px-4 py-14 md:px-6 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <h2 className="border-b-2 border-ink pb-1 font-display text-3xl font-medium tracking-tight md:text-4xl">
            New Arrivals
          </h2>
          <Link
            href="/shop"
            className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted underline-offset-4 hover:text-ink hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-3 gap-y-10 md:grid-cols-4 md:gap-x-5">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Feature story cards */}
      <section className="bg-mist/80 py-16 md:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-8 px-4 md:grid-cols-3 md:gap-10 md:px-6">
          {technologies.slice(0, 3).map((tech) => (
            <div key={tech.title} className="rounded-2xl bg-paper p-8 md:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-muted">
                {tech.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {tech.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-[1400px] px-4 py-16 md:px-6 md:py-24">
        <h2 className="font-display text-3xl font-medium tracking-tight md:text-4xl">
          Wearer love
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeReviews.map((review) => (
            <figure key={review.id} className="rounded-2xl bg-mist/70 p-7">
              <p className="text-sm text-ink">{"★".repeat(review.rating)}</p>
              <blockquote className="mt-3 font-display text-xl font-medium tracking-tight">
                {review.title}
              </blockquote>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {review.body}
              </p>
              <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.12em] text-ink">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
