import { HomepageSections } from '@/components/editorial/HomepageSections'
import { useBrand } from '@/engine/BrandProvider'

export function HomePage() {
  const brand = useBrand()
  return (
    <main>
      <HomepageSections sections={brand.homepage.sections} />
    </main>
  )
}
