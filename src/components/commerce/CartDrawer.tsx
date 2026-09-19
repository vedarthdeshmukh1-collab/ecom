import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import { useBrand } from '@/engine/BrandProvider'
import { useCart } from '@/engine/CartProvider'
import { formatMoney } from '@/engine/format'
import { useOverlay } from '@/engine/OverlayProvider'
import { BrandImage } from '@/media/BrandImage'

export function CartDrawer() {
  const brand = useBrand()
  const { overlay, close } = useOverlay()
  const { lines, subtotal, setQuantity, remove } = useCart()
  const open = overlay === 'cart'

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close cart"
            className="fixed inset-0 z-50 bg-[var(--color-ink)]/35"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          />
          <motion.aside
            className="fixed top-0 right-0 z-50 flex h-dvh w-full max-w-md flex-col bg-[var(--color-bg)] shadow-none"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-between border-b border-[var(--color-line)] px-5 py-4">
              <h2 className="text-[12px] tracking-[0.22em] uppercase">Your cabinet</h2>
              <button type="button" aria-label="Close cart" onClick={close}>
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6">
              {lines.length === 0 ? (
                <div className="py-16 text-center">
                  <p className="font-display text-3xl">Empty, for now.</p>
                  <p className="mt-3 text-sm text-[var(--color-muted)]">The weekday edit is waiting.</p>
                  <Button href="/collections/all" className="mt-8" onClick={close}>
                    Shop the cabinet
                  </Button>
                </div>
              ) : (
                <ul className="space-y-6">
                  {lines.map((line) => {
                    const product = brand.products.find((p) => p.id === line.productId)
                    const variant = product?.variants.find((v) => v.id === line.variantId)
                    if (!product || !variant) return null
                    const price = variant.price ?? product.price
                    const image = product.images[variant.imageIndex ?? 0] ?? product.images[0]
                    return (
                      <li key={line.key} className="flex gap-4">
                        <Link to={`/products/${product.slug}`} onClick={close} className="h-28 w-20 shrink-0 overflow-hidden bg-[var(--color-surface)]">
                          <BrandImage
                            src={image.src}
                            alt={image.alt}
                            fallbackLabel={brand.logoText}
                            className="h-full w-full object-cover"
                          />
                        </Link>
                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between gap-3">
                            <Link to={`/products/${product.slug}`} onClick={close} className="text-sm">
                              {product.name}
                            </Link>
                            <p className="text-sm tabular-nums">{formatMoney(price * line.quantity)}</p>
                          </div>
                          <p className="mt-1 text-xs text-[var(--color-muted)]">{variant.label}</p>
                          <div className="mt-3 flex items-center justify-between">
                            <QuantitySelector
                              value={line.quantity}
                              onChange={(q) => setQuantity(line.key, q)}
                            />
                            <button
                              type="button"
                              className="text-[11px] tracking-[0.14em] uppercase text-[var(--color-muted)] underline-offset-4 hover:underline"
                              onClick={() => remove(line.key)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-[var(--color-line)] px-5 py-5">
                <div className="mb-4 flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{formatMoney(subtotal)}</span>
                </div>
                <p className="mb-4 text-xs text-[var(--color-muted)]">
                  Shipping calculated at the atelier. This is a portfolio prototype — checkout is not live.
                </p>
                <Button className="w-full" disabled>
                  Checkout coming soon
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
