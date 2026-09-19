import { createContext, useContext, type ReactNode } from 'react'
import { getActiveBrand } from '@/brands/registry'
import type { Brand } from '@/brands/types'

const BrandContext = createContext<Brand | null>(null)

export function BrandProvider({ children }: { children: ReactNode }) {
  const brand = getActiveBrand()
  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>
}

export function useBrand(): Brand {
  const brand = useContext(BrandContext)
  if (!brand) throw new Error('useBrand must be used within BrandProvider')
  return brand
}
