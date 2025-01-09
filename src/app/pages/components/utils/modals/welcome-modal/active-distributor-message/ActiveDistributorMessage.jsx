import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { ActiveDistributorMessageContainer as Container, DiscountBanner, DiscountValue } from "./styles";
export default function ActiveDistributorMessage() {
    return (
        <Container className="activeDistributorMessageContainer">
            <h6 className="title">Parabéns, você contratou a Leve!</h6>
            <p className="subtitle">Seus benefícios iniciam em até 60 dias.</p>
            <p className="descriptionPrimary">Agora, vamos validar suas informações e solicitar à sua distribuidora a inclusão do seu imóvel na lista de consumidores das nossas usinas.</p>
            <p className="descriptionPrimary">Fique de olhos nas atualizações no seu e-mail e Whastapp.</p>
            <p className="descriptionPrimary">Enquanto isso, complete seu cadastro e garanta o máximo de economia e de ajuda ao meio ambiente.</p>
            <DiscountBanner className="discountBanner">
                <CardGiftcardIcon className="icon" />
                <p className="discountText">Complete seu cadastro agora e resgate desconto extra na sua primeira fatura.</p>
                <DiscountValue className="discountValue">
                    <p className="discountValuePercentage">+5%</p>
                    <p className="discount">de desconto</p>
                </DiscountValue>
            </DiscountBanner>
        </Container>
    )
}