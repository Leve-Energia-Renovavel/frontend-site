import { Typography } from '@mui/material';
import Image from 'next/image';
import infoJson from '../../../../../public/home-info.json';
import soleImage from "../../../../resources/icons/large/sole-icon-large.png";
import { HomeThirdSectionContainer, HomeThirdSectionSoleContainer, HomeThirdSectionSubTitle, HomeThirdSectionTitleContainer } from './styles';

const texts = infoJson

export default function HomeSoleBanner() {
    return (
        <HomeThirdSectionContainer>
            <HomeThirdSectionTitleContainer >
                <Typography variant="subtitle1" className='sectionTitle'>{texts.accession}<span className='highlighted'>{texts.hundredDigital}</span>{texts.guarantee}<span className='highlighted'>{texts.solarEnergy}</span>{texts.houseOrBusiness}</Typography>
            </HomeThirdSectionTitleContainer>
            <div className='rowToBeReversed'>
                <HomeThirdSectionSoleContainer >
                    <Image src={soleImage} className="sole" alt={"Imagem de Sole, personagem da Leve, carregando uma placa solar"} loading="eager" priority={true} />
                </HomeThirdSectionSoleContainer>
                <HomeThirdSectionSubTitle >
                    <Typography variant="subtitle1" className='sectionSubtitle'>{texts.simpleFastFree}</Typography>
                </HomeThirdSectionSubTitle>
            </div>
        </HomeThirdSectionContainer>
    )
}