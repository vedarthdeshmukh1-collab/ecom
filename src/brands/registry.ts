import { aurelBrand } from './aurel/brand'
import { contrastBrand } from './fixtures/contrast'
import type { Brand } from './types'

/** Swap this id — and add a brand folder — to stand up a new portfolio storefront. */
export const activeBrandId = 'aurel'

export const brands: Record<string, Brand> = {
  aurel: aurelBrand,
  contrast: contrastBrand,
}

export function getActiveBrand(): Brand {
  return brands[activeBrandId] ?? aurelBrand
}

export function resolveBrand(id?: string | null): Brand {
  if (id && brands[id]) return brands[id]
  return getActiveBrand()
}
