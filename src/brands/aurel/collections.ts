import type { Collection } from '../types'

export const aurelCollections: Collection[] = [
  {
    slug: 'all',
    title: 'The Cabinet',
    description:
      'Every formula we keep in rotation — cleansers, treatments, creams, and the rituals that hold them together.',
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
    slug: 'cleansers',
    title: 'Cleansers',
    description: 'First contact. Milk, not foam. Skin should feel like itself when you towel off.',
    image: '/brands/aurel/product-01.webp',
    productIds: ['lumen-cleansing-milk'],
  },
  {
    slug: 'treatments',
    title: 'Treatments',
    description: 'The concentrated middle of the ritual — essence, C, night oil, the eye.',
    image: '/brands/aurel/product-03.webp',
    productIds: ['still-water-essence', 'aureole-vitamin-c', 'night-restore', 'quiet-eye-balm'],
  },
  {
    slug: 'moisturize',
    title: 'Moisturize',
    description: 'Barrier cream and mineral silk. Seal what you spent the morning building.',
    image: '/brands/aurel/product-05.webp',
    productIds: ['cloud-barrier-cream', 'mineral-silk-spf'],
  },
  {
    slug: 'rituals',
    title: 'Rituals',
    description: 'Assembled mornings, ready to live on a tray or travel in a pouch.',
    image: '/brands/aurel/product-08.webp',
    productIds: ['dawn-ritual-set'],
  },
]
