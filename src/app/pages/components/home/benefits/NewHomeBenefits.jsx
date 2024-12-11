import { HOME_FORM_ID } from '@/app/pages/enums/globalEnums';
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import { BenefitsBox, BenefitsBoxButton, BenefitsBoxButtonIcon, BenefitsContainer, NewHomeBenefitsContainer as Container } from "./styles";
export default function NewHomeBenefits() {
    return (
        <Container className="leveHomeBenefitsContainer">
            <BenefitsContainer>
                <NotInterestedIcon className="icon" />
                <BenefitsBox>
                    <p className="benefitTitle">Isenção da Bandeira Tarifária</p>
                    <p className="benefitSubtitle">Você não precisa pagar pelos custos extras das temidas bandeiras tarifárias amarela, vermelha e de escassez hídrica nos períodos que elas estiverem ativas.</p>

                    <BenefitsBoxButton onClick={() => handleScrollToId(HOME_FORM_ID)}>
                        <p className="benefitButtonTitle">Quero economizar</p>
                        <BenefitsBoxButtonIcon />
                    </BenefitsBoxButton>

                </BenefitsBox>
            </BenefitsContainer>

        </Container>
    )
}