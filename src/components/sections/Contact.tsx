import Section, { SectionTitle } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'

export default function Contact() {
  return (
    <Section id="contact" dark>
      <SectionTitle subtitle="Prenons contact" light>
        Réserver une séance
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact info */}
        <div className="space-y-8">
          <p className="text-white/70 leading-relaxed">
            Disponible en présentiel et à distance. N&apos;hésitez pas à me contacter pour
            échanger sur votre situation et trouver la formule adaptée à vos besoins.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-[#C9A237] text-xl mt-0.5">◎</span>
              <div>
                <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-1">Téléphone</p>
                <a
                  href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                  className="text-white text-lg hover:text-[#C9A237] transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-[#C9A237] text-xl mt-0.5">✉</span>
              <div>
                <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-1">Email</p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-white text-lg hover:text-[#C9A237] transition-colors break-all"
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
        <div className="border border-[#C9A237]/20 p-8 flex flex-col justify-center items-center text-center gap-6 bg-white/5">
          <div className="text-[#C9A237] text-4xl">◈</div>
          <h3
            className="text-white text-xl font-light tracking-wide"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Première séance
          </h3>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            La première séance est l&apos;occasion de nous rencontrer, de comprendre vos besoins
            et de définir ensemble le protocole de soin le plus adapté.
          </p>
          <div className="flex items-center gap-3 text-[#C9A237]/60">
            <div className="h-px w-12 bg-[#C9A237]/40" />
            <span className="text-xs tracking-widest uppercase">Victor Boursier</span>
            <div className="h-px w-12 bg-[#C9A237]/40" />
          </div>
        </div>
      </div>
    </Section>
  )
}
