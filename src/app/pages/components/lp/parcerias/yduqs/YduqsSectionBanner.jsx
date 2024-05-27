import Image from 'next/image';
import yduqsBackgroundImage from '../../../../../../resources/img/partners/yduqs/yduqs-background-banner-small.png';
import yduqsBannerImage from '../../../../../../resources/img/partners/yduqs/yduqs-banner-small.png';
import { PartnerDescriptionContainer, PartnerImageContainer, PartnerSectionBanner, PartnerSectionContent } from './styles';

export default function YduqsSectionBanner() {
    return (
        <>
            <PartnerSectionBanner>
                <PartnerSectionContent image={yduqsBackgroundImage} />
                <Image alt="banner Yduqs" src={yduqsBannerImage} className="hiddenBannerImage" />
                <PartnerDescriptionContainer >
                    <h3 className="title">Vem na onda da sustentabilidade!</h3>
                    <p className="highlightedSubtitle">Faça parte dessa parceria</p>
                    <p className="description">A YDUQS, comprometida com sua responsabilidade ambiental, incentiva a conscientização ecológica de seus funcionários e clientes, implementando ações para a otimização do uso de recursos naturais. </p>
                    <p className="highlightedDescription">É por isso que a YDUQS uniu forças com a Leve!</p>
                    <p className="description">A Leve conecta usinas solares fotovoltaicas a consumidores residenciais ou comerciais, permitindo uma economia na conta de luz de até 20% e ajudando a construir um meio ambiente mais limpo.</p>
                </PartnerDescriptionContainer>
            </PartnerSectionBanner>
            <PartnerImageContainer>
                <Image alt="banner Yduqs" src={yduqsBannerImage} className="bannerImage" />
            </PartnerImageContainer>
        </>
    )
}