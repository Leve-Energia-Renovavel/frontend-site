import Footer from "./pages/components/footer/Footer"
import Header from "./pages/components/header/Header"
import Link from "next/link"
import "./globals.css"
import Banner from "./pages/components/banner/Banner"
import About from "./pages/components/about/About"

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <About />
      <Footer />
      {/* <Link href="/about">Go to About page...</Link> */}
    </main>
  )
}
