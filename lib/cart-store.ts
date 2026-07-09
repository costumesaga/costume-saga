import { create } from "zustand";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  cart: CartItem[];

  addToCart: (item: Omit<CartItem, "quantity">) => void;

  removeFromCart: (id: number) => void;

  increaseQty: (id: number) => void;

  decreaseQty: (id: number) => void;

  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((p) => p.id === item.id);

      if (existing) {
        return {
          cart: state.cart.map((p) =>
            p.id === item.id
              ? { ...p, quantity: p.quantity + 1 }
              : p
          ),
        };
      }

      return {
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    })),

  increaseQty: (id) =>
    set((state) => ({
      cart: state.cart.map((p) =>
        p.id === id
          ? { ...p, quantity: p.quantity + 1 }
          : p
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      cart: state.cart
        .map((p) =>
          p.id === id
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter((p) => p.quantity > 0),
    })),

  clearCart: () => set({ cart: [] }),
}));