import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, CheckCircle, ComputerIcon as Windows, Apple } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download RobloxX now and join thousands of players enhancing their Roblox experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-white/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Download RobloxX</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Free forever</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">No registration required</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">Instant setup</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300">24/7 support</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 flex-1">
                      <Windows className="w-4 h-4 mr-2" />
                      Download for Windows
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 flex-1">
                      <Apple className="w-4 h-4 mr-2" />
                      Download for Mac
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <Download className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300 text-sm">
                      Latest Version: v2.1.0
                      <br />
                      Size: 15.2 MB
                      <br />
                      Updated: Today
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
