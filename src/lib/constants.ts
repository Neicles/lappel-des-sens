import type { Service, ContactInfo, NavLink } from '@/types'

export const SITE_NAME = "L'Appel des Sens"

export const CONTACT: ContactInfo = {
  phone: '07 69 60 55 35',
  email: 'energies.victor@gmail.com',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Contact', href: '#contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'scan',
    title: 'Scan Énergétique',
    description:
      "Évaluation complète de votre champ énergétique pour identifier les blocages et déséquilibres qui affectent votre bien-être.",
    icon: '◈',
  },
  {
    id: 'reiki',
    title: 'Reïki',
    description:
      "Technique de soin par imposition des mains qui canalise l'énergie universelle pour favoriser la guérison naturelle du corps et de l'esprit.",
    icon: '✦',
  },
  {
    id: 'lithotherapie',
    title: 'Lithothérapie',
    description:
      "Utilisation des propriétés vibratoires des pierres et cristaux pour harmoniser les centres énergétiques et soutenir votre équilibre intérieur.",
    icon: '◇',
  },
  {
    id: 'magnetisme',
    title: 'Magnétisme',
    description:
      "Soin énergétique par le magnétisme pour soulager les douleurs, réduire le stress et rétablir la circulation de l'énergie vitale.",
    icon: '⊕',
  },
]
