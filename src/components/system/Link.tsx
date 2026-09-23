import { Link as RouterLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import { cx, typeClass } from '@/system/cx'

type Props = {
  href: string
  children: ReactNode
  className?: string
  external?: boolean
  underline?: boolean
  onClick?: () => void
}

export function TextLink({ href, children, className, external, underline = false, onClick }: Props) {
  const cls = cx(
    typeClass.body,
    'text-[var(--color-ink)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-accent)]',
    underline && 'underline underline-offset-4',
    className,
  )

  if (external || href.startsWith('http')) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer" onClick={onClick}>
        {children}
      </a>
    )
  }

  return (
    <RouterLink to={href} className={cls} onClick={onClick}>
      {children}
    </RouterLink>
  )
}
