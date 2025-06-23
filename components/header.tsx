"use client"

import { Search, Heart, ShoppingCart, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#" className="text-lg font-medium">
                  NOVIDADES
                </a>
                <a href="#" className="text-lg font-medium">
                  FAQ
                </a>
                <a href="#" className="text-lg font-medium">
                  OFERTAS
                </a>
                <a href="#" className="text-lg font-medium">
                  SALE
                </a>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Left navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              NOVIDADES
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              FAQ
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              OFERTAS
            </a>
            <a href="#" className="text-sm font-medium hover:text-gray-600">
              SALE
            </a>
          </nav>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OP6elQeyjyhzAryaMKqJKK5Fmtmq2u.png"
              alt="Raccoon Logo"
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold">RACCOON</span>
          </div>

          {/* Right navigation */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <a href="#" className="hover:text-gray-600">
                ENTRAR
              </a>
              <a href="#" className="hover:text-gray-600">
                LISTA DE DESEJOS
              </a>
              <a href="#" className="hover:text-gray-600">
                CARRINHO (0)
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
