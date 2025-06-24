import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { QuickActions } from "@/components/dashboard/quick-actions"

export default async function DashboardPage() {
  const session = await getServerSession()

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader user={session.user} />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {session.user?.name?.split(" ")[0] || "User"}!
          </h1>
          <p className="text-gray-600">Here's what's happening with your AI writing assistant today.</p>
        </div>

        <div className="grid gap-8">
          <StatsCards />
          <div className="grid lg:grid-cols-2 gap-8">
            <QuickActions />
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  )
}
