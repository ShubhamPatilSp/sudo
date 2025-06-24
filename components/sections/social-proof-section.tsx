import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Graduate Student",
    content:
      "This tool saved my academic career! The humanized content passes all AI detectors while maintaining quality.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Mike Chen",
    role: "Content Writer",
    content: "Amazing results! My clients love the natural-sounding content. It's like having a professional editor.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Davis",
    role: "Marketing Manager",
    content: "The AI detector feature helps us ensure our content is original. Highly recommend for any content team.",
    rating: 5,
    avatar: "ED",
  },
  {
    name: "Alex Rodriguez",
    role: "Freelance Writer",
    content: "Incredible tool! The content generator creates high-quality drafts that I can easily customize.",
    rating: 5,
    avatar: "AR",
  },
]

export function SocialProofSection() {
  return (
    <section className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-primary mr-2" />
            <span className="text-6xl font-bold text-gray-900">5,000,000+</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Students and writers use Sudo</h2>
          <p className="text-xl text-gray-600 mb-8">Join millions of users who trust our AI-powered writing tools</p>
          <Button size="lg" className="px-8 py-3 text-lg">
            Start Writing Today
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-sm">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
