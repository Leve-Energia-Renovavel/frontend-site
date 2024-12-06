import { HOME_FORM_ID } from "@/app/pages/enums/globalEnums";
import { handleScrollToId } from "@/app/utils/browser/BrowserUtils";
import { BenefitsBox, BenefitsContainer, ButtonContainer, NewHomeBenefitsContainer as Container, HomeBenefitsCTAButton } from "./styles";

export default function NewHomeBenefits() {
    return (
        <Container className="leveHomeBenefitsContainer">
            <h2 className="leveHomeBenefitsTitle">Sua conta de luz mais Leve</h2>
            <h3 className="leveHomeBenefitsSubtitle">Benefícios que você só encontra aqui</h3>

            <BenefitsContainer>
                <BenefitsBox>
                    <p className="benefitTitle">Isenção da bandeira tarifária</p>
                    <p className="benefitSubtitle">Só com a Leve Energia você não paga pelo adicional de bandeira tarifária em períodos de seca ou crises</p>
                </BenefitsBox>
                <BenefitsBox>
                    <p className="benefitTitle">Benefício empresarial</p>
                    <p className="benefitSubtitle">Desconto especial e mais benefícios para colaboradores de empresas que possuem nosso plano de benefícios empresarial</p>
                </BenefitsBox>

            </BenefitsContainer>

            <ButtonContainer className="homeBenefitsButtonContainer">
                <HomeBenefitsCTAButton onClick={() => handleScrollToId(HOME_FORM_ID)}><span>Calcular meu desconto</span></HomeBenefitsCTAButton>
            </ButtonContainer>
        </Container>
    )
}