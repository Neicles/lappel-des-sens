import Section, { SectionTitle } from '@/components/ui/Section'

export default function About() {
  return (
    <Section id="apropos">
      <SectionTitle subtitle="Mon approche">
        Victor Boursier
      </SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Geometric decorative element */}
        <div className="flex justify-center">
          <div className="relative w-64 h-64">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {/* Outer triangle */}
              <polygon
                points="100,10 190,170 10,170"
                fill="none"
                stroke="#C9A237"
                strokeWidth="1.5"
              />
              {/* Inner triangle */}
              <polygon
                points="100,50 160,150 40,150"
                fill="none"
                stroke="#4A7B9D"
                strokeWidth="1"
              />
              {/* Center chalice symbol */}
              <rect x="88" y="95" width="24" height="4" fill="#C9A237" />
              <polygon points="100,70 116,95 84,95" fill="none" stroke="#C9A237" strokeWidth="1.5" />
              <ellipse cx="100" cy="130" rx="14" ry="8" fill="none" stroke="#C9A237" strokeWidth="1.5" />
              <line x1="100" y1="99" x2="100" y2="122" stroke="#C9A237" strokeWidth="1.5" />
              {/* Infinity at base */}
              <path
                d="M 80,155 Q 87,148 100,155 Q 113,162 120,155 Q 127,148 120,141 Q 113,134 100,141 Q 87,148 80,141 Q 73,134 80,141"
                fill="none"
                stroke="#4A7B9D"
                strokeWidth="1.2"
              />
              {/* Radial lines at top */}
              {[...Array(7)].map((_, i) => {
                const angle = (-90 + (i - 3) * 12) * (Math.PI / 180)
                return (
                  <line
                    key={i}
                    x1={100 + 20 * Math.cos(angle)}
                    y1={10 + 20 * Math.sin(angle)}
                    x2={100 + 35 * Math.cos(angle)}
                    y2={10 + 35 * Math.sin(angle)}
                    stroke="#C9A237"
                    strokeWidth="0.8"
                  />
                )
              })}
            </svg>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-[#1A1A2E]/80 text-base leading-relaxed">
            Praticien en soins énergétiques spécialisé dans le magnétisme, j&apos;accompagne mes
            clients dans la résolution de leurs problématiques de vie grâce à des techniques
            énergétiques et de rééquilibrage.
          </p>
          <p className="text-[#1A1A2E]/80 text-base leading-relaxed">
            Chaque séance est une invitation à retrouver votre équilibre naturel — que ce soit pour
            apaiser des douleurs physiques, surmonter des blocages émotionnels ou harmoniser votre
            énergie vitale.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            {[
              { value: 'Présentiel', label: 'Séances en cabinet' },
              { value: 'Distance', label: 'Séances à distance' },
              { value: 'Pro & Perso', label: 'Problématiques variées' },
              { value: 'Sur mesure', label: 'Approche personnalisée' },
            ].map((item) => (
              <div key={item.value} className="border-l-2 border-[#C9A237] pl-4">
                <p className="text-[#C9A237] font-semibold text-sm">{item.value}</p>
                <p className="text-[#1A1A2E]/60 text-xs mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
