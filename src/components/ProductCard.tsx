import Image from "next/image";
import Link from "next/link";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <article className="group">
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden bg-stone">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            priority={priority}
            className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
          <div className="absolute left-3 top-3 flex gap-2">
            {product.new && (
              <span className="bg-paper/95 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-ink">
                New
              </span>
            )}
            {product.compareAt && (
              <span className="bg-pine/90 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-mist">
                Sale
              </span>
            )}
          </div>
        </div>
        <div className="mt-3 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg leading-tight tracking-tight md:text-xl">
              {product.name}
            </h3>
            <p className="mt-1 text-xs capitalize text-muted">
              {product.category}
            </p>
          </div>
          <div className="text-right text-sm">
            <p>{formatPrice(product.price)}</p>
            {product.compareAt && (
              <p className="text-muted line-through">
                {formatPrice(product.compareAt)}
              </p>
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
