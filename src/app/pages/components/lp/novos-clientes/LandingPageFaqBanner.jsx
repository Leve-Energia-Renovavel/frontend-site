import { Typography } from "@mui/material";
import Image from "next/image";
import infoJsonLp from '../../../../../../public/lp-info.json';
import faqIcon from "../../../../../resources/icons/small/faq-icon-yellow-small.svg";
import { FaqBannerContainer } from "./styles";

import FaqContainer from '../../faq/FaqContainer';

export default function LandingPageFaqBanner() {

    const lpTexts = infoJsonLp

    return (
        <FaqBannerContainer>
            <Image src={faqIcon} className='faqIcon' alt={"Ícone de interrogação sobre dúvidas frequentes"} priority={false} loading='lazy' />
            <Typography className='faqTitle' variant='subtitle1'>{lpTexts.faqTitle}</Typography>
            <FaqContainer />
        </FaqBannerContainer>
    )
}