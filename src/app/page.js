import About from "./pages/components/about/About"
import Banners from "./pages/components/banners/Banners"
import SimulateEconomy from "./pages/components/simulate-economy/SimulateEconomyForm"
import BlankBanner from "./pages/components/banners/blank-banner/BlankBanner"

export default function Home() {

  return (
    <main>
      <Banners />
      <SimulateEconomy />
      <BlankBanner />
      <About />
    </main>
  )
}
