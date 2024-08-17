import toast from "react-hot-toast";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useCart = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (data) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex(
          (item) => item.id === data.id
        );
        if (existingItemIndex != -1) {
          // Item already exists in the cart, so increment its quantity
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + 1,
          };
          set({ items: updatedItems });
          toast.success("Item quantity updated");
        } else {
          // Item does not exist in the cart, so add it with an initial quantity of 1
          set({ items: [...get().items, { ...data, quantity: 1 }] });
          toast.success("Item added to cart");
        }
      },
      incrementQty: (id) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        set({ items: updatedItems });
      },
      decrementQty: (id) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) => {
          if (item.id === id) {
            if (item.quantity === 1) {
              toast.error("Item quantity cannot be zero");
              return item; // Return the item without modifying it
            } else {
              return { ...item, quantity: item.quantity - 1 };
            }
          }
          return item;
        });
        set({ items: updatedItems });
      },

      enterQty: (id, number) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) =>
          item.id === id ? { ...item, quantity: number > 0 ? number : 1 } : item
        );
        set({ items: updatedItems });
      },

      removeItem: (id) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("Item removed from cart");
      },
      removeAll: () => set({ items: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
);
