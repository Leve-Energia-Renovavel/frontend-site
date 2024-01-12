import About from "./pages/components/about/About"
import Banner from "./pages/components/banner-1/Banner"
import Banner2 from "./pages/components/banner-2/Banner"
import WhatsAppFAB from "./pages/components/fabWhatsapp/WhatsappFAB"
import SimulateEconomy from "./pages/components/simulate-economy/SimulateEconomyForm"

export default function Home() {
  return (
    <main>
      {/* <Banner /> */}
      <Banner2 />
      <WhatsAppFAB />
      <SimulateEconomy />
      <About />
    </main>
  )
}
