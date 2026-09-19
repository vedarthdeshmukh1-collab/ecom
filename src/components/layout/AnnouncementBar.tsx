import { useBrand } from '@/engine/BrandProvider'
import { typeClass } from '@/system/cx'

export function AnnouncementBar() {
  const brand = useBrand()
  if (!brand.announcement) return null
  return (
    <div className="bg-[var(--color-ink)] px-4 py-2 text-center text-[var(--color-inverse)]">
      <span className={`${typeClass.eyebrow} block overflow-hidden text-ellipsis whitespace-nowrap text-[var(--color-inverse)]`}>
        {brand.announcement}
      </span>
    </div>
  )
}
