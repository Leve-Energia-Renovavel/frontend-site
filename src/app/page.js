import dynamic from "next/dynamic";
import BlankBanner from "./pages/components/banners/blank-banner/BlankBanner";
const RegisterMain = dynamic(() => import("./register/[userType]/RegisterMain"), { ssr: false });

export default function Home() {

  return (
    <main>
      <RegisterMain />
      <BlankBanner />
    </main>
  )
}
