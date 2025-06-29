import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Zap, Shield, TrendingUp } from "lucide-react"

const stats = [
  {
    title: "Total Processed",
    value: "1,234",
    change: "+12%",
    icon: FileText,
    color: "text-blue-600",
  },
  {
    title: "Humanized Texts",
    value: "856",
    change: "+8%",
    icon: Zap,
    color: "text-green-600",
  },
  {
    title: "AI Detections",
    value: "234",
    change: "+15%",
    icon: Shield,
    color: "text-orange-600",
  },
  {
    title: "Credits Used",
    value: "415",
    change: "+5%",
    icon: TrendingUp,
    color: "text-purple-600",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
            <stat.icon className={`h-4 w-4 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-xs text-green-600 mt-1">{stat.change} from last month</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
