import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, FileText, Shield, Zap } from "lucide-react"

const activities = [
  {
    type: "humanize",
    title: "Humanized essay content",
    time: "2 minutes ago",
    status: "completed",
    icon: Zap,
  },
  {
    type: "detect",
    title: "AI detection scan",
    time: "15 minutes ago",
    status: "completed",
    icon: Shield,
  },
  {
    type: "generate",
    title: "Generated blog post",
    time: "1 hour ago",
    status: "completed",
    icon: FileText,
  },
  {
    type: "humanize",
    title: "Humanized research paper",
    time: "3 hours ago",
    status: "completed",
    icon: Zap,
  },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
                <activity.icon className="w-4 h-4 text-gray-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.time}</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              {activity.status}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
