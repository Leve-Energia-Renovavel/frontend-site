import Image from 'next/image';
import martinsBackgroundBanner from '../../../../../../resources/img/partners/martins/martins-background-banner-small.png';
import martinsBannerImage from '../../../../../../resources/img/partners/martins/martins-banner-small.png';
import { PartnerDescriptionContainer, PartnerImageContainer, PartnerSectionBanner, PartnerSectionContent } from './styles';

export default function MartinsSectionBanner() {
    return (
        <>
            <PartnerSectionBanner>
                <PartnerSectionContent image={martinsBackgroundBanner} className='partnerSectionContent' />
                <Image alt="banner Martins" src={martinsBannerImage} className="hiddenBannerImage" />

                <PartnerSectionContent image={martinsBackgroundBanner} className='unhidden'>
                    <Image alt="banner Martins" src={martinsBannerImage} className='unhiddenBannerImage' />
                </PartnerSectionContent>

                <PartnerDescriptionContainer>
                    <h3 className="title">Vem na onda da sustentabilidade!</h3>
                    <p className="highlightedSubtitle">Faça parte dessa parceria</p>
                    <p className="description">O Grupo Martins, comprometido com sua responsabilidade ambiental, incentiva a conscientização ecológica de seus funcionários e clientes, implementando ações para a otimização do uso de recursos naturais.</p>
                    <p className="highlightedDescription">É por isso que o Grupo Martins uniu forças com a Leve!</p>
                    <p className="description">A Leve conecta usinas solares fotovoltaicas a consumidores residenciais ou comerciais, permitindo uma economia na conta de luz de até 20% e ajudando a construir um meio ambiente mais limpo.</p>
                </PartnerDescriptionContainer>
            </PartnerSectionBanner>
            <PartnerImageContainer className='partnerImageContainer'>
                <Image alt="banner Martins" src={martinsBannerImage} className="bannerImage" />
            </PartnerImageContainer>
        </>
    )
}