import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        const { items } = get()
        const existingItem = items.find(item => 
          item.id === product.id && 
          (!product.variantId || item.variantId === product.variantId)
        )
        
        if (existingItem) {
          set({
            items: items.map(item =>
              item.id === product.id && 
              (!product.variantId || item.variantId === product.variantId)
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          })
        } else {
          set({ items: [...items, { ...product, quantity: 1 }] })
        }
      },
      
      removeItem: (productId, variantId) => {
        set({
          items: get().items.filter(item => 
            !(item.id === productId && 
              (!variantId || item.variantId === variantId))
          )
        })
      },
      
      updateQuantity: (productId, quantity, variantId) => {
        if (quantity <= 0) {
          get().removeItem(productId, variantId)
          return
        }
        set({
          items: get().items.map(item =>
            item.id === productId && 
            (!variantId || item.variantId === variantId)
              ? { ...item, quantity }
              : item
          )
        })
      },
      
      clearCart: () => set({ items: [] }),
      
      getTotal: () => {
        return get().items.reduce((total, item) => total + (item.price * item.quantity), 0)
      },
      
      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      }
    }),
    {
      name: 'cart-storage',
    }
  )
)
