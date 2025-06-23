import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BenefitsSection from "@/components/benefits-section"
import StyleSection from "@/components/style-section"
import ProductGrid from "@/components/product-grid"
import PromotionalSections from "@/components/promotional-sections"
import StatsSection from "@/components/stats-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <StyleSection />
      <ProductGrid />
      <PromotionalSections />
      <StatsSection />
      <Footer />
    </div>
  )
}
