"use client"

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Typography } from '@mui/material';
import {
    LandingPageContent as Content,
    LandingPageBannerFooter,
    LandingPageBannerSecondFooter,
    LandingPageMainContent as MainContent, LandingPageMainTitle as MainTitle,
    MoreAboutLeveFooter,
    LandingPageSubtitle as Subtitle
} from "./styles";

export default function LandingPageMainContent() {

    const lpTexts = {
        imagine: "Imagine ",
        economyValue: "R$1.200",
        everyYear: " a mais na sua conta bancária todo final de ano…",
        exactly: "É exatamente isso que a ",
        leve: "Leve Energia",
        canDoForYou: " pode fazer por você – e pelo seu bolso",
        noConstructionNoInstallations: "Sem obras. Sem instalações.",
        noCost: "E sem gastar R$1 a mais sequer.",
        moreAboutLeve: "Mais sobre a Leve"
    }

    const handleScroll = () => {
        const element = document.getElementById('howLeveWorks');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 500, behavior: 'smooth' })
        }
    }

    return (
        <MainContent className='mainContent'>
            <Content>
                <MainTitle variant="h1">{lpTexts.imagine}<span className='highlighted'>{lpTexts.economyValue}</span>{lpTexts.everyYear}</MainTitle>
                <Subtitle>{lpTexts.exactly}<span className='underlined'>{lpTexts.leve}</span>{lpTexts.canDoForYou}</Subtitle>
                <LandingPageBannerFooter>
                    <LandingPageBannerSecondFooter>
                        <Typography variant='subtitle1' className='footerTitle'>{lpTexts.noConstructionNoInstallations}</Typography>
                        <Typography variant='subtitle1' className='footerSubtitle'>{lpTexts.noCost}</Typography>
                    </LandingPageBannerSecondFooter>
                    <MoreAboutLeveFooter onClick={() => handleScroll()}>
                        <Typography variant='subtitle1'>{lpTexts.moreAboutLeve}</Typography>
                        <ArrowCircleDownIcon className='arrowIcon' />
                    </MoreAboutLeveFooter>
                </LandingPageBannerFooter>
            </Content>
        </MainContent>
    )
}