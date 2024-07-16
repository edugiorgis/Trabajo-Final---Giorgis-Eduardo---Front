import { create } from "zustand";

export const useCartStore = create((set) => ({
  isOpen: false,
  products: [],
  actions: {
    openCart: () => set({ isOpen: true }),
    closeCart: () => set({ isOpen: false }),
    addProduct: (product) =>
      set((state) => ({
        products: [...state.products, product],
      })),
    removeProduct: (product) =>
      set((state) => ({
        products: state.products.filter((x) => x.id !== product.id),
      })),
  },
}));
