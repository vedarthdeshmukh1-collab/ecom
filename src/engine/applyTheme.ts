import type { Brand, RadiusSlot } from '@/brands/types'
import { ratioCss } from '@/system/cx'

const densityScale: Record<Brand['density'], string> = {
  compact: '0.82',
  regular: '1',
  relaxed: '1.2',
}

const radiusVar: Record<RadiusSlot, string> = {
  sm: 'var(--radius-sm)',
  md: 'var(--radius-md)',
  lg: 'var(--radius-lg)',
  full: 'var(--radius-full)',
}

export function applyTheme(brand: Brand) {
  const root = document.documentElement
  root.dataset.brand = brand.id

  root.style.setProperty('--color-bg', brand.colors.background)
  root.style.setProperty('--color-surface', brand.colors.surface)
  root.style.setProperty('--color-ink', brand.colors.ink)
  root.style.setProperty('--color-muted', brand.colors.muted)
  root.style.setProperty('--color-accent', brand.colors.accent)
  root.style.setProperty('--color-line', brand.colors.line)
  root.style.setProperty('--color-inverse', brand.colors.inverse)

  root.style.setProperty('--font-display', brand.typography.display)
  root.style.setProperty('--font-body', brand.typography.body)
  root.style.setProperty('--font-ui', brand.typography.ui)
  root.style.setProperty('--tracking-display', brand.typography.tracking.display)
  root.style.setProperty('--tracking-heading', brand.typography.tracking.heading)
  root.style.setProperty('--tracking-body', brand.typography.tracking.body)
  root.style.setProperty('--tracking-eyebrow', brand.typography.tracking.eyebrow)
  root.style.setProperty('--tracking-nav', brand.typography.tracking.nav)
  root.style.setProperty('--tracking-button', brand.typography.tracking.button)
  root.style.setProperty('--tracking-logo', brand.typography.tracking.logo)
  root.style.setProperty('--tracking-meta', brand.typography.tracking.meta)
  root.style.setProperty('--transform-eyebrow', brand.typography.transform.eyebrow)
  root.style.setProperty('--transform-nav', brand.typography.transform.nav)
  root.style.setProperty('--transform-button', brand.typography.transform.button)
  root.style.setProperty('--transform-logo', brand.typography.transform.logo)

  root.style.setProperty('--radius-sm', brand.shape.radiusSm)
  root.style.setProperty('--radius-md', brand.shape.radiusMd)
  root.style.setProperty('--radius-lg', brand.shape.radiusLg)
  root.style.setProperty('--radius-full', brand.shape.radiusFull)
  root.style.setProperty('--border-width', brand.shape.borderWidth)
  root.style.setProperty('--shadow', brand.shape.shadow)
  root.style.setProperty('--shadow-raised', brand.shape.shadowRaised)
  root.style.setProperty('--shadow-card', brand.productCard.elevated ? brand.shape.shadowRaised : 'none')
  root.style.setProperty('--shadow-header', brand.header.elevated ? brand.shape.shadow : 'none')
  root.style.setProperty('--shadow-button', brand.buttons.shadow ? brand.shape.shadow : 'none')
  root.style.setProperty('--radius-button', radiusVar[brand.buttons.radius])
  root.style.setProperty('--radius-card', 'var(--radius-md)')
  root.style.setProperty('--radius-media', 'var(--radius-sm)')
  root.style.setProperty('--btn-px', brand.buttons.px)
  root.style.setProperty('--btn-py', brand.buttons.py)

  root.style.setProperty('--space-scale', densityScale[brand.density])
  root.style.setProperty('--aspect-product', ratioCss[brand.media.productRatio])
  root.style.setProperty('--aspect-editorial', ratioCss[brand.media.editorialRatio])
  root.style.setProperty('--aspect-story', ratioCss[brand.media.storyRatio])
  root.style.setProperty('--product-hover-scale', String(brand.productCard.hoverScale))

  document.title = `${brand.name} — ${brand.tagline}`

  const existing = document.getElementById('brand-fonts')
  if (existing) existing.remove()
  const link = document.createElement('link')
  link.id = 'brand-fonts'
  link.rel = 'stylesheet'
  link.href = brand.typography.googleFontsUrl
  document.head.appendChild(link)
}
