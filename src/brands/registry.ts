import { aurelBrand } from './aurel/brand'
import type { Brand } from './types'

/** Swap this id — and add a brand folder — to stand up a new portfolio storefront. */
export const activeBrandId = 'aurel'

export const brands: Record<string, Brand> = {
  aurel: aurelBrand,
}

export function getActiveBrand(): Brand {
  return brands[activeBrandId] ?? aurelBrand
}
