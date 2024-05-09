"use client"

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import infoJson from "../../../../../../public/lp-presentation-info.json";
import percentageImage from "../../../../../resources/icons/large/icone-background-percentage-white.svg";
import { FifthSectionButton, FifthSectionContainer, FifthSectionContent } from './styles';

export default function LandingPagePercentageBanner() {

    const texts = infoJson

    return (
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
    )
}