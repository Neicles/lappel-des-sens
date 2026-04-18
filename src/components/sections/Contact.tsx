'use client'

import { SectionTitle } from '@/components/ui/Section'
import { ServicesSection, PacksSection } from '@/components/ui/ServiceSelector'
import CartPanel from '@/components/ui/CartPanel'
import { CONTACT } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Tarifs & Réservation">
          Réserver une séance
        </SectionTitle>

        <p className="text-center text-[#1A1A2E]/55 italic max-w-xl mx-auto -mt-8 mb-14 text-sm leading-relaxed"
          style={{ fontFamily: 'Georgia, serif' }}>
          Sélectionnez vos soins, ajoutez-les au panier, puis contactez Victor.
        </p>

        {/* Row 1 : Soins (left) — vide (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-10">
          <ServicesSection />
          {/* spacer visible uniquement sur desktop */}
          <div className="hidden lg:block" />
        </div>

        {/* Row 2 : Packs (left) — Contact (right, aligné) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <PacksSection />

          {/* Contact info aligné avec les packs */}
          <div className="space-y-5">
            <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">
              Contact
            </p>
            <p className="text-[#1A1A2E]/65 text-sm leading-relaxed italic"
              style={{ fontFamily: 'Georgia, serif' }}>
              Disponible en présentiel et à distance. N&apos;hésitez pas à me contacter pour
              échanger sur votre situation.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[#C9A237] text-xl">◎</span>
                <div>
                  <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-0.5 font-semibold">Téléphone</p>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="text-[#1A1A2E] text-lg hover:text-[#C9A237] transition-colors font-light"
                    style={{ fontFamily: 'Georgia, serif' }}>
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[#C9A237] text-xl">✉</span>
                <div>
                  <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-0.5 font-semibold">Email</p>
                  <a href={`mailto:${CONTACT.email}`}
                    className="text-[#1A1A2E] text-base hover:text-[#C9A237] transition-colors font-light break-all"
                    style={{ fontFamily: 'Georgia, serif' }}>
                    {CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="h-px w-8 bg-[#C9A237]/30" />
              <span className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">Victor Bourcier</span>
              <div className="h-px w-8 bg-[#C9A237]/30" />
            </div>
            <p className="text-[#1A1A2E]/40 text-xs italic" style={{ fontFamily: 'Georgia, serif' }}>
              Praticien en soins énergétiques
            </p>
          </div>
        </div>

        {/* Row 3 : Panier en bas */}
        <div className="border-t-2 border-[#C9A237]/15 pt-12">
          <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold mb-6 text-center">
            Mon panier de réservation
          </p>
          <div className="max-w-2xl mx-auto">
            <CartPanel />
          </div>
        </div>
      </div>
    </section>
  )
}
