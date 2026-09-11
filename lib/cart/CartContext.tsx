"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getCategoryBySlug } from "@/lib/data/categories";
import { products, type Product } from "@/lib/data/products";

export interface CartLine {
  productId: string;
  quantity: number;
}

export interface CartLineWithProduct extends CartLine {
  product: Product;
  image: string;
  lineTotal: number;
  lineMrp: number;
}

interface CartContextValue {
  lines: CartLineWithProduct[];
  itemCount: number;
  subtotal: number;
  mrpTotal: number;
  savings: number;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

const STORAGE_KEY = "digeesh-crackers-cart";

function readStoredCart(): CartLine[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (line): line is CartLine =>
        line && typeof line.productId === "string" && typeof line.quantity === "number"
    );
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Cart starts empty on both server and first client render (avoids a
  // hydration mismatch), then loads whatever was saved in this browser.
  // This one-time sync from an external store (localStorage) on mount is
  // intentional, not an accidental cascading-render anti-pattern.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCart(readStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // Storage can be unavailable (private browsing, quota) — the cart
      // still works for the current session, it just won't persist.
    }
  }, [cart, hydrated]);

  const addItem = useCallback((productId: string, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((line) => line.productId === productId);
      if (existing) {
        return prev.map((line) =>
          line.productId === productId
            ? { ...line, quantity: line.quantity + quantity }
            : line
        );
      }
      return [...prev, { productId, quantity }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart((prev) => prev.filter((line) => line.productId !== productId));
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    setCart((prev) => {
      if (quantity <= 0) return prev.filter((line) => line.productId !== productId);
      return prev.map((line) => (line.productId === productId ? { ...line, quantity } : line));
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const lines = useMemo<CartLineWithProduct[]>(() => {
    return cart
      .map((line) => {
        const product = products.find((p) => p.id === line.productId);
        if (!product) return null;
        const category = getCategoryBySlug(product.categorySlug);
        return {
          ...line,
          product,
          image: category?.image ?? "/images/card/sparklers.jpg",
          lineTotal: product.discountPrice * line.quantity,
          lineMrp: product.price * line.quantity,
        };
      })
      .filter((line): line is CartLineWithProduct => line !== null);
  }, [cart]);

  const itemCount = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + line.lineTotal, 0);
  const mrpTotal = lines.reduce((sum, line) => sum + line.lineMrp, 0);
  const savings = mrpTotal - subtotal;

  const value: CartContextValue = {
    lines,
    itemCount,
    subtotal,
    mrpTotal,
    savings,
    addItem,
    removeItem,
    setQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
