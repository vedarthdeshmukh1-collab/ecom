import type { Brand } from '../types'
import { aurelCollections } from './collections'
import { aurelProducts } from './products'
import { aurelReviews } from './reviews'

export const aurelBrand: Brand = {
  id: 'aurel',
  name: 'AUREL',
  tagline: 'Skin, kept quietly.',
  description:
    'AUREL is a modern skincare house in the quiet-luxury tradition: few formulas, considered textures, and photography that lets the product speak at conversation volume.',
  category: 'Skincare',
  typography: {
    display: '"Cormorant Garamond", "Times New Roman", serif',
    body: '"Manrope", "Helvetica Neue", sans-serif',
    ui: '"Manrope", "Helvetica Neue", sans-serif',
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap',
    tracking: {
      display: '-0.018em',
      heading: '-0.015em',
      body: '0',
      eyebrow: '0.22em',
      nav: '0.18em',
      button: '0.18em',
      logo: '0.42em',
      meta: '0.14em',
    },
    transform: {
      eyebrow: 'uppercase',
      nav: 'uppercase',
      button: 'uppercase',
      logo: 'uppercase',
    },
  },
  colors: {
    background: '#F3EEE6',
    surface: '#E8E0D4',
    ink: '#2A241C',
    muted: '#74685C',
    accent: '#8A5A3C',
    line: '#D4CBBE',
    inverse: '#F7F3EC',
  },
  shape: {
    radiusSm: '0px',
    radiusMd: '0px',
    radiusLg: '0px',
    radiusFull: '999px',
    borderWidth: '1px',
    shadow: 'none',
    shadowRaised: 'none',
  },
  density: 'regular',
  buttons: {
    radius: 'sm',
    shadow: false,
    px: '1.5rem',
    py: '0.75rem',
  },
  media: {
    productRatio: 'portrait',
    editorialRatio: 'wide',
    storyRatio: 'tall',
  },
  productCard: {
    align: 'left',
    ratio: 'portrait',
    hoverScale: 1.03,
    hoverSwap: true,
    showRating: false,
    showQuickAdd: false,
    showSwatches: true,
    showCategory: true,
    titlePrice: 'row',
    elevated: false,
  },
  copy: {
    addToCart: 'Add to cabinet',
    quickAdd: 'Quick add',
    account: 'Account',
    search: 'Search',
    cart: 'Cart',
    menu: 'Menu',
  },
  header: {
    logoPosition: 'center',
    splitNav: true,
    showSearch: true,
    showAccount: true,
    showCart: true,
    accountHref: '/about',
    desktopNavFrom: 'xl',
    sticky: true,
    blur: true,
    bordered: true,
    elevated: false,
  },
  logoText: 'AUREL',
  announcement: 'Complimentary linen pouch on orders over $120  ·  Carbon-neutral shipping',
  navigation: [
    { label: 'The Cabinet', href: '/collections/all' },
    { label: 'Treatments', href: '/collections/treatments' },
    { label: 'Moisturize', href: '/collections/moisturize' },
    { label: 'Rituals', href: '/collections/rituals' },
    { label: 'The House', href: '/about' },
  ],
  secondaryNav: [
    { label: 'Shipping', href: '/about' },
    { label: 'Refills', href: '/collections/moisturize' },
  ],
  photography: {
    hero: '/brands/aurel/hero.webp',
    editorial01: '/brands/aurel/editorial-01.webp',
    editorial02: '/brands/aurel/editorial-02.webp',
    story: '/brands/aurel/story.webp',
    about: '/brands/aurel/about.webp',
    marquee: '/brands/aurel/editorial-01.webp',
  },
  products: aurelProducts,
  collections: aurelCollections,
  homepage: {
    sections: [
      {
        type: 'hero',
        eyebrow: 'Autumn cabinet',
        heading: 'Keep the barrier, lose the noise.',
        subheading:
          'Five considered formulas for skin that prefers milk to foam, silk to shine, and a ritual that can be finished before the kettle clicks.',
        ctaLabel: 'Shop the cabinet',
        ctaHref: '/collections/all',
        image: '/brands/aurel/hero.webp',
        imageAlt: 'AUREL still life: cream jar and serum in warm window light',
        layout: 'overlay',
      },
      {
        type: 'marquee',
        items: [
          'Fragrance-free',
          'Refillable cream',
          'Mineral SPF',
          'Bakuchiol nights',
          'Made in small lots',
          'Glass, then refill',
        ],
      },
      {
        type: 'featured',
        eyebrow: 'In rotation',
        heading: 'The weekday edit',
        subheading: 'What we actually reach for between Monday and the first evening out.',
        productIds: [
          'lumen-cleansing-milk',
          'aureole-vitamin-c',
          'cloud-barrier-cream',
          'mineral-silk-spf',
        ],
        ctaLabel: 'View all formulas',
        ctaHref: '/collections/all',
      },
      {
        type: 'imageText',
        eyebrow: 'The ritual',
        heading: 'Layering is a tempo, not a pile.',
        body: 'Essence while the face is still damp. Serum in three drops, not five. Cream pressed, not rubbed. SPF as a veil, not a mask. AUREL is built so each texture makes room for the next — no pilling, no fifteen-minute wait, no sermon.',
        image: '/brands/aurel/editorial-01.webp',
        imageAlt: 'Hands pressing essence into skin beside a linen towel',
        ctaLabel: 'Read the house notes',
        ctaHref: '/about',
      },
      {
        type: 'editorial',
        eyebrow: 'From the studio',
        heading: 'Why we left retinol in the cabinet next door.',
        body: 'Night Restore uses bakuchiol because we wanted overnight repair that did not require a calendar of rest nights. It is slower. It is also how skin that already works hard might prefer to be asked.',
        image: '/brands/aurel/editorial-02.webp',
        imageAlt: 'Night Restore bottle in low evening light',
        ctaLabel: 'Night Restore',
        ctaHref: '/products/night-restore-concentrate',
      },
      {
        type: 'trust',
        items: [
          {
            title: 'Formulas, not a catalog',
            body: 'Eight products. If it does not earn a place in a real cabinet, it does not ship.',
          },
          {
            title: 'Glass, then refill',
            body: 'Cloud Barrier returns as an aluminum pod. Keep the jar. Skip the landfill theatre.',
          },
          {
            title: 'Ships with care',
            body: 'Carbon-neutral parcel, paper tape, no plastic peanuts. EU & US from one atelier lot.',
          },
          {
            title: 'Always fragrance-free',
            body: 'No essential oils hiding in the INCI. If you smell anything, it is the oil itself.',
          },
        ],
      },
      {
        type: 'reviews',
        heading: 'Worn in, not launched.',
      },
      {
        type: 'newsletter',
        heading: 'Notes from the house',
        body: 'Restocks, ritual cards, and the occasional essay. Four letters a year. No discount codes shouting.',
        placeholder: 'Email address',
        ctaLabel: 'Subscribe',
      },
    ],
  },
  socialProof: aurelReviews,
  brandStory: {
    eyebrow: 'The house',
    heading: 'Fewer formulas. Better mornings.',
    paragraphs: [
      'AUREL began as a private cabinet for a small studio in Lisbon — chemists who were tired of serums that performed in a photograph and failed at a bathroom sink. We still make in small lots. We still refuse a ninth product until the eighth has been lived with.',
      'Quiet luxury, for us, is not beige for its own sake. It is the decision to print a ritual card instead of a manifesto, to offer a cream refill instead of a new jar, to photograph skin in window light instead of a ring light.',
      'If a formula needs a warning label longer than its benefit, it does not belong here. If it layers with the rest of the line on a weekday, it does.',
    ],
    image: '/brands/aurel/story.webp',
    imageAlt: 'AUREL studio table with botanicals, glass, and linen',
    values: [
      {
        title: 'Skin barrier first',
        body: 'Ceramides, milky cleansers, mineral sun. Actives earn their place after the wall is intact.',
      },
      {
        title: 'Honest textures',
        body: 'We write how a product feels on the third day, not the first pump in a showroom.',
      },
      {
        title: 'Objects that stay',
        body: 'Glass, aluminum, paper. Packaging should outlast a trend cycle or leave quietly.',
      },
    ],
  },
  footer: {
    blurb: 'AUREL — modern skincare from a small Lisbon atelier. Quiet formulas for weekday skin.',
    columns: [
      {
        title: 'Shop',
        links: [
          { label: 'The Cabinet', href: '/collections/all' },
          { label: 'Treatments', href: '/collections/treatments' },
          { label: 'Moisturize', href: '/collections/moisturize' },
          { label: 'Rituals', href: '/collections/rituals' },
        ],
      },
      {
        title: 'House',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Ritual notes', href: '/about' },
          { label: 'Refills', href: '/collections/moisturize' },
        ],
      },
      {
        title: 'Care',
        links: [
          { label: 'Shipping', href: '/about' },
          { label: 'Returns', href: '/about' },
          { label: 'Contact', href: '/about' },
        ],
      },
    ],
    newsletter: {
      heading: 'Notes from the house',
      body: 'Restocks and ritual letters. Four a year.',
      placeholder: 'Email address',
      ctaLabel: 'Subscribe',
    },
    social: [
      { label: 'Instagram', href: 'https://instagram.com' },
      { label: 'Pinterest', href: 'https://pinterest.com' },
    ],
    legal: [
      { label: 'Privacy', href: '/about' },
      { label: 'Terms', href: '/about' },
      { label: 'Accessibility', href: '/about' },
    ],
    payments: ['Visa', 'Mastercard', 'Amex', 'Shop Pay'],
    copyright: '© 2026 AUREL. All rights reserved.',
  },
  searchPlaceholder: 'Search formulas, rituals…',
}
