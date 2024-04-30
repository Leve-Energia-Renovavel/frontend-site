import dynamic from 'next/dynamic';
const LandingPageMain = dynamic(() => import('../pages/components/lp/LandingPageMain'), { ssr: false });

export default function LandingPages() {
    return (
        <LandingPageMain />
    )
}