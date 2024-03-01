"use client"

import { Typography } from "@mui/material"
import { BannerContainer, ContentContainer } from "./styles"
import { useParams, useSearchParams } from 'next/navigation';
import { useStoreUser } from "@/app/hooks/useStore";

export default function RegisterBannerSuccess(props) {

    const params = useParams()
    const store = useStoreUser()

    const isCompany = store.isCompany

    const name = store.username;

    const fullName = name.split(" ");
    const firstName = fullName[0]

    const location = isCompany ? 'empresa' : 'residência'

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">Boas notícias, {firstName}! 🎉</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">A Leve já chegou na sua região!</Typography>
                <Typography variant="subtitle1" className="subtitle">Veja abaixo o resultado da economia de sua {location}</Typography>
            </ContentContainer>
        </BannerContainer>
    )
}