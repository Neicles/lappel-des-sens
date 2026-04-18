'use client'

import { useCart } from '@/context/CartContext'
import { CONTACT } from '@/lib/constants'

export default function CartPanel() {
  const { items, removeItem, updateQuantity, clearCart, total, count } = useCart()

  const cartMessage = items
    .map((i) => `${i.quantity}x ${i.title} (${i.price * i.quantity} €)`)
    .join(', ')

  const phoneHref = `tel:${CONTACT.phone.replace(/\s/g, '')}`
  const emailHref = items.length > 0
    ? `mailto:${CONTACT.email}?subject=Demande de réservation — L'Appel des Sens&body=Bonjour Victor,%0A%0AJe souhaite réserver :%0A${encodeURIComponent(cartMessage)}%0A%0ATotal estimé : ${total} €%0A%0ACordialement,`
    : `mailto:${CONTACT.email}`

  return (
    <div className="flex flex-col gap-6">
      {/* Cart */}
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
            <p
              className="text-[#1A1A2E]/40 text-sm italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Sélectionnez vos soins à gauche
            </p>
          </div>
        ) : (
          <div className="divide-y divide-[#C9A237]/10">
            {items.map((item) => (
              <div key={item.id} className="px-5 py-4 flex items-center gap-3">
                <span className="text-[#C9A237] text-lg shrink-0">{item.icon}</span>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[#1A1A2E] text-sm font-light italic leading-tight"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {item.title}
                  </p>
                  {item.duration && (
                    <p className="text-[#1A1A2E]/40 text-xs mt-0.5">◷ {item.duration}</p>
                  )}
                </div>
                {/* Quantity controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-5 h-5 flex items-center justify-center border border-[#C9A237]/40 text-[#C9A237] hover:bg-[#C9A237]/10 text-xs transition-colors"
                  >
                    −
                  </button>
                  <span className="text-[#1A1A2E] text-sm w-4 text-center">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-5 h-5 flex items-center justify-center border border-[#C9A237]/40 text-[#C9A237] hover:bg-[#C9A237]/10 text-xs transition-colors"
                  >
                    +
                  </button>
                </div>
                <span
                  className="text-[#C9A237] font-light text-sm shrink-0 w-16 text-right"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {item.price * item.quantity} €
                </span>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-[#1A1A2E]/30 hover:text-red-400 transition-colors text-sm shrink-0"
                  aria-label="Supprimer"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Total */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t-2 border-[#C9A237]/30 bg-[#C9A237]/5 flex items-center justify-between">
            <span className="text-[#1A1A2E] text-sm font-semibold tracking-wide uppercase text-xs">
              Total estimé
            </span>
            <span
              className="text-[#C9A237] text-2xl font-light"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              {total} €
            </span>
          </div>
        )}
      </div>

      {/* Contact CTA */}
      <div className="space-y-3">
        <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">
          {items.length > 0 ? 'Confirmer votre sélection' : 'Contact'}
        </p>

        <a
          href={phoneHref}
          className="flex items-center gap-3 w-full px-5 py-4 bg-[#C9A237] text-[#1A1A2E] hover:bg-[#E8C96A] transition-colors duration-200 font-semibold tracking-widest uppercase text-sm"
        >
          <span>◎</span>
          <span>Appeler — {CONTACT.phone}</span>
        </a>

        <a
          href={emailHref}
          className="flex items-center gap-3 w-full px-5 py-4 border-2 border-[#C9A237] text-[#C9A237] hover:bg-[#C9A237] hover:text-[#1A1A2E] transition-colors duration-200 font-semibold tracking-widest uppercase text-sm"
        >
          <span>✉</span>
          <span>{items.length > 0 ? 'Envoyer ma sélection' : 'Écrire un email'}</span>
        </a>

        {items.length > 0 && (
          <p
            className="text-[#1A1A2E]/40 text-xs text-center italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            L&apos;email sera pré-rempli avec votre sélection
          </p>
        )}
      </div>

      {/* Signature */}
      <div className="border border-[#C9A237]/20 px-5 py-4 text-center">
        <div className="flex items-center gap-3 justify-center">
          <div className="h-px w-8 bg-[#C9A237]/30" />
          <span className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">
            Victor Bourcier
          </span>
          <div className="h-px w-8 bg-[#C9A237]/30" />
        </div>
        <p
          className="text-[#1A1A2E]/45 text-xs mt-2 italic"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Praticien en soins énergétiques
        </p>
      </div>
    </div>
  )
}
