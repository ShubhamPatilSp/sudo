import { type NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-05-28.basil",
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  try {
    const body = await req.text()
    const signature = req.headers.get("stripe-signature")!

    const event = stripe.webhooks.constructEvent(body, signature, webhookSecret)

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session

        // Handle successful subscription
        console.log("Subscription created:", session.metadata)

        // Here you would:
        // 1. Update user's subscription status in database
        // 2. Grant credits based on plan
        // 3. Send confirmation email

        break

      case "invoice.payment_succeeded":
        const invoice = event.data.object as Stripe.Invoice & { subscription: string }

        // Handle successful payment (monthly renewal)
        console.log("Payment succeeded:", invoice.subscription)

        // Here you would:
        // 1. Refill user's credits
        // 2. Update subscription status

        break

      case "customer.subscription.deleted":
        const subscription = event.data.object as Stripe.Subscription

        // Handle subscription cancellation
        console.log("Subscription canceled:", subscription.id)

        // Here you would:
        // 1. Update user's subscription status
        // 2. Set credits to free tier limits

        break
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json({ error: "Webhook handler failed" }, { status: 400 })
  }
}
