import Header from "./pages/components/header/Header"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Header />
      <Link href="/about">Go to About page...</Link>
    </main>
  )
}
