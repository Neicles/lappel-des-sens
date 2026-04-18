'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { CONTACT } from '@/lib/constants'

export default function CartPanel() {
  const { items, removeItem, updateQuantity, clearCart, total, count } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const cartMessage = items
    .map((i) => `${i.quantity}x ${i.title} (${i.price * i.quantity} €)`)
    .join(', ')

  const emailHref = items.length > 0
    ? `mailto:${CONTACT.email}?subject=Demande de réservation — L'Appel des Sens&body=Bonjour Victor,%0A%0AJe souhaite réserver :%0A${encodeURIComponent(cartMessage)}%0A%0ATotal estimé : ${total} €%0A%0ACordialement,`
    : `mailto:${CONTACT.email}`

  async function handleCheckout() {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      } else {
        setError(data.error ?? 'Une erreur est survenue.')
      }
    } catch {
      setError('Impossible de se connecter au serveur de paiement.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="border-2 border-[#C9A237]/30">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#C9A237]/10 border-b border-[#C9A237]/30">
        <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">
          Mon panier {count > 0 && `(${count})`}
        </p>
        {count > 0 && (
          <button
            type="button"
            onClick={clearCart}
            className="text-[#1A1A2E]/40 text-xs hover:text-red-400 transition-colors"
          >
            Vider
          </button>
        )}
      </div>

      {/* Items */}
      {items.length === 0 ? (
        <div className="px-5 py-10 text-center">
          <p className="text-[#C9A237] text-3xl mb-3">◈</p>
          <p className="text-[#1A1A2E]/40 text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>
            Sélectionnez vos soins ci-dessus
          </p>
        </div>
      ) : (
        <div className="divide-y divide-[#C9A237]/10">
          {items.map((item) => (
            <div key={item.id} className="px-5 py-4 flex items-center gap-3">
              <span className="text-[#C9A237] text-lg shrink-0">{item.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[#1A1A2E] text-sm font-light italic leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.title}
                </p>
                {item.duration && (
                  <p className="text-[#1A1A2E]/40 text-xs mt-0.5">◷ {item.duration}</p>
                )}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button type="button" onClick={() => updateQuantity(item.id, -1)}
                  className="w-5 h-5 flex items-center justify-center border border-[#C9A237]/40 text-[#C9A237] hover:bg-[#C9A237]/10 text-xs transition-colors">
                  −
                </button>
                <span className="text-[#1A1A2E] text-sm w-4 text-center">{item.quantity}</span>
                <button type="button" onClick={() => updateQuantity(item.id, 1)}
                  className="w-5 h-5 flex items-center justify-center border border-[#C9A237]/40 text-[#C9A237] hover:bg-[#C9A237]/10 text-xs transition-colors">
                  +
                </button>
              </div>
              <span className="text-[#C9A237] font-light text-sm shrink-0 w-16 text-right" style={{ fontFamily: 'Georgia, serif' }}>
                {item.price * item.quantity} €
              </span>
              <button type="button" onClick={() => removeItem(item.id)}
                className="text-[#1A1A2E]/30 hover:text-red-400 transition-colors text-sm shrink-0"
                aria-label="Supprimer">
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Total + CTA */}
      {items.length > 0 && (
        <>
          <div className="px-5 py-4 border-t-2 border-[#C9A237]/30 bg-[#C9A237]/5 flex items-center justify-between">
            <span className="text-[#1A1A2E] text-xs font-semibold tracking-widest uppercase">Total</span>
            <span className="text-[#C9A237] text-2xl font-light" style={{ fontFamily: 'Georgia, serif' }}>
              {total} €
            </span>
          </div>
          <div className="px-5 pb-5 pt-4 space-y-3">
            {/* Paiement en ligne */}
            <button
              type="button"
              onClick={handleCheckout}
              disabled={loading}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#C9A237] text-[#1A1A2E] hover:bg-[#E8C96A] transition-colors font-semibold tracking-widest uppercase text-xs disabled:opacity-60 disabled:cursor-wait"
            >
              {loading ? (
                <span className="animate-pulse">Chargement...</span>
              ) : (
                <><span>💳</span> Payer en ligne</>
              )}
            </button>

            {error && (
              <p className="text-red-500 text-xs text-center">{error}</p>
            )}

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-[#C9A237]/20" />
              <span className="text-[#1A1A2E]/30 text-xs">ou</span>
              <div className="h-px flex-1 bg-[#C9A237]/20" />
            </div>

            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
              className="flex items-center justify-center gap-2 w-full py-3 border-2 border-[#C9A237] text-[#C9A237] hover:bg-[#C9A237] hover:text-[#1A1A2E] transition-colors font-semibold tracking-widest uppercase text-xs">
              <span>◎</span> Appeler
            </a>
            <a href={emailHref}
              className="flex items-center justify-center gap-2 w-full py-3 border border-[#C9A237]/40 text-[#1A1A2E]/60 hover:border-[#C9A237] hover:text-[#C9A237] transition-colors font-semibold tracking-widest uppercase text-xs">
              <span>✉</span> Envoyer par email
            </a>
          </div>
        </>
      )}
    </div>
  )
}
