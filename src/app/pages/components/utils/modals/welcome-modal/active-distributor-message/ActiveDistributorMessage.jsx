import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { ActiveDistributorMessageContainer as Container, DiscountBanner, DiscountValue, HighlightBox, HighlightBoxContent } from "./styles";
import lightningIcon from '../../../../../../../resources/icons/large/leve-icon-lightning-large.svg'
import Image from 'next/image';

export default function ActiveDistributorMessage() {
    return (
        <Container className="activeDistributorMessageContainer">
            <h6 className="title">Parabéns, você contratou a Leve!</h6>
            <p className="subtitle">Seus benefícios iniciam em até 60 dias.</p>
            <p className="descriptionPrimary">Agora, vamos validar os seus dados e solicitar o cadastro do seu imóvel como consumidor das nossas usinas para a sua distribuidora, que deverá emitir a sua primeira conta de luz com nossos créditos de energia em 60 dias.</p>
            <p className="descriptionPrimary">Nesse período, enviaremos mensagens com atualizações no seu Whatsapp e e-mail. Fique de olho!</p>

            <HighlightBox className="highlightBox">
                <BoltOutlinedIcon className='icon' />
                <HighlightBoxContent className="highlightBoxContent">
                    <p className='highlightTitle'>Maximize seus benefícios</p>
                    <p className='highlightSubtitle'>Complete seu cadastro para receber desconto sobre o máximo do seu consumo de energia todo mês.</p>
                </HighlightBoxContent>
            </HighlightBox>

            <DiscountBanner className="discountBanner">
                <CardGiftcardIcon className="icon" />
                <p className="discountText">Completando seu cadastro agora, você garante desconto extra na sua primeira fatura </p>
                <DiscountValue className="discountValue">
                    <p className="discountValuePercentage">+5%</p>
                    <p className="discount">de desconto</p>
                </DiscountValue>
            </DiscountBanner>
        </Container>
    )
}