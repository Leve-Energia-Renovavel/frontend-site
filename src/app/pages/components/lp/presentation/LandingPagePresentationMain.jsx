"use client"

import Image from 'next/image';
import { LandingPageContainer as Container, LandingPageMainContent as MainContent, LandingPageMainBanner as MainBanner, MainBannerButton, MoreAboutLeveFooter } from './styles'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import bannerImage from '../../../../../resources/img/large/leve-pai-e-filho-image-large.webp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function LandingPagePresentationMain() {
    return (
        <Container>
            <MainBanner>
                <MainContent>
                    <h1>Junto com você, a nossa energia <span className='highlighted'>cuida do planeta</span> - e também do seu bolso</h1>
                    <h2>Deixe sua conta de luz mais leve com até <span className='underlined'>20% de economia</span> todos os meses.</h2>
                    <MainBannerButton
                        className='mainButton'
                        endIcon={<ArrowForwardIcon />}>
                        <span>Faça uma simulação</span>
                    </MainBannerButton>
                    <MoreAboutLeveFooter>
                        <p className='moreAboutLeve'>Mais sobre a Leve</p>
                        <ArrowCircleDownIcon className='arrowIcon' />
                    </MoreAboutLeveFooter>
                </MainContent>
                <Image className='bannerImage' alt="imagem de pai e filho felizes" src={bannerImage} priority />
            </MainBanner>
        </Container>
    )
}