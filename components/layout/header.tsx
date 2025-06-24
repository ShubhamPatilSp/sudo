"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession, signIn } from "next-auth/react"
import { UserMenu } from "@/components/ui/user-menu"

export function Header() {
  const { data: session, status } = useSession()

  return (
    <header className="gradient-bg border-b border-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Sudo</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {status === "loading" ? (
              <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse" />
            ) : session ? (
              <UserMenu user={session.user} />
            ) : (
              <>
                <Button variant="ghost" onClick={() => signIn()}>
                  Sign In
                </Button>
                <Button onClick={() => signIn()}>Get Started</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
