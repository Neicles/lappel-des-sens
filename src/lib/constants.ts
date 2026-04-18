import type { Service, Pack, ContactInfo, NavLink } from '@/types'

export const SITE_NAME = "L'Appel des Sens"

export const CONTACT: ContactInfo = {
  phone: '07 69 60 55 35',
  email: 'energies.victor@gmail.com',
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Services', href: '#services' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Tarifs & Réservation', href: '#contact' },
]

export const SERVICES: Service[] = [
  {
    id: 'magnetisme',
    title: 'Magnétisme / Rééquilibrage énergétique',
    description:
      "Soin énergétique par le magnétisme pour soulager les douleurs, réduire le stress et rétablir la circulation de l'énergie vitale.",
    icon: '⊕',
    duration: '1h',
    price: 60,
  },
  {
    id: 'scan',
    title: 'Scanner énergétique + analyse',
    description:
      "Évaluation complète de votre champ énergétique pour identifier les blocages et déséquilibres, suivie d'une analyse détaillée.",
    icon: '◈',
    duration: '1h',
    price: 120,
  },
  {
    id: 'soins-specifiques',
    title: 'Soins spécifiques',
    description:
      "Soins ciblés pour des problématiques précises : coupe feu, verrues, et autres affections nécessitant une intervention énergétique spécifique.",
    icon: '✦',
    duration: '1h',
    price: 50,
  },
  {
    id: 'lithotherapie',
    title: 'Lithothérapie',
    description:
      "Utilisation des propriétés vibratoires des pierres et cristaux pour harmoniser les centres énergétiques et soutenir votre équilibre intérieur.",
    icon: '◇',
    duration: '1h30',
    price: 70,
  },
  {
    id: 'passeur-ame',
    title: "Accompagnement passeur d'âme",
    description:
      "Accompagnement doux et bienveillant pour traverser les transitions de vie, les deuils ou les moments de transformation profonde.",
    icon: '◉',
    duration: '1h',
    price: 70,
  },
]

export const PACKS: Pack[] = [
  {
    id: 'pack-magnetisme',
    title: '3 séances magnétisme',
    description: 'Idéal pour un suivi en profondeur et des résultats durables.',
    price: 160,
  },
  {
    id: 'pack-scanner',
    title: 'Scanner + magnétisme',
    description: 'Commencez par un bilan complet suivi d\'une séance de soin.',
    price: 170,
  },
]
