import Button from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <polygon points="400,50 750,650 50,650" fill="none" stroke="#C9A237" strokeWidth="2" />
          <polygon points="400,150 650,600 150,600" fill="none" stroke="#C9A237" strokeWidth="1" />
          <polygon points="400,250 550,550 250,550" fill="none" stroke="#C9A237" strokeWidth="1" />
          <circle cx="400" cy="400" r="180" fill="none" stroke="#C9A237" strokeWidth="1" />
          <circle cx="400" cy="400" r="280" fill="none" stroke="#C9A237" strokeWidth="0.8" />
          <line x1="400" y1="0" x2="400" y2="800" stroke="#C9A237" strokeWidth="0.5" />
          <line x1="0" y1="400" x2="800" y2="400" stroke="#C9A237" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo symbol */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-3 text-[#C9A237] text-3xl">
              <span>◈</span>
              <span>◇</span>
              <span>◈</span>
            </div>
            <div className="h-px w-40 bg-gradient-to-r from-transparent via-[#C9A237] to-transparent" />
          </div>
        </div>

        <p className="text-[#C9A237] text-xs tracking-[0.5em] uppercase mb-6 font-semibold">
          Praticien en soins énergétiques
        </p>

        <h1
          className="text-5xl md:text-7xl font-light text-[#1A1A2E] mb-2 leading-tight italic"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          L&apos;Appel
        </h1>
        <h1
          className="text-5xl md:text-7xl font-light mb-2 leading-tight italic"
          style={{ fontFamily: 'Georgia, serif', color: '#C9A237' }}
        >
          des Sens
        </h1>

        <div className="flex items-center justify-center gap-3 my-6">
          <div className="h-px w-16 bg-[#C9A237]" />
          <span className="text-[#C9A237] text-sm">✦</span>
          <div className="h-px w-16 bg-[#C9A237]" />
        </div>

        <p className="text-[#1A1A2E]/70 text-base md:text-lg leading-relaxed mb-4 max-w-xl mx-auto italic"
          style={{ fontFamily: 'Georgia, serif' }}>
          Accompagnement en présentiel et à distance pour la résolution de vos problématiques
          professionnelles, personnelles et affectives.
        </p>

        <p className="text-[#C9A237] text-sm tracking-widest mb-10">
          Scan énergétique · Reïki · Lithothérapie · Magnétisme
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#contact" variant="primary">
            Prendre rendez-vous
          </Button>
          <Button href="#services" variant="outline">
            Découvrir les soins
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12 text-[#1A1A2E]/40 text-sm">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-[#C9A237] transition-colors">
            {CONTACT.phone}
          </a>
          <span className="text-[#C9A237]">◈</span>
          <a href={`mailto:${CONTACT.email}`} className="hover:text-[#C9A237] transition-colors">
            {CONTACT.email}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#C9A237]/50">
        <span className="text-xs tracking-widest uppercase">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A237]/60 to-transparent" />
      </div>
    </section>
  )
}
