import { useBrand } from '@/engine/BrandProvider'
import { typeClass } from '@/system/cx'

export function AnnouncementBar() {
  const brand = useBrand()
  if (!brand.announcement) return null
  return (
    <div className="border-b border-[var(--color-line)] px-4 py-2 text-center">
      <span className={`${typeClass.eyebrow} block px-1 leading-relaxed sm:overflow-hidden sm:text-ellipsis sm:whitespace-nowrap sm:leading-[var(--leading-ui)]`}>
        {brand.announcement}
      </span>
    </div>
  )
}
