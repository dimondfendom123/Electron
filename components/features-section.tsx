import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Settings, Users, Gamepad2, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Performance Boost",
    description: "Optimize your Roblox games for better FPS and smoother gameplay experience.",
  },
  {
    icon: Shield,
    title: "100% Safe",
    description: "Completely undetectable and safe to use. No risk of account bans or suspensions.",
  },
  {
    icon: Settings,
    title: "Advanced Tools",
    description: "Access powerful utilities including game analysis, script execution, and more.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join thousands of users sharing tips, scripts, and game recommendations.",
  },
  {
    icon: Gamepad2,
    title: "Game Enhancement",
    description: "Unlock hidden features and customize your gaming experience like never before.",
  },
  {
    icon: TrendingUp,
    title: "Regular Updates",
    description: "Constant updates with new features, bug fixes, and compatibility improvements.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {" "}
              Every Player
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to take your Roblox experience to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
