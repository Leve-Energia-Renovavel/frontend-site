
"use client"

import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "../banner-success/styles"

export default function RegisterBannerFailCost(props) {

    const { name, type } = props.userData

    const fullName = name.split(" ");

    const userName = fullName[0] + " " + fullName[fullName.length - 1]

    const location = type == "cnpj" ? "empresa" : "residência"

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Seu custo já é muito baixo.</Typography>
                {/* <Typography variant="subtitle1" className="boldSubtitle">A Leve já chegou na sua região!</Typography> */}
                {/* <Typography variant="subtitle1" className="subtitle">Veja abaixo o resultado da economia de sua {location}</Typography> */}
            </ContentContainer>
        </BannerContainer>
    )
}