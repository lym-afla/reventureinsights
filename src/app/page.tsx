import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CTASection from "@/components/cta-section"
import HeroSection from "@/components/hero-section"
import FAQSection from "@/components/faq-section.tsx"
import ProblemSection from "@/components/problem-section"
import CounterSection from "@/components/counter-section"
import InvestorsSection from "@/components/investors-section"
import CompaniesSection from "@/components/companies-section"
import FeaturesSection from "@/components/features-section"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CounterSection />
      <ProblemSection />
      <InvestorsSection />
      <CompaniesSection />
      <FeaturesSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
