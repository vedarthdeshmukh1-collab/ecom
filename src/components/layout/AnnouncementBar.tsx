import { useBrand } from '@/engine/BrandProvider'
import { typeClass } from '@/system/cx'

export function AnnouncementBar() {
  const brand = useBrand()
  if (!brand.announcement) return null
  return (
    <div className="border-b border-[var(--color-line)] px-4 py-2 text-center">
      <span className={`${typeClass.eyebrow} block overflow-hidden text-ellipsis whitespace-nowrap`}>
        {brand.announcement}
      </span>
    </div>
  )
}
