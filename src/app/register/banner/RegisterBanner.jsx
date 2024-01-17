
"use client"

import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"

export default function RegisterBanner(props) {

    const { name, type } = props.userData

    const fullName = name.split(" ");

    const userName = fullName[0] + " " + fullName[fullName.length - 1]

    const location = type == "cnpj" ? "empresa" : "residência"

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Boas notícias, {userName}! 🎉</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">A Leve já chegou na sua região!</Typography>

                <Typography variant="subtitle1" className="subtitle">Veja abaixo o resultado da economia de sua {location}</Typography>
            </ContentContainer>
        </BannerContainer>
    )
}