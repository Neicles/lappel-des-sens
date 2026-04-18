import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-md text-center space-y-8">
        <div className="text-[#C9A237] text-6xl">◈</div>

        <div>
          <h1
            className="text-4xl font-light text-[#1A1A2E] italic mb-4"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Merci pour votre réservation
          </h1>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-[#C9A237]" />
            <span className="text-[#C9A237]">✦</span>
            <div className="h-px w-12 bg-[#C9A237]" />
          </div>
          <p
            className="text-[#1A1A2E]/65 leading-relaxed italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Votre paiement a bien été reçu. Victor Bourcier vous contactera
            dans les plus brefs délais pour confirmer votre rendez-vous.
          </p>
        </div>

        <div className="border-2 border-[#C9A237]/30 p-6 space-y-2">
          <p className="text-[#C9A237] text-xs tracking-widest uppercase font-semibold">
            Un email de confirmation
          </p>
          <p className="text-[#1A1A2E]/55 text-sm italic" style={{ fontFamily: 'Georgia, serif' }}>
            vous a été envoyé avec les détails de votre séance.
          </p>
        </div>

        <Link
          href="/#accueil"
          className="inline-block px-8 py-3 bg-[#C9A237] text-[#1A1A2E] font-semibold tracking-widest uppercase text-sm hover:bg-[#E8C96A] transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
