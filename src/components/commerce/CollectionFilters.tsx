type Props = {
  categories: string[]
  tags: string[]
  category?: string
  tag?: string
  sort?: string
  onChange: (next: { category?: string; tag?: string; sort?: string }) => void
}

export function CollectionFilters({ categories, tags, category, tag, sort, onChange }: Props) {
  return (
    <div className="mb-10 flex flex-col gap-4 border-y border-[var(--color-line)] py-4 md:flex-row md:items-center md:justify-between">
      <div className="no-scrollbar flex gap-2 overflow-x-auto">
        <FilterChip
          active={!category || category === 'all'}
          onClick={() => onChange({ category: 'all', tag, sort })}
        >
          All
        </FilterChip>
        {categories.map((c) => (
          <FilterChip
            key={c}
            active={category === c}
            onClick={() => onChange({ category: c, tag, sort })}
          >
            {c}
          </FilterChip>
        ))}
        {tags.slice(0, 6).map((t) => (
          <FilterChip
            key={t}
            active={tag === t}
            onClick={() => onChange({ category, tag: tag === t ? undefined : t, sort })}
          >
            {t}
          </FilterChip>
        ))}
      </div>
      <label className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-[var(--color-muted)]">
        Sort
        <select
          className="border-0 bg-transparent text-[12px] tracking-normal text-[var(--color-ink)] outline-none"
          value={sort ?? 'featured'}
          onChange={(e) => onChange({ category, tag, sort: e.target.value })}
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price · low</option>
          <option value="price-desc">Price · high</option>
          <option value="name">Name</option>
        </select>
      </label>
    </div>
  )
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 px-3 py-1.5 text-[11px] tracking-[0.14em] uppercase ${
        active ? 'bg-[var(--color-ink)] text-[var(--color-inverse)]' : 'text-[var(--color-muted)]'
      }`}
    >
      {children}
    </button>
  )
}
