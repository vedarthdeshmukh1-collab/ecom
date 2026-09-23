import type { ImageRatio } from '@/brands/types'
import type { CSSProperties } from 'react'

export type { ImageRatio }

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export const ratioCss: Record<ImageRatio, string> = {
  square: '1 / 1',
  landscape: '4 / 3',
  wide: '16 / 10',
  video: '16 / 9',
  tall: '4 / 5',
  auto: 'auto',
  portrait: '3 / 4',
}

export function aspectClass(ratio: ImageRatio = 'portrait'): string {
  switch (ratio) {
    case 'square':
      return 'aspect-square'
    case 'landscape':
      return 'aspect-[4/3]'
    case 'wide':
      return 'aspect-[16/10]'
    case 'video':
      return 'aspect-video'
    case 'tall':
      return 'aspect-[4/5]'
    case 'auto':
      return ''
    case 'portrait':
    default:
      return 'aspect-[3/4]'
  }
}

export type TypeStyle =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'eyebrow'
  | 'nav'
  | 'button'
  | 'price'
  | 'product'
  | 'meta'
  | 'logo'

export const typeClass: Record<TypeStyle, string> = {
  display: 'type-display',
  h1: 'type-h1',
  h2: 'type-h2',
  h3: 'type-h3',
  'body-lg': 'type-body-lg',
  body: 'type-body',
  'body-sm': 'type-body-sm',
  eyebrow: 'type-eyebrow',
  nav: 'type-nav',
  button: 'type-button',
  price: 'type-price',
  product: 'type-product',
  meta: 'type-meta',
  logo: 'type-logo',
}

export function tokenStyle(vars: Record<string, string | undefined>): CSSProperties {
  const style: Record<string, string> = {}
  for (const [key, value] of Object.entries(vars)) {
    if (value) style[key] = value
  }
  return style as CSSProperties
}
