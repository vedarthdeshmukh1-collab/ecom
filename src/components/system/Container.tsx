import type { CSSProperties, ReactNode } from 'react'
import { cx } from '@/system/cx'

type Width = 'site' | 'narrow' | 'full'

export function Container({
  children,
  width = 'site',
  className,
  style,
}: {
  children: ReactNode
  width?: Width
  className?: string
  style?: CSSProperties
}) {
  const widthClass = width === 'narrow' ? 'container-narrow' : width === 'full' ? 'w-full' : 'container-site'
  return (
    <div className={cx(widthClass, className)} style={style}>
      {children}
    </div>
  )
}
