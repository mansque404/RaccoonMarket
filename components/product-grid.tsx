import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Jaqueta Bomber Masculina Premium",
      price: "R$ 299,90",
      originalPrice: "R$ 399,90",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop&crop=center",
      isNew: true,
    },
    {
      id: 2,
      name: "Jaqueta de Couro Preta Clássica",
      price: "R$ 549,90",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=400&h=500&fit=crop&crop=center",
      isNew: false,
    },
    {
      id: 3,
      name: "Moletom Cinza Oversized Premium",
      price: "R$ 189,90",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&crop=center",
      isNew: true,
    },
    {
      id: 4,
      name: "Cardigan Marrom Tricot Masculino",
      price: "R$ 229,90",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop&crop=center",
      isNew: false,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">ÚLTIMOS LANÇAMENTOS MASCULINOS</h2>
          <Button variant="ghost" className="text-sm">
            VER TUDO →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-green-500 text-white px-2 py-1 text-xs rounded-full">
                    NOVO
                  </span>
                )}
                <Button size="icon" variant="ghost" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>

                <h3 className="font-medium text-sm leading-tight">{product.name}</h3>

                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
