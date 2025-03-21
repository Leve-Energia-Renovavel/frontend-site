import dynamic from 'next/dynamic';
const LandingPagePresentationMain = dynamic(() => import('@/app/pages/components/lp/apresentacao/LandingPagePresentationMain'), { ssr: false });

export default function LandingPagePresentationPage() {
    return (
        <LandingPagePresentationMain />
    )
}