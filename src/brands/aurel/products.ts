import type { Product } from '../types'

export const aurelProducts: Product[] = [
  {
    id: 'lumen-cleansing-milk',
    slug: 'the-daily-cleanser',
    name: 'The Daily Cleanser',
    shortDescription: 'A cloud-soft cleanse that leaves skin quiet, not stripped.',
    description:
      'Lumen is a milky first cleanse for skin that prefers to be asked, not told. Meadowfoam and rice bran dissolve city film and SPF without the tight after-feel. Use at the sink in the evening, or as a gentle morning reset when you want water and little else.',
    price: 38,
    compareAtPrice: 46,
    category: 'Cleansers',
    images: [
      { src: '/brands/aurel/product-daily-cleanser.webp', alt: 'The Daily Cleanser bottle on warm linen' },
      { src: '/brands/aurel/product-daily-cleanser-alt.webp', alt: 'The Daily Cleanser texture on ceramic' },
    ],
    variants: [
      { id: 'lumen-100', label: '100 ml', sku: 'AUR-LMN-100', inStock: true },
      { id: 'lumen-200', label: '200 ml', sku: 'AUR-LMN-200', price: 58, inStock: true },
    ],
    rating: 4.8,
    reviewCount: 214,
    tags: ['gentle', 'evening', 'barrier'],
    details: [
      'Fragrance-free. Essential-oil free.',
      'pH 5.2 — aligned with the acid mantle.',
      'Suitable for reactive and post-treatment skin.',
    ],
    ingredients:
      'Aqua, Caprylic/Capric Triglyceride, Limnanthes Alba (Meadowfoam) Seed Oil, Oryza Sativa (Rice) Bran Oil, Glycerin, Polyglyceryl-6 Stearate, Panthenol, Allantoin, Bisabolol, Sodium PCA, Tocopherol, Citric Acid.',
    howToUse:
      'Emulsify a pump between dry palms. Massage over face and neck for sixty seconds. Add water to milk, then tissue or rinse. Follow with essence while skin is still slightly damp.',
    size: '100 ml / 200 ml',
    badge: 'Bestseller',
  },
  {
    id: 'still-water-essence',
    slug: 'still-water-essence',
    name: 'Still Water Essence',
    shortDescription: 'A weightless veil of hydration that prepares skin to listen.',
    description:
      'Still Water is not a toner in the old sense. It is a thin, mineral-rich essence meant to be pressed in, not swiped away. Tremella and beta-glucan hold water close to the surface so serums that follow have somewhere to go.',
    price: 48,
    category: 'Treatments',
    images: [
      { src: '/brands/aurel/product-02.webp', alt: 'Still Water Essence bottle with glass dropper' },
      { src: '/brands/aurel/product-02-alt.webp', alt: 'Still Water Essence droplets on stone' },
    ],
    variants: [
      { id: 'still-150', label: '150 ml', sku: 'AUR-STW-150', inStock: true },
    ],
    rating: 4.7,
    reviewCount: 168,
    tags: ['hydrate', 'layering', 'morning'],
    details: [
      'Alcohol-free. No witch hazel sting.',
      'Can be misted or patted from palms.',
      'Pairs with every treatment in the line.',
    ],
    ingredients:
      'Aqua, Tremella Fuciformis Extract, Beta-Glucan, Sodium Hyaluronate, Glycerin, Propanediol, Aloe Barbadensis Leaf Juice, Magnesium Sulfate, Zinc PCA, Sodium Phytate.',
    howToUse:
      'After cleansing, pour a dime into palms. Press over face, neck, and décolleté. Repeat once if skin feels tight. Do not rinse.',
    size: '150 ml',
  },
  {
    id: 'aureole-vitamin-c',
    slug: 'the-renewal-serum',
    name: 'The Renewal Serum',
    shortDescription: 'A silk-finish treatment for brightness without the bite.',
    description:
      'Aureole uses 12% ethylated ascorbic acid — a cousin of pure C that stays composed in light and air. Ferulic acid and a whisper of bisabolol keep the formula polite. Expect a gradual evening of tone, not an overnight miracle, and a finish that sits under cream without pilling.',
    price: 72,
    compareAtPrice: 84,
    category: 'Treatments',
    images: [
      { src: '/brands/aurel/product-renewal-serum.webp', alt: 'The Renewal Serum amber dropper bottle' },
      { src: '/brands/aurel/product-renewal-serum-alt.webp', alt: 'The Renewal Serum texture on skin' },
    ],
    variants: [
      { id: 'aureole-30', label: '30 ml', sku: 'AUR-AUR-30', inStock: true },
    ],
    rating: 4.9,
    reviewCount: 301,
    tags: ['brighten', 'morning', 'antioxidant'],
    details: [
      '12% 3-O-Ethyl Ascorbic Acid.',
      'Airless-adjacent dropper. Store away from steam.',
      'Dermatologist tested. Non-comedogenic.',
    ],
    ingredients:
      'Aqua, 3-O-Ethyl Ascorbic Acid, Propanediol, Ferulic Acid, Sodium Hyaluronate, Bisabolol, Panthenol, Glycerin, Xanthan Gum, Sodium Citrate, Tocopherol.',
    howToUse:
      'In the morning, after essence, tap three drops over face. Wait a minute. Seal with Cloud Barrier Cream and Mineral Silk SPF.',
    size: '30 ml',
    badge: 'Editor’s pick',
  },
  {
    id: 'night-restore',
    slug: 'the-recovery-oil',
    name: 'The Recovery Oil',
    shortDescription: 'A slow oil-serum hybrid for skin that works the night shift.',
    description:
      'Night Restore is the richest treatment we make, and still it never feels occlusive for the sake of it. Bakuchiol, a plant-derived retinol alternative, sits with squalane and evening primrose. Skin wakes looking rested rather than polished.',
    price: 86,
    category: 'Treatments',
    images: [
      { src: '/brands/aurel/product-recovery-oil.webp', alt: 'The Recovery Oil dark glass bottle' },
      { src: '/brands/aurel/product-recovery-oil-alt.webp', alt: 'The Recovery Oil catching warm light' },
    ],
    variants: [
      { id: 'night-30', label: '30 ml', sku: 'AUR-NRC-30', inStock: true },
    ],
    rating: 4.8,
    reviewCount: 142,
    tags: ['night', 'restore', 'bakuchiol'],
    details: [
      '1% bakuchiol. No retinoid rest nights required.',
      'Pregnancy-conscious formulation (ask your clinician).',
      'Dropper metered for a four-month rhythm.',
    ],
    ingredients:
      'Squalane, Oenothera Biennis (Evening Primrose) Oil, Caprylic/Capric Triglyceride, Bakuchiol, Rosa Canina Seed Oil, Tocopherol, Bisabolol, Helianthus Annuus Seed Oil.',
    howToUse:
      'After essence, warm four drops in palms. Press into face and neck. If you layer cream, wait two minutes. Use nightly.',
    size: '30 ml',
  },
  {
    id: 'cloud-barrier-cream',
    slug: 'the-barrier-cream',
    name: 'The Barrier Cream',
    shortDescription: 'A whipped ceramide cream that disappears, then stays.',
    description:
      'Cloud Barrier is built like a quilt: ceramides, cholesterol, and fatty acids in a ratio skin already understands. The texture is a soft mousse that melts, then forms a breathable film. It is the cream we reach for after flights, heaters, and over-exfoliation.',
    price: 64,
    category: 'Moisturize',
    images: [
      { src: '/brands/aurel/product-barrier-cream.webp', alt: 'The Barrier Cream jar on stone' },
      { src: '/brands/aurel/product-barrier-cream-alt.webp', alt: 'The Barrier Cream swirl texture' },
    ],
    variants: [
      { id: 'cloud-50', label: '50 ml', sku: 'AUR-CBC-50', inStock: true },
      { id: 'cloud-50-refill', label: '50 ml refill', sku: 'AUR-CBC-50R', price: 52, inStock: true },
    ],
    rating: 4.9,
    reviewCount: 256,
    tags: ['barrier', 'ceramides', 'refill'],
    details: [
      'Ceramide NP, AP, EOP with cholesterol and fatty acids.',
      'Glass jar. Aluminum refill pod available.',
      'Finishes satin, never waxy.',
    ],
    ingredients:
      'Aqua, Squalane, Glycerin, Cetearyl Alcohol, Ceramide NP, Ceramide AP, Ceramide EOP, Cholesterol, Phytosphingosine, Shea Butter, Panthenol, Allantoin, Carbomer, Sodium Hydroxide.',
    howToUse:
      'A pea for normal skin, a pearl after retinoids or winter air. Warm between fingers and press. Morning and night.',
    size: '50 ml',
    badge: 'Refillable',
  },
  {
    id: 'quiet-eye-balm',
    slug: 'quiet-eye-balm',
    name: 'Quiet Eye Balm',
    shortDescription: 'A cool, caffeine-light balm for the thinnest skin you have.',
    description:
      'Quiet Eye is a fingertip balm, not a syringe of promises. Caffeine and niacinamide take down morning puff; peptides keep the area supple. The metal spatula in the cap is cold on purpose.',
    price: 42,
    category: 'Treatments',
    images: [
      { src: '/brands/aurel/product-06.webp', alt: 'Quiet Eye Balm compact with spatula' },
      { src: '/brands/aurel/product-06-alt.webp', alt: 'Quiet Eye Balm applied along the orbital bone' },
    ],
    variants: [
      { id: 'eye-15', label: '15 ml', sku: 'AUR-QEB-15', inStock: true },
    ],
    rating: 4.6,
    reviewCount: 98,
    tags: ['eye', 'peptides', 'morning'],
    details: [
      'Ophthalmologist tested.',
      'Can be worn under concealer after two minutes.',
      'No perfume, no essential oils.',
    ],
    ingredients:
      'Aqua, Squalane, Niacinamide, Caffeine, Glycerin, Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7, Shea Butter, Panthenol, Sodium Hyaluronate.',
    howToUse:
      'Chill the spatula. A rice-grain amount. Tap from inner to outer orbital bone. Do not drag.',
    size: '15 ml',
  },
  {
    id: 'mineral-silk-spf',
    slug: 'mineral-silk-spf',
    name: 'Mineral Silk SPF 30',
    shortDescription: 'A zinc veil with no white cast and no greasy farewell.',
    description:
      'Mineral Silk is a 20% non-nano zinc formula suspended in a light emulsion that looks like skin, not frosting. Iron oxides are balanced for a true-neutral finish across a wide range of tones. It is the last step of every AUREL morning.',
    price: 44,
    category: 'Moisturize',
    images: [
      { src: '/brands/aurel/product-07.webp', alt: 'Mineral Silk SPF 30 tube on linen' },
      { src: '/brands/aurel/product-07-alt.webp', alt: 'Mineral Silk SPF texture on bare skin' },
    ],
    variants: [
      { id: 'spf-50', label: '50 ml', sku: 'AUR-MS-50', inStock: true, swatch: '#E8D8C4' },
      { id: 'spf-50-deep', label: 'Deep', sku: 'AUR-MS-50D', inStock: true, swatch: '#8A5A3C' },
    ],
    rating: 4.7,
    reviewCount: 187,
    tags: ['spf', 'mineral', 'morning'],
    details: [
      'Broad spectrum SPF 30. Reef-conscious zinc.',
      'Sheer, blendable. No flashback in photos.',
      'Reapply with a pressed puff when you are out.',
    ],
    ingredients:
      'Zinc Oxide 20%, Aqua, Caprylic/Capric Triglyceride, Coco-Caprylate, Glycerin, Iron Oxides, Polyhydroxystearic Acid, Stearalkonium Hectorite, Tocopherol.',
    howToUse:
      'Two finger-lengths for face and neck. Blend out from the center. Wait for the silk set before makeup.',
    size: '50 ml',
  },
  {
    id: 'dawn-ritual-set',
    slug: 'dawn-ritual-set',
    name: 'Dawn Ritual Set',
    shortDescription: 'Cleanse, essence, C, cream, silk — the weekday morning, assembled.',
    description:
      'Five full-size steps, one ribboned box. The Dawn Ritual is how we introduce AUREL to a new cabinet: Lumen, Still Water, Aureole, Cloud Barrier, Mineral Silk. A linen card walks through timing so nothing pills and nothing is rushed.',
    price: 228,
    compareAtPrice: 266,
    category: 'Rituals',
    images: [
      { src: '/brands/aurel/product-08.webp', alt: 'Dawn Ritual Set arranged on a tray' },
      { src: '/brands/aurel/product-08-alt.webp', alt: 'Dawn Ritual Set box interior' },
    ],
    variants: [
      { id: 'dawn-full', label: 'Full ritual', sku: 'AUR-DRS-01', inStock: true },
    ],
    rating: 5,
    reviewCount: 64,
    tags: ['set', 'gift', 'morning'],
    details: [
      'Saves $38 versus purchasing separately.',
      'Includes a folded ritual card and cotton pouch.',
      'Ready to gift. No extra wrap required.',
    ],
    howToUse:
      'Morning: Lumen → Still Water → Aureole → Cloud Barrier → Mineral Silk. Evening, skip C and SPF; add Night Restore if you own it.',
    size: '5 full-size products',
    badge: 'Set',
  },
]
