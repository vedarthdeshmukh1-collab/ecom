import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Product, ProductVariant } from '@/brands/types'
import { useBrand } from './BrandProvider'
import { useOverlay } from './OverlayProvider'

export type CartLine = {
  key: string
  productId: string
  variantId: string
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  count: number
  subtotal: number
  add: (product: Product, variant: ProductVariant, quantity?: number) => void
  setQuantity: (key: string, quantity: number) => void
  remove: (key: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)

function storageKey(brandId: string) {
  return `ecom-engine:cart:${brandId}`
}

export function CartProvider({ children }: { children: ReactNode }) {
  const brand = useBrand()
  const { open } = useOverlay()
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(storageKey(brand.id))
      return raw ? (JSON.parse(raw) as CartLine[]) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(storageKey(brand.id), JSON.stringify(lines))
  }, [brand.id, lines])

  const add = useCallback(
    (product: Product, variant: ProductVariant, quantity = 1) => {
      const key = `${product.id}:${variant.id}`
      setLines((prev) => {
        const existing = prev.find((l) => l.key === key)
        if (existing) {
          return prev.map((l) => (l.key === key ? { ...l, quantity: l.quantity + quantity } : l))
        }
        return [...prev, { key, productId: product.id, variantId: variant.id, quantity }]
      })
      open('cart')
    },
    [open],
  )

  const setQuantity = useCallback((key: string, quantity: number) => {
    setLines((prev) =>
      quantity < 1 ? prev.filter((l) => l.key !== key) : prev.map((l) => (l.key === key ? { ...l, quantity } : l)),
    )
  }, [])

  const remove = useCallback((key: string) => {
    setLines((prev) => prev.filter((l) => l.key !== key))
  }, [])

  const { count, subtotal } = useMemo(() => {
    let count = 0
    let subtotal = 0
    for (const line of lines) {
      const product = brand.products.find((p) => p.id === line.productId)
      const variant = product?.variants.find((v) => v.id === line.variantId)
      const price = variant?.price ?? product?.price ?? 0
      count += line.quantity
      subtotal += price * line.quantity
    }
    return { count, subtotal }
  }, [brand.products, lines])

  const value = useMemo(
    () => ({ lines, count, subtotal, add, setQuantity, remove }),
    [lines, count, subtotal, add, setQuantity, remove],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
