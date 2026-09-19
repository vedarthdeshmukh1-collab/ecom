import type { Brand } from '@/brands/types'

export function applyTheme(brand: Brand) {
  const root = document.documentElement
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
  root.style.setProperty('--radius-sm', brand.shape.radiusSm)
  root.style.setProperty('--radius-md', brand.shape.radiusMd)
  root.style.setProperty('--radius-full', brand.shape.radiusFull)
  root.style.setProperty('--border-width', brand.shape.borderWidth)
  root.style.setProperty('--shadow', brand.shape.shadow)
  document.title = `${brand.name} — ${brand.tagline}`

  const existing = document.getElementById('brand-fonts')
  if (existing) existing.remove()
  const link = document.createElement('link')
  link.id = 'brand-fonts'
  link.rel = 'stylesheet'
  link.href = brand.typography.googleFontsUrl
  document.head.appendChild(link)
}
