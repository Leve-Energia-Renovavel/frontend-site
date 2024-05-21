import Image from 'next/image';
import tribancoBannerImage from '../../../../../../resources/img/partners/tribanco/tribanco-banner-large-compressed.webp';
import { PartnerDescriptionContainer, PartnerImageContainer, PartnerSectionBanner, PartnerSectionContent } from './styles';

export default function TribancoSectionBanner() {
    return (
        <>
            <PartnerSectionBanner>
                <PartnerSectionContent />
                <PartnerDescriptionContainer>
                    <h3 className="title">Vem na onda da sustentabilidade!</h3>
                    <p className="highlightedSubtitle">Faça parte dessa parceria</p>
                    <p className="description">O Tribanco, comprometido com sua responsabilidade ambiental, incentiva a conscientização ecológica de seus funcionários e clientes, implementando ações para a otimização do uso de recursos naturais. </p>
                    <p className="highlightedDescription">É por isso que o Tribanco uniu forças com a Leve!</p>
                    <p className="description">A Leve conecta usinas solares fotovoltaicas a consumidores residenciais ou comerciais, permitindo uma economia na conta de luz de até 20% e ajudando a construir um meio ambiente mais limpo.</p>
                </PartnerDescriptionContainer>
            </PartnerSectionBanner>
            <PartnerImageContainer>
                <Image alt="banner Tribanco" src={tribancoBannerImage} className="bannerImage" />
            </PartnerImageContainer>
        </>
    )
}