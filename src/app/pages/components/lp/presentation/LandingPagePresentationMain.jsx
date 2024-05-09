"use client"

import { LandingPageContainer as Container } from './styles';

import BrandsContainer from '../../home/HomeBrands';
import TutorialContainer from '../../home/HomeTutorial';
import LandingPageHomeOrCompany from './LandingPageHomeOrCompany';
import LandingPageManifestBanner from './LandingPageManifestBanner';
import LandingPageOurSolutions from './LandingPageOurSolutions';
import LandingPagePercentageBanner from './LandingPagePercentageBanner';
import LandingPagePresentationBanner from './LandingPagePresentationBanner';
import LandingPageSolarPanelBanner from './LandingPageSolarPanelBanner';
import LandingPageVideo from './LandingPageVideo';

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