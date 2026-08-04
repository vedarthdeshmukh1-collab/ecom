import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "FORMA is a fictional contemporary furniture studio — a demo ecommerce storefront for portfolios and case studies.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-mist">
        <Image
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=2000&q=80"
          alt="Architectural interior with soft daylight"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col justify-end px-5 pb-14 pt-28 md:justify-center md:px-8 md:pb-20">
          <p className="font-display text-5xl tracking-[0.18em] md:text-7xl">
            FORMA
          </p>
          <h1 className="mt-5 max-w-2xl font-display text-3xl leading-tight tracking-tight md:text-5xl">
            A storefront built to look real — for portfolios and case studies
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">
          Project brief
        </p>
        <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
          Why this demo exists
        </h2>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
          <p>
            FORMA is a fictional contemporary furniture and objects brand. The
            store demonstrates a complete ecommerce experience: branded home,
            collection pages, product detail with variants, a persistent cart,
            and a demo checkout — without processing real payments.
          </p>
          <p>
            Use it in case studies to show merchandising layout, product
            storytelling, and interaction design. Every product is sample
            content; imagery is sourced from Unsplash for presentation quality.
          </p>
        </div>
      </section>

      <section className="bg-mist/70 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            What you can walk through
          </h2>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Browse & filter",
                body: "Shop by category, sort by price, and open collection stories for Living, Light, and Objects.",
              },
              {
                title: "Configure & add",
                body: "Pick colors and quantities on product pages. Cart state persists in local storage across reloads.",
              },
              {
                title: "Demo checkout",
                body: "Complete a mock order flow with contact, shipping, and payment fields — no charges, clear demo labeling.",
              },
            ].map((item) => (
              <li key={item.title}>
                <h3 className="font-display text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1400&q=80"
              alt="Living room vignette with lounge seating"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Stack
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
              Built with Next.js
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              App Router, TypeScript, Tailwind CSS, and next/image. Cart state
              lives in React context with localStorage hydration — suitable for
              demos and easy to extend toward a real commerce backend.
            </p>
            <Link
              href="/shop"
              className="mt-8 inline-flex bg-pine px-6 py-3.5 text-sm text-mist transition hover:bg-pine-deep"
            >
              Explore the shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
