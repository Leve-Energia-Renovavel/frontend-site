import About from "./pages/components/about/About"
import Banners from "./pages/components/banners/Banners"
import BlankBanner from "./pages/components/banners/blank-banner/BlankBanner"
import SimulateEconomy from "./pages/components/simulate-economy/SimulateEconomyForm"

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
