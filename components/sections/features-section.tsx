import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Zap, FileText, Download } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "AI Content Detector",
    description: "Detect AI-generated content with high accuracy using advanced machine learning algorithms.",
    action: "Try Now",
  },
  {
    icon: Zap,
    title: "AI Humanizer & Paraphraser",
    description: "Transform AI text into natural, human-like content that bypasses detection tools.",
    action: "Humanize Now",
  },
  {
    icon: FileText,
    title: "AI Content Writer",
    description: "Generate high-quality essays, articles, and content for any topic or purpose.",
    action: "Write Now",
  },
  {
    icon: Download,
    title: "Quick Export",
    description: "Export your content in multiple formats including PDF, Word, and plain text.",
    action: "Export Now",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your <span className="text-primary">All-in-One</span> Smart Writing Assistant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, detect, and humanize AI content in one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-orange-100">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full border-orange-200 hover:bg-orange-50">
                  {feature.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
