import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { ActiveDistributorMessageContainer as Container, DiscountBanner, DiscountValue, HighlightBox, HighlightBoxContent } from "./styles";
export default function ActiveDistributorMessage() {
    return (
        <Container className="activeDistributorMessageContainer">
            <h6 className="title">Parabéns, você contratou a Leve!</h6>
            <p className="subtitle">Seus benefícios iniciam em até 60 dias.</p>
            <p className="descriptionPrimary">Agora, vamos validar suas informações e solicitar que sua distribuidora faça a inclusão do seu imóvel na lista de  consumidora das nossas usinas. Fique de olhos nas atualizações que enviaremos no seu Whastapp e e-mail.</p>

            <HighlightBox className="highlightBox">
                <BoltOutlinedIcon className='icon' />
                <HighlightBoxContent className="highlightBoxContent">
                    <p className='title'>Maximize seus benefícios</p>
                    <p className='subtitle'>Complete seu cadastro para receber desconto sobre o máximo do seu consumo de energia todo mês.</p>
                </HighlightBoxContent>
            </HighlightBox>

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