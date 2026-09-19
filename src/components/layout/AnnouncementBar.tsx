import { useBrand } from '@/engine/BrandProvider'

export function AnnouncementBar() {
  const brand = useBrand()
  return (
    <div className="bg-[var(--color-ink)] px-4 py-2 text-center text-[10px] tracking-[0.18em] uppercase text-[var(--color-inverse)] md:text-[11px] md:tracking-[0.22em]">
      <span className="block overflow-hidden text-ellipsis whitespace-nowrap">{brand.announcement}</span>
    </div>
  )
}
