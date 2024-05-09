"use client"

import dynamic from 'next/dynamic';
import { LandingPageContainer as Container } from './styles';

import BrandsContainer from '../../home/HomeBrands';
import TutorialContainer from '../../home/HomeTutorial';
import LandingPageHomeOrCompany from './LandingPageHomeOrCompany';
import LandingPageManifestBanner from './LandingPageManifestBanner';
import LandingPageOurSolutions from './LandingPageOurSolutions';
import LandingPagePercentageBanner from './LandingPagePercentageBanner';
import LandingPagePresentationBanner from './LandingPagePresentationBanner';
import LandingPageSolarPanelBanner from './LandingPageSolarPanelBanner';

// const LandingPageHomeOrCompany = dynamic(() => import('./LandingPageHomeOrCompany'), { ssr: false });
// const LandingPageManifestBanner = dynamic(() => import('./LandingPageManifestBanner'), { ssr: false });
// const LandingPageOurSolutions = dynamic(() => import('./LandingPageOurSolutions'), { ssr: false });
// const LandingPagePercentageBanner = dynamic(() => import('./LandingPagePercentageBanner'), { ssr: false });


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
        </Container>
    )
}