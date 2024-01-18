import About from "./pages/components/about/About"
import Banners from "./pages/components/banners/Banners"
import SimulateEconomy from "./pages/components/simulate-economy/SimulateEconomyForm"

export default function Home() {

  return (
    <main>
      <Banners />
      <SimulateEconomy />
      <About />
    </main>
  )
}
