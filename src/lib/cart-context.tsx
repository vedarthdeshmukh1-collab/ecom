"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { products, type Product } from "@/data/products";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (
    product: Product,
    color: string,
    size: string,
    quantity?: number,
  ) => void;
  removeItem: (productId: string, color: string, size: string) => void;
  updateQuantity: (
    productId: string,
    color: string,
    size: string,
    quantity: number,
  ) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "soleva-cart-v2";

type CartStore = {
  items: CartItem[];
  isOpen: boolean;
};

let store: CartStore = { items: [], isOpen: false };
let didHydrate = false;
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function readStoredItems(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return parsed.filter((item) =>
      products.some((p) => p.id === item.productId),
    );
  } catch {
    return [];
  }
}

function hydrateFromStorage() {
  if (didHydrate || typeof window === "undefined") return;
  didHydrate = true;
  const items = readStoredItems();
  if (items.length > 0) {
    store = { ...store, items };
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (!didHydrate && typeof window !== "undefined") {
    hydrateFromStorage();
    queueMicrotask(() => emit());
  }
  return () => listeners.delete(listener);
}

function getSnapshot(): CartStore {
  return store;
}

function getServerSnapshot(): CartStore {
  return { items: [], isOpen: false };
}

function setStore(next: CartStore) {
  store = next;
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next.items));
  }
  emit();
}

function itemKey(productId: string, color: string, size: string) {
  return `${productId}:${color}:${size}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const { items, isOpen } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const openCart = useCallback(() => {
    setStore({ ...store, isOpen: true });
  }, []);

  const closeCart = useCallback(() => {
    setStore({ ...store, isOpen: false });
  }, []);

  const toggleCart = useCallback(() => {
    setStore({ ...store, isOpen: !store.isOpen });
  }, []);

  const addItem = useCallback(
    (product: Product, color: string, size: string, quantity = 1) => {
      const prev = store.items;
      const existing = prev.find(
        (i) =>
          itemKey(i.productId, i.color, i.size) ===
          itemKey(product.id, color, size),
      );
      const nextItems = existing
        ? prev.map((i) =>
            itemKey(i.productId, i.color, i.size) ===
            itemKey(product.id, color, size)
              ? { ...i, quantity: i.quantity + quantity }
              : i,
          )
        : [
            ...prev,
            {
              productId: product.id,
              slug: product.slug,
              name: product.name,
              price: product.price,
              image: product.images.primary ?? "",
              color,
              size,
              quantity,
            },
          ];
      setStore({ items: nextItems, isOpen: true });
    },
    [],
  );

  const removeItem = useCallback(
    (productId: string, color: string, size: string) => {
      setStore({
        ...store,
        items: store.items.filter(
          (i) =>
            itemKey(i.productId, i.color, i.size) !==
            itemKey(productId, color, size),
        ),
      });
    },
    [],
  );

  const updateQuantity = useCallback(
    (productId: string, color: string, size: string, quantity: number) => {
      if (quantity < 1) {
        setStore({
          ...store,
          items: store.items.filter(
            (i) =>
              itemKey(i.productId, i.color, i.size) !==
              itemKey(productId, color, size),
          ),
        });
        return;
      }
      setStore({
        ...store,
        items: store.items.map((i) =>
          itemKey(i.productId, i.color, i.size) ===
          itemKey(productId, color, size)
            ? { ...i, quantity }
            : i,
        ),
      });
    },
    [],
  );

  const clearCart = useCallback(() => {
    setStore({ ...store, items: [] });
  }, []);

  const itemCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal,
    }),
    [
      items,
      isOpen,
      openCart,
      closeCart,
      toggleCart,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
