"use client"

import dynamic from 'next/dynamic';
import { LandingPageContainer as Container } from './styles';

import LandingPagePresentationBanner from './LandingPagePresentationBanner';

const BrandsContainer = dynamic(() => import('../../home/brands/HomeBrands'), { ssr: false });
const TutorialContainer = dynamic(() => import('../../home/tutorial/HomeTutorial'), { ssr: false });
const LandingPageSolarPanelBanner = dynamic(() => import('./LandingPageSolarPanelBanner'), { ssr: false });
const LandingPageOurSolutions = dynamic(() => import('./LandingPageOurSolutions'), { ssr: false });
const LandingPageHomeOrCompany = dynamic(() => import('./LandingPageHomeOrCompany'), { ssr: false });
const LandingPageManifestBanner = dynamic(() => import('./LandingPageManifestBanner'), { ssr: false });
const LandingPagePercentageBanner = dynamic(() => import('./LandingPagePercentageBanner'), { ssr: false });
const LandingPageVideo = dynamic(() => import('./LandingPageVideo'), { ssr: false });

export default function LandingPagePresentationMain() {

    return (
        <Container>
            <LandingPagePresentationBanner />
            <LandingPageSolarPanelBanner />
            <LandingPageOurSolutions />
            <LandingPageHomeOrCompany />
            <LandingPagePercentageBanner />
            <TutorialContainer />
            <LandingPageManifestBanner />
            <BrandsContainer />

            <LandingPageVideo />
        </Container>
    )
}