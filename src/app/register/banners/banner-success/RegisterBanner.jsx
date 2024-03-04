"use client"

import { useStoreUser } from "@/app/hooks/useStore";
import { Typography } from "@mui/material";
import { useParams } from 'next/navigation';
import { BannerContainer, ContentContainer } from "./styles";

export default function RegisterBannerSuccess(props) {

    const params = useParams()
    const store = useStoreUser()

    const isCompany = store.isCompany

    const name = store.user.username;
    const fullName = name.split(" ");
    const firstName = fullName[0]

    const location = isCompany ? 'empresa' : 'residência'

    return (
        <BannerContainer>
            <ContentContainer>
                <Typography variant="body1" component="h1">{`Boas notícias${firstName && `, ${firstName}`}! 🎉`}</Typography>
                {/* <Typography variant="body1" component="h1">{`Boas notícias! 🎉`}</Typography> */}
                <Typography variant="subtitle1" className="boldSubtitle">A Leve já chegou na sua região!</Typography>
                <Typography variant="subtitle1" className="subtitle">Veja abaixo o resultado da economia de sua {location}</Typography>
            </ContentContainer>
        </BannerContainer>
    )
}