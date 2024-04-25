import dynamic from "next/dynamic";
const RegisterMain = dynamic(() => import("./register/[userType]/RegisterMain"), { ssr: false });
const HomeMain = dynamic(() => import("./pages/components/home/HomeMain"), { ssr: false });

export default function Home() {

  return (
    <main>
      <HomeMain />
    </main>
  )
}
