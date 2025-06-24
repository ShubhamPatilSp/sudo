import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Shield, Zap, Plus } from "lucide-react"
import Link from "next/link"

const actions = [
  {
    title: "Humanize Text",
    description: "Transform AI content to human-like text",
    icon: Zap,
    href: "/humanizer",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Detect AI Content",
    description: "Check if content is AI-generated",
    icon: Shield,
    href: "/detector",
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Generate Content",
    description: "Create new content with AI",
    icon: FileText,
    href: "/generator",
    color: "bg-blue-100 text-blue-600",
  },
]

export function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Plus className="w-5 h-5 mr-2" />
          Quick Actions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {actions.map((action, index) => (
          <Link key={index} href={action.href}>
            <div className="flex items-center p-4 rounded-lg border hover:bg-gray-50 transition-colors cursor-pointer">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color} mr-4`}>
                <action.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
