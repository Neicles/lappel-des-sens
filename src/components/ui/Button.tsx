import type { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'outline'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'inline-block px-8 py-3 font-semibold tracking-widest uppercase text-sm transition-all duration-300 cursor-pointer'
  const variants = {
    primary:
      'bg-[#C9A237] text-[#1A1A2E] hover:bg-[#E8C96A] shadow-md hover:shadow-lg',
    outline:
      'border-2 border-[#C9A237] text-[#C9A237] hover:bg-[#C9A237] hover:text-[#1A1A2E]',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  )
}
