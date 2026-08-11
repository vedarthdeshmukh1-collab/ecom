export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  image: string;
  date: string;
  readTime: string;
  category: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-running-shoes",
    title: "How to Choose Running Shoes",
    excerpt:
      "A practical guide to cushioning, drop, fit, and gait — so your next pair matches how you actually run.",
    body: [
      "The right running shoe starts with how you move. Neutral runners usually want balanced cushioning; overpronators may prefer more medial support.",
      "Consider stack height and drop. Higher stack softens impact; lower drop encourages a more natural stride. Neither is universally better — match them to your mileage and comfort.",
      "Always try shoes later in the day when feet are slightly swollen, and leave a thumb’s width at the toe. If you can, test on a treadmill or short outdoor jog.",
      "Replace shoes every 500–800 km, or sooner if midsole foam feels flat and your knees start complaining.",
    ],
    image:
      "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1400&q=80",
    date: "2026-06-04",
    readTime: "6 min",
    category: "Guides",
  },
  {
    slug: "sneaker-trends-2026",
    title: "Sneaker Trends 2026",
    excerpt:
      "From sculptural midsoles to quiet luxury neutrals — the silhouettes defining the year.",
    body: [
      "Chunky-but-light foam continues to dominate lifestyle drops, while performance lines lean into invisible tech under cleaner uppers.",
      "Color stories are shifting toward muted earth tones paired with a single high-voltage accent — think charcoal with signal orange.",
      "Knit uppers remain essential for breathability, but hybrid leather overlays are back for structure and polish.",
      "Limited capsules are smaller and more frequent. If you love a colorway, move early.",
    ],
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1400&q=80",
    date: "2026-05-18",
    readTime: "5 min",
    category: "Culture",
  },
  {
    slug: "how-to-clean-sneakers",
    title: "How to Clean Sneakers",
    excerpt:
      "Keep knit, mesh, and leather looking fresh without wrecking the foam or adhesives.",
    body: [
      "Remove laces and insoles. Knock out loose dirt, then spot-clean with a soft brush and mild soap.",
      "Avoid the washing machine for cushioned performance shoes — agitation can separate midsoles.",
      "Stuff with paper to hold shape and air-dry away from direct heat. Never use a dryer.",
      "For white rubber midsoles, a magic eraser or baking-soda paste works wonders between deep cleans.",
    ],
    image:
      "https://images.pexels.com/photos/684152/pexels-photo-684152.jpeg?auto=compress&cs=tinysrgb&w=1400",
    date: "2026-04-22",
    readTime: "4 min",
    category: "Care",
  },
  {
    slug: "walking-vs-running-shoes",
    title: "Walking vs Running Shoes",
    excerpt:
      "They look similar — but the geometry underfoot is built for very different impact patterns.",
    body: [
      "Running shoes are tuned for repeated heel-to-toe impact at higher forces. Walkers need flexible forefeet and softer overall ride.",
      "If you only walk, a dedicated walking or lifestyle cushion shoe often feels more natural than a race trainer.",
      "If you mix both, a daily trainer like Velocity Runner covers easy runs and long walks without compromise.",
    ],
    image:
      "https://images.pexels.com/photos/6770028/pexels-photo-6770028.jpeg?auto=compress&cs=tinysrgb&w=1400",
    date: "2026-03-30",
    readTime: "5 min",
    category: "Guides",
  },
  {
    slug: "basketball-shoe-guide",
    title: "Basketball Shoe Guide",
    excerpt:
      "Lockdown, cushioning, and court grip — what to look for before your next pickup game.",
    body: [
      "Prioritize lateral support. Basketball is about cuts, not just straight-line speed.",
      "Outsole compound matters on dusty indoor courts — sticky rubber with clear pivot zones helps.",
      "Cushioning preference is personal: some players want max soft, others prefer a firmer, more responsive court feel.",
      "Try Rapid X if you want a balanced pickup-to-league option with strong ankle padding.",
    ],
    image:
      "https://images.pexels.com/photos/5325588/pexels-photo-5325588.jpeg?auto=compress&cs=tinysrgb&w=1400",
    date: "2026-02-14",
    readTime: "7 min",
    category: "Guides",
  },
];

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
