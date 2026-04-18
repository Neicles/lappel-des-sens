import Button from '@/components/ui/Button'
import { SectionTitle } from '@/components/ui/Section'
import { CONTACT } from '@/lib/constants'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Prenons contact">
          Réserver une séance
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <p
              className="text-[#1A1A2E]/70 leading-relaxed italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Disponible en présentiel et à distance. N&apos;hésitez pas à me contacter pour
              échanger sur votre situation et trouver la formule adaptée à vos besoins.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-[#C9A237] text-xl mt-0.5">◎</span>
                <div>
                  <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-1 font-semibold">Téléphone</p>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                    className="text-[#1A1A2E] text-lg hover:text-[#C9A237] transition-colors font-light"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-[#C9A237] text-xl mt-0.5">✉</span>
                <div>
                  <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-1 font-semibold">Email</p>
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

            <div className="flex gap-4 pt-2">
              <Button href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} variant="primary">
                Appeler
              </Button>
              <Button href={`mailto:${CONTACT.email}`} variant="outline">
                Écrire
              </Button>
            </div>
          </div>

          {/* Decorative panel */}
          <div className="border-2 border-[#C9A237]/40 p-8 flex flex-col justify-center items-center text-center gap-6 hover:border-[#C9A237] transition-colors duration-300">
            <div className="text-[#C9A237] text-5xl">◈</div>
            <div className="h-px w-16 bg-[#C9A237]/40" />
            <h3
              className="text-[#1A1A2E] text-2xl font-light tracking-wide italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Première séance
            </h3>
            <p
              className="text-[#1A1A2E]/60 text-sm leading-relaxed max-w-xs italic"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              La première séance est l&apos;occasion de nous rencontrer, de comprendre vos besoins
              et de définir ensemble le protocole de soin le plus adapté.
            </p>
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-[#C9A237]/40" />
              <span className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">Victor Boursier</span>
              <div className="h-px w-10 bg-[#C9A237]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
