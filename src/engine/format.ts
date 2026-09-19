export function formatMoney(value: number, currency = 'USD') {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value)
}

export function resolvePrice(
  base: number,
  compareAt: number | undefined,
  variantPrice?: number,
  variantCompare?: number,
) {
  const price = variantPrice ?? base
  const compare = variantCompare ?? (variantPrice ? undefined : compareAt)
  return { price, compareAt: compare }
}
