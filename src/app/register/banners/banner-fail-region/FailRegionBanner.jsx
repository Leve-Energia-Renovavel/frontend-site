"use client"

import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { BannerContainer, ButtonContainer, ContentContainer } from "./styles";

export default function RegisterBannerFailRegion(props) {

    const router = useRouter()

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">A Leve ainda não chegou</Typography>
                <Typography variant="body1" component="h1">na sua região 😞</Typography>
                <Typography variant="subtitle1">Mas não se preocupe, estamos em expansão!</Typography>
                <Typography variant="subtitle1" className="subtitle"> Pra nós é muito importante sabermos do seu interesse em utilizar uma energia mais limpa e sustentável e ainda economizar uns trocados, é claro!</Typography>
                <Typography variant="subtitle1" className="subtitle">Voltamos a nos falar em breve, combinado?</Typography>
            </ContentContainer>
            <ButtonContainer>
                <Button
                    disableElevation={true}
                    onClick={() => router.push("/")}
                    className='backToMainPage'>Voltar para Tela Inicial</Button>
            </ButtonContainer>
        </BannerContainer>
    )
}