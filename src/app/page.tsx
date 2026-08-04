import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import {
  collections,
  getFeaturedProducts,
  products,
} from "@/data/products";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 4);
  const newest = products.filter((p) => p.new).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[100svh] overflow-hidden hero-wash text-mist">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
          alt="Sunlit living room with sculptural furniture"
          fill
          priority
          className="object-cover opacity-55 animate-fade"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-24 md:pt-20">
          <p className="font-display animate-rise text-5xl font-semibold tracking-[0.18em] md:text-7xl lg:text-8xl">
            FORMA
          </p>
          <h1 className="animate-rise-delay-1 mt-5 max-w-xl font-display text-3xl leading-[1.1] tracking-tight md:text-5xl">
            Objects made to hold space
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-mist/80 md:text-lg">
            Furniture and forms for interiors that prefer quiet confidence over
            noise.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="bg-mist px-6 py-3.5 text-sm font-medium tracking-wide text-ink transition hover:bg-paper"
            >
              Shop the collection
            </Link>
            <Link
              href="/about"
              className="border border-mist/40 px-6 py-3.5 text-sm tracking-wide text-mist transition hover:bg-mist/10"
            >
              Our approach
            </Link>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-line bg-mist py-4">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-xs uppercase tracking-[0.28em] text-ink-soft">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10">
              {[
                "Small-batch production",
                "Solid wood & stoneware",
                "Designed in Portland",
                "Ships in 5–12 days",
                "Built for real rooms",
                "Portfolio demo store",
              ].map((item) => (
                <span key={`${copy}-${item}`}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Collections
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
            Three rooms. One language.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            Living, light, and objects — edited so each piece earns its keep.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:gap-5">
          {collections.map((collection, index) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative block min-h-[380px] overflow-hidden md:min-h-[480px]"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-mist md:p-8">
                <p className="font-display text-3xl tracking-tight">
                  {collection.name}
                </p>
                <p className="mt-2 max-w-xs text-sm text-mist/75">
                  {collection.description}
                </p>
                <span className="mt-4 inline-block text-xs uppercase tracking-[0.18em] underline-offset-4 group-hover:underline">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Featured
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
                Pieces that set the room
              </h2>
            </div>
            <Link
              href="/shop"
              className="text-sm tracking-wide underline-offset-4 hover:underline"
            >
              View all products
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {featured.map((product, i) => (
              <ProductCard
                key={product.id}
                product={product}
                priority={i < 2}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:gap-16 md:px-8 md:py-28">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone md:aspect-[5/6]">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=80"
            alt="Textiles and ceramics styled on a low table"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            Studio note
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight md:text-5xl">
            Designed for rooms people actually live in
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            FORMA is a fictional studio storefront — built to look and feel like
            a real ecommerce brand for portfolios and case studies. Browse
            products, manage a cart, and walk through a demo checkout.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex bg-pine px-6 py-3.5 text-sm text-mist transition hover:bg-pine-deep"
          >
            Read the brief
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-paper py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Just arrived
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              New for the season
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {newest.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
