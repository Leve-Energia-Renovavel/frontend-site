"use client"

import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"
import { useParams, useSearchParams } from 'next/navigation';

export default function RegisterBannerSuccess(props) {

    const params = useParams()

    const userData = props.userData

    const userType = params?.userType

    const name = userData.nome;
    // const fullName = name.split(" ");
    // const userName = fullName[0] + " " + fullName[fullName.length - 1]
    const location = userType == 'cnpj' ? 'empresa' : 'residência'

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Boas notícias! 🎉</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">A Leve já chegou na sua região!</Typography>
                <Typography variant="subtitle1" className="subtitle">Veja abaixo o resultado da economia de sua {location}</Typography>
            </ContentContainer>
        </BannerContainer>
    )
}