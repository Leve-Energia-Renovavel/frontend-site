import About from "./pages/components/about/About"
import Banner from "./pages/components/banner/Banner"
import WhatsAppFAB from "./pages/components/fabWhatsapp/WhatsappFAB"
import SimulateEconomy from "./pages/components/simulate-economy/SimulateEconomyForm"

export default function Home() {
  return (
    <main>
      <Banner />
      <WhatsAppFAB />
      <SimulateEconomy />
      <About />
      {/* <Link href="/about">Go to About page...</Link> */}
    </main>
  )
}
