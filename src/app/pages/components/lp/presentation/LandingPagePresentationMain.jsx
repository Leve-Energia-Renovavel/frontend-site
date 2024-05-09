"use client"

import dynamic from 'next/dynamic';
import { LandingPageContainer as Container } from './styles';

import LandingPagePresentationBanner from './LandingPagePresentationBanner';
import TutorialContainer from '../../home/HomeTutorial';
import BrandsContainer from '../../home/HomeBrands';

const LandingPageSolarPanelBanner = dynamic(() => import('./LandingPageSolarPanelBanner'), { ssr: false });
const LandingPageHomeOrCompany = dynamic(() => import('./LandingPageHomeOrCompany'), { ssr: false });
const LandingPageManifestBanner = dynamic(() => import('./LandingPageManifestBanner'), { ssr: false });
const LandingPageOurSolutions = dynamic(() => import('./LandingPageOurSolutions'), { ssr: false });
const LandingPagePercentageBanner = dynamic(() => import('./LandingPagePercentageBanner'), { ssr: false });


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