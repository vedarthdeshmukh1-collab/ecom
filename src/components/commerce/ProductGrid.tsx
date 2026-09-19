import type { Product } from '@/brands/types'
import { ProductCard, type ProductCardProps } from './ProductCard'
import { Heading } from '@/components/system/Heading'
import { cx } from '@/system/cx'

type Columns = 2 | 3 | 4

export function ProductGrid({
  products,
  columns = 4,
  card,
}: {
  products: Product[]
  columns?: Columns
  card?: Omit<ProductCardProps, 'product'>
}) {
  if (products.length === 0) {
    return (
      <Heading variant="body-sm" as="p" className="py-20 text-center">
        Nothing in this edit yet.
      </Heading>
    )
  }

  const colClass =
    columns === 2
      ? 'grid-cols-2 md:grid-cols-2'
      : columns === 3
        ? 'grid-cols-2 lg:grid-cols-3'
        : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'

  return (
    <div className={cx('grid gap-x-3 gap-y-10 md:gap-x-6 md:gap-y-14', colClass)}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} {...card} />
      ))}
    </div>
  )
}
