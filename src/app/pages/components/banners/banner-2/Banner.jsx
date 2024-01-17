
"use client"

import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"

export default function Banner() {

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Com a Leve, </Typography>
                <Typography variant="body1" component="h1">tudo é mais fácil</Typography>
                <Typography variant="subtitle1" className="subtitle">Em apenas 3 passos, você se cadastra e começa a economizar na sua conta de luz com energia limpa e renovável. Simples, rápido, fácil, sem investimento e sem dor de cabeça.</Typography>

                <Typography variant="subtitle1" className="boldSubtitle">Esse é o jeito Leve, como tudo deve ser.</Typography>
            </ContentContainer>
        </BannerContainer>
    )
}