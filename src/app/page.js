import BlankBanner from "./pages/components/banners/blank-banner/BlankBanner";
import RegisterMain from "./register/[userType]/RegisterMain";

export default function Home() {

  return (
    <main>
      <RegisterMain />
      <BlankBanner />
    </main>
  )
}
