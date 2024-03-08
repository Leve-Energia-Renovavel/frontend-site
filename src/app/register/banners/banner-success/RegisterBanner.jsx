"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { Typography } from "@mui/material";
import { BannerContainer, ContentContainer } from "./styles";

export default function RegisterBannerSuccess(props) {

    const user = useStoreUser().user

    const name = user.name;
    const fullName = name.split(" ");
    const firstName = fullName[0]

    const location = user.isCompany ? 'empresa' : 'residência'

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">{`Boas notícias${firstName && `, ${firstName}`}! 🎉`}</Typography>
                <Typography variant="subtitle1" className="boldSubtitle">A Leve já chegou na sua região!</Typography>
                <Typography variant="subtitle1" className="subtitle">Veja abaixo o resultado da economia de sua {location}</Typography>
            </ContentContainer>
        </BannerContainer>
    )
}