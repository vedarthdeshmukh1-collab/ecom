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
  solid: 'bg-[var(--color-ink)] text-[var(--color-inverse)] hover:opacity-85',
  ghost:
    'border border-[var(--color-ink)] text-[var(--color-ink)] hover:bg-[var(--color-ink)] hover:text-[var(--color-inverse)]',
  underline: 'underline-offset-8 hover:underline px-0 py-0 shadow-none',
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
    variant !== 'underline' && 'px-[var(--btn-px)] py-[var(--btn-py)]',
    size === 'sm' && variant !== 'underline' && '!px-4 !py-2',
    variants[variant],
    className,
  )
  const style = {
    borderRadius: variant === 'underline' ? 0 : 'var(--radius-button)',
    boxShadow: variant === 'underline' ? 'none' : 'var(--shadow-button)',
  }
  if (href) {
    return (
      <Link to={href} className={cls} style={style} onClick={onClick as never}>
        {children}
      </Link>
    )
  }
  return (
    <button className={cls} style={style} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
