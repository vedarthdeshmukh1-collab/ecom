import { createContext, useContext, type ReactNode } from 'react'
import { useSearchParams } from 'react-router-dom'
import { resolveBrand } from '@/brands/registry'
import type { Brand } from '@/brands/types'

const BrandContext = createContext<Brand | null>(null)

export function BrandProvider({ children }: { children: ReactNode }) {
  const [params] = useSearchParams()
  const brand = resolveBrand(params.get('brand'))
  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>
}

export function useBrand(): Brand {
  const brand = useContext(BrandContext)
  if (!brand) throw new Error('useBrand must be used within BrandProvider')
  return brand
}
