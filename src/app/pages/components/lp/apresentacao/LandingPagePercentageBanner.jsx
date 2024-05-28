import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useRouter } from 'next/navigation';
import infoJson from "../../../../../../public/info.json";
import percentageImage from "../../../../../resources/icons/large/icone-background-percentage-white.svg";
import { FifthSectionButton, FifthSectionContainer, FifthSectionContent } from './styles';

export default function LandingPagePercentageBanner() {

    const router = useRouter()
    const texts = infoJson.lp.apresentacao

    return (
        <FifthSectionContainer >
            <FifthSectionContent image={percentageImage}>
                <h6>{texts.callToActionTitle}</h6>
                <FifthSectionButton
                    onClick={() => router.push("/")}
                    endIcon={<ArrowForwardIcon />}>
                    <span>{texts.simulate}</span>
                </FifthSectionButton>

            </FifthSectionContent>
        </FifthSectionContainer>
    )
}