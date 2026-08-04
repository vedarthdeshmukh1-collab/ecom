import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "SOLEVA is a premium footwear brand built on innovation, comfort, design, sustainability, and performance.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-paper">
        <Image
          src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=2000&q=80"
          alt="Athletes training in SOLEVA footwear"
          fill
          priority
          className="object-cover opacity-45"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-28 md:justify-center md:px-8 md:pb-20">
          <p className="font-display text-5xl font-bold tracking-[0.14em] md:text-7xl">
            SOLEVA
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            Performance Meets Everyday Style.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Our story
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
          Footwear for people who never really stop moving
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
          <p>
            SOLEVA started with a simple brief: build shoes that feel as good on
            a Tuesday commute as they do on a Saturday long run. We obsess over
            foam compounds, knit structures, and outsole patterns until the
            product disappears underfoot — and the day opens up.
          </p>
          <p>
            This storefront is a premium ecommerce demo for portfolios and case
            studies, showcasing a full footwear shopping experience from browse
            to checkout.
          </p>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            What we stand on
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              {
                title: "Innovation",
                body: "Ultra Cushion Foam and adaptive knits refined through athlete feedback.",
              },
              {
                title: "Comfort",
                body: "Lasts and cushioning tuned for all-day wear, not just peak performance.",
              },
              {
                title: "Design",
                body: "Clean silhouettes that move from training kit to street without apology.",
              },
              {
                title: "Sustainability",
                body: "Recycled yarns and responsible packaging where the tech allows.",
              },
              {
                title: "Performance",
                body: "Grip, lockdown, and energy return you can feel on the first stride.",
              },
            ].map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="shipping"
        className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20"
      >
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="font-display text-2xl font-bold">Shipping</h2>
            <p className="mt-3 text-sm text-muted">
              Free shipping on orders over ₹3,000. Standard delivery in 3–6
              business days across India (demo timing).
            </p>
          </div>
          <div id="returns">
            <h2 className="font-display text-2xl font-bold">Returns</h2>
            <p className="mt-3 text-sm text-muted">
              14-day returns on unworn pairs with original packaging. Size
              exchanges welcome.
            </p>
          </div>
          <div id="contact">
            <h2 className="font-display text-2xl font-bold">Contact</h2>
            <p className="mt-3 text-sm text-muted">
              hello@soleva.example · Mon–Sat, 10am–7pm IST
            </p>
          </div>
        </div>
      </section>

      <section id="careers" className="border-t border-line bg-paper py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-2xl font-bold">Careers</h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            We’re always looking for designers, foam chemists, and retail minds.
            Send a note via Contact — this is a demo brand, but the invitation
            stands in spirit.
          </p>
          <Link href="/shop" className="btn-accent mt-8 inline-flex">
            Explore the shop
          </Link>
        </div>
      </section>
    </div>
  );
}
