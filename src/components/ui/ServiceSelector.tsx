'use client'

import { useCart } from '@/context/CartContext'
import { SERVICES, PACKS } from '@/lib/constants'

export default function ServiceSelector() {
  const { addService, addPack, items } = useCart()

  const isInCart = (id: string) => items.some((i) => i.id === id)

  return (
    <div className="space-y-8">
      {/* Services */}
      <div>
        <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold mb-4">
          Choisissez vos soins
        </p>
        <div className="space-y-3">
          {SERVICES.map((service) => {
            const inCart = isInCart(service.id)
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => addService(service)}
                className={`w-full text-left border-2 px-5 py-4 transition-all duration-200 group ${
                  inCart
                    ? 'border-[#C9A237] bg-[#C9A237]/5'
                    : 'border-[#C9A237]/25 hover:border-[#C9A237]/70 bg-white hover:bg-[#C9A237]/5'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[#C9A237] text-xl shrink-0">{service.icon}</span>
                    <div className="min-w-0">
                      <p
                        className="text-[#1A1A2E] text-sm font-light italic leading-tight truncate"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {service.title}
                      </p>
                      <p className="text-[#1A1A2E]/45 text-xs mt-0.5">◷ {service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className="text-[#C9A237] font-light text-base"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {service.price} €
                    </span>
                    <span
                      className={`w-6 h-6 flex items-center justify-center border text-sm font-bold transition-all ${
                        inCart
                          ? 'border-[#C9A237] bg-[#C9A237] text-white'
                          : 'border-[#C9A237]/40 text-[#C9A237] group-hover:border-[#C9A237]'
                      }`}
                    >
                      {inCart ? '✓' : '+'}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Packs */}
      <div>
        <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold mb-4">
          Packs & Abonnements
        </p>
        <div className="space-y-3">
          {PACKS.map((pack) => {
            const inCart = isInCart(pack.id)
            return (
              <button
                key={pack.id}
                type="button"
                onClick={() => addPack(pack)}
                className={`w-full text-left border-2 px-5 py-4 transition-all duration-200 group ${
                  inCart
                    ? 'border-[#C9A237] bg-[#C9A237]/5'
                    : 'border-[#C9A237]/25 hover:border-[#C9A237]/70 bg-white hover:bg-[#C9A237]/5'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-[#C9A237] text-xl shrink-0">✦</span>
                    <div className="min-w-0">
                      <p
                        className="text-[#1A1A2E] text-sm font-light italic leading-tight"
                        style={{ fontFamily: 'Georgia, serif' }}
                      >
                        {pack.title}
                      </p>
                      <p className="text-[#1A1A2E]/45 text-xs mt-0.5">{pack.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className="text-[#C9A237] font-light text-base"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {pack.price} €
                    </span>
                    <span
                      className={`w-6 h-6 flex items-center justify-center border text-sm font-bold transition-all ${
                        inCart
                          ? 'border-[#C9A237] bg-[#C9A237] text-white'
                          : 'border-[#C9A237]/40 text-[#C9A237] group-hover:border-[#C9A237]'
                      }`}
                    >
                      {inCart ? '✓' : '+'}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
