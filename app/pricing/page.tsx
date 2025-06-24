import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import { PricingSection } from "@/components/sections/pricing-section"

export default async function PricingPage() {
  const session = await getServerSession(authOptions)
  
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PricingSection session={session} />
      </main>
      <Footer />
    </div>
  )
}
