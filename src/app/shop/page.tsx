"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const categories = [
  "all",
  "seating",
  "lighting",
  "tables",
  "objects",
  "textiles",
] as const;

type SortKey = "featured" | "price-asc" | "price-desc" | "name";

export default function ShopPage() {
  const [category, setCategory] =
    useState<(typeof categories)[number]>("all");
  const [sort, setSort] = useState<SortKey>("featured");

  const filtered = useMemo(() => {
    const list =
      category === "all"
        ? [...products]
        : products.filter((p) => p.category === category);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured));
    }
    return list;
  }, [category, sort]);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pt-32 md:pb-28">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">Shop</p>
        <h1 className="mt-3 font-display text-4xl tracking-tight md:text-6xl">
          The full edit
        </h1>
        <p className="mt-4 text-base text-muted md:text-lg">
          Twelve pieces across seating, light, tables, objects, and textiles.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-y border-line py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`px-3 py-1.5 text-xs uppercase tracking-[0.14em] transition ${
                category === c
                  ? "bg-ink text-mist"
                  : "bg-transparent text-ink-soft hover:bg-mist"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm text-muted">
          Sort
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="border border-line bg-paper px-3 py-2 text-ink outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="name">Name</option>
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-muted">
        Showing {filtered.length} product{filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
        {filtered.map((product, i) => (
          <ProductCard key={product.id} product={product} priority={i < 4} />
        ))}
      </div>
    </div>
  );
}
