// import { useState } from "react"
import About from "./pages/components/about/About"
import Banner from "./pages/components/banners/banner-1/Banner"
import Banner2 from "./pages/components/banners/banner-2/Banner"
import SimulateEconomy from "./pages/components/simulate-economy/SimulateEconomyForm"
import Banners from "./pages/components/banners/Banners"

export default function Home() {


  return (
    <main>
      <Banners />
      <SimulateEconomy />
      <About />
    </main>
  )
}
