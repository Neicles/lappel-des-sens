import { SectionTitle } from '@/components/ui/Section'
import ServiceSelector from '@/components/ui/ServiceSelector'
import CartPanel from '@/components/ui/CartPanel'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Tarifs & Réservation">
          Réserver une séance
        </SectionTitle>

        <p
          className="text-center text-[#1A1A2E]/60 italic max-w-xl mx-auto -mt-8 mb-14 text-sm leading-relaxed"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          Sélectionnez les soins souhaités, ajoutez-les à votre panier, puis contactez Victor directement.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ServiceSelector />
          <CartPanel />
        </div>
      </div>
    </section>
  )
}
