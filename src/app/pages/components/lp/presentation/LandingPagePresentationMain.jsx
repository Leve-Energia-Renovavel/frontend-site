"use client"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import infoJson from "../../../../../../public/lp-presentation-info.json";
import percentageImage from "../../../../../resources/icons/large/icone-background-percentage-white.svg";
import { LandingPageContainer as Container, FifthSectionButton, FifthSectionContainer, FifthSectionContent } from './styles';

import { useRouter } from 'next/navigation';
import BrandsContainer from '../../home/HomeBrands';
import TutorialContainer from '../../home/HomeTutorial';
import LandingPageHomeOrCompany from './LandingPageHomeOrCompany';
import LandingPageManifestBanner from './LandingPageManifestBanner';
import LandingPageOurSolutions from './LandingPageOurSolutions';
import LandingPagePresentationBanner from './LandingPagePresentationBanner';
import LandingPageSolarPanelBanner from './LandingPageSolarPanelBanner';

export default function LandingPagePresentationMain() {

    const router = useRouter()

    const texts = infoJson

    return (
        <Container>

            <LandingPagePresentationBanner />
            <LandingPageSolarPanelBanner />
            <LandingPageOurSolutions />

            <LandingPageHomeOrCompany />

            <FifthSectionContainer >
                <FifthSectionContent image={percentageImage}>
                    <h6>{texts.callToActionTitle}</h6>
                    <FifthSectionButton
                        onClick={() => router.push("/")}
                        endIcon={<ArrowForwardIcon />}>
                        <span>{texts.simulate}</span>
                    </FifthSectionButton>

                </FifthSectionContent>
            </FifthSectionContainer>
            <TutorialContainer />

            <LandingPageManifestBanner />

            <BrandsContainer />
        </Container>
    )
}