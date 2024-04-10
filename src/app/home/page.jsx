import dynamic from "next/dynamic";
import HomeBanner from '../pages/components/banners/home-banner/HomeBanner';
const HomeMain = dynamic(() => import('../pages/components/home/HomeMain'), { ssr: false });

export default function HomePage() {
    return (
        <>
            <HomeBanner />
            <HomeMain />
        </>
    )

}