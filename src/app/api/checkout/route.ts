import Stripe from 'stripe'
import { NextRequest, NextResponse } from 'next/server'

function getStripe() {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not configured')
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-03-25.dahlia',
  })
}

interface CartItemPayload {
  id: string
  title: string
  price: number
  quantity: number
  duration?: string
}

export async function POST(req: NextRequest) {
  try {
    const stripe = getStripe()
    const { items }: { items: CartItemPayload[] } = await req.json()

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'Panier vide' }, { status: 400 })
    }

    const origin = req.headers.get('origin') ?? 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'paypal'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.title,
            description: item.duration ? `Durée : ${item.duration}` : undefined,
          },
          unit_amount: item.price * 100, // centimes
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/cancel`,
      locale: 'fr',
      billing_address_collection: 'required',
      custom_text: {
        submit: {
          message: "Votre paiement sera traité de manière sécurisée. Victor Bourcier vous contactera pour confirmer le rendez-vous.",
        },
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('Stripe error:', err)
    return NextResponse.json({ error: 'Erreur lors de la création du paiement' }, { status: 500 })
  }
}
