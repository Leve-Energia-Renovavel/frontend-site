
import { Typography } from "@mui/material";
import { BannerContainer, ConfettiContainer, ContentContainer } from "./styles";
import { useState } from "react";

export default function CongratulationsBanner(props) {

    const [isExploding, setIsExploding] = useState(true)

    return (
        <BannerContainer>
            {isExploding && <ConfettiContainer duration={3000} particleCount={100} force={0.8} onComplete={() => setIsExploding(false)} />}
            <ContentContainer>
                <Typography variant="body1" component="h1">Parabéns! 🎉</Typography>
                <Typography variant="subtitle1">Pronto! As assinaturas foram feitas com sucesso.</Typography>
                <Typography variant="subtitle1">Agora é só desfrutar da economia e dos benefícios de ser <span className="bold">Leve</span>.</Typography>
                <Typography variant="subtitle1">O seu usuário e sua senha de acesso do <span className="bold">Portal Leve</span> foram enviados para o seu e-mail de cadastro, e você poderá alterá-la sempre que precisar.</Typography>
                <Typography variant="subtitle1">Acesse a sua mais nova conta Leve, clicando no botão abaixo.</Typography>
            </ContentContainer>
        </BannerContainer>
    );
}














