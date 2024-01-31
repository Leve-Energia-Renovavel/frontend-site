import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"

export default function AlmostThereBanner(props) {

    const confirmationByEmail = props.confirmationByEmail

    var confirmationContact = null

    if (confirmationByEmail) {
        confirmationContact = props?.userData?.user?.email
    } else {
        confirmationContact = props?.userData?.company?.companyPhone
    }

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Estamos quase lá!</Typography>
                <Typography variant="subtitle1">A assinatura do contrato é feita de forma <span className="bold">100% digital</span>. Vamos juntos transformar o mundo em um lugar melhor!</Typography>
                {confirmationByEmail ? (
                    <>
                        <Typography variant="subtitle1">Para assinar o contrato, esteja com acesso à conta do e-mail: <span className="highlightedVerificationInfo">{confirmationContact}</span>.</Typography>
                        <Typography variant="subtitle1">Insira o código de confirmação que enviaremos a você por e-mail.</Typography>
                        <Typography variant="subtitle1">Caso não encontre o código na ”Caixa de Entrada” de sua conta, verifique se a mensagem não foi enviada para a ”Caixa de Spam”.</Typography>
                    </>
                ) : (
                    <>
                        <Typography variant="subtitle1">Para assinar o contrato, esteja com o telefone <span className="highlightedVerificationInfo">{confirmationContact}</span> em mãos.</Typography>
                        <Typography variant="subtitle1">Insira o código de confirmação que enviaremos a você via SMS.</Typography>
                    </>
                )}
            </ContentContainer>
        </BannerContainer>
    );
}








