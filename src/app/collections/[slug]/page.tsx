import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import {
  collections,
  getCollection,
  getProductsByCollection,
} from "@/data/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.name,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const items = getProductsByCollection(slug);

  return (
    <div>
      <section className="relative min-h-[52vh] overflow-hidden bg-ink text-mist md:min-h-[60vh]">
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          priority
          className="object-cover opacity-55"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" />
        <div className="relative z-10 mx-auto flex min-h-[52vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-28 md:min-h-[60vh] md:px-8 md:pb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-mist/70">
            Collection
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-tight md:text-7xl">
            {collection.name}
          </h1>
          <p className="mt-4 max-w-lg text-base text-mist/80 md:text-lg">
            {collection.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-end justify-between gap-4">
          <p className="text-sm text-muted">
            {items.length} product{items.length === 1 ? "" : "s"}
          </p>
          <Link
            href="/shop"
            className="text-sm tracking-wide underline-offset-4 hover:underline"
          >
            Shop all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
          {items.map((product, i) => (
            <ProductCard key={product.id} product={product} priority={i < 3} />
          ))}
        </div>
      </section>
    </div>
  );
}
