import Image from 'next/image';
import localizaBannerImage from '../../../../../../resources/img/partners/localiza/localiza-banner-small.png';
import { PartnerDescriptionContainer, PartnerSectionBanner } from './styles';

export default function LocalizaSectionBanner() {
    return (
        <>
            <PartnerSectionBanner>
                <Image alt="banner Tribanco" src={localizaBannerImage} />
                <PartnerDescriptionContainer>
                    <h3 className="title">Com você, construindo</h3>
                    <h3 className="title">o <span className='highlighted'>futuro da mobilidade</span> sustentável</h3>
                    <p className="descriptionFirst">A Localiza sempre buscou por soluções verdes e agora traz esse benefício para seus colaboradores em um projeto inovador!</p>
                    <p className="descriptionSecond">Use energia limpa e renovável na sua casa ou apartamento, seja ele próprio ou alugado!</p>
                </PartnerDescriptionContainer>
            </PartnerSectionBanner>
        </>
    )
}