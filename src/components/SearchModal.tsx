"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { products } from "@/data/products";

const popular = ["Velocity Runner", "Running", "Women", "Limited", "AirStride"];

export function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const activeQuery = open ? query : "";

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = activeQuery.trim().toLowerCase();
    if (!q) return [];
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.includes(q) ||
          p.sport.includes(q) ||
          p.gender.includes(q),
      )
      .slice(0, 6);
  }, [activeQuery]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90]">
      <button
        type="button"
        className="cart-overlay absolute inset-0 bg-ink/50"
        aria-label="Close search"
        onClick={() => {
          setQuery("");
          onClose();
        }}
      />
      <div className="relative mx-auto mt-16 w-full max-w-xl px-4 animate-rise">
        <div className="overflow-hidden rounded-2xl bg-paper shadow-2xl">
          <div className="flex items-center gap-3 border-b border-line px-4">
            <span className="text-muted" aria-hidden>
              ⌕
            </span>
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search shoes, sports, collections…"
              className="w-full bg-transparent py-4 text-base outline-none placeholder:text-muted"
              aria-label="Search products"
            />
            <button
              type="button"
              onClick={() => {
                setQuery("");
                onClose();
              }}
              className="text-sm text-muted hover:text-ink"
            >
              Esc
            </button>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-4">
            {!query && (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Popular searches
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {popular.map((term) => (
                    <button
                      key={term}
                      type="button"
                      onClick={() => setQuery(term)}
                      className="rounded-full bg-mist px-3 py-1.5 text-sm hover:bg-stone"
                    >
                      {term}
                    </button>
                  ))}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Trending shoes
                </p>
                <ul className="mt-3 space-y-2">
                  {products
                    .filter((p) => p.bestSeller)
                    .slice(0, 4)
                    .map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/product/${p.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-3 rounded-xl p-2 hover:bg-mist"
                        >
                          <span className="relative h-12 w-12 overflow-hidden rounded-lg bg-mist">
                            {p.images.primary ? (
                              <Image
                                src={p.images.primary}
                                alt=""
                                fill
                                className="object-cover"
                                sizes="48px"
                              />
                            ) : null}
                          </span>
                          <span className="text-sm font-medium">{p.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}

            {query && results.length === 0 && (
              <p className="py-8 text-center text-sm text-muted">
                No results for “{query}”
              </p>
            )}

            {results.length > 0 && (
              <ul className="space-y-1">
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/product/${p.slug}`}
                      onClick={onClose}
                      className="flex items-center gap-3 rounded-xl p-2 hover:bg-mist"
                    >
                      <span className="relative h-14 w-14 overflow-hidden rounded-lg bg-mist">
                        {p.images.primary ? (
                          <Image
                            src={p.images.primary}
                            alt=""
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        ) : null}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">
                          {p.name}
                        </span>
                        <span className="text-xs capitalize text-muted">
                          {p.category} · {p.gender}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
