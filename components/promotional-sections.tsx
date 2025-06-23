import { Button } from "@/components/ui/button"

export default function PromotionalSections() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Winter Collection */}
          <div className="relative bg-gradient-to-br from-green-800 to-green-900 rounded-lg overflow-hidden h-96">
            <img
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&h=400&fit=crop&crop=center"
              alt="Coleção Inverno"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
              <div>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-bold">COLEÇÃO INVERNO</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  CENTENAS DE NOVOS ITENS
                  <br />
                  COM PREÇOS INCRÍVEIS!
                </h3>
                <p className="text-sm mb-6 opacity-90">Chegou o inverno! Confira nossa nova coleção.</p>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full">EXPLORAR COLEÇÃO INVERNO</Button>
              </div>
            </div>
          </div>

          {/* Summer Collection */}
          <div className="relative bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg overflow-hidden h-96">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center"
              alt="Coleção Verão"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 p-8 h-full flex flex-col justify-between text-white">
              <div>
                <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-bold">COLEÇÃO VERÃO</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  PEÇAS LEVES E
                  <br />
                  CONFORTÁVEIS
                </h3>
                <p className="text-sm mb-6 opacity-90">Para os dias mais quentes do ano.</p>
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full">EXPLORAR COLEÇÃO VERÃO</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
