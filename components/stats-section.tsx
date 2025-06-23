import { Button } from "@/components/ui/button"

export default function StatsSection() {
  const stats = [
    { number: "180+", label: "Marcas Parceiras" },
    { number: "99%", label: "Satisfação" },
    { number: "500+", label: "Produtos" },
    { number: "96%", label: "Entregas no Prazo" },
  ]

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 gap-2 h-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400 mb-4">INICIE SUA JORNADA DE MODA CONOSCO</p>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            DO CASUAL AO CHIQUE,
            <br />
            TEMOS PARA TODOS.
          </h2>

          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore nossa mais recente coleção de moda e descubra as tendências mais atuais.
          </p>

          <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 mb-16">
            EXPLORAR NOSSAS COLEÇÕES
          </Button>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
