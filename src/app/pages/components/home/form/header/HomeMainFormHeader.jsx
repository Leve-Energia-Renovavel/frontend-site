import Image from 'next/image';
import infoJson from '../../../../../../../public/info.json';
import economyIcon from "../../../../../../resources/icons/small/economy-icon-small.png";
import { FormSubtitleContainer, FormTitleContainer } from './styles';

export default function HomeMainFormHeader() {

    const texts = infoJson.home

    return (
        <>
            <FormTitleContainer className='formTitleContainer'>
                <Image src={economyIcon} className='economyIcon' alt={"Logo Leve"} priority />
                <h2 className='formTitle'>{texts.simulate}</h2>
                <h2 className='formTitleMobile'>{texts.mobile.form.title}</h2>
            </FormTitleContainer>
            <FormSubtitleContainer className='formSubtitleContainer'>
                <p className='formSubtitle'>{texts.in}<span className="highlighted">{texts.threeClicks}</span>{texts.guarantee}<span className="highlighted">{texts.solarEnergy}</span>{texts.reduceInvoices}</p>
                <p className='formSubtitleMobile'>{texts.mobile.form.subtitle}</p>
            </FormSubtitleContainer>
        </>
    )
}