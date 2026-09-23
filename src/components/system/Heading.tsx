import type { ElementType, ReactNode } from 'react'
import { cx, typeClass, type TypeStyle } from '@/system/cx'

const defaultTag: Record<TypeStyle, ElementType> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  eyebrow: 'p',
  nav: 'span',
  button: 'span',
  price: 'span',
  product: 'h3',
  meta: 'p',
  logo: 'span',
}

export function Heading({
  variant,
  as,
  children,
  className,
}: {
  variant: TypeStyle
  as?: ElementType
  children: ReactNode
  className?: string
}) {
  const Tag = as ?? defaultTag[variant]
  return <Tag className={cx(typeClass[variant], className)}>{children}</Tag>
}
