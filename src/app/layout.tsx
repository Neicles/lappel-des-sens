import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CartProvider } from '@/context/CartContext'

export const metadata: Metadata = {
  title: "L'Appel des Sens — Victor Bourcier",
  description:
    "Praticien en soins énergétiques (magnétisme) — Scan énergétique, Reïki, Lithothérapie, Magnétisme. Séances en présentiel et à distance.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
