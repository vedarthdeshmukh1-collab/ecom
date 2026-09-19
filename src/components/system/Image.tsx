import { useState, type ImgHTMLAttributes } from 'react'
import { useBrand } from '@/engine/BrandProvider'
import { aspectClass, cx, type ImageRatio } from '@/system/cx'

type Fit = 'cover' | 'contain' | 'none'

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  src: string
  alt: string
  ratio?: ImageRatio
  fit?: Fit
  position?: string
  fallbackLabel?: string
  frameClassName?: string
}

export function Image({
  src,
  alt,
  ratio = 'auto',
  fit = 'cover',
  position = 'center',
  fallbackLabel,
  className,
  frameClassName,
  sizes,
  srcSet,
  loading = 'lazy',
  ...rest
}: Props) {
  const brand = useBrand()
  const [failed, setFailed] = useState(false)
  const label = fallbackLabel ?? brand.logoText
  const fitClass = fit === 'contain' ? 'object-contain' : fit === 'none' ? 'object-none' : 'object-cover'
  const ratioCls = aspectClass(ratio)

  if (failed || !src) {
    return (
      <div
        className={cx(
          'flex items-center justify-center bg-[var(--color-surface)] text-[var(--color-muted)]',
          ratioCls,
          frameClassName,
          className,
        )}
        role="img"
        aria-label={alt}
      >
        <span className="type-eyebrow">{label}</span>
      </div>
    )
  }

  const img = (
    <img
      src={src}
      alt={alt}
      sizes={sizes}
      srcSet={srcSet}
      loading={loading}
      className={cx(fitClass, ratioCls ? 'h-full w-full' : '', className)}
      style={{ objectPosition: position, borderRadius: 'var(--radius-sm)' }}
      onError={() => setFailed(true)}
      {...rest}
    />
  )

  if (!ratioCls) return img

  return (
    <div className={cx('overflow-hidden bg-[var(--color-surface)]', ratioCls, frameClassName)}>
      {img}
    </div>
  )
}

/** @deprecated Use Image. Kept so existing imports keep compiling during the system extraction. */
export { Image as BrandImage }
