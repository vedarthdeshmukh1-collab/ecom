import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartPanel } from "@/components/AddToCartPanel";
import { ProductCard } from "@/components/ProductCard";
import {
  discountPercent,
  formatPrice,
  getProduct,
  getReviewsForProduct,
  products,
} from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} · SOLEVA`,
      description: product.description,
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          p.sport === product.sport ||
          p.gender === product.gender),
    )
    .slice(0, 4);
  const productReviews = getReviewsForProduct(slug);
  const discount = discountPercent(product.price, product.compareAt);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images,
    description: product.description,
    brand: { "@type": "Brand", name: "SOLEVA" },
    sku: product.id,
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: product.price,
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <div className="pb-24 pt-24 md:pb-28 md:pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <div className="space-y-3">
          {product.images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="relative aspect-square overflow-hidden rounded-2xl bg-mist"
            >
              <Image
                src={src}
                alt={`${product.name} view ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
          <div className="flex items-center justify-center rounded-2xl border border-dashed border-line bg-mist/50 py-10 text-sm text-muted">
            360° preview — coming soon
          </div>
        </div>

        <div className="md:sticky md:top-28 md:self-start">
          <nav className="text-xs text-muted">
            <Link href="/shop" className="hover:text-ink">
              Shop
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/collections/${product.collection}`}
              className="capitalize hover:text-ink"
            >
              {product.collection}
            </Link>
          </nav>

          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <p className="text-2xl font-semibold">{formatPrice(product.price)}</p>
            {product.compareAt && (
              <p className="text-muted line-through">
                {formatPrice(product.compareAt)}
              </p>
            )}
            {discount && (
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-bold text-accent">
                {discount}% OFF
              </span>
            )}
          </div>

          <p className="mt-2 text-sm text-muted">
            <span className="text-accent">{"★".repeat(Math.round(product.rating))}</span>{" "}
            {product.rating} · {product.reviewCount} reviews
          </p>

          <p className="mt-6 text-base leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartPanel product={product} />
          </div>

          <div className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Features
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-accent">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Technology
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {product.technology.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-mist px-3 py-1.5 text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Materials
              </h2>
              <p className="mt-3 text-sm text-ink-soft">{product.materials}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Specifications
              </h2>
              <dl className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {Object.entries(product.specs).map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-mist px-3 py-2">
                    <dt className="text-xs text-muted">{k}</dt>
                    <dd className="font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div id="shipping">
              <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Shipping & returns
              </h2>
              <p className="mt-3 text-sm text-ink-soft">
                Free shipping over ₹3,000. Easy 14-day returns on unworn pairs
                with original box.
              </p>
            </div>
          </div>
        </div>
      </div>

      {productReviews.length > 0 && (
        <section className="mx-auto mt-20 max-w-7xl px-5 md:mt-28 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Customer reviews
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {productReviews.map((review) => (
              <article
                key={review.id}
                className="rounded-2xl border border-line p-5"
              >
                <div className="flex items-center gap-2 text-sm text-accent">
                  {"★".repeat(review.rating)}
                  {review.verified && (
                    <span className="rounded-full bg-mist px-2 py-0.5 text-[10px] font-semibold uppercase text-ink">
                      Verified buyer
                    </span>
                  )}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {review.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{review.body}</p>
                <p className="mt-3 text-xs font-medium">
                  {review.name} · {review.date}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mx-auto mt-20 max-w-7xl px-5 md:mt-28 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight">
            Recommended for you
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
