import Image from 'next/image';
import allyaBackgroundImage from '../../../../../../resources/img/partners/allya/allya-background-banner-small.svg';
import allyaBannerImage from '../../../../../../resources/img/partners/allya/allya-banner-small.png';
import { PartnerDescriptionContainer, PartnerImageContainer, PartnerSectionBanner, PartnerSectionContent } from './styles';

export default function AllyaSectionBanner() {
    return (
        <>
            <PartnerSectionBanner>
                <PartnerSectionContent image={allyaBackgroundImage} />
                <Image alt="banner Allya" src={allyaBannerImage} className="hiddenBannerImage" />
                <PartnerDescriptionContainer >
                    <h3 className="title">Vem na onda da sustentabilidade!</h3>
                    <p className="highlightedSubtitle">Faça parte dessa parceria</p>
                    <p className="description">A Allya, comprometida com sua responsabilidade ambiental, incentiva a conscientização ecológica de seus funcionários e clientes, implementando ações para a otimização do uso de recursos naturais. </p>
                    <p className="highlightedDescription">É por isso que a Allya uniu forças com a Leve!</p>
                    <p className="description">A Leve conecta usinas solares fotovoltaicas a consumidores residenciais ou comerciais, permitindo uma economia na conta de luz de até 20% e ajudando a construir um meio ambiente mais limpo.</p>
                </PartnerDescriptionContainer>
            </PartnerSectionBanner>
            <PartnerImageContainer>
                <Image alt="banner Allya" src={allyaBannerImage} className="bannerImage" />
            </PartnerImageContainer>
        </>
    )
}