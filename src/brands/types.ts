export type NavLink = {
  label: string
  href: string
  external?: boolean
}

export type BrandColors = {
  background: string
  surface: string
  ink: string
  muted: string
  accent: string
  line: string
  inverse: string
}

export type BrandTypography = {
  display: string
  body: string
  ui: string
  googleFontsUrl: string
}

/** Optional brand overrides for the shared token sheet. Unset values keep CSS defaults. */
export type BrandShape = {
  radiusSm: string
  radiusMd: string
  radiusFull: string
  borderWidth: string
  shadow: string
}

export type HeaderChrome = {
  logoPosition: 'center' | 'left'
  splitNav: boolean
  showSearch: boolean
  showAccount: boolean
  showCart: boolean
  accountHref: string
  desktopNavFrom: 'lg' | 'xl'
}

export type SocialLink = {
  label: string
  href: string
}

export type FooterContent = {
  blurb: string
  columns: { title: string; links: NavLink[] }[]
  newsletter?: {
    heading: string
    body: string
    placeholder: string
    ctaLabel: string
  }
  social: SocialLink[]
  legal: NavLink[]
  payments: string[]
  copyright: string
}

export type BrandCopy = {
  addToCart: string
  quickAdd: string
  account: string
  search: string
  cart: string
  menu: string
}

export type ProductImage = {
  src: string
  alt: string
}

export type ProductVariant = {
  id: string
  label: string
  sku: string
  price?: number
  compareAtPrice?: number
  imageIndex?: number
  inStock: boolean
  /** Hex swatch for color/material indicators. Omit for size-only variants. */
  swatch?: string
}

export type Product = {
  id: string
  slug: string
  name: string
  shortDescription: string
  description: string
  price: number
  compareAtPrice?: number
  category: string
  images: ProductImage[]
  variants: ProductVariant[]
  rating: number
  reviewCount: number
  tags: string[]
  details: string[]
  ingredients?: string
  howToUse?: string
  size?: string
  badge?: string
}

export type Collection = {
  slug: string
  title: string
  description: string
  image: string
  productIds: string[]
}

export type HeroSection = {
  type: 'hero'
  eyebrow?: string
  heading: string
  subheading: string
  ctaLabel: string
  ctaHref: string
  image: string
  imageAlt: string
  layout?: 'overlay' | 'split'
}

export type MarqueeSection = {
  type: 'marquee'
  items: string[]
}

export type FeaturedSection = {
  type: 'featured'
  eyebrow?: string
  heading: string
  subheading?: string
  productIds: string[]
  ctaLabel?: string
  ctaHref?: string
}

export type EditorialSectionConfig = {
  type: 'editorial'
  eyebrow?: string
  heading: string
  body: string
  image: string
  imageAlt: string
  ctaLabel?: string
  ctaHref?: string
}

export type ImageTextSectionConfig = {
  type: 'imageText'
  eyebrow?: string
  heading: string
  body: string
  image: string
  imageAlt: string
  reverse?: boolean
  ctaLabel?: string
  ctaHref?: string
}

export type TrustItem = {
  title: string
  body: string
}

export type TrustSectionConfig = {
  type: 'trust'
  items: TrustItem[]
}

export type ReviewsSectionConfig = {
  type: 'reviews'
  heading: string
}

export type NewsletterSectionConfig = {
  type: 'newsletter'
  heading: string
  body: string
  placeholder: string
  ctaLabel: string
}

export type HomepageSection =
  | HeroSection
  | MarqueeSection
  | FeaturedSection
  | EditorialSectionConfig
  | ImageTextSectionConfig
  | TrustSectionConfig
  | ReviewsSectionConfig
  | NewsletterSectionConfig

export type Review = {
  id: string
  productId?: string
  author: string
  location?: string
  rating: number
  title: string
  body: string
  date: string
}

export type BrandStory = {
  eyebrow: string
  heading: string
  paragraphs: string[]
  image: string
  imageAlt: string
  values: { title: string; body: string }[]
}

export type Brand = {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  typography: BrandTypography
  colors: BrandColors
  shape: BrandShape
  copy: BrandCopy
  header: HeaderChrome
  logoText: string
  announcement: string
  navigation: NavLink[]
  secondaryNav: NavLink[]
  photography: Record<string, string>
  products: Product[]
  collections: Collection[]
  homepage: { sections: HomepageSection[] }
  socialProof: Review[]
  brandStory: BrandStory
  footer: FooterContent
  searchPlaceholder: string
}
