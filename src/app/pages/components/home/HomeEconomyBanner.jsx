import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography } from '@mui/material';
import infoJson from '../../../../../public/home-info.json';
import secondBannerImage from "../../../../resources/img/large/leve-pai-e-filho-image-large.webp";
import { HomeFifthSectionBannerContainer as BannerContainer, HomeFifthSectionContainer as Container, HomeFifthSectionContentContainer as ContentContainer, HomeFifthSectionDescriptionContainer as DescriptionContainer, HomeFifthSectionBanner as SectionBanner, HomeFifthSectionTitleContainer as TitleContainer } from './styles';

const texts = infoJson

export default function HomeEconomyBanner() {

    const handleClick = () => {
        const url = `https://www.youtube.com/watch?v=Zs9r8xWwn3I`
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (
        <Container className='homeEconomyBanner'>
            <BannerContainer>
                <SectionBanner image={secondBannerImage} />
            </BannerContainer>
            <ContentContainer>
                <TitleContainer>
                    <Typography variant="subtitle1" className='sectionTitle'>{texts.weBelieve}</Typography>
                </TitleContainer>
                <DescriptionContainer className='descriptionContainer'>
                    <Typography variant="subtitle1" className='sectionDescription' onClick={() => handleClick()}>{texts.moreToKnow}<ArrowForwardIcon /></Typography>
                </DescriptionContainer>
            </ContentContainer>
        </Container>
    )
}