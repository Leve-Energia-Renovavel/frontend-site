import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useRouter } from 'next/navigation';
import infoJson from "../../../../../../public/info.json";
import companyCardImage from "../../../../../resources/img/large/leve-confraternizacao-image-large.webp";
import homeCardImage from "../../../../../resources/img/large/leve-familia-brincando-image-large.webp";
import { FourthSectionImagesContainer, FourthSectionImagesContent } from './styles';

export default function LandingPageHomeOrCompany() {

    const router = useRouter()
    const texts = infoJson.home

    return (
        <FourthSectionImagesContainer>
            <FourthSectionImagesContent image={homeCardImage} onClick={() => router.push("/")}>
                <h6 variant="subtitle1">{texts.forYourHouse}</h6>
                <ArrowCircleRightOutlinedIcon className='arrowIcon' />
            </FourthSectionImagesContent>
            <FourthSectionImagesContent invertedBox={true} image={companyCardImage} onClick={() => router.push("/")}>
                <h6 variant="subtitle1">{texts.forYourCompany}</h6>
                <ArrowCircleRightOutlinedIcon className='arrowIconCompany' />
            </FourthSectionImagesContent>
        </FourthSectionImagesContainer>
    )
}