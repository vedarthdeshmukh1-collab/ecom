"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string | null | undefined;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** When true, broken/missing images show controlled placeholder */
  showUnavailable?: boolean;
};

/**
 * Controlled product image renderer.
 * Never falls back to another product's image.
 * Shows "Image unavailable" when src is missing or fails to load.
 */
export function ProductImage({
  src,
  alt,
  fill,
  width,
  height,
  className = "",
  priority = false,
  sizes,
  showUnavailable = true,
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const unavailable = !src || failed;

  if (unavailable) {
    if (!showUnavailable) return null;
    return (
      <div
        className={`flex items-center justify-center bg-mist text-center text-xs font-medium uppercase tracking-wider text-muted ${className}`}
        style={
          fill
            ? { position: "absolute", inset: 0 }
            : { width: width ?? "100%", height: height ?? 240 }
        }
        role="img"
        aria-label={`${alt} — image unavailable`}
      >
        Image unavailable
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className={className}
        sizes={sizes}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 800}
      height={height ?? 800}
      priority={priority}
      className={className}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  );
}
