import Image from 'next/image';
import infoJson from '../../../../../../public/home-info.json';
import soleImage from "../../../../../resources/icons/large/sole-icon-large.webp";
import { HomeThirdSectionContainer, HomeThirdSectionSoleContainer, HomeThirdSectionSubTitle, HomeThirdSectionTitleContainer } from '../styles';

const texts = infoJson

export default function HomeSoleBanner() {
    return (
        <HomeThirdSectionContainer>
            <HomeThirdSectionTitleContainer >
                <h6 variant="subtitle1" className='sectionTitle'>{texts.accession}<span className='highlighted'>{texts.hundredDigital}</span>{texts.guarantee}<span className='highlighted'>{texts.solarEnergy}</span>{texts.houseOrBusiness}</h6>
            </HomeThirdSectionTitleContainer>
            <div className='rowToBeReversed'>
                <HomeThirdSectionSoleContainer >
                    <Image src={soleImage} className="sole" alt={"Imagem de Sole, personagem da Leve, carregando uma placa solar"} loading="lazy" />
                </HomeThirdSectionSoleContainer>
                <HomeThirdSectionSubTitle >
                    <h6 variant="subtitle1" className='sectionSubtitle'>{texts.simpleFastFree}</h6>
                </HomeThirdSectionSubTitle>
            </div>
        </HomeThirdSectionContainer>
    )
}