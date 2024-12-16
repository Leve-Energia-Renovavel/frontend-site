// import HomeMain from "./pages/components/home/HomeMain";
import dynamic from "next/dynamic";

const HomeMain = dynamic(() => import("./pages/components/home/HomeMain"), { ssr: false });


export default function Home() {
  return (
    <main>
      <HomeMain />
    </main>
  )
}
