import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'solid' | 'ghost' | 'underline'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: string
  children: ReactNode
}

const styles: Record<Variant, string> = {
  solid:
    'inline-flex items-center justify-center bg-[var(--color-ink)] px-6 py-3 text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-inverse)] transition-opacity hover:opacity-85',
  ghost:
    'inline-flex items-center justify-center border border-[var(--color-ink)] px-6 py-3 text-[11px] font-medium tracking-[0.18em] uppercase text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)] hover:text-[var(--color-inverse)]',
  underline:
    'inline-flex items-center gap-2 text-[12px] font-medium tracking-[0.16em] uppercase text-[var(--color-ink)] underline-offset-8 hover:underline',
}

export function Button({ variant = 'solid', href, className = '', children, onClick, ...rest }: Props) {
  const cls = `${styles[variant]} ${className}`
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
