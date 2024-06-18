
"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { Button, Typography } from "@mui/material";
import { useRouter } from 'next/navigation';
import { BannerContainer, ButtonContainer, ContentContainer } from "./styles";

export default function RegisterBannerFailCost() {

    const router = useRouter()

    const store = useStoreUser()
    const isCompany = store.isCompany
    const location = isCompany ? 'empresa' : 'residência'

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Seu custo já é muito baixo.</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">Por ora, ainda não e possivel atender sua {location}</Typography>
                <Typography variant="subtitle1">Mas não se preocupe! Estamos trabalhando para expandir nossa operação e teremos novidades em breve.</Typography>
            </ContentContainer>
            <ButtonContainer>
                <Button
                    disableElevation={true}
                    onClick={() => router.back()}
                    className='backToMainPage'>Voltar para Tela Anterior</Button>
            </ButtonContainer>
        </BannerContainer>
    )
}