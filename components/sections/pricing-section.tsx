"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Zap } from "lucide-react"
import { useSession, signIn } from "next-auth/react"

const plans = [
  {
    name: "Free",
    price: 0,
    credits: 10,
    features: ["10 monthly credits", "Basic AI humanizer", "AI content detector", "Standard support"],
    popular: false,
  },
  {
    name: "Pro",
    price: 9.99,
    credits: 100,
    features: [
      "100 monthly credits",
      "Advanced AI humanizer",
      "AI content detector",
      "Content generator",
      "Priority support",
      "Export options",
    ],
    popular: true,
  },
  {
    name: "Unlimited",
    price: 19.99,
    credits: 1000,
    features: [
      "1000 monthly credits",
      "All Pro features",
      "Bulk processing",
      "API access",
      "Custom integrations",
      "24/7 support",
    ],
    popular: false,
  },
]

interface PricingSectionProps {
  session: any
}

export function PricingSection({ session }: PricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false)

  const handleSubscribe = async (planName: string, price: number) => {
    if (!session) {
      signIn()
      return
    }

    // Here you would integrate with Stripe
    try {
      const response = await fetch("/api/stripe/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          planName,
          price: isAnnual ? price * 10 : price, // 2 months free for annual
          interval: isAnnual ? "year" : "month",
        }),
      })

      const { url } = await response.json()
      window.location.href = url
    } catch (error) {
      console.error("Error creating checkout session:", error)
    }
  }

  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-primary">Plan</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">Get started with our AI-powered writing tools today</p>

          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`${!isAnnual ? "text-gray-900 font-semibold" : "text-gray-600"}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? "bg-primary" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`${isAnnual ? "text-gray-900 font-semibold" : "text-gray-600"}`}>Annual</span>
            {isAnnual && <Badge className="bg-green-100 text-green-800">Save 20%</Badge>}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? "border-primary border-2 shadow-xl" : "border-orange-100"}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    <Zap className="w-4 h-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ${isAnnual ? (plan.price * 10).toFixed(2) : plan.price.toFixed(2)}
                  </span>
                  <span className="text-gray-600">/{isAnnual ? "year" : "month"}</span>
                </div>
                <p className="text-gray-600">
                  {plan.credits} credits per {isAnnual ? "year" : "month"}
                </p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleSubscribe(plan.name, plan.price)}
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : "bg-gray-900 hover:bg-gray-800"
                  }`}
                  size="lg"
                >
                  {plan.price === 0 ? "Get Started Free" : "Subscribe Now"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">All plans include a 7-day free trial. Cancel anytime.</p>
          <p className="text-sm text-gray-500">
            Need a custom plan?{" "}
            <a href="/contact" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
