"use client"

import { Typography } from "@mui/material";
import infoJsonLp from '../../../../../../public/lp-info.json';
import bannerImage from "../../../../../resources/img/large/leve-paineis-solares-filtro-grao-image-large-reduced.webp";
import BoxesContainer from '../LandingPageBoxes';
import { SecondSectionBanner, SecondSectionContainer } from "./styles";

export default function LandingPageSecondaryBanner() {

    const lpTexts = infoJsonLp

    const handlePreSignup = () => {
        const element = document.getElementById('leadForm');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })

        }
    }

    return (
        <SecondSectionContainer image={bannerImage} className="sectionContainer">
            <BoxesContainer />
            <SecondSectionBanner>
                <Typography className='bannerTitle'>{lpTexts.seeHowItsLeve}</Typography>
                <Typography className='bannerDescription'>{lpTexts.callToActionButtonTitle}</Typography>
                <Typography className='simulateButton' onClick={() => handlePreSignup()}>{lpTexts.simulateNow}</Typography>
            </SecondSectionBanner>
        </SecondSectionContainer>
    )
}