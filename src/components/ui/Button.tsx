import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cx, typeClass } from '@/system/cx'

type Variant = 'solid' | 'ghost' | 'underline'
type Size = 'md' | 'sm'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
  href?: string
  children: ReactNode
}

const variants: Record<Variant, string> = {
  solid:
    'bg-[var(--color-ink)] text-[var(--color-inverse)] hover:opacity-85',
  ghost:
    'border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-inverse)]',
  underline: 'underline-offset-8 hover:underline px-0 py-0',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3',
  sm: 'px-4 py-2',
}

export function Button({
  variant = 'solid',
  size = 'md',
  href,
  className = '',
  children,
  onClick,
  ...rest
}: Props) {
  const cls = cx(
    'inline-flex items-center justify-center transition-[opacity,color,background-color] duration-[var(--duration-fast)] ease-[var(--ease-editorial)]',
    typeClass.button,
    variant !== 'underline' && sizes[size],
    variants[variant],
    className,
  )
  if (href) {
    return (
      <Link to={href} className={cls} onClick={onClick as never}>
        {children}
      </Link>
    )
  }
  return (
    <button className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
