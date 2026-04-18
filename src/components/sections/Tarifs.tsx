import { SectionTitle } from '@/components/ui/Section'
import { SERVICES, PACKS } from '@/lib/constants'
import Button from '@/components/ui/Button'

export default function Tarifs() {
  return (
    <section id="tarifs" className="py-20 px-6 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Prestations et tarifs">
          Tableau des soins
        </SectionTitle>

        {/* Services table */}
        <div className="mb-16">
          <div className="overflow-hidden border-2 border-[#C9A237]/30">
            {/* Table header */}
            <div className="grid grid-cols-3 bg-[#C9A237]/10 border-b-2 border-[#C9A237]/30 px-6 py-3">
              <span className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">Prestation</span>
              <span className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold text-center">Durée</span>
              <span className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold text-right">Tarif</span>
            </div>

            {SERVICES.map((service, i) => (
              <div
                key={service.id}
                className={`grid grid-cols-3 items-center px-6 py-5 transition-colors hover:bg-[#C9A237]/5 ${
                  i < SERVICES.length - 1 ? 'border-b border-[#C9A237]/15' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[#C9A237] text-lg">{service.icon}</span>
                  <span
                    className="text-[#1A1A2E] text-sm font-light italic"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {service.title}
                  </span>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center gap-1 text-[#1A1A2E]/60 text-sm">
                    <span className="text-[#C9A237] text-xs">◷</span>
                    {service.duration}
                  </span>
                </div>
                <div className="text-right">
                  <span
                    className="text-[#C9A237] text-xl font-light"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {service.price} €
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packs */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-[#C9A237]/20" />
            <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">
              Pack découverte · Abonnements possibles
            </p>
            <div className="h-px flex-1 bg-[#C9A237]/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {PACKS.map((pack) => (
              <div
                key={pack.id}
                className="border-2 border-[#C9A237]/40 p-6 hover:border-[#C9A237] transition-colors duration-300 bg-white"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3
                    className="text-lg font-light text-[#1A1A2E] italic"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {pack.title}
                  </h3>
                  <span
                    className="text-2xl font-light text-[#C9A237] ml-4 shrink-0"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {pack.price} €
                  </span>
                </div>
                <p className="text-[#1A1A2E]/55 text-sm leading-relaxed">{pack.description}</p>
                <div className="mt-4 h-px bg-gradient-to-r from-[#C9A237]/50 to-transparent" />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="#contact" variant="primary">
              Réserver une séance
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
