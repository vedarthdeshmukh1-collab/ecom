import { useEffect, useMemo, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { AddToCartButton } from '@/components/commerce/AddToCartButton'
import { ProductGallery } from '@/components/commerce/ProductGallery'
import { ProductGrid } from '@/components/commerce/ProductGrid'
import { ProductInformation } from '@/components/commerce/ProductInformation'
import { ProductVariantSelector } from '@/components/commerce/ProductVariantSelector'
import { ReviewSection } from '@/components/commerce/ReviewSection'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import { getProduct, relatedProducts } from '@/engine/catalog'
import { useBrand } from '@/engine/BrandProvider'

export function ProductPage() {
  const { slug = '' } = useParams()
  const brand = useBrand()
  const product = getProduct(brand, slug)
  const [variantId, setVariantId] = useState(product?.variants[0]?.id ?? '')
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setVariantId(product?.variants[0]?.id ?? '')
    setQty(1)
  }, [product?.id])

  const variant = useMemo(
    () => product?.variants.find((v) => v.id === variantId) ?? product?.variants[0],
    [product, variantId],
  )

  if (!product || !variant) return <Navigate to="/collections/all" replace />

  const related = relatedProducts(brand, product, 4)
  const reviews = brand.socialProof.filter((r) => !r.productId || r.productId === product.id)
  const collection = brand.collections.find((c) => c.productIds.includes(product.id) && c.slug !== 'all')

  return (
    <main>
      <div className="mx-auto max-w-[1440px] px-4 pt-6 md:px-8 lg:px-12">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: collection?.title ?? 'Cabinet', href: `/collections/${collection?.slug ?? 'all'}` },
            { label: product.name },
          ]}
        />
      </div>

      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-8 md:grid-cols-2 md:gap-12 md:px-8 md:py-12 lg:gap-20 lg:px-12">
        <ProductGallery product={product} />
        <div>
          <ProductInformation product={product} variantId={variant.id} />
          <div className="mt-8">
            <ProductVariantSelector
              variants={product.variants}
              value={variant.id}
              onChange={(id) => {
                setVariantId(id)
                setQty(1)
              }}
            />
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <QuantitySelector value={qty} onChange={setQty} />
            <div className="flex-1">
              <AddToCartButton product={product} variant={variant} quantity={qty} />
            </div>
          </div>
          <p className="mt-3 text-xs text-[var(--color-muted)]">
            Complimentary linen pouch over $120. Carbon-neutral shipping.
          </p>

          <div className="mt-12 space-y-8 border-t border-[var(--color-line)] pt-8">
            <details open className="group">
              <summary className="cursor-pointer text-[12px] tracking-[0.16em] uppercase">Details</summary>
              <ul className="mt-4 list-disc space-y-2 pl-4 text-sm text-[var(--color-muted)]">
                {product.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </details>
            {product.howToUse && (
              <details className="group border-t border-[var(--color-line)] pt-8">
                <summary className="cursor-pointer text-[12px] tracking-[0.16em] uppercase">How to use</summary>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{product.howToUse}</p>
              </details>
            )}
            {product.ingredients && (
              <details className="group border-t border-[var(--color-line)] pt-8">
                <summary className="cursor-pointer text-[12px] tracking-[0.16em] uppercase">Ingredients</summary>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">{product.ingredients}</p>
              </details>
            )}
          </div>
        </div>
      </div>

      {reviews.length > 0 && <ReviewSection heading="From the cabinet" reviews={reviews} />}

      <section className="mx-auto max-w-[1440px] px-4 pb-20 md:px-8 lg:px-12">
        <h2 className="font-display mb-8 text-3xl tracking-tight">Also in rotation</h2>
        <ProductGrid products={related} />
      </section>
    </main>
  )
}
