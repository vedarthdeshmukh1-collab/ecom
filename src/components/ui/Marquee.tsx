type Props = {
  items: string[]
}

export function Marquee({ items }: { items: string[] } | Props) {
  const row = [...items, ...items]
  return (
    <div className="overflow-hidden border-y border-[var(--color-line)] py-3">
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-10 px-6">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-[11px] font-medium tracking-[0.28em] uppercase text-[var(--color-muted)]"
          >
            {item}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
