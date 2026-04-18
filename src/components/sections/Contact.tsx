import Button from '@/components/ui/Button'
import { SectionTitle } from '@/components/ui/Section'
import { CONTACT, SERVICES, PACKS } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Tarifs & Réservation">
          Réserver une séance
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Pricing table */}
          <div>
            <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold mb-6">
              Prestations
            </p>
            <div className="border-2 border-[#C9A237]/30 overflow-hidden">
              <div className="grid grid-cols-3 bg-[#C9A237]/10 border-b border-[#C9A237]/30 px-5 py-3">
                <span className="text-[#C9A237] text-xs tracking-wider uppercase font-semibold">Soin</span>
                <span className="text-[#C9A237] text-xs tracking-wider uppercase font-semibold text-center">Durée</span>
                <span className="text-[#C9A237] text-xs tracking-wider uppercase font-semibold text-right">Tarif</span>
              </div>
              {SERVICES.map((service, i) => (
                <div
                  key={service.id}
                  className={`grid grid-cols-3 items-center px-5 py-4 hover:bg-[#C9A237]/5 transition-colors ${
                    i < SERVICES.length - 1 ? 'border-b border-[#C9A237]/15' : ''
                  }`}
                >
                  <div className="flex items-center gap-2 pr-2">
                    <span className="text-[#C9A237] text-base shrink-0">{service.icon}</span>
                    <span
                      className="text-[#1A1A2E] text-sm font-light italic leading-tight"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {service.title}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[#1A1A2E]/55 text-sm">{service.duration}</span>
                  </div>
                  <div className="text-right">
                    <span
                      className="text-[#C9A237] text-lg font-light"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {service.price} €
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Packs */}
            <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold mt-8 mb-4">
              Pack découverte · Abonnements
            </p>
            <div className="space-y-3">
              {PACKS.map((pack) => (
                <div
                  key={pack.id}
                  className="flex items-center justify-between border border-[#C9A237]/30 px-5 py-4 hover:border-[#C9A237] transition-colors bg-[#FAFAF8]"
                >
                  <div>
                    <p
                      className="text-[#1A1A2E] text-sm font-light italic"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {pack.title}
                    </p>
                    <p className="text-[#1A1A2E]/50 text-xs mt-0.5">{pack.description}</p>
                  </div>
                  <span
                    className="text-[#C9A237] text-xl font-light ml-4 shrink-0"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {pack.price} €
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact + CTA */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold mb-6">
                Contact
              </p>
              <p
                className="text-[#1A1A2E]/70 leading-relaxed italic mb-8"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Disponible en présentiel et à distance. N&apos;hésitez pas à me contacter pour
                échanger sur votre situation et trouver la formule adaptée à vos besoins.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <span className="text-[#C9A237] text-xl">◎</span>
                  <div>
                    <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-0.5 font-semibold">Téléphone</p>
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                      className="text-[#1A1A2E] text-lg hover:text-[#C9A237] transition-colors font-light"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#C9A237] text-xl">✉</span>
                  <div>
                    <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-0.5 font-semibold">Email</p>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-[#1A1A2E] text-lg hover:text-[#C9A237] transition-colors font-light break-all"
                      style={{ fontFamily: 'Georgia, serif' }}
                    >
                      {CONTACT.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} variant="primary">
                  Appeler
                </Button>
                <Button href={`mailto:${CONTACT.email}`} variant="outline">
                  Écrire
                </Button>
              </div>
            </div>

            {/* Signature */}
            <div className="border-2 border-[#C9A237]/30 p-6 text-center">
              <div className="text-[#C9A237] text-3xl mb-3">◈</div>
              <p
                className="text-[#1A1A2E] text-lg font-light italic mb-2"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                Première séance
              </p>
              <p
                className="text-[#1A1A2E]/55 text-sm leading-relaxed italic"
                style={{ fontFamily: 'Georgia, serif' }}
              >
                L&apos;occasion de nous rencontrer et de définir ensemble le protocole le plus adapté.
              </p>
              <div className="flex items-center gap-3 justify-center mt-4">
                <div className="h-px w-8 bg-[#C9A237]/40" />
                <span className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">Victor Bourcier</span>
                <div className="h-px w-8 bg-[#C9A237]/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
