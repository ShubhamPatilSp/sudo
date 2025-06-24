import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold">Sudo</span>
            </div>
            <p className="text-gray-400 mb-4">
              The most advanced AI writing assistant for students, writers, and professionals.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/humanizer" className="hover:text-white transition-colors">
                  AI Humanizer
                </Link>
              </li>
              <li>
                <Link href="/detector" className="hover:text-white transition-colors">
                  AI Detector
                </Link>
              </li>
              <li>
                <Link href="/generator" className="hover:text-white transition-colors">
                  Content Generator
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/help" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/api" className="hover:text-white transition-colors">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-white transition-colors">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sudo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
