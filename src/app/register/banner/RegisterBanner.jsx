
"use client"

import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"

export default function RegisterBanner(props) {

    const { name, type } = props.userData

    const location = type == "cnpj" ? "empresa" : "residência"

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Boas notícias, {name}!</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">A Leve já chegou na sua região!</Typography>

                <Typography variant="subtitle1" className="subtitle">Veja abaixo o resultado da economia de sua {location}</Typography>
            </ContentContainer>
        </BannerContainer>
    )
}