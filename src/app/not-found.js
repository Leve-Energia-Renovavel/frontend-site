"use client"

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { BannerContainer, ContentContainer } from "./pages/components/banners/not-found-banner/styles";
import DefaultButton from "./pages/components/utils/buttons/DefaultButton";

export default function NotFound() {

    const router = useRouter()

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Página não encontrada... 😥</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">Se não é pra ser Leve, eu nem quero!</Typography>
                <Typography variant="subtitle1" className="subtitle">Não gaste energia à toa, clique no botão abaixo para voltar para a tela inicial. </Typography>
                <DefaultButton variant="contained" text={"Voltar para tela Inicial"} onClick={() => router.push("/")} />
            </ContentContainer>
        </BannerContainer>
    );
}
