"use client"

import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import infoJson from '../../../../../../public/info.json';
import bannerImage from "../../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large-compressed.webp";
import { HomeContent, HomeMainContent, HomeMainTitle, HomeMainTitleContainer, HomeSubtitleContainer } from '../styles';

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
    )
}