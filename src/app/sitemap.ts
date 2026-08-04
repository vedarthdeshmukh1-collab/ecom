import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog";
import { collections, products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://soleva.example.com";
  const staticRoutes = [
    "",
    "/shop",
    "/about",
    "/cart",
    "/checkout",
    "/blog",
    "/size-guide",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productRoutes = products.map((p) => ({
    url: `${base}/product/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const collectionRoutes = collections.map((c) => ({
    url: `${base}/collections/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...productRoutes, ...collectionRoutes, ...blogRoutes];
}
