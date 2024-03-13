import formatPhoneNumber from "@/app/utils/formatters/phoneFormatter"
import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"

export default function AlmostThereBanner(props) {

    const user = props.userData
    const confirmationContact = formatPhoneNumber(user.phone);

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Estamos quase lá!</Typography>
                <Typography variant="subtitle1">A assinatura do contrato é feita de forma <span className="bold">100% digital</span>. Vamos juntos transformar o mundo em um lugar melhor!</Typography>
                <>
                    <Typography variant="subtitle1">Para assinar o contrato, esteja com o telefone <span className="highlightedVerificationInfo">{confirmationContact}</span> em mãos.</Typography>
                    <Typography variant="subtitle1">Insira o código de confirmação que enviaremos a você via SMS.</Typography>
                </>
            </ContentContainer>
        </BannerContainer>
    );
}








