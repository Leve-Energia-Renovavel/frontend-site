import Image from 'next/image';
import timBackgroundBanner from '../../../../../../resources/img/partners/tim/tim-background-banner-small.png';
import timBannerImage from '../../../../../../resources/img/partners/tim/tim-banner-small.png';
import { PartnerDescriptionContainer, PartnerImageContainer, PartnerSectionBanner, PartnerSectionContent } from './styles';

export default function TimSectionBanner() {
    return (
        <>
            <PartnerSectionBanner>
                <PartnerSectionContent image={timBackgroundBanner} />
                <Image alt="banner Tim" src={timBannerImage} className="hiddenBannerImage" />

                <PartnerSectionContent image={timBackgroundBanner} className='unhidden'>
                    <Image alt="banner Tim" src={timBannerImage} className='unhidden' />
                </PartnerSectionContent>

                <PartnerDescriptionContainer>
                    <h3 className="title">Vem na onda da sustentabilidade!</h3>
                    <p className="highlightedSubtitle">Faça parte dessa parceria</p>
                    <p className="description">A TIM, exercendo a sua responsabilidade social, estimula a conscientização ambiental de seus funcionários e clientes, desenvolvendo ações para a otimização do uso de recursos naturais.</p>
                    <p className="highlightedDescription">É por isso que a TIM uniu forças com a Leve!</p>
                    <p className="description">A Leve conecta usinas solares fotovoltaicas a consumidores residenciais ou comerciais, permitindo uma economia na conta de luz de até 20% e ajudando a construir um meio ambiente mais limpo.</p>
                </PartnerDescriptionContainer>
            </PartnerSectionBanner>
            <PartnerImageContainer>
                <Image alt="banner Tim" src={timBannerImage} className="bannerImage" />
            </PartnerImageContainer>
        </>
    )
}