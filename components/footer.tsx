import { Button } from "@/components/ui/button"
import { Github, Twitter, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="support" className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">RX</span>
              </div>
              <span className="text-white font-bold text-xl">RobloxX</span>
            </div>
            <p className="text-gray-400 mb-4">The ultimate Roblox utility for enhanced gaming experience.</p>
            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                <Github className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <div className="space-y-2">
              <Link href="#features" className="block text-gray-400 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#download" className="block text-gray-400 hover:text-white transition-colors">
                Download
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Changelog
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Roadmap
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Documentation
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Discord
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="block text-gray-400 hover:text-white transition-colors">
                DMCA
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 RobloxX. All rights reserved. Not affiliated with Roblox Corporation.</p>
        </div>
      </div>
    </footer>
  )
}
