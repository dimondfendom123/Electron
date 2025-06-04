import { Card, CardContent } from "@/components/ui/card"
import { Star, User } from "lucide-react"

const testimonials = [
  {
    name: "Alex_Gamer2024",
    rating: 5,
    comment:
      "This utility completely changed how I play Roblox! The performance boost is incredible and it's so easy to use.",
  },
  {
    name: "RobloxPro_Sarah",
    rating: 5,
    comment:
      "Been using RobloxX for 6 months now. Never had any issues and the features are amazing. Highly recommend!",
  },
  {
    name: "GameMaster_Jake",
    rating: 5,
    comment: "Finally found a Roblox utility that actually works and is safe. The community is great too!",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What Players Are Saying</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have enhanced their Roblox experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.comment}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-medium">{testimonial.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
