import { SITE_NAME, CONTACT, NAV_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-[#0F0F1E] text-white/60 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <p
              className="text-white text-lg font-light tracking-widest mb-3"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              <span className="text-[#C9A237]">L&apos;</span>Appel des Sens
            </p>
            <p className="text-sm leading-relaxed">
              Praticien en soins énergétiques — accompagnement en présentiel et à distance.
            </p>
          </div>

          <div>
            <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-4">Navigation</p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#C9A237] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[#C9A237] text-xs tracking-widest uppercase mb-4">Contact</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:text-[#C9A237] transition-colors">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-[#C9A237] transition-colors">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs">
            © {new Date().getFullYear()} {SITE_NAME} — Victor Bourcier
          </p>
          <p className="text-xs">Tous droits réservés</p>
        </div>
      </div>
    </footer>
  )
}
