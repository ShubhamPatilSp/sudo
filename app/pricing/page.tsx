import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PricingSection } from "@/components/sections/pricing-section"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
