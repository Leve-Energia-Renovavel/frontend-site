"use client"

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Divider } from '@mui/material';
import infoJson from '../../../../../../public/info.json';
import bannerImage from "../../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large-compressed.webp";
import CallToActionButton from '../../utils/buttons/call-to-action/CallToActionButton';
import { HomeContent, HomeMainContainer as Container, HomeMainContent, HomeMainTitle, HomeMainTitleContainer, HomeMobileMainContent, HomeSubtitleContainer } from '../styles';
export default function HomeMainBanner() {

    const handleScroll = () => {
        const element = document.getElementById('howLeveWorks');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 500, behavior: 'smooth' })
        }
    }

    const texts = infoJson.home

    return (
        <>
            <HomeMainContent image={bannerImage} className='homeMainContent'>
                <HomeContent>
                    <HomeMainTitleContainer>
                        <HomeMainTitle variant="h1">{texts.title}<span className='underline'>{texts.leve}</span></HomeMainTitle>
                        <HomeSubtitleContainer onClick={() => handleScroll()}>
                            <h6 className='moreAboutLeve'>{texts.about}</h6>
                            <ArrowCircleDownIcon className='arrowIcon' />
                        </HomeSubtitleContainer>
                    </HomeMainTitleContainer>
                </HomeContent>
            </HomeMainContent>

            {/* <Divider className='mobileBar' sx={{ borderBottomWidth: '45px' }} /> */}

            <HomeMobileMainContent className='homeMainContentMobile'>
                <h1 className='homeMainTitleMobile'>{texts.mobile.title}<span className='highlighted'>{texts.mobile.cheaper}</span>{texts.mobile.withClearEnergy}</h1>
                <p className='homeMainSubtitleMobile'>{texts.mobile.subtitle}</p>
                <p className='homeMainDescriptionMobile'>{texts.mobile.description}</p>
                <CallToActionButton isMobile={true} title={`Calcular meu desconto`} starIcon={false} endIcon={false} />
            </HomeMobileMainContent>
        </>

    )
}