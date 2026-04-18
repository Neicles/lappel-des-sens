import Link from 'next/link'

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-8">
        <div className="text-[#C9A237]/50 text-6xl">◇</div>

        <div>
          <h1
            className="text-4xl font-light text-[#1A1A2E] italic mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Paiement annulé
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#C9A237]/40" />
            <span className="text-[#C9A237]/40">✦</span>
            <div className="h-px w-12 bg-[#C9A237]/40" />
          </div>
          <p
            className="text-[#1A1A2E]/65 leading-relaxed italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Votre paiement a été annulé. Votre panier a été conservé —
            vous pouvez reprendre votre réservation à tout moment.
          </p>
        </div>

        <Link
          href="/#contact"
          className="inline-block px-8 py-3 bg-[#C9A237] text-[#1A1A2E] font-semibold tracking-widest uppercase text-sm hover:bg-[#E8C96A] transition-colors"
        >
          Retour au panier
        </Link>
      </div>
    </div>
  )
}
