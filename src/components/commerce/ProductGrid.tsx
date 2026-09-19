import type { Product } from '@/brands/types'
import { ProductCard } from './ProductCard'

export function ProductGrid({ products }: { products: Product[] }) {
  if (products.length === 0) {
    return <p className="py-20 text-center text-sm text-[var(--color-muted)]">Nothing in this edit yet.</p>
  }

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-10 md:gap-x-6 md:gap-y-14 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
