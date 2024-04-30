import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Typography } from '@mui/material';
import infoJson from '../../../../../public/home-info.json';
import bannerImage from "../../../../resources/img/large/leve-mulher-sorrindo-banner-image-large.webp";
import { HomeContent, HomeMainContent, HomeMainTitle, HomeMainTitleContainer, HomeSubtitleContainer } from './styles';

export default function HomeMainBanner() {

    const handleScroll = () => {
        const element = document.getElementById('howLeveWorks');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 500, behavior: 'smooth' })
        }
    }

    const texts = infoJson


    return (
        <HomeMainContent image={bannerImage}>
            <HomeContent>
                <HomeMainTitleContainer>
                    <HomeMainTitle variant="h1">{texts.title}<span className='underline'>{texts.leve}</span></HomeMainTitle>
                    <HomeSubtitleContainer onClick={() => handleScroll()}>
                        <Typography variant="subtitle1" className='moreAboutLeve'>{texts.about}</Typography>
                        <ArrowCircleDownIcon className='arrowIcon' />
                    </HomeSubtitleContainer>
                </HomeMainTitleContainer>
            </HomeContent>
        </HomeMainContent>
    )
}