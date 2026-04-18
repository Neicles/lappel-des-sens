import Section, { SectionTitle } from '@/components/ui/Section'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <Section id="services" dark>
      <SectionTitle subtitle="Ce que je propose" light>
        Les Soins
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="border border-[#C9A237]/20 p-8 hover:border-[#C9A237]/60 transition-all duration-300 group bg-white/5 hover:bg-white/10"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl text-[#C9A237] group-hover:scale-110 transition-transform duration-300 mt-1">
                {service.icon}
              </span>
              <div>
                <h3
                  className="text-xl font-light text-white mb-3 tracking-wide"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
            <div className="mt-6 h-px bg-gradient-to-r from-[#C9A237]/40 to-transparent" />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-white/40 text-sm tracking-widest uppercase">
          Séances en présentiel · À distance · Sur mesure
        </p>
      </div>
    </Section>
  )
}
