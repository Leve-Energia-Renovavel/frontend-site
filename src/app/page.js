import Footer from "./pages/components/footer/Footer"
import Header from "./pages/components/header/Header"
import Link from "next/link"
import "./globals.css"

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Header />
      <Link href="/about">Go to About page...</Link>
      <Footer />
    </main>
  )
}
