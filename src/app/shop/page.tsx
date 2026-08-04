"use client";

import { useMemo, useState, useTransition, type ReactNode } from "react";
import { ProductCard } from "@/components/ProductCard";
import { products, type ProductCategory } from "@/data/products";

const categories = [
  "all",
  "running",
  "walking",
  "casual",
  "basketball",
  "training",
  "lifestyle",
  "trail",
  "limited",
] as const;

const genders = ["all", "men", "women", "unisex"] as const;
const sports = [
  "all",
  "running",
  "gym",
  "walking",
  "basketball",
  "tennis",
  "hiking",
  "lifestyle",
] as const;

type SortKey = "featured" | "price-asc" | "price-desc" | "rating" | "name";

export default function ShopPage() {
  const [category, setCategory] = useState<(typeof categories)[number]>("all");
  const [gender, setGender] = useState<(typeof genders)[number]>("all");
  const [sport, setSport] = useState<(typeof sports)[number]>("all");
  const [size, setSize] = useState<number | "all">("all");
  const [minRating, setMinRating] = useState(0);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sort, setSort] = useState<SortKey>("featured");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [visible, setVisible] = useState(8);
  const [pending, startTransition] = useTransition();

  const allSizes = useMemo(() => {
    const set = new Set<number>();
    products.forEach((p) => p.sizes.forEach((s) => set.add(s)));
    return Array.from(set).sort((a, b) => a - b);
  }, []);

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== "all") {
      list = list.filter((p) => p.category === (category as ProductCategory));
    }
    if (gender !== "all") list = list.filter((p) => p.gender === gender);
    if (sport !== "all") list = list.filter((p) => p.sport === sport);
    if (size !== "all") list = list.filter((p) => p.sizes.includes(size));
    if (minRating > 0) list = list.filter((p) => p.rating >= minRating);
    if (inStockOnly) list = list.filter((p) => p.inStock);

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort(
          (a, b) =>
            Number(b.featured) - Number(a.featured) ||
            Number(b.bestSeller) - Number(a.bestSeller),
        );
    }
    return list;
  }, [category, gender, sport, size, minRating, inStockOnly, sort]);

  const shown = filtered.slice(0, visible);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-28 md:px-8 md:pt-32 md:pb-28">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Shop
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
          All footwear
        </h1>
        <p className="mt-4 text-base text-muted md:text-lg">
          Filter by sport, size, and style. Performance meets everyday.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="h-fit space-y-6 rounded-2xl border border-line bg-mist/40 p-5 lg:sticky lg:top-28">
          <FilterGroup label="Category">
            {categories.map((c) => (
              <Chip
                key={c}
                active={category === c}
                onClick={() =>
                  startTransition(() => {
                    setCategory(c);
                    setVisible(8);
                  })
                }
              >
                {c}
              </Chip>
            ))}
          </FilterGroup>

          <FilterGroup label="Gender">
            {genders.map((g) => (
              <Chip
                key={g}
                active={gender === g}
                onClick={() => startTransition(() => setGender(g))}
              >
                {g}
              </Chip>
            ))}
          </FilterGroup>

          <FilterGroup label="Sport">
            {sports.map((s) => (
              <Chip
                key={s}
                active={sport === s}
                onClick={() => startTransition(() => setSport(s))}
              >
                {s}
              </Chip>
            ))}
          </FilterGroup>

          <FilterGroup label="Size (UK)">
            <Chip active={size === "all"} onClick={() => setSize("all")}>
              all
            </Chip>
            {allSizes.map((s) => (
              <Chip key={s} active={size === s} onClick={() => setSize(s)}>
                {s}
              </Chip>
            ))}
          </FilterGroup>

          <FilterGroup label="Rating">
            {[0, 4, 4.5].map((r) => (
              <Chip
                key={r}
                active={minRating === r}
                onClick={() => setMinRating(r)}
              >
                {r === 0 ? "any" : `${r}+`}
              </Chip>
            ))}
          </FilterGroup>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
              className="accent-accent"
            />
            In stock only
          </label>
        </aside>

        <div>
          <div className="flex flex-col gap-4 border-y border-line py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className={`text-sm text-muted ${pending ? "opacity-50" : ""}`}>
              Showing {shown.length} of {filtered.length}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex rounded-full border border-line p-1">
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    view === "grid" ? "bg-ink text-paper" : ""
                  }`}
                >
                  Grid
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    view === "list" ? "bg-ink text-paper" : ""
                  }`}
                >
                  List
                </button>
              </div>
              <label className="flex items-center gap-2 text-sm text-muted">
                Sort
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="rounded-full border border-line bg-paper px-3 py-2 text-ink outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Top rated</option>
                  <option value="price-asc">Price: low to high</option>
                  <option value="price-desc">Price: high to low</option>
                  <option value="name">Name</option>
                </select>
              </label>
            </div>
          </div>

          <div
            className={`mt-8 ${
              view === "grid"
                ? "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6"
                : "grid grid-cols-1 gap-6 sm:grid-cols-2"
            }`}
          >
            {shown.map((product, i) => (
              <ProductCard key={product.id} product={product} priority={i < 4} />
            ))}
          </div>

          {visible < filtered.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + 4)}
                className="btn-primary"
              >
                Load more
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-1.5">{children}</div>
    </div>
  );
}

function Chip({
  children,
  active,
  onClick,
}: {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition ${
        active ? "bg-ink text-paper" : "bg-paper text-ink-soft hover:bg-stone"
      }`}
    >
      {children}
    </button>
  );
}
