"use client"

import { Typography } from "@mui/material";
import Image from "next/image";
import infoJson from '../../../../../../public/info.json';
import faqIcon from "../../../../../resources/icons/small/faq-icon-yellow-small.svg";
import { FaqBannerContainer } from "./styles";

import FaqContainer from '../../faq/FaqContainer';

export default function LandingPageFaqBanner() {

    const texts = infoJson.lp.novosClientes

    return (
        <FaqBannerContainer>
            <Image src={faqIcon} className='faqIcon' alt={"Ícone de interrogação sobre dúvidas frequentes"} priority={false} loading='lazy' />
            <Typography className='faqTitle' variant='subtitle1'>{texts.faqTitle}</Typography>
            <FaqContainer />
        </FaqBannerContainer>
    )
}