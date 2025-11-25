import Header from "@/components/header"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import SystemOverview from "@/components/system-overview"
import Foundation from "@/components/foundation"
import LgsFrames from "@/components/lgs-frames"
import JoistsSection from "@/components/joists-section"
import BoardsSection from "@/components/boards-section"
import WaterproofingSection from "@/components/waterproofing-section"
import WindowsSection from "@/components/windows-section"
import AcmSection from "@/components/acm-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FeaturesBento from "@/components/features-bento"
import InstallationManualSection from "@/components/installation-manual-section"
import FAQSection from "@/components/faq-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Navigation />
      <main className="w-full">
        <FeaturesBento />
        <InstallationManualSection />
        <SystemOverview />
        <Foundation />
        <LgsFrames />
        <JoistsSection />
        <BoardsSection />
        <WaterproofingSection />
        <WindowsSection />
        <AcmSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
