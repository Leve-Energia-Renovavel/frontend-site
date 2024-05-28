"use client"

import { Typography } from "@mui/material";
import infoJsonLp from '../../../../../../public/info.json';
import bannerImage from "../../../../../resources/img/large/leve-paineis-solares-filtro-grao-image-large-reduced.webp";
import BoxesContainer from '../LandingPageBoxes';
import { SecondSectionBanner, SecondSectionContainer } from "./styles";

export default function LandingPageSecondaryBanner() {

    const texts = infoJsonLp.lp.novosClientes

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
                <Typography className='bannerTitle'>{texts.seeHowItsLeve}</Typography>
                <Typography className='bannerDescription'>{texts.callToActionButtonTitle}</Typography>
                <Typography className='simulateButton' onClick={() => handlePreSignup()}>{texts.simulateNow}</Typography>
            </SecondSectionBanner>
        </SecondSectionContainer>
    )
}