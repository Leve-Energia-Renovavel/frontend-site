"use client"

import { Button, Typography } from "@mui/material";
import { useParams, useRouter } from "next/navigation";
import { BannerContainer, ButtonContainer, ContentContainer } from "./styles";

export default function RegisterBannerFailRegion(props) {

    const router = useRouter()
    const params = useParams()

    const userData = props.userData

    const userType = params?.userType

    const name = userData.nome;
    const fullName = name.split(" ");

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">A Leve ainda não chegou</Typography>
                <Typography variant="body1" component="h1">na sua região 😞</Typography>
                <Typography variant="subtitle1">A sua região ainda não possui uma usina fotovoltáica nossa conectada à concessionária local para que possamos te atender e fornecer os créditos de energia.</Typography>
                <Typography variant="subtitle1" className="subtitle">Mas é bom saber desse interesse.</Typography>
                <Typography variant="subtitle1" className="subtitle">Vamos nos esforçar para te atender o mais breve possível.</Typography>
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