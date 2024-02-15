import About from "./pages/components/about/About"
import Banners from "./pages/components/banners/Banners"
import BlankBanner from "./pages/components/banners/blank-banner/BlankBanner"
import SimulateEconomy from "./pages/components/simulate-economy/SimulateEconomyForm"
import RegisterMain from "./register/[userType]/RegisterMain"
import RegisterForm from "./register/forms/register-form/RegisterForm"

export default function Home() {

  return (
    <main>
      {/* <Banners /> */}
      {/* <SimulateEconomy /> */}
      <RegisterMain />
      <BlankBanner />
      <About />
    </main>
  )
}
