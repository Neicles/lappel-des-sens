export interface Service {
  id: string
  title: string
  description: string
  icon: string
  duration: string
  price: number
}

export interface Pack {
  id: string
  title: string
  description: string
  price: number
}

export interface ContactInfo {
  phone: string
  email: string
}

export interface NavLink {
  label: string
  href: string
}
