import type { ElementType, ReactNode } from 'react'
import { cx } from '@/system/cx'

type Tone = 'default' | 'surface' | 'ink'

export function Section({
  children,
  className,
  as: Tag = 'section',
  y = true,
  tone = 'default',
}: {
  children: ReactNode
  className?: string
  as?: ElementType
  y?: boolean
  tone?: Tone
}) {
  const tones: Record<Tone, string> = {
    default: '',
    surface: 'bg-[var(--color-surface)]/40',
    ink: 'bg-[var(--color-ink)] text-[var(--color-inverse)]',
  }
  return <Tag className={cx(y && 'section-y', tones[tone], className)}>{children}</Tag>
}
