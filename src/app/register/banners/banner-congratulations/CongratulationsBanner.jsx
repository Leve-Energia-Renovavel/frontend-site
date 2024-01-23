
import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"
import ConfettiExplosion from "react-confetti-explosion";

export default function CongratulationsBanner(props) {

    return (
        <BannerContainer>
            <ConfettiExplosion style={{ margin: '0 auto' }} duration={3000} particleCount={100} force={0.8} width={1500} />
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














