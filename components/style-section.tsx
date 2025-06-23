import { Button } from "@/components/ui/button"

export default function StyleSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-600 mb-2">ESTILO ELEGANTE</p>
          <h2 className="text-4xl font-bold mb-8">EM QUALQUER LUGAR</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg h-96 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center"
              alt="Modelo usando jaqueta"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Categories */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">CALÇADOS</h3>
              <h3 className="text-3xl font-bold text-purple-600 mb-4">NOVA JAQUETA</h3>
              <h3 className="text-2xl font-bold text-gray-400 mb-4">CARDIGÃ</h3>
              <h3 className="text-2xl font-bold text-gray-400 mb-8">CAMISA</h3>

              <Button variant="outline" className="rounded-full px-8">
                EXPLORAR MAIS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
