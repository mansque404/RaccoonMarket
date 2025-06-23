import { Shield, Truck, RotateCcw, Headphones } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Shield,
      title: "Qualidade Premium",
      description: "Produtos selecionados",
    },
    {
      icon: Truck,
      title: "Entrega Expressa",
      description: "Frete rápido",
    },
    {
      icon: RotateCcw,
      title: "Trocas Fáceis",
      description: "30 dias para trocar",
    },
    {
      icon: Headphones,
      title: "Atendimento",
      description: "Suporte 24/7",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
              <p className="text-xs text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
