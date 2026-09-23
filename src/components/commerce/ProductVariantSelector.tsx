import type { ProductVariant } from '@/brands/types'

export function ProductVariantSelector({
  variants,
  value,
  onChange,
}: {
  variants: ProductVariant[]
  value: string
  onChange: (id: string) => void
}) {
  if (variants.length <= 1) {
    return (
      <p className="text-sm text-[var(--color-muted)]">
        Size · {variants[0]?.label}
        {!variants[0]?.inStock && ' — waitlist'}
      </p>
    )
  }

  return (
    <fieldset>
      <legend className="mb-3 text-[11px] tracking-[0.18em] uppercase text-[var(--color-muted)]">Size</legend>
      <div className="flex flex-wrap gap-2">
        {variants.map((variant) => {
          const selected = variant.id === value
          return (
            <button
              type="button"
              key={variant.id}
              disabled={!variant.inStock}
              onClick={() => onChange(variant.id)}
              className={`min-w-24 border px-4 py-2.5 text-[12px] tracking-[0.08em] ${
                selected
                  ? 'border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-inverse)]'
                  : 'border-[var(--color-line)] text-[var(--color-ink)]'
              } disabled:opacity-40`}
            >
              {variant.label}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
