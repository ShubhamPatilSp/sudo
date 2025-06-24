"use client"

import Link from "next/link"
import { UserMenu } from "@/components/ui/user-menu"
import { Badge } from "@/components/ui/badge"
import { Coins } from "lucide-react"

interface DashboardHeaderProps {
  user: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  // This would come from your database
  const userCredits = 85
  const userPlan = "Pro"

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sudo</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/dashboard" className="text-gray-700 hover:text-primary transition-colors">
              Dashboard
            </Link>
            <Link href="/humanizer" className="text-gray-700 hover:text-primary transition-colors">
              Humanizer
            </Link>
            <Link href="/detector" className="text-gray-700 hover:text-primary transition-colors">
              Detector
            </Link>
            <Link href="/generator" className="text-gray-700 hover:text-primary transition-colors">
              Generator
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                {userPlan}
              </Badge>
              <div className="flex items-center space-x-1 text-sm text-gray-600">
                <Coins className="w-4 h-4" />
                <span>{userCredits} credits</span>
              </div>
            </div>
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </header>
  )
}
