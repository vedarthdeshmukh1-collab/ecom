import type { Collection } from '../types'

export const aurelCollections: Collection[] = [
  {
    slug: 'all',
    title: 'Shop',
    description: 'Every formulation we keep in rotation — a focused cabinet, nothing extra.',
    image: '/brands/aurel/editorial-01.webp',
    productIds: [
      'lumen-cleansing-milk',
      'still-water-essence',
      'aureole-vitamin-c',
      'night-restore',
      'cloud-barrier-cream',
      'quiet-eye-balm',
      'mineral-silk-spf',
      'dawn-ritual-set',
    ],
  },
  {
    slug: 'essentials',
    title: 'Collections',
    description: 'The considered essentials — four formulations designed to become part of your everyday.',
    image: '/brands/aurel/philosophy.webp',
    productIds: [
      'aureole-vitamin-c',
      'lumen-cleansing-milk',
      'cloud-barrier-cream',
      'night-restore',
    ],
  },
  {
    slug: 'cleansers',
    title: 'Cleanse',
    description: 'First contact. Milk, not foam. Skin should feel like itself when you towel off.',
    image: '/brands/aurel/product-daily-cleanser.webp',
    productIds: ['lumen-cleansing-milk'],
  },
  {
    slug: 'treatments',
    title: 'Treat',
    description: 'The concentrated middle of the ritual — essence, serum, oil, the eye.',
    image: '/brands/aurel/product-renewal-serum.webp',
    productIds: ['still-water-essence', 'aureole-vitamin-c', 'night-restore', 'quiet-eye-balm'],
  },
  {
    slug: 'moisturize',
    title: 'Restore',
    description: 'Barrier cream and mineral silk. Seal what the morning built.',
    image: '/brands/aurel/product-barrier-cream.webp',
    productIds: ['cloud-barrier-cream', 'mineral-silk-spf'],
  },
  {
    slug: 'rituals',
    title: 'Rituals',
    description: 'Assembled mornings, ready to live on a tray or travel in a pouch.',
    image: '/brands/aurel/editorial-04.webp',
    productIds: ['dawn-ritual-set'],
  },
]
