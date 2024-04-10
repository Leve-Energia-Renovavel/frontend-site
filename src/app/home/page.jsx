import dynamic from "next/dynamic";
const HomeMain = dynamic(() => import('../pages/components/home/HomeMain'), { ssr: false });

export default function HomePage() {
    return (
        <>
            <HomeMain />
        </>
    )

}