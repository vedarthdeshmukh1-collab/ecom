import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartPanel } from "@/components/AddToCartPanel";
import { ProductCard } from "@/components/ProductCard";
import {
  formatPrice,
  getProduct,
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
        (p.collection === product.collection ||
          p.category === product.category),
    )
    .slice(0, 4);

  return (
    <div className="pb-20 pt-24 md:pb-28 md:pt-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <div className="space-y-3">
          {product.images.map((src, index) => (
            <div
              key={src}
              className="relative aspect-[4/5] overflow-hidden bg-stone"
            >
              <Image
                src={src}
                alt={`${product.name} view ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
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

          <h1 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-baseline gap-3">
            <p className="text-xl">{formatPrice(product.price)}</p>
            {product.compareAt && (
              <p className="text-muted line-through">
                {formatPrice(product.compareAt)}
              </p>
            )}
          </div>

          <p className="mt-6 text-base leading-relaxed text-muted">
            {product.description}
          </p>

          <div className="mt-8">
            <AddToCartPanel product={product} />
          </div>

          <div className="mt-10 space-y-6 border-t border-line pt-8">
            <div>
              <h2 className="text-xs uppercase tracking-[0.18em] text-muted">
                Details
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-soft">
                {product.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="text-verdigris">—</span>
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.18em] text-muted">
                Materials
              </h2>
              <p className="mt-3 text-sm text-ink-soft">{product.materials}</p>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto mt-20 max-w-7xl px-5 md:mt-28 md:px-8">
          <h2 className="font-display text-3xl tracking-tight">
            You may also like
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
