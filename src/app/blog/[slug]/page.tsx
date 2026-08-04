import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="pb-24 pt-28 md:pb-28 md:pt-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-accent hover:underline"
        >
          ← Journal
        </Link>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-wider text-muted">
          {post.category} · {post.date} · {post.readTime}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{post.excerpt}</p>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-5 md:px-8">
        <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-mist">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-3xl space-y-5 px-5 text-base leading-relaxed text-ink-soft md:px-8 md:text-lg">
        {post.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
}
