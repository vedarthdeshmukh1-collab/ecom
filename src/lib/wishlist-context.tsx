"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type WishlistContextValue = {
  ids: string[];
  toggle: (productId: string) => void;
  has: (productId: string) => boolean;
};

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "soleva-wishlist-v1";

let ids: string[] = [];
let didHydrate = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function hydrate() {
  if (didHydrate || typeof window === "undefined") return;
  didHydrate = true;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) ids = JSON.parse(raw) as string[];
  } catch {
    ids = [];
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!didHydrate && typeof window !== "undefined") {
    hydrate();
    queueMicrotask(() => emit());
  }
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return ids;
}

function getServerSnapshot() {
  return [] as string[];
}

function setIds(next: string[]) {
  ids = next;
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }
  emit();
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const current = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = useCallback((productId: string) => {
    setIds(
      ids.includes(productId)
        ? ids.filter((id) => id !== productId)
        : [...ids, productId],
    );
  }, []);

  const has = useCallback((productId: string) => ids.includes(productId), []);

  const value = useMemo(
    () => ({ ids: current, toggle, has }),
    [current, toggle, has],
  );

  return (
    <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
