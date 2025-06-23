"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-200 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
          <div className="absolute top-20 -right-10 w-16 h-16 bg-blue-500 rounded-full opacity-80"></div>
          <div className="absolute -bottom-5 left-1/4 w-12 h-12 bg-purple-500 rounded-full opacity-80"></div>

          {/* Shoe illustration placeholder */}
          <div className="absolute top-10 left-20 w-32 h-20 bg-gray-800 rounded-lg transform -rotate-12 opacity-60"></div>

          {/* Hat illustration placeholder */}
          <div className="absolute top-5 right-20 w-24 h-16 bg-blue-600 rounded-full opacity-70"></div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            RENOVE
            <br />
            SEU GUARDA-ROUPA
            <br />
            <span className="relative">
              FIQUE SEMPRE
              <div className="absolute -right-20 top-0 bg-green-400 text-black px-3 py-1 rounded-full text-sm font-bold transform rotate-12">
                NOVO!
              </div>
            </span>
            <br />
            <span className="text-purple-600">NA TENDÊNCIA</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            {"Descubra as últimas tendências da moda e mantenha seu estilo sempre em alta"}
          </p>

          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full">
            EXPLORAR COLEÇÕES
          </Button>
        </div>
      </div>
    </section>
  )
}
