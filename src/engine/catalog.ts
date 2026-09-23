import type { Brand, Product } from '@/brands/types'

export function getProduct(brand: Brand, slug: string): Product | undefined {
  return brand.products.find((p) => p.slug === slug || p.id === slug)
}

export function getCollection(brand: Brand, slug: string) {
  return brand.collections.find((c) => c.slug === slug)
}

export function productsForIds(brand: Brand, ids: string[]): Product[] {
  return ids
    .map((id) => brand.products.find((p) => p.id === id || p.slug === id))
    .filter((p): p is Product => Boolean(p))
}

export function productsForCollection(brand: Brand, slug: string): Product[] {
  const collection = getCollection(brand, slug)
  if (!collection) return brand.products
  return productsForIds(brand, collection.productIds)
}

export function relatedProducts(brand: Brand, product: Product, limit = 4): Product[] {
  const same = brand.products.filter((p) => p.id !== product.id && p.category === product.category)
  const rest = brand.products.filter((p) => p.id !== product.id && p.category !== product.category)
  return [...same, ...rest].slice(0, limit)
}

export function searchProducts(brand: Brand, query: string): Product[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return brand.products.filter((p) => {
    const hay = [p.name, p.shortDescription, p.description, p.category, ...p.tags].join(' ').toLowerCase()
    return hay.includes(q)
  })
}

export function uniqueCategories(brand: Brand): string[] {
  return [...new Set(brand.products.map((p) => p.category))]
}

export function uniqueTags(products: Product[]): string[] {
  return [...new Set(products.flatMap((p) => p.tags))]
}

export function filterProducts(
  products: Product[],
  opts: { category?: string; tag?: string; sort?: string },
): Product[] {
  let next = products
  if (opts.category && opts.category !== 'all') {
    next = next.filter((p) => p.category.toLowerCase() === opts.category!.toLowerCase())
  }
  if (opts.tag) {
    next = next.filter((p) => p.tags.includes(opts.tag!))
  }
  if (opts.sort === 'price-asc') next = [...next].sort((a, b) => a.price - b.price)
  if (opts.sort === 'price-desc') next = [...next].sort((a, b) => b.price - a.price)
  if (opts.sort === 'name') next = [...next].sort((a, b) => a.name.localeCompare(b.name))
  return next
}
