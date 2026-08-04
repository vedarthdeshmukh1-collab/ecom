import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "SOLEVA journal — running shoe guides, sneaker trends, care tips, and sport footwear advice.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pb-28 md:pt-32">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        Journal
      </p>
      <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
        Guides & stories
      </h1>
      <p className="mt-4 max-w-xl text-muted">
        How to choose, wear, and care for performance footwear.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-line transition hover:border-accent/40"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-mist">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                {post.category} · {post.readTime}
              </p>
              <h2 className="mt-2 font-display text-xl font-bold tracking-tight">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
