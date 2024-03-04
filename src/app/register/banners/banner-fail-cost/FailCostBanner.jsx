
"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { Button, Typography } from "@mui/material";
import { useParams, useRouter } from 'next/navigation';
import { BannerContainer, ButtonContainer, ContentContainer } from "./styles";

export default function RegisterBannerFailCost() {

    const router = useRouter()
    const params = useParams()

    const store = useStoreUser()
    const isCompany = store.isCompany
    const location = isCompany ? 'empresa' : 'residência'

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Seu custo já é muito baixo.</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">Por ora, ainda nao e possivel atender sua {location}</Typography>
                <Typography variant="subtitle1" className="subtitle">É importante questionar o quanto a determinação clara de objetivos agrega valor ao estabelecimento do orçamento setorial.</Typography>
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