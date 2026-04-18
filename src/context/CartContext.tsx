'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Service, Pack } from '@/types'

export type CartItemType = 'service' | 'pack'

export interface CartItem {
  id: string
  type: CartItemType
  title: string
  duration?: string
  price: number
  quantity: number
  icon: string
}

interface CartContextValue {
  items: CartItem[]
  addService: (service: Service) => void
  addPack: (pack: Pack) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, delta: number) => void
  clearCart: () => void
  total: number
  count: number
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addService = useCallback((service: Service) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === service.id)
      if (existing) {
        return prev.map((i) =>
          i.id === service.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [
        ...prev,
        {
          id: service.id,
          type: 'service',
          title: service.title,
          duration: service.duration,
          price: service.price,
          quantity: 1,
          icon: service.icon,
        },
      ]
    })
  }, [])

  const addPack = useCallback((pack: Pack) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === pack.id)
      if (existing) {
        return prev.map((i) =>
          i.id === pack.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [
        ...prev,
        {
          id: pack.id,
          type: 'pack',
          title: pack.title,
          price: pack.price,
          quantity: 1,
          icon: '✦',
        },
      ]
    })
  }, [])

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const updateQuantity = useCallback((id: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    )
  }, [])

  const clearCart = useCallback(() => setItems([]), [])

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addService, addPack, removeItem, updateQuantity, clearCart, total, count }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used inside CartProvider')
  return ctx
}
