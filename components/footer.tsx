import { Button } from "@/components/ui/button"

export default function Footer() {
  const productImages = [
    "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1571945153237-4929e783af4a?w=300&h=300&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop&crop=center",
  ]

  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OP6elQeyjyhzAryaMKqJKK5Fmtmq2u.png"
              alt="Raccoon Logo"
              className="h-16 md:h-20 w-auto"
            />
            <div className="text-6xl md:text-8xl font-black">RACCOON</div>
          </div>
          <p className="text-xl text-gray-600 mb-8">NOVA GERAÇÃO DE MODA URBANA</p>

          <Button size="lg" className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-3 mb-12">
            EXPLORAR COLEÇÕES
          </Button>

          {/* Product showcase grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {productImages.map((image, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Produto ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-8 text-sm">
              <a href="#" className="hover:text-gray-600">
                SOBRE
              </a>
              <a href="#" className="hover:text-gray-600">
                PROGRAMA DE MEMBROS
              </a>
              <a href="#" className="hover:text-gray-600">
                COLABORAÇÃO
              </a>
              <a href="#" className="hover:text-gray-600">
                AJUDA
              </a>
              <a href="#" className="hover:text-gray-600">
                FAQ
              </a>
            </div>

            <div className="flex space-x-8 text-sm">
              <a href="#" className="hover:text-gray-600">
                TWITTER ↗
              </a>
              <a href="#" className="hover:text-gray-600">
                INSTAGRAM ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
