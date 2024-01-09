import Footer from "./pages/components/footer/Footer"
import Header from "./pages/components/header/Header"
import Link from "next/link"
import "./globals.css"
import Banner from "./pages/components/banner/Banner"

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <h1>Home</h1>
      <Footer />
      {/* <Link href="/about">Go to About page...</Link> */}
    </main>
  )
}
