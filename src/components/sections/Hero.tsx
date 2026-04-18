import Button from '@/components/ui/Button'
import { CONTACT } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1A2E]"
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
          <polygon points="400,50 750,650 50,650" fill="none" stroke="#C9A237" strokeWidth="1" />
          <polygon points="400,150 650,600 150,600" fill="none" stroke="#4A7B9D" strokeWidth="0.5" />
          <polygon points="400,250 550,550 250,550" fill="none" stroke="#C9A237" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="180" fill="none" stroke="#C9A237" strokeWidth="0.5" />
          <circle cx="400" cy="400" r="280" fill="none" stroke="#4A7B9D" strokeWidth="0.5" />
          <line x1="400" y1="0" x2="400" y2="800" stroke="#C9A237" strokeWidth="0.3" />
          <line x1="0" y1="400" x2="800" y2="400" stroke="#C9A237" strokeWidth="0.3" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A2E]/80 via-transparent to-[#1A1A2E]" />

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Logo symbol */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-3 text-[#C9A237] text-2xl">
              <span>◈</span>
              <span className="text-[#4A7B9D]">◇</span>
              <span>◈</span>
            </div>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#C9A237] to-transparent" />
          </div>
        </div>

        <p className="text-[#C9A237] text-xs tracking-[0.4em] uppercase mb-4">
          Praticien en soins énergétiques
        </p>

        <h1
          className="text-5xl md:text-7xl font-light text-white mb-2 leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          L&apos;Appel
        </h1>
        <h1
          className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          <span className="text-[#C9A237]">des Sens</span>
        </h1>

        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Accompagnement en présentiel et à distance pour la résolution de vos problématiques
          professionnelles, personnelles et affectives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#contact" variant="primary">
            Prendre rendez-vous
          </Button>
          <Button href="#services" variant="outline">
            Découvrir les soins
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 mt-12 text-white/50 text-sm">
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
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Défiler</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#C9A237]/50 to-transparent" />
      </div>
    </section>
  )
}
