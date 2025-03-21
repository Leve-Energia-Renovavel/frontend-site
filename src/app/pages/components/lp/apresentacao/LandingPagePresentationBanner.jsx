import { PATH_TO } from '@/app/pages/enums/globalEnums';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import infoJson from "../../../../../../public/info.json";
import bannerImage from "../../../../../resources/img/large/leve-pai-e-filho-image-large-reduced.webp";
import { LandingPageMainBanner as MainBanner, MainBannerButton, LandingPageMainContent as MainContent, MoreAboutLeveFooter } from './styles';

export default function LandingPagePresentationBanner() {

    const router = useRouter()
    const texts = infoJson.lp.apresentacao

    const handleScroll = () => {
        const element = document.getElementById('howLeveWorks');
        if (element) {
            window.scrollTo({ top: element.offsetTop - 60, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })

        }
    }

    return (
        <MainBanner>
            <MainContent>
                <h1>{texts.together}<span className='highlighted'>{texts.takeCare}</span>{texts.yourPocketToo}</h1>
                <h2>{texts.lighterBill}<span className='underlined'>{texts.twentyPercent}</span>{texts.everyMonth}</h2>
                <MainBannerButton
                    className='mainButton'
                    onClick={() => router.push(PATH_TO.HOME)}
                    endIcon={<ArrowForwardIcon />}>
                    <span>{texts.simulate}</span>
                </MainBannerButton>
                <MoreAboutLeveFooter onClick={() => handleScroll()}>
                    <ArrowCircleDownIcon className='arrowIcon' />
                    <p className='moreAboutLeve'>{texts.moreAboutLeve}</p>
                </MoreAboutLeveFooter>
            </MainContent>
            <Image className='bannerImage' alt="imagem de pai e filho felizes" src={bannerImage} priority />
        </MainBanner>
    )
}