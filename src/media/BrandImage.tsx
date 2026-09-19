import { useState, type ImgHTMLAttributes } from 'react'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string
  alt: string
  fallbackLabel?: string
}

export function BrandImage({ src, alt, fallbackLabel = 'AUREL', className = '', ...rest }: Props) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-[var(--color-surface)] text-[var(--color-muted)] ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-display text-sm tracking-[0.35em] uppercase">{fallbackLabel}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      {...rest}
    />
  )
}
