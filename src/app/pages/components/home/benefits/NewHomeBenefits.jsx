import { HOME_FORM_ID } from '@/app/pages/enums/globalEnums';
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { BenefitsBox, BenefitsBoxButton, BenefitsBoxButtonIcon, BenefitsContainer, NewHomeBenefitsContainer as Container } from "./styles";

import Image from 'next/image';
import iconFlag from '../../../../../resources/icons/large/leve-icon-tax-flag-banner-large.png';
export default function NewHomeBenefits() {
    return (
        <Container className="leveHomeBenefitsContainer">
            <BenefitsContainer>
                <Image alt="Ícone de Isenção da Bandeira Tarifária" src={iconFlag} className='icon' />
                <BenefitsBox className='leveHomeBenefitTaxFlagBanner'>
                    <p className="benefitTitle">Isenção da Bandeira Tarifária</p>
                    <p className="benefitSubtitle">Você não precisa pagar pelos custos extras das temidas bandeiras tarifárias amarela, vermelha e de escassez hídrica nos períodos que elas estiverem ativas.</p>

                    <BenefitsBoxButton className='leveHomeBenefitBoxButton' onClick={() => handleScrollToId(HOME_FORM_ID)}>
                        <p className="benefitButtonTitle">Quero economizar</p>
                        <BenefitsBoxButtonIcon />
                    </BenefitsBoxButton>

                </BenefitsBox>
            </BenefitsContainer>

        </Container>
    )
}