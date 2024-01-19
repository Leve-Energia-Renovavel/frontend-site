import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"

export default function CongratulationsBanner(props) {

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Parabéns! 🎉</Typography>
                <Typography variant="subtitle1" className="subtitle">Pronto! As assinaturas foram feitas com sucesso.</Typography>
                <Typography variant="subtitle1" className="subtitle">Agora é só desfrutar da economia e dos benefícios de ser Leve.</Typography>
                <Typography variant="subtitle1" className="subtitle">O seu usuário e sua senha de acesso do Portal Leve foram enviados para o seu e-mail de cadastro, e você poderá alterá-la sempre que precisar.</Typography>
                <Typography variant="subtitle1" className="subtitle">Acesse a sua mais nova conta Leve, clicando no botão abaixo.</Typography>
            </ContentContainer>
        </BannerContainer>
    );
}














