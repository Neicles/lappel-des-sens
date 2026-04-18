import type { ReactNode } from 'react'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  dark?: boolean
}

export default function Section({ id, children, className = '', dark = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 px-6 ${dark ? 'bg-[#1A1A2E] text-white' : 'bg-[#F5F3EE] text-[#1A1A2E]'} ${className}`}
    >
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  )
}

interface SectionTitleProps {
  children: ReactNode
  subtitle?: string
  light?: boolean
}

export function SectionTitle({ children, subtitle, light = false }: SectionTitleProps) {
  return (
    <div className="text-center mb-16">
      <h2
        className={`text-4xl md:text-5xl font-light tracking-wide mb-4 ${light ? 'text-white' : 'text-[#1A1A2E]'}`}
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {children}
      </h2>
      {subtitle && (
        <p className="text-[#C9A237] text-sm tracking-widest uppercase">{subtitle}</p>
      )}
      <div className="flex items-center justify-center gap-3 mt-6">
        <div className="h-px w-16 bg-[#C9A237]" />
        <span className="text-[#C9A237] text-lg">◈</span>
        <div className="h-px w-16 bg-[#C9A237]" />
      </div>
    </div>
  )
}
