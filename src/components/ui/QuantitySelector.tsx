import { Minus, Plus } from 'lucide-react'

type Props = {
  value: number
  onChange: (next: number) => void
  min?: number
  max?: number
}

export function QuantitySelector({ value, onChange, min = 1, max = 12 }: Props) {
  return (
    <div className="inline-flex items-center border border-[var(--color-line)]">
      <button
        type="button"
        aria-label="Decrease quantity"
        className="flex h-11 w-11 items-center justify-center text-[var(--color-ink)] disabled:opacity-30"
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus size={14} strokeWidth={1.5} />
      </button>
      <span className="min-w-8 text-center text-sm tabular-nums">{value}</span>
      <button
        type="button"
        aria-label="Increase quantity"
        className="flex h-11 w-11 items-center justify-center text-[var(--color-ink)] disabled:opacity-30"
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus size={14} strokeWidth={1.5} />
      </button>
    </div>
  )
}
