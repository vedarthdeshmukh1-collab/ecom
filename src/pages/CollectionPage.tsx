import { useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { CollectionFilters } from '@/components/commerce/CollectionFilters'
import { CollectionHeader } from '@/components/commerce/CollectionHeader'
import { ProductGrid } from '@/components/commerce/ProductGrid'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { filterProducts, getCollection, productsForCollection, uniqueCategories } from '@/engine/catalog'
import { useBrand } from '@/engine/BrandProvider'

export function CollectionPage() {
  const { slug = 'all' } = useParams()
  const brand = useBrand()
  const collection = getCollection(brand, slug)
  const [category, setCategory] = useState<string | undefined>(undefined)
  const [sort, setSort] = useState<string>('featured')

  const source = useMemo(() => productsForCollection(brand, slug), [brand, slug])
  const categories = uniqueCategories(brand)
  const products = filterProducts(source, { category, sort })

  if (!collection) return <Navigate to="/collections/all" replace />

  return (
    <main className="mx-auto max-w-[1440px] px-4 pb-20 md:px-8 lg:px-12">
      <div className="pt-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: collection.title },
          ]}
        />
      </div>
      <CollectionHeader title={collection.title} description={collection.description} />
      <CollectionFilters
        categories={slug === 'all' ? categories : []}
        category={category}
        sort={sort}
        onChange={(next) => {
          setCategory(next.category)
          setSort(next.sort ?? 'featured')
        }}
      />
      <ProductGrid products={products} />
    </main>
  )
}
