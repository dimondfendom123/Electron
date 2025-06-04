import { Button } from "@/components/ui/button"
import { Download, Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">RX</span>
          </div>
          <span className="text-white font-bold text-xl">RobloxX</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="#download" className="text-gray-300 hover:text-white transition-colors">
            Download
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
            Reviews
          </Link>
          <Link href="#support" className="text-gray-300 hover:text-white transition-colors">
            Support
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Download className="w-4 h-4 mr-2" />
            Download Free
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
