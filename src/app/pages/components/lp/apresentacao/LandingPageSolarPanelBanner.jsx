import { landingPagePresentationBoxes } from '@/app/utils/helper/partners/landingPageHelper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import infoJson from "../../../../../../public/info.json";
import sunImage from "../../../../../resources/icons/small/ellipse-small.webp";
import { SecondSectionBox, SecondSectionBoxesContainer, SecondSectionButton, SecondSectionContainer, SecondSectionContent, SecondSectionContentTitleContainer, SecondSectionTitleContainer } from './styles';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

export default function LandingPageSolarPanelBanner() {

    const router = useRouter()
    const texts = infoJson.lp.apresentacao

    return (
        <SecondSectionContainer>
            <SecondSectionTitleContainer>
                <h3 className='yellow'>{texts.noInstallations}</h3>
                <h3>{texts.noSpending}</h3>
            </SecondSectionTitleContainer>

            <SecondSectionContent image={sunImage}>
                <SecondSectionContentTitleContainer>
                    <h4>{texts.beLeveWithFutureEnergy}</h4>
                    <SecondSectionButton
                        className='desktopButton'
                        onClick={() => router.push("/")}
                        endIcon={<ArrowForwardIcon />}>
                        <span>{texts.simulate}</span>
                    </SecondSectionButton>
                    <ArrowCircleDownIcon className='arrowDownIcon' />
                </SecondSectionContentTitleContainer>

                <SecondSectionBoxesContainer >
                    {landingPagePresentationBoxes.map((box, index) => {
                        return (
                            <SecondSectionBox key={index}>
                                <div className='iconContainer'>
                                    <Image src={box.icon} alt={box.description} priority={false} loading='lazy' />
                                </div>
                                <p className='boxDescription'>{box.description}</p>
                            </SecondSectionBox>
                        )
                    })}
                    <SecondSectionButton
                        className='mobileButton'
                        onClick={() => router.push("/")}
                        endIcon={<ArrowForwardIcon />}>
                        <span>{texts.simulate}</span>
                    </SecondSectionButton>
                </SecondSectionBoxesContainer>
            </SecondSectionContent>
        </SecondSectionContainer>
    )
}