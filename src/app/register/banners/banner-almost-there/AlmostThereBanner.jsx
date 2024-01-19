import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"

export default function AlmostThere(props) {

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
                <Typography variant="subtitle1" className="boldSubtitle">A assinatura do contrato é feita de forma 100% digital. Vamos juntos transformar o mundo em um lugar melhor!</Typography>
                {confirmationByEmail ? (
                    <>
                        <Typography variant="subtitle1" className="subtitle">Para assinar o contrato, esteja com acesso à conta do e-mail: {confirmationContact}.</Typography>
                        <Typography variant="subtitle1" className="subtitle">Insira o código de confirmação que enviaremos a você por e-mail. Caso não encontre o código na ”Caixa de Entrada” de sua conta, verifique se a mensagem não foi enviada para a ”Caixa de Spam”.</Typography>
                    </>
                ) : (
                    <>
                        <Typography variant="subtitle1" className="subtitle">Para assinar o contrato, esteja com o telefone {confirmationContact} em mãos.</Typography>
                        <Typography variant="subtitle1" className="subtitle">Insira o código de confirmação que enviaremos a você via SMS.</Typography>
                    </>
                )}
            </ContentContainer>
        </BannerContainer>
    );
}








