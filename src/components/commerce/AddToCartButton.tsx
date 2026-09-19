import type { Product, ProductVariant } from '@/brands/types'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/engine/CartProvider'

export function AddToCartButton({
  product,
  variant,
  quantity,
}: {
  product: Product
  variant: ProductVariant
  quantity: number
}) {
  const { add } = useCart()
  const available = variant.inStock

  return (
    <Button
      className="w-full"
      disabled={!available}
      onClick={() => add(product, variant, quantity)}
    >
      {available ? 'Add to cabinet' : 'Notify me'}
    </Button>
  )
}
