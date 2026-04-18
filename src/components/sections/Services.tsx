import { SectionTitle } from '@/components/ui/Section'
import { SERVICES } from '@/lib/constants'

export default function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionTitle subtitle="Ce que je propose">
          Les Soins
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="border-2 border-[#C9A237]/30 p-8 hover:border-[#C9A237] transition-all duration-300 group bg-white hover:shadow-lg hover:shadow-[#C9A237]/10"
            >
              <div className="flex items-start gap-5">
                <span className="text-4xl text-[#C9A237] group-hover:scale-110 transition-transform duration-300 mt-1">
                  {service.icon}
                </span>
                <div>
                  <h3
                    className="text-xl font-light text-[#1A1A2E] mb-3 tracking-wide italic"
                    style={{ fontFamily: 'Georgia, serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#1A1A2E]/65 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              <div className="mt-6 h-px bg-gradient-to-r from-[#C9A237]/60 via-[#C9A237]/20 to-transparent" />
              <div className="mt-3 flex items-center gap-2">
                <span className="text-[#C9A237] text-xs">✦</span>
                <span className="text-[#C9A237]/50 text-xs tracking-widest uppercase">Soin énergétique</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4">
            <div className="h-px w-12 bg-[#C9A237]/40" />
            <p className="text-[#C9A237] text-sm tracking-widest uppercase font-semibold">
              Présentiel · Distance · Sur mesure
            </p>
            <div className="h-px w-12 bg-[#C9A237]/40" />
          </div>
        </div>
      </div>
    </section>
  )
}
